// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const MENU_ITEMS = [
//     { label: "Home", href: "/" },
//     { label: "About Us", href: "/about-us" },
//     { label: "Why Choose Us", href: "/why-choose-us" },
//     { label: "Product", href: "/product" },
//     { label: "Wholesale", href: "/holesale" },
//     { label: "Export", href: "/export" },
//     { label: "Contact", href: "/contact" },
// ];

// export default function Navbar() {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const pathname = usePathname();

//     const isLinkActive = (href) => {
//         if (href === "/") {
//             return pathname === "/";
//         }
//         return pathname === href || pathname.startsWith(href + "/");
//     };

//     const isContactPage = false;

//     return (
//         <>
//             {/* Close animate-slide-down wrapper */}

//             {/* Sticky Header Container */}
//             <div className="sticky top-0 z-40 w-full animate-slide-down -mt-[1.5px]">
//                 {/* Main nav with a fixed height to prevent logo height from expanding the container */}
//                 <nav className="bg-white px-6 sm:px-[6%] h-19 py-5 flex items-center justify-between relative z-40 shadow-md">
//                     {/* Logo wrapper configured to allow absolute overflow without pushing nav height */}
//                     <Link
//                         href="/"
//                         className="relative flex items-center h-10 w-24 sm:w-28 no-underline group animate-navbar-left ml-2 sm:ml-4"
//                     >
//                         <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center">
//                             <Image
//                                 src="/drymato-logo.png"
//                                 alt="Drymato Logo"
//                                 width={120}
//                                 height={120}
//                                 className="max-w-none object-contain h-12 w-auto sm:h-14"
//                             />
//                         </div>
//                     </Link>

//                     {/* Nav links - hidden on mobile and tablet (below lg breakpoint) */}
//                     <ul className="hidden lg:flex items-center gap-8 list-none m-0 p-0">
//                         {MENU_ITEMS.map((item) => {
//                             const active = isLinkActive(item.href);
//                             return (
//                                 <li key={item.label}>
//                                     <Link
//                                         href={item.href}
//                                         className={`text-[13px] font-bold tracking-wider transition-colors duration-200 no-underline block relative py-1 group ${active ? "text-[#a50808]" : "text-gray-900 hover:text-[#a50808]"
//                                             }`}
//                                     >
//                                         {item.label}
//                                         <span className={`absolute bottom-0 left-0 h-[2px] bg-[#a50808] transition-all duration-300 ${active ? "w-full" : "w-0 group-hover:w-full"
//                                             }`} />
//                                     </Link>
//                                 </li>
//                             );
//                         })}
//                     </ul>

//                     {/* Actions */}
//                     <div className="flex items-center gap-4 sm:gap-6">
//                         {/* WhatsApp Button - hidden on mobile, visible on md and above */}
//                         <div className="hidden md:flex animate-navbar-right mr-2 sm:mr-4">
//                             <a
//                                 href="https://wa.me/8000897238"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="group relative overflow-hidden flex bg-gradient-to-br from-[#22c55e] to-[#15803d] border-2  text-white pl-6 pr-2 py-2 rounded-[14px] text-xs font-extrabold tracking-wider items-center gap-3 transition-all duration-300 no-underline shadow-[0_4px_14px_rgba(34,197,94,0.18)] hover:shadow-[0_6px_20px_rgba(34,197,94,0.22)] active:shadow-[0_4px_12px_rgba(34,197,94,0.15)] hover:border-[#22c55e] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer z-10"
//                             >
//                                 {/* Background white dome shape bubble rising on hover */}
//                                 <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[125%] aspect-square rounded-t-[50%] bg-white translate-y-full transition-transform duration-[750ms] ease-in-out z-0 group-hover:translate-y-[12%]" />

//                                 <span className="relative z-10 transition-colors duration-300 group-hover:text-[#15803d]">WHATSAPP</span>
//                                 <div className="relative z-10 w-6 h-6 bg-white text-[#15803d] rounded-full flex items-center justify-center shadow-sm transform group-hover:translate-x-1 group-hover:bg-[#15803d] group-hover:text-white transition-all duration-300">
//                                     <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
//                                         <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.437.002 9.861-4.416 9.864-9.862.002-2.638-1.023-5.122-2.89-6.99-1.868-1.869-4.351-2.9-6.994-2.902-5.446 0-9.873 4.42-9.876 9.869-.001 1.73.457 3.419 1.323 4.922L1.75 22.25l4.897-1.286zM17.487 14.37c-.3-.15-1.782-.88-2.062-.982-.28-.102-.485-.153-.69.153-.205.305-.795.982-.973 1.185-.178.203-.356.23-.656.08-1.252-.627-2.157-1.163-3.016-2.627-.225-.389.225-.361.643-1.196.07-.14.03-.26-.02-.36-.05-.1-.485-1.18-.665-1.62-.175-.425-.37-.365-.51-.372l-.435-.01c-.15 0-.395.056-.6.28-.205.224-.785.766-.785 1.87 0 1.1.8 2.17.91 2.32.11.15 1.577 2.41 3.82 3.38.533.23.95.37 1.275.475.536.17 1.02.146 1.405.09.43-.063 1.782-.73 2.032-1.43.25-.7.25-1.3.175-1.43-.07-.13-.27-.21-.57-.36z" />
//                                     </svg>
//                                 </div>
//                             </a>
//                         </div>

//                         {/* Hamburger Menu Icon - visible below lg breakpoint */}
//                         <button
//                             onClick={() => setIsMobileMenuOpen(true)}
//                             className="text-gray-900 hover:text-[#a50808] transition-colors duration-200 cursor-pointer lg:hidden"
//                             aria-label="Open menu"
//                         >
//                             <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//                             </svg>
//                         </button>
//                     </div>
//                 </nav>

//                 {/* Bottom wave with red outline - animated horizontally for an infinite wave effect */}
//                 {/* <div className="relative h-10 overflow-hidden z-30 w-full">
//                     <div className="absolute top-0 left-0 flex w-[200%] h-10 animate-wave">
//                         <svg viewBox="0 0 1440 40" className="w-1/2 h-full block" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
//                             <path
//                                 d="M0,20 Q45,38 90,20 Q135,2 180,20 Q225,38 270,20 Q315,2 360,20 Q405,38 450,20 Q495,2 540,20 Q585,38 630,20 Q675,2 720,20 Q765,38 810,20 Q855,2 900,20 Q945,38 990,20 Q1035,2 1080,20 Q1125,38 1170,20 Q1215,2 1260,20 Q1305,38 1350,20 Q1395,2 1440,20 L1440,0 L0,0 Z"
//                                 fill="#ffffff"
//                             />
//                             <path
//                                 d="M0,20 Q45,38 90,20 Q135,2 180,20 Q225,38 270,20 Q315,2 360,20 Q405,38 450,20 Q495,2 540,20 Q585,38 630,20 Q675,2 720,20 Q765,38 810,20 Q855,2 900,20 Q945,38 990,20 Q1035,2 1080,20 Q1125,38 1170,20 Q1215,2 1260,20 Q1305,38 1350,20 Q1395,2 1440,20"
//                                 fill="none"
//                                 stroke={isContactPage ? "transparent" : "#a50808"}
//                                 strokeWidth="2.5"
//                             />
//                         </svg>
//                         <svg viewBox="0 0 1440 40" className="w-1/2 h-full block" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
//                             <path
//                                 d="M0,20 Q45,38 90,20 Q135,2 180,20 Q225,38 270,20 Q315,2 360,20 Q405,38 450,20 Q495,2 540,20 Q585,38 630,20 Q675,2 720,20 Q765,38 810,20 Q855,2 900,20 Q945,38 990,20 Q1035,2 1080,20 Q1125,38 1170,20 Q1215,2 1260,20 Q1305,38 1350,20 Q1395,2 1440,20 L1440,0 L0,0 Z"
//                                 fill="#ffffff"
//                             />
//                             <path
//                                 d="M0,20 Q45,38 90,20 Q135,2 180,20 Q225,38 270,20 Q315,2 360,20 Q405,38 450,20 Q495,2 540,20 Q585,38 630,20 Q675,2 720,20 Q765,38 810,20 Q855,2 900,20 Q945,38 990,20 Q1035,2 1080,20 Q1125,38 1170,20 Q1215,2 1260,20 Q1305,38 1350,20 Q1395,2 1440,20"
//                                 fill="none"
//                                 stroke={isContactPage ? "transparent" : "#a50808"}
//                                 strokeWidth="2.5"
//                             />
//                         </svg>
//                     </div>
//                 </div> */}
//             </div>

//             {/* Mobile Menu Drawer Overlay */}
//             <div className={`fixed inset-0 z-[100] lg:hidden transition-all duration-300 ${isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
//                 {/* Backdrop */}
//                 <div
//                     className={`absolute inset-0 bg-black/55 backdrop-blur-sm transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100" : "opacity-0"}`}
//                     onClick={() => setIsMobileMenuOpen(false)}
//                 />

//                 {/* Drawer container */}
//                 <div className="absolute inset-y-0 right-0 max-w-full flex">
//                     <div className={`w-72 bg-white shadow-2xl flex flex-col py-6 px-6 relative transition-transform duration-300 ease-in-out transform ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
//                         <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6">
//                             <Link
//                                 href="/"
//                                 onClick={() => {
//                                     setIsMobileMenuOpen(false);
//                                 }}
//                             >
//                                 <Image
//                                     src="/drymato-logo.png"
//                                     alt="Drymato Logo"
//                                     width={90}
//                                     height={90}
//                                     className="object-contain"
//                                 />
//                             </Link>
//                             <button
//                                 onClick={() => setIsMobileMenuOpen(false)}
//                                 className="text-gray-500 hover:text-gray-900 p-1 rounded-full hover:bg-gray-100 transition-colors"
//                                 aria-label="Close menu"
//                             >
//                                 <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                                 </svg>
//                             </button>
//                         </div>


//                         {/* Navigation links inside drawer */}
//                         <nav className="flex-1 overflow-y-auto pr-1">
//                             <ul className="flex flex-col gap-5 list-none p-0 m-0">
//                                 {MENU_ITEMS.map((item) => {
//                                     const active = isLinkActive(item.href);
//                                     return (
//                                         <li key={item.label}>
//                                             <Link
//                                                 href={item.href}
//                                                 onClick={() => {
//                                                     setIsMobileMenuOpen(false);
//                                                 }}
//                                                 className={`block text-base font-bold transition-colors no-underline relative ${active ? "text-[#a50808] pl-3 border-l-2 border-[#a50808]" : "text-gray-900 hover:text-[#a50808]"
//                                                     }`}
//                                             >
//                                                 {item.label}
//                                             </Link>
//                                         </li>
//                                     );
//                                 })}
//                             </ul>
//                         </nav>

//                         {/* Footer / WhatsApp inside drawer */}
//                         <div className="mt-auto pt-6 border-t border-gray-100">
//                             <a
//                                 href="https://wa.me/8000897238"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 onClick={() => setIsMobileMenuOpen(false)}
//                                 className="group relative overflow-hidden bg-gradient-to-br from-[#22c55e] to-[#15803d] border-2 border-[#15803d] text-white py-3 px-6 rounded-xl text-sm font-extrabold tracking-wider flex items-center justify-center gap-3 transition-all duration-300 no-underline shadow-[0_4px_14px_rgba(34,197,94,0.18)] hover:shadow-[0_6px_20px_rgba(34,197,94,0.22)] cursor-pointer z-10"
//                             >
//                                 {/* Background white dome shape bubble rising on hover */}
//                                 <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[125%] aspect-square rounded-t-[50%] bg-white translate-y-full transition-transform duration-[750ms] ease-in-out z-0 group-hover:translate-y-[12%]" />

//                                 <span className="relative z-10 transition-colors duration-300 group-hover:text-[#15803d]">WHATSAPP</span>
//                                 <div className="relative z-10 w-6 h-6 bg-white text-[#15803d] rounded-full flex items-center justify-center shadow-sm transform group-hover:translate-x-1 group-hover:bg-[#15803d] group-hover:text-white transition-all duration-300">
//                                     <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
//                                         <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.437.002 9.861-4.416 9.864-9.862.002-2.638-1.023-5.122-2.89-6.99-1.868-1.869-4.351-2.9-6.994-2.902-5.446 0-9.873 4.42-9.876 9.869-.001 1.73.457 3.419 1.323 4.922L1.75 22.25l4.897-1.286zM17.487 14.37c-.3-.15-1.782-.88-2.062-.982-.28-.102-.485-.153-.69.153-.205.305-.795.982-.973 1.185-.178.203-.356.23-.656.08-1.252-.627-2.157-1.163-3.016-2.627-.225-.389.225-.361.643-1.196.07-.14.03-.26-.02-.36-.05-.1-.485-1.18-.665-1.62-.175-.425-.37-.365-.51-.372l-.435-.01c-.15 0-.395.056-.6.28-.205.224-.785.766-.785 1.87 0 1.1.8 2.17.91 2.32.11.15 1.577 2.41 3.82 3.38.533.23.95.37 1.275.475.536.17 1.02.146 1.405.09.43-.063 1.782-.73 2.032-1.43.25-.7.25-1.3.175-1.43-.07-.13-.27-.21-.57-.36z" />
//                                     </svg>
//                                 </div>
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }


// "use client";

// import { useState, useRef } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const MENU_ITEMS = [
//     { label: "Home", href: "/" },
//     { label: "Product", href: "/product" },
//     { label: "About Us", href: "/about-us" },
//     { label: "Why Choose Us", href: "/why-choose-us" },
//     { label: "Wholesale", href: "/holesale" },
//     { label: "Export", href: "/export" },
//     { label: "Contact", href: "/contact" },
// ];

// // ---- Product mega-menu data (built from the catalogue) ----
// const slugify = (str) =>
//     str
//         .toLowerCase()
//         .replace(/[^a-z0-9]+/g, "-")
//         .replace(/(^-|-$)/g, "");

// const buildItems = (names, transform) =>
//     names.map((name) => {
//         const fullName = transform(name);
//         return { name: fullName, href: `/product/${slugify(fullName)}` };
//     });

// const PRODUCT_CATEGORIES = [
//     {
//         key: "dehydrated-vegetables",
//         label: "Dehydrated Vegetables",
//         bgImage: "/images/categories/dried-vegetables.png",
//         items: buildItems(
//             [
//                 "Tomato", "Onion", "Garlic", "Ginger", "Beetroot", "Carrot",
//                 "Capsicum", "Mushroom", "Jackfruit", "Karela", "Pumpkin",
//                 "Drumstick", "Green Chilli", "Coriander", "Mint", "Spinach",
//                 "Sweet Potato", "Peas", "Cabbage", "Curry Leaves",
//             ],
//             (name) => `Dehydrated ${name}`
//         ),
//     },
//     {
//         key: "dehydrated-fruits",
//         label: "Dehydrated Fruits",
//         bgImage: "/images/categories/dried-fruits.png",
//         items: buildItems(
//             [
//                 "Mango", "Banana", "Pineapple", "Apple", "Papaya", "Strawberry",
//                 "Orange", "Lemon", "Guava", "Pomegranate", "Amla", "Coconut",
//                 "Watermelon",
//             ],
//             (name) => `Dehydrated ${name}`
//         ),
//     },
//     {
//         key: "vegetable-powders",
//         label: "Vegetable Powders",
//         bgImage: "/images/categories/vegetable-powder.png",
//         items: buildItems(
//             [
//                 "Tomato", "Onion", "Garlic", "Ginger", "Beetroot", "Spinach",
//                 "Moringa", "Carrot", "Pumpkin", "Capsicum", "Green Chilli",
//                 "Coriander", "Mint", "Mushroom", "Karela", "Drumstick Leaf",
//                 "Curry Leaf", "Sweet Potato", "Peas", "Cabbage",
//             ],
//             (name) => `${name} Powder`
//         ),
//     },
//     {
//         key: "fruit-powders",
//         label: "Fruit Powders",
//         bgImage: "/images/categories/fruit-powder.png",
//         items: buildItems(
//             [
//                 "Mango", "Banana", "Pineapple", "Apple", "Papaya", "Strawberry",
//                 "Orange", "Lemon", "Guava", "Pomegranate", "Amla", "Coconut",
//             ],
//             (name) => `${name} Powder`
//         ),
//     },
// ];

// // ---- small inline icons ----
// const CartIcon = ({ className = "w-6 h-6" }) => (
//     <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//         <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 1.865-4.775 2.192-7.363a1.125 1.125 0 00-1.12-1.263H5.106M7.5 14.25L5.106 5.272M6 18.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
//         />
//     </svg>
// );

// const UserIcon = ({ className = "w-3.5 h-3.5" }) => (
//     <svg className={className} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
//         <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
//         />
//     </svg>
// );

// export default function Navbar() {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const [isProductOpen, setIsProductOpen] = useState(false);
//     const [activeCategory, setActiveCategory] = useState(PRODUCT_CATEGORIES[0].key);
//     const [mobileProductOpen, setMobileProductOpen] = useState(false);
//     const [mobileActiveCategory, setMobileActiveCategory] = useState(null);
//     const closeTimer = useRef(null);
//     const pathname = usePathname();

//     // Set this from your real cart state (context/store) instead of a static number
//     const cartCount = 0;

//     const isLinkActive = (href) => {
//         if (href === "/") {
//             return pathname === "/";
//         }
//         return pathname === href || pathname.startsWith(href + "/");
//     };

//     const isContactPage = false;

//     return (
//         <>
//             {/* Sticky Header Container */}
//             <div className="sticky top-0 z-40 w-full animate-slide-down -mt-[1.5px]">
//                 <nav className="bg-white px-6 sm:px-[6%] h-19 py-5 flex items-center justify-between relative z-40 shadow-md">
//                     {/* Logo */}
//                     <Link
//                         href="/"
//                         className="relative flex items-center h-10 w-24 sm:w-28 no-underline group animate-navbar-left ml-2 sm:ml-4"
//                     >
//                         <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center">
//                             <Image
//                                 src="/drymato-logo.png"
//                                 alt="Drymato Logo"
//                                 width={120}
//                                 height={120}
//                                 className="max-w-none object-contain h-12 w-auto sm:h-14"
//                             />
//                         </div>
//                     </Link>

//                     {/* Nav links - desktop */}
//                     <ul className="hidden lg:flex items-center gap-8 list-none m-0 p-0">
//                         {MENU_ITEMS.map((item) => {
//                             const active = isLinkActive(item.href);

//                             if (item.label === "Product") {
//                                 return (
//                                     <li
//                                         key={item.label}
//                                         // className="relative"
//                                         // onMouseEnter={() => setIsProductOpen(true)}
//                                         // onMouseLeave={() => setIsProductOpen(false)}
//                                         onMouseEnter={() => {
//                                             if (closeTimer.current) {
//                                                 clearTimeout(closeTimer.current);
//                                             }

//                                             setIsProductOpen(true);
//                                         }}
//                                         onMouseLeave={() => {
//                                             closeTimer.current = setTimeout(() => {
//                                                 setIsProductOpen(false);
//                                             }, 300);
//                                         }}
//                                     >
//                                         <Link
//                                             href={item.href}
//                                             className={`text-[13px] font-bold tracking-wider transition-colors duration-200 no-underline flex items-center gap-1 relative py-1 group ${active || isProductOpen
//                                                 ? "text-[#a50808]"
//                                                 : "text-gray-900 hover:text-[#a50808]"
//                                                 }`}
//                                         >
//                                             {item.label}
//                                             <svg
//                                                 className={`w-3 h-3 mt-[1px] transition-transform duration-200 ${isProductOpen ? "rotate-180" : ""
//                                                     }`}
//                                                 fill="none"
//                                                 stroke="currentColor"
//                                                 strokeWidth="2.5"
//                                                 viewBox="0 0 24 24"
//                                             >
//                                                 <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//                                             </svg>
//                                             <span
//                                                 className={`absolute bottom-0 left-0 h-[2px] bg-[#a50808] transition-all duration-300 ${active || isProductOpen ? "w-full" : "w-0 group-hover:w-full"
//                                                     }`}
//                                             />
//                                         </Link>

//                                         {/* Invisible bridge so the dropdown stays open while moving the mouse down */}
//                                         <div
//                                             className={`absolute left-1/2 -translate-x-1/2 top-full pt-0 transition-all duration-200 ${isProductOpen
//                                                 ? "opacity-100 visible translate-y-0"
//                                                 : "opacity-0 invisible -translate-y-1 pointer-events-none"
//                                                 }`}
//                                         >
//                                             {/* Invisible hover bridge */}
//                                             <div className="absolute left-0 right-0 -top-3 h-3" />
//                                             <div className="w-[1100px] max-w-[calc(100vw-40px)] bg-white shadow-[0_18px_45px_rgba(0,0,0,0.18)] border border-[#f0e2c8] overflow-hidden flex">
//                                                 {/* Left: category tabs */}
//                                                 <div className="w-[230px] shrink-0 bg-[#fdf1de] border-r border-[#f0e2c8] py-4">
//                                                     {PRODUCT_CATEGORIES.map((cat) => {
//                                                         const isActiveCat = activeCategory === cat.key;
//                                                         return (
//                                                             <button
//                                                                 key={cat.key}
//                                                                 onMouseEnter={() => setActiveCategory(cat.key)}
//                                                                 className={`w-full text-left px-5 py-3 text-[13px] font-bold tracking-wide transition-colors duration-150 cursor-pointer flex items-center justify-between ${isActiveCat
//                                                                     ? "bg-[#a50808] text-white"
//                                                                     : "text-gray-700 hover:bg-white/60 hover:text-[#a50808]"
//                                                                     }`}
//                                                             >
//                                                                 {cat.label}
//                                                                 <span
//                                                                     className={`text-[11px] font-semibold ${isActiveCat ? "text-white/80" : "text-gray-400"
//                                                                         }`}
//                                                                 >
//                                                                     {cat.items.length}
//                                                                 </span>
//                                                             </button>
//                                                         );
//                                                     })}
//                                                 </div>

//                                                 {/* Right: products for active category */}
//                                                 <div className="relative flex-1 min-h-[420px] p-8 bg-[#fdfaf5]">
//                                                     {PRODUCT_CATEGORIES.map((cat) => (
//                                                         <div
//                                                             key={cat.key}
//                                                             className={activeCategory === cat.key ? "block" : "hidden"}
//                                                         >
//                                                             {/* Faded category background image */}
//                                                             <div className="absolute right-0 bottom-0 w-100 h-60 opacity-[0.3] pointer-events-none select-none">
//                                                                 <Image
//                                                                     src={cat.bgImage}
//                                                                     alt=""
//                                                                     fill
//                                                                     className="object-contain"
//                                                                     aria-hidden="true"
//                                                                 />
//                                                             </div>

//                                                             <h4 className="relative text-[15px] font-extrabold text-gray-900 mb-1">
//                                                                 {cat.label}
//                                                             </h4>
//                                                             <p className="relative text-[12px] text-gray-500 mb-6">
//                                                                 {cat.items.length} products
//                                                             </p>

//                                                             <div className="relative grid grid-flow-col grid-rows-6 auto-cols-[170px] gap-x-8 gap-y-5">
//                                                                 {cat.items.map((product) => (
//                                                                     <Link
//                                                                         key={product.href}
//                                                                         href={product.href}
//                                                                         onClick={() => setIsProductOpen(false)}
//                                                                         className="text-[13px] text-gray-700 hover:text-[#a50808] no-underline transition-colors duration-150 whitespace-nowrap"
//                                                                     >
//                                                                         {product.name}
//                                                                     </Link>
//                                                                 ))}
//                                                             </div>
//                                                         </div>
//                                                     ))}
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </li>
//                                 );
//                             }

//                             return (
//                                 <li key={item.label}>
//                                     <Link
//                                         href={item.href}
//                                         className={`text-[13px] font-bold tracking-wider transition-colors duration-200 no-underline block relative py-1 group ${active ? "text-[#a50808]" : "text-gray-900 hover:text-[#a50808]"
//                                             }`}
//                                     >
//                                         {item.label}
//                                         <span
//                                             className={`absolute bottom-0 left-0 h-[2px] bg-[#a50808] transition-all duration-300 ${active ? "w-full" : "w-0 group-hover:w-full"
//                                                 }`}
//                                         />
//                                     </Link>
//                                 </li>
//                             );
//                         })}
//                     </ul>

//                     {/* Actions */}
//                     <div className="flex items-center gap-3 sm:gap-5">
//                         <div className="hidden md:flex items-center gap-3 animate-navbar-right mr-2 sm:mr-4">
//                             {/* Login button - same shape/animation as WhatsApp, brand red instead of green */}
//                             <Link
//                                 href="/login"
//                                 className="group relative overflow-hidden flex bg-gradient-to-br from-[#c20a0a] to-[#7a0606] border-2 border-[#7a0606] text-white pl-6 pr-2 py-2 rounded-[14px] text-xs font-extrabold tracking-wider items-center gap-3 transition-all duration-300 no-underline shadow-[0_4px_14px_rgba(165,8,8,0.18)] hover:shadow-[0_6px_20px_rgba(165,8,8,0.22)] active:shadow-[0_4px_12px_rgba(165,8,8,0.15)] hover:border-[#c20a0a] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer z-10"
//                             >
//                                 <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[125%] aspect-square rounded-t-[50%] bg-white translate-y-full transition-transform duration-[750ms] ease-in-out z-0 group-hover:translate-y-[12%]" />
//                                 <span className="relative z-10 transition-colors duration-300 group-hover:text-[#a50808]">LOGIN</span>
//                                 <div className="relative z-10 w-6 h-6 bg-white text-[#a50808] rounded-full flex items-center justify-center shadow-sm transform group-hover:translate-x-1 group-hover:bg-[#a50808] group-hover:text-white transition-all duration-300">
//                                     <UserIcon className="w-3.5 h-3.5" />
//                                 </div>
//                             </Link>

//                             {/* Cart button */}
//                             <Link
//                                 href="/cart"
//                                 aria-label="View cart"
//                                 className="relative flex items-center justify-center w-11 h-11 rounded-full text-gray-900 hover:text-[#a50808] hover:bg-gray-100 transition-colors duration-200 no-underline"
//                             >
//                                 <CartIcon className="w-6 h-6" />
//                                 {cartCount > 0 && (
//                                     <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-[#a50808] text-white text-[10px] font-bold flex items-center justify-center">
//                                         {cartCount}
//                                     </span>
//                                 )}
//                             </Link>
//                         </div>

//                         {/* Cart icon visible on mobile too, next to hamburger */}
//                         <Link
//                             href="/cart"
//                             aria-label="View cart"
//                             className="relative flex items-center justify-center text-gray-900 hover:text-[#a50808] transition-colors duration-200 md:hidden"
//                         >
//                             <CartIcon className="w-6 h-6" />
//                             {cartCount > 0 && (
//                                 <span className="absolute -top-1.5 -right-1.5 min-w-[16px] h-[16px] px-1 rounded-full bg-[#a50808] text-white text-[9px] font-bold flex items-center justify-center">
//                                     {cartCount}
//                                 </span>
//                             )}
//                         </Link>

//                         <button
//                             onClick={() => setIsMobileMenuOpen(true)}
//                             className="text-gray-900 hover:text-[#a50808] transition-colors duration-200 cursor-pointer lg:hidden"
//                             aria-label="Open menu"
//                         >
//                             <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//                             </svg>
//                         </button>
//                     </div>
//                 </nav >
//             </div >

//             {/* Mobile Menu Drawer Overlay */}
//             <div className={`fixed inset-0 z-[100] lg:hidden transition-all duration-300 ${isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`
//             }>
//                 <div
//                     className={`absolute inset-0 bg-black/55 backdrop-blur-sm transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100" : "opacity-0"}`}
//                     onClick={() => setIsMobileMenuOpen(false)}
//                 />

//                 <div className="absolute inset-y-0 right-0 max-w-full flex">
//                     <div className={`w-72 bg-white shadow-2xl flex flex-col py-6 px-6 relative transition-transform duration-300 ease-in-out transform ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
//                         <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6">
//                             <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
//                                 <Image
//                                     src="/drymato-logo.png"
//                                     alt="Drymato Logo"
//                                     width={90}
//                                     height={90}
//                                     className="object-contain"
//                                 />
//                             </Link>
//                             <button
//                                 onClick={() => setIsMobileMenuOpen(false)}
//                                 className="text-gray-500 hover:text-gray-900 p-1 rounded-full hover:bg-gray-100 transition-colors"
//                                 aria-label="Close menu"
//                             >
//                                 <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                                 </svg>
//                             </button>
//                         </div>

//                         {/* Navigation links inside drawer */}
//                         <nav className="flex-1 overflow-y-auto pr-1">
//                             <ul className="flex flex-col gap-5 list-none p-0 m-0">
//                                 {MENU_ITEMS.map((item) => {
//                                     const active = isLinkActive(item.href);

//                                     if (item.label === "Product") {
//                                         return (
//                                             <li key={item.label}>
//                                                 <button
//                                                     onClick={() => setMobileProductOpen((prev) => !prev)}
//                                                     className={`w-full flex items-center justify-between text-base font-bold no-underline cursor-pointer bg-transparent border-0 p-0 ${active ? "text-[#a50808]" : "text-gray-900"
//                                                         }`}
//                                                 >
//                                                     {item.label}
//                                                     <svg
//                                                         className={`w-4 h-4 transition-transform duration-200 ${mobileProductOpen ? "rotate-180" : ""
//                                                             }`}
//                                                         fill="none"
//                                                         stroke="currentColor"
//                                                         strokeWidth="2.5"
//                                                         viewBox="0 0 24 24"
//                                                     >
//                                                         <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//                                                     </svg>
//                                                 </button>

//                                                 <div
//                                                     className={`overflow-hidden transition-all duration-300 ${mobileProductOpen ? "max-h-[2000px] mt-3" : "max-h-0"
//                                                         }`}
//                                                 >
//                                                     <div className="flex flex-col gap-1 border-l-2 border-[#f0e2c8] pl-3">
//                                                         {PRODUCT_CATEGORIES.map((cat) => {
//                                                             const catOpen = mobileActiveCategory === cat.key;
//                                                             return (
//                                                                 <div key={cat.key}>
//                                                                     <button
//                                                                         onClick={() =>
//                                                                             setMobileActiveCategory((prev) =>
//                                                                                 prev === cat.key ? null : cat.key
//                                                                             )
//                                                                         }
//                                                                         className="w-full flex items-center justify-between py-2 text-[13px] font-bold text-gray-800 bg-transparent border-0 cursor-pointer"
//                                                                     >
//                                                                         {cat.label}
//                                                                         <svg
//                                                                             className={`w-3 h-3 transition-transform duration-200 ${catOpen ? "rotate-180" : ""
//                                                                                 }`}
//                                                                             fill="none"
//                                                                             stroke="currentColor"
//                                                                             strokeWidth="2.5"
//                                                                             viewBox="0 0 24 24"
//                                                                         >
//                                                                             <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//                                                                         </svg>
//                                                                     </button>
//                                                                     <div
//                                                                         className={`overflow-hidden transition-all duration-300 ${catOpen ? "max-h-[1000px] pb-2" : "max-h-0"
//                                                                             }`}
//                                                                     >
//                                                                         <div className="flex flex-col gap-2 pl-2">
//                                                                             {cat.items.map((product) => (
//                                                                                 <Link
//                                                                                     key={product.href}
//                                                                                     href={product.href}
//                                                                                     onClick={() => {
//                                                                                         setIsMobileMenuOpen(false);
//                                                                                         setMobileProductOpen(false);
//                                                                                         setMobileActiveCategory(null);
//                                                                                     }}
//                                                                                     className="text-[13px] text-gray-600 hover:text-[#a50808] no-underline py-1"
//                                                                                 >
//                                                                                     {product.name}
//                                                                                 </Link>
//                                                                             ))}
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             );
//                                                         })}
//                                                     </div>
//                                                 </div>
//                                             </li>
//                                         );
//                                     }

//                                     return (
//                                         <li key={item.label}>
//                                             <Link
//                                                 href={item.href}
//                                                 onClick={() => setIsMobileMenuOpen(false)}
//                                                 className={`block text-base font-bold transition-colors no-underline relative ${active ? "text-[#a50808] pl-3 border-l-2 border-[#a50808]" : "text-gray-900 hover:text-[#a50808]"
//                                                     }`}
//                                             >
//                                                 {item.label}
//                                             </Link>
//                                         </li>
//                                     );
//                                 })}

//                                 {/* Login link inside drawer */}
//                                 <li>
//                                     <Link
//                                         href="/login"
//                                         onClick={() => setIsMobileMenuOpen(false)}
//                                         className="block text-base font-bold text-gray-900 hover:text-[#a50808] no-underline"
//                                     >
//                                         Login
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </nav>

//                         {/* Footer / WhatsApp inside drawer */}
//                         <div className="mt-auto pt-6 border-t border-gray-100">
//                             <a
//                                 href="https://wa.me/8000897238"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 onClick={() => setIsMobileMenuOpen(false)}
//                                 className="group relative overflow-hidden bg-gradient-to-br from-[#22c55e] to-[#15803d] border-2 border-[#15803d] text-white py-3 px-6 rounded-xl text-sm font-extrabold tracking-wider flex items-center justify-center gap-3 transition-all duration-300 no-underline shadow-[0_4px_14px_rgba(34,197,94,0.18)] hover:shadow-[0_6px_20px_rgba(34,197,94,0.22)] cursor-pointer z-10"
//                             >
//                                 <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[125%] aspect-square rounded-t-[50%] bg-white translate-y-full transition-transform duration-[750ms] ease-in-out z-0 group-hover:translate-y-[12%]" />
//                                 <span className="relative z-10 transition-colors duration-300 group-hover:text-[#15803d]">WHATSAPP</span>
//                                 <div className="relative z-10 w-6 h-6 bg-white text-[#15803d] rounded-full flex items-center justify-center shadow-sm transform group-hover:translate-x-1 group-hover:bg-[#15803d] group-hover:text-white transition-all duration-300">
//                                     <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
//                                         <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.437.002 9.861-4.416 9.864-9.862.002-2.638-1.023-5.122-2.89-6.99-1.868-1.869-4.351-2.9-6.994-2.902-5.446 0-9.873 4.42-9.876 9.869-.001 1.73.457 3.419 1.323 4.922L1.75 22.25l4.897-1.286zM17.487 14.37c-.3-.15-1.782-.88-2.062-.982-.28-.102-.485-.153-.69.153-.205.305-.795.982-.973 1.185-.178.203-.356.23-.656.08-1.252-.627-2.157-1.163-3.016-2.627-.225-.389.225-.361.643-1.196.07-.14.03-.26-.02-.36-.05-.1-.485-1.18-.665-1.62-.175-.425-.37-.365-.51-.372l-.435-.01c-.15 0-.395.056-.6.28-.205.224-.785.766-.785 1.87 0 1.1.8 2.17.91 2.32.11.15 1.577 2.41 3.82 3.38.533.23.95.37 1.275.475.536.17 1.02.146 1.405.09.43-.063 1.782-.73 2.032-1.43.25-.7.25-1.3.175-1.43-.07-.13-.27-.21-.57-.36z" />
//                                     </svg>
//                                 </div>
//                             </a>
//                         </div>
//                     </div>
//                 </div >
//             </div >
//         </>
//     );
// }








"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useNavigation from "@/lib/useNavigation";
// Only used to borrow the faded background IMAGES (not products)
import { PRODUCT_CATEGORIES_FOR_MENU as STATIC_MENU } from "@/lib/product";

import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";

const sig = (s) =>
    String(s).toLowerCase().split(/\s+/).map((w) => w.replace(/s$/, "")).sort().join(" ");
const getBgImage = (label) =>
    STATIC_MENU.find((c) => sig(c.label) === sig(label))?.bgImage || null;

const MENU_ITEMS = [
    { label: "Home", href: "/" },
    { label: "Product", href: "/product" },
    { label: "About Us", href: "/about-us" },
    { label: "Why Choose Us", href: "/why-choose-us" },
    { label: "Wholesale", href: "/holesale" },
    { label: "Export", href: "/export" },
    { label: "Contact", href: "/contact" },
];


// ---- small inline icons ----
const CartIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 1.865-4.775 2.192-7.363a1.125 1.125 0 00-1.12-1.263H5.106M7.5 14.25L5.106 5.272M6 18.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        />
    </svg>
);

const UserIcon = ({ className = "w-3.5 h-3.5" }) => (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
    </svg>
);

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProductOpen, setIsProductOpen] = useState(false);
    // const [activeCategory, setActiveCategory] = useState(PRODUCT_CATEGORIES[0].key);
    const { categories: PRODUCT_CATEGORIES, loading: navLoading } = useNavigation();
    const [activeCategory, setActiveCategory] = useState(null);
    const currentCategory = activeCategory ?? PRODUCT_CATEGORIES[0]?.key;
    const [mobileProductOpen, setMobileProductOpen] = useState(false);
    const [mobileActiveCategory, setMobileActiveCategory] = useState(null);
    const closeTimer = useRef(null);
    const pathname = usePathname();

    const { totalQuantity: cartCount, openCart } = useCart();

    const { user, status, openAuthModal, logout } = useAuth();
    const firstName = (user?.name || "").trim().split(/\s+/)[0];

    const isLinkActive = (href) => {
        if (href === "/") {
            return pathname === "/";
        }
        return pathname === href || pathname.startsWith(href + "/");
    };

    const isContactPage = false;

    return (
        <>
            {/* Sticky Header Container */}
            <div className="sticky top-0 z-40 w-full animate-slide-down -mt-[1.5px]">
                <nav className="bg-surface px-6 sm:px-[6%] h-19 py-5 flex items-center justify-between relative z-40 shadow-md">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="relative flex items-center h-10 w-24 sm:w-28 no-underline group animate-navbar-left ml-2 sm:ml-4"
                    >
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center">
                            <Image
                                src="/drymato-logo.png"
                                alt="Drymato Logo"
                                width={120}
                                height={120}
                                className="max-w-none object-contain h-12 w-auto sm:h-14"
                            />
                        </div>
                    </Link>

                    {/* Nav links - desktop */}
                    <ul className="hidden lg:flex items-center gap-8 list-none m-0 p-0">
                        {MENU_ITEMS.map((item) => {
                            const active = isLinkActive(item.href);

                            if (item.label === "Product") {
                                return (
                                    <li
                                        key={item.label}
                                        onMouseEnter={() => {
                                            if (closeTimer.current) {
                                                clearTimeout(closeTimer.current);
                                            }

                                            setIsProductOpen(true);
                                        }}
                                        onMouseLeave={() => {
                                            closeTimer.current = setTimeout(() => {
                                                setIsProductOpen(false);
                                            }, 300);
                                        }}
                                    >
                                        <Link
                                            href={item.href}
                                            className={`text-[13px] font-bold tracking-wider transition-colors duration-200 no-underline flex items-center gap-1 relative py-1 group ${active || isProductOpen
                                                ? "text-forest"
                                                : "text-gray-900 hover:text-forest"
                                                }`}
                                        >
                                            {item.label}
                                            <svg
                                                className={`w-3 h-3 mt-[1px] transition-transform duration-200 ${isProductOpen ? "rotate-180" : ""
                                                    }`}
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2.5"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                            </svg>
                                            <span
                                                className={`absolute bottom-0 left-0 h-[2px] bg-forest transition-all duration-300 ${active || isProductOpen ? "w-full" : "w-0 group-hover:w-full"
                                                    }`}
                                            />
                                        </Link>

                                        {/* Invisible bridge so the dropdown stays open while moving the mouse down */}
                                        <div
                                            className={`absolute left-1/2 -translate-x-1/2 top-full pt-0 transition-all duration-200 ${isProductOpen
                                                ? "opacity-100 visible translate-y-0"
                                                : "opacity-0 invisible -translate-y-1 pointer-events-none"
                                                }`}
                                        >
                                            {/* Invisible hover bridge */}
                                            <div className="absolute left-0 right-0 -top-3 h-3" />
                                            <div className="w-[1100px] max-w-[calc(100vw-40px)] bg-surface shadow-[0_18px_45px_rgba(0,0,0,0.18)] border border-sage/25 overflow-hidden flex">
                                                {/* Left: category tabs (click -> filtered products page) */}
                                                <div className="w-[230px] shrink-0 bg-surface border-r border-sage/20 py-4">
                                                    {navLoading && (
                                                        <div className="px-5 space-y-4 animate-pulse">
                                                            {[0, 1, 2, 3].map((i) => (
                                                                <div key={i} className="h-4 w-3/4 rounded bg-gray-100" />
                                                            ))}
                                                        </div>
                                                    )}
                                                    {PRODUCT_CATEGORIES.map((cat) => {
                                                        const isActiveCat = currentCategory === cat.key;
                                                        return (
                                                            <Link
                                                                key={cat.key}
                                                                href={cat.href}
                                                                onMouseEnter={() => setActiveCategory(cat.key)}
                                                                onClick={() => setIsProductOpen(false)}
                                                                className={`w-full text-left px-5 py-3 text-[13px] font-bold tracking-wide no-underline transition-colors duration-150 cursor-pointer flex items-center justify-between ${isActiveCat
                                                                    ? "bg-forest text-white"
                                                                    : "text-gray-700 hover:bg-white/60 hover:text-forest"
                                                                    }`}
                                                            >
                                                                {cat.label}
                                                                <span className={`text-[11px] font-semibold ${isActiveCat ? "text-white/80" : "text-gray-400"}`}>
                                                                    {cat.items.length}
                                                                </span>
                                                            </Link>
                                                        );
                                                    })}
                                                </div>

                                                {/* Right: products for active category */}
                                                <div className="relative flex-1 min-h-[420px] p-8 bg-surface">
                                                    {PRODUCT_CATEGORIES.map((cat) => {
                                                        const bg = getBgImage(cat.label);
                                                        return (
                                                            <div key={cat.key} className={currentCategory === cat.key ? "block" : "hidden"}>
                                                                {bg && (
                                                                    <div className="absolute right-0 bottom-0 w-100 h-60 opacity-[0.3] pointer-events-none select-none">
                                                                        <Image src={bg} alt="" fill className="object-contain" aria-hidden="true" />
                                                                    </div>
                                                                )}

                                                                <h4 className="relative text-[17px] font-serif font-bold text-foreground mb-1">
                                                                    {cat.label}
                                                                </h4>
                                                                <p className="relative text-[12px] text-gray-500 mb-6">
                                                                    {cat.items.length} products
                                                                </p>

                                                                <div className="relative grid grid-flow-col grid-rows-6 auto-cols-[170px] gap-x-8 gap-y-5">
                                                                    {cat.items.map((product) => (
                                                                        <Link
                                                                            key={product.key}
                                                                            href={product.href}
                                                                            onClick={() => setIsProductOpen(false)}
                                                                            className="text-[13px] text-gray-700 hover:text-forest no-underline transition-colors duration-150 whitespace-nowrap"
                                                                        >
                                                                            {product.name}
                                                                        </Link>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                );
                            }

                            return (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        className={`text-[13px] font-bold tracking-wider transition-colors duration-200 no-underline block relative py-1 group ${active ? "text-forest" : "text-gray-900 hover:text-forest"
                                            }`}
                                    >
                                        {item.label}
                                        <span
                                            className={`absolute bottom-0 left-0 h-[2px] bg-forest transition-all duration-300 ${active ? "w-full" : "w-0 group-hover:w-full"
                                                }`}
                                        />
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Actions */}
                    <div className="flex items-center gap-3 sm:gap-5">
                        <div className="hidden md:flex items-center gap-3 animate-navbar-right mr-2 sm:mr-4">
                            {/* Login button - same shape/animation as WhatsApp, brand forest green instead of red */}
                            {status === "loading" ? (
                                <div className="h-9 w-[92px]" aria-hidden="true" />
                            ) : user ? (
                                <div className="group relative">
                                    <button
                                        type="button"
                                        className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-forest/85 text-forest text-[12px] font-bold tracking-[0.12em] cursor-pointer"
                                    >
                                        <UserIcon className="w-3.5 h-3.5" />
                                        <span className="max-w-[110px] truncate">{firstName}</span>
                                    </button>
                                    <div className="absolute right-0 top-full pt-2 opacity-0 invisible transition-all duration-200 group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible">
                                        <div className="w-56 bg-surface border border-sage/25 shadow-[0_18px_45px_rgba(0,0,0,0.18)] p-4">
                                            {/* <p className="text-[13px] font-bold text-foreground truncate">{user.name}</p>
                                            <p className="text-[12px] text-gray-500 truncate mb-3">{user.email}</p> */}
                                            <Link
                                                href="/profile"
                                                className="block mb-2 text-[13px] font-bold text-forest hover:underline"
                                            >
                                                My profile
                                            </Link>
                                            <button
                                                type="button"
                                                onClick={logout}
                                                className="w-full text-left text-[13px] font-bold text-forest hover:underline cursor-pointer"
                                            >
                                                Log out
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <button
                                    type="button"
                                    onClick={() => openAuthModal("login")}
                                    className="group flex items-center gap-2 px-3.5 py-2 rounded-full border border-forest/85 text-forest text-[12px] font-bold tracking-[0.12em] transition-all duration-300 hover:bg-forest hover:text-white hover:border-forest cursor-pointer"
                                >
                                    <UserIcon className="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-105" />
                                    <span>LOGIN</span>
                                </button>
                            )}

                            {/* Cart button */}
                            <button
                                type="button"
                                onClick={openCart}
                                aria-label="Open cart"
                                className="relative flex items-center justify-center w-11 h-11 rounded-full text-gray-900 hover:text-forest hover:bg-surface transition-colors duration-200 cursor-pointer"
                            >
                                <CartIcon className="w-6 h-6" />
                                {cartCount > 0 && (
                                    <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-forest text-white text-[10px] font-bold flex items-center justify-center">
                                        {cartCount}
                                    </span>
                                )}
                            </button>
                        </div>

                        {/* Cart icon visible on mobile too, next to hamburger */}
                        <button
                            type="button"
                            onClick={openCart}
                            aria-label="Open cart"
                            className="relative flex items-center justify-center text-gray-900 hover:text-forest transition-colors duration-200 md:hidden cursor-pointer"
                        >
                            <CartIcon className="w-6 h-6" />
                            {cartCount > 0 && (
                                <span className="absolute -top-1.5 -right-1.5 min-w-[16px] h-[16px] px-1 rounded-full bg-forest text-white text-[9px] font-bold flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </button>

                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="text-gray-900 hover:text-forest transition-colors duration-200 cursor-pointer lg:hidden"
                            aria-label="Open menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                </nav >
            </div >

            {/* Mobile Menu Drawer Overlay */}
            <div className={`fixed inset-0 z-[100] lg:hidden transition-all duration-300 ${isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`
            }>
                <div
                    className={`absolute inset-0 bg-black/55 backdrop-blur-sm transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100" : "opacity-0"}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                />

                <div className="absolute inset-y-0 right-0 max-w-full flex">
                    <div className={`w-72 bg-surface shadow-2xl flex flex-col py-6 px-6 relative transition-transform duration-300 ease-in-out transform ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                        <div className="flex items-center justify-between border-b border-sage/20 pb-4 mb-6">
                            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                                <Image
                                    src="/drymato-logo.png"
                                    alt="Drymato Logo"
                                    width={90}
                                    height={90}
                                    className="object-contain"
                                />
                            </Link>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-gray-500 hover:text-foreground p-1 rounded-full hover:bg-surface transition-colors"
                                aria-label="Close menu"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Navigation links inside drawer */}
                        <nav className="flex-1 overflow-y-auto pr-1">
                            <ul className="flex flex-col gap-5 list-none p-0 m-0">
                                {MENU_ITEMS.map((item) => {
                                    const active = isLinkActive(item.href);

                                    if (item.label === "Product") {
                                        return (
                                            <li key={item.label}>
                                                <button
                                                    onClick={() => setMobileProductOpen((prev) => !prev)}
                                                    className={`w-full flex items-center justify-between text-base font-bold no-underline cursor-pointer bg-transparent border-0 p-0 ${active ? "text-forest" : "text-gray-900"
                                                        }`}
                                                >
                                                    {item.label}
                                                    <svg
                                                        className={`w-4 h-4 transition-transform duration-200 ${mobileProductOpen ? "rotate-180" : ""
                                                            }`}
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2.5"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </button>

                                                <div
                                                    className={`overflow-hidden transition-all duration-300 ${mobileProductOpen ? "max-h-[2000px] mt-3" : "max-h-0"
                                                        }`}
                                                >
                                                    <div className="flex flex-col gap-1 border-l-2 border-sage/25 pl-3">
                                                        {/* {PRODUCT_CATEGORIES.map((cat) => {
                                                            const catOpen = mobileActiveCategory === cat.key;
                                                            return (
                                                                <div key={cat.key}>
                                                                    <button
                                                                        onClick={() =>
                                                                            setMobileActiveCategory((prev) =>
                                                                                prev === cat.key ? null : cat.key
                                                                            )
                                                                        }
                                                                        className="w-full flex items-center justify-between py-2 text-[13px] font-bold text-gray-800 bg-transparent border-0 cursor-pointer"
                                                                    >
                                                                        {cat.label}
                                                                        <svg
                                                                            className={`w-3 h-3 transition-transform duration-200 ${catOpen ? "rotate-180" : ""
                                                                                }`}
                                                                            fill="none"
                                                                            stroke="currentColor"
                                                                            strokeWidth="2.5"
                                                                            viewBox="0 0 24 24"
                                                                        >
                                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                                                        </svg>
                                                                    </button>
                                                                    <div
                                                                        className={`overflow-hidden transition-all duration-300 ${catOpen ? "max-h-[1000px] pb-2" : "max-h-0"
                                                                            }`}
                                                                    >
                                                                        <div className="flex flex-col gap-2 pl-2">
                                                                            {cat.items.map((product) => (
                                                                                <Link
                                                                                    key={product.href}
                                                                                    href={product.href}
                                                                                    onClick={() => {
                                                                                        setIsMobileMenuOpen(false);
                                                                                        setMobileProductOpen(false);
                                                                                        setMobileActiveCategory(null);
                                                                                    }}
                                                                                    className="text-[13px] text-gray-600 hover:text-forest no-underline py-1"
                                                                                >
                                                                                    {product.name}
                                                                                </Link>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        })} */}

                                                        {PRODUCT_CATEGORIES.map((cat) => {
                                                            const catOpen = mobileActiveCategory === cat.key;
                                                            const closeAll = () => {
                                                                setIsMobileMenuOpen(false);
                                                                setMobileProductOpen(false);
                                                                setMobileActiveCategory(null);
                                                            };
                                                            return (
                                                                <div key={cat.key}>
                                                                    <div className="w-full flex items-center justify-between py-2">
                                                                        <Link
                                                                            href={cat.href}
                                                                            onClick={closeAll}
                                                                            className="flex-1 text-[13px] font-bold text-gray-800 no-underline"
                                                                        >
                                                                            {cat.label}
                                                                        </Link>
                                                                        <button
                                                                            type="button"
                                                                            aria-label={`Toggle ${cat.label}`}
                                                                            onClick={() => setMobileActiveCategory((prev) => (prev === cat.key ? null : cat.key))}
                                                                            className="p-1 bg-transparent border-0 cursor-pointer"
                                                                        >
                                                                            <svg
                                                                                className={`w-3 h-3 transition-transform duration-200 ${catOpen ? "rotate-180" : ""}`}
                                                                                fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
                                                                            >
                                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                                                            </svg>
                                                                        </button>
                                                                    </div>
                                                                    <div className={`overflow-hidden transition-all duration-300 ${catOpen ? "max-h-[1000px] pb-2" : "max-h-0"}`}>
                                                                        <div className="flex flex-col gap-2 pl-2">
                                                                            {cat.items.map((product) => (
                                                                                <Link
                                                                                    key={product.key}
                                                                                    href={product.href}
                                                                                    onClick={closeAll}
                                                                                    className="text-[13px] text-gray-600 hover:text-forest no-underline py-1"
                                                                                >
                                                                                    {product.name}
                                                                                </Link>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        })}

                                                    </div>
                                                </div>
                                            </li>
                                        );
                                    }

                                    return (
                                        <li key={item.label}>
                                            <Link
                                                href={item.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className={`block text-base font-bold transition-colors no-underline relative ${active ? "text-forest pl-3 border-l-2 border-forest" : "text-gray-900 hover:text-forest"
                                                    }`}
                                            >
                                                {item.label}
                                            </Link>
                                        </li>
                                    );
                                })}

                                {/* Login link inside drawer */}
                                <li>
                                    {user ? (
                                        <button
                                            type="button"
                                            onClick={() => { setIsMobileMenuOpen(false); logout(); }}
                                            className="block text-base font-bold text-gray-900 hover:text-forest cursor-pointer"
                                        >
                                            Log out ({firstName})
                                        </button>
                                    ) : (
                                        <button
                                            type="button"
                                            onClick={() => { setIsMobileMenuOpen(false); openAuthModal("login"); }}
                                            className="block text-base font-bold text-gray-900 hover:text-forest cursor-pointer"
                                        >
                                            Login
                                        </button>
                                    )}
                                </li>
                                {user && (
                                    <li>
                                        <Link
                                            href="/profile"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="block text-base font-bold text-gray-900 hover:text-forest no-underline"
                                        >
                                            My profile
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        </nav>

                        {/* Footer / WhatsApp inside drawer */}
                        <div className="mt-auto pt-6 border-t border-sage/20">
                            <a
                                href="https://wa.me/8000897238"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="group relative overflow-hidden bg-gradient-to-br from-[#22c55e] to-[#15803d] border-2 border-[#15803d] text-white py-3 px-6 rounded-xl text-sm font-extrabold tracking-wider flex items-center justify-center gap-3 transition-all duration-300 no-underline shadow-[0_4px_14px_rgba(34,197,94,0.18)] hover:shadow-[0_6px_20px_rgba(34,197,94,0.22)] cursor-pointer z-10"
                            >
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[125%] aspect-square rounded-t-[50%] bg-white translate-y-full transition-transform duration-[750ms] ease-in-out z-0 group-hover:translate-y-[12%]" />
                                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#15803d]">WHATSAPP</span>
                                <div className="relative z-10 w-6 h-6 bg-white text-[#15803d] rounded-full flex items-center justify-center shadow-sm transform group-hover:translate-x-1 group-hover:bg-[#15803d] group-hover:text-white transition-all duration-300">
                                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.437.002 9.861-4.416 9.864-9.862.002-2.638-1.023-5.122-2.89-6.99-1.868-1.869-4.351-2.9-6.994-2.902-5.446 0-9.873 4.42-9.876 9.869-.001 1.73.457 3.419 1.323 4.922L1.75 22.25l4.897-1.286zM17.487 14.37c-.3-.15-1.782-.88-2.062-.982-.28-.102-.485-.153-.69.153-.205.305-.795.982-.973 1.185-.178.203-.356.23-.656.08-1.252-.627-2.157-1.163-3.016-2.627-.225-.389.225-.361.643-1.196.07-.14.03-.26-.02-.36-.05-.1-.485-1.18-.665-1.62-.175-.425-.37-.365-.51-.372l-.435-.01c-.15 0-.395.056-.6.28-.205.224-.785.766-.785 1.87 0 1.1.8 2.17.91 2.32.11.15 1.577 2.41 3.82 3.38.533.23.95.37 1.275.475.536.17 1.02.146 1.405.09.43-.063 1.782-.73 2.032-1.43.25-.7.25-1.3.175-1.43-.07-.13-.27-.21-.57-.36z" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </div >
            </div >
        </>
    );
}