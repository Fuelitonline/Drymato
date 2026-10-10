// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// export default function FounderStorySection() {
//     const sectionRef = useRef(null);
//     const leftColRef = useRef(null);
//     const rightColRef = useRef(null);
//     const tomatotreeRef = useRef(null);
//     const textWrapperRef = useRef(null);
//     const tomato1Ref = useRef(null);
//     const tomato2Ref = useRef(null);
//     const router = useRouter();


//     useEffect(() => {
//         gsap.registerPlugin(ScrollTrigger);

//         const section = sectionRef.current;
//         if (!section) return;

//         const tl = gsap.timeline({
//             scrollTrigger: {
//                 trigger: section,
//                 start: "top 80%",
//                 end: "bottom 20%",
//                 toggleActions: "restart reset restart reset",
//             }
//         });

//         // Set initial states
//         gsap.set(leftColRef.current, { x: -250, y: 250, opacity: 0 });
//         gsap.set(rightColRef.current, { opacity: 0 });
//         gsap.set(tomatotreeRef.current, { scale: 0.8, x: 50, opacity: 0 });
//         gsap.set(textWrapperRef.current, { x: 150, opacity: 0 });
//         gsap.set(tomato1Ref.current, { x: 0, y: 0, scale: 0.1, opacity: 0 });
//         gsap.set(tomato2Ref.current, { x: 0, y: 0, scale: 0.1, opacity: 0 });

//         // Build timeline animation sequence
//         tl.to(leftColRef.current, {
//             x: 0,
//             y: 0,
//             opacity: 1,
//             duration: 1.2,
//             ease: "power4.out" // fast to slow speed
//         })
//             .to(rightColRef.current, {
//                 opacity: 1,
//                 duration: 0.3
//             }, "-=0.6")
//             .to(tomatotreeRef.current, {
//                 scale: 1,
//                 x: 0,
//                 opacity: 0.28,
//                 duration: 1.0,
//                 ease: "power3.out" // right tree comes
//             }, "-=0.5")
//             .to(textWrapperRef.current, {
//                 x: 0,
//                 opacity: 1,
//                 duration: 1.2,
//                 ease: "power4.out" // text comes fast to slow
//             }, "-=0.4")
//             .to(tomato1Ref.current, {
//                 x: 140,
//                 y: -120,
//                 rotation: 35,
//                 scale: 1.1,
//                 opacity: 1,
//                 duration: 0.8,
//                 ease: "back.out(1.8)"
//             }, "-=0.8")
//             .to(tomato2Ref.current, {
//                 x: 100,
//                 y: -160,
//                 rotation: -45,
//                 scale: 0.95,
//                 opacity: 1,
//                 duration: 0.8,
//                 ease: "back.out(1.8)"
//             }, "-=0.6");

//         return () => {
//             if (tl.scrollTrigger) tl.scrollTrigger.kill();
//             tl.kill();
//         };
//     }, []);

//     return (
//         <section ref={sectionRef} className="w-full bg-white overflow-hidden flex flex-col lg:flex-row relative ">

//             {/* Left Column: Founder/Story Image */}
//             <div
//                 ref={leftColRef}
//                 className="lg:w-[55%] w-full min-h-[400px] lg:min-h-[720px] relative overflow-hidden opacity-0 z-10"
//             >
//                 <Image
//                     src="/poped-out--dried-tomato.png"
//                     alt="Drymato Founder Story"
//                     fill
//                     sizes="(max-width: 1024px) 100vw, 55vw"
//                     className="absolute inset-y-0 left-[-2%] w-[130%] h-full object-contain object-left-bottom pt-3 lg:pt-5 "
//                 />

//                 {/* Floating tomatoes designed to look like they are popping out from the jar area */}
//                 <div
//                     ref={tomato1Ref}
//                     className="absolute bottom-[18%] left-[70%] w-14 h-14 pointer-events-none select-none z-20 opacity-0"
//                 >
//                     <Image
//                         src="/tomatoimg.png"
//                         alt="Popping Tomato 1"
//                         width={56}
//                         height={56}
//                         className="w-full h-full object-contain filter drop-shadow-md"
//                     />
//                 </div>

//                 <div
//                     ref={tomato2Ref}
//                     className="absolute bottom-[20%] left-[70%] w-12 h-12 pointer-events-none select-none z-20 opacity-0"
//                 >
//                     <Image
//                         src="/tomatoimg.png"
//                         alt="Popping Tomato 2"
//                         width={48}
//                         height={48}
//                         className="w-full h-full object-contain filter drop-shadow-md"
//                     />
//                 </div>
//             </div>

//             {/* Right Column: Content Container */}
//             <div
//                 ref={rightColRef}
//                 className="lg:w-[45%] w-full bg-white py-20 px-8 sm:py-10 sm:px-16 lg:pr-24 lg:pl-1 flex flex-col justify-center relative overflow-hidden z-10 opacity-0"
//             >
//                 {/* Decorative Large Background Tomato Tree (partially hidden offscreen) */}
//                 <div
//                     ref={tomatotreeRef}
//                     className="absolute right-[-60px] bottom-[-40px] w-[450px] sm:w-[600px] h-auto pointer-events-none select-none z-0 opacity-[0.28]"
//                 >
//                     <Image
//                         src="/tomatotree.png"
//                         alt="Tomato Tree Background"
//                         width={600}
//                         height={600}
//                         className="w-full h-auto object-contain filter saturate-50"
//                     />
//                 </div>

//                 {/* Section Content */}
//                 <div
//                     ref={textWrapperRef}
//                     className="relative z-10 flex flex-col items-start max-w-lg"
//                 >

//                     {/* Category Label */}
//                     <span className="font-dancing text-[#b0121a] text-[clamp(1.6rem,2.6vw,2.2rem)] font-semibold mb-2 block">
//                         Our Story
//                     </span>

//                     {/* Section Title */}
//                     <h2 className="font-poppins text-3xl sm:text-4xl md:text-[42px] font-bold text-gray-900 leading-[1.25] mb-6">
//                         Born from a Love for<br className="hidden sm:block" /> Real Tomatoes
//                     </h2>

//                     {/* Paragraph 1 */}
//                     <p className="text-[13px] sm:text-[14px] text-gray-500 leading-relaxed font-semibold mb-5">
//                         At Drymato, we believe real food comes from nature and time. We handpick the freshest tomatoes and naturally sun-dry them to preserve their authentic flavor, texture and nutrition.
//                     </p>

//                     {/* Paragraph 2 */}
//                     <p className="text-[13px] sm:text-[14px] text-gray-500 leading-relaxed font-semibold mb-8">
//                         No shortcuts. No preservatives. Just pure sun-dried goodness, crafted with love.
//                     </p>

//                     {/* CTA Button */}
//                     <div>
//                         <button onClick={() => router.push("/about-us#our-story")} className="group/btn relative overflow-hidden bg-[#b0121a] border-2 border-[#b0121a] text-white px-8 py-3.5 rounded-xl text-xs font-extrabold tracking-widest uppercase shadow-[0_6px_20px_rgba(176,18,26,0.12)] hover:shadow-[0_8px_25px_rgba(176,18,26,0.22)] active:shadow-[0_4px_12px_rgba(176,18,26,0.15)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer z-10">
//                             {/* Background bubble shape rising from bottom to top */}
//                             <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[125%] aspect-square rounded-t-[50%] bg-white translate-y-full transition-transform duration-[750ms] ease-in-out z-0 group-hover/btn:translate-y-[12%]" />

//                             <span className="relative z-10 transition-colors duration-300 group-hover/btn:text-[#b0121a]">
//                                 READ OUR STORY
//                             </span>
//                         </button>
//                     </div>

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

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRouter } from "next/navigation";

const FINDER_ITEMS = [
    {
        label: "Search by Product",
        icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="7" strokeLinecap="round" strokeLinejoin="round" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
            </svg>
        ),
        items: ["Lemon", "Guava", "Tomato", "Beetroot", "Mint", "Pineapple"]
    },
    {
        label: "Explore by Category",
        icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <rect x="4" y="4" width="7" height="7" rx="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="13" y="4" width="7" height="7" rx="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="4" y="13" width="7" height="7" rx="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="13" y="13" width="7" height="7" rx="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        items: ["Fruits", "Vegetables", "Herbs", "Powders"]
    },
    {
        label: "Explore by Application",
        icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12z" />
            </svg>
        ),
        items: ["HORECA", "Food Manufacturing", "Ayurveda", "Cosmetics", "Export", "Wholesale"]
    }
];

export default function FounderStorySection() {
    const sectionRef = useRef(null);
    const leftColRef = useRef(null);
    const rightColRef = useRef(null);
    const tomatotreeRef = useRef(null);
    const textWrapperRef = useRef(null);
    const tomato1Ref = useRef(null);
    const tomato2Ref = useRef(null);
    const router = useRouter();

    const [activeFinder, setActiveFinder] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveFinder((prev) => (prev + 1) % FINDER_ITEMS.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const section = sectionRef.current;
        if (!section) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "restart reset restart reset",
            }
        });

        // Set initial states
        gsap.set(leftColRef.current, { x: -250, y: 250, opacity: 0 });
        gsap.set(rightColRef.current, { opacity: 0 });
        gsap.set(tomatotreeRef.current, { scale: 0.8, x: 50, opacity: 0 });
        gsap.set(textWrapperRef.current, { x: 150, opacity: 0 });
        gsap.set(tomato1Ref.current, { x: 0, y: 0, scale: 0.1, opacity: 0 });
        gsap.set(tomato2Ref.current, { x: 0, y: 0, scale: 0.1, opacity: 0 });

        // Build timeline animation sequence
        tl.to(leftColRef.current, {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power4.out" // fast to slow speed
        })
            .to(rightColRef.current, {
                opacity: 1,
                duration: 0.3
            }, "-=0.6")
            .to(tomatotreeRef.current, {
                scale: 1,
                x: 0,
                opacity: 0.28,
                duration: 1.0,
                ease: "power3.out" // right tree comes
            }, "-=0.5")
            .to(textWrapperRef.current, {
                x: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power4.out" // text comes fast to slow
            }, "-=0.4")
            .to(tomato1Ref.current, {
                x: 140,
                y: -120,
                rotation: 35,
                scale: 1.1,
                opacity: 1,
                duration: 0.8,
                ease: "back.out(1.8)"
            }, "-=0.8")
            .to(tomato2Ref.current, {
                x: 100,
                y: -160,
                rotation: -45,
                scale: 0.95,
                opacity: 1,
                duration: 0.8,
                ease: "back.out(1.8)"
            }, "-=0.6");

        return () => {
            if (tl.scrollTrigger) tl.scrollTrigger.kill();
            tl.kill();
        };
    }, []);

    return (
        <section ref={sectionRef} className="w-full bg-surface overflow-hidden flex flex-col lg:flex-row relative ">

            {/* Left Column: Founder/Story Image */}
            <div
                ref={leftColRef}
                className="lg:w-[55%] w-full min-h-[400px] lg:min-h-[720px] relative overflow-hidden opacity-0 z-10"
            >
                <Image
                    src="/poped-out--dried-tomato.png"
                    alt="Drymato Product Finder"
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="absolute inset-y-0 left-[-2%] w-[130%] h-full object-contain object-left-bottom pt-3 lg:pt-5 "
                />

                {/* Floating tomatoes designed to look like they are popping out from the jar area */}
                <div
                    ref={tomato1Ref}
                    className="absolute bottom-[18%] left-[70%] w-14 h-14 pointer-events-none select-none z-20 opacity-0"
                >
                    <Image
                        src="/tomatoimg.png"
                        alt="Popping Tomato 1"
                        width={56}
                        height={56}
                        className="w-full h-full object-contain filter drop-shadow-md"
                    />
                </div>

                <div
                    ref={tomato2Ref}
                    className="absolute bottom-[20%] left-[70%] w-12 h-12 pointer-events-none select-none z-20 opacity-0"
                >
                    <Image
                        src="/tomatoimg.png"
                        alt="Popping Tomato 2"
                        width={48}
                        height={48}
                        className="w-full h-full object-contain filter drop-shadow-md"
                    />
                </div>
            </div>

            {/* Right Column: Content Container */}
            <div
                ref={rightColRef}
                className="lg:w-[45%] w-full bg-surface py-20 px-8 sm:py-10 sm:px-16 lg:pr-24 lg:pl-1 flex flex-col justify-center relative overflow-hidden z-10 opacity-0"
            >
                {/* Decorative Large Background Tomato Tree (partially hidden offscreen) */}
                <div
                    ref={tomatotreeRef}
                    className="absolute right-[-60px] bottom-[-40px] w-[450px] sm:w-[600px] h-auto pointer-events-none select-none z-0 opacity-[0.28]"
                >
                    <Image
                        src="/tomatotree.png"
                        alt="Tomato Tree Background"
                        width={600}
                        height={600}
                        className="w-full h-auto object-contain filter saturate-50"
                    />
                </div>

                {/* Section Content */}
                <div
                    ref={textWrapperRef}
                    className="relative z-10 flex flex-col items-start max-w-lg"
                >

                    {/* Category Label */}
                    <div className="flex items-center gap-2 mb-4 text-forest">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                        </svg>
                        <span className="text-xs sm:text-sm font-extrabold tracking-[0.2em] uppercase">
                            Product Finder
                        </span>
                    </div>

                    {/* Section Title */}
                    <h2 className="font-sans text-3xl sm:text-4xl md:text-[42px] font-bold text-gray-900 leading-[1.25] mb-6">
                        Find Your Ingredient
                    </h2>

                    {/* Paragraph */}
                    <p className="text-base sm:text-lg text-gray-500 leading-relaxed mb-8">
                        Whatever you're sourcing, there's a quick way to get to it - search a specific product, browse by category, or filter by how you plan to use it.
                    </p>

                    {/* Auto-rotating Finder Block - fixed height so content changes don't shift layout */}
                    <div className="w-full mb-8 h-[138px] sm:h-[128px]">
                        <div key={activeFinder} className="animate-finder-fade h-full flex flex-col">
                            <div className="flex items-center gap-2 mb-3 text-forest">
                                {FINDER_ITEMS[activeFinder].icon}
                                <h4 className="text-sm sm:text-base font-sans font-extrabold uppercase tracking-wide">
                                    {FINDER_ITEMS[activeFinder].label}
                                </h4>
                            </div>
                            <div className="flex flex-wrap content-start gap-2 flex-1 overflow-hidden">
                                {FINDER_ITEMS[activeFinder].items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-3.5 py-1.5 rounded-full border-2 border-forest/20 bg-white text-xs sm:text-sm font-bold text-gray-800 h-fit"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center gap-1.5 mt-4 shrink-0">
                            {FINDER_ITEMS.map((_, idx) => (
                                <span
                                    key={idx}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeFinder ? "w-6 bg-forest" : "w-1.5 bg-forest/25"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Can't Find It + CTA in one line */}
                    <div className="flex items-center flex-wrap gap-5">
                        <p className="text-base sm:text-lg text-gray-500 leading-relaxed font-semibold">
                            Can't Find It?
                        </p>
                        <button onClick={() => router.push("/contact")} className="group/btn relative overflow-hidden bg-forest border-2 border-forest text-white px-8 py-3.5 rounded-xl text-xs font-extrabold tracking-widest uppercase shadow-[0_6px_20px_rgba(36,56,34,0.12)] hover:shadow-[0_8px_25px_rgba(36,56,34,0.22)] active:shadow-[0_4px_12px_rgba(36,56,34,0.15)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer z-10">
                            {/* Background bubble shape rising from bottom to top */}
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[125%] aspect-square rounded-t-[50%] bg-white translate-y-full transition-transform duration-[750ms] ease-in-out z-0 group-hover/btn:translate-y-[12%]" />

                            <span className="relative z-10 transition-colors duration-300 group-hover/btn:text-forest">
                                SEND US YOUR REQUIREMENT
                            </span>
                        </button>
                    </div>

                </div>

            </div>

            {/* Finder fade animation */}
            <style>{`
                @keyframes finderFadeIn {
                    0% { opacity: 0; transform: translateY(6px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                .animate-finder-fade {
                    animation: finderFadeIn 0.5s ease-out;
                }
            `}</style>
        </section>
    );
}