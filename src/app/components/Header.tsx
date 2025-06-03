"use client"
import React, { useState } from 'react';

const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
);

const navLinks = [
    { href: "#school", text: "Schilderschool" },
    { href: "#inschrijven", text: "Inschrijven" },
    { href: "#programma", text: "Lesprogramma" },
];

const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 ">
            <div className="bg-[var(--color-bg-header)] bg-opacity-80">
                <div className="container mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                    <div className="flex-shrink-0 relative z-20">
                        <img className="h-32 pt-7 -rotate-2 " src="/Schilderschoolwit.png"
                             alt="Schilderschool De Scheve Schilder"/>
                    </div>

                    <div className="flex items-center">
                        <nav className="hidden md:flex space-x-4 ">
                            {navLinks.map(link => (
                                <a key={link.href} href={link.href}
                                   className="relative text-[var(--color-text-default)] hover:text-[var(--color-text-default)] px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-1 after:w-full after:h-[2px] after:bg-[var(--color-text-highlight)] after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left">
                                    {link.text}
                                </a>
                            ))}
                        </nav>

                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="text-[var(--color-text-default)] hover:text-[var(--color-text-highlight)] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--color-focus-ring)] p-2 rounded-md"
                            >
                                <MenuIcon/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden bg-[var(--color-bg-header)] ">
                    <div className="px-2 pt-5  pb-3 space-y-1 sm:px-3">
                        {navLinks.map(link => (
                            <a key={link.href} href={link.href}
                               className="text-[var(--color-text-default)] hover:bg-[var(--color-bg-hover-light)] hover:text-[var(--color-text-highlight)] block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
                                {link.text}
                            </a>
                        ))}
                    </div>
                </div>
            )}
            <div id="tilt-box" className="mb-2"></div>
        </header>
    );
};

export default Header;