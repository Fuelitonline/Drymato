// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
// // import { FaXTwitter } from "react-icons/fa6";

// export default function Footer() {
//     const [email, setEmail] = useState("");
//     const [isSubscribed, setIsSubscribed] = useState(false);
//     const [error, setError] = useState("");
//     const [shouldShake, setShouldShake] = useState(false);

//     const handleSubscribe = (e) => {
//         e.preventDefault();
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
//         if (!emailRegex.test(email)) {
//             setError("Please enter a valid email address.");
//             setShouldShake(true);
//             setTimeout(() => {
//                 setShouldShake(false);
//             }, 400);
//             return;
//         }

//         setError("");
//         setIsSubscribed(true);
//         setEmail("");

//         setTimeout(() => {
//             setIsSubscribed(false);
//         }, 2000);
//     };
//     return (
//         <footer className="relative bg-gradient-to-b from-[#fffbf7] via-[#fff8f0] to-[#fff5e8] text-[#554d45] border-t border-[#f5ece3]">
//             {/* Full-width Contact Banner Bar (No rounded corners, integrated inside footer top border) */}
//             <div className="w-full bg-[#a50808] py-8 text-white relative z-20 shadow-[0_4px_25px_rgba(235,0,41,0.15)] overflow-hidden group">
//                 {/* Subtle background shine reflection */}
//                 <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent to-white/10 skew-x-12 transform origin-top-right transition-transform duration-1000 group-hover:scale-115 pointer-events-none"></div>

//                 <div className="container mx-auto px-6 sm:px-12 lg:px-24">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0 items-center">
//                         {/* Address */}
//                         {/* <div className="flex items-center gap-4 md:border-r md:border-white/20 md:pr-10 py-2">
//                             <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-[#a50808] shrink-0 shadow-lg hover:rotate-12 hover:scale-105 transition-all duration-300">
//                                 <FaMapMarkerAlt className="w-5.5 h-5.5" />
//                             </div>
//                             <div>
//                                 <span className="text-[10px] font-black tracking-widest uppercase text-white/90 block">ADDRESS</span>
//                                 <span className="text-sm md:text-base font-bold tracking-wide block mt-0.5 text-white">2nd floor Capital Highstreet, Main, Mahal Rd, Jagatpura, Jaipur, Rajasthan 302017</span>
//                             </div>
//                         </div> */}

//                         {/* Send Email */}
//                         <div className="flex items-center gap-4 md:border-r md:border-white/20 md:px-10 py-2">
//                             <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-[#a50808] shrink-0 shadow-lg hover:rotate-12 hover:scale-105 transition-all duration-300">
//                                 <FaEnvelope className="w-5.5 h-5.5" />
//                             </div>
//                             <div>
//                                 <span className="text-[10px] font-black tracking-widest uppercase text-white/90 block">SEND EMAIL</span>
//                                 <a href="mailto:info@exmple.com" className="text-sm md:text-base font-bold tracking-wide block mt-0.5 text-white hover:underline">hello@drymato.com</a>
//                             </div>
//                         </div>

//                         {/* Call Emergency */}
//                         <div className="flex items-center gap-4 md:pl-10 py-2">
//                             <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-[#a50808] shrink-0 shadow-lg hover:rotate-12 hover:scale-105 transition-all duration-300">
//                                 <FaPhoneAlt className="w-5.5 h-5.5" />
//                             </div>
//                             <div>
//                                 <span className="text-[10px] font-black tracking-widest uppercase text-white/90 block">CONTACT US</span>
//                                 <a href="tel:+88012365499" className="text-sm md:text-base font-bold tracking-wide block mt-0.5 text-white hover:underline">+91 8000897238</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Ambient Background Light Elements & Botanical Drawings */}
//             <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
//                 <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-[#b0121a]/5 rounded-full filter blur-[100px]"></div>
//                 <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-[#f97316]/5 rounded-full filter blur-[100px]"></div>

//                 {/* Large Tomato Tree illustration in the bottom-left corner */}
//                 <div className="absolute left-[-120px] bottom-[-70px] w-[350px] sm:w-[500px] md:w-[600px] h-auto opacity-[0.22] rotate-[10deg] transform origin-bottom-left">
//                     <img
//                         src="/tomatotree.png"
//                         alt="Tomato Tree Background"
//                         className="w-full h-auto object-contain filter saturate-50"
//                     />
//                 </div>
//             </div>

//             <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10 pt-16">
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16 pb-6">

//                     {/* Column 1: Branding & Socials (Unique left-anchored layout) */}
//                     <div className="lg:col-span-4 space-y-6 lg:border-r lg:border-[#f3e6da] lg:pr-10">
//                         {/* Logo with slight hover pulse */}
//                         <div className="">
//                             <Link href="/" className="relative group block w-max">
//                                 <Image
//                                     src="/drymato-logo.png"
//                                     alt="Drymato Logo"
//                                     width={165}
//                                     height={72}
//                                     className="object-contain h-28 w-auto transition-transform duration-500 group-hover:scale-105"
//                                     priority
//                                 />
//                                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none"></div>
//                             </Link>
//                         </div>

//                         {/* Tagline styled as a luxury fashion sub-label */}
//                         {/* <div className="space-y-1 select-none">
//                             <span className="text-[9px] font-black tracking-[2.5px] text-gray-400 block uppercase">
//                                 DRYMATO ORIGINAL
//                             </span>
//                             <p className="text-[10px] font-extrabold tracking-[1px] text-[#b0121a] uppercase inline-flex items-center gap-1.5 bg-[#b0121a]/5 border border-[#b0121a]/10 px-2.5 py-1 rounded-full">
//                                 <span className="w-1.5 h-1.5 rounded-full bg-[#b0121a] animate-pulse"></span>
//                                 SEMI-DRIED GOODNESS, BURSTING WITH FLAVOR
//                             </p>
//                         </div> */}

//                         {/* Social Icons (Circular, glass-shadow toolbars) */}
//                         <div className="flex gap-3.5 pt-2">
//                             {[
//                                 { icon: <FaFacebook className="w-4 h-4" />, color: "hover:bg-[#1877f2] hover:border-[#1877f2] hover:shadow-[0_6px_20px_rgba(24,119,242,0.35)]", label: "Facebook", link: "#" },
//                                 { icon: <FaInstagram className="w-4 h-4" />, color: "hover:bg-black hover:border-black hover:shadow-[0_6px_20px_rgba(0,0,0,0.25)]", label: "I", link: "https://www.instagram.com/drymato_/" },
//                                 { icon: <FaLinkedin className="w-4 h-4" />, color: "hover:bg-[#0a66c2] hover:border-[#0a66c2] hover:shadow-[0_6px_20px_rgba(10,102,194,0.35)]", label: "LinkedIn", link: "https://www.linkedin.com/company/drymato/?viewAsMember=true" },
//                                 { icon: <FaYoutube className="w-4 h-4" />, color: "hover:bg-[#ff0000] hover:border-[#ff0000] hover:shadow-[0_6px_20px_rgba(255,0,0,0.35)]", label: "YouTube", link: "#" }
//                             ].map((social, idx) => (
//                                 <a
//                                     key={idx}
//                                     href={social.link}
//                                     className={`w-9.5 h-9.5 bg-white border border-orange-100/70 rounded-full flex items-center justify-center text-gray-500 hover:text-white ${social.color} hover:-translate-y-1.5 hover:scale-110 active:scale-95 transition-all duration-300 shadow-[0_3px_8px_rgba(0,0,0,0.02)]`}
//                                     aria-label={social.label}
//                                 >
//                                     {social.icon}
//                                 </a>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Column 2: Quick Links (Styled with animated growing horizontal lines) */}
//                     <div className="lg:col-span-2 space-y-5">
//                         <div>
//                             <h3 className="text-xs font-black tracking-widest text-[#2a2521] uppercase">QUICK LINKS</h3>
//                             <div className="h-[2px] w-8 bg-gradient-to-r from-[#b0121a] to-[#f97316] mt-2 rounded-full"></div>
//                         </div>
//                         <ul className="space-y-4 text-[13.5px]">
//                             {[
//                                 { name: "About us", href: "/about-us" },
//                                 { name: "Why choose us", href: "/why-choose-us" },
//                                 { name: "Wholesale", href: "/holesale" },
//                                 { name: "Export", href: "/export" },
//                                 { name: "Contact Us", href: "/contact" },
//                                 { name: "FAQs", href: "/faq" }
//                             ].map((link, idx) => (
//                                 <li key={idx} className="group">
//                                     <Link href={link.href} className="flex items-center text-[#554d45] hover:text-[#b0121a] transition-all duration-300">
//                                         {/* Animated left dash */}
//                                         <span className="w-0 h-[1.5px] bg-[#b0121a] opacity-0 group-hover:w-3 group-hover:opacity-100 group-hover:mr-2.5 transition-all duration-300 rounded-full"></span>
//                                         <span className="transform group-hover:translate-x-0.5 transition-transform duration-300">
//                                             {link.name}
//                                         </span>
//                                     </Link>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>

//                     {/* Column 3: Customer Care (Styled as clean micro-badges) */}
//                     <div className="lg:col-span-2 space-y-5">
//                         <div>
//                             <h3 className="text-xs font-black tracking-widest text-[#2a2521] uppercase">CUSTOMER CARE</h3>
//                             <div className="h-[2px] w-8 bg-gradient-to-r from-[#b0121a] to-[#f97316] mt-2 rounded-full"></div>
//                         </div>
//                         <ul className="space-y-3 text-[13px]">
//                             {[
//                                 { name: "Shipping & Delivery", href: "#" },
//                                 { name: "Returns & Refunds", href: "#" },
//                                 { name: "Privacy Policy", href: "/Privacy-Policy" },
//                                 { name: "Terms & Conditions", href: "/TreamAndConditions" }
//                             ].map((link, idx) => (
//                                 <li key={idx}>
//                                     <Link
//                                         href={link.href}
//                                         className="inline-block px-3 py-2 text-[#554d45] hover:text-[#b0121a] bg-white/40 border border-transparent hover:border-orange-100 hover:bg-white hover:shadow-[0_4px_12px_rgba(176,18,26,0.03)] rounded-xl transition-all duration-300 w-full"
//                                     >
//                                         {link.name}
//                                     </Link>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>

//                     {/* Column 4: Join Our Community (Visual focus subscription card with interactive glows) */}
//                     <div className="lg:col-span-4 bg-white/70 backdrop-blur-md border border-orange-100/60 p-7 rounded-3xl shadow-[0_12px_40px_rgba(176,18,26,0.025)] space-y-5 self-start relative group">
//                         <div className="absolute top-0 right-0 w-24 h-24 bg-[#b0121a]/5 rounded-bl-[100px] pointer-events-none transition-transform duration-700 group-hover:scale-110"></div>
//                         <div className="relative z-10 space-y-4">
//                             <h3 className="text-xs font-black tracking-widest text-[#2a2521] uppercase">JOIN OUR COMMUNITY</h3>
//                             <p className="text-[#554d45] text-[13.5px] leading-relaxed">
//                                 Get updates on new products, recipes & offers.
//                             </p>

//                             {/* Subscription Input Form */}
//                             <form 
//                                 className={`relative flex items-center bg-white rounded-xl border border-orange-100/80 focus-within:border-[#b0121a] focus-within:ring-4 focus-within:ring-[#b0121a]/5 p-1 transition-all duration-300 shadow-[inset_0_1px_3px_rgba(0,0,0,0.01)] ${shouldShake ? "shake-animation border-[#a50808] ring-4 ring-red-100" : ""}`} 
//                                 onSubmit={handleSubscribe}
//                                 noValidate
//                             >
//                                 <input
//                                     type="email"
//                                     placeholder="Enter your email"
//                                     className="w-full pl-3 pr-12 py-3 text-sm text-[#2a2521] placeholder-gray-400 bg-transparent border-0 focus:ring-0 focus:outline-none"
//                                     value={email}
//                                     onChange={(e) => {
//                                         setEmail(e.target.value);
//                                         if (error) setError("");
//                                     }}
//                                     required
//                                 />
//                                 <button
//                                     type="submit"
//                                     className={`absolute right-1 top-1 bottom-1 px-4.5 rounded-lg flex items-center justify-center shadow-md transition-all duration-300 cursor-pointer ${
//                                         isSubscribed
//                                             ? "bg-[#22c55e] text-white hover:scale-100"
//                                             : "bg-gradient-to-r from-[#b0121a] to-[#d31c25] hover:from-[#d31c25] hover:to-[#b0121a] hover:scale-105 active:scale-95 text-white"
//                                     }`}
//                                     aria-label="Subscribe"
//                                     disabled={isSubscribed}
//                                 >
//                                     {isSubscribed ? (
//                                         <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse">
//                                             <polyline points="20 6 9 17 4 12"></polyline>
//                                         </svg>
//                                     ) : (
//                                         <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover/btn:translate-x-0.5 transition-transform">
//                                             <polyline points="9 18 15 12 9 6"></polyline>
//                                         </svg>
//                                     )}
//                                 </button>
//                             </form>

//                             {error && (
//                                 <p className="text-[#a50808] text-xs font-bold mt-2 px-1 animate-fade-in">
//                                     ⚠ {error}
//                                 </p>
//                             )}

//                             {/* Local Shake Styles */}
//                             <style dangerouslySetInnerHTML={{
//                                 __html: `
//                                 @keyframes shake {
//                                     0%, 100% { transform: translateX(0); }
//                                     10%, 30%, 50%, 70%, 90% { transform: translateX(-6px); }
//                                     20%, 40%, 60%, 80% { transform: translateX(6px); }
//                                 }
//                                 .shake-animation {
//                                     animation: shake 0.4s ease-in-out;
//                                 }
//                                 `
//                             }} />
//                         </div>
//                     </div>

//                 </div>
//             </div>

//             {/* Bottom Bar with simple elegant centered copyright and a fading line above */}
//             <div className="border-t border-[#f5ece3] pt-8 my-4 text-xs relative">
//                 <div className="container mx-auto px-6 sm:px-12 lg:px-24 flex flex-col sm:flex-row justify-center items-center gap-4 text-gray-400">
//                     <p className="font-semibold select-none">
//                         &copy; 2026 Drymato. All Rights Reserved. From Farm to Screen, Crafted by Fuel It Online.
//                     </p>
//                     {/* <div className="flex gap-6 font-medium text-[11px]">
//                         <Link href="/Privacy-Policy" className="hover:text-[#b0121a] transition-colors">Privacy Policy</Link>
//                         <span className="text-gray-300">•</span>
//                         <Link href="/TreamAndConditions" className="hover:text-[#b0121a] transition-colors">Terms of Service</Link>
//                     </div> */}
//                 </div>
//             </div>
//         </footer>
//     );
// }




"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    const [email, setEmail] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [error, setError] = useState("");
    const [shouldShake, setShouldShake] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address.");
            setShouldShake(true);
            setTimeout(() => {
                setShouldShake(false);
            }, 400);
            return;
        }

        setError("");
        setIsSubscribed(true);
        setEmail("");

        setTimeout(() => {
            setIsSubscribed(false);
        }, 2000);
    };
    return (
        <footer className="relative bg-gradient-to-b from-surface via-background to-background text-foreground/80 border-t border-sage/15">
            {/* Full-width Contact Banner Bar (No rounded corners, integrated inside footer top border) */}
            <div className="w-full bg-forest py-8 text-white relative z-20 shadow-[0_4px_25px_rgba(36,56,34,0.15)] overflow-hidden group">
                {/* Subtle background shine reflection */}
                <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent to-white/10 skew-x-12 transform origin-top-right transition-transform duration-1000 group-hover:scale-115 pointer-events-none"></div>

                <div className="container mx-auto px-6 sm:px-12 lg:px-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0 items-center">
                        {/* Send Email */}
                        <div className="flex items-center gap-4 md:border-r md:border-white/20 md:px-10 py-2">
                            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-forest shrink-0 shadow-lg hover:rotate-12 hover:scale-105 transition-all duration-300">
                                <FaEnvelope className="w-5.5 h-5.5" />
                            </div>
                            <div>
                                <span className="text-[10px] font-black tracking-widest uppercase text-white/90 block">SEND EMAIL</span>
                                <a href="mailto:hello@drymato.com" className="text-sm md:text-base font-bold tracking-wide block mt-0.5 text-white hover:underline">hello@drymato.com</a>
                            </div>
                        </div>

                        {/* Call Emergency */}
                        <div className="flex items-center gap-4 md:pl-10 py-2">
                            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-forest shrink-0 shadow-lg hover:rotate-12 hover:scale-105 transition-all duration-300">
                                <FaPhoneAlt className="w-5.5 h-5.5" />
                            </div>
                            <div>
                                <span className="text-[10px] font-black tracking-widest uppercase text-white/90 block">CONTACT US</span>
                                <a href="tel:+918000897238" className="text-sm md:text-base font-bold tracking-wide block mt-0.5 text-white hover:underline">+91 8000897238</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Ambient Background Light Elements & Botanical Drawings */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
                <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-forest/5 rounded-full filter blur-[100px]"></div>
                <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-mustard/5 rounded-full filter blur-[100px]"></div>

                {/* Large botanical illustration in the bottom-left corner */}
                <div className="absolute left-[-120px] bottom-[-70px] w-[350px] sm:w-[500px] md:w-[600px] h-auto opacity-[0.15] rotate-[10deg] transform origin-bottom-left">
                    <img
                        src="/tomatotree.png"
                        alt=""
                        className="w-full h-auto object-contain filter saturate-50"
                    />
                </div>
            </div>

            <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10 pt-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16 pb-6">

                    {/* Column 1: Branding & Socials */}
                    <div className="lg:col-span-4 space-y-6 lg:border-r lg:border-sage/15 lg:pr-10">
                        <div className="">
                            <Link href="/" className="relative group block w-max">
                                <Image
                                    src="/drymato-logo.png"
                                    alt="Drymato Logo"
                                    width={165}
                                    height={72}
                                    className="object-contain h-28 w-auto transition-transform duration-500 group-hover:scale-105"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none"></div>
                            </Link>
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-3.5 pt-2">
                            {[
                                { icon: <FaFacebook className="w-4 h-4" />, color: "hover:bg-[#1877f2] hover:border-[#1877f2] hover:shadow-[0_6px_20px_rgba(24,119,242,0.35)]", label: "Facebook", link: "#" },
                                { icon: <FaInstagram className="w-4 h-4" />, color: "hover:bg-black hover:border-black hover:shadow-[0_6px_20px_rgba(0,0,0,0.25)]", label: "Instagram", link: "https://www.instagram.com/drymato_/" },
                                { icon: <FaLinkedin className="w-4 h-4" />, color: "hover:bg-[#0a66c2] hover:border-[#0a66c2] hover:shadow-[0_6px_20px_rgba(10,102,194,0.35)]", label: "LinkedIn", link: "https://www.linkedin.com/company/drymato/?viewAsMember=true" },
                                { icon: <FaYoutube className="w-4 h-4" />, color: "hover:bg-[#ff0000] hover:border-[#ff0000] hover:shadow-[0_6px_20px_rgba(255,0,0,0.35)]", label: "YouTube", link: "#" }
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.link}
                                    className={`w-9.5 h-9.5 bg-surface border border-sage/20 rounded-full flex items-center justify-center text-foreground/60 hover:text-white ${social.color} hover:-translate-y-1.5 hover:scale-110 active:scale-95 transition-all duration-300 shadow-[0_3px_8px_rgba(0,0,0,0.02)]`}
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="lg:col-span-2 space-y-5">
                        <div>
                            <h3 className="text-xs font-black tracking-widest text-foreground uppercase">QUICK LINKS</h3>
                            <div className="h-[2px] w-8 bg-gradient-to-r from-forest to-mustard mt-2 rounded-full"></div>
                        </div>
                        <ul className="space-y-4 text-[13.5px]">
                            {[
                                { name: "About us", href: "/about-us" },
                                { name: "Why choose us", href: "/why-choose-us" },
                                { name: "Wholesale", href: "/holesale" },
                                { name: "Export", href: "/export" },
                                { name: "Contact Us", href: "/contact" },
                                { name: "FAQs", href: "/faq" }
                            ].map((link, idx) => (
                                <li key={idx} className="group">
                                    <Link href={link.href} className="flex items-center text-foreground/70 hover:text-forest transition-all duration-300">
                                        <span className="w-0 h-[1.5px] bg-forest opacity-0 group-hover:w-3 group-hover:opacity-100 group-hover:mr-2.5 transition-all duration-300 rounded-full"></span>
                                        <span className="transform group-hover:translate-x-0.5 transition-transform duration-300">
                                            {link.name}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Customer Care */}
                    <div className="lg:col-span-2 space-y-5">
                        <div>
                            <h3 className="text-xs font-black tracking-widest text-foreground uppercase">CUSTOMER CARE</h3>
                            <div className="h-[2px] w-8 bg-gradient-to-r from-forest to-mustard mt-2 rounded-full"></div>
                        </div>
                        <ul className="space-y-3 text-[13px]">
                            {[
                                { name: "Shipping & Delivery", href: "/Shipping-Policy" },
                                { name: "Returns & Refunds", href: "ReturnAndRefund" },
                                { name: "Privacy Policy", href: "/Privacy-Policy" },
                                { name: "Terms & Conditions", href: "/TermsAndConditions" }
                            ].map((link, idx) => (
                                <li key={idx}>
                                    <Link
                                        href={link.href}
                                        className="inline-block px-3 py-2 text-foreground/70 hover:text-forest bg-surface/40 border border-transparent hover:border-sage/20 hover:bg-surface hover:shadow-[0_4px_12px_rgba(36,56,34,0.03)] rounded-xl transition-all duration-300 w-full"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Join Our Community */}
                    <div className="lg:col-span-4 bg-surface/70 backdrop-blur-md border border-sage/20 p-7 rounded-3xl shadow-[0_12px_40px_rgba(36,56,34,0.025)] space-y-5 self-start relative group">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-forest/5 rounded-bl-[100px] pointer-events-none transition-transform duration-700 group-hover:scale-110"></div>
                        <div className="relative z-10 space-y-4">
                            <h3 className="text-xs font-black tracking-widest text-foreground uppercase">JOIN OUR COMMUNITY</h3>
                            <p className="text-foreground/70 text-[13.5px] leading-relaxed">
                                Get updates on new products, recipes & offers.
                            </p>

                            {/* Subscription Input Form */}
                            <form 
                                className={`relative flex items-center bg-surface rounded-xl border border-sage/25 focus-within:border-forest focus-within:ring-4 focus-within:ring-forest/5 p-1 transition-all duration-300 shadow-[inset_0_1px_3px_rgba(0,0,0,0.01)] ${shouldShake ? "shake-animation border-brick ring-4 ring-red-100" : ""}`} 
                                onSubmit={handleSubscribe}
                                noValidate
                            >
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full pl-3 pr-12 py-3 text-sm text-foreground placeholder-gray-400 bg-transparent border-0 focus:ring-0 focus:outline-none"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        if (error) setError("");
                                    }}
                                    required
                                />
                                <button
                                    type="submit"
                                    className={`absolute right-1 top-1 bottom-1 px-4.5 rounded-lg flex items-center justify-center shadow-md transition-all duration-300 cursor-pointer ${
                                        isSubscribed
                                            ? "bg-[#22c55e] text-white hover:scale-100"
                                            : "bg-gradient-to-r from-forest to-forest-light hover:from-forest-light hover:to-forest hover:scale-105 active:scale-95 text-white"
                                    }`}
                                    aria-label="Subscribe"
                                    disabled={isSubscribed}
                                >
                                    {isSubscribed ? (
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    ) : (
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover/btn:translate-x-0.5 transition-transform">
                                            <polyline points="9 18 15 12 9 6"></polyline>
                                        </svg>
                                    )}
                                </button>
                            </form>

                            {error && (
                                <p className="text-brick text-xs font-bold mt-2 px-1 animate-fade-in">
                                    ⚠ {error}
                                </p>
                            )}

                            {/* Local Shake Styles */}
                            <style dangerouslySetInnerHTML={{
                                __html: `
                                @keyframes shake {
                                    0%, 100% { transform: translateX(0); }
                                    10%, 30%, 50%, 70%, 90% { transform: translateX(-6px); }
                                    20%, 40%, 60%, 80% { transform: translateX(6px); }
                                }
                                .shake-animation {
                                    animation: shake 0.4s ease-in-out;
                                }
                                `
                            }} />
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-sage/15 pt-8 my-4 text-xs relative">
                <div className="container mx-auto px-6 sm:px-12 lg:px-24 flex flex-col sm:flex-row justify-center items-center gap-4 text-gray-400">
                    <p className="font-semibold select-none">
                        &copy; 2026 Drymato. All Rights Reserved. From Farm to Screen, Crafted by Fuel It Online.
                    </p>
                </div>
            </div>
        </footer>
    );
}