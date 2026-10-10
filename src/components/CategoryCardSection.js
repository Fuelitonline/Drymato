// import React from 'react';

// // Custom SVG Icons matching the reference line art for Drymato Dehydrated Categories
// const SproutIcon = () => (
//     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-forest)]">
//         <path d="M7 20h10" />
//         <path d="M12 20v-8" />
//         <path d="M12 12C12 7 7 4 3 7c0 5 4 8 9 5Z" />
//         <path d="M12 12c0-5 5-8 9-5 0 5-4 8-9 5Z" />
//     </svg>
// );

// const FruitIcon = ({ color }) => (
//     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
//         <circle cx="12" cy="13" r="8" />
//         <path d="M12 5V2" />
//         <path d="M12 5c2-2 5-2 7 0" />
//         <path d="M12 13a4 4 0 0 0 4-4" opacity="0.6" />
//     </svg>
// );

// const PowderIcon = ({ color }) => (
//     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M12 3v3" />
//         <path d="M18.5 5.5l-2.1 2.1" />
//         <path d="M5.5 5.5l2.1 2.1" />
//         <path d="M4 14a8 8 0 0 0 16 0H4z" />
//         <path d="M7 19a5 5 0 0 0 10 0" />
//     </svg>
// );

// const FlakesIcon = ({ color }) => (
//     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
//     </svg>
// );

// const HerbsIcon = ({ color }) => (
//     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M12 22V12" />
//         <path d="M12 12C12 7 7 4 3 7c0 5 4 8 9 5Z" />
//         <path d="M12 12c0-5 5-8 9-5 0 5-4 8-9 5Z" />
//         <path d="M12 17c-3 0-5-2-5-4" opacity="0.6" />
//         <path d="M12 17c3 0 5-2 5-4" opacity="0.6" />
//     </svg>
// );

// const CATEGORY_CARDS = [
//     {
//         id: 'dehydrated-fruits',
//         title: 'DEHYDRATED FRUITS',
//         description: 'Crisp, sweet &\nnaturally nutrient-rich.',
//         bgColor: 'var(--color-surface)', // #fbf8f1
//         textColor: 'var(--color-forest)', // #243822
//         descColor: '#4d5743',
//         buttonBorder: 'var(--color-forest)',
//         buttonText: 'var(--color-forest)',
//         Icon: FruitIcon,
//         iconColor: 'var(--color-forest)',
//         imageUrl: '/images/categories/fruit-powder.png',
//         imageAlt: 'Dehydrated fruit slices'
//     },
//     {
//         id: 'veggie-powders',
//         title: 'VEGETABLE POWDERS',
//         description: 'Pure, vibrant &\n100% organic powders.',
//         bgColor: 'var(--color-brick)', // #8a2c21
//         textColor: '#FFFFFF',
//         descColor: '#f5d8d5',
//         buttonBorder: 'rgba(255, 255, 255, 0.45)',
//         buttonText: '#FFFFFF',
//         Icon: PowderIcon,
//         iconColor: '#FFFFFF',
//         imageUrl: '/images/categories/fruit-powder.png',
//         imageAlt: 'Spices and vegetable powders'
//     },
//     {
//         id: 'gourmet-flakes',
//         title: 'GOURMET FLAKES',
//         description: 'Intense aroma &\nsavory culinary flakes.',
//         bgColor: 'var(--color-forest)', // #243822
//         textColor: '#FFFFFF',
//         descColor: '#d2ded0',
//         buttonBorder: 'rgba(255, 255, 255, 0.35)',
//         buttonText: '#FFFFFF',
//         Icon: FlakesIcon,
//         iconColor: '#FFFFFF',
//         imageUrl: '/images/categories/fruit-powder.png',
//         imageAlt: 'Dried garlic and onion flakes'
//     },
//     {
//         id: 'herbs-spices',
//         title: 'HERBS & SPICES',
//         description: 'Sun-dried herbs &\nauthentic spice blends.',
//         bgColor: 'var(--color-sage)', // #8c9a72
//         textColor: '#FFFFFF',
//         descColor: '#f2f6ed',
//         buttonBorder: 'rgba(255, 255, 255, 0.45)',
//         buttonText: '#FFFFFF',
//         Icon: HerbsIcon,
//         iconColor: '#FFFFFF',
//         imageUrl: '/images/categories/fruit-powder.png',
//         imageAlt: 'Dried herbs and whole spices'
//     }
// ];

// export default function CategorySection() {
//     return (
//         <section
//             className="w-full py-16 px-4 sm:px-6 lg:px-8 selection:bg-[var(--color-brick)] selection:text-white"
//             style={{ backgroundColor: 'var(--background)' }}
//         >
//             <div className="max-w-6xl mx-auto">

//                 {/* Header with Title and Flanking Lines */}
//                 <div className="flex items-center justify-center gap-4 mb-12 w-full">
//                     <div className="h-[1px] bg-[#e3dab8] flex-1 max-w-[280px]" />
//                     <div className="flex items-center gap-2.5 px-2">
//                         <SproutIcon />
//                         <h2
//                             className="text-lg sm:text-2xl tracking-[0.18em] text-[var(--color-forest)] uppercase font-semibold"
//                             style={{ fontFamily: 'var(--font-serif)' }}
//                         >
//                             SHOP BY CATEGORY
//                         </h2>
//                     </div>
//                     <div className="h-[1px] bg-[#e3dab8] flex-1 max-w-[280px]" />
//                 </div>

//                 {/* Category Cards Responsive Grid */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
//                     {CATEGORY_CARDS.map((card) => {
//                         const IconComponent = card.Icon;
//                         return (
//                             <div
//                                 key={card.id}
//                                 className="relative overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-md"
//                                 style={{
//                                     backgroundColor: card.bgColor,
//                                     /* Exact Asymmetrical Top Wave Curve matching reference image */
//                                     borderRadius: '32px 85px 28px 28px',
//                                     minHeight: '270px'
//                                 }}
//                             >
//                                 {/* Content Container */}
//                                 <div className="p-7 sm:p-8 flex flex-col justify-between h-full relative z-10 max-w-[68%]">
//                                     <div>
//                                         {/* Category SVG Line Icon */}
//                                         <div className="mb-4">
//                                             <IconComponent color={card.iconColor} />
//                                         </div>

//                                         {/* Category Title */}
//                                         <h3
//                                             className="font-bold text-sm tracking-wider uppercase mb-2 leading-snug"
//                                             style={{
//                                                 color: card.textColor,
//                                                 fontFamily: 'var(--font-sans)'
//                                             }}
//                                         >
//                                             {card.title}
//                                         </h3>

//                                         {/* Short Description */}
//                                         <p
//                                             className="text-xs sm:text-[13px] leading-relaxed whitespace-pre-line font-medium"
//                                             style={{
//                                                 color: card.descColor,
//                                                 fontFamily: 'var(--font-sans)'
//                                             }}
//                                         >
//                                             {card.description}
//                                         </p>
//                                     </div>

//                                     {/* Shop Now Outline Pill Button */}
//                                     <div className="mt-8">
//                                         <button
//                                             className="px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-200 hover:scale-105 active:scale-95"
//                                             style={{
//                                                 border: `1px solid ${card.buttonBorder}`,
//                                                 color: card.buttonText,
//                                                 backgroundColor: 'transparent',
//                                                 fontFamily: 'var(--font-sans)'
//                                             }}
//                                         >
//                                             SHOP NOW
//                                         </button>
//                                     </div>
//                                 </div>

//                                 {/* Overlapping Bottom Right Dehydrated Product Image Cutout */}
//                                 <div className="absolute right-0 bottom-0 w-[55%] h-[62%] pointer-events-none select-none">
//                                     <img
//                                         src={card.imageUrl}
//                                         alt={card.imageAlt}
//                                         className="w-full h-full object-cover object-center translate-x-2 translate-y-2 scale-110 group-hover:scale-125 transition-transform duration-500 ease-out"
//                                         style={{
//                                             maskImage: 'radial-gradient(circle at 75% 75%, black 50%, transparent 95%)',
//                                             WebkitMaskImage: 'radial-gradient(circle at 75% 75%, black 50%, transparent 95%)'
//                                         }}
//                                     />
//                                 </div>
//                             </div>
//                         );
//                     })}
//                 </div>

//             </div>
//         </section>
//     );
// }



"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// Custom SVG Icons matching reference line art
const SproutIcon = () => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-[#243822]"
    >
        <path d="M7 20h10" />
        <path d="M12 20v-8" />
        <path d="M12 12C12 7 7 4 3 7c0 5 4 8 9 5Z" />
        <path d="M12 12c0-5 5-8 9-5 0 5-4 8-9 5Z" />
    </svg>
);

const VeggieIcon = ({ color }) => (
    <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
        <path d="M12 6v6l4 2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
    </svg>
);

const FruitIcon = ({ color }) => (
    <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <circle cx="12" cy="13" r="8" />
        <path d="M12 5V2" />
        <path d="M12 5c2-2 5-2 7 0" />
        <path d="M12 13a4 4 0 0 0 4-4" opacity="0.6" />
    </svg>
);

const VegPowderIcon = ({ color }) => (
    <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M12 3v3" />
        <path d="M18.5 5.5l-2.1 2.1" />
        <path d="M5.5 5.5l2.1 2.1" />
        <path d="M4 14a8 8 0 0 0 16 0H4z" />
        <path d="M7 19a5 5 0 0 0 10 0" />
    </svg>
);

const FruitPowderIcon = ({ color }) => (
    <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M12 2v4" />
        <path d="M6 8a6 6 0 0 0 12 0" />
        <path d="M4 14a8 8 0 0 0 16 0H4z" />
        <path d="M9 19a3 3 0 0 0 6 0" />
    </svg>
);

const B2B_CATEGORY_CARDS = [
    {
        id: "dehydrated-vegetables",
        slug: "dehydrated-vegetables",
        title: "DEHYDRATED VEGETABLES",
        description: "Bulk flakes, minced & diced veggies for food manufacturers.",
        bgColor: "#FBF8F1",
        textColor: "#243822",
        descColor: "#5C6B52",
        buttonBorder: "#243822",
        buttonText: "#243822",
        Icon: VeggieIcon,
        iconColor: "#243822",
        imageUrl:
            "/images/categories/dried-vegetables.png",
        imageAlt: "Dehydrated vegetables bulk supply",
    },
    {
        id: "dehydrated-fruits",
        slug: "dehydrated-fruits",
        title: "DEHYDRATED FRUITS",
        description: "Premium slices & chips for snack brands, cereals & bakery.",
        bgColor: "#8A2C21",
        textColor: "#FFFFFF",
        descColor: "#F2D3CF",
        buttonBorder: "rgba(255, 255, 255, 0.5)",
        buttonText: "#FFFFFF",
        Icon: FruitIcon,
        iconColor: "#FFFFFF",
        imageUrl:
            "/images/categories/dried-fruits.png",
        imageAlt: "Dehydrated fruits dried apple and kiwi slices",
    },
    {
        id: "vegetable-powder",
        slug: "vegetable-powder",
        title: "VEGETABLE POWDER",
        description: "Spray-dried & air-dried powders for seasonings & soups.",
        bgColor: "#243822",
        textColor: "#FFFFFF",
        descColor: "#CBD8C7",
        buttonBorder: "rgba(255, 255, 255, 0.4)",
        buttonText: "#FFFFFF",
        Icon: VegPowderIcon,
        iconColor: "#FFFFFF",
        imageUrl:
            "/images/categories/vegetable-powder.png",
        imageAlt: "Vibrant pure vegetable powders",
    },
    {
        id: "fruit-powder",
        slug: "fruit-powder",
        title: "FRUIT POWDER",
        description: "100% natural fruit powders for beverages & nutraceuticals.",
        bgColor: "#6E7D58",
        textColor: "#FFFFFF",
        descColor: "#E8EFE3",
        buttonBorder: "rgba(255, 255, 255, 0.5)",
        buttonText: "#FFFFFF",
        Icon: FruitPowderIcon,
        iconColor: "#FFFFFF",
        imageUrl:
            "/images/categories/fruit-powder.png",
        imageAlt: "100% Natural Fruit powders",
    },
];

export default function CategorySection() {
    return (
        <section
            className="w-full py-12 sm:pt-6 sm:pb-16 px-4 sm:px-6 bg-white lg:px-10 selection:bg-[#8A2C21] selection:text-white relative"
        // style={{ backgroundColor: "#F7F5EF" }}
        >
            <div className="max-w-7xl mx-auto">
                {/* HEADER SECTION WITH EXACT REFERENCE STYLING */}
                <div className="flex flex-col items-center justify-center mb-10 sm:mb-14 text-center">
                    <div className="flex items-center justify-center gap-3 sm:gap-4 w-full mb-2">
                        <div className="h-[1px] bg-[#E3DAB8] flex-1 max-w-[200px] sm:max-w-[280px]" />
                        <div className="flex items-center gap-2 px-2">
                            <SproutIcon />
                            <h2
                                className="text-lg sm:text-2xl md:text-3xl tracking-[0.17em] text-[#243822] uppercase"
                                style={{ fontFamily: "serif" }}
                            >
                                EXPLORE PRODUCT CATEGORIES
                            </h2>
                        </div>
                        <div className="h-[1px] bg-[#E3DAB8] flex-1 max-w-[200px] sm:max-w-[280px]" />
                    </div>

                    <p className="text-xs sm:text-sm text-[#666053] font-medium tracking-wider uppercase mt-1">
                        BULK INGREDIENTS • FOOD MANUFACTURING • EXPORT SUPPLY
                    </p>
                </div>

                {/* CATEGORY CARDS GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
                    {B2B_CATEGORY_CARDS.map((card) => {
                        const IconComponent = card.Icon;
                        const targetUrl = `/product?category=${card.slug}`;

                        return (
                            <Link
                                key={card.id}
                                href={targetUrl}
                                className="relative group cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-xl flex flex-col justify-between block"
                                style={{
                                    backgroundColor: card.bgColor,
                                    borderRadius: "32px 85px 28px 28px",
                                    minHeight: "260px",
                                }}
                            >
                                {/* BACKGROUND IMAGE CONTAINER */}
                                {/* <div className="absolute right-1 bottom-1 w-32 sm:w-36 md:w-40 h-32 sm:h-36 md:h-40 pointer-events-none select-none z-0 overflow-hidden flex items-end justify-end p-1">
                                    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xs">
                                        <Image
                                            src={card.imageUrl}
                                            alt={card.imageAlt}
                                            fill
                                            sizes="(max-width: 640px) 128px, (max-width: 768px) 144px, 160px"
                                            className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out opacity-85 group-hover:opacity-100"
                                        />
                                        {/* Radial mask overlay blending edge seamlessly into background *
                                        <div
                                            className="absolute inset-0 pointer-events-none"
                                            style={{
                                                background: `radial-gradient(circle at 100% 100%, transparent 40%, ${card.bgColor} 98%)`,
                                            }}
                                        />
                                    </div>
                                </div> */}

                                {/* PRODUCT IMAGE */}
                                <div className="absolute -right-3 -bottom-2 w-[65%] sm:w-[60%] md:w-[70%] h-[62%] pointer-events-none select-none z-0">
                                    <Image
                                        src={card.imageUrl}
                                        alt={card.imageAlt}
                                        fill
                                        sizes="(max-width: 640px) 220px, (max-width: 768px) 250px, 280px"
                                        className="object-contain object-right-bottom group-hover:scale-105 transition-transform duration-500 ease-out opacity-100"
                                    />
                                </div>

                                {/* FOREGROUND CONTENT CONTAINER */}
                                <div className="p-6 sm:p-7 flex flex-col justify-between h-full relative z-10 max-w-[72%] sm:max-w-[70%]">
                                    <div>
                                        <div className="mb-3">
                                            <IconComponent color={card.iconColor} />
                                        </div>

                                        <h3
                                            className="font-bold text-xs sm:text-sm tracking-wider uppercase mb-2 leading-snug"
                                            style={{ color: card.textColor }}
                                        >
                                            {card.title}
                                        </h3>

                                        <p
                                            className="text-xs sm:text-[13px] leading-relaxed font-medium"
                                            style={{ color: card.descColor }}
                                        >
                                            {card.description}
                                        </p>
                                    </div>

                                    <div className="mt-6 pt-2">
                                        <span
                                            className="inline-block px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wider uppercase transition-all duration-200 group-hover:scale-105 shadow-xs whitespace-nowrap"
                                            style={{
                                                border: `2px solid ${card.buttonBorder}`,
                                                color: card.buttonText,
                                                backgroundColor: "transparent",
                                            }}
                                        >
                                            INQUIRE BULK
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}