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
    <Card className={`feature-card bg-black border border-gray-800 hover:border-gray-700 ${className}`} style={style}>
      <CardHeader className="pb-2 text-left">
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gray-900 flex items-center justify-center mb-4 md:mb-6 rotate-animation continuous-float">
          {icon}
        </div>
        <CardTitle className="text-lg md:text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base md:text-lg text-gray-400">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}
