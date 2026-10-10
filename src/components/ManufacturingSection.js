"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Leaf, Layers, PackageCheck, Globe2 } from "lucide-react";

const PROCESS_STEPS = [
    {
        number: "01",
        title: "Sourcing",
        description: "Own-farm guava and carefully selected raw materials.",
        image: "/manufacturing/1.png",
    },
    {
        number: "02",
        title: "Selection",
        description: "Quality inspection and sorting of incoming produce.",
        image: "/manufacturing/2.png",
    },
    {
        number: "03",
        title: "Cleaning & Preparation",
        description: "Raw materials are prepared for processing.",
        image: "/manufacturing/3.png",
    },
    {
        number: "04",
        title: "Cutting & Processing",
        description: "Slices, flakes, granules, pieces, leaves or powder formats.",
        image: "/manufacturing/4.png",
    },
    {
        number: "05",
        title: "Dehydration",
        description: "Controlled dehydration according to the product requirement.",
        image: "/manufacturing/5.png",
    },
    {
        number: "06",
        title: "Quality Checks",
        description: "Product characteristics and applicable specifications are reviewed.",
        image: "/manufacturing/6.png",
    },
    {
        number: "07",
        title: "Packaging",
        description: "Bulk, vacuum and customized packaging options.",
        image: "/manufacturing/7.png",
    },
    {
        number: "08",
        title: "Dispatch",
        description: "Prepared for commercial, wholesale or export requirements.",
        image: "/manufacturing/8.png",
    },
];

const AUTOPLAY_DURATION = 4500;
const UPCOMING_COUNT = 4;
// Uniform size for all thumbnails in the horizontal row
const THUMB_SIZE = "w-14 h-14 sm:w-16 sm:h-16 md:w-[68px] md:h-[68px]";

function ProcessCarousel({ activeIndex, onSelect, onMouseEnter, onMouseLeave }) {
    const mainImageRef = useRef(null);
    const captionRef = useRef(null);
    const thumbRefs = useRef([]);
    const prevIndexRef = useRef(activeIndex);

    // Crossfade the main image + caption whenever the active step changes
    useEffect(() => {
        if (prevIndexRef.current === activeIndex) return;

        if (mainImageRef.current) {
            gsap.fromTo(
                mainImageRef.current,
                { opacity: 0, scale: 0.92, y: 12 },
                { opacity: 1, scale: 1, y: 0, duration: 0.7, ease: "power3.out", overwrite: "auto" }
            );
        }

        if (captionRef.current) {
            gsap.fromTo(
                captionRef.current,
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0, duration: 0.5, delay: 0.1, ease: "power2.out", overwrite: "auto" }
            );
        }

        prevIndexRef.current = activeIndex;
    }, [activeIndex]);

    // Pop each upcoming thumbnail in as it becomes visible
    useEffect(() => {
        thumbRefs.current.forEach((el) => {
            if (!el) return;
            gsap.fromTo(
                el,
                { opacity: 0, scale: 0.8 },
                { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out", overwrite: "auto" }
            );
        });
    }, [activeIndex]);

    const activeStep = PROCESS_STEPS[activeIndex];

    // Next N steps after the active one, wrapping around the array
    const upcomingSteps = Array.from({ length: UPCOMING_COUNT }, (_, i) =>
        PROCESS_STEPS[(activeIndex + i + 1) % PROCESS_STEPS.length]
    );

    return (
        <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="w-full flex flex-row items-end justify-center gap-4 sm:gap-5 pb-1"
        >
            {/* Big current-step image — tall portrait shape */}
            <div className="relative w-[200px] sm:w-[240px] md:w-[270px] aspect-[3/4] shrink-0 rounded-3xl overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.14)] border border-sage/30">
                <div ref={mainImageRef} className="absolute inset-0">
                    <Image
                        src={activeStep.image}
                        alt=""
                        fill
                        sizes="270px"
                        style={{ objectFit: "cover" }}
                        draggable={false}
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                </div>

                <div ref={captionRef} className="absolute left-0 right-0 bottom-0 p-4 sm:p-5 text-white z-10">
                    <span className="text-[11px] font-extrabold tracking-widest text-white/80">
                        {activeStep.number}
                    </span>
                    <h3 className="mt-1 text-base sm:text-lg font-semibold font-serif leading-snug">
                        {activeStep.title}
                    </h3>
                    <p className="mt-1 text-[11px] sm:text-xs text-white/85 leading-relaxed">
                        {activeStep.description}
                    </p>
                </div>
            </div>

            {/* Upcoming steps: displayed in a single horizontal row aligned to baseline/bottom */}
            <div className="flex flex-row items-center gap-2 sm:gap-3 shrink-0 pb-1">
                {upcomingSteps.map((step, idx) => (
                    <button
                        key={`${step.number}-${idx}`}
                        ref={(el) => (thumbRefs.current[idx] = el)}
                        onClick={() => onSelect(PROCESS_STEPS.indexOf(step))}
                        aria-label={`${step.number} ${step.title}`}
                        className={`relative ${THUMB_SIZE} rounded-xl overflow-hidden border-2 border-transparent hover:border-forest transition-all duration-300 cursor-pointer shadow-sm shrink-0`}
                    >
                        <Image
                            src={step.image}
                            alt=""
                            fill
                            sizes="70px"
                            style={{ objectFit: "cover" }}
                            draggable={false}
                        />
                        <div className="absolute inset-0 bg-black/30 hover:bg-black/10 transition-colors duration-200" />
                        <span className="absolute bottom-1 right-1 text-[10px] font-bold text-white bg-black/60 px-1 rounded">
                            {step.number}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default function ManufacturingSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const textContainerRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    }, []);

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % PROCESS_STEPS.length);
        }, AUTOPLAY_DURATION);
        return () => clearInterval(interval);
    }, [isPaused]);

    useEffect(() => {
        const leftElements = textContainerRef.current
            ? Array.from(textContainerRef.current.querySelectorAll(".mfg-text-animate"))
            : [];

        gsap.set(leftElements, { opacity: 0, y: 24 });

        gsap.to(leftElements, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.08,
            scrollTrigger: {
                trigger: textContainerRef.current,
                start: "top 80%",
                toggleActions: "play none none none",
            },
        });
    }, []);

    return (
        <section className="relative w-full bg-white text-foreground py-16 sm:py-24 px-[5%] overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(36,56,34,0.04)_0%,transparent_75%)] pointer-events-none" />

            <Image
                src="/lefttree.png"
                alt=""
                width={260}
                height={320}
                className="hidden lg:block absolute left-0 bottom-0 w-40 xl:w-56 h-auto opacity-40 pointer-events-none select-none z-0"
                draggable={false}
            />

            <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-14 lg:gap-10">
                {/* LEFT — section label, heading, copy, trust bar */}
                <div ref={textContainerRef} className="w-full lg:w-[45%] flex flex-col items-center lg:items-start text-center lg:text-left">
                    <div className="mfg-text-animate flex items-center gap-2 mb-3">
                        <Leaf className="w-4 h-4 text-forest" strokeWidth={2} />
                        <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-forest">
                            Manufacturing
                        </span>
                    </div>

                    <h2 className="mfg-text-animate font-serif text-2xl sm:text-3xl lg:text-[2.25rem] font-medium text-foreground leading-[1.2] tracking-tight mb-4">
                        Our Manufacturing &amp; Processing
                    </h2>

                    <p className="mfg-text-animate text-foreground/80 text-sm sm:text-base font-sans mb-3">
                        Fresh produce is only the beginning.
                    </p>

                    <p className="mfg-text-animate text-foreground/70 text-sm leading-[1.8] max-w-[460px] font-sans mb-8">
                        Our processing journey transforms selected raw materials into convenient dehydrated ingredients in formats designed for different applications.
                    </p>

                    <div className="mfg-text-animate grid grid-cols-3 gap-5 sm:gap-6 w-full max-w-[420px]">
                        <div className="flex flex-col items-center lg:items-start gap-2">
                            <Layers className="w-6 h-6 text-forest" strokeWidth={1.5} />
                            <span className="text-[11px] sm:text-xs font-semibold text-foreground leading-tight">
                                8-Step Controlled Process
                            </span>
                        </div>
                        <div className="flex flex-col items-center lg:items-start gap-2">
                            <PackageCheck className="w-6 h-6 text-forest" strokeWidth={1.5} />
                            <span className="text-[11px] sm:text-xs font-semibold text-foreground leading-tight">
                                Custom Formats Available
                            </span>
                        </div>
                        <div className="flex flex-col items-center lg:items-start gap-2">
                            <Globe2 className="w-6 h-6 text-forest" strokeWidth={1.5} />
                            <span className="text-[11px] sm:text-xs font-semibold text-foreground leading-tight">
                                Bulk & Export Ready
                            </span>
                        </div>
                    </div>
                </div>

                {/* RIGHT — self-rotating process carousel */}
                <div className="w-full lg:w-[55%] flex items-center justify-center">
                    <ProcessCarousel
                        activeIndex={activeIndex}
                        onSelect={setActiveIndex}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    />
                </div>
            </div>
        </section>
    );
}