// "use client";

// import { useState, useEffect, useMemo, useRef } from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";
// import CartSidebar from "@/components/CartSidebar";
// import { PRODUCTS as AVAILABLE_PRODUCTS, CATEGORIES, PRODUCT_TYPES } from "@/lib/product";
// import { useCart } from "@/context/CartContext";

// const SORT_OPTIONS = [
//     { key: "default", label: "Default" },
//     { key: "name-asc", label: "Name: A to Z" },
//     { key: "name-desc", label: "Name: Z to A" },
// ];

// const PAGE_SIZE = 9;

// function FilterDropdown({ label, activeLabel, options, activeKey, onSelect }) {
//     const [open, setOpen] = useState(false);
//     const ref = useRef(null);

//     useEffect(() => {
//         const handleClickOutside = (e) => {
//             if (ref.current && !ref.current.contains(e.target)) {
//                 setOpen(false);
//             }
//         };
//         document.addEventListener("mousedown", handleClickOutside);
//         return () => document.removeEventListener("mousedown", handleClickOutside);
//     }, []);

//     return (
//         <div className="relative" ref={ref}>
//             <button
//                 onClick={() => setOpen((o) => !o)}
//                 className="flex items-center gap-1.5 text-sm font-semibold text-forest hover:text-brick transition-colors cursor-pointer whitespace-nowrap"
//             >
//                 {label}
//                 {activeLabel && <span className="text-brick font-bold">· {activeLabel}</span>}
//                 <svg
//                     className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
//                     fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
//                 >
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//                 </svg>
//             </button>

//             {open && (
//                 <div className="absolute left-0 top-full mt-3 w-64 bg-surface border border-sage/25 rounded-xl shadow-[0_12px_32px_rgba(36,56,34,0.12)] py-2 z-40">
//                     {options.map((opt) => {
//                         const isActive = activeKey === opt.key;
//                         return (
//                             <button
//                                 key={opt.key}
//                                 onClick={() => {
//                                     onSelect(opt.key);
//                                     setOpen(false);
//                                 }}
//                                 className={`w-full flex items-center justify-between text-left px-4 py-2.5 text-sm transition-colors cursor-pointer ${isActive ? "text-brick font-bold bg-brick/5" : "text-foreground/80 hover:bg-sage/10"
//                                     }`}
//                             >
//                                 {opt.label}
//                                 {opt.count !== undefined && (
//                                     <span className="text-xs text-foreground/40">{opt.count}</span>
//                                 )}
//                             </button>
//                         );
//                     })}
//                 </div>
//             )}
//         </div>
//     );
// }

// export default function ProductClient() {
//     const router = useRouter();
//     const [activeCategory, setActiveCategory] = useState("all");
//     const [activeType, setActiveType] = useState("all");
//     const [searchQuery, setSearchQuery] = useState("");
//     const [sortBy, setSortBy] = useState("default");
//     const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

//     const { addItem } = useCart();

//     useEffect(() => {
//         const observerOptions = { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.05 };
//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     entry.target.classList.add("is-revealed");
//                     observer.unobserve(entry.target);
//                 }
//             });
//         }, observerOptions);
//         const els = document.querySelectorAll(".reveal-fade-up");
//         els.forEach((el) => observer.observe(el));
//         return () => els.forEach((el) => observer.unobserve(el));
//     }, [activeCategory, activeType, searchQuery, sortBy, visibleCount]);

//     // Reset pagination whenever filters change
//     useEffect(() => {
//         setVisibleCount(PAGE_SIZE);
//     }, [activeCategory, activeType, searchQuery, sortBy]);

//     const filteredProducts = useMemo(() => {
//         let result = AVAILABLE_PRODUCTS;

//         if (activeCategory !== "all") {
//             result = result.filter((p) => p.group === activeCategory);
//         }
//         if (activeType !== "all") {
//             result = result.filter((p) => p.type === activeType);
//         }
//         if (searchQuery.trim()) {
//             const q = searchQuery.trim().toLowerCase();
//             result = result.filter((p) => p.title.toLowerCase().includes(q));
//         }
//         if (sortBy === "name-asc") {
//             result = [...result].sort((a, b) => a.title.localeCompare(b.title));
//         } else if (sortBy === "name-desc") {
//             result = [...result].sort((a, b) => b.title.localeCompare(a.title));
//         }
//         return result;
//     }, [activeCategory, activeType, searchQuery, sortBy]);

//     const visibleProducts = filteredProducts.slice(0, visibleCount);
//     const hasMore = visibleCount < filteredProducts.length;

//     const categoryOptions = CATEGORIES.map((c) => ({
//         key: c.key,
//         label: c.label,
//         count: c.key === "all" ? AVAILABLE_PRODUCTS.length : AVAILABLE_PRODUCTS.filter((p) => p.group === c.key).length,
//     }));

//     const typeOptions = PRODUCT_TYPES.map((t) => ({
//         key: t.key,
//         label: t.label,
//         count: t.key === "all" ? AVAILABLE_PRODUCTS.length : AVAILABLE_PRODUCTS.filter((p) => p.type === t.key).length,
//     }));

//     const addToCart = (product) => addItem(product);

//     const activeCategoryLabel = CATEGORIES.find((c) => c.key === activeCategory)?.label;
//     const activeTypeLabel = PRODUCT_TYPES.find((t) => t.key === activeType)?.label;

//     return (
//         <div className="bg-white">
//             <style dangerouslySetInnerHTML={{
//                 __html: `
//                 .reveal-fade-up {
//                     opacity: 0;
//                     transform: translateY(50px);
//                     transition: opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
//                 }
//                 .reveal-fade-up.is-revealed {
//                     opacity: 1;
//                     transform: translate(0);
//                 }
//                 .no-scrollbar::-webkit-scrollbar { display: none; }
//                 .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
//             `}} />

//             {/* ===================== HERO SECTION (compact) ===================== */}
//             <section className="relative w-full overflow-hidden">
//                 <div className="relative w-full h-[38vh] sm:h-[42vh] lg:h-[46vh] min-h-[280px]">
//                     <Image
//                         src="/product-hero-banner.png"
//                         alt="Drymato Dehydrated Products"
//                         fill
//                         priority
//                         className="object-cover object-center"
//                     />
//                 </div>

//                 <div className="absolute inset-0 flex items-center">
//                     <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full">
//                         <div className="reveal-fade-up max-w-md sm:max-w-lg">
//                             <p className="text-brick text-[11px] sm:text-xs uppercase tracking-[0.25em] font-bold mb-3">
//                                 Farm Fresh &nbsp;·&nbsp; Sun Dried
//                             </p>

//                             <h1 className="font-serif text-forest text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tight mb-3">
//                                 Pure &amp; Natural,
//                                 <br />
//                                 <span className="italic font-medium text-brick">Dehydrated Goodness.</span>
//                             </h1>

//                             <p className="text-foreground/80 text-sm font-medium leading-relaxed max-w-sm mb-4">
//                                 Crafted the traditional way, with no preservatives and no shortcuts.
//                             </p>

//                             <Link
//                                 href="/contact"
//                                 className="group relative overflow-hidden inline-flex bg-forest text-white pl-6 pr-2 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide items-center gap-3 transition-all duration-300 no-underline shadow-[0_4px_20px_rgba(36,56,34,0.3)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
//                             >
//                                 <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[125%] aspect-square rounded-t-[50%] bg-white translate-y-full transition-transform duration-[750ms] ease-in-out z-0 group-hover:translate-y-[12%]" />
//                                 <span className="relative z-10 transition-colors duration-300 group-hover:text-forest">
//                                     Enquire Now
//                                 </span>
//                                 <span className="relative z-10 w-7 h-7 bg-white text-forest rounded-full flex items-center justify-center shadow-sm transform group-hover:translate-x-1 group-hover:bg-forest group-hover:text-white transition-all duration-300">
//                                     <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8m0 0-3-3m3 3-3 3" />
//                                     </svg>
//                                 </span>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* ===================== STICKY FILTER STRIP ===================== */}
//             <div className="sticky top-[76px] z-30 bg-background border-b border-sage/20">
//                 <div className="max-w-7xl mx-auto px-6 py-4">
//                     <div className="flex flex-col lg:flex-row lg:items-center gap-4">
//                         {/* Dropdown filters — no overflow-x-auto here, since that forces overflow-y to clip too and hides the dropdown menu */}
//                         <div className="flex items-center flex-wrap gap-8 lg:flex-1">
//                             <FilterDropdown
//                                 label="Category"
//                                 activeLabel={activeCategory !== "all" ? activeCategoryLabel : null}
//                                 options={categoryOptions}
//                                 activeKey={activeCategory}
//                                 onSelect={setActiveCategory}
//                             />
//                             <FilterDropdown
//                                 label="Type"
//                                 activeLabel={activeType !== "all" ? activeTypeLabel : null}
//                                 options={typeOptions}
//                                 activeKey={activeType}
//                                 onSelect={setActiveType}
//                             />
//                         </div>

//                         {/* Search + Sort */}
//                         <div className="flex items-center gap-5 shrink-0">
//                             <div className="relative">
//                                 <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                                     <circle cx="11" cy="11" r="7" />
//                                     <path strokeLinecap="round" d="m20 20-3-3" />
//                                 </svg>
//                                 <input
//                                     type="text"
//                                     value={searchQuery}
//                                     onChange={(e) => setSearchQuery(e.target.value)}
//                                     placeholder="Search e.g. Tomato, Garlic..."
//                                     className="pl-9 pr-4 py-2 w-44 sm:w-64 rounded-lg bg-background border border-sage/25 text-xs sm:text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-forest/20 transition-all"
//                                 />
//                             </div>

//                             <div className="flex items-center gap-1.5 text-sm text-foreground/60 shrink-0">
//                                 <span className="hidden sm:inline">Sort by:</span>
//                                 <select
//                                     value={sortBy}
//                                     onChange={(e) => setSortBy(e.target.value)}
//                                     className="font-semibold text-forest bg-transparent focus:outline-none cursor-pointer"
//                                 >
//                                     {SORT_OPTIONS.map((opt) => (
//                                         <option key={opt.key} value={opt.key}>{opt.label}</option>
//                                     ))}
//                                 </select>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* ===================== PRODUCTS GRID ===================== */}
//             <section className="relative w-full pb-20 sm:pb-24">
//                 <div className="max-w-7xl mx-auto px-6">
//                     <p className="reveal-fade-up text-foreground/60 text-sm mt-8 mb-8">
//                         Showing {visibleProducts.length} of {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
//                     </p>

//                     {visibleProducts.length > 0 ? (
//                         <>
//                             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                                 {visibleProducts.map((product, index) => (
//                                     <div
//                                         key={product.id}
//                                         className="reveal-fade-up"
//                                         style={{ transitionDelay: `${(index % 3) * 120}ms` }}
//                                     >
//                                         <div
//                                             onClick={() => router.push(product.href)}
//                                             className="group relative bg-white rounded-tl-[48px] rounded-br-[48px] rounded-tr-none rounded-bl-none border border-sage/20 overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(36,56,34,0.10)] flex flex-col h-full cursor-pointer"
//                                         >
//                                             {/* Image container - dual image hover swap */}
//                                             <div className="relative w-full h-72 sm:h-80 bg-background flex items-center justify-center p-6 overflow-hidden">
//                                                 <Image
//                                                     src={product.image}
//                                                     alt={product.title}
//                                                     width={180}
//                                                     height={180}
//                                                     className="absolute max-w-[70%] max-h-[70%] w-auto h-auto object-contain transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0"
//                                                 />
//                                                 <Image
//                                                     src={product.hoverImage || product.image}
//                                                     alt={`${product.title} alternate view`}
//                                                     width={180}
//                                                     height={180}
//                                                     className="absolute max-w-[70%] max-h-[70%] w-auto h-auto object-contain transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
//                                                 />
//                                             </div>

//                                             {/* Content */}
//                                             <div className="flex flex-col flex-grow px-5 pt-4 pb-5">
//                                                 <div className="min-h-[80px]">
//                                                     <h4 className="font-serif text-lg sm:text-xl font-bold text-forest leading-snug mb-1 group-hover:text-brick transition-colors duration-300">
//                                                         {product.title}
//                                                     </h4>
//                                                     {product.subtitle && (
//                                                         <p className="text-foreground/40 text-xs font-medium mb-2.5">
//                                                             {product.subtitle}
//                                                         </p>
//                                                     )}
//                                                     <div className="flex items-center gap-1.5 text-brick text-xs font-semibold">
//                                                         <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
//                                                             <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
//                                                         </svg>
//                                                         <span>{product.feature}</span>
//                                                     </div>
//                                                 </div>

//                                                 {/* CTAs */}
//                                                 <div className="mt-4 flex items-center gap-2.5">
//                                                     <button
//                                                         onClick={(e) => {
//                                                             e.stopPropagation();
//                                                             addToCart(product);
//                                                         }}
//                                                         className="flex-1 text-[11px] sm:text-xs font-bold tracking-wide uppercase py-2.5 px-3 rounded-lg border-2 border-forest text-forest hover:bg-forest hover:text-white transition-all duration-300 cursor-pointer"
//                                                     >
//                                                         Add to Cart
//                                                     </button>

//                                                     <Link
//                                                         href="/contact"
//                                                         onClick={(e) => e.stopPropagation()}
//                                                         className="group/btn relative overflow-hidden flex-1 bg-forest border-2 border-forest text-white py-2.5 pl-4 pr-1.5 rounded-lg text-[11px] sm:text-xs font-bold tracking-wide uppercase flex items-center justify-center gap-2 transition-all duration-300 no-underline cursor-pointer"
//                                                     >
//                                                         <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[125%] aspect-square rounded-t-[50%] bg-white translate-y-full transition-transform duration-[750ms] ease-in-out z-0 group-hover/btn:translate-y-[12%]" />
//                                                         <span className="relative z-10 transition-colors duration-300 group-hover/btn:text-forest">
//                                                             Enquire
//                                                         </span>
//                                                         <span className="relative z-10 w-5 h-5 bg-white text-forest rounded-full flex items-center justify-center shrink-0 shadow-sm transform group-hover/btn:translate-x-0.5 group-hover/btn:bg-forest group-hover/btn:text-white transition-all duration-300">
//                                                             <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
//                                                                 <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8m0 0-3-3m3 3-3 3" />
//                                                             </svg>
//                                                         </span>
//                                                     </Link>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>

//                             {hasMore && (
//                                 <div className="reveal-fade-up flex justify-center mt-14">
//                                     <button
//                                         onClick={() => setVisibleCount((v) => v + PAGE_SIZE)}
//                                         className="px-8 py-3 rounded-full border-2 border-forest text-forest text-sm font-bold tracking-wide uppercase hover:bg-forest hover:text-white transition-all duration-300 cursor-pointer"
//                                     >
//                                         View More
//                                     </button>
//                                 </div>
//                             )}
//                         </>
//                     ) : (
//                         <div className="reveal-fade-up text-center py-20">
//                             <p className="text-foreground/60 text-base sm:text-lg font-medium">
//                                 No products match your filters. Try adjusting your search.
//                             </p>
//                         </div>
//                     )}
//                 </div>
//             </section>

//         </div>
//     );
// }



// "use client";

// import { useState, useEffect, useMemo, useRef } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import useNavigation from "@/lib/useNavigation";
// import Image from "next/image";
// import Link from "next/link";
// import CartSidebar from "@/components/CartSidebar";
// import { useCart } from "@/context/CartContext";

// const SORT_OPTIONS = [
//     { key: "default", label: "Default" },
//     { key: "name-asc", label: "Name: A to Z" },
//     { key: "name-desc", label: "Name: Z to A" },
// ];

// const PAGE_SIZE = 9;

// const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
// const STORE_DOMAIN = "Drymato";
// const FALLBACK_IMAGE = "/drymato-logo.png";

// // Type filter (format based) — options with zero products are hidden automatically
// const PRODUCT_TYPES = [
//     { key: "all", label: "All Types" },
//     { key: "whole-sliced", label: "Whole & Sliced" },
//     { key: "powder", label: "Powder" },
//     { key: "marinated", label: "Marinated" },
// ];

// const slugify = (str) =>
//     str
//         .toLowerCase()
//         .replace(/[^a-z0-9]+/g, "-")
//         .replace(/(^-|-$)/g, "");

// const norm = (s) => String(s || "").trim().toLowerCase();

// const isRemote = (src) => /^https?:\/\//.test(src);

// const getImageUrl = (img) => (typeof img === "string" ? img : img?.url || null);

// // The API has no "type" field, so it is derived from the sub-category name
// const getProductType = (subCategory = "") => {
//     const s = subCategory.toLowerCase();
//     if (s.includes("powder")) return "powder";
//     if (s.includes("marinat")) return "marinated";
//     return "whole-sliced";
// };

// // Maps one backend product to the shape the cards already use
// const mapProduct = (p) => {
//     const images = (p.images || []).map(getImageUrl).filter(Boolean);
//     const image = images[0] || FALLBACK_IMAGE;
//     const subCategory = p.subCategory?.[0] || "";

//     return {
//         id: p._id,
//         slug: p.slug,
//         title: p.name,
//         subtitle: "",
//         subCategories: (p.subCategory || []).map((s) => (typeof s === "string" ? s : s?.name || "")).filter(Boolean),
//         image,
//         hoverImage: images[1] || image,
//         feature: subCategory || "100% Natural",
//         group: slugify(subCategory),
//         groupLabel: subCategory,
//         type: getProductType(subCategory),
//         description: p.description,
//         href: `/product/${p.slug}`,
//     };
// };

// function FilterDropdown({ label, activeLabel, options, activeKey, onSelect }) {
//     const [open, setOpen] = useState(false);
//     const ref = useRef(null);

//     useEffect(() => {
//         const handleClickOutside = (e) => {
//             if (ref.current && !ref.current.contains(e.target)) {
//                 setOpen(false);
//             }
//         };
//         document.addEventListener("mousedown", handleClickOutside);
//         return () => document.removeEventListener("mousedown", handleClickOutside);
//     }, []);

//     return (
//         <div className="relative" ref={ref}>
//             <button
//                 onClick={() => setOpen((o) => !o)}
//                 className="flex items-center gap-1.5 text-sm font-semibold text-forest hover:text-brick transition-colors cursor-pointer whitespace-nowrap"
//             >
//                 {label}
//                 {activeLabel && <span className="text-brick font-bold">· {activeLabel}</span>}
//                 <svg
//                     className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
//                     fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
//                 >
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//                 </svg>
//             </button>

//             {open && (
//                 <div className="absolute left-0 top-full mt-3 w-64 bg-surface border border-sage/25 rounded-xl shadow-[0_12px_32px_rgba(36,56,34,0.12)] py-2 z-40">
//                     {options.map((opt) => {
//                         const isActive = activeKey === opt.key;
//                         return (
//                             <button
//                                 key={opt.key}
//                                 onClick={() => {
//                                     onSelect(opt.key);
//                                     setOpen(false);
//                                 }}
//                                 className={`w-full flex items-center justify-between text-left px-4 py-2.5 text-sm transition-colors cursor-pointer ${isActive ? "text-brick font-bold bg-brick/5" : "text-foreground/80 hover:bg-sage/10"
//                                     }`}
//                             >
//                                 {opt.label}
//                                 {opt.count !== undefined && (
//                                     <span className="text-xs text-foreground/40">{opt.count}</span>
//                                 )}
//                             </button>
//                         );
//                     })}
//                 </div>
//             )}
//         </div>
//     );
// }

// export default function ProductClient() {
//     const router = useRouter();
//     const searchParams = useSearchParams();
//     const categoryParam = (searchParams.get("category") || "").trim();
//     const { categories: navCategories, loading: navLoading } = useNavigation();
//     const [activeCategory, setActiveCategory] = useState("all");
//     const [activeType, setActiveType] = useState("all");
//     const [searchQuery, setSearchQuery] = useState("");
//     const [sortBy, setSortBy] = useState("default");
//     const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [reloadKey, setReloadKey] = useState(0);

//     const { addItem } = useCart();

//     // ---- Fetch products from backend (client side, so it shows in the Network tab) ----
//     useEffect(() => {
//         const controller = new AbortController();

//         const fetchProducts = async () => {
//             try {
//                 setLoading(true);
//                 setError(null);

//                 let page = 1;
//                 let totalPages = 1;
//                 const all = [];

//                 do {
//                     const res = await fetch(
//                         `${API_BASE_URL}/product/public/store/${STORE_DOMAIN}?page=${page}`,
//                         { signal: controller.signal }
//                     );
//                     if (!res.ok) throw new Error(`Request failed (${res.status})`);

//                     const json = await res.json();
//                     if (!json?.success) throw new Error(json?.message || "Failed to load products");

//                     all.push(...(json.data?.products || []));
//                     totalPages = json.data?.totalPages || 1;
//                     page += 1;
//                 } while (page <= totalPages);

//                 setProducts(all.filter((p) => p.status === "Active").map(mapProduct));
//             } catch (err) {
//                 if (err.name === "AbortError") return;
//                 setError(err.message || "Something went wrong");
//             } finally {
//                 if (!controller.signal.aborted) setLoading(false);
//             }
//         };

//         fetchProducts();
//         return () => controller.abort();
//     }, [reloadKey]);

//     useEffect(() => {
//         const observerOptions = { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.05 };
//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     entry.target.classList.add("is-revealed");
//                     observer.unobserve(entry.target);
//                 }
//             });
//         }, observerOptions);
//         const els = document.querySelectorAll(".reveal-fade-up");
//         els.forEach((el) => observer.observe(el));
//         return () => els.forEach((el) => observer.unobserve(el));
//     }, [products, loading, error, activeCategory, activeType, searchQuery, sortBy, visibleCount]);

//     useEffect(() => {
//         setActiveCategory("all");
//         setActiveType("all");
//     }, [categoryParam]);

//     // Reset pagination whenever filters change
//     useEffect(() => {
//         setVisibleCount(PAGE_SIZE);
//     }, [activeCategory, activeType, searchQuery, sortBy]);

//     // Navbar category (?category=...) -> only products whose sub-category belongs to it
//     const navCategory = useMemo(
//         () =>
//             categoryParam
//                 ? navCategories.find((c) => norm(c.label) === norm(categoryParam)) || null
//                 : null,
//         [categoryParam, navCategories]
//     );

//     const scopedProducts = useMemo(() => {
//         if (!navCategory) return products; // no param, or unknown category -> show all
//         const names = new Set(navCategory.items.map((i) => norm(i.name)));
//         return products.filter((p) => p.subCategories.some((s) => names.has(norm(s))));
//     }, [products, navCategory]);

//     // don't flash "all products" while the navbar data is still loading
//     const isLoading = loading || (Boolean(categoryParam) && navLoading);

//     // Categories come from the backend sub-categories
//     const CATEGORIES = useMemo(() => {
//         const seen = new Map();
//         scopedProducts.forEach((p) => {
//             if (p.group && !seen.has(p.group)) seen.set(p.group, p.groupLabel);
//         });
//         return [
//             { key: "all", label: "All Products" },
//             ...Array.from(seen, ([key, label]) => ({ key, label })),
//         ];
//     }, [scopedProducts]);

//     const filteredProducts = useMemo(() => {
//         let result = scopedProducts;

//         if (activeCategory !== "all") {
//             result = result.filter((p) => p.group === activeCategory);
//         }
//         if (activeType !== "all") {
//             result = result.filter((p) => p.type === activeType);
//         }
//         if (searchQuery.trim()) {
//             const q = searchQuery.trim().toLowerCase();
//             result = result.filter((p) => p.title.toLowerCase().includes(q));
//         }
//         if (sortBy === "name-asc") {
//             result = [...result].sort((a, b) => a.title.localeCompare(b.title));
//         } else if (sortBy === "name-desc") {
//             result = [...result].sort((a, b) => b.title.localeCompare(a.title));
//         }
//         return result;
//     }, [scopedProducts, activeCategory, activeType, searchQuery, sortBy]);

//     const visibleProducts = filteredProducts.slice(0, visibleCount);
//     const hasMore = visibleCount < filteredProducts.length;

//     const categoryOptions = CATEGORIES.map((c) => ({
//         key: c.key,
//         label: c.label,
//         count: c.key === "all" ? scopedProducts.length : scopedProducts.filter((p) => p.group === c.key).length,
//     }));

//     const typeOptions = PRODUCT_TYPES.map((t) => ({
//         key: t.key,
//         label: t.label,
//         count: t.key === "all" ? scopedProducts.length : scopedProducts.filter((p) => p.type === t.key).length,
//     })).filter((t) => t.key === "all" || t.count > 0);

//     const addToCart = (product) => addItem(product);

//     const activeCategoryLabel = CATEGORIES.find((c) => c.key === activeCategory)?.label;
//     const activeTypeLabel = PRODUCT_TYPES.find((t) => t.key === activeType)?.label;

//     return (
//         <div className="bg-white">
//             <style dangerouslySetInnerHTML={{
//                 __html: `
//                 .reveal-fade-up {
//                     opacity: 0;
//                     transform: translateY(50px);
//                     transition: opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
//                 }
//                 .reveal-fade-up.is-revealed {
//                     opacity: 1;
//                     transform: translate(0);
//                 }
//                 .no-scrollbar::-webkit-scrollbar { display: none; }
//                 .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
//             `}} />

//             {/* ===================== HERO SECTION (compact) ===================== */}
//             <section className="relative w-full overflow-hidden">
//                 <div className="relative w-full h-[38vh] sm:h-[42vh] lg:h-[46vh] min-h-[280px]">
//                     <Image
//                         src="/product-hero-banner.png"
//                         alt="Drymato Dehydrated Products"
//                         fill
//                         priority
//                         className="object-cover object-center"
//                     />
//                 </div>

//                 <div className="absolute inset-0 flex items-center">
//                     <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full">
//                         <div className="reveal-fade-up max-w-md sm:max-w-lg">
//                             <p className="text-brick text-[11px] sm:text-xs uppercase tracking-[0.25em] font-bold mb-3">
//                                 Farm Fresh &nbsp;·&nbsp; Sun Dried
//                             </p>

//                             <h1 className="font-serif text-forest text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tight mb-3">
//                                 Pure &amp; Natural,
//                                 <br />
//                                 <span className="italic font-medium text-brick">Dehydrated Goodness.</span>
//                             </h1>

//                             <p className="text-foreground/80 text-sm font-medium leading-relaxed max-w-sm mb-4">
//                                 Crafted the traditional way, with no preservatives and no shortcuts.
//                             </p>

//                             <Link
//                                 href="/contact"
//                                 className="group relative overflow-hidden inline-flex bg-forest text-white pl-6 pr-2 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide items-center gap-3 transition-all duration-300 no-underline shadow-[0_4px_20px_rgba(36,56,34,0.3)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
//                             >
//                                 <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[125%] aspect-square rounded-t-[50%] bg-white translate-y-full transition-transform duration-[750ms] ease-in-out z-0 group-hover:translate-y-[12%]" />
//                                 <span className="relative z-10 transition-colors duration-300 group-hover:text-forest">
//                                     Enquire Now
//                                 </span>
//                                 <span className="relative z-10 w-7 h-7 bg-white text-forest rounded-full flex items-center justify-center shadow-sm transform group-hover:translate-x-1 group-hover:bg-forest group-hover:text-white transition-all duration-300">
//                                     <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8m0 0-3-3m3 3-3 3" />
//                                     </svg>
//                                 </span>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* ===================== STICKY FILTER STRIP ===================== */}
//             <div className="sticky top-[76px] z-30 bg-background border-b border-sage/20">
//                 <div className="max-w-7xl mx-auto px-6 py-4">
//                     <div className="flex flex-col lg:flex-row lg:items-center gap-4">
//                         {/* Dropdown filters — no overflow-x-auto here, since that forces overflow-y to clip too and hides the dropdown menu */}
//                         <div className="flex items-center flex-wrap gap-8 lg:flex-1">
//                             <FilterDropdown
//                                 label="Category"
//                                 activeLabel={activeCategory !== "all" ? activeCategoryLabel : null}
//                                 options={categoryOptions}
//                                 activeKey={activeCategory}
//                                 onSelect={setActiveCategory}
//                             />
//                             <FilterDropdown
//                                 label="Type"
//                                 activeLabel={activeType !== "all" ? activeTypeLabel : null}
//                                 options={typeOptions}
//                                 activeKey={activeType}
//                                 onSelect={setActiveType}
//                             />
//                         </div>

//                         {/* Search + Sort */}
//                         <div className="flex items-center gap-5 shrink-0">
//                             <div className="relative">
//                                 <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                                     <circle cx="11" cy="11" r="7" />
//                                     <path strokeLinecap="round" d="m20 20-3-3" />
//                                 </svg>
//                                 <input
//                                     type="text"
//                                     value={searchQuery}
//                                     onChange={(e) => setSearchQuery(e.target.value)}
//                                     placeholder="Search e.g. Tomato, Garlic..."
//                                     className="pl-9 pr-4 py-2 w-44 sm:w-64 rounded-lg bg-background border border-sage/25 text-xs sm:text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-forest/20 transition-all"
//                                 />
//                             </div>

//                             <div className="flex items-center gap-1.5 text-sm text-foreground/60 shrink-0">
//                                 <span className="hidden sm:inline">Sort by:</span>
//                                 <select
//                                     value={sortBy}
//                                     onChange={(e) => setSortBy(e.target.value)}
//                                     className="font-semibold text-forest bg-transparent focus:outline-none cursor-pointer"
//                                 >
//                                     {SORT_OPTIONS.map((opt) => (
//                                         <option key={opt.key} value={opt.key}>{opt.label}</option>
//                                     ))}
//                                 </select>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* ===================== PRODUCTS GRID ===================== */}
//             <section className="relative w-full pb-20 sm:pb-24">
//                 <div className="max-w-7xl mx-auto px-6">
//                     {isLoading ? (
//                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
//                             {Array.from({ length: 6 }).map((_, i) => (
//                                 <div
//                                     key={i}
//                                     className="bg-white rounded-tl-[48px] rounded-br-[48px] border border-sage/20 overflow-hidden flex flex-col h-full animate-pulse"
//                                 >
//                                     <div className="w-full h-72 sm:h-80 bg-background" />
//                                     <div className="px-5 pt-4 pb-5">
//                                         <div className="h-5 w-3/4 rounded bg-sage/15 mb-3" />
//                                         <div className="h-3 w-1/2 rounded bg-sage/10 mb-6" />
//                                         <div className="flex gap-2.5">
//                                             <div className="flex-1 h-10 rounded-lg bg-sage/15" />
//                                             <div className="flex-1 h-10 rounded-lg bg-sage/15" />
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     ) : error ? (
//                         <div className="text-center py-20">
//                             <p className="text-foreground/60 text-base sm:text-lg font-medium mb-6">
//                                 We couldn&apos;t load the products right now. Please try again.
//                             </p>
//                             <button
//                                 onClick={() => setReloadKey((k) => k + 1)}
//                                 className="px-8 py-3 rounded-full border-2 border-forest text-forest text-sm font-bold tracking-wide uppercase hover:bg-forest hover:text-white transition-all duration-300 cursor-pointer"
//                             >
//                                 Retry
//                             </button>
//                         </div>
//                     ) : (
//                         <>
//                             <p className="reveal-fade-up text-foreground/60 text-sm mt-8 mb-8">
//                                 Showing {visibleProducts.length} of {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
//                                 {navCategory && (
//                                     <>
//                                         {" "}in <span className="font-semibold text-forest">{navCategory.label}</span>
//                                         {" · "}
//                                         <button
//                                             type="button"
//                                             onClick={() => router.push("/product")}
//                                             className="font-bold text-brick hover:underline cursor-pointer"
//                                         >
//                                             Clear
//                                         </button>
//                                     </>
//                                 )}
//                             </p>

//                             {visibleProducts.length > 0 ? (
//                                 <>
//                                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                                         {visibleProducts.map((product, index) => (
//                                             <div
//                                                 key={product.id}
//                                                 className="reveal-fade-up"
//                                                 style={{ transitionDelay: `${(index % 3) * 120}ms` }}
//                                             >
//                                                 <div
//                                                     onClick={() => router.push(product.href)}
//                                                     className="group relative bg-white rounded-tl-[48px] rounded-br-[48px] rounded-tr-none rounded-bl-none border border-sage/20 overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(36,56,34,0.10)] flex flex-col h-full cursor-pointer"
//                                                 >
//                                                     {/* Image container - dual image hover swap */}
//                                                     <div className="relative w-full h-72 sm:h-80 bg-background flex items-center justify-center p-6 overflow-hidden">
//                                                         <Image
//                                                             src={product.image}
//                                                             alt={product.title}
//                                                             width={180}
//                                                             height={180}
//                                                             unoptimized={isRemote(product.image)}
//                                                             className="absolute max-w-[70%] max-h-[70%] w-auto h-auto object-contain transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0"
//                                                         />
//                                                         <Image
//                                                             src={product.hoverImage || product.image}
//                                                             alt={`${product.title} alternate view`}
//                                                             width={180}
//                                                             height={180}
//                                                             unoptimized={isRemote(product.hoverImage || product.image)}
//                                                             className="absolute max-w-[70%] max-h-[70%] w-auto h-auto object-contain transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
//                                                         />
//                                                     </div>

//                                                     {/* Content */}
//                                                     <div className="flex flex-col flex-grow px-5 pt-4 pb-5">
//                                                         <div className="min-h-[80px]">
//                                                             <h4 className="font-serif text-lg sm:text-xl font-bold text-forest leading-snug mb-1 group-hover:text-brick transition-colors duration-300">
//                                                                 {product.title}
//                                                             </h4>
//                                                             {product.subtitle && (
//                                                                 <p className="text-foreground/40 text-xs font-medium mb-2.5">
//                                                                     {product.subtitle}
//                                                                 </p>
//                                                             )}
//                                                             <div className="flex items-center gap-1.5 text-brick text-xs font-semibold">
//                                                                 <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
//                                                                     <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
//                                                                 </svg>
//                                                                 <span>{product.feature}</span>
//                                                             </div>
//                                                         </div>

//                                                         {/* CTAs */}
//                                                         <div className="mt-4 flex items-center gap-2.5">
//                                                             <button
//                                                                 onClick={(e) => {
//                                                                     e.stopPropagation();
//                                                                     addToCart(product);
//                                                                 }}
//                                                                 className="flex-1 text-[11px] sm:text-xs font-bold tracking-wide uppercase py-2.5 px-3 rounded-lg border-2 border-forest text-forest hover:bg-forest hover:text-white transition-all duration-300 cursor-pointer"
//                                                             >
//                                                                 Add to Cart
//                                                             </button>

//                                                             <Link
//                                                                 href="/contact"
//                                                                 onClick={(e) => e.stopPropagation()}
//                                                                 className="group/btn relative overflow-hidden flex-1 bg-forest border-2 border-forest text-white py-2.5 pl-4 pr-1.5 rounded-lg text-[11px] sm:text-xs font-bold tracking-wide uppercase flex items-center justify-center gap-2 transition-all duration-300 no-underline cursor-pointer"
//                                                             >
//                                                                 <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[125%] aspect-square rounded-t-[50%] bg-white translate-y-full transition-transform duration-[750ms] ease-in-out z-0 group-hover/btn:translate-y-[12%]" />
//                                                                 <span className="relative z-10 transition-colors duration-300 group-hover/btn:text-forest">
//                                                                     Enquire
//                                                                 </span>
//                                                                 <span className="relative z-10 w-5 h-5 bg-white text-forest rounded-full flex items-center justify-center shrink-0 shadow-sm transform group-hover/btn:translate-x-0.5 group-hover/btn:bg-forest group-hover/btn:text-white transition-all duration-300">
//                                                                     <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
//                                                                         <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8m0 0-3-3m3 3-3 3" />
//                                                                     </svg>
//                                                                 </span>
//                                                             </Link>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         ))}
//                                     </div>

//                                     {hasMore && (
//                                         <div className="reveal-fade-up flex justify-center mt-14">
//                                             <button
//                                                 onClick={() => setVisibleCount((v) => v + PAGE_SIZE)}
//                                                 className="px-8 py-3 rounded-full border-2 border-forest text-forest text-sm font-bold tracking-wide uppercase hover:bg-forest hover:text-white transition-all duration-300 cursor-pointer"
//                                             >
//                                                 View More
//                                             </button>
//                                         </div>
//                                     )}
//                                 </>
//                             ) : (
//                                 <div className="reveal-fade-up text-center py-20">
//                                     <p className="text-foreground/60 text-base sm:text-lg font-medium">
//                                         No products match your filters. Try adjusting your search.
//                                     </p>
//                                 </div>
//                             )}
//                         </>
//                     )}
//                 </div>
//             </section>

//         </div>
//     );
// }





"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import useNavigation from "@/lib/useNavigation";
import Image from "next/image";
import Link from "next/link";
import CartSidebar from "@/components/CartSidebar";
import { useCart } from "@/context/CartContext";

const SORT_OPTIONS = [
    { key: "default", label: "Default" },
    { key: "name-asc", label: "Name: A to Z" },
    { key: "name-desc", label: "Name: Z to A" },
];

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const STORE_DOMAIN = "Drymato";
const FALLBACK_IMAGE = "/drymato-logo.png";

// Query-param names sent to the backend. If your backend uses other names, change ONLY these.
const FILTER_PARAMS = {
    category: "category",
    subCategory: "subCategory",
    search: "search",
    sort: "sort", // values: "name-asc" | "name-desc" (omitted for default)
};

const isRemote = (src) => /^https?:\/\//.test(src);

const getImageUrl = (img) => (typeof img === "string" ? img : img?.url || null);

// Maps one backend product to the shape the cards already use
const mapProduct = (p) => {
    const images = (p.images || []).map(getImageUrl).filter(Boolean);
    const image = images[0] || FALLBACK_IMAGE;
    const subCategory = p.subCategory?.[0] || "";

    return {
        id: p._id,
        slug: p.slug,
        title: p.name,
        subtitle: "",
        image,
        hoverImage: images[1] || image,
        feature: subCategory || "100% Natural",
        description: p.description,
        href: `/product/${p.slug}`,
    };
};

function FilterDropdown({ label, activeLabel, options, activeKey, onSelect }) {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={ref}>
            <button
                onClick={() => setOpen((o) => !o)}
                className="flex items-center gap-1.5 text-sm font-semibold text-forest hover:text-brick transition-colors cursor-pointer whitespace-nowrap"
            >
                {label}
                {activeLabel && <span className="text-brick font-bold">· {activeLabel}</span>}
                <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                    fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {open && (
                <div className="absolute left-0 top-full mt-3 w-64 max-h-72 overflow-y-auto bg-surface border border-sage/25 rounded-xl shadow-[0_12px_32px_rgba(36,56,34,0.12)] py-2 z-40">
                    {options.map((opt) => {
                        const isActive = activeKey === opt.key;
                        return (
                            <button
                                key={opt.key || "all"}
                                onClick={() => {
                                    onSelect(opt.key);
                                    setOpen(false);
                                }}
                                className={`w-full flex items-center justify-between text-left px-4 py-2.5 text-sm transition-colors cursor-pointer ${isActive ? "text-brick font-bold bg-brick/5" : "text-foreground/80 hover:bg-sage/10"
                                    }`}
                            >
                                {opt.label}
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default function ProductClient() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { categories: navCategories } = useNavigation();
    const { addItem } = useCart();

    // ---- The URL is the single source of truth for filters (navbar links use ?category=) ----
    const category = (searchParams.get("category") || "").trim();
    const subCategory = (searchParams.get("subCategory") || "").trim();
    const search = (searchParams.get("search") || "").trim();
    const sortBy = searchParams.get("sort") || "default";

    const updateFilters = (changes) => {
        const params = new URLSearchParams(searchParams.toString());
        Object.entries(changes).forEach(([key, value]) => {
            if (value && value !== "default") params.set(key, value);
            else params.delete(key);
        });
        const qs = params.toString();
        router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    };

    const hasActiveFilters = Boolean(category || subCategory || search || sortBy !== "default");

    // ---- Search box: typed locally, pushed to the URL (-> backend) after a short pause ----
    const [searchInput, setSearchInput] = useState(search);
    const lastPushedSearch = useRef(search);

    useEffect(() => {
        // URL changed from somewhere else (e.g. "Clear all"): mirror it in the box
        if (search !== lastPushedSearch.current) {
            lastPushedSearch.current = search;
            setSearchInput(search);
        }
    }, [search]);

    useEffect(() => {
        const value = searchInput.trim();
        if (value === search) return;
        const t = setTimeout(() => {
            lastPushedSearch.current = value;
            updateFilters({ search: value });
        }, 450);
        return () => clearTimeout(t);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchInput]);

    // ---- Products (server-side filtered + paginated) ----
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalCount, setTotalCount] = useState(null);
    const [reloadKey, setReloadKey] = useState(0);

    const buildUrl = (pageNo) => {
        const qs = new URLSearchParams({ page: String(pageNo) });
        if (category) qs.set(FILTER_PARAMS.category, category);
        if (subCategory) qs.set(FILTER_PARAMS.subCategory, subCategory);
        if (search) qs.set(FILTER_PARAMS.search, search);
        if (sortBy !== "default") qs.set(FILTER_PARAMS.sort, sortBy);
        return `${API_BASE_URL}/product/public/store/${STORE_DOMAIN}?${qs.toString()}`;
    };

    const fetchPage = async (pageNo, signal) => {
        const res = await fetch(buildUrl(pageNo), { signal });
        if (!res.ok) throw new Error(`Request failed (${res.status})`);
        const json = await res.json();
        if (!json?.success) throw new Error(json?.message || "Failed to load products");
        return json.data || {};
    };

    // Any filter change -> fetch page 1 again from the backend
    useEffect(() => {
        const controller = new AbortController();

        const load = async () => {
            try {
                setLoading(true);
                setError(null);

                const data = await fetchPage(1, controller.signal);
                setProducts((data.products || []).filter((p) => p.status === "Active").map(mapProduct));
                setPage(1);
                setTotalPages(data.totalPages || 1);
                setTotalCount(data.total ?? data.totalProducts ?? data.totalCount ?? null);
            } catch (err) {
                if (err.name === "AbortError") return;
                setError(err.message || "Something went wrong");
            } finally {
                if (!controller.signal.aborted) setLoading(false);
            }
        };

        load();
        return () => controller.abort();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category, subCategory, search, sortBy, reloadKey]);

    // "View More" -> next page from the backend, appended
    const loadMore = async () => {
        if (loadingMore || page >= totalPages) return;
        try {
            setLoadingMore(true);
            const data = await fetchPage(page + 1);
            const next = (data.products || []).filter((p) => p.status === "Active").map(mapProduct);
            setProducts((prev) => [...prev, ...next]);
            setPage((p) => p + 1);
            setTotalPages(data.totalPages || totalPages);
        } catch (err) {
            setError(err.message || "Something went wrong");
        } finally {
            setLoadingMore(false);
        }
    };

    const hasMore = page < totalPages;

    useEffect(() => {
        const observerOptions = { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.05 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-revealed");
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        const els = document.querySelectorAll(".reveal-fade-up");
        els.forEach((el) => observer.observe(el));
        return () => els.forEach((el) => observer.unobserve(el));
    }, [products, loading, error]);

    // ---- Filter options come from the navigation API ----
    const categoryOptions = useMemo(
        () => [
            { key: "", label: "All Categories" },
            ...navCategories.map((c) => ({ key: c.label, label: c.label })),
        ],
        [navCategories]
    );

    // Sub categories: only the selected category's, or all of them when no category is chosen
    const subCategoryOptions = useMemo(() => {
        const source = category
            ? navCategories.filter((c) => c.label.toLowerCase() === category.toLowerCase())
            : navCategories;
        const seen = new Set();
        const list = [];
        source.forEach((c) =>
            c.items.forEach((i) => {
                const k = i.name.toLowerCase();
                if (!seen.has(k)) {
                    seen.add(k);
                    list.push({ key: i.name, label: i.name });
                }
            })
        );
        return [{ key: "", label: "All Sub Categories" }, ...list];
    }, [navCategories, category]);

    const addToCart = (product) => addItem(product);

    return (
        <div className="bg-white">
            <style dangerouslySetInnerHTML={{
                __html: `
                .reveal-fade-up {
                    opacity: 0;
                    transform: translateY(50px);
                    transition: opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .reveal-fade-up.is-revealed {
                    opacity: 1;
                    transform: translate(0);
                }
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}} />

            {/* ===================== HERO SECTION (compact) ===================== */}
            <section className="relative w-full overflow-hidden">
                <div className="relative w-full h-[38vh] sm:h-[42vh] lg:h-[46vh] min-h-[280px]">
                    <Image
                        src="/product-hero-banner.png"
                        alt="Drymato Dehydrated Products"
                        fill
                        priority
                        className="object-cover object-center"
                    />
                </div>

                <div className="absolute inset-0 flex items-center">
                    <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full">
                        <div className="reveal-fade-up max-w-md sm:max-w-lg">
                            <p className="text-brick text-[11px] sm:text-xs uppercase tracking-[0.25em] font-bold mb-3">
                                Farm Fresh &nbsp;·&nbsp; Sun Dried
                            </p>

                            <h1 className="font-serif text-forest text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tight mb-3">
                                Pure &amp; Natural,
                                <br />
                                <span className="italic font-medium text-brick">Dehydrated Goodness.</span>
                            </h1>

                            <p className="text-foreground/80 text-sm font-medium leading-relaxed max-w-sm mb-4">
                                Crafted the traditional way, with no preservatives and no shortcuts.
                            </p>

                            <Link
                                href="/contact"
                                className="group relative overflow-hidden inline-flex bg-forest text-white pl-6 pr-2 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide items-center gap-3 transition-all duration-300 no-underline shadow-[0_4px_20px_rgba(36,56,34,0.3)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                            >
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[125%] aspect-square rounded-t-[50%] bg-white translate-y-full transition-transform duration-[750ms] ease-in-out z-0 group-hover:translate-y-[12%]" />
                                <span className="relative z-10 transition-colors duration-300 group-hover:text-forest">
                                    Enquire Now
                                </span>
                                <span className="relative z-10 w-7 h-7 bg-white text-forest rounded-full flex items-center justify-center shadow-sm transform group-hover:translate-x-1 group-hover:bg-forest group-hover:text-white transition-all duration-300">
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8m0 0-3-3m3 3-3 3" />
                                    </svg>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===================== STICKY FILTER STRIP ===================== */}
            <div className="sticky top-[76px] z-30 bg-background border-b border-sage/20">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                        {/* Dropdown filters — no overflow-x-auto here, since that forces overflow-y to clip too and hides the dropdown menu */}
                        <div className="flex items-center flex-wrap gap-8 lg:flex-1">
                            <FilterDropdown
                                label="Category"
                                activeLabel={category || null}
                                options={categoryOptions}
                                activeKey={category}
                                onSelect={(key) => updateFilters({ category: key, subCategory: "" })}
                            />
                            <FilterDropdown
                                label="Sub Category"
                                activeLabel={subCategory || null}
                                options={subCategoryOptions}
                                activeKey={subCategory}
                                onSelect={(key) => updateFilters({ subCategory: key })}
                            />
                        </div>

                        {/* Search + Sort */}
                        <div className="flex items-center gap-5 shrink-0">
                            <div className="relative">
                                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <circle cx="11" cy="11" r="7" />
                                    <path strokeLinecap="round" d="m20 20-3-3" />
                                </svg>
                                <input
                                    type="text"
                                    value={searchInput}
                                    onChange={(e) => setSearchInput(e.target.value)}
                                    placeholder="Search e.g. Tomato, Garlic..."
                                    className="pl-9 pr-4 py-2 w-48 sm:w-80 lg:w-96 rounded-lg bg-white border border-sage/25 text-xs sm:text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-forest/20 transition-all"
                                />
                            </div>

                            <div className="flex items-center gap-1.5 text-sm text-foreground/60 shrink-0">
                                <span className="hidden sm:inline">Sort by:</span>
                                <select
                                    value={sortBy}
                                    onChange={(e) => updateFilters({ sort: e.target.value })}
                                    className="font-semibold text-forest bg-transparent focus:outline-none cursor-pointer"
                                >
                                    {SORT_OPTIONS.map((opt) => (
                                        <option key={opt.key} value={opt.key}>{opt.label}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ===================== PRODUCTS GRID ===================== */}
            <section className="relative w-full pb-20 sm:pb-24">
                <div className="max-w-7xl mx-auto px-6">
                    {loading ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                            {Array.from({ length: 6 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="bg-white rounded-tl-[48px] rounded-br-[48px] border border-sage/20 overflow-hidden flex flex-col h-full animate-pulse"
                                >
                                    <div className="w-full h-72 sm:h-80 bg-background" />
                                    <div className="px-5 pt-4 pb-5">
                                        <div className="h-5 w-3/4 rounded bg-sage/15 mb-3" />
                                        <div className="h-3 w-1/2 rounded bg-sage/10 mb-6" />
                                        <div className="flex gap-2.5">
                                            <div className="flex-1 h-10 rounded-lg bg-sage/15" />
                                            <div className="flex-1 h-10 rounded-lg bg-sage/15" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : error ? (
                        <div className="text-center py-20">
                            <p className="text-foreground/60 text-base sm:text-lg font-medium mb-6">
                                We couldn&apos;t load the products right now. Please try again.
                            </p>
                            <button
                                onClick={() => setReloadKey((k) => k + 1)}
                                className="px-8 py-3 rounded-full border-2 border-forest text-forest text-sm font-bold tracking-wide uppercase hover:bg-forest hover:text-white transition-all duration-300 cursor-pointer"
                            >
                                Retry
                            </button>
                        </div>
                    ) : (
                        <>
                            <p className="reveal-fade-up text-foreground/60 text-sm mt-8 mb-8">
                                Showing {products.length}
                                {totalCount ? ` of ${totalCount}` : ""} {(totalCount || products.length) === 1 ? "product" : "products"}
                                {hasActiveFilters && (
                                    <>
                                        {" · "}
                                        <button
                                            type="button"
                                            onClick={() => router.replace(pathname, { scroll: false })}
                                            className="font-bold text-brick hover:underline cursor-pointer"
                                        >
                                            Clear all
                                        </button>
                                    </>
                                )}
                            </p>

                            {products.length > 0 ? (
                                <>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {products.map((product, index) => (
                                            <div
                                                key={product.id}
                                                className="reveal-fade-up"
                                                style={{ transitionDelay: `${(index % 3) * 120}ms` }}
                                            >
                                                <div
                                                    onClick={() => router.push(product.href)}
                                                    className="group relative bg-white rounded-tl-[48px] rounded-br-[48px] rounded-tr-none rounded-bl-none border border-sage/20 overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(36,56,34,0.10)] flex flex-col h-full cursor-pointer"
                                                >
                                                    {/* Image container - dual image hover swap */}
                                                    <div className="relative w-full h-72 sm:h-80 bg-background flex items-center justify-center p-6 overflow-hidden">
                                                        <Image
                                                            src={product.image}
                                                            alt={product.title}
                                                            width={180}
                                                            height={180}
                                                            unoptimized={isRemote(product.image)}
                                                            className="absolute max-w-[70%] max-h-[70%] w-auto h-auto object-contain transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0"
                                                        />
                                                        <Image
                                                            src={product.hoverImage || product.image}
                                                            alt={`${product.title} alternate view`}
                                                            width={180}
                                                            height={180}
                                                            unoptimized={isRemote(product.hoverImage || product.image)}
                                                            className="absolute max-w-[70%] max-h-[70%] w-auto h-auto object-contain transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
                                                        />
                                                    </div>

                                                    {/* Content */}
                                                    <div className="flex flex-col flex-grow px-5 pt-4 pb-5">
                                                        <div className="min-h-[80px]">
                                                            <h4 className="font-serif text-lg sm:text-xl font-bold text-forest leading-snug mb-1 group-hover:text-brick transition-colors duration-300">
                                                                {product.title}
                                                            </h4>
                                                            {product.subtitle && (
                                                                <p className="text-foreground/40 text-xs font-medium mb-2.5">
                                                                    {product.subtitle}
                                                                </p>
                                                            )}
                                                            <div className="flex items-center gap-1.5 text-brick text-xs font-semibold">
                                                                <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                                                </svg>
                                                                <span>{product.feature}</span>
                                                            </div>
                                                        </div>

                                                        {/* CTAs */}
                                                        <div className="mt-4 flex items-center gap-2.5">
                                                            <button
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    addToCart(product);
                                                                }}
                                                                className="flex-1 text-[11px] sm:text-xs font-bold tracking-wide uppercase py-2.5 px-3 rounded-lg border-2 border-forest text-forest hover:bg-forest hover:text-white transition-all duration-300 cursor-pointer"
                                                            >
                                                                Add to Cart
                                                            </button>

                                                            <Link
                                                                href="/contact"
                                                                onClick={(e) => e.stopPropagation()}
                                                                className="group/btn relative overflow-hidden flex-1 bg-forest border-2 border-forest text-white py-2.5 pl-4 pr-1.5 rounded-lg text-[11px] sm:text-xs font-bold tracking-wide uppercase flex items-center justify-center gap-2 transition-all duration-300 no-underline cursor-pointer"
                                                            >
                                                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[125%] aspect-square rounded-t-[50%] bg-white translate-y-full transition-transform duration-[750ms] ease-in-out z-0 group-hover/btn:translate-y-[12%]" />
                                                                <span className="relative z-10 transition-colors duration-300 group-hover/btn:text-forest">
                                                                    Enquire
                                                                </span>
                                                                <span className="relative z-10 w-5 h-5 bg-white text-forest rounded-full flex items-center justify-center shrink-0 shadow-sm transform group-hover/btn:translate-x-0.5 group-hover/btn:bg-forest group-hover/btn:text-white transition-all duration-300">
                                                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8m0 0-3-3m3 3-3 3" />
                                                                    </svg>
                                                                </span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {hasMore && (
                                        <div className="reveal-fade-up flex justify-center mt-14">
                                            <button
                                                onClick={loadMore}
                                                disabled={loadingMore}
                                                className="px-8 py-3 rounded-full border-2 border-forest text-forest text-sm font-bold tracking-wide uppercase hover:bg-forest hover:text-white transition-all duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                                            >
                                                {loadingMore ? "Loading..." : "View More"}
                                            </button>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <div className="reveal-fade-up text-center py-20">
                                    <p className="text-foreground/60 text-base sm:text-lg font-medium">
                                        No products match your filters. Try adjusting your search.
                                    </p>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>

        </div>
    );
}