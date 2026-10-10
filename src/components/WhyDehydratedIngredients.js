"use client";

import Image from "next/image";
import { Leaf, Droplet, HandHelping, Box, ShieldCheck, Calendar, LayoutGrid, MapPin } from "lucide-react";

const BENEFITS = [
    {
        icon: Droplet,
        title: "Reduced Moisture",
        description: "Helps improve storage stability when appropriately processed and packed."
    },
    {
        icon: HandHelping,
        title: "Easy Handling",
        description: "Ready-to-use formats can reduce preparation requirements."
    },
    {
        icon: Box,
        title: "Convenient Storage",
        description: "Dehydrated ingredients generally require less space than their fresh counterparts."
    },
    {
        icon: ShieldCheck,
        title: "Consistent Ingredient Format",
        description: "Useful for commercial recipes and manufacturing processes."
    },
    {
        icon: Calendar,
        title: "Year-Round Convenience",
        description: "Can help businesses manage seasonal availability."
    },
    {
        icon: LayoutGrid,
        title: "Multiple Applications",
        description: "From professional kitchens to industrial formulations."
    }
];

export default function WhyDehydratedIngredients() {
    return (
        <section className="relative w-full bg-surface py-16 md:py-20 px-6 md:px-10 lg:px-14 overflow-hidden">
            <div className="relative max-w-6xl mx-auto z-10 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">

                {/* LEFT — 3-image collage: one large image (vertically centered, not full height) + two stacked images */}
                <div className="relative w-full">
                    {/* Decorative branch line-art, top-left corner */}
                    {/* <Image
                        src="/lefttree.png"
                        alt=""
                        width={140}
                        height={140}
                        className="hidden sm:block absolute -left-8 -top-10 w-24 h-24 lg:w-32 lg:h-32 opacity-40 rotate-[-10deg] pointer-events-none select-none z-0"
                        draggable={false}
                    /> */}

                    <div className="relative grid grid-cols-2 grid-rows-2 gap-4 sm:gap-5 h-[440px] sm:h-[500px] md:h-[540px] z-10">
                        {/* Large image — spans both rows but is vertically centered, not stretched full height */}
                        <div className="row-span-2 flex items-center justify-center h-full">
                            <div className="relative w-full max-h-[380px] sm:max-h-[420px] aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_12px_30px_rgba(36,56,34,0.14)]">
                                {/* TODO: Add guava farm photo — guava tree branch with fruit, farm rows in background. */}
                                <Image
                                    src="/images/farm.png"
                                    alt="Drymato guava farms"
                                    fill
                                    sizes="(max-width: 1024px) 45vw, 320px"
                                    className="object-cover"
                                />
                                <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 bg-forest text-white text-[11px] font-semibold px-3 py-1.5 rounded-full">
                                    <MapPin className="w-3 h-3" strokeWidth={2.5} />
                                    Drymato Guava Farms
                                </div>
                            </div>
                        </div>

                        {/* Top-right image — processing */}
                        <div className="relative rounded-2xl overflow-hidden shadow-[0_10px_24px_rgba(36,56,34,0.12)]">
                            {/* TODO: Add processing-floor photo — staff in hairnets/gloves sorting produce on a line. */}
                            <Image
                                src="/hero-section/processing.png"
                                alt="Processing"
                                fill
                                sizes="(max-width: 1024px) 45vw, 280px"
                                className="object-cover"
                            />
                        </div>

                        {/* Bottom-right image — dehydration trays */}
                        <div className="relative rounded-2xl overflow-hidden shadow-[0_10px_24px_rgba(36,56,34,0.12)]">
                            {/* TODO: Add dehydration-tray photo — multi-rack dehydrator trays with dried produce. */}
                            <Image
                                src="/hero-section/dehydrated-food.png"
                                alt="Dehydration trays"
                                fill
                                sizes="(max-width: 1024px) 45vw, 280px"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* RIGHT — eyebrow, heading, description, benefits grid */}
                <div className="relative w-full">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="flex items-center gap-2 shrink-0">
                            <Leaf className="w-4 h-4 text-forest" strokeWidth={2} />
                            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-forest whitespace-nowrap">
                                Why Dehydrated Ingredients?
                            </span>
                        </div>
                        <span className="flex-1 h-px bg-sage/40" />
                    </div>

                    <h2 className="font-serif text-2xl sm:text-3xl lg:text-[2.1rem] font-medium text-foreground leading-[1.2] tracking-tight mb-4 max-w-xl">
                        Fresh Produce, Made More Convenient.
                    </h2>

                    <p className="text-sm sm:text-base text-foreground/65 leading-[1.75] max-w-xl font-sans mb-8">
                        Dehydration transforms fresh produce into ingredients that can be easier to store, handle, transport and use.
                    </p>

                    <div className="flex flex-col gap-6">
                        {BENEFITS.map(({ icon: Icon, title, description }) => (
                            <div key={title} className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-sage/25 flex items-center justify-center shrink-0">
                                    <Icon className="w-5 h-5 text-forest" strokeWidth={1.75} />
                                </div>
                                <div>
                                    <h3 className="text-sm sm:text-base font-semibold text-foreground leading-snug mb-1">
                                        {title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-foreground/65 leading-[1.6] font-sans">
                                        {description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Decorative branch line-art, bottom-right corner
                    <Image
                        src="/lefttree.png"
                        alt=""
                        width={140}
                        height={140}
                        className="hidden sm:block absolute -right-6 -bottom-10 w-24 h-24 lg:w-28 lg:h-28 opacity-30 rotate-[100deg] scale-x-[-1] pointer-events-none select-none z-0"
                        draggable={false}
                    /> */}
                </div>

            </div>
        </section>
    );
}