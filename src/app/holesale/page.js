import WholesaleClient from "./WholesaleClient";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Drymato Wholesale | Bulk Sun-Dried Tomatoes & Dehydrated Produce B2B Supply",
    description: "Scale your food business with Drymato direct factory wholesale. Premium bulk sun-dried tomatoes, dehydrated garlic, onion, okra, and tomato powders for HoReCa, food manufacturers, and stockists.",
    openGraph: {
        title: "Drymato Wholesale | Bulk Sun-Dried Tomatoes & Dehydrated Produce B2B Supply",
        description: "Scale your food business with Drymato direct factory wholesale. Premium bulk sun-dried tomatoes, dehydrated garlic, onion, okra, and tomato powders for HoReCa, food manufacturers, and stockists.",
        images: ["/wholesale_hero_banner.png"],
    }
};

export default function HolesalePage() {
    return (
        <main className="flex-1 bg-[#fff8f0] min-h-screen relative overflow-hidden font-poppins">
            {/* Fixed Parallax Background Image */}
            <div className="fixed top-15 left-0 w-full aspect-[1600/600] z-0 pointer-events-none">
                <Image
                    src="/bulkbanner.png"
                    alt="Drymato Bulk Wholesale Sun-Dried Tomatoes Background"
                    fill
                    priority
                    className="object-cover object-center"
                />
            </div>

            {/* Sub-hero Header banner */}
            <section className="animate-slide-down relative text-white w-full min-h-[600px] flex items-center justify-center z-10 -mt-10 pt-[112px]">
                <div className="max-w-7xl mx-auto px-6 w-full flex justify-center items-center animate-left-to-right delay-500 relative">
                    <div className="max-w-5xl text-center">

                        {/* Main Heading */}
                        <h1
                            id="wholesale-heading"
                            className="font-serif text-4xl sm:text-5xl lg:text-[4rem] leading-[1.08] tracking-tight mb-6">
                            <span className="font-normal text-forest">
                                Bulk Supply.
                            </span>{" "}

                            <span className="italic font-light text-[#a50808]">
                                Global Sourcing.
                            </span>{" "}

                            <span className="font-normal text-forest">
                                One Reliable Partner.
                            </span>
                        </h1>

                        {/* Red Divider */}
                        <div className="w-16 h-[2px] bg-[#a50808] mx-auto mb-6" />

                        {/* Description */}
                        <p className="text-forest text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed font-medium font-poppins">
                            Drymato supplies dehydrated fruits, vegetables, herbs and powders
                            for wholesalers, distributors, food manufacturers and international buyers.
                        </p>

                        {/* Supply Features */}
                        <p className="mt-6 text-sm sm:text-base font-semibold font-poppins tracking-wide text-white">
                            <span className="text-[#a50808]">Bulk Supply</span>
                            <span className="mx-2 text-white/60">•</span>

                            <span className="text-forest">Private Label</span>
                            <span className="mx-2 text-white/60">•</span>

                            <span className="text-[#a50808]">Custom Packaging</span>
                            <span className="mx-2 text-white/60">•</span>

                            <span className="text-forest">Export</span>
                        </p>

                        {/* CTA */}
                        <div className="flex justify-center mt-8">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-sm bg-forest text-white font-poppins font-bold text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 hover:-translate-y-1"
                            >
                                Request a Quote
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
            {/* Main Content Wrapper */}
            <div className="relative z-20 bg-[#fffaf5]">
                <WholesaleClient />
            </div>
        </main>
    );
}