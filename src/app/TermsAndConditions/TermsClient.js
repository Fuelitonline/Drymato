// "use client";

// import { useState, useEffect } from "react";
// import { 
//     FaFileContract, 
//     FaUtensils, 
//     FaWhatsapp, 
//     FaTruck, 
//     FaUndoAlt, 
//     FaAward, 
//     FaBalanceScale, 
//     FaRegEnvelope, 
//     FaPhoneAlt 
// } from "react-icons/fa";

// const TERMS_SECTIONS = [
//     {
//         id: "acceptance",
//         title: "1. Acceptance of Terms",
//         icon: <FaFileContract className="w-5 h-5 text-white" />,
//         content: [
//             "Welcome to Drymato. By accessing our website, purchasing our premium gourmet sun-dried tomato jars, or communicating with us via WhatsApp, you agree to comply with and be bound by these Terms and Conditions.",
//             "These terms apply to all visitors, buyers, and account interactions across Drymato platforms and verified service channels."
//         ]
//     },
//     {
//         id: "products",
//         title: "2. Products & Specifications",
//         icon: <FaUtensils className="w-5 h-5 text-white" />,
//         content: [
//             "Our classic jars, olive oil infused blends, sunflower oil marinated jars, and specialty seasoning powders are prepared using traditional sun-drying and small-batch curing techniques.",
//             "• Packaging & Sizing: Jars are offered in small and large size options. Visual depictions online match our production standards closely, though minor jar label design variations may occur.",
//             "• Pricing Policy: Prices for individual gourmet jars, gift boxes, and wholesale structures are specified in INR and are subject to adjustment based on seasonal harvest availability."
//         ]
//     },
//     {
//         id: "whatsapp-checkout",
//         title: "3. WhatsApp Checkout & Orders",
//         icon: <FaWhatsapp className="w-5 h-5 text-white" />,
//         content: [
//             "To deliver a personalized concierge shopping experience, our website order flows connect directly with our official WhatsApp customer support line.",
//             "• Direct Messaging: Selecting 'Order Now' forwards your selected jar sizes and quantities to our support team to confirm delivery details and payment options.",
//             "• Order Finalization: Orders are strictly confirmed and queued for shipping once payment verification is completed."
//         ]
//     },
//     {
//         id: "shipping",
//         title: "4. Shipping & Delivery",
//         icon: <FaTruck className="w-5 h-5 text-white" />,
//         content: [
//             "To ensure jar integrity, all orders are packed using shock-resistant protective insulation to safeguard our glass jars during transit.",
//             "• Processing Timeline: Standard orders are processed within 2–3 business days. Custom bulk orders or holiday hampers may require extra fulfillment time.",
//             "• Courier Deliveries: While we ship through trusted logistics partners, Drymato is not liable for minor courier transit delays beyond our control."
//         ]
//     },
//     {
//         id: "refunds",
//         title: "5. Refunds & Damaged Jars",
//         icon: <FaUndoAlt className="w-5 h-5 text-white" />,
//         content: [
//             "As Drymato offers handcrafted food items, we cannot accept returns or exchanges for opened or consumed products due to safety protocols.",
//             "• Transit Damage Claims: If your package arrives broken, leaking, or with an unsealed jar lid, notify our team within 24 hours of delivery with photos or video proof.",
//             "• Replacement Guarantee: Upon verification, we will promptly dispatch a replacement free of charge or issue a refund for the affected item."
//         ]
//     },
//     {
//         id: "copyright",
//         title: "6. Intellectual Property",
//         icon: <FaAward className="w-5 h-5 text-white" />,
//         content: [
//             "All website assets—including photos, product branding, custom graphic illustrations, logos, recipe guides, and text—are owned exclusively by Drymato.",
//             "Any unauthorized copy, redistribution, or commercial reproduction of our media without prior written permission is strictly prohibited."
//         ]
//     },
//     {
//         id: "liability",
//         title: "7. Storage & Limitation of Liability",
//         icon: <FaBalanceScale className="w-5 h-5 text-white" />,
//         content: [
//             "Drymato takes strict care in product hygiene and seal quality. However, proper storage after receipt is the responsibility of the buyer.",
//             "• Storage Guidelines: Always refrigerate oil-marinated jars after opening and ensure the tomatoes remain submerged under oil to preserve taste and freshness.",
//             "• Liability Limit: Drymato's full liability for any item claims will not exceed the total price paid by the customer for that order."
//         ]
//     }
// ];

// export default function TermsClient() {
//     const [activeSection, setActiveSection] = useState("acceptance");

//     useEffect(() => {
//         const revealObserver = new IntersectionObserver((entries) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     entry.target.classList.add("is-revealed");
//                     revealObserver.unobserve(entry.target);
//                 }
//             });
//         }, {
//             rootMargin: "0px 0px -10% 0px",
//             threshold: 0.05
//         });

//         const activeSectionObserver = new IntersectionObserver((entries) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting && entry.target.id) {
//                     setActiveSection(entry.target.id);
//                 }
//             });
//         }, {
//             rootMargin: "-20% 0px -60% 0px",
//             threshold: 0.1
//         });

//         const animatedElements = document.querySelectorAll(
//             ".reveal-fade-up, .reveal-fade-left, .reveal-fade-right, .terms-section"
//         );
//         animatedElements.forEach((el) => revealObserver.observe(el));

//         const termsSections = document.querySelectorAll(".terms-section");
//         termsSections.forEach((el) => activeSectionObserver.observe(el));

//         return () => {
//             animatedElements.forEach((el) => revealObserver.unobserve(el));
//             termsSections.forEach((el) => activeSectionObserver.unobserve(el));
//         };
//     }, []);

//     const scrollToSection = (id) => {
//         const element = document.getElementById(id);
//         if (element) {
//             element.scrollIntoView({ behavior: "smooth", block: "center" });
//             setActiveSection(id);
//         }
//     };

//     return (
//         <section className="relative w-full py-16 sm:py-20 bg-background">
//             <style dangerouslySetInnerHTML={{
//                 __html: `
//                 .reveal-fade-up {
//                     opacity: 0;
//                     transform: translateY(40px);
//                     transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1);
//                 }
//                 .reveal-fade-left {
//                     opacity: 0;
//                     transform: translateX(-60px);
//                     transition: opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
//                 }
//                 .reveal-fade-right {
//                     opacity: 0;
//                     transform: translateX(60px);
//                     transition: opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
//                 }
//                 .terms-section {
//                     opacity: 0.35;
//                     transform: translateY(15px);
//                     transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
//                 }
//                 .reveal-fade-up.is-revealed,
//                 .reveal-fade-left.is-revealed,
//                 .reveal-fade-right.is-revealed,
//                 .terms-section.is-revealed {
//                     opacity: 1;
//                     transform: none !important;
//                 }
//             `}} />

//             <div className="max-w-7xl mx-auto px-6 relative z-10">
//                 <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

//                     {/* LEFT COLUMN: Navigation Sidebar & Dark Forest Support Card */}
//                     <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6 reveal-fade-left">
//                         {/* Table of Contents Container */}
//                         <div className="bg-surface rounded-3xl p-6 sm:p-7 shadow-sm border border-forest/10">
//                             <nav className="flex flex-col gap-2.5">
//                                 {TERMS_SECTIONS.map((section) => {
//                                     const isActive = activeSection === section.id;
//                                     return (
//                                         <button
//                                             key={section.id}
//                                             onClick={() => scrollToSection(section.id)}
//                                             className={`w-full text-left px-5 py-3.5 rounded-2xl font-medium text-sm flex items-center justify-between transition-all duration-300 group cursor-pointer ${
//                                                 isActive
//                                                     ? "bg-forest text-surface shadow-sm"
//                                                     : "bg-[#f1ebdc]/40 hover:bg-[#f1ebdc] text-[#211f1a] border border-forest/5"
//                                             }`}
//                                         >
//                                             <span className="truncate pr-2 font-semibold">{section.title}</span>
//                                             <span className={`transition-transform duration-300 shrink-0 ${
//                                                 isActive ? "translate-x-1 text-surface" : "group-hover:translate-x-1 text-[#211f1a]/40"
//                                             }`}>
//                                                 →
//                                             </span>
//                                         </button>
//                                     );
//                                 })}
//                             </nav>
//                         </div>

//                         {/* Dark Forest Green Support Card (Exact match to Privacy screenshot) */}
//                         <div className="bg-forest rounded-3xl p-7 text-surface relative overflow-hidden shadow-sm">
//                             <div className="relative z-10 space-y-4">
//                                 <h3 className="text-lg sm:text-xl font-bold font-serif leading-tight text-surface">
//                                     Gourmet Quality Guaranteed
//                                 </h3>
//                                 <p className="text-surface/80 text-xs sm:text-sm leading-relaxed">
//                                     Just as we select only the finest ripe tomatoes for curing, we ensure your personal details are treated with the highest integrity and care.
//                                 </p>
//                                 <div className="pt-2 flex flex-col gap-3">
//                                     <div className="flex items-center gap-3">
//                                         <FaRegEnvelope className="w-4 h-4 text-surface" />
//                                         <a href="mailto:hello@drymato.com" className="text-surface font-semibold text-xs sm:text-sm hover:underline">
//                                             hello@drymato.com
//                                         </a>
//                                     </div>
//                                     <div className="flex items-center gap-3">
//                                         <FaPhoneAlt className="w-4 h-4 text-surface" />
//                                         <span className="text-surface font-semibold text-xs sm:text-sm">
//                                             +91 8000897238
//                                         </span>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* RIGHT COLUMN: Light Surface Content Cards */}
//                     <div className="lg:col-span-8 space-y-6 sm:space-y-8 reveal-fade-right">
//                         {TERMS_SECTIONS.map((section) => (
//                             <div
//                                 key={section.id}
//                                 id={section.id}
//                                 className="terms-section bg-surface rounded-3xl p-7 sm:p-9 space-y-5 scroll-mt-28 border border-forest/5 shadow-sm transition-all duration-300"
//                             >
//                                 {/* Header with Sage Green Icon Badge */}
//                                 <div className="flex items-center gap-4">
//                                     <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-sage flex items-center justify-center shrink-0">
//                                         {section.icon}
//                                     </div>
//                                     <h3 className="text-xl sm:text-2xl font-bold text-forest tracking-tight font-serif">
//                                         {section.title}
//                                     </h3>
//                                 </div>

//                                 {/* Body Content */}
//                                 <div className="space-y-3.5 text-foreground/80 text-sm sm:text-base leading-relaxed font-normal">
//                                     {section.content.map((paragraph, index) => {
//                                         if (paragraph.startsWith("• ")) {
//                                             const parts = paragraph.split(": ");
//                                             const bulletTitle = parts[0].replace("• ", "");
//                                             const bulletBody = parts.slice(1).join(": ");
//                                             return (
//                                                 <div key={index} className="flex gap-3 pl-1 items-start">
//                                                     <span className="text-forest text-base leading-snug shrink-0">•</span>
//                                                     <span>
//                                                         <strong className="text-foreground font-semibold">{bulletTitle}:</strong> {bulletBody}
//                                                     </span>
//                                                 </div>
//                                             );
//                                         }
//                                         return (
//                                             <p key={index}>
//                                                 {paragraph}
//                                             </p>
//                                         );
//                                     })}
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// }



"use client";

import { useState, useEffect, useMemo } from "react";
import {
    FaFileContract,
    FaUtensils,
    FaWhatsapp,
    FaTruck,
    FaUndoAlt,
    FaAward,
    FaBalanceScale,
    FaBox,
    FaGlobe,
    FaRegEnvelope,
    FaPhoneAlt
} from "react-icons/fa";
import { usePolicy, useSiteInfo, getPolicySections, splitBullet } from "@/context/WebsiteDataContext";

const DEFAULT_FALLBACK_CARD = {
    title: "Gourmet Quality Guaranteed",
    text: "We stand behind every jar we seal. For support with order logistics, bulk custom pricing, or custom blend requests, reach out directly.",
};

// Icon is chosen from the section heading; order matters (first match wins)
const ICON_RULES = [
    [/whatsapp/i, FaWhatsapp],
    [/refund|damag|return/i, FaUndoAlt],
    [/intellectual|copyright/i, FaAward],
    [/liab|storage/i, FaBalanceScale],
    [/international/i, FaGlobe],
    [/packag/i, FaBox],
    [/ship|deliver|dispatch/i, FaTruck],
    [/product|specif/i, FaUtensils],
];
const pickIcon = (title) => ICON_RULES.find(([re]) => re.test(title))?.[1] ?? FaFileContract;

const isContactLine = (t) => /@/.test(t) || /^\+?[\d\s()-]{8,}$/.test(t);

function StatusPanel({ loading, error, email }) {
    return (
        <section className="relative w-full py-16 sm:py-20 bg-background">
            <div className="max-w-3xl mx-auto px-6">
                {loading && !error ? (
                    <div className="space-y-6 sm:space-y-8" aria-busy="true" aria-label="Loading content">
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
                            <FaFileContract className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-forest tracking-tight font-serif">
                            {error ? "We couldn't load this page" : "This page isn't available yet"}
                        </h3>
                        <p className="text-foreground/80 text-sm sm:text-base leading-relaxed">
                            {error
                                ? "Please check your connection and refresh the page."
                                : "Our team is updating this page. Please check back shortly."}
                            {email ? " For any questions, you can reach us at " : ""}
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

export default function TermsClient({
    type = "Terms & Condition",
    cardKey = "Gourmet Quality Guaranteed",
    fallbackCard = DEFAULT_FALLBACK_CARD,
}) {
    const { policy, loading, error } = usePolicy(type);
    const { email, phoneDisplay } = useSiteInfo();
    const [activeId, setActiveId] = useState(null);

    const { sections, card } = useMemo(() => {
        const all = getPolicySections(policy);
        const key = cardKey ? cardKey.toLowerCase() : null;
        const cardSection = key ? all.find((s) => s.title.toLowerCase() === key) ?? null : null;
        return { sections: all.filter((s) => s !== cardSection), card: cardSection };
    }, [policy, cardKey]);

    const activeSection = activeId ?? sections[0]?.id ?? null;

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
            ".reveal-fade-up, .reveal-fade-left, .reveal-fade-right, .terms-section"
        );
        animatedElements.forEach((el) => revealObserver.observe(el));

        const termsSections = document.querySelectorAll(".terms-section");
        termsSections.forEach((el) => activeSectionObserver.observe(el));

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

    const cardTitle = card?.title || fallbackCard.title;
    const cardParagraphs = (card?.blocks ?? [])
        .filter((b) => b.type === "p" && !isContactLine(b.text))
        .map((b) => b.text);
    if (cardParagraphs.length === 0 && fallbackCard.text) cardParagraphs.push(fallbackCard.text);

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
                .terms-section {
                    opacity: 0.35;
                    transform: translateY(15px);
                    transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .reveal-fade-up.is-revealed,
                .reveal-fade-left.is-revealed,
                .reveal-fade-right.is-revealed,
                .terms-section.is-revealed {
                    opacity: 1;
                    transform: none !important;
                }
            `}} />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

                    {/* LEFT COLUMN: Navigation Sidebar & Dark Forest Support Card */}
                    <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6 reveal-fade-left">
                        {/* Table of Contents Container */}
                        <div className="bg-surface rounded-3xl p-6 sm:p-7 shadow-sm border border-forest/10">
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
                        </div>

                        {/* Dark Forest Green Support Card */}
                        <div className="bg-forest rounded-3xl p-7 text-surface relative overflow-hidden shadow-sm">
                            <div className="relative z-10 space-y-4">
                                <h3 className="text-lg sm:text-xl font-bold font-serif leading-tight text-surface">
                                    {cardTitle}
                                </h3>
                                {cardParagraphs.map((text, i) => (
                                    <p key={i} className="text-surface/80 text-xs sm:text-sm leading-relaxed">
                                        {text}
                                    </p>
                                ))}
                                {(email || phoneDisplay) && (
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
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Light Surface Content Cards */}
                    {/* <div className="lg:col-span-8 space-y-6 sm:space-y-8 reveal-fade-right"> */}
                    <div className="lg:col-span-8 min-w-0 space-y-6 sm:space-y-8">
                        {sections.map((section, sectionIndex) => {
                            const Icon = pickIcon(section.title);
                            return (
                                <div
                                    key={section.id}
                                    id={section.id}
                                    className="terms-section bg-surface rounded-3xl p-7 sm:p-9 space-y-5 scroll-mt-28 border border-forest/5 shadow-sm transition-all duration-300"
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