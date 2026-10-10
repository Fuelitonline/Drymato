"use client";

import Image from "next/image";

// SVG Icons matching the reference nodes
const Icons = {
    horeca: (
        <svg className="w-5 h-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
    ),
    foodManufacturers: (
        <svg className="w-5 h-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V11m0 0H9m1 0h4" />
        </svg>
    ),
    wholesalers: (
        <svg className="w-5 h-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
        </svg>
    ),
    herbal: (
        <svg className="w-5 h-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
    ),
    international: (
        <svg className="w-5 h-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
    ),
};

const clientCategories = [
    {
        id: "horeca",
        title: "HORECA",
        desc: "Hotels • Restaurants • Cafés • Catering",
        icon: Icons.horeca,
        img: "/hero-section/chef.png",
    },
    {
        id: "manufacturers",
        title: "Food Manufacturers",
        desc: "Soups • Sauces • Seasonings • Instant Foods • Ready-to-Eat",
        icon: Icons.foodManufacturers,
        img: "/hero-section/processing.png",
    },
    {
        id: "wholesalers",
        title: "Wholesalers & Distributors",
        desc: "Bulk ingredients and commercial quantities",
        icon: Icons.wholesalers,
        img: "/hero-section/chef.png",
    },
    {
        id: "international",
        title: "International Buyers",
        desc: "Bulk supply • Private Label • Custom Packaging",
        icon: Icons.international,
        img: "/hero-section/chef.png",
    },
    {
        id: "herbal",
        title: "Herbal & Botanical Businesses",
        desc: "Applicable herbs, fruits and botanical powders",
        icon: Icons.herbal,
        img: "/hero-section/chef.png",
    },
];

// A real leaf shape (pointed oval with a center vein) — reused for every decorative leaf,
// only size/rotation/opacity/color change per placement.
function Leaf({ className = "", color = "text-sage" }) {
    return (
        <svg viewBox="0 0 60 100" className={`${className} ${color}`} fill="none">
            <path
                d="M30 2 C50 20 58 45 30 98 C2 45 10 20 30 2 Z"
                fill="currentColor"
            />
            <path d="M30 10 L30 90" stroke="white" strokeWidth="1.5" opacity="0.35" />
        </svg>
    );
}

export default function WhoWeServeSection() {
    return (
        <section className="relative w-full py-16 lg:py-24 bg-background text-forest overflow-hidden">

            {/* Corner decorative leaf clusters */}
            <div className="absolute top-0 right-0 w-56 sm:w-80 h-56 sm:h-80 pointer-events-none z-0">
                <Leaf className="absolute top-4 right-8 w-24 h-40 rotate-[35deg] opacity-25" color="text-sage" />
                <Leaf className="absolute top-16 right-24 w-16 h-28 rotate-[10deg] opacity-20" color="text-forest" />
            </div>

            <div className="absolute bottom-0 left-0 w-56 sm:w-80 h-56 sm:h-80 pointer-events-none z-0">
                <Leaf className="absolute bottom-4 left-8 w-24 h-40 -rotate-[35deg] opacity-25" color="text-sage" />
                <Leaf className="absolute bottom-16 left-24 w-16 h-28 -rotate-[10deg] opacity-20" color="text-forest" />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

                    {/* Left Column: Heading & Introductory Text */}
                    <div className="lg:col-span-4 space-y-5 text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start gap-3">
                            <span className="h-px w-10 bg-forest/30" />
                            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-forest">
                                Who We Serve
                            </span>
                        </div>

                        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest leading-[1.18]">
                            Built Around <br />
                            <span className="italic text-brick">Business Needs</span>
                        </h2>

                        <p className="text-foreground/70 text-sm sm:text-base leading-relaxed max-w-md mx-auto lg:mx-0 font-medium">
                            Drymato works with businesses across different stages of the food and ingredient supply chain.
                        </p>
                    </div>

                    {/* Right Column: Desktop Layout (radial image collage + labels) */}
                    <div className="hidden lg:block lg:col-span-8 relative w-full h-[640px]">

                        {/* SVG ClipPaths for the collage images */}
                        <svg className="absolute w-0 h-0" aria-hidden="true">
                            <defs>
                                <clipPath id="leaf-top-left" clipPathUnits="objectBoundingBox">
                                    <path d="M 0.5,0 C 0.85,0 1,0.35 1,0.7 C 1,1 0.7,1 0.3,0.85 C 0,0.7 0,0.35 0.5,0 Z" />
                                </clipPath>
                                <clipPath id="leaf-top-right" clipPathUnits="objectBoundingBox">
                                    <path d="M 0,0.3 C 0,0 0.4,0 0.8,0.3 C 1,0.55 1,0.85 0.7,1 C 0.3,1 0,0.7 0,0.3 Z" />
                                </clipPath>
                                <clipPath id="leaf-center" clipPathUnits="objectBoundingBox">
                                    <path d="M 0.5,0 C 0.9,0.1 1,0.4 0.9,0.7 C 0.75,1 0.25,1 0.1,0.7 C 0,0.4 0.1,0.1 0.5,0 Z" />
                                </clipPath>
                                <clipPath id="leaf-left" clipPathUnits="objectBoundingBox">
                                    <path d="M 0.4,0 C 0.8,0 1,0.3 1,0.7 C 0.8,1 0.3,1 0,0.6 C 0,0.2 0.1,0 0.4,0 Z" />
                                </clipPath>
                                <clipPath id="leaf-bottom" clipPathUnits="objectBoundingBox">
                                    <path d="M 0.2,0 C 0.7,0 1,0.2 1,0.6 C 0.9,0.9 0.5,1 0.1,0.8 C 0,0.6 0,0.2 0.2,0 Z" />
                                </clipPath>
                                <clipPath id="leaf-bottom-right" clipPathUnits="objectBoundingBox">
                                    <path d="M 0.5,0 C 0.9,0.2 1,0.6 0.8,0.9 C 0.5,1 0.1,0.8 0,0.5 C 0,0.2 0.2,0 0.5,0 Z" />
                                </clipPath>
                            </defs>
                        </svg>

                        {/* Dotted Connection Lines */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 700 620" fill="none">
                            <path d="M 280 100 Q 320 70 350 55" stroke="#8c9a72" strokeWidth="1.5" strokeDasharray="3 3" />
                            <path d="M 520 160 Q 570 150 600 150" stroke="#8c9a72" strokeWidth="1.5" strokeDasharray="3 3" />
                            <path d="M 240 340 Q 170 355 150 365" stroke="#8c9a72" strokeWidth="1.5" strokeDasharray="3 3" />
                            <path d="M 330 500 Q 315 545 310 565" stroke="#8c9a72" strokeWidth="1.5" strokeDasharray="3 3" />
                            <path d="M 560 420 Q 605 430 625 435" stroke="#8c9a72" strokeWidth="1.5" strokeDasharray="3 3" />
                        </svg>

                        {/* Real leaf accents scattered between the collage images */}
                        <Leaf className="absolute top-[6%] left-[52%] w-8 h-14 rotate-[-30deg] z-20 opacity-90" color="text-forest" />
                        <Leaf className="absolute top-[25%] left-[17%] w-9 h-16 rotate-[20deg] z-20 opacity-90" color="text-forest-light" />
                        <Leaf className="absolute top-[40%] left-[57%] w-7 h-12 rotate-[70deg] z-20 opacity-90" color="text-sage" />
                        <Leaf className="absolute bottom-[22%] left-[43%] w-8 h-14 rotate-[-10deg] z-20 opacity-90" color="text-forest" />

                        {/* Collage Center Container */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-[520px] h-[480px]">

                                {/* Image 1: Top Left - HORECA Chef */}
                                <div className="absolute top-0 left-[10%] w-[185px] h-[175px] shadow-md hover:scale-105 transition-transform duration-300 z-10" style={{ clipPath: "url(#leaf-top-left)" }}>
                                    <Image src="/hero-section/chef.png" alt="HORECA Kitchen" fill className="object-cover" />
                                </div>

                                {/* Image 2: Top Right - Factory */}
                                <div className="absolute top-[20px] right-[12%] w-[180px] h-[165px] shadow-md hover:scale-105 transition-transform duration-300 z-10" style={{ clipPath: "url(#leaf-top-right)" }}>
                                    <Image src="/hero-section/processing.png" alt="Food Factory" fill className="object-cover" />
                                </div>

                                {/* Image 3: Center - Guavas & Dehydrated Bowls */}
                                <div className="absolute top-[150px] left-[32%] w-[215px] h-[190px] shadow-lg hover:scale-105 transition-transform duration-300 z-10" style={{ clipPath: "url(#leaf-center)" }}>
                                    <Image src="/hero-section/dehydrated-food.png" alt="Fresh & Dehydrated Ingredients" fill className="object-cover" />
                                </div>

                                {/* Image 4: Middle Left - Warehouse Forklift */}
                                <div className="absolute top-[180px] -left-[2%] w-[180px] h-[165px] shadow-md hover:scale-105 transition-transform duration-300 z-10" style={{ clipPath: "url(#leaf-left)" }}>
                                    <Image src="/wholesale_hero_banner.png" alt="Warehouse Bulk Storage" fill className="object-cover" />
                                </div>

                                {/* Image 5: Bottom Center - Container Ship */}
                                <div className="absolute bottom-[0px] left-[24%] w-[210px] h-[150px] shadow-md hover:scale-105 transition-transform duration-300 z-10" style={{ clipPath: "url(#leaf-bottom)" }}>
                                    <Image src="/hero-section/export.png" alt="International Cargo Ship" fill className="object-cover" />
                                </div>

                                {/* Image 6: Bottom Right - Herbal / Botanical Hands */}
                                <div className="absolute bottom-[50px] -right-[4%] w-[185px] h-[175px] shadow-md hover:scale-105 transition-transform duration-300 z-10" style={{ clipPath: "url(#leaf-bottom-right)" }}>
                                    <Image src="/hero-section/botonical.png" alt="Herbal Powder Processing" fill className="object-cover" />
                                </div>

                            </div>
                        </div>

                        {/* Labels — repositioned to sit clear of the collage, with highlighted and enlarged headings */}

                        {/* Label 1: HORECA */}
                        <div className="absolute top-0 left-[290px] z-30 flex items-start gap-2.5 max-w-[210px] bg-background/80 backdrop-blur-sm p-2 rounded-xl border border-sage/20 shadow-sm">
                            <div className="w-10 h-10 rounded-full bg-surface border border-sage/40 flex items-center justify-center shadow-sm shrink-0">
                                {Icons.horeca}
                            </div>
                            <div>
                                <h4 className="text-sm font-extrabold text-forest uppercase tracking-wider drop-shadow-xs">HORECA</h4>
                                <p className="text-[11px] text-foreground/70 font-semibold leading-tight mt-0.5">Hotels • Restaurants • Cafés • Catering</p>
                            </div>
                        </div>

                        {/* Label 2: Food Manufacturers */}
                        <div className="absolute top-[100px] right-0 z-30 flex items-start gap-2.5 max-w-[210px] bg-background/80 backdrop-blur-sm p-2 rounded-xl border border-sage/20 shadow-sm">
                            <div className="w-10 h-10 rounded-full bg-surface border border-sage/40 flex items-center justify-center shadow-sm shrink-0">
                                {Icons.foodManufacturers}
                            </div>
                            <div>
                                <h4 className="text-sm font-extrabold text-forest uppercase tracking-wider drop-shadow-xs">Food Manufacturers</h4>
                                <p className="text-[11px] text-foreground/70 font-semibold leading-tight mt-0.5">
                                    Soups • Sauces • Seasonings • Instant Foods • Ready-to-Eat
                                </p>
                            </div>
                        </div>

                        {/* Label 3: Wholesalers & Distributors */}
                        <div className="absolute top-[355px] left-0 z-30 flex items-start gap-2.5 max-w-[190px] bg-background/80 backdrop-blur-sm p-2 rounded-xl border border-sage/20 shadow-sm">
                            <div className="w-10 h-10 rounded-full bg-surface border border-sage/40 flex items-center justify-center shadow-sm shrink-0">
                                {Icons.wholesalers}
                            </div>
                            <div>
                                <h4 className="text-sm font-extrabold text-forest uppercase tracking-wider drop-shadow-xs">Wholesalers &amp; Distributors</h4>
                                <p className="text-[11px] text-foreground/70 font-semibold leading-tight mt-0.5">
                                    Bulk ingredients and commercial quantities
                                </p>
                            </div>
                        </div>

                        {/* Label 4: International Buyers */}
                        <div className="absolute bottom-0 left-[190px] z-30 flex items-start gap-2.5 max-w-[230px] bg-background/80 backdrop-blur-sm p-2 rounded-xl border border-sage/20 shadow-sm">
                            <div className="w-10 h-10 rounded-full bg-surface border border-sage/40 flex items-center justify-center shadow-sm shrink-0">
                                {Icons.international}
                            </div>
                            <div>
                                <h4 className="text-sm font-extrabold text-forest uppercase tracking-wider drop-shadow-xs">International Buyers</h4>
                                <p className="text-[11px] text-foreground/70 font-semibold leading-tight mt-0.5">
                                    Bulk supply • Private Label • Custom Packaging
                                </p>
                            </div>
                        </div>

                        {/* Label 5: Herbal & Botanical */}
                        <div className="absolute bottom-[95px] right-0 z-30 flex items-start gap-2.5 max-w-[210px] bg-background/80 backdrop-blur-sm p-2 rounded-xl border border-sage/20 shadow-sm">
                            <div className="w-10 h-10 rounded-full bg-surface border border-sage/40 flex items-center justify-center shadow-sm shrink-0">
                                {Icons.herbal}
                            </div>
                            <div>
                                <h4 className="text-sm font-extrabold text-forest uppercase tracking-wider drop-shadow-xs">Herbal &amp; Botanical Businesses</h4>
                                <p className="text-[11px] text-foreground/70 font-semibold leading-tight mt-0.5">
                                    Applicable herbs, fruits &amp; botanical powders
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Mobile & Tablet Responsive List */}
                    <div className="block lg:hidden col-span-1 space-y-4 mt-6">
                        {clientCategories.map((cat) => (
                            <div key={cat.id} className="bg-surface rounded-2xl p-4 border border-sage/25 flex items-start gap-4 shadow-sm">
                                <div className="w-12 h-12 rounded-full bg-background border border-sage/40 flex items-center justify-center shrink-0">
                                    {cat.icon}
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-lg font-extrabold text-forest tracking-wide">{cat.title}</h3>
                                    <p className="text-xs text-foreground/70 leading-relaxed font-semibold">{cat.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}