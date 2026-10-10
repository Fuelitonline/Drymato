// "use client";

// import { useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { HeartHandshake, Sun, Cherry, Sprout } from "lucide-react";
// import {
//     FaHeart,
//     FaSeedling,
//     FaTrashAlt,
//     FaCompressArrowsAlt,
//     FaBoxes,
//     FaCheckCircle,
//     FaClock,

//     FaPhone,
//     FaEnvelope,
//     FaGlobe,
//     FaInstagram,
//     FaArrowRight,
//     FaLeaf,
//     FaCheck,
//     FaStore,
//     FaShieldAlt,
//     FaUtensils,
//     FaBan,
//     FaSearch,
//     FaHandPaper,
//     FaSun,
//     FaTimes
// } from "react-icons/fa";
// import { GiTomato } from "react-icons/gi";


// export default function WhyChooseUsClient() {
//     // Scroll Observer for Entrance Animations (Dynamic Staggering for both Downward & Upward scrolling)
//     useEffect(() => {
//         const revealObserver = new IntersectionObserver((entries) => {
//             const intersectingEntries = [];

//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     intersectingEntries.push(entry.target);
//                 } else {
//                     entry.target.classList.remove("is-revealed");
//                     // Reset dynamic delay on scroll out so it staggers freshly on re-entry
//                     entry.target.style.transitionDelay = "";
//                 }
//             });

//             if (intersectingEntries.length > 0) {
//                 // Sort intersecting elements by visual page order (top-to-bottom, left-to-right)
//                 // so they always reveal one by one in reading order, regardless of scroll direction
//                 intersectingEntries.sort((a, b) => {
//                     const rectA = a.getBoundingClientRect();
//                     const rectB = b.getBoundingClientRect();
//                     if (Math.abs(rectA.top - rectB.top) < 15) {
//                         return rectA.left - rectB.left;
//                     }
//                     return rectA.top - rectB.top;
//                 });

//                 // Apply staggered delays to the sorted active entries
//                 intersectingEntries.forEach((el, index) => {
//                     const isB2B = el.classList.contains("white-glass-card");
//                     const delayStep = isB2B ? 120 : 150;
//                     el.style.transitionDelay = `${index * delayStep}ms`;
//                     el.classList.add("is-revealed");
//                 });
//             }
//         }, {
//             root: null,
//             // Symmetrical top/bottom margins for consistent triggering scrolling up or down
//             rootMargin: "-8% 0px -8% 0px",
//             threshold: 0.05
//         });

//         const animatedElements = document.querySelectorAll(
//             ".reveal-fade-up, .reveal-fade-left, .reveal-fade-right, .editorial-card, .white-glass-card"
//         );
//         animatedElements.forEach((el) => revealObserver.observe(el));

//         return () => {
//             animatedElements.forEach((el) => revealObserver.unobserve(el));
//         };
//     }, []);

//     const b2bBenefits = [
//         {
//             title: "40% Raw Material Savings",
//             desc: "More yield from less. No trimming, no spoilage, and zero daily wastage in kitchen operations.",
//             icon: FaTrashAlt,
//             glowColor: "rgba(16,185,129,0.4)",
//             iconColor: "text-emerald-400"
//         },
//         {
//             title: "Super Concentrated Flavor",
//             desc: "Sun-cured tomatoes are packed with natural glutamates. A small portion delivers intense taste, lowering plate costs.",
//             icon: FaCompressArrowsAlt,
//             glowColor: "rgba(165,8,8,0.4)",
//             iconColor: "text-[#a50808]"
//         },
//         {
//             title: "Smart Inventory Controls",
//             desc: "Long, stable shelf life at room temperature. Optimize shelf space and eliminate refrigeration storage costs.",
//             icon: FaBoxes,
//             glowColor: "rgba(249,115,22,0.4)",
//             iconColor: "text-orange-400"
//         },
//         {
//             title: "Guaranteed Recipe Consistency",
//             desc: "Ensure absolute consistency on your menu. Deliver the same signature taste profile across all shifts and locations.",
//             icon: FaCheckCircle,
//             glowColor: "rgba(20,184,166,0.4)",
//             iconColor: "text-teal-400"
//         },
//         {
//             title: "Rapid Kitchen Speed",
//             desc: "Pre-prepared and ready to serve. Cuts down labor hours spent on slicing, sorting, and peeling fresh tomatoes.",
//             icon: FaClock,
//             glowColor: "rgba(245,158,11,0.4)",
//             iconColor: "text-amber-400"
//         }
//     ];

//     const kitchenBenefits = [
//         {
//             title: "Naturally Dehydrated",
//             desc: "Cured slowly in clean, state-of-the-art sun tunnels. No forced oven drying or artificial shortcuts.",
//             accent: "border-b-emerald-500",
//             iconBg: "bg-emerald-50 text-emerald-600",
//             hoverBg: "hover:bg-emerald-50/10",
//             icon: FaSeedling
//         },
//         {
//             title: "100% Preservative Free",
//             desc: "Free from artificial colors, chemical sulfites, or synthetic flavor enhancers. Pure sun-cured goodness.",
//             accent: "border-b-red-500",
//             iconBg: "bg-red-50 text-[#a50808]",
//             hoverBg: "hover:bg-red-50/10",
//             icon: FaLeaf
//         },
//         {
//             title: "Extended Shelf Stability",
//             desc: "Keeps perfectly in your pantry for months. Ready to elevate any quick lunch or gourmet dinner at a moment's notice.",
//             accent: "border-b-orange-500",
//             iconBg: "bg-orange-50 text-orange-600",
//             hoverBg: "hover:bg-orange-50/10",
//             icon: FaClock
//         },
//         {
//             title: "Smart Waste Prevention",
//             desc: "No more throwing away half-rotten fresh tomatoes. Spoon out exactly what you need and store the rest.",
//             accent: "border-b-teal-500",
//             iconBg: "bg-teal-50 text-teal-600",
//             hoverBg: "hover:bg-teal-50/10",
//             icon: FaTrashAlt
//         },
//         {
//             title: "Convenient & Prep Free",
//             desc: "Pre-washed, pre-sorted, and pre-cut. Skip the mess and hassle of chopping, pureeing, or boiling.",
//             accent: "border-b-amber-500",
//             iconBg: "bg-amber-50 text-amber-600",
//             hoverBg: "hover:bg-amber-50/10",
//             icon: FaUtensils
//         },
//         {
//             title: "Intense Flavor Density",
//             desc: "The dehydration process locks in natural sugars, vitamins, and minerals, isolating the tomato's deep flavor notes.",
//             accent: "border-b-rose-500",
//             iconBg: "bg-rose-50 text-rose-600",
//             hoverBg: "hover:bg-rose-50/10",
//             icon: FaHeart
//         }
//     ];

//     const processSteps = [
//         {
//             title: "Farm Selection",
//             desc: "We source from trusted organic farms that follow natural and sustainable farming practices.",
//             image: "/process_farm.png",
//             icon: FaSeedling
//         },
//         {
//             title: "Handpicked Produce",
//             desc: "Only the ripest and freshest tomatoes are handpicked with care to ensure the best quality.",
//             image: "/process_handpicked.png",
//             icon: FaHandPaper
//         },
//         {
//             title: "Slow Dehydration",
//             desc: "Tomatoes are slow dried under natural sunlight to lock in nutrients and intensify flavor.",
//             image: "/process_sundrying.png",
//             icon: FaSun
//         },
//         {
//             title: "Quality Check",
//             desc: "Every batch goes through strict quality checks to ensure purity, taste and consistency.",
//             image: "/process_quality.png",
//             icon: FaSearch
//         },
//         {
//             title: "Hygienic Pack",
//             desc: "Packed in food-grade glass jars in a hygienic environment to preserve freshness and flavor naturally.",
//             image: "/jaar/jaarFrontView.png",
//             icon: FaBoxes
//         }
//     ];

//     const comparisonPoints = [
//         {
//             feature: "Flavor Density",
//             drymato: "Ultra-concentrated, rich natural umami with zero added moisture.",
//             fresh: "High water content (94%), diluted taste, requires hours of simmering.",
//             icon: GiTomato
//         },
//         {
//             feature: "Prep Waste",
//             drymato: "0% waste. Pre-washed, pre-sorted, and 100% usable right out of the jar.",
//             fresh: "Up to 40% waste from stems, seeds, skin trimmings, and daily spoilage.",
//             icon: FaTrashAlt
//         },
//         {
//             feature: "Shelf Life",
//             drymato: "Stable at room temperature for months. No cold storage required.",
//             fresh: "Highly perishable. Spoils in days and requires continuous refrigeration.",
//             icon: FaClock
//         },
//         {
//             feature: "Consistency",
//             drymato: "Uniform taste and texture profile in every batch, all year round.",
//             fresh: "Highly variable sugar and water levels depending on harvest season.",
//             icon: FaCheckCircle
//         },
//         // {
//         //     feature: "Prep Labor",
//         //     drymato: "Instant. Zero chopping, sorting, or boiling needed, saving kitchen hours.",
//         //     fresh: "Labor-intensive. Demands continuous washing, skinning, and slicing.",
//         //     icon: FaUtensils
//         // }
//     ];

//     return (
//         <main className="flex-1 bg-white min-h-screen relative overflow-hidden">
//             {/* Fixed Parallax Background Image (Sized strictly to the hero height, stays fixed on viewport) */}
//             <div className="fixed top-0 left-0 w-full h-[80vh] z-0 pointer-events-none">
//                 <Image
//                     src="/tomatoField1.jpeg"
//                     alt="Drymato Tomato Field Background"
//                     fill
//                     priority
//                     className="object-cover object-[center_35%]"
//                 />
//                 {/* Dark overlay for rich contrast */}
//                 <div className="absolute inset-0 bg-black/65" />
//             </div>

//             {/* Hero Text Content (scrolls naturally) */}
//             <section className="relative text-white w-full h-[calc(80vh-180px)] min-h-[280px] flex items-center justify-center z-10 animate-fade-in-up">
//                 <div className="max-w-4xl mx-auto px-6 text-center animate-fade-in-up">
//                     <h1 id="why-choose-us-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5 font-poppins leading-tight">
//                         Why Choose Us
//                     </h1>
//                     <p className="text-gray-300 text-sm sm:text-base font-semibold leading-relaxed max-w-2xl mx-auto font-poppins">
//                         Discover the premium standard of Drymato. From farm-fresh harvesting to kitchen-ready convenience, learn why chefs and culinary professionals choose our sun-cured tomatoes.
//                     </p>
//                 </div>
//             </section>

//             {/* Main Content Area (covers the fixed image on scroll) */}
//             <div className="relative z-20 bg-[#faf6f0]">
//                 {/* <div className="absolute left-0 right-0 -top-10 h-10 overflow-hidden pointer-events-none z-30">
//                     <svg viewBox="0 0 1440 40" className="w-full h-full block" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
//                         <path
//                             d="M0,20 Q45,38 90,20 Q135,2 180,20 Q225,38 270,20 Q315,2 360,20 Q405,38 450,20 Q495,2 540,20 Q585,38 630,20 Q675,2 720,20 Q765,38 810,20 Q855,2 900,20 Q945,38 990,20 Q1035,2 1080,20 Q1125,38 1170,20 Q1215,2 1260,20 Q1305,38 1350,20 Q1395,2 1440,20 L1440,40 L0,40 Z"
//                             fill="#faf6f0"
//                         />
//                     </svg>
//                 </div> */}
//                 <svg className="absolute w-0 h-0" aria-hidden="true" focusable="false">
//                     <defs>
//                         <clipPath id="chefCardClip" clipPathUnits="objectBoundingBox">
//                             <path d="M 0,0.35 C 0,0.1 0.15,0 0.5,0 C 0.85,0 1,0.1 1,0.35 L 1,0.60 C 1,0.78 0.75,0.96 0.5,0.96 C 0.25,0.96 0,0.78 0,0.60 Z" />
//                         </clipPath>
//                     </defs>
//                 </svg>

//                 {/* Scroll Reveal Styles Injected Locally */}
//                 <style dangerouslySetInnerHTML={{
//                     __html: `
//                 .reveal-fade-up {
//                     opacity: 0;
//                     transform: translateY(40px);
//                     transition: opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
//                 }
//                 .reveal-fade-left {
//                     opacity: 0;
//                     transform: translateX(-80px);
//                     transition: opacity 1.4s cubic-bezier(0.16, 1, 0.3, 1), transform 1.4s cubic-bezier(0.16, 1, 0.3, 1);
//                 }
//                 .reveal-fade-right {
//                     opacity: 0;
//                     transform: translateX(80px);
//                     transition: opacity 1.4s cubic-bezier(0.16, 1, 0.3, 1), transform 1.4s cubic-bezier(0.16, 1, 0.3, 1);
//                 }
//                 .white-glass-card {
//                     opacity: 0;
//                     transform: translateY(20px);
//                     border-radius: 2.5rem 0.75rem 2.5rem 0.75rem;
//                     transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.4s, border-color 0.4s, box-shadow 0.4s, border-radius 0.5s cubic-bezier(0.16, 1, 0.3, 1);
//                 }
//                 .editorial-card {
//                     opacity: 0;
//                     transform: translateY(30px);
//                     transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.6s cubic-bezier(0.16, 1, 0.3, 1);
//                 }
//                 .b2c-benefit-card {
//                     border-radius: 0.75rem 2.5rem 0.75rem 2.5rem;
//                     transition: border-radius 0.5s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.4s, border-color 0.4s, box-shadow 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
//                 }
//                 .reveal-fade-up.is-revealed,
//                 .reveal-fade-left.is-revealed,
//                 .reveal-fade-right.is-revealed {
//                     opacity: 1;
//                     transform: none !important;
//                 }
//                 .white-glass-card.is-revealed {
//                     opacity: 1;
//                     transform: translateY(0) !important;
//                 }
//                 .white-glass-card.is-revealed:hover {
//                     transform: translateY(-8px) !important;
//                     border-radius: 1.25rem !important;
//                 }
//                 .editorial-card.is-revealed {
//                     opacity: 1;
//                     transform: translateY(0) !important;
//                 }
//                 .editorial-card.is-revealed:hover {
//                     transform: translateY(-12px) !important;
//                     box-shadow: 0 20px 45px rgba(0, 0, 0, 0.08) !important;
//                 }
//                 .comparison-card {
//                     border: 1px solid rgba(251, 146, 60, 0.15) !important;
//                     box-shadow: 0 15px 40px rgba(194, 65, 12, 0.015), 0 1px 3px rgba(0, 0, 0, 0.01) !important;
//                     border-radius: 2.5rem !important;
//                     transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.5s cubic-bezier(0.16, 1, 0.3, 1), border-radius 0.5s cubic-bezier(0.16, 1, 0.3, 1) !important;
//                 }
//                 .comparison-card.is-revealed:hover {
//                     transform: translateY(-8px) !important;
//                     box-shadow: 0 25px 60px rgba(165, 8, 8, 0.06) !important;
//                     border-color: rgba(165, 8, 8, 0.25) !important;
//                     border-radius: 2rem !important;
//                 }
//                 .b2c-benefit-card:hover {
//                     border-radius: 1.25rem !important;
//                 }
//                 .image-zoom {
//                     transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) !important;
//                 }
//                 .zoom-wrapper:hover .image-zoom { 
//                     transform: scale(1.06) !important;
//                 }
//                 @keyframes continual-shine {
//                     0% {
//                         transform: translateX(-150%) skewX(-15deg);
//                     }
//                     50% {
//                         transform: translateX(150%) skewX(-15deg);
//                     }
//                     100% {
//                         transform: translateX(150%) skewX(-15deg);
//                     }
//                 }
//                 .animate-continual-shine {
//                     animation: continual-shine 4.5s infinite ease-in-out;
//                 }
//             `}} />

//                 {/* SECTION 1: HERO HEADER (Magazine Editorial Style) */}
//                 <section className="relative w-full pt-15 pb-28 bg-gradient-to-br from-[#faf6f0] to-[#f5eee6] ">
//                     <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
//                         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

//                             {/* Left Column: Text blocks and quote */}
//                             <div className="lg:col-span-7 space-y-8 text-left animate-fade-in-up">
//                                 <span className="text-[#a50808] font-black tracking-[0.25em] text-xs uppercase bg-[#a50808]/5 border border-[#a50808]/15 px-4 py-2 rounded-full inline-flex items-center gap-2 shadow-sm w-max">
//                                     <FaLeaf className="w-3 h-3 text-[#a50808]" /> PREMIUM QUALITY
//                                 </span>

//                                 <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-poppins text-gray-900 leading-tight">
//                                     Pure Sun-Cured <br className="hidden sm:inline" />
//                                     <span className="text-[#a50808]">Culinary Excellence</span>
//                                 </h1>

//                                 <p className="text-gray-600 text-base sm:text-lg font-semibold leading-relaxed max-w-xl">
//                                     We help modern kitchens cook faster with zero wastage. Drymato concentrates the rich profile of hand-harvested vine tomatoes, delivering consistent restaurant-grade flavor in seconds.
//                                 </p>

//                                 {/* Editorial quote board */}
//                                 <div className="border-l-4 border-[#a50808] pl-6 py-1 max-w-lg bg-orange-50/30 pr-4 rounded-r-xl">
//                                     <p className="italic text-gray-500 font-medium text-sm sm:text-base leading-relaxed">
//                                         "Traditional sun-drying isn't a shortcut; it's a process of absolute concentration. We take away the moisture, leaving only the pure, intense soul of the tomato."
//                                     </p>
//                                 </div>
//                             </div>

//                             {/* Right Column: Premium Leaf-Shaped Hero Image */}
//                             <div className="lg:col-span-5 relative flex items-center justify-end h-[350px] sm:h-[450px] lg:h-[480px] w-full reveal-fade-right">
//                                 {/* Decorative background shadow rings */}
//                                 <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-orange-200/20 z-0 animate-pulse" />
//                                 <div className="absolute w-56 h-56 sm:w-72 sm:h-72 rounded-full border border-orange-200/40 z-0" />

//                                 <div className="zoom-wrapper group relative w-full lg:left-[-30px] h-[90%] lg:h-[105%] rounded-tl-[8rem] lg:rounded-tl-[12rem] rounded-tr-[6rem] lg:rounded-tr-[10rem] rounded-br-[6rem] lg:rounded-br-[10rem] rounded-bl-none overflow-hidden shadow-[0_25px_50px_rgba(0,0,0,0.12)] z-10">
//                                     <Image
//                                         src="/spread_tomato.png"
//                                         alt="Drymato gourmet sun-cured tomato spread"
//                                         fill
//                                         className="object-cover image-zoom"
//                                     />
//                                     {/* Continuous revolving shine effect */}
//                                     <div className="absolute inset-0 w-[150%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-15 animate-continual-shine" />

//                                     {/* Red outline overlay on hover */}
//                                     <div className="absolute inset-0 border-[4px] border-[#a50808] opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 z-20 rounded-tl-[8rem] lg:rounded-tl-[12rem] rounded-tr-[6rem] lg:rounded-tr-[10rem] rounded-br-[6rem] lg:rounded-br-[10rem] rounded-bl-none" />
//                                 </div>

//                                 {/* Small organic float sticker */}
//                                 <div className="absolute top-4 left-4 lg:left-[-20px] w-16 h-16 opacity-30 pointer-events-none z-20 animate-float-slow">
//                                     <Image src="/tomatosticker.png" alt="organic asset sticker" width={60} height={60} className="object-contain" />
//                                 </div>
//                             </div>

//                         </div>
//                     </div>
//                 </section>

//                 {/* SECTION 2: B2B COMMERCIAL ADVANTAGES (Sleek Crimson Theme) */}
//                 <section className="relative w-full pt-36 pb-36 bg-gradient-to-b from-[#a50808] via-[#be1212] to-[#8b0606] overflow-hidden z-10">
//                     {/* Top Wave Divider */}
//                     <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-20">
//                         <svg className="relative block w-full h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
//                             <path d="M0,0 C150,90 350,20 500,60 C650,100 850,30 1000,70 C1100,90 1150,100 1200,80 L1200,0 L0,0 Z" fill="#f5eee6" />
//                         </svg>
//                     </div>

//                     {/* Backdrop ambient highlights */}
//                     <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-white/5 rounded-full filter blur-[150px] pointer-events-none" />
//                     <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-amber-400/5 rounded-full filter blur-[130px] pointer-events-none" />
//                     {/* Mesh background grid overlay */}
//                     <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

//                     <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
//                         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

//                             {/* Left Column: B2B Editorial Heading */}
//                             <div className="lg:col-span-5 space-y-6 text-left reveal-fade-left">
//                                 <span className="text-white font-black tracking-[0.2em] text-[10px] uppercase bg-white/10 border border-white/20 px-4 py-2 rounded-full inline-flex items-center gap-2.5 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.1)] w-max">
//                                     <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_10px_#f59e0b]" />
//                                     Food Service & Cafes
//                                 </span>
//                                 <h2 className="text-4xl sm:text-5xl font-poppins font-bold text-white tracking-tight leading-[1.15]">
//                                     Benefits for <br />
//                                     <span className="font-poppins font-extrabold bg-gradient-to-r from-amber-200 via-yellow-300 to-orange-300 bg-clip-text text-transparent drop-shadow-sm">
//                                         Commercial Kitchens
//                                     </span>
//                                 </h2>
//                                 <p className="text-red-100/90 text-base font-medium leading-relaxed max-w-md font-poppins">
//                                     Cafes, restaurants, and catering operations rely on high kitchen efficiency and tight cost control. Drymato offers direct bottom-line advantages.
//                                 </p>

//                                 {/* Decorative badge box */}
//                                 <div className="pt-8 border-t border-white/15 hidden lg:block">
//                                     <div className="flex items-center gap-5 p-5 rounded-tr-[2.5rem] rounded-bl-[2.5rem] rounded-tl-xl rounded-br-xl bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/15 backdrop-blur-md shadow-lg">
//                                         <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-300 to-amber-500 text-red-950 flex items-center justify-center shadow-md shrink-0">
//                                             <FaStore className="w-5 h-5" />
//                                         </div>
//                                         <div>
//                                             <p className="text-[10px] text-amber-200 font-black tracking-widest uppercase">RELIABILITY IN VOLUME</p>
//                                             <p className="text-base text-white font-extrabold font-poppins">Consistent B2B Batches</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Right Column: Glassmorphic Cards List */}
//                             <div className="lg:col-span-7 space-y-5 reveal-fade-right">
//                                 {b2bBenefits.map((benefit, index) => {
//                                     const IconComponent = benefit.icon;
//                                     return (
//                                         <div
//                                             key={index}
//                                             className="white-glass-card group relative flex items-start gap-6 p-7 bg-white/80 backdrop-blur-md border border-white/45 hover:bg-white hover:border-[#a50808]/30 shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] overflow-hidden transition-all duration-300"
//                                         >
//                                             {/* Large elegant background number */}
//                                             <span className="absolute right-6 bottom-2 text-7xl font-black font-poppins text-gray-900/[0.03] group-hover:text-gray-900/[0.08] transition-all duration-500 pointer-events-none select-none">
//                                                 0{index + 1}
//                                             </span>

//                                             {/* Status Glow Dot (highly refined glow) */}
//                                             <div
//                                                 className="absolute right-6 top-6 w-2 h-2 rounded-full bg-gray-300 group-hover:bg-[#a50808] transition-all duration-300 shadow-[0_0_8px_rgba(165,8,8,0.2)]"
//                                             />

//                                             <div className="w-14 h-14 rounded-2xl bg-[#a50808]/10 border border-[#a50808]/5 flex items-center justify-center shrink-0 text-[#a50808] group-hover:bg-[#a50808] group-hover:text-white group-hover:scale-110 shadow-sm transition-all duration-500">
//                                                 <IconComponent className="w-6 h-6" />
//                                             </div>

//                                             <div className="space-y-1.5 text-left pr-8 font-poppins">
//                                                 <h3 className="text-xl font-bold text-gray-900 font-poppins tracking-wide leading-tight group-hover:text-[#a50808] transition-colors duration-300">
//                                                     {benefit.title}
//                                                 </h3>
//                                                 <p className="text-gray-600 group-hover:text-gray-700 text-sm font-semibold leading-relaxed transition-colors duration-300">
//                                                     {benefit.desc}
//                                                 </p>
//                                             </div>
//                                         </div>
//                                     );
//                                 })}
//                             </div>

//                         </div>
//                     </div>

//                     {/* Bottom Wave Divider */}
//                     <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
//                         <svg className="relative block w-full h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
//                             <path d="M0,120 C150,30 350,100 500,60 C650,20 850,90 1000,50 C1100,30 1150,20 1200,40 L1200,120 L0,120 Z" fill="#ffffff" />
//                         </svg>
//                     </div>
//                 </section>

//                 {/* SECTION 3: B2C KITCHEN ADVANTAGES (Editorial Grid Layout) */}
//                 <section className="relative w-full py-24 bg-white z-10 border-b border-orange-100/10">
//                     <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

//                         {/* Centered Heading */}
//                         <div className="text-center mb-20 max-w-2xl mx-auto space-y-4 reveal-fade-up">
//                             <span className="text-[#a50808] font-extrabold tracking-widest text-xs uppercase bg-red-50 px-3.5 py-1.5 rounded-full inline-block">
//                                 Product Profile
//                             </span>
//                             <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-poppins tracking-tight">
//                                 The Pure Drymato Standard
//                             </h2>
//                             <p className="text-gray-500 font-semibold text-sm sm:text-base leading-relaxed font-poppins">
//                                 No artificial compromises. We align gourmet culinary standards with shelf stability and absolute convenience.
//                             </p>
//                         </div>

//                         {/* Editorial Cards Grid (Rectangular cards with bottom accent lines) */}
//                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                             {kitchenBenefits.map((item, index) => {
//                                 const IconComponent = item.icon;
//                                 return (
//                                     <div
//                                         key={index}
//                                         className={`editorial-card b2c-benefit-card bg-gradient-to-br from-[#faf8f5] to-[#fffcf9] hover:from-white hover:to-[#fffdfa] p-9 border border-orange-100/30 hover:border-orange-200/60 shadow-[0_10px_35px_rgba(0,0,0,0.06)] group flex flex-col justify-between border-b-4 ${item.accent} relative overflow-hidden`}
//                                     >
//                                         {/* Large background number watermark */}
//                                         <span className="absolute right-6 bottom-2 text-7xl font-black font-poppins text-gray-100/70 group-hover:text-[#a50808]/5 transition-all duration-500 pointer-events-none select-none">
//                                             0{index + 1}
//                                         </span>

//                                         <div className="space-y-5 text-left relative z-10 font-poppins">
//                                             <div className="flex justify-between items-center">
//                                                 <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border border-orange-100/20 shadow-sm ${item.iconBg} group-hover:rotate-6 transition-transform duration-300`}>
//                                                     <IconComponent className="w-5 h-5" />
//                                                 </div>
//                                                 <span className="text-xs font-black text-gray-400 font-mono tracking-widest">[ 0{index + 1} ]</span>
//                                             </div>

//                                             <div className="space-y-2 pr-4">
//                                                 <h3 className="text-xl font-bold text-gray-900 font-poppins leading-tight group-hover:text-[#a50808] transition-colors duration-300">
//                                                     {item.title}
//                                                 </h3>
//                                                 <p className="text-gray-600 text-sm font-semibold leading-relaxed">
//                                                     {item.desc}
//                                                 </p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 );
//                             })}
//                         </div>

//                     </div>
//                 </section>

//                 {/* SECTION 3.5: OUR PROCESS (Video Background with Wavy Borders) */}
//                 <section className="relative w-full pt-32 pb-32 z-10 overflow-hidden">
//                     {/* Top Wave Divider (White to match Section 3 above) */}
//                     <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-10">
//                         <svg className="relative block w-full h-[40px] md:h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M0,0 C150,90 350,20 500,60 C650,100 850,30 1000,70 C1100,90 1150,100 1200,80 L1200,0 L0,0 Z" fill="#ffffff" />
//                         </svg>
//                     </div>

//                     {/* Background Video */}
//                     <video
//                         src="/process-vidio.mp4"
//                         autoPlay
//                         loop
//                         muted
//                         playsInline
//                         className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
//                     />
//                     {/* Dark overlay for text legibility and cinematic depth */}
//                     <div className="absolute inset-0 bg-black/65 z-0" />

//                     {/* Bottom Wave Divider (Cream/Sand to match Trust Badges section below) */}
//                     <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
//                         <svg className="relative block w-full h-[40px] md:h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M0,120 C150,30 350,100 500,60 C650,20 850,90 1000,50 C1100,30 1150,20 1200,40 L1200,120 L0,120 Z" fill="#faf6f0" />
//                         </svg>
//                     </div>

//                     <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">

//                         {/* Centered Heading */}
//                         <div className="text-center mb-20 max-w-2xl mx-auto space-y-4 reveal-fade-up">
//                             <span className="text-white font-extrabold tracking-widest text-xs uppercase bg-[#a50808] px-4 py-2 rounded-full inline-block shadow-md">
//                                 From Farms To Jars
//                             </span>
//                             <h2 className="text-3xl sm:text-4xl font-bold text-white font-poppins tracking-tight">
//                                 Our Process
//                             </h2>
//                             <p className="text-gray-300 font-semibold text-sm sm:text-base leading-relaxed font-poppins">
//                                 We ensure that every batch maintains high quality, natural taste, and maximum flavor concentration.
//                             </p>
//                         </div>

//                         {/* Arched Premium Cards Grid */}
//                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
//                             {processSteps.map((step, index) => {
//                                 const IconComponent = step.icon;
//                                 return (
//                                     <div
//                                         key={index}
//                                         className="editorial-card relative flex flex-col w-full max-w-[280px] mx-auto bg-white rounded-t-[140px] rounded-b-3xl shadow-[0_0_25px_rgba(0,0,0,0.05)] border border-orange-100/30 overflow-hidden group"
//                                     >
//                                         {/* Top Image Wrapper (Arched top and concave curved bottom) */}
//                                         <div
//                                             className="relative w-full h-[220px] overflow-hidden z-10"
//                                             style={{ clipPath: "url(#chefCardClip)" }}
//                                         >
//                                             <Image
//                                                 src={step.image}
//                                                 alt={step.title}
//                                                 fill
//                                                 className="object-cover group-hover:scale-110 transition-transform duration-700"
//                                             />
//                                             {/* Red bottom curve border SVG */}
//                                             <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" viewBox="0 0 100 100" preserveAspectRatio="none">
//                                                 <path
//                                                     d="M 0,60 C 0,78 25,96 50,96 C 75,96 100,78 100,60"
//                                                     fill="none"
//                                                     stroke="#a50808"
//                                                     strokeWidth="4"
//                                                     className="transition-all duration-500 group-hover:stroke-[#a50808] group-hover:stroke-[5]"
//                                                     vectorEffect="non-scaling-stroke"
//                                                 />
//                                             </svg>
//                                         </div>

//                                         {/* Overlapping Circle Button - placed outside of clipped container in vibrant orange */}
//                                         <div className="absolute top-[192px] left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-[#ff7e00] to-[#ff3c00] group-hover:from-gray-800 group-hover:to-gray-950 border-2 border-white text-white flex items-center justify-center shadow-md group-hover:scale-110 z-25 transition-all duration-500">
//                                             <IconComponent className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
//                                         </div>

//                                         {/* Bottom Content Area */}
//                                         <div className="pt-8 pb-8 px-5 text-center flex-1 flex flex-col justify-between">
//                                             <div className="space-y-2 font-poppins">
//                                                 <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Step 0{index + 1}</span>
//                                                 <h3 className="text-lg font-bold text-gray-900 font-poppins leading-tight group-hover:text-[#a50808] transition-colors duration-300">
//                                                     {step.title}
//                                                 </h3>
//                                                 <p className="text-gray-500 text-xs font-semibold leading-relaxed">
//                                                     {step.desc}
//                                                 </p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 );
//                             })}
//                         </div>


//                     </div>
//                 </section>

//                 {/* Trust Badges: Pure. Natural. Honest. */}
//                 <div className="reveal-fade-up mt-10 pt-12 border-t border-orange-100/20 text-center font-poppins">
//                     <h3 className="text-2xl sm:text-3xl font-bold font-poppins text-gray-900 mb-2 italic tracking-wide">
//                         &mdash; Pure. Natural. Honest. &mdash;
//                     </h3>

//                     <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mt-12 justify-center px-4">
//                         <div className="group flex flex-col items-center p-5 rounded-2xl bg-white border border-orange-100/50 hover:border-orange-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 transition-all duration-300">
//                             <div className="w-12 h-12 rounded-full bg-red-50 border border-red-100/50 flex items-center justify-center text-[#a50808] mb-3 group-hover:scale-110 transition-transform duration-300">
//                                 <Sun className="w-5 h-5" />
//                             </div>
//                             <span className="text-xs font-black uppercase tracking-wider text-gray-700 leading-tight">Sun-Dried To<br />Perfection</span>
//                         </div>
//                         <div className="group flex flex-col items-center p-5 rounded-2xl bg-white border border-orange-100/50 hover:border-orange-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 transition-all duration-300">
//                             <div className="w-12 h-12 rounded-full bg-red-50 border border-red-100/50 flex items-center justify-center text-[#a50808] mb-3 group-hover:scale-110 transition-transform duration-300">
//                                 <GiTomato className="w-5 h-5" />
//                             </div>
//                             <span className="text-xs font-black uppercase tracking-wider text-gray-700 leading-tight">Rich Tomatos<br />Flavor</span>
//                         </div>
//                         <div className="group flex flex-col items-center p-5 rounded-2xl bg-white border border-orange-100/50 hover:border-orange-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 transition-all duration-300">
//                             <div className="w-12 h-12 rounded-full bg-red-50 border border-red-100/50 flex items-center justify-center text-[#a50808] mb-3 group-hover:scale-110 transition-transform duration-300">
//                                 <Sprout className="w-5 h-5" />
//                             </div>
//                             <span className="text-xs font-black uppercase tracking-wider text-gray-700 leading-tight">100% Natural<br />Ingredients</span>
//                         </div>
//                         <div className="group flex flex-col items-center p-5 rounded-2xl bg-white border border-orange-100/50 hover:border-orange-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 transition-all duration-300">
//                             <div className="w-12 h-12 rounded-full bg-red-50 border border-red-100/50 flex items-center justify-center text-[#a50808] mb-3 group-hover:scale-110 transition-transform duration-300">
//                                 <HeartHandshake className="w-5 h-5 animate-pulse" />
//                             </div>
//                             <span className="text-xs font-black uppercase tracking-wider text-gray-700 leading-tight">Handcrafted<br />Quality</span>
//                         </div>
//                     </div>

//                     <div className="mt-16 bg-[#a50808]/5 border border-[#a50808]/10 max-w-3xl mx-auto py-5 px-8 rounded-2xl flex items-center justify-center gap-3">
//                         <FaHeart className="w-4 h-4 text-[#a50808] shrink-0" />
//                         <p className="text-xs sm:text-sm text-gray-800 font-extrabold tracking-widest uppercase">
//                             We believe in clean food, honest ingredients and sustainable practices.
//                         </p>
//                     </div>

//                     <p className="italic text-gray-500 font-bold text-sm sm:text-base my-8">
//                         &ldquo;Better for you. Better for your business. Better for the planet.&rdquo;
//                     </p>
//                 </div>

//                 {/* SECTION: COMPARISON */}
//                 <section className="relative w-full py-10 overflow-hidden z-10 bg-[#faf6f0]" style={{ clipPath: "inset(0)" }}>
//                     {/* Top Wave Divider (Cream to match Trust Badges section above) */}
//                     {/* <div className="absolute left-0 w-full overflow-hidden leading-[0] z-20" style={{ top: "-8px" }}>
//                         <svg viewBox="0 0 1440 120" className="relative block w-full h-[50px] md:h-[80px]" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
//                             <path
//                                 d="M0,-10 L1440,-10 L1440,100 C960,120 480,20 0,40 Z"
//                                 fill="#faf6f0"
//                             />
//                         </svg>
//                     </div> */}

//                     {/* Background Image with Dark Overlay (Fixed Parallax) */}
//                     <div className="fixed inset-0 z-0 pointer-events-none">
//                         <Image
//                             src="/tomato-spread.png"
//                             alt="Tomato spread comparison background"
//                             fill
//                             className="object-cover"
//                         />
//                         <div className="absolute inset-0 bg-black/35 z-0" />
//                     </div>

//                     {/* Bottom Wave Divider (Cream to match Partnerships section below) */}
//                     {/* <div className="absolute left-0 w-full overflow-hidden leading-[0] z-20" style={{ bottom: "-8px" }}>
//                         <svg viewBox="0 0 1440 120" className="relative block w-full h-[50px] md:h-[80px]" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
//                             <path
//                                 d="M0,100 C480,20 960,120 1440,40 L1440,130 L0,130 Z"
//                                 fill="#fff9f2"
//                             />
//                         </svg>
//                     </div> */}

//                     <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10 my-8">

//                         {/* Centered Heading */}
//                         <div className="reveal-fade-up text-center mb-24 max-w-3xl mx-auto space-y-4">
//                             <span className="text-white font-black tracking-[0.25em] text-xs uppercase bg-[#a50808] px-4.5 py-2 rounded-full inline-flex items-center gap-2 shadow-md w-max">
//                                 <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
//                                 The Culinary Compare
//                             </span>
//                             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-poppins tracking-tight leading-tight">
//                                 How Drymato <span className="text-[#a50808]">Stands Out</span>
//                             </h2>
//                             <p className="text-gray-300 font-semibold text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-poppins">
//                                 A professional-grade comparison showing why top cafes, chefs, and home cooks choose Drymato over standard fresh tomatoes.
//                             </p>
//                         </div>

//                         {/* Column Titles for Desktop */}
//                         <div className="reveal-fade-up hidden lg:grid grid-cols-12 gap-8 mb-8 px-8 text-left font-poppins items-center">
//                             <div className="col-span-5">
//                                 <div className="flex items-center gap-3 bg-emerald-950/80 border border-emerald-800/40 px-5 py-3 rounded-full w-max shadow-sm">
//                                     <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
//                                     <h3 className="text-sm font-black tracking-widest uppercase text-emerald-300">
//                                         Drymato Sun-Cured (0% Waste)
//                                     </h3>
//                                 </div>
//                             </div>
//                             <div className="col-span-2 text-center">
//                                 <span className="text-xs font-black bg-orange-950/80 border border-orange-850/40 text-orange-200 py-1.5 px-3 rounded-full font-mono uppercase tracking-wider shadow-sm">VS</span>
//                             </div>
//                             <div className="col-span-5 pl-4">
//                                 <div className="flex items-center gap-3 bg-red-950/80 border border-red-900/40 px-5 py-3 rounded-full w-max shadow-sm">
//                                     <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
//                                     <h3 className="text-sm font-black tracking-widest uppercase text-gray-300">
//                                         Standard Fresh Tomatoes
//                                     </h3>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Comparison Rows */}
//                         <div className="space-y-8">
//                             {comparisonPoints.map((item, index) => {
//                                 const IconComponent = item.icon || FaCheckCircle;
//                                 return (
//                                     <div
//                                         key={index}
//                                         className="editorial-card comparison-card group relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center bg-white hover:bg-gradient-to-br hover:from-white hover:to-[#fffdfb] p-6 sm:p-8 lg:p-10 rounded-[2.5rem] border border-orange-100/20 hover:border-[#a50808]/15 shadow-[0_15px_40px_rgba(194,65,12,0.02)] hover:shadow-[0_25px_60px_rgba(165,8,8,0.06)] hover:-translate-y-1.5 transition-all duration-500 font-poppins"
//                                     >
//                                         {/* Drymato Column (Left) */}
//                                         <div className="col-span-1 lg:col-span-5 flex items-start gap-4 text-left p-4 rounded-2xl bg-emerald-50/10 border border-transparent group-hover:border-emerald-100/20 group-hover:bg-emerald-50/20 transition-all duration-300 border-l-4 border-l-emerald-500">
//                                             <div className="w-11 h-11 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0 shadow-sm mt-0.5 group-hover:scale-110 transition-transform duration-300">
//                                                 <FaCheck className="w-4.5 h-4.5" />
//                                             </div>
//                                             <div className="space-y-1">
//                                                 <h4 className="text-xs font-black tracking-widest uppercase text-emerald-700 lg:hidden mb-1">Drymato Advantages</h4>
//                                                 <p className="text-sm sm:text-base font-bold text-gray-800 leading-relaxed">
//                                                     {item.drymato}
//                                                 </p>
//                                             </div>
//                                         </div>

//                                         {/* Parameter Column (Center Info Badge) */}
//                                         <div className="col-span-1 lg:col-span-2 text-center py-4 lg:py-0 border-y lg:border-y-0 border-orange-100/40 my-1 lg:my-0 flex flex-col items-center justify-center gap-2">
//                                             <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#a50808] to-[#be1212] text-white flex items-center justify-center shadow-[0_8px_20px_rgba(165,8,8,0.18)] group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
//                                                 <IconComponent className="w-5 h-5" />
//                                             </div>
//                                             <span className="text-xs font-black uppercase tracking-wider text-gray-700 bg-orange-50 border border-orange-100/60 py-1.5 px-4.5 rounded-full shadow-inner">
//                                                 {item.feature}
//                                             </span>
//                                         </div>

//                                         {/* Fresh Tomatoes Column (Right) */}
//                                         <div className="col-span-1 lg:col-span-5 flex items-start gap-4 text-left p-4 rounded-2xl bg-red-50/10 border border-transparent group-hover:border-red-100/20 group-hover:bg-red-50/20 transition-all duration-300 border-l-4 border-l-red-300 lg:pl-6">
//                                             <div className="w-11 h-11 rounded-full bg-red-50 border border-red-100 flex items-center justify-center text-red-500 shrink-0 shadow-sm mt-0.5 group-hover:scale-110 transition-transform duration-300">
//                                                 <FaTimes className="w-4.5 h-4.5" />
//                                             </div>
//                                             <div className="space-y-1">
//                                                 <h4 className="text-xs font-black tracking-widest uppercase text-red-500 lg:hidden mb-1">Fresh Tomatoes Gaps</h4>
//                                                 <p className="text-sm sm:text-base font-semibold text-gray-500 leading-relaxed">
//                                                     {item.fresh}
//                                                 </p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 );
//                             })}
//                         </div>

//                     </div>
//                 </section>

//                 {/* SECTION 4: SPLIT GRID CALL TO ACTION */}
//                 <section className="relative w-full py-24 bg-[#fff9f2] z-10 font-poppins">
//                     <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
//                         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

//                             {/* Left Column: CTA Info */}
//                             <div className="lg:col-span-7 space-y-6 text-left reveal-fade-left">
//                                 <span className="text-[#a50808] font-extrabold tracking-widest text-xs uppercase bg-red-50 px-3.5 py-1.5 rounded-full inline-block">
//                                     Partnerships
//                                 </span>
//                                 <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-poppins tracking-tight leading-tight">
//                                     Partner with Drymato. <br />
//                                     <span className="text-[#a50808]">Elevate Your Menu.</span>
//                                 </h2>
//                                 <p className="text-gray-600 font-semibold text-sm sm:text-base leading-relaxed max-w-xl">
//                                     Join cafes, restaurants, food manufacturers, and home chefs who trust Drymato for premium, waste-free flavor. Get in touch with us to request catalog samples or customized B2B wholesale prices.
//                                 </p>

//                                 {/* Contact Details Cards */}
//                                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 max-w-xl">
//                                     <Link
//                                         href="https://wa.me/918000897238"
//                                         target="_blank"
//                                         className="flex items-center gap-4 p-4.5 rounded-2xl bg-white border border-orange-100/70 hover:border-[#a50808]/45 shadow-sm hover:shadow-[0_12px_24px_rgba(165,8,8,0.06)] hover:-translate-y-1 transition-all duration-300 group/item"
//                                     >
//                                         <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 shadow-inner">
//                                             <FaPhone className="w-4.5 h-4.5 transform group-hover/item:rotate-12 transition-transform duration-300" />
//                                         </div>
//                                         <div>
//                                             <p className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wider">Call / Whatsapp</p>
//                                             <p className="text-sm text-gray-800 font-black">+91 8000897238</p>
//                                         </div>
//                                     </Link>

//                                     <Link
//                                         href="mailto:hello@drymato.com"
//                                         className="flex items-center gap-4 p-4.5 rounded-2xl bg-white border border-orange-100/70 hover:border-[#a50808]/45 shadow-sm hover:shadow-[0_12px_24px_rgba(165,8,8,0.06)] hover:-translate-y-1 transition-all duration-300 group/item"
//                                     >
//                                         <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center text-[#a50808] shrink-0 shadow-inner">
//                                             <FaEnvelope className="w-4.5 h-4.5 transform group-hover/item:translate-x-0.5 transition-transform duration-300" />
//                                         </div>
//                                         <div>
//                                             <p className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wider">Email Inquiries</p>
//                                             <p className="text-sm text-gray-800 font-black">hello@drymato.com</p>
//                                         </div>
//                                     </Link>

//                                     {/* <Link
//                                         href="/product"
//                                         className="flex items-center gap-4 p-4.5 rounded-2xl bg-white border border-orange-100/70 hover:border-[#a50808]/45 shadow-sm hover:shadow-[0_12px_24px_rgba(165,8,8,0.06)] hover:-translate-y-1 transition-all duration-300 group/item"
//                                     >
//                                         <div className="w-11 h-11 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 shrink-0 shadow-inner">
//                                             <FaGlobe className="w-4.5 h-4.5 transform group-hover/item:scale-110 transition-transform duration-300" />
//                                         </div>
//                                         <div>
//                                             <p className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wider">Catalog Website</p>
//                                             <p className="text-sm text-gray-800 font-black font-poppins">www.drymato.com</p>
//                                         </div>
//                                     </Link> */}

//                                     <Link
//                                         href="https://instagram.com/drymato_"
//                                         target="_blank"
//                                         className="flex items-center gap-4 p-4.5 rounded-2xl bg-white border border-orange-100/70 hover:border-[#a50808]/45 shadow-sm hover:shadow-[0_12px_24px_rgba(165,8,8,0.06)] hover:-translate-y-1 transition-all duration-300 group/item"
//                                     >
//                                         <div className="w-11 h-11 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600 shrink-0 shadow-inner">
//                                             <FaInstagram className="w-4.5 h-4.5 transform group-hover/item:rotate-6 transition-transform duration-300" />
//                                         </div>
//                                         <div>
//                                             <p className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wider">Instagram</p>
//                                             <p className="text-sm text-gray-800 font-black">@drymato_</p>
//                                         </div>
//                                     </Link>
//                                 </div>

//                                 <div className="pt-4">
//                                     <Link
//                                         href="/contact"
//                                         target="_blank"
//                                         className="group/btn relative overflow-hidden bg-[#a50808] hover:bg-gray-900 text-white py-3.5 px-8 rounded-full font-black flex items-center justify-center gap-3 transition-colors duration-300 shadow-md cursor-pointer z-10 w-max text-xs tracking-widest uppercase"
//                                     >
//                                         <span className="relative z-10">REQUEST B2B SAMPLE</span>
//                                         <span className="relative z-10 w-5 h-5 bg-white text-[#a50808] rounded-full flex items-center justify-center font-bold text-xs transform group-hover/btn:translate-x-1 shadow-sm">
//                                             <FaArrowRight className="w-2.5 h-2.5" />
//                                         </span>
//                                     </Link>
//                                 </div>
//                             </div>

//                             {/* Right Column: Overlapping Visual Mockup */}
//                             <div className="lg:col-span-5 relative flex items-center justify-center h-[350px] sm:h-[450px] w-full reveal-fade-right">
//                                 {/* Accent background plates */}
//                                 <div className="absolute inset-4 rounded-3xl bg-gradient-to-br from-orange-100/50 to-[#fff2e0]/50 border border-orange-200/30 z-0" />

//                                 <div className="zoom-wrapper absolute w-[85%] h-[80%] rounded-2xl overflow-hidden shadow-[0_15px_35px_rgba(165,8,8,0.05)] border border-orange-100/20 z-10">
//                                     <Image
//                                         src="/dry-tomato-jaarspread.png"
//                                         alt="Drymato wholesale product display"
//                                         fill
//                                         className="object-cover image-zoom"
//                                     />
//                                 </div>
//                             </div>

//                         </div>
//                     </div>
//                 </section>
//             </div>
//         </main>
//     );
// }




"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    FaSeedling,
    FaLayerGroup,
    FaCogs,
    FaWarehouse,
    FaSlidersH,
    FaGlobeAsia,
    FaInstagram,
    FaWhatsapp,
    FaFacebookF,
    FaArrowRight,
    FaShieldAlt,
    FaTag,
    FaClipboardCheck,
    FaPhone,
    FaEnvelope,
    FaWeight,
    FaWeightHanging,
    FaCheck,
    FaSearch,
    FaSun,
    FaBoxes,
    FaBoxOpen,
} from "react-icons/fa";
import {
    FiBox,
    FiSettings,
} from "react-icons/fi";
import { FaWeightScale } from "react-icons/fa6";
import { Leaf, ChevronRight } from "lucide-react";

export default function WhyChooseUsClient() {
    useEffect(() => {
        const revealObserver = new IntersectionObserver((entries) => {
            const intersecting = [];
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    intersecting.push(entry.target);
                } else {
                    entry.target.classList.remove("is-revealed");
                    entry.target.style.transitionDelay = "";
                }
            });
            if (intersecting.length > 0) {
                intersecting.sort((a, b) => {
                    const ra = a.getBoundingClientRect();
                    const rb = b.getBoundingClientRect();
                    if (Math.abs(ra.top - rb.top) < 15) return ra.left - rb.left;
                    return ra.top - rb.top;
                });
                intersecting.forEach((el, i) => {
                    const isSmall = el.classList.contains("badge-pill") || el.classList.contains("gallery-tile") || el.classList.contains("logo-plate");
                    el.style.transitionDelay = `${i * (isSmall ? 80 : 130)}ms`;
                    el.classList.add("is-revealed");
                });
            }
        }, { root: null, rootMargin: "-8% 0px -8% 0px", threshold: 0.05 });

        const els = document.querySelectorAll(
            ".reveal-fade-up, .reveal-fade-left, .reveal-fade-right, .editorial-card, .badge-pill, .gallery-tile, .logo-plate"
        );
        els.forEach((el) => revealObserver.observe(el));
        return () => els.forEach((el) => revealObserver.unobserve(el));
    }, []);

    const coreBadges = [
        { label: "Farm", icon: FaSeedling },
        { label: "Raw Material", icon: FaBoxes },
        { label: "Processing", icon: FaCogs },
        { label: "Dehydration", icon: FaSun }
    ];

    const productRange = [
        {
            title: "Fruits",
            subtitle: "Natural & Sweet",
            feature: "Bulk & Retail",
            image: "/images/categories/dried-fruits.png",
            hoverImage: "/images/categories/dried-fruits.png",
            href: "/product"
        },
        {
            title: "Vegetables",
            subtitle: "Farm Fresh",
            feature: "Bulk & Retail",
            image: "/images/categories/vegetable-powder.png",
            hoverImage: "/images/categories/vegetable-powder.png",
            href: "/product"
        },
        {
            title: "Herbs & Greens",
            subtitle: "Aromatic & Pure",
            feature: "Custom MOQ",
            image: "/images/categories/dried-vegetables.png",
            hoverImage: "/images/categories/dried-vegetables.png",
            href: "/product"
        },
        {
            title: "Food Powders",
            subtitle: "Fine Ground",
            feature: "Custom MOQ",
            image: "/jaar/jaarFrontView.png",
            hoverImage: "/dry-tomato-jaarspread.png",
            href: "/product"
        }
    ];

    const galleryImages = [
        "/wholesale_bulk_packaging.png",
        "/process_handpicked.png",
        "/manufacturing/2.png",
        "/process_quality.png",
        "/pasta.png",
        "/spread_tomato.png"
    ];

    const discussionPoints = [
        { title: "Cut Size", desc: "Slices / Flakes / Pieces sized to your manufacturing requirements.", icon: FaSlidersH },
        { title: "Powder / Mesh Size", desc: "Fine ground powders customized to your specific mesh requirements.", icon: FaCogs },
        { title: "Moisture Target", desc: "Precision drying controlled to match your exact shelf-life and processing goals.", icon: FaShieldAlt },
        { title: "Quantity", desc: "Flexible order volumes from initial product testing to full commercial scale.", icon: FaWeightHanging },
        { title: "Packaging", desc: "Bulk, vacuum, retail, export, or private label options built around your line.", icon: FaTag },
        { title: "Private Label", desc: "Your brand, your packaging, your product — managed end to end.", icon: FiBox },
        { title: "Application", desc: "Formulated and documented specifically for your intended food application.", icon: FaClipboardCheck }
    ];

    const WORKFLOW_STEPS = [
        { number: "01", title: "Selection", image: "/images/process/source.png" },
        { number: "02", title: "Preparation", image: "/images/process/process.png" },
        { number: "03", title: "Cutting", image: "/images/process/customize.png" },
        { number: "04", title: "Dehydration", image: "/images/process/process.png" },
        { number: "05", title: "Quality Checks", image: "/images/process/source.png" },
        { number: "06", title: "Packaging", image: "/images/process/supply.png" }
    ];

    const flexiblePackagingPoints = [
        {
            title: "Bulk Packaging",
            desc: "For manufacturers, wholesalers and institutional requirements.",
            icon: FaWarehouse,
            bgColor: "#fff0ee",
            borderColor: "#df6c6c",
            textColor: "#1c1c1c",
            descColor: "#707070",
            iconColor: "#c52828",
            buttonBorder: "#c52828",
            buttonText: "#c52828"
        },
        {
            title: "Vacuum Packaging",
            desc: "For applicable dehydrated products.",
            icon: FiBox,
            bgColor: "#fff5df",
            borderColor: "#c99328",
            textColor: "#1c1c1c",
            descColor: "#707070",
            iconColor: "#bd7d00",
            buttonBorder: "#bd7d00",
            buttonText: "#bd7d00"
        },
        {
            title: "Retail Formats",
            desc: "Pouches, jars and selected formats.",
            icon: FaTag,
            bgColor: "#fff0e8",
            borderColor: "#d56e4f",
            textColor: "#1c1c1c",
            descColor: "#707070",
            iconColor: "#c84d2e",
            buttonBorder: "#c84d2e",
            buttonText: "#c84d2e"
        },
        {
            title: "Private-Label Packaging",
            desc: "Packaging designed around the buyer's brand requirements.",
            icon: FaBoxes,
            bgColor: "#f0f1e7",
            borderColor: "#8a9470",
            textColor: "#1c1c1c",
            descColor: "#707070",
            iconColor: "#747f5c",
            buttonBorder: "#747f5c",
            buttonText: "#747f5c"
        },
        {
            title: "Export Packaging",
            desc: "Packaging requirements based on product, destination and buyer specifications.",
            icon: FaGlobeAsia,
            bgColor: "#f8e8ed",
            borderColor: "#a52d55",
            textColor: "#1c1c1c",
            descColor: "#707070",
            iconColor: "#9d3154",
            buttonBorder: "#a52d55",
            buttonText: "#a52d55"
        }
    ];

    const qualitySteps = [
        { step: "01", title: "Raw Material Selection", desc: "Starting from carefully filtered raw ingredients." },
        { step: "02", title: "Processing & Preparation", desc: "Thorough cleaning, sorting, and cutting." },
        { step: "03", title: "Controlled Dehydration", desc: "Precision temperature drying to lock in nutrients." },
        { step: "04", title: "Product Checks", desc: "Rigorous physical and moisture inspection." },
        { step: "05", title: "Food-Grade Packaging", desc: "Hygienic sealing for maximum shelf-life." }
    ];

    const coreDifferenceCards = [
        {
            icon: FaSeedling,
            title: "Farm Connected",
            desc: "Direct farm connection for guava.",
            bgColor: "#f0f7ee",
            borderColor: "#78b169",
            iconColor: "#3d7c42"
        },
        {
            icon: FaBoxes,
            title: "Selected Sourcing",
            desc: "Other raw materials sourced according to requirement.",
            bgColor: "#fff5df",
            borderColor: "#c99328",
            iconColor: "#bd7d00"
        },
        {
            icon: FaCogs,
            title: "Processing Focus",
            desc: "From preparation to dehydration and packaging.",
            bgColor: "#fff0ee",
            borderColor: "#df6c6c",
            iconColor: "#c52828"
        },
        {
            icon: FaWarehouse,
            title: "B2B Ready",
            desc: "Built around commercial and bulk requirements.",
            bgColor: "#f0f1e7",
            borderColor: "#8a9470",
            iconColor: "#747f5c"
        },
        {
            icon: FaSlidersH,
            title: "Custom Solutions",
            desc: "Formats, specifications and packaging can be discussed.",
            bgColor: "#f8e8ed",
            borderColor: "#a52d55",
            iconColor: "#9d3154"
        },
        {
            icon: FaGlobeAsia,
            title: "Global Direction",
            desc: "India-based supply for domestic and international buyers.",
            bgColor: "#eef5ff",
            borderColor: "#5b92e5",
            iconColor: "#2b6cb0"
        }
    ];

    return (
        <main className="flex-1 bg-white min-h-screen relative overflow-hidden font-poppins">
            <style dangerouslySetInnerHTML={{
                __html: `
                .reveal-fade-up { opacity: 0; transform: translateY(40px); transition: opacity 1.1s cubic-bezier(0.16,1,0.3,1), transform 1.1s cubic-bezier(0.16,1,0.3,1); }
                .reveal-fade-left { opacity: 0; transform: translateX(-70px); transition: opacity 1.3s cubic-bezier(0.16,1,0.3,1), transform 1.3s cubic-bezier(0.16,1,0.3,1); }
                .reveal-fade-right { opacity: 0; transform: translateX(70px); transition: opacity 1.3s cubic-bezier(0.16,1,0.3,1), transform 1.3s cubic-bezier(0.16,1,0.3,1); }
                .editorial-card, .badge-pill, .gallery-tile, .logo-plate {
                    opacity: 0; transform: translateY(20px);
                    transition: opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s, border-color 0.4s;
                }
                .reveal-fade-up.is-revealed, .reveal-fade-left.is-revealed, .reveal-fade-right.is-revealed,
                .editorial-card.is-revealed, .badge-pill.is-revealed, .gallery-tile.is-revealed, .logo-plate.is-revealed {
                    opacity: 1; transform: none !important;
                }
                .editorial-card.is-revealed:hover { transform: translateY(-8px) !important; box-shadow: 0 20px 45px rgba(0,0,0,0.08) !important; }
                .gallery-tile.is-revealed:hover { transform: scale(1.03) !important; }
                .image-zoom { transition: transform 0.8s cubic-bezier(0.16,1,0.3,1) !important; }
                .zoom-wrapper:hover .image-zoom { transform: scale(1.06) !important; }
                @keyframes float-slow { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
                .animate-float-slow { animation: float-slow 4s ease-in-out infinite; }
            `}} />

            {/* ============ HERO SECTION (FULLY RESPONSIVE & EDGE-TO-EDGE) ============ */}
            <section className="relative w-full bg-[#FAF6F0] overflow-hidden border-b border-sage/15">

                {/* ================= DESKTOP VIEW (lg and above): Full-width background ================= */}
                <div className="hidden lg:block absolute inset-0 z-0 pointer-events-none select-none">
                    <Image
                        src="/images/why-choose-banner.png"
                        alt="Drymato Sourcing & Supply Banner"
                        fill
                        priority
                        className="object-cover object-right"
                        sizes="100vw"
                    />
                    {/* Smooth gradient fade behind text */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FAF6F0] via-[#FAF6F0]/80 to-transparent w-[65%]" />
                </div>

                {/* ================= MAIN CONTAINER ================= */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-10 sm:py-14 lg:py-20">

                    {/* Floating 100% Natural Badge (Positioned safely on desktop & tablet) */}
                    <div className="hidden sm:flex absolute z-20 top-6 right-6 lg:top-10 lg:right-12 items-center gap-2 px-3.5 py-2 rounded-full bg-white/90 backdrop-blur-md border border-sage/25 shadow-sm">
                        <FaShieldAlt className="w-3.5 h-3.5 text-forest" />
                        <span className="text-xs font-bold text-foreground">
                            100% Natural
                        </span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                        {/* LEFT COLUMN — Text Content */}
                        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-4 sm:space-y-6">

                            {/* Eyebrow Tag + Mobile Natural Badge */}
                            <div className="w-full flex items-center justify-between gap-2">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest/10 border border-forest/20">
                                    <Leaf className="w-3.5 h-3.5 text-forest" strokeWidth={2.2} />
                                    <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.18em] uppercase text-forest">
                                        Drymato • Why Choose Us
                                    </span>
                                </div>

                                {/* Badge for small mobile screens */}
                                <div className="flex sm:hidden items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-sage/25 shadow-xs">
                                    <FaShieldAlt className="w-3 h-3 text-forest" />
                                    <span className="text-[10px] font-bold text-foreground">100% Natural</span>
                                </div>
                            </div>

                            {/* Main Heading */}
                            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[3.25rem] xl:text-[3.5rem] font-medium text-foreground leading-[1.12] tracking-tight">
                                The Right Ingredients. <br />
                                The Right Process. <br />
                                <span className="italic font-normal text-forest">
                                    The Right Supply Partner.
                                </span>
                            </h1>

                            {/* Description Body */}
                            <div className="space-y-3 max-w-[540px] text-foreground/80 font-sans">
                                <p className="text-xs sm:text-sm lg:text-[15px] font-medium leading-[1.7]">
                                    At Drymato, we understand that for a business, sourcing an ingredient is not just about buying a product.
                                </p>
                                <p className="text-xs sm:text-sm lg:text-[15px] font-medium leading-[1.7]">
                                    It is about quality, consistency, specifications, quantity, packaging, and dependable supply. That is why we focus on building a supply system around your exact requirement.
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1 w-full sm:w-auto">
                                <Link
                                    href="/product"
                                    className="group inline-flex items-center justify-center gap-2.5 bg-forest hover:bg-forest-light text-white px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs font-extrabold tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-lg flex-1 sm:flex-none text-center"
                                >
                                    <span>Explore Products</span>
                                    <FaArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>

                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center bg-white border-2 border-foreground text-foreground hover:bg-foreground hover:text-white px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs font-extrabold tracking-widest uppercase transition-all duration-300 flex-1 sm:flex-none text-center"
                                >
                                    Request A Quote
                                </Link>
                            </div>

                            {/* App-Style Social Icon Buttons */}
                            <div className="flex items-center gap-2.5 sm:gap-3 pt-2">

                                {/* WhatsApp */}
                                <Link
                                    href="https://wa.me/918000897238"
                                    target="_blank"
                                    aria-label="WhatsApp"
                                    className="w-10 h-10 rounded-xl sm:rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow-[0_4px_12px_rgba(37,211,102,0.3)] hover:scale-105 active:scale-95 transition-all duration-300"
                                >
                                    <FaWhatsapp className="w-5 h-5" />
                                </Link>

                                {/* Instagram */}
                                <Link
                                    href="https://instagram.com/drymato_"
                                    target="_blank"
                                    aria-label="Instagram"
                                    className="w-10 h-10 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shadow-[0_4px_12px_rgba(220,39,67,0.3)] hover:scale-105 active:scale-95 transition-all duration-300"
                                >
                                    <FaInstagram className="w-5 h-5" />
                                </Link>

                                {/* Email */}
                                <Link
                                    href="mailto:hello@drymato.com"
                                    aria-label="Email Us"
                                    className="w-10 h-10 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-[#EA4335] via-[#FBBC05] to-[#34A853] text-white flex items-center justify-center shadow-[0_4px_12px_rgba(234,67,53,0.28)] hover:scale-105 active:scale-95 transition-all duration-300"
                                >
                                    <FaEnvelope className="w-4 h-4" />
                                </Link>

                                {/* Facebook */}
                                <Link
                                    href="#"
                                    aria-label="Facebook"
                                    className="w-10 h-10 rounded-xl sm:rounded-2xl bg-[#1877F2] text-white flex items-center justify-center shadow-[0_4px_12px_rgba(24,119,242,0.3)] hover:scale-105 active:scale-95 transition-all duration-300"
                                >
                                    <FaFacebookF className="w-4.5 h-4.5" />
                                </Link>

                            </div>

                        </div>

                        {/* MOBILE / TABLET DISPLAY CARD (lg:hidden) — Shows full image without overlapping text */}
                        <div className="lg:hidden w-full relative h-[240px] sm:h-[320px] rounded-2xl overflow-hidden shadow-sm border border-sage/20 mt-2">
                            <Image
                                src="/images/why-choose-banner.png"
                                alt="Drymato Sourcing & Supply Banner"
                                fill
                                priority
                                className="object-cover object-right"
                                sizes="100vw"
                            />
                        </div>

                    </div>

                </div>

            </section>

            {/* ============ OVERLAPPING INTRO CARD ============ */}
            <section className="relative w-full px-4 md:px-8 lg:px-10 -mt-8 sm:-mt-12 z-20 pb-8">
                <div className="max-w-[1380px] mx-auto">
                    <div className="relative rounded-[32px] sm:rounded-[40px] bg-forest px-6 py-10 md:px-10 md:py-12 lg:px-14 lg:py-14 overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.12)]">
                        <div className="absolute -top-8 -right-10 pointer-events-none select-none z-0 p-2 md:p-4">
                            <Image src="/lefttree.png" alt="" width={300} height={300} className="w-24 h-24 md:w-72 md:h-72 object-contain rotate-[175deg] opacity-80 drop-shadow-md" />
                        </div>

                        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-14">
                            <div className="w-full lg:w-[38%] flex items-center justify-center lg:justify-start shrink-0">
                                <div className="relative w-full max-w-[280px] sm:max-w-[330px] lg:max-w-[430px]">
                                    <div className="relative z-10 zoom-wrapper">
                                        <Image src="/images/process/supply.png" alt="Drymato sun-cured ingredients" width={680} height={680} className="w-full h-auto object-contain object-center image-zoom" style={{ filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.28))" }} />
                                    </div>
                                </div>
                            </div>

                            <div className="w-full lg:w-[62%] flex flex-col items-center lg:items-start text-center lg:text-left">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="w-8 h-[2px] bg-sage"></span>
                                    <span className="text-xs font-bold tracking-[0.2em] uppercase text-sage">Direct Farm Connection</span>
                                </div>
                                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-[1.15] tracking-tight">
                                    Direct Farm <br />
                                    <span className="italic text-mustard">Connection</span>
                                </h2>
                                <div className="mt-5 max-w-2xl">
                                    <p className="text-sm md:text-base text-white/75 leading-relaxed font-sans">
                                        For guava, our journey begins at our own farms.
                                    </p>
                                    <p className="mt-4 text-sm md:text-base text-white/75 leading-relaxed font-sans">
                                        From cultivation and harvesting to processing and dehydration, we maintain a direct connection with the raw material.
                                    </p>
                                    <p className="mt-4 text-sm md:text-base text-white/75 leading-relaxed font-sans">
                                        For other products, we work through carefully selected sourcing channels based on quality, seasonality and application.
                                    </p>
                                </div>
                                <Link href="/about-us" className="group mt-6 inline-flex items-center gap-2 bg-white hover:bg-mustard text-forest px-6 py-2.5 rounded-full text-xs font-extrabold tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-lg">
                                    Read More <FaArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </div>

                        <div className="relative z-20 mt-10 sm:mt-12 pt-8 border-t border-white/20">
                            <div className="flex flex-wrap justify-center items-start gap-6 sm:gap-8 lg:gap-12">
                                {coreBadges.map((badge, index) => {
                                    const Icon = badge.icon;
                                    return (
                                        <div key={index} className="flex flex-col items-center justify-center gap-2.5 min-w-[80px] sm:min-w-[100px]">
                                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-mustard border-white/80">
                                                <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                                            </div>
                                            <span className="text-[10px] sm:text-xs font-bold text-white text-center leading-tight max-w-[110px]">{badge.label}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============ PRODUCT RANGE ============ */}
            <section className="relative w-full pt-24 pb-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
                    <div className="flex items-end justify-between mb-10 reveal-fade-up">
                        <div>
                            <span className="text-[#a50808] font-extrabold tracking-widest text-xs uppercase bg-red-50 px-3.5 py-1.5 rounded-full inline-block mb-3">WIDE PRODUCT RANGE</span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">Multiple Ingredients. One Supply Partner.</h2>
                            <p>From fruits and vegetables to herbs and powders, Drymato is building a growing portfolio of dehydrated ingredients.</p>
                        </div>
                        <Link href="/product" className="hidden sm:inline-flex items-center gap-2 text-[#a50808] font-black text-xs tracking-widest uppercase hover:gap-3 transition-all duration-300">
                            Explore Our Products <FaArrowRight className="w-3 h-3" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {productRange.map((rp, index) => (
                            <div key={index} className="group relative bg-white rounded-tl-[48px] rounded-br-[48px] rounded-tr-none rounded-bl-none border border-gray-100 overflow-hidden transition-all duration-500 hover:-translate-y-1.5 flex flex-col h-full shadow-sm hover:shadow-md">
                                <Link href={rp.href || "#"} className="relative w-full h-64 sm:h-72 bg-[#faf6f0] flex items-center justify-center p-6 overflow-hidden cursor-pointer">
                                    <Image src={rp.image} alt={rp.title} width={180} height={180} className="absolute max-w-[70%] max-h-[70%] w-auto h-auto object-contain transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0" />
                                    <Image src={rp.hoverImage || rp.image} alt={`${rp.title} alternate view`} width={180} height={180} className="absolute max-w-[70%] max-h-[70%] w-auto h-auto object-contain transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100" />
                                </Link>

                                <div className="flex flex-col flex-grow px-5 pt-4 pb-5">
                                    <Link href={rp.href || "#"} className="min-h-[75px] no-underline cursor-pointer">
                                        <h4 className="font-poppins text-base sm:text-[17px] font-bold text-gray-900 leading-snug mb-1 group-hover:text-[#a50808] transition-colors duration-300">{rp.title}</h4>
                                        {rp.subtitle && <p className="text-gray-400 text-xs font-medium mb-2.5">{rp.subtitle}</p>}
                                        <div className="flex items-center gap-1.5 text-[#a50808] text-xs font-semibold">
                                            <FaCheck size={11} className="shrink-0" />
                                            <span>{rp.feature}</span>
                                        </div>
                                    </Link>

                                    <div className="mt-4 flex items-center gap-2.5">
                                        <Link href="/product" className="flex-1 text-center text-[11px] sm:text-xs font-bold tracking-wide uppercase py-2.5 px-3 rounded-lg border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 no-underline cursor-pointer">
                                            View Range
                                        </Link>
                                        <Link href="/contact" className="group/btn relative overflow-hidden flex-1 bg-[#a50808] border-2 border-[#a50808] text-white py-2.5 pl-4 pr-1.5 rounded-lg text-[11px] sm:text-xs font-bold tracking-wide uppercase flex items-center justify-center gap-2 transition-all duration-300 no-underline cursor-pointer">
                                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[125%] aspect-square rounded-t-[50%] bg-white translate-y-full transition-transform duration-[750ms] ease-in-out z-0 group-hover/btn:translate-y-[12%]" />
                                            <span className="relative z-10 transition-colors duration-300 group-hover/btn:text-[#a50808]">Enquire</span>
                                            <span className="relative z-10 w-5 h-5 bg-white text-[#a50808] rounded-full flex items-center justify-center shrink-0 shadow-sm transform group-hover/btn:translate-x-0.5 group-hover/btn:bg-[#a50808] group-hover/btn:text-white transition-all duration-300">
                                                <FaArrowRight size={9} />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============ PROCESS-FOCUSED APPROACH ============ */}
            <section className="relative w-full bg-background py-14 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <Image src="/lefttree.png" alt="" width={340} height={340} className="hidden sm:block absolute -left-24 top-[20px] lg:top-[50px] w-28 h-28 lg:w-120 lg:h-80 opacity-[0.75] rotate-[-25deg] pointer-events-none select-none z-0" draggable={false} />
                <Image src="/lefttree.png" alt="" width={340} height={340} className="hidden sm:block absolute -right-26 top-[220px] lg:top-[200px] w-28 h-28 lg:w-120 lg:h-90 opacity-[0.55] rotate-[28deg] scale-x-[-1] pointer-events-none select-none z-0" draggable={false} />

                <div className="relative max-w-6xl mx-auto z-10 flex flex-col items-center gap-10 lg:gap-12">
                    <div className="w-full flex flex-col items-center text-center">
                        <div className="flex items-center gap-2 mb-3">
                            <Leaf className="w-4 h-4 text-forest" strokeWidth={2} />
                            <span className="text-xs font-bold tracking-[0.2em] uppercase text-forest">03. Process-Focused Approach</span>
                        </div>
                        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.4rem] font-medium text-foreground leading-[1.2] tracking-tight mb-4 max-w-3xl">
                            Dehydration Is More Than Drying.
                        </h2>
                        <p className="text-sm sm:text-base text-foreground/65 leading-[1.7] max-w-2xl font-sans">
                            Different ingredients require different processing approaches.
                        </p>
                    </div>

                    <div className="w-full flex items-center justify-center flex-wrap lg:flex-nowrap gap-2 sm:gap-3 md:gap-4 px-2">
                        {WORKFLOW_STEPS.map((step, idx) => (
                            <div key={step.number} className="flex items-center gap-2 sm:gap-3">
                                <div className="flex flex-col items-center text-center w-[100px] sm:w-[120px] md:w-[140px] shrink-0">
                                    <div className="relative w-18 h-18 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden shadow-[0_8px_24px_rgba(36,56,34,0.12)] bg-surface mb-3">
                                        <Image src={step.image} alt={step.title} fill sizes="120px" className="object-cover" />
                                    </div>
                                    <h3 className="font-serif text-xs sm:text-sm font-semibold text-foreground leading-snug">
                                        {step.number}. {step.title}
                                    </h3>
                                </div>
                                {idx < WORKFLOW_STEPS.length - 1 && (
                                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-forest/40 shrink-0 self-center mb-6" strokeWidth={2} />
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="w-full flex flex-col items-center text-center max-w-2xl mx-auto">
                        <p className="text-sm sm:text-base text-foreground/65 leading-[1.7] font-sans">
                            We focus on the product&apos;s intended application while discussing factors such as format, cut size, moisture target and packaging requirements.
                        </p>
                    </div>
                </div>
            </section>

            {/* ============ B2B TIERS ============ */}
            <section className="relative w-full overflow-hidden bg-[#fff] py-16 sm:py-20 lg:py-24">
                <div className="absolute left-[-25px] sm:left-[-20px] lg:left-[-10px] top-[70px] sm:top-[90px] lg:top-[110px] w-[100px] sm:w-[150px] lg:w-[210px] h-[220px] sm:h-[300px] lg:h-[400px] opacity-30 pointer-events-none z-0">
                    <Image src="/lefttree.png" alt="" fill sizes="(max-width: 640px) 100px, (max-width: 1024px) 150px, 210px" className="object-contain object-left" />
                </div>
                <div className="absolute right-[-25px] sm:right-[-20px] lg:right-[-10px] top-[90px] sm:top-[100px] lg:top-[120px] w-[100px] sm:w-[150px] lg:w-[210px] h-[220px] sm:h-[300px] lg:h-[400px] opacity-30 pointer-events-none z-0">
                    <Image src="/righttree.png" alt="" fill sizes="(max-width: 640px) 100px, (max-width: 1024px) 150px, 210px" className="object-contain object-right" />
                </div>

                <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
                    <div className="flex justify-center">
                        <span className="inline-flex items-center justify-center rounded-full bg-[#f8ddd8] px-6 sm:px-8 py-2.5 sm:py-3 text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.25em] sm:tracking-[0.32em] text-[#8f1616]">
                            BUILT FOR B2B
                        </span>
                    </div>

                    <div className="mx-auto mt-6 sm:mt-7 max-w-5xl text-center">
                        <h2 className="font-serif font-bold text-[38px] sm:text-[48px] md:text-[58px] lg:text-[68px] xl:text-[74px] leading-[1.1] tracking-[-0.035em] text-[#171717]">
                            From Samples to <br />
                            <span className="text-[#8f1616]">Commercial Quantities</span>
                        </h2>
                        <p className="mt-6 sm:mt-7 text-base sm:text-lg md:text-xl font-medium text-[#333333]">
                            Drymato is designed around business requirements.
                        </p>
                        <p className="mx-auto mt-3 max-w-5xl text-sm sm:text-base md:text-lg leading-7 sm:leading-8 text-[#666666]">
                            Whether you&apos;re developing a product, supplying a restaurant, running a food manufacturing facility or sourcing for wholesale, we work around commercial requirements.
                        </p>
                    </div>

                    <div className="mt-10 sm:mt-12 lg:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-4 xl:gap-5">
                        <div className="group relative min-h-[270px] overflow-hidden rounded-[28px] bg-white/90 backdrop-blur-sm px-7 py-7 shadow-[0_10px_35px_rgba(80,45,30,0.07)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(80,45,30,0.13)]">
                            <div className="absolute left-0 top-0 h-16 w-16 rounded-tl-[28px] border-t-[4px] border-l-[4px] border-[#df6c6c] pointer-events-none" />
                            <div className="absolute right-0 bottom-0 h-16 w-16 rounded-br-[28px] border-b-[4px] border-r-[4px] border-[#df6c6c] pointer-events-none" />
                            <div className="mb-6 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#fff0ee] transition-transform duration-500 group-hover:scale-110">
                                <FiBox className="h-8 w-8 text-[#c52828]" strokeWidth={1.7} />
                            </div>
                            <h3 className="font-serif text-[25px] sm:text-[27px] font-bold text-[#1c1c1c]">Samples</h3>
                            <p className="mt-3 text-[15px] sm:text-base leading-7 text-[#707070]">Perfect for product development and testing.</p>
                        </div>

                        <div className="group relative min-h-[270px] overflow-hidden rounded-[28px] bg-white/90 backdrop-blur-sm px-7 py-7 shadow-[0_10px_35px_rgba(80,45,30,0.07)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(80,45,30,0.13)]">
                            <div className="absolute left-0 top-0 h-16 w-16 rounded-tl-[28px] border-t-[4px] border-l-[4px] border-[#c99328] pointer-events-none" />
                            <div className="absolute right-0 bottom-0 h-16 w-16 rounded-br-[28px] border-b-[4px] border-r-[4px] border-[#c99328] pointer-events-none" />
                            <div className="mb-6 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#fff5df] transition-transform duration-500 group-hover:scale-110">
                                <FaWeightHanging className="h-8 w-8 text-[#bd7d00]" strokeWidth={1.7} />
                            </div>
                            <h3 className="font-serif text-[25px] sm:text-[27px] font-bold text-[#1c1c1c]">100 KG+</h3>
                            <p className="mt-3 text-[15px] sm:text-base leading-7 text-[#707070]">Ideal for small businesses and restaurants.</p>
                        </div>

                        <div className="group relative min-h-[270px] overflow-hidden rounded-[28px] bg-white/90 backdrop-blur-sm px-7 py-7 shadow-[0_10px_35px_rgba(80,45,30,0.07)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(80,45,30,0.13)]">
                            <div className="absolute left-0 top-0 h-16 w-16 rounded-tl-[28px] border-t-[4px] border-l-[4px] border-[#d56e4f] pointer-events-none" />
                            <div className="absolute right-0 bottom-0 h-16 w-16 rounded-br-[28px] border-b-[4px] border-r-[4px] border-[#d56e4f] pointer-events-none" />
                            <div className="mb-6 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#fff0e8] transition-transform duration-500 group-hover:scale-110">
                                <FaWeight className="h-8 w-8 text-[#c84d2e]" strokeWidth={1.7} />
                            </div>
                            <h3 className="font-serif text-[25px] sm:text-[27px] font-bold text-[#1c1c1c]">500 KG+</h3>
                            <p className="mt-3 text-[15px] sm:text-base leading-7 text-[#707070]">Suitable for growing brands and mid-scale production.</p>
                        </div>

                        <div className="group relative min-h-[270px] overflow-hidden rounded-[28px] bg-white/90 backdrop-blur-sm px-7 py-7 shadow-[0_10px_35px_rgba(80,45,30,0.07)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(80,45,30,0.13)]">
                            <div className="absolute left-0 top-0 h-16 w-16 rounded-tl-[28px] border-t-[4px] border-l-[4px] border-[#8a9470] pointer-events-none" />
                            <div className="absolute right-0 bottom-0 h-16 w-16 rounded-br-[28px] border-b-[4px] border-r-[4px] border-[#8a9470] pointer-events-none" />
                            <div className="mb-6 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#f0f1e7] transition-transform duration-500 group-hover:scale-110">
                                <FaWeightScale className="h-8 w-8 text-[#747f5c]" strokeWidth={1.7} />
                            </div>
                            <h3 className="font-serif text-[25px] sm:text-[27px] font-bold text-[#1c1c1c]">1,000 KG+</h3>
                            <p className="mt-3 text-[15px] sm:text-base leading-7 text-[#707070]">Designed for large manufacturing requirements.</p>
                        </div>

                        <div className="group relative min-h-[270px] overflow-hidden rounded-[28px] bg-white/90 backdrop-blur-sm px-7 py-7 shadow-[0_10px_35px_rgba(80,45,30,0.07)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(80,45,30,0.13)]">
                            <div className="absolute left-0 top-0 h-16 w-16 rounded-tl-[28px] border-t-[4px] border-l-[4px] border-[#a52d55] pointer-events-none" />
                            <div className="absolute right-0 bottom-0 h-16 w-16 rounded-br-[28px] border-b-[4px] border-r-[4px] border-[#a52d55] pointer-events-none" />
                            <div className="mb-6 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#f8e8ed] transition-transform duration-500 group-hover:scale-110">
                                <FiSettings className="h-8 w-8 text-[#9d3154]" strokeWidth={1.7} />
                            </div>
                            <h3 className="font-serif text-[25px] sm:text-[27px] font-bold text-[#1c1c1c]">Custom Volumes</h3>
                            <p className="mt-3 text-[15px] sm:text-base leading-7 text-[#707070]">Tailored to your specific business needs.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============ GALLERY GRID ============ */}
            <section className="relative w-full overflow-hidden bg-[#FBF8F1]">
                <div className="absolute left-0 top-0 z-30 pointer-events-none w-[110px] sm:w-[170px] md:w-[210px] lg:w-[270px] xl:w-[310px] h-[150px] sm:h-[210px] md:h-[250px] lg:h-[300px] xl:h-[340px]">
                    <Image src="/lefttree.png" alt="Decorative left leaf" fill priority className="object-contain object-left-top" />
                </div>
                <div className="absolute right-0 top-0 z-30 pointer-events-none w-[110px] sm:w-[170px] md:w-[210px] lg:w-[270px] xl:w-[310px] h-[150px] sm:h-[210px] md:h-[250px] lg:h-[300px] xl:h-[340px]">
                    <Image src="/righttree.png" alt="Decorative right leaf" fill priority className="object-contain object-right-top" />
                </div>

                <div className="relative z-20 w-full">
                    <div className="text-center pt-12 sm:pt-16 md:pt-18 lg:pt-14 pb-7 sm:pb-9">
                        <div className="flex items-center justify-center gap-3 sm:gap-5">
                            <span className="hidden sm:block w-12 md:w-20 lg:w-24 h-[1px] bg-[#D8AAA0]" />
                            <span className="inline-flex items-center justify-center px-5 sm:px-6 py-2 rounded-full bg-[#F7D8D3] text-[#A50808] text-[10px] sm:text-xs font-extrabold tracking-[0.22em] uppercase">
                                From Farms To Jars
                            </span>
                            <span className="hidden sm:block w-12 md:w-20 lg:w-24 h-[1px] bg-[#D8AAA0]" />
                        </div>
                        <h2 className="mt-4 sm:mt-5 text-[30px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[60px] leading-[1.05] font-bold tracking-tight text-forest">
                            Our Process, In Photos
                        </h2>
                    </div>

                    <div className="relative w-full h-[650px] sm:h-[700px] md:h-[730px] lg:h-[720px] xl:h-[750px]">
                        {galleryImages[0] && (
                            <div className="absolute left-[5%] sm:left-[7%] lg:left-[9%] top-[20px] w-[32%] sm:w-[31%] lg:w-[27%] h-[255px] sm:h-[300px] md:h-[330px] lg:h-[350px] xl:h-[375px] overflow-hidden rounded-[4px] shadow-[0_18px_45px_rgba(70,65,45,0.16)] z-10 transition-all duration-500 hover:-translate-y-2">
                                <Image src={galleryImages[0]} alt="Process step 1" fill priority className="object-cover transition-transform duration-700 hover:scale-105" />
                            </div>
                        )}
                        {galleryImages[1] && (
                            <div className="absolute left-[4%] sm:left-[5%] lg:left-[4%] top-[290px] sm:top-[340px] md:top-[375px] lg:top-[360px] w-[17%] sm:w-[16%] lg:w-[13%] h-[190px] sm:h-[215px] md:h-[235px] lg:h-[245px] xl:h-[260px] overflow-hidden rounded-[4px] shadow-[0_16px_38px_rgba(70,65,45,0.18)] z-40 transition-all duration-500 hover:-translate-y-2">
                                <Image src={galleryImages[1]} alt="Process step 2" fill className="object-cover transition-transform duration-700 hover:scale-105" />
                            </div>
                        )}
                        {galleryImages[2] && (
                            <div className="absolute left-[31%] sm:left-[32%] lg:left-[31%] top-[190px] sm:top-[210px] md:top-[225px] lg:top-[190px] w-[16%] sm:w-[15%] lg:w-[13%] h-[195px] sm:h-[220px] md:h-[235px] lg:h-[250px] xl:h-[270px] overflow-hidden rounded-[4px] shadow-[0_18px_40px_rgba(70,65,45,0.20)] z-40 transition-all duration-500 hover:-translate-y-2">
                                <Image src={galleryImages[2]} alt="Process step 3" fill className="object-cover transition-transform duration-700 hover:scale-105" />
                            </div>
                        )}
                        {galleryImages[3] && (
                            <div className="absolute left-[50%] -translate-x-1/2 top-[20px] w-[29%] sm:w-[29%] lg:w-[27%] h-[395px] sm:h-[440px] md:h-[465px] lg:h-[475px] xl:h-[500px] overflow-hidden rounded-[5px] shadow-[0_24px_60px_rgba(70,65,45,0.20)] z-20 transition-all duration-500 hover:-translate-y-2">
                                <Image src={galleryImages[3]} alt="Process step 4" fill className="object-cover transition-transform duration-700 hover:scale-[1.03]" />
                            </div>
                        )}
                        {galleryImages[4] && (
                            <div className="absolute right-[10%] sm:right-[11%] lg:right-[12%] top-[65px] w-[27%] sm:w-[26%] lg:w-[24%] h-[205px] sm:h-[225px] md:h-[245px] lg:h-[250px] xl:h-[270px] overflow-hidden rounded-[4px] shadow-[0_20px_45px_rgba(70,65,45,0.18)] z-40 transition-all duration-500 hover:-translate-y-2">
                                <Image src={galleryImages[4]} alt="Process step 5" fill className="object-cover transition-transform duration-700 hover:scale-105" />
                            </div>
                        )}
                        {galleryImages[5] && (
                            <div className="absolute right-[2%] sm:right-[3%] lg:right-[3%] top-[295px] sm:top-[320px] md:top-[345px] lg:top-[315px] w-[17%] sm:w-[16%] lg:w-[13%] h-[235px] sm:h-[250px] md:h-[270px] lg:h-[270px] xl:h-[290px] overflow-hidden rounded-[4px] shadow-[0_18px_42px_rgba(70,65,45,0.20)] z-50 transition-all duration-500 hover:-translate-y-2">
                                <Image src={galleryImages[5]} alt="Process step 6" fill className="object-cover transition-transform duration-700 hover:scale-105" />
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* ============ DISCUSSION POINTS ============ */}
            <section className="relative w-full bg-white py-20 sm:py-24 overflow-hidden">
                <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
                    <div className="mb-12 sm:mb-16">
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-3 mb-5">
                                <span className="w-9 h-[2px] bg-[#3d7c42]"></span>
                                <span className="text-[#3d7c42] font-bold tracking-[0.18em] text-[10px] sm:text-xs uppercase">CUSTOM REQUIREMENTS</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-[46px] leading-[1.08] font-bold text-[#17361d] tracking-tight">
                                Your Requirement Isn&apos;t Always Standard
                            </h2>
                            <p className="mt-5 sm:mt-6 text-sm sm:text-[15px] text-gray-500 leading-7 max-w-xl">
                                Different businesses need different specifications. Standard product or custom requirement — let&apos;s discuss it.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                        <div className="lg:col-span-5 relative">
                            <div className="relative w-full overflow-hidden rounded-[28px] bg-[#f1f5ef]">
                                <video src="/logo-vidio.mp4" autoPlay muted loop playsInline preload="metadata" className="block w-full h-auto rounded-[28px]" />
                            </div>
                        </div>

                        <div className="lg:col-span-7 relative lg:pl-5">
                            <div className="absolute left-[24px] top-5 bottom-5 w-[55px] hidden sm:block pointer-events-none">
                                <svg className="w-full h-full" viewBox="0 0 55 520" fill="none" preserveAspectRatio="none">
                                    <path d="M 28 0 C 5 80, 5 120, 28 160 C 50 200, 50 280, 28 320 C 5 360, 5 440, 28 520" stroke="#b9cfb6" strokeWidth="1.5" strokeDasharray="4 6" />
                                </svg>
                            </div>

                            <div className="relative z-10 space-y-8 sm:space-y-10">
                                {discussionPoints.map((point, index) => {
                                    const Icon = point.icon;
                                    return (
                                        <div key={index} className="relative flex items-start gap-5 sm:gap-7 group">
                                            <div className="relative z-10 shrink-0">
                                                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#edf5eb] border border-[#c8ddc5] flex items-center justify-center transition-all duration-300 group-hover:bg-[#34783c] group-hover:border-[#34783c]">
                                                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#34783c] group-hover:text-white transition-colors duration-300" />
                                                </div>
                                            </div>

                                            <div className="flex-1 pt-0.5">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.2em] text-[#82a481]">0{index + 1}</span>
                                                    <span className="w-7 h-px bg-[#c4d6c1]"></span>
                                                </div>
                                                <h3 className="text-base sm:text-lg font-bold text-[#18371e] mb-2 group-hover:text-[#34783c] transition-colors duration-300">{point.title}</h3>
                                                <p className="text-xs sm:text-sm text-gray-500 leading-6 max-w-lg">{point.desc}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============ PRIVATE LABEL SUPPORT ============ */}
            <section className="relative w-full bg-white py-20 sm:py-24 lg:py-28 overflow-hidden">
                <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                        <div className="lg:col-span-6 relative">
                            <div className="relative max-w-[560px] mx-auto flex gap-3 sm:gap-4 items-center justify-center">
                                <div className="absolute -left-6 -bottom-6 w-28 h-28 rounded-full bg-[#edf6e9] -z-10"></div>
                                <div className="absolute -right-5 -top-5 w-24 h-24 rounded-full border border-[#d5e5d1] -z-10"></div>

                                <div className="flex flex-col gap-3 sm:gap-4 w-1/2">
                                    <div className="relative h-[150px] sm:h-[185px] lg:h-[210px] overflow-hidden rounded-[36px_10px_10px_10px] group shadow-sm">
                                        <Image src="/Mediterranean Sun-Dried Tomato Platter.jpeg" alt="Product sourcing" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                    </div>
                                    <div className="relative h-[150px] sm:h-[185px] lg:h-[210px] overflow-hidden rounded-[10px_10px_10px_36px] group shadow-sm">
                                        <Image src="/manufacturing/5.png" alt="Food processing" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                    </div>
                                </div>

                                <div className="w-1/2">
                                    <div className="relative h-[314px] sm:h-[384px] lg:h-[434px] overflow-hidden rounded-[12px_36px_36px_12px] bg-[#e8f1e5] group shadow-md">
                                        <video src="/reviewBackgreound.mp4" autoPlay muted loop playsInline preload="metadata" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                        <div className="absolute inset-0 bg-[#1e5428]/15"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-6">
                            <div className="flex items-center gap-3 mb-5">
                                <span className="w-9 h-[2px] bg-[#34783c]"></span>
                                <span className="text-[#34783c] font-bold tracking-[0.16em] text-[10px] sm:text-xs uppercase">🏷️ PRIVATE LABEL SUPPORT</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-[44px] leading-[1.08] font-bold text-[#17361d] tracking-tight max-w-xl">
                                Your Brand. <br />
                                Your Packaging. <br />
                                <span className="text-[#34783c]">Your Product.</span>
                            </h2>
                            <p className="mt-5 text-sm sm:text-[15px] text-gray-500 leading-7 max-w-lg">
                                For applicable private-label projects, Drymato can support requirements across:
                            </p>

                            <div className="mt-7 sm:mt-8 space-y-4">
                                <div className="flex items-center gap-4 group">
                                    <div className="w-11 h-11 rounded-full bg-[#edf5eb] border border-[#c9ddc5] flex items-center justify-center shrink-0 group-hover:bg-[#34783c] transition-all duration-300">
                                        <FaSearch className="w-4 h-4 text-[#34783c] group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-[#24452a] group-hover:text-[#34783c] transition-colors">Product Sourcing</h3>
                                        <p className="text-[11px] text-gray-400 mt-0.5">Sourcing aligned with your product requirement</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 group">
                                    <div className="w-11 h-11 rounded-full bg-[#edf5eb] border border-[#c9ddc5] flex items-center justify-center shrink-0 group-hover:bg-[#34783c] transition-all duration-300">
                                        <FaCogs className="w-4 h-4 text-[#34783c] group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-[#24452a] group-hover:text-[#34783c] transition-colors">Processing</h3>
                                        <p className="text-[11px] text-gray-400 mt-0.5">Processing based on the required specification</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 group">
                                    <div className="w-11 h-11 rounded-full bg-[#edf5eb] border border-[#c9ddc5] flex items-center justify-center shrink-0 group-hover:bg-[#34783c] transition-all duration-300">
                                        <FaSun className="w-4 h-4 text-[#34783c] group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-[#24452a] group-hover:text-[#34783c] transition-colors">Dehydration</h3>
                                        <p className="text-[11px] text-gray-400 mt-0.5">Dehydration for your intended product format</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 group">
                                    <div className="w-11 h-11 rounded-full bg-[#edf5eb] border border-[#c9ddc5] flex items-center justify-center shrink-0 group-hover:bg-[#34783c] transition-all duration-300">
                                        <FaBoxes className="w-4 h-4 text-[#34783c] group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-[#24452a] group-hover:text-[#34783c] transition-colors">Bulk Supply</h3>
                                        <p className="text-[11px] text-gray-400 mt-0.5">Bulk quantities prepared for your business</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 group">
                                    <div className="w-11 h-11 rounded-full bg-[#edf5eb] border border-[#c9ddc5] flex items-center justify-center shrink-0 group-hover:bg-[#34783c] transition-all duration-300">
                                        <FaBoxOpen className="w-4 h-4 text-[#34783c] group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-[#24452a] group-hover:text-[#34783c] transition-colors">Packaging</h3>
                                        <p className="text-[11px] text-gray-400 mt-0.5">Packaging options suited to your project</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 group">
                                    <div className="w-11 h-11 rounded-full bg-[#edf5eb] border border-[#c9ddc5] flex items-center justify-center shrink-0 group-hover:bg-[#34783c] transition-all duration-300">
                                        <FaTag className="w-4 h-4 text-[#34783c] group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-[#24452a] group-hover:text-[#34783c] transition-colors">Custom Label</h3>
                                        <p className="text-[11px] text-gray-400 mt-0.5">Your brand identity carried through the product</p>
                                    </div>
                                </div>
                            </div>

                            <p className="mt-7 text-xs sm:text-sm text-gray-500 leading-6 max-w-lg">
                                This makes Drymato suitable for businesses looking to develop their own dehydrated food or ingredient range.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============ FLEXIBLE PACKAGING SECTION ============ */}
            <section className="w-full bg-white py-14 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-[1400px] mx-auto">
                    <div className="flex flex-col items-center text-center mb-12">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="w-9 h-[2px] bg-[#a50808]"></span>
                            <span className="text-[#a50808] font-bold tracking-[0.18em] text-[10px] sm:text-xs uppercase">07. FLEXIBLE PACKAGING</span>
                            <span className="w-9 h-[2px] bg-[#a50808]"></span>
                        </div>
                        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-bold text-gray-900 tracking-tight mb-3">
                            Packaging Around Your Application
                        </h2>
                        <p className="text-sm sm:text-base text-gray-600 max-w-xl">
                            Different buyers need different formats. We can discuss:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                        {flexiblePackagingPoints.map((card, index) => {
                            const IconComponent = card.icon;
                            return (
                                <div key={index} className="group relative cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-xl flex flex-col justify-between h-full" style={{ backgroundColor: card.bgColor, borderRadius: "32px 85px 28px 28px", minHeight: "280px" }}>
                                    <div className="p-6 sm:p-7 flex flex-col justify-between h-full relative z-10">
                                        <div>
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: "rgba(255,255,255,0.6)" }}>
                                                    <IconComponent className="w-5 h-5" style={{ color: card.iconColor }} />
                                                </div>
                                                <span className="text-xs font-black tracking-widest text-gray-400">0{index + 1}</span>
                                            </div>

                                            <h3 className="font-serif text-lg font-bold mb-2 leading-snug" style={{ color: card.textColor }}>{card.title}</h3>
                                            <p className="text-xs sm:text-[13px] leading-relaxed font-medium" style={{ color: card.descColor }}>{card.desc}</p>
                                        </div>

                                        <div className="mt-6 pt-2">
                                            <span className="inline-block px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wider uppercase transition-all duration-200 group-hover:scale-105 shadow-xs whitespace-nowrap" style={{ border: `2px solid ${card.buttonBorder}`, color: card.buttonText, backgroundColor: "transparent" }}>
                                                DISCUSS FORMAT
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ============ QUALITY AT EVERY STAGE SECTION ============ */}
            <section className="relative w-full bg-[#faf6f0] py-20 sm:py-24 lg:py-28 overflow-hidden font-poppins">
                <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        <div className="lg:col-span-6 space-y-8">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="w-9 h-[2px] bg-[#a50808]"></span>
                                    <span className="text-[#a50808] font-bold tracking-[0.18em] text-[10px] sm:text-xs uppercase">08. QUALITY AT EVERY STAGE</span>
                                </div>
                                <h2 className="text-3xl sm:text-4xl lg:text-[42px] leading-[1.1] font-bold text-gray-900 tracking-tight mb-4">
                                    Quality Is a Process, <br />
                                    <span className="text-[#a50808]">Not a Final Check.</span>
                                </h2>
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-sans">
                                    Our quality approach begins with raw-material selection and continues through processing, dehydration and packaging.
                                </p>
                            </div>

                            <div className="space-y-4">
                                {qualitySteps.map((item, index) => (
                                    <div key={index} className="flex items-start gap-4 group">
                                        <div className="w-10 h-10 rounded-xl bg-white border border-red-100 shadow-xs flex items-center justify-center text-[#a50808] font-bold text-xs shrink-0 group-hover:bg-[#a50808] group-hover:text-white transition-colors duration-300">
                                            {item.step}
                                        </div>
                                        <div className="pt-1">
                                            <h3 className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-[#a50808] transition-colors">{item.title}</h3>
                                            <p className="text-xs sm:text-sm text-gray-500">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-4 border-t border-gray-200/60">
                                <p className="text-xs sm:text-sm text-gray-500 italic font-sans">
                                    * Where applicable, product specifications and documentation can be discussed according to buyer requirements.
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-6 relative flex items-center justify-center">
                            <div className="absolute w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] bg-[#f2e6d9] rounded-full blur-2xl opacity-60 -z-10"></div>
                            <div className="relative w-full max-w-[480px] h-[450px] sm:h-[520px] flex items-center justify-center">
                                <div className="relative w-[85%] h-[85%] rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] bg-white border-4 border-white">
                                    <Image src="/wholesale_bulk_packaging.png" alt="Drymato Quality Packaging" fill className="object-cover object-center transform hover:scale-105 transition-transform duration-700" />
                                </div>
                                <div className="absolute left-2 top-16 sm:top-20 bg-[#24452a] text-white text-[11px] sm:text-xs font-medium px-4 py-2.5 rounded-2xl shadow-xl max-w-[180px] animate-float-slow border border-white/10">
                                    ✨ 100% Food-Grade Sealed Packaging
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ============ 09. INDIA-BASED SOURCING ============ */}
            <section className="relative w-full bg-[#fff] py-16 md:py-20 px-6 md:px-10 lg:px-14 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

                        {/* LEFT — eyebrow, heading, description, CTA */}
                        <div className="w-full lg:w-[40%] lg:shrink-0 flex flex-col items-center lg:items-start text-center lg:text-left">
                            <div className="flex items-center gap-2 mb-3">
                                <Leaf className="w-4 h-4 text-forest" strokeWidth={2} />
                                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-forest">
                                    India-Based Sourcing
                                </span>
                            </div>

                            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.25rem] font-medium text-foreground leading-[1.2] tracking-tight mb-5">
                                Sourcing From India.
                                <br />
                                Supplying Wider Markets.
                            </h2>

                            <p className="text-sm text-foreground/65 leading-[1.75] max-w-md mb-8">
                                With our base in Rajasthan and access to sourcing channels for fruits, vegetables and herbs, Drymato is building an India-based supply network for dehydrated ingredients.
                            </p>

                            <a
                                href="/contact"
                                className="group/btn inline-flex items-center gap-2.5 bg-forest hover:bg-forest-light border border-forest hover:border-forest-light text-white px-7 py-3 rounded-full text-xs font-extrabold tracking-widest transition-all duration-300"
                            >
                                Connect With Us
                                <FaArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" strokeWidth={2.5} />
                            </a>
                        </div>

                        {/* RIGHT — Focus areas grid layout with divider */}
                        <div className="w-full lg:flex-1 flex flex-col sm:flex-row gap-8 sm:gap-0 bg-white/60 p-8 sm:p-10 rounded-3xl border border-sage/20 shadow-sm">

                            {/* Left Column of Markets */}
                            <div className="flex flex-col gap-6 sm:pr-8 lg:pr-10 w-full sm:w-1/2">
                                <div className="border-b border-sage/15 pb-4">
                                    <span className="text-[10px] font-extrabold tracking-widest text-forest uppercase block mb-1">Sector 01</span>
                                    <h3 className="text-lg font-bold text-foreground">HORECA</h3>
                                    <p className="text-xs text-foreground/60 mt-1">Supplying hotels, restaurants, and commercial kitchens with reliable ingredients.</p>
                                </div>
                                <div className="border-b border-sage/15 pb-4">
                                    <span className="text-[10px] font-extrabold tracking-widest text-forest uppercase block mb-1">Sector 02</span>
                                    <h3 className="text-lg font-bold text-foreground">Food Manufacturing</h3>
                                    <p className="text-xs text-foreground/60 mt-1">Custom cut sizes, powders, and flakes for industrial processing lines.</p>
                                </div>
                                <div>
                                    <span className="text-[10px] font-extrabold tracking-widest text-forest uppercase block mb-1">Sector 03</span>
                                    <h3 className="text-lg font-bold text-foreground">Wholesale</h3>
                                    <p className="text-xs text-foreground/60 mt-1">Bulk quantities tailored for distributors and regional wholesalers.</p>
                                </div>
                            </div>

                            {/* Vertical Divider (desktop only) */}
                            <div className="hidden sm:block w-px bg-sage/25 shrink-0 my-2" />

                            {/* Right Column of Markets */}
                            <div className="flex flex-col gap-6 sm:pl-8 lg:pl-10 w-full sm:w-1/2 justify-center">
                                <div className="border-b border-sage/15 pb-6">
                                    <span className="text-[10px] font-extrabold tracking-widest text-forest uppercase block mb-1">Sector 04</span>
                                    <h3 className="text-lg font-bold text-foreground">Private Label</h3>
                                    <p className="text-xs text-foreground/60 mt-1">End-to-end support for brands looking to package under their own identity.</p>
                                </div>
                                <div>
                                    <span className="text-[10px] font-extrabold tracking-widest text-forest uppercase block mb-1">Sector 05</span>
                                    <h3 className="text-lg font-bold text-foreground">International Buyers</h3>
                                    <p className="text-xs text-foreground/60 mt-1">Export-ready standards and documentation built for global markets.</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* ============ 10. ONE PARTNER FOR MULTIPLE REQUIREMENTS ============ */}
            <section className="relative w-full bg-[#faf6f0] py-20 sm:py-24 overflow-hidden">
                <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-6 space-y-6">
                            <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full text-[#a50808] text-xs font-extrabold uppercase tracking-widest shadow-xs">
                                10. ONE PARTNER FOR MULTIPLE REQUIREMENTS
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-gray-900 tracking-tight leading-tight">
                                Need More Than One Ingredient?
                            </h2>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Instead of managing multiple suppliers for every ingredient, businesses can discuss multiple dehydrated requirements with Drymato.
                            </p>
                            <div className="p-6 rounded-3xl bg-white shadow-sm border border-gray-100 space-y-4">
                                <p className="text-xs font-bold uppercase tracking-widest text-[#a50808]">For example:</p>
                                <div className="text-sm font-bold text-gray-800 bg-red-50/50 p-3 rounded-xl border border-red-100/50">
                                    Lemon + Orange + Pineapple
                                </div>
                                <div className="text-center text-xs font-bold text-gray-400">or</div>
                                <div className="text-sm font-bold text-gray-800 bg-red-50/50 p-3 rounded-xl border border-red-100/50">
                                    Tomato + Onion + Garlic + Herbs
                                </div>
                                <div className="text-center text-xs font-bold text-gray-400">or</div>
                                <div className="text-sm font-bold text-gray-800 bg-red-50/50 p-3 rounded-xl border border-red-100/50">
                                    Fruit Powders + Vegetable Powders + Flakes
                                </div>
                            </div>
                            <p className="text-base font-bold text-gray-900 pt-2">
                                One conversation. Multiple ingredient requirements.
                            </p>
                        </div>

                        {/* ============ OUR CORE DIFFERENCE (6 Cards) ============ */}
                        <div className="lg:col-span-6">
                            <div className="mb-6 text-center lg:text-left">
                                <span className="text-xs font-extrabold tracking-widest uppercase text-[#a50808] bg-white px-4 py-1.5 rounded-full shadow-xs">
                                    OUR CORE DIFFERENCE
                                </span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {coreDifferenceCards.map((card, idx) => {
                                    const CardIcon = card.icon;
                                    return (
                                        <div
                                            key={idx}
                                            className="group relative bg-white p-6 rounded-[28px] shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col justify-between"
                                            style={{ minHeight: "170px" }}
                                        >
                                            <div className="absolute left-0 top-0 h-10 w-10 rounded-tl-[28px] border-t-[3px] border-l-[3px] pointer-events-none" style={{ borderColor: card.borderColor }} />
                                            <div className="absolute right-0 bottom-0 h-10 w-10 rounded-br-[28px] border-b-[3px] border-r-[3px] pointer-events-none" style={{ borderColor: card.borderColor }} />

                                            <div>
                                                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: card.bgColor }}>
                                                    <CardIcon className="w-4 h-4" style={{ color: card.iconColor }} />
                                                </div>
                                                <h3 className="font-bold text-sm sm:text-base text-gray-900 mb-1">{card.title}</h3>
                                                <p className="text-xs text-gray-500 leading-relaxed">{card.desc}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============ FINAL SECTION (CLOSING BANNER) ============ */}
            {/* ============ FINAL SECTION (CLOSING BANNER) ============ */}
            <section className="relative w-full py-20 bg-white">
                <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">
                    <div className="relative bg-[#a50808] rounded-[2.5rem] p-10 sm:p-14 overflow-hidden reveal-fade-up shadow-2xl">
                        <div className="relative z-10 max-w-lg space-y-5">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                                Looking for a Reliable Dehydrated Ingredient Supply Partner?
                            </h2>
                            <p className="text-white/90 font-normal text-sm sm:text-base leading-relaxed">
                                Tell us what you need — product, quantity, format, packaging and application. We&apos;ll discuss the most suitable supply approach based on your requirement and product feasibility.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-2">
                                <Link href="/contact" className="bg-white text-[#a50808] py-3.5 px-8 rounded-full font-black flex items-center gap-3 hover:bg-gray-100 transition-colors duration-300 shadow-md text-xs tracking-widest uppercase w-max">
                                    Request a Quote <FaArrowRight className="w-3 h-3" />
                                </Link>
                                <Link href="/product" className="border-2 border-white text-white py-3.5 px-8 rounded-full font-black hover:bg-white/10 transition-colors duration-300 text-xs tracking-widest uppercase w-max">
                                    Explore Products
                                </Link>
                            </div>
                        </div>

                        <div className="hidden sm:block absolute right-6 bottom-0 w-40 h-40 lg:w-52 lg:h-52 rounded-full overflow-hidden border-4 border-white/20 shadow-xl translate-y-6">
                            <Image src="/dry-tomato-jaarspread.png" alt="Drymato product" fill className="object-cover" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mt-8">
                        <Link href="https://wa.me/918000897238" target="_blank" className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-white border border-gray-200 hover:border-[#a50808]/40 shadow-sm transition-all duration-300">
                            <FaPhone className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-sm text-gray-800 font-black">+91 8000897238</span>
                        </Link>
                        <Link href="mailto:hello@drymato.com" className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-white border border-gray-200 hover:border-[#a50808]/40 shadow-sm transition-all duration-300">
                            <FaEnvelope className="w-3.5 h-3.5 text-[#a50808]" />
                            <span className="text-sm text-gray-800 font-black">hello@drymato.com</span>
                        </Link>
                        <Link href="https://instagram.com/drymato_" target="_blank" className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-white border border-gray-200 hover:border-[#a50808]/40 shadow-sm transition-all duration-300">
                            <FaInstagram className="w-3.5 h-3.5 text-rose-600" />
                            <span className="text-sm text-gray-800 font-black">@drymato_</span>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}