import ReturnsClient from "./ReturnsClient";

export const metadata = {
    title: "Returns & Refunds | Drymato Premium Gourmet Jars",
    description: "Read Drymato's returns and refunds information, including how to raise a request for your order.",
    openGraph: {
        title: "Returns & Refunds | Drymato Premium Gourmet Jars",
        description: "Read Drymato's returns and refunds information, including how to raise a request for your order.",
        images: ["/drymato-logo.png"],
    }
};

export default function ReturnsRefundsPage() {
    return (
        <main className="flex-1 bg-background min-h-screen">
            {/* Hero Section */}
            <section className="animate-slide-down relative w-full pt-32 pb-20 flex items-center justify-center z-10 bg-gradient-to-b from-surface via-background to-background">
                {/* Ambient Soft Glows */}
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-forest/5 rounded-full filter blur-3xl pointer-events-none" />
                <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-brick/5 rounded-full filter blur-3xl pointer-events-none" />

                <div className="max-w-4xl mx-auto px-6 text-center animate-fade-in-up relative z-10">
                    <span className="text-brick font-black tracking-[0.2em] text-xs uppercase bg-brick/10 border border-brick/20 px-4.5 py-2 rounded-full inline-block mb-5 shadow-sm">
                        Returns & Refunds
                    </span>

                    <h1 id="returns-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5 font-serif text-forest leading-tight">
                        Returns & Refunds
                    </h1>
                    <p className="text-foreground/80 text-sm sm:text-base font-medium leading-relaxed max-w-2xl mx-auto">
                        Understand how returns, replacements, and refunds work for your Drymato orders.
                    </p>
                </div>
            </section>

            {/* Transition Divider & Client Content */}
            <div className="relative z-20 bg-background">
                <div className="absolute left-0 right-0 -top-10 h-10 overflow-hidden pointer-events-none z-30">
                    <svg viewBox="0 0 1440 40" className="w-full h-full block fill-background" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                        <path
                            d="M0,20 Q45,38 90,20 Q135,2 180,20 Q225,38 270,20 Q315,2 360,20 Q405,38 450,20 Q495,2 540,20 Q585,38 630,20 Q675,2 720,20 Q765,38 810,20 Q855,2 900,20 Q945,38 990,20 Q1035,2 1080,20 Q1125,38 1170,20 Q1215,2 1260,20 Q1305,38 1350,20 Q1395,2 1440,20 L1440,40 L0,40 Z"
                        />
                    </svg>
                </div>
                <ReturnsClient />
            </div>
        </main>
    );
}