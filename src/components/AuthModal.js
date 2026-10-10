
"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import { motion, MotionConfig } from "framer-motion";
import { useAuth, validators, normalizeMobile, OTP_LENGTH } from "@/context/AuthContext";
import { PRODUCTS } from "@/lib/product";

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------
const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "";
const GSI_SRC = "https://accounts.google.com/gsi/client";
const CLOSE_MS = 250;
const EASE = "ease-[cubic-bezier(0.16,1,0.3,1)]";

// Farm photo used behind the dark green overlay (desktop panel + mobile header).
const AUTH_BG_IMAGE = "/hero-section/guava-farm.png";

// Seconds before a new reset code can be requested
const RESEND_SECONDS = 30;

// Fill these in once the pages exist; links render only when set.
const LEGAL_LINKS = { terms: "", privacy: "" };

const CLIP_ID = "drymato-auth-curve";

const FOCUSABLE =
    'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),iframe,[tabindex]:not([tabindex="-1"])';

const productById = (id) => PRODUCTS.find((p) => p.id === id) || null;

// Right-hand panel content (desktop). One product per tab, shown in the middle.
// Set both `product` values to the same id if you want the product to stay fixed.
const SHOWCASE = {
    login: {
        product: productById(1),
        lead: "Farm-grown produce,",
        italic: "dehydrated for every kitchen.",
        text: "Dehydrated vegetables, fruits and powders for HORECA, food manufacturers, wholesale and export.",
        hidden: "-translate-x-8",
    },
    signup: {
        product: productById(5),
        lead: "Join Drymato",
        italic: "and source with confidence.",
        text: "Create an account to shop our dehydrated vegetables, fruits and powders.",
        hidden: "translate-x-8",
    },
};

// Title block over the image on mobile / tablet
const MOBILE_COPY = {
    login: { title: "Welcome back", sub: "Log in to continue to Drymato." },
    signup: { title: "Create your account", sub: "Shop our dehydrated range." },
    forgot: { title: "Reset password", sub: "Verify with a one-time code." },
};

const pick = (obj, keys) => Object.fromEntries(keys.filter((k) => obj?.[k]).map((k) => [k, obj[k]]));
const firstName = (user) => (user?.name || "").trim().split(/\s+/)[0] || "there";

// ---------------------------------------------------------------------------
// Google Identity Services (loaded once, initialised once)
// ---------------------------------------------------------------------------
let gsiPromise = null;
let gsiInitialised = false;
let credentialHandler = null;

function loadGsi() {
    if (typeof window === "undefined") return Promise.reject(new Error("No window"));
    if (window.google?.accounts?.id) return Promise.resolve(window.google);
    if (!gsiPromise) {
        gsiPromise = new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = GSI_SRC;
            script.async = true;
            script.defer = true;
            script.onload = () => resolve(window.google);
            script.onerror = () => {
                gsiPromise = null;
                script.remove();
                reject(new Error("Google script failed to load"));
            };
            document.head.appendChild(script);
        });
    }
    return gsiPromise;
}

function initialiseGsi(google) {
    if (gsiInitialised) return;
    google.accounts.id.initialize({
        client_id: GOOGLE_CLIENT_ID,
        callback: (response) => {
            if (response?.credential) credentialHandler?.(response.credential);
        },
        ux_mode: "popup",
        auto_select: false,
        cancel_on_tap_outside: true,
        itp_support: true,
    });
    gsiInitialised = true;
}

// ---------------------------------------------------------------------------
// Small inline icons
// ---------------------------------------------------------------------------
const CloseIcon = () => (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const EyeIcon = ({ off }) => (
    <svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.04 12.32a1 1 0 010-.64C3.42 8.2 7.36 5 12 5s8.58 3.2 9.96 6.68a1 1 0 010 .64C20.58 15.8 16.64 19 12 19s-8.58-3.2-9.96-6.68z"
        />
        <circle cx="12" cy="12" r="3" />
        {off && <path strokeLinecap="round" d="M4 4l16 16" />}
    </svg>
);

const ChevronLeftIcon = () => (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
);

const Spinner = () => (
    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.3" strokeWidth="3" />
        <path d="M21 12a9 9 0 00-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
);

const GoogleIcon = () => (
    <svg className="h-[18px] w-[18px]" viewBox="0 0 48 48" aria-hidden="true">
        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
);

// ---------------------------------------------------------------------------
// Form primitives
// ---------------------------------------------------------------------------
function Field({
    id,
    name,
    label,
    type = "text",
    value,
    onChange,
    onBlur,
    error,
    autoComplete,
    inputMode,
    placeholder,
    maxLength,
    disabled,
    prefix,
    suffix,
    autoCapitalize = "none",
}) {
    const errorId = `${id}-error`;
    return (
        <div>
            <label htmlFor={id} className="mb-1 block text-[13px] font-semibold text-gray-700">
                {label}
            </label>
            <div
                className={`flex h-11 items-stretch rounded-lg border transition-all duration-200 focus-within:border-forest/60 focus-within:bg-white focus-within:ring-4 focus-within:ring-forest/10 lg:h-[42px] ${
                    error ? "border-brick/60 bg-brick/5" : "border-sage/25 bg-sage/10"
                }`}
            >
                {prefix && (
                    <span className="flex items-center border-r border-sage/30 pl-3.5 pr-2.5 text-[14px] font-medium text-gray-500">
                        {prefix}
                    </span>
                )}
                <input
                    id={id}
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    disabled={disabled}
                    maxLength={maxLength}
                    autoComplete={autoComplete}
                    inputMode={inputMode}
                    placeholder={placeholder}
                    autoCapitalize={autoCapitalize}
                    spellCheck={false}
                    aria-invalid={error ? true : undefined}
                    aria-describedby={error ? errorId : undefined}
                    className="min-w-0 flex-1 bg-transparent px-3.5 text-[16px] text-foreground outline-none placeholder:text-gray-400 disabled:opacity-60 sm:text-[14px]"
                />
                {suffix}
            </div>
            {error && (
                <p id={errorId} className="mt-1 text-[12px] text-brick">
                    {error}
                </p>
            )}
        </div>
    );
}

function PasswordToggle({ shown, onToggle }) {
    return (
        <button
            type="button"
            onClick={onToggle}
            aria-label={shown ? "Hide password" : "Show password"}
            aria-pressed={shown}
            className="flex w-10 shrink-0 cursor-pointer items-center justify-center text-gray-500 transition-colors hover:text-forest"
        >
            <EyeIcon off={shown} />
        </button>
    );
}

function ErrorBanner({ children, className = "" }) {
    return (
        <p
            role="alert"
            className={`rounded-lg border border-brick/25 bg-brick/5 px-3 py-2 text-[13px] leading-snug text-brick ${className}`}
        >
            {children}
        </p>
    );
}

function SubmitButton({ loading, children }) {
    return (
        <button
            type="submit"
            disabled={loading}
            className="flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-forest text-[13px] font-bold tracking-wider text-white shadow-[0_8px_18px_rgba(36,56,34,0.2)] transition-all duration-200 hover:bg-forest-light disabled:cursor-wait disabled:opacity-80"
        >
            {loading && <Spinner />}
            {children}
        </button>
    );
}

function SwitchPrompt({ text, action, onClick, disabled }) {
    return (
        <p className="mt-4 text-center text-[13px] text-gray-600">
            {text}{" "}
            <button
                type="button"
                onClick={onClick}
                disabled={disabled}
                className="cursor-pointer font-semibold text-forest underline underline-offset-2 transition-colors hover:text-forest-light disabled:cursor-not-allowed"
            >
                {action}
            </button>
        </p>
    );
}

function FormHeading({ id, title, sub }) {
    return (
        <div className="mb-4 hidden lg:block">
            <h2 id={id} className="text-[32px] font-semibold leading-none text-foreground">
                {title}
            </h2>
            <p className="mt-1.5 text-[14px] text-gray-600">{sub}</p>
        </div>
    );
}

// ---------------------------------------------------------------------------
// Google button + divider
// ---------------------------------------------------------------------------
function GoogleButton({ onCredential, onUnavailable }) {
    const holderRef = useRef(null);
    const [state, setState] = useState(GOOGLE_CLIENT_ID ? "loading" : "unconfigured");

    useEffect(() => {
        credentialHandler = onCredential;
        return () => {
            if (credentialHandler === onCredential) credentialHandler = null;
        };
    }, [onCredential]);

    useEffect(() => {
        if (!GOOGLE_CLIENT_ID) return;
        let cancelled = false;

        loadGsi()
            .then((google) => {
                const holder = holderRef.current;
                if (cancelled || !holder) return;
                initialiseGsi(google);
                holder.innerHTML = "";
                google.accounts.id.renderButton(holder, {
                    type: "standard",
                    theme: "outline",
                    size: "large",
                    text: "continue_with",
                    shape: "rectangular",
                    logo_alignment: "center",
                    width: Math.min(400, Math.max(200, Math.round(holder.clientWidth))),
                });
                setState("ready");
            })
            .catch(() => {
                if (!cancelled) setState("failed");
            });

        return () => {
            cancelled = true;
        };
    }, []);

    return (
        <div className="relative min-h-[44px]">
            <div ref={holderRef} className={`flex w-full justify-center ${state === "ready" ? "" : "invisible"}`} />

            {state === "loading" && <div className="absolute inset-0 animate-pulse rounded-lg bg-sage/15" aria-hidden="true" />}

            {(state === "unconfigured" || state === "failed") && (
                <button
                    type="button"
                    onClick={onUnavailable}
                    className="absolute inset-0 flex cursor-pointer items-center justify-center gap-2.5 rounded-lg border border-sage/30 bg-white text-[14px] font-medium text-gray-700 transition-colors hover:bg-sage/10"
                >
                    <GoogleIcon />
                    Continue with Google
                </button>
            )}
        </div>
    );
}

function GoogleSection({ busy, error, onCredential, onUnavailable }) {
    return (
        <div className="mt-4">
            <div className="mb-3.5 flex items-center gap-3 text-[12px] text-gray-500">
                <span className="h-px flex-1 bg-sage/25" />
                or
                <span className="h-px flex-1 bg-sage/25" />
            </div>
            <div className="relative">
                <GoogleButton onCredential={onCredential} onUnavailable={onUnavailable} />
                {busy && <div className="absolute inset-0 cursor-wait bg-white/70" aria-hidden="true" />}
            </div>
            {error && <ErrorBanner className="mt-3">{error}</ErrorBanner>}
        </div>
    );
}

// ---------------------------------------------------------------------------
// Login form
// ---------------------------------------------------------------------------
function LoginForm({ uid, busy, setBusy, onSuccess, onSwitch, onForgot, prefillEmail, google }) {
    const { login } = useAuth();
    const formRef = useRef(null);
    const [values, setValues] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});
    const [formError, setFormError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    // After a password reset (or a signup that needs a manual login) the email is filled in
    useEffect(() => {
        if (!prefillEmail) return;
        setValues({ email: prefillEmail, password: "" });
        setErrors({});
        setFormError("");
    }, [prefillEmail]);

    const change = (name) => (e) => {
        const value = e.target.value;
        setValues((v) => ({ ...v, [name]: value }));
        setErrors((er) => (er[name] ? { ...er, [name]: "" } : er));
        setFormError("");
    };

    const blur = (name, check) => () => {
        if (!values[name]) return;
        setErrors((er) => ({ ...er, [name]: check(values[name]) }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (busy) return;

        const next = {
            email: validators.email(values.email),
            password: validators.loginPassword(values.password),
        };
        setErrors(next);
        const firstInvalid = Object.keys(next).find((k) => next[k]);
        if (firstInvalid) {
            formRef.current?.elements[firstInvalid]?.focus();
            return;
        }

        setBusy(true);
        setFormError("");
        try {
            const user = await login({ email: values.email.trim().toLowerCase(), password: values.password });
            onSuccess(user, "login");
        } catch (err) {
            const fieldErrors = pick(err?.fieldErrors, ["email", "password"]);
            if (Object.keys(fieldErrors).length) setErrors((er) => ({ ...er, ...fieldErrors }));
            else setFormError(err?.message || "Something went wrong. Please try again.");
        } finally {
            setBusy(false);
        }
    };

    return (
        <>
            <FormHeading id={`${uid}-login-title`} title="Welcome back" sub="Log in to your Drymato account." />

            <form ref={formRef} onSubmit={onSubmit} noValidate className="flex flex-col gap-3.5">
                <Field
                    id={`${uid}-login-email`}
                    name="email"
                    label="Email address"
                    type="email"
                    value={values.email}
                    onChange={change("email")}
                    onBlur={blur("email", validators.email)}
                    error={errors.email}
                    autoComplete="email"
                    inputMode="email"
                    placeholder="you@company.com"
                    disabled={busy}
                />
                <Field
                    id={`${uid}-login-password`}
                    name="password"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={change("password")}
                    error={errors.password}
                    autoComplete="current-password"
                    placeholder="Your password"
                    disabled={busy}
                    suffix={<PasswordToggle shown={showPassword} onToggle={() => setShowPassword((s) => !s)} />}
                />
                <div className="-mt-1.5 flex justify-end">
                    <button
                        type="button"
                        onClick={() => onForgot(values.email)}
                        disabled={busy}
                        className="cursor-pointer text-[13px] font-semibold text-forest transition-colors hover:text-forest-light hover:underline hover:underline-offset-2 disabled:cursor-not-allowed"
                    >
                        Forgot password?
                    </button>
                </div>
                {formError && <ErrorBanner>{formError}</ErrorBanner>}
                <SubmitButton loading={busy}>Log in</SubmitButton>
            </form>

            {google}

            <SwitchPrompt
                text="Don't have an account?"
                action="Sign up"
                onClick={() => onSwitch("signup")}
                disabled={busy}
            />
        </>
    );
}

// ---------------------------------------------------------------------------
// Signup form
// ---------------------------------------------------------------------------
function SignupForm({ uid, busy, setBusy, onSuccess, onSwitch, onNeedsLogin, google }) {
    const { signup } = useAuth();
    const formRef = useRef(null);
    const [values, setValues] = useState({ name: "", email: "", mobile: "", password: "" });
    const [errors, setErrors] = useState({});
    const [formError, setFormError] = useState("");
    const [emailTaken, setEmailTaken] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const setValue = (name, value) => {
        setValues((v) => ({ ...v, [name]: value }));
        setErrors((er) => (er[name] ? { ...er, [name]: "" } : er));
        setFormError("");
        setEmailTaken(false);
    };

    const change = (name) => (e) => setValue(name, e.target.value);
    const changeMobile = (e) => setValue("mobile", normalizeMobile(e.target.value).slice(0, 10));

    const blur = (name) => () => {
        if (!values[name]) return;
        setErrors((er) => ({ ...er, [name]: validators[name](values[name]) }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (busy) return;

        const next = {
            name: validators.name(values.name),
            email: validators.email(values.email),
            mobile: validators.mobile(values.mobile),
            password: validators.password(values.password),
        };
        setErrors(next);
        const firstInvalid = Object.keys(next).find((k) => next[k]);
        if (firstInvalid) {
            formRef.current?.elements[firstInvalid]?.focus();
            return;
        }

        setBusy(true);
        setFormError("");
        setEmailTaken(false);
        try {
            const email = values.email.trim().toLowerCase();
            const result = await signup({
                name: values.name.trim().replace(/\s+/g, " "),
                email,
                mobile: normalizeMobile(values.mobile),
                password: values.password,
            });
            if (result.user) onSuccess(result.user, "signup");
            else onNeedsLogin({ email, message: result.message });
        } catch (err) {
            const fieldErrors = pick(err?.fieldErrors, ["name", "email", "mobile", "password"]);
            if (Object.keys(fieldErrors).length) {
                setErrors((er) => ({ ...er, ...fieldErrors }));
            } else {
                setFormError(err?.message || "Something went wrong. Please try again.");
                setEmailTaken(err?.status === 409);
            }
        } finally {
            setBusy(false);
        }
    };

    return (
        <>
            <FormHeading id={`${uid}-signup-title`} title="Create account" sub="Enter your details to get started." />

            <form ref={formRef} onSubmit={onSubmit} noValidate className="flex flex-col gap-3.5">
                <Field
                    id={`${uid}-signup-name`}
                    name="name"
                    label="Full name"
                    value={values.name}
                    onChange={change("name")}
                    onBlur={blur("name")}
                    error={errors.name}
                    autoComplete="name"
                    autoCapitalize="words"
                    maxLength={60}
                    placeholder="First and last name"
                    disabled={busy}
                />
                <Field
                    id={`${uid}-signup-email`}
                    name="email"
                    label="Email address"
                    type="email"
                    value={values.email}
                    onChange={change("email")}
                    onBlur={blur("email")}
                    error={errors.email}
                    autoComplete="email"
                    inputMode="email"
                    placeholder="you@company.com"
                    disabled={busy}
                />
                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                    <Field
                        id={`${uid}-signup-mobile`}
                        name="mobile"
                        label="Mobile number"
                        type="tel"
                        value={values.mobile}
                        onChange={changeMobile}
                        onBlur={blur("mobile")}
                        error={errors.mobile}
                        autoComplete="tel-national"
                        inputMode="numeric"
                        placeholder="10-digit number"
                        prefix="+91"
                        disabled={busy}
                    />
                    <Field
                        id={`${uid}-signup-password`}
                        name="password"
                        label="Password"
                        type={showPassword ? "text" : "password"}
                        value={values.password}
                        onChange={change("password")}
                        onBlur={blur("password")}
                        error={errors.password}
                        autoComplete="new-password"
                        maxLength={64}
                        placeholder="Create password"
                        disabled={busy}
                        suffix={<PasswordToggle shown={showPassword} onToggle={() => setShowPassword((s) => !s)} />}
                    />
                </div>

                {formError && (
                    <ErrorBanner>
                        {formError}
                        {emailTaken && (
                            <>
                                {" "}
                                <button
                                    type="button"
                                    onClick={() => onSwitch("login")}
                                    className="cursor-pointer font-semibold underline underline-offset-2"
                                >
                                    Log in instead
                                </button>
                            </>
                        )}
                    </ErrorBanner>
                )}

                <p className="text-[12px] leading-snug text-gray-500">
                    By signing up, you agree to our{" "}
                    {LEGAL_LINKS.terms ? (
                        <a href={LEGAL_LINKS.terms} className="font-semibold text-forest underline underline-offset-2">
                            terms
                        </a>
                    ) : (
                        "terms"
                    )}{" "}
                    and{" "}
                    {LEGAL_LINKS.privacy ? (
                        <a href={LEGAL_LINKS.privacy} className="font-semibold text-forest underline underline-offset-2">
                            privacy policy
                        </a>
                    ) : (
                        "privacy policy"
                    )}
                    .
                </p>

                <SubmitButton loading={busy}>Create account</SubmitButton>
            </form>

            {google}

            <SwitchPrompt
                text="Already have an account?"
                action="Log in"
                onClick={() => onSwitch("login")}
                disabled={busy}
            />
        </>
    );
}

// ---------------------------------------------------------------------------
// Forgot password: email -> one-time code + new password
// ---------------------------------------------------------------------------
function ForgotForm({ uid, busy, setBusy, onDone, initialEmail }) {
    const { forgotPassword, resetPassword } = useAuth();
    const formRef = useRef(null);
    const [step, setStep] = useState("email"); // "email" | "reset"
    const [values, setValues] = useState({ email: initialEmail || "", otp: "", newPassword: "" });
    const [errors, setErrors] = useState({});
    const [formError, setFormError] = useState("");
    const [info, setInfo] = useState("");
    const [cooldown, setCooldown] = useState(0);
    const [showPassword, setShowPassword] = useState(false);

    // Resend countdown
    useEffect(() => {
        if (cooldown <= 0) return;
        const timer = setTimeout(() => setCooldown((c) => c - 1), 1000);
        return () => clearTimeout(timer);
    }, [cooldown]);

    const change = (name) => (e) => {
        const value = name === "otp" ? e.target.value.replace(/\D/g, "").slice(0, OTP_LENGTH) : e.target.value;
        setValues((v) => ({ ...v, [name]: value }));
        setErrors((er) => (er[name] ? { ...er, [name]: "" } : er));
        setFormError("");
    };

    const showServerError = (err) => {
        const fe = err?.fieldErrors || {};
        const mapped = {};
        if (fe.email) mapped.email = fe.email;
        if (fe.otp) mapped.otp = fe.otp;
        if (fe.password) mapped.newPassword = fe.password;
        if (Object.keys(mapped).length) setErrors((er) => ({ ...er, ...mapped }));
        else setFormError(err?.message || "Something went wrong. Please try again.");
    };

    const sendCode = async (resend = false) => {
        if (busy) return;
        const email = values.email.trim().toLowerCase();
        const emailError = validators.email(email);
        setErrors({ email: emailError });
        if (emailError) {
            formRef.current?.elements.email?.focus();
            return;
        }

        setBusy(true);
        setFormError("");
        try {
            await forgotPassword(email);
            setStep("reset");
            setCooldown(RESEND_SECONDS);
            setValues((v) => ({ ...v, otp: "" }));
            setInfo(
                resend ? "A new code has been sent." : `Enter the ${OTP_LENGTH}-digit code we sent to ${email}.`
            );
        } catch (err) {
            showServerError(err);
        } finally {
            setBusy(false);
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (step === "email") {
            sendCode(false);
            return;
        }
        if (busy) return;

        const next = {
            otp: validators.otp(values.otp),
            newPassword: validators.newPassword(values.newPassword),
        };
        setErrors(next);
        const firstInvalid = Object.keys(next).find((k) => next[k]);
        if (firstInvalid) {
            formRef.current?.elements[firstInvalid]?.focus();
            return;
        }

        setBusy(true);
        setFormError("");
        try {
            const email = values.email.trim().toLowerCase();
            const message = await resetPassword({ email, otp: values.otp, newPassword: values.newPassword });
            onDone({ email, message });
        } catch (err) {
            showServerError(err);
        } finally {
            setBusy(false);
        }
    };

    const linkButton =
        "cursor-pointer font-semibold text-forest underline underline-offset-2 transition-colors hover:text-forest-light disabled:cursor-not-allowed disabled:text-gray-400 disabled:no-underline";

    return (
        <>
            <FormHeading
                id={`${uid}-forgot-title`}
                title={step === "email" ? "Forgot password?" : "Reset password"}
                sub={
                    step === "email"
                        ? "Enter your email and we will send you a one-time code."
                        : "Enter the code and choose a new password."
                }
            />

            <form ref={formRef} onSubmit={onSubmit} noValidate className="flex flex-col gap-3.5">
                {step === "email" ? (
                    <Field
                        id={`${uid}-forgot-email`}
                        name="email"
                        label="Email address"
                        type="email"
                        value={values.email}
                        onChange={change("email")}
                        error={errors.email}
                        autoComplete="email"
                        inputMode="email"
                        placeholder="you@company.com"
                        disabled={busy}
                    />
                ) : (
                    <>
                        <p className="text-[13px] leading-snug text-gray-600">{info}</p>
                        <Field
                            id={`${uid}-forgot-otp`}
                            name="otp"
                            label="Verification code"
                            value={values.otp}
                            onChange={change("otp")}
                            error={errors.otp}
                            autoComplete="one-time-code"
                            inputMode="numeric"
                            maxLength={OTP_LENGTH}
                            placeholder={`${OTP_LENGTH}-digit code`}
                            disabled={busy}
                        />
                        <Field
                            id={`${uid}-forgot-password`}
                            name="newPassword"
                            label="New password"
                            type={showPassword ? "text" : "password"}
                            value={values.newPassword}
                            onChange={change("newPassword")}
                            error={errors.newPassword}
                            autoComplete="new-password"
                            maxLength={64}
                            placeholder="At least 8 characters, letters and numbers"
                            disabled={busy}
                            suffix={<PasswordToggle shown={showPassword} onToggle={() => setShowPassword((s) => !s)} />}
                        />
                    </>
                )}

                {formError && <ErrorBanner>{formError}</ErrorBanner>}

                <SubmitButton loading={busy}>{step === "email" ? "Send code" : "Reset password"}</SubmitButton>
            </form>

            {step === "reset" && (
                <div className="mt-4 flex items-center justify-between gap-3 text-[13px]">
                    <button
                        type="button"
                        onClick={() => {
                            setStep("email");
                            setErrors({});
                            setFormError("");
                        }}
                        disabled={busy}
                        className={linkButton}
                    >
                        Use a different email
                    </button>
                    <button
                        type="button"
                        onClick={() => sendCode(true)}
                        disabled={busy || cooldown > 0}
                        className={linkButton}
                    >
                        {cooldown > 0 ? `Resend code in ${cooldown}s` : "Resend code"}
                    </button>
                </div>
            )}
        </>
    );
}

// ---------------------------------------------------------------------------
// Desktop right panel content: one product in the middle, copy at the bottom
// ---------------------------------------------------------------------------
function ShowcaseSet({ config, active }) {
    const { product } = config;
    return (
        <div
            aria-hidden="true"
            className={`absolute inset-0 transition-all duration-700 ${EASE} ${
                active ? "translate-x-0 opacity-100" : `${config.hidden} pointer-events-none opacity-0`
            }`}
        >
            {product && (
                <div className="absolute left-[40%] top-[12%] aspect-square w-[44%]">
                    <motion.div
                        className="relative h-full w-full"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <Image
                            src={product.image}
                            alt=""
                            fill
                            sizes="280px"
                            className="object-contain drop-shadow-[0_22px_26px_rgba(0,0,0,0.45)]"
                        />
                    </motion.div>
                </div>
            )}

            <div className="absolute bottom-9 left-[30%] right-10 text-white">
                <p className="font-serif text-[34px] leading-[1.05]">
                    <span className="font-medium">{config.lead}</span>
                    <br />
                    <span className="font-light italic">{config.italic}</span>
                </p>
                <p className="mt-3 max-w-[340px] text-[14px] leading-relaxed text-white/80">{config.text}</p>
            </div>
        </div>
    );
}

// ---------------------------------------------------------------------------
// Modal
// ---------------------------------------------------------------------------
export default function AuthModal() {
    const { isModalOpen, modalView, setModalView, closeAuthModal, googleLogin } = useAuth();
    const uid = useId();
    const dialogRef = useRef(null);
    const lastFocusRef = useRef(null);

    const [render, setRender] = useState(false); // mounted
    const [show, setShow] = useState(false); // visible (drives enter/exit animation)
    const [busy, setBusy] = useState(false);
    const [googleError, setGoogleError] = useState("");
    const [prefillEmail, setPrefillEmail] = useState("");
    const [forgotEmail, setForgotEmail] = useState("");
    const [forgotKey, setForgotKey] = useState(0);

    // Mount / unmount with enter and exit animation
    useEffect(() => {
        if (isModalOpen) {
            lastFocusRef.current = document.activeElement;
            setRender(true);
            const raf = requestAnimationFrame(() => requestAnimationFrame(() => setShow(true)));
            return () => cancelAnimationFrame(raf);
        }

        setShow(false);
        const timer = setTimeout(() => {
            setRender(false);
            setGoogleError("");
            setPrefillEmail("");
            setForgotEmail("");
            lastFocusRef.current?.focus?.();
        }, CLOSE_MS);
        return () => clearTimeout(timer);
    }, [isModalOpen]);

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

    // Escape to close + keep Tab focus inside the dialog
    useEffect(() => {
        if (!render) return;

        const onKeyDown = (e) => {
            if (e.key === "Escape") {
                if (!busy) closeAuthModal();
                return;
            }
            if (e.key !== "Tab" || !dialogRef.current) return;

            const nodes = Array.from(dialogRef.current.querySelectorAll(FOCUSABLE)).filter(
                (el) => !el.closest("[inert]")
            );
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
    }, [render, busy, closeAuthModal]);

    // Move focus into the dialog once it is visible (skip the keyboard pop-up on touch devices)
    useEffect(() => {
        if (!show) return;
        const timer = setTimeout(() => {
            const dialog = dialogRef.current;
            if (!dialog) return;
            const touch = window.matchMedia?.("(pointer: coarse)").matches;
            const target = touch ? null : dialog.querySelector("[data-view]:not([inert]) input");
            (target || dialog).focus({ preventScroll: true });
        }, 120);
        return () => clearTimeout(timer);
    }, [show]);

    const switchView = useCallback(
        (view) => {
            if (busy) return;
            setGoogleError("");
            if (view === "forgot") setForgotKey((k) => k + 1); // always start the reset flow fresh
            setModalView(view);
        },
        [busy, setModalView]
    );

    const openForgot = useCallback(
        (email) => {
            setForgotEmail(email || "");
            switchView("forgot");
        },
        [switchView]
    );

    // Account created but not signed in automatically: send them to log in with the email filled
    const handleNeedsLogin = useCallback(
        ({ email, message }) => {
            toast.success(message || "Account created. Please log in.");
            setPrefillEmail(email);
            setModalView("login");
        },
        [setModalView]
    );

    const handleForgotDone = useCallback(
        ({ email, message }) => {
            toast.success(message || "Password updated. Log in with your new password.");
            setPrefillEmail(email);
            setModalView("login");
        },
        [setModalView]
    );

    const handleSuccess = useCallback(
        (user, mode) => {
            toast.success(
                mode === "signup" ? `Account created. Welcome, ${firstName(user)}.` : `Welcome back, ${firstName(user)}.`
            );
            closeAuthModal();
        },
        [closeAuthModal]
    );

    const handleGoogleCredential = useCallback(
        async (credential) => {
            setBusy(true);
            setGoogleError("");
            try {
                const user = await googleLogin(credential);
                handleSuccess(user, "google");
            } catch (err) {
                setGoogleError(err?.message || "Google sign-in failed. Please try again.");
            } finally {
                setBusy(false);
            }
        },
        [googleLogin, handleSuccess]
    );

    const handleGoogleUnavailable = useCallback(() => {
        setGoogleError("Google sign-in is not available right now. Use your email and password instead.");
    }, []);

    if (!render) return null;

    const googleSection = (
        <GoogleSection
            busy={busy}
            error={googleError}
            onCredential={handleGoogleCredential}
            onUnavailable={handleGoogleUnavailable}
        />
    );

    const isLogin = modalView === "login";
    const isSignup = modalView === "signup";
    const isForgot = modalView === "forgot";

    return (
        <MotionConfig reducedMotion="user">
            <div className="fixed inset-0 z-[200] flex items-end justify-center sm:items-center sm:p-4">
                {/* Backdrop */}
                <div
                    aria-hidden="true"
                    onMouseDown={() => {
                        if (!busy) closeAuthModal();
                    }}
                    className={`absolute inset-0 bg-black/55 backdrop-blur-sm transition-opacity duration-300 ${
                        show ? "opacity-100" : "opacity-0"
                    }`}
                />

                {/* Dialog: bottom sheet on phones, centred card on tablets, split layout on desktop */}
                <div
                    ref={dialogRef}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby={`${uid}-${modalView}-title`}
                    tabIndex={-1}
                    className={`relative flex max-h-[94dvh] w-full flex-col overflow-hidden rounded-t-[28px] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.35)] outline-none transition-all duration-300 ${EASE} sm:max-h-[calc(100dvh-32px)] sm:max-w-[460px] sm:rounded-2xl lg:h-[min(640px,calc(100dvh-40px))] lg:max-w-[1040px] lg:flex-row ${
                        show
                            ? "translate-y-0 scale-100 opacity-100"
                            : "translate-y-full opacity-0 sm:translate-y-4 sm:scale-[0.98]"
                    }`}
                >
                    {/* Shared clip shape for the desktop panel (curve on the left edge) */}
                    <svg width="0" height="0" className="absolute" aria-hidden="true" focusable="false">
                        <defs>
                            <clipPath id={CLIP_ID} clipPathUnits="objectBoundingBox">
                                <path d="M 0.14 0 C 0.34 0.16, 0.04 0.34, 0.22 0.52 C 0.38 0.68, 0.08 0.86, 0.16 1 L 1 1 L 1 0 Z" />
                            </clipPath>
                        </defs>
                    </svg>

                    {/* Desktop right panel: farm photo + dark green overlay + product + copy */}
                    <div
                        className="absolute inset-y-0 right-0 hidden w-[58%] bg-forest lg:block"
                        style={{ clipPath: `url(#${CLIP_ID})` }}
                        aria-hidden="true"
                    >
                        <Image src={AUTH_BG_IMAGE} alt="" fill sizes="620px" className="object-cover" />
                        <div className="absolute inset-0 bg-forest/70" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                        <ShowcaseSet config={SHOWCASE.login} active={!isSignup} />
                        <ShowcaseSet config={SHOWCASE.signup} active={isSignup} />
                    </div>

                    {/* Mobile / tablet header image */}
                    <div className="relative h-[140px] shrink-0 overflow-hidden bg-forest lg:hidden" aria-hidden="true">
                        <Image src={AUTH_BG_IMAGE} alt="" fill sizes="460px" className="object-cover" />
                        <div className="absolute inset-0 bg-forest/70" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                        <div className="absolute inset-x-0 bottom-10 grid px-6 text-white">
                            {["login", "signup", "forgot"].map((view) => (
                                <div
                                    key={view}
                                    className={`col-start-1 row-start-1 transition-all duration-500 ${EASE} ${
                                        modalView === view
                                            ? "translate-x-0 opacity-100"
                                            : `opacity-0 ${view === "login" ? "-translate-x-6" : "translate-x-6"}`
                                    }`}
                                >
                                    <p className="font-serif text-[30px] font-semibold leading-none">
                                        {MOBILE_COPY[view].title}
                                    </p>
                                    <p className="mt-1.5 text-[13px] text-white/80">{MOBILE_COPY[view].sub}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Close */}
                    <button
                        type="button"
                        onClick={closeAuthModal}
                        disabled={busy}
                        aria-label="Close"
                        className="absolute right-3 top-3 z-30 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-white/90 transition-colors hover:bg-white/15 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 lg:right-4 lg:top-4"
                    >
                        <CloseIcon />
                    </button>

                    {/* Form column (white sheet over the header on small screens) */}
                    <div className="no-scrollbar relative z-10 -mt-7 flex min-h-0 w-full flex-1 flex-col overflow-y-auto rounded-tl-[40px] rounded-tr-[16px] bg-white px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-6 sm:px-8 lg:mt-0 lg:w-[46%] lg:flex-none lg:rounded-none lg:px-9 lg:pb-6 lg:pt-8">
                        {isForgot ? (
                            <div className="mb-5 flex border-b border-sage/25">
                                <button
                                    type="button"
                                    onClick={() => switchView("login")}
                                    disabled={busy}
                                    className="flex cursor-pointer items-center gap-1.5 pb-3 text-[14px] font-semibold text-forest transition-colors hover:text-forest-light disabled:cursor-not-allowed"
                                >
                                    <ChevronLeftIcon />
                                    Back to log in
                                </button>
                            </div>
                        ) : (
                        <div role="tablist" aria-label="Account" className="relative mb-5 flex border-b border-sage/25">
                            {[
                                { key: "login", label: "Log in" },
                                { key: "signup", label: "Sign up" },
                            ].map((tab) => (
                                <button
                                    key={tab.key}
                                    type="button"
                                    role="tab"
                                    id={`${uid}-${tab.key}-tab`}
                                    aria-selected={modalView === tab.key}
                                    aria-controls={`${uid}-${tab.key}-panel`}
                                    onClick={() => switchView(tab.key)}
                                    className={`flex-1 cursor-pointer pb-3 text-[14px] font-semibold transition-colors duration-200 ${
                                        modalView === tab.key ? "text-forest" : "text-gray-500 hover:text-forest"
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                            <span
                                aria-hidden="true"
                                className={`absolute -bottom-px left-0 h-[2px] w-1/2 bg-forest transition-transform duration-500 ${EASE} ${
                                    isLogin ? "translate-x-0" : "translate-x-full"
                                }`}
                            />
                        </div>
                        )}

                        {/* Both forms share one grid cell so they can slide past each other */}
                        <div className="grid">
                            <div
                                role="tabpanel"
                                id={`${uid}-login-panel`}
                                aria-labelledby={`${uid}-login-tab`}
                                data-view="login"
                                inert={!isLogin}
                                className={`col-start-1 row-start-1 self-center transition-all duration-500 ${EASE} ${
                                    isLogin ? "translate-x-0 opacity-100" : "pointer-events-none -translate-x-8 opacity-0"
                                }`}
                            >
                                <LoginForm
                                    uid={uid}
                                    busy={busy}
                                    setBusy={setBusy}
                                    onSuccess={handleSuccess}
                                    onSwitch={switchView}
                                    onForgot={openForgot}
                                    prefillEmail={prefillEmail}
                                    google={googleSection}
                                />
                            </div>

                            <div
                                role="tabpanel"
                                id={`${uid}-signup-panel`}
                                aria-labelledby={`${uid}-signup-tab`}
                                data-view="signup"
                                inert={!isSignup}
                                className={`col-start-1 row-start-1 self-center transition-all duration-500 ${EASE} ${
                                    isSignup ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-8 opacity-0"
                                }`}
                            >
                                <SignupForm
                                    uid={uid}
                                    busy={busy}
                                    setBusy={setBusy}
                                    onSuccess={handleSuccess}
                                    onSwitch={switchView}
                                    onNeedsLogin={handleNeedsLogin}
                                    google={googleSection}
                                />
                            </div>

                            <div
                                role="tabpanel"
                                id={`${uid}-forgot-panel`}
                                data-view="forgot"
                                inert={!isForgot}
                                className={`col-start-1 row-start-1 self-center transition-all duration-500 ${EASE} ${
                                    isForgot ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-8 opacity-0"
                                }`}
                            >
                                <ForgotForm
                                    key={forgotKey}
                                    uid={uid}
                                    busy={busy}
                                    setBusy={setBusy}
                                    onDone={handleForgotDone}
                                    initialEmail={forgotEmail}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MotionConfig>
    );
}