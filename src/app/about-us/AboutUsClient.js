// "use client";

// import { useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { FaHeart, FaSeedling, FaUtensils, FaArrowRight, FaQuoteLeft, FaShieldAlt, FaLeaf, FaClock, FaBoxOpen, FaFire, FaUndoAlt } from "react-icons/fa";
// import PreFooterBanner from "@/components/PreFooterBanner";

// const FAMOUS_PRODUCTS = [
//     {
//         id: 4,
//         title: "Olive Oil Marinated",
//         subtitle: "(Big Jar)",
//         image: "/jaar/oliver-oil-smalljaar.png",
//         hoverImage: "/jaar/oiled-opened-jaarSpread.png",
//         stars: 5,
//         feature: "Extra Virgin Olive Oil",
//         description: "Our premium olive oil marinated sun-dried tomatoes in a generous sharing big jar."
//     },
//     {
//         id: 2,
//         title: "Dehydrated Tomatoes",
//         subtitle: "(Big Jar)",
//         image: "/jaar/jaarslightroatateview.png",
//         hoverImage: "/dry-tomato-jaarspread.png",
//         stars: 5,
//         feature: "100% Natural",
//         description: "Our signature sun-dried tomatoes cured under the sun, packed in a generous family-sized big jar."
//     },
//     {
//         id: 7,
//         title: "Powdered Tomatoes",
//         subtitle: "(Seasoning Powder)",
//         image: "/jaar/powder-pouch-removebg.png",
//         hoverImage: "/jaar/spreading powder.png",
//         stars: 5,
//         feature: "100% Tomato Powder",
//         description: "Concentrated sun-dried tomato powder, perfect for gourmet kitchen seasoning and cooking."
//     }
// ];

// export default function AboutUsClient() {
//     // Scroll Observer for staggered scroll-reveal animations
//     useEffect(() => {
//         const revealObserver = new IntersectionObserver((entries) => {
//             const intersectingEntries = [];

//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     intersectingEntries.push(entry.target);
//                 } else {
//                     entry.target.classList.remove("is-revealed");
//                     entry.target.style.transitionDelay = "";
//                 }
//             });

//             if (intersectingEntries.length > 0) {
//                 // Sort intersecting elements by visual page order
//                 intersectingEntries.sort((a, b) => {
//                     const rectA = a.getBoundingClientRect();
//                     const rectB = b.getBoundingClientRect();
//                     if (Math.abs(rectA.top - rectB.top) < 15) {
//                         return rectA.left - rectB.left;
//                     }
//                     return rectA.top - rectB.top;
//                 });

//                 // Apply staggered delays
//                 intersectingEntries.forEach((el, index) => {
//                     const isCard = el.classList.contains("about-card") || el.classList.contains("story-card");
//                     const delayStep = isCard ? 150 : 200;
//                     el.style.transitionDelay = `${index * delayStep}ms`;
//                     el.classList.add("is-revealed");
//                 });
//             }
//         }, {
//             root: null,
//             rootMargin: "-6% 0px -6% 0px",
//             threshold: 0.05
//         });

//         const animatedElements = document.querySelectorAll(
//             ".reveal-fade-up, .reveal-fade-left, .reveal-fade-right, .about-card, .story-card, .jar-reveal-left, .jar-reveal-right"
//         );
//         animatedElements.forEach((el) => revealObserver.observe(el));

//         return () => {
//             animatedElements.forEach((el) => revealObserver.unobserve(el));
//         };
//     }, []);

//     const values = [
//         {
//             title: "100% Preservative Free",
//             desc: "We never use artificial colors, chemical sulfites, or artificial additives. Just pure sun-cured tomatoes kept fresh by natural dehydration.",
//             icon: FaShieldAlt,
//             iconColor: "text-emerald-500",
//             bgColor: "bg-emerald-50/50 border-emerald-100/40"
//         },
//         {
//             title: "Culinary Speed & Zero Waste",
//             desc: "Skip the mess of washing, peeling, and chopping. Every jar is pre-sorted, pre-washed, and 100% usable to reduce kitchen labor hours.",
//             icon: FaUtensils,
//             iconColor: "text-[#a50808]",
//             bgColor: "bg-red-50/50 border-red-100/40"
//         },
//         {
//             title: "Sustainable Agriculture",
//             desc: "We partner directly with family farms that practice sustainable agriculture, respecting natural crop cycles to yield premium tomatoes.",
//             icon: FaSeedling,
//             iconColor: "text-amber-500",
//             bgColor: "bg-amber-50/50 border-amber-100/40"
//         }
//     ];

//     return (
//         <div className="w-full relative overflow-hidden bg-[#faf6f0]">
//             {/* Scroll Reveal Styles Injected Locally */}
//             <style dangerouslySetInnerHTML={{
//                 __html: `
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
//                 .about-card {
//                     opacity: 0;
//                     transform: translateY(30px);
//                     transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s, box-shadow 0.4s;
//                 }
//                 .story-card {
//                     opacity: 0;
//                     transform: translateY(30px);
//                     transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s, box-shadow 0.4s;
//                 }
//                 .reveal-fade-up.is-revealed,
//                 .reveal-fade-left.is-revealed,
//                 .reveal-fade-right.is-revealed {
//                     opacity: 1;
//                     transform: none !important;
//                 }
//                 .about-card.is-revealed,
//                 .story-card.is-revealed {
//                     opacity: 1;
//                     transform: translateY(0) !important;
//                 }
//                 .story-card.is-revealed:hover {
//                     transform: translateY(-12px) !important;
//                 }
//                 .image-zoom {
//                     transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) !important;
//                 }
//                 .zoom-wrapper:hover .image-zoom,
//                 .story-card:hover .image-zoom {
//                     transform: scale(1.08) !important;
//                 }
//                 .jar-reveal-left {
//                     opacity: 0;
//                     transform: translateY(-50%) translateX(-150px);
//                     transition: opacity 1.6s cubic-bezier(0.16, 1, 0.3, 1), transform 1.6s cubic-bezier(0.16, 1, 0.3, 1);
//                 }
//                 .jar-reveal-right {
//                     opacity: 0;
//                     transform: translateY(-50%) translateX(150px);
//                     transition: opacity 1.6s cubic-bezier(0.16, 1, 0.3, 1), transform 1.6s cubic-bezier(0.16, 1, 0.3, 1);
//                 }
//                 .jar-reveal-left.is-revealed {
//                     opacity: 1;
//                     transform: translateY(-50%) translateX(0) !important;
//                 }
//                 .jar-reveal-right.is-revealed {
//                     opacity: 1;
//                     transform: translateY(-50%) translateX(0) !important;
//                 }
//             `}} />

//             {/* Ambient Background Tree */}
//             <div className="absolute top-12 left-[-120px] w-64 h-64 opacity-[0.05] pointer-events-none select-none z-0">
//                 <Image src="/tomatolefttree.png" alt="botanical leaf decoration" width={400} height={400} className="object-contain" />
//             </div>


//             {/* NEW SECTION: VARIETY OF FLAVOURS (Circular cropped images on sides) */}
//             <section className="relative w-full bg-white pt-24 pb-24 md:pt-32 md:pb-32 overflow-hidden my-8">
//                 {/* Top Wave Divider */}
//                 <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-20">
//                     <svg className="relative block w-full h-[40px] md:h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M0,0 C150,90 350,20 500,60 C650,100 850,30 1000,70 C1100,90 1150,100 1200,80 L1200,0 L0,0 Z" fill="#faf6f0" />
//                     </svg>
//                 </div>

//                 {/* Bottom Wave Divider */}
//                 <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
//                     <svg className="relative block w-full h-[40px] md:h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M0,120 C150,30 350,100 500,60 C650,20 850,90 1000,50 C1100,30 1150,20 1200,40 L1200,120 L0,120 Z" fill="#faf6f0" />
//                     </svg>
//                 </div>

//                 {/* Left Circular Product Showcase (halfway offscreen with floating jar) */}
//                 <div className="hidden lg:block absolute left-[-220px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] z-10 hover:scale-[1.03] transition-transform duration-500 group/left">
//                     {/* The Circular Image container */}
//                     <div className="w-full h-full rounded-full overflow-hidden border-[8px] border-[#fff8f0] shadow-2xl relative">
//                         <Image
//                             src="/use_pizza.png"
//                             alt="Delicious gourmet pizza using sun-dried tomatoes"
//                             fill
//                             className="object-cover"
//                         />
//                     </div>
//                     {/* Floating Jar: Half in, half out on right */}
//                     <div className="absolute -right-[250px] top-1/2 w-[450px] h-[450px] z-25 pointer-events-none drop-shadow-[0_15px_25px_rgba(0,0,0,0.22)] jar-reveal-left">
//                         <div className="w-full h-full relative animate-float-slow">
//                             <Image
//                                 src="/jaar/sunflower-oil-smalljaar.png"
//                                 alt="Drymato Olive Oil Tomato Jar"
//                                 fill
//                                 className="object-contain"
//                             />
//                         </div>
//                     </div>
//                 </div>

//                 {/* Right Circular Product Showcase (halfway offscreen with floating jar) */}
//                 <div className="hidden lg:block absolute right-[-220px] top-1/2 -translate-y-1/2 w-[440px] h-[440px] z-10 hover:scale-[1.03] transition-transform duration-500 group/right">
//                     {/* The Circular Image container */}
//                     <div className="w-full h-full rounded-full overflow-hidden border-[8px] border-[#fff8f0] shadow-2xl relative">
//                         <Image
//                             src="/use_pasta.png"
//                             alt="Gourmet pasta recipe using sun-dried tomatoes"
//                             fill
//                             className="object-cover"
//                         />
//                     </div>
//                     {/* Floating Jar: Half in, half out on left */}
//                     <div className="absolute -left-[120px] top-1/2 w-[300px] h-[450px] z-25 pointer-events-none drop-shadow-[0_15px_25px_rgba(0,0,0,0.22)] jar-reveal-right">
//                         <div className="w-full h-full relative animate-float-slow-reverse">
//                             <Image
//                                 src="/jaar/oliver-oil-smalljaar.png"
//                                 alt="Drymato Sunflower Oil Tomato Jar"
//                                 fill
//                                 className="object-contain"
//                             />
//                         </div>
//                     </div>
//                 </div>

//                 {/* Sketched outline SVGs for premium hand-drawn look */}
//                 <svg className="absolute left-[150px] sm:left-[220px] lg:left-[260px] top-[40px] w-12 h-12 text-[#a50808]/15 select-none pointer-events-none z-0 animate-float-slow" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
//                     <circle cx="12" cy="12" r="10" />
//                     <circle cx="12" cy="12" r="7.5" strokeDasharray="3 3" />
//                     <path d="M12 4.5v15M4.5 12h15" />
//                 </svg>

//                 <svg className="absolute right-[150px] sm:right-[220px] lg:right-[260px] bottom-[40px] w-12 h-12 text-orange-400/20 select-none pointer-events-none z-0 animate-float-slow-reverse" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
//                     <path d="M4 6c1.5 2 3.5 2 4 4v4c-.5 2-2.5 2-4 4h16c-1.5-2-3.5-2-4-4v-4c.5-2 2.5-2 4-6H4z" />
//                     <path d="M12 8v8" strokeDasharray="2 2" />
//                 </svg>

//                 <svg className="absolute left-[180px] sm:left-[260px] lg:left-[300px] bottom-[30px] w-8 h-8 text-emerald-500/15 select-none pointer-events-none z-0 animate-float-slow" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
//                     <path d="M12 3c0 0 4 3 4 8s-4 10-4 10-4-5-4-10 4-8 4-8z" />
//                     <path d="M12 3v18" />
//                 </svg>

//                 {/* Center Content Container */}
//                 <div className="max-w-4xl mx-auto px-6 text-center relative z-20 flex flex-col items-center justify-center min-h-[280px] sm:min-h-[360px] reveal-fade-up">
//                     {/* Badge */}
//                     <div className="flex items-center gap-2 mb-4 text-[#a50808] justify-center text-2xl sm:text-3xl font-bold font-dancing normal-case">
//                         <span className="w-1.5 h-1.5 rounded-full bg-[#a50808] animate-pulse" />
//                         <span>About Us</span>
//                         <span className="w-1.5 h-1.5 rounded-full bg-[#a50808] animate-pulse" />
//                     </div>

//                     {/* Title */}
//                     <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.25] mb-6 font-poppins max-w-2xl">
//                         Variety Of Flavours From <br />
//                         <span className="text-[#a50808]">Sun-Dried Tomatoes</span>
//                     </h2>

//                     {/* Subtitle */}
//                     <p className="text-gray-500 font-semibold text-sm sm:text-base leading-relaxed max-w-xl mb-8">
//                         It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout, revealing the true concentration of flavor in every bite.
//                     </p>

//                     {/* Order Now Button */}
//                     <Link
//                         href="/product"
//                         className="group/btn relative overflow-hidden bg-[#a50808] border-2 border-[#a50808] text-white py-3.5 px-8 rounded-full font-black flex items-center justify-center gap-3 transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 cursor-pointer z-10 w-max text-xs tracking-widest uppercase"
//                     >
//                         {/* Background bubble shape rising from bottom to top */}
//                         <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[125%] aspect-square rounded-t-[50%] bg-white translate-y-full transition-transform duration-[750ms] ease-in-out z-0 group-hover/btn:translate-y-[12%]" />

//                         <span className="relative z-10 transition-colors duration-300 group-hover/btn:text-[#a50808]">
//                             ORDER NOW
//                         </span>
//                         <span className="relative z-10 w-5 h-5 bg-white text-[#a50808] rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 group-hover/btn:bg-[#a50808] group-hover/btn:text-white transform group-hover/btn:translate-x-1 shadow-sm">
//                             <FaArrowRight className="w-2.5 h-2.5" />
//                         </span>
//                     </Link>

//                     {/* Mobile Showcase (only visible on mobile/tablet screens) */}
//                     <div className="mt-12 lg:hidden w-full max-w-md mx-auto grid grid-cols-2 gap-8 px-4 z-20">
//                         {/* Pizza Circular showcase */}
//                         <div className="flex flex-col items-center text-center relative group">
//                             <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-[#fff8f0] shadow-lg relative group-hover:scale-105 transition-transform duration-500">
//                                 <Image src="/use_pizza.png" alt="Pizza" fill className="object-cover" />
//                             </div>
//                             {/* Floating Jar */}
//                             <div className="absolute -right-2 -top-4 w-12 h-16 sm:w-16 sm:h-22 z-25 pointer-events-none drop-shadow-md animate-float-slow">
//                                 <Image src="/jaar/jaarslightroatateview.png" alt="Tomato Jar" fill className="object-contain" />
//                             </div>
//                             <span className="text-[10px] font-black uppercase tracking-widest text-gray-700 mt-3 block">Gourmet Pizza</span>
//                         </div>
//                         {/* Pasta Circular showcase */}
//                         <div className="flex flex-col items-center text-center relative group">
//                             <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-[#fff8f0] shadow-lg relative group-hover:scale-105 transition-transform duration-500">
//                                 <Image src="/use_pasta.png" alt="Pasta" fill className="object-cover" />
//                             </div>
//                             {/* Floating Jar */}
//                             <div className="absolute -left-2 -top-4 w-12 h-16 sm:w-16 sm:h-22 z-25 pointer-events-none drop-shadow-md animate-float-slow-reverse">
//                                 <Image src="/jaar/oliver-oil-smalljaar.png" alt="Tomato Jar" fill className="object-contain" />
//                             </div>
//                             <span className="text-[10px] font-black uppercase tracking-widest text-gray-700 mt-3 block">Classic Pasta</span>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* SECTION 1: HERO HEADER - Merged from Our Story */}
//             <section id="our-story" className="relative w-full pt-24 pb-24 md:pt-32 md:pb-32 bg-white z-10 overflow-hidden">
//                 {/* Top Wave Divider */}
//                 <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-20">
//                     <svg className="relative block w-full h-[40px] md:h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M0,0 C150,90 350,20 500,60 C650,100 850,30 1000,70 C1100,90 1150,100 1200,80 L1200,0 L0,0 Z" fill="#faf6f0" />
//                     </svg>
//                 </div>

//                 {/* Bottom Wave Divider */}
//                 <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
//                     <svg className="relative block w-full h-[40px] md:h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M0,120 C150,30 350,100 500,60 C650,20 850,90 1000,50 C1100,30 1150,20 1200,40 L1200,120 L0,120 Z" fill="#faf6f0" />
//                     </svg>
//                 </div>
//                 {/* Soft backdrop radial highlights */}
//                 <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-red-500/5 rounded-full filter blur-[120px] pointer-events-none" />
//                 <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] bg-orange-500/5 rounded-full filter blur-[100px] pointer-events-none" />

//                 <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

//                     {/* Left Column: Narrative (Text) */}
//                     <div className="lg:col-span-7 space-y-6 text-left reveal-fade-up">
//                         {/* Mission Tag */}
//                         <span className="text-[#a50808] font-dancing font-semibold tracking-[0.25em] text-xs uppercase bg-[#a50808]/5 border border-[#a50808]/15 px-4 py-2 rounded-full inline-flex items-center gap-2 shadow-sm w-max">
//                             <FaHeart className="w-3 h-3 animate-pulse text-[#a50808]" /> OUR MISSION
//                         </span>

//                         <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-poppins text-gray-900 leading-tight">
//                             Born from a Love for <br />
//                             <span className="text-[#a50808]">Real Tomatoes</span>
//                         </h2>

//                         <p className="text-gray-600 text-base sm:text-lg font-semibold leading-relaxed max-w-xl">
//                             At Drymato, we believe real food comes from nature and time. We handpick the freshest ripe tomatoes and naturally sun-dry them to preserve their authentic flavor, texture, and nutrition.
//                         </p>

//                         <div className="border-t border-orange-100 pt-5 max-w-xl">
//                             <p className="text-gray-500 text-sm sm:text-base font-medium leading-relaxed">
//                                 No shortcuts. No chemical preservatives. Just pure sun-dried goodness, crafted with care and delivered to your kitchen.
//                             </p>
//                         </div>
//                     </div>

//                     {/* Right Column: Visual Mockup (Images) */}
//                     <div className="lg:col-span-5 relative flex items-center justify-center h-[350px] sm:h-[480px] lg:h-[580px] xl:h-[650px] w-full reveal-fade-right">
//                         {/* Main Image: dryTomato-tiltedLeft.png */}
//                         <div className="absolute right-[-24px] sm:right-[-48px] lg:right-[-96px] xl:right-[-150px] w-[115%] sm:w-[125%] lg:w-[160%] xl:w-[180%] h-[100%] sm:h-[105%] lg:h-[120%] xl:h-[130%] z-10 hover:scale-[1.02] transition-transform duration-500">
//                             <Image
//                                 src="/spread_tomato.png"
//                                 alt="Drymato gourmet jar tilted left"
//                                 fill
//                                 className="object-contain object-right"
//                             />
//                         </div>

//                         {/* Floating Cherry Tomato Sticker */}
//                         <div className="absolute -top-6 right-0 w-16 h-16 sm:w-20 sm:h-20 z-20 opacity-80 pointer-events-none animate-float-slow-reverse">
//                             <Image
//                                 src="/tomatosticker.png"
//                                 alt="Tomato sticker asset"
//                                 fill
//                                 className="object-contain mix-blend-multiply"
//                             />
//                         </div>
//                     </div>

//                 </div>
//             </section>

//             {/* SECTION 2: THE PROBLEM WE SAW */}
//             <section className="relative w-full py-24 z-10 px-6 sm:px-8 lg:px-10 max-w-7xl mx-auto">
//                 <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

//                     {/* Left Column: Heading */}
//                     <div className="lg:col-span-5 space-y-6 reveal-fade-left">
//                         <div className="space-y-4">
//                             <span className="text-[#a50808]  font-dancing font-extrabold tracking-widest text-xs uppercase bg-red-50 px-3.5 py-1.5 rounded-full inline-block">
//                                 The Challenge
//                             </span>
//                             <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-poppins tracking-tight leading-tight">
//                                 The Problem <br />
//                                 We Wanted to Solve
//                             </h2>
//                             <p className="text-gray-600 font-semibold text-sm sm:text-base leading-relaxed">
//                                 Pantry ingredients should simplify your cooking without compromising your health. However, home cooks face two persistent kitchen hurdles:
//                             </p>
//                         </div>
//                         <div className="zoom-wrapper relative w-full h-48 sm:h-56 rounded-tl-[80px] rounded-br-[80px] rounded-tr-3xl rounded-bl-3xl overflow-hidden border border-orange-100 shadow-[0_15px_35px_rgba(165,8,8,0.05)] hidden lg:block">
//                             <Image
//                                 src="/tomatoField1.jpeg"
//                                 alt="Lush tomato farm landscape"
//                                 fill
//                                 className="object-cover image-zoom filter saturate-95 brightness-95"
//                             />
//                             <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
//                         </div>
//                     </div>

//                     {/* Right Column: Problem Cards */}
//                     <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-6 reveal-fade-right pt-6 sm:pt-0">
//                         {/* Problem Card 1 */}
//                         <div className="story-card relative bg-gradient-to-br from-white to-[#fffcfc] rounded-tl-[100px] rounded-br-[100px] rounded-tr-3xl rounded-bl-3xl border border-red-500/5 shadow-[0_15px_40px_rgba(165,8,8,0.03)] hover:shadow-[0_25px_50px_rgba(165,8,8,0.08)] hover:-translate-y-2 transition-all duration-500 group pb-8">
//                             <div className="relative -mt-8 mx-5 h-48 rounded-tl-[80px] rounded-br-[80px] rounded-tr-2xl rounded-bl-2xl overflow-hidden shadow-[0_15px_35px_rgba(165,8,8,0.12)] bg-red-50 transition-all duration-500 group-hover:shadow-[0_20px_40px_rgba(165,8,8,0.22)]">
//                                 <Image
//                                     src="/spoiledTomatos.png"
//                                     alt="Spoiling fresh tomatoes"
//                                     fill
//                                     className="object-cover image-zoom opacity-95 group-hover:opacity-100"
//                                 />
//                                 <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
//                                 <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-sm flex items-center justify-center text-[#a50808] shadow-md border border-red-100/30">
//                                     <FaUndoAlt className="w-4 h-4" />
//                                 </div>
//                             </div>
//                             <div className="px-6 pt-6 sm:px-8 sm:pt-8">
//                                 <h3 className="text-xl font-bold text-gray-900 font-poppins mb-3 leading-snug">
//                                     Fresh tomatoes spoil too quickly
//                                 </h3>
//                                 <p className="text-gray-500 text-xs sm:text-sm font-semibold leading-relaxed">
//                                     Fresh tomatoes have an incredibly short shelf life. They easily bruise, rot, and get thrown away, leading to excessive food waste in homes.
//                                 </p>
//                             </div>
//                         </div>

//                         {/* Problem Card 2 */}
//                         <div className="story-card relative bg-gradient-to-br from-white to-[#fffdfa] rounded-tr-[100px] rounded-bl-[100px] rounded-tl-3xl rounded-br-3xl border border-amber-500/5 shadow-[0_15px_40px_rgba(249,115,22,0.03)] hover:shadow-[0_25px_50px_rgba(249,115,22,0.08)] hover:-translate-y-2 transition-all duration-500 group pb-8 mt-8 sm:mt-0">
//                             <div className="relative -mt-8 mx-5 h-48 rounded-tr-[80px] rounded-bl-[80px] rounded-tl-2xl rounded-br-2xl overflow-hidden shadow-[0_15px_35px_rgba(249,115,22,0.1)] bg-amber-50 transition-all duration-500 group-hover:shadow-[0_20px_40px_rgba(249,115,22,0.18)]">
//                                 <Image
//                                     src="/use_pasta.png"
//                                     alt="Cooking pasta under busy schedules"
//                                     fill
//                                     className="object-cover image-zoom opacity-95 group-hover:opacity-100"
//                                 />
//                                 <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
//                                 <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-sm flex items-center justify-center text-amber-500 shadow-md border border-amber-100/30">
//                                     <FaClock className="w-4 h-4" />
//                                 </div>
//                             </div>
//                             <div className="px-6 pt-6 sm:px-8 sm:pt-8">
//                                 <h3 className="text-xl font-bold text-gray-900 font-poppins mb-3 leading-snug">
//                                     Everyday cooking takes too much prep
//                                 </h3>
//                                 <p className="text-gray-500 text-xs sm:text-sm font-semibold leading-relaxed">
//                                     Chopping, peeling, and grinding tomatoes takes time. Between busy work schedules, crafting a rich culinary sauce from scratch feels like a chore.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </section>

//             {/* SECTION 3: HOW DRYMATO STARTED */}
//             <section className="relative w-full pt-24 pb-24 md:pt-32 md:pb-32 bg-gradient-to-b from-[#fff8f0] to-[#fff3e5] z-10 overflow-hidden">
//                 {/* Top Wave Divider */}
//                 <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-20">
//                     <svg className="relative block w-full h-[40px] md:h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M0,0 C150,90 350,20 500,60 C650,100 850,30 1000,70 C1100,90 1150,100 1200,80 L1200,0 L0,0 Z" fill="#faf6f0" />
//                     </svg>
//                 </div>

//                 {/* Bottom Wave Divider */}
//                 <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
//                     <svg className="relative block w-full h-[40px] md:h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M0,120 C150,30 350,100 500,60 C650,20 850,90 1000,50 C1100,30 1150,20 1200,40 L1200,120 L0,120 Z" fill="#ffffff" />
//                     </svg>
//                 </div>
//                 <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

//                     {/* Left Column: Visual Overlapping Mockups */}
//                     <div className="lg:col-span-6 relative flex items-center justify-center py-10 reveal-fade-left">
//                         <div className="absolute left-[-100vw] right-[5%] sm:right-[20%] lg:right-[10%] top-4 bottom-4 rounded-tl-[300px] rounded-tr-[300px] rounded-br-[300px] rounded-bl-none bg-gradient-to-br from-[#a50808] to-[#8b0606] shadow-[0_25px_60px_rgba(165,8,8,0.18)] pointer-events-none z-0" />

//                         {/* Jar 1 */}
//                         <div className="relative z-10 w-44 h-44 sm:w-72 sm:h-72 drop-shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:scale-105 transition-transform duration-500 -mr-16 animate-float-slow">
//                             <Image
//                                 src="/jaar/oliver-oil-smalljaar.png"
//                                 alt="Olive oil marinated sun-dried tomatoes small jar"
//                                 fill
//                                 className="object-contain"
//                             />
//                         </div>

//                         {/* Jar 2 */}
//                         <div className="relative z-20 w-36 h-36 sm:w-56 sm:h-56 drop-shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:scale-105 transition-transform duration-500 mt-20 animate-float-slow-reverse">
//                             <Image
//                                 src="/jaar/jaarslightroatateview.png"
//                                 alt="Classic sun-dried tomato seasoning jar"
//                                 fill
//                                 className="object-contain"
//                             />
//                         </div>
//                     </div>

//                     {/* Right Column: Narrative */}
//                     <div className="lg:col-span-6 space-y-6 reveal-fade-right">
//                         <span className="text-[#a50808]  font-dancing font-extrabold tracking-widest text-xs uppercase bg-red-50 px-3.5 py-1.5 rounded-full inline-block">
//                             The Solution
//                         </span>
//                         <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-poppins tracking-tight leading-tight">
//                             How Drymato Started
//                         </h2>

//                         <div className="space-y-4 text-gray-600 text-[15px] sm:text-base leading-relaxed font-semibold">
//                             <p>
//                                 We started experimenting with dehydrating fresh tomatoes at home — slowly drying them under controlled heat to naturally lock in their sweet, concentrated flavor components.
//                             </p>
//                             <p>
//                                 The result was a product that became instantly flavorful, incredibly convenient, shelf-stable, and extremely easy to use. No more washing, slicing, or quick rotting.
//                             </p>
//                             <p>
//                                 Today, Drymato is growing into a complete range of naturally cured, sun-dried kitchen essentials designed to bring premium, intense Mediterranean flavor to modern homes.
//                             </p>
//                         </div>
//                     </div>

//                 </div>

//                 {/* Merrored Row: Premium Dehydrated Powders Innovation (Merged Tomato, Garlic, & Onion) */}
//                 <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mt-24 lg:mt-32">

//                     {/* Left Column: Narrative (Three solutions together) */}
//                     <div className="lg:col-span-6 space-y-8 reveal-fade-left lg:order-1 order-2">
//                         <div className="space-y-4">
//                             <span className="text-[#a50808] font-dancing font-extrabold tracking-widest text-xs uppercase bg-red-50 px-3.5 py-1.5 rounded-full inline-block">
//                                 The Powder Solutions
//                             </span>
//                             <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-poppins tracking-tight leading-tight">
//                                 Pure Dehydrated Seasoning Powders
//                             </h2>
//                             <p className="text-gray-600 font-semibold text-sm sm:text-base leading-relaxed">
//                                 To expand our culinary promise, we introduced a range of 100% pure dehydrated seasoning powders. Ground directly from premium farm-fresh crops, they contain zero chemical additives, fillers, or artificial colors.
//                             </p>
//                         </div>

//                         {/* Subsection 1: Tomato Powder */}
//                         <div className="border-l-4 border-[#a50808] pl-4 space-y-2">
//                             <h3 className="text-xl font-bold text-gray-900 font-poppins">
//                                 100% Pure Tomato Powder
//                             </h3>
//                             <p className="text-gray-500 text-xs sm:text-sm font-semibold leading-relaxed">
//                                 Made directly from our naturally cured sun-dried tomatoes, it delivers the same intense, sweet-tangy essence in a highly versatile, easy-to-blend format. It serves as a natural flavor and color enhancer for gourmet soups, sauces, seasoning blends, and dry rubs.
//                             </p>
//                         </div>

//                         {/* Subsection 2: Garlic & Onion Powder */}
//                         <div className="border-l-4 border-[#1b4d3e] pl-4 space-y-2">
//                             <h3 className="text-xl font-bold text-gray-900 font-poppins">
//                                 Pure Garlic & Onion Powders
//                             </h3>
//                             <p className="text-gray-500 text-xs sm:text-sm font-semibold leading-relaxed">
//                                 These pantry staples deliver the ultimate sweet, pungent, and savory aroma in an ultra-fine, kitchen-ready format. They serve as essential foundation ingredients for rubs, marinades, artisan breads, gravies, and gourmet seasoning blends.
//                             </p>
//                         </div>

//                         <p className="text-gray-500 text-xs sm:text-sm font-semibold leading-relaxed pt-4 border-t border-orange-100/60">
//                             Designed for both creative home chefs and commercial food manufacturers looking for premium, consistent B2B ingredients, our powders ensure long shelf life, rich flavor retention, and effortless integration.
//                         </p>
//                     </div>

//                     {/* Right Column: Visual Overlapping Mockups with all three floating pouches */}
//                     <div className="lg:col-span-6 relative flex items-center justify-center py-20 reveal-fade-right lg:order-2 order-1 min-h-[500px] sm:min-h-[600px]">

//                         {/* Floating Garlic Powder Pouch (Left) */}
//                         <div className="absolute left-[2%] sm:left-[5%] md:left-[8%] lg:left-[-10%] xl:left-[-14%] bottom-[8%] sm:bottom-[10%] z-10 w-40 h-40 sm:w-60 sm:h-60 md:w-64 md:h-64 drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform duration-500 animate-float-slow transform -rotate-6">
//                             <Image
//                                 src="/garlic_powder-removebg.png"
//                                 alt="Drymato Dehydrated Garlic Powder Pouch"
//                                 fill
//                                 className="object-contain"
//                             />
//                         </div>

//                         {/* Floating Tomato Powder Pouch (Center/Top - Signature) */}
//                         <div className="relative z-20 w-52 h-52 sm:w-76 sm:h-76 md:w-80 md:h-80 drop-shadow-[0_20px_45px_rgba(0,0,0,0.22)] hover:scale-105 transition-transform duration-500 animate-float-slow-reverse -mt-20 sm:-mt-24">
//                             <Image
//                                 src="/powder.png"
//                                 alt="Drymato Dehydrated Tomato Powder Pouch"
//                                 fill
//                                 className="object-contain"
//                             />
//                         </div>

//                         {/* Floating Onion Powder Pouch (Right) */}
//                         <div className="absolute right-[2%] sm:right-[5%] md:right-[8%] lg:right-[-10%] xl:right-[-18%] bottom-[8%] sm:bottom-[10%] z-30 w-40 h-40 sm:w-68 sm:h-68 md:w-82 md:h-72 drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform duration-500 animate-float-slow transform rotate-6">
//                             <Image
//                                 src="/onion_powder-removebg.png"
//                                 alt="Drymato Dehydrated Onion Powder Pouch"
//                                 fill
//                                 className="object-contain"
//                             />
//                         </div>
//                     </div>

//                 </div>
//             </section>

//             {/* SECTION 4: THE FARM-TO-KITCHEN TIMELINE */}
//             <section className="relative w-full py-24 bg-white z-10">
//                 <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
//                     <div className="text-center mb-20 max-w-2xl mx-auto space-y-4 reveal-fade-up">
//                         <span className="text-[#a50808]  font-dancing font-extrabold tracking-widest text-xs uppercase bg-red-50 px-3.5 py-1.5 rounded-full inline-block">
//                             Our Process
//                         </span>
//                         <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-poppins tracking-tight">
//                             From Our Farms To Your Kitchen
//                         </h2>
//                         <p className="text-gray-500 font-semibold text-sm sm:text-base leading-relaxed">
//                             Every step of our production is done thoughtfully to preserve flavor, quality, and freshness.
//                         </p>
//                     </div>

//                     {/* Timeline Grid (4 steps) */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

//                         {/* Step 1 */}
//                         <div className="story-card bg-gradient-to-br from-white to-[#fbfdfa] rounded-tl-[60px] rounded-br-[60px] rounded-tr-3xl rounded-bl-3xl p-8 border border-emerald-500/5 shadow-[0_12px_35px_rgba(16,185,129,0.015)] hover:shadow-[0_20px_40px_rgba(16,185,129,0.06)] hover:border-emerald-500/15 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden">
//                             <span className="absolute right-6 top-6 text-5xl font-black font-poppins text-emerald-900/[0.04] group-hover:text-emerald-900/[0.08] transition-colors duration-300 pointer-events-none select-none">01</span>
//                             <div className="space-y-5">
//                                 <div className="flex justify-between items-center">
//                                     <div className="w-12 h-12 rounded-2xl bg-emerald-50/50 border border-emerald-100/50 flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform duration-300 shadow-sm">
//                                         <FaSeedling className="w-5 h-5" />
//                                     </div>
//                                 </div>
//                                 <h3 className="text-xl font-bold text-gray-900 font-poppins leading-tight">
//                                     Sourced From Our Farms
//                                 </h3>
//                                 <p className="text-gray-500 text-xs sm:text-sm font-semibold leading-relaxed">
//                                     The tomatoes used in our products are carefully sourced from our own sustainable farms, where we focus on growing with care and absolute simplicity.
//                                 </p>
//                             </div>
//                         </div>

//                         {/* Step 2 */}
//                         <div className="story-card bg-gradient-to-br from-white to-[#fffcfc] rounded-tr-[60px] rounded-bl-[60px] rounded-tl-3xl rounded-br-3xl p-8 border border-red-500/5 shadow-[0_12px_35px_rgba(165,8,8,0.015)] hover:shadow-[0_20px_40px_rgba(165,8,8,0.06)] hover:border-red-500/15 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden" style={{ transitionDelay: "150ms" }}>
//                             <span className="absolute right-6 top-6 text-5xl font-black font-poppins text-red-900/[0.04] group-hover:text-red-900/[0.08] transition-colors duration-300 pointer-events-none select-none">02</span>
//                             <div className="space-y-5">
//                                 <div className="flex justify-between items-center">
//                                     <div className="w-12 h-12 rounded-2xl bg-red-50/50 border border-red-100/50 flex items-center justify-center text-[#a50808] group-hover:scale-110 transition-transform duration-300 shadow-sm">
//                                         <FaFire className="w-5 h-5" />
//                                     </div>
//                                 </div>
//                                 <h3 className="text-xl font-bold text-gray-900 font-poppins leading-tight">
//                                     Slow Sun-Cured Drying
//                                 </h3>
//                                 <p className="text-gray-500 text-xs sm:text-sm font-semibold leading-relaxed">
//                                     Picked at peak ripeness, the tomatoes are sliced and naturally sun-cured. This traditional slow process locks in their rich nutrition, sugars, and authentic flavor.
//                                 </p>
//                             </div>
//                         </div>

//                         {/* Step 3 */}
//                         <div className="story-card bg-gradient-to-br from-white to-[#f9fdfd] rounded-tl-[60px] rounded-br-[60px] rounded-tr-3xl rounded-bl-3xl p-8 border border-orange-500/5 shadow-[0_12px_35px_rgba(249,115,22,0.015)] hover:shadow-[0_20px_40px_rgba(249,115,22,0.06)] hover:border-orange-500/15 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden" style={{ transitionDelay: "300ms" }}>
//                             <span className="absolute right-6 top-6 text-5xl font-black font-poppins text-orange-900/[0.04] group-hover:text-orange-900/[0.08] transition-colors duration-300 pointer-events-none select-none">03</span>
//                             <div className="space-y-5">
//                                 <div className="flex justify-between items-center">
//                                     <div className="w-12 h-12 rounded-2xl bg-orange-50/50 border border-orange-100/50 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform duration-300 shadow-sm">
//                                         <FaBoxOpen className="w-5 h-5" />
//                                     </div>
//                                 </div>
//                                 <h3 className="text-xl font-bold text-gray-900 font-poppins leading-tight">
//                                     Premium Infusion
//                                 </h3>
//                                 <p className="text-gray-500 text-xs sm:text-sm font-semibold leading-relaxed">
//                                     Tomatoes are packed raw or marinated in cold-pressed extra virgin olive oil and local herbs, or ground into 100% pure tomato seasoning powder.
//                                 </p>
//                             </div>
//                         </div>

//                         {/* Step 4 */}
//                         <div className="story-card bg-gradient-to-br from-white to-[#fffdfa] rounded-tr-[60px] rounded-bl-[60px] rounded-tl-3xl rounded-br-3xl p-8 border border-amber-500/5 shadow-[0_12px_35px_rgba(245,158,11,0.015)] hover:shadow-[0_20px_40px_rgba(245,158,11,0.06)] hover:border-amber-500/15 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden" style={{ transitionDelay: "450ms" }}>
//                             <span className="absolute right-6 top-6 text-5xl font-black font-poppins text-amber-900/[0.04] group-hover:text-amber-900/[0.08] transition-colors duration-300 pointer-events-none select-none">04</span>
//                             <div className="space-y-5">
//                                 <div className="flex justify-between items-center">
//                                     <div className="w-12 h-12 rounded-2xl bg-amber-50/50 border border-amber-100/50 flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform duration-300 shadow-sm">
//                                         <FaClock className="w-5 h-5" />
//                                     </div>
//                                 </div>
//                                 <h3 className="text-xl font-bold text-gray-900 font-poppins leading-tight">
//                                     Ready For Your Kitchen
//                                 </h3>
//                                 <p className="text-gray-500 text-xs sm:text-sm font-semibold leading-relaxed">
//                                     Distributed in air-tight gourmet jars or fine powders. They remain shelf-stable and fresh in your pantry, waiting to elevate any recipe in seconds.
//                                 </p>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </section>



//             {/* FAMOUS PRODUCTS SECTION */}
//             <section className="relative w-full pt-10 pb-10 md:pt-15 md:pb-20 bg-[#fffaf5] z-10 overflow-hidden">
//                 {/* Top Wave Divider */}
//                 <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-20">
//                     <svg className="relative block w-full h-[40px] md:h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M0,0 C150,90 350,20 500,60 C650,100 850,30 1000,70 C1100,90 1150,100 1200,80 L1200,0 L0,0 Z" fill="#ffffff" />
//                     </svg>
//                 </div>

//                 {/* Bottom Wave Divider */}
//                 <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
//                     <svg className="relative block w-full h-[40px] md:h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M0,120 C150,30 350,100 500,60 C650,20 850,90 1000,50 C1100,30 1150,20 1200,40 L1200,120 L0,120 Z" fill="#faf6f0" />
//                     </svg>
//                 </div>

//                 <div className="reveal-fade-right absolute bottom-10 right-[-100px] w-64 h-64 opacity-15 pointer-events-none">
//                     <Image src="/tomatotree.png" alt="decoration" width={300} height={300} className="object-contain mix-blend-multiply" />
//                 </div>
//                 <div className="reveal-fade-left absolute top-10 left-[-100px] w-64 h-64 opacity-15 pointer-events-none">
//                     <Image src="/lefttree.png" alt="decoration" width={300} height={300} className="object-contain mix-blend-multiply" />
//                 </div>

//                 <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">

//                     {/* Centered Heading */}
//                     <div className="reveal-fade-up text-center mb-24 max-w-2xl mx-auto space-y-4">
//                         <span className="text-[#a50808] font-dancing font-extrabold tracking-widest text-xs uppercase bg-red-50 px-3.5 py-1.5 rounded-full inline-block">
//                             Our Best Sellers
//                         </span>
//                         <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-poppins tracking-tight">
//                             Famous Products
//                         </h2>
//                         <p className="text-gray-500 font-semibold text-sm sm:text-base leading-relaxed">
//                             Taste our most loved creations, handcrafted using traditional sun-curing processes and premium ingredients.
//                         </p>
//                     </div>

//                     {/* Products Grid */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-28 gap-x-8 pt-32 pb-28">
//                         {FAMOUS_PRODUCTS.map((product, index) => (
//                             <div
//                                 key={product.id}
//                                 className="reveal-fade-up"
//                                 style={{ transitionDelay: `${(index % 3) * 150}ms` }}
//                             >
//                                 <div className="about-card relative bg-white rounded-tl-[48px] rounded-br-[48px] rounded-tr-none rounded-bl-none shadow-[0_0_10px_rgba(0,0,0,0.08)] px-8 pb-8 pt-32 border border-gray-100 transition-all duration-500 hover:shadow-[0_25px_50px_rgba(165,8,8,0.1)] hover:-translate-y-2 flex flex-col items-center group h-full">
//                                     {/* Image Container (Overlapping Top) */}
//                                     <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-56 h-56 flex items-center justify-center z-20">
//                                         {/* Default Product Image */}
//                                         <Image
//                                             src={product.image}
//                                             alt={product.title}
//                                             width={220}
//                                             height={220}
//                                             className="w-full h-full object-contain transform group-hover:scale-115 transition-transform duration-500"
//                                             style={{
//                                                 filter: "drop-shadow(0 12px 20px rgba(0,0,0,0.12))"
//                                             }}
//                                         />
//                                     </div>

//                                     {/* Title & Subtitle */}
//                                     <div className="text-center mb-3">
//                                         <h3 className="text-xl font-poppins font-semibold text-gray-900 leading-tight tracking-tight min-h-[56px] flex items-center justify-center px-2 group-hover:text-[#a50808] transition-colors duration-300">
//                                             {product.title}
//                                         </h3>
//                                         {/* <p className="text-gray-500 text-sm font-semibold mt-0.5">{product.subtitle}</p> */}
//                                     </div>

//                                     {/* Product Short Description */}
//                                     <p className="text-center text-gray-600 text-sm leading-relaxed mb-5 flex-grow">
//                                         {product.description}
//                                     </p>

//                                     {/* Checkmark Feature */}
//                                     <div className="flex items-center justify-center gap-2 text-slate-700 font-semibold mb-6 text-sm">
//                                         <svg className="w-4 h-4 text-[#a50808] shrink-0" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
//                                         </svg>
//                                         <span>{product.feature}</span>
//                                     </div>

//                                     {/* Action Button */}
//                                     <Link
//                                         href="/contact"
//                                         className="group/btn relative overflow-hidden w-fit bg-[#a50808] border-2 border-[#a50808] text-white py-2.5 px-6 rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none font-extrabold flex items-center justify-center gap-2.5 transition-all duration-300 shadow-[0_6px_20px_rgba(165,8,8,0.18)] hover:shadow-[0_8px_25px_rgba(165,8,8,0.28)] active:scale-95 cursor-pointer z-10 self-center"
//                                     >
//                                         {/* Background bubble shape rising from bottom to top */}
//                                         <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[125%] aspect-square rounded-t-[50%] bg-white translate-y-full transition-transform duration-[750ms] ease-in-out z-0 group-hover/btn:translate-y-[12%]" />

//                                         <span className="relative z-10 transition-colors duration-300 group-hover/btn:text-[#a50808] text-xs tracking-widest font-black">
//                                             SHOP NOW
//                                         </span>
//                                         <span className="relative z-10 w-6 h-6 bg-white text-[#a50808] rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 group-hover/btn:bg-[#a50808] group-hover/btn:text-white transform group-hover/btn:translate-x-1 shadow-sm">
//                                             →
//                                         </span>
//                                     </Link>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                 </div>
//             </section>

//             {/* SECTION 1: THE PHILOSOPHY */}
//             <section className="relative w-full py-20 z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
//                 <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

//                     {/* Left Column: Narrative text */}
//                     <div className="lg:col-span-7 space-y-6 text-left reveal-fade-left">
//                         <span className="text-[#a50808] font-black font-dancing tracking-[0.2em] text-xs uppercase bg-[#a50808]/5 border border-[#a50808]/15 px-4 py-2 rounded-full inline-flex items-center gap-2 shadow-sm w-max">
//                             <FaLeaf className="w-3 h-3 text-[#a50808]" /> OUR PHILOSOPHY
//                         </span>

//                         <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-poppins tracking-tight leading-tight">
//                             The Concentration of <br className="hidden sm:inline" />
//                             <span className="text-[#a50808]">Pure Flavor & Time</span>
//                         </h2>

//                         <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed font-semibold">
//                             <p>
//                                 At Drymato, we believe that culinary excellence is not about adding artificial shortcuts, but rather concentrating what nature already does perfectly. By utilizing slow sun-curing dehydration, we carefully draw out the excess moisture, isolating and amplifying the natural sugars, vitamins, and savory umami notes inside each vine tomato.
//                             </p>
//                             <p>
//                                 We stand for pure, honest ingredients that serve dual purposes: making delicious gourmet foods instantly accessible, and reducing daily kitchen preparation times with zero food waste.
//                             </p>
//                         </div>
//                     </div>

//                     {/* Right Column: Floating product showpiece image */}
//                     <div className="lg:col-span-5 relative flex items-center justify-center h-[320px] sm:h-[450px] w-full reveal-fade-right">
//                         <div className="absolute inset-4 rounded-tl-[80px] rounded-br-[80px] rounded-tr-3xl rounded-bl-3xl bg-gradient-to-br from-orange-100/40 to-[#fff2e0]/40 border border-orange-200/20 z-0" />

//                         <div className="zoom-wrapper absolute w-[90%] h-[85%] rounded-tl-[70px] rounded-br-[70px] rounded-tr-2xl rounded-bl-2xl overflow-hidden shadow-[0_20px_45px_rgba(227,28,37,0.06)] border border-orange-100/30 z-10">
//                             <Image
//                                 src="/jaar/oiled-opened-jaarSpread.png"
//                                 alt="Drymato marinated tomatoes product showcase"
//                                 fill
//                                 className="object-cover image-zoom"
//                             />
//                         </div>

//                         {/* Floating leaf sticker in foreground */}
//                         <div className="absolute top-2 right-2 w-16 h-16 opacity-30 pointer-events-none z-20 animate-float-slow">
//                             <Image src="/tomatosticker.png" alt="tomato leaf sticker" width={60} height={60} className="object-contain" />
//                         </div>
//                     </div>

//                 </div>
//             </section>

//             {/* SECTION 2: CORE VALUES */}
//             <section className="relative w-full pt-28 pb-28 md:pt-36 md:pb-36 bg-[#fffaf5] border-t border-b border-orange-100/10 z-10 overflow-hidden">
//                 {/* Top Wave Divider */}
//                 <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-20">
//                     <svg className="relative block w-full h-[40px] md:h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M0,0 C150,90 350,20 500,60 C650,100 850,30 1000,70 C1100,90 1150,100 1200,80 L1200,0 L0,0 Z" fill="#faf6f0" />
//                     </svg>
//                 </div>

//                 {/* Bottom Wave Divider */}
//                 <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
//                     <svg className="relative block w-full h-[40px] md:h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M0,120 C150,30 350,100 500,60 C650,20 850,90 1000,50 C1100,30 1150,20 1200,40 L1200,120 L0,120 Z" fill="#faf6f0" />
//                     </svg>
//                 </div>

//                 {/* Ambient Glowing Spot Deco */}
//                 <div className="absolute top-1/4 left-[-100px] w-80 h-80 bg-orange-200/15 filter blur-[100px] rounded-full pointer-events-none" />
//                 <div className="absolute bottom-1/4 right-[-100px] w-80 h-80 bg-emerald-200/15 filter blur-[100px] rounded-full pointer-events-none" />

//                 <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
//                     <div className="text-center mb-20 max-w-2xl mx-auto space-y-4 reveal-fade-up">
//                         <span className="text-[#a50808] font-dancing font-extrabold tracking-widest text-xs uppercase bg-red-50 px-3.5 py-1.5 rounded-full inline-block">
//                             Our Pillars
//                         </span>
//                         <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-poppins tracking-tight">
//                             Values We Live By
//                         </h2>
//                         <p className="text-gray-500 font-semibold text-sm sm:text-base leading-relaxed">
//                             Crafting culinary standards that preserve nutrition, increase speed, and support organic farming.
//                         </p>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                         {values.map((val, idx) => {
//                             const Icon = val.icon;
//                             return (
//                                 <div
//                                     key={idx}
//                                     className="about-card relative bg-white border border-orange-100/20 p-8 pt-10 pb-12 rounded-tl-[60px] rounded-br-[60px] rounded-tr-2xl rounded-bl-2xl shadow-[0_12px_35px_rgba(0,0,0,0.015)] transition-all duration-500 hover:shadow-[0_20px_45px_rgba(0,0,0,0.05)] hover:-translate-y-2 flex flex-col justify-between overflow-hidden group"
//                                 >
//                                     {/* Large background number watermark */}
//                                     <span className="absolute right-8 bottom-4 text-8xl font-bold font-poppins text-gray-100/30 group-hover:text-gray-100/50 transition-colors duration-500 pointer-events-none select-none">
//                                         0{idx + 1}
//                                     </span>

//                                     <div className="space-y-6 text-left relative z-10">
//                                         {/* Icon Container with interactive color-flip on hover */}
//                                         <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${idx === 0 ? "bg-emerald-50 text-emerald-600 border-emerald-100/50 group-hover:bg-emerald-500 group-hover:text-white group-hover:shadow-[0_8px_20px_rgba(16,185,129,0.3)]" :
//                                             idx === 1 ? "bg-red-50 text-[#a50808] border-red-100/50 group-hover:bg-[#a50808] group-hover:text-white group-hover:shadow-[0_8px_20px_rgba(165,8,8,0.3)]" :
//                                                 "bg-amber-50 text-amber-600 border-amber-100/50 group-hover:bg-amber-500 group-hover:text-white group-hover:shadow-[0_8px_20px_rgba(245,158,11,0.3)]"
//                                             }`}>
//                                             <Icon className="w-6 h-6" />
//                                         </div>

//                                         <div className="space-y-3">
//                                             <h3 className="text-2xl font-semibold text-gray-900 font-poppins leading-tight group-hover:text-[#a50808] transition-colors duration-300">
//                                                 {val.title}
//                                             </h3>
//                                             <p className="text-gray-600 text-sm font-semibold leading-relaxed pr-4">
//                                                 {val.desc}
//                                             </p>
//                                         </div>
//                                     </div>

//                                     {/* Accent bottom border that expands from the center */}
//                                     <div className={`absolute bottom-0 left-0 right-0 h-1.5 transition-all duration-500 scale-x-0 group-hover:scale-x-100 origin-center ${idx === 0 ? "bg-emerald-500" :
//                                         idx === 1 ? "bg-[#a50808]" :
//                                             "bg-amber-500"
//                                         }`} />
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </section>

//             {/* SECTION 3: CULINARY PROMISE */}
//             {/* <section className="relative w-full py-24 z-10 max-w-5xl mx-auto px-6 text-center reveal-fade-up">
//                 <div className="bg-[#fff9f2] border border-orange-100/50 rounded-3xl p-10 sm:p-14 shadow-sm flex flex-col items-center space-y-6">
//                     <div className="w-14 h-14 rounded-full bg-orange-100/40 flex items-center justify-center text-[#a50808] shadow-inner">
//                         <FaQuoteLeft className="w-5 h-5" />
//                     </div>

//                     <p className="italic text-gray-700 font-serif text-lg sm:text-2xl leading-relaxed max-w-3xl">
//                         &ldquo;We don't cut corners. Sun-drying isn't a shortcut; it's a dedicated method of patience, capturing the very soul of the tomato to serve modern kitchens and passionate home cooks alike.&rdquo;
//                     </p>

//                     <div className="pt-4">
//                         <span className="text-xs font-black uppercase tracking-widest text-[#a50808] block">The Drymato Promise</span>
//                         <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1 block">Pure. Natural. Honest.</span>
//                     </div>
//                 </div>
//             </section> */}

//             {/* SECTION 4: CALL TO ACTION */}
//             <section className="relative w-full py-20 px-6 sm:px-8 lg:px-10 max-w-7xl mx-auto z-10 reveal-fade-up">
//                 <div className="bg-gradient-to-br from-[#a50808] to-[#8b0606] rounded-[36px] shadow-[0_20px_50px_rgba(165,8,8,0.12)] p-10 sm:p-14 text-white text-center relative overflow-hidden group">
//                     <div className="absolute top-0 right-0 w-44 h-44 bg-white/5 rounded-bl-[200px] pointer-events-none transition-transform duration-1000 group-hover:scale-110" />
//                     <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-tr-[150px] pointer-events-none transition-transform duration-1000 group-hover:scale-110" />

//                     <div className="relative z-10 max-w-2xl mx-auto space-y-6 flex flex-col items-center">
//                         <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins leading-tight">
//                             Bring Gourmet Flavor <br /> to Your Pantry
//                         </h2>
//                         <p className="text-white/80 text-sm sm:text-base font-semibold leading-relaxed max-w-lg">
//                             Discover our curated collection of classic sun-cured tomatoes, marinated olive oil jars, and flavorful seasoning powders.
//                         </p>

//                         <Link
//                             href="/product"
//                             className="group/btn relative overflow-hidden bg-white text-[#a50808] py-3.5 px-8 rounded-full font-black flex items-center justify-center gap-3 transition-all duration-300 shadow-md hover:scale-105 active:scale-95 cursor-pointer z-10 w-max mt-4 text-xs tracking-widest uppercase"
//                         >
//                             <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[125%] aspect-square rounded-t-[50%] bg-gray-900 translate-y-full transition-transform duration-500 ease-in-out z-0 group-hover/btn:translate-y-[12%]" />
//                             <span className="relative z-10 transition-colors duration-300 group-hover/btn:text-white">BROWSE PRODUCTS</span>
//                             <span className="relative z-10 w-5 h-5 bg-[#a50808] text-white rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 group-hover/btn:bg-white group-hover/btn:text-gray-900 transform group-hover/btn:translate-x-1 shadow-sm">
//                                 <FaArrowRight className="w-2.5 h-2.5" />
//                             </span>
//                         </Link>
//                     </div>
//                 </div>
//             </section>

//             {/* PRE-FOOTER BANNER */}
//             <PreFooterBanner />
//         </div>
//     );
// }







"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaSeedling, FaUtensils, FaArrowRight, FaQuoteLeft, FaShieldAlt, FaLeaf, FaClock, FaBoxOpen, FaFire, FaUndoAlt, FaCog, FaHandshake } from "react-icons/fa";
import PreFooterBanner from "@/components/PreFooterBanner";
import OurJourneySection from "@/components/OurJourneySection";
import WhoWeServeSection from "@/components/WhoWeServeSection";

const FAMOUS_PRODUCTS = [
    {
        id: 4,
        title: "Olive Oil Marinated",
        subtitle: "(Big Jar)",
        image: "/jaar/oliver-oil-smalljaar.png",
        hoverImage: "/jaar/oiled-opened-jaarSpread.png",
        stars: 5,
        feature: "Extra Virgin Olive Oil",
        description: "Our premium olive oil marinated sun-dried tomatoes in a generous sharing big jar."
    },
    {
        id: 2,
        title: "Dehydrated Tomatoes",
        subtitle: "(Big Jar)",
        image: "/jaar/jaarslightroatateview.png",
        hoverImage: "/dry-tomato-jaarspread.png",
        stars: 5,
        feature: "100% Natural",
        description: "Our signature sun-dried tomatoes cured under the sun, packed in a generous family-sized big jar."
    },
    {
        id: 7,
        title: "Powdered Tomatoes",
        subtitle: "(Seasoning Powder)",
        image: "/jaar/powder-pouch-removebg.png",
        hoverImage: "/jaar/spreading powder.png",
        stars: 5,
        feature: "100% Tomato Powder",
        description: "Concentrated sun-dried tomato powder, perfect for gourmet kitchen seasoning and cooking."
    }
];

const TIMELINE = [
    {
        num: "01",
        icon: FaSeedling,
        title: "Sourced From Our Farms",
        desc: "The tomatoes used in our products are carefully sourced from our own sustainable farms, where we focus on growing with care and absolute simplicity.",
        chip: "bg-forest/10 border-forest/15 text-forest",
        mark: "text-forest/[0.06] group-hover:text-forest/[0.12]",
        hover: "hover:border-forest/25"
    },
    {
        num: "02",
        icon: FaFire,
        title: "Slow Sun-Cured Drying",
        desc: "Picked at peak ripeness, the tomatoes are sliced and naturally sun-cured. This traditional slow process locks in their rich nutrition, sugars, and authentic flavor.",
        chip: "bg-brick/10 border-brick/15 text-brick",
        mark: "text-brick/[0.06] group-hover:text-brick/[0.12]",
        hover: "hover:border-brick/25"
    },
    {
        num: "03",
        icon: FaBoxOpen,
        title: "Premium Infusion",
        desc: "Tomatoes are packed raw or marinated in cold-pressed extra virgin olive oil and local herbs, or ground into 100% pure tomato seasoning powder.",
        chip: "bg-mustard/10 border-mustard/20 text-mustard",
        mark: "text-mustard/[0.08] group-hover:text-mustard/[0.16]",
        hover: "hover:border-mustard/30"
    },
    {
        num: "04",
        icon: FaClock,
        title: "Ready For Your Kitchen",
        desc: "Distributed in air-tight gourmet jars or fine powders. They remain shelf-stable and fresh in your pantry, waiting to elevate any recipe in seconds.",
        chip: "bg-sage/15 border-sage/30 text-sage",
        mark: "text-sage/[0.10] group-hover:text-sage/[0.20]",
        hover: "hover:border-sage/40"
    }
];

const VALUES = [
    {
        title: "100% Preservative Free",
        desc: "We never use artificial colors, chemical sulfites, or artificial additives. Just pure sun-cured tomatoes kept fresh by natural dehydration.",
        icon: FaShieldAlt,
        chip: "bg-forest/10 text-forest border-forest/15 group-hover:bg-forest group-hover:text-white group-hover:shadow-[0_8px_20px_rgba(36,56,34,0.3)]",
        bar: "bg-forest"
    },
    {
        title: "Culinary Speed & Zero Waste",
        desc: "Skip the mess of washing, peeling, and chopping. Every jar is pre-sorted, pre-washed, and 100% usable to reduce kitchen labor hours.",
        icon: FaUtensils,
        chip: "bg-brick/10 text-brick border-brick/15 group-hover:bg-brick group-hover:text-white group-hover:shadow-[0_8px_20px_rgba(138,44,33,0.3)]",
        bar: "bg-brick"
    },
    {
        title: "Sustainable Agriculture",
        desc: "We partner directly with family farms that practice sustainable agriculture, respecting natural crop cycles to yield premium tomatoes.",
        icon: FaSeedling,
        chip: "bg-mustard/10 text-mustard border-mustard/20 group-hover:bg-mustard group-hover:text-white group-hover:shadow-[0_8px_20px_rgba(192,136,41,0.3)]",
        bar: "bg-mustard"
    }
];

const APPROACH_POINTS = [
    {
        icon: FaSeedling,
        title: "Source with Care",
        desc: "We believe the quality of a dehydrated ingredient begins with the raw material."
    },
    {
        icon: FaCog,
        title: "Process with Purpose",
        desc: "Every product requires the right preparation, cutting, dehydration and handling approach."
    },
    {
        icon: FaBoxOpen,
        title: "Pack for the Application",
        desc: "From bulk supply to vacuum and private-label formats, packaging should match the product and its intended use."
    },
    {
        icon: FaHandshake,
        title: "Build for Business",
        desc: "We focus on requirements that matter to B2B buyers — quantity, format, consistency, specifications and supply."
    }
];

// Small eyebrow label — same pattern used across the landing page sections
function Eyebrow({ children, icon: Icon = FaLeaf, className = "" }) {
    return (
        <div className={`flex items-center gap-2 text-forest ${className}`}>
            <Icon className="w-3.5 h-3.5" />
            <span className="text-xs sm:text-sm font-extrabold tracking-[0.2em] uppercase">
                {children}
            </span>
        </div>
    );
}

export default function AboutUsClient() {
    // Scroll Observer for staggered scroll-reveal animations
    useEffect(() => {
        const revealObserver = new IntersectionObserver((entries) => {
            const intersectingEntries = [];

            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    intersectingEntries.push(entry.target);
                } else {
                    entry.target.classList.remove("is-revealed");
                    entry.target.style.transitionDelay = "";
                }
            });

            if (intersectingEntries.length > 0) {
                // Sort intersecting elements by visual page order
                intersectingEntries.sort((a, b) => {
                    const rectA = a.getBoundingClientRect();
                    const rectB = b.getBoundingClientRect();
                    if (Math.abs(rectA.top - rectB.top) < 15) {
                        return rectA.left - rectB.left;
                    }
                    return rectA.top - rectB.top;
                });

                // Apply staggered delays
                intersectingEntries.forEach((el, index) => {
                    const isCard = el.classList.contains("about-card") || el.classList.contains("story-card");
                    const delayStep = isCard ? 150 : 200;
                    el.style.transitionDelay = `${index * delayStep}ms`;
                    el.classList.add("is-revealed");
                });
            }
        }, {
            root: null,
            rootMargin: "-6% 0px -6% 0px",
            threshold: 0.05
        });

        const animatedElements = document.querySelectorAll(
            ".reveal-fade-up, .reveal-fade-left, .reveal-fade-right, .about-card, .story-card, .jar-reveal-left, .jar-reveal-right"
        );
        animatedElements.forEach((el) => revealObserver.observe(el));

        return () => {
            animatedElements.forEach((el) => revealObserver.unobserve(el));
        };
    }, []);

    return (
        <div className="w-full relative overflow-hidden bg-surface">
            {/* Scroll Reveal Styles Injected Locally */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .reveal-fade-up {
                    opacity: 0;
                    transform: translateY(40px);
                    transition: opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .reveal-fade-left {
                    opacity: 0;
                    transform: translateX(-80px);
                    transition: opacity 1.4s cubic-bezier(0.16, 1, 0.3, 1), transform 1.4s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .reveal-fade-right {
                    opacity: 0;
                    transform: translateX(80px);
                    transition: opacity 1.4s cubic-bezier(0.16, 1, 0.3, 1), transform 1.4s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .about-card {
                    opacity: 0;
                    transform: translateY(30px);
                    transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s, box-shadow 0.4s;
                }
                .story-card {
                    opacity: 0;
                    transform: translateY(30px);
                    transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s, box-shadow 0.4s;
                }
                .reveal-fade-up.is-revealed,
                .reveal-fade-left.is-revealed,
                .reveal-fade-right.is-revealed {
                    opacity: 1;
                    transform: none !important;
                }
                .about-card.is-revealed,
                .story-card.is-revealed {
                    opacity: 1;
                    transform: translateY(0) !important;
                }
                .story-card.is-revealed:hover {
                    transform: translateY(-12px) !important;
                }
                .image-zoom {
                    transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) !important;
                }
                .zoom-wrapper:hover .image-zoom,
                .story-card:hover .image-zoom {
                    transform: scale(1.08) !important;
                }
                .jar-reveal-left {
                    opacity: 0;
                    transform: translateY(-50%) translateX(-150px);
                    transition: opacity 1.6s cubic-bezier(0.16, 1, 0.3, 1), transform 1.6s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .jar-reveal-right {
                    opacity: 0;
                    transform: translateY(-50%) translateX(150px);
                    transition: opacity 1.6s cubic-bezier(0.16, 1, 0.3, 1), transform 1.6s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .jar-reveal-left.is-revealed {
                    opacity: 1;
                    transform: translateY(-50%) translateX(0) !important;
                }
                .jar-reveal-right.is-revealed {
                    opacity: 1;
                    transform: translateY(-50%) translateX(0) !important;
                }
            `}} />

            {/* Ambient Background Tree */}
            <div className="absolute top-12 left-[-120px] w-64 h-64 opacity-[0.05] pointer-events-none select-none z-0">
                <Image src="/tomatolefttree.png" alt="botanical leaf decoration" width={400} height={400} className="object-contain" />
            </div>


            {/* WHERE WE COME FROM */}
            <section className="relative w-full bg-background pt-24 pb-24 md:pt-32 md:pb-32 overflow-hidden my-8">

                {/* Left Circular Product Showcase */}
                <div className="hidden lg:block absolute left-[-180px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] z-10 hover:scale-[1.03] transition-transform duration-500 group/left">
                    <div className="w-full h-full rounded-full overflow-hidden border-[8px] border-surface shadow-2xl relative">
                        <Image
                            src="/hero-section/guava-farm.png"
                            alt="Delicious gourmet pizza using sun-dried tomatoes"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="absolute -right-[190px] top-1/2 w-[420px] h-[460px] z-25 pointer-events-none drop-shadow-[0_15px_25px_rgba(0,0,0,0.22)] jar-reveal-left">
                        <div className="w-full h-full relative animate-float-slow">
                            <Image
                                src="/jaar/sunflower-oil-smalljaar.png"
                                alt="Drymato Olive Oil Tomato Jar"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Circular Product Showcase */}
                <div className="hidden lg:block absolute right-[-180px] top-1/2 -translate-y-1/2 w-[460px] h-[460px] z-10 hover:scale-[1.03] transition-transform duration-500 group/right">
                    <div className="w-full h-full rounded-full overflow-hidden border-[8px] border-surface shadow-2xl relative">
                        <Image
                            src="/images/farm.png"
                            alt="Gourmet pasta recipe using sun-dried tomatoes"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="absolute -left-[150px] top-1/2 w-[280px] h-[420px] z-25 pointer-events-none drop-shadow-[0_15px_25px_rgba(0,0,0,0.22)] jar-reveal-right">
                        <div className="w-full h-full relative animate-float-slow-reverse">
                            <Image
                                src="/jaar/oliver-oil-smalljaar.png"
                                alt="Drymato Sunflower Oil Tomato Jar"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* Decorative outline SVG */}
                {/* <svg
                    className="absolute left-[150px] sm:left-[220px] lg:left-[260px] top-[40px] w-12 h-12 text-forest/15 select-none pointer-events-none z-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    viewBox="0 0 24 24"
                >
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="7.5" strokeDasharray="3 3" />
                    <path d="M12 4.5v15M4.5 12h15" />
                </svg> */}

                {/* Decorative leaf SVG */}
                {/* <svg
                    className="absolute left-[180px] sm:left-[260px] lg:left-[300px] bottom-[30px] w-8 h-8 text-forest/20 select-none pointer-events-none z-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    viewBox="0 0 24 24"
                >
                    <path d="M12 3c0 0 4 3 4 8s-4 10-4 10-4-5-4-10 4-8 4-8z" />
                    <path d="M12 3v18" />
                </svg> */}

                {/* Fixed Bottom-Right Tree Decoration */}
                <div className="absolute right-55 -bottom-20 w-44 sm:w-56 lg:w-72 xl:w-100 h-auto opacity-[0.60] pointer-events-none select-none z-0">
                    <Image
                        src="/righttree.png"
                        alt=""
                        width={400}
                        height={400}
                        className="w-full h-auto object-contain object-bottom"
                    />
                </div>

                {/* Center Content */}
                <div className="max-w-3xl mx-auto px-6 text-center relative z-20 flex flex-col items-center justify-center min-h-[380px] sm:min-h-[430px] reveal-fade-up">

                    {/* Eyebrow */}
                    <Eyebrow className="mb-4 justify-center">
                        Where We Come From
                    </Eyebrow>

                    {/* Heading */}
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest leading-[1.2] mb-7 max-w-2xl">
                        Rooted in Rajasthan. Built for Wider Markets.
                    </h2>

                    {/* Content */}
                    <div className="max-w-2xl space-y-4 text-foreground/70 font-medium text-sm sm:text-base leading-relaxed">

                        <p>
                            Drymato is based in Rajasthan, India, with access to agricultural sourcing networks and food-processing capabilities.
                        </p>

                        <p>
                            Our relationship with raw materials starts close to the source.
                        </p>

                        <p>
                            For guava, our journey begins with our own farms — from cultivation and harvesting to processing and dehydration. For other fruits, vegetables and herbs, we work with carefully selected sourcing channels according to quality, seasonality and application requirements.
                        </p>

                    </div>

                </div>
            </section>

            {/* What We Believe / Our Approach */}
            <section id="our-story" className="relative w-full pt-20 pb-20 md:pt-10 md:pb-18 bg-surface z-10 overflow-hidden">
                {/* Soft backdrop radial highlights */}
                <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-brick/5 rounded-full filter blur-[120px] pointer-events-none" />
                <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] bg-mustard/5 rounded-full filter blur-[100px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

                    {/* Left Column: Narrative (Text) */}
                    <div className="lg:col-span-7 space-y-6 text-left reveal-fade-up">
                        <Eyebrow icon={FaHeart}>What We Believe</Eyebrow>

                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-forest leading-tight">
                            Our <span className="text-brick">Approach</span>
                        </h2>

                        <p className="text-foreground/75 text-base sm:text-lg font-medium leading-relaxed max-w-md">
                            Four principles shape how Drymato sources, processes and supplies dehydrated ingredients for food businesses.
                        </p>

                        {/* Approach points — one per line, hairline-divided */}
                        <div className="max-w-xl border-t border-sage/30">
                            {APPROACH_POINTS.map(({ icon: Icon, title, desc }) => (
                                <div
                                    key={title}
                                    className="flex items-start gap-4 py-4 border-b border-sage/30 last:border-b-0"
                                >
                                    <Icon className="w-5 h-5 mt-1.5 text-forest shrink-0" />
                                    <div>
                                        <h3 className="text-2xl font-bold text-forest leading-tight mb-1">
                                            {title}
                                        </h3>
                                        <p className="text-foreground/70 text-sm font-medium leading-relaxed">
                                            {desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Visual Mockup (Images) */}
                    <div className="lg:col-span-5 relative flex items-center justify-center h-[350px] sm:h-[480px] lg:h-[580px] xl:h-[650px] w-full reveal-fade-right">
                        {/* Main Image: dryTomato-tiltedLeft.png */}
                        <div className="absolute right-[-24px] sm:right-[-48px] lg:right-[-96px] xl:right-[-150px] w-[115%] sm:w-[125%] lg:w-[160%] xl:w-[180%] h-[100%] sm:h-[105%] lg:h-[120%] xl:h-[130%] z-10 hover:scale-[1.02] transition-transform duration-500">
                            <Image
                                src="/spread_tomato.png"
                                alt="Drymato gourmet jar tilted left"
                                fill
                                className="object-contain object-right"
                            />
                        </div>

                        {/* Floating Cherry Tomato Sticker */}
                        <div className="absolute -top-6 right-0 w-16 h-16 sm:w-20 sm:h-20 z-20 opacity-80 pointer-events-none animate-float-slow-reverse">
                            <Image
                                src="/tomatosticker.png"
                                alt="Tomato sticker asset"
                                fill
                                className="object-contain mix-blend-multiply"
                            />
                        </div>
                    </div>

                </div>
            </section>

            <OurJourneySection />

            {/* THE PROBLEM WE SAW
            <section className="relative w-full py-24 z-10 px-6 sm:px-8 lg:px-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left Column: Heading *
                    <div className="lg:col-span-5 space-y-6 reveal-fade-left">
                        <div className="space-y-4">
                            <Eyebrow>The Challenge</Eyebrow>
                            <h2 className="text-3xl sm:text-4xl font-bold text-forest tracking-tight leading-tight">
                                The Problem <br />
                                We Wanted to Solve
                            </h2>
                            <p className="text-foreground/70 font-medium text-sm sm:text-base leading-relaxed">
                                Pantry ingredients should simplify your cooking without compromising your health. However, home cooks face two persistent kitchen hurdles:
                            </p>
                        </div>
                        <div className="zoom-wrapper relative w-full h-48 sm:h-56 rounded-tl-[80px] rounded-br-[80px] rounded-tr-3xl rounded-bl-3xl overflow-hidden border border-sage/25 shadow-[0_15px_35px_rgba(36,56,34,0.08)] hidden lg:block">
                            <Image
                                src="/tomatoField1.jpeg"
                                alt="Lush tomato farm landscape"
                                fill
                                className="object-cover image-zoom filter saturate-95 brightness-95"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                        </div>
                    </div>

                    {/* Right Column: Problem Cards *
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-6 reveal-fade-right pt-6 sm:pt-0">
                        {/* Problem Card 1 *
                        <div className="story-card relative bg-white rounded-tl-[100px] rounded-br-[100px] rounded-tr-3xl rounded-bl-3xl border border-sage/25 shadow-[0_15px_40px_rgba(36,56,34,0.05)] hover:shadow-[0_25px_50px_rgba(36,56,34,0.10)] hover:-translate-y-2 transition-all duration-500 group pb-8">
                            <div className="relative -mt-8 mx-5 h-48 rounded-tl-[80px] rounded-br-[80px] rounded-tr-2xl rounded-bl-2xl overflow-hidden shadow-[0_15px_35px_rgba(36,56,34,0.14)] bg-sage/10 transition-all duration-500 group-hover:shadow-[0_20px_40px_rgba(36,56,34,0.22)]">
                                <Image
                                    src="/spoiledTomatos.png"
                                    alt="Spoiling fresh tomatoes"
                                    fill
                                    className="object-cover image-zoom opacity-95 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
                                <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-sm flex items-center justify-center text-brick shadow-md border border-sage/25">
                                    <FaUndoAlt className="w-4 h-4" />
                                </div>
                            </div>
                            <div className="px-6 pt-6 sm:px-8 sm:pt-8">
                                <h3 className="text-2xl font-bold text-forest mb-3 leading-snug">
                                    Fresh tomatoes spoil too quickly
                                </h3>
                                <p className="text-foreground/70 text-xs sm:text-sm font-medium leading-relaxed">
                                    Fresh tomatoes have an incredibly short shelf life. They easily bruise, rot, and get thrown away, leading to excessive food waste in homes.
                                </p>
                            </div>
                        </div>

                        {/* Problem Card 2 *
                        <div className="story-card relative bg-white rounded-tr-[100px] rounded-bl-[100px] rounded-tl-3xl rounded-br-3xl border border-sage/25 shadow-[0_15px_40px_rgba(36,56,34,0.05)] hover:shadow-[0_25px_50px_rgba(36,56,34,0.10)] hover:-translate-y-2 transition-all duration-500 group pb-8 mt-8 sm:mt-0">
                            <div className="relative -mt-8 mx-5 h-48 rounded-tr-[80px] rounded-bl-[80px] rounded-tl-2xl rounded-br-2xl overflow-hidden shadow-[0_15px_35px_rgba(36,56,34,0.14)] bg-sage/10 transition-all duration-500 group-hover:shadow-[0_20px_40px_rgba(36,56,34,0.22)]">
                                <Image
                                    src="/use_pasta.png"
                                    alt="Cooking pasta under busy schedules"
                                    fill
                                    className="object-cover image-zoom opacity-95 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
                                <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-sm flex items-center justify-center text-mustard shadow-md border border-sage/25">
                                    <FaClock className="w-4 h-4" />
                                </div>
                            </div>
                            <div className="px-6 pt-6 sm:px-8 sm:pt-8">
                                <h3 className="text-2xl font-bold text-forest mb-3 leading-snug">
                                    Everyday cooking takes too much prep
                                </h3>
                                <p className="text-foreground/70 text-xs sm:text-sm font-medium leading-relaxed">
                                    Chopping, peeling, and grinding tomatoes takes time. Between busy work schedules, crafting a rich culinary sauce from scratch feels like a chore.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section> */}

            {/* Mirrored Row: Premium Dehydrated Powders (Tomato, Garlic & Onion) *
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mt-24 lg:mt-32">

                    {/* Left Column: Narrative (Three solutions together) *
                    <div className="lg:col-span-6 space-y-8 reveal-fade-left lg:order-1 order-2">
                        <div className="space-y-4">
                            <Eyebrow>The Powder Solutions</Eyebrow>
                            <h2 className="text-3xl sm:text-4xl font-bold text-forest tracking-tight leading-tight">
                                Pure Dehydrated Seasoning Powders
                            </h2>
                            <p className="text-foreground/70 font-medium text-sm sm:text-base leading-relaxed">
                                To expand our culinary promise, we introduced a range of 100% pure dehydrated seasoning powders. Ground directly from premium farm-fresh crops, they contain zero chemical additives, fillers, or artificial colors.
                            </p>
                        </div>

                        {/* Subsection 1: Tomato Powder *
                        <div className="border-l-4 border-brick pl-4 space-y-2">
                            <h3 className="text-2xl font-bold text-forest">
                                100% Pure Tomato Powder
                            </h3>
                            <p className="text-foreground/70 text-xs sm:text-sm font-medium leading-relaxed">
                                Made directly from our naturally cured sun-dried tomatoes, it delivers the same intense, sweet-tangy essence in a highly versatile, easy-to-blend format. It serves as a natural flavor and color enhancer for gourmet soups, sauces, seasoning blends, and dry rubs.
                            </p>
                        </div>

                        {/* Subsection 2: Garlic & Onion Powder *
                        <div className="border-l-4 border-forest pl-4 space-y-2">
                            <h3 className="text-2xl font-bold text-forest">
                                Pure Garlic & Onion Powders
                            </h3>
                            <p className="text-foreground/70 text-xs sm:text-sm font-medium leading-relaxed">
                                These pantry staples deliver the ultimate sweet, pungent, and savory aroma in an ultra-fine, kitchen-ready format. They serve as essential foundation ingredients for rubs, marinades, artisan breads, gravies, and gourmet seasoning blends.
                            </p>
                        </div>

                        <p className="text-foreground/70 text-xs sm:text-sm font-medium leading-relaxed pt-4 border-t border-sage/30">
                            Designed for both creative home chefs and commercial food manufacturers looking for premium, consistent B2B ingredients, our powders ensure long shelf life, rich flavor retention, and effortless integration.
                        </p>
                    </div>

                    {/* Right Column: Visual Overlapping Mockups with all three floating pouches *
                    <div className="lg:col-span-6 relative flex items-center justify-center py-20 reveal-fade-right lg:order-2 order-1 min-h-[500px] sm:min-h-[600px]">

                        {/* Floating Garlic Powder Pouch (Left) *
                        <div className="absolute left-[2%] sm:left-[5%] md:left-[8%] lg:left-[-10%] xl:left-[-14%] bottom-[8%] sm:bottom-[10%] z-10 w-40 h-40 sm:w-60 sm:h-60 md:w-64 md:h-64 drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform duration-500 animate-float-slow transform -rotate-6">
                            <Image
                                src="/garlic_powder-removebg.png"
                                alt="Drymato Dehydrated Garlic Powder Pouch"
                                fill
                                className="object-contain"
                            />
                        </div>

                        {/* Floating Tomato Powder Pouch (Center/Top - Signature) *
                        <div className="relative z-20 w-52 h-52 sm:w-76 sm:h-76 md:w-80 md:h-80 drop-shadow-[0_20px_45px_rgba(0,0,0,0.22)] hover:scale-105 transition-transform duration-500 animate-float-slow-reverse -mt-20 sm:-mt-24">
                            <Image
                                src="/powder.png"
                                alt="Drymato Dehydrated Tomato Powder Pouch"
                                fill
                                className="object-contain"
                            />
                        </div>

                        {/* Floating Onion Powder Pouch (Right) *
                        <div className="absolute right-[2%] sm:right-[5%] md:right-[8%] lg:right-[-10%] xl:right-[-18%] bottom-[8%] sm:bottom-[10%] z-30 w-40 h-40 sm:w-68 sm:h-68 md:w-82 md:h-72 drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform duration-500 animate-float-slow transform rotate-6">
                            <Image
                                src="/onion_powder-removebg.png"
                                alt="Drymato Dehydrated Onion Powder Pouch"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                </div>
            </section> */}


            {/* HOW DRYMATO STARTED / PRODUCT PHILOSOPHY */}
            <section className="relative w-full py-16 md:py-20 bg-surface z-10 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                    {/* Left Column: Visual Container with Tree Watermark & Jars */}
                    <div className="lg:col-span-6 relative flex items-center justify-center py-14 sm:py-16 reveal-fade-left">

                        {/* Green Background Container */}
                        <div className="absolute left-[-100vw] right-[5%] sm:right-[20%] lg:right-[10%] top-0 bottom-0 min-h-[400px] rounded-tl-[300px] rounded-tr-[300px] rounded-br-[300px] rounded-bl-none bg-gradient-to-br from-forest to-forest-light shadow-[0_25px_60px_rgba(36,56,34,0.18)] pointer-events-none z-0 overflow-hidden">

                            {/* Decorative Tree Background */}
                            <div
                                className="absolute inset-0 opacity-[0.18] filter brightness-0 invert pointer-events-none"
                                style={{
                                    backgroundImage: "url('/tomatolefttree-removebg.png')",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "75% bottom",
                                    backgroundSize: "auto 95%",
                                }}
                            />
                        </div>

                        {/* Jar 1 */}
                        <div className="relative z-10 w-44 h-44 sm:w-72 sm:h-72 drop-shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:scale-105 transition-transform duration-500 -mr-16 animate-float-slow">
                            <Image
                                src="/jaar/oliver-oil-smalljaar.png"
                                alt="Olive oil marinated sun-dried tomatoes small jar"
                                fill
                                className="object-contain"
                            />
                        </div>

                        {/* Jar 2 */}
                        <div className="relative z-20 w-36 h-36 sm:w-56 sm:h-56 drop-shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:scale-105 transition-transform duration-500 mt-20 animate-float-slow-reverse">
                            <Image
                                src="/jaar/jaarslightroatateview.png"
                                alt="Classic sun-dried tomato seasoning jar"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Right Column: Narrative */}
                    <div className="lg:col-span-6 space-y-5 reveal-fade-right">
                        <Eyebrow>OUR PRODUCT PHILOSOPHY</Eyebrow>

                        {/* Two-color theme heading matching other sections */}
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
                            <span className="text-forest">More Than Just </span>
                            <span className="text-brick">Dried Food.</span>
                        </h2>

                        <div className="space-y-3 text-foreground/70 text-sm sm:text-base leading-relaxed font-medium">
                            <p>
                                We don't look at dehydration as simply removing moisture. We look at it as creating an ingredient engineered for specific performance.
                            </p>
                            <p className="text-xs sm:text-sm font-semibold text-forest uppercase tracking-wider pt-1">
                                Whether your application requires:
                            </p>
                        </div>

                        {/* Redesigned Bullet Points / Feature Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                            {[
                                "A lemon slice for premium beverages",
                                "Tomato powder for exact food formulations",
                                "Onion flakes for commercial kitchens",
                                "Aromatic herbs for refined seasoning",
                                "Dehydrated fruit for new product lines"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-forest/5 border border-forest/10">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brick mt-2 shrink-0" />
                                    <span className="text-xs sm:text-sm text-foreground/80 font-medium leading-snug">{item}</span>
                                </div>
                            ))}
                        </div>

                        <p className="text-xs sm:text-sm text-foreground/70 font-medium pt-1">
                            Because when it comes to ingredients, format, processing, and packaging matter.
                        </p>

                        {/* Standard CTA Button */}
                        <div className="pt-3">
                            <Link
                                href="/product"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-forest text-white font-semibold text-xs sm:text-sm tracking-wider uppercase shadow-md hover:bg-forest-dark transition-all duration-300 group"
                            >
                                <span>Explore Our Products</span>
                                <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                            </Link>
                        </div>
                    </div>

                </div>
            </section>

            {/* OUR FARM CONNECTION — Guava Farms banner */}
            <section className="relative w-full py-2 sm:py-6 lg:py-8 bg-surface">

                {/* Centered Banner Container */}
                <div className="relative w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] lg:w-[calc(100%-5rem)] max-w-7xl mx-auto min-h-[240px] sm:min-h-[280px] lg:min-h-[300px] flex items-center overflow-hidden rounded-[32px] shadow-[0_20px_50px_rgba(36,56,34,0.14)]">

                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/hero-section/guava-farm.png"
                            alt="Drymato guava farm"
                            fill
                            className="object-cover"
                        />

                        {/* Overlay */}
                        <div
                            className="absolute inset-0"
                            style={{
                                background:
                                    "linear-gradient(to right, rgba(33,31,26,0.28) 20%, rgba(33,31,26,0.55) 55%, rgba(33,31,26,0.75) 82%, rgba(33,31,26,0.75) 100%)"
                            }}
                        />
                    </div>

                    {/* Content — right aligned */}
                    <div className="relative z-10 w-full max-w-7xl mx-auto px-7 sm:px-10 lg:px-14 py-10">
                        <div className="w-full sm:max-w-[460px] lg:max-w-[560px] ml-auto text-left">

                            {/* Eyebrow */}
                            <div className="flex items-center gap-2 mb-2.5 text-mustard">
                                <FaLeaf className="w-3.5 h-3.5" />

                                <span className="text-xs sm:text-sm font-extrabold tracking-[0.2em] uppercase">
                                    Our Farm Connection
                                </span>
                            </div>

                            {/* Tagline */}
                            <p className="font-serif italic text-white/80 text-sm sm:text-base mb-3">
                                Our Farm-to-Ingredient Connection
                            </p>

                            {/* Heading */}
                            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-[1.15] mb-3">
                                Where It Begins: <br className="hidden sm:block" />
                                Our Guava Farms
                            </h2>

                            {/* Paragraph */}
                            <p className="text-white/85 text-sm sm:text-base font-medium leading-relaxed mb-4">
                                For guava, Drymato has a direct connection with the farm.
                            </p>

                            {/* Flow steps */}
                            <div className="flex items-center flex-wrap gap-x-2 gap-y-2 mb-4">
                                {["Grown", "Harvested", "Processed", "Dehydrated"].map((step, idx, arr) => (
                                    <div key={step} className="flex items-center gap-2">
                                        <span className="text-[10px] sm:text-xs font-bold tracking-wide uppercase text-white bg-white/10 border border-white/25 rounded-full px-2.5 py-1.5">
                                            {step}
                                        </span>

                                        {idx < arr.length - 1 && (
                                            <span className="text-white/50 text-sm">
                                                →
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Closing paragraph */}
                            <p className="text-white/85 text-sm sm:text-base font-medium leading-relaxed mb-5">
                                This connection gives us greater visibility over the raw material journey and helps us stay closer to the ingredient from the beginning.
                            </p>

                            {/* CTA */}
                            <Link
                                href="/product"
                                className="group/btn relative overflow-hidden inline-flex items-center gap-2 bg-white border-2 border-white text-forest px-6 py-2.5 rounded-xl text-xs font-extrabold tracking-widest uppercase hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 shadow-[0_6px_20px_rgba(0,0,0,0.2)] cursor-pointer z-10"
                            >
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[125%] aspect-square rounded-t-[50%] bg-forest translate-y-full transition-transform duration-[750ms] ease-in-out z-0 group-hover/btn:translate-y-[12%]" />

                                <span className="relative z-10 transition-colors duration-300 group-hover/btn:text-white">
                                    Explore Our Guava
                                </span>

                                <span className="relative z-10 transition-colors duration-300 group-hover/btn:text-white">
                                    →
                                </span>
                            </Link>

                        </div>
                    </div>
                </div>
            </section>

            {/* section component */}
            <WhoWeServeSection />

            {/* FAMOUS PRODUCTS SECTION */}
            <section className="relative w-full pt-10 pb-10 md:pt-15 md:pb-20 bg-surface z-10 overflow-hidden">
                <div className="reveal-fade-right absolute bottom-10 right-[-100px] w-64 h-64 opacity-15 pointer-events-none">
                    <Image src="/tomatotree.png" alt="decoration" width={300} height={300} className="object-contain mix-blend-multiply" />
                </div>
                <div className="reveal-fade-left absolute top-10 left-[-100px] w-64 h-64 opacity-15 pointer-events-none">
                    <Image src="/lefttree.png" alt="decoration" width={300} height={300} className="object-contain mix-blend-multiply" />
                </div>

                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">

                    {/* Centered Heading */}
                    <div className="reveal-fade-up flex flex-col items-center text-center mb-24 max-w-2xl mx-auto space-y-4">
                        <Eyebrow className="justify-center">Our Best Sellers</Eyebrow>
                        <h2 className="text-3xl sm:text-4xl font-bold text-forest tracking-tight">
                            Famous Products
                        </h2>
                        <p className="text-foreground/70 font-medium text-sm sm:text-base leading-relaxed">
                            Taste our most loved creations, handcrafted using traditional sun-curing processes and premium ingredients.
                        </p>
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-28 gap-x-8 pt-32 pb-28">
                        {FAMOUS_PRODUCTS.map((product, index) => (
                            <div
                                key={product.id}
                                className="reveal-fade-up"
                                style={{ transitionDelay: `${(index % 3) * 150}ms` }}
                            >
                                <div className="about-card relative bg-white rounded-tl-[48px] rounded-br-[48px] rounded-tr-none rounded-bl-none shadow-[0_0_10px_rgba(36,56,34,0.08)] px-8 pb-8 pt-32 border border-sage/25 transition-all duration-500 hover:shadow-[0_25px_50px_rgba(36,56,34,0.12)] hover:-translate-y-2 flex flex-col items-center group h-full">
                                    {/* Image Container (Overlapping Top) */}
                                    <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-56 h-56 flex items-center justify-center z-20">
                                        {/* Default Product Image */}
                                        <Image
                                            src={product.image}
                                            alt={product.title}
                                            width={220}
                                            height={220}
                                            className="w-full h-full object-contain transform group-hover:scale-115 transition-transform duration-500"
                                            style={{
                                                filter: "drop-shadow(0 12px 20px rgba(0,0,0,0.12))"
                                            }}
                                        />
                                    </div>

                                    {/* Title & Subtitle */}
                                    <div className="text-center mb-3">
                                        <h3 className="text-2xl font-bold text-forest leading-tight tracking-tight min-h-[56px] flex items-center justify-center px-2 group-hover:text-brick transition-colors duration-300">
                                            {product.title}
                                        </h3>
                                        {/* <p className="text-gray-500 text-sm font-semibold mt-0.5">{product.subtitle}</p> */}
                                    </div>

                                    {/* Product Short Description */}
                                    <p className="text-center text-foreground/70 font-medium text-sm leading-relaxed mb-5 flex-grow">
                                        {product.description}
                                    </p>

                                    {/* Checkmark Feature */}
                                    <div className="flex items-center justify-center gap-2 text-foreground font-semibold mb-6 text-sm">
                                        <svg className="w-4 h-4 text-forest shrink-0" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>
                                        <span>{product.feature}</span>
                                    </div>

                                    {/* Action Button */}
                                    <Link
                                        href="/contact"
                                        className="group/btn relative overflow-hidden w-fit bg-forest border-2 border-forest text-white py-2.5 px-6 rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none font-extrabold flex items-center justify-center gap-2.5 transition-all duration-300 shadow-[0_6px_20px_rgba(36,56,34,0.15)] hover:shadow-[0_8px_25px_rgba(36,56,34,0.25)] active:scale-95 cursor-pointer z-10 self-center"
                                    >
                                        {/* Background bubble shape rising from bottom to top */}
                                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[125%] aspect-square rounded-t-[50%] bg-white translate-y-full transition-transform duration-[750ms] ease-in-out z-0 group-hover/btn:translate-y-[12%]" />

                                        <span className="relative z-10 transition-colors duration-300 group-hover/btn:text-forest text-xs tracking-widest font-extrabold">
                                            SHOP NOW
                                        </span>
                                        <span className="relative z-10 w-6 h-6 bg-white text-forest rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 group-hover/btn:bg-forest group-hover/btn:text-white transform group-hover/btn:translate-x-1 shadow-sm">
                                            →
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>


            {/* WHAT MAKES OUR MODEL DIFFERENT */}
            <section className="relative w-full py-24 md:py-32 bg-background z-10 overflow-hidden">
                <div className="absolute top-1/4 left-[-100px] w-80 h-80 bg-mustard/10 filter blur-[100px] rounded-full pointer-events-none" />
                <div className="absolute bottom-10 right-[-100px] w-80 h-80 bg-sage/15 filter blur-[100px] rounded-full pointer-events-none" />
                <div className="absolute top-10 right-[-60px] w-52 h-52 opacity-[0.10] pointer-events-none select-none">
                    <Image src="/tomatotree.png" alt="" width={300} height={300} className="object-contain mix-blend-multiply" />
                </div>

                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-center">

                        {/* Left: heading + applicable formats */}
                        <div className="lg:col-span-5 space-y-6 reveal-fade-left">
                            <Eyebrow icon={FaHandshake}>WHAT MAKES OUR MODEL DIFFERENT</Eyebrow>

                            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1]">
                                <span className="text-forest">One Supply Partner.</span>{" "}
                                <span className="text-brick">Multiple Ingredient Needs.</span>
                            </h2>

                            <p className="text-foreground/75 text-base sm:text-lg font-medium leading-relaxed max-w-md">
                                Instead of sourcing every ingredient separately, businesses can discuss multiple dehydrated requirements with one supply partner.
                            </p>

                            <div className="pt-6 border-t border-sage/30 space-y-4">
                                <p className="text-forest font-bold text-base sm:text-lg">
                                    And where applicable:
                                </p>
                                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-3">
                                    {["Bulk Supply", "Private Label", "Custom Packaging", "Export"].map((item, idx, arr) => (
                                        <div key={item} className="flex items-center gap-2.5">
                                            <span className="px-4 py-2 rounded-full bg-white border border-forest/15 text-forest text-[11px] sm:text-xs font-extrabold tracking-widest uppercase shadow-[0_6px_18px_rgba(36,56,34,0.06)] hover:bg-forest hover:text-white transition-colors duration-300 cursor-default">
                                                {item}
                                            </span>
                                            {idx < arr.length - 1 && (
                                                <span className="text-brick/50 font-bold" aria-hidden="true">|</span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right: ingredient tiles */}
                        <div className="lg:col-span-7 reveal-fade-right">
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
        {[
            {
                title: "Fruits",
                icon: FaHeart,
                accent: "#a50808",
                bg: "rgba(165,8,8,0.06)",
                border: "rgba(165,8,8,0.18)",
                dark: false,
            },
            {
                title: "Vegetables",
                icon: FaSeedling,
                accent: "#243822",
                bg: "rgba(36,56,34,0.06)",
                border: "rgba(36,56,34,0.18)",
                dark: false,
            },
            {
                title: "Herbs",
                icon: FaLeaf,
                accent: "#7b8f68",
                bg: "rgba(123,143,104,0.10)",
                border: "rgba(123,143,104,0.25)",
                dark: false,
            },
            {
                title: "Powders",
                icon: FaUtensils,
                accent: "#b58a3a",
                bg: "rgba(181,138,58,0.08)",
                border: "rgba(181,138,58,0.22)",
                dark: false,
            },
            {
                title: "Custom Formats",
                icon: FaCog,
                accent: "#243822",
                bg: "rgba(36,56,34,0.06)",
                border: "rgba(36,56,34,0.18)",
                dark: false,
            },
        ].map((item, index) => {
            const ItemIcon = item.icon;

            const leaf =
                index % 2 === 0
                    ? "rounded-tl-[44px] rounded-br-[44px] rounded-tr-[12px] rounded-bl-[12px]"
                    : "rounded-tr-[44px] rounded-bl-[44px] rounded-tl-[12px] rounded-br-[12px]";

            return (
                <div
                    key={item.title}
                    className={`reveal-card group relative flex flex-col justify-between min-h-[105px] sm:min-h-[115px] p-4 sm:p-5 border shadow-[0_10px_26px_rgba(36,56,34,0.07)] transition-all duration-300 overflow-hidden ${leaf}`}
                    style={{
                        backgroundColor: item.bg,
                        borderColor: item.border,
                    }}
                >
                    {/* Number + Icon */}
                    <div className="flex items-center justify-between">
                        <span
                            className="text-[11px] font-black tracking-[0.2em]"
                            style={{ color: item.accent }}
                        >
                            {String(index + 1).padStart(2, "0")}
                        </span>

                        <div
                            className="w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                            style={{
                                backgroundColor: "rgba(255,255,255,0.75)",
                                color: item.accent,
                            }}
                        >
                            <ItemIcon className="w-4 h-4" />
                        </div>
                    </div>

                    {/* Title */}
                    <div>
                        <div
                            className="w-8 h-[2px] mb-3 group-hover:w-14 transition-all duration-500"
                            style={{
                                backgroundColor: item.accent,
                            }}
                        />

                        <h3
                            className="font-serif text-base sm:text-lg font-bold leading-snug"
                            style={{
                                color: "#243822",
                            }}
                        >
                            {item.title}
                        </h3>
                    </div>

                    {/* Arrow */}
                    {index < 4 && (
                        <span
                            className="hidden sm:flex absolute bottom-4 right-4 text-sm font-bold opacity-50 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1"
                            style={{
                                color: item.accent,
                            }}
                        >
                            →
                        </span>
                    )}
                </div>
            );
        })}
    </div>
</div>
                    </div>
                </div>
            </section>

            {/* OUR VISION */}
            <section className="relative w-full py-20 md:py-28 bg-surface z-10 overflow-hidden">
                <div className="absolute bottom-[-60px] left-[-80px] w-72 h-72 opacity-[0.06] pointer-events-none select-none">
                    <Image src="/tomatolefttree.png" alt="" width={400} height={400} className="object-contain" />
                </div>

                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-center relative z-10">

                    {/* Left: image with floating jar */}
                    <div className="lg:col-span-5 relative reveal-fade-left">
                        <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[520px] rounded-tl-[140px] rounded-br-[140px] rounded-tr-3xl rounded-bl-3xl overflow-hidden border-[8px] border-white shadow-[0_25px_60px_rgba(36,56,34,0.18)] zoom-wrapper">
                            <Image
                                src="/images/farm.png"
                                alt="Drymato farm"
                                fill
                                className="object-cover image-zoom"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-forest/40 via-transparent to-transparent" />
                        </div>

                        <div className="absolute -bottom-8 -right-4 sm:-right-10 w-40 h-48 sm:w-52 sm:h-60 z-20 pointer-events-none drop-shadow-[0_15px_25px_rgba(0,0,0,0.22)]">
                            <div className="w-full h-full relative animate-float-slow">
                                <Image
                                    src="/jaar/jaarslightroatateview.png"
                                    alt="Drymato dehydrated tomato jar"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        <div className="absolute -top-5 -left-3 w-16 h-16 sm:w-20 sm:h-20 z-20 opacity-90 pointer-events-none animate-float-slow-reverse">
                            <Image
                                src="/tomatosticker.png"
                                alt=""
                                fill
                                className="object-contain mix-blend-multiply"
                            />
                        </div>
                    </div>

                    {/* Right: narrative */}
                    <div className="lg:col-span-7 space-y-6 reveal-fade-right lg:pl-6">
                        <Eyebrow icon={FaSeedling}>OUR VISION</Eyebrow>

                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                            <span className="text-forest">Where We Are </span>
                            <span className="text-brick">Going</span>
                        </h2>

                        <div className="relative pl-7 border-l-4 border-brick">
                            <FaQuoteLeft className="absolute -top-1 -left-[22px] w-9 h-9 p-2 rounded-full bg-surface text-brick" />
                            <p className="text-forest text-lg sm:text-xl font-semibold leading-relaxed">
                                Our vision is to build Drymato into a reliable Indian platform for dehydrated ingredients — connecting agricultural produce with food businesses in India and international markets.
                            </p>
                        </div>

                        <div className="relative pl-7 border-l-4 border-mustard">
                            <p className="text-foreground/75 text-base sm:text-lg font-medium leading-relaxed">
                                We aim to continuously expand our product range, processing capabilities and supply network while staying focused on quality, consistency and responsible sourcing.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* OUR PROMISE */}
         
<section className="w-full bg-[#fff] py-20 sm:py-24 lg:py-28 px-6 md:px-10 lg:px-14 relative overflow-hidden">

    {/* ================= SOFT BACKGROUND BLOBS ================= */}
    <div className="absolute left-[3%] top-[8%] w-44 h-44 rounded-full bg-[#f3e8df]/50 blur-3xl pointer-events-none" />
    <div className="absolute right-[5%] top-[12%] w-52 h-52 rounded-full bg-[#e5eadf]/50 blur-3xl pointer-events-none" />
    <div className="absolute left-[10%] bottom-[8%] w-48 h-48 rounded-full bg-[#e9e1ed]/40 blur-3xl pointer-events-none" />
    <div className="absolute right-[12%] bottom-[5%] w-44 h-44 rounded-full bg-[#f0e7d2]/50 blur-3xl pointer-events-none" />

    <div className="max-w-7xl mx-auto relative z-10">

        {/* ================= HEADER ================= */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14 reveal-fade-up">

            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-3 mb-4">

                <span className="w-8 sm:w-10 h-[2px] bg-[#a50808]" />

                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#a50808] font-poppins">
                    OUR PROMISE
                </span>

                <span className="w-8 sm:w-10 h-[2px] bg-[#a50808]" />

            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-bold leading-[1.12] text-[#1e3d2f]">
                Simple in Principle.{" "}
                <span className="text-[#a50808]">
                    Serious in Execution.
                </span>
            </h2>

        </div>


        {/* ================= PROMISE CARDS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

            {[
                {
                    line: "Source responsibly.",
                    icon: FaSeedling,
                    bgColor: "#edf3eb",
                    iconColor: "#243822",
                    textColor: "#243822",
                    descColor: "#53604f",
                },
                {
                    line: "Process carefully.",
                    icon: FaCog,
                    bgColor: "#f7ebe8",
                    iconColor: "#a50808",
                    textColor: "#243822",
                    descColor: "#66534f",
                },
                {
                    line: "Maintain consistency.",
                    icon: FaShieldAlt,
                    bgColor: "#f7f0df",
                    iconColor: "#b58a3a",
                    textColor: "#243822",
                    descColor: "#665e4d",
                },
                {
                    line: "Pack appropriately.",
                    icon: FaBoxOpen,
                    bgColor: "#edf3eb",
                    iconColor: "#243822",
                    textColor: "#243822",
                    descColor: "#53604f",
                },
                {
                    line: "Supply reliably.",
                    icon: FaHandshake,
                    bgColor: "#f7ebe8",
                    iconColor: "#a50808",
                    textColor: "#243822",
                    descColor: "#66534f",
                },
            ].map((item, index) => {

                const PromiseIcon = item.icon;

                return (
                    <div
                        key={item.line}
                        className="relative group cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-2 shadow-sm hover:shadow-xl flex flex-col justify-between min-h-[260px] sm:min-h-[280px] p-6 sm:p-7"
                        style={{
                            backgroundColor: item.bgColor,
                            borderRadius:
                                index % 2 === 0
                                    ? "32px 85px 28px 28px"
                                    : "85px 32px 28px 28px",
                        }}
                    >

                        {/* ================= BACKGROUND NUMBER ================= */}
                        <span
                            className="absolute right-5 bottom-0 text-[100px] sm:text-[110px] font-bold font-serif leading-none opacity-[0.06] group-hover:opacity-[0.11] transition-opacity duration-500 pointer-events-none select-none"
                            style={{
                                color: item.iconColor,
                            }}
                        >
                            {String(index + 1).padStart(2, "0")}
                        </span>


                        {/* ================= TOP CONTENT ================= */}
                        <div className="relative z-10">

                            {/* Icon */}
                            <div
                                className="mb-5 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                                style={{
                                    backgroundColor: "rgba(255,255,255,0.72)",
                                    color: item.iconColor,
                                }}
                            >
                                <PromiseIcon className="w-6 h-6" />
                            </div>


                            {/* Number */}
                            <span
                                className="block text-[10px] font-bold tracking-[0.2em] uppercase mb-3"
                                style={{
                                    color: item.iconColor,
                                }}
                            >
                                {String(index + 1).padStart(2, "0")}
                            </span>


                            {/* Heading */}
                            <h3
                                className="font-serif font-bold text-xl sm:text-2xl leading-snug transition-colors duration-300 group-hover:text-[#a50808]"
                                style={{
                                    color: item.textColor,
                                }}
                            >
                                {item.line}
                            </h3>

                        </div>


                        {/* ================= BOTTOM ACCENT ================= */}
                        <div className="relative z-10 mt-8">

                            <div
                                className="w-8 h-[3px] rounded-full group-hover:w-16 transition-all duration-500"
                                style={{
                                    backgroundColor: item.iconColor,
                                }}
                            />

                        </div>

                    </div>
                );
            })}

        </div>


        {/* ================= BOTTOM STATEMENT ================= */}
        <div className="mt-12 sm:mt-14 flex items-center justify-center gap-5 reveal-fade-up">

            <span className="hidden sm:block h-px w-16 sm:w-24 bg-[#243822]/20" />

            <p className="font-serif italic text-[#a50808] text-xl sm:text-2xl lg:text-3xl text-center">
                That&apos;s the Drymato way.
            </p>

            <span className="hidden sm:block h-px w-16 sm:w-24 bg-[#243822]/20" />

        </div>

    </div>

</section>


            {/* CALL TO ACTION */}
            <section className="relative w-full py-20 px-6 sm:px-8 lg:px-10 max-w-7xl mx-auto z-10 reveal-fade-up">
                <div className="bg-forest rounded-[36px] shadow-[0_20px_50px_rgba(36,56,34,0.18)] p-10 sm:p-14 text-white text-center relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-44 h-44 bg-white/5 rounded-bl-[200px] pointer-events-none transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-tr-[150px] pointer-events-none transition-transform duration-1000 group-hover:scale-110" />

                    <div className="relative z-10 max-w-3xl mx-auto space-y-6 flex flex-col items-center">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                            Building a Food Product? <br /> Let&rsquo;s Build the <span className="text-mustard">Ingredients</span> Behind It.
                        </h2>
                        <p className="text-white/80 text-sm sm:text-base font-medium leading-relaxed max-w-lg">
                            Whether you need samples, bulk ingredients, private-label products or multiple dehydrated ingredients — tell us what you&apos;re looking for.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
                            {/* Primary button */}
                            <Link
                                href="/product"
                                className="group/btn relative overflow-hidden bg-white border-2 border-white text-forest py-3.5 px-8 rounded-xl font-extrabold flex items-center justify-center gap-3 transition-all duration-300 shadow-md hover:-translate-y-0.5 active:translate-y-0 cursor-pointer z-10 w-max text-xs tracking-widest uppercase"
                            >
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[125%] aspect-square rounded-t-[50%] bg-forest-light translate-y-full transition-transform duration-[750ms] ease-in-out z-0 group-hover/btn:translate-y-[12%]" />
                                <span className="relative z-10 transition-colors duration-300 group-hover/btn:text-white">Explore Products</span>
                                <span className="relative z-10 w-5 h-5 bg-forest text-white rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 group-hover/btn:bg-white group-hover/btn:text-forest transform group-hover/btn:translate-x-1 shadow-sm">
                                    <FaArrowRight className="w-2.5 h-2.5" />
                                </span>
                            </Link>

                            {/* Secondary button (outlined) */}
                            <Link
                                href="/contact"
                                className="group/btn relative overflow-hidden bg-transparent border-2 border-white text-white py-3.5 px-8 rounded-xl font-extrabold flex items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer z-10 w-max text-xs tracking-widest uppercase"
                            >
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[125%] aspect-square rounded-t-[50%] bg-white translate-y-full transition-transform duration-[750ms] ease-in-out z-0 group-hover/btn:translate-y-[12%]" />
                                <span className="relative z-10 transition-colors duration-300 group-hover/btn:text-forest">Request a Bulk Quote</span>
                                <span className="relative z-10 w-5 h-5 bg-white text-forest rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 group-hover/btn:bg-forest group-hover/btn:text-white transform group-hover/btn:translate-x-1 shadow-sm">
                                    <FaArrowRight className="w-2.5 h-2.5" />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* PRE-FOOTER BANNER */}
            <PreFooterBanner />
        </div>
    );
}