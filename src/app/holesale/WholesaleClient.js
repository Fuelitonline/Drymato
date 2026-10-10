// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { toast } from "react-hot-toast";
// import {
//     FaBoxes,
//     FaTags,
//     FaChartLine,
//     FaShieldAlt,
//     FaCheckCircle,
//     FaHotel,
//     FaIndustry,
//     FaGlobe,
//     FaPaperPlane,
//     FaChevronDown,
//     FaTruckLoading,
//     FaHandshake,
//     FaBoxOpen,
//     FaClock,
//     FaCertificate,
//     FaUser,
//     FaBuilding,
//     FaEnvelope,
//     FaPhone,
//     FaCommentDots,
//     FaFileInvoice,
//     FaExclamationCircle,
//     FaSpinner
// } from "react-icons/fa";

// const WHOLESALE_PRODUCTS = [
//     {
//         id: "sun-dried-tomatoes",
//         title: "Sun-Dried Tomatoes (Whole & Slices)",
//         image: "/jaar/jaarslightroatateview.png",
//         category: "Classic & Marinated",
//         description: "Sun-ripened Mediterranean tomatoes dried to perfection under solar heat, retaining deep umami flavor, vibrant ruby color, and natural sugars.",
//         moq: "50 KG",
//         packaging: "5 KG Chef Vacuum Pack / 25 KG Bulk Carton",
//         features: ["100% Natural Sun-Cured", "Zero Added Preservatives", "Standard & Moisture-Controlled Grades"]
//     },
//     {
//         id: "sunflower-oil-marinated",
//         title: "Marinated Sun-Dried Tomatoes",
//         image: "/jaar/sunflower-oil-smalljaar.png",
//         category: "Gourmet HoReCa",
//         description: "Succulent sun-dried tomatoes marinated in cold-pressed extra virgin olive oil or pure sunflower oil with Mediterranean herbs.",
//         moq: "25 KG / 50 Jars",
//         packaging: "Bulk Foodservice Tubs / Glass Jars",
//         features: ["Rich Herb Infusion", "Ready-to-Serve Prep", "Extended Shelf Stability"]
//     },
//     {
//         id: "dehydrated-onion-powder",
//         title: "Dehydrated Onion & Onion Powder",
//         image: "/onion_powder-removebg.png",
//         category: "Dehydrated Vegetables & Seasoning",
//         description: "Premium dehydrated onion slices, flakes, and fine mesh powders. Delivers intense aromatic onion flavor without kitchen prep waste.",
//         moq: "100 KG",
//         packaging: "25 KG Moisture-Proof Vacuum Bags",
//         features: ["Controlled Mesh Sizes", "High Rehydration Ratio", "Pungent Natural Aroma"]
//     },
//     {
//         id: "dehydrated-garlic-powder",
//         title: "Dehydrated Garlic & Garlic Powder",
//         image: "/garlic_powder-removebg.png",
//         category: "Dehydrated Vegetables & Seasoning",
//         description: "Pure garlic cloves, minced garlic, and fine garlic powder processed to maintain essential oils and bold garlicky zest.",
//         moq: "100 KG",
//         packaging: "25 KG Heavy-Duty Foil Bags",
//         features: ["100% Pure Allium sativum", "No Clumping Agents", "Long Shelf Life"]
//     },
//     {
//         id: "tomato-powder",
//         title: "Pure Sun-Dried Tomato Powder",
//         image: "/jaar/powder-pouch-removebg.png",
//         category: "Seasoning & Industrial Ingredient",
//         description: "Concentrated sun-dried tomato powder designed for snack seasonings, instant soup bases, sauces, and culinary spice blends.",
//         moq: "50 KG",
//         packaging: "10 KG / 20 KG Bulk Foil Pouches",
//         features: ["Deep Red Color Index", "Instant Water Solubility", "Rich Natural Lycopene"]
//     },
//     {
//         id: "dehydrated-veggie-range",
//         title: "Dehydrated Veggie Range (Okra, Carrot, Beetroot)",
//         image: "/upcomming-mix-dried-upcomming.png",
//         category: "Dehydrated Farm Produce",
//         description: "Farm-fresh okra cuts, carrot slices, and beetroot chips dehydrated under temperature-monitored solar tunnels for maximum nutrient retention.",
//         moq: "50 KG",
//         packaging: "5 KG Vacuum Bags / 20 KG Master Cartons",
//         features: ["Vivid Natural Color", "High Fiber & Antioxidants", "Custom Cut Sizes Available"]
//     }
// ];

// const STATS = [
//     { label: "100% Natural", sub: "Sun-Cured Quality", icon: FaCertificate },
//     { label: "50 KG - 10+ Tons", sub: "Flexible Supply Capacity", icon: FaBoxOpen },
//     { label: "24 Hours", sub: "B2B Quote Turnaround", icon: FaClock },
//     { label: "12-24 Months", sub: "Extended Shelf Life", icon: FaShieldAlt }
// ];

// const WHOLESALE_BENEFITS = [
//     {
//         title: "Direct Factory Pricing",
//         desc: "Bypass middlemen and enjoy true factory-direct wholesale pricing structured for maximum margin protection.",
//         icon: FaChartLine
//     },
//     {
//         title: "Flexible Packaging & MOQs",
//         desc: "From 5 KG chef pouches for commercial kitchens to 25 KG vacuum drums for food processing plants.",
//         icon: FaBoxes
//     },
//     {
//         title: "Private Labeling Support",
//         desc: "Custom retail pouching, glass jar labeling, barcoding, and white-label branding tailored for your market.",
//         icon: FaTags
//     },
//     {
//         title: "All-Season Stock Guarantee",
//         desc: "Our climate-controlled warehousing ensures uninterrupted inventory and stable year-round pricing.",
//         icon: FaShieldAlt
//     },
//     {
//         title: "Strict Quality Control",
//         desc: "Lab-tested for moisture parameters, microbial safety, and zero artificial colors or chemical additives.",
//         icon: FaCheckCircle
//     },
//     {
//         title: "Global Export Logistics",
//         desc: "Seamless ocean & air freight logistics with full customs documentation, health certificates, and COA.",
//         icon: FaGlobe
//     }
// ];

// const BUSINESS_MODELS = [
//     {
//         title: "Hotels, Restaurants & Caterers (HoReCa)",
//         tag: "Foodservice Grade",
//         icon: FaHotel,
//         desc: "Save labor hours and eliminate food prep waste with pre-cut, ready-to-use sun-dried tomatoes and dehydrated vegetable bases."
//     },
//     {
//         title: "Food Manufacturers & Spice Blenders",
//         tag: "Multi-Ton Supply",
//         icon: FaIndustry,
//         desc: "Consistent mesh size powders, strict moisture control, and scalable multi-ton contract supply for processed food manufacturing."
//     },
//     {
//         title: "Private Label Brands & Supermarket Chains",
//         tag: "Turnkey Packaging",
//         icon: FaHandshake,
//         desc: "Turnkey private labeling options including custom packaging formats, pouch designs, and international compliance labels."
//     },
//     {
//         title: "Wholesale Distributors & Importers",
//         tag: "FCL / LCL Shipping",
//         icon: FaTruckLoading,
//         desc: "Container-load shipments (FCL/LCL), tier volume discounts, and reliable year-round logistics support."
//     }
// ];

// const FAQS = [
//     {
//         question: "What is the Minimum Order Quantity (MOQ) for wholesale orders?",
//         answer: "Our standard MOQ starts at 50 KG for standard bulk vacuum packs. For private label and custom consumer packaging, MOQs start at 500 units depending on the pouch format."
//     },
//     {
//         question: "Can we request sample kits before placing a bulk order?",
//         answer: "Yes! We provide complimentary sample kits (shipping fee applies) for commercial buyers, chefs, and food manufacturers to test quality, texture, and rehydration ratios."
//     },
//     {
//         question: "Do you offer private labeling (White Labeling) services?",
//         answer: "Absolutely. We offer complete private label solutions including glass jar packing, printed stand-up pouches, custom weight options, and your brand's artwork."
//     },
//     {
//         question: "What are your standard lead times for bulk dispatch?",
//         answer: "Standard domestic wholesale orders dispatch within 3–5 business days. International container orders (FCL/LCL) typically require 7–14 days depending on custom specifications."
//     },
//     {
//         question: "Are Drymato products certified for food safety?",
//         answer: "Yes, all Drymato products are processed under strict hygiene standards adhering to ISO and HACCP guidelines, accompanied by Certificate of Analysis (COA) per batch."
//     }
// ];

// export default function WholesaleClient() {
//     const [openFaq, setOpenFaq] = useState(0);
//     const [formData, setFormData] = useState({
//         fullName: "",
//         companyName: "",
//         gstNumber: "",
//         email: "",
//         phone: "",
//         productInterest: "Sun-Dried Tomatoes",
//         estimatedVolume: "50 KG - 250 KG",
//         packagingFormat: "5 KG Chef Pack",
//         message: ""
//     });
//     const [errors, setErrors] = useState({});
//     const [touched, setTouched] = useState({});
//     const [isSubmitted, setIsSubmitted] = useState(false);
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [toastBanner, setToastBanner] = useState(null);

//     const triggerToastBanner = (type, message) => {
//         setToastBanner({ type, message });
//         if (type === "success") {
//             toast.success(message);
//         } else {
//             toast.error(message);
//         }
//         setTimeout(() => {
//             setToastBanner(null);
//         }, 7000);
//     };

//     const scrollToQuoteForm = (e, customFieldUpdate = null) => {
//         if (e) e.preventDefault();

//         if (customFieldUpdate) {
//             setFormData((prev) => ({ ...prev, ...customFieldUpdate }));
//         }

//         const el = document.getElementById("quote-form");
//         if (el) {
//             const yOffset = -70;
//             const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
//             window.scrollTo({ top: y, behavior: "smooth" });
//         }
//     };

//     const validateField = (name, value) => {
//         let error = "";
//         const val = (value || "").trim();

//         if (name === "fullName") {
//             if (!val) {
//                 error = "Full name is required.";
//             } else if (val.length < 2) {
//                 error = "Name must be at least 2 characters.";
//             }
//         }
//         if (name === "companyName") {
//             if (!val) {
//                 error = "Company / Restaurant name is required.";
//             } else if (val.length < 2) {
//                 error = "Company name must be at least 2 characters.";
//             }
//         }
//         if (name === "email") {
//             if (!val) {
//                 error = "Email address is required.";
//             } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
//                 error = "Please enter a valid email address.";
//             }
//         }
//         if (name === "phone") {
//             if (!val) {
//                 error = "Phone / WhatsApp number is required.";
//             } else if (!/^[+0-9\s-]{10,15}$/.test(val)) {
//                 error = "Please enter a valid phone number (10-15 digits).";
//             }
//         }
//         if (name === "gstNumber" && val) {
//             const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
//             if (!gstRegex.test(val.toUpperCase())) {
//                 error = "Invalid GST format (e.g. 24AAAAA0000A1Z5).";
//             }
//         }
//         return error;
//     };

//     const validateForm = () => {
//         const newErrors = {};
//         ["fullName", "companyName", "email", "phone", "gstNumber"].forEach((field) => {
//             const err = validateField(field, formData[field] || "");
//             if (err) newErrors[field] = err;
//         });
//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };

//     const handleBlur = (field) => {
//         setTouched((prev) => ({ ...prev, [field]: true }));
//         const error = validateField(field, formData[field] || "");
//         setErrors((prev) => ({ ...prev, [field]: error }));
//     };

//     const handleChange = (field, value) => {
//         setFormData((prev) => ({ ...prev, [field]: value }));
//         if (touched[field]) {
//             const error = validateField(field, value);
//             setErrors((prev) => ({ ...prev, [field]: error }));
//         }
//     };

//     const [submitError, setSubmitError] = useState("");

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setTouched({
//             fullName: true,
//             companyName: true,
//             gstNumber: true,
//             email: true,
//             phone: true
//         });

//         if (!validateForm()) {
//             triggerToastBanner("error", "Please correct the highlighted errors in the form.");
//             return;
//         }

//         setIsSubmitting(true);
//         setSubmitError("");

//         try {
//             const response = await fetch("/api/wholesale", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify(formData)
//             });

//             const data = await response.json();

//             if (data.success) {
//                 setIsSubmitted(true);
//                 triggerToastBanner("success", "Wholesale B2B Inquiry Sent! Our commercial team will contact you within 24 hours.");
//                 setFormData({
//                     fullName: "",
//                     companyName: "",
//                     gstNumber: "",
//                     email: "",
//                     phone: "",
//                     productInterest: "Sun-Dried Tomatoes",
//                     estimatedVolume: "50 KG - 250 KG",
//                     packagingFormat: "5 KG Chef Pack",
//                     message: ""
//                 });
//                 setErrors({});
//                 setTouched({});
//             } else {
//                 const errText = data.error || "Failed to send quote request. Please try again.";
//                 setSubmitError(errText);
//                 triggerToastBanner("error", errText);
//             }
//         } catch (err) {
//             console.error("Error submitting wholesale quote form:", err);
//             const errText = "Network error. Please try again later or contact us directly.";
//             setSubmitError(errText);
//             triggerToastBanner("error", errText);
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     useEffect(() => {
//         const animatedElements = document.querySelectorAll(
//             ".reveal-fade-up, .reveal-fade-left, .reveal-fade-right, .reveal-card"
//         );

//         if (typeof window !== "undefined" && "IntersectionObserver" in window) {
//             const observerOptions = {
//                 root: null,
//                 rootMargin: "0px 0px 50px 0px",
//                 threshold: 0.01
//             };

//             const revealObserver = new IntersectionObserver((entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting) {
//                         entry.target.classList.add("is-revealed");
//                     }
//                 });
//             }, observerOptions);

//             animatedElements.forEach((el) => revealObserver.observe(el));

//             // Safety fallback: ensure all elements are revealed immediately
//             const fallbackTimer = setTimeout(() => {
//                 animatedElements.forEach((el) => el.classList.add("is-revealed"));
//             }, 100);

//             return () => {
//                 clearTimeout(fallbackTimer);
//                 animatedElements.forEach((el) => revealObserver.unobserve(el));
//             };
//         } else {
//             animatedElements.forEach((el) => el.classList.add("is-revealed"));
//         }
//     }, []);

//     return (
//         <div className="font-poppins relative">
//             {toastBanner && (
//                 <div className="fixed top-24 right-4 sm:right-8 z-[9999999] w-[92%] max-w-sm sm:max-w-md font-poppins transition-all duration-500 animate-in fade-in slide-in-from-top-4">
//                     <div className={`p-4 sm:p-5 rounded-2xl border-2 shadow-2xl flex items-center justify-between gap-3 ${
//                         toastBanner.type === "success"
//                             ? "bg-emerald-50 border-emerald-300 text-emerald-950 shadow-emerald-600/30"
//                             : "bg-red-50 border-red-300 text-red-950 shadow-red-600/30"
//                     }`}>
//                         <div className="flex items-center gap-3">
//                             <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
//                                 toastBanner.type === "success" ? "bg-emerald-600 text-white" : "bg-red-600 text-white"
//                             }`}>
//                                 {toastBanner.type === "success" ? <FaCheckCircle className="w-4 h-4" /> : <FaExclamationCircle className="w-4 h-4" />}
//                             </div>
//                             <p className="text-xs sm:text-sm font-extrabold leading-snug">{toastBanner.message}</p>
//                         </div>
//                         <button
//                             type="button"
//                             onClick={() => setToastBanner(null)}
//                             className="text-gray-400 hover:text-gray-700 text-xs font-black px-2 py-1 cursor-pointer shrink-0"
//                         >
//                             ✕
//                         </button>
//                     </div>
//                 </div>
//             )}
//             <style dangerouslySetInnerHTML={{
//                 __html: `
//                 .reveal-fade-up,
//                 .reveal-fade-left,
//                 .reveal-fade-right,
//                 .reveal-card {
//                     opacity: 1 !important;
//                     transform: none !important;
//                 }
//                 .reveal-card:hover {
//                     transform: translateY(-8px) !important;
//                 }
//                 /* Ultra-Visible Moving White Shine Sweep Effect */
//                 .glass-shine-card {
//                     position: relative;
//                     overflow: hidden;
//                 }
//                 .glass-shine-card::after {
//                     content: "";
//                     position: absolute;
//                     top: -50%;
//                     left: -150%;
//                     width: 200%;
//                     height: 200%;
//                     background: linear-gradient(
//                         60deg,
//                         rgba(255, 255, 255, 0) 25%,
//                         rgba(255, 255, 255, 0.95) 50%,
//                         rgba(255, 255, 255, 0) 75%
//                     );
//                     transform: rotate(25deg);
//                     transition: left 0.85s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s;
//                     pointer-events: none;
//                     opacity: 0;
//                     z-index: 30;
//                 }
//                 .glass-shine-card:hover::after {
//                     left: 120%;
//                     opacity: 1;
//                 }
//                 `
//             }} />

//             {/* SECTION 1: OVERVIEW & MISSION */}
//             <section className="max-w-7xl mx-auto px-6 py-20 relative z-10">
//                 <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
//                     <div className="lg:col-span-7 space-y-6 text-left reveal-fade-left">
//                         <span className="text-[#a50808] font-black tracking-widest text-xs uppercase bg-[#a50808]/5 px-3.5 py-1.5 rounded-full inline-block border border-[#a50808]/15 font-poppins">
//                             B2B Supply Partner
//                         </span>
//                         <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-poppins leading-tight tracking-tight">
//                             Elevate Your Culinary Operations With Direct Bulk Supply
//                         </h2>
//                         <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-medium font-poppins">
//                             Drymato is a trusted producer of premium sun-dried tomatoes and dehydrated ingredients. We cater directly to wholesale buyers, food processing plants, HoReCa chains, and retail food distributors seeking consistent quality, deep natural flavor, and reliable supply contracts.
//                         </p>
//                         <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-poppins">
//                             Whether you need bulk vacuum-sealed 5 KG bags for fast-paced commercial kitchens or multi-ton monthly contract shipments of pure garlic and onion powders, Drymato provides customized solutions built around your exact specs.
//                         </p>

//                         <div className="pt-4 flex flex-wrap gap-4 font-poppins">
//                             <button
//                                 type="button"
//                                 onClick={(e) => scrollToQuoteForm(e)}
//                                 className="bg-[#a50808] text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-[#850606] transition-all duration-300 shadow-lg shadow-red-900/20 hover:scale-105 inline-flex items-center gap-2 cursor-pointer"
//                             >
//                                 Request Wholesale Quote →
//                             </button>
//                             <a
//                                 href="https://wa.me/8000897238"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="bg-white text-gray-800 border-2 border-gray-200 px-7 py-3.5 rounded-full font-bold text-sm hover:border-[#a50808] hover:text-[#a50808] transition-all duration-300 inline-flex items-center gap-2"
//                             >
//                                 Chat on WhatsApp
//                             </a>
//                         </div>
//                     </div>

//                     <div className="lg:col-span-5 relative flex items-center justify-center reveal-fade-right">
//                         <div className="relative w-full h-[380px] sm:h-[440px] rounded-tl-[5rem] rounded-br-[5rem] overflow-hidden shadow-2xl border-4 border-white group">
//                             <Image
//                                 src="/wholesale_bulk_packaging.png"
//                                 alt="Drymato Wholesale Bulk Vacuum Packaging"
//                                 fill
//                                 className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
//                             />
//                             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
//                             <div className="absolute bottom-6 left-6 right-6 text-white font-poppins">
//                                 <span className="text-amber-300 font-extrabold text-xs uppercase tracking-widest block mb-1">Commercial B2B Grade</span>
//                                 <h3 className="text-xl font-bold font-poppins">Heavy Duty Bulk Vacuum Packaging</h3>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* STATS HIGHLIGHTS BAR */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-6 reveal-fade-up">
//                     {STATS.map((st, i) => {
//                         const IconComponent = st.icon;
//                         return (
//                             <div
//                                 key={i}
//                                 className="reveal-card glass-shine-card relative bg-white/95 backdrop-blur-md p-6 rounded-tl-[2.5rem] rounded-br-[2.5rem] rounded-tr-xl rounded-bl-xl border border-white/90 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col items-center text-center group hover:border-[#a50808]/30 hover:shadow-[0_20px_45px_rgba(165,8,8,0.14)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
//                             >
//                                 {/* Expanding Yellow Water Drop Ripple Effect on Hover */}
//                                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-amber-400/25 rounded-full scale-0 group-hover:scale-[5] opacity-0 group-hover:opacity-30 transition-all duration-700 pointer-events-none ease-out" />

//                                 {/* Ambient Liquid Yellow Glow Orb */}
//                                 <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-400/20 rounded-full filter blur-2xl opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700 pointer-events-none" />

//                                 {/* Icon badge */}
//                                 <div className="relative z-20 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#a50808] to-[#850606] text-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shrink-0">
//                                     <IconComponent className="w-6 h-6" />
//                                 </div>

//                                 {/* Main Metric Title */}
//                                 <h4 className="relative z-20 text-2xl lg:text-3xl font-extrabold font-poppins text-gray-900 tracking-tight group-hover:text-[#a50808] transition-colors duration-300">
//                                     {st.label}
//                                 </h4>

//                                 {/* Subtitle pill badge */}
//                                 <span className="relative z-20 inline-flex items-center gap-1.5 text-[11px] font-extrabold tracking-wider uppercase text-gray-600 mt-2 bg-[#a50808]/5 px-3 py-1 rounded-full border border-[#a50808]/10 group-hover:bg-[#a50808]/10 group-hover:text-[#a50808] transition-colors duration-300">
//                                     <span className="w-1.5 h-1.5 rounded-full bg-[#a50808] animate-pulse" />
//                                     {st.sub}
//                                 </span>
//                             </div>
//                         );
//                     })}
//                 </div>
//             </section>

//             {/* SECTION 2: WHY WORK WITH DRYMATO WHOLESALE */}
//             <section className="bg-gradient-to-b from-[#a50808] via-[#be1212] to-[#8b0606] text-white pt-36 pb-36 relative overflow-hidden z-10 font-poppins">
//                 {/* Top Wave Divider */}
//                 <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-20">
//                     <svg className="relative block w-full h-[40px] md:h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M0,0 C150,90 350,20 500,60 C650,100 850,30 1000,70 C1100,90 1150,100 1200,80 L1200,0 L0,0 Z" fill="#fff8f0" />
//                     </svg>
//                 </div>

//                 {/* Subtle background grid pattern */}
//                 <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

//                 <div className="max-w-7xl mx-auto px-6 relative z-10">
//                     <div className="text-center mb-16 max-w-2xl mx-auto space-y-4 reveal-fade-up">
//                         <span className="text-white font-black tracking-widest text-[10px] uppercase bg-white/10 border border-white/20 px-4 py-2 rounded-full inline-block backdrop-blur-md font-poppins">
//                             The Drymato Advantage
//                         </span>
//                         <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold tracking-tight text-white uppercase">
//                             Why Choose Drymato Wholesale
//                         </h2>
//                         <p className="text-red-100/90 text-sm sm:text-base font-semibold leading-relaxed font-poppins">
//                             Designed to streamline your supply chain, preserve authentic flavor, and maximize your profitability.
//                         </p>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                         {WHOLESALE_BENEFITS.map((item, index) => {
//                             const IconComponent = item.icon;
//                             return (
//                                 <div
//                                     key={index}
//                                     className="reveal-card glass-shine-card relative flex flex-col items-start p-7 bg-white/95 backdrop-blur-md rounded-tl-[2.5rem] rounded-br-[2.5rem] rounded-tr-xl rounded-bl-xl border border-white/80 shadow-[0_10px_30px_rgba(0,0,0,0.06)] group-hover:bg-white/90 group-hover:backdrop-blur-xl group-hover:border-amber-300/60 group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.18)] hover:-translate-y-2 transition-all duration-500 group overflow-hidden"
//                                 >
//                                     {/* Expanding Yellow Water Drop Ripple Effect on Hover */}
//                                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-amber-400/30 rounded-full scale-0 group-hover:scale-[5] opacity-0 group-hover:opacity-35 transition-all duration-700 pointer-events-none ease-out" />

//                                     {/* Ambient Liquid Yellow Glow Orb */}
//                                     <div className="absolute -top-12 -right-12 w-36 h-36 bg-amber-400/25 rounded-full filter blur-2xl opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700 pointer-events-none" />

//                                     {/* Icon Badge */}
//                                     <div className="relative z-20 w-13 h-13 rounded-2xl bg-[#a50808]/10 border border-[#a50808]/15 flex items-center justify-center text-[#a50808] mb-4 group-hover:bg-[#a50808] group-hover:text-white group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 shadow-sm shrink-0">
//                                         <IconComponent className="w-5.5 h-5.5" />
//                                     </div>

//                                     {/* Title */}
//                                     <h3 className="relative z-20 text-lg sm:text-xl font-bold text-gray-900 font-poppins mb-2 leading-snug group-hover:text-[#a50808] transition-colors duration-300">
//                                         {item.title}
//                                     </h3>

//                                     {/* Description */}
//                                     <p className="relative z-20 text-gray-600 text-xs sm:text-sm leading-relaxed font-medium font-poppins">
//                                         {item.desc}
//                                     </p>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>

//                 {/* Bottom Wave Divider */}
//                 <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
//                     <svg className="relative block w-full h-[40px] md:h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M0,120 C150,30 350,100 500,60 C650,20 850,90 1000,50 C1100,30 1150,20 1200,40 L1200,120 L0,120 Z" fill="#fff8f0" />
//                     </svg>
//                 </div>
//             </section>

//             {/* SECTION 3: WHOLESALE PRODUCT CATALOG */}
//             <section className="max-w-7xl mx-auto px-6 py-20 relative z-10 font-poppins">
//                 <div className="text-center mb-12 max-w-2xl mx-auto space-y-3 reveal-fade-up">
//                     <span className="text-[#a50808] font-black tracking-widest text-xs uppercase bg-[#a50808]/5 border border-[#a50808]/15 px-3.5 py-1.5 rounded-full inline-block font-poppins">
//                         Bulk Catalog
//                     </span>
//                     <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-poppins tracking-tight uppercase">
//                         Wholesale Product Offerings
//                     </h2>
//                     <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-poppins">
//                         High-performance dehydrated produce and seasonings processed for long shelf-life and maximum yield.
//                     </p>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {WHOLESALE_PRODUCTS.map((prod) => (
//                         <div
//                             key={prod.id}
//                             className="reveal-card relative bg-white rounded-tl-[3.5rem] rounded-br-[3.5rem] rounded-tr-2xl rounded-bl-2xl border-2 border-orange-100/70 shadow-[0_10px_35px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_55px_rgba(165,8,8,0.12)] hover:border-[#a50808]/40 hover:-translate-y-2 transition-all duration-300 flex flex-col overflow-hidden group"
//                         >
//                             {/* Top Image Showcase Box */}
//                             <div className="relative w-full h-52 bg-gradient-to-br from-[#a50808]/5 via-[#fff8f0] to-[#a50808]/10 flex items-center justify-center p-5 border-b border-gray-100">
//                                 <Image
//                                     src={prod.image}
//                                     alt={prod.title}
//                                     width={170}
//                                     height={170}
//                                     className="object-contain max-h-44 group-hover:scale-110 transition-transform duration-500 ease-out filter drop-shadow-md"
//                                 />
//                                 <span className="absolute top-4 left-4 bg-[#a50808] text-white text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-white/30 shadow-sm font-poppins">
//                                     {prod.category}
//                                 </span>
//                             </div>

//                             {/* Card Details Body */}
//                             <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between font-poppins relative z-20 space-y-5">
//                                 <div>
//                                     {/* Title Box */}
//                                     <div className="min-h-[48px] flex items-center mb-3">
//                                         <h3 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900 leading-snug tracking-tight group-hover:text-[#a50808] transition-colors duration-300">
//                                             {prod.title}
//                                         </h3>
//                                     </div>

//                                     <p className="text-gray-600 text-sm leading-relaxed mb-5 font-poppins font-medium">
//                                         {prod.description}
//                                     </p>

//                                     {/* B2B Specs Dashboard Box */}
//                                     <div className="bg-[#fff8f0] border border-orange-100/90 p-4 rounded-2xl space-y-2.5 mb-2 font-poppins">
//                                         <div className="flex items-center justify-between text-xs sm:text-sm">
//                                             <span className="text-gray-500 font-bold uppercase tracking-wider text-xs">Standard MOQ</span>
//                                             <span className="bg-red-50 text-[#a50808] border border-rose-200 px-3 py-1 rounded-lg font-extrabold text-xs sm:text-sm shadow-2xs">
//                                                 {prod.moq}
//                                             </span>
//                                         </div>
//                                         <div className="flex items-center justify-between text-xs sm:text-sm pt-2 border-t border-orange-100/60">
//                                             <span className="text-gray-500 font-bold uppercase tracking-wider text-xs">Type</span>
//                                             <span className="font-bold text-gray-800 text-right max-w-[65%] truncate text-xs sm:text-sm" title={prod.packaging}>
//                                                 {prod.packaging}
//                                             </span>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Feature Badges */}
//                                 <div className="space-y-2 font-poppins">
//                                     {prod.features.map((feat, idx) => (
//                                         <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700 bg-white/80 border border-gray-100/80 px-3.5 py-1.5 rounded-xl shadow-2xs">
//                                             <svg className="w-4 h-4 text-[#a50808] shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
//                                             </svg>
//                                             <span className="truncate">{feat}</span>
//                                         </div>
//                                     ))}
//                                 </div>

//                                 {/* Action Button */}
//                                 <button
//                                     type="button"
//                                     onClick={(e) => scrollToQuoteForm(e, { productInterest: prod.title })}
//                                     className="group/btn relative overflow-hidden w-full bg-[#a50808] border-2 border-[#a50808] text-white py-3.5 px-5 rounded-tl-2xl rounded-br-2xl font-extrabold flex items-center justify-center gap-2.5 transition-all duration-300 shadow-md hover:shadow-lg active:scale-98 cursor-pointer z-10 font-poppins"
//                                 >
//                                     <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[125%] aspect-square rounded-t-[50%] bg-white translate-y-full transition-transform duration-[750ms] ease-in-out z-0 group-hover/btn:translate-y-[12%]" />

//                                     <span className="relative z-10 transition-colors duration-300 group-hover/btn:text-[#a50808] text-xs sm:text-sm tracking-widest font-black uppercase">
//                                         Request Specs & Pricing
//                                     </span>
//                                     <span className="relative z-10 w-6 h-6 bg-white text-[#a50808] rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 group-hover/btn:bg-[#a50808] group-hover/btn:text-white transform group-hover/btn:translate-x-1 shadow-sm">
//                                         →
//                                     </span>
//                                 </button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             {/* SECTION 4: PRIVATE LABELING & CUSTOM PACKAGING FEATURE */}
//             <section className="max-w-7xl mx-auto px-6 py-12 relative z-10 font-poppins">
//                 <div className="bg-gradient-to-br from-[#a50808] via-[#be1212] to-[#8b0606] rounded-[2.5rem] p-6 sm:p-10 lg:p-11 text-white relative overflow-hidden shadow-[0_20px_50px_rgba(165,8,8,0.22)] border border-white/20 reveal-fade-up">
//                     {/* Background Radial Glow Orbs */}
//                     <div className="absolute -top-24 -left-24 w-80 h-80 bg-white/10 rounded-full filter blur-3xl pointer-events-none" />
//                     <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-black/20 rounded-full filter blur-3xl pointer-events-none" />
//                     <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

//                     <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
//                         {/* Left Content Column */}
//                         <div className="lg:col-span-6 space-y-4">
//                             <span className="text-white font-black tracking-widest text-[11px] uppercase bg-white/15 border border-white/30 px-3.5 py-1.5 rounded-full inline-flex items-center gap-2 backdrop-blur-md shadow-sm font-poppins">
//                                 <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
//                                 Turnkey Retail Solutions
//                             </span>

//                             <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-poppins leading-tight text-white tracking-tight uppercase">
//                                 Private Labeling & Custom Retail Packaging
//                             </h3>

//                             <p className="text-red-100/90 text-xs sm:text-sm leading-relaxed font-semibold font-poppins">
//                                 Launch your own retail brand of gourmet sun-dried tomatoes and dehydrated spice powders. We manage every step from custom pouch printing, glass jar bottling, and barcode labeling to food safety compliance.
//                             </p>

//                             {/* Enhanced Glass Feature List Cards */}
//                             <div className="space-y-2.5 pt-1 font-poppins">
//                                 <div className="bg-white/10 border border-white/20 hover:bg-white/20 p-2.5 px-3.5 rounded-xl flex items-center gap-3 transition-all duration-300 backdrop-blur-md group/feat">
//                                     <span className="w-6 h-6 rounded-lg bg-white text-[#a50808] flex items-center justify-center font-black text-xs shrink-0 shadow-sm group-hover/feat:scale-105 transition-transform">✓</span>
//                                     <span className="text-xs font-bold text-white">Custom Pouch Weighting (100g, 250g, 500g, 1kg)</span>
//                                 </div>

//                                 <div className="bg-white/10 border border-white/20 hover:bg-white/20 p-2.5 px-3.5 rounded-xl flex items-center gap-3 transition-all duration-300 backdrop-blur-md group/feat">
//                                     <span className="w-6 h-6 rounded-lg bg-white text-[#a50808] flex items-center justify-center font-black text-xs shrink-0 shadow-sm group-hover/feat:scale-105 transition-transform">✓</span>
//                                     <span className="text-xs font-bold text-white">Glass Jar Bottling & Custom Label Application</span>
//                                 </div>

//                                 <div className="bg-white/10 border border-white/20 hover:bg-white/20 p-2.5 px-3.5 rounded-xl flex items-center gap-3 transition-all duration-300 backdrop-blur-md group/feat">
//                                     <span className="w-6 h-6 rounded-lg bg-white text-[#a50808] flex items-center justify-center font-black text-xs shrink-0 shadow-sm group-hover/feat:scale-105 transition-transform">✓</span>
//                                     <span className="text-xs font-bold text-white">Full International Export & Barcode Compliance</span>
//                                 </div>
//                             </div>

//                             {/* Signature Action Button */}
//                             <div className="pt-1">
//                                 <button
//                                     type="button"
//                                     onClick={(e) => scrollToQuoteForm(e, { packagingFormat: "Private Label Pouch" })}
//                                     className="group/btn relative overflow-hidden inline-flex bg-white text-[#a50808] border-2 border-white py-3 px-6 rounded-tl-xl rounded-br-xl font-black items-center justify-center gap-2.5 transition-all duration-300 shadow-lg hover:bg-[#a50808] hover:text-white active:scale-98 cursor-pointer font-poppins"
//                                 >
//                                     <span className="relative z-10 text-xs tracking-widest font-black uppercase">
//                                         Inquire for Private Labeling
//                                     </span>
//                                     <span className="relative z-10 w-5 h-5 bg-[#a50808] text-white rounded-full flex items-center justify-center font-bold text-[10px] transition-all duration-300 group-hover/btn:bg-white group-hover/btn:text-[#a50808] transform group-hover/btn:translate-x-1 shadow-xs">
//                                         →
//                                     </span>
//                                 </button>
//                             </div>
//                         </div>

//                         {/* Right Image Showcase Column */}
//                         <div className="lg:col-span-6 relative">
//                             <div className="relative h-[260px] sm:h-[320px] lg:h-[340px] rounded-2xl overflow-hidden border-2 border-white/30 shadow-xl group">
//                                 <Image
//                                     src="/wholesale_private_label.png"
//                                     alt="Drymato Private Label Custom Packaging"
//                                     fill
//                                     className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
//                                 />

//                                 {/* Ambient Overlay Badge over Image */}
//                                 <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full text-white text-[11px] font-bold font-poppins flex items-center gap-1.5 shadow-md">
//                                     <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
//                                     Custom Labeling & Bottling Ready
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* SECTION 5: BUSINESS SECTORS WE SUPPORT */}
//             {/* <section className="bg-gradient-to-br from-[#faf6f0] to-[#f5eee6] py-24 relative border-y border-orange-100/40 z-10 font-poppins">
//                 <div className="max-w-7xl mx-auto px-6">
//                     <div className="text-center mb-16 max-w-2xl mx-auto space-y-4 reveal-fade-up">
//                         <span className="text-[#a50808] font-black tracking-widest text-xs uppercase bg-[#a50808]/5 border border-[#a50808]/15 px-3.5 py-1.5 rounded-full inline-block font-poppins">
//                             Business Segments
//                         </span>
//                         <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-poppins tracking-tight uppercase">
//                             Who We Partner With
//                         </h2>
//                         <p className="text-gray-600 text-base leading-relaxed font-poppins">
//                             Tailored supply contracts and customized packaging for every stage of the food industry.
//                         </p>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                         {BUSINESS_MODELS.map((biz, idx) => {
//                             const IconComp = biz.icon;
//                             return (
//                                 <div
//                                     key={idx}
//                                     className="reveal-card glass-shine-card relative flex flex-col justify-between p-7 bg-gradient-to-b from-white via-white to-[#fffbf7] rounded-tl-[3.5rem] rounded-br-[3.5rem] rounded-tr-2xl rounded-bl-2xl border-2 border-orange-100/70 shadow-[0_12px_35px_rgba(0,0,0,0.04)] group-hover:shadow-[0_25px_60px_rgba(165,8,8,0.18)] group-hover:border-amber-300/60 hover:-translate-y-2 transition-all duration-500 group overflow-hidden"
//                                 >
//                                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-amber-400/25 rounded-full scale-0 group-hover:scale-[5] opacity-0 group-hover:opacity-30 transition-all duration-700 pointer-events-none ease-out" />

//                                     <div className="absolute -top-12 -right-12 w-36 h-36 bg-amber-400/20 rounded-full filter blur-2xl opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700 pointer-events-none" />

//                                     <div>
//                                         <div className="relative z-20 w-15 h-15 rounded-2xl bg-gradient-to-br from-[#a50808] to-[#850606] text-white flex items-center justify-center mb-6 shadow-[0_10px_25px_rgba(165,8,8,0.25)] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shrink-0">
//                                             <IconComp className="w-6.5 h-6.5" />
//                                         </div>

//                                         <div className="relative z-20 min-h-[52px] flex items-center mb-3">
//                                             <h3 className="text-lg font-bold font-poppins text-gray-900 leading-snug tracking-tight group-hover:text-[#a50808] transition-colors duration-300">
//                                                 {biz.title}
//                                             </h3>
//                                         </div>

//                                         <p className="relative z-20 text-gray-600 text-xs sm:text-sm leading-relaxed font-medium font-poppins mb-6">
//                                             {biz.desc}
//                                         </p>
//                                     </div>

//                                     <div className="relative z-20 pt-3 border-t border-orange-100/60">
//                                         <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold tracking-wider uppercase text-[#a50808] bg-[#a50808]/5 border border-[#a50808]/15 px-3 py-1 rounded-full group-hover:bg-[#a50808] group-hover:text-white transition-all duration-300 font-poppins">
//                                             <span className="w-1.5 h-1.5 rounded-full bg-[#a50808] group-hover:bg-white animate-pulse" />
//                                             {biz.tag}
//                                         </span>
//                                     </div>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </section> */}

//             {/* SECTION 6: INTERACTIVE B2B QUOTE REQUEST FORM */}
//             <section id="quote-form" className="bg-gradient-to-b from-[#a50808] via-[#be1212] to-[#8b0606] text-white py-28 relative overflow-hidden z-10 font-poppins">
//                 {/* Top Wave Divider */}
//                 <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-20">
//                     <svg className="relative block w-full h-[40px] md:h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M0,0 C150,90 350,20 500,60 C650,100 850,30 1000,70 C1100,90 1150,100 1200,80 L1200,0 L0,0 Z" fill="#fff8f0" />
//                     </svg>
//                 </div>

//                 {/* Subtle background grid pattern */}
//                 <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

//                 <div className="max-w-7xl mx-auto px-6 relative z-10">
//                     <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
//                         {/* Left Side Info - Crisp White Text */}
//                         <div className="lg:col-span-5 space-y-6 reveal-fade-left">
//                             <span className="text-white font-black tracking-widest text-xs uppercase bg-white/15 border border-white/30 px-4 py-2 rounded-full inline-flex items-center gap-2 backdrop-blur-md shadow-sm font-poppins">
//                                 <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
//                                 Get Direct Pricing
//                             </span>

//                             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-poppins text-white leading-tight uppercase tracking-tight">
//                                 Request Wholesale Quote & Sample Kit
//                             </h2>

//                             <p className="text-red-100/90 text-sm sm:text-base leading-relaxed font-semibold font-poppins">
//                                 Fill out the form with your required products, volumes, and packaging specifications. Our wholesale B2B desk will provide factory pricing within 24 hours.
//                             </p>

//                             <div className="space-y-4 pt-4 border-t border-white/20 font-poppins">
//                                 <div className="flex items-center gap-4 bg-white/10 p-3.5 rounded-2xl border border-white/20 backdrop-blur-md">
//                                     <div className="w-10 h-10 rounded-xl bg-white text-[#a50808] flex items-center justify-center font-black text-base shrink-0 shadow-md">
//                                         ✓
//                                     </div>
//                                     <div>
//                                         <h4 className="font-bold text-sm text-white font-poppins">Complimentary Sample Kits</h4>
//                                         <p className="text-xs text-red-100/80 font-poppins">Test product quality, color index & rehydration in your kitchen.</p>
//                                     </div>
//                                 </div>

//                                 <div className="flex items-center gap-4 bg-white/10 p-3.5 rounded-2xl border border-white/20 backdrop-blur-md">
//                                     <div className="w-10 h-10 rounded-xl bg-white text-[#a50808] flex items-center justify-center font-black text-base shrink-0 shadow-md">
//                                         ✓
//                                     </div>
//                                     <div>
//                                         <h4 className="font-bold text-sm text-white font-poppins">Custom Contract Terms</h4>
//                                         <p className="text-xs text-red-100/80 font-poppins">Fixed annual pricing for high-volume commercial buyers.</p>
//                                     </div>
//                                 </div>

//                                 <div className="flex items-center gap-4 bg-white/10 p-3.5 rounded-2xl border border-white/20 backdrop-blur-md">
//                                     <div className="w-10 h-10 rounded-xl bg-white text-[#a50808] flex items-center justify-center font-black text-base shrink-0 shadow-md">
//                                         ✓
//                                     </div>
//                                     <div>
//                                         <h4 className="font-bold text-sm text-white font-poppins">Dedicated B2B Manager</h4>
//                                         <p className="text-xs text-red-100/80 font-poppins">Direct phone & WhatsApp support for seamless re-orders.</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Right Side Form Box - Pristine Solid White Box */}
//                         <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-[2.5rem] border-2 border-white shadow-[0_25px_70px_rgba(0,0,0,0.3)] reveal-fade-right relative font-poppins text-gray-900 overflow-hidden">
//                             {/* Decorative B2B Form Header Pill */}
//                             <div className="flex items-center justify-between pb-6 mb-6 border-b border-gray-100">
//                                 <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#a50808] bg-[#a50808]/5 border border-[#a50808]/15 px-3.5 py-1.5 rounded-full inline-flex items-center gap-2 font-poppins">
//                                     <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
//                                     B2B Commercial Quote Desk
//                                 </span>
//                                 <span className="text-xs text-gray-600 font-bold hidden sm:block font-poppins">
//                                     ⚡ 24H Price Guarantee
//                                 </span>
//                             </div>

//                             {isSubmitted ? (
//                                 <div className="text-center py-12 space-y-4 font-poppins">
//                                     <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold shadow-md">
//                                         ✓
//                                     </div>
//                                     <h3 className="text-2xl font-bold font-poppins text-gray-900">Wholesale Request Received!</h3>
//                                     <p className="text-gray-600 text-sm max-w-md mx-auto leading-relaxed font-poppins font-medium">
//                                         Thank you! Our B2B commercial sales desk has received your inquiry and will contact you within 24 hours with pricing and sample options.
//                                     </p>
//                                     <button
//                                         onClick={() => setIsSubmitted(false)}
//                                         className="mt-4 bg-[#a50808] text-white px-6 py-3 rounded-full font-extrabold text-xs uppercase tracking-wider hover:bg-[#850606] transition-colors font-poppins shadow-md cursor-pointer"
//                                     >
//                                         Submit Another Inquiry
//                                     </button>
//                                 </div>
//                             ) : (
//                                 <form onSubmit={handleSubmit} noValidate className="space-y-5 font-poppins">
//                                     <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
//                                         <div>
//                                             <label className="block text-[11px] font-extrabold uppercase tracking-wider text-gray-700 mb-2 flex items-center justify-between font-poppins">
//                                                 <span className="flex items-center gap-1.5">
//                                                     <FaUser className="text-[#a50808] w-3 h-3" />
//                                                     Full Name *
//                                                 </span>
//                                             </label>
//                                             <input
//                                                 type="text"
//                                                 value={formData.fullName}
//                                                 onChange={(e) => handleChange("fullName", e.target.value)}
//                                                 onBlur={() => handleBlur("fullName")}
//                                                 placeholder="e.g. Rahul Sharma"
//                                                 className={`w-full px-4 py-3.5 rounded-2xl text-gray-900 placeholder:text-gray-400 text-sm font-semibold transition-all duration-300 outline-none font-poppins shadow-inner ${
//                                                     touched.fullName && errors.fullName
//                                                         ? "bg-red-50/60 border-2 border-red-500 focus:ring-4 focus:ring-red-100"
//                                                         : "bg-slate-50/80 hover:bg-slate-50 border border-slate-200/90 focus:bg-white focus:border-[#a50808] focus:ring-4 focus:ring-[#a50808]/15"
//                                                 }`}
//                                             />
//                                             {touched.fullName && errors.fullName && (
//                                                 <p className="text-red-600 text-[11px] font-bold mt-1.5 flex items-center gap-1 font-poppins">
//                                                     <FaExclamationCircle className="w-3 h-3 shrink-0" />
//                                                     {errors.fullName}
//                                                 </p>
//                                             )}
//                                         </div>

//                                         <div>
//                                             <label className="block text-[11px] font-extrabold uppercase tracking-wider text-gray-700 mb-2 flex items-center justify-between font-poppins">
//                                                 <span className="flex items-center gap-1.5">
//                                                     <FaBuilding className="text-[#a50808] w-3 h-3" />
//                                                     Company Name *
//                                                 </span>
//                                             </label>
//                                             <input
//                                                 type="text"
//                                                 value={formData.companyName}
//                                                 onChange={(e) => handleChange("companyName", e.target.value)}
//                                                 onBlur={() => handleBlur("companyName")}
//                                                 placeholder="e.g. Apex Gourmet Foods Ltd"
//                                                 className={`w-full px-4 py-3.5 rounded-2xl text-gray-900 placeholder:text-gray-400 text-sm font-semibold transition-all duration-300 outline-none font-poppins shadow-inner ${
//                                                     touched.companyName && errors.companyName
//                                                         ? "bg-red-50/60 border-2 border-red-500 focus:ring-4 focus:ring-red-100"
//                                                         : "bg-slate-50/80 hover:bg-slate-50 border border-slate-200/90 focus:bg-white focus:border-[#a50808] focus:ring-4 focus:ring-[#a50808]/15"
//                                                 }`}
//                                             />
//                                             {touched.companyName && errors.companyName && (
//                                                 <p className="text-red-600 text-[11px] font-bold mt-1.5 flex items-center gap-1 font-poppins">
//                                                     <FaExclamationCircle className="w-3 h-3 shrink-0" />
//                                                     {errors.companyName}
//                                                 </p>
//                                             )}
//                                         </div>

//                                         <div>
//                                             <label className="block text-[11px] font-extrabold uppercase tracking-wider text-gray-700 mb-2 flex items-center justify-between font-poppins">
//                                                 <span className="flex items-center gap-1.5">
//                                                     <FaFileInvoice className="text-[#a50808] w-3 h-3" />
//                                                     GST Number / Tax ID
//                                                 </span>
//                                             </label>
//                                             <input
//                                                 type="text"
//                                                 value={formData.gstNumber}
//                                                 onChange={(e) => handleChange("gstNumber", e.target.value)}
//                                                 onBlur={() => handleBlur("gstNumber")}
//                                                 placeholder="e.g. 24AAAAA0000A1Z5"
//                                                 className={`w-full px-4 py-3.5 rounded-2xl text-gray-900 placeholder:text-gray-400 text-sm font-semibold transition-all duration-300 outline-none font-poppins shadow-inner uppercase ${
//                                                     touched.gstNumber && errors.gstNumber
//                                                         ? "bg-red-50/60 border-2 border-red-500 focus:ring-4 focus:ring-red-100"
//                                                         : "bg-slate-50/80 hover:bg-slate-50 border border-slate-200/90 focus:bg-white focus:border-[#a50808] focus:ring-4 focus:ring-[#a50808]/15"
//                                                 }`}
//                                             />
//                                             {touched.gstNumber && errors.gstNumber && (
//                                                 <p className="text-red-600 text-[11px] font-bold mt-1.5 flex items-center gap-1 font-poppins">
//                                                     <FaExclamationCircle className="w-3 h-3 shrink-0" />
//                                                     {errors.gstNumber}
//                                                 </p>
//                                             )}
//                                         </div>
//                                     </div>

//                                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                                         <div>
//                                             <label className="block text-[11px] font-extrabold uppercase tracking-wider text-gray-700 mb-2 flex items-center justify-between font-poppins">
//                                                 <span className="flex items-center gap-1.5">
//                                                     <FaEnvelope className="text-[#a50808] w-3 h-3" />
//                                                     Email Address *
//                                                 </span>
//                                             </label>
//                                             <input
//                                                 type="email"
//                                                 value={formData.email}
//                                                 onChange={(e) => handleChange("email", e.target.value)}
//                                                 onBlur={() => handleBlur("email")}
//                                                 placeholder="e.g. purchasing@company.com"
//                                                 className={`w-full px-4 py-3.5 rounded-2xl text-gray-900 placeholder:text-gray-400 text-sm font-semibold transition-all duration-300 outline-none font-poppins shadow-inner ${
//                                                     touched.email && errors.email
//                                                         ? "bg-red-50/60 border-2 border-red-500 focus:ring-4 focus:ring-red-100"
//                                                         : "bg-slate-50/80 hover:bg-slate-50 border border-slate-200/90 focus:bg-white focus:border-[#a50808] focus:ring-4 focus:ring-[#a50808]/15"
//                                                 }`}
//                                             />
//                                             {touched.email && errors.email && (
//                                                 <p className="text-red-600 text-[11px] font-bold mt-1.5 flex items-center gap-1 font-poppins">
//                                                     <FaExclamationCircle className="w-3 h-3 shrink-0" />
//                                                     {errors.email}
//                                                 </p>
//                                             )}
//                                         </div>

//                                         <div>
//                                             <label className="block text-[11px] font-extrabold uppercase tracking-wider text-gray-700 mb-2 flex items-center justify-between font-poppins">
//                                                 <span className="flex items-center gap-1.5">
//                                                     <FaPhone className="text-[#a50808] w-3 h-3" />
//                                                     Phone / WhatsApp Number *
//                                                 </span>
//                                             </label>
//                                             <input
//                                                 type="tel"
//                                                 value={formData.phone}
//                                                 onChange={(e) => handleChange("phone", e.target.value)}
//                                                 onBlur={() => handleBlur("phone")}
//                                                 placeholder="e.g. +91 9876543210"
//                                                 className={`w-full px-4 py-3.5 rounded-2xl text-gray-900 placeholder:text-gray-400 text-sm font-semibold transition-all duration-300 outline-none font-poppins shadow-inner ${
//                                                     touched.phone && errors.phone
//                                                         ? "bg-red-50/60 border-2 border-red-500 focus:ring-4 focus:ring-red-100"
//                                                         : "bg-slate-50/80 hover:bg-slate-50 border border-slate-200/90 focus:bg-white focus:border-[#a50808] focus:ring-4 focus:ring-[#a50808]/15"
//                                                 }`}
//                                             />
//                                             {touched.phone && errors.phone && (
//                                                 <p className="text-red-600 text-[11px] font-bold mt-1.5 flex items-center gap-1 font-poppins">
//                                                     <FaExclamationCircle className="w-3 h-3 shrink-0" />
//                                                     {errors.phone}
//                                                 </p>
//                                             )}
//                                         </div>
//                                     </div>

//                                     <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//                                         <div>
//                                             <label className="block text-[11px] font-extrabold uppercase tracking-wider text-gray-700 mb-2 flex items-center gap-1.5 font-poppins">
//                                                 <FaBoxes className="text-[#a50808] w-3 h-3" />
//                                                 Product Interest
//                                             </label>
//                                             <select
//                                                 value={formData.productInterest}
//                                                 onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
//                                                 className="w-full px-3 py-3.5 rounded-2xl bg-slate-50/80 hover:bg-slate-50 border border-slate-200/90 text-gray-900 text-xs font-bold transition-all duration-300 focus:bg-white focus:border-[#a50808] focus:ring-4 focus:ring-[#a50808]/15 outline-none font-poppins cursor-pointer shadow-inner"
//                                             >
//                                                 <option value="Sun-Dried Tomatoes">Sun-Dried Tomatoes</option>
//                                                 <option value="Marinated Sun-Dried Tomatoes">Marinated Tomatoes</option>
//                                                 <option value="Dehydrated Onion & Powder">Onion & Powder</option>
//                                                 <option value="Dehydrated Garlic & Powder">Garlic & Powder</option>
//                                                 <option value="Pure Tomato Powder">Tomato Powder</option>
//                                                 <option value="Mixed Dehydrated Veggies">Mixed Veggie Blends</option>
//                                                 <option value="Full Wholesale Range">Full Range</option>
//                                             </select>
//                                         </div>
//                                         <div>
//                                             <label className="block text-[11px] font-extrabold uppercase tracking-wider text-gray-700 mb-2 flex items-center gap-1.5 font-poppins">
//                                                 <FaBoxOpen className="text-[#a50808] w-3 h-3" />
//                                                 Monthly Volume
//                                             </label>
//                                             <select
//                                                 value={formData.estimatedVolume}
//                                                 onChange={(e) => setFormData({ ...formData, estimatedVolume: e.target.value })}
//                                                 className="w-full px-3 py-3.5 rounded-2xl bg-slate-50/80 hover:bg-slate-50 border border-slate-200/90 text-gray-900 text-xs font-bold transition-all duration-300 focus:bg-white focus:border-[#a50808] focus:ring-4 focus:ring-[#a50808]/15 outline-none font-poppins cursor-pointer shadow-inner"
//                                             >
//                                                 <option value="50 KG - 250 KG">50 KG – 250 KG</option>
//                                                 <option value="250 KG - 1 Ton">250 KG – 1 Ton</option>
//                                                 <option value="1 Ton - 5 Tons">1 Ton – 5 Tons</option>
//                                                 <option value="5+ Tons (Container)">5+ Tons (Container)</option>
//                                             </select>
//                                         </div>
//                                         <div>
//                                             <label className="block text-[11px] font-extrabold uppercase tracking-wider text-gray-700 mb-2 flex items-center gap-1.5 font-poppins">
//                                                 <FaTags className="text-[#a50808] w-3 h-3" />
//                                                 Packaging
//                                             </label>
//                                             <select
//                                                 value={formData.packagingFormat}
//                                                 onChange={(e) => setFormData({ ...formData, packagingFormat: e.target.value })}
//                                                 className="w-full px-3 py-3.5 rounded-2xl bg-slate-50/80 hover:bg-slate-50 border border-slate-200/90 text-gray-900 text-xs font-bold transition-all duration-300 focus:bg-white focus:border-[#a50808] focus:ring-4 focus:ring-[#a50808]/15 outline-none font-poppins cursor-pointer shadow-inner"
//                                             >
//                                                 <option value="5 KG Chef Pack">5 KG Chef Vacuum Bag</option>
//                                                 <option value="25 KG Bulk Carton">25 KG Bulk Carton</option>
//                                                 <option value="Glass Jars (Foodservice)">Glass Jars</option>
//                                                 <option value="Private Label Pouch">Private Label Pouch</option>
//                                             </select>
//                                         </div>
//                                     </div>

//                                     <div>
//                                         <label className="block text-[11px] font-extrabold uppercase tracking-wider text-gray-700 mb-2 flex items-center gap-1.5 font-poppins">
//                                             <FaCommentDots className="text-[#a50808] w-3 h-3" />
//                                             Specific Requirements / Custom Specs
//                                         </label>
//                                         <textarea
//                                             rows={3}
//                                             value={formData.message}
//                                             onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                                             placeholder="Please detail any mesh size, moisture percentage, target delivery date, or custom recipe requirements..."
//                                             className="w-full px-4 py-3.5 rounded-2xl bg-slate-50/80 hover:bg-slate-50 border border-slate-200/90 text-gray-900 placeholder:text-gray-400 text-sm font-semibold transition-all duration-300 focus:bg-white focus:border-[#a50808] focus:ring-4 focus:ring-[#a50808]/15 outline-none font-poppins shadow-inner"
//                                         />
//                                     </div>

//                                     {submitError && (
//                                         <div className="bg-red-50 border-2 border-red-200 text-red-700 p-4 rounded-2xl text-xs font-bold font-poppins flex items-center gap-2">
//                                             <FaExclamationCircle className="w-4 h-4 text-red-600 shrink-0" />
//                                             <span>{submitError}</span>
//                                         </div>
//                                     )}

//                                     <button
//                                         type="submit"
//                                         disabled={isSubmitting}
//                                         className="w-full bg-gradient-to-r from-[#a50808] via-[#be1212] to-[#850606] hover:from-[#850606] hover:to-[#a50808] disabled:opacity-85 text-white py-4 px-8 rounded-tl-2xl rounded-br-2xl rounded-tr-lg rounded-bl-lg font-black text-sm uppercase tracking-widest transition-all duration-300 shadow-[0_10px_30px_rgba(165,8,8,0.35)] hover:shadow-[0_15px_40px_rgba(165,8,8,0.5)] active:scale-98 cursor-pointer flex items-center justify-center gap-3 font-poppins mt-2"
//                                     >
//                                         {isSubmitting ? (
//                                             <span className="flex items-center justify-center gap-2.5">
//                                                 <FaSpinner className="w-4 h-4 animate-spin text-white" />
//                                                 <span>Processing Request...</span>
//                                             </span>
//                                         ) : (
//                                             <>
//                                                 <span>Submit Wholesale Request</span>
//                                                 <FaPaperPlane className="w-4 h-4" />
//                                             </>
//                                         )}
//                                     </button>
//                                 </form>
//                             )}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Bottom Wave Divider */}
//                 <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
//                     <svg className="relative block w-full h-[40px] md:h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M0,120 C150,30 350,100 500,60 C650,20 850,90 1000,50 C1100,30 1150,20 1200,40 L1200,120 L0,120 Z" fill="#fff8f0" />
//                     </svg>
//                 </div>
//             </section>

//             {/* SECTION 7: FREQUENTLY ASKED QUESTIONS */}
//             <section className="bg-gradient-to-br from-[#fff8f0] via-[#fffbf7] to-[#f5eee6] py-24 relative z-10 font-poppins">
//                 <div className="max-w-4xl mx-auto px-6">
//                     <div className="text-center mb-16 space-y-4 reveal-fade-up">
//                         <span className="text-[#a50808] font-black tracking-widest text-xs uppercase bg-[#a50808]/5 border border-[#a50808]/15 px-3.5 py-1.5 rounded-full inline-block font-poppins">
//                             Wholesale FAQs
//                         </span>
//                         <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-poppins tracking-tight uppercase">
//                             Frequently Asked Questions
//                         </h2>
//                         <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-poppins">
//                             Have questions about MOQ, sample kits, or private labeling? Find quick answers below.
//                         </p>
//                     </div>

//                     <div className="space-y-4">
//                         {FAQS.map((faq, idx) => {
//                             const isOpen = openFaq === idx;
//                             return (
//                                 <div
//                                     key={idx}
//                                     className={`reveal-card glass-shine-card relative rounded-tl-3xl rounded-br-3xl rounded-tr-xl rounded-bl-xl border-2 transition-all duration-500 overflow-hidden group ${isOpen
//                                         ? "bg-white border-[#a50808]/40 shadow-[0_20px_50px_rgba(165,8,8,0.12)]"
//                                         : "bg-gradient-to-b from-white via-white to-[#fffbf7] border-orange-100/70 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(165,8,8,0.1)] hover:border-amber-300/60"
//                                         }`}
//                                 >
//                                     {/* Expanding Yellow Water Drop Ripple Effect on Hover */}
//                                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-amber-400/25 rounded-full scale-0 group-hover:scale-[5] opacity-0 group-hover:opacity-30 transition-all duration-700 pointer-events-none ease-out" />

//                                     {/* Ambient Liquid Yellow Glow Orb */}
//                                     <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-400/20 rounded-full filter blur-2xl opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700 pointer-events-none" />

//                                     <button
//                                         onClick={() => setOpenFaq(isOpen ? -1 : idx)}
//                                         className="relative z-20 w-full px-7 py-5.5 flex items-center justify-between text-left focus:outline-none cursor-pointer gap-4"
//                                     >
//                                         <div className="flex items-center gap-4">
//                                             <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#a50808] to-[#850606] text-white flex items-center justify-center font-extrabold text-xs shrink-0 shadow-sm">
//                                                 0{idx + 1}
//                                             </span>
//                                             <span className="font-poppins font-bold text-gray-900 text-base sm:text-lg group-hover:text-[#a50808] transition-colors duration-300">
//                                                 {faq.question}
//                                             </span>
//                                         </div>
//                                         <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 shrink-0 ${isOpen ? "bg-[#a50808] text-white rotate-180 shadow-md" : "bg-[#a50808]/10 text-[#a50808] group-hover:bg-[#a50808] group-hover:text-white"
//                                             }`}>
//                                             <FaChevronDown className="w-4 h-4" />
//                                         </div>
//                                     </button>

//                                     {isOpen && (
//                                         <div className="relative z-20 px-7 pb-6 pt-4 text-gray-600 text-sm leading-relaxed font-medium border-t border-orange-100/70 font-poppins bg-orange-50/20">
//                                             {faq.answer}
//                                         </div>
//                                     )}
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }






"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { toast } from "react-hot-toast";
import {
    FaBoxes,
    FaTags,
    FaCheckCircle,
    FaIndustry,
    FaGlobe,
    FaHandshake,
    FaBoxOpen,
    FaExclamationCircle,
    FaBox,
    FaAppleAlt,
    FaCarrot,
    FaLeaf,
    FaMortarPestle,
    FaSeedling,
    FaCogs,
    FaSun,
    FaTruck,
    FaInfoCircle,
} from "react-icons/fa";
import { Leaf } from "lucide-react";
import { useRouter } from "next/navigation";

const WHOLESALE_CATEGORIES = [
    {
        id: "fruits",
        title: "Fruits",
        icon: FaAppleAlt,
        textColor: "#243822",
        descColor: "#4f5b4b",
        bgColor: "#f3e8df",
        iconColor: "#a50808",
        imageUrl: "/images/categories/dried-fruits.png",
        imageAlt: "Drymato dehydrated fruits",
        items: "Lemon • Pineapple • Orange • Guava • Mango • Banana • Apple & more",
    },
    {
        id: "vegetables",
        title: "Vegetables",
        icon: FaCarrot,
        textColor: "#243822",
        descColor: "#4f5b4b",
        bgColor: "#e5eadf",
        iconColor: "#5f6b3f",
        imageUrl: "/images/categories/dried-vegetables.png",
        imageAlt: "Drymato dehydrated vegetables",
        items: "Tomato • Onion • Garlic • Carrot • Beetroot • Okra • Mushroom & more",
    },
    {
        id: "herbs",
        title: "Herbs & Greens",
        icon: FaLeaf,
        textColor: "#243822",
        descColor: "#4f5b4b",
        bgColor: "#e1e9e5",
        iconColor: "#527263",
        imageUrl: "/images/categories/fruit-powder.png",
        imageAlt: "Drymato dehydrated herbs and greens",
        items: "Mint • Coriander • Basil • Oregano • Rosemary • Thyme & more",
    },
    {
        id: "powders",
        title: "Powders",
        icon: FaMortarPestle,
        textColor: "#243822",
        descColor: "#4f5b4b",
        bgColor: "#f0e7d2",
        iconColor: "#8b7040",
        imageUrl: "/images/categories/vegetable-powder.png",
        imageAlt: "Drymato dehydrated ingredient powders",
        items: "Tomato • Onion • Garlic • Ginger • Beetroot • Spinach • Coriander & more",
    },
];

/* ================= NEW: 05. PRIVATE LABEL FLOW ================= */
const PRIVATE_LABEL_FLOW = [
    { title: "Product Sourcing", icon: FaSeedling, bg: "#f3e8df", border: "#d8c1b3", accent: "#a50808" },
    { title: "Processing", icon: FaCogs, bg: "#e5eadf", border: "#c7d0bd", accent: "#5f6b3f" },
    { title: "Dehydration", icon: FaSun, bg: "#f0e7d2", border: "#d8c8a8", accent: "#8b7040" },
    { title: "Packaging", icon: FaBoxOpen, bg: "#e9e1ed", border: "#cfc2d5", accent: "#75627d" },
    { title: "Custom Label", icon: FaTags, bg: "#e1e9e5", border: "#bfd0c7", accent: "#527263" },
    { title: "Bulk Supply", icon: FaTruck, bg: "#243822", border: "#243822", accent: "#f0e7d2", dark: true },
];

/* ================= 06. CUSTOM REQUIREMENTS ================= */
const CUSTOM_REQUIREMENT_ITEMS = [
    "Cut Size",
    "Format",
    "Moisture Target",
    "Mesh Size",
    "Quantity",
    "Packaging",
    "Application",
];

export default function WholesaleClient() {
    const [openFaq, setOpenFaq] = useState(0);
    const [formData, setFormData] = useState({
        fullName: "",
        companyName: "",
        gstNumber: "",
        email: "",
        phone: "",
        productInterest: "Sun-Dried Tomatoes",
        estimatedVolume: "50 KG - 250 KG",
        packagingFormat: "5 KG Chef Pack",
        message: ""
    });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [toastBanner, setToastBanner] = useState(null);

    // Section 6 refs
    const customSectionRef = useRef(null);
    const customLeftRef = useRef(null);
    const customRightRef = useRef(null);
    const customTreeRef = useRef(null);
    const customTextRef = useRef(null);
    const customTomato1Ref = useRef(null);
    const customTomato2Ref = useRef(null);
    // Section 4 refs
    const bulkSectionRef = useRef(null);
    const bulkLeftRef = useRef(null);
    const bulkRightRef = useRef(null);
    const triggerToastBanner = (type, message) => {
        setToastBanner({ type, message });
        if (type === "success") {
            toast.success(message);
        } else {
            toast.error(message);
        }
        setTimeout(() => {
            setToastBanner(null);
        }, 7000);
    };

    const scrollToQuoteForm = (e, customFieldUpdate = null) => {
        if (e) e.preventDefault();

        if (customFieldUpdate) {
            setFormData((prev) => ({ ...prev, ...customFieldUpdate }));
        }

        const el = document.getElementById("quote-form");
        if (el) {
            const yOffset = -70;
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    const validateField = (name, value) => {
        let error = "";
        const val = (value || "").trim();

        if (name === "fullName") {
            if (!val) {
                error = "Full name is required.";
            } else if (val.length < 2) {
                error = "Name must be at least 2 characters.";
            }
        }
        if (name === "companyName") {
            if (!val) {
                error = "Company / Restaurant name is required.";
            } else if (val.length < 2) {
                error = "Company name must be at least 2 characters.";
            }
        }
        if (name === "email") {
            if (!val) {
                error = "Email address is required.";
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
                error = "Please enter a valid email address.";
            }
        }
        if (name === "phone") {
            if (!val) {
                error = "Phone / WhatsApp number is required.";
            } else if (!/^[+0-9\s-]{10,15}$/.test(val)) {
                error = "Please enter a valid phone number (10-15 digits).";
            }
        }
        if (name === "gstNumber" && val) {
            const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
            if (!gstRegex.test(val.toUpperCase())) {
                error = "Invalid GST format (e.g. 24AAAAA0000A1Z5).";
            }
        }
        return error;
    };

    const validateForm = () => {
        const newErrors = {};
        ["fullName", "companyName", "email", "phone", "gstNumber"].forEach((field) => {
            const err = validateField(field, formData[field] || "");
            if (err) newErrors[field] = err;
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleBlur = (field) => {
        setTouched((prev) => ({ ...prev, [field]: true }));
        const error = validateField(field, formData[field] || "");
        setErrors((prev) => ({ ...prev, [field]: error }));
    };

    const handleChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        if (touched[field]) {
            const error = validateField(field, value);
            setErrors((prev) => ({ ...prev, [field]: error }));
        }
    };

    const [submitError, setSubmitError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setTouched({
            fullName: true,
            companyName: true,
            gstNumber: true,
            email: true,
            phone: true
        });

        if (!validateForm()) {
            triggerToastBanner("error", "Please correct the highlighted errors in the form.");
            return;
        }

        setIsSubmitting(true);
        setSubmitError("");

        try {
            const response = await fetch("/api/wholesale", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (data.success) {
                setIsSubmitted(true);
                triggerToastBanner("success", "Wholesale B2B Inquiry Sent! Our commercial team will contact you within 24 hours.");
                setFormData({
                    fullName: "",
                    companyName: "",
                    gstNumber: "",
                    email: "",
                    phone: "",
                    productInterest: "Sun-Dried Tomatoes",
                    estimatedVolume: "50 KG - 250 KG",
                    packagingFormat: "5 KG Chef Pack",
                    message: ""
                });
                setErrors({});
                setTouched({});
            } else {
                const errText = data.error || "Failed to send quote request. Please try again.";
                setSubmitError(errText);
                triggerToastBanner("error", errText);
            }
        } catch (err) {
            console.error("Error submitting wholesale quote form:", err);
            const errText = "Network error. Please try again later or contact us directly.";
            setSubmitError(errText);
            triggerToastBanner("error", errText);
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        const animatedElements = document.querySelectorAll(
            ".reveal-fade-up, .reveal-fade-left, .reveal-fade-right, .reveal-card"
        );

        if (typeof window !== "undefined" && "IntersectionObserver" in window) {
            const observerOptions = {
                root: null,
                rootMargin: "0px 0px 50px 0px",
                threshold: 0.01
            };

            const revealObserver = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-revealed");
                    }
                });
            }, observerOptions);

            animatedElements.forEach((el) => revealObserver.observe(el));

            // Safety fallback: ensure all elements are revealed immediately
            const fallbackTimer = setTimeout(() => {
                animatedElements.forEach((el) => el.classList.add("is-revealed"));
            }, 100);

            return () => {
                clearTimeout(fallbackTimer);
                animatedElements.forEach((el) => revealObserver.unobserve(el));
            };
        } else {
            animatedElements.forEach((el) => el.classList.add("is-revealed"));
        }
    }, []);

    // Section 6 GSAP animation
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const section = customSectionRef.current;
        if (!section) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "restart reset restart reset",
            },
        });

        gsap.set(customLeftRef.current, { x: -250, y: 250, opacity: 0 });
        gsap.set(customRightRef.current, { opacity: 0 });
        gsap.set(customTreeRef.current, { scale: 0.8, x: 50, opacity: 0 });
        gsap.set(customTextRef.current, { x: 150, opacity: 0 });
        gsap.set(customTomato1Ref.current, { x: 0, y: 0, scale: 0.1, opacity: 0 });
        gsap.set(customTomato2Ref.current, { x: 0, y: 0, scale: 0.1, opacity: 0 });

        tl.to(customLeftRef.current, { x: 0, y: 0, opacity: 1, duration: 1.2, ease: "power4.out" })
            .to(customRightRef.current, { opacity: 1, duration: 0.3 }, "-=0.6")
            .to(customTreeRef.current, { scale: 1, x: 0, opacity: 0.28, duration: 1.0, ease: "power3.out" }, "-=0.5")
            .to(customTextRef.current, { x: 0, opacity: 1, duration: 1.2, ease: "power4.out" }, "-=0.4")
            .to(customTomato1Ref.current, { x: 140, y: -120, rotation: 35, scale: 1.1, opacity: 1, duration: 0.8, ease: "back.out(1.8)" }, "-=0.8")
            .to(customTomato2Ref.current, { x: 100, y: -160, rotation: -45, scale: 0.95, opacity: 1, duration: 0.8, ease: "back.out(1.8)" }, "-=0.6");

        return () => {
            if (tl.scrollTrigger) tl.scrollTrigger.kill();
            tl.kill();
        };
    }, []);
    // Section 4 GSAP animation
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const section = bulkSectionRef.current;
        if (!section) return;

        const items = bulkRightRef.current.querySelectorAll(".bulk-item");

        const ctx = gsap.context(() => {
            gsap.set(bulkLeftRef.current, { x: -120, opacity: 0 });
            gsap.set(items, { x: 80, opacity: 0 });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top 75%",
                    toggleActions: "play none none reverse",
                },
            });

            tl.to(bulkLeftRef.current, { x: 0, opacity: 1, duration: 1.1, ease: "power4.out" })
                .to(items, { x: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" }, "-=0.7");
        }, section);

        return () => ctx.revert();
    }, []);
    return (
        <div className="font-poppins relative">
            {toastBanner && (
                <div className="fixed top-24 right-4 sm:right-8 z-[9999999] w-[92%] max-w-sm sm:max-w-md font-poppins transition-all duration-500 animate-in fade-in slide-in-from-top-4">
                    <div className={`p-4 sm:p-5 rounded-2xl border-2 shadow-2xl flex items-center justify-between gap-3 ${
                        toastBanner.type === "success"
                            ? "bg-emerald-50 border-emerald-300 text-emerald-950 shadow-emerald-600/30"
                            : "bg-red-50 border-red-300 text-red-950 shadow-red-600/30"
                    }`}>
                        <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                                toastBanner.type === "success" ? "bg-emerald-600 text-white" : "bg-red-600 text-white"
                            }`}>
                                {toastBanner.type === "success" ? <FaCheckCircle className="w-4 h-4" /> : <FaExclamationCircle className="w-4 h-4" />}
                            </div>
                            <p className="text-xs sm:text-sm font-extrabold leading-snug">{toastBanner.message}</p>
                        </div>
                        <button
                            type="button"
                            onClick={() => setToastBanner(null)}
                            className="text-gray-400 hover:text-gray-700 text-xs font-black px-2 py-1 cursor-pointer shrink-0"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
            <style dangerouslySetInnerHTML={{
                __html: `
                .reveal-fade-up,
                .reveal-fade-left,
                .reveal-fade-right,
                .reveal-card {
                    opacity: 1 !important;
                    transform: none !important;
                }
                .reveal-card:hover {
                    transform: translateY(-8px) !important;
                }
                /* Ultra-Visible Moving White Shine Sweep Effect */
                .glass-shine-card {
                    position: relative;
                    overflow: hidden;
                }
                .glass-shine-card::after {
                    content: "";
                    position: absolute;
                    top: -50%;
                    left: -150%;
                    width: 200%;
                    height: 200%;
                    background: linear-gradient(
                        60deg,
                        rgba(255, 255, 255, 0) 25%,
                        rgba(255, 255, 255, 0.95) 50%,
                        rgba(255, 255, 255, 0) 75%
                    );
                    transform: rotate(25deg);
                    transition: left 0.85s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s;
                    pointer-events: none;
                    opacity: 0;
                    z-index: 30;
                }
                .glass-shine-card:hover::after {
                    left: 120%;
                    opacity: 1;
                }
                `
            }} />

            {/* SECTION 1: OVERVIEW & MISSION */}
            <section className="max-w-7xl mx-auto px-6 py-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* LEFT CONTENT */}
                    <div className="lg:col-span-7 space-y-6 text-left reveal-fade-left">

                        {/* Section Label */}
                        <span className="text-[#a50808] font-black tracking-widest text-xs uppercase bg-[#a50808]/5 px-3.5 py-1.5 rounded-full inline-block border border-[#a50808]/15 font-poppins">
                            BUILT FOR BUSINESS
                        </span>

                        {/* Heading */}
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-poppins leading-tight tracking-tight">
                            From Commercial Quantities to{" "}
                            <span className="text-[#a50808]">
                                International Requirements
                            </span>
                        </h2>

                        {/* Main Description */}
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-medium font-poppins">
                            Whether you are sourcing ingredients for resale, food production,
                            hospitality or international distribution, Drymato works around
                            your product and quantity requirements.
                        </p>

                        {/* Buyer Types */}
                        <div className="pt-3">
                            <div className="flex flex-wrap items-stretch">

                                {/* Wholesalers */}
                                <div className="flex items-center gap-3 px-4 py-2.5 border-r border-[#d8d5c9]">
                                    <FaHandshake className="w-5 h-5 text-[#243822] shrink-0" />

                                    <span className="text-xs sm:text-sm font-semibold text-[#3d3935] font-poppins whitespace-nowrap">
                                        Wholesalers
                                    </span>
                                </div>

                                {/* Distributors */}
                                <div className="flex items-center gap-3 px-4 py-2.5 border-r border-[#d8d5c9]">
                                    <FaBox className="w-5 h-5 text-[#243822] shrink-0" />

                                    <span className="text-xs sm:text-sm font-semibold text-[#3d3935] font-poppins whitespace-nowrap">
                                        Distributors
                                    </span>
                                </div>

                                {/* Food Manufacturers */}
                                <div className="flex items-center gap-3 px-4 py-2.5 border-r border-[#d8d5c9]">
                                    <FaIndustry className="w-5 h-5 text-[#243822] shrink-0" />

                                    <span className="text-xs sm:text-sm font-semibold text-[#3d3935] font-poppins whitespace-nowrap">
                                        Food Manufacturers
                                    </span>
                                </div>

                                {/* Private-Label Brands */}
                                <div className="flex items-center gap-3 px-4 py-2.5 border-r border-[#d8d5c9]">
                                    <FaTags className="w-5 h-5 text-[#243822] shrink-0" />

                                    <span className="text-xs sm:text-sm font-semibold text-[#3d3935] font-poppins whitespace-nowrap">
                                        Private-Label Brands
                                    </span>
                                </div>

                                {/* International Buyers */}
                                <div className="flex items-center gap-3 px-4 py-2.5">
                                    <FaGlobe className="w-5 h-5 text-[#243822] shrink-0" />

                                    <span className="text-xs sm:text-sm font-semibold text-[#3d3935] font-poppins whitespace-nowrap">
                                        International Buyers
                                    </span>
                                </div>

                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="pt-4 flex flex-wrap gap-4 font-poppins">

                            <button
                                type="button"
                                onClick={(e) => scrollToQuoteForm(e)}
                                className="bg-forest text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-forest transition-all duration-300  hover:scale-105 inline-flex items-center gap-2 cursor-pointer"
                            >
                                Request Wholesale Quote →
                            </button>

                            <a
                                href="https://wa.me/8000897238"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-forest border-2 border-forest px-7 py-3.5 rounded-full font-bold text-sm  transition-all duration-300 inline-flex items-center gap-2"
                            >
                                Chat on WhatsApp
                            </a>

                        </div>
                    </div>


                    {/* RIGHT IMAGE */}
                    <div className="lg:col-span-5 relative flex items-center justify-center reveal-fade-right">

                        <div className="relative w-full h-[380px] sm:h-[440px] rounded-tl-[5rem] rounded-br-[5rem] overflow-hidden shadow-2xl border-4 border-white group">

                            <Image
                                src="/wholesale_bulk_packaging.png"
                                alt="Drymato Wholesale Bulk Vacuum Packaging"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                            <div className="absolute bottom-6 left-6 right-6 text-white font-poppins">
                                <span className="text-amber-300 font-extrabold text-xs uppercase tracking-widest block mb-1">
                                    Commercial B2B Grade
                                </span>

                                <h3 className="text-xl font-bold font-poppins">
                                    Heavy Duty Bulk Vacuum Packaging
                                </h3>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* ================= 03. WHOLESALE SUPPLY ================= */}
            <section className="w-full bg-[#fff] py-20 sm:py-24 lg:py-28 px-6 md:px-10 lg:px-14 relative overflow-hidden">

                {/* Soft Background Blobs */}
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
                                WHOLESALE SUPPLY
                            </span>

                            <span className="w-8 sm:w-10 h-[2px] bg-[#a50808]" />

                        </div>

                        {/* Heading */}
                        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-bold leading-[1.12] text-[#1e3d2f]">
                            Dehydrated Ingredients for{" "}
                            <span className="text-[#a50808]">
                                Growing Businesses
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="mt-5 text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto font-poppins">
                            We supply a growing range of dehydrated ingredients for
                            commercial and wholesale requirements.
                        </p>

                    </div>


                    {/* ================= PRODUCT CARDS ================= */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {WHOLESALE_CATEGORIES.map((product, index) => {

                            const ProductIcon = product.icon;

                            return (
                                <div
                                    key={product.id}
                                    className="relative group cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-2 shadow-sm hover:shadow-xl flex flex-col justify-between min-h-[340px] sm:min-h-[360px]"
                                    style={{
                                        backgroundColor: product.bgColor,
                                        borderRadius: "32px 85px 28px 28px",
                                    }}
                                >

                                    {/* ================= PRODUCT IMAGE ================= */}
                                    <div className="absolute -right-5 -bottom-3 w-[72%] h-[58%] pointer-events-none select-none z-0">

                                        <Image
                                            src={product.imageUrl}
                                            alt={product.imageAlt}
                                            fill
                                            sizes="(max-width: 640px) 260px, (max-width: 1024px) 300px, 330px"
                                            className="object-contain object-right-bottom group-hover:scale-110 transition-transform duration-700 ease-out"
                                        />

                                    </div>


                                    {/* ================= SOFT IMAGE OVERLAY ================= */}
                                    <div
                                        className="absolute right-0 bottom-0 w-[65%] h-[55%] pointer-events-none z-0 opacity-30"
                                        style={{
                                            background: `linear-gradient(to top left, ${product.bgColor}, transparent 70%)`,
                                        }}
                                    />


                                    {/* ================= CARD CONTENT ================= */}
                                    <div className="relative z-10 p-6 sm:p-7 flex flex-col h-full">

                                        {/* Icon */}
                                        <div
                                            className="mb-4"
                                            style={{ color: product.iconColor }}
                                        >
                                            <ProductIcon className="w-7 h-7" />
                                        </div>


                                        {/* Card Number */}
                                        <span
                                            className="text-[10px] font-bold tracking-[0.2em] uppercase mb-2"
                                            style={{
                                                color: product.iconColor,
                                            }}
                                        >
                                            {String(index + 1).padStart(2, "0")}
                                        </span>


                                        {/* Title */}
                                        <h3
                                            className="font-serif font-bold text-xl sm:text-2xl leading-snug mb-3"
                                            style={{
                                                color: product.textColor,
                                            }}
                                        >
                                            {product.title}
                                        </h3>


                                        {/* Products */}
                                        <p
                                            className="text-xs sm:text-[13px] leading-relaxed font-medium max-w-[78%]"
                                            style={{
                                                color: product.descColor,
                                            }}
                                        >
                                            {product.items}
                                        </p>

                                    </div>

                                </div>
                            );
                        })}

                    </div>

                    {/* ================= CTA ================= */}
                    <div className="flex justify-center mt-10 sm:mt-12 reveal-fade-up">

                        <a
                            href="/product"
                            className="group inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-[#243822] text-white text-xs sm:text-sm font-bold uppercase tracking-widest font-poppins shadow-lg shadow-green-900/10 hover:-translate-y-1 hover:bg-[#1e301d] transition-all duration-300"
                        >
                            <span>
                                Explore Products
                            </span>

                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </a>

                    </div>

                </div>
            </section>

   {/* =========================================================
    SECTION 4: BULK REQUIREMENTS
========================================================= */}
<section
    ref={bulkSectionRef}
    className="relative z-10 py-16 sm:py-20 lg:py-24 font-poppins overflow-hidden bg-[#faf7f1]"
>
    {/* Decorative Background */}
    <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-[#a50808]/5 blur-3xl pointer-events-none" />
    <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-[#243822]/5 blur-3xl pointer-events-none" />

    <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* ================= LEFT: IMAGE ================= */}
            <div ref={bulkLeftRef} className="lg:col-span-5 relative flex items-center justify-center opacity-0">

                {/* Organic back shape */}
                <div className="absolute w-[88%] h-[88%] rounded-[45%_55%_50%_50%/50%_45%_55%_50%] bg-[#e5eadf] rotate-[-6deg]" />

                {/* Image */}
                <div className="relative z-10 w-full max-w-[460px] aspect-[4/5] rounded-tl-[6rem] rounded-br-[6rem] rounded-tr-[1.5rem] rounded-bl-[1.5rem] overflow-hidden border-4 border-white shadow-2xl">
                    <Image
                        src="/hero-section/dehydrated-food.png"
                        alt="Drymato bulk dehydrated ingredients"
                        fill
                        sizes="(max-width: 1024px) 100vw, 460px"
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Floating badge */}
                <div className="absolute z-20 bottom-6 -right-1 sm:right-2 lg:-right-4 bg-white px-4 py-3 rounded-2xl shadow-[0_10px_25px_rgba(36,56,34,0.15)] border border-[#243822]/10 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#a50808]/10 text-[#a50808] flex items-center justify-center">
                        <FaBoxes className="w-4 h-4" />
                    </div>
                    <div>
                        <p className="text-[9px] uppercase tracking-[0.16em] font-bold text-[#a50808]">
                            Bulk Supply
                        </p>
                        <p className="text-xs font-semibold text-[#243822]">
                            Built for Commercial Quantities
                        </p>
                    </div>
                </div>
            </div>

            {/* ================= RIGHT: CONTENT ================= */}
            <div ref={bulkRightRef} className="lg:col-span-7">

                {/* Label */}
                <div className="bulk-item flex items-center gap-2 mb-4 text-[#243822] opacity-0">
                    <FaBoxes className="w-4 h-4" />
                    <span className="text-xs sm:text-sm font-extrabold tracking-[0.2em] uppercase">
                         Bulk Requirements
                    </span>
                </div>

                {/* Title */}
                <h2 className="bulk-item font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#243822] leading-[1.15] mb-5 opacity-0">
                    Built for{" "}
                    <span className="text-[#a50808]">Commercial Quantities</span>
                </h2>

                {/* Paragraph */}
                <p className="bulk-item text-sm sm:text-base text-[#4f5b4b] leading-7 max-w-xl mb-8 opacity-0">
                    Whether you need ingredients for resale, distribution, food
                    manufacturing or commercial kitchens, we can discuss quantities
                    and packaging according to your requirement.
                </p>

                {/* Feature rows */}
                <div className="space-y-4 mb-8">

                    {/* 01 */}
                    <div className="bulk-item group flex items-start gap-4 bg-white rounded-2xl border border-[#243822]/10 p-4 sm:p-5 shadow-[0_10px_30px_rgba(36,56,34,0.05)] hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(36,56,34,0.10)] transition-all duration-300 opacity-0">
                        <div className="w-12 h-12 rounded-2xl bg-[#f3e8df] text-[#a50808] flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                            <FaBoxes className="text-lg" />
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-[11px] font-black tracking-[0.2em] text-[#a50808]">01</span>
                                <h3 className="text-lg sm:text-xl font-extrabold text-[#243822]">Bulk Supply</h3>
                            </div>
                            <p className="text-sm text-[#4f5b4b] leading-6">
                                For wholesalers, distributors and institutional buyers.
                            </p>
                        </div>
                    </div>

                    {/* 02 */}
                    <div className="bulk-item group flex items-start gap-4 bg-white rounded-2xl border border-[#243822]/10 p-4 sm:p-5 shadow-[0_10px_30px_rgba(36,56,34,0.05)] hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(36,56,34,0.10)] transition-all duration-300 opacity-0">
                        <div className="w-12 h-12 rounded-2xl bg-[#e5eadf] text-[#5f6b3f] flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                            <FaBoxOpen className="text-lg" />
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-[11px] font-black tracking-[0.2em] text-[#5f6b3f]">02</span>
                                <h3 className="text-lg sm:text-xl font-extrabold text-[#243822]">Multiple Products</h3>
                            </div>
                            <p className="text-sm text-[#4f5b4b] leading-6">
                                Source different dehydrated ingredients through one supply relationship.
                            </p>
                        </div>
                    </div>

                    {/* 03 */}
                    <div className="bulk-item group flex items-start gap-4 bg-white rounded-2xl border border-[#243822]/10 p-4 sm:p-5 shadow-[0_10px_30px_rgba(36,56,34,0.05)] hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(36,56,34,0.10)] transition-all duration-300 opacity-0">
                        <div className="w-12 h-12 rounded-2xl bg-[#f0e7d2] text-[#8b7040] flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                            <FaTags className="text-lg" />
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-[11px] font-black tracking-[0.2em] text-[#8b7040]">03</span>
                                <h3 className="text-lg sm:text-xl font-extrabold text-[#243822]">Custom Quantities</h3>
                            </div>
                            <p className="text-sm text-[#4f5b4b] leading-6">
                                Requirements can be discussed based on product availability
                                and processing feasibility.
                            </p>
                        </div>
                    </div>

                </div>

                {/* CTA card */}
                <div className="bulk-item relative overflow-hidden rounded-[1.75rem] bg-[#243822] px-6 py-7 sm:px-8 sm:py-8 opacity-0">
                    <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/5 blur-2xl pointer-events-none" />

                    <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                        <div className="max-w-sm">
                            <span className="text-[#f0e7d2] text-[10px] sm:text-xs font-black uppercase tracking-[0.2em]">
                                Need Multiple Products?
                            </span>
                            <p className="mt-2 text-sm sm:text-base text-white/80 leading-6">
                                Share your complete requirement — product, quantity,
                                format and packaging.
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={(e) =>
                                scrollToQuoteForm(e, {
                                    productInterest: "Multiple Products / Bulk Requirement",
                                })
                            }
                            className="group/btn shrink-0 relative overflow-hidden bg-white text-[#243822] border-2 border-white px-6 py-3.5 rounded-tl-2xl rounded-br-2xl font-black flex items-center justify-center gap-3 transition-all duration-300 hover:bg-[#a50808] hover:border-[#a50808] hover:text-white active:scale-95 shadow-lg cursor-pointer"
                        >
                            <span className="text-xs tracking-widest uppercase">
                                Request Wholesale Quote
                            </span>
                            <span className="w-7 h-7 rounded-full bg-[#a50808] text-white flex items-center justify-center text-sm font-bold transition-all duration-300 group-hover/btn:bg-white group-hover/btn:text-[#a50808] group-hover/btn:translate-x-1">
                                →
                            </span>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>


            {/* =========================================================
                SECTION 5: PRIVATE LABEL
            ========================================================= */}
            <section className="relative z-10 py-20 sm:py-24 font-poppins overflow-hidden bg-white">

                {/* Soft Background Blobs */}
                <div className="absolute -top-20 -left-24 w-72 h-72 rounded-full bg-[#e5eadf]/60 blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -right-16 w-80 h-80 rounded-full bg-[#f3e8df]/60 blur-3xl pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

                        {/* ================= LEFT: TEXT ================= */}
                        <div className="lg:col-span-5 space-y-6 text-left reveal-fade-left">

                            <span className="inline-flex items-center gap-2 text-[#a50808] font-black tracking-[0.18em] text-[10px] sm:text-xs uppercase bg-[#a50808]/5 border border-[#a50808]/15 px-4 py-2 rounded-full">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#a50808]" />
                                Private Label
                            </span>

                            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-bold leading-[1.12] text-[#1e3d2f]">
                                Your Brand.{" "}
                                <span className="text-[#a50808]">Our Ingredients.</span>
                            </h2>

                            <p className="text-sm sm:text-base text-[#4f5b4b] leading-7 max-w-md">
                                For applicable products, Drymato can discuss private-label
                                requirements across:
                            </p>

                            {/* Note */}
                            <div className="flex items-start gap-3 rounded-2xl border border-[#243822]/10 bg-[#faf7f1] px-4 py-3.5 max-w-md">
                                <div className="w-7 h-7 rounded-full bg-[#243822]/10 text-[#243822] flex items-center justify-center shrink-0 mt-0.5">
                                    <FaTags className="w-3 h-3" />
                                </div>
                                <p className="text-xs sm:text-[13px] text-[#4f5b4b] leading-6 font-medium">
                                    Suitable for businesses looking to build or expand their own
                                    dehydrated ingredient range.
                                </p>
                            </div>

                            <div className="pt-2">
                                <button
                                    type="button"
                                    onClick={(e) =>
                                        scrollToQuoteForm(e, {
                                            packagingFormat: "Private Label Pouch",
                                        })
                                    }
                                    className="group/btn inline-flex items-center gap-3 bg-[#243822] text-white pl-7 pr-2.5 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest shadow-lg shadow-green-900/10 hover:bg-[#1e301d] hover:-translate-y-1 active:scale-95 transition-all duration-300 cursor-pointer"
                                >
                                    <span>Discuss Private Label</span>
                                    <span className="w-8 h-8 rounded-full bg-white text-[#243822] flex items-center justify-center text-sm font-bold transition-transform duration-300 group-hover/btn:translate-x-1">
                                        →
                                    </span>
                                </button>
                            </div>
                        </div>


                        {/* ================= RIGHT: PROCESS FLOW ================= */}
                        <div className="lg:col-span-7 reveal-fade-right">
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
                                {PRIVATE_LABEL_FLOW.map((step, index) => {
                                    const StepIcon = step.icon;
                                    const leaf =
                                        index % 2 === 0
                                            ? "rounded-tl-[44px] rounded-br-[44px] rounded-tr-[12px] rounded-bl-[12px]"
                                            : "rounded-tr-[44px] rounded-bl-[44px] rounded-tl-[12px] rounded-br-[12px]";

                                    return (
                                        <div
                                            key={step.title}
                                            className={`reveal-card group relative flex flex-col justify-between min-h-[105px] sm:min-h-[115px] p-4 sm:p-5 border shadow-[0_10px_26px_rgba(36,56,34,0.07)] transition-all duration-300 overflow-hidden ${leaf}`}
                                            style={{
                                                backgroundColor: step.bg,
                                                borderColor: `${step.border}99`,
                                            }}
                                        >
                                            {/* Step number + icon */}
                                            <div className="flex items-center justify-between">
                                                <span
                                                    className="text-[11px] font-black tracking-[0.2em]"
                                                    style={{ color: step.accent }}
                                                >
                                                    {String(index + 1).padStart(2, "0")}
                                                </span>

                                                <div
                                                    className="w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                                                    style={{
                                                        backgroundColor: step.dark ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.75)",
                                                        color: step.accent,
                                                    }}
                                                >
                                                    <StepIcon className="w-4 h-4" />
                                                </div>
                                            </div>

                                            <div>
                                                <div
                                                    className="w-8 h-[2px] mb-3 group-hover:w-14 transition-all duration-500"
                                                    style={{ backgroundColor: step.accent }}
                                                />
                                                <h3
                                                    className="font-serif text-base sm:text-lg font-bold leading-snug"
                                                    style={{ color: step.dark ? "#ffffff" : "#243822" }}
                                                >
                                                    {step.title}
                                                </h3>
                                            </div>

                                            {/* Arrow to next step */}
                                            {index < PRIVATE_LABEL_FLOW.length - 1 && (
                                                <span
                                                    className="hidden sm:flex absolute bottom-4 right-4 text-sm font-bold opacity-50 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1"
                                                    style={{ color: step.accent }}
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


            {/* =========================================================
                SECTION 6: CUSTOM REQUIREMENTS
            ========================================================= */}
            <section
                id="send-requirement"
                ref={customSectionRef}
                className="w-full bg-[#fff8f0] overflow-hidden flex flex-col lg:flex-row relative font-poppins"
            >

                {/* ================= LEFT: IMAGE ================= */}
                <div
                    ref={customLeftRef}
                    className="lg:w-[55%] w-full min-h-[400px] lg:min-h-[720px] relative overflow-hidden opacity-0 z-10"
                >
                    <Image
                        src="/poped-out--dried-tomato.png"
                        alt="Drymato custom requirements"
                        fill
                        sizes="(max-width: 1024px) 100vw, 55vw"
                        className="absolute inset-y-0 left-[-2%] w-[130%] h-full object-contain object-left-bottom pt-3 lg:pt-5"
                    />

                    {/* Floating tomatoes */}
                    <div
                        ref={customTomato1Ref}
                        className="absolute bottom-[18%] left-[70%] w-14 h-14 pointer-events-none select-none z-20 opacity-0"
                    >
                        <Image
                            src="/tomatoimg.png"
                            alt=""
                            width={56}
                            height={56}
                            className="w-full h-full object-contain filter drop-shadow-md"
                        />
                    </div>

                    <div
                        ref={customTomato2Ref}
                        className="absolute bottom-[20%] left-[70%] w-12 h-12 pointer-events-none select-none z-20 opacity-0"
                    >
                        <Image
                            src="/tomatoimg.png"
                            alt=""
                            width={48}
                            height={48}
                            className="w-full h-full object-contain filter drop-shadow-md"
                        />
                    </div>
                </div>

                {/* ================= RIGHT: CONTENT ================= */}
                <div
                    ref={customRightRef}
                    className="lg:w-[45%] w-full bg-[#fff8f0] py-20 px-8 sm:py-10 sm:px-16 lg:pr-24 lg:pl-1 flex flex-col justify-center relative overflow-hidden z-10 opacity-0"
                >
                    {/* Background tree */}
                    <div
                        ref={customTreeRef}
                        className="absolute right-[-60px] bottom-[-40px] w-[450px] sm:w-[600px] h-auto pointer-events-none select-none z-0 opacity-[0.28]"
                    >
                        <Image
                            src="/tomatotree.png"
                            alt=""
                            width={600}
                            height={600}
                            className="w-full h-auto object-contain filter saturate-50"
                        />
                    </div>

                    <div
                        ref={customTextRef}
                        className="relative z-10 flex flex-col items-start max-w-lg"
                    >

                        {/* Label */}
                        <div className="flex items-center gap-2 mb-4 text-[#243822]">
                            <Leaf className="w-4 h-4" strokeWidth={2.5} />
                            <span className="text-xs sm:text-sm font-extrabold tracking-[0.2em] uppercase">
                           Custom Requirements
                            </span>
                        </div>

                        {/* Title */}
                        <h2 className="font-serif text-3xl sm:text-4xl md:text-[42px] font-bold text-gray-900 leading-[1.25] mb-6">
                            Not Every Business Needs a{" "}
                            <span className="text-[#a50808]">Standard Product.</span>
                        </h2>

                        {/* Paragraph */}
                        <p className="text-base sm:text-lg text-gray-500 leading-relaxed mb-6">
                            We can discuss requirements around:
                        </p>

                        {/* Requirement Chips */}
                        <div className="flex flex-wrap gap-2.5 mb-8">
                            {CUSTOM_REQUIREMENT_ITEMS.map((item, index) => (
                                <span
                                    key={item}
                                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border-2 border-[#243822]/20 bg-white text-xs sm:text-sm font-bold text-gray-800 h-fit transition-all duration-300 hover:border-[#243822] hover:-translate-y-0.5"
                                >
                                    <span className="text-[10px] font-black tracking-[0.15em] text-[#a50808]">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    {item}
                                </span>
                            ))}
                        </div>

                        {/* Note */}
                        <div className="flex items-start gap-3 rounded-2xl border border-[#243822]/10 bg-white/70 px-4 py-3.5 mb-8 max-w-md">
                            <div className="w-7 h-7 rounded-full bg-[#243822]/10 text-[#243822] flex items-center justify-center shrink-0 mt-0.5">
                                <FaInfoCircle className="w-3.5 h-3.5" />
                            </div>
                            <p className="text-xs sm:text-[13px] text-[#4f5b4b] leading-6 font-medium">
                                All requirements are subject to product feasibility and raw
                                material availability.
                            </p>
                        </div>

                        {/* CTA */}
                        <button
                            type="button"
                            onClick={(e) => scrollToQuoteForm(e)}
                            className="group/btn relative overflow-hidden bg-[#243822] border-2 border-[#243822] text-white px-8 py-3.5 rounded-xl text-xs font-extrabold tracking-widest uppercase shadow-[0_6px_20px_rgba(36,56,34,0.12)] hover:shadow-[0_8px_25px_rgba(36,56,34,0.22)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer z-10"
                        >
                            {/* Bubble rising from bottom */}
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[125%] aspect-square rounded-t-[50%] bg-white translate-y-full transition-transform duration-[750ms] ease-in-out z-0 group-hover/btn:translate-y-[12%]" />

                            <span className="relative z-10 transition-colors duration-300 group-hover/btn:text-[#243822]">
                                Discuss Requirement
                            </span>
                        </button>

                    </div>
                </div>

            </section>

        </div>
    );
}