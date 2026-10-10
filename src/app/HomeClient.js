"use client";
import dynamic from "next/dynamic";
import { useState, useEffect, useRef } from "react";
import HeroSection from "@/components/heroSection";
import CategorySection from "@/components/CategoryCardSection";

const WhatDrymatoDoes = dynamic(() => import("@/components/WhatDrymatoDoes"));
const OurSourcing = dynamic(() => import("@/components/ourSourcing"));
const OurProducts = dynamic(() => import("@/components/ourProducts"));
const ManufacturingSection = dynamic(() => import("@/components/ManufacturingSection"));
const WhyDehydratedIngrediants = dynamic(() => import("@/components/WhyDehydratedIngredients"));
const BulkSupply = dynamic(() => import("@/components/BulkSupply"));
const Creation = dynamic(() => import("@/components/creation"));
const HomeAbout = dynamic(() => import("@/components/homeAbout"));
const IndustriesSection = dynamic(() => import("@/components/IndustriesSection"));
const UsesDrymatos = dynamic(() => import("@/components/usesDrymatos"));
const FounderStorySection = dynamic(() => import("@/components/FounderStorySection"));
const SpecialBanner = dynamic(() => import("@/components/SpecialBanner"));
const ManufacturingPartnerSection = dynamic(() => import("@/components/ManufacturingPartnerSection"));
const Reviews = dynamic(() => import("@/components/reviews"));
const BusinessCTASection = dynamic(() => import("@/components/BusinessCTA"));
const PreFooterBanner = dynamic(() => import("@/components/PreFooterBanner"));
const WhyDrymatos = dynamic(() => import("@/components/whyDrymato"));

export default function HomeClient() {
  // const [introActive, setIntroActive] = useState(true);
  // const [isFading, setIsFading] = useState(false);
  // const [needsInteraction, setNeedsInteraction] = useState(false);
  // const videoRef = useRef(null);

  // Play video on mount
  // useEffect(() => {
  //   const playTimer = setTimeout(() => {
  //     if (videoRef.current) {
  //       // We attempt to play the video with audio (muted=false)
  //       videoRef.current.play().catch((err) => {
  //         console.log("Autoplay with audio blocked. Showing play interaction overlay:", err);
  //         setNeedsInteraction(true);
  //       });
  //     }
  //   }, 150);

  //   // Safety fallback: if video fails to play or gets stuck, skip intro after 10 seconds
  //   const fallbackTimer = setTimeout(() => {
  //     startFadeOut();
  //   }, 10000);

  //   return () => {
  //     clearTimeout(playTimer);
  //     clearTimeout(fallbackTimer);
  //   };
  // }, []);

  // const startFadeOut = () => {
  //   setIsFading(true);
  //   setTimeout(() => {
  //     setIntroActive(false);
  //   }, 1000); // matches transition duration
  // };

  // const handlePlayWithInteraction = () => {
  //   if (videoRef.current) {
  //     videoRef.current.play()
  //       .then(() => {
  //         setNeedsInteraction(false);
  //       })
  //       .catch((err) => {
  //         console.error("Play failed even with interaction:", err);
  //         startFadeOut();
  //       });
  //   }
  // };

  // const handleSkip = () => {
  //   startFadeOut();
  // };

  // const handleEnded = () => {
  //   startFadeOut();
  // };

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        /* Custom thin red scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #F6F1E6;
        }
        ::-webkit-scrollbar-thumb {
          background: #243822;
          border-radius: 9999px;
          border: 2px solid #F6F1E6;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #38512F;
        }
        html {
          scrollbar-width: thin;
          scrollbar-color: #243822 #F6F1E6;
        }
      `}} />

      {/* {introActive && (
        <div className={\`fixed inset-0 w-full h-full bg-[#0d0d0d] z-[9999] flex items-center justify-center overflow-hidden transition-all duration-1000 ease-in-out \${
          isFading ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"
        }\`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(227,28,37,0.12)_0%,rgba(13,13,13,1)_80%)] pointer-events-none" />

          <button
            onClick={handleSkip}
            className="absolute top-6 right-6 md:top-8 md:right-8 px-6 py-2.5 rounded-full bg-black hover:bg-[#1a1a1a] border border-white/20 hover:border-white/40 text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer z-50"
          >
            Skip Intro ➜
          </button>

          <div className="absolute inset-0 w-full h-full bg-black flex items-center justify-center">
            <video
              ref={videoRef}
              src="/logo-vidio.mp4"
              className="w-full h-full object-cover"
              playsInline
              onEnded={handleEnded}
            />

            
          </div>
        </div>
      )} */}

      {/* Main Page Content */}
      {/* <div className={\`transition-all duration-1000 ease-out \${isFading || !introActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
        }\`}> */}
      <HeroSection />
      <WhatDrymatoDoes />
      <OurSourcing />
      <CategorySection />
      <OurProducts />
      <ManufacturingSection />
      <WhyDehydratedIngrediants />
      <BulkSupply />
      <WhyDrymatos />
      <HomeAbout />
      <IndustriesSection />
      <ManufacturingPartnerSection />
      <FounderStorySection />
      {/* <UsesDrymatos /> */}
      {/* <Creation /> */}
      <Reviews />
      <SpecialBanner />
      <BusinessCTASection />
      <PreFooterBanner />
      {/* <Footer /> */}
      {/* </div> */}
    </>
  );
}



