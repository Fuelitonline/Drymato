// "use client";

// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import Image from "next/image";

// const REVIEWS = [
//     {
//         id: 1,
//         name: "Albert Flores",
//         role: "Web Designer",
//         rating: 4,
//         avatar: "AF",
//         avatarBg: "bg-[#a50808]/10 text-[#a50808]",
//         text: "Penatibus magnis dis point parturient montes nascetur ridiculus mus Ut id lorem ac enim the vestibulum blandit nec sit amet felis. Fusce quis diam odio Cras mattis mi quis tincidunt"
//     },
//     {
//         id: 2,
//         name: "Chef Alessandro",
//         role: "Ristorante Bella",
//         rating: 5,
//         avatar: "CA",
//         avatarBg: "bg-emerald-100 text-emerald-800",
//         text: "The Sunflower Oil infused sun-dried tomatoes are a staple in my kitchen now. Perfectly tender and steeped in gourmet herbs. It adds an authentic Italian touch instantly."
//     },
//     {
//         id: 3,
//         name: "Sarah Jenkins",
//         role: "Culinary Blogger",
//         rating: 5,
//         avatar: "SJ",
//         avatarBg: "bg-amber-100 text-amber-800",
//         text: "Drymato has completely changed my pasta game! The richness of the slow-dried flavor is unmatched by any store-bought brand. Every bite bursts with intense tomato goodness."
//     },
//     {
//         id: 4,
//         name: "Elena Rostova",
//         role: "Food Stylist",
//         rating: 5,
//         avatar: "ER",
//         avatarBg: "bg-sky-100 text-sky-800",
//         text: "Not only do they taste incredible, but the vibrant color and texture of Drymato tomatoes make every dish look like a work of art. The quality is visible at first glance."
//     },
//     {
//         id: 5,
//         name: "David Carter",
//         role: "Health Enthusiast",
//         rating: 5,
//         avatar: "DC",
//         avatarBg: "bg-purple-100 text-purple-800",
//         text: "I love that they are 100% natural with no preservatives. A delicious, healthy addition to my morning salads and sandwiches. Truly pure and wholesome!"
//     }
// ];

// export default function Reviews() {
//     const [activeIndex, setActiveIndex] = useState(0);
//     const [isPlaying, setIsPlaying] = useState(false);
//     const videoRef = useRef(null);
//     const cardRef = useRef(null);
//     const isAnimating = useRef(false);
//     const containerRef = useRef(null);
//     const [size, setSize] = useState({ width: 0, height: 0 });

//     // Initial setup: start video muted and loop by default
//     useEffect(() => {
//         if (videoRef.current) {
//             videoRef.current.muted = true;
//             videoRef.current.loop = true;
//             // Attempt autoplay
//             videoRef.current.play().then(() => {
//                 setIsPlaying(true);
//             }).catch(() => {
//                 setIsPlaying(false);
//             });
//         }
//     }, []);

//     // Autoplay carousel transition: moves slides continuously and automatically like an infinite scroll
//     useEffect(() => {
//         const interval = setInterval(() => {
//             const nextIdx = (activeIndex + 1) % REVIEWS.length;
//             handleSlideChange(nextIdx, "next");
//         }, 5000);
//         return () => clearInterval(interval);
//     }, [activeIndex]);

//     // Track container size dynamically to draw custom responsive borders without gaps
//     useEffect(() => {
//         if (!containerRef.current) return;
//         const resizeObserver = new ResizeObserver((entries) => {
//             for (let entry of entries) {
//                 setSize({
//                     width: entry.contentRect.width,
//                     height: entry.contentRect.height
//                 });
//             }
//         });
//         resizeObserver.observe(containerRef.current);
//         return () => resizeObserver.disconnect();
//     }, []);

//     const togglePlay = (e) => {
//         e.stopPropagation();
//         if (!videoRef.current) return;
//         if (isPlaying) {
//             videoRef.current.pause();
//             setIsPlaying(false);
//         } else {
//             videoRef.current.play();
//             setIsPlaying(true);
//         }
//     };

//     const handleSlideChange = (nextIndex, direction) => {
//         if (isAnimating.current || !cardRef.current) return;
//         isAnimating.current = true;

//         const isNext = direction === "next";

//         // Slide out current card
//         gsap.to(cardRef.current, {
//             x: isNext ? -60 : 60,
//             opacity: 0,
//             duration: 0.35,
//             ease: "power2.in",
//             onComplete: () => {
//                 setActiveIndex(nextIndex);
//                 // Reset card position to opposite side and animate in
//                 gsap.fromTo(cardRef.current,
//                     { x: isNext ? 60 : -60, opacity: 0 },
//                     {
//                         x: 0,
//                         opacity: 1,
//                         duration: 0.5,
//                         ease: "power2.out",
//                         onComplete: () => {
//                             isAnimating.current = false;
//                         }
//                     }
//                 );
//             }
//         });
//     };

//     const nextReview = () => {
//         const nextIdx = (activeIndex + 1) % REVIEWS.length;
//         handleSlideChange(nextIdx, "next");
//     };

//     const prevReview = () => {
//         const prevIdx = (activeIndex - 1 + REVIEWS.length) % REVIEWS.length;
//         handleSlideChange(prevIdx, "prev");
//     };

//     const activeReview = REVIEWS[activeIndex];

//     const R = size.width > 500 ? 300 : 150;
//     const R_stroke = R - 2;
//     const borderPath = size.width > 0 && size.height > 0
//         ? `M 0 2 L ${size.width - R} 2 A ${R_stroke} ${R_stroke} 0 0 1 ${size.width - 2} ${R} L ${size.width - 2} ${size.height - 2} L 0 ${size.height - 2}`
//         : "";

//     return (
//         <section className="w-full relative overflow-hidden bg-transparent pt-0 pb-0">
//             {/* Wavy SVG divider at the top */}
//             <div className="w-full h-[30px] sm:h-[45px] md:h-[60px] relative -mb-[1px] z-10 select-none pointer-events-none bg-white">
//                 <svg
//                     viewBox="0 0 1440 60"
//                     className="w-full h-full block"
//                     preserveAspectRatio="none"
//                     fill="#a50808 "
//                 >
//                     <path d="M 0,38 C 15,38 30,10 50,10 C 75,10 95,45 120,45 C 145,45 165,18 190,18 C 215,18 235,45 260,45 C 285,45 305,18 330,18 C 355,18 375,45 400,45 C 425,45 445,18 470,18 C 495,18 515,45 540,45 C 565,45 585,18 610,18 C 635,18 655,45 680,45 C 705,45 725,18 750,18 C 775,18 795,45 820,45 C 845,45 865,18 890,18 C 915,18 935,45 960,45 C 985,45 1005,18 1030,18 C 1055,18 1075,45 1100,45 C 1125,45 1145,18 1170,18 C 1195,18 1215,45 1240,45 C 1265,45 1285,8 1310,8 C 1335,8 1355,48 1380,48 C 1400,48 1415,30 1430,30 C 1435,30 1440,35 1440,38 L 1440,60 L 0,60 Z" />
//                 </svg>
//             </div>

//             {/* Main content container with red background */}
//             <div className="w-full bg-[#a50808] pb-8 pt-16 md:pb-12 md:pt-24">
//                 <div className="w-full h-auto md:h-[600px] flex flex-col md:flex-row relative">

//                     {/* Left Side: Video Section Wrapper */}
//                     <div className="w-full md:w-[70%] h-[350px] sm:h-[400px] md:h-full relative group/vid">
//                         {/* Inline style for the marquee text and laser ring shine animations */}
//                         <style dangerouslySetInnerHTML={{
//                             __html: `
//                         @keyframes reviewsMarquee {
//                             0% { transform: translateX(0%); }
//                             100% { transform: translateX(-50%); }
//                         }
//                         .animate-reviews-marquee {
//                             animation: reviewsMarquee 15s linear infinite;
//                         }
//                         @keyframes reviewsRingShine {
//                             0% { stroke-dashoffset: 2680; }
//                             100% { stroke-dashoffset: 0; }
//                         }
//                         .animate-reviews-ring-shine {
//                             animation: reviewsRingShine 2.5s linear infinite;
//                         }
//                     `}} />

//                         {/* Moving Text Ticker (Marquee) at Top Left */}
//                         <div className="absolute bottom-12 left-4 z-20 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full overflow-hidden w-[180px] md:w-[240px] shadow-sm select-none">
//                             <div className="flex w-max animate-reviews-marquee gap-8 text-[9px] md:text-[10px] font-black tracking-[2px] uppercase text-white/90">
//                                 <span>TESTIMONIALS • REVIEWS • CLIENT FEEDBACK • DRYMATO</span>
//                                 <span>TESTIMONIALS • REVIEWS • CLIENT FEEDBACK • DRYMATO</span>
//                             </div>
//                         </div>
//                         {/* Inner Clickable Video Container */}
//                         <div
//                             ref={containerRef}
//                             onClick={togglePlay}
//                             className="w-full h-[95%] relative cursor-pointer overflow-hidden z-0 rounded-tr-[150px] md:rounded-tr-[300px] rounded-tl-none rounded-br-none rounded-bl-none"
//                         >
//                             <video
//                                 ref={videoRef}
//                                 src="/reviewBackgreound.mp4"
//                                 playsInline
//                                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/vid:scale-105"
//                             />

//                             {/* Dark gradient overlay on video */}
//                             <div className="absolute inset-0 bg-black/30 group-hover/vid:bg-black/20 transition-colors duration-300" />
//                         </div>

//                         {/* Single Continuous Outer Ring SVG (Top, Right, Bottom - except Left) with Hover Shine */}
//                         {borderPath && (
//                             <div className="absolute top-0 left-0 w-full h-[95%] pointer-events-none z-20">
//                                 <svg width="100%" height="100%" className="overflow-hidden">
//                                     <defs>
//                                         <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
//                                             <stop offset="0%" stopColor="#f97316" />
//                                             <stop offset="100%" stopColor="#eab308" />
//                                         </linearGradient>
//                                     </defs>

//                                     {/* Base Gradient Border Stroke (Unbroken) */}
//                                     <path
//                                         d={borderPath}
//                                         fill="none"
//                                         stroke="url(#ringGrad)"
//                                         strokeWidth="4"
//                                         strokeLinecap="round"
//                                     />

//                                     {/* Moving Shine / Laser Stroke on Hover */}
//                                     <path
//                                         d={borderPath}
//                                         fill="none"
//                                         stroke="#ffffff"
//                                         strokeWidth="4"
//                                         strokeLinecap="round"
//                                         className="opacity-0 group-hover/vid:opacity-100 transition-opacity duration-300 animate-reviews-ring-shine"
//                                         style={{
//                                             strokeDasharray: "180 2500",
//                                         }}
//                                     />
//                                 </svg>
//                             </div>
//                         )}

//                         {/* Header Badges & Titles - Overlaying the video on the bottom-left */}
//                         <div className="absolute left-6 sm:left-10 md:left-16 top-8 md:top-16 z-20 flex flex-col items-start select-none">
//                             <div className="flex items-center gap-2 mb-2">
//                                 <div className="h-[1.5px] w-5 bg-orange-500/40" />
//                                 <span className="text-orange-500 text-[10px] font-black tracking-[3px] uppercase">
//                                     TESTIMONIALS
//                                 </span>
//                                 <div className="h-[1.5px] w-5 bg-orange-500/40" />
//                             </div>
//                             <h2 className="text-white text-2xl sm:text-3xl lg:text-[40px] font-bold leading-tight font-poppins">
//                                 What Our Clients Say
//                             </h2>
//                         </div>
//                     </div>

//                     {/* Right Side: Red Color Content Section - 30% Width */}
//                     <div className="w-full md:w-[30%] bg-[#a50808] h-auto md:h-full flex flex-col justify-end px-6 sm:px-10 md:pl-16 md:pr-8 pb-16 md:pb-20 relative z-0">

//                         {/* Navigation Buttons */}
//                         <div className="flex items-center gap-4 select-none z-20 pt-8 md:pt-0">
//                             {/* Prev Button */}
//                             <button
//                                 onClick={prevReview}
//                                 className="w-12 h-12 rounded-full border border-white/60 flex items-center justify-center text-white hover:bg-white hover:text-[#a50808] hover:border-transparent active:scale-95 transition-all duration-300 cursor-pointer"
//                                 aria-label="Previous Review"
//                             >
//                                 <svg className="w-5 h-5 stroke-current" fill="none" strokeWidth="2.5" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//                                 </svg>
//                             </button>

//                             {/* Next Button */}
//                             <button
//                                 onClick={nextReview}
//                                 className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#a50808] hover:bg-gray-100 active:scale-95 transition-all duration-300 cursor-pointer shadow-md"
//                                 aria-label="Next Review"
//                             >
//                                 <svg className="w-5 h-5 stroke-current" fill="none" strokeWidth="2.5" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//                                 </svg>
//                             </button>
//                         </div>

//                         {/* Left & Right Decorative tomato tree overlay (Subtle white outlines at low opacity) */}
//                         <div className="absolute right-0 bottom-0 w-[200px] opacity-[0.04] pointer-events-none select-none z-0">
//                             <Image src="/tomatotree.png" alt="Decorative Tomato Tree" width={200} height={200} className="w-full h-auto object-contain" />
//                         </div>
//                     </div>

//                     {/* Overlapping Testimonial Card - Positioned in the right red section */}
//                     <div className="w-full md:absolute md:right-8 lg:right-16 md:top-1/2 md:-translate-y-1/2 z-30 flex justify-center md:justify-end my-6 md:my-0">
//                         <div
//                             ref={cardRef}
//                             className="w-[calc(100%-32px)] sm:w-[480px] bg-white rounded-2xl p-8 sm:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.08)] will-change-[transform,opacity]"
//                         >
//                             {/* Card Top: Avatar, Info, and Quote Icon */}
//                             <div className="flex items-center justify-between mb-6">
//                                 <div className="flex items-center gap-4">
//                                     {/* Styled Circular Initials Avatar */}
//                                     <div className={`w-12 h-12 rounded-full flex items-center justify-center font-poppins font-black text-sm shadow-inner ${activeReview.avatarBg}`}>
//                                         {activeReview.avatar}
//                                     </div>
//                                     <div>
//                                         <h4 className="font-poppins font-black text-[#1b4d3e] text-base leading-tight">
//                                             {activeReview.name}
//                                         </h4>
//                                         <span className="text-gray-400 text-xs font-semibold">
//                                             {activeReview.role}
//                                         </span>
//                                     </div>
//                                 </div>

//                                 {/* Large Quote Mark */}
//                                 <span className="text-5xl font-serif text-[#ff5c00] leading-none select-none">
//                                     ”
//                                 </span>
//                             </div>

//                             {/* Ratings */}
//                             <div className="flex items-center gap-1 mb-4 select-none">
//                                 {[...Array(5)].map((_, i) => (
//                                     <svg
//                                         key={i}
//                                         className={`w-4 h-4 ${i < activeReview.rating ? "text-amber-500 fill-current" : "text-gray-200 fill-current"}`}
//                                         viewBox="0 0 24 24"
//                                     >
//                                         <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//                                     </svg>
//                                 ))}
//                             </div>

//                             {/* Review text */}
//                             <p className="text-gray-600 leading-relaxed font-semibold italic text-[13.5px]">
//                                 "{activeReview.text}"
//                             </p>
//                         </div>
//                     </div>

//                 </div>
//             </div>

//             {/* Wavy SVG divider at the bottom */}
//             <div className="w-full h-[30px] sm:h-[45px] md:h-[60px] relative -mt-[1px] z-10 select-none pointer-events-none bg-white">
//                 <svg
//                     viewBox="0 0 1440 60"
//                     className="w-full h-full block"
//                     preserveAspectRatio="none"
//                     fill="#a50808"
//                 >
//                     <path d="M 0,38 C 15,38 30,10 50,10 C 75,10 95,45 120,45 C 145,45 165,18 190,18 C 215,18 235,45 260,45 C 285,45 305,18 330,18 C 355,18 375,45 400,45 C 425,45 445,18 470,18 C 495,18 515,45 540,45 C 565,45 585,18 610,18 C 635,18 655,45 680,45 C 705,45 725,18 750,18 C 775,18 795,45 820,45 C 845,45 865,18 890,18 C 915,18 935,45 960,45 C 985,45 1005,18 1030,18 C 1055,18 1075,45 1100,45 C 1125,45 1145,18 1170,18 C 1195,18 1215,45 1240,45 C 1265,45 1285,8 1310,8 C 1335,8 1355,48 1380,48 C 1400,48 1415,30 1430,30 C 1435,30 1440,35 1440,38 L 1440,0 L 0,0 Z" />
//                 </svg>
//             </div>
//         </section>
//     );
// }




"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

const REVIEWS = [
    {
        id: 1,
        name: "Albert Flores",
        role: "Food Distributor",
        rating: 4,
        avatar: "AF",
        avatarBg: "bg-forest/10 text-forest",
        text: "Drymato's range of dehydrated vegetables has simplified our sourcing completely. Consistent quality across every batch, and the bulk packaging makes distribution effortless."
    },
    {
        id: 2,
        name: "Chef Alessandro",
        role: "Ristorante Bella",
        rating: 5,
        avatar: "CA",
        avatarBg: "bg-emerald-100 text-emerald-800",
        text: "Their dehydrated herbs and fruit powders are a staple in my kitchen now. Rich aroma, vibrant color, and they rehydrate beautifully. An authentic touch in every dish."
    },
    {
        id: 3,
        name: "Sarah Jenkins",
        role: "Culinary Blogger",
        rating: 5,
        avatar: "SJ",
        avatarBg: "bg-amber-100 text-amber-800",
        text: "Drymato has completely changed how I stock my pantry! The flavor retention across their dried fruits and vegetables is unmatched by anything store-bought."
    },
    {
        id: 4,
        name: "Elena Rostova",
        role: "Food Stylist",
        rating: 5,
        avatar: "ER",
        avatarBg: "bg-sky-100 text-sky-800",
        text: "The color and texture of their dehydrated produce make every dish look like a work of art. From beetroot to mango, the quality is visible at first glance."
    },
    {
        id: 5,
        name: "David Carter",
        role: "Health Enthusiast",
        rating: 5,
        avatar: "DC",
        avatarBg: "bg-purple-100 text-purple-800",
        text: "I love that everything is 100% natural with no preservatives. Their vegetable powders and dried fruit are a delicious, healthy addition to my everyday cooking."
    }
];

export default function Reviews() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);
    const cardRef = useRef(null);
    const isAnimating = useRef(false);
    const containerRef = useRef(null);
    const [size, setSize] = useState({ width: 0, height: 0 });

    // Initial setup: start video muted and loop by default
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.loop = true;
            // Attempt autoplay
            videoRef.current.play().then(() => {
                setIsPlaying(true);
            }).catch(() => {
                setIsPlaying(false);
            });
        }
    }, []);

    // Autoplay carousel transition: moves slides continuously and automatically like an infinite scroll
    useEffect(() => {
        const interval = setInterval(() => {
            const nextIdx = (activeIndex + 1) % REVIEWS.length;
            handleSlideChange(nextIdx, "next");
        }, 5000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    // Track container size dynamically to draw custom responsive borders without gaps
    useEffect(() => {
        if (!containerRef.current) return;
        const resizeObserver = new ResizeObserver((entries) => {
            for (let entry of entries) {
                setSize({
                    width: entry.contentRect.width,
                    height: entry.contentRect.height
                });
            }
        });
        resizeObserver.observe(containerRef.current);
        return () => resizeObserver.disconnect();
    }, []);

    const togglePlay = (e) => {
        e.stopPropagation();
        if (!videoRef.current) return;
        if (isPlaying) {
            videoRef.current.pause();
            setIsPlaying(false);
        } else {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    const handleSlideChange = (nextIndex, direction) => {
        if (isAnimating.current || !cardRef.current) return;
        isAnimating.current = true;

        const isNext = direction === "next";

        // Slide out current card
        gsap.to(cardRef.current, {
            x: isNext ? -60 : 60,
            opacity: 0,
            duration: 0.35,
            ease: "power2.in",
            onComplete: () => {
                setActiveIndex(nextIndex);
                // Reset card position to opposite side and animate in
                gsap.fromTo(cardRef.current,
                    { x: isNext ? 60 : -60, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 0.5,
                        ease: "power2.out",
                        onComplete: () => {
                            isAnimating.current = false;
                        }
                    }
                );
            }
        });
    };

    const nextReview = () => {
        const nextIdx = (activeIndex + 1) % REVIEWS.length;
        handleSlideChange(nextIdx, "next");
    };

    const prevReview = () => {
        const prevIdx = (activeIndex - 1 + REVIEWS.length) % REVIEWS.length;
        handleSlideChange(prevIdx, "prev");
    };

    const activeReview = REVIEWS[activeIndex];

    const R = size.width > 500 ? 300 : 150;
    const R_stroke = R - 2;
    const borderPath = size.width > 0 && size.height > 0
        ? `M 0 2 L ${size.width - R} 2 A ${R_stroke} ${R_stroke} 0 0 1 ${size.width - 2} ${R} L ${size.width - 2} ${size.height - 2} L 0 ${size.height - 2}`
        : "";

    return (
        <section className="w-full relative overflow-hidden bg-transparent pt-0 pb-0">
            {/* Wavy SVG divider at the top */}
            <div className="w-full h-[30px] sm:h-[45px] md:h-[60px] relative -mb-[1px] z-10 select-none pointer-events-none bg-surface">
                <svg
                    viewBox="0 0 1440 60"
                    className="w-full h-full block"
                    preserveAspectRatio="none"
                    fill="#243822"
                >
                    <path d="M 0,38 C 15,38 30,10 50,10 C 75,10 95,45 120,45 C 145,45 165,18 190,18 C 215,18 235,45 260,45 C 285,45 305,18 330,18 C 355,18 375,45 400,45 C 425,45 445,18 470,18 C 495,18 515,45 540,45 C 565,45 585,18 610,18 C 635,18 655,45 680,45 C 705,45 725,18 750,18 C 775,18 795,45 820,45 C 845,45 865,18 890,18 C 915,18 935,45 960,45 C 985,45 1005,18 1030,18 C 1055,18 1075,45 1100,45 C 1125,45 1145,18 1170,18 C 1195,18 1215,45 1240,45 C 1265,45 1285,8 1310,8 C 1335,8 1355,48 1380,48 C 1400,48 1415,30 1430,30 C 1435,30 1440,35 1440,38 L 1440,60 L 0,60 Z" />
                </svg>
            </div>

            {/* Main content container with forest-green background */}
            <div className="w-full bg-forest pb-8 pt-16 md:pb-12 md:pt-24">
                <div className="w-full h-auto md:h-[600px] flex flex-col md:flex-row relative">

                    {/* Left Side: Video Section Wrapper */}
                    <div className="w-full md:w-[70%] h-[350px] sm:h-[400px] md:h-full relative group/vid">
                        {/* Inline style for the marquee text and laser ring shine animations */}
                        <style dangerouslySetInnerHTML={{
                            __html: `
                        @keyframes reviewsMarquee {
                            0% { transform: translateX(0%); }
                            100% { transform: translateX(-50%); }
                        }
                        .animate-reviews-marquee {
                            animation: reviewsMarquee 15s linear infinite;
                        }
                        @keyframes reviewsRingShine {
                            0% { stroke-dashoffset: 2680; }
                            100% { stroke-dashoffset: 0; }
                        }
                        .animate-reviews-ring-shine {
                            animation: reviewsRingShine 2.5s linear infinite;
                        }
                    `}} />

                        {/* Moving Text Ticker (Marquee) at Top Left */}
                        <div className="absolute bottom-12 left-4 z-20 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full overflow-hidden w-[180px] md:w-[240px] shadow-sm select-none">
                            <div className="flex w-max animate-reviews-marquee gap-8 text-[9px] md:text-[10px] font-black tracking-[2px] uppercase text-white/90">
                                <span>TESTIMONIALS • REVIEWS • CLIENT FEEDBACK • DRYMATO</span>
                                <span>TESTIMONIALS • REVIEWS • CLIENT FEEDBACK • DRYMATO</span>
                            </div>
                        </div>
                        {/* Inner Clickable Video Container */}
                        <div
                            ref={containerRef}
                            onClick={togglePlay}
                            className="w-full h-[95%] relative cursor-pointer overflow-hidden z-0 rounded-tr-[150px] md:rounded-tr-[300px] rounded-tl-none rounded-br-none rounded-bl-none"
                        >
                            <video
                                ref={videoRef}
                                src="/reviewBackgreound.mp4"
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/vid:scale-105"
                            />

                            {/* Dark gradient overlay on video */}
                            <div className="absolute inset-0 bg-black/30 group-hover/vid:bg-black/20 transition-colors duration-300" />
                        </div>

                        {/* Single Continuous Outer Ring SVG (Top, Right, Bottom - except Left) with Hover Shine */}
                        {borderPath && (
                            <div className="absolute top-0 left-0 w-full h-[95%] pointer-events-none z-20">
                                <svg width="100%" height="100%" className="overflow-hidden">
                                    <defs>
                                        <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#C08829" />
                                            <stop offset="100%" stopColor="#8C9A72" />
                                        </linearGradient>
                                    </defs>

                                    {/* Base Gradient Border Stroke (Unbroken) */}
                                    <path
                                        d={borderPath}
                                        fill="none"
                                        stroke="url(#ringGrad)"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                    />

                                    {/* Moving Shine / Laser Stroke on Hover */}
                                    <path
                                        d={borderPath}
                                        fill="none"
                                        stroke="#ffffff"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        className="opacity-0 group-hover/vid:opacity-100 transition-opacity duration-300 animate-reviews-ring-shine"
                                        style={{
                                            strokeDasharray: "180 2500",
                                        }}
                                    />
                                </svg>
                            </div>
                        )}

                        {/* Header Badges & Titles - Overlaying the video on the bottom-left */}
                        <div className="absolute left-6 sm:left-10 md:left-16 top-8 md:top-16 z-20 flex flex-col items-start select-none">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="h-[1.5px] w-5 bg-mustard/50" />
                                <span className="text-mustard text-[10px] font-black tracking-[3px] uppercase">
                                    TESTIMONIALS
                                </span>
                                <div className="h-[1.5px] w-5 bg-mustard/50" />
                            </div>
                            <h2 className="text-white text-2xl sm:text-3xl lg:text-[40px] font-bold leading-tight font-sans">
                                What Our Clients Say
                            </h2>
                        </div>
                    </div>

                    {/* Right Side: Forest Green Content Section - 30% Width */}
                    <div className="w-full md:w-[30%] bg-forest h-auto md:h-full flex flex-col justify-end px-6 sm:px-10 md:pl-16 md:pr-8 pb-16 md:pb-20 relative z-0">

                        {/* Navigation Buttons */}
                        <div className="flex items-center gap-4 select-none z-20 pt-8 md:pt-0">
                            {/* Prev Button */}
                            <button
                                onClick={prevReview}
                                className="w-12 h-12 rounded-full border border-white/60 flex items-center justify-center text-white hover:bg-white hover:text-forest hover:border-transparent active:scale-95 transition-all duration-300 cursor-pointer"
                                aria-label="Previous Review"
                            >
                                <svg className="w-5 h-5 stroke-current" fill="none" strokeWidth="2.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            {/* Next Button */}
                            <button
                                onClick={nextReview}
                                className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-forest hover:bg-gray-100 active:scale-95 transition-all duration-300 cursor-pointer shadow-md"
                                aria-label="Next Review"
                            >
                                <svg className="w-5 h-5 stroke-current" fill="none" strokeWidth="2.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                        {/* Left & Right Decorative tomato tree overlay (Subtle white outlines at low opacity) */}
                        <div className="absolute right-0 bottom-0 w-[200px] opacity-[0.04] pointer-events-none select-none z-0">
                            <Image src="/tomatotree.png" alt="" width={200} height={200} className="w-full h-auto object-contain" />
                        </div>
                    </div>

                    {/* Overlapping Testimonial Card - Positioned in the right green section */}
                    <div className="w-full md:absolute md:right-8 lg:right-16 md:top-1/2 md:-translate-y-1/2 z-30 flex justify-center md:justify-end my-6 md:my-0">
                        <div
                            ref={cardRef}
                            className="w-[calc(100%-32px)] sm:w-[480px] bg-surface rounded-2xl p-8 sm:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.08)] will-change-[transform,opacity]"
                        >
                            {/* Card Top: Avatar, Info, and Quote Icon */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-4">
                                    {/* Styled Circular Initials Avatar */}
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-sans font-black text-sm shadow-inner ${activeReview.avatarBg}`}>
                                        {activeReview.avatar}
                                    </div>
                                    <div>
                                        <h4 className="font-sans font-black text-forest text-base leading-tight">
                                            {activeReview.name}
                                        </h4>
                                        <span className="text-gray-400 text-xs font-semibold">
                                            {activeReview.role}
                                        </span>
                                    </div>
                                </div>

                                {/* Large Quote Mark */}
                                <span className="text-5xl font-serif text-mustard leading-none select-none">
                                    ”
                                </span>
                            </div>

                            {/* Ratings */}
                            <div className="flex items-center gap-1 mb-4 select-none">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className={`w-4 h-4 ${i < activeReview.rating ? "text-amber-500 fill-current" : "text-gray-200 fill-current"}`}
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Review text */}
                            <p className="text-gray-600 leading-relaxed font-semibold italic text-[13.5px]">
                                "{activeReview.text}"
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Wavy SVG divider at the bottom */}
            {/* <div className="w-full h-[30px] sm:h-[45px] md:h-[60px] relative -mt-[1px] z-10 select-none pointer-events-none bg-surface">
                <svg
                    viewBox="0 0 1440 60"
                    className="w-full h-full block"
                    preserveAspectRatio="none"
                    fill="#243822"
                >
                    <path d="M 0,38 C 15,38 30,10 50,10 C 75,10 95,45 120,45 C 145,45 165,18 190,18 C 215,18 235,45 260,45 C 285,45 305,18 330,18 C 355,18 375,45 400,45 C 425,45 445,18 470,18 C 495,18 515,45 540,45 C 565,45 585,18 610,18 C 635,18 655,45 680,45 C 705,45 725,18 750,18 C 775,18 795,45 820,45 C 845,45 865,18 890,18 C 915,18 935,45 960,45 C 985,45 1005,18 1030,18 C 1055,18 1075,45 1100,45 C 1125,45 1145,18 1170,18 C 1195,18 1215,45 1240,45 C 1265,45 1285,8 1310,8 C 1335,8 1355,48 1380,48 C 1400,48 1415,30 1430,30 C 1435,30 1440,35 1440,38 L 1440,0 L 0,0 Z" />
                </svg>
            </div> */}
        </section>
    );
}