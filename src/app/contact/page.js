// import ContactClient from "./contactClient";
// import Image from "next/image";
// import { Toaster } from "react-hot-toast";

// export const metadata = {
//     title: "Contact Drymato | Premium Gourmet Sun-Dried Tomato Support",
//     description: "Get in touch with Drymato. Contact us directly via WhatsApp, email, or our contact form for wholesale queries, order shipping status, or gift hampers.",
//     openGraph: {
//         title: "Contact Drymato | Premium Gourmet Sun-Dried Tomato Support",
//         description: "Get in touch with Drymato. Contact us for wholesale queries, order shipping status, or gift hampers.",
//         images: ["/drymato-logo.png"],
//     }
// };

// export default function Contact() {
//     return (
//         <main className="flex-1 bg-[#fff8f0] min-h-screen">
//             <Toaster position="top-right" reverseOrder={false} />
//             {/* Fixed Parallax Background Image (Sized strictly to the hero height, stays fixed on viewport) */}
//             <div className="fixed top-0 left-0 w-full h-[100vh] z-0 pointer-events-none">
//                 <Image
//                     src="/tomatoField2.jpeg"
//                     alt="Drymato Tomato Field Background"
//                     fill
//                     priority
//                     className="object-cover object-[center_25%]"
//                 />
//                 {/* Dark overlay for rich contrast */}
//                 <div className="absolute inset-0 bg-black/65" />
//             </div>



//             {/* Main Interactive Contact Client Components (solid background covers the fixed image on scroll) */}
//             <div className="relative z-20 bg-[#fff8f0]">
//                 {/* Wavy transition divider at the top of the content */}
//                 {/* <div className="absolute left-0 right-0 -top-10 h-10 overflow-hidden pointer-events-none z-30">
//                     <svg viewBox="0 0 1440 40" className="w-full h-full block" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
//                         <path
//                             d="M0,20 Q45,38 90,20 Q135,2 180,20 Q225,38 270,20 Q315,2 360,20 Q405,38 450,20 Q495,2 540,20 Q585,38 630,20 Q675,2 720,20 Q765,38 810,20 Q855,2 900,20 Q945,38 990,20 Q1035,2 1080,20 Q1125,38 1170,20 Q1215,2 1260,20 Q1305,38 1350,20 Q1395,2 1440,20 L1440,40 L0,40 Z"
//                             fill="#fff8f0"
//                         />
//                     </svg>
//                 </div> */}
//                 <ContactClient />
//             </div>
//         </main>
//     );
// }




import ContactClient from "./contactClient";

export const metadata = {
    title: "Contact Drymato | Premium Gourmet Sun-Dried Tomato Support",
    description: "Get in touch with Drymato. Contact us directly via WhatsApp, email, or our contact form for wholesale queries, order shipping status, or gift hampers.",
    openGraph: {
        title: "Contact Drymato | Premium Gourmet Sun-Dried Tomato Support",
        description: "Get in touch with Drymato. Contact us for wholesale queries, order shipping status, or gift hampers.",
        images: ["/drymato-logo.png"],
    }
};

export default function Contact() {
    return (
        <main className="flex-1 bg-[#fff8f0] min-h-screen">
            <ContactClient />
        </main>
    );
}