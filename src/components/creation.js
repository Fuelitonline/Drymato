"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const STEPS = [
    {
        id: 1,
        title: "1. Farm Selection",
        desc: "Grown with care in natural farms.",
        image: "/process_farm.png"
    },
    {
        id: 2,
        title: "2. Handpicked Produce",
        desc: "Only the best tomatoes chosen and halved.",
        image: "/process_handpicked.png"
    },
    {
        id: 3,
        title: "3. Slow Sun Drying",
        desc: "Slow sun-drying locks in flavor and nutrients.",
        image: "/process_sundrying.png"
    },
    {
        id: 4,
        title: "4. Quality Check",
        desc: "Handcrafted and packed hygienically.",
        image: "/process_quality.png"
    },
    {
        id: 5,
        title: "5. Hygienic Packaging",
        desc: "Pure. Natural. Premium. Ready to enjoy.",
        image: "/jaar/jaarFrontView.png"
    }
];



export default function Creation() {
    const containerRef = useRef(null);
    const leftLeafRef = useRef(null);
    const rightLeafRef = useRef(null);

    useEffect(() => {
        // Register GSAP ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        const container = containerRef.current;
        if (!container) return;

        const steps = container.querySelectorAll(".step-item");
        const arrows = container.querySelectorAll(".step-arrow");

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play reverse play reverse",
            }
        });

        // Set initial positions for animation
        gsap.set(leftLeafRef.current, { y: -80, opacity: 0 });
        gsap.set(rightLeafRef.current, { y: -80, opacity: 0 });
        gsap.set(steps, { y: 80, opacity: 0 });
        gsap.set(arrows, { scale: 0, opacity: 0 });

        // Build the entrance animation sequence
        tl.to(leftLeafRef.current, {
            y: 0,
            opacity: 0.7,
            duration: 1.0,
            ease: "power2.out"
        })
            .to(rightLeafRef.current, {
                y: 0,
                opacity: 0.7,
                duration: 1.0,
                ease: "power2.out"
            }, "<")
            .to(steps, {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.25,
                ease: "power3.out"
            }, "-=0.5")
            .to(arrows, {
                scale: 1,
                opacity: 1,
                duration: 0.6,
                stagger: 0.25,
                ease: "back.out(1.8)"
            }, "-=0.8");

        return () => {
            if (tl.scrollTrigger) tl.scrollTrigger.kill();
            tl.kill();
        };
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative w-full bg-gradient-to-b from-[#fce9da] to-[#fffefe] pt-12  overflow-hidden flex flex-col items-center"
        >
            {/* SVG ClipPath Definition for Top & Bottom Wavy Section */}
            <svg width="0" height="0" className="absolute pointer-events-none">
                <defs>
                    <clipPath id="wavySectionClipDesktop" clipPathUnits="objectBoundingBox">
                        <path d="M 0,0.06 
                                 C 0.25,0.00 0.25,0.12 0.5,0.06 
                                 C 0.75,0.00 0.75,0.12 1,0.06 
                                 L 1,0.94 
                                 C 0.75,1.00 0.75,0.88 0.5,0.94 
                                 C 0.25,1.00 0.25,0.88 0,0.94 
                                 Z" />
                    </clipPath>
                    <clipPath id="wavySectionClipMobile" clipPathUnits="objectBoundingBox">
                        <path d="M 0,0.015 
                                 C 0.25,0.00 0.25,0.03 0.5,0.015 
                                 C 0.75,0.00 0.75,0.03 1,0.015 
                                 L 1,0.985 
                                 C 0.75,1.00 0.75,0.97 0.5,0.985 
                                 C 0.25,1.00 0.25,0.97 0,0.985 
                                 Z" />
                    </clipPath>
                </defs>
            </svg>

            {/* Inner Wavy Container holding the video and all content */}
            <div
                className="wavy-container relative w-full bg-black pt-28 pb-20 lg:py-24 px-6 md:px-12 lg:px-6 xl:px-16 2xl:px-24 overflow-hidden flex flex-col items-center"
            >
                {/* Background Video with Overlay */}
                <div className="fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
                    <video
                        src="/process-vidio.mp4"
                        poster="/process_farm.png"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover [backface-visibility:hidden] [transform:translate3d(0,0,0)] will-change-transform"
                    />
                    {/* Dark overlay for rich cinema feel and clear contrast - backdrop-blur removed to prevent layout thrashing */}
                    <div className="absolute inset-0 bg-black/70" />
                </div>

                {/* Left Leaf Sketch Decor */}
                <div ref={leftLeafRef} className="absolute left-0 md:left-0 top-[40%] -translate-y-1/2 z-10 hidden sm:block w-36 md:w-100 h-auto pointer-events-none select-none">
                    <Image src="/lefttree.png" alt="Left tree branch" width={400} height={400} className="w-full h-auto object-contain opacity-40 invert" />
                </div>

                {/* Right Leaf Sketch Decor */}
                <div ref={rightLeafRef} className="absolute -right-2 md:right-0 top-[40%] -translate-y-1/2 z-10 hidden sm:block w-36 md:w-100 h-auto pointer-events-none select-none">
                    <Image src="/righttree.png" alt="Right tree branch" width={400} height={400} className="w-full h-auto object-contain opacity-40 invert" />
                </div>

                {/* Section Header */}
                <div className="flex flex-col items-center z-10 text-center mb-16">
                    {/* Red Badge matching screenshot */}
                    <div className="bg-[#a50808] text-white text-[10px] md:text-xs font-bold tracking-widest px-5 py-1.5 rounded-full uppercase mb-4 shadow-[0_4px_12px_rgba(227,28,37,0.3)]">
                        From Farms To Jars
                    </div>

                    {/* <span className="font-dancing text-[#ff444c] text-[clamp(1.6rem,2.6vw,2.2rem)] font-semibold mb-1 block">
                        Our Process
                    </span> */}
                    <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase">
                        The Art Of Dehydration
                    </h2>
                    <span className="font-dancing text-[#ff444c] text-[clamp(1.6rem,2.6vw,2.2rem)] font-semibold mb-1 block">
                        Where nature, patience and craftsmanship come together
                    </span>

                    {/* Visual separator matching screenshot */}
                    <div className="flex items-center gap-4 w-60 mt-4 relative">
                        {/* <div className="h-[1.5px] bg-[#ff444c]/40 flex-1" />
                        <div className="w-8 h-8 rounded-full border border-[#ff444c] flex items-center justify-center bg-white shadow-sm">
                            <svg className="w-4 h-4 text-[#ff444c]" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2a4 4 0 0 0-3.87 3h7.74A4 4 0 0 0 12 2zm0 4C7.03 6 3 10.03 3 15c0 4.42 4.03 7 9 7s9-2.58 9-7c0-4.97-4.03-9-9-9zm-1.5 5.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm4.5 4a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm-7.5 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z" />
                            </svg>
                        </div>
                        <div className="h-[1.5px] bg-[#ff444c]/40 flex-1" /> */}
                    </div>
                </div>

                {/* Horizontal flow line of steps */}
                <div className="w-full max-w-8xl z-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-2">
                    {STEPS.map((step, index) => (
                        <div key={step.id} className="flex flex-col lg:flex-row items-center justify-center w-full lg:w-auto">

                             {/* Step content block */}
                            <div className="step-item flex flex-col items-center text-center max-w-[200px] lg:max-w-[130px] xl:max-w-[170px] 2xl:max-w-[200px] opacity-0">
                                {/* Circle Image container */}
                                <div className="w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 lg:w-30 lg:h-30 xl:w-40 xl:h-40 2xl:w-48 2xl:h-48 rounded-full overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.3)] bg-white flex items-center justify-center hover:scale-105 transition-transform duration-300 relative group cursor-pointer">
                                    <Image
                                        src={step.image}
                                        alt={step.title}
                                        width={192}
                                        height={192}
                                        className={`w-full h-full transform group-hover:scale-110 transition-transform duration-500 ${step.id === 5
                                                ? "object-contain p-4 lg:p-2.5 xl:p-3.5 2xl:p-4"
                                                : "object-cover"
                                            }`}
                                    />
                                    {/* Inner shadow depth effect overlay */}
                                    <div className="absolute inset-0 rounded-full shadow-[inset_0_8px_16px_rgba(0,0,0,0.5)] z-20 pointer-events-none" />
                                </div>

                                {/* Step Titles & Descriptions */}
                                <h3 className="font-poppins text-base lg:text-xs xl:text-sm 2xl:text-base font-extrabold text-white mt-5 tracking-tight uppercase">
                                    {step.title}
                                </h3>
                                <p className="text-[11px] lg:text-[9.5px] xl:text-[10.5px] 2xl:text-[11px] text-gray-300 leading-relaxed font-semibold mt-2">
                                    {step.desc}
                                </p>
                            </div>

                            {/* Staggered transition arrow */}
                            {index < STEPS.length - 1 && (
                                <>
                                    {/* Desktop right arrow */}
                                    <div className="step-arrow hidden lg:flex items-center justify-center w-12 lg:w-8 xl:w-12 h-36 opacity-0">
                                        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                        </svg>
                                    </div>
                                    {/* Mobile/Tablet down arrow */}
                                    <div className="step-arrow flex lg:hidden items-center justify-center my-6 opacity-0">
                                        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                                        </svg>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>

            </div>

            {/* Infinite Text Marquee Ticker */}
            <div className="w-full overflow-hidden pt-10 bg-transparent relative z-10 select-none">
                <div className="relative flex overflow-hidden">
                    <div className="animate-marquee whitespace-nowrap flex gap-6 text-4xl md:text-5xl lg:text-6xl font-poppins font-black text-gray-200/80 tracking-wider uppercase">
                        <span className="mx-2">100% Real Tomatoes</span>
                        <span className="text-[#a50808]/30">•</span>
                        <span className="mx-2">No Artificial Colors</span>
                        <span className="text-[#a50808]/30">•</span>
                        <span className="mx-2">Rich Flavor Retention</span>
                        <span className="text-[#a50808]/30">•</span>
                        <span className="mx-2">Bulk Supply Available</span>
                        <span className="text-[#a50808]/30">•</span>
                        <span className="mx-2">Private Label Solutions</span>
                        <span className="text-[#a50808]/30">•</span>
                        <span className="mx-2">HoReCa Ready</span>
                        <span className="text-[#a50808]/30">•</span>
                        <span className="mx-2">B2B Partnerships</span>
                        <span className="text-[#a50808]/30">•</span>
                        <span className="mx-2">Proudly Made in India</span>
                        <span className="text-[#a50808]/30">•</span>
                    </div>

                    <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-6 text-4xl md:text-5xl lg:text-6xl font-poppins font-black text-gray-200/80 tracking-wider uppercase">
                        <span className="mx-2">100% Real Tomatoes</span>
                        <span className="text-[#a50808]/30">•</span>
                        <span className="mx-2">No Artificial Colors</span>
                        <span className="text-[#a50808]/30">•</span>
                        <span className="mx-2">Rich Flavor Retention</span>
                        <span className="text-[#a50808]/30">•</span>
                        <span className="mx-2">Bulk Supply Available</span>
                        <span className="text-[#a50808]/30">•</span>
                        <span className="mx-2">Private Label Solutions</span>
                        <span className="text-[#a50808]/30">•</span>
                        <span className="mx-2">HoReCa Ready</span>
                        <span className="text-[#a50808]/30">•</span>
                        <span className="mx-2">B2B Partnerships</span>
                        <span className="text-[#a50808]/30">•</span>
                        <span className="mx-2">Proudly Made in India</span>
                        <span className="text-[#a50808]/30">•</span>
                    </div>
                </div>
            </div>

            {/* Custom Styles */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800;900&family=Dancing+Script:wght@700&display=swap');

                .wavy-container {
                    clip-path: url(#wavySectionClipMobile);
                }
                @media (min-width: 1024px) {
                    .wavy-container {
                        clip-path: url(#wavySectionClipDesktop);
                    }
                }

                .font-poppins {
                    font-family: 'Poppins', sans-serif;
                }
                .font-dancing {
                    font-family: 'Dancing Script', cursive;
                }

                @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-100%); }
                }
                @keyframes marquee2 {
                    0% { transform: translateX(100%); }
                    100% { transform: translateX(0%); }
                }
                .animate-marquee {
                    animation: marquee 45s linear infinite;
                }
                .animate-marquee2 {
                    animation: marquee2 45s linear infinite;
                }
            `}</style>
        </section>
    );
}
