"use client";

import Image from "next/image";
import { Leaf, ArrowRight, Package, Box, Truck, SlidersHorizontal } from "lucide-react";

const BULK_FORMATS = [
    {
        icon: Package,
        value: "100 KG+",
        label: "Commercial requirements",
        highlighted: false
    },
    {
        icon: Box,
        value: "500 KG+",
        label: "Large B2B requirements",
        highlighted: false
    },
    {
        icon: Truck,
        value: "1,000 KG+",
        label: "High-volume procurement",
        highlighted: true
    },
    {
        icon: SlidersHorizontal,
        value: "Custom Volumes",
        label: "Based on product availability and requirement",
        highlighted: false
    }
];

export default function BulkSupply() {
    return (
        <section className="relative w-full bg-surface py-16 md:py-20 px-6 md:px-10 lg:px-14 overflow-hidden">

            {/* Decorative faint botanical leaves, top-left and bottom-right corners */}
            <Leaf
                className="hidden md:block absolute -left-4 top-6 w-24 h-24 text-forest/10 rotate-[-20deg] pointer-events-none"
                strokeWidth={0.6}
            />
            <Leaf
                className="hidden md:block absolute right-6 bottom-10 w-20 h-20 text-forest/10 rotate-[160deg] pointer-events-none"
                strokeWidth={0.6}
            />

            <div className="relative max-w-7xl mx-auto z-10">

                {/* Top row: text (left) + warehouse image (right) */}
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-14">

                    {/* LEFT — eyebrow, heading, description, CTA */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        <div className="flex items-center gap-2 mb-3">
                            <Leaf className="w-4 h-4 text-forest" strokeWidth={2} />
                            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-forest">
                                Bulk Supply
                            </span>
                        </div>

                        <h2 className="font-serif text-2xl sm:text-3xl lg:text-[2.15rem] font-medium text-foreground leading-[1.2] tracking-tight mb-5 max-w-lg">
                            Built for Bulk. Ready for Commercial Requirements.
                        </h2>

                        <p className="text-sm text-foreground/65 leading-[1.8] max-w-md mb-8">
                            Whether you need ingredients for a restaurant chain, manufacturing facility, wholesale business or export order, DryMato works with commercial-volume requirements.
                        </p>

                        <a
                            href="/contact"
                            className="group/btn inline-flex items-center gap-2.5 bg-forest hover:bg-forest-light border border-forest hover:border-forest-light text-white px-6 py-3 rounded-full text-xs font-extrabold tracking-widest transition-all duration-300"
                        >
                            Request Bulk Pricing
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" strokeWidth={2.5} />
                        </a>
                    </div>

                    {/* RIGHT — warehouse image, organic pill-style rounding matching the reference */}
                    <div className="relative w-full h-[280px] sm:h-[340px] lg:h-[380px] rounded-[2rem] rounded-tr-[7rem] overflow-hidden bg-surface border border-sage/15">
                        <Image
                            src="/manufacturing/8.png"
                            alt="Bulk dehydrated ingredient supply, warehouse and pallets"
                            fill
                            sizes="(max-width: 1024px) 90vw, 45vw"
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* "Bulk Formats" label */}
                <div className="flex items-center gap-3 mb-6">
                    <Leaf className="w-4 h-4 text-forest shrink-0" strokeWidth={2} />
                    <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-forest whitespace-nowrap">
                        Bulk Formats
                    </span>
                    <span className="flex-1 h-px bg-sage/30" />
                </div>

                {/* Bulk format cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                    {BULK_FORMATS.map((format) => {
                        const Icon = format.icon;
                        return (
                            <div
                                key={format.value}
                                className={`rounded-2xl p-5 sm:p-6 border transition-colors duration-300 ${
                                    format.highlighted
                                        ? "bg-sage/15 border-sage/25"
                                        : "bg-surface border-sage/15"
                                }`}
                            >
                                <div className="w-11 h-11 rounded-full bg-forest/10 flex items-center justify-center mb-4">
                                    <Icon className="w-5 h-5 text-forest" strokeWidth={1.75} />
                                </div>
                                <h3 className="font-serif text-xl sm:text-2xl font-medium text-forest mb-1">
                                    {format.value}
                                </h3>
                                <p className="text-xs text-foreground/60 leading-snug">
                                    {format.label}
                                </p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}