// "use client";

// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// // import Image from "next/image";
// import { useRouter } from "next/navigation";

// const SLIDES = [
//     {
//         id: 1,
//         bgImage: "/banner sun dried.png",
//         // tagline: "SUN-DRIED GOODNESS, BURSTING WITH FLAVOR",
//         titleLine1: "SUN-DRIED",
//         titleLine2: "GOODNESS",
//         subtitle: "Made from the finest tomatoes, slow-dried to perfection for a rich, intense flavor in every bite.",
//         badges: [
//             {
//                 id: 1,
//                 label: "SUN-DRIED TO PERFECTION",
//                 icon: (
//                     <svg className="w-5 h-5 text-[#b0121a] mb-1.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
//                         <circle cx="12" cy="12" r="5" strokeLinecap="round" strokeLinejoin="round" />
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
//                     </svg>
//                 )
//             },
//             {
//                 id: 2,
//                 label: "NATURAL & PRESERVATIVE FREE",
//                 icon: (
//                     <svg className="w-5 h-5 text-[#1b4d3e] mb-1.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M12 3c-4.5 0-9 4.5-9 9s4.5 9 9 9M12 3c4.5 0 9 4.5 9 9s-4.5 9-9 9M12 12h9" />
//                     </svg>
//                 )
//             },
//             {
//                 id: 3,
//                 label: "RICH IN NUTRIENTS",
//                 icon: (
//                     <svg className="w-5 h-5 text-[#b0121a] mb-1.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.5c-3.584 0-6.5-2.916-6.5-6.5s2.916-6.5 6.5-6.5 6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5z" />
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M12 5.5V3M10 4.5h4" />
//                     </svg>
//                 )
//             },
//             {
//                 id: 4,
//                 label: "100% NATURAL INGREDIENTS",
//                 icon: (
//                     <svg className="w-5 h-5 text-[#1b4d3e] mb-1.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
//                         <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M9 11.5l2 2 4-4" />
//                     </svg>
//                 )
//             }
//         ]
//     },
//     {
//         id: 2,
//         bgImage: "/banner sunflower.png",
//         // tagline: "SUN-DRIED Tomatoes, INFUSED WITH SUNFLOWER OIL",
//         titleLine1: "SUNFLOWER",
//         titleLine2: "OIL DELIGHT",
//         subtitle: "Premium sun-dried tomatoes steeped in rich sunflower oil, herbs, and spices for a lush, savory flavor burst.",
//         badges: [
//             {
//                 id: 1,
//                 label: "100% NATURAL & FRESH",
//                 icon: (
//                     <svg className="w-5 h-5 text-[#b0121a] mb-1.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
//                         <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M9 11.5l2 2 4-4" />
//                     </svg>
//                 )
//             },
//             // {
//             //     id: 2,
//             //     label: "NO ARTIFICIAL PRESERVATIVES",
//             //     icon: (
//             //         <svg className="w-5 h-5 text-[#1b4d3e] mb-1.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
//             //             <path strokeLinecap="round" strokeLinejoin="round" d="M9 3h6M10 3v4.5l-4.5 9A1.5 1.5 0 006.8 19h10.4a1.5 1.5 0 001.3-2.5l-4.5-9V3" />
//             //             <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 15h9" />
//             //         </svg>
//             //     )
//             // },
//             {
//                 id: 3,
//                 label: "PURE & WHOLESOME GOODNESS",
//                 icon: (
//                     <svg className="w-5 h-5 text-[#b0121a] mb-1.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M12 3c-4.5 0-9 4.5-9 9s4.5 9 9 9M12 3c4.5 0 9 4.5 9 9s-4.5 9-9 9M12 12h9" />
//                     </svg>
//                 )
//             },
//             {
//                 id: 4,
//                 label: "MADE WITH LOVE & CARE",
//                 icon: (
//                     <svg className="w-5 h-5 text-[#1b4d3e] mb-1.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
//                     </svg>
//                 )
//             }
//         ]
//     },
//     {
//         id: 3,
//         bgImage: "/pasta banner.png",
//         titleLine1: "SUN-DRIED",
//         titleLine2: "TOMATOES",
//         subtitle: "Premium sun-dried tomatoes dipped in olive oil, delivering rich Mediterranean flavor and a perfect addition to pasta, pizza, salads, sandwiches, and gourmet recipes.",

//         badges: [
//             {
//                 id: 1,
//                 label: "100% NATURAL",
//                 icon: (
//                     <svg className="w-5 h-5 text-[#b0121a] mb-1.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
//                         <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M9 11.5l2 2 4-4" />
//                     </svg>
//                 )
//             },
//             {
//                 id: 2,
//                 label: "DIPPED IN OLIVE OIL",
//                 icon: (
//                     <svg className="w-5 h-5 text-[#1b4d3e] mb-1.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M12 3c-4.5 0-9 4.5-9 9s4.5 9 9 9M12 3c4.5 0 9 4.5 9 9s-4.5 9-9 9M12 12h9" />
//                     </svg>
//                 )
//             },
//             {
//                 id: 3,
//                 label: "RICH TOMATO FLAVOR",
//                 icon: (
//                     <svg className="w-5 h-5 text-[#b0121a] mb-1.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.5c-3.584 0-6.5-2.916-6.5-6.5s2.916-6.5 6.5-6.5 6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5z" />
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M12 5.5V3M10 4.5h4" />
//                     </svg>
//                 )
//             },
//             {
//                 id: 4,
//                 label: "PERFECT FOR PASTA & SALADS",
//                 icon: (
//                     <svg className="w-5 h-5 text-[#1b4d3e] mb-1.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
//                         <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M9 11.5l2 2 4-4" />
//                     </svg>
//                 )
//             }
//         ]
//     }
// ];

// export default function SpecialBanner() {
//     const sectionRef = useRef(null);
//     const textRef = useRef(null);
//     const bottomBarRef = useRef(null);
//     const [activeSlide, setActiveSlide] = useState(0);
//     const router = useRouter();


//     const nextSlide = () => {
//         setActiveSlide((prev) => (prev + 1) % SLIDES.length);
//     };

//     const prevSlide = () => {
//         setActiveSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
//     };

//     const isFirstRender = useRef(true);

//     useEffect(() => {
//         gsap.registerPlugin(ScrollTrigger);

//         const section = sectionRef.current;
//         if (!section) return;

//         const prevSlideIdx = (activeSlide - 1 + SLIDES.length) % SLIDES.length;

//         // 1. Initial State Setup
//         SLIDES.forEach((_, index) => {
//             if (index === activeSlide) {
//                 // The new active image starts at 100% and has z-index 10
//                 gsap.set(`.banner-bg-image-${index}`, {
//                     xPercent: 100,
//                     zIndex: 10
//                 });
//                 // The new active text starts at opacity 0 and has high z-index 20 (so it sits on top of the active image)
//                 gsap.set(`.banner-text-slide-${index}`, {
//                     opacity: 0,
//                     zIndex: 20
//                 });
//             } else if (index === prevSlideIdx && !isFirstRender.current) {
//                 // The previous active image stays at 0% and has lower z-index 3
//                 gsap.set(`.banner-bg-image-${index}`, {
//                     xPercent: 0,
//                     zIndex: 3
//                 });
//                 // The previous active text stays in-place at z-index 4 (underneath the incoming active image's z-index 10)
//                 gsap.set(`.banner-text-slide-${index}`, {
//                     opacity: 1,
//                     zIndex: 4
//                 });
//             } else {
//                 // Other images and texts get z-index 0
//                 gsap.set(`.banner-bg-image-${index}`, {
//                     xPercent: 100,
//                     zIndex: 0
//                 });
//                 gsap.set(`.banner-text-slide-${index}`, {
//                     opacity: 0,
//                     zIndex: 0
//                 });
//             }
//         });

//         // Set bottom bar initial position
//         gsap.set(bottomBarRef.current, {
//             y: 60,
//             opacity: 0
//         });

//         // 2. Create ScrollTrigger Timeline
//         const tl = gsap.timeline({
//             scrollTrigger: {
//                 trigger: section,
//                 start: "top 80%",
//                 end: "bottom 20%",
//                 toggleActions: "restart reset restart reset",
//             }
//         });

//         // Slide the active background image from right to left (100% to 0%)
//         tl.to(`.banner-bg-image-${activeSlide}`, {
//             xPercent: 0,
//             duration: 1.2,
//             ease: "power2.out"
//         });

//         if (!isFirstRender.current) {
//             // Fade out previous slide text AFTER the image has completely slid in (at 1.2s)
//             tl.to(`.banner-text-slide-${prevSlideIdx}`, {
//                 opacity: 0,
//                 duration: 0.2
//             }, 1.2);

//             // Fade in active slide text immediately after/during previous text fade out
//             tl.to(`.banner-text-slide-${activeSlide}`, {
//                 opacity: 1,
//                 duration: 0.8,
//                 ease: "power2.out"
//             }, 1.3);

//             // Slide the bottom bar up from bottom
//             tl.to(bottomBarRef.current, {
//                 y: 0,
//                 opacity: 1,
//                 duration: 0.8,
//                 ease: "power2.out"
//             }, 1.4);
//         } else {
//             // Scroll entrance animation sequence (on initial mount)
//             // Fade in active slide text slightly before the image animation finishes
//             tl.to(`.banner-text-slide-${activeSlide}`, {
//                 opacity: 1,
//                 duration: 0.8,
//                 ease: "power2.out"
//             }, "-=0.3");

//             // Slide bottom bar up
//             tl.to(bottomBarRef.current, {
//                 y: 0,
//                 opacity: 1,
//                 duration: 0.8,
//                 ease: "power2.out"
//             }, "-=0.4");
//         }

//         // After the timeline finishes, set the previous active image and text back to 100% z-index 0
//         if (!isFirstRender.current) {
//             tl.set(`.banner-bg-image-${prevSlideIdx}`, {
//                 xPercent: 100,
//                 zIndex: 0
//             });
//             tl.set(`.banner-text-slide-${prevSlideIdx}`, {
//                 zIndex: 0
//             });
//         }

//         // Mark first render as false
//         if (isFirstRender.current) {
//             isFirstRender.current = false;
//         }

//         return () => {
//             if (tl.scrollTrigger) tl.scrollTrigger.kill();
//             tl.kill();
//         };
//     }, [activeSlide]);

//     // Autoplay slideshow
//     useEffect(() => {
//         const timer = setInterval(nextSlide, 7000);
//         return () => clearInterval(timer);
//     }, []);

//     return (
//         <section ref={sectionRef} className="relative bg-[#fffdfa] py-16 w-full overflow-hidden">
//             <div className="w-full relative overflow-hidden min-h-[550px] sm:min-h-[600px] md:min-h-[660px] flex items-center bg-gray-50">

//                 {/* Background Carousel Images */}
//                 {SLIDES.map((slide, index) => (
//                     <img
//                         key={slide.id}
//                         src={slide.bgImage}
//                         alt="Special Offer Banner Background"
//                         className={`absolute inset-0 w-full h-full object-cover object-bottom banner-bg-image banner-bg-image-${index}`}
//                     />
//                 ))}

//                 {/* Left Side Content Overlay Wrapper */}
//                 <div
//                     ref={textRef}
//                     className="w-full md:w-[50%]"
//                 >
//                     {SLIDES.map((slide, index) => (
//                         <div
//                             key={slide.id}
//                             className={`absolute left-0 top-10 sm:top-14 md:top-16 lg:top-14 w-full md:w-[50%] flex flex-col justify-start px-6 sm:px-12 md:px-16 lg:pl-24 lg:pr-10 banner-text-slide banner-text-slide-${index} ${index === activeSlide ? "pointer-events-auto" : "pointer-events-none"
//                                 }`}
//                         >
//                             {/* Brand Logo & Tagline */}
//                             {/* <div className="flex flex-col items-start mb-6">
//                                 <img
//                                     src="/drymato-logo.png"
//                                     alt="Drymato Logo"
//                                     className="h-10 sm:h-12 object-contain"
//                                 />
//                                 <div className="flex items-center gap-1.5 mt-2 w-full max-w-[280px]">
//                                     <div className="h-[1px] bg-emerald-800/20 flex-1" />
//                                     <span className="text-[7.5px] sm:text-[8.5px] font-extrabold tracking-[1.5px] text-[#1b4d3e] whitespace-nowrap uppercase">
//                                         {slide.tagline}
//                                     </span>
//                                     <div className="h-[1px] bg-emerald-800/20 flex-1" />
//                                 </div>
//                             </div> */}

//                             {/* Main Headline */}
//                             <h2 className="font-serif leading-[1.05] tracking-tight mb-3 flex flex-col">
//                                 <span className="text-[44px] sm:text-[56px] lg:text-[72px] font-black text-[#1b4d3e] uppercase">
//                                     {slide.titleLine1}
//                                 </span>
//                                 <span className="text-[44px] sm:text-[56px] lg:text-[72px] font-black text-[#b0121a] uppercase -mt-2">
//                                     {slide.titleLine2}
//                                 </span>
//                             </h2>

//                             {/* Vintage divider line with left/right arrows */}
//                             {/* <div className="flex items-center gap-2 mb-6 w-full max-w-[360px] text-[#1b4d3e]">
//                                 <span className="text-xs select-none">◀</span>
//                                 <div className="h-[1.5px] bg-[#1b4d3e] flex-1" />
//                                 <span className="text-xs select-none">▶</span>
//                             </div> */}

//                             {/* Subtitle */}
//                             <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-semibold mb-6 max-w-sm sm:max-w-md">
//                                 {slide.subtitle}
//                             </p>

//                             {/* Horizontal 4 Trust Badges */}
//                             <div className="grid grid-cols-4 gap-2 border-t border-b border-gray-200/60 py-4 mb-6 w-full max-w-md">
//                                 {slide.badges.map((badge, bIdx) => (
//                                     <div
//                                         key={badge.id}
//                                         className={`flex flex-col items-center text-center px-1 ${bIdx > 0 ? "border-l border-gray-150" : ""
//                                             }`}
//                                     >
//                                         {badge.icon}
//                                         <span className="text-[7.5px] leading-tight font-extrabold text-[#1b4d3e] uppercase">
//                                             {badge.label}
//                                         </span>
//                                     </div>
//                                 ))}
//                             </div>

//                             {/* CTA Button & Carousel Controls */}
//                             <div className="flex items-center gap-6 mt-2 select-none">
//                                 {/* Order Now Button */}
//                                 <button onClick={() => router.push("/contact")} className="group/btn relative overflow-hidden bg-[#b0121a] border-2 border-[#b0121a] text-white px-10 py-3.5 rounded-full text-xs font-extrabold tracking-widest uppercase shadow-[0_6px_20px_rgba(176,18,26,0.15)] hover:shadow-[0_8px_25px_rgba(176,18,26,0.25)] active:shadow-[0_4px_12px_rgba(176,18,26,0.18)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer z-10">
//                                     {/* Background bubble shape rising from bottom to top */}
//                                     <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[125%] aspect-square rounded-t-[50%] bg-white translate-y-full transition-transform duration-[750ms] ease-in-out z-0 group-hover/btn:translate-y-[12%]" />

//                                     <span className="relative z-10 transition-colors duration-300 group-hover/btn:text-[#b0121a]">
//                                         ORDER NOW
//                                     </span>
//                                 </button>

//                                 <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-[#1b4d3e]/20 px-3 py-1.5 rounded-full z-10">
//                                     <button
//                                         onClick={(e) => { e.stopPropagation(); prevSlide(); }}
//                                         className="text-[#1b4d3e] hover:text-[#b0121a] transition-colors duration-200 cursor-pointer flex items-center justify-center"
//                                         aria-label="Previous Slide"
//                                     >
//                                         <svg className="w-5 h-5 stroke-current" fill="none" strokeWidth="2.5" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//                                         </svg>
//                                     </button>

//                                     <div className="flex items-center gap-1.5">
//                                         {SLIDES.map((_, dotIdx) => (
//                                             <button
//                                                 key={dotIdx}
//                                                 onClick={(e) => { e.stopPropagation(); setActiveSlide(dotIdx); }}
//                                                 className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${dotIdx === activeSlide
//                                                     ? "bg-[#b0121a] w-4"
//                                                     : "bg-[#1b4d3e]/30 hover:bg-[#1b4d3e]/60"
//                                                     }`}
//                                                 aria-label={`Go to slide ${dotIdx + 1}`}
//                                             />
//                                         ))}
//                                     </div>

//                                     {/* Next Arrow */}
//                                     <button
//                                         onClick={(e) => { e.stopPropagation(); nextSlide(); }}
//                                         className="text-[#1b4d3e] hover:text-[#b0121a] transition-colors duration-200 cursor-pointer flex items-center justify-center"
//                                         aria-label="Next Slide"
//                                     >
//                                         <svg className="w-5 h-5 stroke-current" fill="none" strokeWidth="2.5" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//                                         </svg>
//                                     </button>
//                                 </div>
//                             </div>

//                         </div>
//                     ))}
//                 </div>

//                 {/* Bottom Categories Bar - Positioned over the green strip of both banner1.png and banner 2.png */}
//                 <div
//                     ref={bottomBarRef}
//                     className="categories-bar absolute left-0 right-0  w-full py-2 px-6 md:px-12 flex items-center justify-start gap-2 z-20 opacity-0 will-change-[transform,opacity]"
//                 >

//                     {/* Left: Tomato Sticker */}
//                     <div className="flex items-center gap-1 shrink-0 -ml-4 mr-2 pointer-events-none select-none">
//                         <img
//                             src="/tomatosticker.png"
//                             alt="Tomato Sticker"
//                             className="h-14 sm:h-16 w-auto object-contain transform -rotate-12 filter drop-shadow-md"
//                         />
//                     </div>

//                     {/* Left: Perfect For */}
//                     <div className="flex items-center gap-2 shrink-0 mr-4">
//                         <span className="cursive-perfect text-black text-xl sm:text-2xl font-bold tracking-wide select-none">
//                             Perfect For
//                         </span>
//                         <span className="text-black text-lg font-light leading-none select-none">
//                             →
//                         </span>
//                     </div>

//                     {/* Right: Category Icons */}
//                     <div className="flex items-center gap-6 md:gap-8 overflow-x-auto no-scrollbar py-1 flex-1">

//                         {/* Category 1: Pasta */}
//                         <div className="flex flex-col items-center group/cat cursor-pointer select-none shrink-0">
//                             <div className="w-8 h-8 flex items-center justify-center text-black/90 group-hover/cat:text-[#b0121a] group-hover/cat:scale-110 transition-all duration-300">
//                                 <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M4 14h16c0 3-3 6-8 6s-8-3-8-6z" />
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M8 10c0-2 1-3 2-3s2 1 2 3c0 2 1 3 2 3s2-1 2-3" />
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M6 10c0-1.5.8-2.5 1.5-2.5S9 8.5 9 10" />
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M15 10c0-1.5.8-2.5 1.5-2.5S18 8.5 18 10" />
//                                 </svg>
//                             </div>
//                             <span className="text-[9px] font-black text-black/75 tracking-widest uppercase mt-1 group-hover/cat:text-black transition-colors select-none">
//                                 PASTA
//                             </span>
//                         </div>

//                         {/* Category 2: Pizza */}
//                         <div className="flex flex-col items-center group/cat cursor-pointer select-none shrink-0">
//                             <div className="w-8 h-8 flex items-center justify-center text-black/90 group-hover/cat:text-[#b0121a] group-hover/cat:scale-110 transition-all duration-300">
//                                 <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M20 7.5L5 20c-.5.5-1.3.2-1.3-.5L3.5 4c0-.7.8-1.2 1.3-.7L20 7.5z" />
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.5A6 6 0 0110.5 11" />
//                                     <circle cx="7" cy="11" r="1" fill="currentColor" stroke="none" />
//                                     <circle cx="12" cy="14" r="1" fill="currentColor" stroke="none" />
//                                     <circle cx="7" cy="16" r="1" fill="currentColor" stroke="none" />
//                                 </svg>
//                             </div>
//                             <span className="text-[9px] font-black text-black/75 tracking-widest uppercase mt-1 group-hover/cat:text-black transition-colors select-none">
//                                 PIZZA
//                             </span>
//                         </div>

//                         {/* Category 3: Salads */}
//                         <div className="flex flex-col items-center group/cat cursor-pointer select-none shrink-0">
//                             <div className="w-8 h-8 flex items-center justify-center text-black/90 group-hover/cat:text-[#b0121a] group-hover/cat:scale-110 transition-all duration-300">
//                                 <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M4 12c0 4.418 3.582 8 8 8s8-3.582 8-8H4z" />
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M6 12c-1-2 0-5 2-5s3 2 2 5" />
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M11 12c-.5-3 1-5 3-5s2.5 2 1 5" />
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M15 12c0-2.5 1.5-4.5 3-4.5s1.5 2 0 4.5" />
//                                 </svg>
//                             </div>
//                             <span className="text-[9px] font-black text-black/75 tracking-widest uppercase mt-1 group-hover/cat:text-black transition-colors select-none">
//                                 SALADS
//                             </span>
//                         </div>

//                         {/* Category 4: Sandwiches */}
//                         <div className="flex flex-col items-center group/cat cursor-pointer select-none shrink-0">
//                             <div className="w-8 h-8 flex items-center justify-center text-black/90 group-hover/cat:text-[#b0121a] group-hover/cat:scale-110 transition-all duration-300">
//                                 <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M3 14l9-9 9 9H3z" />
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5l9-9 9 9H3z" />
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M3 14v2.5M21 14v2.5" />
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M5 14h14" />
//                                 </svg>
//                             </div>
//                             <span className="text-[9px] font-black text-black/75 tracking-widest uppercase mt-1 group-hover/cat:text-black transition-colors select-none">
//                                 SANDWICHES
//                             </span>
//                         </div>

//                         {/* Category 5: & More */}
//                         <div className="flex flex-col items-center group/cat cursor-pointer select-none shrink-0">
//                             <div className="w-8 h-8 flex items-center justify-center text-black/90 group-hover/cat:text-[#b0121a] group-hover/cat:scale-110 transition-all duration-300">
//                                 <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
//                                     <circle cx="12" cy="12" r="9" />
//                                     <circle cx="8" cy="12" r="1" fill="currentColor" stroke="none" />
//                                     <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
//                                     <circle cx="16" cy="12" r="1" fill="currentColor" stroke="none" />
//                                 </svg>
//                             </div>
//                             <span className="text-[9px] font-black text-black/75 tracking-widest uppercase mt-1 group-hover/cat:text-black transition-colors select-none">
//                                 & MORE!
//                             </span>
//                         </div>

//                     </div>

//                 </div>

//             </div>

//             {/* Custom Styles */}
//             <style>{`
//                 .cursive-perfect {
//                     font-family: var(--font-dancing), cursive;
//                 }
//                 .no-scrollbar::-webkit-scrollbar {
//                     display: none;
//                 }
//                 .no-scrollbar {
//                     -ms-overflow-style: none;
//                     scrollbar-width: none;
//                 }

//                 /* Keep the categories bar perfectly aligned in the green strip on all screens */
//                 .categories-bar {
//                     bottom: 4px !important;
//                 }
//                 @media (min-width: 640px) {
//                     .categories-bar {
//                         bottom: 8px !important;
//                     }
//                 }
//                 @media (min-width: 768px) {
//                     .categories-bar {
//                         bottom: 1vw !important;
//                     }
//                 }
//                 @media (min-width: 1024px) {
//                     .categories-bar {
//                         bottom: 1.2vw !important;
//                     }
//                 }
//                 @media (min-width: 1440px) {
//                     .categories-bar {
//                         bottom: 1.4vw !important;
//                     }
//                 }
//             `}</style>
//         </section>
//     );
// }




"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";

const SLIDES = [
    {
        id: 1,
        bgImage: "/banner sun dried.png",
        titleLine1: "EXPORT",
        titleLine2: "TO GLOBAL MARKETS",
        subtitle: "DryMato works towards supplying dehydrated ingredients to buyers looking for reliable Indian sourcing.",
        cta: "EXPORT ENQUIRY",
        ctaLink: "/contact",
        badges: [
            {
                id: 1,
                label: "BULK SUPPLY",
                icon: (
                    <svg className="w-5 h-5 text-brick mb-1.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9-4 9 4-9 4-9-4z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10l9 4 9-4V7" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11v10" />
                    </svg>
                )
            },
            {
                id: 2,
                label: "PRIVATE LABEL",
                icon: (
                    <svg className="w-5 h-5 text-forest mb-1.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.59 13.41L11 3.83A2 2 0 009.58 3.24L4 3a1 1 0 00-1 1l.24 5.58a2 2 0 00.59 1.42l9.58 9.58a2 2 0 002.83 0l4.35-4.35a2 2 0 000-2.82z" />
                        <circle cx="7.5" cy="7.5" r="1" fill="currentColor" stroke="none" />
                    </svg>
                )
            },
            {
                id: 3,
                label: "CUSTOM PACKAGING",
                icon: (
                    <svg className="w-5 h-5 text-brick mb-1.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8l-9-5-9 5 9 5 9-5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8v8l9 5 9-5V8" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 13v8" />
                    </svg>
                )
            },
            {
                id: 4,
                label: "MULTIPLE PRODUCT SOURCING",
                icon: (
                    <svg className="w-5 h-5 text-forest mb-1.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M12 3c2.5 2.5 2.5 15.5 0 18M12 3c-2.5 2.5-2.5 15.5 0 18" />
                    </svg>
                )
            },
            {
                id: 5,
                label: "COMMERCIAL QUANTITIES",
                icon: (
                    <svg className="w-5 h-5 text-brick mb-1.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                        <rect x="3" y="9" width="7" height="10" rx="1" strokeLinecap="round" strokeLinejoin="round" />
                        <rect x="12" y="5" width="7" height="14" rx="1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                )
            },
            {
                id: 6,
                label: "PRODUCT SPECIFICATIONS",
                icon: (
                    <svg className="w-5 h-5 text-forest mb-1.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                        <rect x="5" y="3" width="14" height="18" rx="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 8h7M8.5 12h7M8.5 16h4" />
                    </svg>
                )
            }
        ]
    },
    {
        id: 2,
        bgImage: "/banner sunflower.png",
        titleLine1: "SIGNATURE GUAVA",
        titleLine2: "FROM OUR FARMS",
        subtitle: "Guava is one of the products where DryMato has a direct connection with the farm. This farm connection gives us greater visibility over the raw material journey for our guava products.",
        cta: "EXPLORE DEHYDRATED GUAVA",
        ctaLink: "/contact",
        badges: [
            {
                id: 1,
                label: "GROWN",
                icon: (
                    <svg className="w-5 h-5 text-brick mb-1.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21V10" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 10c0-4-3-6-7-6 0 4 3 6 7 6z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 13c0-4 3-6 7-6 0 4-3 6-7 6z" />
                    </svg>
                )
            },
            {
                id: 2,
                label: "HARVESTED",
                icon: (
                    <svg className="w-5 h-5 text-forest mb-1.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21c-2-3-2-7 1-10 3-3 7-3 10-1-2 3-6 3-9 6-1 1-1.5 3-2 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12l6-6" />
                    </svg>
                )
            },
            {
                id: 3,
                label: "PROCESSED",
                icon: (
                    <svg className="w-5 h-5 text-brick mb-1.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
                    </svg>
                )
            },
            {
                id: 4,
                label: "DEHYDRATED",
                icon: (
                    <svg className="w-5 h-5 text-forest mb-1.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                        <circle cx="12" cy="8" r="4.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.5c-2.5 3-3 5-3 6.5a3 3 0 006 0c0-1.5-.5-3.5-3-6.5z" />
                    </svg>
                )
            }
        ]
    },
    {
        id: 3,
        bgImage: "/pasta banner.png",
        titleLine1: "PURE HERB",
        titleLine2: "& POWDERS",
        subtitle: "Finely processed herbs and vegetable powders offering rich aroma, natural color and consistent quality for every recipe.",
        cta: "ORDER NOW",
        ctaLink: "/contact",
        badges: [
            {
                id: 1,
                label: "100% NATURAL",
                icon: (
                    <svg className="w-5 h-5 text-brick mb-1.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 11.5l2 2 4-4" />
                    </svg>
                )
            },
            {
                id: 2,
                label: "CAREFULLY PROCESSED",
                icon: (
                    <svg className="w-5 h-5 text-forest mb-1.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M12 3c-4.5 0-9 4.5-9 9s4.5 9 9 9M12 3c4.5 0 9 4.5 9 9s-4.5 9-9 9M12 12h9" />
                    </svg>
                )
            },
            {
                id: 3,
                label: "RICH IN FLAVOR",
                icon: (
                    <svg className="w-5 h-5 text-brick mb-1.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.5c-3.584 0-6.5-2.916-6.5-6.5s2.916-6.5 6.5-6.5 6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 5.5V3M10 4.5h4" />
                    </svg>
                )
            },
            {
                id: 4,
                label: "PERFECT FOR EVERY KITCHEN",
                icon: (
                    <svg className="w-5 h-5 text-forest mb-1.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 11.5l2 2 4-4" />
                    </svg>
                )
            }
        ]
    }
];

export default function SpecialBanner() {
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const bottomBarRef = useRef(null);
    const [activeSlide, setActiveSlide] = useState(0);
    const router = useRouter();


    const nextSlide = () => {
        setActiveSlide((prev) => (prev + 1) % SLIDES.length);
    };

    const prevSlide = () => {
        setActiveSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    };

    const isFirstRender = useRef(true);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const section = sectionRef.current;
        if (!section) return;

        const prevSlideIdx = (activeSlide - 1 + SLIDES.length) % SLIDES.length;

        SLIDES.forEach((_, index) => {
            if (index === activeSlide) {
                gsap.set(`.banner-bg-image-${index}`, {
                    xPercent: 100,
                    zIndex: 10
                });
                gsap.set(`.banner-text-slide-${index}`, {
                    opacity: 0,
                    zIndex: 20
                });
            } else if (index === prevSlideIdx && !isFirstRender.current) {
                gsap.set(`.banner-bg-image-${index}`, {
                    xPercent: 0,
                    zIndex: 3
                });
                gsap.set(`.banner-text-slide-${index}`, {
                    opacity: 1,
                    zIndex: 4
                });
            } else {
                gsap.set(`.banner-bg-image-${index}`, {
                    xPercent: 100,
                    zIndex: 0
                });
                gsap.set(`.banner-text-slide-${index}`, {
                    opacity: 0,
                    zIndex: 0
                });
            }
        });

        gsap.set(bottomBarRef.current, {
            y: 60,
            opacity: 0
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "restart reset restart reset",
            }
        });

        tl.to(`.banner-bg-image-${activeSlide}`, {
            xPercent: 0,
            duration: 1.2,
            ease: "power2.out"
        });

        if (!isFirstRender.current) {
            tl.to(`.banner-text-slide-${prevSlideIdx}`, {
                opacity: 0,
                duration: 0.2
            }, 1.2);

            tl.to(`.banner-text-slide-${activeSlide}`, {
                opacity: 1,
                duration: 0.8,
                ease: "power2.out"
            }, 1.3);

            tl.to(bottomBarRef.current, {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power2.out"
            }, 1.4);
        } else {
            tl.to(`.banner-text-slide-${activeSlide}`, {
                opacity: 1,
                duration: 0.8,
                ease: "power2.out"
            }, "-=0.3");

            tl.to(bottomBarRef.current, {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power2.out"
            }, "-=0.4");
        }

        if (!isFirstRender.current) {
            tl.set(`.banner-bg-image-${prevSlideIdx}`, {
                xPercent: 100,
                zIndex: 0
            });
            tl.set(`.banner-text-slide-${prevSlideIdx}`, {
                zIndex: 0
            });
        }

        if (isFirstRender.current) {
            isFirstRender.current = false;
        }

        return () => {
            if (tl.scrollTrigger) tl.scrollTrigger.kill();
            tl.kill();
        };
    }, [activeSlide]);

    useEffect(() => {
        const timer = setInterval(nextSlide, 7000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section ref={sectionRef} className="relative bg-surface py-16 w-full overflow-hidden">
            <div className="w-full relative overflow-hidden min-h-[550px] sm:min-h-[600px] md:min-h-[660px] flex items-center bg-gray-50">

                {/* Background Carousel Images */}
                {SLIDES.map((slide, index) => (
                    <img
                        key={slide.id}
                        src={slide.bgImage}
                        alt=""
                        className={`absolute inset-0 w-full h-full object-cover object-bottom banner-bg-image banner-bg-image-${index}`}
                    />
                ))}

                {/* Left Side Content Overlay Wrapper */}
                <div
                    ref={textRef}
                    className="w-full md:w-[50%]"
                >
                    {SLIDES.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`absolute left-0 top-10 sm:top-14 md:top-16 lg:top-14 w-full md:w-[50%] flex flex-col justify-start px-6 sm:px-12 md:px-16 lg:pl-24 lg:pr-10 banner-text-slide banner-text-slide-${index} ${index === activeSlide ? "pointer-events-auto" : "pointer-events-none"
                                }`}
                        >
                            {/* Main Headline */}
                            <h2 className="font-serif leading-[1.05] tracking-tight mb-3 flex flex-col">
                                <span className="text-[44px] sm:text-[56px] lg:text-[72px] font-black text-forest uppercase">
                                    {slide.titleLine1}
                                </span>
                                <span className="text-[44px] sm:text-[56px] lg:text-[72px] font-black text-brick uppercase -mt-2">
                                    {slide.titleLine2}
                                </span>
                            </h2>

                            {/* Subtitle */}
                            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-semibold mb-6 max-w-sm sm:max-w-md">
                                {slide.subtitle}
                            </p>

                            {/* Horizontal 4 Trust Badges
                            <div className="grid grid-cols-4 gap-2 border-t border-b border-gray-200/60 py-4 mb-6 w-full max-w-md">
                                {slide.badges.map((badge, bIdx) => (
                                    <div
                                        key={badge.id}
                                        className={`flex flex-col items-center text-center px-1 ${bIdx > 0 ? "border-l border-gray-150" : ""
                                            }`}
                                    >
                                        {badge.icon}
                                        <span className="text-[7.5px] leading-tight font-extrabold text-forest uppercase">
                                            {badge.label}
                                        </span>
                                    </div>
                                ))}
                            </div> */}

                            {/* Horizontal Trust Badges - single row */}
                            <div className="flex items-start justify-between gap-1 border-t border-b border-gray-200/60 py-4 mb-6 w-full max-w-md">
                                {slide.badges.map((badge, bIdx) => (
                                    <div
                                        key={badge.id}
                                        className={`flex flex-col items-center text-center px-1 ${bIdx > 0 ? "border-l border-gray-150" : ""
                                            }`}
                                    >
                                        {badge.icon}
                                        <span className="text-[7.5px] leading-tight font-extrabold text-forest uppercase">
                                            {badge.label}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Button & Carousel Controls */}
                            <div className="flex items-center gap-6 mt-2 select-none">
                                {/* CTA Button */}
                                <button onClick={() => router.push(slide.ctaLink || "/contact")} className="group/btn relative overflow-hidden bg-forest border-2 border-forest text-white px-10 py-3.5 rounded-full text-xs font-extrabold tracking-widest uppercase shadow-[0_6px_20px_rgba(36,56,34,0.15)] hover:shadow-[0_8px_25px_rgba(36,56,34,0.25)] active:shadow-[0_4px_12px_rgba(36,56,34,0.18)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer z-10">
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[125%] aspect-square rounded-t-[50%] bg-white translate-y-full transition-transform duration-[750ms] ease-in-out z-0 group-hover/btn:translate-y-[12%]" />

                                    <span className="relative z-10 transition-colors duration-300 group-hover/btn:text-forest">
                                        {slide.cta || "ORDER NOW"}
                                    </span>
                                </button>

                                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-forest/20 px-3 py-1.5 rounded-full z-10">
                                    <button
                                        onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                                        className="text-forest hover:text-brick transition-colors duration-200 cursor-pointer flex items-center justify-center"
                                        aria-label="Previous Slide"
                                    >
                                        <svg className="w-5 h-5 stroke-current" fill="none" strokeWidth="2.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>

                                    <div className="flex items-center gap-1.5">
                                        {SLIDES.map((_, dotIdx) => (
                                            <button
                                                key={dotIdx}
                                                onClick={(e) => { e.stopPropagation(); setActiveSlide(dotIdx); }}
                                                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${dotIdx === activeSlide
                                                    ? "bg-forest w-4"
                                                    : "bg-forest/30 hover:bg-forest/60"
                                                    }`}
                                                aria-label={`Go to slide ${dotIdx + 1}`}
                                            />
                                        ))}
                                    </div>

                                    {/* Next Arrow */}
                                    <button
                                        onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                                        className="text-forest hover:text-brick transition-colors duration-200 cursor-pointer flex items-center justify-center"
                                        aria-label="Next Slide"
                                    >
                                        <svg className="w-5 h-5 stroke-current" fill="none" strokeWidth="2.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                {/* Bottom Categories Bar */}
                <div
                    ref={bottomBarRef}
                    className="categories-bar absolute left-0 right-0  w-full py-2 px-6 md:px-12 flex items-center justify-start gap-2 z-20 opacity-0 will-change-[transform,opacity]"
                >

                    {/* Left: Sticker */}
                    <div className="flex items-center gap-1 shrink-0 -ml-4 mr-2 pointer-events-none select-none">
                        <img
                            src="/tomatosticker.png"
                            alt=""
                            className="h-14 sm:h-16 w-auto object-contain transform -rotate-12 filter drop-shadow-md"
                        />
                    </div>

                    {/* Left: Perfect For */}
                    <div className="flex items-center gap-2 shrink-0 mr-4">
                        <span className="font-serif italic text-foreground text-xl sm:text-2xl font-bold tracking-wide select-none">
                            Perfect For
                        </span>
                        <span className="text-foreground text-lg font-light leading-none select-none">
                            →
                        </span>
                    </div>

                    {/* Right: Category Icons */}
                    <div className="flex items-center gap-6 md:gap-8 overflow-x-auto no-scrollbar py-1 flex-1">

                        {/* Category 1: Pasta */}
                        <div className="flex flex-col items-center group/cat cursor-pointer select-none shrink-0">
                            <div className="w-8 h-8 flex items-center justify-center text-foreground/80 group-hover/cat:text-forest group-hover/cat:scale-110 transition-all duration-300">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 14h16c0 3-3 6-8 6s-8-3-8-6z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 10c0-2 1-3 2-3s2 1 2 3c0 2 1 3 2 3s2-1 2-3" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 10c0-1.5.8-2.5 1.5-2.5S9 8.5 9 10" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10c0-1.5.8-2.5 1.5-2.5S18 8.5 18 10" />
                                </svg>
                            </div>
                            <span className="text-[9px] font-black text-foreground/70 tracking-widest uppercase mt-1 group-hover/cat:text-foreground transition-colors select-none">
                                PASTA
                            </span>
                        </div>

                        {/* Category 2: Pizza */}
                        <div className="flex flex-col items-center group/cat cursor-pointer select-none shrink-0">
                            <div className="w-8 h-8 flex items-center justify-center text-foreground/80 group-hover/cat:text-forest group-hover/cat:scale-110 transition-all duration-300">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7.5L5 20c-.5.5-1.3.2-1.3-.5L3.5 4c0-.7.8-1.2 1.3-.7L20 7.5z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.5A6 6 0 0110.5 11" />
                                    <circle cx="7" cy="11" r="1" fill="currentColor" stroke="none" />
                                    <circle cx="12" cy="14" r="1" fill="currentColor" stroke="none" />
                                    <circle cx="7" cy="16" r="1" fill="currentColor" stroke="none" />
                                </svg>
                            </div>
                            <span className="text-[9px] font-black text-foreground/70 tracking-widest uppercase mt-1 group-hover/cat:text-foreground transition-colors select-none">
                                PIZZA
                            </span>
                        </div>

                        {/* Category 3: Salads */}
                        <div className="flex flex-col items-center group/cat cursor-pointer select-none shrink-0">
                            <div className="w-8 h-8 flex items-center justify-center text-foreground/80 group-hover/cat:text-forest group-hover/cat:scale-110 transition-all duration-300">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 12c0 4.418 3.582 8 8 8s8-3.582 8-8H4z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12c-1-2 0-5 2-5s3 2 2 5" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 12c-.5-3 1-5 3-5s2.5 2 1 5" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12c0-2.5 1.5-4.5 3-4.5s1.5 2 0 4.5" />
                                </svg>
                            </div>
                            <span className="text-[9px] font-black text-foreground/70 tracking-widest uppercase mt-1 group-hover/cat:text-foreground transition-colors select-none">
                                SALADS
                            </span>
                        </div>

                        {/* Category 4: Sandwiches */}
                        <div className="flex flex-col items-center group/cat cursor-pointer select-none shrink-0">
                            <div className="w-8 h-8 flex items-center justify-center text-foreground/80 group-hover/cat:text-forest group-hover/cat:scale-110 transition-all duration-300">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 14l9-9 9 9H3z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5l9-9 9 9H3z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 14v2.5M21 14v2.5" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 14h14" />
                                </svg>
                            </div>
                            <span className="text-[9px] font-black text-foreground/70 tracking-widest uppercase mt-1 group-hover/cat:text-foreground transition-colors select-none">
                                SANDWICHES
                            </span>
                        </div>

                        {/* Category 5: & More */}
                        <div className="flex flex-col items-center group/cat cursor-pointer select-none shrink-0">
                            <div className="w-8 h-8 flex items-center justify-center text-foreground/80 group-hover/cat:text-forest group-hover/cat:scale-110 transition-all duration-300">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="9" />
                                    <circle cx="8" cy="12" r="1" fill="currentColor" stroke="none" />
                                    <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
                                    <circle cx="16" cy="12" r="1" fill="currentColor" stroke="none" />
                                </svg>
                            </div>
                            <span className="text-[9px] font-black text-foreground/70 tracking-widest uppercase mt-1 group-hover/cat:text-foreground transition-colors select-none">
                                & MORE!
                            </span>
                        </div>

                    </div>

                </div>

            </div>

            {/* Custom Styles */}
            <style>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                
                .categories-bar {
                    bottom: 4px !important;
                }
                @media (min-width: 640px) {
                    .categories-bar {
                        bottom: 8px !important;
                    }
                }
                @media (min-width: 768px) {
                    .categories-bar {
                        bottom: 1vw !important;
                    }
                }
                @media (min-width: 1024px) {
                    .categories-bar {
                        bottom: 1.2vw !important;
                    }
                }
                @media (min-width: 1440px) {
                    .categories-bar {
                        bottom: 1.4vw !important;
                    }
                }
            `}</style>
        </section>
    );
}