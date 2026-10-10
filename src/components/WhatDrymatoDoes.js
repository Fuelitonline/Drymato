// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { Leaf, ChevronRight, ArrowRight } from "lucide-react";

// const CAPABILITIES = [
//     {
//         number: "01",
//         title: "Source",
//         caption: "Carefully selected produce.",
//         image: "/images/process/source.png"
//     },
//     {
//         number: "02",
//         title: "Process",
//         caption: "Controlled dehydration & processing.",
//         image: "/images/process/process.png"
//     },
//     {
//         number: "03",
//         title: "Customize",
//         caption: "Cuts, blends, powders & recipes.",
//         image: "/images/process/customize.png"
//     },
//     {
//         number: "04",
//         title: "Supply",
//         caption: "Bulk formats for B2B & export.",
//         image: "/images/process/supply.png"
//     }
// ];

// export default function WhatDrymatoDoes() {
//     return (
//         <section className="relative w-full bg-surface py-16 md:pt-20 px-6 md:px-10 lg:px-14 overflow-hidden">

//             <div className="relative max-w-7xl mx-auto z-10">

//                 {/* Main row: text column (left) + steps row (right) */}
//                 <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-14">

//                     {/* LEFT — eyebrow, heading, description, CTA */}
//                     <div className="w-full lg:w-[30%] lg:shrink-0 flex flex-col items-center lg:items-start text-center lg:text-left">
//                         <div className="flex items-center gap-2 mb-3">
//                             <Leaf className="w-4 h-4 text-forest" strokeWidth={2} />
//                             <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-forest">
//                                 What Drymato Does
//                             </span>
//                         </div>

//                         <h2 className="font-serif text-2xl sm:text-3xl lg:text-[2rem] font-medium text-foreground leading-[1.2] tracking-tight mb-4">
//                             From Fresh Produce to
//                             <br />
//                             Functional Ingredients.
//                         </h2>

//                         <p className="text-sm text-foreground/65 leading-[1.75] max-w-sm font-sans mb-7">
//                             DryMato brings together sourcing, processing, dehydration, quality selection, packaging and B2B supply to deliver versatile dehydrated ingredients.
//                         </p>

//                         <Link
//                             href="/product"
//                             className="group/btn inline-flex items-center gap-2.5 bg-forest hover:bg-forest-light border border-forest hover:border-forest-light text-white px-6 py-3 rounded-full text-xs font-extrabold tracking-widest transition-all duration-300"
//                         >
//                             Explore Our Capabilities
//                             <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" strokeWidth={2.5} />
//                         </Link>
//                     </div>

//                     {/* RIGHT — steps row: circular images connected by arrows */}
//                     <div className="w-full lg:flex-1 overflow-x-auto no-scrollbar">
//                         <div className="flex items-start gap-2 sm:gap-3 md:gap-4 min-w-max lg:min-w-0 lg:justify-between px-1">
//                             {CAPABILITIES.map((step, idx) => (
//                                 <div key={step.number} className="flex items-start gap-2 sm:gap-3 md:gap-4">
//                                     {/* Step: circle image + title + caption */}
//                                     <div className="flex flex-col items-center text-center w-[130px] sm:w-[155px] md:w-[170px] shrink-0">
//                                         <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden border border-surface shadow-[0_8px_20px_rgba(36,56,34,0.12)] bg-surface mb-3">
//                                             <Image
//                                                 src={step.image}
//                                                 alt={step.title}
//                                                 fill
//                                                 sizes="160px"
//                                                 className="object-cover"
//                                             />
//                                         </div>
//                                         <h3 className="font-serif text-sm sm:text-base font-semibold text-foreground leading-tight mb-1">
//                                             {step.number}. {step.title}
//                                         </h3>
//                                         <p className="text-xs sm:text-sm text-foreground/65 leading-snug font-sans px-1">
//                                             {step.caption}
//                                         </p>
//                                     </div>

//                                     {/* Connecting arrow (not after the last step) */}
//                                     {idx < CAPABILITIES.length - 1 && (
//                                         <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-forest/40 mt-12 sm:mt-16 shrink-0" strokeWidth={2} />
//                                     )}
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                 </div>

//             </div>
//         </section>
//     );
// }





"use client";

import Image from "next/image";
import Link from "next/link";
import { Leaf, ChevronRight, ArrowRight } from "lucide-react";

const PROCESS_STEPS = [
    {
        number: "01",
        title: "Source the Right Raw Material.",
        image: "/images/process/source.png"
    },
    {
        number: "02",
        title: "Process It Right.",
        image: "/images/process/process.png"
    },
    {
        number: "03",
        title: "Dehydrate It Carefully.",
        image: "/images/process/process.png"
    },
    {
        number: "04",
        title: "Pack It for the Right Application.",
        image: "/images/process/customize.png"
    },
    {
        number: "05",
        title: "Supply It at Scale.",
        image: "/images/process/supply.png"
    }
];

export default function WhatDrymatoDoes() {
    return (
        <section className="relative w-full bg-surface py-12 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">

            {/* Decorative corner leaves */}
            <Image
                src="/lefttree.png"
                alt=""
                width={340}
                height={340}
                className="hidden sm:block absolute -left-24 top-[20px] lg:top-[50px] w-28 h-28 lg:w-120 lg:h-80 opacity-[0.75] rotate-[-25deg] pointer-events-none select-none z-0"
                draggable={false}
            />
            <Image
                src="/lefttree.png"
                alt=""
                width={340}
                height={340}
                className="hidden sm:block absolute -right-26 top-[220px] lg:top-[200px] w-28 h-28 lg:w-120 lg:h-90 opacity-[0.55] rotate-[28deg] scale-x-[-1] pointer-events-none select-none z-0"
                draggable={false}
            />

            <div className="relative max-w-6xl mx-auto z-10 flex flex-col items-center gap-8 lg:gap-10">

                {/* TOP — eyebrow, heading, description, CTA, process intro — all centered */}
                <div className="w-full flex flex-col items-center text-center">
                    <div className="flex items-center gap-2 mb-3">
                        <Leaf className="w-4 h-4 text-forest" strokeWidth={2} />
                        <span className="text-xs font-bold tracking-[0.2em] uppercase text-forest">
                            What Drymato Does
                        </span>
                    </div>

                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.4rem] font-medium text-foreground leading-[1.2] tracking-tight mb-4 max-w-3xl">
                        From Fresh Produce to Functional Ingredients.
                    </h2>

                    <p className="text-sm sm:text-base text-foreground/65 leading-[1.7] max-w-2xl font-sans mb-6">
                        DryMato brings together sourcing, processing, dehydration, quality selection, packaging and B2B supply to deliver versatile dehydrated ingredients.
                    </p>

                    <Link
                        href="/product"
                        className="group/btn inline-flex items-center gap-2 bg-forest hover:bg-forest-light border border-forest hover:border-forest-light text-white px-7 py-3 rounded-full text-xs sm:text-sm font-extrabold tracking-widest transition-all duration-300 mb-6"
                    >
                        Explore Our Capabilities
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" strokeWidth={2.5} />
                    </Link>

                    {/* <p className="font-serif italic text-forest text-base sm:text-lg">
                        Our approach is simple:
                    </p> */}
                </div>

                {/* STEPS — all 5 in a single connected row without scrolling */}
                <div className="w-full flex items-center justify-center flex-wrap lg:flex-nowrap gap-3 sm:gap-4 md:gap-5 px-2">
                    {PROCESS_STEPS.map((step, idx) => (
                        <div key={step.number} className="flex items-center gap-2 sm:gap-3 md:gap-4">
                            <div className="flex flex-col items-center text-center w-[110px] sm:w-[135px] md:w-[155px] shrink-0">
                                <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border border-surface shadow-[0_8px_24px_rgba(36,56,34,0.12)] bg-surface mb-3">
                                    <Image
                                        src={step.image}
                                        alt={step.title}
                                        fill
                                        sizes="140px"
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="font-serif text-xs sm:text-sm md:text-base font-semibold text-foreground leading-snug">
                                    {step.number}. {step.title}
                                </h3>
                            </div>

                            {idx < PROCESS_STEPS.length - 1 && (
                                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-forest/40 shrink-0 self-center mb-6" strokeWidth={2} />
                            )}
                        </div>
                    ))}
                </div>

                {/* FINAL PARAGRAPH — centered with a subtle top border */}
                <div className="w-full flex flex-col items-center text-center pt-6 border-t border-sage/25 max-w-2xl mx-auto">
                    <p className="text-sm sm:text-base text-foreground/65 leading-[1.7] font-sans">
                        We work with our own guava farms and carefully select other fruits, vegetables and herbs through reliable sourcing channels based on quality and product requirements.
                    </p>
                </div>

            </div>
        </section>
    );
}