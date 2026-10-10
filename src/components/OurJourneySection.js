import Image from "next/image";
import { FaLeaf } from "react-icons/fa";

const STEPS = [
    {
        num: "01",
        title: "Source",
        desc: "Fresh fruits, vegetables and herbs",
        image: "/hero-section/guava-farm.png" // placeholder — swap for a real sourcing/farm photo
    },
    {
        num: "02",
        title: "Select",
        desc: "Raw material selection according to requirements",
        image: "/hero-section/fresh-veggies.png" // placeholder
    },
    {
        num: "03",
        title: "Prepare",
        desc: "Cleaning, preparation and cutting",
        image: "/hero-section/processing.png" // placeholder
    },
    {
        num: "04",
        title: "Dehydrate",
        desc: "Controlled dehydration",
        image: "/hero-section/dehydrated-food.png" // placeholder
    },
    {
        num: "05",
        title: "Check",
        desc: "Product and specification checks",
        image: "/hero-section/chef.png" // placeholder — swap for a QC/inspection photo
    },
    {
        num: "06",
        title: "Pack",
        desc: "Bulk / vacuum / private-label formats",
        image: "/jaar/jaarslightroatateview.png" // placeholder — swap for a packaging/cartons photo
    },
    {
        num: "07",
        title: "Supply",
        desc: "HORECA / Manufacturing / Wholesale / Export",
        image: "/hero-section/export.png" // placeholder — swap for a logistics/shipping photo
    }
];

// Thin connector — a short line with an open chevron head, muted forest tone
function StepArrow() {
    return (
        <svg
            className="w-6 sm:w-8 h-4 text-forest/35 shrink-0"
            viewBox="0 0 32 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <line x1="0" y1="8" x2="24" y2="8" stroke="currentColor" strokeWidth="1.5" />
            <path d="M20 3.5L25.5 8L20 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export default function OurJourneySection() {
    return (
        <section className="relative w-full bg-background py-20 md:py-24 overflow-hidden">

            {/* Decorative leaves — fixed, not floating */}
            <div className="hidden sm:block absolute -left-12 -top-24 w-40 h-40 md:w-98 md:h-98 opacity-80 pointer-events-none select-none rotate-[-8deg]">
                <Image src="/lefttree.png" alt="" fill className="object-contain" />
            </div>
            <div className="hidden sm:block absolute -right-5 -bottom-10 w-40 h-40 md:w-72 md:h-72 opacity-70 pointer-events-none select-none">
                <Image src="/righttree.png" alt="" fill className="object-contain" />
            </div>

            <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

                {/* Eyebrow — flanked by hairlines, centered */}
                <div className="flex items-center justify-center gap-4 mb-5">
                    <span className="h-px w-8 sm:w-12 bg-forest/30" />
                    <div className="flex items-center gap-2 text-forest">
                        <FaLeaf className="w-3.5 h-3.5" />
                        <span className="text-xs sm:text-sm font-extrabold tracking-[0.2em] uppercase">
                            Our Journey
                        </span>
                    </div>
                    <span className="h-px w-8 sm:w-12 bg-forest/30" />
                </div>

                {/* Heading — two color/style lines */}
                <h2 className="text-center font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.2] mb-5">
                    <span className="block text-forest">From Fresh Produce to</span>
                    <span className="block italic text-brick">Dehydrated Ingredients</span>
                </h2>

                {/* Description */}
                <p className="text-center text-foreground/70 font-medium text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-14 md:mb-16">
                    We follow a careful and controlled process to preserve the natural goodness of fruits, vegetables and herbs — from farm to your business.
                </p>

                {/* Steps row — scrolls on mobile, all 7 fit in one row from md up */}
                <div className="flex items-start gap-3 md:gap-0 overflow-x-auto md:overflow-visible no-scrollbar pb-4 px-1 md:justify-between">
                    {STEPS.map((step, idx) => (
                        <div key={step.num} className="flex items-start shrink-0 md:shrink md:flex-1 md:min-w-0">
                            {/* Step card — fixed width, centered in its column so it never stretches */}
                            <div className="w-[130px] sm:w-[150px] lg:w-[170px] mx-auto flex flex-col items-center text-center px-1">
                                {/* Circular image */}
                                <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full border-4 border-surface shadow-[0_10px_25px_rgba(36,56,34,0.12)] overflow-hidden z-10 shrink-0">
                                    <Image
                                        src={step.image}
                                        alt={step.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Capsule content card — overlaps the circle slightly, fixed height so every card bottoms out evenly */}
                                <div className="w-full bg-sage/15 rounded-[28px] -mt-8 pt-11 pb-6 px-2 sm:px-3 flex flex-col items-center h-[188px] sm:h-[216px]">
                                    {/* Number badge */}
                                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-forest text-white flex items-center justify-center text-[11px] sm:text-xs font-extrabold mb-3 shadow-sm shrink-0">
                                        {step.num}
                                    </div>
                                    <h3 className="font-serif text-lg sm:text-xl font-bold text-forest mb-1.5 shrink-0">
                                        {step.title}
                                    </h3>
                                    <p className="text-foreground/70 text-[11px] sm:text-xs font-medium leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>

                            {/* Arrow connector — hidden after the last step, vertically centered on the circle */}
                            {idx < STEPS.length - 1 && (
                                <div className="flex items-center h-24 sm:h-28 lg:h-32 shrink-0 mx-1 sm:mx-2">
                                    <StepArrow />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </div>

        </section>
    );
}