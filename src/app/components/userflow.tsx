"use client";

import {
    Download,
    UserPlus,
    Compass,
    Route,
    Ticket,
    Users,
    Sparkles,
    type LucideIcon,
} from "lucide-react";

import { motion } from "framer-motion";

interface FlowStep {
    icon: LucideIcon;
    title: string;
    description: string;
}

const steps: FlowStep[] = [
    {
        icon: Download,
        title: "Download the App",
        description:
            "Get Sadyaatra on iOS or Android in under a minute.",
    },
    {
        icon: UserPlus,
        title: "Create Your Profile",
        description:
            "Tell us your travel style so plans actually fit you.",
    },
    {
        icon: Compass,
        title: "Explore Destinations",
        description:
            "Browse curated journeys, from backwaters to mountain passes.",
    },
    {
        icon: Route,
        title: "Click Plan",
        description:
            "Get a day-by-day itinerary built around your pace.",
    },
    {
        icon: Ticket,
        title: "Book Tickets",
        description:
            "Confirm stays, transport, and experiences in one place.",
    },
    {
        icon: Users,
        title: "Connect Locally",
        description:
            "Meet vetted local drivers and agencies on the ground.",
    },
    {
        icon: Sparkles,
        title: "Experience the Journey",
        description:
            "Show up. Everything else is already handled.",
    },
];

export default function UserFlow() {
    return (
        <section className="relative overflow-hidden bg-[#D6CFCC] px-[6vw] py-24">

            {/* =====================================================
                TOP TRANSITION LINE
            ====================================================== */}

            <motion.div
                className="
                    absolute
                    left-0
                    right-0
                    top-0
                    h-[2px]
                    origin-left
                    bg-[#B8BFA0]
                "
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{
                    once: true,
                    amount: 0.5,
                }}
                transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                }}
            />

            {/* =====================================================
                HEADER
            ====================================================== */}

            <motion.div
                className="mx-auto mb-18 max-w-xl text-center"
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
            >
                <motion.p
                    className="
                        mb-2.5
                        text-xs
                        font-medium
                        uppercase
                        tracking-[0.22em]
                        text-[#2B2728]
                    "
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    From download to departure
                </motion.p>

                <h2
                    className="
                        font-serif
                        text-4xl
                        font-medium
                        text-[#2B2728]
                        md:text-5xl
                    "
                >
                    How Sadyaatra Works
                </h2>

                {/* =================================================
                    KHaki UNDERLINE
                ================================================== */}

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
                        width: 100,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.5,
                    }}
                    transition={{
                        duration: 0.7,
                        delay: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                />

                <p
                    className="
                        mt-5
                        text-sm
                        leading-relaxed
                        text-[#5C5754]
                    "
                >
                    Seven steps between opening the app and standing
                    somewhere new — we handle the parts in between.
                </p>
            </motion.div>

            {/* =====================================================
                STEPS
            ====================================================== */}

            <div className="relative">

                {/* =================================================
                    CONNECTING LINE — DESKTOP
                ================================================== */}

                <div
                    className="
                        absolute
                        left-[60px]
                        right-[60px]
                        top-[34px]
                        hidden
                        h-px
                        overflow-hidden
                        lg:block
                    "
                >
                    <motion.div
                        className="
                            h-full
                            w-full
                            origin-left
                            border-t
                            border-dashed
                            border-[#AEB58F]
                        "
                        initial={{
                            scaleX: 0,
                        }}
                        whileInView={{
                            scaleX: 1,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.5,
                        }}
                        transition={{
                            duration: 1.5,
                            delay: 0.3,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    />
                </div>

                {/* =================================================
                    STEP GRID
                ================================================== */}

                <ol
                    className="
                        relative
                        grid
                        grid-cols-2
                        gap-x-4
                        gap-y-14
                        sm:grid-cols-4
                        lg:grid-cols-7
                        lg:gap-y-0
                    "
                >
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        const isEven = index % 2 === 1;

                        return (
                            <motion.li
                                key={step.title}
                                className="text-center"
                                initial={{
                                    opacity: 0,
                                    y: 35,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.2,
                                }}
                                transition={{
                                    duration: 0.65,
                                    delay: 0.45 + index * 0.12,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                            >

                                {/* =================================================
                                    ICON
                                ================================================== */}

                                <motion.div
                                    whileHover={{
                                        y: -6,
                                        scale: 1.08,
                                    }}
                                    transition={{
                                        duration: 0.25,
                                        ease: "easeOut",
                                    }}
                                    className={`
                                        group
                                        relative
                                        mx-auto
                                        mb-4.5
                                        flex
                                        h-[68px]
                                        w-[68px]
                                        items-center
                                        justify-center
                                        rounded-full
                                        text-white
                                        shadow-[0_8px_20px_rgba(43,39,40,0.12)]
                                        ${isEven
                                            ? "bg-[#2B2728]"
                                            : "bg-[#8C956A]"
                                        }
                                    `}
                                >

                                    {/* Soft glow on hover */}

                                    <motion.div
                                        className="
                                            absolute
                                            inset-0
                                            rounded-full
                                            bg-[#AEB58F]
                                            opacity-0
                                            blur-md
                                        "
                                        whileHover={{
                                            opacity: 0.25,
                                            scale: 1.25,
                                        }}
                                        transition={{
                                            duration: 0.3,
                                        }}
                                    />

                                    <Icon
                                        size={24}
                                        strokeWidth={1.8}
                                        className="relative z-10"
                                    />
                                </motion.div>

                                {/* =================================================
                                    STEP NUMBER
                                ================================================== */}

                                <p
                                    className="
                                        mb-1.5
                                        font-serif
                                        text-xs
                                        text-[#8C956A]
                                    "
                                >
                                    Step {index + 1}
                                </p>

                                {/* =================================================
                                    TITLE
                                ================================================== */}

                                <h3
                                    className="
                                        font-serif
                                        text-[15px]
                                        font-medium
                                        leading-tight
                                        text-[#2B2728]
                                    "
                                >
                                    {step.title}
                                </h3>

                                {/* =================================================
                                    DESCRIPTION
                                ================================================== */}

                                <p
                                    className="
                                        mt-2
                                        text-xs
                                        leading-relaxed
                                        text-[#5C5754]
                                    "
                                >
                                    {step.description}
                                </p>

                            </motion.li>
                        );
                    })}
                </ol>
            </div>

            {/* =====================================================
                BOTTOM SUBTLE LINE
            ====================================================== */}

            <motion.div
                className="
                    mx-auto
                    mt-20
                    h-px
                    w-full
                    bg-[#AEB58F]/40
                "
                initial={{
                    scaleX: 0,
                }}
                whileInView={{
                    scaleX: 1,
                }}
                viewport={{
                    once: true,
                    amount: 0.5,
                }}
                transition={{
                    duration: 1,
                    ease: "easeOut",
                }}
            />

        </section>
    );
}