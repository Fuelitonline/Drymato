// import Image from "next/image";
// import Link from "next/link";
// import AboutUsClient from "./AboutUsClient";

// export const metadata = {
//     title: "About Us | Drymato - Pure Sun-Cured Culinary Excellence",
//     description: "Learn about the heritage, values, and craft of Drymato. From sustainable family farms to your kitchen, we deliver 100% natural, preservative-free sun-cured tomatoes.",
//     openGraph: {
//         title: "About Us | Drymato - Pure Sun-Cured Culinary Excellence",
//         description: "Learn about the heritage, values, and craft of Drymato. From sustainable family farms to your kitchen, we deliver 100% natural, preservative-free sun-cured tomatoes.",
//         images: ["/drymato-logo.png"],
//     }
// };

// export default function AboutUsPage() {
//     return (
//         <main className="flex-1 bg-[#fff8f0] min-h-screen relative overflow-hidden">
//             {/* Sub-hero Header banner with video on the right taking 70vw */}
//             <section className="animate-slide-down relative text-gray-900 bg-[#fffdfa] -mt-10 pt-[140px] pb-20 overflow-hidden w-full min-h-[500px] flex items-center">

//                 <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 pl-6 sm:pl-12 lg:pl-24 pr-0">

//                     {/* Left Side — About Us Text */}
//                     <div className="w-full lg:max-w-[28vw] flex-shrink-0 flex flex-col items-start pr-6 lg:pr-0">
//                         {/* Breadcrumbs */}
//                         <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 justify-start">
//                             <Link href="/" className="hover:text-[#a50808] transition-colors">Home</Link>
//                             <span>/</span>
//                             <span className="text-gray-800">About Us</span>
//                         </div>

//                         {/* Heading */}
//                         <h1 id="about-heading" className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-6 font-poppins text-left leading-tight text-[#2a2521]">
//                             About Us
//                         </h1>

//                         {/* Description */}
//                         <p className="text-left text-gray-500 text-sm sm:text-base font-semibold leading-relaxed">
//                             Discover the story of Drymato. Learn about our passion for 100% natural, sun-ripened tomatoes, crafted traditionally for maximum flavor concentration and zero kitchen waste.
//                         </p>
//                     </div>

//                     {/* Right Side — Circular Curved Video Container (70vw width, left curve) */}
//                     <div className="group relative w-full lg:w-[70vw] h-[350px] sm:h-[450px] md:h-[520px] lg:h-[600px] rounded-l-250px] sm:rounded-l-[300px] overflow-hidden border-[6px] border-white border-r-0 shadow-[0_20px_50px_rgba(0,0,0,0.08)] bg-gray-100 flex-shrink-0">
//                         <video
//                             src="/website-video-ref-drymato.mp4"
//                             autoPlay
//                             loop
//                             muted
//                             playsInline
//                             className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
//                         />
//                     </div>

//                 </div>

//                 {/* Wavy bottom divider matching the page background */}
//                 <div className="absolute -bottom-[2px] left-0 w-full overflow-hidden leading-[0] z-20">
//                     <svg viewBox="0 0 1440 40" className="relative block w-full h-[30px]" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
//                         <path
//                             d="M0,20 Q45,2 90,20 Q135,38 180,20 Q225,2 270,20 Q315,38 360,20 Q405,2 450,20 Q495,38 540,20 Q585,2 630,20 Q675,38 720,20 Q765,2 810,20 Q855,38 900,20 Q945,2 990,20 Q1035,38 1080,20 Q1125,2 1170,20 Q1215,38 1260,20 Q1305,2 1350,20 Q1395,38 1440,20 L1440,40 L0,40 Z"
//                             fill="#fff8f0"
//                         />
//                     </svg>
//                 </div>
//             </section>

//             {/* About Us Client Content (narrative and cards grid) */}
//             <AboutUsClient />
//         </main>
//     );
// }





import Link from "next/link";
import AboutUsClient from "./AboutUsClient";
import AboutHeroSection from "./AboutHero";
import { FaLeaf } from "react-icons/fa";

export const metadata = {
    title: "About Us | Drymato - Pure Sun-Cured Culinary Excellence",
    description:
        "Learn about the heritage, values, and craft of Drymato. From sustainable family farms to your kitchen, we deliver 100% natural, preservative-free sun-cured tomatoes.",
    openGraph: {
        title: "About Us | Drymato - Pure Sun-Cured Culinary Excellence",
        description:
            "Learn about the heritage, values, and craft of Drymato. From sustainable family farms to your kitchen, we deliver 100% natural, preservative-free sun-cured tomatoes.",
        images: ["/drymato-logo.png"],
    },
};

export default function AboutUsPage() {
    return (
        <main className="flex-1 bg-surface min-h-screen relative overflow-hidden">

            {/* Full-bleed hero banner */}
            <AboutHeroSection />

            {/* Sub-hero: How Drymato Started */}
            <section className="animate-slide-down relative text-foreground bg-surface py-12 overflow-hidden w-full flex items-center">

                <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12 pl-6 sm:pl-12 lg:pl-24 pr-0">

                    {/* Left Side — Text */}
                    <div className="w-full lg:w-[60%] lg:max-w-[580px] flex-shrink-0 flex flex-col items-start pr-6 lg:pr-0">

                        {/* Eyebrow */}
                        <div className="flex items-center gap-2 text-forest mb-4">
                            <FaLeaf className="w-3.5 h-3.5" />

                            <span className="text-xs sm:text-sm font-extrabold tracking-[0.2em] uppercase">
                                Our Story
                            </span>
                        </div>

                        {/* Heading */}
                        <h2
                            id="about-heading"
                            className="font-serif text-4xl sm:text-5xl font-bold tracking-tight mb-5 text-left leading-[1.1] text-forest"
                        >
                            How <span className="text-brick">Drymato</span> Started
                        </h2>

                        {/* Content */}
                        <div className="space-y-3 text-left text-foreground/70 font-medium text-sm leading-[1.75]">
                            <p>
                                Drymato was built around a simple idea:
                            </p>

                            <p className="font-serif text-2xl text-forest font-semibold leading-snug">
                                Good food ingredients should be easier to source, store, use and scale.
                            </p>

                            <p>
                                Fresh fruits, vegetables and herbs are valuable ingredients, but businesses often need ingredients that are convenient to handle, consistent in format and suitable for commercial applications.
                            </p>

                            <p className="text-forest font-semibold">
                                That is where Drymato comes in.
                            </p>

                            <p>
                                We work across sourcing, processing, dehydration, quality selection and packaging to connect fresh produce with the needs of modern food businesses.
                            </p>

                            <p>
                                From a professional kitchen to a food manufacturing facility, from a wholesale requirement to an international sourcing enquiry — our focus remains the same:
                            </p>

                            <p className="font-serif italic text-2xl text-brick font-semibold leading-snug">
                                the right ingredient, processed for the right application.
                            </p>
                        </div>
                    </div>

                    {/* Right Side — Circular Curved Video Container */}
                    <div className="group relative w-full lg:flex-1 lg:min-w-0 h-[300px] sm:h-[380px] lg:h-[560px] rounded-l-[160px] sm:rounded-l-[240px] lg:rounded-l-[300px] overflow-hidden border-[6px] border-surface border-r-0 shadow-[0_20px_50px_rgba(36,56,34,0.10)] bg-sage/10">

                        <video
                            src="/website-video-ref-drymato.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
                        />

                    </div>

                </div>
            </section>

            {/* About Us Client Content */}
            <AboutUsClient />

        </main>
    );
}