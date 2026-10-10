import ExportClient from "./ExportClient";

export const metadata = {
    title: "Premium Dehydrated Ingredients & Sun-Dried Tomatoes Export | Drymato B2B",
    description: "Partner with Drymato for premium B2B sun-dried tomatoes and dehydrated ingredients. Scalable bulk supply, private labeling, and global export operations for HoReCa and food brands.",
    openGraph: {
        title: "Premium Dehydrated Ingredients & Sun-Dried Tomatoes Export | Drymato B2B",
        description: "Partner with Drymato for premium B2B sun-dried tomatoes and dehydrated ingredients. Scalable bulk supply, private labeling, and global export operations for HoReCa and food brands.",
        images: ["/drymato-logo.png"],
    }
};

export default function ExportPage() {
    return <ExportClient />;
}
