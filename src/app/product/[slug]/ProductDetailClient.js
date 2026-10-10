// "use client";

// import { useState, useEffect, useMemo, useRef } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import {
//     FaTint,
//     FaSun,
//     FaRegClock,
//     FaWarehouse,
//     FaCheck,
//     FaArrowRight,
//     FaStar,
//     FaRegStar,
//     FaCloudUploadAlt,
//     FaChevronDown,
//     FaHome,
//     FaConciergeBell,
//     FaIndustry,
//     FaBoxOpen,
//     FaGlobeAmericas,
//     FaLeaf,
//     FaPercent,
//     FaPalette,
//     FaThLarge,
//     FaAppleAlt,
//     FaLayerGroup,
//     FaInfoCircle,
//     FaTimes,
// } from "react-icons/fa";
// import { useCart } from "@/context/CartContext";

// /*
//   THEME (find & replace these to match globals.css):
//   primary        #2d6a3e
//   primary hover  #245633
//   primary tint   #eaf3ec
// */

// // ---- BACKEND CONFIG ----
// const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
// const STORE_DOMAIN = "Drymato";
// const FALLBACK_IMAGE = "/drymato-logo.png";

// const isRemote = (src) => /^https?:\/\//.test(src);
// const getImageUrl = (img) => (typeof img === "string" ? img : img?.url || null);

// // Maps one backend product to the shape this page (and the similar-products cards) use
// const mapApiProduct = (p) => {
//     const images = (p.images || []).map(getImageUrl).filter(Boolean);
//     const category = p.subCategory?.[0] || "";
//     const form = category.toLowerCase().includes("powder") ? "powder" : "slices";
//     // "Dehydrated Mango" / "Lemon Powder" -> "Mango" / "Lemon" (used in generated copy)
//     const baseName = (p.name || "").replace(/^dehydrated\s+/i, "").replace(/\s+powder$/i, "").trim() || p.name;

//     return {
//         id: p._id,
//         slug: p.slug,
//         title: p.name,
//         subtitle: "",
//         description: p.description,
//         category,
//         form,
//         baseName,
//         images: images.length > 0 ? images : [FALLBACK_IMAGE],
//         image: images[0] || FALLBACK_IMAGE,
//         hoverImage: images[1] || images[0] || FALLBACK_IMAGE,
//         feature: category || "100% Natural",
//         href: `/product/${p.slug}`,
//     };
// };

// // ---- PAGE CONTENT ----
// // Title, category, description and images come from the backend. The API has no fields yet
// // for specs / highlights / uses, so those sections are generated from the product's name and
// // form (powder vs slices). Replace them with real fields once the backend provides them.
// const buildProductContent = (item) => {
//     const isPowder = item.form === "powder";
//     const base = item.baseName;

//     return {
//         title: item.title,
//         category: item.category,
//         shortDescription: item.description,
//         longDescription: item.description,
//         images: item.images,
//         highlights: [
//             `Made from Real ${base}`,
//             "100% Natural, No Preservatives",
//             "Consistent Moisture Content",
//             "Export Quality Packaging",
//         ],
//         quickFacts: [
//             { label: "Aroma", value: `Natural, Concentrated ${base}`, bg: "bg-[#eaf3ec]", color: "text-forest", icon: FaTint },
//             { label: "Processing", value: "Controlled Dehydration", bg: "bg-[#eaf3ec]", color: "text-forest", icon: FaSun },
//             { label: "Shelf Life", value: "12 Months", bg: "bg-[#eaf3ec]", color: "text-forest", icon: FaRegClock },
//             { label: "Storage", value: "Cool & Dry Place", bg: "bg-[#eaf3ec]", color: "text-forest", icon: FaWarehouse },
//         ],
//         ingredients: [`100% ${base}*`],
//         specifications: [
//             { label: "Product Form", value: isPowder ? "Fine Powder" : "Slices / Flakes", icon: FaThLarge },
//             { label: "Appearance", value: `Natural ${base} Color`, icon: FaPalette },
//             { label: "Taste & Aroma", value: `Characteristic ${base}`, icon: FaAppleAlt },
//             { label: "Texture", value: isPowder ? "Fine and Free-Flowing" : "Dry, Lightweight and Firm", icon: FaLayerGroup },
//             { label: "Moisture Content", value: "To Be Confirmed", icon: FaPercent },
//             { label: "Shelf Life", value: "12 Months", icon: FaRegClock },
//             { label: "Storage Instructions", value: "Store in a Cool, Dry Place", icon: FaWarehouse },
//             { label: "Country of Origin", value: "India", icon: FaGlobeAmericas },
//             { label: "Packaging (Pack Sizes)", value: "100g, 250g, 500g, 1kg, 5kg, Bulk", icon: FaBoxOpen },
//             { label: "Suitable For", value: "Vegetarian, Vegan", icon: FaLeaf },
//         ],
//         uses: [
//             {
//                 label: "Home Cooking",
//                 icon: FaHome,
//                 items: isPowder
//                     ? ["Seasoning & Spice Blends", "Soups & Sauces", "Baking", "Beverages"]
//                     : ["Cooking & Baking", "Soups & Stews", "Salads", "Snacking"],
//             },
//             { label: "HoReCa / Professional", icon: FaConciergeBell, items: ["Restaurant Kitchens", "Hotels", "Cafés & QSRs"] },
//             {
//                 label: "Food Industry",
//                 icon: FaIndustry,
//                 items: isPowder
//                     ? ["Beverage Mixes", "Bakery & Confectionery", "Seasoning Blends"]
//                     : ["Soup Mixes", "Ready-to-Eat Meals", "Bakery & Snacks"],
//             },
//         ],
//         howToUse: isPowder
//             ? "Add directly to recipes, beverage mixes, and seasoning blends. Start with a small quantity and adjust to taste."
//             : "Add directly to curries, gravies, and soups, or rehydrate in warm water for 10–15 minutes before use in salads and cold preparations.",
//     };
// };

// // ---- STATIC DEMO DATA (no backend source yet) ----
// const DEMO_REVIEWS = [
//     {
//         name: "Rajesh Mehta",
//         company: "Spice Route Exports, Mumbai",
//         title: "Consistent quality, every single batch",
//         rating: 5,
//         text: "Consistent quality across every bulk order. Our processing line has had zero complaints in over a year of sourcing from Drymato.",
//         image: null,
//     },
//     {
//         name: "Sarah Lindqvist",
//         company: "Nordic Foods AB, Sweden",
//         title: "Reliable for long-distance export",
//         rating: 5,
//         text: "Excellent packaging for long-distance export and the moisture content is always within spec. Reliable long-term supplier.",
//         image: null,
//     },
//     {
//         name: "Ahmed Al-Farsi",
//         company: "Gulf Gourmet Trading, UAE",
//         title: "Smooth procurement, great communication",
//         rating: 5,
//         text: "Great communication on lead times and documentation. Makes bulk procurement straightforward for our distribution network.",
//         image: null,
//     },
// ];

// const DEMO_FAQS = [
//     {
//         q: "What is the minimum order quantity (MOQ)?",
//         a: "Our standard MOQ for this product is 25kg. For custom packaging or smaller trial orders, please reach out via the Enquire Now button.",
//     },
//     {
//         q: "Do you offer custom packaging or private labeling?",
//         a: "Yes, we offer bulk bags, custom pouch sizes, and private label packaging for wholesale and export partners. Share your requirements with our team.",
//     },
//     {
//         q: "What is the typical lead time for bulk orders?",
//         a: "Lead time is typically 7–10 business days depending on order volume and packaging requirements, plus shipping transit time.",
//     },
//     {
//         q: "Can you provide samples before a bulk order?",
//         a: "Yes, sample requests can be made through our enquiry form. Sample shipping charges may apply depending on destination.",
//     },
//     {
//         q: "Do you ship internationally?",
//         a: "Yes, we regularly export to markets across the Middle East, Europe, and Southeast Asia with full documentation support.",
//     },
// ];

// const CONTENT_TABS = [
//     { key: "description", label: "Description", type: "content" },
//     { key: "specifications", label: "Specifications", type: "content" },
//     { key: "uses", label: "Where It's Used", type: "content" },
//     { key: "reviews", label: "Reviews", type: "scroll" },
//     { key: "faqs", label: "FAQs", type: "scroll" },
// ];

// function StarRating({ rating, size = 14 }) {
//     return (
//         <div className="flex items-center gap-0.5">
//             {[...Array(5)].map((_, i) =>
//                 i < rating
//                     ? <FaStar key={i} size={size} className="text-amber-400" />
//                     : <FaRegStar key={i} size={size} className="text-gray-200" />
//             )}
//         </div>
//     );
// }

// function StarInput({ value, onChange }) {
//     return (
//         <div className="flex items-center gap-1.5">
//             {[1, 2, 3, 4, 5].map((n) => (
//                 <button
//                     key={n}
//                     type="button"
//                     onClick={() => onChange(n)}
//                     className="cursor-pointer"
//                     aria-label={`Rate ${n} star${n > 1 ? "s" : ""}`}
//                 >
//                     {n <= value
//                         ? <FaStar size={22} className="text-amber-400" />
//                         : <FaRegStar size={22} className="text-gray-200" />
//                     }
//                 </button>
//             ))}
//         </div>
//     );
// }

// function Avatar({ name }) {
//     const initials = name
//         .split(" ")
//         .map((w) => w[0])
//         .slice(0, 2)
//         .join("")
//         .toUpperCase();
//     return (
//         <div className="w-11 h-11 rounded-full bg-[#eaf3ec] text-forest font-bold text-sm flex items-center justify-center shrink-0">
//             {initials}
//         </div>
//     );
// }

// // Single similar-product card (used inside the auto-scrolling track)
// function SimilarProductCard({ rp }) {

//     const { addItem } = useCart();
//     return (
//         <div className="group relative bg-white rounded-tl-[48px] rounded-br-[48px] rounded-tr-none rounded-bl-none border border-gray-100 overflow-hidden transition-all duration-500 hover:-translate-y-1.5 flex flex-col h-full">
//             <Link href={rp.href} className="relative w-full h-72 sm:h-80 bg-[#faf6f0] flex items-center justify-center p-6 overflow-hidden cursor-pointer">
//                 <Image
//                     src={rp.image}
//                     alt={rp.title}
//                     width={180}
//                     height={180}
//                     unoptimized={isRemote(rp.image)}
//                     className="absolute max-w-[70%] max-h-[70%] w-auto h-auto object-contain transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0"
//                 />
//                 <Image
//                     src={rp.hoverImage || rp.image}
//                     alt={`${rp.title} alternate view`}
//                     width={180}
//                     height={180}
//                     unoptimized={isRemote(rp.hoverImage || rp.image)}
//                     className="absolute max-w-[70%] max-h-[70%] w-auto h-auto object-contain transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
//                 />
//             </Link>

//             <div className="flex flex-col flex-grow px-5 pt-4 pb-5">
//                 <Link href={rp.href} className="min-h-[80px] no-underline cursor-pointer">
//                     <h4 className="font-poppins text-base sm:text-[17px] font-bold text-gray-900 leading-snug mb-1 group-hover:text-forest transition-colors duration-300">
//                         {rp.title}
//                     </h4>
//                     {rp.subtitle && (
//                         <p className="text-gray-400 text-xs font-medium mb-2.5">
//                             {rp.subtitle}
//                         </p>
//                     )}
//                     <div className="flex items-center gap-1.5 text-forest text-xs font-semibold">
//                         <FaCheck size={11} className="shrink-0" />
//                         <span>{rp.feature}</span>
//                     </div>
//                 </Link>

//                 <div className="mt-4 flex items-center gap-2.5">
//                     <button
//                         onClick={() => addItem(rp)}
//                         className="flex-1 text-[11px] sm:text-xs font-bold tracking-wide uppercase py-2.5 px-3 rounded-lg border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 cursor-pointer"
//                     >
//                         Add to Cart
//                     </button>

//                     <Link
//                         href="/contact"
//                         className="group/btn relative overflow-hidden flex-1 bg-forest border-2 border-forest text-white py-2.5 pl-4 pr-1.5 rounded-lg text-[11px] sm:text-xs font-bold tracking-wide uppercase flex items-center justify-center gap-2 transition-all duration-300 no-underline cursor-pointer"
//                     >
//                         <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[125%] aspect-square rounded-t-[50%] bg-white translate-y-full transition-transform duration-[750ms] ease-in-out z-0 group-hover/btn:translate-y-[12%]" />
//                         <span className="relative z-10 transition-colors duration-300 group-hover/btn:text-forest">
//                             Enquire
//                         </span>
//                         <span className="relative z-10 w-5 h-5 bg-white text-forest rounded-full flex items-center justify-center shrink-0 shadow-sm transform group-hover/btn:translate-x-0.5 group-hover/btn:bg-forest group-hover/btn:text-white transition-all duration-300">
//                             <FaArrowRight size={9} />
//                         </span>
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// }

// function ProductDetailView({ catalogProduct, similarProducts }) {
//     const slug = catalogProduct.slug;
//     const product = buildProductContent(catalogProduct);

//     const [activeImage, setActiveImage] = useState(0);
//     const [isPaused, setIsPaused] = useState(false);
//     const [openFaq, setOpenFaq] = useState(0);
//     const [activeTab, setActiveTab] = useState("description");
//     const [isDragging, setIsDragging] = useState(false);
//     const intervalRef = useRef(null);
//     const reviewsRef = useRef(null);
//     const faqRef = useRef(null);
//     const { addItem } = useCart();

//     const [reviews, setReviews] = useState(DEMO_REVIEWS);
//     const [reviewName, setReviewName] = useState("");
//     const [reviewEmail, setReviewEmail] = useState("");
//     const [reviewTitle, setReviewTitle] = useState("");
//     const [reviewRating, setReviewRating] = useState(0);
//     const [reviewText, setReviewText] = useState("");
//     const [reviewImagePreview, setReviewImagePreview] = useState(null);

//     const images = Array.isArray(product.images) && product.images.length > 0
//         ? product.images
//         : [FALLBACK_IMAGE];
//     const highlights = Array.isArray(product.highlights) ? product.highlights : [];
//     const quickFacts = Array.isArray(product.quickFacts) ? product.quickFacts : [];
//     const ingredients = Array.isArray(product.ingredients) ? product.ingredients : [];
//     const specifications = Array.isArray(product.specifications) ? product.specifications : [];
//     const uses = Array.isArray(product.uses) ? product.uses : [];

//     // Similar products (from the same backend list): works for any length. Duplicated once for a seamless loop;
//     // duration scales with count so scroll speed stays constant (~6s per card).
//     const marqueeDuration = Math.max(similarProducts.length * 6, 20);

//     useEffect(() => {
//         if (images.length <= 1 || isPaused) return;
//         intervalRef.current = setInterval(() => {
//             setActiveImage((prev) => (prev + 1) % images.length);
//         }, 3500);
//         return () => clearInterval(intervalRef.current);
//     }, [images.length, isPaused]);

//     const handleAddToCart = () => {
//         addItem({
//             id: catalogProduct.id,
//             title: product.title,
//             subtitle: catalogProduct.subtitle || "",
//             image: images[0],
//             href: catalogProduct.href || `/product/${slug}`,
//         });
//     };

//     const handleTabClick = (tab) => {
//         if (tab.type === "content") {
//             setActiveTab(tab.key);
//             return;
//         }
//         const ref = tab.key === "reviews" ? reviewsRef : faqRef;
//         ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
//     };

//     const handleFileFromInput = (e) => {
//         const file = e.target.files?.[0];
//         if (file) setReviewImagePreview(URL.createObjectURL(file));
//     };

//     const handleDrop = (e) => {
//         e.preventDefault();
//         setIsDragging(false);
//         const file = e.dataTransfer.files?.[0];
//         if (file) setReviewImagePreview(URL.createObjectURL(file));
//     };

//     const handleReviewSubmit = (e) => {
//         e.preventDefault();
//         if (!reviewName.trim() || !reviewText.trim() || reviewRating === 0) return;

//         setReviews((prev) => [
//             {
//                 name: reviewName.trim(),
//                 company: "",
//                 title: reviewTitle.trim(),
//                 rating: reviewRating,
//                 text: reviewText.trim(),
//                 image: reviewImagePreview,
//             },
//             ...prev,
//         ]);

//         setReviewName("");
//         setReviewEmail("");
//         setReviewTitle("");
//         setReviewRating(0);
//         setReviewText("");
//         setReviewImagePreview(null);
//     };

//     return (
//         <div className="bg-white">
//             {/* Similar-products marquee animation (scoped to this component) */}
//             <style>{`
//                 @keyframes similar-marquee {
//                     from { transform: translateX(0); }
//                     to { transform: translateX(-50%); }
//                 }
//                 .similar-track {
//                     animation: similar-marquee var(--marquee-duration, 40s) linear infinite;
//                 }
//                 .similar-viewport:hover .similar-track {
//                     animation-play-state: paused;
//                 }
//                 @media (prefers-reduced-motion: reduce) {
//                     .similar-track { animation: none; }
//                 }
//             `}</style>

//             {/* ===================== BREADCRUMB ===================== */}
//             <div className="max-w-7xl mx-auto px-6 pt-6 pb-2">
//                 <div className="flex items-center gap-2 text-xs text-gray-400 font-medium">
//                     <Link href="/" className="hover:text-forest transition-colors">Home</Link>
//                     <span>/</span>
//                     <Link href="/product" className="hover:text-forest transition-colors">Products</Link>
//                     <span>/</span>
//                     <span className="text-gray-600">{product.title}</span>
//                 </div>
//             </div>

//             {/* ===================== PRODUCT DETAIL SECTION ===================== */}
//             <section className="max-w-7xl mx-auto px-6 py-8 sm:py-12">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

//                     {/* Gallery */}
//                     <div
//                         className="flex gap-3 sm:gap-4"
//                         onMouseEnter={() => setIsPaused(true)}
//                         onMouseLeave={() => setIsPaused(false)}
//                     >
//                         <div className="flex flex-col gap-3 shrink-0">
//                             {images.map((img, i) => (
//                                 <button
//                                     key={i}
//                                     onClick={() => setActiveImage(i)}
//                                     className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-[#faf6f0] flex items-center justify-center p-2.5 transition-all duration-200 cursor-pointer ${activeImage === i
//                                         ? "ring-2 ring-forest"
//                                         : "ring-1 ring-gray-100 hover:ring-gray-300"
//                                         }`}
//                                 >
//                                     <Image
//                                         src={img}
//                                         alt={`${product.title} view ${i + 1}`}
//                                         width={68}
//                                         height={68}
//                                         unoptimized={isRemote(img)}
//                                         className="max-w-full max-h-full w-auto h-auto object-contain"
//                                     />
//                                 </button>
//                             ))}
//                         </div>

//                         <div className="relative flex-1 aspect-square bg-[#faf6f0] rounded-2xl overflow-hidden">
//                             {images.map((img, i) => (
//                                 <Image
//                                     key={i}
//                                     src={img}
//                                     alt={product.title}
//                                     fill
//                                     unoptimized={isRemote(img)}
//                                     className={`object-contain p-10 sm:p-14 transition-opacity duration-700 ease-in-out ${activeImage === i ? "opacity-100" : "opacity-0"
//                                         }`}
//                                 />
//                             ))}
//                         </div>
//                     </div>

//                     {/* Info panel */}
//                     <div className="flex flex-col">
//                         <span className="text-forest text-xs font-bold tracking-widest uppercase mb-3">
//                             {product.category}
//                         </span>

//                         <h1 className="font-poppins text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-3">
//                             {product.title}
//                         </h1>

//                         <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed mb-6">
//                             {product.shortDescription}
//                         </p>

//                         <div className="grid grid-cols-2 gap-y-2.5 gap-x-4 mb-7 pb-7 border-b border-gray-100">
//                             {highlights.map((h) => (
//                                 <div key={h} className="flex items-center gap-2 text-sm text-gray-700">
//                                     <FaCheck className="text-forest shrink-0" size={12} />
//                                     <span>{h}</span>
//                                 </div>
//                             ))}
//                         </div>

//                         {/* CTAs */}
//                         <div className="flex flex-col sm:flex-row items-stretch gap-2.5 mb-8">
//                             <button
//                                 type="button"
//                                 onClick={handleAddToCart}
//                                 className="flex-1 text-xs font-bold tracking-wide uppercase py-2.5 px-5 rounded-full border-2 border-brick text-brick hover:bg-brick hover:text-white transition-all duration-300 cursor-pointer"
//                             >
//                                 Add to Bulk Cart
//                             </button>

//                             <Link
//                                 href="/contact"
//                                 className="group relative overflow-hidden flex-1 bg-forest border-2 border-forest text-white py-2.5 pl-5 pr-1.5 rounded-full text-xs font-bold tracking-wide uppercase flex items-center justify-center gap-2.5 transition-all duration-300 no-underline cursor-pointer"
//                             >
//                                 <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[125%] aspect-square rounded-t-[50%] bg-white translate-y-full transition-transform duration-[750ms] ease-in-out z-0 group-hover:translate-y-[12%]" />
//                                 <span className="relative z-10 transition-colors duration-300 group-hover:text-forest">
//                                     Enquire Now
//                                 </span>
//                                 <span className="relative z-10 w-6 h-6 bg-white text-forest rounded-full flex items-center justify-center shadow-sm transform group-hover:translate-x-1 group-hover:bg-forest group-hover:text-white transition-all duration-300 shrink-0">
//                                     <FaArrowRight size={11} />
//                                 </span>
//                             </Link>
//                         </div>

//                         {/* Quick facts */}
//                         {quickFacts.length > 0 && (
//                             <div className="grid grid-cols-2 gap-x-4 gap-y-5">
//                                 {quickFacts.map((fact) => {
//                                     const Icon = fact.icon;
//                                     return (
//                                         <div key={fact.label} className="flex items-center gap-3">
//                                             <span className={`w-11 h-11 rounded-full ${fact.bg} flex items-center justify-center shrink-0`}>
//                                                 <Icon className={fact.color} size={18} />
//                                             </span>
//                                             <div>
//                                                 <p className="text-[11px] font-bold uppercase tracking-wide text-gray-400 mb-0.5">
//                                                     {fact.label}
//                                                 </p>
//                                                 <p className="text-sm font-semibold text-gray-900 leading-snug">
//                                                     {fact.value}
//                                                 </p>
//                                             </div>
//                                         </div>
//                                     );
//                                 })}
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </section>

//             {/* ===================== TABS SECTION ===================== */}
//             <section className="w-full bg-[#faf6f0] py-14 sm:py-20">
//                 <div className="max-w-7xl mx-auto px-6">

//                     {/* Tab bar — centered, wraps on mobile */}
//                     <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:gap-x-10 border-b border-gray-200 mb-12 pb-0">
//                         {CONTENT_TABS.map((tab) => {
//                             const isActive = tab.type === "content" && activeTab === tab.key;
//                             return (
//                                 <button
//                                     key={tab.key}
//                                     onClick={() => handleTabClick(tab)}
//                                     className={`relative shrink-0 px-1 sm:px-2 py-3.5 text-sm sm:text-[15px] font-bold tracking-wide transition-colors duration-200 cursor-pointer ${isActive ? "text-forest" : "text-gray-500 hover:text-gray-800"
//                                         }`}
//                                 >
//                                     {tab.label}
//                                     <span
//                                         className={`absolute bottom-0 left-0 right-0 h-[2px] bg-forest transition-transform duration-300 origin-left ${isActive ? "scale-x-100" : "scale-x-0"
//                                             }`}
//                                     />
//                                 </button>
//                             );
//                         })}
//                     </div>

//                     {/* Description tab */}
//                     {activeTab === "description" && (
//                         <div className="max-w-4xl mx-auto space-y-10">
//                             <div className="bg-white rounded-2xl p-6 sm:p-8">
//                                 <h3 className="font-serif text-lg font-semibold text-gray-900 mb-4">
//                                     Ingredients
//                                 </h3>
//                                 <div className="flex flex-wrap gap-2.5">
//                                     {ingredients.map((ing) => (
//                                         <span
//                                             key={ing}
//                                             className="inline-flex items-center gap-2 bg-[#eaf3ec] text-forest text-sm font-semibold px-4 py-2 rounded-full"
//                                         >
//                                             <span className="w-1.5 h-1.5 rounded-full bg-forest" />
//                                             {ing}
//                                         </span>
//                                     ))}
//                                 </div>
//                             </div>

//                             <div className="bg-white rounded-2xl p-6 sm:p-8">
//                                 <h3 className="font-serif text-lg font-semibold text-gray-900 mb-4">
//                                     Description
//                                 </h3>
//                                 <p className="text-sm text-gray-600 leading-relaxed">
//                                     {product.longDescription}
//                                 </p>
//                             </div>

//                             {product.howToUse && (
//                                 <div className="bg-white rounded-2xl p-6 sm:p-8">
//                                     <h3 className="font-serif text-lg font-semibold text-gray-900 mb-4">
//                                         How to Use
//                                     </h3>
//                                     <p className="text-sm text-gray-600 leading-relaxed">
//                                         {product.howToUse}
//                                     </p>
//                                 </div>
//                             )}
//                         </div>
//                     )}

//                     {/* Specifications tab */}
//                     {activeTab === "specifications" && (
//                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
//                             {specifications.map((spec) => {
//                                 const Icon = spec.icon || FaInfoCircle;
//                                 return (
//                                     <div
//                                         key={spec.label}
//                                         className="bg-white rounded-2xl p-5 flex items-start gap-4 transition-transform duration-300 hover:-translate-y-1"
//                                     >
//                                         <span className="w-11 h-11 rounded-full bg-[#eaf3ec] text-forest flex items-center justify-center shrink-0">
//                                             <Icon size={17} />
//                                         </span>
//                                         <div>
//                                             <p className="text-[11px] font-bold uppercase tracking-wide text-gray-400 mb-1">
//                                                 {spec.label}
//                                             </p>
//                                             <p className="text-sm font-semibold text-gray-900 leading-snug">
//                                                 {spec.value}
//                                             </p>
//                                         </div>
//                                     </div>
//                                 );
//                             })}
//                         </div>
//                     )}

//                     {/* Where It's Used tab */}
//                     {activeTab === "uses" && uses.length > 0 && (
//                         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//                             {uses.map((useCase) => {
//                                 const Icon = useCase.icon || FaInfoCircle;
//                                 return (
//                                     <div key={useCase.label} className="bg-white rounded-2xl p-6 sm:p-7">
//                                         <span className="w-12 h-12 rounded-full bg-[#eaf3ec] text-forest flex items-center justify-center mb-5">
//                                             <Icon size={20} />
//                                         </span>
//                                         <h4 className="font-poppins text-base font-bold text-gray-900 mb-4">
//                                             {useCase.label}
//                                         </h4>
//                                         <ul className="space-y-2.5">
//                                             {useCase.items.map((item) => (
//                                                 <li key={item} className="flex items-center gap-2.5 text-sm text-gray-600">
//                                                     <FaCheck className="text-forest shrink-0" size={11} />
//                                                     {item}
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     </div>
//                                 );
//                             })}
//                         </div>
//                     )}
//                 </div>
//             </section>

//             {/* ===================== SIMILAR PRODUCTS SECTION (auto-scrolling) ===================== */}
//             {similarProducts.length > 0 && (
//                 <section className="w-full bg-white py-16 sm:py-20">
//                     <div className="max-w-7xl mx-auto px-6">
//                         <div className="flex items-center justify-between mb-10">
//                             <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight">
//                                 Similar Products
//                             </h2>
//                             <Link
//                                 href="/product"
//                                 className="text-sm font-bold text-forest hover:underline underline-offset-2"
//                             >
//                                 View All
//                             </Link>
//                         </div>

//                         {/* Viewport: py-2 leaves room for the hover lift so it isn't clipped */}
//                         <div className="similar-viewport overflow-hidden py-2">
//                             <div
//                                 className="similar-track flex w-max"
//                                 style={{ "--marquee-duration": `${marqueeDuration}s` }}
//                             >
//                                 {[...similarProducts, ...similarProducts].map((rp, i) => (
//                                     <div
//                                         key={`${rp.id}-${i}`}
//                                         className="w-[280px] sm:w-[330px] shrink-0 mr-6 sm:mr-8"
//                                         aria-hidden={i >= similarProducts.length}
//                                     >
//                                         <SimilarProductCard rp={rp} />
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             )}

//             {/* ===================== REVIEWS SECTION ===================== */}
//             <section ref={reviewsRef} className="w-full bg-[#faf6f0] py-16 sm:py-20 scroll-mt-20">
//                 <div className="max-w-5xl mx-auto px-6">
//                     <div className="text-center mb-12">
//                         <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight">
//                             Trusted by Buyers Worldwide
//                         </h2>
//                         <p className="text-gray-500 text-sm mt-2">
//                             {reviews.length} {reviews.length === 1 ? "review" : "reviews"} from wholesale partners
//                         </p>
//                     </div>

//                     {/* Review list */}
//                     <div className="space-y-5 mb-14">
//                         {reviews.map((review, i) => (
//                             <div
//                                 key={`${review.name}-${i}`}
//                                 className="bg-white rounded-2xl border border-gray-100 p-6"
//                             >
//                                 <div className="flex items-start justify-between gap-4 mb-4">
//                                     <div className="flex items-center gap-3">
//                                         <Avatar name={review.name} />
//                                         <div>
//                                             <div className="flex items-center gap-2">
//                                                 <p className="text-sm font-bold text-gray-900">{review.name}</p>
//                                                 <span className="text-[10px] font-bold uppercase tracking-wide text-forest bg-[#eaf3ec] px-2 py-0.5 rounded-full">
//                                                     Verified
//                                                 </span>
//                                             </div>
//                                             {review.company && (
//                                                 <p className="text-xs text-gray-400 mt-0.5">{review.company}</p>
//                                             )}
//                                         </div>
//                                     </div>
//                                     <StarRating rating={review.rating} />
//                                 </div>

//                                 {review.title && (
//                                     <p className="text-sm font-bold text-gray-900 mb-1.5">{review.title}</p>
//                                 )}
//                                 <p className="text-sm text-gray-600 leading-relaxed">
//                                     {review.text}
//                                 </p>

//                                 {review.image && (
//                                     <div className="relative w-24 h-24 rounded-xl overflow-hidden mt-4 bg-gray-50">
//                                         <Image src={review.image} alt="Review upload" fill className="object-cover" />
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                     </div>

//                     {/* Add review form */}
//                     <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8">
//                         <h3 className="font-poppins text-lg font-bold text-gray-900 mb-1">
//                             Add Your Review
//                         </h3>
//                         <p className="text-sm text-gray-500 mb-6">
//                             Your email address will not be published. Required fields are marked *
//                         </p>

//                         <form onSubmit={handleReviewSubmit} className="space-y-5">
//                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                                 <div>
//                                     <label className="block text-xs font-bold text-gray-700 mb-2">
//                                         Name *
//                                     </label>
//                                     <input
//                                         type="text"
//                                         value={reviewName}
//                                         onChange={(e) => setReviewName(e.target.value)}
//                                         placeholder="Ex. John Doe"
//                                         required
//                                         className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-100 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-forest/20 transition-all"
//                                     />
//                                 </div>
//                                 <div>
//                                     <label className="block text-xs font-bold text-gray-700 mb-2">
//                                         Email *
//                                     </label>
//                                     <input
//                                         type="email"
//                                         value={reviewEmail}
//                                         onChange={(e) => setReviewEmail(e.target.value)}
//                                         placeholder="example@gmail.com"
//                                         required
//                                         className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-100 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-forest/20 transition-all"
//                                     />
//                                 </div>
//                             </div>

//                             <div>
//                                 <label className="block text-xs font-bold text-gray-700 mb-2">
//                                     Your Rating *
//                                 </label>
//                                 <StarInput value={reviewRating} onChange={setReviewRating} />
//                             </div>

//                             <div>
//                                 <label className="block text-xs font-bold text-gray-700 mb-2">
//                                     Review Title *
//                                 </label>
//                                 <input
//                                     type="text"
//                                     value={reviewTitle}
//                                     onChange={(e) => setReviewTitle(e.target.value)}
//                                     placeholder="Write a short title"
//                                     required
//                                     className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-100 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-forest/20 transition-all"
//                                 />
//                             </div>

//                             <div>
//                                 <label className="block text-xs font-bold text-gray-700 mb-2">
//                                     Detailed Review *
//                                 </label>
//                                 <textarea
//                                     value={reviewText}
//                                     onChange={(e) => setReviewText(e.target.value)}
//                                     rows={4}
//                                     placeholder="Tell us about your experience with this product..."
//                                     required
//                                     className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-100 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-forest/20 transition-all resize-none"
//                                 />
//                             </div>

//                             <div>
//                                 <label className="block text-xs font-bold text-gray-700 mb-2">
//                                     Photo (Optional)
//                                 </label>
//                                 <div
//                                     onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
//                                     onDragLeave={() => setIsDragging(false)}
//                                     onDrop={handleDrop}
//                                     className={`relative border-2 border-dashed rounded-xl py-8 px-4 flex flex-col items-center justify-center text-center transition-colors ${isDragging ? "border-forest bg-[#eaf3ec]/60" : "border-gray-200"
//                                         }`}
//                                 >
//                                     {reviewImagePreview ? (
//                                         <div className="relative w-20 h-20 rounded-lg overflow-hidden">
//                                             <Image src={reviewImagePreview} alt="Preview" fill className="object-cover" />
//                                             <button
//                                                 type="button"
//                                                 onClick={() => setReviewImagePreview(null)}
//                                                 className="absolute top-1 right-1 w-5 h-5 bg-white/90 rounded-full flex items-center justify-center text-gray-600 hover:text-forest cursor-pointer"
//                                             >
//                                                 <FaTimes size={10} />
//                                             </button>
//                                         </div>
//                                     ) : (
//                                         <>
//                                             <FaCloudUploadAlt size={28} className="text-gray-300 mb-2" />
//                                             <p className="text-sm text-gray-400 mb-1">Drag a photo here</p>
//                                             <label className="text-sm font-bold text-forest cursor-pointer hover:underline underline-offset-2">
//                                                 Browse
//                                                 <input type="file" accept="image/*" onChange={handleFileFromInput} className="hidden" />
//                                             </label>
//                                         </>
//                                     )}
//                                 </div>
//                             </div>

//                             <button
//                                 type="submit"
//                                 className="w-full sm:w-auto bg-forest hover:bg-[#245633] text-white text-xs font-bold tracking-wide uppercase px-8 py-3 rounded-full transition-all duration-300 cursor-pointer"
//                             >
//                                 Submit Review
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             </section>

//             {/* ===================== FAQ SECTION ===================== */}
//             <section ref={faqRef} className="w-full bg-white py-16 sm:py-20 scroll-mt-20">
//                 <div className="max-w-3xl mx-auto px-6">
//                     <div className="text-center mb-12">
//                         <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight">
//                             Frequently Asked Questions
//                         </h2>
//                     </div>

//                     <div className="divide-y divide-gray-100 border-t border-b border-gray-100">
//                         {DEMO_FAQS.map((faq, i) => {
//                             const isOpen = openFaq === i;
//                             return (
//                                 <div key={faq.q}>
//                                     <button
//                                         onClick={() => setOpenFaq(isOpen ? -1 : i)}
//                                         className="w-full flex items-center justify-between text-left py-5 cursor-pointer"
//                                     >
//                                         <span className="text-sm sm:text-base font-semibold text-gray-900 pr-6">
//                                             {faq.q}
//                                         </span>
//                                         <FaChevronDown
//                                             size={13}
//                                             className={`text-forest shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
//                                         />
//                                     </button>
//                                     <div
//                                         className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 pb-5" : "max-h-0"
//                                             }`}
//                                     >
//                                         <p className="text-sm text-gray-600 leading-relaxed pr-10">
//                                             {faq.a}
//                                         </p>
//                                     </div>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }


// // ---- Wrapper: fetches from the backend (client side) and picks the product by slug ----
// export default function ProductDetailClient({ slug }) {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [reloadKey, setReloadKey] = useState(0);

//     useEffect(() => {
//         const controller = new AbortController();

//         const fetchProducts = async () => {
//             try {
//                 setLoading(true);
//                 setError(null);

//                 let page = 1;
//                 let totalPages = 1;
//                 const all = [];

//                 do {
//                     const res = await fetch(
//                         `${API_BASE_URL}/product/public/store/${STORE_DOMAIN}?page=${page}`,
//                         { signal: controller.signal }
//                     );
//                     if (!res.ok) throw new Error(`Request failed (${res.status})`);

//                     const json = await res.json();
//                     if (!json?.success) throw new Error(json?.message || "Failed to load products");

//                     all.push(...(json.data?.products || []));
//                     totalPages = json.data?.totalPages || 1;
//                     page += 1;
//                 } while (page <= totalPages);

//                 setProducts(all.filter((p) => p.status === "Active").map(mapApiProduct));
//             } catch (err) {
//                 if (err.name === "AbortError") return;
//                 setError(err.message || "Something went wrong");
//             } finally {
//                 if (!controller.signal.aborted) setLoading(false);
//             }
//         };

//         fetchProducts();
//         return () => controller.abort();
//     }, [reloadKey]);

//     const catalogProduct = useMemo(
//         () => products.find((p) => p.slug === slug) || null,
//         [products, slug]
//     );

//     // Same category first, then the rest of the catalog
//     const similarProducts = useMemo(() => {
//         if (!catalogProduct) return [];
//         const others = products.filter((p) => p.id !== catalogProduct.id);
//         const sameCategory = others.filter((p) => p.category === catalogProduct.category);
//         const rest = others.filter((p) => p.category !== catalogProduct.category);
//         return [...sameCategory, ...rest].slice(0, 8);
//     }, [products, catalogProduct]);

//     if (loading) {
//         return (
//             <div className="bg-white">
//                 <div className="max-w-7xl mx-auto px-6 pt-6 pb-2">
//                     <div className="h-3 w-48 rounded bg-gray-100 animate-pulse" />
//                 </div>
//                 <section className="max-w-7xl mx-auto px-6 py-8 sm:py-12">
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 animate-pulse">
//                         <div className="aspect-square bg-[#faf6f0] rounded-2xl" />
//                         <div className="flex flex-col">
//                             <div className="h-3 w-32 rounded bg-gray-100 mb-4" />
//                             <div className="h-9 w-3/4 rounded bg-gray-100 mb-4" />
//                             <div className="h-3 w-full rounded bg-gray-100 mb-2" />
//                             <div className="h-3 w-5/6 rounded bg-gray-100 mb-2" />
//                             <div className="h-3 w-2/3 rounded bg-gray-100 mb-8" />
//                             <div className="h-12 w-56 rounded-full bg-gray-100" />
//                         </div>
//                     </div>
//                 </section>
//             </div>
//         );
//     }

//     if (error) {
//         return (
//             <div className="bg-white min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
//                 <h1 className="font-poppins text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
//                     Something Went Wrong
//                 </h1>
//                 <p className="text-gray-500 text-sm sm:text-base max-w-md mb-8">
//                     We couldn&apos;t load this product right now. Please try again.
//                 </p>
//                 <button
//                     onClick={() => setReloadKey((k) => k + 1)}
//                     className="inline-flex bg-forest hover:bg-[#245633] text-white text-sm font-bold tracking-wide uppercase px-8 py-3.5 rounded-full transition-all duration-300 cursor-pointer"
//                 >
//                     Retry
//                 </button>
//             </div>
//         );
//     }

//     if (!catalogProduct) {
//         return (
//             <div className="bg-white min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
//                 <h1 className="font-poppins text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
//                     Product Not Found
//                 </h1>
//                 <p className="text-gray-500 text-sm sm:text-base max-w-md mb-8">
//                     We couldn't find the product you're looking for. It may have been renamed or is no longer available.
//                 </p>
//                 <Link
//                     href="/product"
//                     className="inline-flex bg-forest hover:bg-[#245633] text-white text-sm font-bold tracking-wide uppercase px-8 py-3.5 rounded-full transition-all duration-300 no-underline"
//                 >
//                     Browse All Products
//                 </Link>
//             </div>
//         );
//     }

//     // key resets gallery / tabs / form state when navigating between products
//     return (
//         <ProductDetailView
//             key={catalogProduct.id}
//             catalogProduct={catalogProduct}
//             similarProducts={similarProducts}
//         />
//     );
// }




"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import {
    FaCheck,
    FaArrowRight,
    FaStar,
    FaRegStar,
    FaCloudUploadAlt,
    FaChevronDown,
    FaBoxOpen,
    FaLeaf,
    FaThLarge,
    FaLayerGroup,
    FaInfoCircle,
    FaTimes,
    FaSun,
    FaRegClock,
    FaWarehouse,
    FaGlobeAmericas,
    FaPalette,
    FaPercent,
    FaAppleAlt,
    FaHome,
    FaConciergeBell,
    FaIndustry,
    FaPen,
    FaQuoteRight,
    FaChevronLeft,
    FaChevronRight,
} from "react-icons/fa";
import { useCart } from "@/context/CartContext";
import { useAuth, apiRequest } from "@/context/AuthContext";
import Modal from "@/components/Modal";

/*
  THEME (find & replace these to match globals.css):
  primary        #2d6a3e
  primary hover  #245633
  primary tint   #eaf3ec
*/

// ---- BACKEND CONFIG ----
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const STORE_DOMAIN = "Drymato";
const FALLBACK_IMAGE = "/drymato-logo.png";

// Backend field names. When the real names are final, change ONLY these lists.
const FIELD_KEYS = {
    highlights: ["highlights", "variations", "variation", "keyFeatures"], // the 4 check-mark points
    howToUse: ["howToUse", "usageInstructions", "directions"], // using directions (Description tab)
    homeCooking: ["homeCooking", "uses", "applications", "usage"], // "Home Cooking" card (Where It's Used)
    faqs: ["faqs", "faq"], // optional product-specific FAQs (replace the generic ones)
};
const pickField = (p, keys) => {
    for (const k of keys) {
        if (p?.[k] !== undefined && p[k] !== null && p[k] !== "") return p[k];
    }
    return undefined;
};

// Generic (same for every product) "Where It's Used" cards. "Home Cooking" comes from the backend.
const GENERIC_USES = [
    { label: "HoReCa / Professional", items: ["Restaurant Kitchens", "Hotels", "Cafés & QSRs"] },
    { label: "Food Industry", items: ["Soup & Sauce Mixes", "Ready-to-Eat Meals", "Bakery & Snacks"] },
];

// Generic product FAQs (same for every product). Used unless the backend sends its own.
const GENERIC_FAQS = [
    {
        q: "How should I store this product?",
        a: "Store it in a cool, dry place away from direct sunlight and moisture. Keep the pack tightly sealed after opening so the product stays fresh and, in the case of powders, free-flowing.",
    },
    {
        q: "How do I use dehydrated products in cooking?",
        a: "Slices and flakes can go straight into soups, curries and gravies, or be soaked in warm water for 10–15 minutes before use. Powders can be mixed directly into recipes, seasonings and beverage mixes. Start with a small amount and adjust to taste.",
    },
    {
        q: "How is a dehydrated product different from the fresh one?",
        a: "Moisture is removed under controlled drying, which makes the product lightweight and easy to store while keeping most of its natural flavour. Because the water is gone, a smaller quantity goes a long way compared with fresh produce.",
    },
    {
        q: "Where can I find the ingredients and specifications?",
        a: "The Description and Specifications tabs on this page list the ingredients, form, packaging and other details available for this product.",
    },
    {
        q: "Can I get a different pack size?",
        a: "Pack sizes depend on the product and are listed in its specifications where available. For other sizes or larger quantities, send an enquiry with your requirement.",
    },
];

const isRemote = (src) => /^https?:\/\//.test(src);
const getImageUrl = (img) => (typeof img === "string" ? img : img?.url || null);

const fetchJson = async (url, signal) => {
    const res = await fetch(url, { signal });
    if (!res.ok) throw new Error(`Request failed (${res.status})`);
    const json = await res.json();
    if (json?.success === false) throw new Error(json?.message || "Request failed");
    return json;
};

// Different endpoints wrap their list differently (data.products / data.reviews / data[]):
// take the first array we find inside `data`.
const extractList = (json) => {
    const d = json?.data;
    if (Array.isArray(d)) return d;
    if (d && typeof d === "object") return Object.values(d).find(Array.isArray) || [];
    return [];
};

// ---------------------------------------------------------------------------
// Normalisers: turn whatever the backend sends into clean data. Empty -> nothing rendered.
// ---------------------------------------------------------------------------
const itemText = (v) =>
    typeof v === "string" || typeof v === "number"
        ? String(v).trim()
        : v && typeof v === "object"
            ? String(v.name ?? v.title ?? v.label ?? v.text ?? v.value ?? "").trim()
            : "";

// array -> one entry per item; string -> split by `splitPattern`
const toTextList = (v, splitPattern = /\n/) => {
    if (Array.isArray(v)) return v.map(itemText).filter(Boolean);
    const t = itemText(v);
    return t ? t.split(splitPattern).map((s) => s.trim()).filter(Boolean) : [];
};

const toStringList = (arr) =>
    (Array.isArray(arr) ? arr : [])
        .map((v) => (typeof v === "string" ? v : v?.size || v?.name || v?.label || v?.title || ""))
        .filter(Boolean);

// Highlights (the 4 check-mark points). Field names accepted: highlights / variations / variation / keyFeatures
const normalizeHighlights = (p) => {
    const src = pickField(p, FIELD_KEYS.highlights);
    const list = Array.isArray(src)
        ? src.map((h) => {
            if (h && typeof h === "object") {
                const name = String(h.name ?? h.title ?? h.label ?? "").trim();
                const value = String(h.value ?? h.text ?? "").trim();
                return name && value && name !== value ? `${name}: ${value}` : name || value;
            }
            return itemText(h);
        })
        : toTextList(src);
    return list.filter(Boolean).slice(0, 4);
};

// Backend "attributes" -> [{ label, value }]
const normalizeAttributes = (attrs) =>
    (Array.isArray(attrs) ? attrs : [])
        .map((a) => {
            const value = a?.value ?? a?.attributeValue ?? a?.values;
            return {
                label: a?.name ?? a?.key ?? a?.label ?? a?.title ?? a?.attributeName,
                value: Array.isArray(value) ? value.join(", ") : value,
            };
        })
        .filter((a) => a.label && a.value !== undefined && a.value !== null && String(a.value).trim() !== "")
        .map((a) => ({ label: String(a.label).trim(), value: String(a.value).trim() }));

const findAttribute = (attributes, pattern) => attributes.find((a) => pattern.test(a.label))?.value || "";

const normalizeFaqs = (src) =>
    (Array.isArray(src) ? src : [])
        .map((f) => ({
            q: String(f?.question ?? f?.q ?? f?.title ?? "").trim(),
            a: String(f?.answer ?? f?.a ?? f?.description ?? "").trim(),
        }))
        .filter((f) => f.q && f.a);

// Maps one backend product to the shape this page (and the similar-products cards) use
const mapApiProduct = (p) => {
    const images = (p.images || []).map(getImageUrl).filter(Boolean);
    const subCategory = toStringList(p.subCategory);
    const childCategory = toStringList(p.childCategory);
    const attributes = normalizeAttributes(p.attributes);

    return {
        id: p._id,
        slug: p.slug,
        title: p.name,
        subtitle: "",
        description: (p.description || "").trim(),
        category: subCategory[0] || "",
        subCategory,
        childCategory,
        sku: p.sku || "",
        stock: typeof p.stock === "number" ? p.stock : null,
        sizeCategory: p.sizeCategory || "",
        availableSizes: toStringList(p.availableSizes),
        shippingDimensions: (p.shippingDimensions || "").trim(),
        attributes,
        highlights: normalizeHighlights(p),
        ingredients: toTextList(p.ingredients ?? findAttribute(attributes, /^ingredients?$/i), /\n|;|,/),
        homeCooking: toTextList(
            pickField(p, FIELD_KEYS.homeCooking) ?? findAttribute(attributes, /home cooking|where.*used|^uses?$|^applications?$/i),
            /\n|;|,/
        ),
        howToUse: String(
            pickField(p, FIELD_KEYS.howToUse) ?? findAttribute(attributes, /how to use|usage instructions|directions/i) ?? ""
        ).trim(),
        faqs: normalizeFaqs(pickField(p, FIELD_KEYS.faqs)),
        averageRating: Number(p.averageRating) || 0,
        totalReviews: Number(p.totalReviews) || 0,
        images,
        image: images[0] || FALLBACK_IMAGE,
        hoverImage: images[1] || images[0] || FALLBACK_IMAGE,
        feature: subCategory[0] || "100% Natural",
        href: `/product/${p.slug}`,
    };
};

// Icon for an attribute tile, picked from its name
const ATTRIBUTE_ICONS = [
    [/shelf|expir|life/i, FaRegClock],
    [/storage|store/i, FaWarehouse],
    [/process|dehydrat|drying|dried/i, FaSun],
    [/moisture/i, FaPercent],
    [/taste|aroma|flavou?r/i, FaAppleAlt],
    [/colou?r/i, FaPalette],
    [/origin|country/i, FaGlobeAmericas],
    [/pack|size|weight|dimension/i, FaBoxOpen],
    [/form|texture|mesh|grade|additive/i, FaLayerGroup],
    [/ingredient|product|type/i, FaLeaf],
];
const iconForAttribute = (label) => ATTRIBUTE_ICONS.find(([re]) => re.test(label))?.[1] || FaInfoCircle;

const iconForUseGroup = (label) =>
    /home|domestic|household/i.test(label) ? FaHome
        : /horeca|hotel|restaurant|cafe|café|professional|catering/i.test(label) ? FaConciergeBell
            : /industr|manufactur|food service|commercial/i.test(label) ? FaIndustry
                : FaLeaf;

// ---- PAGE CONTENT: built ONLY from backend fields. Nothing is invented. ----
// Anything the backend doesn't send is simply not rendered.
const buildProductContent = (item) => {
    const availability = item.stock === null ? "" : item.stock > 0 ? "In Stock" : "Out of Stock";
    const product = item.childCategory.join(", ");
    const sizes = item.availableSizes.join(", ");

    // Quick facts (under the buttons): first 4 attributes, topped up with real product fields if fewer
    const attributeFacts = item.attributes.map((a) => ({ label: a.label, value: a.value, icon: iconForAttribute(a.label) }));
    const fieldFacts = [
        product && { label: "Product", value: product, icon: FaLeaf },
        item.sku && { label: "SKU", value: item.sku, icon: FaBoxOpen },
        availability && { label: "Availability", value: availability, icon: FaCheck },
        sizes && { label: "Pack Sizes", value: sizes, icon: FaLayerGroup },
    ].filter(Boolean);
    const seen = new Set(attributeFacts.slice(0, 4).map((f) => f.label.toLowerCase()));
    const quickFacts = [
        ...attributeFacts.slice(0, 4),
        ...fieldFacts.filter((f) => !seen.has(f.label.toLowerCase())),
    ]
        .slice(0, 4)
        .map((f) => ({ ...f, bg: "bg-[#eaf3ec]", color: "text-forest" }));

    // Specifications: product fields first, then every attribute (attribute wins on duplicate names)
    const attributeSpecs = item.attributes.map((a) => ({ ...a, icon: iconForAttribute(a.label) }));
    const attributeKeys = new Set(attributeSpecs.map((a) => a.label.toLowerCase()));
    const specifications = [
        item.subCategory.length > 0 && { label: "Category", value: item.subCategory.join(", "), icon: FaThLarge },
        product && { label: "Product", value: product, icon: FaLeaf },
        item.sku && { label: "SKU", value: item.sku, icon: FaBoxOpen },
        availability && { label: "Availability", value: availability, icon: FaCheck },
        sizes && { label: "Available Sizes", value: sizes, icon: FaLayerGroup },
        item.sizeCategory && { label: "Size Category", value: item.sizeCategory, icon: FaLayerGroup },
        item.shippingDimensions && { label: "Dimensions", value: item.shippingDimensions, icon: FaBoxOpen },
    ]
        .filter(Boolean)
        .filter((s) => !attributeKeys.has(s.label.toLowerCase()))
        .concat(attributeSpecs);

    return {
        title: item.title,
        category: item.category,
        description: item.description,
        shortDescription: item.description.replace(/\s+/g, " "),
        paragraphs: item.description.split(/\n{2,}/).map((s) => s.trim()).filter(Boolean),
        images: item.images.length > 0 ? item.images : [FALLBACK_IMAGE],
        highlights: item.highlights,
        quickFacts,
        specifications,
        ingredients: item.ingredients,
        uses: [
            ...(item.homeCooking.length > 0 ? [{ label: "Home Cooking", items: item.homeCooking }] : []),
            ...GENERIC_USES,
        ],
        howToUse: item.howToUse,
        faqs: item.faqs.length > 0 ? item.faqs : GENERIC_FAQS,
    };
};

// ---- REVIEWS: normalise whatever the review API returns ----
// const normalizeReview = (r, i) => {
//     const rawImg = Array.isArray(r?.images) ? r.images[0] : r?.image ?? r?.images;
//     return {
//         id: r?._id || r?.id || `review-${i}`,
//         name: r?.user?.name || r?.user?.fullName || r?.userName || r?.customerName || r?.name || "Customer",
//         company: r?.company || "",
//         title: r?.title || r?.reviewTitle || "",
//         rating: Math.max(0, Math.min(5, Math.round(Number(r?.rating) || 0))),
//         text: r?.reviewText || r?.comment || r?.text || "",
//         image: getImageUrl(rawImg),
//         verified: Boolean(r?.isVerified || r?.verified || r?.verifiedPurchase),
//         date: r?.createdAt || r?.date || "",
//     };
// };

// "arpitaaroyy03@gmail.com" -> "Arpitaaroyy" (used only when the API sends no name)
const nameFromEmail = (email) => {
    const local = String(email || "").split("@")[0].replace(/[0-9]+/g, " ").replace(/[._\-+]+/g, " ").trim();
    return local
        .split(/\s+/)
        .filter(Boolean)
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
        .join(" ");
};

const normalizeReview = (r, i) => {
    const rawImg = Array.isArray(r?.images) ? r.images[0] : r?.image ?? r?.images;
    // The API sends the reviewer as `userId` (populated object); older shapes used `user`
    const u = (r?.userId && typeof r.userId === "object" ? r.userId : r?.user) || {};
    const fullName = u.name || u.fullName || [u.firstName, u.lastName].filter(Boolean).join(" ");
    return {
        id: r?._id || r?.id || `review-${i}`,
        name: fullName || r?.userName || r?.customerName || r?.name || nameFromEmail(u.email) || "Customer",
        company: r?.company || "",
        title: r?.title || r?.reviewTitle || "",
        rating: Math.max(0, Math.min(5, Math.round(Number(r?.rating) || 0))),
        text: r?.reviewText || r?.comment || r?.text || "",
        image: getImageUrl(rawImg),
        verified: Boolean(r?.isVerified || r?.verified || r?.verifiedPurchase),
        date: r?.createdAt || r?.date || "",
    };
};

const formatDate = (iso) => {
    const d = iso ? new Date(iso) : null;
    return d && !Number.isNaN(d.getTime())
        ? d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })
        : "";
};

function StarRating({ rating, size = 14 }) {
    return (
        <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) =>
                i < rating
                    ? <FaStar key={i} size={size} className="text-amber-400" />
                    : <FaRegStar key={i} size={size} className="text-gray-200" />
            )}
        </div>
    );
}

function StarInput({ value, onChange }) {
    return (
        <div className="flex items-center gap-1.5">
            {[1, 2, 3, 4, 5].map((n) => (
                <button
                    key={n}
                    type="button"
                    onClick={() => onChange(n)}
                    className="cursor-pointer"
                    aria-label={`Rate ${n} star${n > 1 ? "s" : ""}`}
                >
                    {n <= value
                        ? <FaStar size={26} className="text-amber-400" />
                        : <FaRegStar size={26} className="text-gray-200" />
                    }
                </button>
            ))}
        </div>
    );
}

function Avatar({ name }) {
    const initials = name
        .split(" ")
        .map((w) => w[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();
    return (
        <div className="w-11 h-11 rounded-full bg-[#eaf3ec] text-forest font-bold text-sm flex items-center justify-center shrink-0">
            {initials}
        </div>
    );
}

// Compact review card (used inside the auto-sliding track). Click opens the full review.
// Testimonial-style review card (used inside the auto-sliding track). Click opens the full review.
function ReviewCard({ review, onOpen }) {
    const initials = review.name
        .split(" ")
        .map((w) => w[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();

    return (
        <button
            type="button"
            onClick={() => onOpen(review)}
            className="group relative block w-full h-[280px] pt-6 text-left cursor-pointer"
        >
            {/* Avatar overlapping the card's top-left corner */}
            <span className="absolute left-5 top-0 z-10 w-16 h-16 rounded-full border-[3px] border-brick bg-[#eaf3ec] text-forest font-bold text-lg flex items-center justify-center shadow-sm">
                {initials}
            </span>

            <div className="h-full flex flex-col bg-white border border-gray-100 shadow-[0_10px_30px_rgba(36,56,34,0.08)] rounded-2xl rounded-tr-[48px] rounded-bl-[48px] px-5 pt-3 pb-4 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_16px_36px_rgba(36,56,34,0.14)]">
                {/* Name + date on the left, stars on the right */}
                <div className="pl-[76px] pr-2 min-h-[44px] flex items-start justify-between gap-2">
                    <div className="min-w-0">
                        <p className="text-sm sm:text-[15px] font-bold text-gray-900 truncate">{review.name}</p>
                        <p className="text-[11px] font-medium text-gray-400 truncate mt-0.5">
                            {[review.company, formatDate(review.date)].filter(Boolean).join(" · ")}
                        </p>
                    </div>
                    <div className="shrink-0 pt-1">
                        <StarRating rating={review.rating} size={13} />
                    </div>
                </div>

                {review.title && (
                    <p className="mt-4 text-sm font-bold text-gray-900 line-clamp-1 break-words">{review.title}</p>
                )}
                <p
                    className={`${review.title ? "mt-1" : "mt-4"} text-sm text-gray-600 leading-relaxed line-clamp-4 break-words flex-1`}
                >
                    {review.text}
                </p>

                {/* Footer: quote mark, optional verified badge + review photo */}
                <div className="mt-3 flex items-end justify-between gap-3">
                    <FaQuoteRight className="text-brick" size={28} />
                    <div className="flex items-center gap-2">
                        {review.verified && (
                            <span className="text-[10px] font-bold uppercase tracking-wide text-forest bg-[#eaf3ec] px-2 py-0.5 rounded-full">
                                Verified
                            </span>
                        )}
                        {review.image && (
                            <span className="relative w-11 h-11 rounded-lg overflow-hidden bg-gray-50 shrink-0">
                                <Image
                                    src={review.image}
                                    alt="Review photo"
                                    fill
                                    unoptimized={isRemote(review.image)}
                                    className="object-cover"
                                />
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </button>
    );
}

const SIMILAR_SPEED = 55; // px per second of auto-scroll

// Single similar-product card (used inside the auto-scrolling track)
function SimilarProductCard({ rp }) {

    const { addItem } = useCart();
    return (
        <div className="group relative bg-white rounded-tl-[48px] rounded-br-[48px] rounded-tr-none rounded-bl-none border border-gray-100 overflow-hidden transition-all duration-500 hover:-translate-y-1.5 flex flex-col h-full">
            <Link href={rp.href} className="relative w-full h-72 sm:h-80 bg-[#faf6f0] flex items-center justify-center p-6 overflow-hidden cursor-pointer">
                <Image
                    src={rp.image}
                    alt={rp.title}
                    width={180}
                    height={180}
                    unoptimized={isRemote(rp.image)}
                    className="absolute max-w-[70%] max-h-[70%] w-auto h-auto object-contain transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0"
                />
                <Image
                    src={rp.hoverImage || rp.image}
                    alt={`${rp.title} alternate view`}
                    width={180}
                    height={180}
                    unoptimized={isRemote(rp.hoverImage || rp.image)}
                    className="absolute max-w-[70%] max-h-[70%] w-auto h-auto object-contain transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
                />
            </Link>

            <div className="flex flex-col flex-grow px-5 pt-4 pb-5">
                <Link href={rp.href} className="min-h-[80px] no-underline cursor-pointer">
                    <h4 className="font-poppins text-base sm:text-[17px] font-bold text-gray-900 leading-snug mb-1 group-hover:text-forest transition-colors duration-300">
                        {rp.title}
                    </h4>
                    {rp.subtitle && (
                        <p className="text-gray-400 text-xs font-medium mb-2.5">
                            {rp.subtitle}
                        </p>
                    )}
                    <div className="flex items-center gap-1.5 text-forest text-xs font-semibold">
                        <FaCheck size={11} className="shrink-0" />
                        <span>{rp.feature}</span>
                    </div>
                </Link>

                <div className="mt-4 flex items-center gap-2.5">
                    <button
                        onClick={() => addItem(rp)}
                        className="flex-1 text-[11px] sm:text-xs font-bold tracking-wide uppercase py-2.5 px-3 rounded-lg border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 cursor-pointer"
                    >
                        Add to Cart
                    </button>

                    <Link
                        href="/contact"
                        className="group/btn relative overflow-hidden flex-1 bg-forest border-2 border-forest text-white py-2.5 pl-4 pr-1.5 rounded-lg text-[11px] sm:text-xs font-bold tracking-wide uppercase flex items-center justify-center gap-2 transition-all duration-300 no-underline cursor-pointer"
                    >
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[125%] aspect-square rounded-t-[50%] bg-white translate-y-full transition-transform duration-[750ms] ease-in-out z-0 group-hover/btn:translate-y-[12%]" />
                        <span className="relative z-10 transition-colors duration-300 group-hover/btn:text-forest">
                            Enquire
                        </span>
                        <span className="relative z-10 w-5 h-5 bg-white text-forest rounded-full flex items-center justify-center shrink-0 shadow-sm transform group-hover/btn:translate-x-0.5 group-hover/btn:bg-forest group-hover/btn:text-white transition-all duration-300">
                            <FaArrowRight size={9} />
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

function ProductDetailView({ catalogProduct }) {
    const slug = catalogProduct.slug;
    const product = buildProductContent(catalogProduct);

    const [activeImage, setActiveImage] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [activeTab, setActiveTab] = useState("description");
    const [openFaq, setOpenFaq] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const intervalRef = useRef(null);
    const tabsRef = useRef(null);
    const reviewsRef = useRef(null);
    const faqRef = useRef(null);
    const descRef = useRef(null);
    const { addItem } = useCart();
    const { isAuthenticated, status: authStatus, openAuthModal, isModalOpen: authModalOpen } = useAuth();

    // Short description (right of the image): clamped to 4 lines, "Read more" only if it is really cut off
    const [descClamped, setDescClamped] = useState(false);

    // Specifications: fixed-height box that scrolls internally (no scrollbar / buttons)
    const specRef = useRef(null);
    const [specFade, setSpecFade] = useState(false);

    // ---- Similar products (null = still loading; empty = section hidden) ----
    const [similarProducts, setSimilarProducts] = useState(null);

    // ---- Reviews ----
    const [reviews, setReviews] = useState([]);
    const [reviewSummary, setReviewSummary] = useState(null);
    const [reviewsLoading, setReviewsLoading] = useState(true);
    const [reviewsError, setReviewsError] = useState(false);
    const [reviewsReloadKey, setReviewsReloadKey] = useState(0);
    const reviewsViewportRef = useRef(null);
    const [reviewFit, setReviewFit] = useState(3); // how many compact cards fit in the viewport
    const [activeReview, setActiveReview] = useState(null); // full-review modal
    const wantsReviewRef = useRef(false); // guest clicked "Add your review" -> reopen after login

    // ---- Review modal ----
    const [reviewModalOpen, setReviewModalOpen] = useState(false);
    const [thankYouOpen, setThankYouOpen] = useState(false);
    const [reviewTitle, setReviewTitle] = useState("");
    const [reviewRating, setReviewRating] = useState(0);
    const [reviewText, setReviewText] = useState("");
    const [reviewImageFile, setReviewImageFile] = useState(null);
    const [reviewImagePreview, setReviewImagePreview] = useState(null);
    const [submitting, setSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // { type: "success" | "error", text }

    const images = product.images;
    const quickFacts = product.quickFacts;
    const specifications = product.specifications;

    const tabs = [
        { key: "description", label: "Description", type: "content" },
        ...(specifications.length > 0 ? [{ key: "specifications", label: "Specifications", type: "content" }] : []),
        { key: "uses", label: "Where It's Used", type: "content" },
        { key: "reviews", label: "Reviews", type: "scroll" },
        { key: "faqs", label: "FAQs", type: "scroll" },
    ];

    const reviewMarquee = reviews.length > reviewFit;
    const reviewDuration = Math.max(reviews.length * 7, 24);

    const similarList = similarProducts || [];

    // Similar products carousel: scrolls (and shows prev/next) only when the cards don't all fit on screen
    const similarViewportRef = useRef(null);
    const similarTrackRef = useRef(null);
    const similarPosRef = useRef(0); // current scroll offset in px
    const similarPendingRef = useRef(0); // px still to travel after a prev/next click
    const similarPausedRef = useRef(false);
    const [similarFit, setSimilarFit] = useState(4); // how many cards fit in the viewport
    const similarMarquee = similarList.length > similarFit;

    const stepSimilar = (dir) => {
        const wide = window.innerWidth >= 640;
        similarPendingRef.current += dir * (wide ? 330 + 32 : 280 + 24); // one card + gap
    };

    // Rating summary: prefer the star-summary API, then the product's own fields, then the loaded reviews
    const summary = reviewSummary?.summary || reviewSummary || {};
    const totalReviews = Math.max(
        Number(summary.totalReviews ?? summary.total ?? summary.totalCount ?? summary.count ?? catalogProduct.totalReviews) || 0,
        reviews.length
    );
    const avgRating =
        Number(summary.averageRating ?? summary.average ?? summary.avgRating ?? catalogProduct.averageRating) ||
        (reviews.length > 0 ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length : 0);

    // Image gallery autoplay
    useEffect(() => {
        if (images.length <= 1 || isPaused) return;
        intervalRef.current = setInterval(() => {
            setActiveImage((prev) => (prev + 1) % images.length);
        }, 3500);
        return () => clearInterval(intervalRef.current);
    }, [images.length, isPaused]);

    // Specifications: show a soft fade at the bottom while there is more to scroll
    const updateSpecFade = () => {
        const el = specRef.current;
        if (!el) return;
        setSpecFade(el.scrollHeight > el.clientHeight + 4 && el.scrollTop + el.clientHeight < el.scrollHeight - 4);
    };
    useEffect(() => {
        updateSpecFade();
        window.addEventListener("resize", updateSpecFade);
        return () => window.removeEventListener("resize", updateSpecFade);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeTab, specifications.length]);

    // Reviews: how many compact cards fit? Slide automatically only when there are more than that.
    useEffect(() => {
        const el = reviewsViewportRef.current;
        if (!el) return;
        const measure = () => {
            const cardW = window.innerWidth >= 640 ? 380 : 320;
            const gap = 24;
            setReviewFit(Math.max(1, Math.floor((el.clientWidth + gap) / (cardW + gap))));
        };
        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, [reviews.length, reviewsLoading]);

    // Similar products: how many cards fit in the viewport?
    useEffect(() => {
        const el = similarViewportRef.current;
        if (!el) return;
        const measure = () => {
            const wide = window.innerWidth >= 640;
            const cardW = wide ? 330 : 280;
            const gap = wide ? 32 : 24;
            setSimilarFit(Math.max(1, Math.floor((el.clientWidth + gap) / (cardW + gap))));
        };
        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, [similarList.length]);

    // Similar products: auto-scroll + manual prev/next (only runs when the cards overflow)
    useEffect(() => {
        const track = similarTrackRef.current;
        if (!similarMarquee || !track) return;
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        let raf;
        let last = performance.now();

        const tick = (now) => {
            const dt = Math.min(now - last, 64);
            last = now;
            let pos = similarPosRef.current;
            const pending = similarPendingRef.current;

            if (Math.abs(pending) > 0.5) {
                const d = pending * 0.15; // ease towards the clicked target
                pos += d;
                similarPendingRef.current = pending - d;
            } else {
                if (pending !== 0) {
                    pos += pending;
                    similarPendingRef.current = 0;
                }
                if (!similarPausedRef.current && !reduceMotion) pos += (SIMILAR_SPEED * dt) / 1000;
            }

            const half = track.scrollWidth / 2; // the list is rendered twice for a seamless loop
            if (half > 0) pos = ((pos % half) + half) % half;
            similarPosRef.current = pos;
            track.style.transform = `translate3d(${-pos}px, 0, 0)`;
            raf = requestAnimationFrame(tick);
        };

        raf = requestAnimationFrame(tick);
        return () => {
            cancelAnimationFrame(raf);
            track.style.transform = "";
        };
    }, [similarMarquee, similarList.length]);

    // Guest clicked "Add your review": after they log in, open the review modal for them
    useEffect(() => {
        if (isAuthenticated && wantsReviewRef.current) {
            wantsReviewRef.current = false;
            setSubmitStatus(null);
            setReviewModalOpen(true);
        } else if (!authModalOpen) {
            wantsReviewRef.current = false; // login modal closed without logging in
        }
    }, [isAuthenticated, authModalOpen]);

    // Is the short description actually truncated?
    useEffect(() => {
        const el = descRef.current;
        if (!el) return;
        const check = () => setDescClamped(el.scrollHeight > el.clientHeight + 1);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, [product.shortDescription]);

    // Similar products: ONLY what the backend returns. Empty / failed response -> section is hidden.
    useEffect(() => {
        const controller = new AbortController();

        const loadSimilar = async () => {
            try {
                const json = await fetchJson(
                    `${API_BASE_URL}/product/similar/slug/${encodeURIComponent(slug)}`,
                    controller.signal
                );
                const list = extractList(json)
                    .filter((p) => p && p._id !== catalogProduct.id && (!p.status || p.status === "Active"))
                    .map(mapApiProduct);
                setSimilarProducts(list);
            } catch (err) {
                if (err.name === "AbortError") return;
                setSimilarProducts([]);
            }
        };

        loadSimilar();
        return () => controller.abort();
    }, [slug, catalogProduct.id]);

    // Reviews + star summary
    useEffect(() => {
        const controller = new AbortController();

        const loadReviews = async () => {
            setReviewsLoading(true);
            setReviewsError(false);

            const [listResult, summaryResult] = await Promise.allSettled([
                fetchJson(`${API_BASE_URL}/review/getProductReviews/${catalogProduct.id}`, controller.signal),
                fetchJson(`${API_BASE_URL}/review/starsummary/${catalogProduct.id}`, controller.signal),
            ]);
            if (controller.signal.aborted) return;

            if (listResult.status === "fulfilled") {
                setReviews(extractList(listResult.value).map(normalizeReview).filter((r) => r.text || r.rating));
            } else {
                setReviewsError(true);
            }
            // The summary is optional: if it fails we derive the numbers from the reviews themselves
            setReviewSummary(summaryResult.status === "fulfilled" ? summaryResult.value?.data ?? null : null);
            setReviewsLoading(false);
        };

        loadReviews();
        return () => controller.abort();
    }, [catalogProduct.id, reviewsReloadKey]);

    // Modals (add review / full review): Esc closes, page scroll locked while open
    const anyModalOpen = reviewModalOpen || Boolean(activeReview);
    useEffect(() => {
        if (!anyModalOpen) return;
        const onKey = (e) => {
            if (e.key !== "Escape") return;
            if (activeReview) setActiveReview(null);
            else if (!submitting) setReviewModalOpen(false);
        };
        document.addEventListener("keydown", onKey);
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = prevOverflow;
        };
    }, [anyModalOpen, activeReview, submitting]);

    const handleAddToCart = () => {
        addItem({
            id: catalogProduct.id,
            title: product.title,
            subtitle: catalogProduct.subtitle || "",
            image: images[0],
            href: catalogProduct.href || `/product/${slug}`,
        });
    };

    const scrollToTabs = () => tabsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

    const handleReadMore = () => {
        setActiveTab("description");
        scrollToTabs();
    };

    const handleTabClick = (tab) => {
        if (tab.type === "content") {
            setActiveTab(tab.key);
            return;
        }
        const ref = tab.key === "reviews" ? reviewsRef : faqRef;
        ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    // ---- Review modal handlers ----
    const openReviewModal = () => {
        if (authStatus === "loading") return; // still restoring the session
        // Guests go straight to the login modal; the review modal opens right after they log in
        if (!isAuthenticated) {
            wantsReviewRef.current = true;
            openAuthModal("login");
            return;
        }
        setSubmitStatus(null);
        setReviewModalOpen(true);
    };

    const setReviewFile = (file) => {
        if (!file) return;
        if (!file.type.startsWith("image/")) {
            setSubmitStatus({ type: "error", text: "Please choose an image file." });
            return;
        }
        if (file.size > 5 * 1024 * 1024) {
            setSubmitStatus({ type: "error", text: "Image must be smaller than 5 MB." });
            return;
        }
        setSubmitStatus(null);
        setReviewImageFile(file);
        setReviewImagePreview(URL.createObjectURL(file));
    };

    const clearReviewFile = () => {
        if (reviewImagePreview) URL.revokeObjectURL(reviewImagePreview);
        setReviewImageFile(null);
        setReviewImagePreview(null);
    };

    const handleFileFromInput = (e) => setReviewFile(e.target.files?.[0]);

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        setReviewFile(e.dataTransfer.files?.[0]);
    };

    // const handleReviewSubmit = async (e) => {
    //     e.preventDefault();
    //     if (submitting) return;

    //     if (reviewRating === 0 || !reviewText.trim()) {
    //         setSubmitStatus({ type: "error", text: "Please add a rating and write your review." });
    //         return;
    //     }

    //     if (!isAuthenticated) {
    //         setReviewModalOpen(false);
    //         wantsReviewRef.current = true;
    //         openAuthModal("login");
    //         return;
    //     }

    //     // multipart/form-data (the endpoint accepts an optional image upload)
    //     const formData = new FormData();
    //     formData.append("productId", catalogProduct.id);
    //     formData.append("rating", String(reviewRating));
    //     formData.append("reviewText", reviewText.trim());
    //     if (reviewTitle.trim()) formData.append("title", reviewTitle.trim());
    //     if (reviewImageFile) formData.append("images", reviewImageFile);

    //     try {
    //         setSubmitting(true);
    //         setSubmitStatus(null);

    //         const res = await fetch(`${API_BASE_URL}/review/createReview`, {
    //             method: "POST",
    //             credentials: "include", // the login session is an httpOnly cookie (see AuthContext)
    //             body: formData, // no Content-Type: the browser sets the multipart boundary
    //         });
    //         const json = await res.json().catch(() => null);

    //         if (res.status === 401) {
    //             // Session expired: send the user to the login modal
    //             setReviewModalOpen(false);
    //             wantsReviewRef.current = true;
    //             openAuthModal("login");
    //             return;
    //         }
    //         if (!res.ok || json?.success === false) {
    //             throw new Error(json?.message || "We couldn't submit your review. Please try again.");
    //         }

    //         setReviewTitle("");
    //         setReviewRating(0);
    //         setReviewText("");
    //         clearReviewFile();
    //         setReviewModalOpen(false);
    //         setReviewNotice("Thank you! Your review has been submitted.");
    //         setReviewsReloadKey((k) => k + 1);
    //     } catch (err) {
    //         setSubmitStatus({ type: "error", text: err.message || "Something went wrong. Please try again." });
    //     } finally {
    //         setSubmitting(false);
    //     }
    // };

    const handleReviewSubmit = async (e) => {
        e.preventDefault();
        if (submitting) return;

        if (reviewRating === 0 || !reviewText.trim()) {
            setSubmitStatus({ type: "error", text: "Please add a rating and write your review." });
            return;
        }

        if (!isAuthenticated) {
            setReviewModalOpen(false);
            wantsReviewRef.current = true;
            openAuthModal("login");
            return;
        }

        const formData = new FormData();
        formData.append("productId", catalogProduct.id);
        formData.append("rating", String(reviewRating));
        formData.append("reviewText", reviewText.trim());
        if (reviewTitle.trim()) formData.append("title", reviewTitle.trim());
        if (reviewImageFile) formData.append("images", reviewImageFile);

        try {
            setSubmitting(true);
            setSubmitStatus(null);

            // Sends Authorization: Bearer <drymato_token> and handles multipart correctly
            await apiRequest("/review/createReview", {
                method: "POST",
                body: formData,
                authed: true,
            });

            setReviewTitle("");
            setReviewRating(0);
            setReviewText("");
            clearReviewFile();
            setReviewModalOpen(false);
            setThankYouOpen(true);
            setReviewsReloadKey((k) => k + 1);
        } catch (err) {
            if (err?.status === 401) {
                // apiRequest already cleared the session, shown the toast and opened the login modal.
                // We only close this modal and remember to reopen it after login.
                // The typed review text and rating are kept, so nothing is lost.
                setReviewModalOpen(false);
                wantsReviewRef.current = true;
                return;
            }
            setSubmitStatus({ type: "error", text: err.message || "Something went wrong. Please try again." });
        } finally {
            setSubmitting(false);
        }
    };

    const hasHighlights = product.highlights.length > 0;

    return (
        <div className="bg-white">
            {/* Similar-products marquee animation (scoped to this component) */}
            <style>{`
                @keyframes similar-marquee {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
                .similar-track {
                    animation: similar-marquee var(--marquee-duration, 40s) linear infinite;
                }
                .similar-viewport:hover .similar-track {
                    animation-play-state: paused;
                }
                .reviews-track {
                    animation: similar-marquee var(--marquee-duration, 40s) linear infinite;
                }
                .reviews-viewport:hover .reviews-track {
                    animation-play-state: paused;
                }
                .hide-scrollbar { scrollbar-width: none; -ms-overflow-style: none; }
                .hide-scrollbar::-webkit-scrollbar { display: none; }
                @media (prefers-reduced-motion: reduce) {
                    .similar-track, .reviews-track { animation: none; }
                }
            `}</style>

            {/* ===================== BREADCRUMB ===================== */}
            <div className="max-w-7xl mx-auto px-6 pt-6 pb-2">
                <div className="flex items-center gap-2 text-xs text-gray-400 font-medium">
                    <Link href="/" className="hover:text-forest transition-colors">Home</Link>
                    <span>/</span>
                    <Link href="/product" className="hover:text-forest transition-colors">Products</Link>
                    <span>/</span>
                    <span className="text-gray-600">{product.title}</span>
                </div>
            </div>

            {/* ===================== PRODUCT DETAIL SECTION ===================== */}
            <section className="max-w-7xl mx-auto px-6 py-8 sm:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

                    {/* Gallery */}
                    <div
                        className="flex gap-3 sm:gap-4"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        <div className="flex flex-col gap-3 shrink-0">
                            {images.map((img, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveImage(i)}
                                    className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-[#faf6f0] flex items-center justify-center p-2.5 transition-all duration-200 cursor-pointer ${activeImage === i
                                        ? "ring-2 ring-forest"
                                        : "ring-1 ring-gray-100 hover:ring-gray-300"
                                        }`}
                                >
                                    <Image
                                        src={img}
                                        alt={`${product.title} view ${i + 1}`}
                                        width={68}
                                        height={68}
                                        unoptimized={isRemote(img)}
                                        className="max-w-full max-h-full w-auto h-auto object-contain"
                                    />
                                </button>
                            ))}
                        </div>

                        <div className="relative flex-1 aspect-square bg-[#faf6f0] rounded-2xl overflow-hidden">
                            {images.map((img, i) => (
                                <Image
                                    key={i}
                                    src={img}
                                    alt={product.title}
                                    fill
                                    unoptimized={isRemote(img)}
                                    className={`object-contain p-10 sm:p-14 transition-opacity duration-700 ease-in-out ${activeImage === i ? "opacity-100" : "opacity-0"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Info panel */}
                    <div className="flex flex-col min-w-0">
                        {product.category && (
                            <span className="text-forest text-xs font-bold tracking-widest uppercase mb-3">
                                {product.category}
                            </span>
                        )}

                        <h1 className="font-poppins text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-3 break-words">
                            {product.title}
                        </h1>

                        {/* Short description: 4 lines + "Read more" -> Description tab */}
                        {product.shortDescription && (
                            <div className={hasHighlights ? "mb-6" : "mb-7 pb-7 border-b border-gray-100"}>
                                <p
                                    ref={descRef}
                                    className="text-gray-600 text-sm sm:text-[15px] leading-relaxed line-clamp-4 break-words"
                                >
                                    {product.shortDescription}
                                </p>
                                {descClamped && (
                                    <button
                                        type="button"
                                        onClick={handleReadMore}
                                        className="mt-2 text-sm font-bold text-forest hover:underline underline-offset-2 cursor-pointer"
                                    >
                                        Read more
                                    </button>
                                )}
                            </div>
                        )}

                        {/* Highlights (4 check-mark points) — shown when the backend sends them */}
                        {hasHighlights && (
                            <div className="grid grid-cols-2 gap-y-2.5 gap-x-4 mb-7 pb-7 border-b border-gray-100">
                                {product.highlights.map((h) => (
                                    <div key={h} className="flex items-center gap-2 text-sm text-gray-700">
                                        <FaCheck className="text-forest shrink-0" size={12} />
                                        <span className="break-words min-w-0">{h}</span>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row items-stretch gap-2.5 mb-8">
                            <button
                                type="button"
                                onClick={handleAddToCart}
                                className="flex-1 text-xs font-bold tracking-wide uppercase py-2.5 px-5 rounded-full border-2 border-brick text-brick hover:bg-brick hover:text-white transition-all duration-300 cursor-pointer"
                            >
                                Add to Bulk Cart
                            </button>

                            <Link
                                href="/contact"
                                className="group relative overflow-hidden flex-1 bg-forest border-2 border-forest text-white py-2.5 pl-5 pr-1.5 rounded-full text-xs font-bold tracking-wide uppercase flex items-center justify-center gap-2.5 transition-all duration-300 no-underline cursor-pointer"
                            >
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[125%] aspect-square rounded-t-[50%] bg-white translate-y-full transition-transform duration-[750ms] ease-in-out z-0 group-hover:translate-y-[12%]" />
                                <span className="relative z-10 transition-colors duration-300 group-hover:text-forest">
                                    Enquire Now
                                </span>
                                <span className="relative z-10 w-6 h-6 bg-white text-forest rounded-full flex items-center justify-center shadow-sm transform group-hover:translate-x-1 group-hover:bg-forest group-hover:text-white transition-all duration-300 shrink-0">
                                    <FaArrowRight size={11} />
                                </span>
                            </Link>
                        </div>

                        {/* Quick facts: first 4 attributes (topped up with real product fields) */}
                        {quickFacts.length > 0 && (
                            <div className="grid grid-cols-2 gap-x-4 gap-y-5">
                                {quickFacts.map((fact) => {
                                    const Icon = fact.icon;
                                    return (
                                        <div key={fact.label} className="flex items-center gap-3 min-w-0">
                                            <span className={`w-11 h-11 rounded-full ${fact.bg} flex items-center justify-center shrink-0`}>
                                                <Icon className={fact.color} size={18} />
                                            </span>
                                            <div className="min-w-0">
                                                <p className="text-[11px] font-bold uppercase tracking-wide text-gray-400 mb-0.5 truncate">
                                                    {fact.label}
                                                </p>
                                                <p className="text-sm font-semibold text-gray-900 leading-snug break-words line-clamp-2">
                                                    {fact.value}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* ===================== TABS SECTION ===================== */}
            <section ref={tabsRef} className="w-full bg-[#faf6f0] py-14 sm:py-20 scroll-mt-20">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Tab bar — centered, wraps on mobile */}
                    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:gap-x-10 border-b border-gray-200 mb-12 pb-0">
                        {tabs.map((tab) => {
                            const isActive = tab.type === "content" && activeTab === tab.key;
                            return (
                                <button
                                    key={tab.key}
                                    onClick={() => handleTabClick(tab)}
                                    className={`relative shrink-0 px-1 sm:px-2 py-3.5 text-sm sm:text-[15px] font-bold tracking-wide transition-colors duration-200 cursor-pointer ${isActive ? "text-forest" : "text-gray-500 hover:text-gray-800"
                                        }`}
                                >
                                    {tab.label}
                                    <span
                                        className={`absolute bottom-0 left-0 right-0 h-[2px] bg-forest transition-transform duration-300 origin-left ${isActive ? "scale-x-100" : "scale-x-0"
                                            }`}
                                    />
                                </button>
                            );
                        })}
                    </div>

                    {/* Description tab */}
                    {activeTab === "description" && (
                        <div className="max-w-4xl mx-auto space-y-10">
                            {product.ingredients.length > 0 && (
                                <div className="bg-white rounded-2xl p-6 sm:p-8">
                                    <h3 className="font-serif text-lg font-semibold text-gray-900 mb-4">
                                        Ingredients
                                    </h3>
                                    <div className="flex flex-wrap gap-2.5">
                                        {product.ingredients.map((ing) => (
                                            <span
                                                key={ing}
                                                className="inline-flex items-center gap-2 bg-[#eaf3ec] text-forest text-sm font-semibold px-4 py-2 rounded-full break-words max-w-full"
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-forest shrink-0" />
                                                {ing}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="bg-white rounded-2xl p-6 sm:p-8">
                                <h3 className="font-serif text-lg font-semibold text-gray-900 mb-4">
                                    Description
                                </h3>
                                {product.paragraphs.length > 0 ? (
                                    <div className="space-y-4">
                                        {product.paragraphs.map((para, i) => (
                                            <p
                                                key={i}
                                                className="text-sm sm:text-[15px] text-gray-600 leading-7 whitespace-pre-line break-words"
                                            >
                                                {para}
                                            </p>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-sm text-gray-500">Product details will be updated soon.</p>
                                )}
                            </div>

                            {product.howToUse && (
                                <div className="bg-white rounded-2xl p-6 sm:p-8">
                                    <h3 className="font-serif text-lg font-semibold text-gray-900 mb-4">
                                        How to Use
                                    </h3>
                                    <p className="text-sm sm:text-[15px] text-gray-600 leading-7 whitespace-pre-line break-words">
                                        {product.howToUse}
                                    </p>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Specifications tab: fixed-height box, scrolls internally (hidden scrollbar), no buttons */}
                    {activeTab === "specifications" && specifications.length > 0 && (
                        <div className="relative">
                            <div
                                ref={specRef}
                                onScroll={updateSpecFade}
                                className="hide-scrollbar max-h-[560px] overflow-y-auto py-1"
                            >
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                                    {specifications.map((spec, i) => {
                                        const Icon = spec.icon || FaInfoCircle;
                                        return (
                                            <div
                                                key={`${spec.label}-${i}`}
                                                className="bg-white rounded-2xl p-5 flex items-start gap-4 transition-transform duration-300 hover:-translate-y-1 min-w-0"
                                            >
                                                <span className="w-11 h-11 rounded-full bg-[#eaf3ec] text-forest flex items-center justify-center shrink-0">
                                                    <Icon size={17} />
                                                </span>
                                                <div className="min-w-0">
                                                    <p className="text-[11px] font-bold uppercase tracking-wide text-gray-400 mb-1 break-words">
                                                        {spec.label}
                                                    </p>
                                                    <p className="text-sm font-semibold text-gray-900 leading-snug break-words">
                                                        {spec.value}
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            {specFade && (
                                <div
                                    className="pointer-events-none absolute bottom-0 left-0 right-0 h-16"
                                    style={{ background: "linear-gradient(to top, #faf6f0, rgba(250,246,240,0))" }}
                                />
                            )}
                        </div>
                    )}

                    {/* Where It's Used tab — shown when the backend sends usage data */}
                    {activeTab === "uses" && product.uses.length > 0 && (
                        <div
                            className={`grid grid-cols-1 gap-6 ${product.uses.length === 1
                                ? "max-w-md mx-auto"
                                : product.uses.length === 2
                                    ? "sm:grid-cols-2 max-w-3xl mx-auto"
                                    : "sm:grid-cols-3"
                                }`}
                        >
                            {product.uses.map((useCase) => {
                                const Icon = iconForUseGroup(useCase.label);
                                return (
                                    <div key={useCase.label} className="bg-white rounded-2xl p-6 sm:p-7 min-w-0">
                                        <span className="w-12 h-12 rounded-full bg-[#eaf3ec] text-forest flex items-center justify-center mb-5">
                                            <Icon size={20} />
                                        </span>
                                        <h4 className="font-poppins text-base font-bold text-gray-900 mb-4 break-words">
                                            {useCase.label}
                                        </h4>
                                        <ul className="space-y-2.5">
                                            {useCase.items.map((item) => (
                                                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                                                    <FaCheck className="text-forest shrink-0 mt-1" size={11} />
                                                    <span className="break-words min-w-0">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </section>

            {/* ===================== SIMILAR PRODUCTS (hidden when the backend returns none) ===================== */}
            {similarList.length > 0 && (
                <section className="w-full bg-white py-16 sm:py-20">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="relative text-center mb-10">
                            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight">
                                Similar Products
                            </h2>
                            <Link
                                href="/product"
                                className="inline-block mt-3 sm:mt-0 sm:absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2 text-sm font-bold text-forest hover:underline underline-offset-2"
                            >
                                View All
                            </Link>
                        </div>

                        {/* Prev / next buttons + viewport. Cards are centered when they all fit; the carousel only runs when they don't. */}
                        <div
                            className="relative"
                            onMouseEnter={() => { similarPausedRef.current = true; }}
                            onMouseLeave={() => { similarPausedRef.current = false; }}
                        >
                            {similarMarquee && (
                                <button
                                    type="button"
                                    onClick={() => stepSimilar(-1)}
                                    aria-label="Previous products"
                                    className="absolute top-1/2 -translate-y-1/2 -left-3 sm:-left-5 z-10 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-forest hover:bg-forest hover:text-white transition-colors duration-300 cursor-pointer"
                                >
                                    <FaChevronLeft size={14} />
                                </button>
                            )}

                            {/* py-2 leaves room for the hover lift so it isn't clipped */}
                            <div ref={similarViewportRef} className="overflow-hidden py-2">
                                <div
                                    ref={similarTrackRef}
                                    className={
                                        similarMarquee
                                            ? "flex w-max will-change-transform"
                                            : "flex flex-wrap justify-center gap-6 sm:gap-8"
                                    }
                                >
                                    {(similarMarquee ? [...similarList, ...similarList] : similarList).map((rp, i) => (
                                        <div
                                            key={`${rp.id}-${i}`}
                                            className={`w-[280px] sm:w-[330px] shrink-0 ${similarMarquee ? "mr-6 sm:mr-8" : ""}`}
                                            aria-hidden={similarMarquee && i >= similarList.length}
                                        >
                                            <SimilarProductCard rp={rp} />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {similarMarquee && (
                                <button
                                    type="button"
                                    onClick={() => stepSimilar(1)}
                                    aria-label="Next products"
                                    className="absolute top-1/2 -translate-y-1/2 -right-3 sm:-right-5 z-10 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-forest hover:bg-forest hover:text-white transition-colors duration-300 cursor-pointer"
                                >
                                    <FaChevronRight size={14} />
                                </button>
                            )}
                        </div>
                    </div>
                </section>
            )}

            {/* ===================== REVIEWS SECTION ===================== */}
            <section ref={reviewsRef} className="w-full bg-[#faf6f0] py-16 sm:py-20 scroll-mt-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-10">
                        <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight">
                            Customer Reviews
                        </h2>
                        {!reviewsLoading && !reviewsError && totalReviews > 0 && (
                            <div className="flex items-center justify-center gap-2.5 mt-3">
                                <StarRating rating={Math.round(avgRating)} size={16} />
                                <p className="text-sm text-gray-600">
                                    <span className="font-bold text-gray-900">{avgRating.toFixed(1)}</span> out of 5 · {totalReviews}{" "}
                                    {totalReviews === 1 ? "review" : "reviews"}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Compact review cards: slide automatically when more than fit on screen */}
                    {reviewsLoading ? (
                        <div className="flex justify-center gap-6 overflow-hidden">
                            {Array.from({ length: 3 }).map((_, i) => (
                                <div key={i} className="w-[320px] sm:w-[380px] shrink-0 h-[280px] bg-white rounded-2xl border border-gray-100 p-5 animate-pulse">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-11 h-11 rounded-full bg-gray-100" />
                                        <div className="h-3 w-28 rounded bg-gray-100" />
                                    </div>
                                    <div className="h-3 w-full rounded bg-gray-100 mb-2" />
                                    <div className="h-3 w-5/6 rounded bg-gray-100 mb-2" />
                                    <div className="h-3 w-2/3 rounded bg-gray-100" />
                                </div>
                            ))}
                        </div>
                    ) : reviewsError ? (
                        <div className="max-w-md mx-auto bg-white rounded-2xl border border-gray-100 p-8 text-center">
                            <p className="text-sm text-gray-600 mb-4">We couldn&apos;t load the reviews right now.</p>
                            <button
                                type="button"
                                onClick={() => setReviewsReloadKey((k) => k + 1)}
                                className="text-xs font-bold tracking-wide uppercase px-6 py-2.5 rounded-full border-2 border-forest text-forest hover:bg-forest hover:text-white transition-all duration-300 cursor-pointer"
                            >
                                Retry
                            </button>
                        </div>
                    ) : reviews.length > 0 ? (
                        <div ref={reviewsViewportRef} className="reviews-viewport overflow-hidden py-2">
                            <div
                                className={reviewMarquee ? "reviews-track flex w-max" : "flex flex-wrap justify-center gap-6"}
                                style={reviewMarquee ? { "--marquee-duration": `${reviewDuration}s` } : undefined}
                            >
                                {(reviewMarquee ? [...reviews, ...reviews] : reviews).map((review, i) => (
                                    <div
                                        key={`${review.id}-${i}`}
                                        className={`w-[320px] sm:w-[380px] shrink-0 ${reviewMarquee ? "mr-6" : ""}`}
                                        aria-hidden={reviewMarquee && i >= reviews.length}
                                    >
                                        <ReviewCard review={review} onOpen={setActiveReview} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <p className="text-center text-sm text-gray-500">
                            No reviews yet. Be the first to review this product.
                        </p>
                    )}

                    {/* Add your review */}
                    <div className="mt-12 max-w-4xl mx-auto bg-white rounded-2xl border border-gray-100 px-6 py-7 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
                        <div>
                            <h3 className="font-poppins text-lg font-bold text-gray-900">Add your review</h3>
                            <p className="text-sm text-gray-500 mt-1">
                                Used {product.title}? Tell other buyers about your experience.
                            </p>
                            {/* {reviewNotice && (
                                <p role="status" className="text-sm font-medium text-forest mt-3">
                                    {reviewNotice}
                                </p>
                            )} */}
                        </div>
                        <button
                            type="button"
                            onClick={openReviewModal}
                            className="shrink-0 inline-flex items-center gap-2 bg-forest hover:bg-[#245633] text-white text-xs font-bold tracking-wide uppercase px-7 py-3 rounded-full transition-colors duration-300 cursor-pointer"
                        >
                            <FaPen size={11} />
                            Write a Review
                        </button>
                    </div>
                </div>
            </section>

            {/* ===================== FAQ SECTION (shown when the backend sends FAQs) ===================== */}
            {product.faqs.length > 0 && (
                <section ref={faqRef} className="w-full bg-white py-16 sm:py-20 scroll-mt-20">
                    <div className="max-w-3xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight">
                                Frequently Asked Questions
                            </h2>
                        </div>

                        <div className="divide-y divide-gray-100 border-t border-b border-gray-100">
                            {product.faqs.map((faq, i) => {
                                const isOpen = openFaq === i;
                                return (
                                    <div key={`${faq.q}-${i}`}>
                                        <button
                                            onClick={() => setOpenFaq(isOpen ? -1 : i)}
                                            className="w-full flex items-center justify-between text-left py-5 cursor-pointer"
                                        >
                                            <span className="text-sm sm:text-base font-semibold text-gray-900 pr-6">
                                                {faq.q}
                                            </span>
                                            <FaChevronDown
                                                size={13}
                                                className={`text-forest shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                                            />
                                        </button>
                                        <div
                                            className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[600px] pb-5" : "max-h-0"
                                                }`}
                                        >
                                            <p className="text-sm text-gray-600 leading-relaxed pr-10 whitespace-pre-line break-words">
                                                {faq.a}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* ===================== ADD REVIEW MODAL ===================== */}
            {reviewModalOpen &&
                createPortal(
                    <div
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50"
                        onMouseDown={(e) => {
                            if (e.target === e.currentTarget && !submitting) setReviewModalOpen(false);
                        }}
                    >
                        <div
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="review-modal-title"
                            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-2xl p-6 sm:p-8 shadow-xl"
                        >
                            <button
                                type="button"
                                onClick={() => !submitting && setReviewModalOpen(false)}
                                aria-label="Close"
                                className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors cursor-pointer"
                            >
                                <FaTimes size={14} />
                            </button>

                            <h3 id="review-modal-title" className="font-poppins text-lg font-bold text-gray-900 mb-1 pr-8">
                                Add Your Review
                            </h3>
                            <p className="text-sm text-gray-500 mb-6">
                                Reviewing <span className="font-semibold text-gray-700">{product.title}</span>. Required fields are marked *
                            </p>

                            <form onSubmit={handleReviewSubmit} className="space-y-5">
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 mb-2">
                                        Your Rating *
                                    </label>
                                    <StarInput value={reviewRating} onChange={setReviewRating} />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-gray-700 mb-2">
                                        Review Title
                                    </label>
                                    <input
                                        type="text"
                                        value={reviewTitle}
                                        onChange={(e) => setReviewTitle(e.target.value)}
                                        placeholder="Write a short title"
                                        className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-100 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-forest/20 transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-gray-700 mb-2">
                                        Detailed Review *
                                    </label>
                                    <textarea
                                        value={reviewText}
                                        onChange={(e) => setReviewText(e.target.value)}
                                        rows={4}
                                        placeholder="Tell us about your experience with this product..."
                                        required
                                        className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-100 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-forest/20 transition-all resize-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-gray-700 mb-2">
                                        Photo (Optional)
                                    </label>
                                    <div
                                        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                                        onDragLeave={() => setIsDragging(false)}
                                        onDrop={handleDrop}
                                        className={`relative border-2 border-dashed rounded-xl py-7 px-4 flex flex-col items-center justify-center text-center transition-colors ${isDragging ? "border-forest bg-[#eaf3ec]/60" : "border-gray-200"
                                            }`}
                                    >
                                        {reviewImagePreview ? (
                                            <div className="relative w-20 h-20 rounded-lg overflow-hidden">
                                                <Image src={reviewImagePreview} alt="Preview" fill unoptimized className="object-cover" />
                                                <button
                                                    type="button"
                                                    onClick={clearReviewFile}
                                                    className="absolute top-1 right-1 w-5 h-5 bg-white/90 rounded-full flex items-center justify-center text-gray-600 hover:text-forest cursor-pointer"
                                                >
                                                    <FaTimes size={10} />
                                                </button>
                                            </div>
                                        ) : (
                                            <>
                                                <FaCloudUploadAlt size={28} className="text-gray-300 mb-2" />
                                                <p className="text-sm text-gray-400 mb-1">Drag a photo here</p>
                                                <label className="text-sm font-bold text-forest cursor-pointer hover:underline underline-offset-2">
                                                    Browse
                                                    <input type="file" accept="image/*" onChange={handleFileFromInput} className="hidden" />
                                                </label>
                                            </>
                                        )}
                                    </div>
                                </div>

                                {submitStatus && (
                                    <p
                                        role="status"
                                        className={`text-sm font-medium ${submitStatus.type === "success" ? "text-forest" : "text-red-600"}`}
                                    >
                                        {submitStatus.text}
                                    </p>
                                )}

                                <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 pt-1">
                                    <button
                                        type="button"
                                        onClick={() => !submitting && setReviewModalOpen(false)}
                                        className="text-xs font-bold tracking-wide uppercase px-6 py-3 rounded-full border-2 border-gray-200 text-gray-600 hover:border-gray-400 transition-colors cursor-pointer"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={submitting}
                                        className="bg-forest hover:bg-[#245633] text-white text-xs font-bold tracking-wide uppercase px-8 py-3 rounded-full transition-all duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                                    >
                                        {submitting ? "Submitting..." : "Submit Review"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>,
                    document.body
                )}

            {/* ===================== FULL REVIEW MODAL ===================== */}
            {activeReview &&
                createPortal(
                    <div
                        className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/50"
                        onMouseDown={(e) => {
                            if (e.target === e.currentTarget) setActiveReview(null);
                        }}
                    >
                        <div
                            role="dialog"
                            aria-modal="true"
                            aria-label={`Review by ${activeReview.name}`}
                            className="relative w-full max-w-lg max-h-[85vh] overflow-y-auto bg-white rounded-2xl p-6 sm:p-8 shadow-xl"
                        >
                            <button
                                type="button"
                                onClick={() => setActiveReview(null)}
                                aria-label="Close"
                                className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors cursor-pointer"
                            >
                                <FaTimes size={14} />
                            </button>

                            <div className="flex items-center gap-3 mb-4 pr-8">
                                <Avatar name={activeReview.name} />
                                <div className="min-w-0">
                                    <p className="text-sm font-bold text-gray-900 break-words">{activeReview.name}</p>
                                    <p className="text-xs text-gray-400">
                                        {[activeReview.company, formatDate(activeReview.date)].filter(Boolean).join(" · ")}
                                    </p>
                                </div>
                            </div>

                            <div className="mb-4">
                                <StarRating rating={activeReview.rating} size={16} />
                            </div>
                            {activeReview.title && (
                                <p className="text-base font-bold text-gray-900 mb-2 break-words">{activeReview.title}</p>
                            )}
                            <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line break-words">
                                {activeReview.text}
                            </p>
                            {activeReview.image && (
                                <div className="relative w-28 h-28 rounded-xl overflow-hidden mt-5 bg-gray-50">
                                    <Image
                                        src={activeReview.image}
                                        alt="Review upload"
                                        fill
                                        unoptimized={isRemote(activeReview.image)}
                                        className="object-cover"
                                    />
                                </div>
                            )}
                        </div>
                    </div>,
                    document.body
                )}

            {/* ===================== THANK YOU POPUP ===================== */}
            <Modal open={thankYouOpen} onClose={() => setThankYouOpen(false)} title="Thank you!">
                <div className="flex flex-col items-center text-center pt-2">
                    <span className="w-14 h-14 rounded-full bg-[#eaf3ec] text-forest flex items-center justify-center mb-4">
                        <FaCheck size={22} />
                    </span>
                    <p className="text-sm text-gray-600 leading-relaxed max-w-sm">
                        Your review has been submitted. We appreciate you taking the time to share your
                        experience with {product.title}.
                    </p>
                    <button
                        type="button"
                        data-autofocus
                        onClick={() => setThankYouOpen(false)}
                        className="mt-6 h-11 w-full sm:w-auto cursor-pointer rounded-lg bg-forest px-8 text-[13px] font-bold tracking-wider text-white shadow-[0_8px_18px_rgba(36,56,34,0.2)] transition-colors hover:bg-forest-light"
                    >
                        Done
                    </button>
                </div>
            </Modal>
        </div>
    );
}


// ---- Wrapper: fetches from the backend (client side) and picks the product by slug ----
export default function ProductDetailClient({ slug }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [reloadKey, setReloadKey] = useState(0);

    useEffect(() => {
        const controller = new AbortController();

        const fetchProducts = async () => {
            try {
                setLoading(true);
                setError(null);

                let page = 1;
                let totalPages = 1;
                const all = [];

                do {
                    const json = await fetchJson(
                        `${API_BASE_URL}/product/public/store/${STORE_DOMAIN}?page=${page}`,
                        controller.signal
                    );
                    all.push(...(json.data?.products || []));
                    totalPages = json.data?.totalPages || 1;
                    page += 1;
                } while (page <= totalPages);

                setProducts(all.filter((p) => p.status === "Active").map(mapApiProduct));
            } catch (err) {
                if (err.name === "AbortError") return;
                setError(err.message || "Something went wrong");
            } finally {
                if (!controller.signal.aborted) setLoading(false);
            }
        };

        fetchProducts();
        return () => controller.abort();
    }, [reloadKey]);

    const catalogProduct = useMemo(
        () => products.find((p) => p.slug === slug) || null,
        [products, slug]
    );

    if (loading) {
        return (
            <div className="bg-white">
                <div className="max-w-7xl mx-auto px-6 pt-6 pb-2">
                    <div className="h-3 w-48 rounded bg-gray-100 animate-pulse" />
                </div>
                <section className="max-w-7xl mx-auto px-6 py-8 sm:py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 animate-pulse">
                        <div className="aspect-square bg-[#faf6f0] rounded-2xl" />
                        <div className="flex flex-col">
                            <div className="h-3 w-32 rounded bg-gray-100 mb-4" />
                            <div className="h-9 w-3/4 rounded bg-gray-100 mb-4" />
                            <div className="h-3 w-full rounded bg-gray-100 mb-2" />
                            <div className="h-3 w-5/6 rounded bg-gray-100 mb-2" />
                            <div className="h-3 w-2/3 rounded bg-gray-100 mb-8" />
                            <div className="h-12 w-56 rounded-full bg-gray-100" />
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-white min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
                <h1 className="font-poppins text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                    Something Went Wrong
                </h1>
                <p className="text-gray-500 text-sm sm:text-base max-w-md mb-8">
                    We couldn&apos;t load this product right now. Please try again.
                </p>
                <button
                    onClick={() => setReloadKey((k) => k + 1)}
                    className="inline-flex bg-forest hover:bg-[#245633] text-white text-sm font-bold tracking-wide uppercase px-8 py-3.5 rounded-full transition-all duration-300 cursor-pointer"
                >
                    Retry
                </button>
            </div>
        );
    }

    if (!catalogProduct) {
        return (
            <div className="bg-white min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
                <h1 className="font-poppins text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                    Product Not Found
                </h1>
                <p className="text-gray-500 text-sm sm:text-base max-w-md mb-8">
                    We couldn&apos;t find the product you&apos;re looking for. It may have been renamed or is no longer available.
                </p>
                <Link
                    href="/product"
                    className="inline-flex bg-forest hover:bg-[#245633] text-white text-sm font-bold tracking-wide uppercase px-8 py-3.5 rounded-full transition-all duration-300 no-underline"
                >
                    Browse All Products
                </Link>
            </div>
        );
    }

    // key resets gallery / tabs / form state when navigating between products
    return <ProductDetailView key={catalogProduct.id} catalogProduct={catalogProduct} />;
}