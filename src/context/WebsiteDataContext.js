"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const API_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/fullweb/public?domain=Drymato`;
const CACHE_KEY = "drymato:website-data";
// const CACHE_TTL = 10 * 60 * 1000; // 10 minutes

const WebsiteDataContext = createContext(null);

const REFRESH_INTERVAL = 5 * 60 * 1000; // background refresh while tab is open
const MIN_GAP = 30 * 1000;              // don't refetch on focus more than every 30s

export function WebsiteDataProvider({ children }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let controller = null;
        let lastFetch = 0;

        // Instant paint from cache (read inside the effect to avoid hydration mismatch)
        try {
            const raw = sessionStorage.getItem(CACHE_KEY);
            if (raw) {
                setData(JSON.parse(raw).data);
                setLoading(false);
            }
        } catch { }

        const load = async () => {
            controller?.abort();
            controller = new AbortController();
            const current = controller;
            const timeout = setTimeout(() => current.abort(), 10000);
            try {
                const res = await fetch(API_URL, { signal: current.signal });
                if (!res.ok) throw new Error(`Request failed: ${res.status}`);
                const json = await res.json();
                if (!json.success) throw new Error(json.message || "API error");
                setData(json.data);
                setError(null);
                lastFetch = Date.now();
                try {
                    sessionStorage.setItem(
                        CACHE_KEY,
                        JSON.stringify({ data: json.data, ts: lastFetch })
                    );
                } catch { }
            } catch (err) {
                if (err.name !== "AbortError") setError(err);
            } finally {
                clearTimeout(timeout);
                setLoading(false);
            }
        };

        const onVisible = () => {
            if (document.visibilityState === "visible" && Date.now() - lastFetch > MIN_GAP) {
                load();
            }
        };

        load();
        const interval = setInterval(() => {
            if (document.visibilityState === "visible") load();
        }, REFRESH_INTERVAL);
        document.addEventListener("visibilitychange", onVisible);

        return () => {
            clearInterval(interval);
            document.removeEventListener("visibilitychange", onVisible);
            controller?.abort();
        };
    }, []);

    const value = useMemo(() => ({ data, loading, error }), [data, loading, error]);

    return (
        <WebsiteDataContext.Provider value={value}>
            {children}
        </WebsiteDataContext.Provider>
    );
}

/* ---------- Hooks: every page reads from the same single fetch ---------- */

export function useWebsiteData() {
    const ctx = useContext(WebsiteDataContext);
    if (!ctx) throw new Error("useWebsiteData must be used inside WebsiteDataProvider");
    return ctx;
}

// Policy types: "Terms & Condition", "Privacy Policy", "Shipping Policy", "FAQS"
// `type` can be an exact string or a RegExp (used when the exact admin-panel name isn't fixed)
export function usePolicy(type) {
    const { data, loading, error } = useWebsiteData();
    const list = Array.isArray(data?.policies) ? data.policies : [];
    const policy =
        list.find((p) =>
            type instanceof RegExp ? type.test(p?.type ?? "") : p?.type === type
        ) ?? null;
    return { policy, loading, error };
}

export function useSiteInfo() {
    const { data, loading } = useWebsiteData();
    const w = data?.website;

    const clean = (v) => String(v ?? "").replace(/\D/g, "");
    const withCode = (d) => (d.length === 10 ? `91${d}` : d);
    const phoneDigits = clean(w?.customerSupportNumber);
    const waDigits = clean(w?.whatsappNumber);

    return {
        loading,
        logo: w?.logo?.url ?? null,
        description: w?.websiteDescription ?? "",
        email: w?.supportEmail ?? "",
        phone: w?.customerSupportNumber ?? "",
        phoneDisplay: phoneDigits
            ? phoneDigits.length === 10
                ? `+91 ${phoneDigits}`
                : `+${phoneDigits}`
            : "",
        phoneTel: phoneDigits ? `+${withCode(phoneDigits)}` : "",
        whatsapp: w?.whatsappNumber ?? "",
        whatsappLink: waDigits ? `https://wa.me/${withCode(waDigits)}` : "",
        supportTime: w?.supportTime ?? "",
        address: w?.businessAddress ?? "",
        // only socials that actually have a URL
        socials: Object.entries(w?.socialLinks ?? {}).filter(([, url]) => url),
    };
}

export function useCategories() {
    const { data, loading } = useWebsiteData();
    const categories = useMemo(
        () =>
            (data?.categories ?? [])
                .map((c) => ({
                    ...c,
                    subcategories: c.subcategories.filter((s) => !s.isDeleted),
                }))
                .filter((c) => c.subcategories.length > 0),
        [data]
    );
    return { categories, loading };
}

export function useMarquees() {
    const { data } = useWebsiteData();
    return useMemo(() => {
        const now = Date.now();
        return (data?.marquees ?? []).filter(
            (m) =>
                m.status === "active" &&
                now >= new Date(m.start).getTime() &&
                now <= new Date(m.end).getTime()
        );
    }, [data]);
}

/* ---------- Text helpers for policy content ---------- */

// The API returns "&amp;" in some keys/values
export const decodeText = (s = "") =>
    s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">");

// Splits a section string into [{ type: "p" | "li", text }]
export function parseSection(text = "") {
    return decodeText(text)
        .split("\n")
        .map((l) => l.trim())
        .filter(Boolean)
        .map((l) =>
            l.startsWith("•")
                ? { type: "li", text: l.replace(/^•\s*/, "") }
                : { type: "p", text: l }
        );
}


// Turns a policy into an ordered, safe list of sections (never throws on bad data)
export function getPolicySections(policy) {
    const raw = policy?.sections;
    if (!raw || typeof raw !== "object") return [];
    return Object.entries(raw)
        .map(([heading, text], index) => {
            const title = decodeText(String(heading)).trim();
            const blocks = parseSection(typeof text === "string" ? text : "");
            const slug = title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/(^-|-$)/g, "");
            return { id: `section-${index}${slug ? `-${slug}` : ""}`, title, blocks };
        })
        .filter((s) => s.title && s.blocks.length > 0);
}

// "Title: body" -> bold title + body. Lines without a short title stay plain text.
export function splitBullet(text = "") {
    const i = text.indexOf(": ");
    return i > 0 && i <= 60
        ? { title: text.slice(0, i), body: text.slice(i + 2) }
        : { title: "", body: text };
}