// "use client";

// import Image from "next/image";

// export default function PreFooterBanner() {
//     return (
//         <section className="relative w-full flex bg-white justify-between items-center overflow-hidden ">
//             {/* Background Botanical Line Art */}
//             <div className="absolute left-0 top-0 h-full w-[30%] pointer-events-none select-none opacity-15">
//                 {/* <img
//                     src="/lefttree.png"
//                     alt="Background branch"
//                     className="w-full h-full object-contain object-left"
//                 /> */}
//             </div>
//             <div className="absolute right-0 top-0 h-full w-[30%] pointer-events-none select-none opacity-15">
//                 {/* <img
//                     src="/righttree.png"
//                     alt="Background branch"
//                     className="w-full h-full object-contain object-right"
//                 /> */}
//             </div>

//             {/* Floating Organic Elements (Basil and Tomato) */}
//             <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
//                 {/* Basil Leaf 1 */}
//                 <div className="absolute left-[3%] top-[25%] w-10 h-10 rotate-[15deg] opacity-90 transition-transform duration-500 hover:rotate-[30deg]">
//                     {/* <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
//                         <path d="M50 90C50 90 20 65 15 45C10 25 25 10 45 15C65 20 90 50 90 50C90 50 65 80 50 90Z" fill="url(#basilGrad1)" />
//                         <path d="M50 90C50 90 35 70 30 55C25 40 35 25 45 28" stroke="#33691E" strokeWidth="2" strokeLinecap="round" />
//                         <defs>
//                             <linearGradient id="basilGrad1" x1="15" y1="15" x2="90" y2="90" gradientUnits="userSpaceOnUse">
//                                 <stop offset="0%" stopColor="#689F38" />
//                                 <stop offset="100%" stopColor="#33691E" />
//                             </linearGradient>
//                         </defs>
//                     </svg> */}
//                 </div>
//                 {/* Basil Leaf 2 */}
//                 {/* <div className="absolute left-[8%] bottom-[15%] w-12 h-12 rotate-[-45deg] opacity-90">
//                     <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
//                         <path d="M50 90C50 90 20 65 15 45C10 25 25 10 45 15C65 20 90 50 90 50C90 50 65 80 50 90Z" fill="url(#basilGrad2)" />
//                         <path d="M50 90C50 90 35 70 30 55C25 40 35 25 45 28" stroke="#2E7D32" strokeWidth="2" strokeLinecap="round" />
//                         <defs>
//                             <linearGradient id="basilGrad2" x1="15" y1="15" x2="90" y2="90" gradientUnits="userSpaceOnUse">
//                                 <stop offset="0%" stopColor="#4CAF50" />
//                                 <stop offset="100%" stopColor="#1B5E20" />
//                             </linearGradient>
//                         </defs>
//                     </svg>
//                 </div> */}
//                 {/* Basil Leaf 3 */}
//                 {/* <div className="absolute left-[2%] bottom-[45%] w-8 h-8 rotate-[80deg] opacity-75">
//                     <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
//                         <path d="M50 90C50 90 20 65 15 45C10 25 25 10 45 15C65 20 90 50 90 50C90 50 65 80 50 90Z" fill="url(#basilGrad3)" />
//                         <defs>
//                             <linearGradient id="basilGrad3" x1="15" y1="15" x2="90" y2="90" gradientUnits="userSpaceOnUse">
//                                 <stop offset="0%" stopColor="#8BC34A" />
//                                 <stop offset="100%" stopColor="#558B2F" />
//                             </linearGradient>
//                         </defs>
//                     </svg>
//                 </div> */}

//                 {/* Tomato Chunk 1 */}
//                 {/* <div className="absolute left-[14%] top-[10%] w-6 h-6 rotate-[60deg] opacity-90">
//                     <img
//                         src="/creakTomato.png"
//                         alt="Tomato piece"
//                         className="w-full h-full object-contain filter drop-shadow-sm"
//                     />
//                 </div> */}
//                 {/* Tomato Chunk 2 */}
//                 {/* <div className="absolute left-[11%] top-[38%] w-8 h-8 rotate-[-20deg] opacity-90">
//                     <img
//                         src="/creakTomato.png"
//                         alt="Tomato piece"
//                         className="w-full h-full object-contain filter drop-shadow-sm"
//                     />
//                 </div> */}
//             </div>

//             <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center pl-6 sm:pl-12 lg:pl-24 pr-0 relative z-10">

//                 {/* Left Half: dryTomatobowl on left, text content on right */}
//                 <div className="flex flex-col sm:flex-row items-center gap-6 lg:gap-8 text-center sm:text-left py-12 md:py-16 z-20">
//                     {/* dryTomatobowl (dryTomatobowl.png) */}
//                     <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 shrink-0 flex items-center justify-center group/jar">
//                         <div className="absolute w-60 h-60 bg-orange-100/45 rounded-full filter blur-xl -z-10 group-hover:scale-110 transition-transform duration-700"></div>
//                         <Image
//                             src="/dryTomatobowl.png"
//                             alt="Dry Tomato Bowl"
//                             width={256}
//                             height={256}
//                             className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.08)]"
//                         />
//                     </div>

//                     {/* Text and CTA buttons */}
//                     <div className="space-y-5">
//                         <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-bold text-[#2a2521] leading-[1.17] tracking-tight font-poppins">
//                             Bring Home <br />
//                             Real Tomato Goodness
//                         </h2>
//                         <p className="text-sm sm:text-base text-[#554d45] font-semibold max-w-sm">
//                             Experience authentic sun-dried flavor in every bite.
//                         </p>
//                         <div className="flex flex-row justify-center sm:justify-start gap-4 pt-2">
//                             <a
//                                 href="/product"
//                                 className="group/btn relative overflow-hidden bg-[#a50808] border-2 border-[#a50808] text-white px-8 py-3.5 rounded-xl text-xs font-extrabold tracking-widest uppercase hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 shadow-[0_6px_20px_rgba(235,0,41,0.12)] hover:shadow-[0_8px_25px_rgba(235,0,41,0.22)] active:shadow-[0_4px_12px_rgba(235,0,41,0.15)] cursor-pointer z-10"
//                             >
//                                 <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[125%] aspect-square rounded-t-[50%] bg-white translate-y-full transition-transform duration-[750ms] ease-in-out z-0 group-hover/btn:translate-y-[12%]" />
//                                 <span className="relative z-10 transition-colors duration-300 group-hover/btn:text-[#a50808]">
//                                     SHOP NOW
//                                 </span>
//                             </a>
//                             <a
//                                 href="/contact"
//                                 className="group/btn2 relative overflow-hidden bg-transparent border-2 border-[#2a2521] text-[#2a2521] px-8 py-3.5 rounded-xl text-xs font-extrabold tracking-widest uppercase hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer z-10"
//                             >
//                                 <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[125%] aspect-square rounded-t-[50%] bg-[#2a2521] translate-y-full transition-transform duration-[750ms] ease-in-out z-0 group-hover/btn2:translate-y-[12%]" />
//                                 <span className="relative z-10 transition-colors duration-300 group-hover/btn2:text-white">
//                                     CONTACT US
//                                 </span>
//                             </a>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Right Half: jaarwithdrytomato (jaarwithdrytomato.png) touching the right edge */}
//                 <div className="w-full h-full min-h-[300px] lg:min-h-[400px] relative flex justify-end items-stretch z-15">
//                     <Image
//                         src="/alldishes.png"
//                         alt="Jar with Dry Tomatoes"
//                         fill
//                         sizes="(max-width: 1024px) 100vw, 50vw"
//                         className="w-full h-full object-cover object-left"
//                     />
//                 </div>

//             </div>

//         </section>
//     );
// }


"use client";

import Image from "next/image";

export default function PreFooterBanner() {
    return (
        <section className="relative w-full flex bg-surface justify-between items-center overflow-hidden">
            {/* Background Botanical Line Art */}
            <div className="absolute left-0 top-0 h-full w-[30%] pointer-events-none select-none opacity-15">
            </div>
            <div className="absolute right-0 top-0 h-full w-[30%] pointer-events-none select-none opacity-15">
            </div>

            {/* Floating Organic Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
                <div className="absolute left-[3%] top-[25%] w-10 h-10 rotate-[15deg] opacity-90 transition-transform duration-500 hover:rotate-[30deg]">
                </div>
            </div>

            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center px-4 sm:pl-12 lg:pl-24 sm:pr-0 relative z-10">

                {/* Left Half */}
                <div className="flex flex-col sm:flex-row items-center gap-6 lg:gap-8 text-center sm:text-left py-10 sm:py-12 md:py-16 z-20">
                    <div className="relative w-36 h-36 xs:w-44 xs:h-44 sm:w-56 sm:h-56 lg:w-64 lg:h-64 shrink-0 flex items-center justify-center group/jar">
                        <div className="absolute w-44 h-44 sm:w-60 sm:h-60 bg-sage/20 rounded-full filter blur-xl -z-10 group-hover:scale-110 transition-transform duration-700"></div>
                        <Image
                            src="/dryTomatobowl.png"
                            alt="Dehydrated produce bowl"
                            width={256}
                            height={256}
                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.08)]"
                        />
                    </div>

                    {/* Text and CTA buttons */}
                    <div className="space-y-4 sm:space-y-5 w-full">
                        <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[52px] font-bold text-foreground leading-[1.17] tracking-tight font-sans">
                            Let's Build Your <br />
                            Ingredient Supply.
                        </h2>
                        <p className="text-xs xs:text-sm sm:text-base text-foreground/70 font-semibold max-w-sm mx-auto sm:mx-0">
                            From our farms and selected sources to your kitchen, factory, warehouse or global market.
                        </p>
                        <div className="flex items-center gap-4 justify-center sm:justify-start pt-1 pb-1">
                            <div className="leading-tight">
                                <p className="text-[9px] xs:text-[10px] sm:text-xs text-foreground/50 font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase">
                                    Fruits · Vegetables · Herbs · Powders
                                </p>
                            </div>
                        </div>
                        
                        {/* Button Container */}
                        <div className="flex flex-row items-center justify-center sm:justify-start gap-2 xs:gap-3 sm:gap-4 pt-2 w-full">
                            <a
                                href="/product"
                                className="group/btn relative overflow-hidden bg-forest border-2 border-forest text-white flex-1 sm:flex-none min-w-0 sm:min-w-[200px] px-3 xs:px-4 sm:px-6 py-3 sm:py-3.5 rounded-xl text-[10px] xs:text-xs font-extrabold tracking-[0.08em] sm:tracking-[0.12em] uppercase whitespace-nowrap text-center hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 shadow-[0_6px_20px_rgba(36,56,34,0.12)] hover:shadow-[0_8px_25px_rgba(36,56,34,0.22)] active:shadow-[0_4px_12px_rgba(36,56,34,0.15)] cursor-pointer z-10"
                            >
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[125%] aspect-square rounded-t-[50%] bg-white translate-y-full transition-transform duration-[750ms] ease-in-out z-0 group-hover/btn:translate-y-[12%]" />

                                <span className="relative z-10 whitespace-nowrap transition-colors duration-300 group-hover/btn:text-forest">
                                    EXPLORE PRODUCTS
                                </span>
                            </a>

                            <a
                                href="/quote"
                                className="group/btn2 relative overflow-hidden bg-transparent border-2 border-foreground text-foreground flex-1 sm:flex-none min-w-0 sm:min-w-[200px] px-3 xs:px-4 sm:px-6 py-3 sm:py-3.5 rounded-xl text-[10px] xs:text-xs font-extrabold tracking-[0.08em] sm:tracking-[0.12em] uppercase whitespace-nowrap text-center hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer z-10"
                            >
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[125%] aspect-square rounded-t-[50%] bg-foreground translate-y-full transition-transform duration-[750ms] ease-in-out z-0 group-hover/btn2:translate-y-[12%]" />

                                <span className="relative z-10 whitespace-nowrap transition-colors duration-300 group-hover/btn2:text-white">
                                    REQUEST A QUOTE
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Half */}
                <div className="w-full h-full min-h-[300px] lg:min-h-[400px] relative flex justify-end items-stretch z-15">
                    <Image
                        src="/alldishes.png"
                        alt="Dishes made with Drymato ingredients"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="w-full h-full object-cover object-left"
                    />
                </div>

            </div>

        </section>
    );
}