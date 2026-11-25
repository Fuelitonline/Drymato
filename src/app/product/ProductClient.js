// last working version - 24.11.26

// "use client";

// import { useState, useEffect, useMemo, useRef } from "react";
// import { useRouter, useSearchParams, usePathname } from "next/navigation";
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

// const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
// const STORE_DOMAIN = "Drymato";
// const FALLBACK_IMAGE = "/drymato-logo.png";

// // Query-param names sent to the backend. If your backend uses other names, change ONLY these.
// const FILTER_PARAMS = {
//     category: "category",
//     subCategory: "subCategory",
//     search: "search",
//     sort: "sort", // values: "name-asc" | "name-desc" (omitted for default)
// };

// const isRemote = (src) => /^https?:\/\//.test(src);

// const getImageUrl = (img) => (typeof img === "string" ? img : img?.url || null);

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
//         image,
//         hoverImage: images[1] || image,
//         feature: subCategory || "100% Natural",
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
//                 <div className="absolute left-0 top-full mt-3 w-64 max-h-72 overflow-y-auto bg-surface border border-sage/25 rounded-xl shadow-[0_12px_32px_rgba(36,56,34,0.12)] py-2 z-40">
//                     {options.map((opt) => {
//                         const isActive = activeKey === opt.key;
//                         return (
//                             <button
//                                 key={opt.key || "all"}
//                                 onClick={() => {
//                                     onSelect(opt.key);
//                                     setOpen(false);
//                                 }}
//                                 className={`w-full flex items-center justify-between text-left px-4 py-2.5 text-sm transition-colors cursor-pointer ${isActive ? "text-brick font-bold bg-brick/5" : "text-foreground/80 hover:bg-sage/10"
//                                     }`}
//                             >
//                                 {opt.label}
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
//     const pathname = usePathname();
//     const searchParams = useSearchParams();
//     const { categories: navCategories } = useNavigation();
//     const { addItem } = useCart();

//     // ---- The URL is the single source of truth for filters (navbar links use ?category=) ----
//     const category = (searchParams.get("category") || "").trim();
//     const subCategory = (searchParams.get("subCategory") || "").trim();
//     const search = (searchParams.get("search") || "").trim();
//     const sortBy = searchParams.get("sort") || "default";

//     const updateFilters = (changes) => {
//         const params = new URLSearchParams(searchParams.toString());
//         Object.entries(changes).forEach(([key, value]) => {
//             if (value && value !== "default") params.set(key, value);
//             else params.delete(key);
//         });
//         const qs = params.toString();
//         router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
//     };

//     const hasActiveFilters = Boolean(category || subCategory || search || sortBy !== "default");

//     // ---- Search box: typed locally, pushed to the URL (-> backend) after a short pause ----
//     const [searchInput, setSearchInput] = useState(search);
//     const lastPushedSearch = useRef(search);

//     useEffect(() => {
//         // URL changed from somewhere else (e.g. "Clear all"): mirror it in the box
//         if (search !== lastPushedSearch.current) {
//             lastPushedSearch.current = search;
//             setSearchInput(search);
//         }
//     }, [search]);

//     useEffect(() => {
//         const value = searchInput.trim();
//         if (value === search) return;
//         const t = setTimeout(() => {
//             lastPushedSearch.current = value;
//             updateFilters({ search: value });
//         }, 450);
//         return () => clearTimeout(t);
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [searchInput]);

//     // ---- Products (server-side filtered + paginated) ----
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [loadingMore, setLoadingMore] = useState(false);
//     const [error, setError] = useState(null);
//     const [page, setPage] = useState(1);
//     const [totalPages, setTotalPages] = useState(1);
//     const [totalCount, setTotalCount] = useState(null);
//     const [reloadKey, setReloadKey] = useState(0);

//     const buildUrl = (pageNo) => {
//         const qs = new URLSearchParams({ page: String(pageNo) });
//         if (category) qs.set(FILTER_PARAMS.category, category);
//         if (subCategory) qs.set(FILTER_PARAMS.subCategory, subCategory);
//         if (search) qs.set(FILTER_PARAMS.search, search);
//         if (sortBy !== "default") qs.set(FILTER_PARAMS.sort, sortBy);
//         return `${API_BASE_URL}/product/public/store/${STORE_DOMAIN}?${qs.toString()}`;
//     };

//     const fetchPage = async (pageNo, signal) => {
//         const res = await fetch(buildUrl(pageNo), { signal });
//         if (!res.ok) throw new Error(`Request failed (${res.status})`);
//         const json = await res.json();
//         if (!json?.success) throw new Error(json?.message || "Failed to load products");
//         return json.data || {};
//     };

//     // Any filter change -> fetch page 1 again from the backend
//     useEffect(() => {
//         const controller = new AbortController();

//         const load = async () => {
//             try {
//                 setLoading(true);
//                 setError(null);

//                 const data = await fetchPage(1, controller.signal);
//                 setProducts((data.products || []).filter((p) => p.status === "Active").map(mapProduct));
//                 setPage(1);
//                 setTotalPages(data.totalPages || 1);
//                 setTotalCount(data.total ?? data.totalProducts ?? data.totalCount ?? null);
//             } catch (err) {
//                 if (err.name === "AbortError") return;
//                 setError(err.message || "Something went wrong");
//             } finally {
//                 if (!controller.signal.aborted) setLoading(false);
//             }
//         };

//         load();
//         return () => controller.abort();
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [category, subCategory, search, sortBy, reloadKey]);

//     // "View More" -> next page from the backend, appended
//     const loadMore = async () => {
//         if (loadingMore || page >= totalPages) return;
//         try {
//             setLoadingMore(true);
//             const data = await fetchPage(page + 1);
//             const next = (data.products || []).filter((p) => p.status === "Active").map(mapProduct);
//             setProducts((prev) => [...prev, ...next]);
//             setPage((p) => p + 1);
//             setTotalPages(data.totalPages || totalPages);
//         } catch (err) {
//             setError(err.message || "Something went wrong");
//         } finally {
//             setLoadingMore(false);
//         }
//     };

//     const hasMore = page < totalPages;

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
//     }, [products, loading, error]);

//     // ---- Filter options come from the navigation API ----
//     const categoryOptions = useMemo(
//         () => [
//             { key: "", label: "All Categories" },
//             ...navCategories.map((c) => ({ key: c.label, label: c.label })),
//         ],
//         [navCategories]
//     );

//     // Sub categories: only the selected category's, or all of them when no category is chosen
//     const subCategoryOptions = useMemo(() => {
//         const source = category
//             ? navCategories.filter((c) => c.label.toLowerCase() === category.toLowerCase())
//             : navCategories;
//         const seen = new Set();
//         const list = [];
//         source.forEach((c) =>
//             c.items.forEach((i) => {
//                 const k = i.name.toLowerCase();
//                 if (!seen.has(k)) {
//                     seen.add(k);
//                     list.push({ key: i.name, label: i.name });
//                 }
//             })
//         );
//         return [{ key: "", label: "All Sub Categories" }, ...list];
//     }, [navCategories, category]);

//     const addToCart = (product) => addItem(product);

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
//                                 activeLabel={category || null}
//                                 options={categoryOptions}
//                                 activeKey={category}
//                                 onSelect={(key) => updateFilters({ category: key, subCategory: "" })}
//                             />
//                             <FilterDropdown
//                                 label="Sub Category"
//                                 activeLabel={subCategory || null}
//                                 options={subCategoryOptions}
//                                 activeKey={subCategory}
//                                 onSelect={(key) => updateFilters({ subCategory: key })}
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
//                                     value={searchInput}
//                                     onChange={(e) => setSearchInput(e.target.value)}
//                                     placeholder="Search e.g. Tomato, Garlic..."
//                                     className="pl-9 pr-4 py-2 w-48 sm:w-80 lg:w-96 rounded-lg bg-white border border-sage/25 text-xs sm:text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-forest/20 transition-all"
//                                 />
//                             </div>

//                             <div className="flex items-center gap-1.5 text-sm text-foreground/60 shrink-0">
//                                 <span className="hidden sm:inline">Sort by:</span>
//                                 <select
//                                     value={sortBy}
//                                     onChange={(e) => updateFilters({ sort: e.target.value })}
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
//                     {loading ? (
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
//                                 Showing {products.length}
//                                 {totalCount ? ` of ${totalCount}` : ""} {(totalCount || products.length) === 1 ? "product" : "products"}
//                                 {hasActiveFilters && (
//                                     <>
//                                         {" · "}
//                                         <button
//                                             type="button"
//                                             onClick={() => router.replace(pathname, { scroll: false })}
//                                             className="font-bold text-brick hover:underline cursor-pointer"
//                                         >
//                                             Clear all
//                                         </button>
//                                     </>
//                                 )}
//                             </p>

//                             {products.length > 0 ? (
//                                 <>
//                                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                                         {products.map((product, index) => (
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
//                                                 onClick={loadMore}
//                                                 disabled={loadingMore}
//                                                 className="px-8 py-3 rounded-full border-2 border-forest text-forest text-sm font-bold tracking-wide uppercase hover:bg-forest hover:text-white transition-all duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
//                                             >
//                                                 {loadingMore ? "Loading..." : "View More"}
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
import decodeEntities from "@/lib/decodeEntities";
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

// How several selected sub categories are sent to the backend:
//   "repeat" -> ...&subCategory=Onion&subCategory=Tomato
//   "comma"  -> ...&subCategory=Onion,Tomato
const MULTI_VALUE_STYLE = "repeat";

// Dropdown lists render this many rows at a time and load more while scrolling
const DROPDOWN_PAGE_SIZE = 30;

const isRemote = (src) => /^https?:\/\//.test(src);

const getImageUrl = (img) => (typeof img === "string" ? img : img?.url || null);

// "Drymato Dehydrated Onion | Flakes, Granules | For Cooking | Bulk Supply"
//  -> shortTitle: "Drymato Dehydrated Onion", subtitle: "Flakes, Granules · For Cooking · Bulk Supply"
const splitTitle = (name = "") => {
    const [first, ...rest] = decodeEntities(name)
        .split("|")
        .map((s) => s.trim())
        .filter(Boolean);
    return { shortTitle: first || decodeEntities(name), subtitle: rest.join(" · ") };
};

// Maps one backend product to the shape the cards already use
const mapProduct = (p) => {
    const images = (p.images || []).map(getImageUrl).filter(Boolean);
    const image = images[0] || FALLBACK_IMAGE;
    const subCategory = p.subCategory?.[0] || "";
    const { shortTitle, subtitle } = splitTitle(p.name);

    return {
        id: p._id,
        slug: p.slug,
        title: p.name, // full title (cart, tooltip)
        shortTitle,
        subtitle,
        image,
        hoverImage: images[1] || image,
        feature: decodeEntities(subCategory) || "100% Natural",
        description: p.description,
        href: `/product/${p.slug}`,
    };
};

// Calls handler when the user clicks outside `ref` (only while `active`)
function useOutsideClick(ref, handler, active) {
    const handlerRef = useRef(handler);
    handlerRef.current = handler;

    useEffect(() => {
        if (!active) return;
        const onDown = (e) => {
            if (ref.current && !ref.current.contains(e.target)) handlerRef.current();
        };
        document.addEventListener("mousedown", onDown);
        return () => document.removeEventListener("mousedown", onDown);
    }, [ref, active]);
}

const Chevron = ({ open }) => (
    <svg
        className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
);

// ---------- Single select (Category) ----------
function FilterDropdown({ label, options, activeKey, onSelect }) {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);
    useOutsideClick(ref, () => setOpen(false), open);

    return (
        <div className="relative" ref={ref}>
            <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                aria-haspopup="listbox"
                aria-expanded={open}
                className="flex items-center gap-1.5 text-sm font-semibold text-forest hover:text-brick transition-colors cursor-pointer whitespace-nowrap"
            >
                {label}
                <Chevron open={open} />
            </button>

            {open && (
                <div className="absolute left-0 top-full mt-3 w-64 max-h-72 overflow-y-auto bg-surface border border-sage/25 rounded-xl shadow-[0_12px_32px_rgba(36,56,34,0.12)] py-2 z-40">
                    {options.map((opt) => {
                        const isActive = activeKey === opt.key;
                        return (
                            <button
                                type="button"
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

// ---------- Multi select with checkboxes (Sub Category) ----------
// - search box inside the dropdown
// - only DROPDOWN_PAGE_SIZE rows rendered at a time, more load while scrolling
// - selection is a draft; products are fetched once on "Apply" (or when the dropdown closes)
function MultiSelectDropdown({ label, options, selected, onApply, searchPlaceholder = "Search..." }) {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [draft, setDraft] = useState(selected);
    const [visibleCount, setVisibleCount] = useState(DROPDOWN_PAGE_SIZE);
    const ref = useRef(null);
    const listRef = useRef(null);
    const draftRef = useRef(draft);
    draftRef.current = draft;

    const selectedKey = selected.join("\u0001");

    // URL filters changed from somewhere else (chip removed, "Clear all", ...)
    useEffect(() => {
        setDraft(selected);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedKey]);

    const commit = () => {
        const next = draftRef.current;
        const changed = next.length !== selected.length || next.some((k) => !selected.includes(k));
        if (changed) onApply(next);
        setOpen(false);
    };
    useOutsideClick(ref, commit, open);

    const toggleOpen = () => {
        if (open) {
            commit();
            return;
        }
        setDraft(selected);
        setQuery("");
        setVisibleCount(DROPDOWN_PAGE_SIZE);
        setOpen(true);
    };

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        return q ? options.filter((o) => o.label.toLowerCase().includes(q)) : options;
    }, [options, query]);

    const visible = filtered.slice(0, visibleCount);

    const toggleKey = (key) =>
        setDraft((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]));

    const onListScroll = (e) => {
        const el = e.currentTarget;
        const nearBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 48;
        if (nearBottom && visibleCount < filtered.length) {
            setVisibleCount((c) => c + DROPDOWN_PAGE_SIZE);
        }
    };

    const onSearchChange = (e) => {
        setQuery(e.target.value);
        setVisibleCount(DROPDOWN_PAGE_SIZE);
        if (listRef.current) listRef.current.scrollTop = 0;
    };

    return (
        <div className="relative" ref={ref}>
            <button
                type="button"
                onClick={toggleOpen}
                aria-haspopup="listbox"
                aria-expanded={open}
                className="flex items-center gap-1.5 text-sm font-semibold text-forest hover:text-brick transition-colors cursor-pointer whitespace-nowrap"
            >
                {label}
                {selected.length > 0 && (
                    <span className="min-w-[18px] h-[18px] px-1 rounded-full bg-brick text-white text-[10px] font-bold flex items-center justify-center">
                        {selected.length}
                    </span>
                )}
                <Chevron open={open} />
            </button>

            {open && (
                <div className="absolute left-0 top-full mt-3 w-72 bg-surface border border-sage/25 rounded-xl shadow-[0_12px_32px_rgba(36,56,34,0.12)] z-40 overflow-hidden">
                    {/* Search */}
                    <div className="p-3 border-b border-sage/15">
                        <input
                            type="text"
                            value={query}
                            onChange={onSearchChange}
                            placeholder={searchPlaceholder}
                            autoFocus
                            className="w-full px-3 py-2 rounded-lg bg-white border border-sage/25 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-forest/20"
                        />
                    </div>

                    {/* Options (rendered in pages, loads more on scroll) */}
                    <div
                        ref={listRef}
                        onScroll={onListScroll}
                        role="listbox"
                        aria-multiselectable="true"
                        className="max-h-64 overflow-y-auto py-1"
                    >
                        {visible.map((opt) => {
                            const checked = draft.includes(opt.key);
                            return (
                                <label
                                    key={opt.key}
                                    className={`flex items-center gap-3 px-4 py-2.5 text-sm cursor-pointer transition-colors ${checked ? "text-forest font-semibold bg-forest/5" : "text-foreground/80 hover:bg-sage/10"
                                        }`}
                                >
                                    <input
                                        type="checkbox"
                                        checked={checked}
                                        onChange={() => toggleKey(opt.key)}
                                        className="sr-only"
                                    />
                                    <span
                                        className={`w-4 h-4 shrink-0 rounded border-2 flex items-center justify-center transition-colors ${checked ? "bg-forest border-forest" : "bg-white border-sage/50"
                                            }`}
                                    >
                                        {checked && (
                                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                            </svg>
                                        )}
                                    </span>
                                    <span className="truncate">{opt.label}</span>
                                </label>
                            );
                        })}

                        {filtered.length === 0 && (
                            <p className="px-4 py-6 text-sm text-foreground/50 text-center">No matches found</p>
                        )}
                        {visible.length < filtered.length && (
                            <p className="px-4 py-2 text-xs text-foreground/40 text-center">Scroll to load more…</p>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between px-4 py-3 border-t border-sage/15">
                        <button
                            type="button"
                            onClick={() => setDraft([])}
                            disabled={draft.length === 0}
                            className="text-xs font-bold text-brick hover:underline cursor-pointer disabled:opacity-40 disabled:no-underline disabled:cursor-not-allowed"
                        >
                            Clear
                        </button>
                        <button
                            type="button"
                            onClick={commit}
                            className="px-4 py-1.5 rounded-full bg-forest text-white text-xs font-bold tracking-wide hover:bg-brick transition-colors duration-300 cursor-pointer"
                        >
                            Apply{draft.length ? ` (${draft.length})` : ""}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

// ---------- Active filter chip ----------
function FilterChip({ prefix, label, onRemove }) {
    return (
        <span className="inline-flex items-center gap-1.5 max-w-full pl-3 pr-1.5 py-1 rounded-full bg-forest/10 border border-forest/20 text-xs font-semibold text-forest">
            {prefix && <span className="text-foreground/50 font-medium">{prefix}:</span>}
            <span className="truncate">{label}</span>
            <button
                type="button"
                onClick={onRemove}
                aria-label={`Remove ${label}`}
                className="w-4 h-4 shrink-0 rounded-full flex items-center justify-center hover:bg-forest hover:text-white transition-colors cursor-pointer"
            >
                <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </span>
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
    const subCategories = useMemo(
        () => searchParams.getAll("subCategory").map((s) => s.trim()).filter(Boolean),
        [searchParams]
    );
    const subCategoriesKey = subCategories.join("\u0001");
    const search = (searchParams.get("search") || "").trim();
    const sortBy = searchParams.get("sort") || "default";

    // value can be a string or an array (array -> repeated query param)
    const updateFilters = (changes) => {
        const params = new URLSearchParams(searchParams.toString());
        Object.entries(changes).forEach(([key, value]) => {
            params.delete(key);
            const values = Array.isArray(value) ? value : [value];
            values.forEach((v) => {
                if (v && v !== "default") params.append(key, v);
            });
        });
        const qs = params.toString();
        router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    };

    const hasActiveFilters = Boolean(category || subCategories.length || search || sortBy !== "default");

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
        if (subCategories.length) {
            if (MULTI_VALUE_STYLE === "comma") {
                qs.set(FILTER_PARAMS.subCategory, subCategories.join(","));
            } else {
                subCategories.forEach((s) => qs.append(FILTER_PARAMS.subCategory, s));
            }
        }
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
    }, [category, subCategoriesKey, search, sortBy, reloadKey]);

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
    // key = raw backend value (sent to the API), label = decoded text (shown to the user)
    const categoryOptions = useMemo(
        () => [
            { key: "", label: "All Categories" },
            ...navCategories.map((c) => ({ key: c.label, label: decodeEntities(c.label) })),
        ],
        [navCategories]
    );

    // Sub categories: only the selected category's, or all of them when no category is chosen
    const subCategoryOptions = useMemo(() => {
        const wanted = decodeEntities(category).toLowerCase();
        const source = category
            ? navCategories.filter((c) => decodeEntities(c.label).toLowerCase() === wanted)
            : navCategories;
        const seen = new Set();
        const list = [];
        source.forEach((c) =>
            c.items.forEach((i) => {
                const k = i.name.toLowerCase();
                if (!seen.has(k)) {
                    seen.add(k);
                    list.push({ key: i.name, label: decodeEntities(i.name) });
                }
            })
        );
        return list;
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
                                options={categoryOptions}
                                activeKey={category}
                                onSelect={(key) => updateFilters({ category: key, subCategory: [] })}
                            />
                            <MultiSelectDropdown
                                label="Sub Category"
                                options={subCategoryOptions}
                                selected={subCategories}
                                onApply={(keys) => updateFilters({ subCategory: keys })}
                                searchPlaceholder="Search sub category..."
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
                    {/* Active filters (category + every selected sub category) */}
                    {(category || subCategories.length > 0) && (
                        <div className="flex flex-wrap items-center gap-2 pt-6">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-foreground/50 mr-1">
                                Filters
                            </span>
                            {category && (
                                <FilterChip
                                    prefix="Category"
                                    label={decodeEntities(category)}
                                    onRemove={() => updateFilters({ category: "", subCategory: [] })}
                                />
                            )}
                            {subCategories.map((sub) => (
                                <FilterChip
                                    key={sub}
                                    label={decodeEntities(sub)}
                                    onRemove={() =>
                                        updateFilters({ subCategory: subCategories.filter((s) => s !== sub) })
                                    }
                                />
                            ))}
                        </div>
                    )}

                    {loading ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                            {Array.from({ length: 6 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="bg-white rounded-tl-[48px] rounded-br-[48px] border border-sage/20 overflow-hidden flex flex-col h-full animate-pulse"
                                >
                                    <div className="w-full h-56 sm:h-64 bg-background" />
                                    <div className="px-4 pt-4 pb-4">
                                        <div className="h-4 w-3/4 rounded bg-sage/15 mb-3" />
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
                            <p className="reveal-fade-up text-foreground/60 text-sm mt-6 mb-8">
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
                                                    <div className="relative w-full h-56 sm:h-64 bg-background flex items-center justify-center p-6 overflow-hidden">
                                                        <Image
                                                            src={product.image}
                                                            alt={product.shortTitle}
                                                            width={180}
                                                            height={180}
                                                            unoptimized={isRemote(product.image)}
                                                            className="absolute max-w-[70%] max-h-[70%] w-auto h-auto object-contain transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0"
                                                        />
                                                        <Image
                                                            src={product.hoverImage || product.image}
                                                            alt={`${product.shortTitle} alternate view`}
                                                            width={180}
                                                            height={180}
                                                            unoptimized={isRemote(product.hoverImage || product.image)}
                                                            className="absolute max-w-[70%] max-h-[70%] w-auto h-auto object-contain transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
                                                        />
                                                    </div>

                                                    {/* Content */}
                                                    <div className="flex flex-col flex-grow px-4 pt-4 pb-4">
                                                        <div>
                                                            <h4
                                                                title={product.title}
                                                                className="font-serif text-base sm:text-[17px] font-bold text-forest leading-snug mb-1 line-clamp-2 group-hover:text-brick transition-colors duration-300"
                                                            >
                                                                {product.shortTitle}
                                                            </h4>
                                                            {product.subtitle && (
                                                                <p
                                                                    title={product.subtitle}
                                                                    className="text-foreground/50 text-xs leading-relaxed line-clamp-2 mb-2"
                                                                >
                                                                    {product.subtitle}
                                                                </p>
                                                            )}
                                                            <div className="flex items-center gap-1.5 text-brick text-[11px] font-semibold">
                                                                <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                                                </svg>
                                                                <span className="truncate">{product.feature}</span>
                                                            </div>
                                                        </div>

                                                        {/* CTAs */}
                                                        <div className="mt-auto pt-4 flex items-center gap-2.5">
                                                            <button
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    addToCart(product);
                                                                }}
                                                                className="flex-1 text-[11px] font-bold tracking-wide uppercase py-2 px-3 rounded-lg border-2 border-forest text-forest hover:bg-forest hover:text-white transition-all duration-300 cursor-pointer"
                                                            >
                                                                Add to Cart
                                                            </button>

                                                            <Link
                                                                href={product.href}
                                                                onClick={(e) => e.stopPropagation()}
                                                                className="group/btn relative overflow-hidden flex-1 bg-forest border-2 border-forest text-white py-2 pl-4 pr-1.5 rounded-lg text-[11px] font-bold tracking-wide uppercase flex items-center justify-center gap-2 transition-all duration-300 no-underline cursor-pointer"
                                                            >
                                                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[125%] aspect-square rounded-t-[50%] bg-white translate-y-full transition-transform duration-[750ms] ease-in-out z-0 group-hover/btn:translate-y-[12%]" />
                                                                <span className="relative z-10 transition-colors duration-300 group-hover/btn:text-forest">
                                                                    View Details
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