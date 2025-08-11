"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

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
  const { language, setLanguage } = useLanguage()

  const switchLanguage = (langCode: string) => {
    setLanguage(langCode)
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
            className={`flex items-center gap-2 cursor-pointer ${language === lang.code ? 'bg-gray-800' : ''}`}
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