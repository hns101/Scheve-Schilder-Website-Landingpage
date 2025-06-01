"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image'


// Icons - Lucide React (or similar SVG icons)
const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
);

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
);

const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
);

const MapPinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
);

const ChevronDownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" />
    </svg>
);

const ChevronRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block h-4 w-4">
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
          {/* De vraag wordt nu alleen dikgedrukt als hij open is */}
          <span className={`pr-4 ${isOpen ? 'font-bold' : ''}`}>
            {question}
          </span>
          <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
            <ChevronDownIcon />
          </div>
        </button>
        {/* De kleur van de antwoordtekst is hier aangepast */}
        {isOpen && <div className="mt-4 text-[var(--color-text-default)] pr-6 space-y-3">{answer}</div>}
      </div>
  );
};

const page: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    "https://placehold.co/600x400/7F8C8D/FFFFFF?text=Painting+Class+1",
    "https://placehold.co/600x400/95A5A6/FFFFFF?text=Artwork+Example+2",
    "https://placehold.co/600x400/BDC3C7/FFFFFF?text=Students+Painting+3",
    "https://placehold.co/600x400/7F8C8D/FFFFFF?text=Close-up+Brush+4",
    "https://placehold.co/600x400/95A5A6/FFFFFF?text=Finished+Piece+5",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    }, 3000); // Change image every 3 seconds
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

  const navLinks = [
    { href: "#school", text: "Schilderschool" },
    { href: "#inschrijven", text: "Inschrijven" },
    { href: "#programma", text: "Lesprogramma" },
  ];

  return (
      <div className="bg-[var(--color-bg-body)] text-[var(--color-text-default)] font-sans min-h-screen">
        {/* Header */}
        <header className=" sticky top-0 z-50 ">

          <div className="bg-[var(--color-bg-header)] bg-opacity-80">

            {/* Apply flex and justify-between here */}
            <div
                className="container mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between h-16"> {/* <-- MODIFIED LINE */}

              {/* 1. Logo (Stays on the Left) */}
              <div className="flex-shrink-0 relative z-20">
                <img className="h-32 pt-7 -rotate-2 " src="/Schilderschoolwit.png"
                     alt="Schilderschool De Scheve Scheve Schilder"/>
              </div>

              {/* 2. Container for Right-Side Elements */}
              <div className="flex items-center"> {/* <-- NEW WRAPPER */}

                {/* Desktop Navigation (Pushed to the Right) */}
                <nav className="hidden md:flex space-x-4 ">
                  {navLinks.map(link => (
                      <a key={link.href} href={link.href}
                         className="text-[var(--color-text-default)] hover:text-[var(--color-text-highlight)] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
                        {link.text}
                      </a>
                  ))}
                </nav>

                {/* Mobile Menu Button (Pushed to the Right) */}
                <div className="md:hidden">
                  <button
                      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                      className="text-[var(--color-text-muted)] hover:text-[var(--color-text-highlight)] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--color-focus-ring)] p-2 rounded-md"
                  >
                    <MenuIcon/>
                  </button>
                </div>

              </div>
              {/* <-- End of NEW WRAPPER */}

            </div>
            {/* <-- Close flex container */}

          </div>
          {/* <-- Close background div */}

          {/* Mobile Menu (This structure looks fine, it appears below when open) */}
          {isMobileMenuOpen && (
              <div className="md:hidden bg-[var(--color-bg-header)] ">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navLinks.map(link => (
                      <a key={link.href} href={link.href}
                         className="text-[var(--color-text-default)] hover:bg-[var(--color-bg-hover-light)] hover:text-[var(--color-text-highlight)] block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
                        {link.text}
                      </a>
                  ))}
                </div>
              </div>
          )}
          {/* Your tilt box (Assuming it stays here) */}
          <div id="tilt-box" className="mb-2"></div>
        </header>

        {/* Hero Section */}

        <section id="hero-banner" className="relative py-0 md:py-0 bg-[var(--color-bg-body)] overflow-hidden pt-0">
          <div className="absolute inset-0 opacity-10">
            {/*<img src="https://placehold.co/1920x1080/334155/475569?text=Paint+Texture" alt="Paint Texture Background"*/}
            {/* className="w-full h-full object-cover"/>*/}
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex-col ">
            {/*<h1 className="text-sm sm:text-base text-[var(--color-bg-header)] uppercase tracking-wider font-semibold">*/}
            {/* - SCHILDERSCHOOL -*/}
            {/*</h1>*/}
            {/*<p className="mt-2 text-4xl sm:text-5xl md:text-6xl font-extrabold text-[var(--color-bg-header)] leading-tight">*/}
            {/* De Scheve Schilder*/}
            {/*</p>*/}

            <div className="flex justify-center items-center h-[45vh] mt-10">
              <img className="max-h-full" src="/scheveschildersign.png" alt="Scheve Schilder Sign"/>
            </div>
            {/* To make the <p> take up the full width, remove max-w-2xl and mx-auto */}

            {/*<p className="mt-6 py-4 pb-32 -mb-21 bg-[var(--line-background-color)] text-xl font-bold sm:text-2xl text-[var(--color-text-default)] w-screen relative left-1/2 -translate-x-1/2 z-0">*/}
            {/* Iedereen kan leren Tekenen & Schilderen️*/}
            {/*</p>*/}
            <div className="mt-10">
              <a
                  href="#inschrijven"
                  className="inline-block bg-[var(--color-button-primary-bg)] text-[var(--color-text-on-button)] font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-[var(--color-button-primary-bg-hover)] transition-colors duration-300 text-lg"
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
          className="highlight">Tekenen & Schilderen</strong>   </span>
              <span>
        Tekenen & Schilderen <strong className="highlight">Tekenen & Schilderen</strong> Tekenen & Schilderen <strong
                  className="highlight">Tekenen & Schilderen</strong> Tekenen & Schilderen <strong
                  className="highlight">Tekenen & Schilderen</strong> Tekenen & Schilderen <strong
                  className="highlight">Tekenen & Schilderen</strong>   </span>
            </div>
          </div>
        </div>
        {/* Image Gallery Section */}
        <div id="tilt-box-red-top"/>
        <section id="school" className="py-16 pb-0 bg-[var(--color-bg-section-dark)]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <div
                className="relative w-full max-w-3xl mx-auto h-64 sm:h-80 md:h-96 overflow-hidden rounded-lg shadow-2xl">
              {galleryImages.map((src, index) => (
                  <img
                      key={src}
                      src={src}
                      alt={`Gallery image ${index + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                      onError={(e) => (e.currentTarget.src = "https://placehold.co/600x400/CCCCCC/FFFFFF?text=Image+Not+Found")}
                  />
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
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="md:w-1/2 ml-30">
                <img
                    src="https://placehold.co/600x400/4A5568/FFFFFF?text=Artist+Sketching"
                    alt="Artist sketching"
                    className="rounded-lg shadow-xl w-full h-auto object-cover"
                    onError={(e) => (e.currentTarget.src = "https://placehold.co/600x400/CCCCCC/FFFFFF?text=Image+Not+Found")}
                />
              </div>
              <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-3xl font-bold text-[var(--color-bg-header)] sm:text-4xl">
                  Schilderles & Tekenles bij <br className="hidden sm:inline"/>Schilderschool De Scheve Schilder
                </h2>
                <p className="mt-6 text-lg text-[var(--color-text-muted)] leading-relaxed">
                  Schilderschool De Scheve Schilder is een school waar iedereen welkom is. Of je nu een beginner bent of
                  al ervaring hebt, wij helpen je graag op weg. In een gezellige en ongedwongen sfeer leer je in een
                  groep van maximaal 10 leerlingen de fijne kneepjes van het vak. We werken met diverse materialen en
                  technieken. Je krijgt individuele begeleiding en werkt op je eigen tempo aan je eigen creaties.
                </p>
                <a href="#programma"
                   className="mt-8 inline-block text-[var(--color-text-highlight)] font-semibold hover:text-[var(--color-text-highlight-hover)] transition-colors duration-300 text-lg">
                  Bekijk ons lesprogramma <ChevronRightIcon/>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Class Times & Map Section */}
        <div id="tilt-box-blue" className="mb-2"></div>
        <section className="py-16 pb-0 bg-[var(--color-bg-section-blue)]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Class Times */}
              <div className="bg-[var(--color-bg-section-medium)] p-6 sm:p-8 ml-32 rounded-lg shadow-xl">
                <h3 className="text-2xl font-semibold text-[var(--color-bg-header)] mb-6 text-center">Les Tijden</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-[var(--color-border-muted)] pb-3">
                    <span className="text-lg text-[var(--color-text-muted)]">Woensdag Avond:</span>
                    <span className="text-lg font-medium text-[var(--color-text-highlight)]">19:00 - 21:00</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-[var(--color-border-muted)] pb-3">
                    <span className="text-lg text-[var(--color-text-muted)]">Vrijdag Avond:</span>
                    <span className="text-lg font-medium text-[var(--color-text-highlight)]">19:00 - 21:30</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg text-[var(--color-text-muted)]">Zaterdag Ochtend:</span>
                    <span className="text-lg font-medium text-[var(--color-text-highlight)]">9:00 - 11:30</span>
                  </div>
                </div>
                <p className="mt-6 text-sm text-[var(--color-text-subtle)] text-center">
                  Locatie: Cultuurhuis De Kolk (ruimte 2), Weereweg 32, Lutjewinkel
                </p>

              </div>

              <div className="rounded-lg shadow-xl overflow-hidden h-80 md:h-full mr-32">
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
                    href="#contact"
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

        {/* Footer */}
        <footer id="contact" className="bg-[var(--color-bg-section-black)] text-[var(--color-text-default)] py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h5 className="text-xl font-semibold text-[var(--color-text-default)] mb-4">De Scheve Schilder</h5>
                <p className="text-sm">Creativiteit ontdekken en ontwikkelen in een inspirerende omgeving.</p>
              </div>
              <div>
                <h5 className="text-xl font-semibold text-[var(--color-text-default)] mb-4">Snelle Links</h5>
                <ul className="space-y-2 text-sm">
                  <li><a href="#school" className="hover:text-[var(--color-text-highlight)] transition-colors">Over
                    Ons</a></li>
                  <li><a href="#programma"
                         className="hover:text-[var(--color-text-highlight)] transition-colors">Lesprogramma</a></li>
                  <li><a href="#inschrijven"
                         className="hover:text-[var(--color-text-highlight)] transition-colors">Inschrijven</a></li>
                  <li><a href="#"
                         className="hover:text-[var(--color-text-highlight)] transition-colors">Privacybeleid</a></li>
                </ul>
              </div>
              <div>
                <h5 className="text-xl font-semibold text-[var(--color-text-default)] mb-4">Contact</h5>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><MapPinIcon/> <span className="ml-2">Weverweg 32, Lutjewinkel</span>
                  </li>
                  <li className="flex items-center"><PhoneIcon/> <span className="ml-2"><a href="tel:0612345678"
                                                                                           className="hover:text-[var(--color-text-highlight)]">06 12345678</a></span>
                  </li>
                  <li className="flex items-center"><MailIcon/> <span className="ml-2"><a
                      href="mailto:info@descheveschilder.nl"
                      className="hover:text-[var(--color-text-highlight)]">info@descheveschilder.nl</a></span></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 border-t border-[var(--color-border-default)] pt-8 text-center text-sm">
              <p>© {new Date().getFullYear()} SchilderSchool De Scheve Schilder</p>
            </div>
          </div>
        </footer>
      </div>
  );
};

export default page;