"use client"
import React from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';


// Iconen
const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
         className="inline-block mr-2 text-[var(--color-text-default)]">
        <rect width="20" height="16" x="2" y="4" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
);

const WhatsAppIcon = () => ( // Gebruikt als telefoon/whatsapp icoon
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
         className="bi bi-whatsapp inline-block mr-2 text-[var(--color-bg-body)]"
         viewBox="0 0 16 16">
        <path
            d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
    </svg>
);

const MapPinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
         className="inline-block mr-2 text-[var(--color-text-highlight)]">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
        <circle cx="12" cy="10" r="3"/>
    </svg>
);


const InschrijvenPage: React.FC = () => {
    return (
        <div className="bg-[var(--color-bg-body)] text-[var(--color-text-default)] font-sans min-h-screen">
            <Header/>

            <main>
                <section className="relative -mt-10 py-20 md:py-32 bg-[var(--color-bg-section-dark)] text-center">
                    <div className="absolute inset-0 opacity-30">
                        <Image
                            src="/gallery/drawing-study.jpg"
                            alt="Achtergrond inschrijfpagina"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="absolute inset-0 bg-black opacity-50"></div>

                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
                            Schrijf je in!
                        </h1>
                        <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
                            Start jouw creatieve reis bij De Scheve Schilder!
                        </p>
                    </div>
                </section>
                <section className="py-16 bg-[var(--color-bg-section-medium)]">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold text-[var(--color-bg-header)] sm:text-4xl mb-6">
                            Neem een Gratis Proefles
                        </h2>
                        <p className="text-lg text-[var(--color-text-muted)] leading-relaxed max-w-2xl mx-auto mb-8">
                            Wil je eerst de sfeer proeven en ontdekken of onze lessen bij je passen? Neem gerust contact
                            op voor een gratis en vrijblijvende proefles. We beantwoorden ook graag al je
                            vragen.
                        </p>
                        <b className="inline-block text-lg text-[var(--color-text-muted)] leading-relaxed max-w-2xl mx-auto mb-8"> info@scheveschilder.nl
                            // 06 10910012</b>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                            <a
                                href="mailto:Info@scheveschilder.nl"
                                className="inline-flex items-center justify-center bg-[var(--color-bg-section-light-brown)] text-[var(--color-text-on-button)] font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[var(--color-text-subtle)] transition-colors duration-300 text-lg"
                            >
                                <MailIcon/> Mail ons
                            </a>
                            <a
                                href="https://api.whatsapp.com/send/?phone=31610910012&text=Hallo,%20ik%20heb%20interesse%20in%20een%20gratis%20proefles."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center bg-[var(--color-button-primary-bg)] text-[var(--color-text-on-button)] font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[var(--color-button-primary-bg-hover)] transition-colors duration-300 text-lg"
                            >
                                <WhatsAppIcon/> Stuur een WhatsApp
                            </a>
                        </div>
                    </div>
                </section>

                <div id="tilt-box-blue" className="mb-0"></div>

                <section className="py-16 bg-[var(--color-bg-section-blue)]">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-white sm:text-4xl text-center mb-10">
                            Wat Kosten de Lessen?
                        </h2>
                        <div
                            className="max-w-2xl mx-auto bg-[var(--color-bg-section-medium)] p-8 rounded-lg shadow-xl text-[var(--color-bg-section-black)]">

                            <p className="text-lg mb-4">
                                De kosten zijn opgebouwd uit een maandelijks lidmaatschap en eenmalige inschrijfkosten.
                            </p>

                            <ul className="list-disc list-inside space-y-2 text-lg mb-6">
                                <li><strong>Lidmaatschap:</strong> € 64,- per maand.</li>
                                <li><strong>Inschrijfkosten:</strong> € 5,- (eenmalig).</li>
                            </ul>

                            <h4 className="text-xl font-semibold text-[var(--color-bg-header)] mb-2">Betaling</h4>
                            <p className="text-lg mb-4">
                                Betaling verloopt eenvoudig via automatische incasso. Het lesgeld wordt maandelijks rond
                                de 11e van de maand afgeschreven.
                            </p>
                            <p className="text-lg mb-4">
                                Schrijf je je niet in aan het begin van de maand? Geen probleem! De kosten voor de
                                eerste maand worden apart berekend op basis van € 16,- per les.
                            </p>

                            <h4 className="text-xl font-semibold text-[var(--color-bg-header)] mb-2 mt-6">Flexibiliteit</h4>
                            <p className="text-lg mb-6">
                                Je zit nergens aan vast. Het lidmaatschap is per maand opzegbaar, dus je hebt volledige
                                flexibiliteit.
                            </p>

                            <p className="text-md text-[var(--color-text-muted)]">
                                <i>Eventuele andere vakanties en sluitingsdagen vind je terug in het <a
                                    href="/lesprogramma"
                                    className="text-[var(--color-text-highlight)] hover:underline">lesprogramma</a>. Er
                                    wordt niet
                                    geïncasseerd bij gesloten maanden.</i>
                            </p>
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-[var(--color-bg-section-medium)]">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-[var(--color-bg-header)] sm:text-4xl text-center mb-10">
                            Waar Vind Je Ons?
                        </h2>
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
                            <div className="lg:w-1/2 flex flex-col gap-8 w-full">
                                <div className="rounded-lg shadow-xl overflow-hidden h-64">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36849.631355420934!2d4.871224408928847!3d52.76585412731378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47cf527e0cc1b847%3A0x5d9b8f28ecd69cca!2sCultuurHuis%20De%20Kolk!5e0!3m2!1sen!2snl!4v1748944165780!5m2!1sen!2snl"
                                        width="100%"
                                        height="100%"
                                        style={{border: 0}}
                                        allowFullScreen={true}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Omgevingsfoto van de locatie">
                                    </iframe>
                                </div>
                                <div className="rounded-lg shadow-xl overflow-hidden h-96">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!4v1748765405671!6m8!1m7!1svic1ch9VXt-XXkBcofWzvA!2m2!1d52.76878390910724!2d4.883859254183673!3f53.6922652442899!4f6.295963732094151!5f1.5370213448934535"
                                        width="100%"
                                        height="100%"
                                        style={{border: 0}}
                                        allowFullScreen={true}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Locatie van Cultuurhuis De Kolk"
                                    ></iframe>
                                </div>
                            </div>
                            <div className="lg:w-1/2 w-full">
                                <div
                                    className="bg-white p-6 rounded-lg shadow-lg text-[var(--color-bg-header)]">
                                    <h3 className="text-2xl font-semibold text-[var(--color-bg-header)] mb-3">CultuurHuis
                                        De Kolk (Ruimte 2)</h3>
                                    <p className="mb-2 flex items-center"><MapPinIcon/> Weereweg 32, 1732 LL Lutjewinkel
                                    </p>
                                    <p className="text-md text-[var(--color-text-muted)] mb-4">
                                        De lessen worden gehouden in Lutjewinkel in het CultuurHuis De Kolk, ruimte 2.
                                        Dit voormalige schoolgebouw is nu een bruisend cultureel centrum.
                                    </p>

                                    <div className="mt-6 flex flex-col items-center w-full">
                                        <Image
                                            src="/gallery/parkerenkolk.jpg"
                                            alt="Plattegrond parkeren Cultuurhuis De Kolk"
                                            width={400}
                                            height={300}
                                            className="rounded-md shadow-sm"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div id="tilt-box-brown" className="mb-0"></div>
                <section className="py-16 bg-[var(--color-bg-section-light-brown)]">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold text-[var(--color-text-default)] sm:text-4xl mb-6">
                            Rustig even ons inschrijfformulier doornemen
                        </h2>
                        <Image
                            src="/gallery/Lidmaatschap-inschrijvingsformulier-1.4.jpg"
                            alt="Inschrijvingsformulier"
                            height={1500}
                            width={700}
                            className="rounded-lg shadow-xl mb-8 mx-auto w-full max-w-md lg:max-w-3xl"/>
                        <a
                            href="/gallery/Lidmaatschap-inschrijvingsformulier-1.4.pdf"
                            download
                            className="inline-block bg-gray-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300 text-lg"
                        >
                            Download Inschrijfformulier (PDF)
                        </a>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    );
};

export default InschrijvenPage;
