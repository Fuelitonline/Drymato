import Image from "next/image";
import Link from "next/link";
import {
    FaLeaf,
    FaCarrot,
    FaLemon,
    FaAppleAlt,
    FaPepperHot,
    FaSeedling,
    FaArrowRight,
    FaHome,
} from "react-icons/fa";

export const metadata = {
    title: "Page not found | Drymato",
    description: "The page you are looking for could not be found.",
};

// Slow falling leaves (left %, size, delay, duration)
const LEAVES = [
    { left: "6%", size: 22, delay: "0s", dur: "11s" },
    { left: "20%", size: 16, delay: "3s", dur: "13s" },
    { left: "38%", size: 20, delay: "6s", dur: "12s" },
    { left: "58%", size: 14, delay: "1.5s", dur: "14s" },
    { left: "76%", size: 24, delay: "4.5s", dur: "11.5s" },
    { left: "92%", size: 18, delay: "8s", dur: "13s" },
];

// Floating food icons around the page
const FLOATERS = [
    { Icon: FaCarrot, pos: "top-[12%] left-[5%]", color: "#c8651b", size: "w-9 h-9 sm:w-12 sm:h-12", delay: "0s" },
    { Icon: FaLemon, pos: "top-[20%] right-[6%]", color: "#c08829", size: "w-9 h-9 sm:w-12 sm:h-12", delay: "1.2s" },
    { Icon: FaAppleAlt, pos: "bottom-[16%] left-[7%]", color: "#a50808", size: "w-8 h-8 sm:w-11 sm:h-11", delay: "2s" },
    { Icon: FaPepperHot, pos: "bottom-[22%] right-[8%]", color: "#a50808", size: "w-8 h-8 sm:w-10 sm:h-10", delay: "0.6s" },
    { Icon: FaSeedling, pos: "top-[46%] left-[2%] hidden md:block", color: "#527263", size: "w-9 h-9", delay: "1.8s" },
];

const QUICK_LINKS = [
    { label: "Products", href: "/product" },
    { label: "Wholesale", href: "/holesale" },
    { label: "About us", href: "/about-us" },
    { label: "Contact", href: "/contact" },
];

export default function NotFound() {
    return (
        <main className="nf-root relative min-h-screen w-full overflow-hidden bg-[#fff8f0] font-poppins flex items-center justify-center px-5 py-20">
            <style>{`
                @keyframes nfRollIn {
                    0%   { transform: translateX(-60vw) rotate(-720deg); opacity: 0; }
                    70%  { transform: translateX(1.5%) rotate(20deg); opacity: 1; }
                    100% { transform: translateX(0) rotate(0deg); opacity: 1; }
                }
                @keyframes nfWobble {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50%      { transform: translateY(-10px) rotate(4deg); }
                }
                @keyframes nfShadow {
                    0%, 100% { transform: scaleX(1); opacity: .22; }
                    50%      { transform: scaleX(.8); opacity: .13; }
                }
                @keyframes nfDrop {
                    0%   { transform: translateY(-14vh) rotate(0deg); opacity: 0; }
                    10%  { opacity: .55; }
                    100% { transform: translateY(112vh) rotate(300deg); opacity: 0; }
                }
                @keyframes nfFloat {
                    0%, 100% { transform: translateY(0) rotate(-6deg); }
                    50%      { transform: translateY(-14px) rotate(8deg); }
                }
                @keyframes nfRise {
                    0%   { transform: translateY(18px); opacity: 0; }
                    100% { transform: translateY(0); opacity: 1; }
                }
                .nf-roll   { animation: nfRollIn 1.5s cubic-bezier(.22,.8,.3,1) both; }
                .nf-wobble { animation: nfWobble 3.6s ease-in-out 1.5s infinite; }
                .nf-shadow { animation: nfShadow 3.6s ease-in-out 1.5s infinite; }
                .nf-leaf   { animation: nfDrop linear infinite; }
                .nf-float  { animation: nfFloat 5s ease-in-out infinite; }
                .nf-rise   { animation: nfRise .8s cubic-bezier(.16,1,.3,1) both; }
                @media (prefers-reduced-motion: reduce) {
                    .nf-roll, .nf-wobble, .nf-shadow, .nf-leaf, .nf-float, .nf-rise {
                        animation: none !important;
                        opacity: 1;
                    }
                    .nf-leaf { display: none; }
                }
            `}</style>

            {/* Soft background blobs */}
            <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-[#e5eadf]/70 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-28 -right-20 w-96 h-96 rounded-full bg-[#f3e8df]/80 blur-3xl pointer-events-none" />

            {/* Tree decorations from the site */}
            <div className="absolute -top-10 -right-10 w-40 sm:w-60 opacity-[0.35] pointer-events-none select-none rotate-[175deg]">
                <Image src="/lefttree.png" alt="" width={300} height={300} className="w-full h-auto object-contain" />
            </div>
            <div className="absolute -bottom-12 -left-10 w-40 sm:w-60 opacity-[0.25] pointer-events-none select-none rotate-[20deg]">
                <Image src="/lefttree.png" alt="" width={300} height={300} className="w-full h-auto object-contain" />
            </div>

            {/* Falling leaves */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                {LEAVES.map((l, i) => (
                    <FaLeaf
                        key={i}
                        className="nf-leaf absolute top-0 text-[#527263]"
                        style={{
                            left: l.left,
                            width: l.size,
                            height: l.size,
                            animationDelay: l.delay,
                            animationDuration: l.dur,
                        }}
                    />
                ))}
            </div>

            {/* Floating food icons */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                {FLOATERS.map(({ Icon, pos, color, size, delay }, i) => (
                    <Icon
                        key={i}
                        className={`nf-float absolute ${pos} ${size} opacity-60`}
                        style={{ color, animationDelay: delay }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-2xl text-center flex flex-col items-center">

                {/* 4 🍅 4 */}
                <div
                    className="flex items-center justify-center font-serif font-bold leading-none text-[#243822] select-none"
                    style={{ fontSize: "clamp(6rem, 24vw, 14rem)" }}
                    role="img"
                    aria-label="Error 404"
                >
                    <span className="nf-rise" style={{ animationDelay: ".1s" }}>4</span>

                    <span className="relative mx-[0.04em] inline-flex flex-col items-center">
                        <span className="nf-roll block" style={{ width: "0.82em", height: "0.82em" }}>
                            <span className="nf-wobble block w-full h-full">
                                <Image
                                    src="/tomatoimg.png"
                                    alt=""
                                    width={300}
                                    height={300}
                                    priority
                                    className="w-full h-full object-contain drop-shadow-[0_14px_18px_rgba(165,8,8,0.25)]"
                                />
                            </span>
                        </span>
                        <span
                            className="nf-shadow block h-[0.05em] w-[0.6em] rounded-[50%] bg-[#243822] blur-[3px]"
                            style={{ marginTop: "0.06em" }}
                        />
                    </span>

                    <span className="nf-rise" style={{ animationDelay: ".2s" }}>4</span>
                </div>

                <h1
                    className="nf-rise mt-6 font-serif text-2xl sm:text-4xl font-bold text-[#243822] leading-tight"
                    style={{ animationDelay: "1.3s" }}
                >
                    This page got dehydrated and vanished.
                </h1>

                <p
                    className="nf-rise mt-4 max-w-md text-sm sm:text-base text-[#4f5b4b] leading-7"
                    style={{ animationDelay: "1.45s" }}
                >
                    The link may be broken or the page may have moved. Head back home or pick something from the shelf below.
                </p>

                {/* Buttons */}
                <div
                    className="nf-rise mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full sm:w-auto"
                    style={{ animationDelay: "1.6s" }}
                >
                    <Link
                        href="/"
                        className="group/btn relative overflow-hidden inline-flex items-center justify-center gap-2.5 bg-[#243822] border-2 border-[#243822] text-white px-8 py-3.5 rounded-xl text-xs font-extrabold tracking-widest uppercase shadow-[0_6px_20px_rgba(36,56,34,0.15)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#243822]/30"
                    >
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[125%] aspect-square rounded-t-[50%] bg-white translate-y-full transition-transform duration-[750ms] ease-in-out z-0 group-hover/btn:translate-y-[12%]" />
                        <FaHome className="relative z-10 w-3.5 h-3.5 transition-colors duration-300 group-hover/btn:text-[#243822]" />
                        <span className="relative z-10 transition-colors duration-300 group-hover/btn:text-[#243822]">
                            Back to home
                        </span>
                    </Link>

                    <Link
                        href="/product"
                        className="inline-flex items-center justify-center gap-2.5 bg-transparent border-2 border-[#a50808] text-[#a50808] px-8 py-3.5 rounded-xl text-xs font-extrabold tracking-widest uppercase hover:bg-[#a50808] hover:text-white hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#a50808]/30"
                    >
                        Browse products
                        <FaArrowRight className="w-3 h-3" />
                    </Link>
                </div>

                {/* Quick links */}
                <div
                    className="nf-rise mt-10 flex flex-wrap items-center justify-center gap-2.5"
                    style={{ animationDelay: "1.75s" }}
                >
                    <span className="text-xs font-semibold text-[#4f5b4b] mr-1">Or try:</span>
                    {QUICK_LINKS.map((q) => (
                        <Link
                            key={q.href}
                            href={q.href}
                            className="px-4 py-1.5 rounded-full bg-white border border-[#243822]/15 text-[#243822] text-xs sm:text-sm font-bold shadow-[0_6px_18px_rgba(36,56,34,0.06)] hover:bg-[#243822] hover:text-white transition-colors duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#243822]/30"
                        >
                            {q.label}
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}