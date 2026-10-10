"use client";

import { useState, useEffect, useMemo } from "react";
import {
    FaShippingFast,
    FaBoxOpen,
    FaBox,
    FaClock,
    FaGlobe,
    FaMapMarkerAlt,
    FaTruck,
    FaWhatsapp,
    FaRegEnvelope,
    FaPhoneAlt
} from "react-icons/fa";
import { usePolicy, useSiteInfo, getPolicySections, splitBullet } from "@/context/WebsiteDataContext";

// Icon is chosen from the section heading; order matters (first match wins)
const ICON_RULES = [
    [/intro/i, FaShippingFast],
    [/process|order/i, FaBoxOpen],
    [/packag/i, FaBox],
    [/deliver|timeline/i, FaClock],
    [/international|customs/i, FaGlobe],
    [/incorrect|address|information/i, FaMapMarkerAlt],
];
const pickIcon = (title) => ICON_RULES.find(([re]) => re.test(title))?.[1] ?? FaTruck;

function formatDate(value) {
    const d = new Date(value);
    return Number.isNaN(d.getTime())
        ? ""
        : d.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

function StatusPanel({ loading, error, email }) {
    return (
        <section className="relative w-full py-16 sm:py-20 bg-background">
            <div className="max-w-3xl mx-auto px-6">
                {loading && !error ? (
                    <div className="space-y-6 sm:space-y-8" aria-busy="true" aria-label="Loading shipping policy">
                        {[0, 1, 2].map((i) => (
                            <div
                                key={i}
                                className="bg-surface rounded-3xl p-7 sm:p-9 space-y-5 border border-forest/5 shadow-sm animate-pulse"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-sage/30" />
                                    <div className="h-6 w-1/2 rounded-full bg-sage/20" />
                                </div>
                                <div className="space-y-3">
                                    <div className="h-4 w-full rounded-full bg-sage/15" />
                                    <div className="h-4 w-11/12 rounded-full bg-sage/15" />
                                    <div className="h-4 w-2/3 rounded-full bg-sage/15" />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="bg-surface rounded-3xl p-8 sm:p-12 text-center space-y-4 border border-forest/5 shadow-sm">
                        <div className="w-14 h-14 rounded-full bg-sage flex items-center justify-center mx-auto">
                            <FaTruck className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-forest tracking-tight font-serif">
                            {error ? "We couldn't load this page" : "Shipping details aren't available yet"}
                        </h3>
                        <p className="text-foreground/80 text-sm sm:text-base leading-relaxed">
                            {error
                                ? "Please check your connection and refresh the page."
                                : "Our team is updating this page. Please check back shortly."}
                            {email ? " For delivery questions, you can reach us at " : ""}
                            {email && (
                                <a href={`mailto:${email}`} className="text-brick font-semibold hover:underline">
                                    {email}
                                </a>
                            )}
                            {email ? "." : ""}
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}

export default function ShippingClient() {
    const { policy, loading, error } = usePolicy("Shipping Policy");
    const { email, phoneDisplay, whatsappLink } = useSiteInfo();
    const [activeId, setActiveId] = useState(null);

    const sections = useMemo(() => getPolicySections(policy), [policy]);
    const activeSection = activeId ?? sections[0]?.id ?? null;
    const updatedOn = policy?.updatedAt ? formatDate(policy.updatedAt) : "";

    useEffect(() => {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-revealed");
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: "0px 0px -10% 0px",
            threshold: 0.05
        });

        const activeSectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && entry.target.id) {
                    setActiveId(entry.target.id);
                }
            });
        }, {
            rootMargin: "-20% 0px -60% 0px",
            threshold: 0.1
        });

        const animatedElements = document.querySelectorAll(
            ".reveal-fade-up, .reveal-fade-left, .reveal-fade-right, .shipping-section"
        );
        animatedElements.forEach((el) => revealObserver.observe(el));

        const shippingSections = document.querySelectorAll(".shipping-section");
        shippingSections.forEach((el) => activeSectionObserver.observe(el));

        return () => {
            revealObserver.disconnect();
            activeSectionObserver.disconnect();
        };
        // Re-run when the backend data (and therefore the rendered sections) changes
    }, [sections]);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "center" });
            setActiveId(id);
        }
    };

    if (sections.length === 0) {
        return <StatusPanel loading={loading} error={error} email={email} />;
    }

    const hasContact = Boolean(email || phoneDisplay || whatsappLink);

    return (
        <section className="relative w-full py-16 sm:py-20 bg-background">
            <style dangerouslySetInnerHTML={{
                __html: `
                .reveal-fade-up {
                    opacity: 0;
                    transform: translateY(40px);
                    transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .reveal-fade-left {
                    opacity: 0;
                    transform: translateX(-60px);
                    transition: opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .reveal-fade-right {
                    opacity: 0;
                    transform: translateX(60px);
                    transition: opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .shipping-section {
                    opacity: 0.35;
                    transform: translateY(15px);
                    transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .reveal-fade-up.is-revealed,
                .reveal-fade-left.is-revealed,
                .reveal-fade-right.is-revealed,
                .shipping-section.is-revealed {
                    opacity: 1;
                    transform: none !important;
                }
            `}} />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

                    {/* LEFT COLUMN: Navigation & Delivery Support Card */}
                    <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6 reveal-fade-left">
                        {/* Table of Contents Container */}
                        <div className="bg-surface rounded-3xl p-6 sm:p-7 shadow-sm border border-forest/10">
                            <h2 className="text-xs font-black tracking-widest text-foreground/60 uppercase mb-5">
                                Shipping Outline
                            </h2>
                            <nav className="flex flex-col gap-2.5">
                                {sections.map((section, index) => {
                                    const isActive = activeSection === section.id;
                                    return (
                                        <button
                                            key={section.id}
                                            onClick={() => scrollToSection(section.id)}
                                            className={`w-full text-left px-5 py-3.5 rounded-2xl font-medium text-sm flex items-center justify-between transition-all duration-300 group cursor-pointer ${
                                                isActive
                                                    ? "bg-forest text-surface shadow-sm"
                                                    : "bg-[#f1ebdc]/40 hover:bg-[#f1ebdc] text-[#211f1a] border border-forest/5"
                                            }`}
                                        >
                                            <span className="truncate pr-2 font-semibold">{`${index + 1}. ${section.title}`}</span>
                                            <span className={`transition-transform duration-300 shrink-0 ${
                                                isActive ? "translate-x-1 text-surface" : "group-hover:translate-x-1 text-[#211f1a]/40"
                                            }`}>
                                                →
                                            </span>
                                        </button>
                                    );
                                })}
                            </nav>
                            {updatedOn && (
                                <p className="mt-5 pt-4 border-t border-forest/10 text-xs font-semibold text-foreground/50">
                                    Last updated {updatedOn}
                                </p>
                            )}
                        </div>

                        {/* Dark Forest Delivery Support Card */}
                        <div className="bg-forest rounded-3xl p-7 text-surface relative overflow-hidden shadow-sm">
                            <div className="relative z-10 space-y-4">
                                <h3 className="text-lg sm:text-xl font-bold font-serif leading-tight text-surface">
                                    Questions About Your Delivery?
                                </h3>
                                <p className="text-surface/80 text-xs sm:text-sm leading-relaxed">
                                    Our support team is happy to help with dispatch timelines, order tracking, and any delivery concerns.
                                </p>
                                {hasContact && (
                                    <div className="pt-2 flex flex-col gap-3">
                                        {email && (
                                            <div className="flex items-center gap-3">
                                                <FaRegEnvelope className="w-4 h-4 text-surface" />
                                                <a href={`mailto:${email}`} className="text-surface font-semibold text-xs sm:text-sm hover:underline">
                                                    {email}
                                                </a>
                                            </div>
                                        )}
                                        {phoneDisplay && (
                                            <div className="flex items-center gap-3">
                                                <FaPhoneAlt className="w-4 h-4 text-surface" />
                                                <span className="text-surface font-semibold text-xs sm:text-sm">
                                                    {phoneDisplay}
                                                </span>
                                            </div>
                                        )}
                                        {whatsappLink && (
                                            <a
                                                href={whatsappLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mt-1 w-full flex items-center justify-center gap-2 bg-surface/10 hover:bg-surface/20 border border-surface/15 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-surface transition-all duration-300"
                                            >
                                                <FaWhatsapp className="w-4 h-4" /> Chat on WhatsApp
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Light Surface Content Cards */}
                    <div className="lg:col-span-8 space-y-6 sm:space-y-8 reveal-fade-right">
                        {sections.map((section, sectionIndex) => {
                            const Icon = pickIcon(section.title);
                            return (
                                <div
                                    key={section.id}
                                    id={section.id}
                                    className="shipping-section bg-surface rounded-3xl p-7 sm:p-9 space-y-5 scroll-mt-28 border border-forest/5 shadow-sm transition-all duration-300"
                                >
                                    {/* Header with Sage Green Icon Badge */}
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-sage flex items-center justify-center shrink-0">
                                            <Icon className="w-5 h-5 text-white" />
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-bold text-forest tracking-tight font-serif">
                                            {`${sectionIndex + 1}. ${section.title}`}
                                        </h3>
                                    </div>

                                    {/* Body Content */}
                                    <div className="space-y-3.5 text-foreground/80 text-sm sm:text-base leading-relaxed font-normal">
                                        {section.blocks.map((block, index) => {
                                            if (block.type === "li") {
                                                const { title, body } = splitBullet(block.text);
                                                return (
                                                    <div key={index} className="flex gap-3 pl-1 items-start">
                                                        <span className="text-forest text-base leading-snug shrink-0">•</span>
                                                        <span>
                                                            {title && <strong className="text-foreground font-semibold">{title}:</strong>} {body}
                                                        </span>
                                                    </div>
                                                );
                                            }
                                            return (
                                                <p key={index}>
                                                    {block.text}
                                                </p>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}