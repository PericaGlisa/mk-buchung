"use client"

import React, { createContext, useState, useContext, useEffect, ReactNode } from "react"
import deMessages from "@/messages/de.json"
import enMessages from "@/messages/en.json"

type Messages = typeof deMessages

type LanguageContextType = {
  language: string
  setLanguage: (lang: string) => void
  messages: Messages
}

const defaultContext: LanguageContextType = {
  language: "de",
  setLanguage: () => {},
  messages: deMessages,
}

const LanguageContext = createContext<LanguageContextType>(defaultContext)

export const useLanguage = () => useContext(LanguageContext)

type LanguageProviderProps = {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState("de")
  const [messages, setMessages] = useState<Messages>(deMessages)

  useEffect(() => {
    // Get the language from localStorage, browser language, or default to 'de'
    const savedLang = localStorage.getItem("language")
    
    if (savedLang) {
      // Use saved language preference
      setLanguage(savedLang)
    } else {
      // Auto-detect language based on browser language
      const browserLang = navigator.language || navigator.languages?.[0] || "de"
      
      // Check if browser language is English or from English-speaking countries
      const isEnglish = browserLang.startsWith("en") || 
                       browserLang.includes("US") || 
                       browserLang.includes("GB") || 
                       browserLang.includes("AU") || 
                       browserLang.includes("CA") || 
                       browserLang.includes("NZ") || 
                       browserLang.includes("IE") || 
                       browserLang.includes("ZA")
      
      const detectedLang = isEnglish ? "en" : "de"
      setLanguage(detectedLang)
      
      // Save the detected language to localStorage for future visits
      localStorage.setItem("language", detectedLang)
    }
  }, [])

  useEffect(() => {
    // Update messages when language changes
    if (language === "en") {
      setMessages(enMessages)
    } else {
      setMessages(deMessages)
    }
    
    // Update html lang attribute
    document.documentElement.lang = language
  }, [language])

  const handleSetLanguage = (lang: string) => {
    localStorage.setItem("language", lang)
    setLanguage(lang)
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        messages,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}