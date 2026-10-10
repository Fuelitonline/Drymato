// ---- Single source of truth for every product that actually has a page. ----
// Add a product here and it automatically appears in: the /product grid,
// the navbar mega-menu, and gets its own statically-built /product/[slug] page.
// Nothing else in the codebase should define product data independently.

export const slugify = (str) =>
    str
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

// ---- Category metadata: display label + mega-menu background image per group ----
export const CATEGORY_META = {
    "dehydrated-vegetables": { label: "Dehydrated Vegetables", bgImage: "/images/categories/dried-vegetables.png" },
    "dehydrated-fruits": { label: "Dehydrated Fruits", bgImage: "/images/categories/dried-fruits.png" },
    "vegetable-powders": { label: "Vegetable Powders", bgImage: "/images/categories/vegetable-powder.png" },
    "fruit-powders": { label: "Fruit Powders", bgImage: "/images/categories/fruit-powder.png" },
};

// ---- Product types (format filter on the listing page) ----
export const PRODUCT_TYPES = [
    { key: "all", label: "All Types" },
    { key: "whole-sliced", label: "Whole & Sliced" },
    { key: "powder", label: "Powder" },
    { key: "marinated", label: "Marinated" },
];

// ---- The real, existing products — copied exactly from the current catalog ----
export const PRODUCTS = [
    {
        id: 1,
        title: "Dehydrated Tomatoes",
        subtitle: "(Small Jar)",
        image: "/jaar/jaarslightroatateview.png",
        hoverImage: "/dry-tomato-jaarspread.png",
        feature: "100% Natural",
        group: "dehydrated-vegetables",
        type: "whole-sliced",
        description: "Plump, sun-ripened tomatoes dehydrated and seasoned in our signature recipe, packed in a convenient small jar."
    },
    {
        id: 2,
        title: "Onion Powder",
        subtitle: "(Big Jar)",
        image: "/onion_powder-removebg.png",
        hoverImage: "/dry-tomato-jaarspread.png",
        feature: "Rich Onion Flavor",
        group: "vegetable-powders",
        type: "powder",
        description: "Premium onion powder made from carefully dehydrated onions, delivering a rich aroma and savory taste. Perfect for curries, soups, sauces, marinades, snacks, and everyday cooking."
    },
    {
        id: 3,
        title: "Olive Oil Marinated",
        subtitle: "(Small Jar)",
        image: "/jaar/oliver-oil-smalljaar.png",
        hoverImage: "/jaar/oiled-opened-jaarSpread.png",
        feature: "Extra Virgin Olive Oil",
        group: "dehydrated-vegetables",
        type: "marinated",
        description: "Succulent dried tomatoes marinated with extra virgin olive oil and Mediterranean herbs in a small jar."
    },
    {
        id: 4,
        title: "Garlic Powder",
        subtitle: "(Big Jar)",
        image: "/garlic_powder-removebg.png",
        hoverImage: "/jaar/oiled-opened-jaarSpread.png",
        feature: "100% Pure Garlic",
        group: "vegetable-powders",
        type: "powder",
        description: "Premium garlic powder made from carefully selected garlic cloves, delivering rich aroma and authentic flavor for cooking, marinades, sauces, soups, and everyday recipes."
    },
    {
        id: 5,
        title: "Sunflower Oil Marinated",
        subtitle: "(Small Jar)",
        image: "/jaar/sunflower-oil-smalljaar.png",
        hoverImage: "/jaar/sunflower-oil-spreadoutside.png",
        feature: "Pure Sunflower Oil",
        group: "dehydrated-vegetables",
        type: "marinated",
        description: "Delicately marinated sun-dried tomatoes in premium sunflower oil, packed in a small jar."
    },
    {
        id: 7,
        title: "Powdered Tomato",
        subtitle: "(Seasoning Powder)",
        image: "/jaar/powder-pouch-removebg.png",
        hoverImage: "/jaar/powder-pouch-removebg.png",
        feature: "100% Tomato Powder",
        group: "vegetable-powders",
        type: "powder",
        description: "Concentrated sun-dried tomato powder, perfect for gourmet kitchen seasoning and cooking."
    },
    {
        id: 8,
        title: "Dehydrated Onion",
        subtitle: "(Premium Dried)",
        image: "/upcomming-dried_onion.png",
        hoverImage: "/upcomming-dried_onion.png",
        feature: "100% Dehydrated",
        group: "dehydrated-vegetables",
        type: "whole-sliced",
        description: "Finely sliced premium dehydrated onions, perfect for instant kitchen use and long-term shelf stability."
    },
    {
        id: 9,
        title: "Dehydrated Carrot",
        subtitle: "(Sweet Slices)",
        image: "/upcomming-dried-carrot.png",
        hoverImage: "/upcomming-dried-carrot.png",
        feature: "Nutrient Rich",
        group: "dehydrated-vegetables",
        type: "whole-sliced",
        description: "Fresh farm carrots slowly dried to preserve vitamins, offering rich sweetness and culinary texture."
    },
    {
        id: 10,
        title: "Dehydrated Garlic",
        subtitle: "(Aromatic Cloves)",
        image: "/upcomming-dried-garlic.png",
        hoverImage: "/upcomming-dried-garlic.png",
        feature: "Aromatic & Pure",
        group: "dehydrated-vegetables",
        type: "whole-sliced",
        description: "Aromatic dehydrated garlic cloves, ready to infuse your gourmet recipes with robust, intense flavor."
    },
    {
        id: 11,
        title: "Dehydrated Okra Pieces",
        subtitle: "(Pre-sliced Cuts)",
        image: "/upcomming-dried-okra-pieces.png",
        hoverImage: "/upcomming-dried-okra-pieces.png",
        feature: "Vitamins Preserved",
        group: "dehydrated-vegetables",
        type: "whole-sliced",
        description: "Crisp and fresh pre-sliced okra pieces, dehydrated carefully to retain color and structural texture."
    },
    {
        id: 12,
        title: "Dehydrated Okra",
        subtitle: "(Whole Green Okra)",
        image: "/upcomming-dried-okra.png",
        hoverImage: "/upcomming-dried-okra.png",
        feature: "100% Natural",
        group: "dehydrated-vegetables",
        type: "whole-sliced",
        description: "Whole premium green okra, slowly dried under controlled temperatures for prep-free cooking convenience."
    },
    {
        id: 13,
        title: "Mixed Dehydrated Veggies",
        subtitle: "(Gourmet Blend)",
        image: "/upcomming-mix-dried-upcomming.png",
        hoverImage: "/upcomming-mix-dried-upcomming.png",
        feature: "Seasonal Vegetables",
        group: "dehydrated-vegetables",
        type: "whole-sliced",
        description: "A colorful, nutritious blend of seasonal dehydrated vegetables, perfect for instant soups and stews."
    },
    {
        id: 14,
        title: "Dehydrated Beetroot",
        subtitle: "(Vibrant Slices)",
        image: "/upcooming-dried-beetroot.png",
        hoverImage: "/upcooming-dried-beetroot.png",
        feature: "Superfood Beetroot",
        group: "dehydrated-vegetables",
        type: "whole-sliced",
        description: "Vibrant and sweet dehydrated beetroot slices, packed with healthy antioxidants and natural color."
    }
].map((p) => ({ ...p, slug: slugify(p.title), href: `/product/${slugify(p.title)}` }));

// ---- Derived data — never edit these by hand, they're always computed from PRODUCTS above ----

// Every slug that must be pre-built. Used by /product/[slug]/page.js's generateStaticParams.
export const ALL_PRODUCT_SLUGS = PRODUCTS.map((p) => p.slug);

// Look up one product by slug. Returns null if it doesn't exist — callers must handle that.
export function getProductBySlug(slug) {
    return PRODUCTS.find((p) => p.slug === slug) || null;
}

// Category filter options for the listing page's dropdown.
export const CATEGORIES = [
    { key: "all", label: "All Products" },
    ...Object.entries(CATEGORY_META).map(([key, meta]) => ({ key, label: meta.label })),
];

// Mega-menu data — built FROM the real catalog above, grouped by category.
// This can never contain a product that doesn't have a real page, because it's
// generated from the exact same array that generateStaticParams uses.
export const PRODUCT_CATEGORIES_FOR_MENU = Object.entries(CATEGORY_META).map(([key, meta]) => ({
    key,
    label: meta.label,
    bgImage: meta.bgImage,
    items: PRODUCTS
        .filter((p) => p.group === key)
        .map((p) => ({ name: p.title, href: p.href })),
}));