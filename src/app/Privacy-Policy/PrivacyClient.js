// "use client";

// import { useState, useEffect } from "react";
// import { FaShieldAlt, FaEye, FaLock, FaUserCheck, FaChevronRight, FaRegEnvelope, FaPhoneAlt } from "react-icons/fa";

// const POLICY_SECTIONS = [
//     {
//         id: "introduction",
//         title: "1. Introduction",
//         icon: <FaShieldAlt className="w-5 h-5 text-white" />,
//         content: [
//             "Welcome to Drymato. We are committed to protecting your personal data and respecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website, browse our premium sun-dried tomato jars and powdered seasonings, or contact us via our website forms and WhatsApp services.",
//             "By accessing or using our services, you consent to the data practices described in this policy. We recommend reading this document in full to understand how we value and treat the confidentiality of our customers."
//         ]
//     },
//     {
//         id: "info-collection",
//         title: "2. Information We Collect",
//         icon: <FaEye className="w-5 h-5 text-white" />,
//         content: [
//             "To provide you with our gourmet products, wholesale pricing structures, and order support, we may collect:",
//             "• Personal Identification Information: Your first name, last name, email address, phone number, company/wholesale business name, and shipping address when you fill out contact forms or message us directly.",
//             "• Interaction Logs: Records of communication, messages, feedback, and inquiries submitted to our team for customer support purposes.",
//             "• Usage & Device Data: Internet Protocol (IP) address, browser type, operating system, and pages visited to help optimize site performance and resolve technical errors."
//         ]
//     },
//     {
//         id: "info-usage",
//         title: "3. How We Use Your Information",
//         icon: <FaUserCheck className="w-5 h-5 text-white" />,
//         content: [
//             "Drymato uses collected information to maintain our quality standards:",
//             "• Processing & Fulfilling Orders: Communicating via WhatsApp or email to process selection, size configurations, and dispatch details.",
//             "• Customer Support: Responding to inquiries about ingredients, storage, shipping times, returns, and custom event gifting.",
//             "• Service Improvement: Analyzing site usage to refine page structure, load times, and visual navigation.",
//             "• Community Updates: With your permission, sending newsletters or announcements regarding new blend releases, culinary recipes, and promotional events."
//         ]
//     },
//     {
//         id: "data-protection",
//         title: "4. Data Security & Protection",
//         icon: <FaLock className="w-5 h-5 text-white" />,
//         content: [
//             "The security of your personal data is paramount to us. Drymato implements advanced technical and organizational measures to defend against unauthorized access, alteration, disclosure, or destruction of your information.",
//             "We restrict access to personal details to only those team members and secure logistical partners necessary to dispatch your orders. However, please note that no transmission over the Internet or electronic storage system is 100% secure, and we cannot guarantee absolute safety."
//         ]
//     },
//     {
//         id: "third-party",
//         title: "5. Sharing with Third Parties",
//         icon: <FaChevronRight className="w-5 h-5 text-white" />,
//         content: [
//             "We do not sell, rent, or trade your personal information to marketing databases or third-party brokers.",
//             "To successfully deliver our temperature-controlled gourmet jars to your doorstep, we share delivery addresses and contact phone numbers with trusted third-party courier services. These companies are strictly contractually bound to preserve your confidentiality and use your details solely for shipment execution."
//         ]
//     },
//     {
//         id: "user-rights",
//         title: "6. Your Privacy Rights",
//         icon: <FaShieldAlt className="w-5 h-5 text-white" />,
//         content: [
//             "You hold full rights over your personal data. At any time, you can reach out to our support team to request:",
//             "• Access & Portability: View a report of what personal information we hold about you.",
//             "• Correction: Update inaccurate contact numbers, wholesale business designations, or email addresses.",
//             "• Erasure: Request the complete removal of your contact information from our active communication databases."
//         ]
//     }
// ];

// export default function PrivacyClient() {
//     const [activeSection, setActiveSection] = useState("introduction");

//     useEffect(() => {
//         const revealObserver = new IntersectionObserver((entries) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     entry.target.classList.add("is-revealed");
//                     revealObserver.unobserve(entry.target);
//                 }
//             });
//         }, {
//             root: null,
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
//             root: null,
//             rootMargin: "-20% 0px -60% 0px",
//             threshold: 0.1
//         });

//         const animatedElements = document.querySelectorAll(
//             ".reveal-fade-up, .reveal-fade-left, .reveal-fade-right, .policy-section"
//         );
//         animatedElements.forEach((el) => revealObserver.observe(el));

//         const policySections = document.querySelectorAll(".policy-section");
//         policySections.forEach((el) => activeSectionObserver.observe(el));

//         return () => {
//             animatedElements.forEach((el) => revealObserver.unobserve(el));
//             policySections.forEach((el) => activeSectionObserver.unobserve(el));
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
//         <section className="relative w-full py-20 bg-[#f6f1e6]">
//             <style dangerouslySetInnerHTML={{
//                 __html: `
//                 .reveal-fade-up {
//                     opacity: 0;
//                     transform: translateY(50px);
//                     transition: opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
//                 }
//                 .reveal-fade-left {
//                     opacity: 0;
//                     transform: translateX(-100px);
//                     transition: opacity 1.4s cubic-bezier(0.16, 1, 0.3, 1), transform 1.4s cubic-bezier(0.16, 1, 0.3, 1);
//                 }
//                 .reveal-fade-right {
//                     opacity: 0;
//                     transform: translateX(100px);
//                     transition: opacity 1.4s cubic-bezier(0.16, 1, 0.3, 1), transform 1.4s cubic-bezier(0.16, 1, 0.3, 1);
//                 }
//                 .policy-section {
//                     opacity: 0.3;
//                     transform: translateY(20px);
//                     transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
//                 }
//                 .reveal-fade-up.is-revealed,
//                 .reveal-fade-left.is-revealed,
//                 .reveal-fade-right.is-revealed,
//                 .policy-section.is-revealed {
//                     opacity: 1;
//                     transform: translate(0);
//                 }
//             `}} />

//             <div className="max-w-7xl mx-auto px-6 relative z-10">
//                 <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

//                     {/* LEFT COLUMN: Sticky Navigation & Branding */}
//                     <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-8 reveal-fade-left">
//                         {/* Table of Contents Card */}
//                         <div className="bg-[#fbf8f1] rounded-3xl shadow-[0_15px_45px_rgba(0,0,0,0.03)] border border-[#8c9a72]/20 p-6 sm:p-8">
//                             <h2 className="text-xs font-black tracking-widest text-[#211f1a]/60 uppercase mb-5">
//                                 Policy Outline
//                             </h2>
//                             <nav className="flex flex-col gap-2.5">
//                                 {POLICY_SECTIONS.map((section) => {
//                                     const isActive = activeSection === section.id;
//                                     return (
//                                         <button
//                                             key={section.id}
//                                             onClick={() => scrollToSection(section.id)}
//                                             className={`w-full text-left px-4.5 py-3 rounded-2xl font-bold text-[14px] flex items-center justify-between transition-all duration-300 group cursor-pointer ${isActive
//                                                 ? "bg-[#243822] text-white shadow-md shadow-[#243822]/20 scale-102"
//                                                 : "bg-[#f6f1e6] hover:bg-[#8c9a72]/15 text-[#211f1a] hover:text-[#8a2c21] border border-[#8c9a72]/20"
//                                                 }`}
//                                         >
//                                             <span>{section.title}</span>
//                                             <span className={`transition-transform duration-300 ${isActive ? "translate-x-1" : "group-hover:translate-x-1 text-[#211f1a]/50"}`}>
//                                                 →
//                                             </span>
//                                         </button>
//                                     );
//                                 })}
//                             </nav>
//                         </div>

//                         {/* Reassurance Branded Card */}
//                         <div className="bg-gradient-to-br from-[#243822] to-[#38512f] rounded-3xl shadow-[0_15px_45px_rgba(36,56,34,0.15)] p-8 text-white relative overflow-hidden group">
//                             <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-[100px] pointer-events-none transition-transform duration-700 group-hover:scale-110"></div>
//                             <div className="relative z-10 space-y-4">
//                                 <h3 className="text-lg font-semibold font-serif leading-tight text-white">
//                                     Your Trust is Our Ingredient
//                                 </h3>
//                                 <p className="text-white/85 text-xs sm:text-sm leading-relaxed font-sans">
//                                     Just as we select only the finest ripe tomatoes for curing, we ensure your personal details are treated with the highest integrity and care.
//                                 </p>
//                                 <div className="border-t border-white/15 pt-4 flex flex-col gap-3">
//                                     <div className="flex items-center gap-3.5">
//                                         <FaRegEnvelope className="w-4 h-4 text-white" />
//                                         <a href="mailto:hello@drymato.com" className="text-white font-bold text-xs sm:text-sm hover:underline">
//                                             hello@drymato.com
//                                         </a>
//                                     </div>
//                                     <div className="flex items-center gap-3.5">
//                                         <FaPhoneAlt className="w-4 h-4 text-white" />
//                                         <span className="text-white font-bold text-xs sm:text-sm">
//                                             +91 8000897238
//                                         </span>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* RIGHT COLUMN: Policy Content Cards */}
//                     <div className="lg:col-span-8 space-y-8 reveal-fade-right">
//                         {POLICY_SECTIONS.map((section) => (
//                             <div
//                                 key={section.id}
//                                 id={section.id}
//                                 className="policy-section bg-[#fbf8f1] rounded-3xl shadow-[0_12px_40px_rgba(0,0,0,0.03)] border border-[#8c9a72]/20 p-8 sm:p-10 space-y-6 scroll-mt-24 transition-all duration-300 hover:shadow-[0_15px_45px_rgba(36,56,34,0.06)]"
//                             >
//                                 {/* Header with Icon Badge */}
//                                 <div className="flex items-center gap-4.5">
//                                     <div className="w-11 h-11 rounded-2xl bg-[#8c9a72] flex items-center justify-center shrink-0 shadow-md">
//                                         {section.icon}
//                                     </div>
//                                     <h3 className="text-2xl font-semibold text-[#211f1a] tracking-tight font-serif">
//                                         {section.title}
//                                     </h3>
//                                 </div>

//                                 {/* Body Content */}
//                                 <div className="space-y-4 text-[#3d3830] text-[15px] sm:text-base leading-relaxed font-medium">
//                                     {section.content.map((paragraph, index) => {
//                                         if (paragraph.startsWith("• ")) {
//                                             const parts = paragraph.split(": ");
//                                             const bulletTitle = parts[0].replace("• ", "");
//                                             const bulletBody = parts.slice(1).join(": ");
//                                             return (
//                                                 <div key={index} className="flex gap-3.5 pl-2 py-0.5 items-start">
//                                                     <span className="text-[#8a2c21] text-lg leading-none shrink-0">•</span>
//                                                     <span>
//                                                         <strong className="text-[#211f1a] font-semibold">{bulletTitle}:</strong> {bulletBody}
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
import { FaShieldAlt, FaEye, FaLock, FaUserCheck, FaChevronRight, FaRegEnvelope, FaPhoneAlt } from "react-icons/fa";
import { usePolicy, useSiteInfo, getPolicySections, splitBullet } from "@/context/WebsiteDataContext";

// Section whose content feeds the dark "trust" card instead of the numbered list
const CARD_KEY = "your trust is our ingredient";
const FALLBACK_CARD = {
    title: "Your Trust is Our Ingredient",
    text: "Just as we select only the finest ripe tomatoes for curing, we ensure your personal details are treated with the highest integrity and care.",
};

// Icon is chosen from the section heading; order matters (first match wins)
const ICON_RULES = [
    [/intro/i, FaShieldAlt],
    [/collect/i, FaEye],
    [/secur|protect/i, FaLock],
    [/third|shar/i, FaChevronRight],
    [/right/i, FaShieldAlt],
    [/use|usage/i, FaUserCheck],
];
const pickIcon = (title) => ICON_RULES.find(([re]) => re.test(title))?.[1] ?? FaShieldAlt;

const isContactLine = (t) => /@/.test(t) || /^\+?[\d\s()-]{8,}$/.test(t);

function StatusPanel({ loading, error, email }) {
    return (
        <section className="relative w-full py-20 bg-[#f6f1e6]">
            <div className="max-w-3xl mx-auto px-6">
                {loading && !error ? (
                    <div className="space-y-8" aria-busy="true" aria-label="Loading policy">
                        {[0, 1, 2].map((i) => (
                            <div
                                key={i}
                                className="bg-[#fbf8f1] rounded-3xl shadow-[0_12px_40px_rgba(0,0,0,0.03)] border border-[#8c9a72]/20 p-8 sm:p-10 space-y-5 animate-pulse"
                            >
                                <div className="flex items-center gap-4.5">
                                    <div className="w-11 h-11 rounded-2xl bg-[#8c9a72]/30" />
                                    <div className="h-6 w-1/2 rounded-full bg-[#8c9a72]/20" />
                                </div>
                                <div className="space-y-3">
                                    <div className="h-4 w-full rounded-full bg-[#8c9a72]/15" />
                                    <div className="h-4 w-11/12 rounded-full bg-[#8c9a72]/15" />
                                    <div className="h-4 w-2/3 rounded-full bg-[#8c9a72]/15" />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="bg-[#fbf8f1] rounded-3xl shadow-[0_12px_40px_rgba(0,0,0,0.03)] border border-[#8c9a72]/20 p-8 sm:p-12 text-center space-y-4">
                        <div className="w-14 h-14 rounded-2xl bg-[#8c9a72] flex items-center justify-center mx-auto shadow-md">
                            <FaShieldAlt className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-2xl font-semibold text-[#211f1a] tracking-tight font-serif">
                            {error ? "We couldn't load this page" : "This policy isn't available yet"}
                        </h3>
                        <p className="text-[#3d3830] text-[15px] sm:text-base leading-relaxed font-medium">
                            {error
                                ? "Please check your connection and refresh the page."
                                : "Our team is updating this page. Please check back shortly."}
                            {email ? " For any questions, you can reach us at " : ""}
                            {email && (
                                <a href={`mailto:${email}`} className="text-[#8a2c21] font-bold hover:underline">
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

export default function PrivacyClient() {
    const { policy, loading, error } = usePolicy("Privacy Policy");
    const { email, phoneDisplay } = useSiteInfo();
    const [activeId, setActiveId] = useState(null);

    const { sections, card } = useMemo(() => {
        const all = getPolicySections(policy);
        const cardSection = all.find((s) => s.title.toLowerCase() === CARD_KEY) ?? null;
        return { sections: all.filter((s) => s !== cardSection), card: cardSection };
    }, [policy]);

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
            root: null,
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
            root: null,
            rootMargin: "-20% 0px -60% 0px",
            threshold: 0.1
        });

        const animatedElements = document.querySelectorAll(
            ".reveal-fade-up, .reveal-fade-left, .reveal-fade-right, .policy-section"
        );
        animatedElements.forEach((el) => revealObserver.observe(el));

        const policySections = document.querySelectorAll(".policy-section");
        policySections.forEach((el) => activeSectionObserver.observe(el));

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

    const cardTitle = card?.title || FALLBACK_CARD.title;
    const cardParagraphs = (card?.blocks ?? [])
        .filter((b) => b.type === "p" && !isContactLine(b.text))
        .map((b) => b.text);
    if (cardParagraphs.length === 0) cardParagraphs.push(FALLBACK_CARD.text);

    return (
        <section className="relative w-full py-20 bg-[#f6f1e6]">
            <style dangerouslySetInnerHTML={{
                __html: `
                .reveal-fade-up {
                    opacity: 0;
                    transform: translateY(50px);
                    transition: opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .reveal-fade-left {
                    opacity: 0;
                    transform: translateX(-100px);
                    transition: opacity 1.4s cubic-bezier(0.16, 1, 0.3, 1), transform 1.4s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .reveal-fade-right {
                    opacity: 0;
                    transform: translateX(100px);
                    transition: opacity 1.4s cubic-bezier(0.16, 1, 0.3, 1), transform 1.4s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .policy-section {
                    opacity: 0.3;
                    transform: translateY(20px);
                    transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .reveal-fade-up.is-revealed,
                .reveal-fade-left.is-revealed,
                .reveal-fade-right.is-revealed,
                .policy-section.is-revealed {
                    opacity: 1;
                    transform: translate(0);
                }
            `}} />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* LEFT COLUMN: Sticky Navigation & Branding */}
                    <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-8 reveal-fade-left">
                        {/* Table of Contents Card */}
                        <div className="bg-[#fbf8f1] rounded-3xl shadow-[0_15px_45px_rgba(0,0,0,0.03)] border border-[#8c9a72]/20 p-6 sm:p-8">
                            <h2 className="text-xs font-black tracking-widest text-[#211f1a]/60 uppercase mb-5">
                                Policy Outline
                            </h2>
                            <nav className="flex flex-col gap-2.5">
                                {sections.map((section, index) => {
                                    const isActive = activeSection === section.id;
                                    return (
                                        <button
                                            key={section.id}
                                            onClick={() => scrollToSection(section.id)}
                                            className={`w-full text-left px-4.5 py-3 rounded-2xl font-bold text-[14px] flex items-center justify-between transition-all duration-300 group cursor-pointer ${isActive
                                                ? "bg-[#243822] text-white shadow-md shadow-[#243822]/20 scale-102"
                                                : "bg-[#f6f1e6] hover:bg-[#8c9a72]/15 text-[#211f1a] hover:text-[#8a2c21] border border-[#8c9a72]/20"
                                                }`}
                                        >
                                            <span>{`${index + 1}. ${section.title}`}</span>
                                            <span className={`transition-transform duration-300 ${isActive ? "translate-x-1" : "group-hover:translate-x-1 text-[#211f1a]/50"}`}>
                                                →
                                            </span>
                                        </button>
                                    );
                                })}
                            </nav>
                        </div>

                        {/* Reassurance Branded Card */}
                        <div className="bg-gradient-to-br from-[#243822] to-[#38512f] rounded-3xl shadow-[0_15px_45px_rgba(36,56,34,0.15)] p-8 text-white relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-[100px] pointer-events-none transition-transform duration-700 group-hover:scale-110"></div>
                            <div className="relative z-10 space-y-4">
                                <h3 className="text-lg font-semibold font-serif leading-tight text-white">
                                    {cardTitle}
                                </h3>
                                {cardParagraphs.map((text, i) => (
                                    <p key={i} className="text-white/85 text-xs sm:text-sm leading-relaxed font-sans">
                                        {text}
                                    </p>
                                ))}
                                {(email || phoneDisplay) && (
                                    <div className="border-t border-white/15 pt-4 flex flex-col gap-3">
                                        {email && (
                                            <div className="flex items-center gap-3.5">
                                                <FaRegEnvelope className="w-4 h-4 text-white" />
                                                <a href={`mailto:${email}`} className="text-white font-bold text-xs sm:text-sm hover:underline">
                                                    {email}
                                                </a>
                                            </div>
                                        )}
                                        {phoneDisplay && (
                                            <div className="flex items-center gap-3.5">
                                                <FaPhoneAlt className="w-4 h-4 text-white" />
                                                <span className="text-white font-bold text-xs sm:text-sm">
                                                    {phoneDisplay}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Policy Content Cards */}
                    <div className="lg:col-span-8 space-y-8 reveal-fade-right">
                        {sections.map((section, sectionIndex) => {
                            const Icon = pickIcon(section.title);
                            return (
                                <div
                                    key={section.id}
                                    id={section.id}
                                    className="policy-section bg-[#fbf8f1] rounded-3xl shadow-[0_12px_40px_rgba(0,0,0,0.03)] border border-[#8c9a72]/20 p-8 sm:p-10 space-y-6 scroll-mt-24 transition-all duration-300 hover:shadow-[0_15px_45px_rgba(36,56,34,0.06)]"
                                >
                                    {/* Header with Icon Badge */}
                                    <div className="flex items-center gap-4.5">
                                        <div className="w-11 h-11 rounded-2xl bg-[#8c9a72] flex items-center justify-center shrink-0 shadow-md">
                                            <Icon className="w-5 h-5 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-semibold text-[#211f1a] tracking-tight font-serif">
                                            {`${sectionIndex + 1}. ${section.title}`}
                                        </h3>
                                    </div>

                                    {/* Body Content */}
                                    <div className="space-y-4 text-[#3d3830] text-[15px] sm:text-base leading-relaxed font-medium">
                                        {section.blocks.map((block, index) => {
                                            if (block.type === "li") {
                                                const { title, body } = splitBullet(block.text);
                                                return (
                                                    <div key={index} className="flex gap-3.5 pl-2 py-0.5 items-start">
                                                        <span className="text-[#8a2c21] text-lg leading-none shrink-0">•</span>
                                                        <span>
                                                            {title && <strong className="text-[#211f1a] font-semibold">{title}:</strong>} {body}
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