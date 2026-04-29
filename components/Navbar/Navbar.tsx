"use client";

import { useState } from "react";
import Link from "next/link";
import "./Navbar.scss";

const navLinks = [
    { href: "/", label: "Home" },
    // { href: "/destination", label: "Destination" },
    { href: "/tours", label: "Tours" },
    // { href: "/activities", label: "Activities" },
    { href: "/about", label: "About" },
    // { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="navbar">
            <div className="container navbar__inner">
                <Link href="/" className="navbar__logo">
                    <img src="/logo.png" alt="Logo" style={{ maxWidth: "150px" }} />
                </Link>

                <button
                    type="button"
                    className="navbar__toggle"
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMenuOpen}
                    onClick={() => setIsMenuOpen((open) => !open)}
                >
                    <span />
                    <span />
                    <span />
                </button>

                <nav className={`navbar__menu ${isMenuOpen ? "navbar__menu--open" : ""}`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
