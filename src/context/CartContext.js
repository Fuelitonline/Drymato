"use client";

import { createContext, useContext, useEffect, useState, useCallback, useMemo, useRef } from "react";

const STORAGE_KEY = "drymato_cart_v1";

export const PACK_SIZES = ["100g", "250g", "500g", "1kg", "5kg", "Bulk"];
export const DEFAULT_PACK = "1kg";
export const MAX_QTY = 999;

const CartContext = createContext(null);

const makeKey = (id, packSize) => `${id}__${packSize}`;

function readStorage() {
    try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
}

function writeStorage(items) {
    try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
        /* storage full or blocked - cart still works for this session */
    }
}

export function CartProvider({ children }) {
    const [items, setItems] = useState([]);
    const [hydrated, setHydrated] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [lastAddedKey, setLastAddedKey] = useState(null);
    const highlightTimer = useRef(null);

    // Load saved cart once on mount, and keep other tabs in sync
    useEffect(() => {
        setItems(readStorage());
        setHydrated(true);

        const onStorage = (e) => {
            if (e.key === STORAGE_KEY) setItems(readStorage());
        };
        window.addEventListener("storage", onStorage);
        return () => window.removeEventListener("storage", onStorage);
    }, []);

    // Persist every change (only after the first load, so we never overwrite with [])
    useEffect(() => {
        if (hydrated) writeStorage(items);
    }, [items, hydrated]);

    const openCart = useCallback(() => setIsOpen(true), []);
    const closeCart = useCallback(() => setIsOpen(false), []);

    const addItem = useCallback((product, options = {}) => {
        if (!product) return;
        const { packSize = DEFAULT_PACK, quantity = 1, openCart: shouldOpen = true } = options;
        const key = makeKey(product.id, packSize);

        setItems((prev) => {
            const existing = prev.find((i) => i.key === key);
            if (existing) {
                return prev.map((i) =>
                    i.key === key ? { ...i, quantity: Math.min(i.quantity + quantity, MAX_QTY) } : i
                );
            }
            return [
                ...prev,
                {
                    key,
                    id: product.id,
                    title: product.title,
                    subtitle: product.subtitle || "",
                    image: product.image,
                    href: product.href,
                    packSize,
                    quantity,
                },
            ];
        });

        setLastAddedKey(key);
        clearTimeout(highlightTimer.current);
        highlightTimer.current = setTimeout(() => setLastAddedKey(null), 2200);

        if (shouldOpen) setIsOpen(true);
    }, []);

    const updateQuantity = useCallback((key, quantity) => {
        const next = Math.max(1, Math.min(MAX_QTY, Math.floor(quantity) || 1));
        setItems((prev) => prev.map((i) => (i.key === key ? { ...i, quantity: next } : i)));
    }, []);

    const updatePackSize = useCallback((key, newPack) => {
        setItems((prev) => {
            const current = prev.find((i) => i.key === key);
            if (!current || current.packSize === newPack) return prev;

            const newKey = makeKey(current.id, newPack);
            const target = prev.find((i) => i.key === newKey);

            // Same product + same pack already in the cart: merge the two lines
            if (target) {
                return prev
                    .filter((i) => i.key !== key)
                    .map((i) =>
                        i.key === newKey
                            ? { ...i, quantity: Math.min(i.quantity + current.quantity, MAX_QTY) }
                            : i
                    );
            }
            return prev.map((i) => (i.key === key ? { ...i, key: newKey, packSize: newPack } : i));
        });
    }, []);

    const removeItem = useCallback((key) => {
        setItems((prev) => prev.filter((i) => i.key !== key));
    }, []);

    const clearCart = useCallback(() => setItems([]), []);

    const totalQuantity = useMemo(() => items.reduce((sum, i) => sum + i.quantity, 0), [items]);
    const lineCount = items.length;

    const value = useMemo(
        () => ({
            items,
            hydrated,
            isOpen,
            lastAddedKey,
            totalQuantity,
            lineCount,
            openCart,
            closeCart,
            addItem,
            updateQuantity,
            updatePackSize,
            removeItem,
            clearCart,
        }),
        [items, hydrated, isOpen, lastAddedKey, totalQuantity, lineCount, openCart, closeCart, addItem, updateQuantity, updatePackSize, removeItem, clearCart]
    );

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
    return ctx;
}