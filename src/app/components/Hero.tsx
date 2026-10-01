'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const SLIDES = [
    { type: 'image', src: '/hero-3.png' },
    { type: 'image', src: '/hero-6.png' },
    { type: 'image', src: '/hero-1.png' },
    { type: 'image', src: '/hero-2.png' },
];

const IMAGE_DURATION = 3000;

export default function Hero() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrent((prev) => (prev + 1) % SLIDES.length);
        }, IMAGE_DURATION);

        return () => clearTimeout(timer);
    }, [current]);

    return (
        <section className="relative h-screen min-h-[640px] overflow-hidden" style={{ isolation: 'isolate' }}>
            {/* 1. Background slides with quality enhancement using next/image */}
            {SLIDES.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100 z-0' : 'opacity-0 z-0'
                        }`}
                >
                    <Image
                        src={slide.src}
                        alt="Hero background slide"
                        fill
                        priority={index === 0}
                        quality={100}
                        sizes="100vw"
                        className="object-cover"
                    />
                </div>
            ))}



            {/* 4. Bottom fade transition into the next section */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-48 bg-gradient-to-t from-[#2b2728] via-[#2b2728]/60 to-transparent" />

            {/* Main Content */}
            <div className="relative z-20 flex h-full flex-col justify-center px-[6vw]">
                <div className="max-w-xl">
                    <p className="mb-3 font-serif text-xl italic text-[#9eb094]">
                        Travel, made effortless
                    </p>

                    <h1 className="font-serif text-5xl font-semibold leading-[1.05] text-white">
                        Leave the planning
                        <br />
                        live the journey
                    </h1>

                    <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[#d6cfcc]">
                        Sadyaatra plans the whole trip — routes, stays, the small
                        details — so what you keep is the journey, not the logistics.
                    </p>

                    <div className="mt-8 flex items-center gap-5">
                        <button
                            onClick={() => {
                                const el = document.getElementById('waitlist');
                                el?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="rounded-sm bg-[#8c956a] px-7 py-4 text-xs font-medium uppercase tracking-widest text-white transition-colors hover:bg-[#7a8259]"
                        >
                            Explore Destinations
                        </button>
                    </div>
                </div>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
                {SLIDES.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${index === current ? 'w-8 bg-white' : 'w-1.5 bg-white/40'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}