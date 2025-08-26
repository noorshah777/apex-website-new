"use client"
import ParticlesBackground from "@/components/particles-background"
import TypingEffect from "@/components/typing-effect"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface PageHeaderProps {
  title: string
  descriptions: string[]
  className?: string
  ctaButton?: {
    text: string
    href: string
    variant?: "default" | "outline" | "secondary"
  }
}

export default function PageHeader({ title, descriptions, className = "", ctaButton }: PageHeaderProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Particle Background */}
      <ParticlesBackground className="absolute inset-0 -z-10" />

      {/* Content */}
      <div className="relative py-16 md:py-24">
        <div className="container px-4 sm:px-5 md:px-6">
          <div className="flex flex-col items-center text-center space-y-6 max-w-full sm:max-w-3xl mx-auto">
            
            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tighter text-white">
              {title}
            </h1>
            
            {/* Typing effect container */}
            <div className="w-full text-center px-2 sm:px-4">
              <TypingEffect 
                texts={descriptions} 
                className="text-sm sm:text-base md:text-xl font-medium text-white break-words"
              />
            </div>

            {/* CTA button */}
            {ctaButton && (
              <Button
                asChild
                size="lg"
                variant={ctaButton.variant || "default"}
                className="bg-white text-apex-red hover:bg-white/90 font-bold text-base sm:text-lg px-4 sm:px-6 py-3 sm:py-5 shadow-lg"
              >
                <Link href={ctaButton.href}>{ctaButton.text}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
