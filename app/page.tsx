import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ImpressumDialog } from "@/components/impressum-dialog"
import { DatenschutzDialog } from "@/components/datenschutz-dialog"
import { AGBDialog } from "@/components/agb-dialog"
import { FeatureCard } from "@/components/feature-card"
import { MobileMenu } from "@/components/mobile-menu"
import { AnimatedGradientBackground } from "@/components/animated-gradient-background"
import { AppStoreBadge } from "@/components/app-store-badge"
import {
  Calendar,
  Clock,
  CreditCard,
  Gift,
  LayoutGrid,
  MessageSquare,
  Phone,
  ShoppingBag,
  Star,
  Bell,
  Palette,
  BadgeCheck,
} from "lucide-react"

export default function Home() {
  return (
    <div id="oben" className="flex min-h-screen flex-col overflow-x-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800 bg-black/80 backdrop-blur-md">
        <div className="container flex h-20 items-center justify-between">
          {/* Linke Seite - Navigation */}
          <nav className="hidden md:flex gap-8">
            <Link href="#vorteile" className="text-base font-medium text-gray-300 hover:text-white transition-colors">
              Vorteile
            </Link>
            <Link href="#funktionen" className="text-base font-medium text-gray-300 hover:text-white transition-colors">
              Funktionen
            </Link>
          </nav>

          {/* Mitte - Logo */}
          <div className="flex items-center justify-center">
            <Link href="#oben">
              <Image
                src="/images/header-logo.png"
                alt="MK Dienstleistung Logo"
                width={180}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Rechte Seite - Navigation und Buttons */}
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex gap-8">
              <Link href="#preise" className="text-base font-medium text-gray-300 hover:text-white transition-colors">
                Preise
              </Link>
              <Link href="#kontakt" className="text-base font-medium text-gray-300 hover:text-white transition-colors">
                Kontakt
              </Link>
            </nav>
            <Link href="#kontakt" className="hidden md:inline-flex">
              <Button className="button-glow bg-white text-black hover:bg-gray-200">Demo anfragen</Button>
            </Link>
            <MobileMenu />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-80 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
          <AnimatedGradientBackground />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-8 lg:gap-16 items-center lg:grid-cols-5">
              {/* Mobile Hero Image - Shown only on mobile, above the text */}
              <div className="lg:hidden w-full flex justify-start order-first mb-4">
                <div className="relative w-full max-w-[500px] hero-float overflow-hidden">
                  <Image
                    src="/images/hero-phones.png"
                    alt="Marcus Klein Hairdressing App Interface"
                    width={800}
                    height={800}
                    className="w-full h-auto relative z-10"
                    priority
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-6 animate-slide-in-left lg:col-span-2 order-last lg:order-first text-left">
                <div className="inline-block rounded-full bg-gray-800 px-4 py-1.5 text-base text-gray-200 mb-6 shimmer-effect">
                  Intelligenter arbeiten, besser leben.
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter futuristic-text text-glow leading-tight">
                  <strong>Terminbuchung</strong>, die Eindruck hinterlässt
                </h1>
                <p className="text-lg md:text-xl text-gray-400 max-w-[700px] mt-6">
                  Vergessen Sie chaotische Kalender, ständige Nachrichten und endlose Telefonate. Ab jetzt läuft Ihr
                  Salon wie ein Schweizer Uhrwerk.
                </p>
                <p className="text-lg md:text-xl text-gray-400 max-w-[700px]">
                  Eine <strong>intelligente, multifunktionale App</strong> der neuen Generation – entwicktelt, um Ihre Zeit efficienter zu organisieren, das <strong>Image Ihres Salon</strong> zu stärken und Ihren Kunden ein <strong>erstklassiges Buchungserlebnis</strong> zu bieten.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-8">
                  <Link href="#vorteile">
                    <Button className="button-glow button-animate bg-white text-black hover:bg-gray-200 h-14 px-8 text-lg animate-bounce-subtle">
                      Jetzt starten
                    </Button>
                  </Link>
                  <Link href="#funktionen">
                    <Button
                      variant="outline"
                      className="border-gray-700 hover:bg-gray-900 h-14 px-8 text-lg button-animate"
                    >
                      Mehr erfahren
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Desktop Hero Image - Hidden on mobile */}
              <div className="hidden lg:flex relative mt-8 lg:mt-0 justify-center animate-slide-in-right lg:col-span-3">
                <div className="relative w-full max-w-[1800px] hero-float overflow-hidden">
                  <Image
                    src="/images/hero-phones.png"
                    alt="Marcus Klein Hairdressing App Interface"
                    width={2000}
                    height={2000}
                    className="w-full h-auto relative z-10"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section - Reduced top padding on mobile */}
        <section id="ueber-uns" className="py-12 md:py-24 bg-gradient-to-b from-black to-gray-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:gap-16 items-center lg:grid-cols-2">
              <div className="order-2 lg:order-1">
                <div className="relative w-full max-w-[700px] mx-auto lg:mx-0 animate-fade-in image-animate overflow-hidden">
                  <Image
                    src="/images/feature-image-1.png"
                    alt="Marcus Klein App Terminbestätigung"
                    width={900}
                    height={1300}
                    className="relative w-full h-auto"
                  />
                </div>
              </div>
              <div className="space-y-4 md:space-y-6 order-1 lg:order-2 animate-fade-in text-left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter futuristic-text">
                  Mehr als nur eine Dienstleistung – ein <strong>Erlebnis, das bleibt</strong>
                </h2>
                <p className="text-lg md:text-xl text-gray-400">
                  Wenn Ihr Salon eine eigene App hat, sehen Kunden Sie nicht mehr nur als lokalen Friseur, sondern als
                  starke Marke mit Charakter.
                </p>
                <p className="text-lg md:text-xl text-gray-400">
                  Eine App mit dem Namen Ihres Salons schafft ein Gefühl von Zugehörigkeit – der Kunde fühlt sich wie
                  ein Teil Ihres Teams, nicht wie ein beliebiger Besucher.
                </p>
                <p className="text-lg md:text-xl text-gray-400">
                  Das stärkt die Kundenbindung, hebt Ihr Image und unterscheidet Sie klar vom Wettbewerb. Klingt nach
                  internationalem Niveau? Genau das ist es auch.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="vorteile" className="py-16 md:py-24 bg-black">
          <div className="container px-4 md:px-6">
            <div className="text-left md:text-center max-w-[900px] mx-auto mb-10 md:mb-16 animate-fade-in">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter futuristic-text">
                So hilft es Ihnen
              </h2>
              <p className="text-lg md:text-xl text-gray-400">
                Vereinfachen Sie Ihren Alltag mit besserer Organisation und Struktur im Salon.
              </p>
            </div>

            <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 stagger-animation">
              <Card className="gradient-border bg-black animate-scale-in" style={{ animationDelay: "0.1s" }}>
                <div className="p-6 md:p-8">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gray-900 flex items-center justify-center mb-4 md:mb-6">
                    <Calendar className="h-7 w-7 md:h-8 md:w-8 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Bessere Planung</h3>
                  <p className="text-base md:text-lg text-gray-400">
                    Sie wissen immer im Voraus, was Sie am nächsten Tag erwartet – ganz ohne Überraschungen.
                  </p>
                </div>
              </Card>

              <Card className="gradient-border bg-black animate-scale-in" style={{ animationDelay: "0.2s" }}>
                <div className="p-6 md:p-8">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gray-900 flex items-center justify-center mb-4 md:mb-6">
                    <MessageSquare className="h-7 w-7 md:h-8 md:w-8 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Keine Anrufe mehr</h3>
                  <p className="text-base md:text-lg text-gray-400">
                    Kunden sehen Ihre freien Termine selbstständig und buchen direkt – ohne Anrufe oder Nachrichten.
                  </p>
                </div>
              </Card>

              <Card className="gradient-border bg-black animate-scale-in" style={{ animationDelay: "0.3s" }}>
                <div className="p-6 md:p-8">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gray-900 flex items-center justify-center mb-4 md:mb-6">
                    <Bell className="h-7 w-7 md:h-8 md:w-8 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Automatische Erinnerungen</h3>
                  <p className="text-base md:text-lg text-gray-400">
                    Automatische Erinnerungen reduzieren die Zahl der No-Shows deutlich.
                  </p>
                </div>
              </Card>
            </div>

            <div className="mt-10 md:mt-16 text-left md:text-center animate-fade-in">
              <p className="text-xl md:text-2xl text-gray-300 mb-6 md:mb-8">
                Seien Sie einen Schritt voraus – mit einem System, das für Sie arbeitet.
              </p>
              <Link href="#funktionen">
                <Button className="button-glow button-animate bg-white text-black hover:bg-gray-200 h-12 md:h-14 px-6 md:px-8 text-base md:text-lg">
                  Mehr erfahren
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="funktionen" className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-black">
          <div className="container px-4 md:px-6">
            <div className="text-left md:text-center max-w-[900px] mx-auto mb-10 md:mb-16 animate-fade-in">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter futuristic-text mb-4 md:mb-6">
                Entdecken Sie die wichtigsten Vorteile Ihrer neuen App
              </h2>
            </div>

            {/* Erste Reihe: 3 Karten */}
            <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 stagger-animation">
              <FeatureCard
                title="Keine Anrufe und Nachrichten"
                description="Alle Termine laufen über die App – mehr Ruhe für konzentriertes Arbeiten und bessere Servicequalität."
                icon={<Phone className="h-7 w-7 md:h-8 md:w-8 text-white" />}
                className="animate-scale-in"
                style={{ animationDelay: "0.1s" }}
              />

              <FeatureCard
                title="Treueprogramm"
                description="Jeder 5. oder 10. Haarschnitt kostenlos – der Kunde verfolgt seinen Fortschritt in der App, Sie stärken die Bindung."
                icon={<Gift className="h-7 w-7 md:h-8 md:w-8 text-white" />}
                className="animate-scale-in"
                style={{ animationDelay: "0.2s" }}
              />

              <FeatureCard
                title="Flexible Arbeitszeit"
                description="Planen Sie Ihre Verfügbarkeit individuell und vermeiden Sie Überlastung oder Leerlauf."
                icon={<Clock className="h-7 w-7 md:h-8 md:w-8 text-white" />}
                className="animate-scale-in"
                style={{ animationDelay: "0.3s" }}
              />
            </div>

            {/* Zweite Reihe: 3 Karten */}
            <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 stagger-animation mt-6 md:mt-8">
              <FeatureCard
                title="Kunden behalten"
                description="Leiten Sie Neukunden direkt in Ihre eigene App – ohne Provisionen oder Zwischenhändler."
                icon={<BadgeCheck className="h-7 w-7 md:h-8 md:w-8 text-white" />}
                className="animate-scale-in"
                style={{ animationDelay: "0.4s" }}
              />

              <FeatureCard
                title="Arbeitszeiten & Urlaub"
                description="Verwalten Sie Ihre Verfüglichkeit und Pausen direkt über die App - einfach und übersichtlich."
                icon={<Calendar className="h-7 w-7 md:h-8 md:w-8 text-white" />}
                className="animate-scale-in"
                style={{ animationDelay: "0.5s" }}
              />

              <FeatureCard
                title="Dienstleistungen eintragen"
                description="Listen Sie alle Services (z.B. Haarschnitt, Rasur, Styling) mit Dauer und Preis – so sehen Kunden genau, was Sie anbieten. Dienstleistung + Produkt = Mehrwert bei jedem Termin."
                icon={<LayoutGrid className="h-7 w-7 md:h-8 md:w-8 text-white" />}
                className="animate-scale-in"
                style={{ animationDelay: "0.6s" }}
              />
            </div>

            {/* Dritte Reihe: 4 Karten */}
            <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 stagger-animation mt-6 md:mt-8">
              <FeatureCard
                title="Ein Preis für jeden"
                description="Bauen Sie Ihre Marke mit flexiblen Preisen pro Barber auf. Jedes Teammitglied kann individual bepreist werden – von Schnellservice bis Premium-Erlebnis."
                icon={<Star className="h-7 w-7 md:h-8 md:w-8 text-white" />}
                className="animate-scale-in"
                style={{ animationDelay: "0.7s" }}
              />

              <FeatureCard
                title="Schnelle Buchung"
                description="Der Kunde wählt den Termin, bestätigt – fertig. Kein Anruf nötig."
                icon={<Calendar className="h-7 w-7 md:h-8 md:w-8 text-white" />}
                className="animate-scale-in"
                style={{ animationDelay: "0.8s" }}
              />

              <FeatureCard
                title="Produktverkauf"
                description="Bieten Sie Produkte wie Wachs, Bartöl oder Shampoo direkt beim Buchen an – für zusätzlichen Umsatz ohne Aufwand."
                icon={<ShoppingBag className="h-7 w-7 md:h-8 md:w-8 text-white" />}
                className="animate-scale-in"
                style={{ animationDelay: "0.9s" }}
              />

              <FeatureCard
                title="Exklusive Aktionen"
                description="Erstellen Sie citelige Angebote für weniger gefragte Zeiten und füllen Sie Ihren Kalender"
                icon={<Gift className="h-7 w-7 md:h-8 md:w-8 text-white" />}
                className="animate-scale-in"
                style={{ animationDelay: "1s" }}
              />
            </div>

            {/* Vierte Reihe: 4 Karten */}
            <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4 mt-6 md:mt-8 stagger-animation">
              <FeatureCard
                title="Zahlung vor Ort"
                description="Flexibel und unkompliziert – alles bleibt unter Ihrer Kontrolle."
                icon={<CreditCard className="h-7 w-7 md:h-8 md:w-8 text-white" />}
                className="animate-scale-in"
                style={{ animationDelay: "1.1s" }}
              />

              <FeatureCard
                title="Intelligente Warteliste"
                description="Sobald ein Termin frei wird, informiert das System automatisch den nächsten Kunden."
                icon={<LayoutGrid className="h-7 w-7 md:h-8 md:w-8 text-white" />}
                className="animate-scale-in"
                style={{ animationDelay: "1.2s" }}
              />

              <FeatureCard
                title="Benachrichtigungen"
                description="Ob Terminbuchung oder Stornierung – Sie werden sofort informiert."
                icon={<Bell className="h-7 w-7 md:h-8 md:w-8 text-white" />}
                className="animate-scale-in"
                style={{ animationDelay: "1.3s" }}
              />

              <FeatureCard
                title="Individuelles Branding"
                description="Ihre App, Ihr Branding – mit Namen, Logo und persönlichem Look & Feel."
                icon={<Palette className="h-7 w-7 md:h-8 md:w-8 text-white" />}
                className="animate-scale-in"
                style={{ animationDelay: "1.4s" }}
              />
            </div>
          </div>
        </section>

        {/* Showcase Section */}
        <section id="showcase" className="py-16 md:py-24 bg-black">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:gap-12 lg:gap-16 items-center lg:grid-cols-2">
              <div className="space-y-4 md:space-y-6 animate-slide-in-left text-left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter futuristic-text">
                  Ein Preis für jeden – eine Marke für alle
                </h2>
                <p className="text-lg md:text-xl text-gray-400">
                  Bauen Sie Ihre Marke mit flexiblen Preisen pro Barber auf. Jedes Teammitglied kann individuell
                  bepreist werden – von Schnellservice bis Premium-Erlebnis.
                </p>
                <div className="pt-4 md:pt-6">
                  <Link href="#preise">
                    <Button className="button-glow button-animate bg-white text-black hover:bg-gray-200 h-12 md:h-14 px-6 md:px-8 text-base md:text-lg">
                      Preise anzeigen
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative mt-6 lg:mt-0 animate-slide-in-right">
                <div className="relative w-full max-w-[700px] mx-auto lg:mx-0 hero-image image-animate overflow-hidden">
                  <Image
                    src="/images/feature-image-2.png"
                    alt="Marcus Klein App Buchungsdetails"
                    width={900}
                    height={1300}
                    className="relative w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="preise" className="py-16 md:py-24 bg-gradient-to-b from-black to-gray-900">
          <div className="container px-4 md:px-6">
            <div className="text-left md:text-center max-w-[900px] mx-auto mb-10 md:mb-16 animate-fade-in">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter futuristic-text mb-4 md:mb-6">
                Professionelle Lösung – zum fairen Preis
              </h2>
              <p className="text-lg md:text-xl text-gray-400">
                Mieten Sie monatlich oder kaufen Sie dauerhaft – ganz wie es Ihnen passt.
              </p>
            </div>

            <div className="grid gap-6 md:gap-8 md:grid-cols-2 max-w-[1000px] mx-auto">
              <Card className="gradient-border bg-black animate-scale-in h-full flex flex-col" style={{ animationDelay: "0.1s" }}>
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Monatliches Abonnement</h3>
                  <div className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                    €<span className="text-lg md:text-xl text-gray-400">/Individueller Preis auf Anfrage erhältlich</span>
                  </div>
                  <ul className="space-y-2 md:space-y-3 flex-1">
                    <li className="flex items-start text-sm md:text-base">
                      <div className="mr-3 text-white mt-1">✓</div>
                      <span>Alle Features inklusive</span>
                    </li>
                    <li className="flex items-start text-sm md:text-base">
                      <div className="mr-3 text-white mt-1">✓</div>
                      <span>Unbegrenzte Buchungen</span>
                    </li>
                    <li className="flex items-start text-sm md:text-base">
                      <div className="mr-3 text-white mt-1">✓</div>
                      <span>Regelmäßige Updates</span>
                    </li>
                    <li className="flex items-start text-sm md:text-base">
                      <div className="mr-3 text-white mt-1">✓</div>
                      <span>Technischer Support</span>
                    </li>
                  </ul>
                  <Link href="#kontakt" className="mt-6 md:mt-8">
                    <Button className="w-full button-glow button-animate bg-white text-black hover:bg-gray-200 h-12 md:h-14 text-base md:text-lg">
                      Jetzt starten
                    </Button>
                  </Link>
                </div>
              </Card>

              <Card className="gradient-border bg-black animate-scale-in h-full flex flex-col" style={{ animationDelay: "0.2s" }}>
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Einmaliger Kauf</h3>
                  <div className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                    €<span className="text-lg md:text-xl text-gray-400">/Preis auf Anfrage erhältlich</span>
                  </div>
                  <ul className="space-y-2 md:space-y-3 flex-1">
                    <li className="flex items-start text-sm md:text-base">
                      <div className="mr-3 text-white mt-1">✓</div>
                      <span>Individuelle Anpassung auf Wunsch</span>
                    </li>
                    <li className="flex items-start text-sm md:text-base">
                      <div className="mr-3 text-white mt-1">✓</div>
                      <span>Alle Features inklusive</span>
                    </li>
                    <li className="flex items-start text-sm md:text-base">
                      <div className="mr-3 text-white mt-1">✓</div>
                      <span>Unbegrenzte Buchungen</span>
                    </li>
                    <li className="flex items-start text-sm md:text-base">
                      <div className="mr-3 text-white mt-1">✓</div>
                      <span>Lebenslange Updates</span>
                    </li>
                    <li className="flex items-start text-sm md:text-base">
                      <div className="mr-3 text-white mt-1">✓</div>
                      <span>Lebenslanger Support</span>
                    </li>
                    <li className="flex items-start text-sm md:text-base">
                      <div className="mr-3 text-white mt-1">✓</div>
                      <span>Die App gehört dauerhaft Ihnen – veräußerbar bei Bedarf, mit unserer technischen Unterstützung</span>
                    </li>
                    <li className="flex items-start text-sm md:text-base">
                      <div className="mr-3 text-white mt-1">✓</div>
                      <span>Dauerhafte Veröffentlichung über unsere Apple- & Google-Konten</span>
                    </li>
                  </ul>
                  <Link href="#kontakt" className="mt-6 md:mt-8">
                    <Button className="w-full button-glow button-animate bg-white text-black hover:bg-gray-200 h-12 md:h-14 text-base md:text-lg">
                      Kaufen
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* App Download Section */}
        <section id="app" className="py-16 md:py-24 bg-black">
          <div className="container px-4 md:px-6">
            <div className="text-left md:text-center max-w-[900px] mx-auto mb-10 md:mb-16 animate-fade-in">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter futuristic-text mb-4 md:mb-6">
                Premium-Stil – exklusiv und klar
              </h2>
              <p className="text-lg md:text-xl text-gray-400">
                Ihre App für stilvolle Terminplanung – verfügbar auf.
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-start md:justify-center items-start md:items-center gap-6 md:gap-8 animate-fade-in">
              <AppStoreBadge href="https://apps.apple.com" type="apple" />
              <AppStoreBadge href="https://play.google.com" type="google" />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="kontakt" className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-black">
          <div className="container px-4 md:px-6">
            <div className="text-left md:text-center max-w-[900px] mx-auto mb-10 md:mb-16 animate-fade-in">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter futuristic-text mb-4 md:mb-6">
                Vereinbaren Sie eine Demo oder kontaktieren Sie uns direkt
              </h2>
              <p className="text-lg md:text-xl text-gray-400">
                Möchten Sie sehen, wie die App für Ihren Salon aussehen kann? Schreiben Sie uns oder buchen Sie eine
                kostenlose, unverbindliche Präsentation.
              </p>
            </div>

            <div className="grid gap-6 md:gap-8 md:grid-cols-3 max-w-[1000px] mx-auto text-left md:text-center stagger-animation">
              <Card className="bg-black border border-gray-800 animate-scale-in" style={{ animationDelay: "0.1s" }}>
                <div className="p-6 md:p-8">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gray-900 flex items-center justify-center mb-4 md:mb-6 mx-0 md:mx-auto">
                    <Phone className="h-7 w-7 md:h-8 md:w-8 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Telefon</h3>
                  <a
                    href="tel:+4915752498366"
                    className="text-base md:text-lg text-gray-400 hover:text-white transition-colors"
                  >
                    +49 157 524 98 366
                  </a>
                </div>
              </Card>

              <Card className="bg-black border border-gray-800 animate-scale-in" style={{ animationDelay: "0.2s" }}>
                <div className="p-6 md:p-8">
                  <div className="w-14 h-14 md:w-16 md:w-16 rounded-full bg-gray-900 flex items-center justify-center mb-4 md:mb-6 mx-0 md:mx-auto">
                    <MessageSquare className="h-7 w-7 md:h-8 md:w-8 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">E-Mail</h3>
                  <a
                    href="mailto:info@mkbuchung.de"
                    className="text-base md:text-lg text-gray-400 hover:text-white transition-colors"
                  >
                    info@mkbuchung.de
                  </a>
                </div>
              </Card>

              <Card className="bg-black border border-gray-800 animate-scale-in" style={{ animationDelay: "0.3s" }}>
                <div className="p-6 md:p-8">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gray-900 flex items-center justify-center mb-4 md:mb-6 mx-0 md:mx-auto">
                    <Star className="h-7 w-7 md:h-8 md:w-8 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Instagram</h3>
                  <a
                    href="https://www.instagram.com/mkbuchung.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base md:text-lg text-gray-400 hover:text-white transition-colors"
                  >
                    @mkbuchung.de
                  </a>
                </div>
              </Card>
            </div>

            <div className="mt-10 md:mt-16 text-left md:text-center animate-fade-in">
              <a href="mailto:info@mkbuchung.de?subject=Demo%20Anfrage%20für%20MK%20Dienstleistung">
                <Button className="button-glow button-animate pulse-animation bg-white text-black hover:bg-gray-200 h-12 md:h-14 px-6 md:px-8 text-base md:text-lg">
                  Demo anfragen
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-800 bg-black py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex justify-center md:justify-start items-center mb-4 md:mb-6">
                <Link href="#oben">
                  <Image
                    src="/images/footer-logo.png"
                    alt="MK Dienstleistung Logo"
                    width={250}
                    height={60}
                    className="h-8 md:h-10 w-auto"
                  />
                </Link>
              </div>
              <p className="text-sm md:text-base text-gray-400 max-w-[300px] mx-auto md:mx-0 text-center md:text-left">
                Digitale Lösungen, die Eindruck hinterlassen. Technologie, die für Sie arbeitet.
              </p>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-medium mb-4 md:mb-6">Links</h3>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <Link
                    href="#vorteile"
                    className="text-sm md:text-base text-gray-400 hover:text-white transition-colors"
                  >
                    Vorteile
                  </Link>
                </li>
                <li>
                  <Link
                    href="#funktionen"
                    className="text-sm md:text-base text-gray-400 hover:text-white transition-colors"
                  >
                    Funktionen
                  </Link>
                </li>
                <li>
                  <Link
                    href="#preise"
                    className="text-sm md:text-base text-gray-400 hover:text-white transition-colors"
                  >
                    Preise
                  </Link>
                </li>
                <li>
                  <Link
                    href="#kontakt"
                    className="text-sm md:text-base text-gray-400 hover:text-white transition-colors"
                  >
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-medium mb-4 md:mb-6">Kontakt</h3>
              <ul className="space-y-2 md:space-y-3">
                <li className="text-sm md:text-base text-gray-400">
                  <a
                    href="https://maps.google.com/?q=Sontraer+Str.+17,+60386+Frankfurt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Sontraer Str. 17, 60386 Frankfurt
                  </a>
                </li>
                <li className="text-sm md:text-base text-gray-400">
                  <a href="tel:+4915752498366" className="hover:text-white transition-colors">
                    +49 157 524 98 366
                  </a>
                </li>
                <li className="text-sm md:text-base text-gray-400">
                  <a href="mailto:info@mkbuchung.de" className="hover:text-white transition-colors">
                    info@mkbuchung.de
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-medium mb-4 md:mb-6">Rechtliches</h3>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <ImpressumDialog />
                </li>
                <li>
                  <DatenschutzDialog />
                </li>
                <li>
                  <AGBDialog />
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center md:items-center gap-4">
            <p className="text-xs md:text-sm text-gray-400 text-center md:text-left w-full md:w-auto">© 2025 MK Dienstleistung. Alle Rechte vorbehalten.</p>
            <div className="flex items-center justify-center md:justify-start w-full md:w-auto">
              <span className="text-xs md:text-sm text-gray-400">Designed und entwickelt von </span>
              <a
                href="https://petarmiodrag2.xyz/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center ml-1 text-xs md:text-sm text-gray-300 hover:text-white transition-colors"
              >
                @petarmiodrag2
                <span className="inline-flex ml-1 text-blue-400">
                  <BadgeCheck className="h-4 w-4" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
