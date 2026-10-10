"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { FaTimes, FaTrashAlt, FaMinus, FaPlus, FaArrowRight, FaChevronDown, FaInfoCircle } from "react-icons/fa";
import { useCart, PACK_SIZES, MAX_QTY } from "@/context/CartContext";

function QtyStepper({ value, onChange }) {
    const [draft, setDraft] = useState(String(value));

    useEffect(() => {
        setDraft(String(value));
    }, [value]);

    const commit = () => {
        const n = parseInt(draft, 10);
        if (!n || n < 1) {
            setDraft(String(value));
            return;
        }
        const clamped = Math.min(n, MAX_QTY);
        setDraft(String(clamped));
        onChange(clamped);
    };

    return (
        <div className="flex items-center rounded-lg border border-sage/30 bg-white overflow-hidden">
            <button
                type="button"
                onClick={() => onChange(value - 1)}
                disabled={value <= 1}
                aria-label="Decrease quantity"
                className="w-8 h-8 flex items-center justify-center text-forest hover:bg-[#eaf3ec] disabled:text-gray-300 disabled:hover:bg-transparent transition-colors cursor-pointer disabled:cursor-not-allowed"
            >
                <FaMinus size={9} />
            </button>
            <input
                type="text"
                inputMode="numeric"
                value={draft}
                onChange={(e) => setDraft(e.target.value.replace(/\D/g, "").slice(0, 3))}
                onBlur={commit}
                onKeyDown={(e) => e.key === "Enter" && e.currentTarget.blur()}
                aria-label="Quantity"
                className="w-9 h-8 text-center text-sm font-semibold text-gray-900 bg-transparent focus:outline-none"
            />
            <button
                type="button"
                onClick={() => onChange(value + 1)}
                disabled={value >= MAX_QTY}
                aria-label="Increase quantity"
                className="w-8 h-8 flex items-center justify-center text-forest hover:bg-[#eaf3ec] disabled:text-gray-300 transition-colors cursor-pointer disabled:cursor-not-allowed"
            >
                <FaPlus size={9} />
            </button>
        </div>
    );
}

function CartLine({ item, highlighted }) {
    const { closeCart, updateQuantity, updatePackSize, removeItem } = useCart();

    return (
        <li
            className={`cart-line flex gap-4 rounded-2xl border p-3 transition-colors duration-700 ${highlighted ? "border-forest/50 bg-[#eaf3ec]/60" : "border-sage/20 bg-white"
                }`}
        >
            <Link
                href={item.href || "/product"}
                onClick={closeCart}
                className="relative w-24 h-24 shrink-0 rounded-xl bg-background flex items-center justify-center overflow-hidden"
            >
                <Image
                    src={item.image}
                    alt={item.title}
                    width={80}
                    height={80}
                    className="max-w-[78%] max-h-[78%] w-auto h-auto object-contain"
                />
            </Link>

            <div className="flex-1 min-w-0 flex flex-col">
                <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                        <Link
                            href={item.href || "/product"}
                            onClick={closeCart}
                            className="block font-serif text-[15px] font-bold text-forest leading-snug hover:text-brick transition-colors no-underline"
                        >
                            {item.title}
                        </Link>
                        {item.subtitle && <p className="text-xs text-foreground/40 mt-0.5">{item.subtitle}</p>}
                    </div>
                    <button
                        type="button"
                        onClick={() => removeItem(item.key)}
                        aria-label={`Remove ${item.title}`}
                        className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-gray-400 hover:text-brick hover:bg-brick/5 transition-colors cursor-pointer"
                    >
                        <FaTrashAlt size={12} />
                    </button>
                </div>

                <div className="mt-auto pt-3 flex items-end justify-between gap-3">
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-wide text-gray-400 mb-1">Pack size</p>
                        <div className="relative">
                            <select
                                value={item.packSize}
                                onChange={(e) => updatePackSize(item.key, e.target.value)}
                                aria-label="Pack size"
                                className="appearance-none h-8 pl-3 pr-7 rounded-lg border border-sage/30 bg-white text-xs font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-forest/20 cursor-pointer"
                            >
                                {PACK_SIZES.map((size) => (
                                    <option key={size} value={size}>
                                        {size}
                                    </option>
                                ))}
                            </select>
                            <FaChevronDown size={9} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-forest pointer-events-none" />
                        </div>
                    </div>

                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-wide text-gray-400 mb-1">Quantity</p>
                        <QtyStepper value={item.quantity} onChange={(q) => updateQuantity(item.key, q)} />
                    </div>
                </div>
            </div>
        </li>
    );
}

function EmptyCart() {
    const { closeCart } = useCart();

    return (
        <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
            <svg viewBox="0 0 120 120" className="w-36 h-36 text-forest mb-6" fill="none" aria-hidden="true">
                <circle cx="60" cy="60" r="56" className="fill-[#eaf3ec]" />
                <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M30 54h60l-7 38a6 6 0 0 1-6 5H43a6 6 0 0 1-6-5z" />
                    <path d="M44 54l10-22M76 54L66 32" />
                    <path d="M37 69h46M41 83h38" opacity="0.5" />
                    <path d="M60 30c8-3 15 1 17 8-8 3-15-1-17-8z" />
                </g>
            </svg>

            <h3 className="font-serif text-2xl font-bold text-forest mb-2">Your cart is empty</h3>
            <p className="text-sm text-foreground/60 leading-relaxed max-w-[260px] mb-8">
                Explore our dehydrated range and add products to build your bulk order.
            </p>

            <Link
                href="/product"
                onClick={closeCart}
                className="group relative overflow-hidden inline-flex bg-forest border-2 border-forest text-white pl-7 pr-2 py-2.5 rounded-full text-xs font-bold tracking-wide uppercase items-center gap-3 transition-all duration-300 no-underline cursor-pointer"
            >
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[125%] aspect-square rounded-t-[50%] bg-white translate-y-full transition-transform duration-[750ms] ease-in-out z-0 group-hover:translate-y-[12%]" />
                <span className="relative z-10 transition-colors duration-300 group-hover:text-forest">Browse Products</span>
                <span className="relative z-10 w-7 h-7 bg-white text-forest rounded-full flex items-center justify-center shadow-sm transform group-hover:translate-x-1 group-hover:bg-forest group-hover:text-white transition-all duration-300">
                    <FaArrowRight size={11} />
                </span>
            </Link>
        </div>
    );
}

export default function CartSidebar() {
    const { items, isOpen, closeCart, openCart, clearCart, lastAddedKey, totalQuantity, lineCount } = useCart();
    const isEmpty = items.length === 0;

    const router = useRouter();
    const { isAuthenticated, isModalOpen, openAuthModal, closeAuthModal } = useAuth();
    const [pendingCheckout, setPendingCheckout] = useState(false);

    const handleCheckout = () => {
        closeCart();
        if (isAuthenticated) {
            router.push("/checkout");
            return;
        }
        setPendingCheckout(true);
        openAuthModal("login");
    };

    useEffect(() => {
        if (!pendingCheckout) return;
        if (isAuthenticated) {
            setPendingCheckout(false);
            closeAuthModal();
            router.push("/checkout");
        } else if (!isModalOpen) {
            // login modal closed without signing in: bring the cart back
            setPendingCheckout(false);
            openCart();
        }
    }, [pendingCheckout, isAuthenticated, isModalOpen, closeAuthModal, openCart, router]);

    // Escape to close + lock page scroll while open
    useEffect(() => {
        if (!isOpen) return;
        const onKey = (e) => e.key === "Escape" && closeCart();
        document.addEventListener("keydown", onKey);
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = previousOverflow;
        };
    }, [isOpen, closeCart]);

    return (
        <div
            className={`fixed inset-0 z-[120] transition-[visibility] duration-0 ${isOpen ? "visible" : "invisible delay-300 pointer-events-none"
                }`}
            aria-hidden={!isOpen}
        >
            <style>{`
                @keyframes cart-line-in {
                    from { opacity: 0; transform: translateX(16px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                .cart-line { animation: cart-line-in 0.35s ease-out both; }
                @media (prefers-reduced-motion: reduce) { .cart-line { animation: none; } }
            `}</style>

            {/* Overlay */}
            <div
                onClick={closeCart}
                className={`absolute inset-0 bg-black/55 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"
                    }`}
            />

            {/* Panel */}
            <aside
                role="dialog"
                aria-modal="true"
                aria-label="Shopping cart"
                className={`absolute inset-y-0 right-0 w-full max-w-[520px] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-3 border-b border-sage/20">
                    <div>
                        <h2 className="font-serif text-xl font-bold text-forest">Your Cart</h2>
                        {!isEmpty && (
                            <p className="text-xs text-foreground/50 mt-0.5">
                                {totalQuantity} {totalQuantity === 1 ? "item" : "items"} across {lineCount}{" "}
                                {lineCount === 1 ? "product" : "products"}
                            </p>
                        )}
                    </div>
                    <button
                        type="button"
                        onClick={closeCart}
                        aria-label="Close cart"
                        className="w-9 h-9 rounded-full flex items-center justify-center text-gray-500 hover:text-forest hover:bg-[#eaf3ec] transition-colors cursor-pointer"
                    >
                        <FaTimes size={15} />
                    </button>
                </div>

                {isEmpty ? (
                    <EmptyCart />
                ) : (
                    <>
                        <ul className="flex-1 overflow-y-auto px-6 py-5 space-y-3 list-none m-0">
                            {items.map((item) => (
                                <CartLine key={item.key} item={item} highlighted={lastAddedKey === item.key} />
                            ))}
                        </ul>

                        {/* Footer */}
                        <div className="border-t border-sage/20 px-6 pt-3 pb-3 bg-white">
                            <dl className="space-y-2 text-sm">
                                <div className="flex items-center justify-between">
                                    <dt className="text-foreground/60">Products</dt>
                                    <dd className="font-semibold text-gray-900">{lineCount}</dd>
                                </div>
                                <div className="flex items-center justify-between">
                                    <dt className="text-foreground/60">Total quantity</dt>
                                    <dd className="font-semibold text-gray-900">{totalQuantity}</dd>
                                </div>
                            </dl>

                            <div className="mt-4 flex items-start gap-2.5 rounded-xl bg-[#eaf3ec] px-4 py-3 text-xs text-forest leading-relaxed">
                                <FaInfoCircle size={13} className="mt-0.5 shrink-0" />
                                <span>
                                    Pricing and delivery charges are confirmed by our team after you place your order. No
                                    payment is taken now.
                                </span>
                            </div>

                            <button
                                type="button"
                                onClick={handleCheckout}
                                className="group relative overflow-hidden mt-5 w-full bg-forest border-2 border-forest text-white py-3 pl-6 pr-2 rounded-full text-xs font-bold tracking-wide uppercase flex items-center justify-center gap-3 transition-all duration-300 cursor-pointer"
                            >
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[125%] aspect-square rounded-t-[50%] bg-white translate-y-full transition-transform duration-[750ms] ease-in-out z-0 group-hover:translate-y-[12%]" />
                                <span className="relative z-10 transition-colors duration-300 group-hover:text-forest">
                                    Proceed to Checkout
                                </span>
                                <span className="relative z-10 w-7 h-7 bg-white text-forest rounded-full flex items-center justify-center shadow-sm transform group-hover:translate-x-1 group-hover:bg-forest group-hover:text-white transition-all duration-300">
                                    <FaArrowRight size={11} />
                                </span>
                            </button>

                            <button
                                type="button"
                                onClick={closeCart}
                                className="mt-3 w-full py-3 rounded-full border-2 border-forest text-forest text-xs font-bold tracking-wide uppercase hover:bg-forest hover:text-white transition-all duration-300 cursor-pointer"
                            >
                                Continue Shopping
                            </button>

                            <button
                                type="button"
                                onClick={clearCart}
                                className="mt-4 w-full text-center text-xs font-semibold text-gray-400 hover:text-brick transition-colors cursor-pointer"
                            >
                                Clear cart
                            </button>
                        </div>
                    </>
                )}
            </aside>
        </div>
    );
}