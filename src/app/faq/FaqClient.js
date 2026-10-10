// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import {
//     FaSearch,
//     FaChevronDown,
//     FaInfoCircle,
//     FaBox,
//     FaHandshake,
//     FaGlobe,
//     FaCalendarPlus,
//     FaEnvelope,
//     FaPhone,
//     FaTimes,
//     FaCopy,
//     FaCheck,
//     FaArrowRight
// } from "react-icons/fa";

// // FAQ Categories configuration
// const CATEGORIES = [
//     { id: "all", name: "All Questions", icon: null },
//     { id: "general", name: "General & About", icon: FaInfoCircle },
//     { id: "product", name: "Product & Packaging", icon: FaBox },
//     { id: "bulk", name: "Bulk Orders & HoReCa", icon: FaHandshake },
//     { id: "export", name: "Export & International", icon: FaGlobe },
//     { id: "future", name: "Future Products", icon: FaCalendarPlus },
//     { id: "orders", name: "Orders & Contact", icon: FaEnvelope }
// ];

// export default function FaqClient() {
//     const [searchQuery, setSearchQuery] = useState("");
//     const [activeCategory, setActiveCategory] = useState("all");
//     const [openIds, setOpenIds] = useState(new Set([1])); // Open the first item by default
//     const [copiedEmail, setCopiedEmail] = useState(false);
//     const [copiedPhone, setCopiedPhone] = useState(false);

//     // FAQ items data list
//     const faqItems = [
//         // 1. General / About Drymato
//         {
//             id: 1,
//             category: "general",
//             question: "What is Drymato?",
//             answer: "Drymato offers premium dehydrated tomato products made from carefully selected farm-fresh tomatoes, naturally dried to preserve their rich flavor, color, and nutritional value."
//         },
//         {
//             id: 2,
//             category: "general",
//             question: "Are your products 100% natural?",
//             answer: "Yes. Our products contain no artificial colors, preservatives, additives, or synthetic flavors."
//         },
//         {
//             id: 3,
//             category: "general",
//             question: "What is the difference between fresh and dehydrated tomatoes?",
//             answer: "Dehydrated tomatoes contain most of the flavor and nutrients of fresh tomatoes with significantly reduced moisture, resulting in a longer shelf life and concentrated taste."
//         },
//         {
//             id: 4,
//             category: "general",
//             question: "How can I use dehydrated tomatoes?",
//             answer: "They can be used in pasta, pizza, salads, sandwiches, wraps, soups, sauces, gravies, rice dishes, snacks, and bakery products."
//         },
//         {
//             id: 5,
//             category: "general",
//             question: "Do I need to soak dehydrated tomatoes before use?",
//             answer: "Not always. They can be used directly in many recipes. For softer texture, soak them in warm water for 10–15 minutes."
//         },
//         {
//             id: 6,
//             category: "general",
//             question: "Are Drymato products suitable for vegetarians?",
//             answer: "Yes. All our products are 100% vegetarian."
//         },
//         {
//             id: 7,
//             category: "general",
//             question: "Do your products contain preservatives?",
//             answer: "No. We do not use artificial preservatives."
//         },
//         {
//             id: 8,
//             category: "general",
//             question: "How long do Drymato products last?",
//             answer: "When stored properly in a cool and dry place, our products typically have a shelf life of up to 12 months."
//         },
//         {
//             id: 9,
//             category: "general",
//             question: "How should I store the product?",
//             answer: "Store in a cool, dry place away from direct sunlight. Keep the container tightly sealed after opening."
//         },
//         {
//             id: 10,
//             category: "general",
//             question: "Are your products suitable for commercial kitchens?",
//             answer: "Yes. Drymato products are widely suitable for restaurants, cafés, cloud kitchens, caterers, bakeries, and food manufacturers."
//         },

//         // 2. Product & Packaging
//         {
//             id: 11,
//             category: "product",
//             question: "What pack sizes are available?",
//             answer: "We offer retail packs, jars, pouches, and bulk packaging options for commercial buyers."
//         },
//         {
//             id: 12,
//             category: "product",
//             question: "Do you offer bulk packs?",
//             answer: "Yes. Bulk vacuum-packed bags are available for HoReCa and industrial customers."
//         },
//         {
//             id: 13,
//             category: "product",
//             question: "Can I request custom pack sizes?",
//             answer: "Yes. Custom packaging options may be available depending on order quantity."
//         },
//         {
//             id: 14,
//             category: "product",
//             question: "Do you provide private labeling?",
//             answer: "Yes. We support private label and white-label requirements for eligible bulk orders."
//         },
//         {
//             id: 15,
//             category: "product",
//             question: "Are your products export-ready?",
//             answer: "Yes. We can supply products suitable for international markets subject to country-specific requirements."
//         },

//         // 3. Bulk Orders & HoReCa
//         {
//             id: 16,
//             category: "bulk",
//             question: "Do you supply restaurants and cafés?",
//             answer: "Yes. We regularly work with restaurants, cafés, cloud kitchens, and catering businesses."
//         },
//         {
//             id: 17,
//             category: "bulk",
//             question: "Is there a minimum order quantity for bulk purchases?",
//             answer: "MOQ depends on product type and packaging requirements. Please contact us for details."
//         },
//         {
//             id: 18,
//             category: "bulk",
//             question: "Can I request samples before placing a bulk order?",
//             answer: "Yes. Sample requests can be arranged for serious business inquiries."
//         },
//         {
//             id: 19,
//             category: "bulk",
//             question: "Do you offer recurring supply contracts?",
//             answer: "Yes. We can support ongoing supply requirements for businesses."
//         },
//         {
//             id: 20,
//             category: "bulk",
//             question: "Can food manufacturers source ingredients from Drymato?",
//             answer: "Absolutely. We supply dehydrated ingredients suitable for food processing applications."
//         },

//         // 4. Export & International Buyers
//         {
//             id: 21,
//             category: "export",
//             question: "Which countries do you export to?",
//             answer: "We are open to supplying customers across the Middle East, Europe, North America, Southeast Asia, and other international markets."
//         },
//         {
//             id: 22,
//             category: "export",
//             question: "Can you handle container-load shipments?",
//             answer: "Yes. Bulk export orders can be arranged based on customer requirements."
//         },
//         {
//             id: 23,
//             category: "export",
//             question: "Do you provide export documentation?",
//             answer: "Yes. Required export documentation can be provided as per destination requirements."
//         },
//         {
//             id: 24,
//             category: "export",
//             question: "Can you supply customized export packaging?",
//             answer: "Yes. We offer customized export packaging for distributors and importers."
//         },
//         {
//             id: 25,
//             category: "export",
//             question: "Are your products suitable for distributors?",
//             answer: "Yes. We welcome inquiries from importers, distributors, wholesalers, and food ingredient traders."
//         },

//         // 5. Future Products
//         {
//             id: 26,
//             category: "future",
//             question: "What other products are coming soon?",
//             answer: (
//                 <div className="space-y-3">
//                     <p className="text-gray-600 font-medium">We are expanding our product catalog to include premium dehydrated vegetables and powders. Coming soon:</p>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
//                         {[
//                             "Dehydrated Onion Flakes",
//                             "Dehydrated Garlic Flakes",
//                             "Dehydrated Okra (Bhindi)",
//                             "Dehydrated Carrot Slices",
//                             "Dehydrated Beetroot",
//                             "Mixed Dehydrated Vegetables",
//                             "Vegetable Powders"
//                         ].map((item, idx) => (
//                             <div key={idx} className="flex items-center gap-2.5 bg-amber-50/70 border border-amber-100/50 px-3 py-2 rounded-xl text-gray-700 text-sm font-semibold">
//                                 <span className="w-1.5 h-1.5 rounded-full bg-[#a50808]" />
//                                 {item}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             )
//         },
//         {
//             id: 27,
//             category: "future",
//             question: "Will Drymato launch more dehydrated vegetables?",
//             answer: "Yes. We are continuously developing new dehydrated vegetable products for retail and industrial applications."
//         },
//         {
//             id: 28,
//             category: "future",
//             question: "Do you offer vegetable powders?",
//             answer: "Yes. Select vegetable powders are available and more varieties are under development."
//         },

//         // 6. Orders & Contact
//         {
//             id: 29,
//             category: "orders",
//             question: "How can I place an order?",
//             answer: "You can contact us directly through our website, email, phone, or WhatsApp."
//         },
//         {
//             id: 30,
//             category: "orders",
//             question: "How can I become a distributor?",
//             answer: "Please reach out through our contact page with your business details and location."
//         },
//         {
//             id: 31,
//             category: "orders",
//             question: "How can I request a quotation?",
//             answer: "Simply contact us with your required quantity, packaging preference, and destination country."
//         },
//         {
//             id: 32,
//             category: "orders",
//             question: "How can I contact Drymato?",
//             answer: (
//                 <div className="space-y-3">
//                     <p className="text-gray-600 font-medium">Get in touch directly with our sales and support team:</p>
//                     <div className="flex flex-col sm:flex-row gap-3 pt-1">
//                         <a
//                             href="tel:+918000897238"
//                             className="inline-flex items-center justify-center gap-2 bg-white hover:bg-red-50 border border-gray-200 hover:border-red-200 text-gray-700 hover:text-red-700 px-4 py-3 rounded-xl transition-all duration-300 shadow-sm font-bold text-sm cursor-pointer"
//                         >
//                             <FaPhone className="text-[#a50808] w-4 h-4" />
//                             +91 8000897238
//                         </a>
//                         <a
//                             href="mailto:hello@drymato.com"
//                             className="inline-flex items-center justify-center gap-2 bg-white hover:bg-red-50 border border-gray-200 hover:border-red-200 text-gray-700 hover:text-red-700 px-4 py-3 rounded-xl transition-all duration-300 shadow-sm font-bold text-sm cursor-pointer"
//                         >
//                             <FaEnvelope className="text-[#a50808] w-4 h-4" />
//                             hello@drymato.com
//                         </a>
//                     </div>
//                 </div>
//             )
//         }
//     ];

//     // Handle accordion toggle
//     const toggleAccordion = (id) => {
//         const newOpenIds = new Set(openIds);
//         if (newOpenIds.has(id)) {
//             newOpenIds.delete(id);
//         } else {
//             newOpenIds.add(id);
//         }
//         setOpenIds(newOpenIds);
//     };

//     // Copy handlers
//     const copyToClipboard = (text, type) => {
//         navigator.clipboard.writeText(text);
//         if (type === "email") {
//             setCopiedEmail(true);
//             setTimeout(() => setCopiedEmail(false), 2000);
//         } else {
//             setCopiedPhone(true);
//             setTimeout(() => setCopiedPhone(false), 2000);
//         }
//     };

//     // Filter FAQs based on search and selected category
//     const filteredItems = faqItems.filter((item) => {
//         const matchesCategory = activeCategory === "all" || item.category === activeCategory;
//         const query = searchQuery.toLowerCase().trim();
//         if (!query) return matchesCategory;

//         const matchesSearch =
//             item.question.toLowerCase().includes(query) ||
//             (typeof item.answer === "string" && item.answer.toLowerCase().includes(query));

//         return matchesCategory && matchesSearch;
//     });

//     // Helper to count items in each category dynamically
//     const getCategoryCount = (catId) => {
//         const query = searchQuery.toLowerCase().trim();
//         return faqItems.filter((item) => {
//             const matchesCat = catId === "all" || item.category === catId;
//             if (!query) return matchesCat;
//             const matchesSearch =
//                 item.question.toLowerCase().includes(query) ||
//                 (typeof item.answer === "string" && item.answer.toLowerCase().includes(query));
//             return matchesCat && matchesSearch;
//         }).length;
//     };

//     return (
//         <>
//             {/* Parallax Background for FAQ Page */}
//             <div className="fixed top-15 left-0 w-full h-[90vh] z-0 pointer-events-none">
//                 <Image
//                     src="/banner sun dried.png"
//                     alt="Drymato Premium Dehydrated Background"
//                     fill
//                     priority
//                     className="object-cover object-center"
//                 />
//                 <div className="absolute inset-0 bg-black/45" />
//             </div>

//             {/* Header / Sub-Hero section */}
//             <section className="animate-slide-down relative text-white w-full h-[80vh] min-h-[480px] flex items-center justify-start z-10 -mt-10">
//                 <div className="max-w-7xl mx-auto px-6 w-full flex justify-start items-center animate-left-to-right delay-500 relative">
//                     <div className="max-w-3xl text-left">
//                         {/* Breadcrumbs */}
//                         <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-80 mb-4 justify-start">
//                             <Link href="/" className="hover:text-red-200 transition-colors">Home</Link>
//                             <span>/</span>
//                             <span className="text-white">FAQ</span>
//                         </div>

//                         <h1 id="faq-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 font-poppins leading-tight text-white text-left">
//                             Frequently Asked Questions
//                         </h1>
//                         <p className="text-left text-amber-200 text-lg sm:text-xl font-poppins font-bold mb-4 leading-relaxed">
//                             Got Questions? We Have Answers.
//                         </p>
//                         <p className="text-left text-red-100 text-sm sm:text-base font-semibold leading-relaxed">
//                             Find detailed information regarding our products, dehydrated processes, commercial kitchen integrations, logistics, export standards, and future catalog expansions.
//                         </p>
//                     </div>
//                 </div>
//             </section>

//             {/* Content Wrapper */}
//             <div className="relative z-20 bg-[#fff8f0]">
//                 {/* Wavy transition divider */}
//                 {/* <div className="absolute left-0 right-0 -top-10 h-10 overflow-hidden pointer-events-none z-30">
//                     <svg viewBox="0 0 1440 40" className="w-full h-full block" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
//                         <path
//                             d="M0,20 Q45,38 90,20 Q135,2 180,20 Q225,38 270,20 Q315,2 360,20 Q405,38 450,20 Q495,2 540,20 Q585,38 630,20 Q675,2 720,20 Q765,38 810,20 Q855,2 900,20 Q945,38 990,20 Q1035,2 1080,20 Q1125,38 1170,20 Q1215,2 1260,20 Q1305,38 1350,20 Q1395,2 1440,20 L1440,40 L0,40 Z"
//                             fill="#fff8f0"
//                         />
//                     </svg>
//                 </div> */}

//                 <div className="max-w-7xl mx-auto px-6 py-20">
//                     {/* Search Bar section */}
//                     <div className="max-w-3xl mx-auto mb-16 relative z-30 -mt-28 sm:-mt-32">
//                         <div className="bg-white/90 backdrop-blur-md p-4 sm:p-5 rounded-3xl shadow-2xl border border-white/20 flex flex-col sm:flex-row items-center gap-3">
//                             <div className="relative w-full">
//                                 <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
//                                 <input
//                                     type="text"
//                                     placeholder="Search by keywords (e.g. storage, bulk, export, garlic)..."
//                                     value={searchQuery}
//                                     onChange={(e) => setSearchQuery(e.target.value)}
//                                     className="w-full pl-12 pr-10 py-3 sm:py-3.5 bg-gray-50 focus:bg-white text-gray-800 placeholder-gray-400 rounded-2xl outline-none border border-gray-200 focus:border-[#a50808] transition-all duration-300 text-sm font-semibold"
//                                 />
//                                 {searchQuery && (
//                                     <button
//                                         onClick={() => setSearchQuery("")}
//                                         className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
//                                     >
//                                         <FaTimes className="w-4 h-4" />
//                                     </button>
//                                 )}
//                             </div>
//                         </div>
//                     </div>

//                     {/* Main Layout Grid */}
//                     <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
//                         {/* Sidebar Category Selector (Desktop: lg, Mobile: top horizontal scroll) */}
//                         <div className="lg:col-span-4 lg:sticky lg:top-28 z-20 space-y-6">
//                             <div className="bg-white/50 backdrop-blur-sm p-2 sm:p-4 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/30">
//                                 <h3 className="hidden lg:block text-xs font-bold uppercase tracking-widest text-[#a50808] mb-4 px-3">
//                                     Browse Categories
//                                 </h3>

//                                 {/* Mobile scrollable selector, Desktop vertical stack */}
//                                 <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible pb-3 lg:pb-0 gap-2 no-scrollbar scroll-smooth">
//                                     {CATEGORIES.map((category) => {
//                                         const count = getCategoryCount(category.id);
//                                         const isActive = activeCategory === category.id;
//                                         const Icon = category.icon;

//                                         return (
//                                             <button
//                                                 key={category.id}
//                                                 onClick={() => setActiveCategory(category.id)}
//                                                 className={`flex items-center justify-between gap-3 px-4 py-3 rounded-2xl transition-all duration-300 font-bold text-sm shrink-0 lg:w-full border cursor-pointer ${isActive
//                                                     ? "bg-[#a50808] border-[#a50808] text-white shadow-lg shadow-red-500/10 scale-[1.02]"
//                                                     : "bg-white/80 hover:bg-white border-gray-200/70 text-gray-600 hover:text-gray-800 hover:border-gray-300"
//                                                     }`}
//                                             >
//                                                 <div className="flex items-center gap-2.5">
//                                                     {Icon && (
//                                                         <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-[#a50808]"}`} />
//                                                     )}
//                                                     <span>{category.name}</span>
//                                                 </div>
//                                                 <span className={`px-2 py-0.5 rounded-lg text-xs font-extrabold transition-all duration-300 ${isActive ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"
//                                                     }`}>
//                                                     {count}
//                                                 </span>
//                                             </button>
//                                         );
//                                     })}
//                                 </div>
//                             </div>

//                             {/* Need Support Card */}
//                             <div className="hidden lg:block bg-gradient-to-br from-gray-900 to-gray-950 text-white p-6 rounded-3xl border border-white/10 relative overflow-hidden group shadow-xl">
//                                 <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#a50808]/20 rounded-full filter blur-2xl group-hover:scale-125 transition-transform duration-500" />
//                                 <div className="relative z-10 space-y-4">
//                                     <h4 className="font-poppins font-bold text-lg text-amber-200">
//                                         Need Specific Help?
//                                     </h4>
//                                     <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
//                                         Can&apos;t find the answer you are looking for? Our dedicated team is available to assist you directly.
//                                     </p>
//                                     <div className="pt-2 space-y-2.5">
//                                         <button
//                                             onClick={() => copyToClipboard("+918000897238", "phone")}
//                                             className="w-full flex items-center justify-between bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 px-4 py-2.5 rounded-xl text-xs font-semibold text-gray-200 transition-all duration-300 cursor-pointer"
//                                         >
//                                             <span className="flex items-center gap-2"><FaPhone className="text-amber-400" /> Phone Support</span>
//                                             {copiedPhone ? <FaCheck className="text-green-400" /> : <FaCopy className="text-gray-400" />}
//                                         </button>
//                                         <button
//                                             onClick={() => copyToClipboard("hello@drymato.com", "email")}
//                                             className="w-full flex items-center justify-between bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 px-4 py-2.5 rounded-xl text-xs font-semibold text-gray-200 transition-all duration-300 cursor-pointer"
//                                         >
//                                             <span className="flex items-center gap-2"><FaEnvelope className="text-amber-400" /> Email Support</span>
//                                             {copiedEmail ? <FaCheck className="text-green-400" /> : <FaCopy className="text-gray-400" />}
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Accordions Column */}
//                         <div className="lg:col-span-8 space-y-4">
//                             {filteredItems.length > 0 ? (
//                                 <div className="space-y-4">
//                                     {filteredItems.map((item) => (
//                                         <FaqCard
//                                             key={item.id}
//                                             item={item}
//                                             isOpen={openIds.has(item.id)}
//                                             onToggle={() => toggleAccordion(item.id)}
//                                         />
//                                     ))}
//                                 </div>
//                             ) : (
//                                 <div className="bg-white rounded-3xl p-10 sm:p-14 text-center border border-gray-200/70 shadow-sm max-w-xl mx-auto">
//                                     <div className="w-16 h-16 bg-red-50 text-[#a50808] rounded-full flex items-center justify-center mx-auto mb-6">
//                                         <FaTimes className="w-6 h-6" />
//                                     </div>
//                                     <h4 className="font-poppins font-bold text-lg text-gray-800 mb-2">
//                                         No Results Found
//                                     </h4>
//                                     <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6">
//                                         We couldn&apos;t find any questions matching &ldquo;{searchQuery}&rdquo;. Try using simple terms like &ldquo;bulk&rdquo;, &ldquo;export&rdquo;, or &ldquo;natural&rdquo;.
//                                     </p>
//                                     <button
//                                         onClick={() => {
//                                             setSearchQuery("");
//                                             setActiveCategory("all");
//                                         }}
//                                         className="bg-gradient-to-r from-[#a50808] to-[#be1212] hover:from-[#be1212] hover:to-[#a50808] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full shadow-lg hover:shadow-red-500/20 hover:scale-105 active:scale-95 transition-all duration-300 inline-flex items-center gap-2 cursor-pointer"
//                                     >
//                                         Clear Search Filters
//                                     </button>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Footer B2B Partnership Call To Action banner */}
//                 <section className="max-w-5xl mx-auto px-6 pb-28 pt-8 relative z-10 text-center">
//                     <Reveal className="p-10 sm:p-14 rounded-tl-[80px] rounded-br-[80px] bg-gradient-to-br from-gray-900 to-gray-950 text-white shadow-2xl border border-white/10 relative overflow-hidden group">
//                         <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#a50808]/15 rounded-full filter blur-[60px] pointer-events-none group-hover:scale-110 transition-transform duration-700" />
//                         <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-[#a50808]/10 rounded-full filter blur-[60px] pointer-events-none group-hover:scale-110 transition-transform duration-700" />

//                         <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
//                             <span className="text-[#a50808] font-black tracking-widest text-xs uppercase bg-[#a50808]/10 border border-[#a50808]/20 px-4 py-2 rounded-full inline-flex items-center gap-2">
//                                 <FaHandshake className="w-4 h-4" /> Bulk &amp; Export Inquiries
//                             </span>
//                             <h2 className="text-3xl sm:text-4xl font-bold font-poppins tracking-tight leading-tight">
//                                 Ready to Place a Commercial Order?
//                             </h2>
//                             <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
//                                 Get custom price quotes for bulk procurement, container cargo shipping logistics, custom packaging, or white label integrations.
//                             </p>
//                             <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
//                                 <Link
//                                     href="/contact"
//                                     className="w-full sm:w-auto bg-gradient-to-r from-[#a50808] to-[#be1212] hover:from-[#be1212] hover:to-[#a50808] text-white text-xs font-extrabold uppercase tracking-wider px-8 py-4 rounded-full shadow-lg hover:shadow-red-500/20 hover:scale-105 active:scale-95 transition-all duration-300 inline-flex items-center justify-center gap-2 cursor-pointer"
//                                 >
//                                     Get A Quote <FaArrowRight className="w-3.5 h-3.5" />
//                                 </Link>
//                                 <a
//                                     href="https://wa.me/918000897238"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="w-full sm:w-auto bg-transparent border border-white/20 hover:border-white/50 text-white text-xs font-extrabold uppercase tracking-wider px-8 py-4 rounded-full hover:bg-white/5 hover:scale-105 active:scale-95 transition-all duration-300 inline-flex items-center justify-center gap-2"
//                                 >
//                                     WhatsApp Support
//                                 </a>
//                             </div>
//                         </div>
//                     </Reveal>
//                 </section>
//             </div>
//         </>
//     );
// }

// // Scroll Reveal Helper Component
// function Reveal({ children, className = "" }) {
//     const [element, setElement] = useState(null);
//     const [isRevealed, setIsRevealed] = useState(false);

//     useEffect(() => {
//         if (!element) return;
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     setIsRevealed(true);
//                     observer.disconnect();
//                 }
//             },
//             {
//                 root: null,
//                 rootMargin: "-8% 0px -8% 0px",
//                 threshold: 0.05
//             }
//         );
//         observer.observe(element);
//         return () => observer.disconnect();
//     }, [element]);

//     return (
//         <div
//             ref={setElement}
//             className={`${className} transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[40px]"
//                 }`}
//         >
//             {children}
//         </div>
//     );
// }

// // Individual FAQ Card component with scroll reveal memory
// function FaqCard({ item, isOpen, onToggle }) {
//     const [element, setElement] = useState(null);
//     const [isRevealed, setIsRevealed] = useState(false);

//     useEffect(() => {
//         if (!element) return;
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     setIsRevealed(true);
//                     observer.disconnect();
//                 }
//             },
//             {
//                 root: null,
//                 rootMargin: "-8% 0px -8% 0px",
//                 threshold: 0.05
//             }
//         );
//         observer.observe(element);
//         return () => observer.disconnect();
//     }, [element]);

//     return (
//         <div
//             ref={setElement}
//             className={`bg-white rounded-2xl border transition-all duration-500 ease-out overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 ${isOpen
//                 ? "border-[#a50808]/40 ring-1 ring-[#a50808]/20"
//                 : "border-gray-200/80"
//                 } ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[20px] pointer-events-none"
//                 }`}
//             style={{
//                 transitionProperty: "opacity, transform, border-color, box-shadow, ring"
//             }}
//         >
//             {/* Header / Question Button */}
//             <button
//                 onClick={onToggle}
//                 className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left font-bold text-gray-800 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base cursor-pointer"
//             >
//                 <span className="font-poppins flex items-start gap-3">
//                     <span className="text-[#a50808] font-black">{item.id}.</span>
//                     <span>{item.question}</span>
//                 </span>
//                 <span className={`w-8 h-8 rounded-full flex items-center justify-center border shrink-0 transition-all duration-300 ${isOpen
//                     ? "bg-[#a50808]/10 border-transparent text-[#a50808] rotate-180"
//                     : "bg-gray-50 border-gray-200 text-gray-400"
//                     }`}>
//                     <FaChevronDown className="w-3.5 h-3.5" />
//                 </span>
//             </button>

//             {/* Content / Answer Container (Modern Grid Transition) */}
//             <div
//                 className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
//                     }`}
//             >
//                 <div className="overflow-hidden">
//                     <div className="px-6 pb-6 pt-1 text-gray-600 text-sm sm:text-base leading-relaxed border-t border-gray-50">
//                         {item.answer}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }




// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import {
//     FaSearch,
//     FaChevronDown,
//     FaInfoCircle,
//     FaBox,
//     FaHandshake,
//     FaGlobe,
//     FaCalendarPlus,
//     FaEnvelope,
//     FaPhone,
//     FaTimes,
//     FaCopy,
//     FaCheck,
//     FaArrowRight
// } from "react-icons/fa";

// // FAQ Categories configuration
// const CATEGORIES = [
//     { id: "all", name: "All Questions", icon: null },
//     { id: "general", name: "General & About", icon: FaInfoCircle },
//     { id: "product", name: "Product & Packaging", icon: FaBox },
//     { id: "bulk", name: "Bulk Orders & HoReCa", icon: FaHandshake },
//     { id: "export", name: "Export & International", icon: FaGlobe },
//     { id: "future", name: "Future Products", icon: FaCalendarPlus },
//     { id: "orders", name: "Orders & Contact", icon: FaEnvelope }
// ];

// export default function FaqClient() {
//     const [searchQuery, setSearchQuery] = useState("");
//     const [activeCategory, setActiveCategory] = useState("all");
//     const [openIds, setOpenIds] = useState(new Set([1])); // Open the first item by default
//     const [copiedEmail, setCopiedEmail] = useState(false);
//     const [copiedPhone, setCopiedPhone] = useState(false);

//     // FAQ items data list
//     const faqItems = [
//         // 1. General / About Drymato
//         {
//             id: 1,
//             category: "general",
//             question: "What is Drymato?",
//             answer: "Drymato offers premium dehydrated tomato products made from carefully selected farm-fresh tomatoes, naturally dried to preserve their rich flavor, color, and nutritional value."
//         },
//         {
//             id: 2,
//             category: "general",
//             question: "Are your products 100% natural?",
//             answer: "Yes. Our products contain no artificial colors, preservatives, additives, or synthetic flavors."
//         },
//         {
//             id: 3,
//             category: "general",
//             question: "What is the difference between fresh and dehydrated tomatoes?",
//             answer: "Dehydrated tomatoes contain most of the flavor and nutrients of fresh tomatoes with significantly reduced moisture, resulting in a longer shelf life and concentrated taste."
//         },
//         {
//             id: 4,
//             category: "general",
//             question: "How can I use dehydrated tomatoes?",
//             answer: "They can be used in pasta, pizza, salads, sandwiches, wraps, soups, sauces, gravies, rice dishes, snacks, and bakery products."
//         },
//         {
//             id: 5,
//             category: "general",
//             question: "Do I need to soak dehydrated tomatoes before use?",
//             answer: "Not always. They can be used directly in many recipes. For softer texture, soak them in warm water for 10–15 minutes."
//         },
//         {
//             id: 6,
//             category: "general",
//             question: "Are Drymato products suitable for vegetarians?",
//             answer: "Yes. All our products are 100% vegetarian."
//         },
//         {
//             id: 7,
//             category: "general",
//             question: "Do your products contain preservatives?",
//             answer: "No. We do not use artificial preservatives."
//         },
//         {
//             id: 8,
//             category: "general",
//             question: "How long do Drymato products last?",
//             answer: "When stored properly in a cool and dry place, our products typically have a shelf life of up to 12 months."
//         },
//         {
//             id: 9,
//             category: "general",
//             question: "How should I store the product?",
//             answer: "Store in a cool, dry place away from direct sunlight. Keep the container tightly sealed after opening."
//         },
//         {
//             id: 10,
//             category: "general",
//             question: "Are your products suitable for commercial kitchens?",
//             answer: "Yes. Drymato products are widely suitable for restaurants, cafés, cloud kitchens, caterers, bakeries, and food manufacturers."
//         },

//         // 2. Product & Packaging
//         {
//             id: 11,
//             category: "product",
//             question: "What pack sizes are available?",
//             answer: "We offer retail packs, jars, pouches, and bulk packaging options for commercial buyers."
//         },
//         {
//             id: 12,
//             category: "product",
//             question: "Do you offer bulk packs?",
//             answer: "Yes. Bulk vacuum-packed bags are available for HoReCa and industrial customers."
//         },
//         {
//             id: 13,
//             category: "product",
//             question: "Can I request custom pack sizes?",
//             answer: "Yes. Custom packaging options may be available depending on order quantity."
//         },
//         {
//             id: 14,
//             category: "product",
//             question: "Do you provide private labeling?",
//             answer: "Yes. We support private label and white-label requirements for eligible bulk orders."
//         },
//         {
//             id: 15,
//             category: "product",
//             question: "Are your products export-ready?",
//             answer: "Yes. We can supply products suitable for international markets subject to country-specific requirements."
//         },

//         // 3. Bulk Orders & HoReCa
//         {
//             id: 16,
//             category: "bulk",
//             question: "Do you supply restaurants and cafés?",
//             answer: "Yes. We regularly work with restaurants, cafés, cloud kitchens, and catering businesses."
//         },
//         {
//             id: 17,
//             category: "bulk",
//             question: "Is there a minimum order quantity for bulk purchases?",
//             answer: "MOQ depends on product type and packaging requirements. Please contact us for details."
//         },
//         {
//             id: 18,
//             category: "bulk",
//             question: "Can I request samples before placing a bulk order?",
//             answer: "Yes. Sample requests can be arranged for serious business inquiries."
//         },
//         {
//             id: 19,
//             category: "bulk",
//             question: "Do you offer recurring supply contracts?",
//             answer: "Yes. We can support ongoing supply requirements for businesses."
//         },
//         {
//             id: 20,
//             category: "bulk",
//             question: "Can food manufacturers source ingredients from Drymato?",
//             answer: "Absolutely. We supply dehydrated ingredients suitable for food processing applications."
//         },

//         // 4. Export & International Buyers
//         {
//             id: 21,
//             category: "export",
//             question: "Which countries do you export to?",
//             answer: "We are open to supplying customers across the Middle East, Europe, North America, Southeast Asia, and other international markets."
//         },
//         {
//             id: 22,
//             category: "export",
//             question: "Can you handle container-load shipments?",
//             answer: "Yes. Bulk export orders can be arranged based on customer requirements."
//         },
//         {
//             id: 23,
//             category: "export",
//             question: "Do you provide export documentation?",
//             answer: "Yes. Required export documentation can be provided as per destination requirements."
//         },
//         {
//             id: 24,
//             category: "export",
//             question: "Can you supply customized export packaging?",
//             answer: "Yes. We offer customized export packaging for distributors and importers."
//         },
//         {
//             id: 25,
//             category: "export",
//             question: "Are your products suitable for distributors?",
//             answer: "Yes. We welcome inquiries from importers, distributors, wholesalers, and food ingredient traders."
//         },

//         // 5. Future Products
//         {
//             id: 26,
//             category: "future",
//             question: "What other products are coming soon?",
//             answer: (
//                 <div className="space-y-3">
//                     <p className="text-foreground/80 font-medium">We are expanding our product catalog to include premium dehydrated vegetables and powders. Coming soon:</p>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
//                         {[
//                             "Dehydrated Onion Flakes",
//                             "Dehydrated Garlic Flakes",
//                             "Dehydrated Okra (Bhindi)",
//                             "Dehydrated Carrot Slices",
//                             "Dehydrated Beetroot",
//                             "Mixed Dehydrated Vegetables",
//                             "Vegetable Powders"
//                         ].map((item, idx) => (
//                             <div key={idx} className="flex items-center gap-2.5 bg-background border border-forest/10 px-3 py-2 rounded-xl text-forest text-sm font-semibold">
//                                 <span className="w-1.5 h-1.5 rounded-full bg-sage" />
//                                 {item}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             )
//         },
//         {
//             id: 27,
//             category: "future",
//             question: "Will Drymato launch more dehydrated vegetables?",
//             answer: "Yes. We are continuously developing new dehydrated vegetable products for retail and industrial applications."
//         },
//         {
//             id: 28,
//             category: "future",
//             question: "Do you offer vegetable powders?",
//             answer: "Yes. Select vegetable powders are available and more varieties are under development."
//         },

//         // 6. Orders & Contact
//         {
//             id: 29,
//             category: "orders",
//             question: "How can I place an order?",
//             answer: "You can contact us directly through our website, email, phone, or WhatsApp."
//         },
//         {
//             id: 30,
//             category: "orders",
//             question: "How can I become a distributor?",
//             answer: "Please reach out through our contact page with your business details and location."
//         },
//         {
//             id: 31,
//             category: "orders",
//             question: "How can I request a quotation?",
//             answer: "Simply contact us with your required quantity, packaging preference, and destination country."
//         },
//         {
//             id: 32,
//             category: "orders",
//             question: "How can I contact Drymato?",
//             answer: (
//                 <div className="space-y-3">
//                     <p className="text-foreground/80 font-medium">Get in touch directly with our sales and support team:</p>
//                     <div className="flex flex-col sm:flex-row gap-3 pt-1">
//                         <a
//                             href="tel:+918000897238"
//                             className="inline-flex items-center justify-center gap-2 bg-background hover:bg-[#f1ebdc] border border-forest/10 text-forest px-4 py-3 rounded-xl transition-all duration-300 shadow-sm font-bold text-sm cursor-pointer"
//                         >
//                             <FaPhone className="text-sage w-4 h-4" />
//                             +91 8000897238
//                         </a>
//                         <a
//                             href="mailto:hello@drymato.com"
//                             className="inline-flex items-center justify-center gap-2 bg-background hover:bg-[#f1ebdc] border border-forest/10 text-forest px-4 py-3 rounded-xl transition-all duration-300 shadow-sm font-bold text-sm cursor-pointer"
//                         >
//                             <FaEnvelope className="text-sage w-4 h-4" />
//                             hello@drymato.com
//                         </a>
//                     </div>
//                 </div>
//             )
//         }
//     ];

//     // Handle accordion toggle
//     const toggleAccordion = (id) => {
//         const newOpenIds = new Set(openIds);
//         if (newOpenIds.has(id)) {
//             newOpenIds.delete(id);
//         } else {
//             newOpenIds.add(id);
//         }
//         setOpenIds(newOpenIds);
//     };

//     // Copy handlers
//     const copyToClipboard = (text, type) => {
//         navigator.clipboard.writeText(text);
//         if (type === "email") {
//             setCopiedEmail(true);
//             setTimeout(() => setCopiedEmail(false), 2000);
//         } else {
//             setCopiedPhone(true);
//             setTimeout(() => setCopiedPhone(false), 2000);
//         }
//     };

//     // Filter FAQs based on search and selected category
//     const filteredItems = faqItems.filter((item) => {
//         const matchesCategory = activeCategory === "all" || item.category === activeCategory;
//         const query = searchQuery.toLowerCase().trim();
//         if (!query) return matchesCategory;

//         const matchesSearch =
//             item.question.toLowerCase().includes(query) ||
//             (typeof item.answer === "string" && item.answer.toLowerCase().includes(query));

//         return matchesCategory && matchesSearch;
//     });

//     // Helper to count items in each category dynamically
//     const getCategoryCount = (catId) => {
//         const query = searchQuery.toLowerCase().trim();
//         return faqItems.filter((item) => {
//             const matchesCat = catId === "all" || item.category === catId;
//             if (!query) return matchesCat;
//             const matchesSearch =
//                 item.question.toLowerCase().includes(query) ||
//                 (typeof item.answer === "string" && item.answer.toLowerCase().includes(query));
//             return matchesCat && matchesSearch;
//         }).length;
//     };

//     return (
//         <>
//             {/* Parallax Background for FAQ Page */}
//             <div className="fixed top-15 left-0 w-full h-[90vh] z-0 pointer-events-none">
//                 <Image
//                     src="/banner sun dried.png"
//                     alt="Drymato Premium Dehydrated Background"
//                     fill
//                     priority
//                     className="object-cover object-center"
//                 />
//                 <div className="absolute inset-0 bg-black/45" />
//             </div>

//             {/* Header / Sub-Hero section */}
//             <section className="animate-slide-down relative text-surface w-full h-[80vh] min-h-[480px] flex items-center justify-start z-10 -mt-10">
//                 <div className="max-w-7xl mx-auto px-6 w-full flex justify-start items-center animate-left-to-right delay-500 relative">
//                     <div className="max-w-3xl text-left">
//                         {/* Breadcrumbs */}
//                         <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-80 mb-4 justify-start">
//                             <Link href="/" className="hover:text-surface/80 transition-colors">Home</Link>
//                             <span>/</span>
//                             <span className="text-surface">FAQ</span>
//                         </div>

//                         <h1 id="faq-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 font-serif leading-tight text-surface text-left">
//                             Frequently Asked Questions
//                         </h1>
//                         <p className="text-left text-surface/90 text-lg sm:text-xl font-serif font-bold mb-4 leading-relaxed">
//                             Got Questions? We Have Answers.
//                         </p>
//                         <p className="text-left text-surface/80 text-sm sm:text-base font-semibold leading-relaxed">
//                             Find detailed information regarding our products, dehydrated processes, commercial kitchen integrations, logistics, export standards, and future catalog expansions.
//                         </p>
//                     </div>
//                 </div>
//             </section>

//             {/* Content Wrapper */}
//             <div className="relative z-20 bg-background">
//                 <div className="max-w-7xl mx-auto px-6 py-20">
//                     {/* Search Bar section */}
//                     <div className="max-w-3xl mx-auto mb-16 relative z-30 -mt-28 sm:-mt-32">
//                         <div className="bg-surface/90 backdrop-blur-md p-4 sm:p-5 rounded-3xl shadow-xl border border-forest/10 flex flex-col sm:flex-row items-center gap-3">
//                             <div className="relative w-full">
//                                 <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-forest/40 w-5 h-5" />
//                                 <input
//                                     type="text"
//                                     placeholder="Search by keywords (e.g. storage, bulk, export, garlic)..."
//                                     value={searchQuery}
//                                     onChange={(e) => setSearchQuery(e.target.value)}
//                                     className="w-full pl-12 pr-10 py-3 sm:py-3.5 bg-background focus:bg-surface text-foreground placeholder-foreground/40 rounded-2xl outline-none border border-forest/10 focus:border-forest transition-all duration-300 text-sm font-semibold"
//                                 />
//                                 {searchQuery && (
//                                     <button
//                                         onClick={() => setSearchQuery("")}
//                                         className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/40 hover:text-foreground transition-colors"
//                                     >
//                                         <FaTimes className="w-4 h-4" />
//                                     </button>
//                                 )}
//                             </div>
//                         </div>
//                     </div>

//                     {/* Main Layout Grid */}
//                     <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
//                         {/* Sidebar Category Selector */}
//                         <div className="lg:col-span-4 lg:sticky lg:top-28 z-20 space-y-6">
//                             <div className="bg-surface p-2 sm:p-4 rounded-3xl border border-forest/10 shadow-sm">
//                                 <h3 className="hidden lg:block text-xs font-black uppercase tracking-widest text-forest/60 mb-4 px-3">
//                                     Browse Categories
//                                 </h3>

//                                 {/* Mobile scrollable selector, Desktop vertical stack */}
//                                 <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible pb-3 lg:pb-0 gap-2.5 no-scrollbar scroll-smooth">
//                                     {CATEGORIES.map((category) => {
//                                         const count = getCategoryCount(category.id);
//                                         const isActive = activeCategory === category.id;
//                                         const Icon = category.icon;

//                                         return (
//                                             <button
//                                                 key={category.id}
//                                                 onClick={() => setActiveCategory(category.id)}
//                                                 className={`flex items-center justify-between gap-3 px-5 py-3.5 rounded-2xl transition-all duration-300 font-semibold text-sm shrink-0 lg:w-full border cursor-pointer ${isActive
//                                                     ? "bg-forest border-forest text-surface shadow-sm"
//                                                     : "bg-[#f1ebdc]/40 hover:bg-[#f1ebdc] text-foreground border-forest/5"
//                                                     }`}
//                                             >
//                                                 <div className="flex items-center gap-2.5">
//                                                     {Icon && (
//                                                         <Icon className={`w-4 h-4 ${isActive ? "text-surface" : "text-forest"}`} />
//                                                     )}
//                                                     <span>{category.name}</span>
//                                                 </div>
//                                                 <span className={`px-2.5 py-0.5 rounded-lg text-xs font-bold transition-all duration-300 ${isActive ? "bg-surface/20 text-surface" : "bg-forest/10 text-forest"
//                                                     }`}>
//                                                     {count}
//                                                 </span>
//                                             </button>
//                                         );
//                                     })}
//                                 </div>
//                             </div>

//                             {/* Need Support Card (Matching Dark Forest Style) */}
//                             <div className="hidden lg:block bg-forest text-surface p-7 rounded-3xl border border-forest/10 relative overflow-hidden shadow-sm">
//                                 <div className="relative z-10 space-y-4">
//                                     <h4 className="font-serif font-bold text-lg sm:text-xl text-surface">
//                                         Need Specific Help?
//                                     </h4>
//                                     <p className="text-surface/80 text-xs sm:text-sm leading-relaxed">
//                                         Can&apos;t find the answer you are looking for? Our dedicated team is available to assist you directly.
//                                     </p>
//                                     <div className="pt-2 space-y-2.5">
//                                         <button
//                                             onClick={() => copyToClipboard("+918000897238", "phone")}
//                                             className="w-full flex items-center justify-between bg-surface/10 hover:bg-surface/20 border border-surface/15 px-4 py-2.5 rounded-xl text-xs font-semibold text-surface transition-all duration-300 cursor-pointer"
//                                         >
//                                             <span className="flex items-center gap-2"><FaPhone className="text-sage" /> Phone Support</span>
//                                             {copiedPhone ? <FaCheck className="text-green-300" /> : <FaCopy className="text-surface/60" />}
//                                         </button>
//                                         <button
//                                             onClick={() => copyToClipboard("hello@drymato.com", "email")}
//                                             className="w-full flex items-center justify-between bg-surface/10 hover:bg-surface/20 border border-surface/15 px-4 py-2.5 rounded-xl text-xs font-semibold text-surface transition-all duration-300 cursor-pointer"
//                                         >
//                                             <span className="flex items-center gap-2"><FaEnvelope className="text-sage" /> Email Support</span>
//                                             {copiedEmail ? <FaCheck className="text-green-300" /> : <FaCopy className="text-surface/60" />}
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Accordions Column */}
//                         <div className="lg:col-span-8 space-y-4">
//                             {filteredItems.length > 0 ? (
//                                 <div className="space-y-4">
//                                     {filteredItems.map((item) => (
//                                         <FaqCard
//                                             key={item.id}
//                                             item={item}
//                                             isOpen={openIds.has(item.id)}
//                                             onToggle={() => toggleAccordion(item.id)}
//                                         />
//                                     ))}
//                                 </div>
//                             ) : (
//                                 <div className="bg-surface rounded-3xl p-10 sm:p-14 text-center border border-forest/10 shadow-sm max-w-xl mx-auto">
//                                     <div className="w-16 h-16 bg-sage/20 text-forest rounded-full flex items-center justify-center mx-auto mb-6">
//                                         <FaTimes className="w-6 h-6" />
//                                     </div>
//                                     <h4 className="font-serif font-bold text-lg text-forest mb-2">
//                                         No Results Found
//                                     </h4>
//                                     <p className="text-foreground/70 text-sm sm:text-base leading-relaxed mb-6">
//                                         We couldn&apos;t find any questions matching &ldquo;{searchQuery}&rdquo;. Try using simple terms like &ldquo;bulk&rdquo;, &ldquo;export&rdquo;, or &ldquo;natural&rdquo;.
//                                     </p>
//                                     <button
//                                         onClick={() => {
//                                             setSearchQuery("");
//                                             setActiveCategory("all");
//                                         }}
//                                         className="bg-forest hover:bg-forest-light text-surface text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full shadow-sm hover:scale-105 active:scale-95 transition-all duration-300 inline-flex items-center gap-2 cursor-pointer"
//                                     >
//                                         Clear Search Filters
//                                     </button>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Footer B2B Partnership Call To Action banner */}
//                 <section className="max-w-5xl mx-auto px-6 pb-28 pt-8 relative z-10 text-center">
//                     <Reveal className="p-10 sm:p-14 rounded-3xl bg-forest text-surface shadow-sm border border-forest/10 relative overflow-hidden group">
//                         <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
//                             <span className="text-surface font-black tracking-widest text-xs uppercase bg-surface/10 border border-surface/20 px-4 py-2 rounded-full inline-flex items-center gap-2">
//                                 <FaHandshake className="w-4 h-4" /> Bulk &amp; Export Inquiries
//                             </span>
//                             <h2 className="text-3xl sm:text-4xl font-bold font-serif tracking-tight leading-tight">
//                                 Ready to Place a Commercial Order?
//                             </h2>
//                             <p className="text-surface/80 text-sm sm:text-base leading-relaxed">
//                                 Get custom price quotes for bulk procurement, container cargo shipping logistics, custom packaging, or white label integrations.
//                             </p>
//                             <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
//                                 <Link
//                                     href="/contact"
//                                     className="w-full sm:w-auto bg-surface hover:bg-surface/90 text-forest text-xs font-extrabold uppercase tracking-wider px-8 py-4 rounded-full shadow-sm hover:scale-105 active:scale-95 transition-all duration-300 inline-flex items-center justify-center gap-2 cursor-pointer"
//                                 >
//                                     Get A Quote <FaArrowRight className="w-3.5 h-3.5" />
//                                 </Link>
//                                 <a
//                                     href="https://wa.me/918000897238"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="w-full sm:w-auto bg-transparent border border-surface/30 hover:border-surface/60 text-surface text-xs font-extrabold uppercase tracking-wider px-8 py-4 rounded-full hover:bg-surface/10 hover:scale-105 active:scale-95 transition-all duration-300 inline-flex items-center justify-center gap-2"
//                                 >
//                                     WhatsApp Support
//                                 </a>
//                             </div>
//                         </div>
//                     </Reveal>
//                 </section>
//             </div>
//         </>
//     );
// }

// // Scroll Reveal Helper Component
// function Reveal({ children, className = "" }) {
//     const [element, setElement] = useState(null);
//     const [isRevealed, setIsRevealed] = useState(false);

//     useEffect(() => {
//         if (!element) return;
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     setIsRevealed(true);
//                     observer.disconnect();
//                 }
//             },
//             {
//                 root: null,
//                 rootMargin: "-8% 0px -8% 0px",
//                 threshold: 0.05
//             }
//         );
//         observer.observe(element);
//         return () => observer.disconnect();
//     }, [element]);

//     return (
//         <div
//             ref={setElement}
//             className={`${className} transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[40px]"
//                 }`}
//         >
//             {children}
//         </div>
//     );
// }

// // Individual FAQ Card component with scroll reveal memory
// function FaqCard({ item, isOpen, onToggle }) {
//     const [element, setElement] = useState(null);
//     const [isRevealed, setIsRevealed] = useState(false);

//     useEffect(() => {
//         if (!element) return;
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     setIsRevealed(true);
//                     observer.disconnect();
//                 }
//             },
//             {
//                 root: null,
//                 rootMargin: "-8% 0px -8% 0px",
//                 threshold: 0.05
//             }
//         );
//         observer.observe(element);
//         return () => observer.disconnect();
//     }, [element]);

//     return (
//         <div
//             ref={setElement}
//             className={`bg-surface rounded-3xl border transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md ${isOpen
//                 ? "border-forest/30 ring-1 ring-forest/20"
//                 : "border-forest/10"
//                 } ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[20px] pointer-events-none"
//                 }`}
//         >
//             {/* Header / Question Button */}
//             <button
//                 onClick={onToggle}
//                 className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between gap-4 text-left font-bold text-forest hover:text-forest/80 transition-colors duration-200 text-sm sm:text-base cursor-pointer"
//             >
//                 <span className="font-serif flex items-start gap-3">
//                     <span className="text-sage font-black">{item.id}.</span>
//                     <span>{item.question}</span>
//                 </span>
//                 <span className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen
//                     ? "bg-sage text-white rotate-180"
//                     : "bg-sage/20 text-forest"
//                     }`}>
//                     <FaChevronDown className="w-3.5 h-3.5" />
//                 </span>
//             </button>

//             {/* Content / Answer Container (Modern Grid Transition) */}
//             <div
//                 className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
//                     }`}
//             >
//                 <div className="overflow-hidden">
//                     <div className="px-6 sm:px-8 pb-6 pt-1 text-foreground/80 text-sm sm:text-base leading-relaxed border-t border-forest/5">
//                         {item.answer}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }




"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    FaSearch,
    FaChevronDown,
    FaInfoCircle,
    FaBox,
    FaUtensils,
    FaHandshake,
    FaGlobe,
    FaCalendarPlus,
    FaEnvelope,
    FaPhone,
    FaTimes,
    FaCopy,
    FaCheck,
    FaArrowRight
} from "react-icons/fa";
import { usePolicy, useSiteInfo, decodeText } from "@/context/WebsiteDataContext";

// The API's FAQ list has no category field, so only "All Questions" is shown.
// When the backend adds categories, add entries here and set `category` on each item.
// Static category list. A category only appears in the sidebar once it has at least one question.
const CATEGORIES = [
    { id: "all", name: "All Questions", icon: null },
    { id: "general", name: "General & About", icon: FaInfoCircle },
    { id: "usage", name: "Usage & Storage", icon: FaUtensils },
    { id: "product", name: "Product & Packaging", icon: FaBox },
    { id: "bulk", name: "Bulk Orders & HoReCa", icon: FaHandshake },
    { id: "export", name: "Export & International", icon: FaGlobe },
    { id: "future", name: "Future Products", icon: FaCalendarPlus },
    { id: "orders", name: "Orders & Contact", icon: FaEnvelope }
];

// The API has no category field, so each question is grouped by keywords in the question text.
// First matching rule wins; anything unmatched falls into "general".
const CATEGORY_RULES = [
    ["export", /export|international|overseas|countr|customs|global/i],
    ["future", /upcoming|future|launch|coming soon|new product|plan to/i],
    ["product", /pack|jar|pouch|label|sizes?\b/i],
    ["bulk", /bulk|commercial|restaurant|caf[eé]|horeca|catering|wholesale|moq|minimum order|sample|supply|contract|manufactur/i],
    ["usage", /\buse\b|\busing\b|soak|stor(e|age)|shelf|\blast\b|cook|recipe|rehydrat/i],
    ["orders", /order|contact|payment|whatsapp|track|refund|return|quote|pric|deliver|ship/i]
];
const categorize = (question) =>
    CATEGORY_RULES.find(([, re]) => re.test(question))?.[0] ?? "general";

// Questions arrive without a trailing "?", so add one when punctuation is missing
const asQuestion = (q) => (/[?.!]$/.test(q) ? q : `${q}?`);

export default function FaqClient() {
    const { policy, loading, error } = usePolicy("FAQS");
    const { email, phoneTel, whatsappLink } = useSiteInfo();

    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("all");
    const [openIds, setOpenIds] = useState(new Set([1])); // Open the first item by default
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [copiedPhone, setCopiedPhone] = useState(false);

    // FAQ items built from the backend response (ordered as the admin arranged them)
    const faqItems = useMemo(() => {
        const raw = policy?.sections;
        if (!raw || typeof raw !== "object") return [];
        return Object.entries(raw)
            .filter(([q, a]) => q && typeof a === "string" && a.trim())
            .map(([q, a], index) => {
                const question = asQuestion(decodeText(q).trim());
                return {
                    id: index + 1,
                    category: categorize(question),
                    question,
                    answer: decodeText(a).trim()
                };
            });
    }, [policy]);

    // Only show categories that actually contain questions
    const visibleCategories = useMemo(
        () => CATEGORIES.filter((c) => c.id === "all" || faqItems.some((i) => i.category === c.id)),
        [faqItems]
    );

    // If an admin edit removes the selected category, fall back to "all"
    const currentCategory = visibleCategories.some((c) => c.id === activeCategory)
        ? activeCategory
        : "all";

    // Handle accordion toggle
    const toggleAccordion = (id) => {
        const newOpenIds = new Set(openIds);
        if (newOpenIds.has(id)) {
            newOpenIds.delete(id);
        } else {
            newOpenIds.add(id);
        }
        setOpenIds(newOpenIds);
    };

    // Copy handlers
    const copyToClipboard = async (text, type) => {
        try {
            await navigator.clipboard.writeText(text);
        } catch {
            return;
        }
        if (type === "email") {
            setCopiedEmail(true);
            setTimeout(() => setCopiedEmail(false), 2000);
        } else {
            setCopiedPhone(true);
            setTimeout(() => setCopiedPhone(false), 2000);
        }
    };

    // Filter FAQs based on search and selected category
    const filteredItems = faqItems.filter((item) => {
        const matchesCategory = currentCategory === "all" || item.category === currentCategory;
        const query = searchQuery.toLowerCase().trim();
        if (!query) return matchesCategory;

        const matchesSearch =
            item.question.toLowerCase().includes(query) ||
            item.answer.toLowerCase().includes(query);

        return matchesCategory && matchesSearch;
    });

    // Helper to count items in each category dynamically
    const getCategoryCount = (catId) => {
        const query = searchQuery.toLowerCase().trim();
        return faqItems.filter((item) => {
            const matchesCat = catId === "all" || item.category === catId;
            if (!query) return matchesCat;
            const matchesSearch =
                item.question.toLowerCase().includes(query) ||
                item.answer.toLowerCase().includes(query);
            return matchesCat && matchesSearch;
        }).length;
    };

    const hasContact = Boolean(phoneTel || email);

    return (
        <>
            {/* Parallax Background for FAQ Page */}
            <div className="fixed top-15 left-0 w-full h-[90vh] z-0 pointer-events-none">
                <Image
                    src="/banner sun dried.png"
                    alt="Drymato Premium Dehydrated Background"
                    fill
                    priority
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/45" />
            </div>

            {/* Header / Sub-Hero section */}
            <section className="animate-slide-down relative text-surface w-full h-[80vh] min-h-[480px] flex items-center justify-start z-10 -mt-10">
                <div className="max-w-7xl mx-auto px-6 w-full flex justify-start items-center animate-left-to-right delay-500 relative">
                    <div className="max-w-3xl text-left">
                        {/* Breadcrumbs */}
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-80 mb-4 justify-start">
                            <Link href="/" className="hover:text-surface/80 transition-colors">Home</Link>
                            <span>/</span>
                            <span className="text-surface">FAQ</span>
                        </div>

                        <h1 id="faq-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 font-serif leading-tight text-surface text-left">
                            Frequently Asked Questions
                        </h1>
                        <p className="text-left text-surface/90 text-lg sm:text-xl font-serif font-bold mb-4 leading-relaxed">
                            Got Questions? We Have Answers.
                        </p>
                        <p className="text-left text-surface/80 text-sm sm:text-base font-semibold leading-relaxed">
                            Find detailed information regarding our products, dehydrated processes, commercial kitchen integrations, logistics, export standards, and future catalog expansions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Wrapper */}
            <div className="relative z-20 bg-background">
                <div className="max-w-7xl mx-auto px-6 py-20">
                    {/* Search Bar section */}
                    <div className="max-w-3xl mx-auto mb-16 relative z-30 -mt-28 sm:-mt-32">
                        <div className="bg-surface/90 backdrop-blur-md p-4 sm:p-5 rounded-3xl shadow-xl border border-forest/10 flex flex-col sm:flex-row items-center gap-3">
                            <div className="relative w-full">
                                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-forest/40 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search by keywords (e.g. storage, bulk, export, garlic)..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-10 py-3 sm:py-3.5 bg-background focus:bg-surface text-foreground placeholder-foreground/40 rounded-2xl outline-none border border-forest/10 focus:border-forest transition-all duration-300 text-sm font-semibold"
                                />
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery("")}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/40 hover:text-foreground transition-colors"
                                    >
                                        <FaTimes className="w-4 h-4" />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Main Layout Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                        {/* Sidebar Category Selector */}
                        <div className="lg:col-span-4 lg:sticky lg:top-28 z-20 space-y-6">
                            <div className="bg-surface p-2 sm:p-4 rounded-3xl border border-forest/10 shadow-sm">
                                <h3 className="hidden lg:block text-xs font-black uppercase tracking-widest text-forest/60 mb-4 px-3">
                                    Browse Categories
                                </h3>

                                {/* Mobile scrollable selector, Desktop vertical stack */}
                                <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible pb-3 lg:pb-0 gap-2.5 no-scrollbar scroll-smooth">
                                    {visibleCategories.map((category) => {
                                        const count = getCategoryCount(category.id);
                                        const isActive = currentCategory === category.id;
                                        const Icon = category.icon;

                                        return (
                                            <button
                                                key={category.id}
                                                onClick={() => setActiveCategory(category.id)}
                                                className={`flex items-center justify-between gap-3 px-5 py-3.5 rounded-2xl transition-all duration-300 font-semibold text-sm shrink-0 lg:w-full border cursor-pointer ${isActive
                                                    ? "bg-forest border-forest text-surface shadow-sm"
                                                    : "bg-[#f1ebdc]/40 hover:bg-[#f1ebdc] text-foreground border-forest/5"
                                                    }`}
                                            >
                                                <div className="flex items-center gap-2.5">
                                                    {Icon && (
                                                        <Icon className={`w-4 h-4 ${isActive ? "text-surface" : "text-forest"}`} />
                                                    )}
                                                    <span>{category.name}</span>
                                                </div>
                                                <span className={`px-2.5 py-0.5 rounded-lg text-xs font-bold transition-all duration-300 ${isActive ? "bg-surface/20 text-surface" : "bg-forest/10 text-forest"
                                                    }`}>
                                                    {count}
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Need Support Card (Matching Dark Forest Style) */}
                            <div className="hidden lg:block bg-forest text-surface p-7 rounded-3xl border border-forest/10 relative overflow-hidden shadow-sm">
                                <div className="relative z-10 space-y-4">
                                    <h4 className="font-serif font-bold text-lg sm:text-xl text-surface">
                                        Need Specific Help?
                                    </h4>
                                    <p className="text-surface/80 text-xs sm:text-sm leading-relaxed">
                                        Can&apos;t find the answer you are looking for? Our dedicated team is available to assist you directly.
                                    </p>
                                    {hasContact && (
                                        <div className="pt-2 space-y-2.5">
                                            {phoneTel && (
                                                <button
                                                    onClick={() => copyToClipboard(phoneTel, "phone")}
                                                    className="w-full flex items-center justify-between bg-surface/10 hover:bg-surface/20 border border-surface/15 px-4 py-2.5 rounded-xl text-xs font-semibold text-surface transition-all duration-300 cursor-pointer"
                                                >
                                                    <span className="flex items-center gap-2"><FaPhone className="text-sage" /> Phone Support</span>
                                                    {copiedPhone ? <FaCheck className="text-green-300" /> : <FaCopy className="text-surface/60" />}
                                                </button>
                                            )}
                                            {email && (
                                                <button
                                                    onClick={() => copyToClipboard(email, "email")}
                                                    className="w-full flex items-center justify-between bg-surface/10 hover:bg-surface/20 border border-surface/15 px-4 py-2.5 rounded-xl text-xs font-semibold text-surface transition-all duration-300 cursor-pointer"
                                                >
                                                    <span className="flex items-center gap-2"><FaEnvelope className="text-sage" /> Email Support</span>
                                                    {copiedEmail ? <FaCheck className="text-green-300" /> : <FaCopy className="text-surface/60" />}
                                                </button>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Accordions Column */}
                        <div className="lg:col-span-8 space-y-4">
                            {faqItems.length === 0 ? (
                                loading && !error ? (
                                    <div className="space-y-4" aria-busy="true" aria-label="Loading questions">
                                        {[0, 1, 2, 3].map((i) => (
                                            <div
                                                key={i}
                                                className="bg-surface rounded-3xl border border-forest/10 shadow-sm px-6 sm:px-8 py-6 flex items-center justify-between gap-4 animate-pulse"
                                            >
                                                <div className="h-5 w-3/4 rounded-full bg-sage/20" />
                                                <div className="w-9 h-9 rounded-full bg-sage/20 shrink-0" />
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="bg-surface rounded-3xl p-10 sm:p-14 text-center border border-forest/10 shadow-sm max-w-xl mx-auto">
                                        <div className="w-16 h-16 bg-sage/20 text-forest rounded-full flex items-center justify-center mx-auto mb-6">
                                            <FaEnvelope className="w-6 h-6" />
                                        </div>
                                        <h4 className="font-serif font-bold text-lg text-forest mb-2">
                                            {error ? "We couldn't load the questions" : "No questions published yet"}
                                        </h4>
                                        <p className="text-foreground/70 text-sm sm:text-base leading-relaxed">
                                            {error
                                                ? "Please check your connection and refresh the page."
                                                : "Our team is adding answers to this page. In the meantime, feel free to reach out to us directly."}
                                            {email ? " You can write to us at " : ""}
                                            {email && (
                                                <a href={`mailto:${email}`} className="text-brick font-semibold hover:underline">
                                                    {email}
                                                </a>
                                            )}
                                            {email ? "." : ""}
                                        </p>
                                    </div>
                                )
                            ) : filteredItems.length > 0 ? (
                                <div className="space-y-4">
                                    {filteredItems.map((item) => (
                                        <FaqCard
                                            key={item.id}
                                            item={item}
                                            isOpen={openIds.has(item.id)}
                                            onToggle={() => toggleAccordion(item.id)}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div className="bg-surface rounded-3xl p-10 sm:p-14 text-center border border-forest/10 shadow-sm max-w-xl mx-auto">
                                    <div className="w-16 h-16 bg-sage/20 text-forest rounded-full flex items-center justify-center mx-auto mb-6">
                                        <FaTimes className="w-6 h-6" />
                                    </div>
                                    <h4 className="font-serif font-bold text-lg text-forest mb-2">
                                        No Results Found
                                    </h4>
                                    <p className="text-foreground/70 text-sm sm:text-base leading-relaxed mb-6">
                                        We couldn&apos;t find any questions matching &ldquo;{searchQuery}&rdquo;. Try using simple terms like &ldquo;bulk&rdquo;, &ldquo;export&rdquo;, or &ldquo;natural&rdquo;.
                                    </p>
                                    <button
                                        onClick={() => {
                                            setSearchQuery("");
                                            setActiveCategory("all");
                                        }}
                                        className="bg-forest hover:bg-forest-light text-surface text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full shadow-sm hover:scale-105 active:scale-95 transition-all duration-300 inline-flex items-center gap-2 cursor-pointer"
                                    >
                                        Clear Search Filters
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Footer B2B Partnership Call To Action banner */}
                <section className="max-w-5xl mx-auto px-6 pb-28 pt-8 relative z-10 text-center">
                    <Reveal className="p-10 sm:p-14 rounded-3xl bg-forest text-surface shadow-sm border border-forest/10 relative overflow-hidden group">
                        <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
                            <span className="text-surface font-black tracking-widest text-xs uppercase bg-surface/10 border border-surface/20 px-4 py-2 rounded-full inline-flex items-center gap-2">
                                <FaHandshake className="w-4 h-4" /> Bulk &amp; Export Inquiries
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-bold font-serif tracking-tight leading-tight">
                                Ready to Place a Commercial Order?
                            </h2>
                            <p className="text-surface/80 text-sm sm:text-base leading-relaxed">
                                Get custom price quotes for bulk procurement, container cargo shipping logistics, custom packaging, or white label integrations.
                            </p>
                            <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
                                <Link
                                    href="/contact"
                                    className="w-full sm:w-auto bg-surface hover:bg-surface/90 text-forest text-xs font-extrabold uppercase tracking-wider px-8 py-4 rounded-full shadow-sm hover:scale-105 active:scale-95 transition-all duration-300 inline-flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    Get A Quote <FaArrowRight className="w-3.5 h-3.5" />
                                </Link>
                                {whatsappLink && (
                                    <a
                                        href={whatsappLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full sm:w-auto bg-transparent border border-surface/30 hover:border-surface/60 text-surface text-xs font-extrabold uppercase tracking-wider px-8 py-4 rounded-full hover:bg-surface/10 hover:scale-105 active:scale-95 transition-all duration-300 inline-flex items-center justify-center gap-2"
                                    >
                                        WhatsApp Support
                                    </a>
                                )}
                            </div>
                        </div>
                    </Reveal>
                </section>
            </div>
        </>
    );
}

// Scroll Reveal Helper Component
function Reveal({ children, className = "" }) {
    const [element, setElement] = useState(null);
    const [isRevealed, setIsRevealed] = useState(false);

    useEffect(() => {
        if (!element) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsRevealed(true);
                    observer.disconnect();
                }
            },
            {
                root: null,
                rootMargin: "-8% 0px -8% 0px",
                threshold: 0.05
            }
        );
        observer.observe(element);
        return () => observer.disconnect();
    }, [element]);

    return (
        <div
            ref={setElement}
            className={`${className} transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[40px]"
                }`}
        >
            {children}
        </div>
    );
}

// Individual FAQ Card component with scroll reveal memory
function FaqCard({ item, isOpen, onToggle }) {
    const [element, setElement] = useState(null);
    const [isRevealed, setIsRevealed] = useState(false);

    useEffect(() => {
        if (!element) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsRevealed(true);
                    observer.disconnect();
                }
            },
            {
                root: null,
                rootMargin: "-8% 0px -8% 0px",
                threshold: 0.05
            }
        );
        observer.observe(element);
        return () => observer.disconnect();
    }, [element]);

    return (
        <div
            ref={setElement}
            className={`bg-surface rounded-3xl border transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md ${isOpen
                ? "border-forest/30 ring-1 ring-forest/20"
                : "border-forest/10"
                } ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[20px] pointer-events-none"
                }`}
        >
            {/* Header / Question Button */}
            <button
                onClick={onToggle}
                className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between gap-4 text-left font-bold text-forest hover:text-forest/80 transition-colors duration-200 text-sm sm:text-base cursor-pointer"
            >
                <span className="font-serif flex items-start gap-3">
                    <span className="text-sage font-black">{item.id}.</span>
                    <span>{item.question}</span>
                </span>
                <span className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen
                    ? "bg-sage text-white rotate-180"
                    : "bg-sage/20 text-forest"
                    }`}>
                    <FaChevronDown className="w-3.5 h-3.5" />
                </span>
            </button>

            {/* Content / Answer Container (Modern Grid Transition) */}
            <div
                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
            >
                <div className="overflow-hidden">
                    <div className="px-6 sm:px-8 pb-6 pt-1 text-foreground/80 text-sm sm:text-base leading-relaxed whitespace-pre-line border-t border-forest/5">
                        {item.answer}
                    </div>
                </div>
            </div>
        </div>
    );
}