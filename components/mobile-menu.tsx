"use client"

import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden rotate-animation">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-black border-gray-800 flex flex-col">
        <div className="flex justify-start mt-6 mb-10">
          <Image
            src="/images/header-logo.png"
            alt="MK Dienstleistung Logo"
            width={180}
            height={50}
            className="h-12 w-auto"
          />
        </div>

        <nav className="flex flex-col gap-6 stagger-animation flex-1 text-left">
          <Link
            href="#vorteile"
            className="text-xl font-medium text-gray-300 hover:text-white transition-colors"
            onClick={closeMenu}
          >
            Vorteile
          </Link>
          <Link
            href="#funktionen"
            className="text-xl font-medium text-gray-300 hover:text-white transition-colors"
            onClick={closeMenu}
          >
            Funktionen
          </Link>
          <Link
            href="#preise"
            className="text-xl font-medium text-gray-300 hover:text-white transition-colors"
            onClick={closeMenu}
          >
            Preise
          </Link>
          <Link
            href="#kontakt"
            className="text-xl font-medium text-gray-300 hover:text-white transition-colors"
            onClick={closeMenu}
          >
            Kontakt
          </Link>
        </nav>

        <div className="mt-auto mb-8">
          <Link href="#kontakt" onClick={closeMenu}>
            <Button className="button-glow button-animate bg-white text-black hover:bg-gray-200 w-full">
              Demo anfragen
            </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}
