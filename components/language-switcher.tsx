"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"

type Language = {
  code: string
  name: string
  flag: string
}

const languages: Language[] = [
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "en", name: "English", flag: "🇬🇧" },
]

export function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const [currentLang, setCurrentLang] = useState<string>("de")

  useEffect(() => {
    // Get the language from localStorage or default to 'de'
    const savedLang = localStorage.getItem("language") || "de"
    setCurrentLang(savedLang)
  }, [])

  const switchLanguage = (langCode: string) => {
    localStorage.setItem("language", langCode)
    setCurrentLang(langCode)
    
    // Reload the page to apply the language change
    window.location.reload()
  }

  const getCurrentLanguage = () => {
    return languages.find((lang) => lang.code === currentLang) || languages[0]
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full w-9 h-9 md:w-9 md:h-9 w-11 h-11 flex items-center justify-center">
          <Globe className="h-6 w-6 md:h-5 md:w-5" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-gray-900 border-gray-800">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            className={`flex items-center gap-2 cursor-pointer ${currentLang === lang.code ? 'bg-gray-800' : ''}`}
            onClick={() => switchLanguage(lang.code)}
          >
            <span>{lang.flag}</span>
            <span>{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}