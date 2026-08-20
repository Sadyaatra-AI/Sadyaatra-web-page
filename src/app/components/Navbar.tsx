'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
interface NavLink {
    label: string;
    href: string;
}

const navLinks: NavLink[] = [
    { label: 'Home', href: '/' },
    { label: 'Features', href: '/features' },
    { label: 'Deals', href: '/deals' },
    { label: 'Contact', href: '/contact' },
    { label: 'About', href: '/about' },
];



function useScrolled() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const threshold = window.innerHeight * 0.8;
        const onScroll = () => setScrolled(window.scrollY > threshold);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return scrolled;
}

export default function Navbar() {
    const scrolled = useScrolled();

    return (
        <nav
            className={`
        flex items-center justify-between
        px-[6vw] transition-all duration-300 ease-out z-20
        ${scrolled
                    ? 'fixed top-0 left-0 right-0 py-4 bg-[#2b2728]/90 backdrop-blur-md shadow-lg shadow-black/25'
                    : 'absolute top-0 left-0 right-0 py-6 bg-transparent'
                }
      `}
        >
            <Link href="/" className="flex items-center gap-3">
                <Image src="/logo.png" alt="Sadyaatra" width={36} height={36} />
                <span className="font-serif text-xl font-semibold text-white tracking-wide">
                    Sadyaatra
                </span>
            </Link>

            <ul className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                    <li key={link.href}>
                        <Link
                            href={link.href}
                            className="text-lg text-white/85 hover:text-white transition-colors"
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>

            <Link
                href="/plan"
                className="rounded-sm bg-[#8c956a] px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-white hover:bg-[#7a8259] transition-colors whitespace-nowrap"
            >
                Plan My Trip
            </Link>
        </nav>
    );
}