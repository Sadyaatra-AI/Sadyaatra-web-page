'use client';

import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

const SLIDES = [
    { type: 'video', src: '/hero-loop.mp4', poster: '/hero-fallback.png' },
    { type: 'image', src: '/hero-1.png' },
    { type: 'image', src: '/hero-2.png' },
    { type: 'image', src: '/hero-3.png' },
];

const IMAGE_DURATION = 2000;

export default function Hero() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [current, setCurrent] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);


    useEffect(() => {
        const video = videoRef.current;


        if (SLIDES[current].type === 'video') {
            if (!video) return;


            video.currentTime = 0;
            video.play().catch(() => { });

            const handleEnded = () => {
                setCurrent((prev) => (prev + 1) % SLIDES.length);
            };

            video.addEventListener('ended', handleEnded);

            return () => {
                video.removeEventListener('ended', handleEnded);
            };
        }


        else {
            const timer = setTimeout(() => {
                setCurrent((prev) => (prev + 1) % SLIDES.length);
            }, IMAGE_DURATION);

            return () => clearTimeout(timer);
        }
    }, [current]);


    const toggleVideo = () => {
        const video = videoRef.current;
        if (!video) return;

        if (video.paused) {
            video.play();
            setIsPlaying(true);
        } else {
            video.pause();
            setIsPlaying(false);
        }
    };




    return (
        <section className="relative h-screen min-h-[640px] overflow-hidden" style={{ isolation: 'isolate' }}>
            {/* Background slides */}
            {SLIDES.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100 z-0' : 'opacity-0 z-0'
                        }`}
                >
                    {slide.type === 'video' ? (
                        <video
                            ref={videoRef}
                            className="h-full w-full object-cover"
                            src={slide.src}
                            poster={slide.poster}
                            autoPlay
                            muted
                            playsInline
                        />
                    ) : (
                        <img
                            src={slide.src}
                            alt=""
                            className="h-full w-full object-cover"
                        />
                    )}
                </div>
            ))}

            {/* Readability overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#2b2728]/85 via-[#2b2728]/45 to-[#2b2728]/10" />

            {/* Bottom fade into Features section */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-48 bg-gradient-to-t from-[#2b2728] via-[#2b2728]/60 to-transparent" />

            {/* Content */}
            <div className="relative z-20 flex h-full flex-col justify-center px-[6vw]">
                <div className="max-w-xl">
                    <p className="mb-3 font-serif text-xl italic text-[#9eb094]">
                        Travel , made effortless
                    </p>

                    <h1 className="font-serif text-5xl font-semibold leading-[1.05] text-white">
                        Leave the olaning
                        <br />
                        live the journey
                    </h1>

                    <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[#d6cfcc]">
                        Sadyaatra plans the whole trip — routes, stays, the small
                        details — so what you keep is the journey, not the logistics.
                    </p>

                    <div className="mt-8 flex items-center gap-5">
                        <Link
                            href="/destinations"
                            className="rounded-sm bg-[#8c956a] px-7 py-4 text-xs font-medium uppercase tracking-widest text-white transition-colors hover:bg-[#7a8259]"
                        >
                            Explore Destinations
                        </Link>

                        {/* Show play/pause only when video is the current slide */}
                        {SLIDES[current].type === 'video' && (
                            <button
                                onClick={toggleVideo}
                                className="flex items-center gap-3 text-xs font-medium uppercase tracking-widest text-white"
                            >
                                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/60">
                                    {isPlaying ? (
                                        <Pause size={14} fill="white" />
                                    ) : (
                                        <Play size={14} fill="white" className="ml-0.5" />
                                    )}
                                </span>
                                {isPlaying ? 'Pause Video' : 'Watch Video'}
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Optional: slide indicators */}
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