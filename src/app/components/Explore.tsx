"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const photos = [
    {
        src: "/explore1.png",
        title: "Pachmarhi",
        duration: 13,
        delay: 0,
    },
    {
        src: "/explore2.png",
        title: "Ujjain",
        duration: 16,
        delay: 0.15,
    },
    {
        src: "/explore3.png",
        title: "Pondicherry",
        duration: 18,
        delay: 0.3,
    },
    {
        src: "/explore4.png",
        title: "Mumbai",
        duration: 15,
        delay: 0.45,
    },
    {
        src: "/explore5.png",
        title: "Bengaluru",
        duration: 17,
        delay: 0.6,
    },

];

export default function ExploreSection() {
    return (
        <section className="w-full bg-[#2B2728]">

            {/* =====================================================
                SECTION TRANSITION
            ====================================================== */}

            <motion.div
                className="h-[2px] w-full bg-[#D6CFCC]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                    transformOrigin: "center",
                }}
            />

            {/* =====================================================
                TEXT SECTION
            ====================================================== */}

            <section className="relative flex min-h-[42vh] w-full items-center justify-center overflow-hidden bg-[#2B2728] px-6 py-20">

                <motion.div
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
                        amount: 0.35,
                    }}
                    transition={{
                        duration: 0.9,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mx-auto max-w-2xl text-center"
                >
                    {/* Small label */}
                    <p
                        className="
                            mb-3
                            font-serif
                            text-sm
                            uppercase
                            tracking-[0.2em]
                            text-[#9EB094]
                        "
                    >
                        Discover
                    </p>

                    {/* Heading */}
                    <h2
                        className="
                            font-serif
                            text-4xl
                            font-medium
                            leading-tight
                            text-white

                            sm:text-5xl

                            md:text-6xl
                        "
                    >
                        Explore India
                    </h2>

                    {/* Heading underline */}
                    <motion.div
                        className="mx-auto mt-5 h-[1px] bg-[#8C956A]"
                        initial={{ width: 0 }}
                        whileInView={{ width: 55 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.7,
                            delay: 0.5,
                            ease: "easeOut",
                        }}
                    />

                    {/* Description */}
                    <p
                        className="
                            mx-auto
                            mt-6
                            max-w-xl
                            text-sm
                            leading-relaxed
                            text-[#D6CFCC]/75

                            md:text-[15px]
                        "
                    >
                        Discover handpicked destinations across the country,
                        from serene hill stations to vibrant cultural cities.
                    </p>
                </motion.div>

            </section>

            {/* =====================================================
                PHOTOS SECTION
            ====================================================== */}

            <section
                className="
                    relative
                    min-h-[58vh]
                    w-full
                    overflow-hidden
                    bg-[#2B2728]
                    px-4
                    pb-20
                    pt-8
                "
            >

                {/* subtle background depth */}
                <div
                    className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-gradient-to-b
                        from-[#2B2728]
                        to-[#252223]
                    "
                />

                {/* =================================================
                    DESKTOP PHOTO LAYOUT
                ================================================== */}

                <div
                    className="
                        relative
                        mx-auto
                        hidden
                        h-[480px]
                        max-w-[1500px]
                        md:block
                    "
                >
                    {photos.map((photo, index) => {
                        const positions = [
                            "left-[3%] top-[5%]",
                            "left-[23%] top-[18%]",
                            "left-[43%] top-[0%]",
                            "left-[63%] top-[18%]",
                            "right-[3%] top-[5%]",
                            "left-[43%] top-[48%]",
                        ];

                        return (
                            <motion.div
                                key={photo.src}
                                className={`absolute ${positions[index]}`}
                                initial={{
                                    opacity: 0,
                                    y: 40,
                                    scale: 0.9,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.2,
                                }}
                                transition={{
                                    duration: 0.8,
                                    delay: photo.delay,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                            >
                                {/* Floating movement */}
                                <motion.div
                                    animate={{
                                        y: [0, -10, 5, 0],
                                        x: [0, 4, -4, 0],
                                        rotate: [0, 1, -1, 0],
                                    }}
                                    transition={{
                                        duration: photo.duration,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                >
                                    <PhotoCard photo={photo} />
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* =================================================
                    MOBILE PHOTO LAYOUT
                ================================================== */}

                <div className="relative grid grid-cols-2 gap-4 md:hidden">

                    {photos.map((photo, index) => (
                        <motion.div
                            key={photo.src}
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
                                amount: 0.15,
                            }}
                            transition={{
                                duration: 0.7,
                                delay: index * 0.1,
                            }}
                        >
                            <motion.div
                                animate={{
                                    y: [0, -7, 4, 0],
                                }}
                                transition={{
                                    duration: photo.duration,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                <PhotoCard photo={photo} />
                            </motion.div>
                        </motion.div>
                    ))}

                </div>

            </section>

        </section>
    );
}


/* =============================================================
   PHOTO CARD
============================================================= */

function PhotoCard({
    photo,
}: {
    photo: {
        src: string;
        title: string;
    };
}) {
    return (
        <div
            className="
                group
                relative
                h-[230px]
                w-[165px]
                overflow-hidden
                rounded-2xl
                border
                border-white/15
                bg-[#1F1C1D]
                shadow-[0_18px_45px_rgba(0,0,0,0.4)]
                transition-all
                duration-500

                sm:h-[260px]
                sm:w-[180px]

                md:h-[270px]
                md:w-[190px]

                hover:border-[#8C956A]/60
                hover:shadow-[0_22px_55px_rgba(0,0,0,0.5)]
            "
        >

            {/* Image */}
            <Image
                src={photo.src}
                alt={photo.title}
                fill
                sizes="
                    (max-width: 768px) 165px,
                    190px
                "
                className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                "
            />

            {/* Bottom gradient */}
            <div
                className="
                    absolute
                    inset-x-0
                    bottom-0
                    h-32
                    bg-gradient-to-t
                    from-black/85
                    via-black/30
                    to-transparent
                "
            />

            {/* Destination name */}
            <div className="absolute bottom-0 left-0 right-0 p-4">

                <p
                    className="
                        font-serif
                        text-lg
                        text-white
                        drop-shadow-lg
                    "
                >
                    {photo.title}
                </p>

                {/* Small destination underline */}
                <div className="mt-1.5 h-[1px] w-7 bg-[#9EB094]" />

            </div>

        </div>
    );
}