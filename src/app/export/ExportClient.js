// "use client";

// import { useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import {
//     FaCheckCircle,
//     FaBoxes,
//     FaTags,
//     FaChartLine,
//     FaShieldAlt,
//     FaLeaf,
//     FaHandshake,
//     FaHotel,
//     FaCoffee,
//     FaShoppingCart,
//     FaGlobe,
//     FaIndustry,
//     FaUtensils,
//     FaArrowRight,
//     FaArrowLeft,
//     FaPlane,
//     FaShip,
//     FaWarehouse,
//     FaCertificate
// } from "react-icons/fa";

// const WHY_WORK_WITH_US = [
//     {
//         title: "Consistent Ingredient Quality",
//         desc: "Strictly controlled dehydration methods to retain natural colors, rich aromas, and optimal nutrient profiles across all batches.",
//         icon: FaCheckCircle
//     },
//     {
//         title: "Bulk & B2B Supply Capacity",
//         desc: "Scalable logistics designed for hotel chains, enterprise cafes, retail marts, and commercial food processors.",
//         icon: FaBoxes
//     },
//     {
//         title: "Private Label & Custom Blends",
//         desc: "Custom mesh sizes for powders, sliced or diced formats, and white-label retail packaging tailored to your brand.",
//         icon: FaTags
//     },
//     {
//         title: "Year-Round Price Stability",
//         desc: "Mitigate fresh produce seasonal market price fluctuations with locked-in annual wholesale contracts.",
//         icon: FaChartLine
//     },
//     {
//         title: "Export-Grade Storage Packaging",
//         desc: "High-barrier vacuum sealing and moisture-proof packaging engineered for extended shelf life and ocean freight.",
//         icon: FaShieldAlt
//     },
//     {
//         title: "Traceable Farm Sourcing",
//         desc: "Direct-from-farm vegetable and fruit sourcing ensuring clean processing with zero artificial additives.",
//         icon: FaLeaf
//     }
// ];

// const INDUSTRIES = [
//     {
//         name: "Hotels & Resorts",
//         icon: FaHotel,
//         desc: "Premium dehydrated slices, flakes, and specialty powders for high-volume kitchen efficiency and 5-star standard consistency."
//     },
//     {
//         name: "Cafes & Bistro Chains",
//         icon: FaCoffee,
//         desc: "Instant seasoning powders, dried fruit toppings, and quick-rehydrating vegetable bases for rapid gourmet prep."
//     },
//     {
//         name: "Marts & Grocery Retailers",
//         icon: FaShoppingCart,
//         desc: "Retail-ready consumer pouches, private label dehydrated snack packs, and pantry-ready cooking ingredients."
//     },
//     {
//         name: "Bulk Dealers & Wholesalers",
//         icon: FaGlobe,
//         desc: "Full container loads (FCL) and palletized bulk shipments with standardized export documentation and steady inventory."
//     },
//     {
//         name: "Food Manufacturers & Processors",
//         icon: FaIndustry,
//         desc: "Industrial-grade vegetable and fruit powders for ready-to-eat meals, instant soups, snack seasonings, and sauces."
//     },
//     {
//         name: "Restaurants & Cloud Kitchens",
//         icon: FaUtensils,
//         desc: "Zero preparation waste, reduced labor costs, and long shelf stability designed for modern kitchen workflows."
//     }
// ];

// const MARKETS = [
//     { name: "United Arab Emirates", code: "AE" },
//     { name: "Saudi Arabia", code: "SA" },
//     { name: "Qatar", code: "QA" },
//     { name: "United Kingdom", code: "GB" },
//     { name: "Germany", code: "DE" },
//     { name: "Netherlands", code: "NL" },
//     { name: "Sweden", code: "SE" },
//     { name: "Norway", code: "NO" },
//     { name: "Finland", code: "FI" }
// ];

// export default function ExportClient() {
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
//                 intersectingEntries.sort((a, b) => {
//                     const rectA = a.getBoundingClientRect();
//                     const rectB = b.getBoundingClientRect();
//                     if (Math.abs(rectA.top - rectB.top) < 15) {
//                         return rectA.left - rectB.left;
//                     }
//                     return rectA.top - rectB.top;
//                 });

//                 intersectingEntries.forEach((el, index) => {
//                     const isCard = el.classList.contains("reveal-card");
//                     const delayStep = isCard ? 80 : 120;
//                     el.style.transitionDelay = `${index * delayStep}ms`;
//                     el.classList.add("is-revealed");
//                 });
//             }
//         }, {
//             root: null,
//             rootMargin: "-5% 0px -5% 0px",
//             threshold: 0.05
//         });

//         const animatedElements = document.querySelectorAll(
//             ".reveal-fade-up, .reveal-fade-left, .reveal-fade-right, .reveal-card"
//         );
//         animatedElements.forEach((el) => revealObserver.observe(el));

//         return () => {
//             animatedElements.forEach((el) => revealObserver.unobserve(el));
//         };
//     }, []);

//     return (
//         <>
//             <style dangerouslySetInnerHTML={{
//                 __html: `
//                 .reveal-fade-up {
//                     opacity: 0;
//                     transform: translateY(30px);
//                     transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
//                 }
//                 .reveal-fade-left {
//                     opacity: 0;
//                     transform: translateX(-40px);
//                     transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
//                 }
//                 .reveal-fade-right {
//                     opacity: 0;
//                     transform: translateX(40px);
//                     transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
//                 }
//                 .reveal-card {
//                     opacity: 0;
//                     transform: translateY(20px);
//                     transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s, background-color 0.3s;
//                 }
//                 .reveal-fade-up.is-revealed,
//                 .reveal-fade-left.is-revealed,
//                 .reveal-fade-right.is-revealed,
//                 .reveal-card.is-revealed {
//                     opacity: 1;
//                     transform: none !important;
//                 }
//                 .btn-bubble-rise {
//                     position: relative;
//                     overflow: hidden;
//                 }
//                 .btn-bubble-rise .bubble {
//                     position: absolute;
//                     bottom: -14px;
//                     width: 7px;
//                     height: 7px;
//                     background: rgba(255,255,255,0.55);
//                     border-radius: 9999px;
//                     opacity: 0;
//                     animation: bubble-rise 3.2s infinite ease-in;
//                     pointer-events: none;
//                 }
//                 .btn-bubble-rise .bubble:nth-child(1){ left:12%; animation-delay:0s; width:6px; height:6px; }
//                 .btn-bubble-rise .bubble:nth-child(2){ left:30%; animation-delay:0.6s; width:5px; height:5px; }
//                 .btn-bubble-rise .bubble:nth-child(3){ left:50%; animation-delay:1.2s; width:7px; height:7px; }
//                 .btn-bubble-rise .bubble:nth-child(4){ left:70%; animation-delay:1.8s; width:5px; height:5px; }
//                 .btn-bubble-rise .bubble:nth-child(5){ left:88%; animation-delay:2.4s; width:6px; height:6px; }
//                 @keyframes bubble-rise {
//                     0% { transform: translateY(0) scale(0.8); opacity: 0; }
//                     15% { opacity: 0.9; }
//                     100% { transform: translateY(-46px) scale(1.15); opacity: 0; }
//                 }
//                 @keyframes spin-slow {
//                     from { transform: rotate(0deg); }
//                     to { transform: rotate(360deg); }
//                 }
//                 .animate-spin-slow {
//                     animation: spin-slow 9s linear infinite;
//                 }
//                 `
//             }} />

//             {/* Hero Section - Editorial B2B Export Banner */}
//             <section className="relative w-full min-h-[62vh] sm:min-h-[68vh] flex items-end text-white overflow-hidden z-10">
//                 <Image
//                     src="/exporttt.png"
//                     alt="Drymato Global B2B Export Operations"
//                     fill
//                     priority
//                     className="object-cover object-center"
//                 />
//                 {/* Bottom scrim for baseline legibility */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
//                 {/* Left-side scrim, stronger where the text block sits */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />

//                 <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full pb-12 sm:pb-16 reveal-fade-up">
//                     {/* Breadcrumbs */}
//                     <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/70 mb-5 sm:mb-6">
//                         <Link href="/" className="hover:text-amber-200 transition-colors">Home</Link>
//                         <span>/</span>
//                         <span className="text-amber-200">B2B &amp; Export Solutions</span>
//                     </div>

//                     <h1 id="export-heading" className="font-serif text-4xl sm:text-5xl lg:text-[4rem] leading-[1.08] tracking-tight mb-6 max-w-3xl">
//                         <span className="font-normal text-white">Global Supply,</span>{" "}
//                         <span className="italic font-light text-amber-100">Built to Scale.</span>
//                     </h1>

//                     <div className="w-16 h-[2px] bg-[#a50808] mb-6" />

//                     <p className="text-white/85 text-sm sm:text-base max-w-xl leading-relaxed font-medium border-l-2 border-[#a50808]/70 pl-4 mb-10">
//                         Delivering premium dehydrated vegetables, fruits, and natural powders to hotels, distributors, bulk wholesalers, and global food manufacturers &mdash; with full quality assurance at every step.
//                     </p>

//                     <div className="flex flex-col sm:flex-row gap-4">
//                         <Link
//                             href="/product"
//                             className="btn-bubble-rise relative w-full sm:w-auto bg-[#a50808] hover:bg-[#8b0606] text-white text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-sm inline-flex items-center justify-center gap-2 transition-colors"
//                         >
//                             <span className="bubble"></span>
//                             <span className="bubble"></span>
//                             <span className="bubble"></span>
//                             <span className="bubble"></span>
//                             <span className="bubble"></span>
//                             Browse Wholesale Products <FaArrowRight className="w-3 h-3" />
//                         </Link>
//                         <Link
//                             href="/contact"
//                             className="w-full sm:w-auto border border-white/40 hover:border-white/70 hover:bg-white/5 text-white text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-sm inline-flex items-center justify-center transition-colors"
//                         >
//                             Request Bulk Quote
//                         </Link>
//                     </div>
//                 </div>
//             </section>

//             {/* Main Content Wrapper */}
//             <div className="relative z-20 bg-[#fff8f0] text-gray-900 font-poppins antialiased selection:bg-[#a50808] selection:text-white">

//                 {/* Our Mission Section - Compact Layout with Top-Left Tomato Vine Art */}
//                 <section className="relative overflow-hidden py-6 sm:py-10 z-10">
//                     {/* Top-Left Vintage Tomato Branch Background Accent */}
//                     <div className="absolute -top-2 -left-15 w-80 h-80 sm:w-116 sm:h-116 pointer-events-none opacity-45 z-0 select-none mix-blend-multiply">
//                         <Image
//                             src="/tomatotree.png"
//                             alt=""
//                             fill
//                             className="object-contain object-top-left -scale-x-100 rotate-12"
//                         />
//                     </div>

//                     <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
//                         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
//                             {/* Left Content Column */}
//                             <div className="lg:col-span-6 space-y-4 reveal-fade-left">
//                                 <span className="text-[14px] font-bold uppercase tracking-widest text-[#a50808]">
//                                     Our Mission & Scope
//                                 </span>
//                                 <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-gray-900 tracking-tight">
//                                     About Drymato Ingredients
//                                 </h2>
//                                 <div className="space-y-3 text-gray-700 text-xs sm:text-[15px] leading-relaxed max-w-xl font-normal">
//                                     <p>
//                                         At Drymato, we specialize in high-grade processing and export of dehydrated vegetables, dehydrated fruits, and concentrated natural powders. Engineered for performance in modern culinary and manufacturing environments, our products lock in natural taste, fiber, and nutritional values without chemical preservatives.
//                                     </p>
//                                     <p>
//                                         From bulk raw materials for commercial food processing to refined ingredient formats for hotels, cafes, marts, and international distributors, we provide consistent year-round supply chains that scale with your business demands.
//                                     </p>
//                                 </div>
//                             </div>

//                             {/* Right Side Image */}
//                             <div className="lg:col-span-6 flex items-center justify-center lg:justify-end reveal-fade-right">
//                                 <div className="relative w-full max-w-lg aspect-[4/3] sm:aspect-square sm:scale-110 transition-transform">
//                                     <Image
//                                         src="/images/export-side-image.png"
//                                         alt="Drymato Dehydrated Food Ingredients"
//                                         fill
//                                         className="object-contain"
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>

//                 {/* Global Supply Infrastructure Section */}
//                 <section className="py-20 sm:py-28 bg-[#fff8f0] overflow-hidden">
//                     <div className="max-w-7xl mx-auto px-6 sm:px-8">
//                         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-10 items-center">
//                             {/* Left Content */}
//                             <div className="lg:col-span-6 space-y-5 reveal-fade-left">
//                                 <div className="inline-flex items-center gap-2 text-sm font-bold text-[#a50808]">
//                                     <FaArrowLeft className="w-3 h-3" />
//                                     Operations &amp; Logistics
//                                     <FaArrowRight className="w-3 h-3" />
//                                 </div>
//                                 <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold text-gray-900 tracking-tight leading-[1.15]">
//                                     Engineered for Scale,<br />
//                                     <span className="text-[#a50808]">Delivered with Precision.</span>
//                                 </h2>
//                                 <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal max-w-lg">
//                                     Backed by secure operations, state-of-the-art warehousing, and seamless air and ocean freight logistics, Drymato ensures continuous, uninterrupted export routes across international trade hubs.
//                                 </p>

//                                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 pt-3">
//                                     {[
//                                         { icon: FaPlane, title: "Air Freight", desc: "Rapid dispatch for perishable and high-priority orders." },
//                                         { icon: FaShip, title: "Ocean Freight", desc: "FCL & LCL shipping with full ocean transport support." },
//                                         { icon: FaWarehouse, title: "Controlled Storage", desc: "Moisture-free facilities ensuring prolonged shelf health." },
//                                         { icon: FaCertificate, title: "Custom Clearance", desc: "Standardized export certifications and documentation." }
//                                     ].map((item, index) => {
//                                         const ItemIcon = item.icon;
//                                         return (
//                                             <div key={index} className="flex items-start gap-3.5">
//                                                 <div className="w-12 h-12 rounded-full bg-[#a50808] flex items-center justify-center text-white shrink-0 shadow-[0_8px_18px_rgba(165,8,8,0.25)]">
//                                                     <ItemIcon className="w-[18px] h-[18px]" />
//                                                 </div>
//                                                 <div className="pt-1">
//                                                     <h4 className="text-gray-900 font-bold text-sm mb-1">{item.title}</h4>
//                                                     <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
//                                                 </div>
//                                             </div>
//                                         );
//                                     })}
//                                 </div>

//                                 {/* CTA - same pill + rising-fill animation used across the site */}
//                                 <Link
//                                     href="/contact"
//                                     className="group relative overflow-hidden inline-flex bg-[#a50808] text-white pl-6 pr-2 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide items-center gap-3 transition-all duration-300 no-underline shadow-[0_4px_20px_rgba(165,8,8,0.25)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer mt-5"
//                                 >
//                                     <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[125%] aspect-square rounded-t-[50%] bg-white translate-y-full transition-transform duration-[750ms] ease-in-out z-0 group-hover:translate-y-[12%]" />
//                                     <span className="relative z-10 uppercase tracking-widest transition-colors duration-300 group-hover:text-[#a50808]">
//                                         View Export Capabilities
//                                     </span>
//                                     <span className="relative z-10 w-7 h-7 bg-white text-[#a50808] rounded-full flex items-center justify-center shadow-sm transform group-hover:translate-x-1 group-hover:bg-[#a50808] group-hover:text-white transition-all duration-300">
//                                         <FaArrowRight className="w-3.5 h-3.5" />
//                                     </span>
//                                 </Link>
//                             </div>

//                             {/* Right Image - triangular notch cut into the left edge, apex pointing into the image */}
//                             <div className="lg:col-span-6 reveal-fade-right">
//                                 <div className="relative w-full max-w-md mx-auto lg:max-w-none lg:mx-0 pl-10 sm:pl-14 lg:-translate-x-10">
//                                     <div
//                                         className="relative w-full overflow-hidden shadow-2xl"
//                                         style={{
//                                             aspectRatio: "5 / 4",
//                                             clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 18% 50%, 0% 0%)",
//                                             WebkitClipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 18% 50%, 0% 0%)"
//                                         }}
//                                     >
//                                         <Image
//                                             src="/warehouse-image3.png"
//                                             alt="Drymato Global Supply Logistics Facility"
//                                             fill
//                                             className="object-cover"
//                                         />
//                                     </div>

//                                     {/* Rotating "Explore More" badge sitting on the triangle notch */}
//                                     <div className="absolute left-[calc(18%+2.5rem)] sm:left-[calc(18%+3.5rem)] top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 z-20">
//                                         <div className="relative w-full h-full">
//                                             {/* <div className="absolute inset-0 animate-spin-slow"> */}
//                                             <div className="absolute inset-0">
//                                                 <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
//                                                     <defs>
//                                                         <path
//                                                             id="exploreCirclePath"
//                                                             d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
//                                                         />
//                                                     </defs>
//                                                     <circle cx="50" cy="50" r="49" fill="#fff8f0" stroke="#a50808" strokeWidth="0.75" />
//                                                     <text fontSize="7" fontWeight="700" letterSpacing="1.5" fill="#a50808">
//                                                         <textPath href="#exploreCirclePath" startOffset="0%">
//                                                             EXPLORE MORE • EXPLORE MORE •
//                                                         </textPath>
//                                                     </text>
//                                                 </svg>
//                                             </div>
//                                             <div className="absolute inset-0 flex items-center justify-center">
//                                                 <FaArrowRight className="w-4 h-4 text-[#a50808] -rotate-45" />
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>

//                 {/* Why Work With Drymato */}
//                 <section className="py-20 sm:py-28 border-b border-gray-200/80">
//                     <div className="max-w-7xl mx-auto px-6 sm:px-8">
//                         <div className="max-w-xl mb-16 space-y-3 reveal-fade-up">
//                             <span className="text-xs font-bold uppercase tracking-widest text-[#a50808]">
//                                 Value Proposition
//                             </span>
//                             <h2 className="text-3xl sm:text-4xl font-bold font-serif text-gray-900">
//                                 Why Work With Drymato
//                             </h2>
//                             <p className="text-gray-600 text-sm sm:text-base">
//                                 Partner with us to streamline kitchen prep, optimize logistics, and maintain uniform food quality.
//                             </p>
//                         </div>

//                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                             {WHY_WORK_WITH_US.map((item, index) => {
//                                 const IconComponent = item.icon;
//                                 return (
//                                     <div
//                                         key={index}
//                                         className="reveal-card p-8 bg-white border border-gray-200 rounded-sm"
//                                     >
//                                         <div className="space-y-4">
//                                             <div className="w-10 h-10 rounded-sm bg-[#a50808]/10 text-[#a50808] flex items-center justify-center">
//                                                 <IconComponent className="w-5 h-5" />
//                                             </div>
//                                             <h3 className="text-lg font-bold text-gray-900">
//                                                 {item.title}
//                                             </h3>
//                                             <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
//                                                 {item.desc}
//                                             </p>
//                                         </div>
//                                     </div>
//                                 );
//                             })}
//                         </div>
//                     </div>
//                 </section>

//                 {/* Packaging Options */}
//                 <section className="max-w-7xl mx-auto px-6 sm:px-8 py-20 sm:py-28 border-b border-gray-200/80">
//                     <div className="max-w-xl mb-16 space-y-3 reveal-fade-up">
//                         <span className="text-xs font-bold uppercase tracking-widest text-[#a50808]">
//                             Packaging Formats
//                         </span>
//                         <h2 className="text-3xl sm:text-4xl font-bold font-serif text-gray-900">
//                             Commercial Packaging Options
//                         </h2>
//                         <p className="text-gray-600 text-sm sm:text-base">
//                             Engineered to safeguard freshness, prevent moisture ingress, and survive long-distance logistics.
//                         </p>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                         <div className="reveal-card border border-gray-200 bg-white rounded-sm overflow-hidden flex flex-col">
//                             <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
//                                 <Image
//                                     src="/bulk vaccum bags.png"
//                                     alt="Industrial Bulk Vacuum Packaging"
//                                     fill
//                                     className="object-cover"
//                                 />
//                             </div>
//                             <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
//                                 <div>
//                                     <span className="text-[10px] uppercase tracking-widest font-bold text-[#a50808] block mb-1">
//                                         Industrial & Export
//                                     </span>
//                                     <h3 className="text-lg font-bold text-gray-900 mb-2">Bulk Industrial Vacuum Bags</h3>
//                                     <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
//                                         Multi-layer foil & heavy-duty vacuum bags designed for bulk dealers, food processors, and containerized export freight.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="reveal-card border border-gray-200 bg-white rounded-sm overflow-hidden flex flex-col">
//                             <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
//                                 <Image
//                                     src="/5 kg vaccum bag.png"
//                                     alt="5 KG HoReCa Professional Packaging"
//                                     fill
//                                     className="object-cover"
//                                 />
//                             </div>
//                             <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
//                                 <div>
//                                     <span className="text-[10px] uppercase tracking-widest font-bold text-[#a50808] block mb-1">
//                                         HoReCa Standard
//                                     </span>
//                                     <h3 className="text-lg font-bold text-gray-900 mb-2">5 KG Commercial Packs</h3>
//                                     <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
//                                         Perfectly sized for hotel kitchens, restaurant chains, cafes, and catering operators needing easy portion handling.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="reveal-card border border-gray-200 bg-white rounded-sm overflow-hidden flex flex-col">
//                             <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
//                                 <Image
//                                     src="/warehouse-image2.png"
//                                     alt="Controlled Storage Logistics"
//                                     fill
//                                     className="object-cover"
//                                 />
//                             </div>
//                             <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
//                                 <div>
//                                     <span className="text-[10px] uppercase tracking-widest font-bold text-[#a50808] block mb-1">
//                                         Warehousing & Stock
//                                     </span>
//                                     <h3 className="text-lg font-bold text-gray-900 mb-2">Controlled Environment Storage</h3>
//                                     <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
//                                         Stored in low-humidity, temperature-managed dry facilities to maintain vibrant natural pigment and flavor notes.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>

//                 {/* Industries We Serve Section */}
//                 <section className="bg-white py-20 sm:py-28 border-b border-gray-200/80">
//                     <div className="max-w-7xl mx-auto px-6 sm:px-8">
//                         <div className="max-w-xl mb-16 space-y-3 reveal-fade-up">
//                             <span className="text-xs font-bold uppercase tracking-widest text-[#a50808]">
//                                 Key Client Sectors
//                             </span>
//                             <h2 className="text-3xl sm:text-4xl font-bold font-serif text-gray-900">
//                                 Industries We Serve
//                             </h2>
//                             <p className="text-gray-600 text-sm sm:text-base">
//                                 Supplying tailored ingredient solutions to specific B2B food operations worldwide.
//                             </p>
//                         </div>

//                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                             {INDUSTRIES.map((ind, index) => {
//                                 const IconComponent = ind.icon;
//                                 return (
//                                     <div
//                                         key={index}
//                                         className="reveal-card p-6 border border-gray-200 bg-[#fff8f0]/20 rounded-sm space-y-3"
//                                     >
//                                         <div className="w-10 h-10 rounded-sm bg-[#a50808]/10 text-[#a50808] flex items-center justify-center">
//                                             <IconComponent className="w-5 h-5" />
//                                         </div>
//                                         <h3 className="text-base font-bold text-gray-900">{ind.name}</h3>
//                                         <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{ind.desc}</p>
//                                     </div>
//                                 );
//                             })}
//                         </div>
//                     </div>
//                 </section>

//                 {/* Global Target Markets */}
//                 <section className="py-20 sm:py-28 border-b border-gray-200/80">
//                     <div className="max-w-7xl mx-auto px-6 sm:px-8">
//                         <div className="max-w-xl mb-16 space-y-3 reveal-fade-up">
//                             <span className="text-xs font-bold uppercase tracking-widest text-[#a50808]">
//                                 Export Infrastructure
//                             </span>
//                             <h2 className="text-3xl sm:text-4xl font-bold font-serif text-gray-900">
//                                 Active Export Destinations
//                             </h2>
//                             <p className="text-gray-600 text-sm sm:text-base">
//                                 Established air and ocean freight routes serving key global commercial regions.
//                             </p>
//                         </div>

//                         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
//                             {MARKETS.map((market, index) => (
//                                 <div
//                                     key={index}
//                                     className="reveal-card flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-sm"
//                                 >
//                                     <div className="w-7 h-5 relative shrink-0 overflow-hidden border border-gray-200 rounded-sm">
//                                         <img
//                                             src={`https://flagcdn.com/w80/${market.code.toLowerCase()}.png`}
//                                             alt={market.name}
//                                             className="w-full h-full object-cover"
//                                         />
//                                     </div>
//                                     <span className="text-xs sm:text-sm font-semibold text-gray-800 truncate">
//                                         {market.name}
//                                     </span>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </section>

//                 {/* CTA Section */}
//                 <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 sm:py-28">
//                     <div className="reveal-fade-up bg-[#a50808] text-white p-10 sm:p-16 rounded-sm text-center space-y-6">
//                         <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest bg-white/10 px-3 py-1.5 rounded-sm">
//                             <FaHandshake className="w-3.5 h-3.5" /> B2B Sourcing Partner
//                         </div>
//                         <h2 className="text-3xl sm:text-5xl font-bold font-serif leading-tight">
//                             Need Custom Products or Wholesale Quotes?
//                         </h2>
//                         <p className="text-red-100 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-normal">
//                             Our sales team provides custom price structures, product samples, and specs for dehydrated fruits, vegetables, and powders.
//                         </p>
//                         <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
//                             <Link
//                                 href="/product"
//                                 className="w-full sm:w-auto bg-white text-[#a50808] text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-sm hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
//                             >
//                                 Explore Product Specs <FaArrowRight className="w-3 h-3" />
//                             </Link>
//                             <Link
//                                 href="/contact"
//                                 className="w-full sm:w-auto border border-white/40 text-white text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-sm hover:bg-white/10 transition-colors inline-flex items-center justify-center"
//                             >
//                                 Contact B2B Sales
//                             </Link>
//                         </div>
//                     </div>
//                 </section>
//             </div>
//         </>
//     );
// }



"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { parsePhoneNumberFromString, getCountryCallingCode } from "libphonenumber-js";
import { apiRequest, validators } from "@/context/AuthContext";
import {
    FaTags, FaHandshake, FaHotel, FaCoffee, FaShoppingCart, FaGlobe, FaIndustry, FaUtensils, FaArrowRight,
    FaBox, FaRulerCombined, FaChartBar, FaGlobeAsia, FaBuilding, FaMonument, FaLandmark, FaTree, FaPlaceOfWorship,
    FaCheckCircle, FaTimes, FaChevronDown
} from "react-icons/fa";

/* ================= EXPORT PACKAGING ================= */
const PACKAGING_IMAGE = "/5 kg vaccum bag.png";

const PACKAGING_OPTIONS = [
    {
        title: "Bulk Packaging",
        sub: "Cost-effective packaging for large-volume orders, designed for secure handling, storage and transportation.",
        bg: "bg-[#b5573a]",
        text: "text-white",
        subText: "text-white/70"
    },
    {
        title: "Vacuum Packaging",
        sub: "Helps protect products from moisture, air and contamination while supporting longer shelf life.",
        bg: "bg-[#ddd6c6]",
        text: "text-[#2b2b2b]",
        subText: "text-[#2b2b2b]/60"
    },
    {
        title: "Retail Pouches",
        sub: "Retail-ready pouches offering convenient handling, reliable protection and a clean presentation.",
        bg: "bg-[#5f6b3f]",
        text: "text-white",
        subText: "text-white/70"
    },
    {
        title: "Custom Printed Packaging",
        sub: "Customized printed packaging designed around your brand identity, product and market requirements.",
        bg: "bg-[#a50808]",
        text: "text-white",
        subText: "text-white/70"
    },
    {
        title: "Private-Label Packaging",
        sub: "Packaging tailored with your brand name, design and product information for your target market.",
        bg: "bg-[#b5573a]",
        text: "text-white",
        subText: "text-white/70"
    },
    {
        title: "Export Cartons",
        sub: "Durable export-grade cartons designed for secure stacking, handling and international transportation.",
        bg: "bg-[#ddd6c6]",
        text: "text-[#2b2b2b]",
        subText: "text-[#2b2b2b]/60"
    }
];

const STEPS = [
    {
        title: "Share Your Requirement",
        desc: "Tell us what you need so we can understand your exact requirement from the start.",
        tags: ["Product", "Quantity", "Packaging", "Destination"],
    },
    {
        title: "Product & Specification Discussion",
        desc: "We discuss the product, grade and specifications so everything is clear before moving ahead.",
    },
    {
        title: "Sample / Approval, Where Applicable",
        desc: "Where required, samples are shared for your evaluation and approval before finalising the order.",
    },
    {
        title: "Commercial Quotation",
        desc: "You receive a clear commercial quotation based on the agreed product, packaging and destination.",
    },
    {
        title: "Production & Packaging",
        desc: "Your order is produced and packed as per the approved specifications and packaging requirements.",
    },
    {
        title: "Dispatch / Shipment Coordination",
        desc: "We coordinate dispatch and shipment so your order reaches its destination smoothly.",
    },
];

/* Pastel colors for step badges / tags (inactive state) */
const STEP_PASTELS = [
    { badge: "bg-[#f3e8df]", tag: "bg-[#f3e8df] border-[#d8c1b3]/70" },
    { badge: "bg-[#e5eadf]", tag: "bg-[#e5eadf] border-[#c7d0bd]/70" },
    { badge: "bg-[#e9e1ed]", tag: "bg-[#e9e1ed] border-[#cfc2d5]/70" },
    { badge: "bg-[#f0e7d2]", tag: "bg-[#f0e7d2] border-[#d8c8a8]/70" },
    { badge: "bg-[#e1e9e5]", tag: "bg-[#e1e9e5] border-[#bfd0c7]/70" },
    { badge: "bg-[#f3dfdf]", tag: "bg-[#f3dfdf] border-[#d9bcbc]/70" },
];

/* "We can discuss" - 5 points with different pastel colors */
const DISCUSS_ITEMS = [
    {
        text: "Bulk Export Supply",
        Icon: FaBox,
        cls: "bg-[#f3e8df] border-[#d8c1b3]/70 hover:border-[#a50808]/40",
        iconCls: "text-[#a50808]",
    },
    {
        text: "Private Label",
        Icon: FaTags,
        cls: "bg-[#e5eadf] border-[#c7d0bd]/70 hover:border-[#5f6b3f]/50",
        iconCls: "text-[#5f6b3f]",
    },
    {
        text: "Custom Packaging",
        Icon: FaRulerCombined,
        cls: "bg-[#e9e1ed] border-[#cfc2d5]/70 hover:border-[#75627d]/50",
        iconCls: "text-[#75627d]",
    },
    {
        text: "Multiple Product Sourcing",
        Icon: FaGlobe,
        cls: "bg-[#f0e7d2] border-[#d8c8a8]/70 hover:border-[#8b7040]/50",
        iconCls: "text-[#8b7040]",
    },
    {
        text: "Commercial Quantities",
        Icon: FaChartBar,
        cls: "bg-[#e1e9e5] border-[#bfd0c7]/70 hover:border-[#527263]/50",
        iconCls: "text-[#527263]",
    },
];

const SHARE_ITEMS = [
    { text: "Product", cls: "bg-[#f3e8df] border-[#d8c1b3]/70" },
    { text: "Quantity", cls: "bg-[#e5eadf] border-[#c7d0bd]/70" },
    { text: "Specification", cls: "bg-[#e9e1ed] border-[#cfc2d5]/70" },
    { text: "Packaging", cls: "bg-[#f0e7d2] border-[#d8c8a8]/70" },
    { text: "Destination", cls: "bg-[#e1e9e5] border-[#bfd0c7]/70" },
];


/* ================= EXPORT MARKETS MAP ================= */
const MAP_W = 1144;
const MAP_H = 680;
const INDIA = { x: 675, y: 374 };


const REGIONS = [
    {
        id: "me",
        name: "Middle East",
        icon: FaBuilding,
        countries: "UAE • Saudi Arabia • Qatar • Oman • Kuwait",
        cardLines: ["UAE • Saudi Arabia", "Qatar • Oman • Kuwait"],
        x: 611, y: 357,
        card: { left: 26, bottom: 14, width: 172 },
        route: "M675 374 Q650 350 611 357",
    },
    {
        id: "na",
        name: "North America",
        icon: FaLandmark,
        countries: "USA • Canada",
        cardLines: ["USA • Canada"],
        x: 186, y: 275,
        card: { left: -51, bottom: 48, width: 150 },
        route: "M675 374 C560 200 300 190 186 275",
    },
    {
        id: "eu",
        name: "UK & Europe",
        icon: FaMonument,
        countries: "UK • Germany • Netherlands • France • Italy • Spain",
        cardLines: ["UK • Germany • Netherlands", "France • Italy • Spain"],
        x: 482, y: 248,
        card: { left: -21, bottom: 48, width: 205 },
        route: "M675 374 C640 270 560 230 482 248",
    },
    {
        id: "af",
        name: "Africa",
        icon: FaTree,
        countries: "Kenya • South Africa • Egypt • Senegal",
        cardLines: ["Kenya • South Africa", "Egypt • Senegal"],
        x: 472, y: 478,
        card: { left: 28, bottom: -4, width: 158 },
        route: "M675 374 C640 470 560 520 472 478",
    },
    {
        id: "ap",
        name: "Asia-Pacific",
        icon: FaPlaceOfWorship,
        countries: "Singapore • Malaysia • Indonesia • Philippines • Australia",
        cardLines: ["Singapore • Malaysia", "Indonesia • Philippines", "Australia"],
        x: 920, y: 532,
        card: { left: 24, bottom: 6, width: 168 },
        route: "M675 374 C760 420 850 470 920 532",
    },
];

function ExportMarketsMap() {
    const wrapRef = useRef(null);
    const [scale, setScale] = useState(0.5);
    const [active, setActive] = useState(null);

    useEffect(() => {
        const el = wrapRef.current;
        if (!el) return;
        const ro = new ResizeObserver(([entry]) => {
            setScale(entry.contentRect.width / MAP_W);
        });
        ro.observe(el);
        return () => ro.disconnect();
    }, []);

    const showCards = scale >= 0.6;
    // chhote screen par pins thode bade dikhein
    const pinScale = Math.min(2.2, Math.max(1, 0.7 / scale));

    return (
        <section className="relative overflow-hidden bg-[#FBF8F1] py-16 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
                <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)] lg:gap-10">

                    {/* ============ LEFT ============ */}
                    <div className="relative z-20">
                        <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-[#a50808] sm:text-sm">
                            <span className="h-[2px] w-8 bg-[#a50808]" />
                            <FaGlobeAsia className="h-4 w-4" />
                            <span>Export Markets</span>
                        </div>

                        <h2 className="max-w-[540px] font-serif text-[2.4rem] font-extrabold leading-[1.03] tracking-[-0.03em] text-forest sm:text-[3rem] xl:text-[3.5rem]">
                            Connecting Indian <br />
                            Ingredients With <br />
                            <span className="text-red-900">Global Markets</span>
                        </h2>

                        <p className="mt-6 max-w-[520px] text-sm leading-6 text-gray-600 sm:text-[15px] sm:leading-7">
                            Drymato is building supply relationships across international markets where dehydrated fruits, vegetables, herbs and powders are relevant for food and ingredient businesses.
                        </p>

                        <Link
                            href="/contact"
                            className="group relative mt-7 inline-flex items-center gap-3 overflow-hidden rounded-full bg-forest py-2.5 pl-6 pr-2.5 text-xs font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:-translate-y-1"
                        >
                            <span className="absolute bottom-0 left-1/2 h-[180%] w-[130%] -translate-x-1/2 translate-y-full rounded-t-[50%] bg-white transition-transform duration-700 group-hover:translate-y-[45%]" />
                            <span className="relative z-10 transition-colors duration-300 group-hover:text-[#a50808]">
                                View Export Capabilities
                            </span>
                            <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white text-forest transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#243822] group-hover:text-white">
                                <FaArrowRight className="h-3.5 w-3.5" />
                            </span>
                        </Link>
                    </div>

                    {/* ============ RIGHT (MAP) ============ */}
                    <div className="relative z-10 w-full min-w-0">
                        {/* wrapper: width = available, height = scaled stage */}
                        <div ref={wrapRef} className="relative w-full" style={{ height: MAP_H * scale }}>
                            {/* Fixed-size stage, scaled to fit */}
                            <div
                                className="absolute left-0 top-0"
                                style={{
                                    width: MAP_W,
                                    height: MAP_H,
                                    transform: `scale(${scale})`,
                                    transformOrigin: "top left",
                                }}
                            >
                                <img
                                    src="/map.png"
                                    alt="Drymato global export markets"
                                    className="absolute inset-0 h-full w-full select-none object-contain mix-blend-multiply"
                                    draggable={false}
                                />

                                {/* Routes */}
                                <svg
                                    viewBox={`0 0 ${MAP_W} ${MAP_H}`}
                                    className="pointer-events-none absolute inset-0 h-full w-full"
                                >
                                    {REGIONS.map((r, i) => (
                                        <path
                                            key={r.id}
                                            d={r.route}
                                            fill="none"
                                            stroke="#a50808"
                                            strokeWidth="2"
                                            strokeDasharray="5 9"
                                            className={`export-route ${i % 2 ? "export-route-delay" : ""}`}
                                        />
                                    ))}
                                </svg>

                                {/* India origin dot */}
                                <div
                                    className="absolute z-20"
                                    style={{ left: INDIA.x, top: INDIA.y }}
                                >
                                    <span className="market-pin-pulse absolute -left-4 -top-4 h-8 w-8 rounded-full bg-[#243822]/25" />
                                    <span className="absolute -left-2 -top-2 h-4 w-4 rounded-full border-2 border-white bg-[#243822] shadow" />
                                    <span className="absolute left-3 top-2 whitespace-nowrap rounded-full bg-[#243822] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                                        India · Origin
                                    </span>
                                </div>

                                {/* Pins + cards */}
                                {REGIONS.map((r) => {
                                    const isActive = active === r.id;
                                    return (
                                        <div
                                            key={r.id}
                                            className="absolute"
                                            style={{
                                                left: r.x,
                                                top: r.y,
                                                zIndex: isActive ? 50 : 30,
                                            }}
                                        >
                                            {/* glow at the tip */}
                                            <span className="market-pin-pulse absolute -left-9 -top-4 h-8 w-[72px] rounded-full bg-[#a50808]/25 blur-md" />

                                            {/* Pin — tip sits exactly on (x, y) */}
                                            <div
                                                className="absolute"
                                                style={{
                                                    left: 0,
                                                    top: 0,
                                                    transform: `translate(-50%, -100%) scale(${isActive ? pinScale * 1.15 : pinScale})`,
                                                    transformOrigin: "50% 100%",
                                                    transition: "transform 0.25s",
                                                }}
                                            >
                                                <svg width="36" height="46" viewBox="0 0 36 46" className="drop-shadow-[0_6px_10px_rgba(165,8,8,0.4)]">
                                                    <path
                                                        d="M18 0C8 0 0 7.8 0 17.5 0 30 18 46 18 46s18-16 18-28.5C36 7.8 28 0 18 0z"
                                                        fill="#a50808"
                                                    />
                                                    <circle cx="18" cy="17" r="6.5" fill="#fff" />
                                                </svg>
                                            </div>

                                            {/* Card */}
                                            {showCards && (
                                                <div
                                                    className="market-card-float absolute rounded-[14px] border bg-white px-4 py-3 transition-all duration-300"
                                                    style={{
                                                        left: r.card.left,
                                                        bottom: r.card.bottom,
                                                        width: r.card.width,
                                                        borderColor: isActive ? "rgba(165,8,8,0.5)" : "rgba(165,8,8,0.15)",
                                                        boxShadow: isActive
                                                            ? "0 14px 34px rgba(165,8,8,0.25)"
                                                            : "0 12px 30px rgba(24,60,43,0.14)",
                                                    }}
                                                >
                                                    <h4 className="font-serif text-[17px] font-extrabold leading-tight text-[#a50808]">
                                                        {r.name}
                                                    </h4>
                                                    <p className="mt-1 text-[13px] leading-[1.35] text-gray-600">
                                                        {r.cardLines.map((l, i) => (
                                                            <span key={i} className="block">{l}</span>
                                                        ))}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}


                            </div>
                        </div>

                        {/* Note */}
                        <div className="mt-4 flex items-start gap-3 rounded-2xl border border-[#a50808]/10 bg-[#a50808]/[0.045] px-4 py-3">
                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#a50808]/10 text-[11px] font-bold text-[#a50808]">
                                i
                            </div>
                            <p className="text-[11px] leading-5 text-gray-500 sm:text-xs">
                                <span className="font-bold text-[#243822]">Note:</span>{" "}
                                These represent target/export markets, not a claim that Drymato has already shipped to every listed country.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ================= EXPORT INQUIRY FORM ================= */
const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || "https://backend.globalshopify.com";
const DOMAIN = process.env.NEXT_PUBLIC_STORE_NAME || "Drymato";
const PRODUCT_SEARCH_PARAM = "search"; // use the same query param your /product page uses for search
const PRODUCT_PAGE_SIZE = 30;
const MAX_PRODUCTS = 20;

const BUYER_TYPES = ["Importer", "Distributor", "Wholesaler", "Food Manufacturer", "HORECA", "Other"];
const PRODUCT_FORMS = ["Powder", "Flakes", "Granules", "Slices", "Whole", "Other"];

// Quantity per product: a preset (sent as quantityKg + packagingRequirement) or custom (numeric input opens)
const QTY_OPTIONS = [
    { value: "5 KG", label: "5 KG" },
    { value: "10 KG", label: "10 KG" },
    { value: "20 KG", label: "20 KG" },
    { value: "25 KG", label: "25 KG" },
    { value: "custom", label: "Custom quantity" },
];

const SHIPPING_TERMS = [
    { value: "FOB", title: "FOB – Free On Board", desc: "We load at the Indian port, you arrange freight" },
    { value: "CIF", title: "CIF – Cost, Insurance & Freight", desc: "We arrange freight and insurance to your port" },
    { value: "CFR", title: "CFR – Cost & Freight", desc: "We arrange freight to your port, you insure" },
    { value: "EXW", title: "EXW – Ex Works", desc: "You collect the goods from our facility" },
    { value: "Not Sure", title: "Not Sure", desc: "Our team will guide you" },
];

const INITIAL_FORM = {
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    countryIso: "",
    website: "",
    buyerType: "",
    buyerTypeOther: "",
    destination: "",
    shippingTerms: "",
    sampleRequired: "No",
    message: "",
    hp: "", // honeypot - must stay empty
};

const NAME_RE = /^[\p{L}][\p{L}\p{M} .'-]*$/u;
const WEBSITE_RE = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(:\d+)?(\/\S*)?$/i;

const inputBase =
    "w-full rounded-lg border bg-white px-3.5 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition-colors focus:border-[#1e3d2f] focus:ring-1 focus:ring-[#1e3d2f] disabled:cursor-wait disabled:opacity-70";

/* "Drymato Dehydrated Tomato | Slices, Flakes | ..." -> "Drymato Dehydrated Tomato" */
const shortName = (n) => {
    const s = String(n || "");
    return (s.split("|")[0] || s).trim();
};

function callingCodeOf(iso) {
    try {
        return getCountryCallingCode(iso);
    } catch {
        return "";
    }
}

// Same rule as the backend: valid number, same country, same calling code
function parsePhone(raw, iso, countryName) {
    const cleaned = String(raw || "").trim();
    if (!cleaned) return { error: "Please enter your contact number" };
    const parsed = parsePhoneNumberFromString(cleaned, iso);
    if (!parsed || !parsed.isValid()) {
        return { error: `Enter a valid number for ${countryName || "the selected country"}` };
    }
    if (parsed.country !== iso || parsed.countryCallingCode !== callingCodeOf(iso)) {
        return { error: "This number does not match the selected country code" };
    }
    return { parsed };
}

const qtyKgOf = (p) => (p.qtyChoice === "custom" ? Number(p.qtyCustom) : parseFloat(p.qtyChoice));

function customQtyError(q) {
    if (String(q).trim() === "") return "Enter quantity in KG";
    const n = Number(q);
    if (!Number.isFinite(n) || n < 0.01) return "Minimum 0.01 KG";
    if (n > 100000000) return "Enter a realistic quantity";
    return "";
}

function validateInquiry(v, selected, country) {
    const e = {};

    const name = v.fullName.trim().replace(/\s+/g, " ");
    if (!name) e.fullName = "Full name is required";
    else if (name.length < 2) e.fullName = "Name must be at least 2 characters";
    else if (name.length > 80) e.fullName = "Name must be 80 characters or fewer";
    else if (!NAME_RE.test(name)) e.fullName = "Name can only contain letters, spaces and . ' -";

    const company = v.companyName.trim();
    if (!company) e.companyName = "Company name is required";
    else if (company.length < 2 || company.length > 120) e.companyName = "Company name must be 2 to 120 characters";

    const emailError = validators.email(v.email);
    if (emailError) e.email = emailError;

    if (!country) e.country = "Please select your country";
    if (!v.phone.trim()) e.phone = "Please enter your contact number";
    else if (!country) e.phone = "Select your country code first";
    else {
        const p = parsePhone(v.phone, v.countryIso, country.name);
        if (p.error) e.phone = p.error;
    }

    if (v.website.trim() && !WEBSITE_RE.test(v.website.trim())) {
        e.website = "Enter a valid website, e.g. https://www.example.com";
    }

    if (!v.buyerType) e.buyerType = "Please select your buyer type";
    else if (v.buyerType === "Other") {
        const t = v.buyerTypeOther.trim();
        if (!t) e.buyerTypeOther = "Please specify your buyer type";
        else if (t.length < 2 || t.length > 60) e.buyerTypeOther = "Must be 2 to 60 characters";
    }

    if (selected.length === 0) e.products = "Please select at least one product";
    selected.forEach((p) => {
        if (!p.productForm) e[`form-${p.key}`] = "Select product form";
        else if (p.productForm === "Other") {
            const t = p.productFormOther.trim();
            if (!t) e[`formOther-${p.key}`] = "Please specify the product form";
            else if (t.length < 2 || t.length > 60) e[`formOther-${p.key}`] = "Must be 2 to 60 characters";
        }

        if (!p.qtyChoice) e[`qty-${p.key}`] = "Select quantity";
        else if (p.qtyChoice === "custom") {
            const m = customQtyError(p.qtyCustom);
            if (m) e[`qtyCustom-${p.key}`] = m;
        }
    });

    const dest = v.destination.trim();
    if (!dest) e.destination = "Destination port / city is required";
    else if (dest.length < 2 || dest.length > 100) e.destination = "Enter a valid destination (2 to 100 characters)";

    if (v.message.length > 2000) e.message = "Message must be 2000 characters or fewer";

    return e;
}

function Field({ label, required, error, htmlFor, children, className = "" }) {
    return (
        <div className={className}>
            <label htmlFor={htmlFor} className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#1e3d2f]">
                {label}
                {required && <span className="text-[#a50808]"> *</span>}
            </label>
            {children}
            {error && (
                <p className="mt-1.5 text-xs font-medium text-[#a50808]" role="alert">{error}</p>
            )}
        </div>
    );
}

/* ---------- Type + select in one place: searchable multi-select over the Drymato catalogue ---------- */
function ProductPicker({ selected, onToggle, hasError, limitReached }) {
    const wrapRef = useRef(null);
    const searchRef = useRef(null);
    const triggerRef = useRef(null);
    const reqId = useRef(0);
    const [query, setQuery] = useState("");
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);
    const [failed, setFailed] = useState(false);
    const [highlight, setHighlight] = useState(0);

    const load = useCallback(async (search, pageNo, append) => {
        const id = ++reqId.current;
        setLoading(true);
        setFailed(false);
        try {
            const params = new URLSearchParams({ page: String(pageNo), limit: String(PRODUCT_PAGE_SIZE) });
            if (search) params.set(PRODUCT_SEARCH_PARAM, search);
            const res = await fetch(`${API_BASE}/product/public/store/${encodeURIComponent(DOMAIN)}?${params}`);
            if (!res.ok) throw new Error("failed");
            const json = await res.json();
            if (id !== reqId.current) return; // a newer request replaced this one

            const mapped = (json?.data?.products || [])
                .filter((p) => p?._id && p?.name)
                .map((p) => ({ id: String(p._id), name: shortName(p.name) }));

            setItems((prev) =>
                append ? [...prev, ...mapped.filter((m) => !prev.some((x) => x.id === m.id))] : mapped
            );
            setPage(json?.data?.page || pageNo);
            setTotalPages(json?.data?.totalPages || 1);
            setHighlight(0);
        } catch {
            if (id === reqId.current) setFailed(true);
        } finally {
            if (id === reqId.current) setLoading(false);
        }
    }, []);

    // fetch on open and (debounced) while typing
    useEffect(() => {
        if (!open) return;
        const t = setTimeout(() => load(query.trim(), 1, false), query ? 300 : 0);
        return () => clearTimeout(t);
    }, [query, open, load]);

    // focus the search box when the panel opens
    useEffect(() => {
        if (open) setTimeout(() => searchRef.current?.focus(), 0);
    }, [open]);

    // close on outside click
    useEffect(() => {
        const onDown = (e) => {
            if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
        };
        document.addEventListener("mousedown", onDown);
        return () => document.removeEventListener("mousedown", onDown);
    }, []);

    const q = query.trim().toLowerCase();
    const visible = items.filter((i) => !q || i.name.toLowerCase().includes(q));
    const isPicked = (id) => selected.some((s) => s.key === id);

    const toggle = (item) => {
        if (!item) return;
        if (!isPicked(item.id) && limitReached) return;
        onToggle(item);
    };

    const onKeyDown = (e) => {
        if (e.key === "ArrowDown") {
            e.preventDefault();
            setHighlight((h) => Math.min(h + 1, Math.max(visible.length - 1, 0)));
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setHighlight((h) => Math.max(h - 1, 0));
        } else if (e.key === "Enter") {
            e.preventDefault(); // never submit the form from here
            toggle(visible[highlight]);
        } else if (e.key === "Escape") {
            setOpen(false);
            triggerRef.current?.focus();
        }
    };

    return (
        <div ref={wrapRef} className="relative">
            <button
                ref={triggerRef}
                id="exp-products"
                type="button"
                aria-haspopup="listbox"
                aria-expanded={open}
                onClick={() => setOpen((o) => !o)}
                className={`${inputBase} flex items-center justify-between gap-3 text-left ${hasError ? "border-[#a50808]" : "border-gray-300"}`}
            >
                <span className={selected.length ? "text-gray-900" : "text-gray-400"}>
                    {selected.length
                        ? `${selected.length} product${selected.length > 1 ? "s" : ""} selected`
                        : "Select products"}
                </span>
                <FaChevronDown className={`h-3 w-3 shrink-0 text-gray-500 transition-transform ${open ? "rotate-180" : ""}`} />
            </button>

            {open && (
                <div className="absolute z-30 mt-2 w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl">
                    <div className="border-b border-gray-100 p-2.5">
                        <input
                            ref={searchRef}
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyDown={onKeyDown}
                            autoComplete="off"
                            placeholder="Search products..."
                            aria-label="Search products"
                            className="w-full rounded-lg border border-[#1e3d2f]/40 px-3.5 py-2.5 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-[#1e3d2f]"
                        />
                    </div>

                    <ul role="listbox" aria-multiselectable="true" className="max-h-64 overflow-y-auto py-1">
                        {visible.map((item, i) => {
                            const picked = isPicked(item.id);
                            const disabled = !picked && limitReached;
                            return (
                                <li
                                    key={item.id}
                                    role="option"
                                    aria-selected={picked}
                                    aria-disabled={disabled}
                                    onMouseEnter={() => setHighlight(i)}
                                    onClick={() => toggle(item)}
                                    className={`flex items-center gap-3 px-4 py-2.5 text-sm ${disabled ? "cursor-not-allowed text-gray-300" : "cursor-pointer text-gray-800"
                                        } ${i === highlight ? "bg-[#f4f6f4]" : ""}`}
                                >
                                    <input
                                        type="checkbox"
                                        checked={picked}
                                        readOnly
                                        tabIndex={-1}
                                        className="pointer-events-none h-4 w-4 shrink-0 accent-[#1e3d2f]"
                                    />
                                    <span>{item.name}</span>
                                </li>
                            );
                        })}

                        {loading && <li className="px-4 py-2.5 text-xs text-gray-500">Loading products...</li>}

                        {!loading && failed && (
                            <li className="px-4 py-2.5 text-xs text-[#a50808]">Could not load products. Please try again.</li>
                        )}

                        {!loading && !failed && visible.length === 0 && (
                            <li className="px-4 py-2.5 text-xs text-gray-500">No matching products</li>
                        )}

                        {!loading && !failed && page < totalPages && (
                            <li className="border-t border-gray-100 px-4 py-2">
                                <button
                                    type="button"
                                    onClick={() => load(query.trim(), page + 1, true)}
                                    className="text-xs font-bold uppercase tracking-wider text-[#1e3d2f] hover:text-[#a50808]"
                                >
                                    Load more
                                </button>
                            </li>
                        )}
                    </ul>

                    {limitReached && (
                        <p className="border-t border-gray-100 px-4 py-2 text-[11px] text-gray-500">
                            Maximum {MAX_PRODUCTS} products per inquiry
                        </p>
                    )}
                </div>
            )}
        </div>
    );
}

function ExportInquiryForm() {
    const [values, setValues] = useState(INITIAL_FORM);
    // [{ key, productId, name, productForm, productFormOther, qtyChoice, qtyCustom }]
    const [selected, setSelected] = useState([]);
    const [errors, setErrors] = useState({});
    const [attempted, setAttempted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [serverError, setServerError] = useState("");
    const [geo, setGeo] = useState(null);

    // Country data is large, so it is loaded lazily as a separate chunk (same library as checkout)
    useEffect(() => {
        let alive = true;
        import("country-state-city")
            .then((m) => alive && setGeo({ Country: m.Country }))
            .catch(() => alive && setServerError("Could not load country data. Please refresh the page."));
        return () => {
            alive = false;
        };
    }, []);

    // Only countries with a known calling code can pass the backend phone check
    const countries = useMemo(() => {
        if (!geo) return [];
        return geo.Country.getAllCountries()
            .map((c) => ({ isoCode: c.isoCode, name: c.name, dial: callingCodeOf(c.isoCode) }))
            .filter((c) => c.dial)
            .sort((a, b) => a.name.localeCompare(b.name));
    }, [geo]);

    const country = useMemo(
        () => countries.find((c) => c.isoCode === values.countryIso) || null,
        [countries, values.countryIso]
    );

    const clearErr = (...names) =>
        setErrors((prev) => {
            const next = { ...prev };
            names.forEach((n) => delete next[n]);
            return next;
        });

    const runField = (name, nextValues = values, nextSelected = selected) => {
        const all = validateInquiry(nextValues, nextSelected, country);
        setErrors((prev) => ({ ...prev, [name]: all[name] }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const next = { ...values, [name]: value };
        setValues(next);
        if (attempted || errors[name]) runField(name, next);
        if (name === "buyerType" && value !== "Other") clearErr("buyerTypeOther");
    };

    const handleBlur = (e) => runField(e.target.name);

    // Country code and Country are one value: backend needs the phone to belong to the selected country
    const handleCountryChange = (e) => {
        setValues((prev) => ({ ...prev, countryIso: e.target.value }));
        clearErr("country", "phone");
    };

    const handlePhoneChange = (e) => {
        const value = e.target.value.replace(/[^\d+\s\-()]/g, "");
        const next = { ...values, phone: value };
        setValues(next);
        if (attempted || errors.phone) runField("phone", next);
    };

    /* ---------- products ---------- */
    const toggleProduct = (item) => {
        const exists = selected.some((s) => s.key === item.id);
        let next;
        if (exists) {
            next = selected.filter((s) => s.key !== item.id);
            clearErr(`form-${item.id}`, `formOther-${item.id}`, `qty-${item.id}`, `qtyCustom-${item.id}`);
        } else {
            if (selected.length >= MAX_PRODUCTS) return;
            next = [
                ...selected,
                { key: item.id, productId: item.id, name: item.name, productForm: "", productFormOther: "", qtyChoice: "", qtyCustom: "" },
            ];
        }
        setSelected(next);
        if (attempted) setErrors(validateInquiry(values, next, country));
        else clearErr("products");
    };

    const updateProduct = (key, patch) => {
        const next = selected.map((p) => (p.key === key ? { ...p, ...patch } : p));
        setSelected(next);
        if (attempted) setErrors(validateInquiry(values, next, country));
    };

    const cls = (name) => `${inputBase} ${errors[name] ? "border-[#a50808]" : "border-gray-300"}`;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (submitting) return;
        setServerError("");
        setAttempted(true);

        const found = validateInquiry(values, selected, country);
        setErrors(found);
        const firstKey = Object.keys(found)[0];
        if (firstKey) {
            document.getElementById(`exp-${firstKey}`)?.focus();
            return;
        }

        // bots fill the hidden field - pretend success, send nothing
        if (values.hp) {
            setSubmitted(true);
            return;
        }

        const { parsed } = parsePhone(values.phone, values.countryIso, country.name);
        const website = values.website.trim();

        const payload = {
            domain: DOMAIN,
            fullName: values.fullName.trim().replace(/\s+/g, " "),
            companyName: values.companyName.trim(),
            email: values.email.trim().toLowerCase(),
            phone: parsed.nationalNumber,
            country: country.name,
            countryCode: `+${country.dial}`,
            countryIsoCode: country.isoCode,
            websiteUrl: website ? (/^https?:\/\//i.test(website) ? website : `https://${website}`) : "",
            buyerType: values.buyerType,
            buyerTypeOther: values.buyerType === "Other" ? values.buyerTypeOther.trim() : "",
            // products: selected.map((p) => ({
            //     productId: p.productId,
            //     quantityKg: qtyKgOf(p),
            //     productForm: p.productForm,
            //     productFormOther: p.productForm === "Other" ? p.productFormOther.trim() : "",
            //     packagingRequirement: p.qtyChoice === "custom" ? "Custom Bulk Packaging" : p.qtyChoice,
            // })),
            products: selected.map((p) => {
                const item = {
                    productId: p.productId,
                    productForm: p.productForm,
                    productFormOther: p.productForm === "Other" ? p.productFormOther.trim() : "",
                };
                if (p.qtyChoice === "custom") {
                    // custom quantity: send the typed KG value
                    item.quantityKg = Number(p.qtyCustom);
                    item.packagingRequirement = "Custom Bulk Packaging";
                } else {
                    // preset quantity: only the selected option, no duplicate quantityKg
                    item.packagingRequirement = p.qtyChoice;
                }
                return item;
            }),
            destinationPortCity: values.destination.trim(),
            preferredShippingTerms: values.shippingTerms,
            sampleRequired: values.sampleRequired === "Yes",
            additionalRequirements: values.message.trim(),
        };

        setSubmitting(true);
        try {
            await apiRequest("/exportinquiry/submitexportinquiry", { method: "POST", body: payload, authed: false });
            setSubmitted(true);
            setValues(INITIAL_FORM);
            setSelected([]);
            setErrors({});
            setAttempted(false);
            window.scrollTo({ top: document.getElementById("export-inquiry")?.offsetTop ?? 0, behavior: "smooth" });
        } catch (err) {
            const message = err?.message || "Unable to submit your inquiry. Please try again.";
            if (/phone|mobile/i.test(message)) setErrors({ phone: message });
            setServerError(message);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section
            id="export-inquiry"
            className="relative w-full scroll-mt-20 border-b border-gray-200/80 bg-white py-16 sm:py-24 lg:py-28"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-8">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
                    {/* ============ LEFT: INTRO ============ */}
                    <div className="reveal-fade-up lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
                        <div className="mb-4 flex items-center gap-3">
                            <span className="h-[2px] w-8 bg-[#a50808]" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#a50808] sm:text-xs">
                                Export Inquiry
                            </span>
                        </div>
                        <h2 className="font-serif text-3xl font-bold leading-[1.15] text-[#1e3d2f] sm:text-4xl lg:text-[42px]">
                            Tell Us What
                            <br />
                            <span className="text-[#a50808]">You Need</span>
                        </h2>
                        <p className="mt-5 max-w-md text-sm leading-relaxed text-gray-600 sm:text-base">
                            Looking for premium dehydrated vegetables, fruits, herbs or food ingredients in bulk? Fill out the form with your requirements and our team will contact you with a customised export quotation.
                        </p>
                        <p className="mt-4 text-xs italic text-gray-500">Fields marked with * are mandatory.</p>
                    </div>

                    {/* ============ RIGHT: FORM ============ */}
                    <div className="reveal-fade-up lg:col-span-8">
                        <div className="rounded-[24px] border border-[#1e3d2f]/10 bg-[#f4f6f4] p-4 shadow-[0_12px_30px_rgba(30,61,47,0.06)] sm:rounded-[28px] sm:p-8 lg:p-10">
                            {submitted ? (
                                <div className="py-10 text-center" role="status">
                                    <FaCheckCircle className="mx-auto mb-5 h-12 w-12 text-[#5f6b3f]" />
                                    <h3 className="font-serif text-2xl font-bold text-[#1e3d2f] sm:text-3xl">
                                        Thank you for your export inquiry!
                                    </h3>
                                    <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-gray-600 sm:text-base">
                                        Your request has been submitted successfully. Our team will review your requirements and contact you shortly.
                                    </p>
                                    <p className="mt-8 font-serif text-lg font-bold tracking-wide text-[#a50808]">DRYMATO</p>
                                    <p className="mt-1 text-xs italic text-gray-500">
                                        Premium Dehydrated Food Ingredients | Bulk Supply | Export Inquiries
                                    </p>
                                    <button
                                        type="button"
                                        onClick={() => setSubmitted(false)}
                                        className="mt-8 text-xs font-bold uppercase tracking-widest text-[#1e3d2f] underline underline-offset-4 hover:text-[#a50808]"
                                    >
                                        Submit another inquiry
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} noValidate className="space-y-10">
                                    {/* honeypot */}
                                    <input
                                        type="text"
                                        name="hp"
                                        value={values.hp}
                                        onChange={handleChange}
                                        tabIndex={-1}
                                        autoComplete="off"
                                        aria-hidden="true"
                                        className="absolute -left-[9999px] h-0 w-0 opacity-0"
                                    />

                                    {/* ================= Buyer Information ================= */}
                                    <fieldset>
                                        <legend className="mb-5 font-serif text-xl font-bold text-[#1e3d2f]">Buyer Information</legend>
                                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                            <Field label="Full Name" required htmlFor="exp-fullName" error={errors.fullName}>
                                                <input id="exp-fullName" name="fullName" type="text" autoComplete="name" value={values.fullName} onChange={handleChange} onBlur={handleBlur} className={cls("fullName")} placeholder="Your full name" maxLength={80} />
                                            </Field>

                                            <Field label="Company Name" required htmlFor="exp-companyName" error={errors.companyName}>
                                                <input id="exp-companyName" name="companyName" type="text" autoComplete="organization" value={values.companyName} onChange={handleChange} onBlur={handleBlur} className={cls("companyName")} placeholder="Your company" maxLength={120} />
                                            </Field>

                                            <Field label="Email Address" required htmlFor="exp-email" error={errors.email}>
                                                <input id="exp-email" name="email" type="email" autoComplete="email" value={values.email} onChange={handleChange} onBlur={handleBlur} className={cls("email")} placeholder="you@company.com" maxLength={254} />
                                            </Field>

                                            <Field label="WhatsApp / Contact Number" required htmlFor="exp-phone" error={errors.phone}>
                                                <div className="flex gap-2">
                                                    <select
                                                        name="dialCode"
                                                        aria-label="Country code"
                                                        value={values.countryIso}
                                                        onChange={handleCountryChange}
                                                        disabled={!geo}
                                                        className={`${inputBase} ${errors.phone ? "border-[#a50808]" : "border-gray-300"} !w-[104px] shrink-0 !px-2.5 sm:!w-[116px]`}
                                                    >
                                                        <option value="">{geo ? "Code" : "..."}</option>
                                                        {countries.map((c) => (
                                                            <option key={c.isoCode} value={c.isoCode} title={c.name}>
                                                                {c.isoCode} +{c.dial}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <input id="exp-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel-national" value={values.phone} onChange={handlePhoneChange} onBlur={handleBlur} className={`${cls("phone")} min-w-0`} placeholder="Contact number" maxLength={20} />
                                                </div>
                                            </Field>

                                            <Field label="Country" required htmlFor="exp-country" error={errors.country}>
                                                <select id="exp-country" name="country" value={values.countryIso} onChange={handleCountryChange} onBlur={() => runField("country")} disabled={!geo} className={cls("country")}>
                                                    <option value="">{geo ? "Select country" : "Loading countries..."}</option>
                                                    {countries.map((c) => (
                                                        <option key={c.isoCode} value={c.isoCode}>{c.name}</option>
                                                    ))}
                                                </select>
                                            </Field>

                                            <Field label="Company Website" htmlFor="exp-website" error={errors.website}>
                                                <input id="exp-website" name="website" type="url" inputMode="url" value={values.website} onChange={handleChange} onBlur={handleBlur} className={cls("website")} placeholder="https://www.example.com (optional)" />
                                            </Field>

                                            <Field label="Buyer Type" required htmlFor="exp-buyerType" error={errors.buyerType} className={values.buyerType === "Other" ? "" : "sm:col-span-2"}>
                                                <select id="exp-buyerType" name="buyerType" value={values.buyerType} onChange={handleChange} onBlur={handleBlur} className={cls("buyerType")}>
                                                    <option value="">Select buyer type</option>
                                                    {BUYER_TYPES.map((o) => (
                                                        <option key={o} value={o}>{o}</option>
                                                    ))}
                                                </select>
                                            </Field>

                                            {values.buyerType === "Other" && (
                                                <Field label="Specify Buyer Type" required htmlFor="exp-buyerTypeOther" error={errors.buyerTypeOther}>
                                                    <input id="exp-buyerTypeOther" name="buyerTypeOther" type="text" value={values.buyerTypeOther} onChange={handleChange} onBlur={handleBlur} className={cls("buyerTypeOther")} placeholder="e.g. Retail chain, Trader" maxLength={60} />
                                                </Field>
                                            )}
                                        </div>
                                    </fieldset>

                                    {/* ================= Product Requirements ================= */}
                                    <fieldset>
                                        <legend className="mb-5 font-serif text-xl font-bold text-[#1e3d2f]">Product Requirements</legend>
                                        <div className="space-y-4">
                                            <Field label="Products Required" required htmlFor="exp-products" error={errors.products}>
                                                <ProductPicker
                                                    selected={selected}
                                                    onToggle={toggleProduct}
                                                    hasError={!!errors.products}
                                                    limitReached={selected.length >= MAX_PRODUCTS}
                                                />
                                            </Field>

                                            {/* One card per selected product */}
                                            {selected.length > 0 && (
                                                <ul className="space-y-3">
                                                    {selected.map((p) => (
                                                        <li key={p.key} className="rounded-xl border border-gray-200 bg-white p-4">
                                                            <div className="mb-4 flex items-start justify-between gap-3">
                                                                <p className="text-sm font-bold leading-snug text-gray-900">{p.name}</p>
                                                                <button
                                                                    type="button"
                                                                    onClick={() => toggleProduct({ id: p.key })}
                                                                    aria-label={`Remove ${p.name}`}
                                                                    className="mt-0.5 shrink-0 text-gray-400 transition-colors hover:text-[#a50808]"
                                                                >
                                                                    <FaTimes className="h-3.5 w-3.5" />
                                                                </button>
                                                            </div>

                                                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                                                <Field label="Product Form" required htmlFor={`exp-form-${p.key}`} error={errors[`form-${p.key}`]}>
                                                                    <select
                                                                        id={`exp-form-${p.key}`}
                                                                        value={p.productForm}
                                                                        onChange={(e) => updateProduct(p.key, { productForm: e.target.value })}
                                                                        onBlur={() => runField(`form-${p.key}`)}
                                                                        className={cls(`form-${p.key}`)}
                                                                    >
                                                                        <option value="">Select form</option>
                                                                        {PRODUCT_FORMS.map((o) => (
                                                                            <option key={o} value={o}>{o}</option>
                                                                        ))}
                                                                    </select>
                                                                </Field>

                                                                <Field label="Quantity" required htmlFor={`exp-qty-${p.key}`} error={errors[`qty-${p.key}`]}>
                                                                    <select
                                                                        id={`exp-qty-${p.key}`}
                                                                        value={p.qtyChoice}
                                                                        onChange={(e) =>
                                                                            updateProduct(p.key, {
                                                                                qtyChoice: e.target.value,
                                                                                qtyCustom: e.target.value === "custom" ? p.qtyCustom : "",
                                                                            })
                                                                        }
                                                                        onBlur={() => runField(`qty-${p.key}`)}
                                                                        className={cls(`qty-${p.key}`)}
                                                                    >
                                                                        <option value="">Select quantity</option>
                                                                        {QTY_OPTIONS.map((o) => (
                                                                            <option key={o.value} value={o.value}>{o.label}</option>
                                                                        ))}
                                                                    </select>
                                                                </Field>

                                                                {p.productForm === "Other" && (
                                                                    <Field label="Specify Form" required htmlFor={`exp-formOther-${p.key}`} error={errors[`formOther-${p.key}`]} className="sm:col-start-1">
                                                                        <input
                                                                            id={`exp-formOther-${p.key}`}
                                                                            type="text"
                                                                            value={p.productFormOther}
                                                                            onChange={(e) => updateProduct(p.key, { productFormOther: e.target.value })}
                                                                            onBlur={() => runField(`formOther-${p.key}`)}
                                                                            className={cls(`formOther-${p.key}`)}
                                                                            placeholder="e.g. Crushed, Cubes"
                                                                            maxLength={60}
                                                                        />
                                                                    </Field>
                                                                )}

                                                                {p.qtyChoice === "custom" && (
                                                                    <Field label="Custom Quantity (KG)" required htmlFor={`exp-qtyCustom-${p.key}`} error={errors[`qtyCustom-${p.key}`]} className="sm:col-start-2">
                                                                        <input
                                                                            id={`exp-qtyCustom-${p.key}`}
                                                                            type="number"
                                                                            inputMode="decimal"
                                                                            min="0.01"
                                                                            step="any"
                                                                            value={p.qtyCustom}
                                                                            onChange={(e) => updateProduct(p.key, { qtyCustom: e.target.value })}
                                                                            onBlur={() => runField(`qtyCustom-${p.key}`)}
                                                                            className={cls(`qtyCustom-${p.key}`)}
                                                                            placeholder="e.g. 500"
                                                                        />
                                                                    </Field>
                                                                )}
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </fieldset>

                                    {/* ================= Shipping & Export Details ================= */}
                                    <fieldset>
                                        <legend className="mb-5 font-serif text-xl font-bold text-[#1e3d2f]">Shipping &amp; Export Details</legend>
                                        <div className="space-y-5">
                                            <Field label="Destination Port / City" required htmlFor="exp-destination" error={errors.destination}>
                                                <input id="exp-destination" name="destination" type="text" value={values.destination} onChange={handleChange} onBlur={handleBlur} className={cls("destination")} placeholder="e.g. Jebel Ali, Dubai" maxLength={100} />
                                            </Field>

                                            <div>
                                                <div className="mb-2 flex items-center justify-between">
                                                    <span className="block text-xs font-bold uppercase tracking-wider text-[#1e3d2f]">Preferred Shipping Terms</span>
                                                    {values.shippingTerms && (
                                                        <button type="button" onClick={() => setValues((p) => ({ ...p, shippingTerms: "" }))} className="text-[11px] font-semibold text-gray-500 underline underline-offset-2 hover:text-[#a50808]">
                                                            Clear
                                                        </button>
                                                    )}
                                                </div>
                                                <div role="radiogroup" aria-label="Preferred shipping terms" className="space-y-2">
                                                    {SHIPPING_TERMS.map((t) => {
                                                        const checked = values.shippingTerms === t.value;
                                                        return (
                                                            <label
                                                                key={t.value}
                                                                className={`flex cursor-pointer items-start gap-3 rounded-lg border bg-white px-4 py-3 transition-colors sm:items-center ${checked ? "border-[#1e3d2f] ring-1 ring-[#1e3d2f]" : "border-gray-300 hover:border-[#1e3d2f]/50"
                                                                    }`}
                                                            >
                                                                <input
                                                                    type="radio"
                                                                    name="shippingTerms"
                                                                    value={t.value}
                                                                    checked={checked}
                                                                    onChange={handleChange}
                                                                    className="mt-0.5 h-4 w-4 shrink-0 accent-[#a50808] sm:mt-0"
                                                                />
                                                                <span className="flex min-w-0 flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-3">
                                                                    <span className="text-sm font-bold text-gray-900">{t.title}</span>
                                                                    <span className="hidden text-xs text-gray-400 sm:inline">|</span>
                                                                    <span className="text-xs text-gray-500">{t.desc}</span>
                                                                </span>
                                                            </label>
                                                        );
                                                    })}
                                                </div>
                                            </div>

                                            <div>
                                                <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#1e3d2f]">Sample Required?</span>
                                                <div className="flex items-center gap-6">
                                                    {["Yes", "No"].map((opt) => (
                                                        <label key={opt} className="flex cursor-pointer items-center gap-2 text-sm font-medium text-gray-800">
                                                            <input type="radio" name="sampleRequired" value={opt} checked={values.sampleRequired === opt} onChange={handleChange} className="h-4 w-4 accent-[#a50808]" />
                                                            {opt}
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>

                                    {/* ================= Additional Information ================= */}
                                    <fieldset>
                                        <legend className="mb-5 font-serif text-xl font-bold text-[#1e3d2f]">Additional Information</legend>
                                        <Field label="Additional Requirements / Message" htmlFor="exp-message" error={errors.message}>
                                            <textarea id="exp-message" name="message" rows={5} value={values.message} onChange={handleChange} onBlur={handleBlur} maxLength={2000} className={`${cls("message")} resize-y`} placeholder="Please mention any specific product specifications, mesh size, packaging preferences, required documents, or delivery timeline." />
                                            <p className="mt-1 text-right text-[11px] text-gray-400">{values.message.length}/2000</p>
                                        </Field>
                                    </fieldset>

                                    {serverError && (
                                        <div className="rounded-lg border border-[#a50808]/30 bg-[#a50808]/5 px-4 py-3 text-sm font-medium text-[#a50808]" role="alert">
                                            {serverError}
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={submitting}
                                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-forest px-6 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-md transition-all duration-200 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                                    >
                                        {submitting ? "Submitting..." : "Request Export Quote"}
                                        {!submitting && <FaArrowRight className="h-3.5 w-3.5" />}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function ExportClient() {

    const [active, setActive] = useState(0);
    const [paused, setPaused] = useState(false);

    // Auto-advance
    useEffect(() => {
        if (paused) return;
        const id = setInterval(() => {
            setActive((prev) => (prev + 1) % STEPS.length);
        }, 3000);
        return () => clearInterval(id);
    }, [paused]);

    useEffect(() => {
        const SELECTOR = ".reveal-fade-up, .reveal-fade-left, .reveal-fade-right, .reveal-card";
        const observed = new WeakSet();
        const visible = new WeakSet();

        const revealObserver = new IntersectionObserver((entries) => {
            const intersectingEntries = [];

            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    visible.add(entry.target);
                    intersectingEntries.push(entry.target);
                } else {
                    visible.delete(entry.target);
                    entry.target.classList.remove("is-revealed");
                    entry.target.style.transitionDelay = "";
                }
            });

            if (intersectingEntries.length > 0) {
                intersectingEntries.sort((a, b) => {
                    const rectA = a.getBoundingClientRect();
                    const rectB = b.getBoundingClientRect();
                    if (Math.abs(rectA.top - rectB.top) < 15) {
                        return rectA.left - rectB.left;
                    }
                    return rectA.top - rectB.top;
                });

                intersectingEntries.forEach((el, index) => {
                    const isCard = el.classList.contains("reveal-card");
                    const delayStep = isCard ? 80 : 120;
                    el.style.transitionDelay = `${index * delayStep}ms`;
                    el.classList.add("is-revealed");
                });
            }
        }, {
            root: null,
            rootMargin: "-5% 0px -5% 0px",
            threshold: 0.05
        });

        // naye elements ko observe karo
        const scan = () => {
            document.querySelectorAll(SELECTOR).forEach((el) => {
                if (!observed.has(el)) {
                    observed.add(el);
                    revealObserver.observe(el);
                }
            });
        };

        const restore = () => {
            document.querySelectorAll(SELECTOR).forEach((el) => {
                if (visible.has(el) && !el.classList.contains("is-revealed")) {
                    el.classList.add("is-revealed");
                }
            });
        };

        scan();

        const mutationObserver = new MutationObserver(() => {
            scan();
            restore();
        });
        mutationObserver.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ["class"],
        });

        return () => {
            mutationObserver.disconnect();
            revealObserver.disconnect();
        };
    }, []);

    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
                .reveal-fade-up {
                    opacity: 0;
                    transform: translateY(30px);
                    transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .reveal-fade-left {
                    opacity: 0;
                    transform: translateX(-40px);
                    transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .reveal-fade-right {
                    opacity: 0;
                    transform: translateX(40px);
                    transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .reveal-card {
                    opacity: 0;
                    transform: translateY(20px);
                    transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s, background-color 0.3s;
                }
                .reveal-fade-up.is-revealed,
                .reveal-fade-left.is-revealed,
                .reveal-fade-right.is-revealed,
                .reveal-card.is-revealed {
                    opacity: 1;
                    transform: none !important;
                }
                .btn-bubble-rise {
                    position: relative;
                    overflow: hidden;
                }
                .btn-bubble-rise .bubble {
                    position: absolute;
                    bottom: -14px;
                    width: 7px;
                    height: 7px;
                    background: rgba(255,255,255,0.55);
                    border-radius: 9999px;
                    opacity: 0;
                    animation: bubble-rise 3.2s infinite ease-in;
                    pointer-events: none;
                }
                .btn-bubble-rise .bubble:nth-child(1){ left:12%; animation-delay:0s; width:6px; height:6px; }
                .btn-bubble-rise .bubble:nth-child(2){ left:30%; animation-delay:0.6s; width:5px; height:5px; }
                .btn-bubble-rise .bubble:nth-child(3){ left:50%; animation-delay:1.2s; width:7px; height:7px; }
                .btn-bubble-rise .bubble:nth-child(4){ left:70%; animation-delay:1.8s; width:5px; height:5px; }
                .btn-bubble-rise .bubble:nth-child(5){ left:88%; animation-delay:2.4s; width:6px; height:6px; }
                @keyframes bubble-rise {
                    0% { transform: translateY(0) scale(0.8); opacity: 0; }
                    15% { opacity: 0.9; }
                    100% { transform: translateY(-46px) scale(1.15); opacity: 0; }
                }
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 9s linear infinite;
                }
                `
            }} />

            {/* Hero Section - Editorial B2B Export Banner */}
            <section className="relative w-full min-h-[62vh] sm:min-h-[68vh] flex items-end text-white overflow-hidden z-10">
                <Image
                    src="/exporttt.png"
                    alt="Drymato Global B2B Export Operations"
                    fill
                    priority
                    className="object-cover object-center"
                />
                {/* Bottom scrim for baseline legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
                {/* Left-side scrim, stronger where the text block sits */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full pb-12 sm:pb-16 reveal-fade-up">
                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/70 mb-5 sm:mb-6">
                        <Link href="/" className="hover:text-amber-200 transition-colors">Home</Link>
                        <span>/</span>
                        <span className="text-amber-200">B2B &amp; Export Solutions</span>
                    </div>

                    <h1 id="export-heading" className="font-serif text-4xl sm:text-5xl lg:text-[4rem] leading-[1.08] tracking-tight mb-6 max-w-3xl">
                        <span className="font-normal text-white">Global Supply,</span>{" "}
                        <span className="italic font-light text-amber-100">Built to Scale.</span>
                    </h1>

                    <div className="w-16 h-[2px] bg-[#a50808] mb-6" />

                    <p className="text-white/85 text-sm sm:text-base max-w-xl leading-relaxed font-medium border-l-2 border-[#a50808]/70 pl-4 mb-10">
                        Delivering premium dehydrated vegetables, fruits, and natural powders to hotels, distributors, bulk wholesalers, and global food manufacturers &mdash; with full quality assurance at every step.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="/product"
                            className="btn-bubble-rise relative w-full sm:w-auto bg-[#a50808] hover:bg-[#8b0606] text-white text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-sm inline-flex items-center justify-center gap-2 transition-colors"
                        >
                            <span className="bubble"></span>
                            <span className="bubble"></span>
                            <span className="bubble"></span>
                            <span className="bubble"></span>
                            <span className="bubble"></span>
                            Browse Wholesale Products <FaArrowRight className="w-3 h-3" />
                        </Link>
                        <Link
                            href="#export-inquiry"
                            className="w-full sm:w-auto border border-white/40 hover:border-white/70 hover:bg-white/5 text-white text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-sm inline-flex items-center justify-center transition-colors"
                        >
                            Request Bulk Quote
                        </Link>
                    </div>
                </div>
            </section>

            {/* Main Content Wrapper */}
            <div className="relative z-20 bg-[#fff8f0] text-gray-900 font-poppins antialiased selection:bg-[#a50808] selection:text-white">

                <section className="relative w-full bg-[#fdfcfb] py-24 sm:py-32 overflow-hidden">
                    {/* Top-Left Vintage Tomato Branch Background Accent */}
                    <div className="absolute -top-10 -left-10 w-72 h-72 sm:w-96 sm:h-96 pointer-events-none opacity-30 z-0 select-none mix-blend-multiply">
                        <Image
                            src="/tomatotree.png"
                            alt=""
                            fill
                            className="object-contain object-top-left -scale-x-100 rotate-12"
                        />
                    </div>

                    <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                            {/* Left Content Column */}
                            <div className="lg:col-span-6 space-y-6 pt-4">
                                <div className="flex items-center space-x-2">
                                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#a50808] bg-red-50 border border-red-100 px-3.5 py-1 rounded-full">
                                        EXPORT
                                    </span>
                                </div>

                                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold font-serif text-[#1e3d2f] tracking-tight leading-[1.15]">
                                    From India to <br />
                                    <span className="text-[#a50808]">Global Markets</span>
                                </h2>

                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-sans">
                                    Drymato is building its international supply network for buyers looking to source dehydrated ingredients from India.
                                </p>

                                {/* Offerings Tags with React Icons - different pastel colors */}
                                <div className="pt-2">
                                    <p className="text-xs font-bold uppercase tracking-widest text-[#1e3d2f] mb-3.5">We can discuss:</p>
                                    <div className="flex flex-wrap gap-2.5">
                                        {DISCUSS_ITEMS.map(({ text, Icon, cls, iconCls }, idx) => (
                                            <span
                                                key={idx}
                                                className={`px-3.5 py-2 rounded-xl text-[#3d3935] text-xs sm:text-sm font-semibold border shadow-2xs transition-colors flex items-center space-x-2 ${cls}`}
                                            >
                                                <span><Icon className={iconCls} /></span>
                                                <span>{text}</span>
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Side Card with Overlapping/On-Top Circular Image */}
                            <div className="lg:col-span-6 pt-12 sm:pt-16">
                                <div className="relative bg-[#f4f6f4] rounded-[28px] p-6 sm:p-8 pt-16 sm:pt-20 border border-[#1e3d2f]/10 shadow-[0_12px_30px_rgba(30,61,47,0.06)]">

                                    {/* Circular Image overlapping on top center of the card */}
                                    <div className="absolute -top-12 sm:-top-16 left-1/2 -translate-x-1/2 w-28 h-28 sm:w-36 sm:h-36 rounded-full border-4 border-white shadow-md overflow-hidden bg-white">
                                        <Image
                                            src="/images/export-side-image.png"
                                            alt="Drymato Dehydrated Ingredients"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* Card Content */}
                                    <div className="space-y-6 text-center sm:text-left">
                                        <div className="text-center">
                                            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1e3d2f] mb-1">
                                                Looking to Source From India?
                                            </h3>
                                        </div>

                                        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-2xs space-y-3">
                                            <p className="text-xs font-bold uppercase tracking-wider text-[#1e3d2f]">
                                                Share your:
                                            </p>

                                            {/* Product • Quantity • Specification • Packaging • Destination */}
                                            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm font-semibold text-gray-700">
                                                {SHARE_ITEMS.map((item, idx) => (
                                                    <span key={item.text} className="contents">
                                                        {idx > 0 && <span className="text-[#a50808]">•</span>}
                                                        <span className={`px-3 py-1.5 rounded-lg border text-[#3d3935] ${item.cls}`}>
                                                            {item.text}
                                                        </span>
                                                    </span>
                                                ))}
                                            </div>

                                            <p className="text-xs text-gray-500 pt-1 italic">
                                                and we'll discuss the requirement with you.
                                            </p>
                                        </div>

                                        {/* Send Export Enquiry Button */}
                                        <a
                                            href="#export-inquiry"
                                            className="w-full py-4 px-6 rounded-xl bg-forest text-white font-semibold text-sm sm:text-base tracking-wide shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2 group"
                                        >
                                            <span>Send Export Enquiry</span>
                                            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                        </a>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* ================= EXPORT MARKETS INTERACTIVE MAP SECTION ================= */}
                <ExportMarketsMap />

                {/* ================= 09. EXPORT PACKAGING (image + leaf cards) ================= */}
                <section className="py-20 sm:py-28 border-b border-gray-200/80 bg-white">
                    <div className="max-w-7xl mx-auto px-6 sm:px-8">

                        {/* Top: text + image */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-10 sm:mb-12">
                            <div className="lg:col-span-6 space-y-4 reveal-fade-up">
                                <span className="text-xs font-bold uppercase tracking-widest text-[#a50808]">
                                    Export Packaging
                                </span>
                                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold font-serif text-gray-900 leading-[1.15]">
                                    Packaging Around Your Market
                                </h2>
                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-lg">
                                    Depending on the product, destination and buyer requirement, packaging can be discussed around:
                                </p>
                                <p className="text-xs sm:text-sm leading-relaxed text-gray-500 italic max-w-lg pt-2">
                                    Final packaging specifications are confirmed according to the product, destination and buyer requirements.
                                </p>
                            </div>

                            <div className="lg:col-span-6 reveal-fade-up">
                                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-tl-[80px] rounded-br-[80px] rounded-tr-[16px] rounded-bl-[16px] bg-[#f4f6f4] shadow-[0_18px_40px_rgba(0,0,0,0.12)]">
                                    <Image
                                        src={PACKAGING_IMAGE}
                                        alt="Drymato dehydrated products export packaging"
                                        fill
                                        sizes="(min-width: 1024px) 50vw, 100vw"
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Leaf-shaped cards — single row on desktop */}

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
                            {PACKAGING_OPTIONS.map((item, index) => (
                                <div
                                    key={index}
                                    className={`reveal-card ${item.bg} ${item.text} flex min-h-[230px] sm:min-h-[250px] flex-col justify-between rounded-tl-[44px] rounded-br-[44px] rounded-tr-[10px] rounded-bl-[10px] p-5 sm:p-6 shadow-[0_10px_24px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-1`}
                                >
                                    <span
                                        className={`text-[11px] font-bold tracking-[0.2em] ${item.subText}`}
                                    >
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <div className="mt-auto">
                                        <h3 className="font-serif text-base sm:text-lg font-semibold leading-snug mb-3">
                                            {item.title}
                                        </h3>

                                        <p
                                            className={`text-xs sm:text-[13px] leading-relaxed ${item.subText}`}
                                        >
                                            {item.sub}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Export Documentation */}
                <section className="relative w-full bg-[#fffaf5] py-20 sm:py-24 lg:py-28 overflow-hidden">

                    {/* ================= LEFT CIRCULAR SHOWCASE ================= */}
                    <div className="hidden xl:block absolute left-[-220px] top-1/2 -translate-y-1/2 w-[440px] h-[440px] z-10 hover:scale-[1.03] transition-transform duration-500">
                        <div className="w-full h-full rounded-full overflow-hidden border-[8px] border-[#fff8f0] shadow-2xl relative">
                            <Image
                                src="/use_pizza.png"
                                alt="Gourmet pizza using sun-dried tomatoes"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Floating Jar */}
                        <div className="absolute -right-[130px] top-1/2 w-[260px] h-[400px] z-30 pointer-events-none drop-shadow-[0_15px_25px_rgba(0,0,0,0.22)] jar-reveal-left">
                            <div className="w-full h-full relative animate-float-slow">
                                <Image
                                    src="/jaar/sunflower-oil-smalljaar.png"
                                    alt="Drymato Sunflower Oil Tomato Jar"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* ================= RIGHT CIRCULAR SHOWCASE ================= */}
                    <div className="hidden xl:block absolute right-[-220px] top-1/2 -translate-y-1/2 w-[440px] h-[440px] z-10 hover:scale-[1.03] transition-transform duration-500">
                        <div className="w-full h-full rounded-full overflow-hidden border-[8px] border-[#fff8f0] shadow-2xl relative">
                            <Image
                                src="/use_pasta.png"
                                alt="Gourmet pasta using sun-dried tomatoes"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Floating Jar */}
                        <div className="absolute -left-[130px] top-1/2 w-[260px] h-[400px] z-30 pointer-events-none drop-shadow-[0_15px_25px_rgba(0,0,0,0.22)] jar-reveal-right">
                            <div className="w-full h-full relative animate-float-slow-reverse">
                                <Image
                                    src="/jaar/oliver-oil-smalljaar.png"
                                    alt="Drymato Olive Oil Tomato Jar"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* ================= SOFT PASTEL BACKGROUND BLOBS ================= */}
                    <div className="absolute left-[12%] top-[12%] w-40 h-40 rounded-full bg-[#eadfd0]/40 blur-3xl pointer-events-none" />
                    <div className="absolute right-[12%] top-[20%] w-48 h-48 rounded-full bg-[#dce5d5]/45 blur-3xl pointer-events-none" />
                    <div className="absolute left-[18%] bottom-[15%] w-44 h-44 rounded-full bg-[#f1dada]/35 blur-3xl pointer-events-none" />
                    <div className="absolute right-[18%] bottom-[12%] w-40 h-40 rounded-full bg-[#e6dfc9]/40 blur-3xl pointer-events-none" />

                    {/* ================= MAIN CONTENT ================= */}
                    <div className="relative z-20 max-w-6xl mx-auto px-6 sm:px-8">
                        <div className="max-w-4xl mx-auto text-center reveal-fade-up">

                            {/* Section Label */}
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <span className="w-8 sm:w-10 h-[2px] bg-[#a50808]" />
                                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#a50808]">
                                    Export Documentation
                                </span>
                                <span className="w-8 sm:w-10 h-[2px] bg-[#a50808]" />
                            </div>

                            {/* Heading */}
                            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-bold leading-[1.12] text-[#1e3d2f]">
                                Clear Specifications.
                                <br />
                                <span className="text-[#a50808]">Clear Communication.</span>
                            </h2>

                            {/* Intro */}
                            <p className="mt-5 text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed max-w-xl mx-auto">
                                Depending on the product and destination, buyers may require:
                            </p>

                            {/* ================= DOCUMENTATION BOXES ================= */}
                            <div className="mt-9 sm:mt-11 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 max-w-2xl mx-auto">

                                {/* 01 */}
                                <div className="reveal-card flex items-center gap-3.5 text-left px-4 py-4 sm:px-5 sm:py-[18px] bg-[#f3e8df] border border-[#d8c1b3]/50 rounded-tl-[32px] rounded-br-[32px] rounded-tr-[10px] rounded-bl-[10px] shadow-[0_8px_24px_rgba(100,70,50,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(100,70,50,0.10)]">
                                    <span className="shrink-0 w-9 h-9 rounded-full bg-white/75 flex items-center justify-center text-[9px] font-bold text-[#a50808]">01</span>
                                    <span className="text-[11px] sm:text-xs font-semibold text-[#3d3935] leading-snug">Product Specification Sheet</span>
                                </div>

                                {/* 02 */}
                                <div className="reveal-card flex items-center gap-3.5 text-left px-4 py-4 sm:px-5 sm:py-[18px] bg-[#e5eadf] border border-[#c7d0bd]/50 rounded-tl-[10px] rounded-br-[10px] rounded-tr-[32px] rounded-bl-[32px] shadow-[0_8px_24px_rgba(60,80,50,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(60,80,50,0.10)]">
                                    <span className="shrink-0 w-9 h-9 rounded-full bg-white/75 flex items-center justify-center text-[9px] font-bold text-[#5f6b3f]">02</span>
                                    <span className="text-[11px] sm:text-xs font-semibold text-[#3d3935] leading-snug">Ingredient Information</span>
                                </div>

                                {/* 03 */}
                                <div className="reveal-card flex items-center gap-3.5 text-left px-4 py-4 sm:px-5 sm:py-[18px] bg-[#e9e1ed] border border-[#cfc2d5]/50 rounded-tl-[32px] rounded-br-[32px] rounded-tr-[10px] rounded-bl-[10px] shadow-[0_8px_24px_rgba(80,60,90,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(80,60,90,0.10)]">
                                    <span className="shrink-0 w-9 h-9 rounded-full bg-white/75 flex items-center justify-center text-[9px] font-bold text-[#75627d]">03</span>
                                    <span className="text-[11px] sm:text-xs font-semibold text-[#3d3935] leading-snug">Nutrition Information</span>
                                </div>

                                {/* 04 */}
                                <div className="reveal-card flex items-center gap-3.5 text-left px-4 py-4 sm:px-5 sm:py-[18px] bg-[#f0e7d2] border border-[#d8c8a8]/50 rounded-tl-[10px] rounded-br-[10px] rounded-tr-[32px] rounded-bl-[32px] shadow-[0_8px_24px_rgba(100,80,40,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(100,80,40,0.10)]">
                                    <span className="shrink-0 w-9 h-9 rounded-full bg-white/75 flex items-center justify-center text-[9px] font-bold text-[#8b7040]">04</span>
                                    <span className="text-[11px] sm:text-xs font-semibold text-[#3d3935] leading-snug">Shelf-Life Details</span>
                                </div>

                                {/* 05 */}
                                <div className="reveal-card flex items-center gap-3.5 text-left px-4 py-4 sm:px-5 sm:py-[18px] bg-[#e1e9e5] border border-[#bfd0c7]/50 rounded-tl-[32px] rounded-br-[32px] rounded-tr-[10px] rounded-bl-[10px] shadow-[0_8px_24px_rgba(50,80,65,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(50,80,65,0.10)]">
                                    <span className="shrink-0 w-9 h-9 rounded-full bg-white/75 flex items-center justify-center text-[9px] font-bold text-[#527263]">05</span>
                                    <span className="text-[11px] sm:text-xs font-semibold text-[#3d3935] leading-snug">Packaging Specifications</span>
                                </div>

                                {/* 06 */}
                                <div className="reveal-card flex items-center gap-3.5 text-left px-4 py-4 sm:px-5 sm:py-[18px] bg-[#f3dfdf] border border-[#d9bcbc]/50 rounded-tl-[10px] rounded-br-[10px] rounded-tr-[32px] rounded-bl-[32px] shadow-[0_8px_24px_rgba(100,60,60,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(100,60,60,0.10)]">
                                    <span className="shrink-0 w-9 h-9 rounded-full bg-white/75 flex items-center justify-center text-[9px] font-bold text-[#a50808]">06</span>
                                    <span className="text-[11px] sm:text-xs font-semibold text-[#3d3935] leading-snug">Applicable Testing / COA</span>
                                </div>

                                {/* 07 */}
                                <div className="reveal-card flex items-center gap-3.5 text-left px-4 py-4 sm:px-5 sm:py-[18px] bg-[#e7e0d4] border border-[#d0c4b3]/50 rounded-tl-[32px] rounded-br-[32px] rounded-tr-[10px] rounded-bl-[10px] shadow-[0_8px_24px_rgba(80,65,50,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(80,65,50,0.10)]">
                                    <span className="shrink-0 w-9 h-9 rounded-full bg-white/75 flex items-center justify-center text-[9px] font-bold text-[#806d57]">07</span>
                                    <span className="text-[11px] sm:text-xs font-semibold text-[#3d3935] leading-snug">Commercial Documentation</span>
                                </div>

                                {/* 08 */}
                                <div className="reveal-card flex items-center gap-3.5 text-left px-4 py-4 sm:px-5 sm:py-[18px] bg-[#dde6d7] border border-[#c2d0ba]/50 rounded-tl-[10px] rounded-br-[10px] rounded-tr-[32px] rounded-bl-[32px] shadow-[0_8px_24px_rgba(60,80,50,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(60,80,50,0.10)]">
                                    <span className="shrink-0 w-9 h-9 rounded-full bg-white/75 flex items-center justify-center text-[9px] font-bold text-[#5f6b3f]">08</span>
                                    <span className="text-[11px] sm:text-xs font-semibold text-[#3d3935] leading-snug">Destination-specific documentation</span>
                                </div>
                            </div>

                            {/* ================= BOTTOM NOTE ================= */}
                            <div className="mt-8 sm:mt-10 max-w-xl mx-auto">
                                <p className="text-[11px] sm:text-xs text-gray-500 italic leading-relaxed">
                                    Documentation is discussed according to the applicable product and destination requirements.
                                </p>
                            </div>
                        </div>

                        {/* ================= MOBILE SHOWCASE (below xl) ================= */}
                        <div className="mt-12 xl:hidden w-full max-w-md mx-auto grid grid-cols-2 gap-8 px-4">
                            <div className="flex flex-col items-center text-center relative group">
                                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-[#fff8f0] shadow-lg relative group-hover:scale-105 transition-transform duration-500">
                                    <Image src="/use_pizza.png" alt="Pizza" fill className="object-cover" />
                                </div>
                                <div className="absolute -right-2 -top-4 w-12 h-16 sm:w-16 sm:h-20 z-30 pointer-events-none drop-shadow-md animate-float-slow">
                                    <Image src="/jaar/jaarslightroatateview.png" alt="Tomato Jar" fill className="object-contain" />
                                </div>
                            </div>
                            <div className="flex flex-col items-center text-center relative group">
                                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-[#fff8f0] shadow-lg relative group-hover:scale-105 transition-transform duration-500">
                                    <Image src="/use_pasta.png" alt="Pasta" fill className="object-cover" />
                                </div>
                                <div className="absolute -left-2 -top-4 w-12 h-16 sm:w-16 sm:h-20 z-30 pointer-events-none drop-shadow-md animate-float-slow-reverse">
                                    <Image src="/jaar/oliver-oil-smalljaar.png" alt="Tomato Jar" fill className="object-contain" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section className="relative w-full bg-[#fff] py-20 sm:py-24 lg:py-28 border-b border-gray-200/80 overflow-hidden">

                    {/* ================= LEFT TREE ================= */}
                    <div className="hidden lg:block absolute left-[-35px] xl:left-0 top-1/2 -translate-y-1/2 w-[240px] xl:w-[300px] h-[520px] z-10 pointer-events-none">
                        <Image src="/lefttree.png" alt="" fill className="object-contain object-left opacity-90" />
                    </div>

                    {/* ================= RIGHT TREE ================= */}
                    <div className="hidden lg:block absolute right-[-35px] xl:right-0 top-1/2 -translate-y-1/2 w-[240px] xl:w-[300px] h-[520px] z-10 pointer-events-none">
                        <Image src="/righttree.png" alt="" fill className="object-contain object-right opacity-90" />
                    </div>

                    {/* ================= SOFT BLOBS ================= */}
                    <div className="absolute left-[14%] top-[10%] w-40 h-40 rounded-full bg-[#eadfd0]/40 blur-3xl pointer-events-none" />
                    <div className="absolute right-[14%] bottom-[10%] w-48 h-48 rounded-full bg-[#dce5d5]/45 blur-3xl pointer-events-none" />

                    {/* ================= CONTENT ================= */}
                    <div className="relative z-20 max-w-6xl mx-auto px-6 sm:px-8">
                        <div className="max-w-4xl mx-auto text-center reveal-fade-up">

                            {/* Label */}
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <span className="w-8 sm:w-10 h-[2px] bg-[#a50808]" />
                                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#a50808]">
                                    How It Works
                                </span>
                                <span className="w-8 sm:w-10 h-[2px] bg-[#a50808]" />
                            </div>

                            {/* Heading */}
                            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-bold leading-[1.12] text-[#1e3d2f]">
                                From Requirement
                                <br />
                                <span className="text-[#a50808]">to Supply</span>
                            </h2>

                            {/* Steps grid */}
                            <div
                                className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 text-left"
                                onMouseLeave={() => setPaused(false)}
                            >
                                {STEPS.map((step, i) => {
                                    const isActive = i === active;
                                    const pastel = STEP_PASTELS[i % STEP_PASTELS.length];

                                    return (
                                        <button
                                            key={i}
                                            type="button"
                                            onMouseEnter={() => {
                                                setPaused(true);
                                                setActive(i);
                                            }}
                                            onClick={() => {
                                                setPaused(true);
                                                setActive(i);
                                            }}
                                            className={`
                relative
                flex flex-col items-start gap-4
                p-6 sm:p-7
                min-h-[220px]
                cursor-pointer
                transition-all duration-500 ease-out
                ${isActive
                                                    ? `
                            ${pastel.badge}
                            shadow-[0_18px_40px_rgba(100,70,50,0.14)]
                            rounded-tl-[56px]
                            rounded-br-[56px]
                            rounded-tr-[14px]
                            rounded-bl-[14px]
                            -translate-y-1
                        `
                                                    : `
                            bg-transparent
                            shadow-none
                            rounded-tl-[14px]
                            rounded-br-[14px]
                            rounded-tr-[14px]
                            rounded-bl-[14px]
                            hover:bg-white/40
                        `
                                                }
            `}
                                        >

                                            {/* ================= NUMBER BADGE ================= */}
                                            <span
                                                className={`
                    shrink-0
                    w-11 h-11
                    flex items-center justify-center
                    text-sm
                    font-bold
                    transition-all duration-500

                    ${isActive
                                                        ? `
                                ${pastel.badge}
                                text-[#3d3935]
                                rounded-tl-[18px]
                                rounded-br-[18px]
                                rounded-tr-[6px]
                                rounded-bl-[6px]
                                scale-110
                                shadow-md
                            `
                                                        : `
                                ${pastel.badge}
                                text-black
                                rounded-full
                            `
                                                    }
                `}
                                            >
                                                {String(i + 1).padStart(2, "0")}
                                            </span>


                                            {/* ================= TITLE ================= */}
                                            <h3
                                                className={`
                    font-serif
                    text-lg sm:text-xl
                    font-bold
                    leading-snug
                    transition-colors duration-500

                    ${isActive
                                                        ? "text-[#3d3935]"
                                                        : "text-black"
                                                    }
                `}
                                            >
                                                {step.title}
                                            </h3>


                                            {/* ================= DESCRIPTION ================= */}
                                            <p className="text-xs sm:text-[13px] leading-relaxed text-black">
                                                {step.desc}
                                            </p>


                                            {/* ================= TAGS ================= */}
                                            {step.tags && (
                                                <div className="flex flex-wrap gap-1.5 mt-auto">

                                                    {step.tags.map((tag) => (
                                                        <span
                                                            key={tag}
                                                            className={`
                                                                px-2.5 py-1
                                                                rounded-full
                                                                border
                                                                text-[10px]
                                                                font-semibold
                                                                uppercase
                                                                tracking-wider
                                                                transition-all duration-500

                                                                ${isActive
                                                                    ? `
                                            ${pastel.tag}
                                            text-[#3d3935]
                                        `
                                                                    : `
                                            ${pastel.tag}
                                            text-black
                                        `
                                                                }
                            `}
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}

                                                </div>
                                            )}


                                            {/* ================= ACTIVE BOTTOM LINE ================= */}
                                            <span
                                                className={`
                                                    absolute
                                                    bottom-4
                                                    left-7
                                                    h-[3px]
                                                    rounded-full

                                                    ${pastel.badge.replace("bg-", "bg-")}

                                                    transition-all duration-500

                                                    ${isActive
                                                        ? "w-10 opacity-100"
                                                        : "w-0 opacity-0"
                                                    }
                                                `}
                                            />

                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* ================= MOBILE TREES ================= */}
                        <div className="lg:hidden mt-12 flex items-center justify-between gap-2">
                            <div className="relative w-28 h-40 sm:w-36 sm:h-48">
                                <Image src="/lefttree.png" alt="" fill className="object-contain object-left" />
                            </div>
                            <div className="relative w-28 h-40 sm:w-36 sm:h-48">
                                <Image src="/righttree.png" alt="" fill className="object-contain object-right" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Global Target Markets */}

                <section className="relative w-full bg-[#fffaf5] py-20 sm:py-24 lg:py-28 border-b border-gray-200/80 overflow-hidden">

                    {/* ================= SOFT PASTEL BLOBS ================= */}
                    <div className="absolute left-[3%] top-[8%] w-44 h-44 rounded-full bg-[#f3e8df]/50 blur-3xl pointer-events-none" />
                    <div className="absolute right-[5%] top-[12%] w-52 h-52 rounded-full bg-[#e5eadf]/50 blur-3xl pointer-events-none" />
                    <div className="absolute left-[10%] bottom-[8%] w-48 h-48 rounded-full bg-[#e9e1ed]/40 blur-3xl pointer-events-none" />
                    <div className="absolute right-[12%] bottom-[5%] w-44 h-44 rounded-full bg-[#f0e7d2]/50 blur-3xl pointer-events-none" />
                    <div className="absolute -top-10 -left-10 w-72 h-72 sm:w-96 sm:h-96 pointer-events-none opacity-30 z-0 select-none mix-blend-multiply">
                        <Image
                            src="/tomatotree.png"
                            alt=""
                            fill
                            className="object-contain object-top-left -scale-x-100 rotate-12"
                        />
                    </div>
                    {/* ================= MAIN CONTENT ================= */}
                    <div className="relative z-20 max-w-4xl mx-auto px-6 sm:px-8">

                        {/* HEADER */}
                        <div className="max-w-2xl mx-auto text-center">

                            <div className="flex items-center justify-center gap-3 mb-3">
                                <span className="w-6 sm:w-8 h-[2px] bg-[#a50808]" />
                                <span className="
                                    text-[10px]
                                    sm:text-xs
                                    font-bold
                                    uppercase
                                    tracking-[0.22em]
                                    text-[#a50808]
                                ">
                                    Multiple Products. One Sourcing Conversation.
                                </span>
                                <span className="w-6 sm:w-8 h-[2px] bg-[#a50808]" />
                            </div>

                            <h2 className="
                                font-serif
                                text-3xl
                                sm:text-4xl
                                lg:text-[42px]
                                font-medium
                                leading-[1.15]
                                text-[#1e3d2f]
                            ">
                                Building a Mixed Ingredient <br className="hidden sm:block" />
                                <span className="text-[#a50808]">Requirement?</span>
                            </h2>

                            {/* For example */}
                            <p className="
                                mt-6
                                text-xs
                                font-bold
                                uppercase
                                tracking-[0.18em]
                                text-[#1e3d2f]/70
                            ">
                                For example:
                            </p>

                        </div>

                        {/* ================= EXAMPLE CARDS ================= */}
                        <div className="
                            mt-6
                            grid
                            grid-cols-1
                            md:grid-cols-3
                            gap-4
                            max-w-3xl
                            mx-auto
                            relative
                        ">

                            {/* 01 */}
                            <div className="
                                bg-[#f3e8df]
                                border border-[#d8c1b3]/60
                                rounded-tl-[32px]
                                rounded-br-[32px]
                                rounded-tr-[12px]
                                rounded-bl-[12px]
                                p-6
                                text-center
                                shadow-[0_10px_28px_rgba(100,70,50,0.05)]
                                transition-transform
                                duration-300
                                hover:-translate-y-1
                                flex flex-col items-center justify-between
                            ">
                                <span className="
                                    inline-flex
                                    items-center
                                    justify-center
                                    w-9
                                    h-9
                                    rounded-full
                                    bg-white/80
                                    text-[11px]
                                    font-bold
                                    text-[#a50808]
                                    mb-4
                                ">
                                    01
                                </span>
                                <p className="
                                    font-serif
                                    text-base
                                    sm:text-lg
                                    font-medium
                                    leading-snug
                                    text-[#443b48]
                                ">
                                    Lemon + Orange + Pineapple
                                </p>
                                <div className="h-4 md:hidden mt-2 text-[10px] font-bold uppercase tracking-widest text-[#a50808]/70">or</div>
                            </div>

                            {/* 02 */}
                            <div className="
                                bg-[#e5eadf]
                                border border-[#c7d0bd]/60
                                rounded-tr-[32px]
                                rounded-bl-[32px]
                                rounded-tl-[12px]
                                rounded-br-[12px]
                                p-6
                                text-center
                                shadow-[0_10px_28px_rgba(60,80,50,0.05)]
                                transition-transform
                                duration-300
                                hover:-translate-y-1
                                flex flex-col items-center justify-between
                            ">
                                <span className="
                                    inline-flex
                                    items-center
                                    justify-center
                                    w-9
                                    h-9
                                    rounded-full
                                    bg-white/80
                                    text-[11px]
                                    font-bold
                                    text-[#5f6b3f]
                                    mb-4
                                ">
                                    02
                                </span>
                                <p className="
                                    font-serif
                                    text-base
                                    sm:text-lg
                                    font-medium
                                    leading-snug
                                    text-[#3d4938]
                                ">
                                    Tomato + Onion + Garlic + Herbs
                                </p>
                                <div className="h-4 md:hidden mt-2 text-[10px] font-bold uppercase tracking-widest text-[#a50808]/70">or</div>
                            </div>

                            {/* 03 */}
                            <div className="
                                bg-[#e9e1ed]
                                border border-[#cfc2d5]/60
                                rounded-tl-[32px]
                                rounded-br-[32px]
                                rounded-tr-[12px]
                                rounded-bl-[12px]
                                p-6
                                text-center
                                shadow-[0_10px_28px_rgba(80,60,90,0.05)]
                                transition-transform
                                duration-300
                                hover:-translate-y-1
                                flex flex-col items-center justify-between
                            ">
                                <span className="
                                    inline-flex
                                    items-center
                                    justify-center
                                    w-9
                                    h-9
                                    rounded-full
                                    bg-white/80
                                    text-[11px]
                                    font-bold
                                    text-[#75627d]
                                    mb-4
                                ">
                                    03
                                </span>
                                <p className="
                                    font-serif
                                    text-base
                                    sm:text-lg
                                    font-medium
                                    leading-snug
                                    text-[#443b48]
                                ">
                                    Fruit Powders + Vegetable Powders + Flakes
                                </p>
                            </div>

                        </div>

                        {/* OR separators — desktop */}
                        <div className="
                            hidden
                            md:flex
                            max-w-3xl
                            mx-auto
                            justify-between
                            px-[18%]
                            -mt-[26px]
                            mb-[16px]
                            pointer-events-none
                            relative
                            z-30
                        ">

                        </div>

                        {/* ================= BOTTOM CONTENT ================= */}
                        <div className="
                            mt-10
                            max-w-xl
                            mx-auto
                            text-center
                        ">

                            <p className="
                                text-sm
                                sm:text-base
                                text-gray-600
                                leading-relaxed
                            ">
                                Share your complete product list and required quantities with us.
                            </p>

                            <div className="
                                mt-5
                                inline-flex
                                items-center
                                justify-center
                                bg-[#f0e7d2]
                                border border-[#d8c8a8]/70
                                rounded-full
                                px-6
                                py-3
                                shadow-[0_6px_18px_rgba(100,80,40,0.05)]
                            ">
                                <span className="
                                    text-xs
                                    sm:text-sm
                                    font-semibold
                                    tracking-wide
                                    text-[#5b4d36]
                                ">
                                    One Conversation. Multiple Ingredient Requirements.
                                </span>
                            </div>

                        </div>

                    </div>
                </section>

                {/* ================= EXPORT INQUIRY FORM ================= */}
                <ExportInquiryForm />


                {/* =========================================================
                    13. FINAL CTA (BANNER)
                ========================================================= */}
                <section className="relative w-full overflow-hidden bg-[#f6f3ec] border-b border-gray-200/80 z-30 font-poppins">

                    {/* ================= DESKTOP BACKGROUND BANNER ================= */}
                    <div className="hidden lg:block absolute inset-0 pointer-events-none select-none">
                        <Image
                            src="/blank-sub-hero.png"
                            alt="Dishes made with Drymato dehydrated ingredients"
                            fill
                            priority
                            sizes="100vw"
                            className="object-cover object-right"
                        />
                    </div>

                    {/* ================= LEFT CONTENT ================= */}
                    <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-14 pb-10 sm:pt-16 lg:pt-20 lg:pb-32 lg:min-h-[560px] xl:min-h-[640px] flex items-center">

                        <div className="w-full lg:w-[30%] max-w-md text-left">

                            <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#a50808] bg-[#a50808]/5 border border-[#a50808]/15 px-3.5 py-1.5 rounded-full mb-4">
                                <FaHandshake className="w-3.5 h-3.5" />
                                Final Step
                            </div>

                            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[36px] xl:text-[42px] font-bold leading-[1.15] text-[#243822]">
                                Looking for Dehydrated{" "}
                                <span className="text-[#a50808]">Ingredients in Bulk?</span>
                            </h2>

                            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#4f5b4b]">
                                Whether you're a wholesaler in India or an international buyer,
                                tell us what you're looking for.
                            </p>

                            {/* Requirement details */}
                            <div className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1.5 text-[11px] sm:text-xs font-semibold text-[#243822]">
                                <span>Product</span>
                                <span className="text-[#a50808]/50">•</span>
                                <span>Quantity</span>
                                <span className="text-[#a50808]/50">•</span>
                                <span>Format</span>
                                <span className="text-[#a50808]/50">•</span>
                                <span>Packaging</span>
                                <span className="text-[#a50808]/50">•</span>
                                <span>Destination</span>
                            </div>

                            <p className="mt-5 font-serif text-lg sm:text-xl font-bold text-[#a50808]">
                                Let's Build Your Supply.
                            </p>

                            {/* Buttons */}
                            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                                <Link
                                    href="/holesale"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#a50808] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#8a0606] transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-[#a50808]/20 whitespace-nowrap"
                                >
                                    Request a Wholesale Quote
                                    <FaArrowRight className="w-3 h-3" />
                                </Link>

                                <Link
                                    href="#export-inquiry"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 border-[#243822] text-[#243822] text-xs font-bold uppercase tracking-wider hover:bg-[#243822] hover:text-white transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
                                >
                                    Send Export Enquiry
                                </Link>
                            </div>

                        </div>
                    </div>

                    {/* ================= MOBILE / TABLET IMAGE (below text) ================= */}
                    <div className="lg:hidden relative w-full h-[260px] sm:h-[340px] pointer-events-none select-none">
                        <Image
                            src="/blank-sub-hero.png"
                            alt="Dishes made with Drymato dehydrated ingredients"
                            fill
                            sizes="100vw"
                            className="object-cover object-right"
                        />
                    </div>

                </section>
            </div>
        </>
    );
}