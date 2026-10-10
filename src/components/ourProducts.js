// "use client";

// import { useState, useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Link from "next/link";
// import Image from "next/image";

// const PRODUCTS = [

//     {
//         id: 2,
//         name: "Dehydrated Tomatoes",
//         specialties: ["Ideal for Food Brands", "Bulk Ingredient Supply", "100% Traceable Sourcing"],
//         image: "/jaar/jaarFrontView.png",
//         hoverImage: "/dry-tomato-jaarspread.png",
//         feature: "100% Traceable Sourcing"
//     },
//     {
//         id: 3,
//         name: "Olive Oil Marinated ",
//         specialties: ["Extra Virgin Olive Oil", "Ready-to-Use for Chefs", "Gourmet Herbs & Garlic Infused"],
//         image: "/jaar/oliver-oil-smalljaar.png",
//         hoverImage: "/jaar/oiled-opened-jaarSpread.png",
//         feature: "Ready-to-Use for Chefs"
//     },
//     {
//         id: 4,
//         name: "Sunflower Oil Marinated ",
//         specialties: ["Cost-Effective Supply", "Light Sunflower Oil Base", "Perfect for Pizzas, Salads & Pastas"],
//         image: "/jaar/sunflower-oil-smalljaar.png",
//         hoverImage: "/jaar/sunflower-oil-spreadoutside.png",
//         feature: "Light Sunflower Oil Base"
//     },
//     {
//         id: 5,
//         name: "Dehydrated Tomato Powder ",
//         specialties: ["100% Pure Tomato", "Industrial & Food Manufacturer Grade", "Natural Flavor & Color Enhancer"],
//         image: "/jaar/powder-pouch-removebg.png",
//         hoverImage: "/jaar/spreading powder.png",
//         feature: "Industrial Grade"
//     },
//     {
//         id: 6,
//         name: "Custom Private Label & Recipe Blends",
//         specialties: ["Tailored Herb & Oil Recipes", "Custom Bulk Formats", "Dedicated B2B Partnership Support"],
//         image: "/jaar/sunflower-oil-smalljaar.png",
//         hoverImage: "/jaar/sunflower-oil-spreadoutside.png",
//         feature: "B2B Partnership Support"
//     }
// ];

// // Append first 3 items to the end to support seamless infinite loop transitions
// const DISPLAY_PRODUCTS = [...PRODUCTS, ...PRODUCTS.slice(0, 3)];

// export default function OurProducts() {
//     const containerRef = useRef(null);
//     const topTomatoRef = useRef(null);
//     const bottomTomatoRef = useRef(null);

//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [visibleCount, setVisibleCount] = useState(3);
//     const [isTransitioning, setIsTransitioning] = useState(true);
//     const [isPaused, setIsPaused] = useState(false);

//     // Responsive visible count tracking
//     useEffect(() => {
//         const handleResize = () => {
//             if (window.innerWidth < 768) {
//                 setVisibleCount(1);
//             } else if (window.innerWidth < 1024) {
//                 setVisibleCount(2);
//             } else {
//                 setVisibleCount(3);
//             }
//         };

//         handleResize();
//         window.addEventListener("resize", handleResize);
//         return () => window.removeEventListener("resize", handleResize);
//     }, []);

//     // Autoplay interval (shift by 1 card every 2 seconds)
//     useEffect(() => {
//         if (isPaused) return;
//         const interval = setInterval(() => {
//             setIsTransitioning(true);
//             setCurrentIndex((prev) => prev + 1);
//         }, 2000);

//         return () => clearInterval(interval);
//     }, [isPaused]);

//     // Handle infinite wrap-around seamlessly
//     useEffect(() => {
//         if (currentIndex === PRODUCTS.length) {
//             // Wait for transition duration (800ms) to complete, then snap back instantly
//             const timer = setTimeout(() => {
//                 setIsTransitioning(false);
//                 setCurrentIndex(0);
//             }, 800);
//             return () => clearTimeout(timer);
//         }
//     }, [currentIndex]);

//     useEffect(() => {
//         // Register ScrollTrigger inside useEffect to prevent issues with SSR in Next.js
//         gsap.registerPlugin(ScrollTrigger);

//         const container = containerRef.current;
//         if (!container) return;

//         const cards = container.querySelectorAll(".product-card");
//         const imageContainers = container.querySelectorAll(".product-image-container");

//         // Create the scroll-triggered timeline
//         const tl = gsap.timeline({
//             scrollTrigger: {
//                 trigger: container,
//                 start: "top 85%", // Triggers earlier when the top of the section reaches 85% of viewport height
//                 end: "bottom 15%", // Ends near the bottom
//                 toggleActions: "play reverse play reverse", // Reverses all animations when scrolling back up
//             }
//         });

//         // Set initial states to prevent FOUC (Flash of Unstyled Content)
//         if (topTomatoRef.current) {
//             gsap.set(topTomatoRef.current, { x: 100, opacity: 0 });
//         }

//         if (bottomTomatoRef.current) {
//             gsap.set(bottomTomatoRef.current, { x: -100, opacity: 0 });
//         }
//         gsap.set(cards, { opacity: 0, y: 20 });
//         gsap.set(imageContainers, { y: 40, opacity: 0 });

//         // Add animations to timeline for fast load-in
//         tl.to(topTomatoRef.current, {
//             x: 0,
//             opacity: 0.7,
//             duration: 0.4,
//             ease: "power2.out"
//         })
//             .to(bottomTomatoRef.current, {
//                 x: 0,
//                 opacity: 0.75,
//                 duration: 0.4,
//                 ease: "power2.out"
//             }, "<") // Start bottom tomato simultaneously
//             .to(cards, {
//                 opacity: 1,
//                 y: 0,
//                 duration: 0.35,
//                 stagger: 0.06,
//                 ease: "power2.out"
//             }, "-=0.2")
//             .to(imageContainers, {
//                 y: 0,
//                 opacity: 1,
//                 duration: 0.4,
//                 stagger: 0.06,
//                 ease: "power3.out"
//             }, "-=0.25");

//         // Cleanup on unmount
//         return () => {
//             if (tl.scrollTrigger) tl.scrollTrigger.kill();
//             tl.kill();
//         };
//     }, []);

//     return (
//         <section ref={containerRef} className="bg-[#ffecdd] px-4 md:px-8 py-16 flex justify-center items-center">
//             {/* SVG ClipPath Definition */}
//             <svg width="0" height="0" className="absolute pointer-events-none">
//                 <defs>
//                     <clipPath id="wavyCardClip" clipPathUnits="objectBoundingBox">
//                         <path d="M 0.015,0.015 
//                                  C 0.25,0.005 0.25,0.025 0.5,0.015 
//                                  C 0.75,0.005 0.75,0.025 0.985,0.015 
//                                  C 0.995,0.25 0.975,0.25 0.985,0.5 
//                                  C 0.995,0.75 0.975,0.75 0.985,0.985 
//                                  C 0.75,0.995 0.75,0.975 0.5,0.985 
//                                  C 0.25,0.995 0.25,0.975 0.015,0.985 
//                                  C 0.005,0.75 0.025,0.75 0.015,0.5 
//                                  C 0.005,0.25 0.025,0.25 0.015,0.015 
//                                  Z" />
//                     </clipPath>
//                 </defs>
//             </svg>

//             {/* White card container holding the whole products section with wavy clip path */}
//             <div className="w-full max-w-[1440px] filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
//                 <div
//                     style={{ clipPath: "url(#wavyCardClip)" }}
//                     className="w-full bg-white relative flex flex-col items-center justify-center gap-10 px-6 md:px-12 py-22 overflow-hidden"
//                 >

//                     {/* Background Tomato Decor - Top Right */}
//                     {/* <div ref={topTomatoRef} className="absolute top-0 right-5 w-40 h-40 md:w-52 md:h-52 pointer-events-none select-none z-0">
//                         <div className="w-full h-full animate-float-tomato-1">
//                             <Image
//                                 src="/creakTomato.png"
//                                 alt="Floating Tomato decoration"
//                                 width={208}
//                                 height={208}
//                                 className="w-full h-full object-contain"
//                             />
//                         </div>
//                     </div> */}

//                     {/* Background Tomato Decor - Bottom Left */}
//                     <div ref={bottomTomatoRef} className="absolute bottom-12 left-12 w-28 h-28 md:w-36 md:h-36 pointer-events-none select-none z-0">
//                         <div className="w-full h-full animate-float-tomato-2">
//                             <Image
//                                 src="/dryTomato.png"
//                                 alt="Floating Dry Tomato decoration"
//                                 width={144}
//                                 height={144}
//                                 className="w-full h-full object-contain"
//                             />
//                         </div>
//                     </div>

//                     {/* Section Heading */}
//                     <div className="flex flex-col items-center z-10 text-center max-w-2xl px-4">
//                         <span className="font-dancing text-[#a50808] text-[clamp(1.6rem,2.6vw,2.2rem)] font-semibold mb-1 block">
//                             B2B & Wholesale Solutions
//                         </span>
//                         <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 uppercase">
//                             Supply for HoReCa & Food Brands
//                         </h2>
//                         <div className="w-20 h-1 bg-[#a50808] mt-4 rounded-full" />
//                         <p className="mt-4 text-xs sm:text-sm md:text-base text-gray-600 font-semibold leading-relaxed">
//                             Drymato is the trusted supplier of premium sun-dried tomatoes for hotels, restaurants, catering businesses, food brands, and manufacturing industries. We offer flexible packaging, consistent quality, and customized recipe blends.
//                         </p>
//                     </div>

//                     {/* Products Carousel Container */}
//                     <div className="relative w-full overflow-hidden z-10 mt-12 px-2">
//                         {/* Carousel Track */}
//                         <div
//                             className="flex pt-32 pb-12"
//                             style={{
//                                 transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
//                                 transition: isTransitioning ? "transform 800ms cubic-bezier(0.25, 1, 0.5, 1)" : "none"
//                             }}
//                         >
//                             {DISPLAY_PRODUCTS.map((product, index) => (
//                                 <div
//                                     key={`${product.id}-${index}`}
//                                     className="shrink-0 px-3 md:px-4"
//                                     style={{
//                                         width: `${100 / visibleCount}%`
//                                     }}
//                                 >
//                                     <div
//                                         onMouseEnter={() => setIsPaused(true)}
//                                         onMouseLeave={() => setIsPaused(false)}
//                                         className="product-card relative bg-white rounded-tl-[48px] rounded-br-[48px] rounded-tr-none rounded-bl-none pt-32 pb-8 px-8 flex flex-col items-center shadow-[0_0_10px_rgba(0,0,0,0.08)] border border-gray-100 hover:shadow-[0_25px_50px_rgba(227,28,37,0.1)] hover:-translate-y-2 transition-all duration-500 group h-full opacity-0"
//                                     >
//                                         {/* Image Container (Overlapping Top) */}
//                                         <div className="product-image-container absolute -top-28 left-1/2 -translate-x-1/2 w-56 h-56 flex items-center justify-center opacity-0">
//                                             {/* Default Product Image */}
//                                             <Image
//                                                 src={product.image}
//                                                 alt={product.name}
//                                                 width={220}
//                                                 height={220}
//                                                 className="w-full h-full object-contain transform group-hover:scale-115 transition-transform duration-500"
//                                                 style={{
//                                                     filter: "drop-shadow(0 12px 20px rgba(0,0,0,0.12))"
//                                                 }}
//                                             />
//                                         </div>

//                                         {/* Product Name */}
//                                         <h3 className="font-poppins  text-lg font-semibold text-gray-900 text-center mb-4 min-h-[56px] flex items-center justify-center px-2 group-hover:text-[#a50808] transition-colors duration-300">
//                                             {product.name}
//                                         </h3>

//                                         {/* Specialties */}
//                                         <div className="flex flex-col gap-2.5 mb-8 w-full px-4">
//                                             {product.specialties.map((spec, idx) => (
//                                                 <div key={idx} className="flex items-center gap-3 text-sm text-gray-600 font-semibold justify-center">
//                                                     <svg className="w-4 h-4 text-[#a50808] shrink-0" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24">
//                                                         <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
//                                                     </svg>
//                                                     <span>{spec}</span>
//                                                 </div>
//                                             ))}
//                                         </div>

//                                         {/* Shop Now Button with rising bubble hover */}
//                                         <Link
//                                             href="/contact"
//                                             className="group/btn relative overflow-hidden bg-[#a50808] border-2 border-[#a50808] text-white w-fit px-6 py-2.5 rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none text-xs font-extrabold tracking-widest flex items-center justify-center gap-2.5 shadow-[0_6px_20px_rgba(227,28,37,0.15)] hover:shadow-[0_8px_25px_rgba(227,28,37,0.25)] active:shadow-[0_4px_12px_rgba(227,28,37,0.2)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer mt-auto z-10 self-center"
//                                         >
//                                             <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[125%] aspect-square rounded-t-[50%] bg-white translate-y-full transition-transform duration-[750ms] ease-in-out z-0 group-hover/btn:translate-y-[12%]" />

//                                             <span className="relative z-10 transition-colors duration-300 group-hover/btn:text-[#a50808]">GET BULK QUOTE</span>
//                                             <div className="relative z-10 w-5 h-5 bg-white text-[#a50808] rounded-full flex items-center justify-center shadow-sm transform group-hover/btn:translate-x-1 group-hover/btn:bg-[#a50808] group-hover/btn:text-white transition-all duration-300">
//                                                 <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="4" viewBox="0 0 24 24">
//                                                     <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
//                                                 </svg>
//                                             </div>
//                                         </Link>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>

//                         {/* Pagination/Navigation dots below the cards */}
//                         <div className="flex justify-center items-center gap-1 mt-8 z-20">
//                             {PRODUCTS.map((product, idx) => {
//                                 const activeDotIndex = currentIndex % PRODUCTS.length;
//                                 const isActive = activeDotIndex === idx;
//                                 return (
//                                     <button
//                                         key={product.id}
//                                         onClick={() => {
//                                             setIsTransitioning(true);
//                                             setCurrentIndex(idx);
//                                         }}
//                                         className="group/dot flex items-center justify-center p-2 cursor-pointer border-none bg-transparent outline-none"
//                                         aria-label={`Go to product slide ${idx + 1}`}
//                                     >
//                                         <span
//                                             className={`h-2 rounded-full transition-all duration-500 ease-out block ${isActive
//                                                 ? "bg-gradient-to-r from-[#a50808] to-[#ff5252] w-8 shadow-[0_4px_12px_rgba(227,28,37,0.4)] scale-110"
//                                                 : "bg-[#a50808]/20 group-hover/dot:bg-[#a50808]/50 w-2 group-hover/dot:scale-125"
//                                                 }`}
//                                         />
//                                     </button>
//                                 );
//                             })}
//                         </div>
//                     </div>

//                     {/* View All Button */}
//                     <div className="flex justify-center z-20">
//                         <Link
//                             href="/product"
//                             className="group/btn relative overflow-hidden bg-[#a50808] border-2 border-[#a50808] text-white w-fit px-8 py-3.5 rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none text-xs font-extrabold tracking-widest flex items-center justify-center gap-2.5 shadow-[0_6px_20px_rgba(227,28,37,0.15)] hover:shadow-[0_8px_25px_rgba(227,28,37,0.25)] active:shadow-[0_4px_12px_rgba(227,28,37,0.2)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer z-10"
//                         >
//                             <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[125%] aspect-square rounded-t-[50%] bg-white translate-y-full transition-transform duration-[750ms] ease-in-out z-0 group-hover/btn:translate-y-[12%]" />

//                             <span className="relative z-10 transition-colors duration-300 group-hover/btn:text-[#a50808]">VIEW WHOLESALE CATALOGUE</span>
//                             <div className="relative z-10 w-5 h-5 bg-white text-[#a50808] rounded-full flex items-center justify-center shadow-sm transform group-hover/btn:translate-x-1 group-hover/btn:bg-[#a50808] group-hover/btn:text-white transition-all duration-300">
//                                 <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="4" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
//                                 </svg>
//                             </div>
//                         </Link>
//                     </div>

//                 </div>
//             </div>

//             {/* Custom Animation Styles */}
//             <style>{`
//                 @keyframes spin-slow {
//                     0% { transform: rotate(0deg); }
//                     100% { transform: rotate(360deg); }
//                 }
//                 .animate-spin-slow {
//                     animation: spin-slow 15s linear infinite;
//                 }
//                 @keyframes spin-medium {
//                     0% { transform: rotate(0deg); }
//                     100% { transform: rotate(360deg); }
//                 }
//                 .group:hover .group-hover\\:animate-spin-medium {
//                     animation: spin-medium 8s linear infinite;
//                 }
//                 @keyframes floatTomato1 {
//                     0% { transform: translate(0px, 0px) rotate(0deg); }
//                     50% { transform: translate(15px, -15px) rotate(12deg); }
//                     100% { transform: translate(0px, 0px) rotate(0deg); }
//                 }
//                 .animate-float-tomato-1 {
//                     animation: floatTomato1 7s ease-in-out infinite;
//                 }
//                 @keyframes floatTomato2 {
//                     0% { transform: translate(0px, 0px) rotate(0deg); }
//                     50% { transform: translate(-15px, 15px) rotate(-15deg); }
//                     100% { transform: translate(0px, 0px) rotate(0deg); }
//                 }
//                 .animate-float-tomato-2 {
//                     animation: floatTomato2 9s ease-in-out infinite;
//                 }
//             `}</style>
//         </section>
//     );
// }



"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import { Leaf, ArrowRight } from "lucide-react";

// --- Custom Food & Culinary SVG Icons ---
const TomatoIcon = ({ className = "w-4 h-4" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2c1 2 3 3 5 2-1 3 0 5 2 6-3 0-5 2-5 5 0-3-2-5-5-5 2-1 3-3 2-6 2 1 4 0 5-2z" />
        <circle cx="12" cy="14" r="7" />
    </svg>
);

const OliveBranchIcon = ({ className = "w-4 h-4" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21a9 9 0 0 0 9-9c0-4.97-4.03-9-9-9s-9 4.03-9 9a9 9 0 0 0 9 9z" />
        <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z" />
        <path d="M12 3v4" />
    </svg>
);

const SunflowerIcon = ({ className = "w-4 h-4" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3m0 14v3M2 12h3m14 0h3m-3.05-7.05l-2.12 2.12m-9.9 9.9l-2.12 2.12m0-14.14l2.12 2.12m9.9 9.9l2.12 2.12" />
    </svg>
);

const PowderJarIcon = ({ className = "w-4 h-4" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 3h8v3H8z" />
        <path d="M6 6h12v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6z" />
        <path d="M10 11h4m-4 4h4" />
    </svg>
);

const ChefHatIcon = ({ className = "w-4 h-4" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 13.8a4.5 4.5 0 0 1 .8-8.9 5 5 0 0 1 10.4 0 4.5 4.5 0 0 1 .8 8.9V17H6v-3.2z" />
        <path d="M6 17h12v3H6z" />
    </svg>
);

const PRODUCTS = [
    {
        id: 2,
        name: "Dehydrated Tomatoes",
        feature: "100% Traceable Sourcing",
        image: "/jaar/jaarFrontView.png",
        icon: TomatoIcon
    },
    {
        id: 3,
        name: "Olive Oil Marinated",
        feature: "Ready-to-Use for Chefs",
        image: "/jaar/oliver-oil-smalljaar.png",
        icon: OliveBranchIcon
    },
    {
        id: 4,
        name: "Sunflower Oil Marinated",
        feature: "Light Sunflower Oil Base",
        image: "/jaar/sunflower-oil-smalljaar.png",
        icon: SunflowerIcon
    },
    {
        id: 5,
        name: "Dehydrated Tomato Powder",
        feature: "Industrial Grade",
        image: "/jaar/powder-pouch-removebg.png",
        icon: PowderJarIcon
    },
    {
        id: 6,
        name: "Custom Private Label & Recipe Blends",
        feature: "B2B Partnership Support",
        image: "/jaar/sunflower-oil-smalljaar.png",
        icon: ChefHatIcon
    }
];

const DISPLAY_PRODUCTS = [...PRODUCTS, ...PRODUCTS.slice(0, 5)];

export default function OurProducts() {
    const sectionRef = useRef(null);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(5);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setVisibleCount(1);
            } else if (window.innerWidth < 860) {
                setVisibleCount(2);
            } else if (window.innerWidth < 1100) {
                setVisibleCount(3);
            } else if (window.innerWidth < 1280) {
                setVisibleCount(4);
            } else {
                setVisibleCount(5);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            setIsTransitioning(true);
            setCurrentIndex((prev) => prev + 1);
        }, 2500);

        return () => clearInterval(interval);
    }, [isPaused]);

    useEffect(() => {
        if (currentIndex === PRODUCTS.length) {
            const timer = setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(0);
            }, 800);
            return () => clearTimeout(timer);
        }
    }, [currentIndex]);

    // Safe GSAP ScrollTrigger context on raw DOM target
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const el = sectionRef.current;
        if (!el) return;

        const ctx = gsap.context(() => {
            const cards = el.querySelectorAll(".product-card");
            const imageContainers = el.querySelectorAll(".product-image-container");
            const introEls = el.querySelectorAll(".intro-animate");

            if (!cards.length) return;

            gsap.set(introEls, { opacity: 0, y: 20 });
            gsap.set(cards, { opacity: 0, y: 20 });
            gsap.set(imageContainers, { y: 25, opacity: 0 });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    end: "bottom 15%",
                    toggleActions: "play reverse play reverse",
                }
            });

            tl.to(introEls, {
                opacity: 1,
                y: 0,
                duration: 0.4,
                stagger: 0.08,
                ease: "power2.out"
            })
            .to(cards, {
                opacity: 1,
                y: 0,
                duration: 0.35,
                stagger: 0.06,
                ease: "power2.out"
            }, "-=0.2")
            .to(imageContainers, {
                y: 0,
                opacity: 1,
                duration: 0.4,
                stagger: 0.06,
                ease: "power3.out"
            }, "-=0.25");
        }, el);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative bg-white px-4 md:px-8 lg:px-10 py-12 md:py-6 overflow-hidden">

            <div className="relative max-w-[1380px] mx-auto z-10">

                {/* ── INTRO PANEL ── */}
                <div className="intro-animate relative rounded-[40px] bg-forest px-6 py-8 md:px-10 md:py-8 lg:px-14 lg:py-8 overflow-hidden lg:max-h-[50vh]">

                    {/* Single Leaf Accent */}
                    <div className="absolute -top-8 -right-10 pointer-events-none select-none z-10 p-2 md:p-4">
                        <Image
                            src="/lefttree.png"
                            alt="Leaf Accent"
                            width={90}
                            height={90}
                            className="w-20 h-20 md:w-75 md:h-75 object-contain rotate-[175deg] opacity-90 drop-shadow-md"
                        />
                    </div>

                    <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-10 h-full">

                        {/* LEFT Image */}
                        <div className="w-full lg:w-[38%] flex items-end justify-start shrink-0 -translate-x-4 lg:-translate-x-6 translate-y-4 lg:translate-y-8">
                            <Image
                                src="/images/our-product.png"
                                alt="Drymato dehydrated products"
                                width={680}
                                height={680}
                                className="w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[720px] h-auto max-h-[28vh] lg:max-h-[68vh] object-contain object-left-bottom"
                                style={{ filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.3))" }}
                            />
                        </div>

                        {/* RIGHT Header details */}
                        <div className="w-full lg:w-[58%] flex flex-col items-center lg:items-start text-center lg:text-left py-2">
                            <div className="flex items-center gap-2 mb-3">
                                <Leaf className="w-4 h-4 text-sage" strokeWidth={2} />
                                <span className="text-xs font-bold tracking-[0.2em] uppercase text-sage">
                                    Our Products
                                </span>
                            </div>

                            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-[1.18] tracking-tight">
                                Premium Supply for HoReCa
                                <br />
                                <span className="italic text-mustard">&amp; Global Food Brands</span>
                            </h2>

                            <p className="mt-4 text-sm md:text-base text-white/75 leading-relaxed max-w-2xl font-sans">
                                Drymato delivers farm-fresh, ultra-consistent dehydrated and marinated vegetables solutions crafted for commercial kitchens, food manufacturers, and enterprise distributors worldwide.
                            </p>

                            <Link
                                href="/product"
                                className="group/btn mt-6 inline-flex items-center gap-2.5 bg-white hover:bg-mustard text-forest px-6 py-2.5 rounded-full text-xs font-extrabold tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-lg"
                            >
                                View Wholesale Catalogue
                                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" strokeWidth={2.5} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Section Divider */}
                <div className="intro-animate flex items-center gap-3 mt-10 mb-6">
                    <span className="text-xs font-bold tracking-[0.2em] uppercase text-forest">
                        Explore Our Range
                    </span>
                    <span className="flex-1 h-px bg-sage/30" />
                </div>

                {/* Products Carousel */}
                <div className="relative w-full overflow-hidden px-1">
                    <div
                        className="flex overflow-visible py-4"
                        style={{
                            transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
                            transition: isTransitioning ? "transform 750ms cubic-bezier(0.25, 1, 0.5, 1)" : "none"
                        }}
                    >
                        {DISPLAY_PRODUCTS.map((product, index) => {
                            const IconComponent = product.icon;
                            return (
                                <div
                                    key={`${product.id}-${index}`}
                                    className="shrink-0 px-2"
                                    style={{ width: `${100 / visibleCount}%` }}
                                >
                                    <div
                                        onMouseEnter={() => setIsPaused(true)}
                                        onMouseLeave={() => setIsPaused(false)}
                                        className="product-card group relative bg-surface rounded-[20px] overflow-hidden shadow-[0_4px_18px_rgba(36,56,34,0.05)] border border-sage/30 hover:border-forest/40 hover:shadow-[0_16px_36px_rgba(36,56,34,0.12)] hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col opacity-0"
                                    >
                                        {/* Darker Sage Tinted Background */}
                                        <div className="product-image-container relative w-full aspect-[4/3.8] bg-[#d9dcd0] flex items-center justify-center p-5 overflow-hidden opacity-0 transition-colors duration-300 group-hover:bg-[#d0d4c5]">
                                            
                                            {/* Top-Right Food Icon Badge */}
                                            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md border border-forest/15 shadow-sm flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-110 group-hover:bg-forest group-hover:text-white">
                                                <IconComponent className="w-4 h-4 text-forest group-hover:text-white transition-colors duration-300" />
                                            </div>

                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                width={180}
                                                height={180}
                                                className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500 ease-out"
                                                style={{ filter: "drop-shadow(0 10px 16px rgba(36,56,34,0.18))" }}
                                            />
                                        </div>

                                        {/* Clean Card Body (No Arrow CTA, No Pill shape) */}
                                        <div className="flex flex-col flex-1 pt-5 pb-6 px-4 text-center items-center bg-surface">
                                            <h3 className="font-serif text-base font-semibold text-foreground leading-snug line-clamp-2 min-h-[2.6rem] flex items-center justify-center tracking-tight">
                                                {product.name.trim()}
                                            </h3>

                                            <p className="mt-2 text-xs text-forest/70 font-sans font-medium tracking-wide line-clamp-1">
                                                {product.feature}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex justify-center items-center gap-1 mt-4 z-20">
                        {PRODUCTS.map((product, idx) => {
                            const activeDotIndex = currentIndex % PRODUCTS.length;
                            const isActive = activeDotIndex === idx;
                            return (
                                <button
                                    key={product.id}
                                    onClick={() => {
                                        setIsTransitioning(true);
                                        setCurrentIndex(idx);
                                    }}
                                    className="group/dot flex items-center justify-center p-1.5 cursor-pointer border-none bg-transparent outline-none"
                                    aria-label={`Go to product slide ${idx + 1}`}
                                >
                                    <span
                                        className={`h-1.5 rounded-full transition-all duration-500 ease-out block ${isActive
                                            ? "bg-forest w-7"
                                            : "bg-forest/20 group-hover/dot:bg-forest/40 w-1.5 group-hover/dot:scale-125"
                                        }`}
                                    />
                                </button>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}