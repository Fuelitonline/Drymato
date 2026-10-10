"use client";

import { FaCarrot, FaLemon, FaAppleAlt, FaPepperHot, FaLeaf } from "react-icons/fa";
import { useMarquees, decodeText } from "@/context/WebsiteDataContext";

const ICONS = [
    { Icon: FaCarrot, color: "#f4a259", rotate: "rotate-12" },
    { Icon: FaLemon, color: "#f6d365", rotate: "-rotate-12" },
    { Icon: FaAppleAlt, color: "#f7e1d0", rotate: "rotate-6" },
    { Icon: FaPepperHot, color: "#ff9f8a", rotate: "-rotate-6" },
    { Icon: FaLeaf, color: "#b7c98f", rotate: "rotate-12" },
];

export default function AnnouncementMarquee() {
    const marquees = useMarquees();

    // Nothing active from the API means nothing renders
    if (marquees.length === 0) return null;

    // Repeat the messages so one "set" is always wider than the screen
    const repeat = Math.max(2, Math.ceil(8 / marquees.length));
    const set = Array.from({ length: repeat }, () => marquees).flat();

    // "speed" from the API = seconds each message takes to pass
    const avgSpeed =
        marquees.reduce((sum, m) => sum + (Number(m.speed) || 10), 0) / marquees.length;
    const duration = Math.max(20, set.length * avgSpeed);

    return (
        <div
            role="region"
            aria-label="Announcements"
            className="group relative w-full overflow-hidden border-b border-mustard/50 bg-linear-to-r from-brick-hover via-brick to-brick-hover text-surface"
        >
            {/* edge fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-linear-to-r from-brick-hover to-transparent sm:w-24" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-linear-to-l from-brick-hover to-transparent sm:w-24" />

            <div
                className="flex w-max animate-wave group-hover:[animation-play-state:paused] motion-reduce:animate-none"
                style={{ animationDuration: `${duration}s` }}
            >
                {[0, 1].map((copy) => (
                    <div
                        key={copy}
                        aria-hidden={copy === 1}
                        className="flex shrink-0 items-center"
                    >
                        {set.map((m, i) => {
                            const { Icon, color, rotate } = ICONS[i % ICONS.length];
                            return (
                                <div
                                    key={`${m._id}-${i}`}
                                    className="flex shrink-0 items-center gap-6 py-2.5 pr-6"
                                >
                                    <span className="whitespace-nowrap font-sans text-xs font-bold uppercase tracking-[0.2em] sm:text-[13px]">
                                        {decodeText(m.text)}
                                    </span>
                                    <Icon
                                        aria-hidden="true"
                                        className={`h-4 w-4 shrink-0 ${rotate}`}
                                        style={{ color }}
                                    />
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
}