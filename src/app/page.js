import HomeClient from "./HomeClient";

export const metadata = {
  title: "Drymato | Premium Sun-Cured Tomato Products",
  description: "Experience the premium standard of Drymato. Sun-cured slowly in state-of-the-art sun tunnels, our tomatoes bring rich natural umami flavor, zero waste, and shelf stability to commercial kitchens and home gourmets alike.",
  keywords: ["Drymato", "sun-cured tomatoes", "sun-dried tomatoes", "premium tomatoes", "kitchen efficiency", "organic tomatoes", "umami flavor"],
  openGraph: {
    title: "Drymato | Premium Sun-Cured Tomato Products",
    description: "Experience the premium standard of Drymato. Sun-cured slowly in state-of-the-art sun tunnels, our tomatoes bring rich natural umami flavor, zero waste, and shelf stability to commercial kitchens and home gourmets alike.",
    url: "/",
    siteName: "Drymato",
    images: [
      {
        url: "/tomatoDry-spreadoutside.png",
        width: 1200,
        height: 630,
        alt: "Drymato Gourmet Sun-Cured Tomatoes",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drymato | Premium Sun-Cured Tomato Products",
    description: "Experience the premium standard of Drymato. Sun-cured slowly in state-of-the-art sun tunnels, our tomatoes bring rich natural umami flavor, zero waste, and shelf stability to commercial kitchens and home gourmets alike.",
    images: ["/tomatoDry-spreadoutside.png"],
  },
};

export default function Home() {
  return <HomeClient />;
}
