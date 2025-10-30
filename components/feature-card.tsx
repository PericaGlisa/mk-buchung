import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface FeatureCardProps {
  title: string
  description: string
  icon: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export function FeatureCard({ title, description, icon, className = "", style }: FeatureCardProps) {
  return (
    <Card 
      className={`feature-card bg-black border border-gray-800 hover:border-gray-700 transition-all duration-300 h-[280px] sm:h-[300px] md:h-[320px] flex flex-col relative overflow-hidden ${className}`} 
      style={style}
    >
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{
             backgroundImage: `linear-gradient(to right, rgb(75, 75, 75) 1px, transparent 1px),
                              linear-gradient(to bottom, rgb(75, 75, 75) 1px, transparent 1px)`,
             backgroundSize: '20px 20px'
           }}
      />
      <CardHeader className="pb-2 text-left relative">
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gray-900 flex items-center justify-center mb-3 sm:mb-4 md:mb-6 rotate-animation continuous-float">
          {icon}
        </div>
        <CardTitle className="text-[20px] sm:text-[24px] font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex items-start relative">
        <CardDescription className="text-base sm:text-base md:text-lg text-gray-400">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}
