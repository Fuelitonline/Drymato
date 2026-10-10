"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const BUSINESS_POINTS = [
    {
        id: 1,
        text: "Samples for product development.",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 3h6M10 3v5.5L5.5 17a2 2 0 001.8 3h9.4a2 2 0 001.8-3L14 8.5V3" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14h9" />
            </svg>
        )
    },
    {
        id: 2,
        text: "Bulk ingredients for production.",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8l-9-5-9 5 9 5 9-5z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8v8l9 5 9-5V8" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 13v8" />
            </svg>
        )
    },
    {
        id: 3,
        text: "Private label for your brand.",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.59 13.41L11 3.83A2 2 0 009.58 3.24L4 3a1 1 0 00-1 1l.24 5.58a2 2 0 00.59 1.42l9.58 9.58a2 2 0 002.83 0l4.35-4.35a2 2 0 000-2.82z" />
                <circle cx="7.5" cy="7.5" r="1" fill="currentColor" stroke="none" />
            </svg>
        )
    },
    {
        id: 4,
        text: "Multiple products for wholesale.",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="9" cy="7" r="3.2" strokeLinecap="round" strokeLinejoin="round" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.5 20c0-3.5 2.9-6 6.5-6s6.5 2.5 6.5 6" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 8.2a3.2 3.2 0 100-6.4M18 20c0-2.8-1.7-5-4-5.8" />
            </svg>
        )
    },
    {
        id: 5,
        text: "Custom requirements for your formulation.",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06A1.65 1.65 0 005 15.4a1.65 1.65 0 00-1-1.51H4a2 2 0 110-4h.09A1.65 1.65 0 005.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06A1.65 1.65 0 009 4.6a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06A1.65 1.65 0 0019 9c.11.35.31.66.6.9" />
            </svg>
        )
    }
];

export default function BusinessCTASection() {
    const router = useRouter();

    return (
        <section className="relative w-full bg-forest overflow-hidden">
            {/* Decorative leaf line art - corners */}
            <div className="absolute left-0 top-0 h-full w-[45%] pointer-events-none select-none opacity-[0.08]">
                <Image
                    src="/tomatotree.png"
                    alt=""
                    fill
                    className="object-contain object-left filter brightness-0 invert"
                />
            </div>
            <div className="absolute right-0 top-0 h-full w-[30%] pointer-events-none select-none opacity-[0.08]">
                <Image
                    src="/tomatotree.png"
                    alt=""
                    fill
                    className="object-contain object-right filter brightness-0 invert"
                />
            </div>

            <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-[0.9fr_1.5fr] gap-1items-center px-6 sm:px-10 py-14 lg:py-16">

                {/* Left: Product Collage Image */}
                <div className="relative w-full h-[220px] sm:h-[280px] lg:h-[240px] shrink-0">
                    <Image
                        src="/images/our-product.png"
                        alt="Drymato dehydrated products collage"
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-contain object-left"
                    />
                </div>

                {/* Right: Content */}
                <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-10 w-full">

                    {/* Heading Block */}
                    <div className="flex flex-col items-start shrink-0 lg:max-w-[400px]">
                        <div className="flex items-center gap-2 mb-3 text-sage">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                            </svg>
                            <span className="text-[11px] sm:text-xs font-extrabold tracking-[0.2em] uppercase">
                                Business Scale CTA
                            </span>
                        </div>

                        <h2 className="font-serif text-2xl sm:text-3xl lg:text-[32px] font-bold text-white leading-[1.2] mb-3">
                            Join the <span className="text-mustard">Drymato</span> Family
                        </h2>

                        <p className="text-sm sm:text-base text-white/70 font-semibold leading-relaxed mb-6">
                            Whether You Need 10 KG or 1,000 KG — Start With a Conversation.
                        </p>

                        <p className="text-sm sm:text-base text-white/90 font-bold leading-relaxed mb-4">
                            Tell Us What You're Building.
                        </p>

                        <button
                            onClick={() => router.push("/contact")}
                            className="group/btn relative overflow-hidden bg-white border-2 border-white text-forest px-8 py-3.5 rounded-xl text-xs font-extrabold tracking-widest uppercase hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.25)] cursor-pointer z-10"
                        >
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[125%] aspect-square rounded-t-[50%] bg-forest translate-y-full transition-transform duration-[750ms] ease-in-out z-0 group-hover/btn:translate-y-[12%]" />
                            <span className="relative z-10 transition-colors duration-300 group-hover/btn:text-white">
                                REQUEST A QUOTE
                            </span>
                        </button>
                    </div>

                    {/* Divider */}
                    <div className="hidden lg:block w-px self-stretch bg-white/15" />

                    {/* Points Grid - 2 columns, icon + text */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 w-full">
                        {BUSINESS_POINTS.map((point) => (
                            <div key={point.id} className="flex items-start gap-3">
                                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                                    {point.icon}
                                </div>
                                <p className="text-sm text-white/90 font-semibold leading-snug pt-1.5">
                                    {point.text}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}