"use client";

import Image from "next/image";
import {
    Leaf,
    ArrowRight,
    MapPin,
    Sprout,
    Tractor,
    Cpu,
    Flame,
    Package,
} from "lucide-react";

const PROCESS_FLOW = [
    { title: "Farm", icon: Sprout },
    { title: "Harvest", icon: Tractor },
    { title: "Processing", icon: Cpu },
    { title: "Dehydration", icon: Flame },
    { title: "Packaging", icon: Package },
];

export default function OurSourcing() {
    return (
        <section className="w-full bg-white py-16 md:py-20 px-6 md:px-10 lg:px-14">
            <div className="max-w-7xl mx-auto flex flex-col gap-16">

                {/* Eyebrow + centered heading */}
                <div className="flex flex-col items-center text-center">
                    <div className="flex items-center gap-2 mb-3">
                        <Leaf
                            className="w-4 h-4 text-forest"
                            strokeWidth={2}
                        />

                        <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-forest">
                            Our Sourcing
                        </span>
                    </div>

                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.5rem] font-medium text-foreground leading-[1.2] tracking-tight max-w-3xl">
                        Where Does Your Ingredient Come From?
                    </h2>
                </div>

                {/* =========================================================
                    SOURCING CONTENT
                ========================================================== */}

                <div className="grid lg:grid-cols-[1fr_1.4fr_1fr] gap-8 lg:gap-10 items-start">

                    {/* LEFT — Farm Image */}
                    <div className="relative w-full h-[320px] sm:h-[380px] lg:h-[420px] rounded-2xl overflow-hidden bg-surface border border-sage/15 order-1">

                        <Image
                            src="/hero-section/guava-farm.png"
                            alt="Drymato Guava Farms"
                            fill
                            sizes="(max-width: 1024px) 90vw, 25vw"
                            className="object-cover"
                        />

                        <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-forest/90 backdrop-blur-sm text-white text-[11px] font-bold tracking-wide px-3 py-1.5 rounded-full">
                            <MapPin
                                className="w-3.5 h-3.5"
                                strokeWidth={2.2}
                            />

                            Drymato Guava Farms
                        </div>
                    </div>

                    {/* =====================================================
                        CENTER — SOURCING TEXT
                    ====================================================== */}

                    <div className="flex flex-col items-start text-left order-3 lg:order-2 px-2 pt-1">

                        {/* Our Own Guava Farms */}
                        <div className="flex items-center gap-2 mb-2">
                            <Leaf
                                className="w-4 h-4 text-forest"
                                strokeWidth={2}
                            />

                            <h3 className="font-serif text-2xl sm:text-[1.75rem] font-medium text-foreground">
                                Our Own Guava Farms
                            </h3>
                        </div>

                        <div className="w-12 h-[2px] bg-forest mb-4" />

                        <p className="text-sm text-foreground/70 leading-[1.8] mb-4">
                            For guava, our journey begins at our own farms.
                        </p>

                        <p className="text-sm text-foreground/70 leading-[1.8] mb-6">
                            From cultivation and harvesting to processing and
                            dehydration, we stay connected to the raw material
                            right from the source.
                        </p>

                        <div className="w-full h-px bg-sage/20 my-2" />

                        {/* Carefully Selected Sources */}
                        <div className="flex flex-col items-start text-left pt-4">

                            <div className="flex items-center gap-2 mb-2">
                                <Leaf
                                    className="w-4 h-4 text-forest"
                                    strokeWidth={2}
                                />

                                <h4 className="font-serif text-xl sm:text-2xl font-medium text-foreground">
                                    Carefully Selected Sources
                                </h4>
                            </div>

                            <div className="w-10 h-[2px] bg-forest mb-3" />

                            <p className="text-sm text-foreground/70 leading-[1.8]">
                                For our other fruits, vegetables and herbs, we
                                work with selected sourcing partners and
                                wholesale markets to procure raw materials
                                according to the required quality, variety,
                                seasonality and application.
                            </p>

                            {/* =================================================
                                CTA — MOVED INTO CENTER COLUMN
                            ================================================== */}

                            <a
                                href="/about-us#our-sourcing"
                                className="group/btn mt-7 inline-flex items-center gap-2.5 bg-forest hover:bg-forest-light border border-forest hover:border-forest-light text-white px-6 py-3 rounded-full text-[11px] font-extrabold tracking-widest transition-all duration-300"
                            >
                                Discover Our Sourcing Journey

                                <ArrowRight
                                    className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                                    strokeWidth={2.5}
                                />
                            </a>
                        </div>
                    </div>

                    {/* RIGHT — Vegetable / Harvest Image */}
                    <div className="relative w-full h-[320px] sm:h-[380px] lg:h-[420px] rounded-2xl overflow-hidden bg-surface border border-sage/15 order-2 lg:order-3">

                        <Image
                            src="/images/farm.png"
                            alt="Sourcing partners and wholesale markets"
                            fill
                            sizes="(max-width: 1024px) 90vw, 25vw"
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* =========================================================
    FARM TO PACK PROCESS
========================================================== */}

                <div className="relative w-full rounded-3xl overflow-hidden shadow-lg">

                    {/* Background Image */}
                    <Image
                        src="/images/farm-banner.png"
                        alt="Drymato Guava Farms Background"
                        fill
                        className="object-cover object-center pointer-events-none select-none"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-[#162b14]/75" />

                    {/* Process Content */}
                    <div className="relative z-10 px-3 py-8 sm:px-6 sm:py-9 lg:px-12 lg:py-10">

                        {/* CENTERED HEADING */}
                        <div className="flex justify-center text-center mb-6 sm:mb-8">
                            <h3 className="font-serif text-xl sm:text-3xl font-medium text-white">
                                Farm to Pack Process Flow
                            </h3>
                        </div>

                        {/* PROCESS FLOW */}
                        <div className="w-full">
                            <div className="flex flex-row items-center justify-between sm:justify-center gap-1 sm:gap-2">

                                {PROCESS_FLOW.map((step, idx) => {
                                    const StepIcon = step.icon;

                                    return (
                                        <div
                                            key={step.title}
                                            className="flex items-center justify-center"
                                        >

                                            {/* PROCESS ITEM */}
                                            <div className="flex flex-col items-center justify-center text-center gap-1 sm:gap-2 min-w-0">

                                                <StepIcon
                                                    className="w-4 h-4 sm:w-6 sm:h-7 text-white/95 shrink-0"
                                                    strokeWidth={1.7}
                                                />

                                                <span className="text-[10px] xs:text-xs sm:text-[15px] font-semibold tracking-tight sm:tracking-wide text-white leading-tight">
                                                    {step.title}
                                                </span>

                                            </div>

                                            {/* ARROW BETWEEN STEPS */}
                                            {idx < PROCESS_FLOW.length - 1 && (
                                                <ArrowRight
                                                    className="w-3 h-3 sm:w-5 sm:h-5 mx-0.5 sm:mx-3 text-white/70 shrink-0"
                                                    strokeWidth={2}
                                                />
                                            )}

                                        </div>
                                    );
                                })}

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
