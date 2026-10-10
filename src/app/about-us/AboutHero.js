"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Apple, Carrot, Leaf, PackageSearch, Handshake, Boxes, Tag, Globe2 } from "lucide-react";

const TRUST_POINTS = [
    { icon: Apple, label: "Fruits" },
    { icon: Carrot, label: "Vegetables" },
    { icon: Leaf, label: "Herbs" },
    { icon: PackageSearch, label: "Powders" },
    { icon: Handshake, label: "B2B" },
    { icon: Boxes, label: "Bulk" },
    { icon: Tag, label: "Private Label" },
    { icon: Globe2, label: "Export" },
];

export default function AboutHeroSection() {
    const overlayContentRef = useRef(null);

    useEffect(() => {
        gsap.set(overlayContentRef.current, { y: 30, opacity: 0 });
        gsap.to(overlayContentRef.current, {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            delay: 0.2
        });
    }, []);

    return (
        <section className="relative w-full min-h-[300px] sm:min-h-[320px] lg:min-h-[400px] flex items-center justify-center overflow-hidden py-10 sm:pt-18 sm:pb-6">

            {/* Background Banner Image - no overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/about-banner.png"
                    alt="Drymato dehydrated ingredients"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Centered Content */}
            <div
                ref={overlayContentRef}
                className="relative z-10 flex flex-col items-center text-center px-6 sm:px-10 max-w-4xl mx-auto opacity-0"
            >
                {/* Eyebrow Label - same pattern used across the rest of the site */}
                <div className="flex items-center gap-2 mb-4 text-forest">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                    </svg>
                    <span className="text-xs sm:text-sm font-extrabold tracking-[0.2em] uppercase">
                        About Drymato
                    </span>
                </div>

                {/* Heading - dark forest, key phrase highlighted in mustard */}
                <h1 className="font-serif text-3xl sm:text-5xl lg:text-[52px] font-bold text-forest leading-[1.15] tracking-tight mb-5">
                    From Where It Grows <br className="hidden sm:block" />
                    to <span className="text-brick">Where It Matters.</span>
                </h1>

                {/* Subheading - lighter weight than before */}
                <div className="space-y-3 mb-8">
                    <p className="text-sm sm:text-base text-foreground/80 font-medium leading-relaxed max-w-2xl mx-auto">
                        At Drymato, we believe good ingredients begin with the right source.
                    </p>
                    <p className="text-sm sm:text-base text-foreground/80 font-medium leading-relaxed max-w-2xl mx-auto">
                        We bring together farm sourcing, carefully selected raw materials, dehydration, processing and B2B supply to create dependable dehydrated ingredients for kitchens, food businesses and global markets.
                    </p>
                </div>

                {/* Trust Row - icon badges instead of a plain text line */}
                <div className="px-4 sm:px-8 py-5 sm:py-6">
                    <div className="grid grid-cols-4 sm:grid-cols-8 gap-x-1 sm:gap-x-3 gap-y-5 divide-x divide-forest/15">
                        {TRUST_POINTS.map(({ icon: Icon, label }, i) => (
                            <div
                                key={label}
                                className={`flex flex-col items-center gap-1.5 sm:gap-2 px-1 sm:px-3 text-center ${i === 0 ? "pl-0" : ""} ${i === TRUST_POINTS.length - 1 ? "pr-0" : ""}`}
                            >
                                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-forest" strokeWidth={1.5} />
                                <span className="text-[9px] sm:text-[11px] font-bold text-foreground leading-tight uppercase tracking-wide">
                                    {label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
}