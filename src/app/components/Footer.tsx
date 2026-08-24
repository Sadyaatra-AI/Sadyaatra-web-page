'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, FormEvent } from 'react';
import { FaInstagram, FaXTwitter, FaLinkedin } from 'react-icons/fa6';

const exploreLinks = [
  { label: 'Destinations', href: '/destinations' },
  { label: 'Experiences', href: '/experiences' },
  { label: 'Deals', href: '/deals' },
  { label: 'Gift a Trip', href: '/gift' },
];

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Journal', href: '/journal' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

const supportLinks = [
  { label: 'Help Centre', href: '/help' },
  { label: 'Trip Changes', href: '/help/changes' },
  { label: 'Cancellations', href: '/help/cancellations' },
  { label: 'Trust & Safety', href: '/trust' },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: typeof exploreLinks;
}) {
  return (
    <div>
      <h5 className="mb-[18px] text-[11px] font-medium uppercase tracking-[0.14em] text-[#9eb094]">
        {title}
      </h5>

      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-[13px] text-[#c6cab2] hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'sent'>('idle');

  const handleJoin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) return;

    setStatus('loading');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password: 'footer-signup-placeholder',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to join waitlist');
      }

      setStatus('sent');
      setEmail('');
    } catch {
      setStatus('idle');
    }
  };

  return (
    <footer className="bg-[#2b2728] px-[6vw] pb-7 pt-[70px] text-[#d6cfcc]">
      <div className="grid grid-cols-2 gap-8 border-b border-white/10 pb-14 md:grid-cols-5">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="Sadyaatra"
              width={30}
              height={30}
              className="brightness-0 invert"
            />

            <span className="font-serif text-xl font-semibold text-white">
              sadyaatra
            </span>
          </Link>

          <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-[#9eb094]">
            Travel, made effortless
          </p>

          <p className="mt-4 max-w-[230px] text-[13px] leading-relaxed text-[#c6cab2]">
            Travel planning that stays out of your way &mdash; and out of your
            head, once you&apos;re there.
          </p>

          {/* Social Links */}
          <div className="mt-[22px] flex gap-2.5">
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-[#8c956a] hover:bg-[#8c956a]"
            >
              <FaInstagram size={15} />
            </a>

            <a
              href="https://x.com"
              aria-label="X / Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-[#8c956a] hover:bg-[#8c956a]"
            >
              <FaXTwitter size={14} />
            </a>

            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-[#8c956a] hover:bg-[#8c956a]"
            >
              <FaLinkedin size={14} />
            </a>
          </div>
        </div>

        {/* Explore */}
        <FooterColumn title="Explore" links={exploreLinks} />

        {/* Company */}
        <FooterColumn title="Company" links={companyLinks} />

        {/* Support */}
        <FooterColumn title="Support" links={supportLinks} />

        {/* Newsletter */}
        <div className="col-span-2 md:col-span-1">
          <h5 className="mb-[18px] text-[11px] font-medium uppercase tracking-[0.14em] text-[#9eb094]">
            Stay in the Loop
          </h5>

          {status === 'sent' ? (
            <p className="text-[13px] text-[#9eb094]">
              You&apos;re on the list.
            </p>
          ) : (
            <>
              <p className="mb-4 text-[13px] leading-relaxed text-[#c6cab2]">
                Join the waitlist for early access and launch updates.
              </p>

              <form
                onSubmit={handleJoin}
                className="flex overflow-hidden rounded-sm border border-white/25"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="min-w-0 flex-1 bg-transparent px-3.5 py-3 text-xs text-white outline-none placeholder:text-white/40"
                />

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-[#8c956a] px-[18px] text-[11px] font-medium uppercase tracking-wide text-white transition-colors hover:bg-[#7a8259] disabled:opacity-60"
                >
                  {status === 'loading' ? '...' : 'Join'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 pt-[26px] text-[11.5px] text-[#c6cab2]">
        <span>&copy; 2026 Sadyaatra. All rights reserved.</span>

        <span className="flex gap-5">
          <Link href="/privacy" className="hover:text-white">
            Privacy Policy
          </Link>

          <Link href="/terms" className="hover:text-white">
            Terms of Service
          </Link>
        </span>
      </div>
    </footer>
  );
}