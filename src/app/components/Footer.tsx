"use client"
import React from 'react';
import Link from 'next/link'; // Link component geïmporteerd

// Iconen
const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp"
         viewBox="0 0 16 16">
        <path
            d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
    </svg>
);
const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
);
const MapPinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
        <circle cx="12" cy="10" r="3"/>
    </svg>
);

// AANGEPASTE footerNavLinks met correcte paginapaden
const footerNavLinks = [
    { href: "/", text: "Schilderschool" }, // Verwijst nu naar de homepage
    { href: "/lesprogramma", text: "Lesprogramma" },
    { href: "/inschrijven", text: "Inschrijven" },
];

const Footer: React.FC = () => {
    return (
        <footer id="contact" className="bg-[var(--color-bg-section-black)] text-[var(--color-text-default)] py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h5 className="text-xl font-semibold text-[var(--color-text-default)] mb-4">De Scheve Schilder</h5>
                        <p className="text-sm">Leer realistisch schilderen en tekenen bij De Scheve Schilder. We duiken in de klassieke technieken en helpen jou je eigen stijl te vinden. Voor beginners en professionals, altijd op je eigen tempo.</p>
                    </div>
                    <div>
                        <h5 className="text-xl font-semibold text-[var(--color-text-default)] mb-4">Snelle Links</h5>
                        <ul className="space-y-2 text-sm">
                            {footerNavLinks.map(link => (
                                <li key={link.text}>
                                    {/* legacyBehavior verwijderd, className direct op Link */}
                                    <Link
                                        href={link.href}
                                        className="hover:text-[var(--color-text-highlight)] transition-colors"
                                    >
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-xl font-semibold text-[var(--color-text-default)] mb-4">Contact</h5>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center">
                                <MapPinIcon/>
                                <span className="ml-2">
                                    <a href="https://maps.app.goo.gl/Fx6HfjvAQcmjoewBA" // Overweeg dit ook een Link te maken als het een interne pagina is, of laat als externe link
                                       className="hover:text-[var(--color-text-highlight)]">
                                        Weereweg 32, Lutjewinkel<br/> CultuurHuis De Kolk (Ruimte 2)
                                    </a>
                                </span>
                            </li>
                            <li className="flex items-center">
                                <PhoneIcon/>
                                <span className="ml-2">
                                    <a href="https://api.whatsapp.com/send/?phone=031610910012&text&type=phone_number&app_absent=0"
                                       className="hover:text-[var(--color-text-highlight)]">
                                        06 10910012
                                    </a>
                                </span>
                            </li>
                            <li className="flex items-center">
                                <MailIcon/>
                                <span className="ml-2">
                                    <a href="mailto:info@scheveschilder.nl"
                                       className="hover:text-[var(--color-text-highlight)]">
                                        info@scheveschilder.nl
                                    </a>
                                </span>
                            </li>
                            <li className="flex items-center"><span className="ml-8">KVK : 89240626</span></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-[var(--color-border-default)] pt-8 text-center text-sm">
                    <p>© {new Date().getFullYear()} SchilderSchool De Scheve Schilder</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
