"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

type Status = "idle" | "loading" | "success" | "error";

export default function WaitlistForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState<Status>("idle");
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        setStatus("loading");
        setErrorMsg("");

        try {
            const res = await fetch("/api/waitlist", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                setStatus("error");
                setErrorMsg(
                    data.error || "Something went wrong."
                );
                return;
            }

            setStatus("success");
            setEmail("");
            setPassword("");
        } catch {
            setStatus("error");
            setErrorMsg("Network error. Try again.");
        }
    };

    /* ============================================================
       SUCCESS STATE
    ============================================================ */

    if (status === "success") {
        return (
            <motion.div
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                className="
                    mx-auto
                    w-full
                    max-w-lg
                    rounded-2xl
                    border
                    border-[#AEB58F]/40
                    bg-[#F4F1EB]
                    px-8
                    py-12
                    text-center
                    shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                "
            >
                <div
                    className="
                        mx-auto
                        mb-5
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        bg-[#8C956A]
                        text-white
                    "
                >
                    ✓
                </div>

                <p
                    className="
                        font-serif
                        text-2xl
                        text-[#2B2728]
                    "
                >
                    You&apos;re on the list.
                </p>

                <p
                    className="
                        mx-auto
                        mt-3
                        max-w-sm
                        text-sm
                        leading-relaxed
                        text-[#5C5754]
                    "
                >
                    We&apos;ll email you the moment
                    Sadyaatra opens up.
                </p>
            </motion.div>
        );
    }

    /* ============================================================
       FORM
    ============================================================ */

    return (
        <motion.form
            onSubmit={handleSubmit}
            initial={{
                opacity: 0,
                y: 30,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.3,
            }}
            transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="
                mx-auto
                w-full
                max-w-lg
            "
        >

            {/* =====================================================
                HEADER
            ====================================================== */}

            <div className="mb-10 text-center mt-10">


                <h2
                    className="
                        font-serif
                        text-3xl
                        font-medium
                        text-white
                        md:text-4xl
                    "
                >
                    Be the first to travel
                    differently.
                </h2>

                {/* Khaki underline */}

                <motion.div
                    className="
                        mx-auto
                        mt-5
                        h-[2px]
                        rounded-full
                        bg-[#AEB58F]
                    "
                    initial={{
                        width: 0,
                    }}
                    whileInView={{
                        width: 65,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.7,
                        delay: 0.3,
                    }}
                />

                <p
                    className="
                        mx-auto
                        mt-5
                        max-w-md
                        text-sm
                        leading-relaxed
                        text-[#D6CFCC]/70
                    "
                >
                    Join the Sadyaatra waitlist and get
                    early access when we launch.
                </p>

            </div>

            {/* =====================================================
                EMAIL
            ====================================================== */}

            <div className="mb-7">

                <label
                    htmlFor="email"
                    className="
                        mb-2.5
                        block
                        text-[11px]
                        font-medium
                        uppercase
                        tracking-[0.16em]
                        text-[#AEB58F]
                    "
                >
                    Email
                </label>

                <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                    placeholder="you@example.com"
                    className="
                        h-14
                        w-full
                        rounded-lg
                        border
                        border-white/10
                        bg-[#F4F1EB]
                        px-5
                        text-[15px]
                        text-[#2B2728]
                        outline-none
                        placeholder:text-[#5C5754]/45
                        transition-all
                        duration-300
                        focus:border-[#8C956A]
                        focus:ring-2
                        focus:ring-[#8C956A]/20
                    "
                />

            </div>

            {/* =====================================================
                PASSWORD
            ====================================================== */}

            <div className="mb-8">

                <label
                    htmlFor="password"
                    className="
                        mb-2.5
                        block
                        text-[11px]
                        font-medium
                        uppercase
                        tracking-[0.16em]
                        text-[#AEB58F]
                    "
                >
                    Password
                </label>

                <input
                    id="password"
                    type="password"
                    required
                    minLength={8}
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                    placeholder="At least 8 characters"
                    className="
                        h-14
                        w-full
                        rounded-lg
                        border
                        border-white/10
                        bg-[#F4F1EB]
                        px-5
                        text-[15px]
                        text-[#2B2728]
                        outline-none
                        placeholder:text-[#5C5754]/45
                        transition-all
                        duration-300
                        focus:border-[#8C956A]
                        focus:ring-2
                        focus:ring-[#8C956A]/20
                    "
                />

            </div>

            {/* =====================================================
                ERROR
            ====================================================== */}

            {status === "error" && (
                <motion.p
                    initial={{
                        opacity: 0,
                        y: -5,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    className="
                        mb-5
                        text-center
                        text-sm
                        text-red-300
                    "
                >
                    {errorMsg}
                </motion.p>
            )}

            {/* =====================================================
                BUTTON
            ====================================================== */}

            <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={{
                    scale: 1.01,
                }}
                whileTap={{
                    scale: 0.98,
                }}
                className="
                    h-14
                    w-full
                    rounded-lg
                    bg-[#8C956A]
                    text-xs
                    font-medium
                    uppercase
                    tracking-[0.18em]
                    text-white
                    shadow-[0_10px_30px_rgba(140,149,106,0.2)]
                    transition-all
                    duration-300
                    hover:bg-[#9AA477]
                    hover:shadow-[0_14px_35px_rgba(140,149,106,0.3)]
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                "
            >
                {status === "loading"
                    ? "Joining…"
                    : "Join the Waitlist"}
            </motion.button>

            {/* =====================================================
                PRIVACY NOTE
            ====================================================== */}

            <p
                className="
                    mt-5
                    text-center
                    text-[11px]
                    leading-relaxed
                    text-[#D6CFCC]/40
                "
            >
                No spam. Just launch updates and early access.
            </p>

        </motion.form>
    );
}