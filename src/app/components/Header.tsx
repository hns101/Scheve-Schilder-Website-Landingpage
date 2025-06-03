"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image'; // Behoud deze import als je de <Image> component voor het logo wilt gebruiken
import Link from 'next/link'; // Importeer Link voor client-side navigatie
import { usePathname } from 'next/navigation'; // Importeer usePathname om de huidige route te krijgen

const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
);

// Bijgewerkte navLinks met correcte paden
const navLinks = [
    { href: "/", text: "Schilderschool" }, // Homepage
    { href: "/inschrijven", text: "Inschrijven" },
    { href: "/lesprogramma", text: "Lesprogramma" },
];

const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname(); // Haal het huidige pad op

    // Functie om mobiel menu te sluiten bij linkklik
    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 ">
            {/* Hoofd-headerbalk nu met relative z-10 */}
            <div className="relative z-10 bg-[var(--color-bg-header)] bg-opacity-80 backdrop-blur-sm">
                <div className="container mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                    <div className="flex-shrink-0 relative z-20"> {/* Logo container met z-index voor layering binnen deze balk */}
                        {/* Logo is nu weer een standaard img tag zonder Link */}
                        <img className="h-32 pt-7 -rotate-2 " src="/Schilderschoolwit.png"
                             alt="Schilderschool De Scheve Schilder Logo"/>
                    </div>

                    <div className="flex items-center">
                        <nav className="hidden md:flex space-x-4 ">
                            {navLinks.map(link => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link key={link.href} href={link.href} legacyBehavior>
                                        <a className={`relative text-[var(--color-text-default)] px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-1 after:w-full after:h-[2px] after:bg-[var(--color-text-highlight)] after:transition-transform after:duration-300 ${isActive ? 'after:scale-x-100 after:origin-left font-semibold' : 'hover:text-[var(--color-text-default)] after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left'}`}>
                                            {link.text}
                                        </a>
                                    </Link>
                                );
                            })}
                        </nav>

                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="text-[var(--color-text-default)] hover:text-[var(--color-text-highlight)] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--color-focus-ring)] p-2 rounded-md"
                                aria-expanded={isMobileMenuOpen}
                                aria-controls="mobile-menu"
                            >
                                <span className="sr-only">Open hoofdmenu</span>
                                <MenuIcon/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {isMobileMenuOpen && (
                // Mobiel menu nu met relative z-40 om boven andere header-elementen te komen
                <div id="mobile-menu" className="relative z-40 md:hidden bg-[var(--color-bg-header)] bg-opacity-95">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map(link => {
                            const isActive = pathname === link.href;
                            return (
                                <Link key={link.href} href={link.href} legacyBehavior>
                                    <a onClick={closeMobileMenu} className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${isActive ? 'bg-[var(--color-text-highlight)] text-[var(--color-bg-header)]' : 'text-[var(--color-text-default)] hover:bg-[var(--color-bg-hover-light)] hover:text-[var(--color-text-highlight)]'}`}>
                                        {link.text}
                                    </a>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )}
            {/* Tilt-box nu met relative z-0 om achter de hoofd-headerbalk te liggen */}
            <div id="tilt-box" className="relative z-0 mb-2"></div>
        </header>
    );
};

export default Header;