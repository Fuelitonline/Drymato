



// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import toast from "react-hot-toast";
// import { useSiteInfo } from "@/context/WebsiteDataContext";
// import {
//     Leaf,
//     ArrowRight,
//     MapPin,
//     Mail,
//     Package,
//     Tag,
//     Boxes,
//     Globe2,
//     Handshake,
//     Sprout,
//     Cpu,
//     Flame,
//     ShieldCheck,
//     AlertCircle,
// } from "lucide-react";

// const ENQUIRY_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/contactservice/submitEnquiry`;
// const DOMAIN_NAME = "Drymato";

// // ---------------------------------------------------------------------------
// // Validation (international-friendly: no country-specific rules)
// // ---------------------------------------------------------------------------
// const clean = (v = "") => v.replace(/\s+/g, " ").trim();
// const countLetters = (v) => (v.match(/\p{L}/gu) || []).length;

// const KEY_ROWS = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
// const KEY_RUNS = new Set();
// KEY_ROWS.forEach((row) => {
//     const rev = row.split("").reverse().join("");
//     for (let i = 0; i <= row.length - 5; i++) {
//         KEY_RUNS.add(row.slice(i, i + 5));
//         KEY_RUNS.add(rev.slice(i, i + 5));
//     }
// });

// // Catches keyboard mashing ("asdfghj", "qwerty"), repeated letters ("rrrr") and
// // impossible consonant clusters. Deliberately lenient so real names, companies
// // and places in any Latin-script language still pass.
// function looksLikeGibberish(value) {
//     const t = value.toLowerCase();
//     if (/(\p{L})\1{3,}/u.test(t)) return true;
//     const compact = t.replace(/[\s\d\p{P}]/gu, "");
//     if (compact.length >= 4 && new Set(compact).size < 3) return true;
//     return t.split(/[^a-z]+/).some(
//         (w) =>
//             /[bcdfghjklmnpqrstvwxz]{6,}/.test(w) ||
//             [...Array(Math.max(0, w.length - 4)).keys()].some((i) => KEY_RUNS.has(w.slice(i, i + 5)))
//     );
// }

// const EMAIL_RE =
//     /^[A-Za-z0-9](?:[A-Za-z0-9._%+-]{0,62}[A-Za-z0-9])?@(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z]{2,24}$/;

// const FIELD_VALIDATORS = {
//     fullName: (raw) => {
//         const v = clean(raw);
//         if (!v) return "Full name is required";
//         if (v.length < 2 || countLetters(v) < 2) return "Please enter your full name";
//         if (v.length > 80) return "Name is too long (max 80 characters)";
//         if (!/^[\p{L}\p{M}][\p{L}\p{M} .'’-]*$/u.test(v)) return "Name can only contain letters, spaces and . ' -";
//         if (looksLikeGibberish(v)) return "Please enter a valid name";
//         return "";
//     },
//     companyName: (raw) => {
//         const v = clean(raw);
//         if (!v) return "Company name is required";
//         if (v.length < 2 || countLetters(v) < 2) return "Please enter a valid company name";
//         if (v.length > 100) return "Company name is too long (max 100 characters)";
//         if (!/^[\p{L}\p{N}][\p{L}\p{M}\p{N} &.,'’()\/+-]*$/u.test(v)) return "Company name contains invalid characters";
//         if (looksLikeGibberish(v)) return "Please enter a valid company name";
//         return "";
//     },
//     email: (raw) => {
//         const v = raw.trim();
//         if (!v) return "Email address is required";
//         if (v.length > 254 || v.includes("..") || !EMAIL_RE.test(v)) return "Please enter a valid email address";
//         return "";
//     },
//     phone: (raw) => {
//         const v = raw.trim();
//         if (!v) return "Phone / WhatsApp number is required";
//         if (!/^\+?[\d\s().-]+$/.test(v)) return "Use digits only, with an optional + country code";
//         const digits = v.replace(/\D/g, "");
//         if (digits.length < 7 || digits.length > 15) return "Enter a valid number with country code (7 to 15 digits)";
//         if (/^(\d)\1+$/.test(digits)) return "Please enter a valid phone number";
//         if ("01234567890123456789".includes(digits) || "98765432109876543210".includes(digits)) {
//             return "Please enter a valid phone number";
//         }
//         return "";
//     },
//     location: (raw) => {
//         const v = clean(raw);
//         if (!v) return "Country / City is required";
//         if (v.length < 2 || countLetters(v) < 2) return "Please enter a valid country or city";
//         if (v.length > 100) return "Location is too long (max 100 characters)";
//         if (!/^[\p{L}\p{N}][\p{L}\p{M}\p{N} .,'’()\/-]*$/u.test(v)) return "Location contains invalid characters";
//         if (looksLikeGibberish(v)) return "Please enter a valid country or city";
//         return "";
//     },
//     products: (raw) => {
//         const v = clean(raw);
//         if (!v) return "";
//         if (v.length < 2 || countLetters(v) < 2) return "Please enter valid product names";
//         if (v.length > 200) return "Too long (max 200 characters)";
//         if (looksLikeGibberish(v)) return "Please enter valid product names";
//         return "";
//     },
//     quantity: (raw) => {
//         const v = clean(raw);
//         if (!v) return "";
//         if (v.length > 50) return "Too long (max 50 characters)";
//         if (!/\d/.test(v)) return "Include a number, e.g. 500 KG or 2 tons";
//         const words = v.replace(/[\d\s.,]/g, "");
//         if (words && looksLikeGibberish(words)) return "Please enter a valid quantity, e.g. 500 KG";
//         return "";
//     },
//     packaging: (raw) => {
//         const v = clean(raw);
//         if (!v) return "";
//         if (v.length < 2 || countLetters(v) < 2) return "Please enter a valid packaging requirement";
//         if (v.length > 150) return "Too long (max 150 characters)";
//         if (looksLikeGibberish(v)) return "Please enter a valid packaging requirement";
//         return "";
//     },
//     message: (raw) => {
//         const v = clean(raw);
//         if (!v) return "";
//         if (v.length < 10) return "Please add a few more details (at least 10 characters)";
//         if (v.length > 1000) return "Message is too long (max 1000 characters)";
//         if (looksLikeGibberish(v)) return "Please write a meaningful message";
//         return "";
//     },
// };

// const FIELD_META = {
//     fullName: { maxLength: 80, autoComplete: "name" },
//     companyName: { maxLength: 100, autoComplete: "organization" },
//     email: { maxLength: 254, autoComplete: "email", inputMode: "email" },
//     phone: { maxLength: 20, autoComplete: "tel", inputMode: "tel", type: "tel" },
//     location: { maxLength: 100, autoComplete: "off" },
//     products: { maxLength: 200, autoComplete: "off" },
//     quantity: { maxLength: 50, autoComplete: "off" },
//     packaging: { maxLength: 150, autoComplete: "off" },
// };

// // ---------------------------------------------------------------------------
// // Static content — edit copy here, layout stays untouched
// // ---------------------------------------------------------------------------

// // Card values (email / phone / address) come from the website API via useSiteInfo.
// // A card is skipped automatically when its value is missing.
// function buildContactCards({ email, phoneDisplay, whatsapp, whatsappLink, phoneTel, address, supportTime }) {
//     const phoneValue = phoneDisplay || whatsapp;
//     const phoneHref = whatsappLink || (phoneTel ? `tel:${phoneTel}` : null);

//     return [
//         {
//             id: "email",
//             title: "EMAIL",
//             value: email,
//             href: email ? `mailto:${email}` : null,
//             lines: ["Bulk enquiries", "Wholesale", "Export enquiries", "Private label", "Product enquiries"],
//             Icon: Mail,
//             bgColor: "#243822",
//             textColor: "#FFFFFF",
//             descColor: "#CBD8C7",
//             buttonBorder: "rgba(255, 255, 255, 0.4)",
//             buttonText: "#FFFFFF",
//             iconColor: "#FFFFFF",
//             imageUrl: "/images/categories/vegetable-powder.png",
//             imageAlt: "Drymato email support",
//             cta: "SEND EMAIL",
//         },
//         {
//             id: "phone",
//             title: "PHONE / WHATSAPP",
//             value: phoneValue,
//             href: phoneHref,
//             lines: ["Talk to our team directly", supportTime].filter(Boolean),
//             Icon: PhoneIconPlaceholder,
//             bgColor: "#8A2C21",
//             textColor: "#FFFFFF",
//             descColor: "#F2D3CF",
//             buttonBorder: "rgba(255, 255, 255, 0.5)",
//             buttonText: "#FFFFFF",
//             iconColor: "#FFFFFF",
//             imageUrl: "/images/categories/dried-fruits.png",
//             imageAlt: "Drymato phone support",
//             cta: whatsappLink ? "CONNECT WHATSAPP" : "CALL US",
//         },
//         {
//             id: "location",
//             title: "LOCATION",
//             value: address,
//             href: address
//                 ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
//                 : null,
//             lines: ["Connected to markets across", "India & international buyers"],
//             Icon: MapPin,
//             bgColor: "#FBF8F1",
//             textColor: "#243822",
//             descColor: "#5C6B52",
//             buttonBorder: "#243822",
//             buttonText: "#243822",
//             iconColor: "#243822",
//             imageUrl: "/images/categories/dried-vegetables.png",
//             imageAlt: "Drymato location",
//             cta: "VIEW LOCATION",
//         },
//     ].filter((card) => card.value);
// }

// const ENQUIRY_OPTIONS = [
//     "Wholesale Supply",
//     "Bulk Ingredients",
//     "Export",
//     "Private Label",
//     "Custom Packaging",
//     "Product Samples",
//     "Other",
// ];

// const PRIVATE_LABEL_FLOW = [
//     { title: "Product", icon: Sprout },
//     { title: "Processing", icon: Cpu },
//     { title: "Dehydration", icon: Flame },
//     { title: "Packaging", icon: Package },
//     { title: "Custom Label", icon: Tag },
//     { title: "Supply", icon: Boxes },
// ];

// const WHY_DRYMATO = [
//     { icon: Handshake, title: "B2B Supply" },
//     { icon: Package, title: "Bulk Orders" },
//     { icon: Tag, title: "Private Label" },
//     { icon: Boxes, title: "Custom Packaging" },
//     { icon: Globe2, title: "Export Ready" },
//     { icon: ShieldCheck, title: "Quality Checked" },
// ];

// function PhoneIconPlaceholder({ className }) {
//     return (
//         <svg className={className} width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
//             <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.2a1 1 0 0 0 .25-1.02A11.36 11.36 0 0 1 8.5 4c0-.56-.44-1-1-1H4c-.56 0-1 .44-1 1C3 12.84 11.16 21 21 21c.56 0 1-.44 1-1v-3.5c0-.56-.44-1-1-1z" />
//         </svg>
//     );
// }

// // ---------------------------------------------------------------------------
// // Reusable eyebrow (Leaf + tracked label), matches OurSourcing.jsx exactly
// // ---------------------------------------------------------------------------
// function Eyebrow({ children, light = false }) {
//     return (
//         <div className="flex items-center gap-2 mb-3">
//             <Leaf className={`w-4 h-4 ${light ? "text-white" : "text-forest"}`} strokeWidth={2} />
//             <span
//                 className={`text-[11px] font-bold tracking-[0.2em] uppercase ${light ? "text-white/90" : "text-forest"
//                     }`}
//             >
//                 {children}
//             </span>
//         </div>
//     );
// }

// // Primary rounded-full button with the rising-bubble hover fill, reused from
// // the hero + contact CTAs already in the codebase.
// function BubbleButton({ children, onClick, type = "button", variant = "solid", disabled = false }) {
//     // solid: forest bg, white text — default, used on light backgrounds
//     // outline: white border/text — used when the button sits on a forest/dark background
//     const styles = {
//         solid: {
//             base: "bg-forest border-2 border-forest text-white shadow-[0_6px_20px_rgba(36,56,34,0.18)]",
//             bubble: "bg-white",
//             hoverText: "group-hover/btn:text-forest",
//         },
//         outline: {
//             base: "bg-forest border-2 border-white text-white",
//             bubble: "bg-white",
//             hoverText: "group-hover/btn:text-forest",
//         },
//     };
//     const s = styles[variant] || styles.solid;

//     return (
//         <button
//             type={type}
//             onClick={onClick}
//             disabled={disabled}
//             className={`group/btn relative overflow-hidden inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-[11px] font-extrabold tracking-widest uppercase transition-all duration-300 active:scale-95 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed disabled:active:scale-100 ${s.base}`}
//         >
//             <span
//                 className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[130%] aspect-square rounded-t-[50%] translate-y-full transition-transform duration-[650ms] ease-in-out z-0 group-hover/btn:translate-y-[12%] ${s.bubble}`}
//             />
//             <span className={`relative z-10 flex items-center gap-2 transition-colors duration-300 ${s.hoverText}`}>
//                 {children}
//                 <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" strokeWidth={2.5} />
//             </span>
//         </button>
//     );
// }

// export default function ContactUsPage() {
//     const siteInfo = useSiteInfo();
//     const contactCards = buildContactCards(siteInfo);

//     const [formData, setFormData] = useState({
//         fullName: "",
//         companyName: "",
//         email: "",
//         phone: "",
//         location: "",
//         products: "",
//         quantity: "",
//         packaging: "",
//         message: "",
//     });
//     const [selectedOptions, setSelectedOptions] = useState([]);
//     const [formErrors, setFormErrors] = useState({});
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [isSuccess, setIsSuccess] = useState(false);
//     const [submitError, setSubmitError] = useState("");

//     const handleChange = (e) => {
//         let { name, value } = e.target;
//         // phone: silently drop anything that is not a digit or a common phone symbol
//         if (name === "phone") value = value.replace(/[^\d+\s().-]/g, "");
//         setFormData((prev) => ({ ...prev, [name]: value }));
//         if (formErrors[name]) setFormErrors((prev) => ({ ...prev, [name]: "" }));
//     };

//     // Validate a single field when the user leaves it (blur bubbles up to the <form>)
//     const handleBlur = (e) => {
//         const { name, value } = e.target;
//         const validator = FIELD_VALIDATORS[name];
//         if (!validator) return;
//         setFormErrors((prev) => ({ ...prev, [name]: validator(value) }));
//     };

//     const toggleOption = (option) => {
//         setSelectedOptions((prev) =>
//             prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
//         );
//     };

//     const validateForm = () => {
//         const errors = {};
//         Object.keys(FIELD_VALIDATORS).forEach((name) => {
//             const message = FIELD_VALIDATORS[name](formData[name] ?? "");
//             if (message) errors[name] = message;
//         });
//         return errors;
//     };

//     const resetForm = () => {
//         setFormData({
//             fullName: "",
//             companyName: "",
//             email: "",
//             phone: "",
//             location: "",
//             products: "",
//             quantity: "",
//             packaging: "",
//             message: "",
//         });
//         setSelectedOptions([]);
//         setFormErrors({});
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (isSubmitting) return;

//         // Honeypot: real users never see or fill this field, bots usually do
//         if (e.target.elements.company_website?.value) {
//             setIsSuccess(true);
//             resetForm();
//             return;
//         }

//         const errors = validateForm();
//         if (Object.keys(errors).length > 0) {
//             setFormErrors(errors);
//             toast.error("Please correct the highlighted fields.", { id: "enquiry-toast" });
//             const firstInvalid = Object.keys(FIELD_VALIDATORS).find((name) => errors[name]);
//             e.target.elements[firstInvalid]?.focus();
//             return;
//         }

//         setIsSubmitting(true);
//         setSubmitError("");

//         try {
//             const payload = {
//                 fullName: clean(formData.fullName),
//                 companyName: clean(formData.companyName),
//                 email: formData.email.trim().toLowerCase(),
//                 phone: formData.phone.trim(),
//                 location: clean(formData.location),
//                 products: clean(formData.products),
//                 quantity: clean(formData.quantity),
//                 packaging: clean(formData.packaging),
//                 message: clean(formData.message),
//                 lookingFor: selectedOptions,
//                 domainName: DOMAIN_NAME,
//             };

//             const response = await fetch(ENQUIRY_URL, {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(payload),
//             });
//             const data = await response.json().catch(() => ({}));
//             if (!response.ok || !data.success) {
//                 throw new Error(data.message || "Something went wrong. Please try again.");
//             }

//             setIsSuccess(true);
//             resetForm();
//             toast.success("Enquiry sent successfully!", { id: "enquiry-toast" });
//         } catch (err) {
//             const errMsg =
//                 err instanceof TypeError
//                     ? "Unable to reach the server. Please check your connection and try again."
//                     : err.message || "Failed to send enquiry. Please try again.";
//             setSubmitError(errMsg);
//             toast.error(errMsg, { id: "enquiry-toast" });
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     return (
//         <>

//             {/* CONTACT PAGE HEADER */}
//             <section className="relative w-full h-[40vh] min-h-[280px] overflow-hidden flex items-center justify-center">
//                 {/* Background Image */}
//                 <img
//                     src="/images/contact1.png"
//                     alt=""
//                     className="absolute inset-0 w-full h-full object-cover"
//                 />

//                 {/* Dark Overlay */}
//                 <div className="absolute inset-0 bg-black/55" />

//                 {/* Header Content */}
//                 <div className="relative z-10 text-center px-6">
//                     <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight">
//                         Contact Us
//                     </h1>
//                 </div>
//             </section>

//             {/* =====================================================================
//                 01. HERO — same dark image-panel treatment as the Our Products intro
//             ===================================================================== */}
//             <section className="relative w-full bg-white px-4 md:px-8 lg:px-10 pt-10 md:pt-14 pb-6">
//                 <div className="max-w-[1380px] mx-auto">
//                     <div className="relative rounded-[40px] bg-forest px-6 py-10 md:px-10 md:py-12 lg:px-14 lg:py-14 overflow-hidden">
//                         {/* Leaf accent, same placement/rotation as Our Products */}
//                         <div className="absolute -top-8 -right-10 pointer-events-none select-none z-0 p-2 md:p-4">
//                             <Image
//                                 src="/lefttree.png"
//                                 alt=""
//                                 width={300}
//                                 height={300}
//                                 className="w-20 h-20 md:w-72 md:h-72 object-contain rotate-[175deg] opacity-90 drop-shadow-md"
//                             />
//                         </div>

//                         <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
//                             {/* LEFT — product visual */}
//                             <div className="w-full lg:w-[38%] flex items-end justify-center lg:justify-start shrink-0">
//                                 <Image
//                                     src="/images/our-product.png"
//                                     alt="Drymato dehydrated products"
//                                     width={680}
//                                     height={680}
//                                     className="w-full max-w-[240px] sm:max-w-[300px] lg:max-w-[440px] h-auto object-contain object-left-bottom"
//                                     style={{ filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.3))" }}
//                                 />
//                             </div>

//                             {/* RIGHT — copy + CTA */}
//                             <div className="w-full lg:w-[62%] flex flex-col items-center lg:items-start text-center lg:text-left">
//                                 <div className="flex items-center gap-2 mb-3">
//                                     <Leaf className="w-4 h-4 text-sage" strokeWidth={2} />
//                                     <span className="text-xs font-bold tracking-[0.2em] uppercase text-sage">
//                                         Get In Touch
//                                     </span>
//                                 </div>

//                                 <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-[1.18] tracking-tight">
//                                     Let&rsquo;s Talk About
//                                     <br />
//                                     <span className="italic text-mustard">Your Requirement</span>
//                                 </h1>

//                                 <p className="mt-4 text-sm md:text-base text-white/75 leading-relaxed max-w-2xl font-sans">
//                                     Whether you&rsquo;re looking for dehydrated ingredients, bulk supply, private label,
//                                     custom packaging or export sourcing — our team is here to understand your
//                                     requirement. Tell us what you need, and we&rsquo;ll take it from there.
//                                 </p>

//                                 <a
//                                     href="#send-requirement"
//                                     className="group/btn mt-6 inline-flex items-center gap-2.5 bg-white hover:bg-mustard text-forest px-6 py-2.5 rounded-full text-xs font-extrabold tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-lg"
//                                 >
//                                     Send an Enquiry
//                                     <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" strokeWidth={2.5} />
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* =====================================================================
//                 02. CONTACT DETAILS — styled like CategorySection cards
//             ===================================================================== */}
//             <section className="w-full bg-white py-14 md:py-16 px-6 md:px-10 lg:px-14">
//                 <div className="max-w-7xl mx-auto">
//                     <div className="flex flex-col items-center text-center mb-10">
//                         <Eyebrow>Get In Touch</Eyebrow>
//                         <h2 className="font-serif text-2xl sm:text-3xl font-medium text-foreground">
//                             Reach Drymato Directly
//                         </h2>
//                     </div>

//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                         {contactCards.map((card) => {
//                             const CardIcon = card.Icon;
//                             const cardContent = (
//                                 <div
//                                     className="relative group cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-xl flex flex-col justify-between h-full"
//                                     style={{
//                                         backgroundColor: card.bgColor,
//                                         borderRadius: "32px 85px 28px 28px",
//                                         minHeight: "260px",
//                                     }}
//                                 >
//                                     {/* Product / Visual Image at bottom right */}
//                                     <div className="absolute -right-3 -bottom-2 w-[65%] sm:w-[60%] md:w-[70%] h-[62%] pointer-events-none select-none z-0">
//                                         <Image
//                                             src={card.imageUrl}
//                                             alt={card.imageAlt}
//                                             fill
//                                             sizes="(max-width: 640px) 220px, (max-width: 768px) 250px, 280px"
//                                             className="object-contain object-right-bottom group-hover:scale-105 transition-transform duration-500 ease-out opacity-100"
//                                         />
//                                     </div>

//                                     {/* Foreground Content Container */}
//                                     <div className="p-6 sm:p-7 flex flex-col justify-between h-full relative z-10 max-w-[72%] sm:max-w-[70%]">
//                                         <div>
//                                             <div className="mb-3" style={{ color: card.textColor }}>
//                                                 <CardIcon color={card.iconColor} />
//                                             </div>

//                                             <h3
//                                                 className="font-bold text-xs sm:text-sm tracking-wider uppercase mb-2 leading-snug"
//                                                 style={{ color: card.textColor }}
//                                             >
//                                                 {card.title}
//                                             </h3>

//                                             <p
//                                                 className="text-sm sm:text-[15px] font-semibold mb-2 break-words"
//                                                 style={{ color: card.textColor }}
//                                             >
//                                                 {card.value}
//                                             </p>

//                                             <ul className="space-y-1">
//                                                 {card.lines.map((line) => (
//                                                     <li
//                                                         key={line}
//                                                         className="text-xs sm:text-[13px] leading-relaxed font-medium"
//                                                         style={{ color: card.descColor }}
//                                                     >
//                                                         {line}
//                                                     </li>
//                                                 ))}
//                                             </ul>
//                                         </div>

//                                         <div className="mt-6 pt-2">
//                                             <span
//                                                 className="inline-block px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wider uppercase transition-all duration-200 group-hover:scale-105 shadow-xs whitespace-nowrap"
//                                                 style={{
//                                                     border: `2px solid ${card.buttonBorder}`,
//                                                     color: card.buttonText,
//                                                     backgroundColor: "transparent",
//                                                 }}
//                                             >
//                                                 {card.cta}
//                                             </span>
//                                         </div>
//                                     </div>
//                                 </div>
//                             );

//                             return card.href ? (
//                                 <a
//                                     key={card.id}
//                                     href={card.href}
//                                     target={card.href.startsWith("http") ? "_blank" : undefined}
//                                     rel="noopener noreferrer"
//                                     className="block h-full"
//                                 >
//                                     {cardContent}
//                                 </a>
//                             ) : (
//                                 <div key={card.id} className="h-full">
//                                     {cardContent}
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </section>

//             {/* =====================================================================
//                 03. SEND YOUR REQUIREMENT — main enquiry form
//             ===================================================================== */}
//             <section id="send-requirement" className="w-full bg-sage/10 py-16 md:py-20 px-6 md:px-10 lg:px-14">
//                 <div className="max-w-4xl mx-auto">
//                     <div className="flex flex-col items-center text-center mb-10">
//                         <Eyebrow>Looking For Something Specific?</Eyebrow>
//                         <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium text-foreground max-w-xl">
//                             Send Your Requirement
//                         </h2>
//                         <p className="mt-3 text-foreground/70 text-sm sm:text-base max-w-lg">
//                             Tell us a little about your business needs so we can understand what you&rsquo;re looking for.
//                         </p>
//                     </div>

//                     <div className="bg-white rounded-[32px] shadow-[0_15px_45px_rgba(0,0,0,0.04)] border border-sage/15 p-6 sm:p-10 md:p-12">
//                         {!isSuccess ? (
//                             <form onSubmit={handleSubmit} onBlur={handleBlur} noValidate className="flex flex-col gap-6">
//                                 {/* Honeypot (hidden from real users) */}
//                                 <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
//                                     <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
//                                 </div>

//                                 {/* Name + Company */}
//                                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                                     <Field
//                                         name="fullName"
//                                         value={formData.fullName}
//                                         onChange={handleChange}
//                                         placeholder="Full Name *"
//                                         error={formErrors.fullName}
//                                     />
//                                     <Field
//                                         name="companyName"
//                                         value={formData.companyName}
//                                         onChange={handleChange}
//                                         placeholder="Company Name *"
//                                         error={formErrors.companyName}
//                                     />
//                                 </div>

//                                 {/* Email + Phone */}
//                                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                                     <Field
//                                         name="email"
//                                         type="email"
//                                         value={formData.email}
//                                         onChange={handleChange}
//                                         placeholder="Email Address *"
//                                         error={formErrors.email}
//                                     />
//                                     <Field
//                                         name="phone"
//                                         value={formData.phone}
//                                         onChange={handleChange}
//                                         placeholder="Phone / WhatsApp *"
//                                         error={formErrors.phone}
//                                     />
//                                 </div>

//                                 {/* Location */}
//                                 <Field
//                                     name="location"
//                                     value={formData.location}
//                                     onChange={handleChange}
//                                     placeholder="Country / City *"
//                                     error={formErrors.location}
//                                 />

//                                 {/* What are you looking for — checkbox chips */}
//                                 <div>
//                                     <label className="text-xs font-bold tracking-wider uppercase text-forest mb-3 block">
//                                         What are you looking for?
//                                     </label>
//                                     <div className="flex flex-wrap gap-2.5">
//                                         {ENQUIRY_OPTIONS.map((option) => {
//                                             const active = selectedOptions.includes(option);
//                                             return (
//                                                 <button
//                                                     type="button"
//                                                     key={option}
//                                                     onClick={() => toggleOption(option)}
//                                                     className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide border transition-all duration-200 cursor-pointer ${active
//                                                         ? "bg-forest border-forest text-white"
//                                                         : "bg-[#fcfbfa] border-sage/30 text-foreground/70 hover:border-forest/50"
//                                                         }`}
//                                                 >
//                                                     {option}
//                                                 </button>
//                                             );
//                                         })}
//                                     </div>
//                                 </div>

//                                 {/* Products + Quantity */}
//                                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                                     <Field
//                                         name="products"
//                                         value={formData.products}
//                                         onChange={handleChange}
//                                         placeholder="Products Required (e.g. Tomato, Onion Powder)"
//                                     />
//                                     <Field
//                                         name="quantity"
//                                         value={formData.quantity}
//                                         onChange={handleChange}
//                                         placeholder="Quantity Required (e.g. 500 KG)"
//                                     />
//                                 </div>

//                                 {/* Packaging */}
//                                 <Field
//                                     name="packaging"
//                                     value={formData.packaging}
//                                     onChange={handleChange}
//                                     placeholder="Packaging Requirement (e.g. Bulk, Vacuum, Private Label)"
//                                 />

//                                 {/* Message */}
//                                 <div className="flex flex-col gap-1">
//                                     <textarea
//                                         name="message"
//                                         rows="4"
//                                         maxLength={1000}
//                                         value={formData.message}
//                                         onChange={handleChange}
//                                         placeholder="Additional requirements — application, specification, or anything else"
//                                         className={`w-full bg-[#fcfbfa] border ${formErrors.message ? "border-red-500" : "border-sage/25"} rounded-2xl px-5 py-3.5 text-foreground placeholder-foreground/40 font-medium text-sm focus:outline-none focus:border-forest focus:ring-2 focus:ring-forest/10 transition-all duration-300 resize-none`}
//                                     />
//                                     {formErrors.message && (
//                                         <span className="flex items-center gap-1 text-red-500 font-bold text-[11px] mt-0.5">
//                                             <AlertCircle className="w-3 h-3 shrink-0" strokeWidth={2.5} />
//                                             {formErrors.message}
//                                         </span>
//                                     )}
//                                 </div>

//                                 {submitError && (
//                                     <div className="bg-red-50 border border-red-200/80 rounded-2xl px-5 py-3.5 text-red-700 text-xs font-semibold leading-relaxed">
//                                         <span className="flex items-start gap-2">
//                                             <AlertCircle className="w-4 h-4 shrink-0 mt-px" strokeWidth={2} />
//                                             {submitError}
//                                         </span>
//                                     </div>
//                                 )}

//                                 <div className="flex justify-start">
//                                     <BubbleButton type="submit" disabled={isSubmitting}>
//                                         {isSubmitting ? "Submitting..." : "Submit Enquiry"}
//                                     </BubbleButton>
//                                 </div>
//                             </form>
//                         ) : (
//                             <div className="flex flex-col items-center justify-center py-10 text-center">
//                                 <div className="w-20 h-20 rounded-full bg-sage/15 border border-sage/30 flex items-center justify-center shadow-md mb-6 relative">
//                                     <div className="absolute inset-0 rounded-full border border-forest/30 animate-ping opacity-70" />
//                                     <svg className="w-10 h-10 text-forest" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
//                                     </svg>
//                                 </div>
//                                 <h3 className="font-serif text-2xl sm:text-3xl font-medium text-foreground mb-3">
//                                     Enquiry Sent!
//                                 </h3>
//                                 <p className="text-foreground/70 text-sm sm:text-base max-w-sm mb-8 leading-relaxed">
//                                     Thank you for reaching out. Our team has received your requirement and will get back
//                                     to you shortly.
//                                 </p>
//                                 <button
//                                     onClick={() => {
//                                         setIsSuccess(false);
//                                         setSubmitError("");
//                                     }}
//                                     className="text-xs font-extrabold tracking-widest uppercase text-forest border-b-2 border-forest pb-1 cursor-pointer"
//                                 >
//                                     Send Another Enquiry
//                                 </button>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </section>

//             {/* =====================================================================
//                 04 + 05. BULK / WHOLESALE + EXPORT — two-up dark cards
//             ===================================================================== */}
//             {/* =====================================================================
//                 04 + 05. BULK / WHOLESALE + EXPORT — Updated with Visual Card Style
//             ===================================================================== */}
//             <section className="w-full bg-white py-16 md:py-20 px-6 md:px-10 lg:px-14">
//                 <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">

//                     {/* Bulk & Wholesale Card */}
//                     <div
//                         className="relative group overflow-hidden p-8 sm:p-10 flex flex-col justify-between"
//                         style={{ backgroundColor: "#243822", borderRadius: "32px 85px 28px 28px", minHeight: "320px" }}
//                     >
//                         {/* Product / Visual Image at bottom right */}
//                         <div className="absolute -right-3 -bottom-2 w-[55%] sm:w-[50%] h-[60%] pointer-events-none select-none z-0">
//                             <Image
//                                 src="/images/categories/vegetable-powder.png"
//                                 alt="Bulk wholesale vegetable powder supply"
//                                 fill
//                                 sizes="(max-width: 640px) 200px, 250px"
//                                 className="object-contain object-right-bottom group-hover:scale-105 transition-transform duration-500 ease-out opacity-90"
//                             />
//                         </div>

//                         {/* Foreground Content Container */}
//                         <div className="relative z-10 max-w-[75%] sm:max-w-[70%]">
//                             <Boxes className="w-6 h-6 text-white mb-4" strokeWidth={1.8} />
//                             <h3 className="font-serif text-2xl sm:text-[1.75rem] font-medium text-white mb-3">
//                                 Buying in Bulk?
//                             </h3>
//                             <p className="text-sm text-[#CBD8C7] leading-[1.8] mb-1">
//                                 For a faster quotation, please share:
//                             </p>
//                             <p className="text-sm text-white font-semibold leading-[1.8] mb-4">
//                                 Product + Quantity + Format + Packaging Requirement
//                             </p>
//                             <p className="text-xs text-[#CBD8C7] leading-relaxed">
//                                 The more details you provide, the better we can understand your requirement.
//                             </p>
//                         </div>

//                         <div className="mt-8 relative z-10">
//                             <a href="#send-requirement">
//                                 <BubbleButton>Request Bulk Quote</BubbleButton>
//                             </a>
//                         </div>
//                     </div>

//                     {/* Export Card */}
//                     <div
//                         className="relative group overflow-hidden p-8 sm:p-10 flex flex-col justify-between"
//                         style={{ backgroundColor: "#8A2C21", borderRadius: "32px 85px 28px 28px", minHeight: "320px" }}
//                     >
//                         {/* Product / Visual Image at bottom right */}
//                         <div className="absolute -right-3 -bottom-2 w-[55%] sm:w-[50%] h-[60%] pointer-events-none select-none z-0">
//                             <Image
//                                 src="/images/categories/dried-fruits.png"
//                                 alt="International export dry fruits supply"
//                                 fill
//                                 sizes="(max-width: 640px) 200px, 250px"
//                                 className="object-contain object-right-bottom group-hover:scale-105 transition-transform duration-500 ease-out opacity-90"
//                             />
//                         </div>

//                         {/* Foreground Content Container */}
//                         <div className="relative z-10 max-w-[72%] sm:max-w-[70%]">
//                             <Globe2 className="w-6 h-6 text-white mb-4" strokeWidth={1.8} />
//                             <h3 className="font-serif text-2xl sm:text-[1.75rem] font-medium text-white mb-3">
//                                 Looking to Source From India?
//                             </h3>
//                             <p className="text-sm text-[#F2D3CF] leading-[1.8] mb-2">
//                                 International buyers can share:
//                             </p>
//                             <ul className="text-sm text-white font-semibold leading-[1.8] mb-2 list-disc list-inside">
//                                 <li>Product & quantity</li>
//                                 <li>Specifications</li>
//                                 <li>Packaging</li>
//                                 <li>Destination port</li>
//                             </ul>
//                         </div>

//                         <div className="mt-4 relative z-10">
//                             <a href="#send-requirement">
//                                 <BubbleButton>Send Export Enquiry</BubbleButton>
//                             </a>
//                         </div>
//                     </div>

//                 </div>
//             </section>
//             {/* =====================================================================
//                 06. PRIVATE LABEL — process flow banner (matches OurSourcing style)
//             ===================================================================== */}
//             <section className="w-full bg-white py-16 md:py-20 px-6 md:px-10 lg:px-14">
//                 <div className="max-w-7xl mx-auto">
//                     <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

//                         {/* 1. Left Column: Rounded Image Card */}
//                         <div className="lg:col-span-4 w-full flex justify-center">
//                             <Image
//                                 src="/images/categories/dried-vegetables.png"
//                                 alt="Drymato private label process"
//                                 width={550}
//                                 height={500}
//                                 className="w-full h-auto object-contain"
//                                 priority
//                             />
//                         </div>

//                         {/* 2. Middle Column: Title, Description & Process Flow Steps */}
//                         <div className="lg:col-span-5 flex flex-col text-left">
//                             <div className="flex items-center gap-2 mb-2">
//                                 <Leaf className="w-3.5 h-3.5 text-forest" strokeWidth={2} />
//                                 <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-forest">
//                                     Private Label
//                                 </span>
//                             </div>

//                             <h3 className="font-serif text-2xl sm:text-3xl font-medium text-foreground leading-[1.2] tracking-tight">
//                                 Building Your <br />
//                                 Own Brand?
//                             </h3>

//                             <p className="mt-2.5 text-xs sm:text-sm text-foreground/75 leading-relaxed font-sans max-w-md">
//                                 Tell us about your private-label requirement — we&rsquo;ll walk you through what&rsquo;s possible, end to end.
//                             </p>

//                             {/* Process Flow Steps */}
//                             <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 my-6">
//                                 {PRIVATE_LABEL_FLOW.map((step) => {
//                                     const StepIcon = step.icon;
//                                     return (
//                                         <div
//                                             key={step.title}
//                                             className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#FBF8F1] border border-sage/25 shadow-xs"
//                                         >
//                                             <StepIcon className="w-5 h-5 text-forest shrink-0" strokeWidth={1.8} />
//                                             <span className="text-xs font-semibold text-foreground tracking-wide">
//                                                 {step.title}
//                                             </span>
//                                         </div>
//                                     );
//                                 })}
//                             </div>

//                             <div className="font-serif text-sm italic text-foreground/75">
//                                 Eat green, live green.
//                             </div>
//                         </div>

//                         {/* 3. Right Column: Larger Scratch Background Image with Responsive Content */}
//                         <div className="lg:col-span-3 w-full flex justify-center">
//                             <div className="relative w-full max-w-[420px] min-h-[420px] p-8 sm:p-10 flex flex-col items-center justify-center text-center">

//                                 {/* Background Scratch/Brush Image (Larger size & proper coverage) */}
//                                 <Image
//                                     src="/scratch.png"
//                                     alt="Scratch background"
//                                     fill
//                                     priority
//                                     className="absolute inset-0 w-full h-full scale-125 object-contain pointer-events-none select-none"
//                                 />

//                                 {/* Content Over Image */}
//                                 <div className="relative z-10 flex flex-col items-center w-full max-w-[260px] mx-auto">
//                                     <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center mb-3 text-forest">
//                                         <Globe2 className="w-5 h-5" strokeWidth={1.8} />
//                                     </div>

//                                     <h4 className="font-serif text-base font-bold text-foreground mb-1.5 leading-snug">
//                                         Join us in making a difference.
//                                     </h4>

//                                     <p className="text-[11px] sm:text-xs text-foreground/70 leading-relaxed mb-5 font-medium">
//                                         A portion of every order supports sustainable farming and community welfare initiatives.
//                                     </p>

//                                     <a href="#send-requirement">
//                                         <BubbleButton> Label Enquiry</BubbleButton>
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </section>

//             {/* =====================================================================
//                 07. FIND US + trust bar (same design as the hero's trust bar)
//             ===================================================================== */}
//             <section className="relative w-full bg-sage/10 py-10 sm:py-14 px-[5%] overflow-hidden">
//                 <div className="flex flex-col items-center text-center mb-8">
//                     <Eyebrow>Find Us</Eyebrow>
//                     <h2 className="font-serif text-2xl sm:text-3xl font-medium text-foreground">
//                         Based in Rajasthan. Connected to Markets Beyond.
//                     </h2>
//                     {siteInfo.address && (
//                         <p className="mt-2 text-foreground/70 text-sm flex items-center gap-1.5">
//                             <MapPin className="w-4 h-4 text-forest shrink-0" strokeWidth={2} />
//                             {siteInfo.address}
//                         </p>
//                     )}
//                 </div>

//                 <div className="relative max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-x divide-sage/30 gap-x-1 sm:gap-x-4 gap-y-6 sm:gap-y-0">
//                     {WHY_DRYMATO.map(({ icon: Icon, title }) => (
//                         <div key={title} className="flex flex-col items-center gap-1 sm:gap-2.5 px-1 sm:px-4 first:pl-0 last:pr-0 text-center">
//                             <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-forest" strokeWidth={1.5} />
//                             <span className="text-[10px] sm:text-xs font-bold text-foreground leading-tight">{title}</span>
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             {/* =====================================================================
//                 08. FINAL CTA
//             ===================================================================== */}

//             <section className="relative w-full flex bg-[#fbf8f1] justify-between items-center overflow-hidden">
//                 <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center pl-6 sm:pl-12 lg:pl-24 pr-0 relative z-10">

//                     {/* Left Half: Bowl image + Content & CTA */}
//                     <div className="flex flex-col sm:flex-row items-center gap-6 lg:gap-8 text-center sm:text-left py-12 md:py-16 z-20">
//                         <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 shrink-0 flex items-center justify-center group/jar">
//                             <div className="absolute w-60 h-60 bg-white/10 rounded-full filter blur-xl -z-10 group-hover:scale-110 transition-transform duration-700"></div>
//                             <Image
//                                 src="/dryTomatobowl.png"
//                                 alt="Dehydrated produce bowl"
//                                 width={256}
//                                 height={256}
//                                 className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]"
//                             />
//                         </div>

//                         <div className="space-y-4">
//                             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-medium text-forest leading-[1.25] tracking-tight">
//                                 Have a Requirement? <br />
//                                 Let&rsquo;s Build It Together.
//                             </h2>
//                             <p className="text-sm sm:text-base text-forest leading-[1.8] max-w-sm">
//                                 From a sample requirement to commercial quantities, wholesale supply and international sourcing — start by telling us what you&rsquo;re looking for.
//                             </p>

//                             {siteInfo.email && (
//                                 <div className="pt-1">
//                                     <a
//                                         href={`mailto:${siteInfo.email}`}
//                                         className="inline-flex items-center gap-2 text-forest font-semibold text-sm hover:underline"
//                                     >
//                                         <Mail className="w-4 h-4" strokeWidth={2} />
//                                         {siteInfo.email}
//                                     </a>
//                                 </div>
//                             )}

//                             <div className="pt-2 flex justify-center sm:justify-start">
//                                 <a href="#send-requirement">
//                                     <BubbleButton variant="outline">Send Your Requirement</BubbleButton>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="w-full flex justify-end items-center">
//                         <Image
//                             src="/alldishes.png"
//                             alt="Dishes made with Drymato ingredients"
//                             width={800}
//                             height={700}
//                             priority
//                             className="w-full h-auto object-contain"
//                         />
//                     </div>

//                 </div>
//             </section>
//         </>
//     );
// }

// // ---------------------------------------------------------------------------
// // Small shared input field with error state (matches ContactClient.jsx styling)
// // ---------------------------------------------------------------------------
// function Field({ name, value, onChange, placeholder, error, type }) {
//     const meta = FIELD_META[name] || {};
//     return (
//         <div className="flex flex-col gap-1">
//             <input
//                 type={type ?? meta.type ?? "text"}
//                 maxLength={meta.maxLength}
//                 autoComplete={meta.autoComplete}
//                 inputMode={meta.inputMode}
//                 aria-invalid={!!error}
//                 name={name}
//                 value={value}
//                 onChange={onChange}
//                 placeholder={placeholder}
//                 className={`w-full bg-[#fcfbfa] border ${error ? "border-red-500" : "border-sage/25"
//                     } rounded-2xl px-5 py-3.5 text-foreground placeholder-foreground/40 font-medium text-sm focus:outline-none focus:border-forest focus:ring-2 focus:ring-forest/10 transition-all duration-300`}
//             />
//             {error && (
//                 <span className="flex items-center gap-1 text-red-500 font-bold text-[11px] mt-0.5">
//                     <AlertCircle className="w-3 h-3 shrink-0" strokeWidth={2.5} />
//                     {error}
//                 </span>
//             )}
//         </div>
//     );
// }




"use client";

import { useState, useMemo } from "react";
import { Country, State, City } from "country-state-city";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import Image from "next/image";
import toast from "react-hot-toast";
import { useSiteInfo } from "@/context/WebsiteDataContext";
import {
    Leaf,
    ArrowRight,
    MapPin,
    Mail,
    Package,
    Tag,
    Boxes,
    Globe2,
    Handshake,
    Sprout,
    Cpu,
    Flame,
    ShieldCheck,
    AlertCircle,
    ChevronDown,
} from "lucide-react";

const ENQUIRY_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/contactservice/submitEnquiry`;
const DOMAIN_NAME = "Drymato";

const COUNTRIES = Country.getAllCountries().filter(
    (c) => State.getStatesOfCountry(c.isoCode).length > 0
);

// ---------------------------------------------------------------------------
// Validation (international-friendly: no country-specific rules)
// ---------------------------------------------------------------------------
const clean = (v = "") => v.replace(/\s+/g, " ").trim();
const countLetters = (v) => (v.match(/\p{L}/gu) || []).length;

const KEY_ROWS = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
const KEY_RUNS = new Set();
KEY_ROWS.forEach((row) => {
    const rev = row.split("").reverse().join("");
    for (let i = 0; i <= row.length - 5; i++) {
        KEY_RUNS.add(row.slice(i, i + 5));
        KEY_RUNS.add(rev.slice(i, i + 5));
    }
});

// Catches keyboard mashing ("asdfghj", "qwerty"), repeated letters ("rrrr") and
// impossible consonant clusters. Deliberately lenient so real names, companies
// and places in any Latin-script language still pass.
function looksLikeGibberish(value) {
    const t = value.toLowerCase();
    if (/(\p{L})\1{3,}/u.test(t)) return true;
    const compact = t.replace(/[\s\d\p{P}]/gu, "");
    if (compact.length >= 4 && new Set(compact).size < 3) return true;
    return t.split(/[^a-z]+/).some(
        (w) =>
            /[bcdfghjklmnpqrstvwxz]{6,}/.test(w) ||
            [...Array(Math.max(0, w.length - 4)).keys()].some((i) => KEY_RUNS.has(w.slice(i, i + 5)))
    );
}

const EMAIL_RE =
    /^[A-Za-z0-9](?:[A-Za-z0-9._%+-]{0,62}[A-Za-z0-9])?@(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z]{2,24}$/;

const FIELD_VALIDATORS = {
    fullName: (raw) => {
        const v = clean(raw);
        if (!v) return "Full name is required";
        if (v.length < 2 || countLetters(v) < 2) return "Please enter your full name";
        if (v.length > 80) return "Name is too long (max 80 characters)";
        if (!/^[\p{L}\p{M}][\p{L}\p{M} .'’-]*$/u.test(v)) return "Name can only contain letters, spaces and . ' -";
        if (looksLikeGibberish(v)) return "Please enter a valid name";
        return "";
    },
    companyName: (raw) => {
        const v = clean(raw);
        if (!v) return "Company name is required";
        if (v.length < 2 || countLetters(v) < 2) return "Please enter a valid company name";
        if (v.length > 100) return "Company name is too long (max 100 characters)";
        if (!/^[\p{L}\p{N}][\p{L}\p{M}\p{N} &.,'’()\/+-]*$/u.test(v)) return "Company name contains invalid characters";
        if (looksLikeGibberish(v)) return "Please enter a valid company name";
        return "";
    },
    email: (raw) => {
        const v = raw.trim();
        if (!v) return "Email address is required";
        if (v.length > 254 || v.includes("..") || !EMAIL_RE.test(v)) return "Please enter a valid email address";
        return "";
    },
    // phone: (raw) => {
    //     const v = raw.trim();
    //     if (!v) return "Phone / WhatsApp number is required";
    //     if (!/^\+?[\d\s().-]+$/.test(v)) return "Use digits only, with an optional + country code";
    //     const digits = v.replace(/\D/g, "");
    //     if (digits.length < 7 || digits.length > 15) return "Enter a valid number with country code (7 to 15 digits)";
    //     if (/^(\d)\1+$/.test(digits)) return "Please enter a valid phone number";
    //     if ("01234567890123456789".includes(digits) || "98765432109876543210".includes(digits)) {
    //         return "Please enter a valid phone number";
    //     }
    //     return "";
    // },

    phone: (raw, form = {}) => {
        const v = raw.trim();
        if (!v) return "Phone / WhatsApp number is required";
        if (!form.countryIsoCode) return "Please select your country first";
        if (!/^\+?[\d\s().-]+$/.test(v)) return "Use digits only";
        const parsed = parsePhoneNumberFromString(v, form.countryIsoCode);
        if (!parsed || !parsed.isValid()) return "Please enter a valid phone number for the selected country";
        return "";
    },

    // location: (raw) => {
    //     const v = clean(raw);
    //     if (!v) return "Country / City is required";
    //     if (v.length < 2 || countLetters(v) < 2) return "Please enter a valid country or city";
    //     if (v.length > 100) return "Location is too long (max 100 characters)";
    //     if (!/^[\p{L}\p{N}][\p{L}\p{M}\p{N} .,'’()\/-]*$/u.test(v)) return "Location contains invalid characters";
    //     if (looksLikeGibberish(v)) return "Please enter a valid country or city";
    //     return "";
    // },

    countryIsoCode: (v) => (v ? "" : "Please select a country"),
    stateCode: (v) => (v ? "" : "Please select a state"),
    city: (v) => (v ? "" : "Please select a city"),

    products: (raw) => {
        const v = clean(raw);
        if (!v) return "";
        if (v.length < 2 || countLetters(v) < 2) return "Please enter valid product names";
        if (v.length > 200) return "Too long (max 200 characters)";
        if (looksLikeGibberish(v)) return "Please enter valid product names";
        return "";
    },
    quantity: (raw) => {
        const v = clean(raw);
        if (!v) return "";
        if (v.length > 50) return "Too long (max 50 characters)";
        if (!/\d/.test(v)) return "Include a number, e.g. 500 KG or 2 tons";
        const words = v.replace(/[\d\s.,]/g, "");
        if (words && looksLikeGibberish(words)) return "Please enter a valid quantity, e.g. 500 KG";
        return "";
    },
    packaging: (raw) => {
        const v = clean(raw);
        if (!v) return "";
        if (v.length < 2 || countLetters(v) < 2) return "Please enter a valid packaging requirement";
        if (v.length > 150) return "Too long (max 150 characters)";
        if (looksLikeGibberish(v)) return "Please enter a valid packaging requirement";
        return "";
    },
    message: (raw) => {
        const v = clean(raw);
        if (!v) return "Message is required";
        if (v.length < 10) return "Please add a few more details (at least 10 characters)";
        if (v.length > 1000) return "Message is too long (max 1000 characters)";
        if (looksLikeGibberish(v)) return "Please write a meaningful message";
        return "";
    },
};

const FIELD_META = {
    fullName: { maxLength: 80, autoComplete: "name" },
    companyName: { maxLength: 100, autoComplete: "organization" },
    email: { maxLength: 254, autoComplete: "email", inputMode: "email" },
    phone: { maxLength: 20, autoComplete: "tel", inputMode: "tel", type: "tel" },
    // location: { maxLength: 100, autoComplete: "off" },
    products: { maxLength: 200, autoComplete: "off" },
    quantity: { maxLength: 50, autoComplete: "off" },
    packaging: { maxLength: 150, autoComplete: "off" },
};

// ---------------------------------------------------------------------------
// Static content — edit copy here, layout stays untouched
// ---------------------------------------------------------------------------

// Card values (email / phone / address) come from the website API via useSiteInfo.
// A card is skipped automatically when its value is missing.
function buildContactCards({ email, phoneDisplay, whatsapp, whatsappLink, phoneTel, address, supportTime }) {
    const phoneValue = phoneDisplay || whatsapp;
    const phoneHref = whatsappLink || (phoneTel ? `tel:${phoneTel}` : null);

    return [
        {
            id: "email",
            title: "EMAIL",
            value: email,
            href: email ? `mailto:${email}` : null,
            lines: ["Bulk enquiries", "Wholesale", "Export enquiries", "Private label", "Product enquiries"],
            Icon: Mail,
            bgColor: "#243822",
            textColor: "#FFFFFF",
            descColor: "#CBD8C7",
            buttonBorder: "rgba(255, 255, 255, 0.4)",
            buttonText: "#FFFFFF",
            iconColor: "#FFFFFF",
            imageUrl: "/images/categories/vegetable-powder.png",
            imageAlt: "Drymato email support",
            cta: "SEND EMAIL",
        },
        {
            id: "phone",
            title: "PHONE / WHATSAPP",
            value: phoneValue,
            href: phoneHref,
            lines: ["Talk to our team directly", supportTime].filter(Boolean),
            Icon: PhoneIconPlaceholder,
            bgColor: "#8A2C21",
            textColor: "#FFFFFF",
            descColor: "#F2D3CF",
            buttonBorder: "rgba(255, 255, 255, 0.5)",
            buttonText: "#FFFFFF",
            iconColor: "#FFFFFF",
            imageUrl: "/images/categories/dried-fruits.png",
            imageAlt: "Drymato phone support",
            cta: whatsappLink ? "CONNECT WHATSAPP" : "CALL US",
        },
        {
            id: "location",
            title: "LOCATION",
            value: address,
            href: address
                ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
                : null,
            lines: ["Connected to markets across", "India & international buyers"],
            Icon: MapPin,
            bgColor: "#FBF8F1",
            textColor: "#243822",
            descColor: "#5C6B52",
            buttonBorder: "#243822",
            buttonText: "#243822",
            iconColor: "#243822",
            imageUrl: "/images/categories/dried-vegetables.png",
            imageAlt: "Drymato location",
            cta: "VIEW LOCATION",
        },
    ].filter((card) => card.value);
}

const ENQUIRY_OPTIONS = [
    "Wholesale Supply",
    "Bulk Ingredients",
    "Export",
    "Private Label",
    "Custom Packaging",
    "Product Samples",
    "Other",
];

const PRIVATE_LABEL_FLOW = [
    { title: "Product", icon: Sprout },
    { title: "Processing", icon: Cpu },
    { title: "Dehydration", icon: Flame },
    { title: "Packaging", icon: Package },
    { title: "Custom Label", icon: Tag },
    { title: "Supply", icon: Boxes },
];

const WHY_DRYMATO = [
    { icon: Handshake, title: "B2B Supply" },
    { icon: Package, title: "Bulk Orders" },
    { icon: Tag, title: "Private Label" },
    { icon: Boxes, title: "Custom Packaging" },
    { icon: Globe2, title: "Export Ready" },
    { icon: ShieldCheck, title: "Quality Checked" },
];

function PhoneIconPlaceholder({ className }) {
    return (
        <svg className={className} width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.2a1 1 0 0 0 .25-1.02A11.36 11.36 0 0 1 8.5 4c0-.56-.44-1-1-1H4c-.56 0-1 .44-1 1C3 12.84 11.16 21 21 21c.56 0 1-.44 1-1v-3.5c0-.56-.44-1-1-1z" />
        </svg>
    );
}

// ---------------------------------------------------------------------------
// Reusable eyebrow (Leaf + tracked label), matches OurSourcing.jsx exactly
// ---------------------------------------------------------------------------
function Eyebrow({ children, light = false }) {
    return (
        <div className="flex items-center gap-2 mb-3">
            <Leaf className={`w-4 h-4 ${light ? "text-white" : "text-forest"}`} strokeWidth={2} />
            <span
                className={`text-[11px] font-bold tracking-[0.2em] uppercase ${light ? "text-white/90" : "text-forest"
                    }`}
            >
                {children}
            </span>
        </div>
    );
}

// Primary rounded-full button with the rising-bubble hover fill, reused from
// the hero + contact CTAs already in the codebase.
function BubbleButton({ children, onClick, type = "button", variant = "solid", disabled = false }) {
    // solid: forest bg, white text — default, used on light backgrounds
    // outline: white border/text — used when the button sits on a forest/dark background
    const styles = {
        solid: {
            base: "bg-forest border-2 border-forest text-white shadow-[0_6px_20px_rgba(36,56,34,0.18)]",
            bubble: "bg-white",
            hoverText: "group-hover/btn:text-forest",
        },
        outline: {
            base: "bg-forest border-2 border-white text-white",
            bubble: "bg-white",
            hoverText: "group-hover/btn:text-forest",
        },
    };
    const s = styles[variant] || styles.solid;

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`group/btn relative overflow-hidden inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-[11px] font-extrabold tracking-widest uppercase transition-all duration-300 active:scale-95 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed disabled:active:scale-100 ${s.base}`}
        >
            <span
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[130%] aspect-square rounded-t-[50%] translate-y-full transition-transform duration-[650ms] ease-in-out z-0 group-hover/btn:translate-y-[12%] ${s.bubble}`}
            />
            <span className={`relative z-10 flex items-center gap-2 transition-colors duration-300 ${s.hoverText}`}>
                {children}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" strokeWidth={2.5} />
            </span>
        </button>
    );
}

export default function ContactUsPage() {
    const siteInfo = useSiteInfo();
    const contactCards = buildContactCards(siteInfo);

    const [formData, setFormData] = useState({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        // location: "",
        countryIsoCode: "",
        stateCode: "",
        city: "",
        products: "",
        quantity: "",
        packaging: "",
        message: "",
    });
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [submitError, setSubmitError] = useState("");

    const states = useMemo(
        () => (formData.countryIsoCode ? State.getStatesOfCountry(formData.countryIsoCode) : []),
        [formData.countryIsoCode]
    );
    const cities = useMemo(
        () =>
            formData.countryIsoCode && formData.stateCode
                ? City.getCitiesOfState(formData.countryIsoCode, formData.stateCode)
                : [],
        [formData.countryIsoCode, formData.stateCode]
    );
    const selectedCountry = COUNTRIES.find((c) => c.isoCode === formData.countryIsoCode);
    const dialCode = selectedCountry ? `+${String(selectedCountry.phonecode).replace(/^\+/, "")}` : "";

    // const handleChange = (e) => {
    //     let { name, value } = e.target;
    //     // phone: silently drop anything that is not a digit or a common phone symbol
    //     if (name === "phone") value = value.replace(/[^\d+\s().-]/g, "");
    //     setFormData((prev) => ({ ...prev, [name]: value }));
    //     if (formErrors[name]) setFormErrors((prev) => ({ ...prev, [name]: "" }));
    // };

    const handleChange = (e) => {
        let { name, value } = e.target;
        // phone: silently drop anything that is not a digit or a common phone symbol
        if (name === "phone") value = value.replace(/[^\d+\s().-]/g, "");
        setFormData((prev) => {
            const next = { ...prev, [name]: value };
            if (name === "countryIsoCode") {
                next.stateCode = "";
                next.city = "";
            }
            if (name === "stateCode") next.city = "";
            return next;
        });
        if (formErrors[name]) setFormErrors((prev) => ({ ...prev, [name]: "" }));
        if (name === "countryIsoCode") setFormErrors((prev) => ({ ...prev, phone: "", stateCode: "", city: "" }));
    };

    // Validate a single field when the user leaves it (blur bubbles up to the <form>)
    const handleBlur = (e) => {
        const { name, value } = e.target;
        const validator = FIELD_VALIDATORS[name];
        if (!validator) return;
        // setFormErrors((prev) => ({ ...prev, [name]: validator(value) }));
        setFormErrors((prev) => ({ ...prev, [name]: validator(value, formData) }));
    };

    const toggleOption = (option) => {
        setSelectedOptions((prev) =>
            prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
        );
    };

    const validateForm = () => {
        const errors = {};
        Object.keys(FIELD_VALIDATORS).forEach((name) => {
            const message = FIELD_VALIDATORS[name](formData[name] ?? "", formData);
            if (message) errors[name] = message;
        });
        return errors;
    };

    const resetForm = () => {
        setFormData({
            fullName: "",
            companyName: "",
            email: "",
            phone: "",
            // location: "",
            countryIsoCode: "",
            stateCode: "",
            city: "",
            products: "",
            quantity: "",
            packaging: "",
            message: "",
        });
        setSelectedOptions([]);
        setFormErrors({});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isSubmitting) return;

        // Honeypot: real users never see or fill this field, bots usually do
        if (e.target.elements.company_website?.value) {
            setIsSuccess(true);
            resetForm();
            return;
        }

        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            toast.error("Please correct the highlighted fields.", { id: "enquiry-toast" });
            const firstInvalid = Object.keys(FIELD_VALIDATORS).find((name) => errors[name]);
            e.target.elements[firstInvalid]?.focus();
            return;
        }

        setIsSubmitting(true);
        setSubmitError("");

        try {
            const parsedPhone = parsePhoneNumberFromString(formData.phone.trim(), formData.countryIsoCode);

            const payload = {
                fullName: clean(formData.fullName),
                companyName: clean(formData.companyName),
                email: formData.email.trim().toLowerCase(),
                // phone: formData.phone.trim(),
                // location: clean(formData.location),
                phone: parsedPhone.number, // E.164, e.g. +919876543210
                location: `${formData.city}, ${selectedCountry.name}`,
                country: selectedCountry.name,
                countryCode: dialCode,
                countryIsoCode: formData.countryIsoCode,
                state: formData.stateCode, // state code (e.g. RJ), backend ki requirement
                city: formData.city,
                products: clean(formData.products),
                quantity: clean(formData.quantity),
                packaging: clean(formData.packaging),
                message: clean(formData.message),
                lookingFor: selectedOptions,
                domainName: DOMAIN_NAME,
            };

            const response = await fetch(ENQUIRY_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            const data = await response.json().catch(() => ({}));
            if (!response.ok || !data.success) {
                if (data.error) console.error("Enquiry API error:", data.error);
                throw new Error(data.message || "Something went wrong. Please try again.");
            }

            setIsSuccess(true);
            resetForm();
            toast.success(data.message || "Enquiry sent successfully!", { id: "enquiry-toast" });
        } catch (err) {
            const errMsg =
                err instanceof TypeError
                    ? "Unable to reach the server. Please check your connection and try again."
                    : err.message || "Failed to send enquiry. Please try again.";
            setSubmitError(errMsg);
            toast.error(errMsg, { id: "enquiry-toast" });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>

            {/* =====================================================================
                01. HERO — full-width banner image, content on the left
            ===================================================================== */}
            <section className="relative w-full min-h-[560px] sm:min-h-[600px] lg:min-h-[400px] xl:min-h-[400px] overflow-hidden flex items-start lg:items-center">
                {/* Background Image */}
                <img
                    src="/images/contact1.png"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover object-[85%_bottom] lg:object-[center_95%]"
                />

                {/* Overlay: lighter on the left, darker on the right */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#fbf8f1]/60 via-transparent to-black/50" />

                {/* Small screens: copy sits on top, so fade the top into cream for readability */}
                <div className="absolute inset-0 lg:hidden bg-gradient-to-b from-[#fbf8f1]/90 via-[#fbf8f1]/55 to-transparent" />

                <div className="relative z-10 w-full max-w-[1380px] mx-auto px-6 md:px-10 lg:px-14 pt-10 pb-48 sm:pb-56 lg:py-12">
                    <div className="w-full max-w-xl lg:max-w-[46%] flex flex-col items-start text-left">
                        <div className="flex items-center gap-2 mb-3">
                            <Leaf className="w-4 h-4 text-forest" strokeWidth={2} />
                            <span className="text-xs font-bold tracking-[0.2em] uppercase text-forest">
                                Get In Touch
                            </span>
                        </div>

                        <h1 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-forest leading-[1.18] tracking-tight">
                            Let&rsquo;s Talk About
                            <br />
                            <span className="italic text-mustard">Your Requirement</span>
                        </h1>

                        <p className="mt-4 text-sm md:text-[16px] text-foreground/80  leading-relaxed max-w-2xl font-sans">
                            Whether you&rsquo;re looking for dehydrated ingredients, bulk supply, private label,
                            custom packaging or export sourcing — our team is here to understand your
                            requirement. Tell us what you need, and we&rsquo;ll take it from there.
                        </p>

                        <a
                            href="#send-requirement"
                            className="group/btn mt-5 inline-flex items-center gap-2.5 bg-forest hover:bg-mustard text-white hover:text-forest px-6 py-2.5 rounded-full text-xs font-extrabold tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                            Send an Enquiry
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" strokeWidth={2.5} />
                        </a>
                    </div>
                </div>
            </section>

            {/* =====================================================================
                02. CONTACT DETAILS — styled like CategorySection cards
            ===================================================================== */}
            <section className="w-full bg-white py-14 md:py-16 px-6 md:px-10 lg:px-14">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col items-center text-center mb-10">
                        <Eyebrow>Get In Touch</Eyebrow>
                        <h2 className="font-serif text-2xl sm:text-3xl font-medium text-foreground">
                            Reach Drymato Directly
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {contactCards.map((card) => {
                            const CardIcon = card.Icon;
                            const cardContent = (
                                <div
                                    className="relative group cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-xl flex flex-col justify-between h-full"
                                    style={{
                                        backgroundColor: card.bgColor,
                                        borderRadius: "32px 85px 28px 28px",
                                        minHeight: "260px",
                                    }}
                                >
                                    {/* Product / Visual Image at bottom right */}
                                    <div className="absolute -right-3 -bottom-2 w-[65%] sm:w-[60%] md:w-[70%] h-[62%] pointer-events-none select-none z-0">
                                        <Image
                                            src={card.imageUrl}
                                            alt={card.imageAlt}
                                            fill
                                            sizes="(max-width: 640px) 220px, (max-width: 768px) 250px, 280px"
                                            className="object-contain object-right-bottom group-hover:scale-105 transition-transform duration-500 ease-out opacity-100"
                                        />
                                    </div>

                                    {/* Foreground Content Container */}
                                    <div className="p-6 sm:p-7 flex flex-col justify-between h-full relative z-10 max-w-[72%] sm:max-w-[70%]">
                                        <div>
                                            <div className="mb-3" style={{ color: card.textColor }}>
                                                <CardIcon color={card.iconColor} />
                                            </div>

                                            <h3
                                                className="font-bold text-xs sm:text-sm tracking-wider uppercase mb-2 leading-snug"
                                                style={{ color: card.textColor }}
                                            >
                                                {card.title}
                                            </h3>

                                            <p
                                                className="text-sm sm:text-[15px] font-semibold mb-2 break-words"
                                                style={{ color: card.textColor }}
                                            >
                                                {card.value}
                                            </p>

                                            <ul className="space-y-1">
                                                {card.lines.map((line) => (
                                                    <li
                                                        key={line}
                                                        className="text-xs sm:text-[13px] leading-relaxed font-medium"
                                                        style={{ color: card.descColor }}
                                                    >
                                                        {line}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="mt-6 pt-2">
                                            <span
                                                className="inline-block px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wider uppercase transition-all duration-200 group-hover:scale-105 shadow-xs whitespace-nowrap"
                                                style={{
                                                    border: `2px solid ${card.buttonBorder}`,
                                                    color: card.buttonText,
                                                    backgroundColor: "transparent",
                                                }}
                                            >
                                                {card.cta}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );

                            return card.href ? (
                                <a
                                    key={card.id}
                                    href={card.href}
                                    target={card.href.startsWith("http") ? "_blank" : undefined}
                                    rel="noopener noreferrer"
                                    className="block h-full"
                                >
                                    {cardContent}
                                </a>
                            ) : (
                                <div key={card.id} className="h-full">
                                    {cardContent}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* =====================================================================
                03. SEND YOUR REQUIREMENT — main enquiry form
            ===================================================================== */}
            <section id="send-requirement" className="w-full bg-sage/10 py-16 md:py-20 px-6 md:px-10 lg:px-14">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col items-center text-center mb-10">
                        <Eyebrow>Looking For Something Specific?</Eyebrow>
                        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium text-foreground max-w-xl">
                            Send Your Requirement
                        </h2>
                        <p className="mt-3 text-foreground/70 text-sm sm:text-base max-w-lg">
                            Tell us a little about your business needs so we can understand what you&rsquo;re looking for.
                        </p>
                    </div>

                    <div className="bg-white rounded-[32px] shadow-[0_15px_45px_rgba(0,0,0,0.04)] border border-sage/15 p-6 sm:p-10 md:p-12">
                        {!isSuccess ? (
                            <form onSubmit={handleSubmit} onBlur={handleBlur} noValidate className="flex flex-col gap-6">
                                {/* Honeypot (hidden from real users) */}
                                <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
                                    <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
                                </div>

                                {/* Name + Company */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <Field
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        placeholder="Full Name *"
                                        error={formErrors.fullName}
                                    />
                                    <Field
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        placeholder="Company Name *"
                                        error={formErrors.companyName}
                                    />
                                </div>

                                {/* Email + Phone */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <Field
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Email Address *"
                                        error={formErrors.email}
                                    />
                                    <PhoneField
                                        value={formData.phone}
                                        onChange={handleChange}
                                        dialCode={dialCode}
                                        disabled={!formData.countryIsoCode}
                                        error={formErrors.phone}
                                    />
                                </div>

                                {/* Country + State + City */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                                    <SelectField
                                        name="countryIsoCode"
                                        value={formData.countryIsoCode}
                                        onChange={handleChange}
                                        placeholder="Country *"
                                        error={formErrors.countryIsoCode}
                                        options={COUNTRIES.map((c) => ({ value: c.isoCode, label: c.name }))}
                                    />
                                    <SelectField
                                        name="stateCode"
                                        value={formData.stateCode}
                                        onChange={handleChange}
                                        placeholder="State *"
                                        error={formErrors.stateCode}
                                        disabled={!states.length}
                                        options={states.map((s) => ({ value: s.isoCode, label: s.name }))}
                                    />
                                    <SelectField
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        placeholder="City *"
                                        error={formErrors.city}
                                        disabled={!cities.length}
                                        options={cities.map((c) => ({ value: c.name, label: c.name }))}
                                    />
                                </div>

                                {/* What are you looking for — checkbox chips */}
                                <div>
                                    <label className="text-xs font-bold tracking-wider uppercase text-forest mb-3 block">
                                        What are you looking for?
                                    </label>
                                    <div className="flex flex-wrap gap-2.5">
                                        {ENQUIRY_OPTIONS.map((option) => {
                                            const active = selectedOptions.includes(option);
                                            return (
                                                <button
                                                    type="button"
                                                    key={option}
                                                    onClick={() => toggleOption(option)}
                                                    className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide border transition-all duration-200 cursor-pointer ${active
                                                        ? "bg-forest border-forest text-white"
                                                        : "bg-[#fcfbfa] border-sage/30 text-foreground/70 hover:border-forest/50"
                                                        }`}
                                                >
                                                    {option}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Products + Quantity */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <Field
                                        name="products"
                                        value={formData.products}
                                        onChange={handleChange}
                                        placeholder="Products Required (e.g. Tomato, Onion Powder)"
                                    />
                                    <Field
                                        name="quantity"
                                        value={formData.quantity}
                                        onChange={handleChange}
                                        placeholder="Quantity Required (e.g. 500 KG)"
                                    />
                                </div>

                                {/* Packaging */}
                                <Field
                                    name="packaging"
                                    value={formData.packaging}
                                    onChange={handleChange}
                                    placeholder="Packaging Requirement (e.g. Bulk, Vacuum, Private Label)"
                                />

                                {/* Message */}
                                <div className="flex flex-col gap-1">
                                    <textarea
                                        name="message"
                                        rows="4"
                                        maxLength={1000}
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Additional requirements — application, specification, or anything else *"
                                        className={`w-full bg-[#fcfbfa] border ${formErrors.message ? "border-red-500" : "border-sage/25"} rounded-2xl px-5 py-3.5 text-foreground placeholder-foreground/40 font-medium text-sm focus:outline-none focus:border-forest focus:ring-2 focus:ring-forest/10 transition-all duration-300 resize-none`}
                                    />
                                    {formErrors.message && (
                                        <span className="flex items-center gap-1 text-red-500 font-bold text-[11px] mt-0.5">
                                            <AlertCircle className="w-3 h-3 shrink-0" strokeWidth={2.5} />
                                            {formErrors.message}
                                        </span>
                                    )}
                                </div>

                                {submitError && (
                                    <div className="bg-red-50 border border-red-200/80 rounded-2xl px-5 py-3.5 text-red-700 text-xs font-semibold leading-relaxed">
                                        <span className="flex items-start gap-2">
                                            <AlertCircle className="w-4 h-4 shrink-0 mt-px" strokeWidth={2} />
                                            {submitError}
                                        </span>
                                    </div>
                                )}

                                <div className="flex justify-start">
                                    <BubbleButton type="submit" disabled={isSubmitting}>
                                        {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                                    </BubbleButton>
                                </div>
                            </form>
                        ) : (
                            <div className="flex flex-col items-center justify-center py-10 text-center">
                                <div className="w-20 h-20 rounded-full bg-sage/15 border border-sage/30 flex items-center justify-center shadow-md mb-6 relative">
                                    <div className="absolute inset-0 rounded-full border border-forest/30 animate-ping opacity-70" />
                                    <svg className="w-10 h-10 text-forest" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </div>
                                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-foreground mb-3">
                                    Enquiry Sent!
                                </h3>
                                <p className="text-foreground/70 text-sm sm:text-base max-w-sm mb-8 leading-relaxed">
                                    Thank you for reaching out. Our team has received your requirement and will get back
                                    to you shortly.
                                </p>
                                <button
                                    onClick={() => {
                                        setIsSuccess(false);
                                        setSubmitError("");
                                    }}
                                    className="text-xs font-extrabold tracking-widest uppercase text-forest border-b-2 border-forest pb-1 cursor-pointer"
                                >
                                    Send Another Enquiry
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* =====================================================================
                04 + 05. BULK / WHOLESALE + EXPORT — two-up dark cards
            ===================================================================== */}
            {/* =====================================================================
                04 + 05. BULK / WHOLESALE + EXPORT — Updated with Visual Card Style
            ===================================================================== */}
            <section className="w-full bg-white py-16 md:py-20 px-6 md:px-10 lg:px-14">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">

                    {/* Bulk & Wholesale Card */}
                    <div
                        className="relative group overflow-hidden p-8 sm:p-10 flex flex-col justify-between"
                        style={{ backgroundColor: "#243822", borderRadius: "32px 85px 28px 28px", minHeight: "320px" }}
                    >
                        {/* Product / Visual Image at bottom right */}
                        <div className="absolute -right-3 -bottom-2 w-[55%] sm:w-[50%] h-[60%] pointer-events-none select-none z-0">
                            <Image
                                src="/images/categories/vegetable-powder.png"
                                alt="Bulk wholesale vegetable powder supply"
                                fill
                                sizes="(max-width: 640px) 200px, 250px"
                                className="object-contain object-right-bottom group-hover:scale-105 transition-transform duration-500 ease-out opacity-90"
                            />
                        </div>

                        {/* Foreground Content Container */}
                        <div className="relative z-10 max-w-[75%] sm:max-w-[70%]">
                            <Boxes className="w-6 h-6 text-white mb-4" strokeWidth={1.8} />
                            <h3 className="font-serif text-2xl sm:text-[1.75rem] font-medium text-white mb-3">
                                Buying in Bulk?
                            </h3>
                            <p className="text-sm text-[#CBD8C7] leading-[1.8] mb-1">
                                For a faster quotation, please share:
                            </p>
                            <p className="text-sm text-white font-semibold leading-[1.8] mb-4">
                                Product + Quantity + Format + Packaging Requirement
                            </p>
                            <p className="text-xs text-[#CBD8C7] leading-relaxed">
                                The more details you provide, the better we can understand your requirement.
                            </p>
                        </div>

                        <div className="mt-8 relative z-10">
                            <a href="#send-requirement">
                                <BubbleButton>Request Bulk Quote</BubbleButton>
                            </a>
                        </div>
                    </div>

                    {/* Export Card */}
                    <div
                        className="relative group overflow-hidden p-8 sm:p-10 flex flex-col justify-between"
                        style={{ backgroundColor: "#8A2C21", borderRadius: "32px 85px 28px 28px", minHeight: "320px" }}
                    >
                        {/* Product / Visual Image at bottom right */}
                        <div className="absolute -right-3 -bottom-2 w-[55%] sm:w-[50%] h-[60%] pointer-events-none select-none z-0">
                            <Image
                                src="/images/categories/dried-fruits.png"
                                alt="International export dry fruits supply"
                                fill
                                sizes="(max-width: 640px) 200px, 250px"
                                className="object-contain object-right-bottom group-hover:scale-105 transition-transform duration-500 ease-out opacity-90"
                            />
                        </div>

                        {/* Foreground Content Container */}
                        <div className="relative z-10 max-w-[72%] sm:max-w-[70%]">
                            <Globe2 className="w-6 h-6 text-white mb-4" strokeWidth={1.8} />
                            <h3 className="font-serif text-2xl sm:text-[1.75rem] font-medium text-white mb-3">
                                Looking to Source From India?
                            </h3>
                            <p className="text-sm text-[#F2D3CF] leading-[1.8] mb-2">
                                International buyers can share:
                            </p>
                            <ul className="text-sm text-white font-semibold leading-[1.8] mb-2 list-disc list-inside">
                                <li>Product & quantity</li>
                                <li>Specifications</li>
                                <li>Packaging</li>
                                <li>Destination port</li>
                            </ul>
                        </div>

                        <div className="mt-4 relative z-10">
                            <a href="#send-requirement">
                                <BubbleButton>Send Export Enquiry</BubbleButton>
                            </a>
                        </div>
                    </div>

                </div>
            </section>
            {/* =====================================================================
                06. PRIVATE LABEL — process flow banner (matches OurSourcing style)
            ===================================================================== */}
            <section className="w-full bg-white py-16 md:py-20 px-6 md:px-10 lg:px-14">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

                        {/* 1. Left Column: Rounded Image Card */}
                        <div className="lg:col-span-4 w-full flex justify-center">
                            <Image
                                src="/images/categories/dried-vegetables.png"
                                alt="Drymato private label process"
                                width={550}
                                height={500}
                                className="w-full h-auto object-contain"
                                priority
                            />
                        </div>

                        {/* 2. Middle Column: Title, Description & Process Flow Steps */}
                        <div className="lg:col-span-5 flex flex-col text-left">
                            <div className="flex items-center gap-2 mb-2">
                                <Leaf className="w-3.5 h-3.5 text-forest" strokeWidth={2} />
                                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-forest">
                                    Private Label
                                </span>
                            </div>

                            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-foreground leading-[1.2] tracking-tight">
                                Building Your <br />
                                Own Brand?
                            </h3>

                            <p className="mt-2.5 text-xs sm:text-sm text-foreground/75 leading-relaxed font-sans max-w-md">
                                Tell us about your private-label requirement — we&rsquo;ll walk you through what&rsquo;s possible, end to end.
                            </p>

                            {/* Process Flow Steps */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 my-6">
                                {PRIVATE_LABEL_FLOW.map((step) => {
                                    const StepIcon = step.icon;
                                    return (
                                        <div
                                            key={step.title}
                                            className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#FBF8F1] border border-sage/25 shadow-xs"
                                        >
                                            <StepIcon className="w-5 h-5 text-forest shrink-0" strokeWidth={1.8} />
                                            <span className="text-xs font-semibold text-foreground tracking-wide">
                                                {step.title}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="font-serif text-sm italic text-foreground/75">
                                Eat green, live green.
                            </div>
                        </div>

                        {/* 3. Right Column: Larger Scratch Background Image with Responsive Content */}
                        <div className="lg:col-span-3 w-full flex justify-center">
                            <div className="relative w-full max-w-[420px] min-h-[420px] p-8 sm:p-10 flex flex-col items-center justify-center text-center">

                                {/* Background Scratch/Brush Image (Larger size & proper coverage) */}
                                <Image
                                    src="/scratch.png"
                                    alt="Scratch background"
                                    fill
                                    priority
                                    className="absolute inset-0 w-full h-full scale-125 object-contain pointer-events-none select-none"
                                />

                                {/* Content Over Image */}
                                <div className="relative z-10 flex flex-col items-center w-full max-w-[260px] mx-auto">
                                    <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center mb-3 text-forest">
                                        <Globe2 className="w-5 h-5" strokeWidth={1.8} />
                                    </div>

                                    <h4 className="font-serif text-base font-bold text-foreground mb-1.5 leading-snug">
                                        Join us in making a difference.
                                    </h4>

                                    <p className="text-[11px] sm:text-xs text-foreground/70 leading-relaxed mb-5 font-medium">
                                        A portion of every order supports sustainable farming and community welfare initiatives.
                                    </p>

                                    <a href="#send-requirement">
                                        <BubbleButton> Label Enquiry</BubbleButton>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* =====================================================================
                07. FIND US + trust bar (same design as the hero's trust bar)
            ===================================================================== */}
            <section className="relative w-full bg-sage/10 py-10 sm:py-14 px-[5%] overflow-hidden">
                <div className="flex flex-col items-center text-center mb-8">
                    <Eyebrow>Find Us</Eyebrow>
                    <h2 className="font-serif text-2xl sm:text-3xl font-medium text-foreground">
                        Based in Rajasthan. Connected to Markets Beyond.
                    </h2>
                    {siteInfo.address && (
                        <p className="mt-2 text-foreground/70 text-sm flex items-center gap-1.5">
                            <MapPin className="w-4 h-4 text-forest shrink-0" strokeWidth={2} />
                            {siteInfo.address}
                        </p>
                    )}
                </div>

                <div className="relative max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-x divide-sage/30 gap-x-1 sm:gap-x-4 gap-y-6 sm:gap-y-0">
                    {WHY_DRYMATO.map(({ icon: Icon, title }) => (
                        <div key={title} className="flex flex-col items-center gap-1 sm:gap-2.5 px-1 sm:px-4 first:pl-0 last:pr-0 text-center">
                            <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-forest" strokeWidth={1.5} />
                            <span className="text-[10px] sm:text-xs font-bold text-foreground leading-tight">{title}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* =====================================================================
                08. FINAL CTA
            ===================================================================== */}

            <section className="relative w-full flex bg-[#fbf8f1] justify-between items-center overflow-hidden">
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center pl-6 sm:pl-12 lg:pl-24 pr-0 relative z-10">

                    {/* Left Half: Bowl image + Content & CTA */}
                    <div className="flex flex-col sm:flex-row items-center gap-6 lg:gap-8 text-center sm:text-left py-12 md:py-16 z-20">
                        <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 shrink-0 flex items-center justify-center group/jar">
                            <div className="absolute w-60 h-60 bg-white/10 rounded-full filter blur-xl -z-10 group-hover:scale-110 transition-transform duration-700"></div>
                            <Image
                                src="/dryTomatobowl.png"
                                alt="Dehydrated produce bowl"
                                width={256}
                                height={256}
                                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]"
                            />
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-medium text-forest leading-[1.25] tracking-tight">
                                Have a Requirement? <br />
                                Let&rsquo;s Build It Together.
                            </h2>
                            <p className="text-sm sm:text-base text-forest leading-[1.8] max-w-sm">
                                From a sample requirement to commercial quantities, wholesale supply and international sourcing — start by telling us what you&rsquo;re looking for.
                            </p>

                            {siteInfo.email && (
                                <div className="pt-1">
                                    <a
                                        href={`mailto:${siteInfo.email}`}
                                        className="inline-flex items-center gap-2 text-forest font-semibold text-sm hover:underline"
                                    >
                                        <Mail className="w-4 h-4" strokeWidth={2} />
                                        {siteInfo.email}
                                    </a>
                                </div>
                            )}

                            <div className="pt-2 flex justify-center sm:justify-start">
                                <a href="#send-requirement">
                                    <BubbleButton variant="outline">Send Your Requirement</BubbleButton>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex justify-end items-center">
                        <Image
                            src="/alldishes.png"
                            alt="Dishes made with Drymato ingredients"
                            width={800}
                            height={700}
                            priority
                            className="w-full h-auto object-contain"
                        />
                    </div>

                </div>
            </section>
        </>
    );
}

// ---------------------------------------------------------------------------
// Small shared input field with error state (matches ContactClient.jsx styling)
// ---------------------------------------------------------------------------
function Field({ name, value, onChange, placeholder, error, type }) {
    const meta = FIELD_META[name] || {};
    return (
        <div className="flex flex-col gap-1">
            <input
                type={type ?? meta.type ?? "text"}
                maxLength={meta.maxLength}
                autoComplete={meta.autoComplete}
                inputMode={meta.inputMode}
                aria-invalid={!!error}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`w-full bg-[#fcfbfa] border ${error ? "border-red-500" : "border-sage/25"
                    } rounded-2xl px-5 py-3.5 text-foreground placeholder-foreground/40 font-medium text-sm focus:outline-none focus:border-forest focus:ring-2 focus:ring-forest/10 transition-all duration-300`}
            />
            {error && (
                <span className="flex items-center gap-1 text-red-500 font-bold text-[11px] mt-0.5">
                    <AlertCircle className="w-3 h-3 shrink-0" strokeWidth={2.5} />
                    {error}
                </span>
            )}
        </div>
    );
}

function SelectField({ name, value, onChange, placeholder, error, options, disabled }) {
    return (
        <div className="flex flex-col gap-1">
            <div className="relative">
                <select
                    name={name}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                    aria-invalid={!!error}
                    className={`w-full appearance-none bg-[#fcfbfa] border ${error ? "border-red-500" : "border-sage/25"
                        } rounded-2xl pl-5 pr-11 py-3.5 font-medium text-sm focus:outline-none focus:border-forest focus:ring-2 focus:ring-forest/10 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed ${value ? "text-foreground" : "text-foreground/40"
                        }`}
                >
                    <option value="">{placeholder}</option>
                    {options.map((o) => (
                        <option key={`${o.value}-${o.label}`} value={o.value} className="text-foreground">
                            {o.label}
                        </option>
                    ))}
                </select>
                <ChevronDown
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-forest"
                    strokeWidth={2}
                />
            </div>
            {error && (
                <span className="flex items-center gap-1 text-red-500 font-bold text-[11px] mt-0.5">
                    <AlertCircle className="w-3 h-3 shrink-0" strokeWidth={2.5} />
                    {error}
                </span>
            )}
        </div>
    );
}

function PhoneField({ value, onChange, dialCode, disabled, error }) {
    return (
        <div className="flex flex-col gap-1">
            <div
                className={`flex items-center w-full bg-[#fcfbfa] border ${error ? "border-red-500" : "border-sage/25"
                    } rounded-2xl focus-within:border-forest focus-within:ring-2 focus-within:ring-forest/10 transition-all duration-300 ${disabled ? "opacity-60" : ""
                    }`}
            >
                <span className="pl-5 pr-3 py-3.5 border-r border-sage/25 text-sm font-semibold text-forest whitespace-nowrap">
                    {dialCode || "+--"}
                </span>
                <input
                    type="tel"
                    name="phone"
                    inputMode="tel"
                    autoComplete="tel-national"
                    maxLength={20}
                    disabled={disabled}
                    aria-invalid={!!error}
                    value={value}
                    onChange={onChange}
                    placeholder={disabled ? "Select country first *" : "Phone / WhatsApp *"}
                    className="flex-1 min-w-0 bg-transparent rounded-2xl px-4 py-3.5 text-foreground placeholder-foreground/40 font-medium text-sm focus:outline-none disabled:cursor-not-allowed"
                />
            </div>
            {error && (
                <span className="flex items-center gap-1 text-red-500 font-bold text-[11px] mt-0.5">
                    <AlertCircle className="w-3 h-3 shrink-0" strokeWidth={2.5} />
                    {error}
                </span>
            )}
        </div>
    );
}