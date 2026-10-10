"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
    FaUtensils,
    FaIndustry,
    FaWarehouse,
    FaGlobeAsia,
    FaLeaf,
    FaCapsules,
    FaSpa,
    FaAppleAlt,
    FaPepperHot
} from "react-icons/fa";

// Card shapes: each one has its own corner pattern, icon-chip position and text padding
const PAD_DEFAULT = "px-5 pt-5 pb-5 sm:px-6 sm:pb-6";

const SHAPES = {
    arch: {
        radius: "rounded-t-[140px] rounded-b-[28px]",
        chip: "top-8 left-1/2 -translate-x-1/2",
        pad: PAD_DEFAULT
    },
    tlBig: {
        radius: "rounded-tl-[120px] rounded-tr-[28px] rounded-b-[28px]",
        chip: "top-5 right-5",
        pad: PAD_DEFAULT
    },
    trBig: {
        radius: "rounded-tr-[120px] rounded-tl-[28px] rounded-b-[28px]",
        chip: "top-5 left-5",
        pad: PAD_DEFAULT
    },
    diagA: {
        radius: "rounded-tl-[100px] rounded-br-[100px] rounded-tr-[28px] rounded-bl-[28px]",
        chip: "top-5 right-5",
        pad: "pl-5 pr-10 pt-5 pb-7 sm:pl-6 sm:pr-11 sm:pb-8"
    },
    diagB: {
        radius: "rounded-tr-[100px] rounded-bl-[100px] rounded-tl-[28px] rounded-br-[28px]",
        chip: "top-5 left-5",
        pad: "pl-10 pr-5 pt-5 pb-7 sm:pl-11 sm:pr-6 sm:pb-8"
    },
    soft: {
        radius: "rounded-[36px]",
        chip: "top-5 left-5",
        pad: PAD_DEFAULT
    }
};

/*
  Layout
  - below sm (mobile): single column, every card the same size and centered
  - sm to xl: two staggered columns (grid rows are 40px + 20px gap)
  - xl and up: four staggered columns (12-col grid), heading + description sit inside the collage
  grid-area = row-start / col-start / row-end / col-end
*/
const MOBILE_BOX =
    "h-[340px] w-full max-w-[440px] justify-self-center sm:h-auto sm:max-w-none sm:justify-self-stretch";

const INDUSTRIES = [
    {
        id: 1,
        icon: FaUtensils,
        tone: "text-forest",
        title: "HORECA",
        image: "/use_pasta.png",
        shape: "arch",
        sm: "sm:[grid-area:1/1/6/2]",
        xl: "xl:[grid-area:1/10/6/13]",
        details: [
            { type: "tags", text: "Hotels • Restaurants • Cafés • Catering • Cloud Kitchens" },
            { type: "text", text: "For pizza, pasta, soups, sauces, gravies, salads, garnishes, seasoning and everyday kitchen preparation." }
        ]
    },
    {
        id: 2,
        icon: FaIndustry,
        tone: "text-brick",
        title: "FOOD MANUFACTURING",
        image: "/wholesale_bulk_packaging.png",
        shape: "diagB",
        sm: "sm:[grid-area:4/2/10/3]",
        xl: "xl:[grid-area:4/1/10/4]",
        details: [
            { type: "tags", text: "Soups • Sauces • Ready-to-Eat Foods • Instant Foods • Noodles • Meal Mixes • Seasonings • Food Blends" },
            { type: "text", text: "Dehydrated ingredients for commercial food formulations." }
        ]
    },
    {
        id: 3,
        icon: FaWarehouse,
        tone: "text-mustard",
        title: "WHOLESALERS & DISTRIBUTORS",
        image: "/warehouse image.png",
        shape: "tlBig",
        sm: "sm:[grid-area:6/1/12/2]",
        xl: "xl:[grid-area:12/4/17/7]",
        details: [
            { type: "text", text: "Bulk ingredients for wholesale distribution, institutional buyers and regional food businesses." },
            { type: "tags", text: "Commercial quantities • Bulk packaging • Customized requirements" }
        ]
    },
    {
        id: 4,
        icon: FaGlobeAsia,
        tone: "text-forest",
        title: "EXPORT & INTERNATIONAL BUYERS",
        image: "/wholesale_private_label.png",
        shape: "diagA",
        sm: "sm:[grid-area:10/2/16/3]",
        xl: "xl:[grid-area:6/10/12/13]",
        details: [
            { type: "text", text: "Dehydrated fruits, vegetables, herbs and powders for international sourcing and distribution." },
            { type: "tags", text: "Bulk Supply • Private Label • Custom Packaging" }
        ]
    },
    {
        id: 5,
        icon: FaLeaf,
        tone: "text-forest",
        title: "AYURVEDA & HERBAL INDUSTRIES",
        image: "/hero-section/guava-farm.png",
        shape: "trBig",
        sm: "sm:[grid-area:12/1/18/2]",
        xl: "xl:[grid-area:6/4/12/7]",
        details: [
            { type: "text", text: "Selected dehydrated herbs, fruits, vegetables and powders for applicable herbal and traditional-product formulations." },
            { type: "tags", text: "Raw Ingredients • Herbs • Botanical Powders" }
        ]
    },
    {
        id: 6,
        icon: FaCapsules,
        tone: "text-brick",
        title: "PHARMACEUTICAL & HERBAL PRODUCT INDUSTRIES",
        image: "/tomatoField1.jpeg",
        shape: "soft",
        sm: "sm:[grid-area:16/2/23/3]",
        xl: "xl:[grid-area:10/1/17/4]",
        details: [
            { type: "text", text: "Selected plant-based ingredients and powders for applicable formulations and manufacturing requirements, subject to product specifications and regulatory suitability." }
        ]
    },
    {
        id: 7,
        icon: FaSpa,
        tone: "text-mustard",
        title: "COSMETIC & PERSONAL CARE INDUSTRIES",
        image: "/spread_tomato.png",
        shape: "diagB",
        sm: "sm:[grid-area:18/1/25/2]",
        xl: "xl:[grid-area:5/7/11/10]",
        details: [
            { type: "text", text: "Ingredients such as beetroot, herbs, botanical powders and selected dehydrated plant materials for applicable cosmetic and personal-care formulations." }
        ]
    },
    {
        id: 8,
        icon: FaAppleAlt,
        tone: "text-forest",
        title: "NUTRACEUTICAL & FUNCTIONAL FOOD APPLICATIONS",
        image: "/images/farm.png",
        shape: "trBig",
        sm: "sm:[grid-area:23/2/30/3]",
        xl: "xl:[grid-area:11/7/17/10]",
        details: [
            { type: "text", text: "Selected fruit, vegetable and botanical powders for applicable food and functional-ingredient formulations." }
        ]
    },
    {
        id: 9,
        icon: FaPepperHot,
        tone: "text-brick",
        title: "SPICE & SEASONING INDUSTRY",
        image: "/jaar/spreading powder.png",
        shape: "tlBig",
        sm: "sm:[grid-area:25/1/30/2]",
        xl: "xl:[grid-area:12/10/17/13]",
        details: [
            { type: "tags", text: "Vegetable powders • Herb powders • Tomato powder • Onion powder • Garlic powder • Dehydrated chilli and more." }
        ]
    }
];

// Heading + description, used above the collage on screens smaller than xl and inside it on xl screens
function SectionHeading({ inView, wide = false, className = "" }) {
    return (
        <div
            className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${className}`}
        >
            <h2
                className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] ${wide ? "max-w-none" : "max-w-2xl"}`}
            >
                <span className="text-forest">From the Kitchen to </span>
                <span className="text-brick">the Factory Floor.</span>
            </h2>

            <p
                className={`mt-5 border-l-4 border-mustard pl-5 text-foreground/75 text-base sm:text-lg font-medium leading-relaxed ${wide ? "max-w-xl" : "max-w-md"}`}
            >
                DryMato ingredients are designed for far more than one industry.
            </p>
        </div>
    );
}

export default function IndustriesSection() {
    const sectionRef = useRef(null);
    const [inView, setInView] = useState(false);
    const [openId, setOpenId] = useState(null);

    // Reveal animation when the section scrolls into view
    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.05 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full bg-surface py-20 md:py-24 px-6 sm:px-8 lg:px-10 overflow-hidden"
        >
            {/* Soft backdrop highlights */}
            <div className="absolute top-1/4 right-[-100px] w-80 h-80 bg-brick/5 rounded-full filter blur-[110px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-[-100px] w-80 h-80 bg-mustard/10 rounded-full filter blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto">

                {/* Heading above the collage on screens smaller than xl */}
                <SectionHeading inView={inView} className="xl:hidden mb-10 md:mb-12" />

                {/* Collage */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-12 auto-rows-auto sm:auto-rows-[40px] gap-5">

                    {/* Heading inside the collage on xl screens */}
                    <SectionHeading
                        inView={inView}
                        wide
                        className="hidden xl:block xl:[grid-area:1/1/4/10]"
                    />

                    {INDUSTRIES.map((item, idx) => {
                        const isOpen = openId === item.id;
                        const shape = SHAPES[item.shape];
                        const Icon = item.icon;

                        return (
                            <div key={item.id} className={`${MOBILE_BOX} ${item.sm} ${item.xl}`}>
                                <div
                                    role="button"
                                    tabIndex={0}
                                    aria-expanded={isOpen}
                                    onClick={() => setOpenId(isOpen ? null : item.id)}
                                    onMouseLeave={() => setOpenId((cur) => (cur === item.id ? null : cur))}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter" || e.key === " ") {
                                            e.preventDefault();
                                            setOpenId(isOpen ? null : item.id);
                                        }
                                    }}
                                    className={`group relative w-full h-full ${shape.radius} overflow-hidden border border-sage/25 bg-forest/10 shadow-[0_12px_35px_rgba(36,56,34,0.10)] hover:shadow-[0_22px_50px_rgba(36,56,34,0.20)] cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-forest transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                                    style={{ transitionDelay: inView ? `${(idx % 3) * 150}ms` : "0ms" }}
                                >
                                    {/* Image */}
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        sizes="(max-width: 640px) 90vw, (max-width: 1280px) 50vw, 25vw"
                                        className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                                    />

                                    {/* Base gradient: light on top, dark at the bottom */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/5 pointer-events-none" />

                                    {/* Extra darkening when details are open */}
                                    <div
                                        className={`absolute inset-0 pointer-events-none transition-colors duration-500 [@media(hover:hover)]:group-hover:bg-black/35 ${isOpen ? "bg-black/35" : "bg-black/0"}`}
                                    />

                                    {/* Icon chip */}
                                    <div className={`absolute ${shape.chip} w-11 h-11 rounded-2xl bg-white/90 backdrop-blur-sm border border-white/60 shadow-md flex items-center justify-center z-10`}>
                                        <Icon className={`w-5 h-5 ${item.tone}`} aria-hidden="true" />
                                    </div>

                                    {/* Text layer */}
                                    <div className={`absolute inset-x-0 bottom-0 flex flex-col justify-end ${shape.pad}`}>
                                        <h3 className="font-serif text-[1.3rem] sm:text-[1.4rem] lg:text-[1.6rem] xl:text-[1.4rem] font-bold text-white leading-[1.15] break-words drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                                            {item.title}
                                        </h3>

                                        {/* Description panel: slides up from the bottom, fixed max height, scrolls inside */}
                                        <div
                                            onClick={(e) => e.stopPropagation()}
                                            className={`overflow-hidden transition-all duration-500 ease-out max-h-0 opacity-0 translate-y-8 mt-0 [@media(hover:hover)]:group-hover:max-h-[150px] [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-hover:translate-y-0 [@media(hover:hover)]:group-hover:mt-3 ${isOpen ? "!max-h-[150px] !opacity-100 !translate-y-0 !mt-3" : ""}`}
                                        >
                                            <div className="max-h-[150px] overflow-y-auto pr-2 space-y-2.5 [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.45)_transparent]">
                                                <span className="block w-10 h-[3px] rounded-full bg-mustard" />
                                                {item.details.map((d, i) =>
                                                    d.type === "tags" ? (
                                                        <p
                                                            key={i}
                                                            className="text-[11px] sm:text-xs font-bold tracking-wide text-mustard leading-relaxed"
                                                        >
                                                            {d.text}
                                                        </p>
                                                    ) : (
                                                        <p
                                                            key={i}
                                                            className="text-sm text-white/90 font-medium leading-relaxed"
                                                        >
                                                            {d.text}
                                                        </p>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}