"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAuth, validators, normalizeMobile, OTP_LENGTH } from "@/context/AuthContext";
import Modal, { LogoutDialog } from "@/components/Modal";

const RESEND_SECONDS = 30;
const NAME_RE = /^[\p{L}][\p{L}\p{M} .'-]*$/u;
const clean = (v = "") => String(v).trim().replace(/\s+/g, " ");

// ---------------------------------------------------------------------------
// Icons
// ---------------------------------------------------------------------------
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

const LockIcon = () => (
    <span className="flex w-10 shrink-0 items-center justify-center text-gray-400" aria-hidden="true">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <rect x="5" y="11" width="14" height="9" rx="2" />
            <path strokeLinecap="round" d="M8 11V8a4 4 0 118 0v3" />
        </svg>
    </span>
);

const Spinner = () => (
    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.3" strokeWidth="3" />
        <path d="M21 12a9 9 0 00-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
);

// ---------------------------------------------------------------------------
// Building blocks
// ---------------------------------------------------------------------------
function Field({ id, label, labelAction, error, hint, prefix, suffix, readOnly, ...input }) {
    const errorId = `${id}-error`;
    return (
        <div>
            <div className="mb-1.5 flex items-baseline justify-between gap-3">
                <label htmlFor={id} className="text-[13px] font-semibold text-gray-700">
                    {label}
                </label>
                {labelAction}
            </div>
            <div
                className={`flex h-11 items-stretch rounded-lg border transition-all duration-200 ${
                    readOnly
                        ? "border-sage/20 bg-gray-50"
                        : `focus-within:border-forest/60 focus-within:bg-white focus-within:ring-4 focus-within:ring-forest/10 ${
                              error ? "border-brick/60 bg-brick/5" : "border-sage/25 bg-sage/10"
                          }`
                }`}
            >
                {prefix && (
                    <span className="flex items-center border-r border-sage/30 pl-3.5 pr-2.5 text-[14px] font-medium text-gray-500">
                        {prefix}
                    </span>
                )}
                <input
                    id={id}
                    readOnly={readOnly}
                    aria-invalid={error ? true : undefined}
                    aria-describedby={error ? errorId : undefined}
                    spellCheck={false}
                    className={`min-w-0 flex-1 bg-transparent px-3.5 text-[16px] outline-none placeholder:text-gray-400 disabled:opacity-60 sm:text-[14px] ${
                        readOnly ? "cursor-not-allowed text-gray-500" : "text-foreground"
                    }`}
                    {...input}
                />
                {suffix}
            </div>
            {error ? (
                <p id={errorId} className="mt-1 text-[12px] text-brick">
                    {error}
                </p>
            ) : hint ? (
                <p className="mt-1 text-[12px] text-gray-500">{hint}</p>
            ) : null}
        </div>
    );
}

function ErrorBanner({ children }) {
    return (
        <p role="alert" className="rounded-lg border border-brick/25 bg-brick/5 px-3 py-2 text-[13px] leading-snug text-brick">
            {children}
        </p>
    );
}

function PrimaryButton({ loading, disabled, children, ...props }) {
    return (
        <button
            disabled={loading || disabled}
            className="flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-forest px-7 text-[13px] font-bold tracking-wider text-white shadow-[0_8px_18px_rgba(36,56,34,0.2)] transition-all duration-200 hover:bg-forest-light disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none sm:w-auto"
            {...props}
        >
            {loading && <Spinner />}
            {children}
        </button>
    );
}

const textButton =
    "cursor-pointer text-[13px] font-semibold text-forest underline-offset-2 transition-colors hover:text-forest-light hover:underline disabled:cursor-not-allowed disabled:text-gray-400 disabled:no-underline";

function Panel({ title, description, children }) {
    return (
        <section className="overflow-hidden rounded-2xl border border-sage/25 bg-white">
            <div className="border-b border-sage/20 px-5 py-5 sm:px-8 sm:py-6">
                <h2 className="text-[24px] font-semibold leading-none text-foreground sm:text-[28px]">{title}</h2>
                {description && <p className="mt-2 max-w-[560px] text-[14px] leading-relaxed text-gray-600">{description}</p>}
            </div>
            {children}
        </section>
    );
}

function Rule({ ok, children }) {
    return (
        <li className={`flex items-center gap-2 text-[13px] transition-colors ${ok ? "text-forest" : "text-gray-500"}`}>
            <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                {ok ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                ) : (
                    <circle cx="12" cy="12" r="8" strokeOpacity="0.45" />
                )}
            </svg>
            <span>{children}</span>
            <span className="sr-only">{ok ? "(done)" : "(not done yet)"}</span>
        </li>
    );
}

function PasswordRules({ password, current }) {
    return (
        <ul className="grid gap-2 rounded-xl bg-sage/10 p-4 sm:grid-cols-2" aria-label="Password requirements">
            <Rule ok={password.length >= 8}>At least 8 characters</Rule>
            <Rule ok={/[A-Za-z]/.test(password)}>Contains a letter</Rule>
            <Rule ok={/\d/.test(password)}>Contains a number</Rule>
            {current !== undefined && (
                <Rule ok={password.length > 0 && password !== current}>Different from current password</Rule>
            )}
        </ul>
    );
}

function namePart(value, label, required) {
    const s = clean(value);
    if (!s) return required ? `Enter your ${label}.` : "";
    if (s.length > 40) return `Use 40 characters or fewer.`;
    if (!NAME_RE.test(s)) return "Use letters, spaces and . ' - only.";
    return "";
}

// ---------------------------------------------------------------------------
// Profile header
// ---------------------------------------------------------------------------
function Avatar({ user }) {
    const [failed, setFailed] = useState(false);
    const initials =
        ((user.firstName || user.name || "?")[0] + (user.lastName ? user.lastName[0] : "")).toUpperCase();

    if (user.avatar && !failed) {
        return (
            // eslint-disable-next-line @next/next/no-img-element
            <img
                src={user.avatar}
                alt=""
                referrerPolicy="no-referrer"
                onError={() => setFailed(true)}
                className="h-16 w-16 shrink-0 rounded-full border border-sage/25 object-cover sm:h-20 sm:w-20"
            />
        );
    }
    return (
        <div
            aria-hidden="true"
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-forest font-serif text-[24px] font-semibold text-white sm:h-20 sm:w-20 sm:text-[30px]"
        >
            {initials}
        </div>
    );
}

const PROVIDER_LABEL = { google: "Google" };

function memberSince(createdAt) {
    const d = createdAt ? new Date(createdAt) : null;
    if (!d || Number.isNaN(d.getTime())) return "";
    return d.toLocaleDateString("en-IN", { month: "long", year: "numeric" });
}

function signInMethod(user) {
    if (!user.authProvider) return "";
    return PROVIDER_LABEL[user.authProvider] || "Email and password";
}

function ProfileHeader({ user, onLogout }) {
    const since = memberSince(user.createdAt);
    const method = signInMethod(user);
    const meta = [since && `Member since ${since}`, method && `Signed in with ${method}`].filter(Boolean).join("  ·  ");

    return (
        <section className="rounded-2xl border border-sage/25 bg-white p-5 sm:p-7">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex min-w-0 items-center gap-4 sm:gap-5">
                    <Avatar key={user.avatar} user={user} />
                    <div className="min-w-0">
                        <h1 className="truncate text-[28px] font-semibold leading-none text-foreground sm:text-[36px]">
                            {user.name}
                        </h1>
                        <p className="mt-2 truncate text-[14px] text-gray-600">{user.email}</p>
                        {meta && <p className="mt-1 text-[13px] text-gray-500">{meta}</p>}
                    </div>
                </div>
                <button
                    type="button"
                    onClick={onLogout}
                    className="h-10 w-full shrink-0 cursor-pointer rounded-lg border border-forest/40 px-6 text-[13px] font-bold tracking-wider text-forest transition-colors hover:bg-forest hover:text-white sm:w-auto"
                >
                    Log out
                </button>
            </div>
        </section>
    );
}

// ---------------------------------------------------------------------------
// Tab 1: personal details
// ---------------------------------------------------------------------------
function PersonalDetails({ user }) {
    const { updateProfile } = useAuth();

    const savedFirst = user.firstName || "";
    const savedLast = user.lastName || "";
    const savedMobile = normalizeMobile(user.mobile);

    const [first, setFirst] = useState(savedFirst);
    const [last, setLast] = useState(savedLast);
    const [mobile, setMobile] = useState(savedMobile);
    const [errors, setErrors] = useState({});
    const [formError, setFormError] = useState("");
    const [saving, setSaving] = useState(false);

    const firstChanged = clean(first) !== clean(savedFirst);
    const lastChanged = clean(last) !== clean(savedLast);
    const mobileChanged = mobile !== savedMobile;
    const dirty = firstChanged || lastChanged || mobileChanged;

    const edit = (setter, key) => (e) => {
        setter(key === "mobile" ? normalizeMobile(e.target.value).slice(0, 10) : e.target.value);
        setErrors((er) => ({ ...er, [key]: "" }));
        setFormError("");
    };

    const discard = () => {
        setFirst(savedFirst);
        setLast(savedLast);
        setMobile(savedMobile);
        setErrors({});
        setFormError("");
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (saving || !dirty) return;

        // Validate only what changed, so existing accounts are never blocked by old data
        const next = {
            firstName: firstChanged ? namePart(first, "first name", true) : "",
            lastName: lastChanged ? namePart(last, "last name", Boolean(savedLast)) : "",
            mobile: mobileChanged
                ? mobile
                    ? validators.mobile(mobile)
                    : savedMobile
                      ? "Enter your mobile number."
                      : ""
                : "",
        };
        setErrors(next);
        if (next.firstName || next.lastName || next.mobile) return;

        // The backend overwrites every field it receives, so always send the full set
        const body = new FormData();
        body.append("firstName", clean(first));
        if (clean(last)) body.append("lastName", clean(last));
        body.append("email", user.email);
        if (mobile) body.append("mobileNumber", mobile);
        if (user.gender) body.append("gender", user.gender);

        setSaving(true);
        setFormError("");
        try {
            const message = await updateProfile(body);
            setFirst(clean(first));
            setLast(clean(last));
            toast.success(message);
        } catch (err) {
            if (err?.status === 401) return; // session expired: the login window opens by itself
            const fe = err?.fieldErrors || {};
            const mapped = {};
            if (fe.name) mapped.firstName = fe.name;
            if (fe.mobile) mapped.mobile = fe.mobile;
            if (Object.keys(mapped).length) setErrors(mapped);
            else setFormError(err?.message || "Could not update your profile. Please try again.");
        } finally {
            setSaving(false);
        }
    };

    const details = [
        ["Member since", memberSince(user.createdAt)],
        ["Sign-in method", signInMethod(user)],
    ].filter(([, value]) => value);

    return (
        <Panel
            title="Personal information"
            description="Keep your contact details up to date so our team can reach you about quotes, orders and enquiries."
        >
            <form onSubmit={onSubmit} noValidate className="px-5 py-6 sm:px-8 sm:py-7">
                <div className="grid gap-x-6 gap-y-5 sm:grid-cols-2">
                    <Field
                        id="profile-first-name"
                        name="firstName"
                        label="First name"
                        value={first}
                        onChange={edit(setFirst, "firstName")}
                        error={errors.firstName}
                        autoComplete="given-name"
                        autoCapitalize="words"
                        maxLength={40}
                        disabled={saving}
                    />
                    <Field
                        id="profile-last-name"
                        name="lastName"
                        label="Last name"
                        value={last}
                        onChange={edit(setLast, "lastName")}
                        error={errors.lastName}
                        autoComplete="family-name"
                        autoCapitalize="words"
                        maxLength={40}
                        disabled={saving}
                    />
                    <Field
                        id="profile-email"
                        name="email"
                        label="Email address"
                        value={user.email}
                        readOnly
                        suffix={<LockIcon />}
                        hint="Used to log in. It cannot be changed here."
                    />
                    <Field
                        id="profile-mobile"
                        name="mobile"
                        label="Mobile number"
                        type="tel"
                        value={mobile}
                        onChange={edit(setMobile, "mobile")}
                        error={errors.mobile}
                        prefix="+91"
                        autoComplete="tel-national"
                        inputMode="numeric"
                        placeholder="10-digit number"
                        hint="We use this to contact you about your enquiries."
                        disabled={saving}
                    />
                </div>

                {formError && (
                    <div className="mt-5">
                        <ErrorBanner>{formError}</ErrorBanner>
                    </div>
                )}

                <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="min-h-[20px] text-[13px] text-gray-500">
                        {dirty && (
                            <span>
                                You have unsaved changes.{" "}
                                <button type="button" onClick={discard} disabled={saving} className={textButton}>
                                    Discard
                                </button>
                            </span>
                        )}
                    </div>
                    <PrimaryButton type="submit" loading={saving} disabled={!dirty}>
                        Save changes
                    </PrimaryButton>
                </div>
            </form>

            {details.length > 0 && (
                <dl className="grid gap-5 border-t border-sage/20 bg-sage/[0.06] px-5 py-5 sm:grid-cols-2 sm:px-8">
                    {details.map(([term, value]) => (
                        <div key={term}>
                            <dt className="text-[12px] font-semibold text-gray-500">{term}</dt>
                            <dd className="mt-1 text-[14px] font-medium text-foreground">{value}</dd>
                        </div>
                    ))}
                </dl>
            )}
        </Panel>
    );
}

// ---------------------------------------------------------------------------
// Tab 2: security
// ---------------------------------------------------------------------------
const EMPTY_PASSWORDS = { currentPassword: "", newPassword: "", confirmPassword: "" };

function ShowToggle({ shown, onToggle, label }) {
    return (
        <button
            type="button"
            onClick={onToggle}
            aria-label={shown ? `Hide ${label}` : `Show ${label}`}
            aria-pressed={shown}
            className="flex w-10 shrink-0 cursor-pointer items-center justify-center text-gray-500 transition-colors hover:text-forest"
        >
            <EyeIcon off={shown} />
        </button>
    );
}

function ChangePassword({ onForgot }) {
    const { changePassword } = useAuth();
    const [values, setValues] = useState(EMPTY_PASSWORDS);
    const [errors, setErrors] = useState({});
    const [formError, setFormError] = useState("");
    const [saving, setSaving] = useState(false);
    const [shown, setShown] = useState({ current: false, next: false, confirm: false });

    const flip = (key) => () => setShown((s) => ({ ...s, [key]: !s[key] }));

    const change = (name) => (e) => {
        setValues((v) => ({ ...v, [name]: e.target.value }));
        setErrors((er) => ({ ...er, [name]: "" }));
        setFormError("");
    };

    const blurNew = () => {
        if (!values.newPassword) return;
        let message = validators.newPassword(values.newPassword);
        if (!message && values.currentPassword && values.newPassword === values.currentPassword) {
            message = "Choose a password different from your current one.";
        }
        setErrors((er) => ({ ...er, newPassword: message }));
    };

    const blurConfirm = () => {
        if (!values.confirmPassword) return;
        setErrors((er) => ({
            ...er,
            confirmPassword: values.confirmPassword === values.newPassword ? "" : "Passwords do not match.",
        }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (saving) return;

        const next = {
            currentPassword: values.currentPassword ? "" : "Enter your current password.",
            newPassword: validators.newPassword(values.newPassword),
            confirmPassword: "",
        };
        if (!next.newPassword && values.newPassword === values.currentPassword) {
            next.newPassword = "Choose a password different from your current one.";
        }
        if (!next.newPassword && values.confirmPassword !== values.newPassword) {
            next.confirmPassword = "Passwords do not match.";
        }
        setErrors(next);
        if (next.currentPassword || next.newPassword || next.confirmPassword) return;

        setSaving(true);
        setFormError("");
        try {
            const message = await changePassword({
                currentPassword: values.currentPassword,
                newPassword: values.newPassword,
            });
            toast.success(message);
            setValues(EMPTY_PASSWORDS);
            setErrors({});
        } catch (err) {
            if (err?.status === 401) return; // session expired: the login window opens by itself
            if (err?.status === 400 && /current|incorrect|wrong|invalid/i.test(err.message || "")) {
                setErrors({ currentPassword: err.message });
            } else {
                setFormError(err?.message || "Could not update your password. Please try again.");
            }
        } finally {
            setSaving(false);
        }
    };

    return (
        <form onSubmit={onSubmit} noValidate className="px-5 py-6 sm:px-8 sm:py-7">
            <div className="grid gap-x-6 gap-y-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                    <Field
                        id="profile-current-password"
                        name="currentPassword"
                        label="Current password"
                        labelAction={
                            <button type="button" onClick={onForgot} className={textButton}>
                                Forgot password?
                            </button>
                        }
                        type={shown.current ? "text" : "password"}
                        value={values.currentPassword}
                        onChange={change("currentPassword")}
                        error={errors.currentPassword}
                        autoComplete="current-password"
                        disabled={saving}
                        suffix={<ShowToggle shown={shown.current} onToggle={flip("current")} label="current password" />}
                    />
                </div>
                <Field
                    id="profile-new-password"
                    name="newPassword"
                    label="New password"
                    type={shown.next ? "text" : "password"}
                    value={values.newPassword}
                    onChange={change("newPassword")}
                    onBlur={blurNew}
                    error={errors.newPassword}
                    autoComplete="new-password"
                    maxLength={64}
                    disabled={saving}
                    suffix={<ShowToggle shown={shown.next} onToggle={flip("next")} label="new password" />}
                />
                <Field
                    id="profile-confirm-password"
                    name="confirmPassword"
                    label="Confirm new password"
                    type={shown.confirm ? "text" : "password"}
                    value={values.confirmPassword}
                    onChange={change("confirmPassword")}
                    onBlur={blurConfirm}
                    error={errors.confirmPassword}
                    autoComplete="new-password"
                    maxLength={64}
                    disabled={saving}
                    suffix={<ShowToggle shown={shown.confirm} onToggle={flip("confirm")} label="confirmed password" />}
                />
                <div className="sm:col-span-2">
                    <PasswordRules password={values.newPassword} current={values.currentPassword} />
                </div>
            </div>

            {formError && (
                <div className="mt-5">
                    <ErrorBanner>{formError}</ErrorBanner>
                </div>
            )}

            <div className="mt-7 flex justify-end">
                <PrimaryButton type="submit" loading={saving}>
                    Update password
                </PrimaryButton>
            </div>
        </form>
    );
}

const secondaryButton =
    "h-11 w-full cursor-pointer rounded-lg border border-sage/40 px-6 text-[13px] font-bold tracking-wider text-gray-700 transition-colors hover:bg-sage/10 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto";

// Reset (or create) a password with a one-time code sent to the account email.
// Shown in a popup so every step is instantly visible.
function ResetFlow({ email, mode, busy, setBusy, onClose }) {
    const { forgotPassword, resetPassword } = useAuth();
    const [step, setStep] = useState("send"); // "send" | "reset"
    const [values, setValues] = useState({ otp: "", newPassword: "" });
    const [errors, setErrors] = useState({});
    const [formError, setFormError] = useState("");
    const [cooldown, setCooldown] = useState(0);
    const [show, setShow] = useState(false);

    // Resend countdown
    useEffect(() => {
        if (cooldown <= 0) return;
        const timer = setTimeout(() => setCooldown((c) => c - 1), 1000);
        return () => clearTimeout(timer);
    }, [cooldown]);

    const intro =
        mode === "create"
            ? "We will send a one-time verification code to your email address so you can set a password for logging in with your email. You can keep using Google as well."
            : "We will send a one-time verification code to your email address so you can set a new password without needing the current one.";

    const sendCode = async () => {
        if (busy) return;
        setBusy(true);
        setFormError("");
        try {
            await forgotPassword(email.toLowerCase());
            setStep("reset");
            setValues((v) => ({ ...v, otp: "" }));
            setErrors({});
            setCooldown(RESEND_SECONDS);
        } catch (err) {
            if (err?.status === 401) return;
            setFormError(err?.message || "Could not send the code. Please try again.");
        } finally {
            setBusy(false);
        }
    };

    const change = (name) => (e) => {
        const value = name === "otp" ? e.target.value.replace(/\D/g, "").slice(0, OTP_LENGTH) : e.target.value;
        setValues((v) => ({ ...v, [name]: value }));
        setErrors((er) => ({ ...er, [name]: "" }));
        setFormError("");
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (busy) return;

        const next = { otp: validators.otp(values.otp), newPassword: validators.newPassword(values.newPassword) };
        setErrors(next);
        if (next.otp || next.newPassword) return;

        setBusy(true);
        setFormError("");
        try {
            const message = await resetPassword({
                email: email.toLowerCase(),
                otp: values.otp,
                newPassword: values.newPassword,
            });
            toast.success(message);
            onClose();
        } catch (err) {
            if (err?.status === 401) return;
            const fe = err?.fieldErrors || {};
            const mapped = {};
            if (fe.otp) mapped.otp = fe.otp;
            if (fe.password) mapped.newPassword = fe.password;
            if (Object.keys(mapped).length) setErrors(mapped);
            else setFormError(err?.message || "Could not reset your password. Please try again.");
        } finally {
            setBusy(false);
        }
    };

    if (step === "send") {
        return (
            <div>
                <p className="text-[14px] leading-relaxed text-gray-600">{intro}</p>
                <p className="mt-4 rounded-lg bg-sage/10 px-4 py-3 text-[13px] text-gray-600">
                    The code will be sent to <span className="font-semibold text-foreground">{email}</span>
                </p>

                {formError && (
                    <div className="mt-4">
                        <ErrorBanner>{formError}</ErrorBanner>
                    </div>
                )}

                <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                    <button type="button" onClick={onClose} disabled={busy} className={secondaryButton}>
                        Cancel
                    </button>
                    <PrimaryButton type="button" data-autofocus onClick={sendCode} loading={busy}>
                        Send verification code
                    </PrimaryButton>
                </div>
            </div>
        );
    }

    return (
        <form onSubmit={onSubmit} noValidate>
            <p className="mb-5 text-[14px] leading-relaxed text-gray-600">
                Enter the {OTP_LENGTH}-digit code we sent to <span className="font-semibold text-foreground">{email}</span>{" "}
                and choose a new password.
            </p>

            <div className="grid gap-x-5 gap-y-5 sm:grid-cols-2">
                <Field
                    id="reset-otp"
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
                    autoFocus
                />
                <Field
                    id="reset-new-password"
                    name="newPassword"
                    label="New password"
                    type={show ? "text" : "password"}
                    value={values.newPassword}
                    onChange={change("newPassword")}
                    error={errors.newPassword}
                    autoComplete="new-password"
                    maxLength={64}
                    disabled={busy}
                    suffix={<ShowToggle shown={show} onToggle={() => setShow((s) => !s)} label="new password" />}
                />
                <div className="sm:col-span-2">
                    <PasswordRules password={values.newPassword} />
                </div>
            </div>

            {formError && (
                <div className="mt-5">
                    <ErrorBanner>{formError}</ErrorBanner>
                </div>
            )}

            <div className="mt-6 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center justify-center gap-5 sm:justify-start">
                    <button type="button" onClick={sendCode} disabled={busy || cooldown > 0} className={textButton}>
                        {cooldown > 0 ? `Resend code in ${cooldown}s` : "Resend code"}
                    </button>
                    <button type="button" onClick={onClose} disabled={busy} className={textButton}>
                        Cancel
                    </button>
                </div>
                <PrimaryButton type="submit" loading={busy}>
                    Reset password
                </PrimaryButton>
            </div>
        </form>
    );
}

function ResetPasswordDialog({ open, onClose, email, mode }) {
    const [busy, setBusy] = useState(false);

    return (
        <Modal
            open={open}
            onClose={onClose}
            busy={busy}
            dismissOnBackdrop={false}
            title={mode === "create" ? "Create a password" : "Forgot your current password?"}
        >
            <ResetFlow email={email} mode={mode} busy={busy} setBusy={setBusy} onClose={onClose} />
        </Modal>
    );
}

function Security({ user }) {
    const [resetOpen, setResetOpen] = useState(false);
    const usesGoogle = user.authProvider === "google";

    return (
        <>
            {usesGoogle ? (
                <Panel
                    title="Password"
                    description="You sign in with your Google account, so there is no separate password to change."
                >
                    <div className="px-5 py-6 sm:px-8 sm:py-7">
                        <h3 className="text-[20px] font-semibold leading-none text-foreground">Create a password</h3>
                        <p className="mt-2 max-w-[560px] text-[14px] leading-relaxed text-gray-600">
                            If you would also like to log in with your email address, we can send a one-time
                            verification code to set a password. You can keep using Google as well.
                        </p>
                        <div className="mt-5">
                            <PrimaryButton type="button" onClick={() => setResetOpen(true)}>
                                Create a password
                            </PrimaryButton>
                        </div>
                    </div>
                </Panel>
            ) : (
                <Panel title="Change password" description="Choose a strong password that you do not use on any other website.">
                    <ChangePassword onForgot={() => setResetOpen(true)} />
                </Panel>
            )}

            <ResetPasswordDialog
                open={resetOpen}
                onClose={() => setResetOpen(false)}
                email={user.email}
                mode={usesGoogle ? "create" : "forgot"}
            />
        </>
    );
}

// ---------------------------------------------------------------------------
// Tabs + page
// ---------------------------------------------------------------------------
const TABS = [
    { key: "personal", label: "Personal details" },
    { key: "security", label: "Security" },
];

function Tabs({ active, onChange }) {
    const onKeyDown = (e) => {
        if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
        e.preventDefault();
        const index = TABS.findIndex((t) => t.key === active);
        const next = TABS[(index + (e.key === "ArrowRight" ? 1 : TABS.length - 1)) % TABS.length];
        onChange(next.key);
        document.getElementById(`profile-tab-${next.key}`)?.focus();
    };

    return (
        <div
            role="tablist"
            aria-label="Account sections"
            onKeyDown={onKeyDown}
            className="grid grid-cols-2 gap-1 rounded-xl bg-sage/10 p-1"
        >
            {TABS.map((tab) => {
                const selected = tab.key === active;
                return (
                    <button
                        key={tab.key}
                        type="button"
                        role="tab"
                        id={`profile-tab-${tab.key}`}
                        aria-selected={selected}
                        aria-controls={`profile-panel-${tab.key}`}
                        tabIndex={selected ? 0 : -1}
                        onClick={() => onChange(tab.key)}
                        className={`h-10 cursor-pointer rounded-lg text-[14px] font-semibold transition-all duration-200 ${
                            selected ? "bg-white text-forest shadow-sm" : "text-gray-600 hover:text-forest"
                        }`}
                    >
                        {tab.label}
                    </button>
                );
            })}
        </div>
    );
}

export default function ProfileClient() {
    const { user, status, openAuthModal } = useAuth();
    const [tab, setTab] = useState("personal");
    const [logoutOpen, setLogoutOpen] = useState(false);

    return (
        <main className="bg-white px-4 py-8 sm:px-6 sm:py-12 lg:px-[6%]">
            <div className="mx-auto w-full max-w-[960px]">
                {status === "loading" ? (
                    <div className="space-y-5" aria-hidden="true">
                        <div className="h-[120px] animate-pulse rounded-2xl bg-sage/15 sm:h-[134px]" />
                        <div className="h-12 animate-pulse rounded-xl bg-sage/15" />
                        <div className="h-[420px] animate-pulse rounded-2xl bg-sage/15" />
                    </div>
                ) : !user ? (
                    <section className="mx-auto max-w-[520px] rounded-2xl border border-sage/25 bg-white px-6 py-10 text-center sm:px-10 sm:py-12">
                        <h1 className="text-[32px] font-semibold leading-none text-foreground sm:text-[38px]">My account</h1>
                        <p className="mx-auto mt-4 max-w-[360px] text-[14px] leading-relaxed text-gray-600">
                            Log in to view and update your contact details and password.
                        </p>
                        <div className="mt-7 flex justify-center">
                            <PrimaryButton type="button" onClick={() => openAuthModal("login")}>
                                Log in
                            </PrimaryButton>
                        </div>
                        <p className="mt-5 text-[13px] text-gray-600">
                            New to Drymato?{" "}
                            <button
                                type="button"
                                onClick={() => openAuthModal("signup")}
                                className="cursor-pointer font-semibold text-forest underline underline-offset-2 transition-colors hover:text-forest-light"
                            >
                                Create an account
                            </button>
                        </p>
                    </section>
                ) : (
                    <div className="space-y-5">
                        <ProfileHeader user={user} onLogout={() => setLogoutOpen(true)} />
                        <Tabs active={tab} onChange={setTab} />

                        <div
                            role="tabpanel"
                            id="profile-panel-personal"
                            aria-labelledby="profile-tab-personal"
                            hidden={tab !== "personal"}
                        >
                            <PersonalDetails key={user.id} user={user} />
                        </div>
                        <div
                            role="tabpanel"
                            id="profile-panel-security"
                            aria-labelledby="profile-tab-security"
                            hidden={tab !== "security"}
                        >
                            <Security key={user.id} user={user} />
                        </div>
                    </div>
                )}
            </div>

            <LogoutDialog open={logoutOpen} onClose={() => setLogoutOpen(false)} />
        </main>
    );
}