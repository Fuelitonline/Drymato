import PrivacyClient from "./PrivacyClient";

export const metadata = {
    title: "Privacy Policy | Drymato Premium Gourmet Jars",
    description: "Learn about how Drymato collects, protects, and handles your personal data. We are dedicated to ensuring your trust and details remain completely secure.",
    openGraph: {
        title: "Privacy Policy | Drymato Premium Gourmet Jars",
        description: "Learn about how Drymato collects, protects, and handles your personal data.",
        images: ["/drymato-logo.png"],
    }
};

export default function PrivacyPolicy() {
    return (
        <>
            <main className="flex-1 bg-[#f6f1e6] min-h-screen text-[#211f1a]">
                {/* Hero Text Content */}
                <section className="animate-slide-down relative w-full pt-32 pb-20 flex items-center justify-center z-10 bg-gradient-to-b from-[#eee8d8] via-[#f3eedf] to-[#f6f1e6]">
                    {/* Soft background glow circles */}
                    <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#243822]/5 rounded-full filter blur-3xl pointer-events-none" />
                    <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#8a2c21]/5 rounded-full filter blur-3xl pointer-events-none" />

                    <div className="max-w-4xl mx-auto px-6 text-center animate-fade-in-up relative z-10">
                        {/* Legal tag */}
                        <span className="text-[#8a2c21] font-black tracking-[0.2em] text-xs uppercase bg-[#8a2c21]/10 border border-[#8a2c21]/20 px-4.5 py-2 rounded-full inline-block mb-5 shadow-sm">
                            Legal & Transparency
                        </span>

                        <h1 id="privacy-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5 font-serif text-[#211f1a] leading-tight">
                            Privacy Policy
                        </h1>
                        <p className="text-[#3d3830] text-sm sm:text-base font-medium leading-relaxed max-w-2xl mx-auto">
                            Your trust is the foundation of our craft. Learn how we handle your personal information with care, security, and transparency.
                        </p>
                    </div>
                </section>

                {/* Main Content Area */}
                <div className="relative z-20 bg-[#f6f1e6]">
                    {/* Wavy transition divider */}
                    <div className="absolute left-0 right-0 -top-10 h-10 overflow-hidden pointer-events-none z-30">
                        <svg viewBox="0 0 1440 40" className="w-full h-full block" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path
                                d="M0,20 Q45,38 90,20 Q135,2 180,20 Q225,38 270,20 Q315,2 360,20 Q405,38 450,20 Q495,2 540,20 Q585,38 630,20 Q675,2 720,20 Q765,38 810,20 Q855,2 1440,20 L1440,40 L0,40 Z"
                                fill="#f6f1e6"
                            />
                        </svg>
                    </div>
                    <PrivacyClient />
                </div>
            </main>
        </>
    );
}