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
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <div className="border-b border-[var(--color-border-default)] py-4">
        <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex justify-between items-center w-full text-left text-lg text-[var(--color-text-default)] hover:text-[var(--color-text-highlight)] transition-colors duration-300"
        >
          <span>{question}</span>
          <ChevronDownIcon />
        </button>
        {isOpen && <p className="mt-3 text-[var(--color-text-muted)] pr-6">{answer}</p>}
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
    { question: "Wat heb ik nodig voor de les?", answer: "Voor de eerste les hoef je niets mee te nemen. We voorzien je van basismaterialen. Voor vervolglessen bespreken we samen wat handig is om aan te schaffen." },
    { question: "Voor wie zijn de lessen?", answer: "De lessen zijn voor iedereen, van absolute beginner tot gevorderde. Plezier in schilderen staat voorop!" },
    { question: "Moet ik mijn eigen spullen mee nemen?", answer: "Voor de proefles niet. Daarna is het aan te raden om je eigen vertrouwde materialen te gebruiken, maar we hebben ook materiaal beschikbaar." },
    { question: "Thema les & Project les?", answer: "We bieden zowel themalessen aan waarin specifieke technieken of onderwerpen centraal staan, als projectlessen waarin je aan je eigen werkstukken werkt met begeleiding." },
    { question: "Les inhalen mogelijk?", answer: "In overleg is het vaak mogelijk om een gemiste les op een ander moment in te halen, mits er plek is in een andere groep." },
  ];

  const navLinks = [
    { href: "#school", text: "Schilderschool" },
    { href: "#inschrijven", text: "Inschrijven" },
    { href: "#programma", text: "Lesprogramma" },
  ];

  return (
      <div className="bg-[var(--color-bg-body)] text-[var(--color-text-default)] font-sans min-h-screen">
        {/* Header */}
        <header className="bg-[var(--color-bg-header)] bg-opacity-80 backdrop-blur-md shadow-lg sticky top-0 z-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <a href="#" className="text-2xl font-bold text-[var(--color-text-highlight)]">
                  De Scheve Schilder
                </a>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-6">
                {navLinks.map(link => (
                    <a key={link.href} href={link.href} className="text-[var(--color-text-muted)] hover:text-[var(--color-text-highlight)] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
                      {link.text}
                    </a>
                ))}
              </nav>

              {/* Contact Info - Desktop */}
              <div className="hidden md:flex items-center space-x-4 text-sm">
                <a href="tel:0612345678" className="flex items-center text-[var(--color-text-muted)] hover:text-[var(--color-text-highlight)]">
                  <PhoneIcon /> <span className="ml-2">06 12345678</span>
                </a>
                <a href="mailto:info@descheveschilder.nl" className="flex items-center text-[var(--color-text-muted)] hover:text-[var(--color-text-highlight)]">
                  <MailIcon /> <span className="ml-2">info@descheveschilder.nl</span>
                </a>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="text-[var(--color-text-muted)] hover:text-[var(--color-text-highlight)] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--color-focus-ring)] p-2 rounded-md"
                >
                  <MenuIcon />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
              <div className="md:hidden bg-[var(--color-bg-body)] border-t border-[var(--color-border-default)]">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navLinks.map(link => (
                      <a key={link.href} href={link.href} className="text-[var(--color-text-muted)] hover:bg-[var(--color-bg-hover-light)] hover:text-[var(--color-text-highlight)] block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
                        {link.text}
                      </a>
                  ))}
                </div>
                <div className="pt-4 pb-3 border-t border-[var(--color-border-default)]">
                  <div className="flex items-center px-5 space-x-2">
                    <PhoneIcon />
                    <a href="tel:0612345678" className="text-[var(--color-text-muted)] hover:text-[var(--color-text-highlight)]">06 12345678</a>
                  </div>
                  <div className="mt-3 flex items-center px-5 space-x-2">
                    <MailIcon />
                    <a href="mailto:info@descheveschilder.nl" className="text-[var(--color-text-muted)] hover:text-[var(--color-text-highlight)]">info@descheveschilder.nl</a>
                  </div>
                  <div className="mt-3 flex items-center px-5 space-x-2">
                    <MapPinIcon />
                    <span className="text-[var(--color-text-muted)]">Weverweg 32, Lutjewinkel</span>
                  </div>
                </div>
              </div>
          )}
        </header>

        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-[var(--color-bg-section-medium)] overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img src="https://placehold.co/1920x1080/334155/475569?text=Paint+Texture" alt="Paint Texture Background" className="w-full h-full object-cover"/>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-sm sm:text-base text-[var(--color-text-highlight)] uppercase tracking-wider font-semibold">
              - SCHILDERSCHOOL -
            </h1>
            <p className="mt-2 text-4xl sm:text-5xl md:text-6xl font-extrabold text-[var(--color-text-default)] leading-tight">
              De Scheve Schilder
            </p>
            <p className="mt-6 text-xl sm:text-2xl text-[var(--color-text-muted)] max-w-2xl mx-auto">
              Iedereen kan leren Tekenen & Schilderen 🖌️
            </p>
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

        {/* Image Gallery Section */}
        <section id="school" className="py-16 bg-[var(--color-bg-section-dark)]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative w-full max-w-3xl mx-auto h-64 sm:h-80 md:h-96 overflow-hidden rounded-lg shadow-2xl">
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
        </section>

        {/* Intro Text Section */}
        <section className="py-16 bg-[var(--color-bg-section-medium)]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="md:w-1/2">
                <img
                    src="https://placehold.co/600x400/4A5568/FFFFFF?text=Artist+Sketching"
                    alt="Artist sketching"
                    className="rounded-lg shadow-xl w-full h-auto object-cover"
                    onError={(e) => (e.currentTarget.src = "https://placehold.co/600x400/CCCCCC/FFFFFF?text=Image+Not+Found")}
                />
              </div>
              <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-3xl font-bold text-[var(--color-text-default)] sm:text-4xl">
                  Schilderles & Tekenles bij <br className="hidden sm:inline"/>Schilderschool De Scheve Schilder
                </h2>
                <p className="mt-6 text-lg text-[var(--color-text-muted)] leading-relaxed">
                  Schilderschool De Scheve Schilder is een school waar iedereen welkom is. Of je nu een beginner bent of al ervaring hebt, wij helpen je graag op weg. In een gezellige en ongedwongen sfeer leer je in een groep van maximaal 10 leerlingen de fijne kneepjes van het vak. We werken met diverse materialen en technieken. Je krijgt individuele begeleiding en werkt op je eigen tempo aan je eigen creaties.
                </p>
                <a href="#programma" className="mt-8 inline-block text-[var(--color-text-highlight)] font-semibold hover:text-[var(--color-text-highlight-hover)] transition-colors duration-300 text-lg">
                  Bekijk ons lesprogramma <ChevronRightIcon />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Class Times & Map Section */}
        <section className="py-16 bg-[var(--color-bg-section-dark)]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Class Times */}
              <div className="bg-[var(--color-bg-section-medium)] p-6 sm:p-8 rounded-lg shadow-xl">
                <h3 className="text-2xl font-semibold text-[var(--color-text-default)] mb-6 text-center">Les Tijden</h3>
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
                  Locatie: Cultuurhuis De Kolk (ruimte 2), Weerweg 32, Lutjewinkel
                </p>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-lg shadow-xl overflow-hidden h-80 md:h-full">
                <img
                    src="https://placehold.co/600x400/A0AEC0/FFFFFF?text=Map+of+Lutjewinkel+showing+Cultuurhuis+De+Kolk"
                    alt="Kaart van Lutjewinkel met locatie Cultuurhuis De Kolk"
                    className="w-full h-full object-cover"
                    onError={(e) => (e.currentTarget.src = "https://placehold.co/600x400/CCCCCC/FFFFFF?text=Map+Not+Available")}
                />
              </div>
            </div>
          </div>
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
                  De Scheve Schilder is in 2023 opgericht door Hans Bregman. Hans studeerde klassieke schilderkunst in Italië. Met zijn ervaring en passie helpt hij leerlingen om hun techniek te verbeteren en meer te leren over tekenen en schilderen.
                    </p>
                <p className="mt-4 text-lg text-[var(--color-text-muted)] leading-relaxed">
                  Of je nu graag landschappen, portretten, dieren, stillevens of impressionistische werken maakt, of gewoon wilt experimenteren met verf – bij De Scheve Schilder ben je van harte welkom.
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
        <section id="programma" className="py-16 bg-[var(--color-bg-section-dark)]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-bold text-[var(--color-text-default)] sm:text-4xl text-center mb-10">
              Veel gestelde vragen
            </h2>
            <div className="space-y-2">
              {faqData.map((item, index) => (
                  <FAQItem key={index} question={item.question} answer={item.answer} />
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="bg-[var(--color-bg-header)] text-[var(--color-text-subtle)] py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h5 className="text-xl font-semibold text-[var(--color-text-default)] mb-4">De Scheve Schilder</h5>
                <p className="text-sm">Creativiteit ontdekken en ontwikkelen in een inspirerende omgeving.</p>
              </div>
              <div>
                <h5 className="text-xl font-semibold text-[var(--color-text-default)] mb-4">Snelle Links</h5>
                <ul className="space-y-2 text-sm">
                  <li><a href="#school" className="hover:text-[var(--color-text-highlight)] transition-colors">Over Ons</a></li>
                  <li><a href="#programma" className="hover:text-[var(--color-text-highlight)] transition-colors">Lesprogramma</a></li>
                  <li><a href="#inschrijven" className="hover:text-[var(--color-text-highlight)] transition-colors">Inschrijven</a></li>
                  <li><a href="#" className="hover:text-[var(--color-text-highlight)] transition-colors">Privacybeleid</a></li>
                </ul>
              </div>
              <div>
                <h5 className="text-xl font-semibold text-[var(--color-text-default)] mb-4">Contact</h5>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><MapPinIcon /> <span className="ml-2">Weverweg 32, Lutjewinkel</span></li>
                  <li className="flex items-center"><PhoneIcon /> <span className="ml-2"><a href="tel:0612345678" className="hover:text-[var(--color-text-highlight)]">06 12345678</a></span></li>
                  <li className="flex items-center"><MailIcon /> <span className="ml-2"><a href="mailto:info@descheveschilder.nl" className="hover:text-[var(--color-text-highlight)]">info@descheveschilder.nl</a></span></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 border-t border-[var(--color-border-default)] pt-8 text-center text-sm">
              <p>&copy; {new Date().getFullYear()} De Scheve Schilder. Alle rechten voorbehouden.</p>
              <p className="mt-1">Ontworpen met ❤️ voor kunst.</p>
            </div>
          </div>
        </footer>
      </div>
  );
};

export default page;
