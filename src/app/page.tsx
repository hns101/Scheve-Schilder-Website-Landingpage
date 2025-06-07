"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import for Next.js Link component

import Header from './components/Header';
import Footer from './components/Footer';


const ChevronDownIcon = () => ( // Deze wordt gebruikt in FAQItem
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6"/>
    </svg>
);

const ChevronRightIcon = () => ( // Deze wordt gebruikt in Intro Text Section
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block h-4 w-4">
      <path d="m9 18 6-6-6-6"/>
    </svg>
);

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <div className="border-b border-[var(--color-border-default)] py-4">
        <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex justify-between items-center w-full text-left text-lg text-[var(--color-text-default)] hover:text-[#e3e3e3] transition-colors duration-300"
        >
          <span className={`pr-4 ${isOpen ? 'font-bold' : ''}`}>
            {question}
          </span>
          <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
            <ChevronDownIcon />
          </div>
        </button>
        {isOpen && <div className="mt-4 text-[var(--color-text-default)] pr-6 space-y-3">{answer}</div>}
      </div>
  );
};

const page: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    "/gallery/scheve-studio.jpg",
    "/gallery/metaal-study.jpg",
    "/gallery/botanische-bloem.jpg",
    "/gallery/drawing-bargue.jpg",
    "/gallery/David-Eye-Oilpaint.jpg",
    "/gallery/meester-study.jpg",
    "/gallery/gezichten-tekenen.jpg",
    "/gallery/monkey-study.jpg",
    // "/gallery/hond.jpg",
    // "/gallery/bloem-study.jpg",
    // "/gallery/glas-study.jpg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [galleryImages.length]);

  const faqData = [
    {
      question: "Wat kan ik hier leren?",
      answer: (
          <p>Bij ons leer je de technieken van het realistisch tekenen en schilderen. We bieden een doordachte mix van gestructureerde lessen en persoonlijke projecten, volledig gericht op jouw ontwikkeling. Daarnaast krijg je deskundige begeleiding bij het uitwerken van je eigen creatieve ideeën.</p>
      )
    },
    {
      question: "Wat kosten de lessen?",
      answer: (
          <>
            <p>De kosten zijn opgebouwd uit een maandelijks lidmaatschap en eenmalige inschrijfkosten.</p>
            <ul className="list-disc list-inside space-y-1 my-2">
              <li><strong>Lidmaatschap:</strong> € 64,- per maand.</li>
              <li><strong>Inschrijfkosten:</strong> € 5,- (eenmalig).</li>
            </ul>

            <h4 className="font-semibold text-lg text-[var(--color-text-default)] pt-2">Betaling</h4>
            <p>Betaling verloopt eenvoudig via automatische incasso. Het lesgeld wordt maandelijks rond de 11e van de maand afgeschreven.</p>

            <h4 className="font-semibold text-lg text-[var(--color-text-default)] pt-2">Flexibiliteit</h4>
            <p>Je zit nergens aan vast. Het lidmaatschap is per maand opzegbaar, dus je hebt volledige flexibiliteit.</p>
          </>
      )
    },
    {
      question: "Wat heb ik nodig voor de les?",
      answer: (
          <p>Voor je eerste les hoef je niets mee te nemen; wij zorgen voor alle benodigde basismaterialen. Na een paar lessen kijken we samen wat voor jou handig is om zelf aan te schaffen. Het werken met eigen, vertrouwde materialen is immers een belangrijk onderdeel van je artistieke ontwikkeling.</p>
      )
    },
    {
      question: "Voor wie zijn de lessen?",
      answer: (
          <p>Onze lessen richten zich op volwassenen die de kunst van het realistisch tekenen en schilderen willen leren. Passie voor het vak staat voorop, dus iedereen die gemotiveerd is, is van harte welkom. De lesmethode is ontwikkeld voor een volwassen publiek, maar leergierige talenten van andere leeftijden sluiten we niet uit.</p>
      )
    },
    {
      question: "Moet ik mijn eigen spullen meenemen?",
      answer: (
          <p>Om je een goede start te geven, zorgen wij voor de benodigde basismaterialen, zeker tijdens de eerste lessen. Na verloop van tijd werkt het echter prettiger en leer je meer als je met je eigen, vertrouwde materialen werkt. We moedigen je daarom aan om op den duur je eigen set samen te stellen.</p>
      )
    },
    {
      question: "Thema- & Projectles?",
      answer: (
          <>
            <p>Onze lessen hebben een unieke, afwisselende opzet. Je volgt wekelijks les, waarbij we een themales en een projectles om en om aanbieden. Zo combineer je gerichte instructie met creatieve vrijheid.</p>

            <h4 className="font-semibold text-lg text-[var(--color-text-default)] pt-2">De Themales: Techniek en Inspiratie</h4>
            <p>Tijdens de themales staat er elke keer een specifieke techniek of een inspirerend onderwerp centraal. In groepsverband werk je onder begeleiding aan een gerichte opdracht. Dit is de perfecte manier om stap voor stap nieuwe vaardigheden te leren en je technische basis te versterken.</p>

            <h4 className="font-semibold text-lg text-[var(--color-text-default)] pt-2">De Projectles: Jouw Artistieke Vrijheid</h4>
            <p>In de projectles krijg je de vrijheid om aan je eigen schilder- of tekenproject te werken. Het doel is het ontwikkelen van jouw persoonlijke stijl en creatieve visie. Je kiest zelf je onderwerp en aanpak, en wij bieden individuele begeleiding om je te helpen bij jouw artistieke zoektocht. Weet je even niet waar je moet beginnen? Dan hebben we diverse startprojecten voor je klaarliggen.</p>
          </>
      )
    },
    {
      question: "Kan ik een gemiste les inhalen?",
      answer: (
          <p>Jazeker, een gemiste les inhalen is mogelijk. Je kunt de les inhalen binnen twee weken na de oorspronkelijke lesdatum. In overleg met ons kun je dan op een ander tijdstip een extra les bijwonen, afhankelijk van de beschikbare plekken in de andere lesgroepen.</p>
      )
    }
  ];

  return (
      <div className="bg-[var(--color-bg-body)] text-[var(--color-text-default)] font-sans min-h-screen">
        {/* Header Section */}
        <Header />

        {/* Hero Section */}
        <section id="hero-banner" className="relative py-0 md:py-0 bg-[var(--color-bg-body)] overflow-hidden pt-0">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex-col ">
            <div className="flex justify-center items-center h-[30vh] mt-8 md:h-[45vh] md:mt-10 tilt-on-hover">
              <img className="max-h-full" src="/scheveschildersign.png" alt="Scheve Schilder Sign"/>
            </div>
            <div className="mt-4"> {/* This is the container for your button */}
              <a
                  href="#inschrijven"
                  className="inline-block bg-[var(--color-button-primary-bg)] text-[var(--color-text-on-button)] mb-3 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-[var(--color-button-primary-bg-hover)] transition-colors duration-300 text-lg"
              >
                Start je creatieve reis
              </a>
            </div>
          </div>
        </section>

        <div id="tilt-box-black-top"/>
        <div className="marquee-wrapper">
          <div className="marquee-container">
            <div className="marquee-content">
              <span>
                Tekenen & Schilderen <strong className="highlight">Tekenen & Schilderen</strong> Tekenen & Schilderen <strong
                  className="highlight">Tekenen & Schilderen</strong> Tekenen & Schilderen <strong
                  className="highlight">Tekenen & Schilderen</strong> Tekenen & Schilderen <strong
                  className="highlight">Tekenen & Schilderen</strong> &nbsp;
              </span>
              <span>
                Tekenen & Schilderen <strong className="highlight">Tekenen & Schilderen</strong> Tekenen & Schilderen <strong
                  className="highlight">Tekenen & Schilderen</strong> Tekenen & Schilderen <strong
                  className="highlight">Tekenen & Schilderen</strong> Tekenen & Schilderen <strong
                  className="highlight">Tekenen & Schilderen</strong> &nbsp;
              </span>
            </div>
          </div>
        </div>
        <div id="tilt-box-red-top"/>
        {/* Image Gallery Section */}
        <section id="school" className="py-16 pb-0 bg-[var(--color-bg-section-dark)]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <div
                className="relative w-full max-w-3xl mx-auto h-64 sm:h-80 md:h-96 overflow-hidden rounded-lg shadow-2xl"
            >
              {galleryImages.map((src, index) => (
                  <div
                      key={src}
                      className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <Image
                        src={src}
                        alt={`Galerij afbeelding ${index + 1} van de schilderschool`}
                        layout="fill"
                        objectFit="cover" // Keep cover, but the container is now taller on mobile
                        priority={index === 0}
                    />
                  </div>
              ))}
            </div>
            <div className="flex justify-center mt-4">
              {galleryImages.map((_, index) => (
                  <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full mx-1 focus:outline-none ${index === currentImageIndex ? 'bg-[var(--color-gallery-dot-active)]' : 'bg-[var(--color-gallery-dot)] hover:bg-[var(--color-gallery-dot-hover)]'}`}
                      aria-label={`Go to image ${index + 1}`}
                  />
              ))}
            </div>
          </div>
          <div id="tilt-box-white" className="mb-2"></div>
        </section>

        {/* Intro Text Section */}
        <section className="py-16 bg-[var(--color-bg-section-medium)]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16">
              <div className="lg:w-1/2">
                <Image
                    src="/gallery/drawing-study.jpg"
                    alt="Een cursist die aan het tekenen is"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-xl w-full h-auto max-h-[400px]"
                />
              </div>
              <div className="lg:w-1/2 text-center lg:text-left">
                <h2 className="text-3xl font-bold text-[var(--color-bg-header)] sm:text-4xl">
                  Schilderles // Tekenles
                </h2>
                <p className="mt-6 text-lg text-[var(--color-text-muted)] leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Schilderschool De Scheve Schilder is een school waar iedereen welkom is. Of je nu een beginner bent of
                  al ervaring hebt, wij helpen je graag op weg. In een gezellige en ongedwongen sfeer leer je in een
                  groep van maximaal 10 leerlingen de fijne kneepjes van het vak. We werken met diverse materialen en
                  technieken. Je krijgt individuele begeleiding en werkt op je eigen tempo aan je eigen creaties.
                </p>
                {/* MODIFIED LINK BELOW */}
                <Link href="/lesprogramma"
                      className="mt-8 inline-block text-[var(--color-text-highlight)] font-semibold hover:text-[var(--color-text-highlight-hover)] transition-colors duration-300 text-lg">
                  Bekijk ons lesprogramma <ChevronRightIcon/>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Class Times & Map Section */}
        <div id="tilt-box-blue" className="mb-2"></div>
        <section className="py-16 pb-0 bg-[var(--color-bg-section-blue)]">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="bg-[var(--color-bg-section-medium)] p-6 sm:p-8 rounded-lg shadow-xl">
                <h3 className="text-2xl font-semibold text-[var(--color-bg-header)] mb-6 text-center">Lestijden</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-[var(--color-border-muted)] pb-3">
                    <span className="text-lg text-[var(--color-bg-header)]">Woensdag Avond:</span>
                    <span className="text-lg font-medium text-[var(--color-bg-header)]">19:00 - 21:30</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-[var(--color-border-muted)] pb-3">
                    <span className="text-lg text-[var(--color-bg-header)]">Vrijdag Avond:</span>
                    <span className="text-lg font-medium text-[var(--color-bg-header)]">19:00 - 21:30</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg text-[var(--color-bg-header)]">Zaterdag Ochtend:</span>
                    <span className="text-lg font-medium text-[var(--color-bg-header)]">9:00 - 11:30</span>
                  </div>
                </div>
                <p className="mt-6 text-sm text-[var(--color-text-subtle)] text-center">
                  Locatie: Cultuurhuis De Kolk (ruimte 2), Weereweg 32, Lutjewinkel
                </p>
              </div>


              <div className="rounded-lg shadow-xl overflow-hidden h-80 md:h-full">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!4v1748765405671!6m8!1m7!1svic1ch9VXt-XXkBcofWzvA!2m2!1d52.76878390910724!2d4.883859254183673!3f53.6922652442899!4f6.295963732094151!5f1.5370213448934535"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Locatie van Cultuurhuis De Kolk"
                    className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
          <div id="tilt-box-white"/>
        </section>

        {/* About Section */}
        <section id="inschrijven" className="py-16 bg-[var(--color-bg-section-medium)]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-40">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="md:w-2/3 text-center md:text-left">
                <h2 className="text-3xl font-bold text-[var(--color-bg-header)] sm:text-4xl">
                  Over de Scheve Schilder
                </h2>
                <p className="mt-6 text-lg text-[var(--color-text-muted)] leading-relaxed">
                  De Scheve Schilder is in 2023 opgericht door Hans Bregman. Hans studeerde klassieke schilderkunst in
                  Italië. Met zijn ervaring en passie helpt hij leerlingen om hun techniek te verbeteren en meer te
                  leren over tekenen en schilderen.
                </p>
                <p className="mt-4 text-lg text-[var(--color-text-muted)] leading-relaxed">
                  Of je nu graag landschappen, portretten, dieren, stillevens of impressionistische werken maakt, of
                  gewoon wilt experimenteren met verf – bij De Scheve Schilder ben je van harte welkom.
                </p>
                <a
                    href="https://api.whatsapp.com/send/?phone=031610910012&text&type=phone_number&app_absent=0"
                    className="mt-8 inline-block bg-[var(--color-button-primary-bg)] text-[var(--color-text-on-button)] font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-[var(--color-button-primary-bg-hover)] transition-colors duration-300 text-lg"
                >
                  Neem contact op voor een gratis proefles
                </a>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <img
                    src="/schevephoto.jpg"
                    alt="Hans Bregman - De Scheve Schilder"
                    className="rounded-lg shadow-xl w-full max-w-xs md:max-w-sm h-auto object-cover"
                    onError={(e) => (e.currentTarget.src = "https://placehold.co/400x500/CCCCCC/FFFFFF?text=Image+Not+Found")}
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <div id="tilt-box-brown" className="mb-2"></div>
        <section id="programma" className="py-16 bg-[var(--color-bg-section-light-brown)]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-bold text-[var(--color-text-default)] sm:text-4xl text-center mb-10">
              Veel gestelde vragen
            </h2>
            <div className="space-y-2 ">
              {faqData.map((item, index) => (
                  <FAQItem key={index} question={item.question} answer={item.answer}/>
              ))}
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <Footer />
      </div>
  );
};

export default page;