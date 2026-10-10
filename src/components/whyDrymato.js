// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// const FEATURES = [
//     {
//         id: 1,
//         title: ["100%", "NATURAL"],
//         bgImage: "/tomatoField1.jpeg",
//         desc: "Pure sun-ripened tomatoes, no artificial additives.",
//         icon: (
//             <svg className="w-9 h-9 text-current transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 4.5c-3 0-7.5 1.5-10.5 4.5S4.5 16.5 4.5 19.5c3 0 7.5-1.5 10.5-4.5s4.5-10.5 4.5-10.5z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5L12 12" />
//             </svg>
//         )
//     },
//     {
//         id: 3,
//         title: ["RICH IN", "FLAVOR"],
//         bgImage: "/tomatoField2.jpeg",
//         desc: "Intense sweet-tangy taste in every single bite.",
//         icon: (
//             <svg className="w-9 h-9 text-current transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.5c-3 0-5.5 1.8-5.5 4.5s2 4.5 5.5 4.5 5.5-1.8 5.5-4.5-2-4.5-5.5-4.5z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.5c0-1 .5-2 1.5-2.5M12 6.5c-.5-1-1.5-1.5-2.5-1M12 6.5c-.8 0-1.5.5-1.5 1" />
//             </svg>
//         )
//     },
//     {
//         id: 4,
//         title: ["ZERO", "WASTE"],
//         bgImage: "/process_sundrying.png",
//         desc: "Eco-friendly solar sun drying processes.",
//         icon: (
//             <svg className="w-9 h-9 text-current transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3M4.5 12c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l-3 3m3-3l3-3" />
//             </svg>
//         )
//     },
//     {
//         id: 5,
//         title: ["HANDCRAFTED", "WITH CARE"],
//         bgImage: "/process_handpicked.png",
//         desc: "Selected, sliced, and packed by skilled hands.",
//         icon: (
//             <svg className="w-9 h-9 text-current transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5c-1.5-1.8-3.2-2.5-5-2.5A4.5 4.5 0 002.5 12.5c0 2 1.3 3.5 2.5 4.7l7 6.3 7-6.3c1.2-1.2 2.5-2.7 2.5-4.7a4.5 4.5 0 00-4.5-4.5c-1.8 0-3.5.7-5 2.5z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 14.5c1.5.5 3 .5 4.5 0M18 14.5c-1.5.5-3 .5-4.5 0" />
//             </svg>
//         )
//     },
//     {
//         id: 6,
//         title: ["CHEF'S", "CHOICE"],
//         bgImage: "/use_pasta.png",
//         desc: "Elevates pasta, pizza, and gourmet recipes.",
//         icon: (
//             <svg className="w-9 h-9 text-current transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18V9a6 6 0 0112 0v9M3 18h18M5 21h14M9 18v-4a3 3 0 016 0v4" />
//             </svg>
//         )
//     }
// ];

// export default function WhyDrymatos() {
//     const containerRef = useRef(null);

//     useEffect(() => {
//         gsap.registerPlugin(ScrollTrigger);

//         const container = containerRef.current;
//         if (!container) return;

//         const featureItems = container.querySelectorAll(".feature-item");

//         const tl = gsap.timeline({
//             scrollTrigger: {
//                 trigger: container,
//                 start: "top 80%",
//                 end: "bottom 20%",
//                 toggleActions: "play reverse play reverse",
//             }
//         });

//         gsap.set(featureItems, { y: 30, opacity: 0 });

//         tl.to(featureItems, {
//             y: 0,
//             opacity: 1,
//             duration: 0.6,
//             stagger: 0.1,
//             ease: "power2.out"
//         });

//         return () => {
//             if (tl.scrollTrigger) tl.scrollTrigger.kill();
//             tl.kill();
//         };
//     }, []);

//     return (
//         <section ref={containerRef} className="relative w-full overflow-hidden flex flex-col bg-white">
//             {/* SVG ClipPath Definition for Why Choose Drymato Wavy Section */}
//             <svg width="0" height="0" className="absolute pointer-events-none">
//                 <defs>
//                     <clipPath id="wavySectionClip1" clipPathUnits="objectBoundingBox">
//                         <path d="M 0,0.04 C 0.3,0.12 0.7,0.02 1,0.10 L 1,0.90 C 0.7,0.98 0.3,0.88 0,0.96 Z" />
//                     </clipPath>
//                 </defs>
//             </svg>

//             {/* SECTION 1: WHY CHOOSE DRYMATO? */}
//             <div
//                 style={{ clipPath: "url(#wavySectionClip1)" }}
//                 className="relative w-full bg-[#fbf8f3] pt-28 pb-28 px-6 md:px-12 lg:px-24 flex flex-col items-center z-10"
//             >
//                 {/* Section Background Image with Dark Overlay */}
//                 <div
//                     style={{ backgroundImage: "url('/tomato-field3.png')" }}
//                     className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden bg-fixed bg-cover bg-center"
//                 >
//                     <div className="absolute inset-0 bg-black/65" />
//                 </div>

//                 {/* Header */}
//                 <div className="flex flex-col items-center text-center mb-12 z-10">
//                     <span className="font-dancing text-[#a50808] text-[clamp(1.6rem,2.6vw,2.2rem)] font-semibold mb-1 block">
//                         Our Core Values
//                     </span>
//                     <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white uppercase">
//                         Why Choose Drymato?
//                     </h2>
//                     <div className="w-16 h-1 bg-[#a50808] mt-4 rounded-full" />
//                 </div>

//                 {/* Features Cards Grid (Responsive layout fitting 5 items) */}
//                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full max-w-8xl py-4 relative z-10">
//                     {FEATURES.map((item) => (
//                         <div
//                             key={item.id}
//                             className="feature-item flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-md rounded-tl-[36px] rounded-br-[36px] border border-white/10 shadow-[0_12px_32px_rgba(0,0,0,0.2)] hover:bg-white/15 hover:border-white/20 hover:shadow-[0_20px_45px_rgba(227,28,37,0.25)] hover:-translate-y-1.5 transition-all duration-500 relative group opacity-0 min-h-[250px] cursor-pointer z-10 justify-start"
//                         >
//                             {/* Icon with hover effect and spinning red dotted circle */}
//                             <div className="relative w-16 h-16 flex items-center justify-center mb-4 text-white transition-all duration-500 shrink-0 z-10">
//                                 {/* Background circle that grows on hover */}
//                                 <div className="absolute inset-0 rounded-full bg-white/10 group-hover:bg-[#a50808] scale-90 group-hover:scale-110 transition-all duration-500 z-0 shadow-inner" />
//                                 {/* Dotted Circle Spinning */}
//                                 <div className="absolute inset-[-4px] rounded-full border-2 border-dotted border-white/20 group-hover:border-[#a50808] animate-[spin_12s_linear_infinite] pointer-events-none z-0" />
//                                 <div className="relative z-10 transition-transform duration-500 group-hover:scale-110">
//                                     {item.icon}
//                                 </div>
//                             </div>

//                             {/* Two line label */}
//                             <div className="flex flex-col items-center justify-center min-h-[44px] mb-2 z-10">
//                                 {item.title.map((line, lIdx) => (
//                                     <span
//                                         key={lIdx}
//                                         className="text-xs sm:text-sm font-poppins font-extrabold tracking-[1.5px] text-white group-hover:text-[#ff444c] uppercase leading-tight transition-colors duration-300"
//                                     >
//                                         {line}
//                                     </span>
//                                 ))}
//                             </div>

//                             {/* Short Description */}
//                             <p className="text-[11px] sm:text-xs text-white/60 group-hover:text-white/90 leading-relaxed transition-colors duration-300 mt-2 font-medium z-10">
//                                 {item.desc}
//                             </p>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Custom Styles */}
//             <style>{`
//                 @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800;900&family=Dancing+Script:wght@700&display=swap');

//                 .font-poppins {
//                     font-family: 'Poppins', sans-serif;
//                 }
//                 .font-dancing {
//                     font-family: 'Dancing Script', cursive;
//                 }
//             `}</style>
//         </section>
//     );
// }





"use client";

import { useState } from "react";
import Image from "next/image";
import { Leaf, ArrowRight } from "lucide-react";

// ---- Premium custom SVG fallbacks (shown until the Flaticon PNG loads, or if it fails) ----

const QualityIngredientsSVG = () => (
    <svg viewBox="0 0 48 48" className="w-9 h-9" fill="none">
        <circle cx="24" cy="24" r="22" fill="#243822" fillOpacity="0.08" />
        <path d="M24 34c-6-4-9-8-9-13a6 6 0 0110-4.5A6 6 0 0135 21c0 5-3 9-9 13z" fill="#243822" fillOpacity="0.15" />
        <path d="M24 34c-6-4-9-8-9-13a6 6 0 0110-4.5A6 6 0 0135 21c0 5-3 9-9 13z" stroke="#243822" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M24 16.5V13" stroke="#C08829" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M20 15c1-1.5 2.5-2 4-2" stroke="#243822" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.5" />
    </svg>
);

const CleanNaturalSVG = () => (
    <svg viewBox="0 0 48 48" className="w-9 h-9" fill="none">
        <circle cx="24" cy="24" r="22" fill="#8C9A72" fillOpacity="0.15" />
        <path d="M24 34c8-2 12-8 12-16-8 0-14 4-16 12-1-3-3-5-6-6 0 6 4 9 10 10z" fill="#8C9A72" fillOpacity="0.2" />
        <path d="M24 34c8-2 12-8 12-16-8 0-14 4-16 12-1-3-3-5-6-6 0 6 4 9 10 10z" stroke="#243822" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M18.5 30.5c1.5-3 4-5.5 7-7" stroke="#243822" strokeWidth="1.1" strokeLinecap="round" strokeOpacity="0.45" />
        <circle cx="14" cy="15" r="1.4" fill="#C08829" />
    </svg>
);

const ConsistentProcessingSVG = () => (
    <svg viewBox="0 0 48 48" className="w-9 h-9" fill="none">
        <circle cx="24" cy="24" r="22" fill="#243822" fillOpacity="0.08" />
        <rect x="14" y="13" width="20" height="22" rx="3" stroke="#243822" strokeWidth="1.4" fill="#243822" fillOpacity="0.06" />
        <path d="M17.5 19h13M17.5 24h13M17.5 29h9" stroke="#243822" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.65" />
        <circle cx="30.5" cy="29" r="1.4" fill="#C08829" />
    </svg>
);

const CertifiedComplianceSVG = () => (
    <svg viewBox="0 0 48 48" className="w-9 h-9" fill="none">
        <circle cx="24" cy="24" r="22" fill="#C08829" fillOpacity="0.12" />
        <path d="M24 12l3.2 2.4 4 .3 1.3 3.8 3 2.6-1.6 3.7 1.6 3.7-3 2.6-1.3 3.8-4 .3L24 38l-3.2-2.4-4-.3-1.3-3.8-3-2.6 1.6-3.7-1.6-3.7 3-2.6 1.3-3.8 4-.3z" stroke="#243822" strokeWidth="1.3" strokeLinejoin="round" fill="#fff" fillOpacity="0.4" />
        <path d="M19.5 24l3 3 6.5-6.5" stroke="#243822" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const B2BExportSVG = () => (
    <svg viewBox="0 0 48 48" className="w-9 h-9" fill="none">
        <circle cx="24" cy="24" r="22" fill="#8A2C21" fillOpacity="0.08" />
        <circle cx="24" cy="24" r="10" stroke="#243822" strokeWidth="1.3" />
        <path d="M14 24h20M24 14c2.5 2.7 4 6.2 4 10s-1.5 7.3-4 10c-2.5-2.7-4-6.2-4-10s1.5-7.3 4-10z" stroke="#243822" strokeWidth="1.1" strokeOpacity="0.5" />
        <path d="M32 32l4 4m0-4v4h-4" stroke="#C08829" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const FlexiblePackagingSVG = () => (
    <svg viewBox="0 0 48 48" className="w-9 h-9" fill="none">
        <circle cx="24" cy="24" r="22" fill="#243822" fillOpacity="0.08" />
        <path d="M24 14l10 5.5v11L24 36l-10-5.5v-11z" stroke="#243822" strokeWidth="1.4" strokeLinejoin="round" fill="#243822" fillOpacity="0.06" />
        <path d="M14 19.5L24 25l10-5.5M24 25v11" stroke="#243822" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" />
        <path d="M19 16.7L29 22.2" stroke="#C08829" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
);

const POINTS = [
    {
        number: "01",
        title: "Quality Ingredients",
        text: "Carefully selected fruits, vegetables, herbs and greens processed for consistent quality.",
        image: "/icons/quality.png",
        Fallback: QualityIngredientsSVG
    },
    {
        number: "02",
        title: "Clean & Natural",
        text: "Made with a focus on natural ingredients, with no unnecessary additives or preservatives.",
        image: "/icons/natural.png",
        Fallback: CleanNaturalSVG
    },
    {
        number: "03",
        title: "Consistent Processing",
        text: "Controlled dehydration and processing help deliver reliable taste, texture and shelf stability.",
        image: "/icons/fresh.png",
        Fallback: ConsistentProcessingSVG
    },
    {
        number: "04",
        title: "FSSAI Compliant",
        text: "Produced and handled in accordance with applicable food safety and regulatory requirements.",
        image: "/icons/fssai.png",
        Fallback: CertifiedComplianceSVG
    },
    {
        number: "05",
        title: "Flexible Packaging",
        text: "Bulk, retail and custom packaging solutions tailored to your order size and application.",
        image: "/icons/packaging.png",
        Fallback: FlexiblePackagingSVG
    },
    {
        number: "06",
        title: "Built for B2B & Export",
        text: "Reliable formats and supply solutions for food manufacturers, commercial kitchens and export partners.",
        image: "/icons/shipment.png",
        Fallback: B2BExportSVG
    }
];

function PointIcon({ image, Fallback }) {
    const [failed, setFailed] = useState(false);

    if (failed) {
        return <Fallback />;
    }

    return (
        <Image
            src={image}
            alt=""
            width={52}
            height={52}
            className="w-[52px] h-[52px] object-contain"
            onError={() => setFailed(true)}
        />
    );
}

function PointItem({ point }) {
    return (
        <div className="flex items-start gap-4">
            <div className="w-14 h-14 flex items-center justify-center shrink-0">
                <PointIcon image={point.image} Fallback={point.Fallback} />
            </div>

            <div>
                <h3 className="text-[15px] font-bold text-foreground mb-1">
                    {point.title}
                </h3>

                <p className="text-[13px] text-foreground/60 leading-relaxed max-w-[280px]">
                    {point.text}
                </p>
            </div>
        </div>
    );
}

export default function WhyDrymatos() {
    const leftColumn = [POINTS[0], POINTS[2], POINTS[4]];
    const rightColumn = [POINTS[1], POINTS[3], POINTS[5]];

    return (
        <section className="w-full bg-surface py-16 md:py-20 px-6 md:px-10 lg:px-14">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

                    {/* LEFT — eyebrow, heading, description, CTA */}
                    <div className="w-full lg:w-[34%] lg:shrink-0 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <div className="flex items-center gap-2 mb-3">
                            <Leaf className="w-4 h-4 text-forest" strokeWidth={2} />
                            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-forest">
                                Why Partner With Drymato
                            </span>
                        </div>

                        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.25rem] font-medium text-foreground leading-[1.2] tracking-tight mb-5">
                            Built for Businesses.
                            <br />
                            Trusted Worldwide.
                        </h2>

                        <p className="text-sm text-foreground/65 leading-[1.75] max-w-md mb-8">
                            We don't just supply ingredients, we build long-term partnerships. With reliable logistics, flexible packaging and consistent quality, Drymato is your ideal partner in the global food industry.
                        </p>

                        <a
                            href="/contact"
                            className="group/btn inline-flex items-center gap-2.5 bg-forest hover:bg-forest-light border border-forest hover:border-forest-light text-white px-7 py-3 rounded-full text-xs font-extrabold tracking-widest transition-all duration-300"
                        >
                            Partner With Us
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" strokeWidth={2.5} />
                        </a>
                    </div>

                    {/* RIGHT — two-column point grid with a single vertical divider (desktop only) */}
                    <div className="w-full lg:flex-1 flex flex-col sm:flex-row gap-10 sm:gap-0">
                        <div className="flex flex-col gap-9 sm:pr-10 lg:pr-12">
                            {leftColumn.map((point) => (
                                <PointItem key={point.number} point={point} />
                            ))}
                        </div>
                        <div className="hidden sm:block w-px bg-sage/25 shrink-0" />
                        <div className="flex flex-col gap-9 sm:pl-10 lg:pl-12">
                            {rightColumn.map((point) => (
                                <PointItem key={point.number} point={point} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}