// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { FaCheck, FaArrowRight } from "react-icons/fa";
// import { useCart } from "@/context/CartContext";

// const ORDERS_KEY = "drymato_orders";

// const BUSINESS_TYPES = [
//     "Restaurant / HoReCa",
//     "Food Manufacturer",
//     "Distributor / Wholesaler",
//     "Exporter",
//     "Retailer",
//     "Other",
// ];

// const INITIAL_FORM = {
//     fullName: "",
//     email: "",
//     phone: "",
//     company: "",
//     businessType: "",
//     address: "",
//     city: "",
//     state: "",
//     postalCode: "",
//     country: "India",
//     notes: "",
// };

// const PROGRESS_STEPS = ["Verifying your items", "Checking availability", "Confirming your order"];

// const NEXT_STEPS = [
//     { title: "Order review", text: "Our team reviews your items and pack sizes." },
//     { title: "Price and availability", text: "We contact you with final pricing, lead time and delivery details." },
//     { title: "Dispatch", text: "Once confirmed, your order is packed and scheduled for dispatch." },
// ];

// const inputClass = (hasError) =>
//     `w-full px-4 py-2.5 rounded-lg bg-background border text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-forest/20 transition-all ${hasError ? "border-brick" : "border-sage/25"
//     }`;

// const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// function validate(f) {
//     const e = {};
//     if (!f.fullName.trim()) e.fullName = "Please enter your full name";
//     if (!/^\S+@\S+\.\S+$/.test(f.email.trim())) e.email = "Enter a valid email address";
//     if (f.phone.replace(/\D/g, "").length < 10) e.phone = "Enter a valid phone number";
//     if (!f.address.trim()) e.address = "Please enter your delivery address";
//     if (!f.city.trim()) e.city = "Required";
//     if (!f.state.trim()) e.state = "Required";
//     if (!f.postalCode.trim()) e.postalCode = "Required";
//     if (!f.country.trim()) e.country = "Required";
//     return e;
// }

// function generateOrderId() {
//     const d = new Date();
//     const stamp = `${String(d.getFullYear()).slice(2)}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`;
//     return `DRY-${stamp}-${Math.floor(1000 + Math.random() * 9000)}`;
// }

// function saveOrder(order) {
//     try {
//         const existing = JSON.parse(window.localStorage.getItem(ORDERS_KEY) || "[]");
//         window.localStorage.setItem(ORDERS_KEY, JSON.stringify([order, ...existing]));
//     } catch {
//         /* ignore storage errors */
//     }
// }

// function Field({ label, required, error, children }) {
//     return (
//         <div>
//             <label className="block text-xs font-bold text-gray-700 mb-2">
//                 {label}
//                 {required && " *"}
//             </label>
//             {children}
//             {error && <p className="text-[11px] text-brick mt-1.5">{error}</p>}
//         </div>
//     );
// }

// function SectionHeading({ number, title }) {
//     return (
//         <div className="flex items-center gap-3 mb-6">
//             <span className="w-7 h-7 rounded-full bg-[#eaf3ec] text-forest text-xs font-bold flex items-center justify-center">
//                 {number}
//             </span>
//             <h2 className="font-serif text-lg font-semibold text-gray-900">{title}</h2>
//         </div>
//     );
// }

// function OrderSuccess({ order }) {
//     return (
//         <div className="bg-background min-h-[70vh] py-14 sm:py-20">
//             <div className="max-w-2xl mx-auto px-6">
//                 <div className="bg-white rounded-2xl border border-sage/20 p-8 sm:p-10 text-center">
//                     <span className="mx-auto w-16 h-16 rounded-full bg-[#eaf3ec] text-forest flex items-center justify-center mb-6">
//                         <FaCheck size={24} />
//                     </span>
//                     <h1 className="font-serif text-2xl sm:text-3xl font-semibold text-forest mb-2">
//                         Order request received
//                     </h1>
//                     <p className="text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
//                         Thank you, {order.customer.fullName.split(" ")[0]}. Our team will contact you at{" "}
//                         <span className="font-semibold text-gray-900">{order.customer.email}</span> to confirm pricing and
//                         dispatch.
//                     </p>

//                     <div className="inline-flex flex-col items-center mt-6 px-6 py-3 rounded-xl bg-[#eaf3ec]">
//                         <span className="text-[10px] font-bold uppercase tracking-widest text-forest/70">Order reference</span>
//                         <span className="font-poppins text-lg font-bold text-forest tracking-wide">{order.id}</span>
//                     </div>

//                     <ul className="mt-8 text-left divide-y divide-sage/15 border-t border-b border-sage/15 list-none p-0 m-0">
//                         {order.items.map((item) => (
//                             <li key={item.key} className="flex items-center gap-4 py-3.5">
//                                 <span className="w-12 h-12 rounded-lg bg-background flex items-center justify-center shrink-0">
//                                     <Image
//                                         src={item.image}
//                                         alt={item.title}
//                                         width={40}
//                                         height={40}
//                                         className="max-w-[80%] max-h-[80%] w-auto h-auto object-contain"
//                                     />
//                                 </span>
//                                 <div className="flex-1 min-w-0">
//                                     <p className="text-sm font-bold text-gray-900 truncate">{item.title}</p>
//                                     <p className="text-xs text-gray-500">Pack size: {item.packSize}</p>
//                                 </div>
//                                 <span className="text-sm font-semibold text-gray-900">x {item.quantity}</span>
//                             </li>
//                         ))}
//                     </ul>

//                     <div className="mt-8 text-left">
//                         <h3 className="font-serif text-base font-semibold text-gray-900 mb-4">What happens next</h3>
//                         <ol className="space-y-4 list-none p-0 m-0">
//                             {NEXT_STEPS.map((step, i) => (
//                                 <li key={step.title} className="flex gap-4">
//                                     <span className="w-6 h-6 rounded-full bg-forest text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
//                                         {i + 1}
//                                     </span>
//                                     <div>
//                                         <p className="text-sm font-bold text-gray-900">{step.title}</p>
//                                         <p className="text-sm text-gray-600 leading-relaxed">{step.text}</p>
//                                     </div>
//                                 </li>
//                             ))}
//                         </ol>
//                     </div>

//                     <div className="mt-10 flex flex-col sm:flex-row items-stretch justify-center gap-3">
//                         <Link
//                             href="/product"
//                             className="px-8 py-3 rounded-full bg-forest border-2 border-forest text-white text-xs font-bold tracking-wide uppercase hover:bg-[#245633] transition-all duration-300 no-underline"
//                         >
//                             Continue Shopping
//                         </Link>
//                         <Link
//                             href="/"
//                             className="px-8 py-3 rounded-full border-2 border-forest text-forest text-xs font-bold tracking-wide uppercase hover:bg-forest hover:text-white transition-all duration-300 no-underline"
//                         >
//                             Back to Home
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default function CheckoutClient() {
//     const { items, hydrated, totalQuantity, lineCount, clearCart, openCart } = useCart();

//     const [form, setForm] = useState(INITIAL_FORM);
//     const [errors, setErrors] = useState({});
//     const [submitting, setSubmitting] = useState(false);
//     const [progress, setProgress] = useState("");
//     const [placedOrder, setPlacedOrder] = useState(null);

//     const bind = (name) => ({
//         name,
//         value: form[name],
//         onChange: (e) => {
//             const value = e.target.value;
//             setForm((prev) => ({ ...prev, [name]: value }));
//             if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
//         },
//     });

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (submitting) return;

//         const found = validate(form);
//         setErrors(found);
//         const firstInvalid = Object.keys(found)[0];
//         if (firstInvalid) {
//             document.querySelector(`[name="${firstInvalid}"]`)?.focus();
//             return;
//         }

//         setSubmitting(true);
//         for (const step of PROGRESS_STEPS) {
//             setProgress(step);
//             await wait(700);
//         }

//         // BACKEND: replace everything below with a POST to your orders API
//         // (send `order`), then use the id returned by the server.
//         const order = {
//             id: generateOrderId(),
//             createdAt: new Date().toISOString(),
//             customer: { ...form },
//             items: items.map((i) => ({ ...i })),
//         };
//         saveOrder(order);

//         setPlacedOrder(order);
//         clearCart();
//         setSubmitting(false);
//         window.scrollTo({ top: 0, behavior: "smooth" });
//     };

//     if (placedOrder) return <OrderSuccess order={placedOrder} />;

//     if (!hydrated) return <div className="bg-background min-h-[70vh]" />;

//     if (items.length === 0) {
//         return (
//             <div className="bg-background min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
//                 <h1 className="font-serif text-2xl sm:text-3xl font-semibold text-forest mb-3">Your cart is empty</h1>
//                 <p className="text-sm text-foreground/60 max-w-md mb-8">
//                     Add a few products to your cart and come back here to place your order.
//                 </p>
//                 <Link
//                     href="/product"
//                     className="inline-flex bg-forest hover:bg-[#245633] text-white text-xs font-bold tracking-wide uppercase px-8 py-3.5 rounded-full transition-all duration-300 no-underline"
//                 >
//                     Browse Products
//                 </Link>
//             </div>
//         );
//     }

//     return (
//         <div className="bg-background">
//             <section className="max-w-7xl mx-auto px-6 py-10 sm:py-14">
//                 <div className="flex items-center gap-2 text-xs text-gray-400 font-medium mb-4">
//                     <Link href="/" className="hover:text-forest transition-colors">Home</Link>
//                     <span>/</span>
//                     <Link href="/product" className="hover:text-forest transition-colors">Products</Link>
//                     <span>/</span>
//                     <span className="text-gray-600">Checkout</span>
//                 </div>
//                 <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-forest tracking-tight mb-10">Checkout</h1>

//                 <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 lg:gap-10 items-start">
//                     {/* Form */}
//                     <form id="checkout-form" onSubmit={handleSubmit} noValidate className="space-y-6">
//                         <div className="bg-white rounded-2xl border border-sage/20 p-6 sm:p-8">
//                             <SectionHeading number="1" title="Contact details" />
//                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                                 <Field label="Full name" required error={errors.fullName}>
//                                     <input type="text" placeholder="Ex. Rajesh Mehta" className={inputClass(errors.fullName)} {...bind("fullName")} />
//                                 </Field>
//                                 <Field label="Phone" required error={errors.phone}>
//                                     <input type="tel" placeholder="+91 98765 43210" className={inputClass(errors.phone)} {...bind("phone")} />
//                                 </Field>
//                                 <div className="sm:col-span-2">
//                                     <Field label="Email" required error={errors.email}>
//                                         <input type="email" placeholder="you@company.com" className={inputClass(errors.email)} {...bind("email")} />
//                                     </Field>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="bg-white rounded-2xl border border-sage/20 p-6 sm:p-8">
//                             <SectionHeading number="2" title="Business details" />
//                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                                 <Field label="Company name">
//                                     <input type="text" placeholder="Optional" className={inputClass(false)} {...bind("company")} />
//                                 </Field>
//                                 <Field label="Business type">
//                                     <select className={`${inputClass(false)} cursor-pointer`} {...bind("businessType")}>
//                                         <option value="">Select</option>
//                                         {BUSINESS_TYPES.map((t) => (
//                                             <option key={t} value={t}>{t}</option>
//                                         ))}
//                                     </select>
//                                 </Field>
//                             </div>
//                         </div>

//                         <div className="bg-white rounded-2xl border border-sage/20 p-6 sm:p-8">
//                             <SectionHeading number="3" title="Delivery address" />
//                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                                 <div className="sm:col-span-2">
//                                     <Field label="Address" required error={errors.address}>
//                                         <input type="text" placeholder="Building, street, area" className={inputClass(errors.address)} {...bind("address")} />
//                                     </Field>
//                                 </div>
//                                 <Field label="City" required error={errors.city}>
//                                     <input type="text" className={inputClass(errors.city)} {...bind("city")} />
//                                 </Field>
//                                 <Field label="State" required error={errors.state}>
//                                     <input type="text" className={inputClass(errors.state)} {...bind("state")} />
//                                 </Field>
//                                 <Field label="PIN / ZIP code" required error={errors.postalCode}>
//                                     <input type="text" className={inputClass(errors.postalCode)} {...bind("postalCode")} />
//                                 </Field>
//                                 <Field label="Country" required error={errors.country}>
//                                     <input type="text" className={inputClass(errors.country)} {...bind("country")} />
//                                 </Field>
//                             </div>
//                         </div>

//                         <div className="bg-white rounded-2xl border border-sage/20 p-6 sm:p-8">
//                             <SectionHeading number="4" title="Order notes" />
//                             <Field label="Anything we should know? (optional)">
//                                 <textarea
//                                     rows={4}
//                                     placeholder="Packaging preferences, delivery timelines, certifications needed..."
//                                     className={`${inputClass(false)} resize-none`}
//                                     {...bind("notes")}
//                                 />
//                             </Field>
//                         </div>
//                     </form>

//                     {/* Summary */}
//                     <aside className="bg-white rounded-2xl border border-sage/20 p-6 sm:p-7 lg:sticky lg:top-28">
//                         <div className="flex items-center justify-between mb-5">
//                             <h2 className="font-serif text-lg font-semibold text-gray-900">Order summary</h2>
//                             <button
//                                 type="button"
//                                 onClick={openCart}
//                                 className="text-xs font-bold text-forest hover:underline underline-offset-2 cursor-pointer"
//                             >
//                                 Edit cart
//                             </button>
//                         </div>

//                         <ul className="divide-y divide-sage/15 list-none p-0 m-0 max-h-[320px] overflow-y-auto">
//                             {items.map((item) => (
//                                 <li key={item.key} className="flex items-center gap-3.5 py-3">
//                                     <span className="w-14 h-14 rounded-lg bg-background flex items-center justify-center shrink-0">
//                                         <Image
//                                             src={item.image}
//                                             alt={item.title}
//                                             width={44}
//                                             height={44}
//                                             className="max-w-[80%] max-h-[80%] w-auto h-auto object-contain"
//                                         />
//                                     </span>
//                                     <div className="flex-1 min-w-0">
//                                         <p className="text-sm font-bold text-gray-900 leading-snug truncate">{item.title}</p>
//                                         <p className="text-xs text-gray-500 mt-0.5">Pack size: {item.packSize}</p>
//                                     </div>
//                                     <span className="text-sm font-semibold text-gray-900">x {item.quantity}</span>
//                                 </li>
//                             ))}
//                         </ul>

//                         <dl className="mt-5 pt-5 border-t border-sage/15 space-y-2 text-sm">
//                             <div className="flex items-center justify-between">
//                                 <dt className="text-foreground/60">Products</dt>
//                                 <dd className="font-semibold text-gray-900">{lineCount}</dd>
//                             </div>
//                             <div className="flex items-center justify-between">
//                                 <dt className="text-foreground/60">Total quantity</dt>
//                                 <dd className="font-semibold text-gray-900">{totalQuantity}</dd>
//                             </div>
//                             <div className="flex items-center justify-between">
//                                 <dt className="text-foreground/60">Pricing</dt>
//                                 <dd className="font-semibold text-forest">Confirmed after order</dd>
//                             </div>
//                         </dl>

//                         <button
//                             type="submit"
//                             form="checkout-form"
//                             disabled={submitting}
//                             className="group relative overflow-hidden mt-6 w-full bg-forest border-2 border-forest text-white py-3 pl-6 pr-2 rounded-full text-xs font-bold tracking-wide uppercase flex items-center justify-center gap-3 transition-all duration-300 cursor-pointer disabled:cursor-wait disabled:opacity-90"
//                         >
//                             {submitting ? (
//                                 <span className="flex items-center gap-3 pr-4">
//                                     <span className="w-4 h-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />
//                                     <span>{progress}...</span>
//                                 </span>
//                             ) : (
//                                 <>
//                                     <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[125%] aspect-square rounded-t-[50%] bg-white translate-y-full transition-transform duration-[750ms] ease-in-out z-0 group-hover:translate-y-[12%]" />
//                                     <span className="relative z-10 transition-colors duration-300 group-hover:text-forest">Place Order</span>
//                                     <span className="relative z-10 w-7 h-7 bg-white text-forest rounded-full flex items-center justify-center shadow-sm transform group-hover:translate-x-1 group-hover:bg-forest group-hover:text-white transition-all duration-300">
//                                         <FaArrowRight size={11} />
//                                     </span>
//                                 </>
//                             )}
//                         </button>

//                         <p className="mt-4 text-[11px] text-center text-gray-400 leading-relaxed">
//                             No payment is taken now. Our team confirms pricing and dispatch with you directly.
//                         </p>
//                     </aside>
//                 </div>
//             </section>
//         </div>
//     );
// }






"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { FaCheck, FaArrowRight, FaLock } from "react-icons/fa";
import { parsePhoneNumberFromString, getCountryCallingCode } from "libphonenumber-js";
import { useCart } from "@/context/CartContext";
import { useAuth, apiRequest, validators } from "@/context/AuthContext";

const SUBMIT_ENDPOINT = "/enquiry/submitcart";
const DOMAIN = process.env.NEXT_PUBLIC_STORE_NAME || "Drymato";
const DEFAULT_COUNTRY = "IN";

const NAME_RE = /^[\p{L}][\p{L}\p{M} .'-]*$/u;

const BUSINESS_TYPES = [
    "Restaurant / HoReCa",
    "Food Manufacturer",
    "Distributor / Wholesaler",
    "Exporter",
    "Retailer",
    "Other",
];

const INITIAL_FORM = {
    fullName: "",
    email: "",
    phone: "",
    countryIso: DEFAULT_COUNTRY,
    state: "",
    city: "",
    companyName: "",
    businessType: "",
    message: "",
};

const NEXT_STEPS = [
    { title: "Order review", text: "Our team reviews your items and pack sizes." },
    { title: "Price and availability", text: "We contact you with final pricing, lead time and delivery details." },
    { title: "Dispatch", text: "Once confirmed, your order is packed and scheduled for dispatch." },
];

const inputClass = (hasError) =>
    `w-full px-4 py-2.5 rounded-lg bg-background border text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-forest/20 transition-all ${hasError ? "border-brick" : "border-sage/25"
    }`;

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

function callingCodeOf(iso) {
    try {
        return getCountryCallingCode(iso);
    } catch {
        return "";
    }
}

// Mirrors the backend check: valid number, same country, same calling code
function parsePhone(raw, iso, countryName) {
    const cleaned = String(raw || "").trim();
    if (!cleaned) return { error: "Please enter your mobile number" };

    const parsed = parsePhoneNumberFromString(cleaned, iso);
    if (!parsed || !parsed.isValid()) {
        return { error: `Enter a valid mobile number for ${countryName || "the selected country"}` };
    }
    if (parsed.country !== iso || parsed.countryCallingCode !== callingCodeOf(iso)) {
        return { error: "This number does not match the selected country code" };
    }
    return { parsed };
}

function validate(f, { country, states, cities }) {
    const e = {};

    const name = f.fullName.trim().replace(/\s+/g, " ");
    if (!name) e.fullName = "Please enter your full name";
    else if (name.length < 2) e.fullName = "Name must be at least 2 characters";
    else if (name.length > 80) e.fullName = "Name must be 80 characters or fewer";
    else if (!NAME_RE.test(name)) e.fullName = "Name can only contain letters, spaces and . ' -";

    const phone = parsePhone(f.phone, f.countryIso, country?.name);
    if (phone.error) e.phone = phone.error;

    const emailError = validators.email(f.email);
    if (emailError) e.email = emailError;

    if (!country) e.country = "Please select your country";

    if (!f.state.trim()) {
        e.state = states.length ? "Please select your state" : "Please enter your state or region";
    } else if (states.length && !states.some((s) => s.name === f.state)) {
        e.state = "Please select a valid state";
    }

    if (!f.city.trim()) {
        e.city = cities.length ? "Please select your city" : "Please enter your city";
    } else if (cities.length && !cities.some((c) => c.name === f.city)) {
        e.city = "Please select a valid city";
    }

    if (f.companyName.trim().length > 100) e.companyName = "Company name must be 100 characters or fewer";
    if (f.message.length > 1000) e.message = "Notes must be 1000 characters or fewer";

    return e;
}

function toEnquiryProduct(item) {
    let image = typeof item.image === "string" ? item.image : item.image?.src || "";
    if (image.startsWith("/")) image = `${window.location.origin}${image}`;

    return {
        productId: String(item.id),
        // Pack size is part of the name so the admin sees exactly what was requested
        name: `${item.title} (${item.packSize})`,
        sku: item.sku || "",
        price: 0,
        quantity: item.quantity,
        image,
    };
}

/* ------------------------------------------------------------------ */
/* Small UI pieces                                                     */
/* ------------------------------------------------------------------ */

function Field({ label, required, error, hint, children }) {
    return (
        <div>
            <label className="block text-xs font-bold text-gray-700 mb-2">
                {label}
                {required && " *"}
            </label>
            {children}
            {error && <p className="text-[11px] text-brick mt-1.5">{error}</p>}
            {hint && !error && <p className="text-[11px] text-gray-400 mt-1.5">{hint}</p>}
        </div>
    );
}

function SectionHeading({ number, title }) {
    return (
        <div className="flex items-center gap-3 mb-6">
            <span className="w-7 h-7 rounded-full bg-[#eaf3ec] text-forest text-xs font-bold flex items-center justify-center">
                {number}
            </span>
            <h2 className="font-serif text-lg font-semibold text-gray-900">{title}</h2>
        </div>
    );
}

function LoginRequired({ onLogin }) {
    return (
        <div className="bg-background min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
            <span className="w-16 h-16 rounded-full bg-[#eaf3ec] text-forest flex items-center justify-center mb-6">
                <FaLock size={22} />
            </span>
            <h1 className="font-serif text-2xl sm:text-3xl font-semibold text-forest mb-3">Please log in to continue</h1>
            <p className="text-sm text-foreground/60 max-w-md mb-8 leading-relaxed">
                Log in or create an account to send your order request. Your cart is saved and will be waiting for you.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch gap-3">
                <button
                    type="button"
                    onClick={onLogin}
                    className="inline-flex items-center justify-center bg-forest hover:bg-[#245633] text-white text-xs font-bold tracking-wide uppercase px-8 py-3.5 rounded-full transition-all duration-300 cursor-pointer"
                >
                    Login
                </button>
                <Link
                    href="/product"
                    className="inline-flex items-center justify-center border-2 border-forest text-forest hover:bg-forest hover:text-white text-xs font-bold tracking-wide uppercase px-8 py-3 rounded-full transition-all duration-300 no-underline"
                >
                    Continue Shopping
                </Link>
            </div>
        </div>
    );
}

function OrderSuccess({ order }) {
    return (
        <div className="bg-background min-h-[70vh] py-14 sm:py-20">
            <div className="max-w-2xl mx-auto px-6">
                <div className="bg-white rounded-2xl border border-sage/20 p-8 sm:p-10 text-center">
                    <span className="mx-auto w-16 h-16 rounded-full bg-[#eaf3ec] text-forest flex items-center justify-center mb-6">
                        <FaCheck size={24} />
                    </span>
                    <h1 className="font-serif text-2xl sm:text-3xl font-semibold text-forest mb-2">
                        Order request received
                    </h1>
                    <p className="text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
                        Thank you, {order.customer.fullName.split(" ")[0]}. Our team will contact you at{" "}
                        <span className="font-semibold text-gray-900">{order.customer.email}</span> to confirm pricing and
                        dispatch.
                    </p>

                    <div className="inline-flex flex-col items-center mt-6 px-6 py-3 rounded-xl bg-[#eaf3ec]">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-forest/70">Order reference</span>
                        <span className="font-poppins text-lg font-bold text-forest tracking-wide">{order.id}</span>
                    </div>

                    <ul className="mt-8 text-left divide-y divide-sage/15 border-t border-b border-sage/15 list-none p-0 m-0">
                        {order.items.map((item) => (
                            <li key={item.key} className="flex items-center gap-4 py-3.5">
                                <span className="w-12 h-12 rounded-lg bg-background flex items-center justify-center shrink-0">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={40}
                                        height={40}
                                        className="max-w-[80%] max-h-[80%] w-auto h-auto object-contain"
                                    />
                                </span>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-bold text-gray-900 truncate">{item.title}</p>
                                    <p className="text-xs text-gray-500">Pack size: {item.packSize}</p>
                                </div>
                                <span className="text-sm font-semibold text-gray-900">x {item.quantity}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-8 text-left">
                        <h3 className="font-serif text-base font-semibold text-gray-900 mb-4">What happens next</h3>
                        <ol className="space-y-4 list-none p-0 m-0">
                            {NEXT_STEPS.map((step, i) => (
                                <li key={step.title} className="flex gap-4">
                                    <span className="w-6 h-6 rounded-full bg-forest text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                                        {i + 1}
                                    </span>
                                    <div>
                                        <p className="text-sm font-bold text-gray-900">{step.title}</p>
                                        <p className="text-sm text-gray-600 leading-relaxed">{step.text}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>

                    <div className="mt-10 flex flex-col sm:flex-row items-stretch justify-center gap-3">
                        <Link
                            href="/product"
                            className="px-8 py-3 rounded-full bg-forest border-2 border-forest text-white text-xs font-bold tracking-wide uppercase hover:bg-[#245633] transition-all duration-300 no-underline"
                        >
                            Continue Shopping
                        </Link>
                        <Link
                            href="/"
                            className="px-8 py-3 rounded-full border-2 border-forest text-forest text-xs font-bold tracking-wide uppercase hover:bg-forest hover:text-white transition-all duration-300 no-underline"
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function CheckoutClient() {
    const { items, hydrated, totalQuantity, lineCount, clearCart, openCart } = useCart();
    const { user, status, isAuthenticated, openAuthModal } = useAuth();

    const [form, setForm] = useState(INITIAL_FORM);
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [placedOrder, setPlacedOrder] = useState(null);
    const [geo, setGeo] = useState(null);

    // Country / state / city data is large, so load it only on this page and only once logged in
    useEffect(() => {
        if (!isAuthenticated || geo) return;
        let alive = true;
        import("country-state-city")
            .then((m) => {
                if (alive) setGeo({ Country: m.Country, State: m.State, City: m.City });
            })
            .catch(() => toast.error("Could not load location data. Please refresh the page."));
        return () => {
            alive = false;
        };
    }, [isAuthenticated, geo]);

    // Prefill name and email from the logged-in account (never overwrites what was typed)
    useEffect(() => {
        if (!user) return;
        const accountName = [user.firstName, user.lastName].filter(Boolean).join(" ");
        setForm((prev) => ({
            ...prev,
            fullName: prev.fullName || accountName,
            email: prev.email || user.email || "",
        }));
    }, [user]);

    // Only countries with a known calling code can pass the backend phone check
    const countries = useMemo(() => {
        if (!geo) return [];
        return geo.Country.getAllCountries()
            .map((c) => ({ isoCode: c.isoCode, name: c.name, dial: callingCodeOf(c.isoCode) }))
            .filter((c) => c.dial);
    }, [geo]);

    const country = useMemo(
        () => countries.find((c) => c.isoCode === form.countryIso) || null,
        [countries, form.countryIso]
    );

    const states = useMemo(() => {
        if (!geo || !country) return [];
        return [...geo.State.getStatesOfCountry(country.isoCode)].sort((a, b) => a.name.localeCompare(b.name));
    }, [geo, country]);

    const selectedState = useMemo(() => states.find((s) => s.name === form.state) || null, [states, form.state]);

    const cities = useMemo(() => {
        if (!geo || !country || !selectedState) return [];
        return geo.City.getCitiesOfState(country.isoCode, selectedState.isoCode);
    }, [geo, country, selectedState]);

    const clearError = (...names) =>
        setErrors((prev) => {
            const next = { ...prev };
            names.forEach((n) => delete next[n]);
            return next;
        });

    const bind = (name) => ({
        name,
        value: form[name],
        onChange: (e) => {
            const value = e.target.value;
            setForm((prev) => ({ ...prev, [name]: value }));
            if (errors[name]) clearError(name);
        },
    });

    // The country code and the Country field are the same value, because the backend
    // requires the phone number to belong to the selected country
    const handleCountryChange = (e) => {
        const iso = e.target.value;
        setForm((prev) => ({ ...prev, countryIso: iso, state: "", city: "" }));
        clearError("country", "state", "city", "phone");
    };

    const handleStateChange = (e) => {
        const value = e.target.value;
        setForm((prev) => ({ ...prev, state: value, city: "" }));
        clearError("state", "city");
    };

    const handlePhoneChange = (e) => {
        const value = e.target.value.replace(/[^\d+\s\-()]/g, "");
        setForm((prev) => ({ ...prev, phone: value }));
        if (errors.phone) clearError("phone");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (submitting) return;

        if (!isAuthenticated) {
            openAuthModal("login");
            return;
        }

        const found = validate(form, { country, states, cities });
        setErrors(found);
        const firstInvalid = Object.keys(found)[0];
        if (firstInvalid) {
            document.querySelector(`[name="${firstInvalid}"]`)?.focus();
            return;
        }

        const { parsed } = parsePhone(form.phone, form.countryIso, country.name);
        const fullName = form.fullName.trim().replace(/\s+/g, " ");
        const email = form.email.trim().toLowerCase();

        const payload = {
            fullName,
            email,
            phone: parsed.nationalNumber,
            country: country.name,
            countryCode: `+${country.dial}`,
            countryIsoCode: country.isoCode,
            state: form.state.trim(),
            city: form.city.trim(),
            companyName: form.companyName.trim(),
            businessType: form.businessType,
            message: form.message.trim(),
            domain: DOMAIN,
            products: items.map(toEnquiryProduct),
        };

        setSubmitting(true);
        try {
            const data = await apiRequest(SUBMIT_ENDPOINT, { method: "POST", body: payload, authed: true });

            const enquiryId = String(data?.enquiry?._id || "");
            setPlacedOrder({
                id: enquiryId ? `DRY-${enquiryId.slice(-6).toUpperCase()}` : "Received",
                customer: { fullName, email },
                items: items.map((i) => ({ ...i })),
            });
            clearCart();
            window.scrollTo({ top: 0, behavior: "smooth" });
        } catch (err) {
            // A 401 already opened the login modal through AuthContext; the form data stays as it is
            if (err?.status === 401) return;

            const message = err?.message || "Something went wrong while submitting your enquiry.";
            if (/mobile|phone/i.test(message)) setErrors({ phone: message });
            toast.error(message);
        } finally {
            setSubmitting(false);
        }
    };

    if (placedOrder) return <OrderSuccess order={placedOrder} />;

    if (!hydrated || status === "loading") return <div className="bg-background min-h-[70vh]" />;

    if (!isAuthenticated) return <LoginRequired onLogin={() => openAuthModal("login")} />;

    if (items.length === 0) {
        return (
            <div className="bg-background min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
                <h1 className="font-serif text-2xl sm:text-3xl font-semibold text-forest mb-3">Your cart is empty</h1>
                <p className="text-sm text-foreground/60 max-w-md mb-8">
                    Add a few products to your cart and come back here to place your order.
                </p>
                <Link
                    href="/product"
                    className="inline-flex bg-forest hover:bg-[#245633] text-white text-xs font-bold tracking-wide uppercase px-8 py-3.5 rounded-full transition-all duration-300 no-underline"
                >
                    Browse Products
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-background">
            <section className="max-w-7xl mx-auto px-6 py-10 sm:py-14">
                <div className="flex items-center gap-2 text-xs text-gray-400 font-medium mb-4">
                    <Link href="/" className="hover:text-forest transition-colors">Home</Link>
                    <span>/</span>
                    <Link href="/product" className="hover:text-forest transition-colors">Products</Link>
                    <span>/</span>
                    <span className="text-gray-600">Checkout</span>
                </div>
                <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-forest tracking-tight mb-10">Checkout</h1>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 lg:gap-10 items-start">
                    {/* Form */}
                    <form id="checkout-form" onSubmit={handleSubmit} noValidate className="space-y-6">
                        <div className="bg-white rounded-2xl border border-sage/20 p-6 sm:p-8">
                            <SectionHeading number="1" title="Contact details" />
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <Field label="Full name" required error={errors.fullName}>
                                    <input
                                        type="text"
                                        autoComplete="name"
                                        maxLength={80}
                                        placeholder="Ex. Rajesh Mehta"
                                        className={inputClass(errors.fullName)}
                                        {...bind("fullName")}
                                    />
                                </Field>

                                <Field
                                    label="Mobile number"
                                    required
                                    error={errors.phone}
                                    hint="Changing the country code also updates your country below."
                                >
                                    <div className="flex gap-2">
                                        <select
                                            name="dialCode"
                                            aria-label="Country code"
                                            value={form.countryIso}
                                            onChange={handleCountryChange}
                                            disabled={!geo}
                                            className={`${inputClass(false)} !w-[116px] shrink-0 !px-2.5 cursor-pointer disabled:cursor-wait`}
                                        >
                                            {!geo && <option value={DEFAULT_COUNTRY}>IN +91</option>}
                                            {countries.map((c) => (
                                                <option key={c.isoCode} value={c.isoCode} title={c.name}>
                                                    {c.isoCode} +{c.dial}
                                                </option>
                                            ))}
                                        </select>
                                        <input
                                            type="tel"
                                            name="phone"
                                            inputMode="tel"
                                            autoComplete="tel-national"
                                            maxLength={20}
                                            placeholder="Mobile number"
                                            value={form.phone}
                                            onChange={handlePhoneChange}
                                            className={inputClass(errors.phone)}
                                        />
                                    </div>
                                </Field>

                                <div className="sm:col-span-2">
                                    <Field label="Email" required error={errors.email}>
                                        <input
                                            type="email"
                                            autoComplete="email"
                                            maxLength={254}
                                            placeholder="you@company.com"
                                            className={inputClass(errors.email)}
                                            {...bind("email")}
                                        />
                                    </Field>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl border border-sage/20 p-6 sm:p-8">
                            <SectionHeading number="2" title="Business details" />
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <Field label="Company name" error={errors.companyName}>
                                    <input
                                        type="text"
                                        maxLength={100}
                                        placeholder="Optional"
                                        className={inputClass(errors.companyName)}
                                        {...bind("companyName")}
                                    />
                                </Field>
                                <Field label="Business type">
                                    <select className={`${inputClass(false)} cursor-pointer`} {...bind("businessType")}>
                                        <option value="">Select</option>
                                        {BUSINESS_TYPES.map((t) => (
                                            <option key={t} value={t}>{t}</option>
                                        ))}
                                    </select>
                                </Field>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl border border-sage/20 p-6 sm:p-8">
                            <SectionHeading number="3" title="Location" />
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div className="sm:col-span-2">
                                    <Field label="Country" required error={errors.country}>
                                        <select
                                            name="country"
                                            value={form.countryIso}
                                            onChange={handleCountryChange}
                                            disabled={!geo}
                                            className={`${inputClass(errors.country)} cursor-pointer disabled:cursor-wait`}
                                        >
                                            {!geo && <option value={DEFAULT_COUNTRY}>Loading countries...</option>}
                                            {countries.map((c) => (
                                                <option key={c.isoCode} value={c.isoCode}>{c.name}</option>
                                            ))}
                                        </select>
                                    </Field>
                                </div>

                                <Field label="State" required error={errors.state}>
                                    {states.length > 0 ? (
                                        <select
                                            name="state"
                                            value={form.state}
                                            onChange={handleStateChange}
                                            className={`${inputClass(errors.state)} cursor-pointer`}
                                        >
                                            <option value="">Select state</option>
                                            {states.map((s) => (
                                                <option key={s.isoCode} value={s.name}>{s.name}</option>
                                            ))}
                                        </select>
                                    ) : (
                                        <input
                                            type="text"
                                            name="state"
                                            maxLength={80}
                                            placeholder={geo ? "State or region" : "Loading..."}
                                            disabled={!geo}
                                            value={form.state}
                                            onChange={handleStateChange}
                                            className={inputClass(errors.state)}
                                        />
                                    )}
                                </Field>

                                <Field label="City" required error={errors.city}>
                                    {cities.length > 0 ? (
                                        <select
                                            name="city"
                                            value={form.city}
                                            onChange={bind("city").onChange}
                                            className={`${inputClass(errors.city)} cursor-pointer`}
                                        >
                                            <option value="">Select city</option>
                                            {cities.map((c, i) => (
                                                <option key={`${c.name}-${i}`} value={c.name}>{c.name}</option>
                                            ))}
                                        </select>
                                    ) : (
                                        <input
                                            type="text"
                                            name="city"
                                            maxLength={80}
                                            placeholder={states.length > 0 && !selectedState ? "Select a state first" : "City"}
                                            disabled={states.length > 0 && !selectedState}
                                            className={inputClass(errors.city)}
                                            {...bind("city")}
                                        />
                                    )}
                                </Field>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl border border-sage/20 p-6 sm:p-8">
                            <SectionHeading number="4" title="Order notes" />
                            <Field label="Anything we should know? (optional)" error={errors.message}>
                                <textarea
                                    rows={4}
                                    maxLength={1000}
                                    placeholder="Packaging preferences, delivery timelines, certifications needed..."
                                    className={`${inputClass(errors.message)} resize-none`}
                                    {...bind("message")}
                                />
                            </Field>
                        </div>
                    </form>

                    {/* Summary */}
                    <aside className="bg-white rounded-2xl border border-sage/20 p-6 sm:p-7 lg:sticky lg:top-28">
                        <div className="flex items-center justify-between mb-5">
                            <h2 className="font-serif text-lg font-semibold text-gray-900">Order summary</h2>
                            <button
                                type="button"
                                onClick={openCart}
                                className="text-xs font-bold text-forest hover:underline underline-offset-2 cursor-pointer"
                            >
                                Edit cart
                            </button>
                        </div>

                        <ul className="divide-y divide-sage/15 list-none p-0 m-0 max-h-[320px] overflow-y-auto">
                            {items.map((item) => (
                                <li key={item.key} className="flex items-center gap-3.5 py-3">
                                    <span className="w-14 h-14 rounded-lg bg-background flex items-center justify-center shrink-0">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={44}
                                            height={44}
                                            className="max-w-[80%] max-h-[80%] w-auto h-auto object-contain"
                                        />
                                    </span>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-bold text-gray-900 leading-snug truncate">{item.title}</p>
                                        <p className="text-xs text-gray-500 mt-0.5">Pack size: {item.packSize}</p>
                                    </div>
                                    <span className="text-sm font-semibold text-gray-900">x {item.quantity}</span>
                                </li>
                            ))}
                        </ul>

                        <dl className="mt-5 pt-5 border-t border-sage/15 space-y-2 text-sm">
                            <div className="flex items-center justify-between">
                                <dt className="text-foreground/60">Products</dt>
                                <dd className="font-semibold text-gray-900">{lineCount}</dd>
                            </div>
                            <div className="flex items-center justify-between">
                                <dt className="text-foreground/60">Total quantity</dt>
                                <dd className="font-semibold text-gray-900">{totalQuantity}</dd>
                            </div>
                            <div className="flex items-center justify-between">
                                <dt className="text-foreground/60">Pricing</dt>
                                <dd className="font-semibold text-forest">Confirmed after order</dd>
                            </div>
                        </dl>

                        <button
                            type="submit"
                            form="checkout-form"
                            disabled={submitting}
                            className="group relative overflow-hidden mt-6 w-full bg-forest border-2 border-forest text-white py-3 pl-6 pr-2 rounded-full text-xs font-bold tracking-wide uppercase flex items-center justify-center gap-3 transition-all duration-300 cursor-pointer disabled:cursor-wait disabled:opacity-90"
                        >
                            {submitting ? (
                                <span className="flex items-center gap-3 pr-4">
                                    <span className="w-4 h-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                                    <span>Submitting...</span>
                                </span>
                            ) : (
                                <>
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[125%] aspect-square rounded-t-[50%] bg-white translate-y-full transition-transform duration-[750ms] ease-in-out z-0 group-hover:translate-y-[12%]" />
                                    <span className="relative z-10 transition-colors duration-300 group-hover:text-forest">Place Order</span>
                                    <span className="relative z-10 w-7 h-7 bg-white text-forest rounded-full flex items-center justify-center shadow-sm transform group-hover:translate-x-1 group-hover:bg-forest group-hover:text-white transition-all duration-300">
                                        <FaArrowRight size={11} />
                                    </span>
                                </>
                            )}
                        </button>

                        <p className="mt-4 text-[11px] text-center text-gray-400 leading-relaxed">
                            No payment is taken now. Our team confirms pricing and dispatch with you directly.
                        </p>
                    </aside>
                </div>
            </section>
        </div>
    );
}