"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Handshake, Package, Tag, Boxes, Globe2, Sprout, Factory, Cog, ShieldCheck } from "lucide-react";

// ---- B2B capability row shown under the hero paragraphs (icon + label, same style as the old trust-highlights row) ----
const B2B_CAPABILITIES = [
    { icon: Handshake, label: "B2B Supply" },
    { icon: Package, label: "Bulk Orders" },
    { icon: Tag, label: "Private Label" },
    { icon: Boxes, label: "Custom Packaging" },
    { icon: Globe2, label: "Export" },
];

// ---- Trust bar shown below the hero section (icon + label, same card design as before) ----
const TRUST_BAR = [
    { icon: Sprout, title: "Farm Sourcing" },
    { icon: Factory, title: "Manufacturing" },
    { icon: Cog, title: "Processing" },
    { icon: ShieldCheck, title: "Quality Selection" },
    { icon: Package, title: "Bulk Supply" },
    { icon: Globe2, title: "Export" },
];

export default function HeroSection() {
    const textContainerRef = useRef(null);
    const sectionRef = useRef(null);
    const router = useRouter();

    // TODO: Update this to the project's actual contact/bulk-quote route once confirmed
    // (e.g. "/contact" or "/quote"). No route is invented here per client instruction.
    const handleRequestQuote = () => {
        router.push("/contact");
    };

    // Snappy entrance animation on load (left content only)
    useEffect(() => {
        const leftElements = textContainerRef.current ? Array.from(textContainerRef.current.querySelectorAll(".hero-text-animate")) : [];
        const btnGroup = textContainerRef.current ? textContainerRef.current.querySelector(".hero-btn-animate") : null;

        gsap.set(leftElements, { opacity: 0, x: -50 });
        if (btnGroup) {
            gsap.set(btnGroup, { opacity: 0, y: 15 });
        }

        const tl = gsap.timeline();

        tl.to(leftElements, {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.08
        });

        if (btnGroup) {
            tl.to(btnGroup, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power2.out"
            }, "-=0.4");
        }

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <>
            {/*
                HERO SECTION
                - Height: at least the visible viewport (100svh minus the header). --header-h is the navbar height
                  (56px mobile / 96px desktop) — change those two numbers if the navbar height changes.
                  The +2.5rem compensates for the -mt-10 that tucks the section under the navbar.
                - Banner images are absolutely positioned against the section edges (not the padded content box),
                  so changing the padding never creates a gap between the banner and the trust bar below.
                - --band is the height of the mobile/tablet banner area at the bottom of the hero.
                  Bottom padding below lg is 85% of it, so the last 15% of the band fades in behind the buttons area.
            */}
            <section
                ref={sectionRef}
                className="relative w-full min-h-[calc(100svh_-_var(--header-h)_+_2.5rem)] [--header-h:56px] lg:[--header-h:96px] [--band:min(100vw,640px)] bg-[#f3f1e6] text-foreground flex flex-col justify-between overflow-hidden pl-[7%] sm:pl-[11%] pr-[5%] pt-15 pb-[calc(var(--band)_*_0.85)] lg:pb-10 lg:pt-36 gap-12 lg:gap-0 -mt-10"
            >
                {/* Banner — desktop (lg and up): full hero height, anchored bottom-right, flush with the header and the trust bar */}
                <Image
                    src="/hero-section/hero-banner.png"
                    alt=""
                    width={2048}
                    height={768}
                    priority
                    sizes="100vw"
                    className="hero-banner-desktop hidden lg:block absolute right-0 bottom-0 z-0 pointer-events-none select-none"
                    draggable={false}
                />

                {/* Banner — mobile / tablet (below lg): the vertical banner, zoomed so the circles fill the full width (no empty left side) */}
                <div className="hero-band-mask lg:hidden absolute inset-x-0 bottom-0 h-[var(--band)] overflow-hidden z-0 pointer-events-none">
                    <Image
                        src="/hero-section/image.png"
                        alt=""
                        width={941}
                        height={1672}
                        sizes="210vw"
                        className="absolute right-0 bottom-0 w-[208%] max-w-none h-auto select-none"
                        draggable={false}
                    />
                </div>

                {/* Ambient Background Glow overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(36,56,34,0.04)_0%,transparent_75%)] pointer-events-none" />

                {/* Decorative corner leaves — actual image asset (neutral tone), not an icon component. Replace /leaf-neutral.png with your artwork. */}
                <Image
                    src="/lefttree.png"
                    alt=""
                    width={420}
                    height={420}
                    className="hidden sm:block absolute -left-18 top-0 lg:-top-18 w-40 h-40 lg:w-90 lg:h-90 opacity-[0.62] rotate-[-18deg] pointer-events-none z-0 select-none"
                    draggable={false}
                />
                <Image
                    src="/lefttree.png"
                    alt=""
                    width={220}
                    height={220}
                    className="hidden sm:block absolute -left-16 -bottom-18 lg:-bottom-28 w-32 h-32 lg:w-80 lg:h-80 opacity-[0.62] rotate-[78deg] pointer-events-none z-0 select-none"
                    draggable={false}
                />

                {/* Columns Layout */}
                <div className="w-full flex flex-col lg:flex-row items-center justify-between lg:justify-start gap-12 lg:gap-0 flex-1 z-10">

                    {/* LEFT COLUMN — B2B heading, copy, capability line & CTAs */}
                    <div ref={textContainerRef} className="w-full lg:w-[50%] flex flex-col items-center lg:items-start text-center lg:text-left relative z-20">
                        <h1 className="hero-text-animate lg:max-w-[13em] text-[clamp(2.2rem,3.6vw,3.1rem)] font-medium text-forest leading-[1.2] tracking-tight font-serif">
                            Dehydrated Ingredients. Sourced with Care.
                            <br />
                            Made for Business.
                        </h1>

                        <p className="hero-text-animate mt-5 text-foreground/70 text-sm leading-[1.8] max-w-[480px] font-sans">
                            From our own guava farms and carefully selected sources to professional kitchens, food manufacturers and global markets.
                        </p>

                        <p className="hero-text-animate mt-3 text-foreground/70 text-sm leading-[1.8] max-w-[480px] font-sans">
                            DryMato supplies dehydrated fruits, vegetables, herbs and powders for a wide range of commercial and industrial applications.
                        </p>

                        {/* B2B capability row — icon + label, always on a single line (tighter spacing on small screens) */}
                        <div className="hero-text-animate flex items-start flex-nowrap divide-x divide-sage/30 mt-8 w-full max-w-[540px]">
                            {B2B_CAPABILITIES.map(({ icon: Icon, label }, i) => (
                                <div
                                    key={label}
                                    className={`flex flex-col items-center lg:items-start gap-2 flex-1 min-w-0 sm:min-w-[80px] ${i === 0 ? "pr-1 sm:pr-3" : "px-1 sm:px-3"}`}
                                >
                                    <Icon className="w-5 h-5 text-forest" strokeWidth={1.5} />
                                    <span className="text-[10px] max-[380px]:text-[9px] sm:text-[11px] font-semibold text-foreground leading-tight text-center lg:text-left">
                                        {label}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="hero-btn-animate mt-8 flex flex-col sm:flex-row items-center gap-4">
                            <button
                                onClick={() => router.push("/product")}
                                className="border border-forest bg-forest hover:bg-forest-light hover:border-forest-light text-white px-8 py-3 rounded-full text-xs font-extrabold tracking-widest transition-all duration-300 cursor-pointer active:scale-95 shadow-[0_4px_12px_rgba(0,0,0,0.06)] inline-flex items-center gap-2"
                            >
                                Explore Our Products
                                <span aria-hidden="true">→</span>
                            </button>

                            <button
                                onClick={handleRequestQuote}
                                className="border border-forest text-forest hover:bg-forest hover:text-white px-8 py-3 rounded-full text-xs font-extrabold tracking-widest transition-all duration-300 cursor-pointer active:scale-95 inline-flex items-center gap-2"
                            >
                                Request a Bulk Quote
                            </button>
                        </div>
                    </div>

                </div>

                <style>{`
                    .hero-text-animate {
                        opacity: 0;
                        transform: translate3d(-80px, 0, 0);
                    }
                    .hero-btn-animate {
                        opacity: 0;
                        transform: translate3d(0, 20px, 0);
                    }

                    /*
                      Desktop banner.
                      - Always the full hero height (no gap, no fade) and anchored bottom-right.
                      - On narrower desktops the collage would run under the text, so the banner is nudged to the right
                        (the right edge is cropped by the section, like a normal background crop) just enough to keep the
                        circles clear of the text.
                        shift = 43.4% of the banner width (% = the banner's own width) + 616px - 89vw, never below 0.
                        616px = left text block (capability row / buttons) + breathing room, 89vw = screen minus the 11% left padding.
                        At 1920px wide the shift is 0, so the banner sits exactly as designed.
                    */
                    .hero-banner-desktop {
                        width: auto;
                        max-width: none;
                        height: 100%;
                        transform: translateX(max(0px, calc(43.4% + 616px - 89vw)));
                    }

                    /* Mobile / tablet banner: its top edge melts into the cream so it reads as background, not a separate block */
                    .hero-band-mask {
                        -webkit-mask-image: linear-gradient(to bottom, transparent 0%, transparent 12%, #000 45%);
                        mask-image: linear-gradient(to bottom, transparent 0%, transparent 12%, #000 45%);
                    }
                `}</style>
            </section>

            {/* Light-green trust bar below the hero — same design as before, updated to the client's exact points */}
            <section className="relative w-full bg-sage/10 py-10 sm:py-14 px-[5%] overflow-hidden">
                {/* Decorative corner leaves — actual image asset (green tone here), right side mirrored via scaleX(-1) instead of a second file */}
                <Image
                    src="/lefttree.png"
                    alt=""
                    width={180}
                    height={180}
                    className="hidden md:block absolute -left-16 top-1/2 -translate-y-1/2 w-84 h-84 opacity-70 rotate-[-15deg] pointer-events-none select-none"
                    draggable={false}
                />
                <Image
                    src="/lefttree.png"
                    alt=""
                    width={180}
                    height={180}
                    className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 w-84 h-84 opacity-70 rotate-[-5deg] scale-x-[-1] pointer-events-none select-none"
                    draggable={false}
                />

                <div className="relative max-w-5xl mx-auto grid grid-cols-3 sm:grid-cols-6 divide-x divide-sage/30 gap-x-1 sm:gap-x-4 gap-y-6 sm:gap-y-0">
                    {TRUST_BAR.map(({ icon: Icon, title }) => (
                        <div
                            key={title}
                            className="flex flex-col items-center gap-1 sm:gap-2.5 px-1 sm:px-4 first:pl-0 last:pr-0 text-center"
                        >
                            <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-forest" strokeWidth={1.5} />
                            <span className="text-[10px] sm:text-xs font-bold text-foreground leading-tight">{title}</span>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

// high animated old version with new theme (green)


// "use client";

// import { useRef, useEffect, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { Handshake, Package, Tag, Boxes, Globe2, Sprout, Factory, Cog, ShieldCheck } from "lucide-react";


// // TODO: Future carousel/visual sequence should eventually represent the B2B supply-chain story:
// // Guava Farm -> Fresh Ingredients -> Processing -> Dehydrated Ingredients -> Bulk Packaging -> Chef / Manufacturing / Export.
// // The current slide images below are TEMPORARY placeholders and will be replaced with the sequence above.
// const HERO_SLIDES = [
//     {
//         image: "/jaar/jaarslightroatateview.png",
//         sideImage: "/hero-section/guava-farm.png"
//     },
//     {
//         image: "/jaar/oliver-oil-smalljaar.png",
//         sideImage: "/hero-section/fresh-veggies.png"
//     },
//     {
//         image: "/jaar/sunflower-oil-smalljaar.png",
//         sideImage: "/hero-section/processing.png"
//     },
//     {
//         image: "/tomato_powder.png",
//         sideImage: "/hero-section/dehydrated-food.png"
//     },
//     {
//         image: "/upcomming-dried_onion.png",
//         sideImage: "/hero-section/export.png"
//     },
//     {
//         image: "/upcomming-dried-garlic.png",
//         sideImage: "/hero-section/chef.png"
//     },
//     {
//         image: "/upcomming-dried-okra.png",
//         sideImage: "/use_salads.png"
//     },
//     {
//         image: "/upcomming-dried-carrot.png",
//         sideImage: "/use_breakfast.png"
//     },
//     {
//         image: "/upcooming-dried-beetroot.png",
//         sideImage: "/use_salads.png"
//     },
//     {
//         image: "/upcomming-mix-dried-upcomming.png",
//         sideImage: "/use_pasta.png"
//     }
// ];

// // ---- B2B capability row shown under the hero paragraphs (icon + label, same style as the old trust-highlights row) ----
// const B2B_CAPABILITIES = [
//     { icon: Handshake, label: "B2B Supply" },
//     { icon: Package, label: "Bulk Orders" },
//     { icon: Tag, label: "Private Label" },
//     { icon: Boxes, label: "Custom Packaging" },
//     { icon: Globe2, label: "Export" },
// ];

// // ---- Trust bar shown below the hero section (icon + label, same card design as before) ----
// const TRUST_BAR = [
//     { icon: Sprout, title: "Farm Sourcing" },
//     { icon: Factory, title: "Manufacturing" },
//     { icon: Cog, title: "Processing" },
//     { icon: ShieldCheck, title: "Quality Selection" },
//     { icon: Package, title: "Bulk Supply" },
//     { icon: Globe2, title: "Export" },
// ];

// function JarViewer({ slideIndex, onMouseEnter, onMouseLeave }) {
//     const sceneRef = useRef(null);
//     const containerRef = useRef(null);
//     const parallaxWrapperRef = useRef(null);
//     const jarRefs = useRef([]);
//     const prevIndexRef = useRef(slideIndex);


//     // Setup initial positions for all jars once on mount
//     useEffect(() => {
//         HERO_SLIDES.forEach((_, idx) => {
//             const el = jarRefs.current[idx];
//             if (el) {
//                 if (idx === slideIndex) {
//                     gsap.set(el, {
//                         x: 0,
//                         y: 0,
//                         rotation: 0,
//                         scale: 1,
//                         opacity: 1,
//                         pointerEvents: "auto"
//                     });
//                 } else {
//                     gsap.set(el, {
//                         x: 450,
//                         y: 250,
//                         rotation: 80,
//                         scale: 0.85,
//                         opacity: 0,
//                         pointerEvents: "none"
//                     });
//                 }
//             }
//         });
//         prevIndexRef.current = slideIndex;
//     }, []);

//     // Slide transition on slideIndex change (bidirectional circular semicircle path)
//     useEffect(() => {
//         const prevIndex = prevIndexRef.current;
//         if (prevIndex === slideIndex) return;

//         // Determine direction: 1 = next/forward, -1 = prev/backward
//         let direction = 1;
//         if (slideIndex === 0 && prevIndex === HERO_SLIDES.length - 1) {
//             direction = 1;
//         } else if (slideIndex === HERO_SLIDES.length - 1 && prevIndex === 0) {
//             direction = -1;
//         } else {
//             direction = slideIndex > prevIndex ? 1 : -1;
//         }

//         const outgoingEl = jarRefs.current[prevIndex];
//         const incomingEl = jarRefs.current[slideIndex];

//         if (outgoingEl) {
//             gsap.to(outgoingEl, {
//                 x: direction === 1 ? -450 : 450,
//                 y: 250,
//                 rotation: -80,
//                 scale: 0.85,
//                 opacity: 0,
//                 duration: 1.2,
//                 ease: "power4.inOut",
//                 overwrite: "auto"
//             });
//             gsap.set(outgoingEl, { pointerEvents: "none" });
//         }

//         if (incomingEl) {
//             gsap.set(incomingEl, {
//                 x: direction === 1 ? 450 : -450,
//                 y: 250,
//                 rotation: 80,
//                 scale: 0.85,
//                 opacity: 0,
//                 pointerEvents: "auto"
//             });

//             gsap.to(incomingEl, {
//                 x: 0,
//                 y: 0,
//                 rotation: 0,
//                 scale: 1,
//                 opacity: 1,
//                 duration: 1.2,
//                 ease: "power4.inOut",
//                 overwrite: "auto"
//             });
//         }

//         prevIndexRef.current = slideIndex;
//     }, [slideIndex]);

//     const onMouseMove = (e) => {
//         const scene = sceneRef.current;
//         if (!scene) return;
//         const rect = scene.getBoundingClientRect();

//         const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
//         const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);

//         const rotX = -y * 20;
//         const rotY = x * 20;

//         const wrapperX = -x * 35;
//         const wrapperY = -y * 35;

//         const activeEl = jarRefs.current[slideIndex];
//         const jarImg = activeEl?.querySelector("img");
//         if (jarImg) {
//             gsap.to(jarImg, {
//                 rotationX: rotX,
//                 rotationY: rotY,
//                 x: wrapperX,
//                 y: wrapperY,
//                 scale: 1.03,
//                 duration: 0.5,
//                 ease: "power2.out",
//                 overwrite: "auto",
//             });
//         }

//         const shadow = activeEl?.querySelector(".jar-shadow");
//         if (shadow) {
//             const dist = Math.min(Math.sqrt(x * x + y * y), 1.5);
//             gsap.to(shadow, {
//                 opacity: 1 - dist * 0.45,
//                 scaleX: 1 - dist * 0.15,
//                 scaleY: 0.5 * (1 - dist * 0.15),
//                 duration: 0.5,
//                 ease: "power2.out",
//                 overwrite: "auto",
//             });
//         }
//     };

//     const onMouseLeaveInternal = () => {
//         const activeEl = jarRefs.current[slideIndex];
//         const jarImg = activeEl?.querySelector("img");
//         if (jarImg) {
//             gsap.to(jarImg, {
//                 rotationX: 0,
//                 rotationY: 0,
//                 x: 0,
//                 y: 0,
//                 scale: 1,
//                 duration: 0.8,
//                 ease: "power2.out",
//                 overwrite: "auto",
//             });
//         }

//         const shadow = activeEl?.querySelector(".jar-shadow");
//         if (shadow) {
//             gsap.to(shadow, {
//                 opacity: 1,
//                 scaleX: 1,
//                 scaleY: 0.5,
//                 duration: 0.8,
//                 ease: "power2.out",
//                 overwrite: "auto",
//             });
//         }
//         onMouseLeave?.();
//     };

//     return (
//         <div
//             ref={sceneRef}
//             onMouseMove={onMouseMove}
//             onMouseLeave={onMouseLeaveInternal}
//             onMouseEnter={onMouseEnter}
//             style={{
//                 width: "100%",
//                 maxWidth: "390px",
//                 height: "450px",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 position: "relative",
//                 perspective: "1000px",
//                 userSelect: "none",
//                 WebkitUserSelect: "none",
//                 cursor: "pointer",
//             }}
//         >
//             <div
//                 ref={containerRef}
//                 style={{
//                     width: "100%",
//                     height: "100%",
//                     position: "relative",
//                     transformStyle: "preserve-3d",
//                     filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.18))",
//                     willChange: "transform",
//                 }}
//             >
//                 <div
//                     ref={parallaxWrapperRef}
//                     style={{
//                         width: "100%",
//                         height: "100%",
//                         position: "relative",
//                         transformStyle: "preserve-3d",
//                     }}
//                 >
//                     {HERO_SLIDES.map((slide, index) => (
//                         <div
//                             key={index}
//                             ref={(el) => (jarRefs.current[index] = el)}
//                             className={index === 0 ? "jar-slide-initial-visible" : "jar-slide-initial-hidden"}
//                             style={{
//                                 position: "absolute",
//                                 width: "100%",
//                                 height: "100%",
//                                 transformOrigin: "50% 100%",
//                                 pointerEvents: index === slideIndex ? "auto" : "none",
//                                 transformStyle: "preserve-3d",
//                             }}
//                         >
//                             {/* TODO: Replace this temporary product image with the relevant B2B supply-chain visual
//                                 (guava farm / fresh ingredients / processing / dehydrated ingredients / bulk cartons / chef & export)
//                                 once the new asset for this slide position is supplied. Kept as-is for now so the carousel keeps working. */}
//                             <Image
//                                 src={slide.image}
//                                 alt=""
//                                 fill
//                                 sizes="390px"
//                                 style={{
//                                     objectFit: "contain",
//                                     pointerEvents: "none",
//                                 }}
//                                 draggable={false}
//                                 priority
//                             />

//                             <div
//                                 style={{
//                                     position: "absolute",
//                                     bottom: "10px",
//                                     left: "50%",
//                                     transform: "translateX(-50%)",
//                                     pointerEvents: "none",
//                                     zIndex: 10,
//                                 }}
//                             >
//                                 <div
//                                     className="jar-shadow"
//                                     style={{
//                                         width: "210px",
//                                         height: "22px",
//                                         transform: "scaleY(0.5)",
//                                         borderRadius: "50%",
//                                         background: "radial-gradient(ellipse, rgba(0,0,0,0.22) 0%, transparent 80%)",
//                                     }}
//                                 />
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default function HeroSection() {
//     const [activeSlide, setActiveSlide] = useState(0);
//     const [isPaused, setIsPaused] = useState(false);
//     const textContainerRef = useRef(null);
//     const rightContainerRef = useRef(null);
//     const sectionRef = useRef(null);
//     const isMountedRef = useRef(false);
//     const router = useRouter();


//     const handlePrev = () => {
//         setActiveSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
//     };

//     const handleNext = () => {
//         setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
//     };

//     // TODO: Update this to the project's actual contact/bulk-quote route once confirmed
//     // (e.g. "/contact" or "/quote"). No route is invented here per client instruction.
//     const handleRequestQuote = () => {
//         router.push("/contact");
//     };

//     useEffect(() => {
//         if (isPaused) return;
//         const interval = setInterval(() => {
//             setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
//         }, 6000);
//         return () => clearInterval(interval);
//     }, [activeSlide, isPaused]);

//     // Snappy entrance animation on load
//     useEffect(() => {
//         const leftElements = textContainerRef.current ? Array.from(textContainerRef.current.querySelectorAll(".hero-text-animate")) : [];
//         const jarContainer = document.querySelector(".hero-jar-container-animate");
//         const btnGroup = textContainerRef.current ? textContainerRef.current.querySelector(".hero-btn-animate") : null;

//         gsap.set(leftElements, { opacity: 0, x: -50 });
//         if (jarContainer) {
//             gsap.set(jarContainer, { opacity: 0, scale: 0.8, y: 30 });
//         }
//         if (btnGroup) {
//             gsap.set(btnGroup, { opacity: 0, y: 15 });
//         }
//         gsap.set(rightContainerRef.current, { opacity: 0, x: 100 });

//         const tl = gsap.timeline();

//         tl.to(leftElements, {
//             opacity: 1,
//             x: 0,
//             duration: 0.5,
//             ease: "power2.out",
//             stagger: 0.08
//         })
//             .to(jarContainer, {
//                 opacity: 1,
//                 scale: 1,
//                 y: 0,
//                 duration: 0.7,
//                 ease: "power3.out"
//             }, "-=0.4")
//             .to(btnGroup, {
//                 opacity: 1,
//                 y: 0,
//                 duration: 0.5,
//                 ease: "power2.out"
//             }, "-=0.4")
//             .to(rightContainerRef.current, {
//                 opacity: 1,
//                 x: 0,
//                 duration: 0.6,
//                 ease: "power2.out"
//             }, "-=0.4");

//         return () => {
//             tl.kill();
//         };
//     }, []);

//     // Side image transition on slide change
//     useEffect(() => {
//         if (!isMountedRef.current) {
//             isMountedRef.current = true;
//             return;
//         }

//         const sideImg = document.querySelector(".side-image-animate");
//         if (sideImg) {
//             gsap.fromTo(sideImg,
//                 { opacity: 0, x: 50, scale: 1.15, rotate: 6 },
//                 {
//                     opacity: 1,
//                     x: 0,
//                     scale: 1,
//                     rotate: 0,
//                     duration: 0.6,
//                     ease: "power2.out",
//                     overwrite: "auto"
//                 }
//             );
//         }
//     }, [activeSlide]);

//     const slide = HERO_SLIDES[activeSlide];

//     return (
//         <>
//             <section ref={sectionRef} className="relative w-full min-h-[calc(100vh-140px)] bg-background text-foreground flex flex-col justify-between overflow-hidden pl-[7%] sm:pl-[8%] pr-[5%] pt-15 pb-10 lg:pt-30 gap-12 lg:gap-0 -mt-10">
//                 {/* Ambient Background Glow overlay */}
//                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(36,56,34,0.04)_0%,transparent_75%)] pointer-events-none" />

//                 {/* Decorative corner leaves — actual image asset (neutral tone), not an icon component. Replace /leaf-neutral.png with your artwork. */}
//                 <Image
//                     src="/lefttree.png"
//                     alt=""
//                     width={420}
//                     height={420}
//                     className="hidden sm:block absolute -left-18 top-0 lg:-top-18 w-40 h-40 lg:w-90 lg:h-90 opacity-[0.62] rotate-[-18deg] pointer-events-none z-0 select-none"
//                     draggable={false}
//                 />
//                 <Image
//                     src="/lefttree.png"
//                     alt=""
//                     width={220}
//                     height={220}
//                     className="hidden sm:block absolute -left-16 -bottom-18 lg:-bottom-28 w-32 h-32 lg:w-80 lg:h-80 opacity-[0.62] rotate-[78deg] pointer-events-none z-0 select-none"
//                     draggable={false}
//                 />

//                 {/* Grid-like Columns Layout */}
//                 <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0 flex-1 z-10">

//                     {/* LEFT COLUMN — B2B heading, copy, capability line & CTAs */}
//                     <div ref={textContainerRef} className="w-full lg:w-[42%] flex flex-col items-center lg:items-start text-center lg:text-left relative z-20">
//                         <h1 className="hero-text-animate text-[clamp(2.2rem,3.6vw,3.1rem)] font-medium text-forest leading-[1.2] tracking-tight font-serif">
//                             Dehydrated Ingredients. Sourced with Care.
//                             <br />
//                             Made for Business.
//                         </h1>

//                         <p className="hero-text-animate mt-5 text-foreground/70 text-sm leading-[1.8] max-w-[480px] font-sans">
//                             From our own guava farms and carefully selected sources to professional kitchens, food manufacturers and global markets.
//                         </p>

//                         <p className="hero-text-animate mt-3 text-foreground/70 text-sm leading-[1.8] max-w-[480px] font-sans">
//                             DryMato supplies dehydrated fruits, vegetables, herbs and powders for a wide range of commercial and industrial applications.
//                         </p>

//                         {/* B2B capability row — icon + label, same layout/style as the previous trust-highlights row */}
//                         <div className="hero-text-animate flex items-start flex-wrap divide-x divide-sage/30 mt-8 w-full max-w-[540px]">
//                             {B2B_CAPABILITIES.map(({ icon: Icon, label }, i) => (
//                                 <div
//                                     key={label}
//                                     className={`flex flex-col items-center lg:items-start gap-2 flex-1 min-w-[80px] ${i === 0 ? "pr-3" : "px-3"}`}
//                                 >
//                                     <Icon className="w-5 h-5 text-forest" strokeWidth={1.5} />
//                                     <span className="text-[11px] font-semibold text-foreground leading-tight text-center lg:text-left">
//                                         {label}
//                                     </span>
//                                 </div>
//                             ))}
//                         </div>

//                         <div className="hero-btn-animate mt-8 flex flex-col sm:flex-row items-center gap-4">
//                             <button
//                                 onClick={() => router.push("/product")}
//                                 className="border border-forest bg-forest hover:bg-forest-light hover:border-forest-light text-white px-8 py-3 rounded-full text-xs font-extrabold tracking-widest transition-all duration-300 cursor-pointer active:scale-95 shadow-[0_4px_12px_rgba(0,0,0,0.06)] inline-flex items-center gap-2"
//                             >
//                                 Explore Our Products
//                                 <span aria-hidden="true">→</span>
//                             </button>

//                             <button
//                                 onClick={handleRequestQuote}
//                                 className="border border-forest text-forest hover:bg-forest hover:text-white px-8 py-3 rounded-full text-xs font-extrabold tracking-widest transition-all duration-300 cursor-pointer active:scale-95 inline-flex items-center gap-2"
//                             >
//                                 Request a Bulk Quote
//                             </button>
//                         </div>
//                     </div>

//                     {/* CENTER COLUMN — Jar Viewer + Smoke + Floating Assets (unchanged) */}
//                     <div className="w-full lg:w-[32%] flex flex-col items-center justify-center relative min-h-[450px] z-10">
//                         <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
//                             <div className="smoke-bg-1" />
//                             <div className="smoke-bg-2" />
//                             <div className="smoke-bg-3" />
//                         </div>

//                         {/* TODO: These floating tomato decorative images make the hero read as tomato-specific.
//                             Replace with subtle mixed dehydrated ingredient visuals (fruits, vegetables, herbs, powders)
//                             so DryMato doesn't appear tomato-focused. Kept temporarily so the layout stays populated. */}
//                         <div className="absolute inset-0 pointer-events-none z-20 overflow-visible">
//                             <Image src="/dryTomato.png" className="floating-tomato-1" alt="" width={48} height={48} />
//                             <Image src="/tomatoimg.png" className="floating-tomato-2" alt="" width={54} height={54} />
//                             <Image src="/dryTomato.png" className="floating-tomato-3" alt="" width={42} height={42} />
//                         </div>

//                         <div className="hero-jar-container-animate">
//                             <JarViewer
//                                 slideIndex={activeSlide}
//                                 onMouseEnter={() => setIsPaused(true)}
//                                 onMouseLeave={() => setIsPaused(false)}
//                             />
//                         </div>

//                         <div className="flex items-center gap-4 mt-6 z-20">
//                             <button
//                                 onClick={handlePrev}
//                                 className="w-9 h-9 rounded-full border border-forest/20 flex items-center justify-center text-forest hover:bg-forest hover:text-white hover:border-forest transition-all duration-300 cursor-pointer outline-none shadow-sm active:scale-95 bg-forest/5"
//                                 aria-label="Previous slide"
//                             >
//                                 <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
//                                 </svg>
//                             </button>

//                             <div className="flex gap-2.5">
//                                 {HERO_SLIDES.map((_, idx) => (
//                                     <button
//                                         key={idx}
//                                         onClick={() => setActiveSlide(idx)}
//                                         className={`h-2 rounded-full transition-all duration-500 cursor-pointer border-none outline-none ${activeSlide === idx
//                                             ? "bg-forest w-6"
//                                             : "bg-forest/20 hover:bg-forest/40 w-2"
//                                             }`}
//                                         aria-label={`Go to slide ${idx + 1}`}
//                                     />
//                                 ))}
//                             </div>

//                             <button
//                                 onClick={handleNext}
//                                 className="w-9 h-9 rounded-full border border-forest/20 flex items-center justify-center text-forest hover:bg-forest hover:text-white hover:border-forest transition-all duration-300 cursor-pointer outline-none shadow-sm active:scale-95 bg-forest/5"
//                                 aria-label="Next slide"
//                             >
//                                 <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
//                                 </svg>
//                             </button>
//                         </div>
//                     </div>

//                     {/* RIGHT COLUMN — Supporting visual (circular side image, temporary) */}
//                     <div ref={rightContainerRef} className="w-full lg:w-[26%] flex flex-col items-center lg:items-start text-center lg:text-left relative z-20 hero-right-initial">
//                         <div className="absolute right-[calc(-260px+5%)] lg:right-[calc(-350px+5%)] top-0 bottom-0 my-auto w-[420px] h-[420px] lg:w-[560px] lg:h-[560px] hidden md:block select-none">
//                             <div className="w-full h-full rounded-full border-[12px] border-surface overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.12)] relative pointer-events-none">
//                                 {/* TODO: Replace this temporary supporting image with a B2B application visual
//                                     (chef using ingredients, commercial food production, food manufacturing, or export/logistics context).
//                                     Kept as-is for now as a placeholder so the layout stays populated. */}
//                                 <Image
//                                     src={slide.sideImage}
//                                     alt="Serving Suggestion"
//                                     fill
//                                     sizes="(max-width: 1024px) 420px, 560px"
//                                     className="w-full h-full object-cover side-image-animate"
//                                     draggable={false}
//                                 />
//                                 <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />
//                             </div>
//                             <div className="absolute left-[20px] lg:left-[35px] top-0 bottom-0 my-auto h-fit z-30 flex flex-col items-center gap-2 lg:gap-4 hero-text-animate">
//                                 {[
//                                     { id: "prev", index: (activeSlide - 1 + HERO_SLIDES.length) % HERO_SLIDES.length },
//                                     { id: "active", index: activeSlide },
//                                     { id: "next", index: (activeSlide + 1) % HERO_SLIDES.length }
//                                 ].map((item) => {
//                                     const slideNum = item.index + 1;
//                                     const isActive = item.id === "active";
//                                     return (
//                                         <button
//                                             key={item.id}
//                                             onClick={() => setActiveSlide(item.index)}
//                                             className={`transition-all duration-500 font-serif leading-none select-none -rotate-90 origin-center cursor-pointer pointer-events-auto h-12 lg:h-16 w-8 lg:w-12 flex items-center justify-center ${isActive
//                                                 ? "text-forest text-[clamp(2.2rem,3.8vw,3rem)] font-black drop-shadow-[0_2px_8px_rgba(255,255,255,0.95)] scale-110"
//                                                 : "text-foreground/40 hover:text-foreground/70 text-[clamp(1.4rem,2.4vw,1.8rem)] font-bold drop-shadow-[0_1px_4px_rgba(255,255,255,0.8)]"
//                                                 }`}
//                                         >
//                                             {slideNum < 10 ? `0${slideNum}` : `${slideNum}`}
//                                         </button>
//                                     );
//                                 })}
//                             </div>
//                         </div>

//                         <div className="relative z-10 md:-translate-x-24 lg:-translate-x-44 flex flex-col items-center lg:items-start">
//                             <div className="md:hidden hero-text-animate font-serif text-[clamp(3.5rem,6vw,5.5rem)] font-black text-forest opacity-80 leading-none mb-4">
//                                 {`${activeSlide + 1 < 10 ? `0${activeSlide + 1}` : activeSlide + 1}/${HERO_SLIDES.length < 10 ? `0${HERO_SLIDES.length}` : HERO_SLIDES.length}`}
//                             </div>
//                         </div>
//                     </div>

//                 </div>

//                 <style>{`
//                     @keyframes smokeFloat1 {
//                         0% { transform: translate(-30px, -20px) scale(0.9) rotate(0deg); opacity: 0.15; }
//                         50% { transform: translate(40px, 30px) scale(1.15) rotate(180deg); opacity: 0.3; }
//                         100% { transform: translate(-30px, -20px) scale(0.9) rotate(360deg); opacity: 0.15; }
//                     }
//                     @keyframes smokeFloat2 {
//                         0% { transform: translate(30px, 40px) scale(1.1) rotate(0deg); opacity: 0.1; }
//                         50% { transform: translate(-20px, -30px) scale(0.85) rotate(-180deg); opacity: 0.25; }
//                         100% { transform: translate(30px, 40px) scale(1.1) rotate(-360deg); opacity: 0.1; }
//                     }
//                     @keyframes floatTomato1 {
//                         0% { transform: translate(0px, 0px) rotate(0deg) scale(1); }
//                         50% { transform: translate(-15px, -35px) rotate(15deg) scale(1.05); }
//                         100% { transform: translate(0px, 0px) rotate(0deg) scale(1); }
//                     }
//                     @keyframes floatTomato2 {
//                         0% { transform: translate(0px, 0px) rotate(0deg) scale(0.9); }
//                         50% { transform: translate(25px, -20px) rotate(-20deg) scale(1); }
//                         100% { transform: translate(0px, 0px) rotate(0deg) scale(0.9); }
//                     }
//                     @keyframes floatTomato3 {
//                         0% { transform: translate(0px, 0px) rotate(0deg) scale(0.85); }
//                         50% { transform: translate(-20px, 25px) rotate(25deg) scale(0.9); }
//                         100% { transform: translate(0px, 0px) rotate(0deg) scale(0.85); }
//                     }

//                     .smoke-bg-1 {
//                         position: absolute;
//                         width: 450px;
//                         height: 450px;
//                         background: radial-gradient(circle, rgba(36, 56, 34, 0.08) 0%, transparent 70%);
//                         filter: blur(50px);
//                         animation: smokeFloat1 16s ease-in-out infinite;
//                         mix-blend-mode: multiply;
//                     }
//                     .smoke-bg-2 {
//                         position: absolute;
//                         width: 500px;
//                         height: 500px;
//                         background: radial-gradient(circle, rgba(255, 255, 255, 0.25) 0%, transparent 70%);
//                         filter: blur(60px);
//                         animation: smokeFloat2 20s ease-in-out infinite;
//                         mix-blend-mode: normal;
//                     }
//                     .smoke-bg-3 {
//                         position: absolute;
//                         width: 380px;
//                         height: 380px;
//                         background: radial-gradient(circle, rgba(36, 56, 34, 0.05) 0%, transparent 70%);
//                         filter: blur(40px);
//                         animation: smokeFloat1 12s ease-in-out infinite reverse;
//                         mix-blend-mode: multiply;
//                     }

//                     .floating-tomato-1 {
//                         position: absolute;
//                         top: 15%;
//                         left: 8%;
//                         width: 48px;
//                         height: auto;
//                         opacity: 0.65;
//                         filter: drop-shadow(0 15px 15px rgba(0,0,0,0.5));
//                         animation: floatTomato1 8s ease-in-out infinite;
//                     }
//                     .floating-tomato-2 {
//                         position: absolute;
//                         top: 55%;
//                         right: 5%;
//                         width: 54px;
//                         height: auto;
//                         opacity: 0.7;
//                         filter: drop-shadow(0 15px 15px rgba(0,0,0,0.5));
//                         animation: floatTomato2 10s ease-in-out infinite;
//                     }
//                     .floating-tomato-3 {
//                         position: absolute;
//                         bottom: 15%;
//                         left: 15%;
//                         width: 42px;
//                         height: auto;
//                         opacity: 0.6;
//                         filter: drop-shadow(0 15px 15px rgba(0,0,0,0.5));
//                         animation: floatTomato3 7s ease-in-out infinite;
//                     }

//                     .jar-slide-initial-hidden {
//                         opacity: 0;
//                         transform: translate3d(450px, 250px, 0) rotate(80deg) scale(0.85);
//                         pointer-events: none;
//                     }
//                     .jar-slide-initial-visible {
//                         opacity: 1;
//                         transform: translate3d(0px, 0px, 0px) rotate(0deg) scale(1);
//                         pointer-events: auto;
//                     }
//                     .hero-text-animate {
//                         opacity: 0;
//                         transform: translate3d(-80px, 0, 0);
//                     }
//                     .hero-right-initial {
//                         opacity: 0;
//                         transform: translate3d(150px, 0, 0);
//                     }
//                     .hero-btn-animate {
//                         opacity: 0;
//                         transform: translate3d(0, 20px, 0);
//                     }
//                     .hero-jar-container-animate {
//                         opacity: 0;
//                         transform: translate3d(0px, 50px, 0px) scale(0.6);
//                         width: 100%;
//                         display: flex;
//                         justify-content: center;
//                     }
//                 `}</style>
//             </section>

//             {/* Light-green trust bar below the hero — same design as before, updated to the client's exact points */}
//             <section className="relative w-full bg-sage/10 py-10 sm:py-14 px-[5%] overflow-hidden">
//                 {/* Decorative corner leaves — actual image asset (green tone here), right side mirrored via scaleX(-1) instead of a second file */}
//                 <Image
//                     src="/lefttree.png"
//                     alt=""
//                     width={180}
//                     height={180}
//                     className="hidden md:block absolute -left-16 top-1/2 -translate-y-1/2 w-84 h-84 opacity-70 rotate-[-15deg] pointer-events-none select-none"
//                     draggable={false}
//                 />
//                 <Image
//                     src="/lefttree.png"
//                     alt=""
//                     width={180}
//                     height={180}
//                     className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 w-84 h-84 opacity-70 rotate-[-5deg] scale-x-[-1] pointer-events-none select-none"
//                     draggable={false}
//                 />

//                 <div className="relative max-w-5xl mx-auto grid grid-cols-3 sm:grid-cols-6 divide-x divide-sage/30 gap-x-1 sm:gap-x-4 gap-y-6 sm:gap-y-0">
//                     {TRUST_BAR.map(({ icon: Icon, title }) => (
//                         <div
//                             key={title}
//                             className="flex flex-col items-center gap-1 sm:gap-2.5 px-1 sm:px-4 first:pl-0 last:pr-0 text-center"
//                         >
//                             <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-forest" strokeWidth={1.5} />
//                             <span className="text-[10px] sm:text-xs font-bold text-foreground leading-tight">{title}</span>
//                         </div>
//                     ))}
//                 </div>
//             </section>
//         </>
//     );
// }