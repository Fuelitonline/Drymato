// import ProductClient from "./ProductClient";
// import Image from "next/image";
// import Link from "next/link";

// export const metadata = {
//     title: "Premium Sun-Dried Tomatoes & Marinated Delicacies | Drymato Products",
//     description: "Browse Drymato's premium products. Handcrafted, 100% natural sun-dried tomatoes marinated in cold-pressed extra virgin olive oil with gourmet Mediterranean spices.",
//     openGraph: {
//         title: "Premium Sun-Dried Tomatoes & Marinated Delicacies | Drymato Products",
//         description: "Browse Drymato's premium products. Handcrafted, 100% natural sun-dried tomatoes marinated in cold-pressed extra virgin olive oil with gourmet Mediterranean spices.",
//         images: ["/drymato-logo.png"],
//     }
// };

// export default function Product() {
//     return (
//         <main className="flex-1 bg-[#fff8f0] min-h-screen relative overflow-hidden">
//             {/* Fixed Parallax Background Image */}
//             <div className="fixed top-15 left-0 w-full h-[90vh] z-0 pointer-events-none">
//                 <Image
//                     src="/allProducts.png"
//                     alt="Drymato Tomato Field Background"
//                     fill
//                     priority
//                     className="object-cover object-[center_35%]"
//                 />
//                 {/* Dark overlay for rich contrast */}
//                 <div className="absolute inset-0 bg-black/65" />
//             </div>

//             {/* Sub-hero Header banner */}
//             <section className="animate-slide-down relative text-white w-full h-[80vh] min-h-[480px] flex items-center justify-center z-10 -mt-10 pt-[112px]">
//                 <div className="max-w-4xl mx-auto px-6 text-center animate-fade-in-up">
//                     {/* Breadcrumbs */}
//                     <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-80 mb-4 justify-center">
//                         <Link href="/" className="hover:text-red-200 transition-colors">Home</Link>
//                         <span>/</span>
//                         <span className="text-white">Products</span>
//                     </div>

//                     <h1 id="products-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 font-poppins text-center leading-tight text-white">
//                         Our Products
//                     </h1>
//                     <p className="text-center text-red-100 text-sm sm:text-base font-semibold leading-relaxed max-w-2xl mx-auto">
//                         Taste the authenticity of 100% natural, sun-ripened tomatoes cured under the Mediterranean sun. Explore our range of classic, oil-marinated, and seasoning choices.
//                     </p>
//                 </div>
//             </section>

//             {/* Main Content Area (covers the fixed image on scroll) */}
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
//                 {/* Main product catalog */}
//                 <ProductClient />
//             </div>
//         </main>
//     );
// }



import ProductClient from "./ProductClient";
import { Suspense } from "react";

export const metadata = {
    title: "Premium Sun-Dried Tomatoes & Marinated Delicacies | Drymato Products",
    description: "Browse Drymato's premium products. Handcrafted, 100% natural sun-dried tomatoes marinated in cold-pressed extra virgin olive oil with gourmet Mediterranean spices.",
    openGraph: {
        title: "Premium Sun-Dried Tomatoes & Marinated Delicacies | Drymato Products",
        description: "Browse Drymato's premium products. Handcrafted, 100% natural sun-dried tomatoes marinated in cold-pressed extra virgin olive oil with gourmet Mediterranean spices.",
        images: ["/drymato-logo.png"],
    }
};

export default function Product() {
    return (
        <Suspense fallback={null}>
            <ProductClient />
        </Suspense>
    );
}