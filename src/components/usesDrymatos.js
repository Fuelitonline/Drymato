"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const DISHES = [
    {
        id: 1,
        name: "Pasta & Risotto",
        emoji: "🍝",
        image: "/use_pasta.png"
    },
    {
        id: 2,
        name: "Pizza & Flatbreads",
        emoji: "🍕",
        image: "/use_pizza.png"
    },
    {
        id: 3,
        name: "Fresh Salads",
        emoji: "🥗",
        image: "/use_salads.png"
    },
    {
        id: 4,
        name: "Gourmet Sandwiches",
        emoji: "🥪",
        image: "/use_sandwiches.png"
    },
    {
        id: 5,
        name: "Breakfast Dishes",
        emoji: "🍳",
        image: "/use_breakfast.png"
    },
    {
        id: 6,
        name: "Salad and Dips",
        emoji: "🥣",
        image: "/salad.png"
    },
    {
        id: 7,
        name: "Burgers & Wraps",
        emoji: "🍔",
        image: "/burger and wraps.png"
    },
    {
        id: 8,
        name: "Pasta",
        emoji: "🍛",
        image: "/pasta.png"
    },
    {
        id: 9,
        name: "Tomato Bruschetta",
        emoji: "🍛",
        image: "/Tomato Bruschetta.jpeg"
    },
    {
        id: 10,
        name: "machroni pasta",
        emoji: "🍛",
        image: "/machroni_pasta.jpeg"
    },
    {
        id: 11,
        name: "Omelette",
        emoji: "🍛",
        image: "/Omelettejpeg.jpeg"
    },
    {
        id: 12,
        name: "Mediterranean",
        emoji: "🍛",
        image: "/Mediterranean Sun-Dried Tomato Platter.jpeg"
    },

];

export default function UsesDrymatos() {
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const container = containerRef.current;
        if (!container) return;

        const dishCards = container.querySelectorAll(".dish-card");

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play reverse play reverse",
            }
        });

        // Set initial positions
        gsap.set(dishCards, { y: 50, opacity: 0 });

        // Add animations to timeline
        tl.to(dishCards, {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out"
        });

        return () => {
            if (tl.scrollTrigger) tl.scrollTrigger.kill();
            tl.kill();
        };
    }, []);

    return (
        <section ref={containerRef} className="relative w-full overflow-hidden flex flex-col bg-white">

            {/* SVG ClipPath Definition for How to Use Drymato Wavy Section */}
            <svg width="0" height="0" className="absolute pointer-events-none">
                <defs>
                    <clipPath id="wavySectionClip2Desktop" clipPathUnits="objectBoundingBox">
                        <path d="M 0,0.10 C 0.3,0.02 0.7,0.12 1,0.04 L 1,0.90 C 0.7,0.88 0.3,0.98 0,0.96 Z" />
                    </clipPath>
                    <clipPath id="wavySectionClip2Mobile" clipPathUnits="objectBoundingBox">
                        <path d="M 0,0.025 C 0.3,0.005 0.7,0.03 1,0.01 L 1,0.975 C 0.7,0.97 0.3,0.995 0,0.99 Z" />
                    </clipPath>
                </defs>
            </svg>

            {/* SECTION 2: HOW TO USE DRYMATO */}
            <div
                className="wavy-container-2 relative w-full bg-gray-900 pt-10 pb-10 sm:pt-28 sm:pb-58 px-6 md:px-12 lg:px-24 flex flex-col items-center z-10"
            >

                {/* Background Image with Dark Overlay */}
                <div
                    style={{ backgroundImage: "url('/tomato-filed-5.png')" }}
                    className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden bg-fixed bg-cover bg-center filter saturate-75"
                >
                    <div className="absolute inset-0 bg-black/65" />
                </div>

                <div className="relative z-10 flex flex-col items-center w-full">
                    {/* Header & Category Label */}
                    <div className="flex flex-col items-center text-center my-14 max-w-3xl mx-auto px-4">
                        <span className="font-dancing text-[#ff444c] text-[clamp(1.6rem,2.6vw,2.2rem)] font-semibold mb-1 block">
                            Inspiration
                        </span>
                        <h2 className="font-poppins text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight text-white uppercase">
                            FROM GOURMET TO EVERYDAY
                        </h2>

                        {/* Red outline tomato separator matching mockup (—— o 🍅 o ——) */}
                        <div className="flex items-center justify-center gap-3 w-64 mt-5">
                            <div className="h-[1px] bg-white/20 flex-1" />
                            <div className="w-1.5 h-1.5 rounded-full border border-[#ff444c] bg-white/10 flex-shrink-0" />

                            {/* Tomato outline icon */}
                            <svg className="w-6 h-6 text-[#ff444c] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.5c-3 0-5.5 1.8-5.5 4.5s2 4.5 5.5 4.5 5.5-1.8 5.5-4.5-2-4.5-5.5-4.5z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.5c0-1 .5-2 1.5-2.5M12 6.5c-.5-1-1.5-1.5-2.5-1M12 6.5c-.8 0-1.5.5-1.5 1" />
                            </svg>

                            <div className="w-1.5 h-1.5 rounded-full border border-[#ff444c] bg-white/10 flex-shrink-0" />
                            <div className="h-[1px] bg-white/20 flex-1" />
                        </div>

                        <p className="font-poppins text-sm md:text-base text-white/80 max-w-2xl mt-6 leading-relaxed">
                            Simply rehydrate and add to your favorite recipes for rich tomato flavor, texture, and visual appeal.
                        </p>
                    </div>

                    {/* How to Use - Dish Grid (Gallery Style) */}
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-8xl w-full">
                        {DISHES.map((dish) => (
                            <div
                                key={dish.id}
                                className="dish-card aspect-[4/3] rounded-tl-[32px] rounded-br-[32px] relative overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] border border-white/10 group cursor-pointer opacity-0 transition-all duration-500 ease-out"
                            >
                                {/* Background Image or Glassmorphic State */}
                                {dish.image ? (
                                    <>
                                        <Image
                                            src={dish.image}
                                            alt={dish.name}
                                            fill
                                            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/75 via-black/25 to-transparent group-hover:from-black/85 group-hover:via-black/35 group-hover:to-transparent transition-all duration-500" />
                                    </>
                                ) : (
                                    <>
                                        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-md group-hover:from-white/[0.08] group-hover:to-white/[0.02] transition-all duration-500" />
                                        {/* Subtle red background glow on hover for empty cards */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-[#ff444c]/0 to-[#ff444c]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </>
                                )}

                                {/* Glow Red Border on Hover */}
                                <div className="absolute inset-0 rounded-tl-[32px] rounded-br-[32px] border border-white/0 group-hover:border-[#ff444c]/40 transition-colors duration-500 pointer-events-none" />

                                {/* Card Content Container */}
                                <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-between z-10">
                                    {/* Top Part: Emoji glassmorphic bubble */}
                                    {/* <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-2xl shadow-[0_4px_12px_rgba(0,0,0,0.2)] group-hover:bg-[#ff444c]/20 group-hover:border-[#ff444c]/30 group-hover:scale-110 transition-all duration-500 select-none">
                                        {dish.emoji}
                                    </div> */}

                                    {/* Bottom Part: Text */}
                                    <div className="flex flex-col">
                                        <span className="font-poppins font-extrabold text-xs sm:text-sm md:text-base text-white uppercase tracking-[1.5px] group-hover:text-[#ff444c] transition-colors duration-300 leading-tight">
                                            {dish.name}
                                        </span>
                                        <div className="w-0 h-[2px] bg-[#ff444c] mt-2 group-hover:w-12 transition-all duration-500 ease-out" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Custom Styles */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800;900&family=Dancing+Script:wght@700&display=swap');

                .wavy-container-2 {
                    clip-path: url(#wavySectionClip2Mobile);
                }
                @media (min-width: 1024px) {
                    .wavy-container-2 {
                        clip-path: url(#wavySectionClip2Desktop);
                    }
                }

                .font-poppins {
                    font-family: 'Poppins', sans-serif;
                }
                .font-dancing {
                    font-family: 'Dancing Script', cursive;
                }
            `}</style>
        </section>
    );
}
