import ProductDetailClient from "./ProductDetailClient";

// No generateStaticParams: slugs are not known at build time. Any /product/[slug]
// is rendered on request, and ProductDetailClient fetches that product from the backend.

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const title = slug
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");

    return {
        title: `${title} | Drymato Bulk & Wholesale Supply`,
        description: `Source premium ${title} in bulk from Drymato. 100% natural, sun-dried, no preservatives. Get wholesale pricing and MOQ details.`,
        openGraph: {
            title: `${title} | Drymato Bulk & Wholesale Supply`,
            description: `Source premium ${title} in bulk from Drymato. 100% natural, sun-dried, no preservatives.`,
            images: ["/drymato-logo.png"],
        }
    };
}

export default async function ProductDetailPage({ params }) {
    const { slug } = await params;
    return <ProductDetailClient slug={slug} />;
}