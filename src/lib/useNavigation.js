"use client";

import { useEffect, useState } from "react";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const STORE_DOMAIN = "Drymato";

// If the backend slug differs from the slugified name, change ONLY this function
const slugify = (s) =>
    String(s).toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

export const getSubcategoryHref = (sub) => `/product/${slugify(sub.name)}`;
export const getCategoryHref = (cat) => `/product?category=${encodeURIComponent(cat.name)}`;

const normalize = (json) =>
    (json?.data?.categories || [])
        .filter((c) => c && !c.isDeleted)
        .map((c) => ({
            key: c._id,
            label: c.name,
            href: getCategoryHref(c),
            // childCategories intentionally ignored
            items: (c.subcategories || [])
                .filter((s) => s && !s.isDeleted)
                .map((s) => ({ key: s._id, name: s.name, href: getSubcategoryHref(s) })),
        }));

// module-level cache so the navbar doesn't refetch on every route change
let cache = null;
let inflight = null;

const loadNavigation = () => {
    if (cache) return Promise.resolve(cache);
    if (!inflight) {
        inflight = fetch(`${API_BASE_URL}/navigation/public/${STORE_DOMAIN}`)
            .then((res) => {
                if (!res.ok) throw new Error(`Request failed (${res.status})`);
                return res.json();
            })
            .then((json) => {
                if (json?.success === false) throw new Error(json?.message || "Request failed");
                cache = normalize(json);
                return cache;
            })
            .finally(() => {
                inflight = null;
            });
    }
    return inflight;
};

export default function useNavigation() {
    const [categories, setCategories] = useState(cache || []);
    const [loading, setLoading] = useState(!cache);

    useEffect(() => {
        if (cache) return;
        let alive = true;
        loadNavigation()
            .then((list) => alive && setCategories(list))
            .catch(() => alive && setCategories([]))
            .finally(() => alive && setLoading(false));
        return () => {
            alive = false;
        };
    }, []);

    return { categories, loading };
}