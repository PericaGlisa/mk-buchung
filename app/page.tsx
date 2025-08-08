"use client"

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
import { useLanguage } from "@/contexts/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"
import { DynamicMetadata } from "@/components/dynamic-metadata"

export default function Home() {
  const { messages } = useLanguage()
  
  return (
    <div id="oben" className="flex min-h-screen flex-col overflow-x-hidden">
      <DynamicMetadata />
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800 bg-black/80 backdrop-blur-md">
        <div className="container flex h-20 items-center justify-between">
          {/* Linke Seite - Navigation */}
          <nav className="hidden md:flex gap-8">
            <Link href="#vorteile" className="text-base font-medium text-gray-300 hover:text-white transition-colors">
              {messages.navigation.advantages}
            </Link>
            <Link href="#funktionen" className="text-base font-medium text-gray-300 hover:text-white transition-colors">
              {messages.navigation.features}
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
          <div className="flex items-center gap-8">
            <nav className="hidden md:flex gap-8">
              <Link href="#preise" className="text-base font-medium text-gray-300 hover:text-white transition-colors">
                {messages.navigation.prices}
              </Link>
              <Link href="#kontakt" className="text-base font-medium text-gray-300 hover:text-white transition-colors">
                {messages.navigation.contact}
              </Link>
            </nav>
            <Link href="#kontakt" className="hidden md:inline-flex">
              <Button className="button-glow bg-white text-black hover:bg-gray-200">{messages.navigation.requestDemo}</Button>
            </Link>
            <LanguageSwitcher />
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
                  {messages.hero.tagline}
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter futuristic-text text-glow leading-tight">
                  {messages.language === "de" ? (
                    <><strong>Terminbuchung</strong>, die Eindruck hinterlässt</>
                  ) : (
                    <><strong>Appointment Booking</strong> that Makes an Impression</>
                  )}
                </h1>
                <p className="text-lg md:text-xl text-gray-400 max-w-[700px] mt-6">
                  {messages.hero.description1}
                </p>
                <p className="text-lg md:text-xl text-gray-400 max-w-[700px]">
                  {messages.hero.description2}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-8">
                  <Link href="#vorteile">
                    <Button className="button-glow button-animate bg-white text-black hover:bg-gray-200 h-14 px-8 text-lg animate-bounce-subtle">
                      {messages.hero.startButton}
                    </Button>
                  </Link>
                  <Link href="#funktionen">
                    <Button
                      variant="outline"
                      className="border-gray-700 hover:bg-gray-900 h-14 px-8 text-lg button-animate"
                    >
                      {messages.hero.learnMoreButton}
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
                    alt={messages.language === "de" ? "Marcus Klein App Terminbestätigung" : "Marcus Klein App Appointment Confirmation"}
                    width={900}
                    height={1300}
                    className="relative w-full h-auto"
                  />
                </div>
              </div>
              <div className="space-y-4 md:space-y-6 order-1 lg:order-2 animate-fade-in text-left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter futuristic-text">
                  {messages.about.title}
                </h2>
                <p className="text-lg md:text-xl text-gray-400">
                  {messages.about.description1}
                </p>
                <p className="text-lg md:text-xl text-gray-400">
                  {messages.about.description2}
                </p>
                <p className="text-lg md:text-xl text-gray-400">
                  {messages.about.description3}
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
                {messages.benefits.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-400">
                {messages.benefits.subtitle}
              </p>
            </div>

            <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 stagger-animation">
              <Card className="gradient-border bg-black animate-scale-in" style={{ animationDelay: "0.1s" }}>
                <div className="p-6 md:p-8">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gray-900 flex items-center justify-center mb-4 md:mb-6">
                    <Calendar className="h-7 w-7 md:h-8 md:w-8 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{messages.benefits.betterPlanning.title}</h3>
                  <p className="text-base md:text-lg text-gray-400">
                    {messages.benefits.betterPlanning.description}
                  </p>
                </div>
              </Card>

              <Card className="gradient-border bg-black animate-scale-in" style={{ animationDelay: "0.2s" }}>
                <div className="p-6 md:p-8">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gray-900 flex items-center justify-center mb-4 md:mb-6">
                    <MessageSquare className="h-7 w-7 md:h-8 md:w-8 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{messages.benefits.noCalls.title}</h3>
                  <p className="text-base md:text-lg text-gray-400">
                    {messages.benefits.noCalls.description}
                  </p>
                </div>
              </Card>

              <Card className="gradient-border bg-black animate-scale-in" style={{ animationDelay: "0.3s" }}>
                <div className="p-6 md:p-8">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gray-900 flex items-center justify-center mb-4 md:mb-6">
                    <Bell className="h-7 w-7 md:h-8 md:w-8 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{messages.benefits.autoReminders.title}</h3>
                   <p className="text-base md:text-lg text-gray-400">
                     {messages.benefits.autoReminders.description}
                   </p>
                </div>
              </Card>
            </div>

            <div className="mt-10 md:mt-16 text-left md:text-center animate-fade-in">
              <p className="text-xl md:text-2xl text-gray-300 mb-6 md:mb-8">
                {messages.benefits.tagline}
              </p>
              <Link href="#funktionen">
                <Button className="button-glow button-animate bg-white text-black hover:bg-gray-200 h-12 md:h-14 px-6 md:px-8 text-base md:text-lg">
                  {messages.navigation.learnMore}
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
                {messages.features.title}
              </h2>
            </div>

            {/* Erste Reihe: 3 Karten */}
            <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 stagger-animation">
              <FeatureCard
                title={messages.features.noCallsMessages.title}
                description={messages.features.noCallsMessages.description}
                icon={<Phone className="h-7 w-7 md:h-8 md:w-8 text-white" />}
                className="animate-scale-in"
                style={{ animationDelay: "0.1s" }}
              />

              <FeatureCard
                title={messages.features.loyaltyProgram.title}
                description={messages.features.loyaltyProgram.description}
                icon={<Gift className="h-7 w-7 md:h-8 md:w-8 text-white" />}
                className="animate-scale-in"
                style={{ animationDelay: "0.2s" }}
              />

              <FeatureCard
                title={messages.features.flexibleWorkTime.title}
                description={messages.features.flexibleWorkTime.description}
                icon={<Clock className="h-7 w-7 md:h-8 md:w-8 text-white" />}
                className="animate-scale-in"
                style={{ animationDelay: "0.3s" }}
              />
            </div>

            {/* Zweite Reihe: 3 Karten */}
            <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 stagger-animation mt-6 md:mt-8">
              <FeatureCard
                title={messages.features.retainCustomers.title}
                description={messages.features.retainCustomers.description}
                icon={<BadgeCheck className="h-7 w-7 md:h-8 md:w-8 text-white" />}
                className="animate-scale-in"
                style={{ animationDelay: "0.4s" }}
              />

              <FeatureCard
                title={messages.features.workHoursVacation.title}
                 description={messages.features.workHoursVacation.description}
                icon={<Calendar className="h-7 w-7 md:h-8 md:w-8 text-white" />}
                className="animate-scale-in"
                style={{ animationDelay: "0.5s" }}
              />

              <FeatureCard
                title={messages.features.enterServices.title}
                 description={messages.features.enterServices.description}
                icon={<LayoutGrid className="h-7 w-7 md:h-8 md:w-8 text-white" />}
                className="animate-scale-in"
                style={{ animationDelay: "0.6s" }}
              />
            </div>

            {/* Dritte Reihe: 4 Karten */}
            <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 stagger-animation mt-6 md:mt-8">
              <FeatureCard
                title={messages.features.priceForEveryone.title}
                description={messages.features.priceForEveryone.description}
                icon={<Star className="h-7 w-7 md:h-8 md:w-8 text-white" />}
                className="animate-scale-in"
                style={{ animationDelay: "0.7s" }}
              />

              <FeatureCard
                title={messages.features.quickBooking.title}
                description={messages.features.quickBooking.description}
                icon={<Calendar className="h-7 w-7 md:h-8 md:w-8 text-white" />}
                className="animate-scale-in"
                style={{ animationDelay: "0.8s" }}
              />

              <FeatureCard
                title={messages.features.productSales.title}
                description={messages.features.productSales.description}
                icon={<ShoppingBag className="h-7 w-7 md:h-8 md:w-8 text-white" />}
                className="animate-scale-in"
                style={{ animationDelay: "0.9s" }}
              />

              <FeatureCard
                title={messages.features.exclusiveOffers.title}
                description={messages.features.exclusiveOffers.description}
                icon={<Gift className="h-7 w-7 md:h-8 md:w-8 text-white" />}
                className="animate-scale-in"
                style={{ animationDelay: "1s" }}
              />
            </div>

            {/* Vierte Reihe: 4 Karten */}
            <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4 mt-6 md:mt-8 stagger-animation">
              <FeatureCard
                title={messages.features.paymentOnSite.title}
                description={messages.features.paymentOnSite.description}
                icon={<CreditCard className="h-7 w-7 md:h-8 md:w-8 text-white" />}
                className="animate-scale-in"
                style={{ animationDelay: "1.1s" }}
              />

              <FeatureCard
                title={messages.features.smartWaitlist.title}
                description={messages.features.smartWaitlist.description}
                icon={<LayoutGrid className="h-7 w-7 md:h-8 md:w-8 text-white" />}
                className="animate-scale-in"
                style={{ animationDelay: "1.2s" }}
              />

              <FeatureCard
                title={messages.features.notifications.title}
                description={messages.features.notifications.description}
                icon={<Bell className="h-7 w-7 md:h-8 md:w-8 text-white" />}
                className="animate-scale-in"
                style={{ animationDelay: "1.3s" }}
              />

              <FeatureCard
                title={messages.features.customBranding.title}
                description={messages.features.customBranding.description}
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
                  {messages.showcase.title}
                </h2>
                <p className="text-lg md:text-xl text-gray-400">
                  {messages.showcase.description}
                </p>
                <div className="pt-4 md:pt-6">
                  <Link href="#preise">
                    <Button className="button-glow button-animate bg-white text-black hover:bg-gray-200 h-12 md:h-14 px-6 md:px-8 text-base md:text-lg">
                      {messages.showcase.showPrices}
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
                {messages.pricing.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-400">
                {messages.pricing.subtitle}
              </p>
            </div>

            <div className="grid gap-6 md:gap-8 md:grid-cols-2 max-w-[1000px] mx-auto">
              <Card className="gradient-border bg-black animate-scale-in h-full flex flex-col" style={{ animationDelay: "0.1s" }}>
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">{messages.pricing.monthly.title}</h3>
                  <div className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                    <span className="text-lg md:text-xl text-gray-400">{messages.pricing.monthly.price}</span>
                  </div>
                  <ul className="space-y-2 md:space-y-3 flex-1">
                    <li className="flex items-start text-sm md:text-base">
                      <div className="mr-3 text-white mt-1">✓</div>
                      <span>{messages.pricing.monthly.features[0]}</span>
                    </li>
                    <li className="flex items-start text-sm md:text-base">
                      <div className="mr-3 text-white mt-1">✓</div>
                      <span>{messages.pricing.monthly.features[1]}</span>
                    </li>
                    <li className="flex items-start text-sm md:text-base">
                      <div className="mr-3 text-white mt-1">✓</div>
                      <span>{messages.pricing.monthly.features[2]}</span>
                    </li>
                    <li className="flex items-start text-sm md:text-base">
                      <div className="mr-3 text-white mt-1">✓</div>
                      <span>{messages.pricing.monthly.features[3]}</span>
                    </li>
                  </ul>
                  <Link href="#kontakt" className="mt-6 md:mt-8">
                    <Button className="w-full button-glow button-animate bg-white text-black hover:bg-gray-200 h-12 md:h-14 text-base md:text-lg">
                      {messages.pricing.monthly.button}
                    </Button>
                  </Link>
                </div>
              </Card>

              <Card className="gradient-border bg-black animate-scale-in h-full flex flex-col" style={{ animationDelay: "0.2s" }}>
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">{messages.pricing.oneTime.title}</h3>
                  <div className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                    <span className="text-lg md:text-xl text-gray-400">{messages.pricing.oneTime.price}</span>
                  </div>
                  <ul className="space-y-2 md:space-y-3 flex-1">
                    <li className="flex items-start text-sm md:text-base">
                      <div className="mr-3 text-white mt-1">✓</div>
                      <span>{messages.pricing.oneTime.features[0]}</span>
                    </li>
                    <li className="flex items-start text-sm md:text-base">
                      <div className="mr-3 text-white mt-1">✓</div>
                      <span>{messages.pricing.oneTime.features[1]}</span>
                    </li>
                    <li className="flex items-start text-sm md:text-base">
                      <div className="mr-3 text-white mt-1">✓</div>
                      <span>{messages.pricing.oneTime.features[2]}</span>
                    </li>
                    <li className="flex items-start text-sm md:text-base">
                      <div className="mr-3 text-white mt-1">✓</div>
                      <span>{messages.pricing.oneTime.features[3]}</span>
                    </li>
                    <li className="flex items-start text-sm md:text-base">
                      <div className="mr-3 text-white mt-1">✓</div>
                      <span>{messages.pricing.oneTime.features[4]}</span>
                    </li>
                    <li className="flex items-start text-sm md:text-base">
                      <div className="mr-3 text-white mt-1">✓</div>
                      <span>{messages.pricing.oneTime.features[5]}</span>
                    </li>
                    <li className="flex items-start text-sm md:text-base">
                      <div className="mr-3 text-white mt-1">✓</div>
                      <span>{messages.pricing.oneTime.features[6]}</span>
                    </li>
                  </ul>
                  <Link href="#kontakt" className="mt-6 md:mt-8">
                    <Button className="w-full button-glow button-animate bg-white text-black hover:bg-gray-200 h-12 md:h-14 text-base md:text-lg">
                      {messages.pricing.oneTime.button}
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
                {messages.appDownload.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-400">
                {messages.appDownload.subtitle}
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
                {messages.contact.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-400">
                {messages.contact.subtitle}
              </p>
            </div>

            <div className="grid gap-6 md:gap-8 md:grid-cols-3 max-w-[1000px] mx-auto text-left md:text-center stagger-animation">
              <Card className="bg-black border border-gray-800 animate-scale-in" style={{ animationDelay: "0.1s" }}>
                <div className="p-6 md:p-8">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gray-900 flex items-center justify-center mb-4 md:mb-6 mx-0 md:mx-auto">
                    <Phone className="h-7 w-7 md:h-8 md:w-8 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{messages.contact.phone}</h3>
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
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{messages.contact.email}</h3>
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
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{messages.contact.instagram}</h3>
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
                  {messages.contact.requestDemo}
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
                {messages.footer.description}
              </p>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-medium mb-4 md:mb-6">{messages.footer.links}</h3>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <Link
                    href="#vorteile"
                    className="text-sm md:text-base text-gray-400 hover:text-white transition-colors"
                  >
                    {messages.navigation.advantages}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#funktionen"
                    className="text-sm md:text-base text-gray-400 hover:text-white transition-colors"
                  >
                    {messages.navigation.features}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#preise"
                    className="text-sm md:text-base text-gray-400 hover:text-white transition-colors"
                  >
                    {messages.navigation.prices}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#kontakt"
                    className="text-sm md:text-base text-gray-400 hover:text-white transition-colors"
                  >
                    {messages.navigation.contact}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-medium mb-4 md:mb-6">{messages.footer.contact}</h3>
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
              <h3 className="text-base md:text-lg font-medium mb-4 md:mb-6">{messages.footer.legal}</h3>
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
            <p className="text-xs md:text-sm text-gray-400 text-center md:text-left w-full md:w-auto">{messages.footer.copyright}</p>
            <div className="flex items-center justify-center md:justify-start w-full md:w-auto">
              <span className="text-xs md:text-sm text-gray-400">{messages.footer.designedBy} </span>
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
