"use client"
import React from 'react';
import Image from 'next/image';
import Header from '../components/Header'; // Pas pad aan indien nodig
import Footer from '../components/Footer'; // Pas pad aan indien nodig

// Icoon voor de lijstitems (kan ook uit een gedeeld iconenbestand komen)
const ChevronRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block h-4 w-4 mr-2 text-[var(--color-text-highlight)]">
        <path d="m9 18 6-6-6-6"/>
    </svg>
);

const LesprogrammaPage: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="bg-[var(--color-bg-body)] text-[var(--color-text-default)] font-sans min-h-screen">
            <Header />

            <main>
                {/* Hero Sectie voor Lesprogramma */}
                <section className="relative -mt-10 py-20 md:py-32 bg-[var(--color-bg-section-blue)] text-center">
                    {/* Optionele achtergrondafbeelding met overlay */}
                    <div className="absolute inset-0 opacity-30">
                        <Image
                            src="/gallery/scheve-studio.jpg" // Vervang met een relevante achtergrondafbeelding
                            alt="Achtergrond lesprogramma"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="absolute inset-0 bg-[var(--color-bg-section-blue)] opacity-40"></div> {/* Donkere overlay */}

                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
                            Lesprogramma {currentYear}
                        </h1>
                        <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
                            Planning // Themales // projectles.
                        </p>
                    </div>
                </section>

                {/* Over de Lessen Sectie (vergelijkbaar met de homepage) */}
                <section className="py-16 bg-[var(--color-bg-section-medium)]">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16">
                            <div className="lg:w-2/5">
                                <Image
                                    src="/gallery/drawing-bargue.jpg" // Vervang met een relevante afbeelding
                                    alt="Detail van een tekenles"
                                    width={600}
                                    height={450} // Pas aan naar de verhouding van je afbeelding
                                    className="rounded-lg shadow-xl w-full h-auto"
                                />
                            </div>
                            <div className="lg:w-3/5 text-center lg:text-left">
                                <h2 className="text-3xl font-bold text-[var(--color-bg-header)] sm:text-4xl mb-6">
                                    Opbouw van Onze Lessen
                                </h2>
                                <p className="text-lg text-[var(--color-text-muted)] leading-relaxed mb-4">
                                    Onze lessen hebben een unieke, afwisselende opzet. Je volgt wekelijks les, waarbij we een themales en een projectles om en om aanbieden. Zo combineer je gerichte instructie met creatieve vrijheid.
                                </p>
                                <div className="space-y-3 text-left">
                                    <div>
                                        <h4 className="font-semibold text-xl text-[var(--color-bg-header)]">De Themales: Techniek en Inspiratie</h4>
                                        <p className="text-[var(--color-text-muted)]">Tijdens de themales staat er elke keer een specifieke techniek of een inspirerend onderwerp centraal. In groepsverband werk je onder begeleiding aan een gerichte opdracht. Dit is de perfecte manier om stap voor stap nieuwe vaardigheden te leren en je technische basis te versterken.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-xl text-[var(--color-bg-header)]">De Projectles: Jouw Artistieke Vrijheid</h4>
                                        <p className="text-[var(--color-text-muted)]">In de projectles krijg je de vrijheid om aan je eigen schilder- of tekenproject te werken. Het doel is het ontwikkelen van jouw persoonlijke stijl en creatieve visie. Je kiest zelf je onderwerp en aanpak, en wij bieden individuele begeleiding om je te helpen bij jouw artistieke zoektocht.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div id="tilt-box-brown" className="mb-0"></div>

                {/* Het Lesprogramma Sectie - AANGEPAST */}
                <section className="py-16 bg-[var(--color-bg-section-light-brown)]">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-[var(--color-text-default)] sm:text-4xl text-center mb-12">
                            Planning {currentYear}
                        </h2>
                        <div className="max-w-3xl mx-auto space-y-8">
                            {/* Lesweken */}
                            <div className="bg-[var(--color-bg-section-medium)] p-6 rounded-lg shadow-lg">
                                <h3 className="text-2xl font-semibold text-[var(--color-text-highlight)] mb-3">Lessen:</h3>
                                <ul className="space-y-2 list-inside">
                                    <li className="text-[var(--color-bg-header)]">
                                        <ChevronRightIcon /> Week 2 t/m 26
                                    </li>
                                    <li className="text-[var(--color-bg-header)]">
                                        <ChevronRightIcon /> Week 28 t/m 32 <span className="text-sm inline-block text-[var(--color-text-muted)]">(Let op: de lessen lopen een week langer door in augustus, omdat de eerste week van juli gesloten is)</span>
                                    </li>
                                    <li className="text-[var(--color-bg-header)]">
                                        <ChevronRightIcon /> Week 36 t/m 50
                                    </li>
                                </ul>
                            </div>

                            {/* Gesloten Weken */}
                            <div className="bg-[var(--color-bg-section-medium)] p-6 rounded-lg shadow-lg">
                                <h3 className="text-2xl font-semibold text-[var(--color-text-highlight)] mb-3">Gesloten:</h3>
                                <ul className="space-y-2 list-inside">
                                    <li className="text-[var(--color-bg-header)]">
                                        <ChevronRightIcon /> Week 1
                                    </li>
                                    <li className="text-[var(--color-bg-header)]">
                                        <ChevronRightIcon /> Week 27 <span className="text-sm text-[var(--color-text-muted)]">(eerste week van juli)</span>
                                    </li>
                                    <li className="text-[var(--color-bg-header)]">
                                        <ChevronRightIcon /> Week 33 t/m 35 <span className="text-sm text-[var(--color-text-muted)]">(augustus)</span>
                                    </li>
                                    <li className="text-[var(--color-bg-header)]">
                                        <ChevronRightIcon/> Week 51 & 52 <span
                                        className="text-sm text-[var(--color-text-muted)]">(half december)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="text-center mt-12">
                            <a
                                href="#inschrijven" // Link naar de inschrijfsectie op de homepage of een aparte inschrijfpagina
                                className="inline-block bg-[var(--color-button-primary-bg)] text-[var(--color-text-on-button)] font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-[var(--color-button-primary-bg-hover)] transition-colors duration-300 text-lg"
                            >
                                Schrijf je nu in!
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default LesprogrammaPage;
