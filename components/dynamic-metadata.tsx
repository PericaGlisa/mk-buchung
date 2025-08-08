"use client"

import { useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"

export function DynamicMetadata() {
  const { messages, language } = useLanguage()

  useEffect(() => {
    // Update document title
    document.title = messages.metadata.title

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', messages.metadata.description)
    } else {
      const newMetaDescription = document.createElement('meta')
      newMetaDescription.name = 'description'
      newMetaDescription.content = messages.metadata.description
      document.head.appendChild(newMetaDescription)
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) {
      metaKeywords.setAttribute('content', messages.metadata.keywords)
    } else {
      const newMetaKeywords = document.createElement('meta')
      newMetaKeywords.name = 'keywords'
      newMetaKeywords.content = messages.metadata.keywords
      document.head.appendChild(newMetaKeywords)
    }

    // Update Open Graph title
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) {
      ogTitle.setAttribute('content', messages.metadata.openGraph.title)
    } else {
      const newOgTitle = document.createElement('meta')
      newOgTitle.setAttribute('property', 'og:title')
      newOgTitle.content = messages.metadata.openGraph.title
      document.head.appendChild(newOgTitle)
    }

    // Update Open Graph description
    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) {
      ogDescription.setAttribute('content', messages.metadata.openGraph.description)
    } else {
      const newOgDescription = document.createElement('meta')
      newOgDescription.setAttribute('property', 'og:description')
      newOgDescription.content = messages.metadata.openGraph.description
      document.head.appendChild(newOgDescription)
    }

    // Update Open Graph image alt
    const ogImageAlt = document.querySelector('meta[property="og:image:alt"]')
    if (ogImageAlt) {
      ogImageAlt.setAttribute('content', messages.metadata.openGraph.imageAlt)
    } else {
      const newOgImageAlt = document.createElement('meta')
      newOgImageAlt.setAttribute('property', 'og:image:alt')
      newOgImageAlt.content = messages.metadata.openGraph.imageAlt
      document.head.appendChild(newOgImageAlt)
    }

    // Update Twitter title
    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    if (twitterTitle) {
      twitterTitle.setAttribute('content', messages.metadata.twitter.title)
    } else {
      const newTwitterTitle = document.createElement('meta')
      newTwitterTitle.name = 'twitter:title'
      newTwitterTitle.content = messages.metadata.twitter.title
      document.head.appendChild(newTwitterTitle)
    }

    // Update Twitter description
    const twitterDescription = document.querySelector('meta[name="twitter:description"]')
    if (twitterDescription) {
      twitterDescription.setAttribute('content', messages.metadata.twitter.description)
    } else {
      const newTwitterDescription = document.createElement('meta')
      newTwitterDescription.name = 'twitter:description'
      newTwitterDescription.content = messages.metadata.twitter.description
      document.head.appendChild(newTwitterDescription)
    }

    // Update html lang attribute
    document.documentElement.lang = language === 'en' ? 'en' : 'de'

  }, [messages, language])

  return null // This component doesn't render anything
}