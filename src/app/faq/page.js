import FaqClient from "./FaqClient";

export const metadata = {
    title: "Frequently Asked Questions (FAQ) | Drymato Premium Dehydrated Ingredients",
    description: "Find answers to frequently asked questions about Drymato's premium sun-dried tomatoes, custom B2B bulk packaging options, global export operations, HoReCa distributions, and upcoming dehydrated products.",
    openGraph: {
        title: "Frequently Asked Questions (FAQ) | Drymato Premium Dehydrated Ingredients",
        description: "Find answers to frequently asked questions about Drymato's premium sun-dried tomatoes, custom B2B bulk packaging options, global export operations, HoReCa distributions, and upcoming dehydrated products.",
        images: ["/drymato-logo.png"],
    }
};

export default function FAQ() {
    return (
        <main className="flex-1 bg-background min-h-screen relative">
            <FaqClient />
        </main>
    );
}