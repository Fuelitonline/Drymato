"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useAuth } from "@/context/AuthContext";

const CLOSE_MS = 250;
const EASE = "ease-[cubic-bezier(0.16,1,0.3,1)]";
const FOCUSABLE =
    'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';

// ---------------------------------------------------------------------------
// Generic popup: portal, backdrop, focus trap, Escape, scroll lock, enter/exit animation.
// Bottom sheet on phones, centred card from the sm breakpoint up.
// Children are mounted only while the popup is open, so their state resets on close.
// ---------------------------------------------------------------------------
export default function Modal({ open, onClose, title, busy = false, dismissOnBackdrop = true, children }) {
    const titleId = useId();
    const dialogRef = useRef(null);
    const lastFocusRef = useRef(null);
    const [render, setRender] = useState(false); // mounted
    const [show, setShow] = useState(false); // visible (drives the animation)

    // Mount / unmount with enter and exit animation
    useEffect(() => {
        if (open) {
            lastFocusRef.current = document.activeElement;
            setRender(true);
            const raf = requestAnimationFrame(() => requestAnimationFrame(() => setShow(true)));
            return () => cancelAnimationFrame(raf);
        }

        setShow(false);
        const timer = setTimeout(() => {
            setRender(false);
            lastFocusRef.current?.focus?.();
        }, CLOSE_MS);
        return () => clearTimeout(timer);
    }, [open]);

    // Lock page scroll while open (compensate for the scrollbar to avoid layout shift)
    useEffect(() => {
        if (!render) return;
        const { overflow, paddingRight } = document.body.style;
        const scrollbar = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = "hidden";
        if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;
        return () => {
            document.body.style.overflow = overflow;
            document.body.style.paddingRight = paddingRight;
        };
    }, [render]);

    // Escape closes; Tab stays inside the dialog
    useEffect(() => {
        if (!render) return;

        const onKeyDown = (e) => {
            if (e.key === "Escape") {
                if (!busy) onClose();
                return;
            }
            if (e.key !== "Tab" || !dialogRef.current) return;

            const nodes = Array.from(dialogRef.current.querySelectorAll(FOCUSABLE));
            if (!nodes.length) return;
            const first = nodes[0];
            const last = nodes[nodes.length - 1];
            const active = document.activeElement;

            if (!dialogRef.current.contains(active)) {
                e.preventDefault();
                first.focus();
            } else if (e.shiftKey && active === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && active === last) {
                e.preventDefault();
                first.focus();
            }
        };

        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [render, busy, onClose]);

    // Move focus into the dialog once it is visible
    useEffect(() => {
        if (!show) return;
        const timer = setTimeout(() => {
            const dialog = dialogRef.current;
            if (!dialog) return;
            const target = dialog.querySelector("[data-autofocus]") || dialog.querySelector("input:not([readonly])");
            (target || dialog).focus({ preventScroll: true });
        }, 80);
        return () => clearTimeout(timer);
    }, [show]);

    if (!render || typeof document === "undefined") return null;

    return createPortal(
        <div className="fixed inset-0 z-[210] flex items-end justify-center sm:items-center sm:p-4">
            <div
                aria-hidden="true"
                onMouseDown={() => {
                    if (dismissOnBackdrop && !busy) onClose();
                }}
                className={`absolute inset-0 bg-black/55 backdrop-blur-sm transition-opacity duration-300 ${
                    show ? "opacity-100" : "opacity-0"
                }`}
            />

            <div
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
                tabIndex={-1}
                className={`relative max-h-[92dvh] w-full overflow-y-auto rounded-t-[24px] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.35)] outline-none transition-all duration-300 ${EASE} sm:max-w-[520px] sm:rounded-2xl ${
                    show ? "translate-y-0 scale-100 opacity-100" : "translate-y-full opacity-0 sm:translate-y-4 sm:scale-[0.98]"
                }`}
            >
                <div className="flex items-start justify-between gap-4 px-5 pt-5 sm:px-7 sm:pt-6">
                    <h2 id={titleId} className="text-[24px] font-semibold leading-tight text-foreground sm:text-[26px]">
                        {title}
                    </h2>
                    <button
                        type="button"
                        onClick={onClose}
                        disabled={busy}
                        aria-label="Close"
                        className="-mr-2 -mt-1 flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-sage/15 hover:text-foreground disabled:cursor-not-allowed disabled:opacity-40"
                    >
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-3 sm:px-7 sm:pb-7">{children}</div>
            </div>
        </div>,
        document.body
    );
}

// ---------------------------------------------------------------------------
// Log out confirmation (use it anywhere a Log out button exists)
//   const [logoutOpen, setLogoutOpen] = useState(false);
//   <LogoutDialog open={logoutOpen} onClose={() => setLogoutOpen(false)} />
// ---------------------------------------------------------------------------
export function LogoutDialog({ open, onClose }) {
    const { logout } = useAuth();
    const [busy, setBusy] = useState(false);

    const confirm = async () => {
        if (busy) return;
        setBusy(true);
        try {
            const done = await logout(); // shows its own success / error toast
            if (done) onClose();
        } finally {
            setBusy(false);
        }
    };

    return (
        <Modal open={open} onClose={onClose} busy={busy} title="Log out?">
            <p className="text-[14px] leading-relaxed text-gray-600">
                You will need to log in again to access your account.
            </p>
            <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <button
                    type="button"
                    data-autofocus
                    onClick={onClose}
                    disabled={busy}
                    className="h-11 w-full cursor-pointer rounded-lg border border-sage/40 px-6 text-[13px] font-bold tracking-wider text-gray-700 transition-colors hover:bg-sage/10 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                >
                    Cancel
                </button>
                <button
                    type="button"
                    onClick={confirm}
                    disabled={busy}
                    className="flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-forest px-7 text-[13px] font-bold tracking-wider text-white shadow-[0_8px_18px_rgba(36,56,34,0.2)] transition-colors hover:bg-forest-light disabled:cursor-wait disabled:opacity-80 sm:w-auto"
                >
                    {busy && (
                        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.3" strokeWidth="3" />
                            <path d="M21 12a9 9 0 00-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                    )}
                    Log out
                </button>
            </div>
        </Modal>
    );
}