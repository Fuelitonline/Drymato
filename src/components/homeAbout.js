// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Image from "next/image";

// export default function HomeAbout() {
//     const containerRef = useRef(null);
//     const videoWrapperRef = useRef(null);
//     const spreadTomatoRef = useRef(null);
//     const textWrapperRef = useRef(null);
//     const card1Ref = useRef(null);
//     const card2Ref = useRef(null);

//     // Refs for Section 2 (Infused Tomatoes in Oil)
//     const container2Ref = useRef(null);
//     const videoWrapper2Ref = useRef(null);
//     const textWrapper2Ref = useRef(null);
//     const card3Ref = useRef(null);
//     const card4Ref = useRef(null);

//     useEffect(() => {
//         // Register ScrollTrigger inside useEffect to prevent Next.js SSR errors
//         gsap.registerPlugin(ScrollTrigger);

//         // Section 1 Animations
//         const container = containerRef.current;
//         if (container) {
//             const tl = gsap.timeline({
//                 scrollTrigger: {
//                     trigger: container,
//                     start: "top 80%",
//                     end: "bottom 20%",
//                     toggleActions: "play reverse play reverse",
//                 }
//             });

//             // Set initial positions
//             gsap.set(videoWrapperRef.current, { x: -150, opacity: 0 });
//             gsap.set(spreadTomatoRef.current, { x: 250, opacity: 0 });
//             gsap.set(textWrapperRef.current, { x: 100, opacity: 0 });
//             gsap.set(card1Ref.current, { y: 30, opacity: 0 });
//             gsap.set(card2Ref.current, { y: 30, opacity: 0 });

//             // Animate elements in
//             tl.to(videoWrapperRef.current, {
//                 x: 0,
//                 opacity: 1,
//                 duration: 1.2,
//                 ease: "power4.out",
//                 force3D: true
//             })
//                 .to(spreadTomatoRef.current, {
//                     x: 0,
//                     opacity: 0.3,
//                     duration: 1.2,
//                     ease: "power4.out",
//                     force3D: true
//                 }, "-=0.7")
//                 .to(textWrapperRef.current, {
//                     x: 0,
//                     opacity: 1,
//                     duration: 1.2,
//                     ease: "power4.out",
//                     force3D: true
//                 }, "-=0.6")
//                 .to(card1Ref.current, {
//                     y: 0,
//                     opacity: 1,
//                     duration: 0.8,
//                     ease: "power3.out",
//                     force3D: true
//                 }, "-=0.4")
//                 .to(card2Ref.current, {
//                     y: 0,
//                     opacity: 1,
//                     duration: 0.8,
//                     ease: "power3.out",
//                     force3D: true
//                 }, "-=0.4");
//         }

//         // Section 2 Animations
//         const container2 = container2Ref.current;
//         if (container2) {
//             const tl2 = gsap.timeline({
//                 scrollTrigger: {
//                     trigger: container2,
//                     start: "top 80%",
//                     end: "bottom 20%",
//                     toggleActions: "play reverse play reverse",
//                 }
//             });

//             // Set initial positions
//             gsap.set(videoWrapper2Ref.current, { x: 150, opacity: 0 });
//             gsap.set(textWrapper2Ref.current, { x: -100, opacity: 0 });
//             gsap.set(card3Ref.current, { y: 30, opacity: 0 });
//             gsap.set(card4Ref.current, { y: 30, opacity: 0 });

//             // Animate elements in
//             tl2.to(videoWrapper2Ref.current, {
//                 x: 0,
//                 opacity: 1,
//                 duration: 1.2,
//                 ease: "power4.out",
//                 force3D: true
//             })
//                 .to(textWrapper2Ref.current, {
//                     x: 0,
//                     opacity: 1,
//                     duration: 1.2,
//                     ease: "power4.out",
//                     force3D: true
//                 }, "-=0.8")
//                 .to(card3Ref.current, {
//                     y: 0,
//                     opacity: 1,
//                     duration: 0.8,
//                     ease: "power3.out",
//                     force3D: true
//                 }, "-=0.4")
//                 .to(card4Ref.current, {
//                     y: 0,
//                     opacity: 1,
//                     duration: 0.8,
//                     ease: "power3.out",
//                     force3D: true
//                 }, "-=0.4");
//         }

//         return () => {
//             ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//         };
//     }, []);

//     return (
//         <div className="w-full">

//             {/* SECTION 1: ABOUT US (Video Left, Text Right) */}
//             <section ref={containerRef} className="relative bg-[#fffdfa] py-20 pr-6 md:pr-12 lg:pr-24 pl-0 overflow-hidden flex justify-between items-center w-full">
//                 {/* Decorative Floating Cherry Tomato - Middle Right */}
//                 <div className="absolute right-12 top-1/2 w-8 h-8 pointer-events-none select-none z-0 animate-float-decor-2 opacity-30 hidden lg:block will-change-transform">
//                     <Image src="/tomatoimg.png" alt="Floating Cherry Tomato" width={32} height={32} className="w-full h-full object-contain" />
//                 </div>

//                 {/* Decorative Background Tomato Spread - Bottom Right */}
//                 <div
//                     ref={spreadTomatoRef}
//                     className="absolute top-[20px] right-[-100px] sm:right-[-120px] md:right-[-150px] w-[260px] sm:w-[420px] md:w-[580px] h-auto pointer-events-none select-none z-0 opacity-0 will-change-[transform,opacity]"
//                 >
//                     <div className="w-full h-full animate-float-spread will-change-transform">
//                         <Image src="/spreadTomato.png" alt="Tomato Spread Background" width={580} height={580} className="w-full h-auto object-contain" />
//                     </div>
//                 </div>

//                 {/* Main Flex Layout Wrapper */}
//                 <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 w-full z-10">

//                     {/* LEFT SIDE — Circular Curved Video Container */}
//                     <div ref={videoWrapperRef} className="group relative w-full lg:w-[48%] h-[350px] sm:h-[450px] md:h-[520px] rounded-r-[180px] sm:rounded-r-[250px] overflow-hidden border-[6px] border-white border-l-0 shadow-[0_20px_50px_rgba(0,0,0,0.08)] bg-gray-100 flex-shrink-0 opacity-0 will-change-[transform,opacity]">
//                         <video
//                             src="/abouthomeVidio.mp4"
//                             autoPlay
//                             loop
//                             muted
//                             playsInline
//                             className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out"
//                         />
//                     </div>

//                     {/* RIGHT SIDE — About Us Content */}
//                     <div className="flex-1 flex flex-col items-start w-full pl-6 lg:pl-0">

//                         {/* Text Wrapper for sequential slide-in */}
//                         <div ref={textWrapperRef} className="w-full flex flex-col items-start opacity-0 will-change-[transform,opacity]">
//                             {/* Section Label */}
//                             <div className="flex items-center gap-2 mb-4 justify-start text-[#a50808]">
//                                 <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
//                                 </svg>
//                                 <span className="font-dancing text-3xl font-bold normal-case">About Us</span>
//                                 <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
//                                 </svg>
//                             </div>

//                             {/* Section Title */}
//                             <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-[1.2] mb-6">
//                                 Variety Of Flavours From Sun-Dried Tomatoes
//                             </h2>

//                             {/* Section Description */}
//                             <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-semibold mb-8">
//                                 Every jar is not just prepared, it's crafted with a flavor that asserts the utmost precision and a deep understanding of flavor harmony. The experienced hands of our chefs bring traditions to life with every single jar of Drymato.
//                             </p>
//                         </div>

//                         {/* Features Grid */}
//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-gray-100 w-full">
//                             {/* Feature 1 */}
//                             <div ref={card1Ref} className="flex items-start gap-4 opacity-0 will-change-[transform,opacity]">
//                                 <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#a50808] shrink-0 mt-0.5 shadow-sm">
//                                     <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
//                                     </svg>
//                                 </div>
//                                 <div>
//                                     <h4 className="text-base font-poppins font-semibold text-gray-900 mb-1">Super Quality Food</h4>
//                                     <p className="text-xs text-gray-500 font-semibold leading-relaxed">Served our Tasty Food & good food by friendly</p>
//                                 </div>
//                             </div>

//                             {/* Feature 2 */}
//                             <div ref={card2Ref} className="flex items-start gap-4 border-l border-gray-100 sm:pl-6 opacity-0 will-change-[transform,opacity]">
//                                 <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#a50808] shrink-0 mt-0.5 shadow-sm">
//                                     <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
//                                     </svg>
//                                 </div>
//                                 <div>
//                                     <h4 className="text-base font-poppins font-bold text-gray-900 mb-1">Qualified Chef</h4>
//                                     <p className="text-xs text-gray-500 font-semibold leading-relaxed">Served our Tasty Food & good food by friendly</p>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>

//                 </div>
//             </section>

//             {/* SECTION 2: INFUSED TOMATOES (Text Left, Video Right) */}
//             <section ref={container2Ref} className="relative bg-[#fffdfa] py-20 pl-6 sm:pl-12 lg:pl-24 pr-0 overflow-hidden flex justify-between items-center w-full ">
//                 {/* Decorative Floating Cherry Tomato - Middle Left */}
//                 <div className="absolute left-12 top-1/3 w-8 h-8 pointer-events-none select-none z-0 animate-float-decor-1 opacity-30 hidden lg:block will-change-transform">
//                     <Image src="/tomatoimg.png" alt="Floating Cherry Tomato" width={32} height={32} className="w-full h-full object-contain" />
//                 </div>

//                 <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16 w-full z-10">

//                     {/* LEFT SIDE — Infused Tomatoes Content */}
//                     <div className="flex-1 flex flex-col items-start w-full pr-6 md:pr-12 lg:pr-16">

//                         {/* Text Wrapper for sequential slide-in */}
//                         <div ref={textWrapper2Ref} className="w-full flex flex-col items-start opacity-0 will-change-[transform,opacity]">
//                             {/* Section Label */}
//                             <div className="flex items-center gap-2 mb-4 justify-start text-[#a50808]">
//                                 <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
//                                 </svg>
//                                 <span className="font-dancing text-2xl font-bold normal-case">Our Specialty</span>
//                                 <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
//                                 </svg>
//                             </div>

//                             {/* Section Title */}
//                             <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-[1.2] mb-6">
//                                 Tomatoes Steeped In Premium Sunflower Oil
//                             </h2>

//                             {/* Section Description */}
//                             <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-semibold mb-8">
//                                 Slow-infused with aromatic garlic, wild oregano, and fresh herbs, our sun-dried tomatoes are preserved in rich sunflower oil. This specialty preservation keeps the tomatoes tender, locks in nutrients, and releases a deep savory essence that elevates any dish.
//                             </p>
//                         </div>

//                         {/* Features Grid */}
//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-gray-100 w-full">
//                             {/* Feature 1 */}
//                             <div ref={card3Ref} className="flex items-start gap-4 opacity-0 will-change-[transform,opacity]">
//                                 <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#a50808] shrink-0 mt-0.5 shadow-sm">
//                                     <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
//                                     </svg>
//                                 </div>
//                                 <div>
//                                     <h4 className="text-base font-semibold font-poppins text-gray-900 mb-1">Herb Slow Infusion</h4>
//                                     <p className="text-xs text-gray-500 font-semibold leading-relaxed">Infused with premium herbs for a rich, aromatic savory flavor burst.</p>
//                                 </div>
//                             </div>

//                             {/* Feature 2 */}
//                             <div ref={card4Ref} className="flex items-start gap-4 border-l border-gray-100 sm:pl-6 opacity-0 will-change-[transform,opacity]">
//                                 <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#a50808] shrink-0 mt-0.5 shadow-sm">
//                                     <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12z" />
//                                     </svg>
//                                 </div>
//                                 <div>
//                                     <h4 className="text-base font-poppins font-semibold text-gray-900 mb-1">Naturally Preserved</h4>
//                                     <p className="text-xs text-gray-500 font-semibold leading-relaxed">No artificial preservatives, locking in natural lycopene and nutrients.</p>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>

//                     {/* RIGHT SIDE — Circular Curved Video Container (Left curve) */}
//                     <div ref={videoWrapper2Ref} className="group relative w-full lg:w-[48%] h-[350px] sm:h-[450px] md:h-[520px] rounded-l-[180px] sm:rounded-l-[250px] overflow-hidden border-[6px] border-white border-r-0 shadow-[0_20px_50px_rgba(0,0,0,0.08)] bg-gray-100 flex-shrink-0 opacity-0 will-change-[transform,opacity]">
//                         <video
//                             src="/oiledTomato.webm"
//                             autoPlay
//                             loop
//                             muted
//                             playsInline
//                             className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out"
//                         />
//                     </div>

//                 </div>
//             </section>

//             {/* Custom Animation Styles */}
//             <style>{`
//                 @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800;900&family=Dancing+Script:wght@700&display=swap');

//                 .font-poppins {
//                     font-family: 'Poppins', sans-serif;
//                 }
//                 .font-dancing {
//                     font-family: 'Dancing Script', cursive;
//                 }

//                 @keyframes spin-slow {
//                     0% { transform: rotate(0deg); }
//                     100% { transform: rotate(360deg); }
//                 }
//                 .animate-spin-slow {
//                     animation: spin-slow 12s linear infinite;
//                 }
//                 @keyframes floatDecor1 {
//                     0% { transform: translateY(0px) rotate(0deg); }
//                     50% { transform: translateY(-10px) rotate(15deg); }
//                     100% { transform: translateY(0px) rotate(0deg); }
//                 }
//                 @keyframes floatDecor2 {
//                     0% { transform: translateY(0px) scale(1); }
//                     50% { transform: translateY(12px) scale(1.05); }
//                     100% { transform: translateY(0px) scale(1); }
//                 }
//                 @keyframes floatSpread {
//                     0% { transform: translateY(0px); }
//                     50% { transform: translateY(-10px); }
//                     100% { transform: translateY(0px); }
//                 }
//                 .animate-float-decor-1 { animation: floatDecor1 6s ease-in-out infinite; }
//                 .animate-float-decor-2 { animation: floatDecor2 5s ease-in-out infinite; }
//                 .animate-float-spread { animation: floatSpread 7s ease-in-out infinite; }
//             `}</style>
//         </div>
//     );
// }




"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const SECTION_1_FEATURES = [
    {
        title: "Raw Material",
        description: "Selection based on product requirements.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21V10M12 10c0-4-3-6-7-6 0 4 3 6 7 6zM12 13c0-4 3-6 7-6 0 4-3 6-7 6z" />
            </svg>
        )
    },
    {
        title: "Processing",
        description: "Controlled preparation and handling.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06A1.65 1.65 0 005 15.4a1.65 1.65 0 00-1-1.51H4a2 2 0 110-4h.09A1.65 1.65 0 005.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06A1.65 1.65 0 009 4.6a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06A1.65 1.65 0 0019 9c.11.35.31.66.6.9" />
            </svg>
        )
    },
    {
        title: "Dehydration",
        description: "Product-specific dehydration requirements.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="4.5" strokeLinecap="round" strokeLinejoin="round" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.5c-2.5 3-3 5-3 6.5a3 3 0 006 0c0-1.5-.5-3.5-3-6.5z" />
            </svg>
        )
    },
    {
        title: "Moisture",
        description: "Monitoring according to applicable product specifications.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.5c3 4 6 7.5 6 11a6 6 0 11-12 0c0-3.5 3-7 6-11z" />
            </svg>
        )
    },
    {
        title: "Packaging",
        description: "Appropriate food-grade packaging.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8l-9-5-9 5 9 5 9-5z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8v8l9 5 9-5V8" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 13v8" />
            </svg>
        )
    },
    {
        title: "Documentation",
        description: "Product specifications and applicable documentation according to buyer requirements.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <rect x="5" y="3" width="14" height="18" rx="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 8h7M8.5 12h7M8.5 16h4" />
            </svg>
        )
    }
];

const SECTION_2_FEATURES = [
    {
        title: "Bulk Packaging",
        description: "For manufacturers, wholesalers and institutional buyers.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <rect x="3" y="9" width="7" height="10" rx="1" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="12" y="5" width="7" height="14" rx="1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    },
    {
        title: "Vacuum Packaging",
        description: "For applicable dehydrated products requiring vacuum-packed formats.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <rect x="5" y="4" width="14" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 8l6 8M15 8l-6 8" />
            </svg>
        )
    },
    {
        title: "Retail Packaging",
        description: "Pouches, jars and other selected formats.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 3h8l1 4H7l1-4z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 7h12l-1 14H7L6 7z" />
            </svg>
        )
    },
    {
        title: "Private-Label Packaging",
        description: "Your brand identity applied to the agreed packaging format.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.59 13.41L11 3.83A2 2 0 009.58 3.24L4 3a1 1 0 00-1 1l.24 5.58a2 2 0 00.59 1.42l9.58 9.58a2 2 0 002.83 0l4.35-4.35a2 2 0 000-2.82z" />
                <circle cx="7.5" cy="7.5" r="1" fill="currentColor" stroke="none" />
            </svg>
        )
    },
    {
        title: "Export Packaging",
        description: "Packaging requirements can be discussed according to product, destination and buyer specifications.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9-4 9 4-9 4-9-4z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10l9 4 9-4V7" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 11v10" />
            </svg>
        )
    }
];

export default function HomeAbout() {
    const containerRef = useRef(null);
    const videoWrapperRef = useRef(null);
    const spreadTomatoRef = useRef(null);
    const textWrapperRef = useRef(null);
    const cardsRef = useRef([]);

    // Refs for Section 2 (Packaging)
    const container2Ref = useRef(null);
    const videoWrapper2Ref = useRef(null);
    const textWrapper2Ref = useRef(null);
    const cards2Ref = useRef([]);

    useEffect(() => {
        // Register ScrollTrigger inside useEffect to prevent Next.js SSR errors
        gsap.registerPlugin(ScrollTrigger);

        // Section 1 Animations
        const container = containerRef.current;
        if (container) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse",
                }
            });

            const cards1 = cardsRef.current.filter(Boolean);

            // Set initial positions
            gsap.set(videoWrapperRef.current, { x: -150, opacity: 0 });
            gsap.set(spreadTomatoRef.current, { x: 250, opacity: 0 });
            gsap.set(textWrapperRef.current, { x: 100, opacity: 0 });
            gsap.set(cards1, { y: 30, opacity: 0 });

            // Animate elements in
            tl.to(videoWrapperRef.current, {
                x: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power4.out",
                force3D: true
            })
                .to(spreadTomatoRef.current, {
                    x: 0,
                    opacity: 0.3,
                    duration: 1.2,
                    ease: "power4.out",
                    force3D: true
                }, "-=0.7")
                .to(textWrapperRef.current, {
                    x: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power4.out",
                    force3D: true
                }, "-=0.6")
                .to(cards1, {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    stagger: 0.08,
                    force3D: true
                }, "-=0.4");
        }

        // Section 2 Animations
        const container2 = container2Ref.current;
        if (container2) {
            const tl2 = gsap.timeline({
                scrollTrigger: {
                    trigger: container2,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse",
                }
            });

            const cards2 = cards2Ref.current.filter(Boolean);

            // Set initial positions
            gsap.set(videoWrapper2Ref.current, { x: 150, opacity: 0 });
            gsap.set(textWrapper2Ref.current, { x: -100, opacity: 0 });
            gsap.set(cards2, { y: 30, opacity: 0 });

            // Animate elements in
            tl2.to(videoWrapper2Ref.current, {
                x: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power4.out",
                force3D: true
            })
                .to(textWrapper2Ref.current, {
                    x: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power4.out",
                    force3D: true
                }, "-=0.8")
                .to(cards2, {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    stagger: 0.08,
                    force3D: true
                }, "-=0.4");
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className="w-full">

            {/* SECTION 1: QUALITY PROCESS (Video Left, Text Right) */}
            <section ref={containerRef} className="relative bg-surface py-20 pr-6 md:pr-12 lg:pr-24 pl-0 overflow-hidden flex justify-between items-center w-full">
                {/* Decorative Floating Cherry Tomato - Middle Right */}
                <div className="absolute right-12 top-1/2 w-8 h-8 pointer-events-none select-none z-0 animate-float-decor-2 opacity-30 hidden lg:block will-change-transform">
                    <Image src="/tomatoimg.png" alt="Floating Cherry Tomato" width={32} height={32} className="w-full h-full object-contain" />
                </div>

                {/* Decorative Background Tomato Spread - Bottom Right */}
                <div
                    ref={spreadTomatoRef}
                    className="absolute top-[20px] right-[-100px] sm:right-[-120px] md:right-[-150px] w-[260px] sm:w-[420px] md:w-[580px] h-auto pointer-events-none select-none z-0 opacity-0 will-change-[transform,opacity]"
                >
                    <div className="w-full h-full animate-float-spread will-change-transform">
                        <Image src="/spreadTomato.png" alt="Tomato Spread Background" width={580} height={580} className="w-full h-auto object-contain" />
                    </div>
                </div>

                {/* Main Flex Layout Wrapper */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 w-full z-10">

                    {/* LEFT SIDE — Circular Curved Video Container */}
                    <div ref={videoWrapperRef} className="group relative w-full lg:w-[48%] h-[350px] sm:h-[450px] md:h-[520px] rounded-r-[180px] sm:rounded-r-[250px] overflow-hidden border-[6px] border-white border-l-0 shadow-[0_20px_50px_rgba(0,0,0,0.08)] bg-gray-100 flex-shrink-0 opacity-0 will-change-[transform,opacity]">
                        <video
                            src="/abouthomeVidio.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out"
                        />
                    </div>

                    {/* RIGHT SIDE — Content */}
                    <div className="flex-1 flex flex-col items-start w-full pl-6 lg:pl-0">

                        {/* Text Wrapper for sequential slide-in */}
                        <div ref={textWrapperRef} className="w-full flex flex-col items-start opacity-0 will-change-[transform,opacity]">
                            {/* Section Label */}
                            <div className="flex items-center gap-2 mb-4 justify-start text-forest">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                                </svg>
                                <span className="font-serif italic text-3xl font-bold normal-case">Our Process</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                                </svg>
                            </div>

                            {/* Section Title */}
                            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-[1.2] mb-6">
                                Quality Is a Process, Not a Final Check.
                            </h2>

                            {/* Section Description */}
                            <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-semibold mb-8">
                                Our quality approach starts before manufacturing.
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 pt-6 border-t border-gray-100 w-full">
                            {SECTION_1_FEATURES.map((feature, index) => (
                                <div
                                    key={feature.title}
                                    ref={(el) => (cardsRef.current[index] = el)}
                                    className={`flex items-start gap-4 opacity-0 will-change-[transform,opacity] ${index % 2 === 1 ? "sm:border-l sm:border-gray-100 sm:pl-6" : ""
                                        }`}
                                >
                                    <div className="w-12 h-12 rounded-xl bg-surface border border-sage/25 flex items-center justify-center text-forest shrink-0 mt-0.5 shadow-sm">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-base font-sans font-semibold text-gray-900 mb-1">{feature.title}</h4>
                                        <p className="text-xs text-gray-500 font-semibold leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </section>

            {/* SECTION 2: PACKAGING (Text Left, Video Right) */}
            <section ref={container2Ref} className="relative bg-surface py-20 pl-6 sm:pl-12 lg:pl-24 pr-0 overflow-hidden flex justify-between items-center w-full ">
                {/* Decorative Floating Cherry Tomato - Middle Left */}
                <div className="absolute left-12 top-1/3 w-8 h-8 pointer-events-none select-none z-0 animate-float-decor-1 opacity-30 hidden lg:block will-change-transform">
                    <Image src="/tomatoimg.png" alt="Floating Cherry Tomato" width={32} height={32} className="w-full h-full object-contain" />
                </div>

                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16 w-full z-10">

                    {/* LEFT SIDE — Packaging Content */}
                    <div className="flex-1 flex flex-col items-start w-full pr-6 md:pr-12 lg:pr-16">

                        {/* Text Wrapper for sequential slide-in */}
                        <div ref={textWrapper2Ref} className="w-full flex flex-col items-start opacity-0 will-change-[transform,opacity]">
                            {/* Section Label */}
                            <div className="flex items-center gap-2 mb-4 justify-start text-forest">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                                </svg>
                                <span className="font-serif italic text-2xl font-bold normal-case">Packaging</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                                </svg>
                            </div>

                            {/* Section Title */}
                            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-[1.2] mb-6">
                                Packaging Built Around the Product.
                            </h2>

                            {/* Section Description */}
                            <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-semibold mb-8">
                                Different applications need different packaging solutions.
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 pt-6 border-t border-gray-100 w-full">
                            {SECTION_2_FEATURES.map((feature, index) => (
                                <div
                                    key={feature.title}
                                    ref={(el) => (cards2Ref.current[index] = el)}
                                    className={`flex items-start gap-4 opacity-0 will-change-[transform,opacity] ${index % 2 === 1 ? "sm:border-l sm:border-gray-100 sm:pl-6" : ""
                                        }`}
                                >
                                    <div className="w-12 h-12 rounded-xl bg-surface border border-sage/25 flex items-center justify-center text-forest shrink-0 mt-0.5 shadow-sm">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-base font-sans font-semibold text-gray-900 mb-1">{feature.title}</h4>
                                        <p className="text-xs text-gray-500 font-semibold leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* RIGHT SIDE — Circular Curved Video Container (Left curve) */}
                    <div ref={videoWrapper2Ref} className="group relative w-full lg:w-[48%] h-[350px] sm:h-[450px] md:h-[520px] rounded-l-[180px] sm:rounded-l-[250px] overflow-hidden border-[6px] border-white border-r-0 shadow-[0_20px_50px_rgba(0,0,0,0.08)] bg-gray-100 flex-shrink-0 opacity-0 will-change-[transform,opacity]">
                        <video
                            src="/oiledTomato.webm"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out"
                        />
                    </div>

                </div>
            </section>

            {/* Custom Animation Styles */}
            <style>{`
                @keyframes spin-slow {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 12s linear infinite;
                }
                @keyframes floatDecor1 {
                    0% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-10px) rotate(15deg); }
                    100% { transform: translateY(0px) rotate(0deg); }
                }
                @keyframes floatDecor2 {
                    0% { transform: translateY(0px) scale(1); }
                    50% { transform: translateY(12px) scale(1.05); }
                    100% { transform: translateY(0px) scale(1); }
                }
                @keyframes floatSpread {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0px); }
                }
                .animate-float-decor-1 { animation: floatDecor1 6s ease-in-out infinite; }
                .animate-float-decor-2 { animation: floatDecor2 5s ease-in-out infinite; }
                .animate-float-spread { animation: floatSpread 7s ease-in-out infinite; }
            `}</style>
        </div>
    );
}