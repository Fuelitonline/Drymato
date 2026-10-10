"use client";

import { Toaster } from "react-hot-toast";

export default function ToasterProvider() {
    return (
        <Toaster
            position="top-right"
            reverseOrder={false}
            gutter={12}
            containerStyle={{
                position: "fixed",
                top: "90px",
                right: "24px",
                zIndex: 9999999,
                pointerEvents: "none"
            }}
            toastOptions={{
                duration: 6000,
                style: {
                    pointerEvents: "auto",
                    borderRadius: "20px",
                    padding: "16px 24px",
                    fontSize: "14px",
                    fontWeight: "700",
                    fontFamily: "var(--font-poppins)",
                    lineHeight: "1.5",
                    maxWidth: "420px"
                },
                success: {
                    duration: 6000,
                    style: {
                        background: "#f0fdf4",
                        color: "#14532d",
                        border: "2px solid #86efac",
                        boxShadow: "0 25px 60px rgba(22, 163, 74, 0.35)"
                    },
                    iconTheme: {
                        primary: "#16a34a",
                        secondary: "#ffffff"
                    }
                },
                error: {
                    duration: 6000,
                    style: {
                        background: "#fef2f2",
                        color: "#7f1d1d",
                        border: "2px solid #fca5a5",
                        boxShadow: "0 25px 60px rgba(220, 38, 38, 0.35)"
                    },
                    iconTheme: {
                        primary: "#dc2626",
                        secondary: "#ffffff"
                    }
                }
            }}
        />
    );
}
