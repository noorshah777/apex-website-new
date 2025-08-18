"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { BarChart3, Building, GraduationCap, Users, CalendarCheck, LibraryBig } from "lucide-react"
import PresidentsWelcome from "@/components/presidents-welcome"

export default function ScrollSection() {
  // Stats data
  const stats = [
    { icon: Users, value: "50+", label: "Members" },
    { icon: GraduationCap, value: "130+", label: "Alumni" },
    { icon: Building, value: "150+", label: "Businesses Served" },
    { icon: CalendarCheck, value: "13", label: "Years of Experience" },
    { icon: LibraryBig, value: "20+", label: "Different Majors" },
  ]

  // Welcome section with fade-in animation
  const [welcomeRef, welcomeInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  // Video section with fade-in animation
  const [videoRef, videoInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  // Stats section with counter animation
  const [statsRef, statsInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  // President's Welcome section with fade-in animation
  const [presidentRef, presidentInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  // Animation for counting up stats
  const [countedStats, setCountedStats] = useState(stats.map(() => 0))
  const statsAnimationRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (statsInView) {
      // Clear any existing animation
      if (statsAnimationRef.current) {
        clearTimeout(statsAnimationRef.current)
      }

      // Animate the stats counting up
      const targetValues = stats.map((stat) => Number.parseInt(stat.value.replace(/\D/g, "")))
      const duration = 2000 // 2 seconds
      const steps = 30
      const interval = duration / steps

      let step = 0
      const animate = () => {
        step++
        const progress = Math.min(step / steps, 1)

        setCountedStats(targetValues.map((target) => Math.floor(target * progress)))

        if (step < steps) {
          statsAnimationRef.current = setTimeout(animate, interval)
        }
      }

      animate()
    } else {
      // Reset stats when out of view
      setCountedStats(stats.map(() => 0))
    }

    return () => {
      if (statsAnimationRef.current) {
        clearTimeout(statsAnimationRef.current)
      }
    }
  }, [statsInView])

  return (
    <div className="relative bg-white dark:bg-gray-900">
      {/* Welcome to APEX Section */}
      <section
        ref={welcomeRef}
        className={cn(
          "py-20 md:py-32 transition-all duration-1000 transform",
          welcomeInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20",
        )}
      >
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter bg-gradient-to-r from-apex-red to-red-700 bg-clip-text text-transparent">
              Welcome to APEX
            </h2>
            <div className="h-1 w-20 bg-apex-red mx-auto"></div>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              APEX Consulting Group is a pro-bono student-led consulting organization at the University of Michigan.
              With 50 current members hailing from diverse academic and personal backgrounds and 100+ alumni strong,
              APEX has served over 130 local businesses, innovative startups, and industry leaders all around the
              country through semester-long projects, providing clients with data-driven, strategic, and growth-oriented
              recommendations and impact.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              Along with these projects, APEX aids members in securing the professional and personal development they
              need to succeed in any field or industry through hands-on experience, mentorship, and consulting treks,
              all while being surrounded by an empathetic, family-like community.
            </p>
          </div>
        </div>
      </section>

      {/* Hype Video Section */}
      <section
        ref={videoRef}
        className={cn(
          "py-20 md:py-32 bg-gray-50 dark:bg-gray-800 transition-all duration-1000 transform",
          videoInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20",
        )}
      >
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">See APEX in Action</h2>
            <div className="h-1 w-20 bg-apex-red mx-auto"></div>

            <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden shadow-xl">
              <video
                className="w-full h-full object-cover"
                controls
                preload="auto"
                poster="/images/hypevidthumbnailw25.JPG"
              >
                <source src="/videos/W25hypevid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics Section */}
      <section
        ref={statsRef}
        className={cn(
          "py-20 md:py-32 transition-all duration-1000 transform",
          statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20",
        )}
      >
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto text-center space-y-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">Our Impact</h2>
              <div className="h-1 w-20 bg-apex-red mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-5 gap-6 md:gap-10">
              {stats.map((stat, index) => (
                  <Card
                    key={index}
                    className="border-none shadow-lg overflow-hidden group hover:bg-apex-red hover:text-white hover:shadow-xl transition-all"
                  >
                    <CardContent className="p-6 text-center relative z-10 transition-colors duration-300">

                    <stat.icon className="h-8 w-8 mx-auto mb-2 text-apex-red group-hover:text-white transition-colors duration-300" />
                    <div className="text-3xl font-bold">
                      {statsInView ? (
                        <>
                          {countedStats[index]}
                          {stat.value.includes("+") && "+"}
                        </>
                      ) : (
                        "0"
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground group-hover:text-white/90 transition-colors duration-300">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* President's Welcome Section */}
      <div
        ref={presidentRef}
        className={cn(
          "transition-all duration-1000 transform",
          presidentInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20",
        )}
      >
        <PresidentsWelcome />
      </div>
    </div>
  )
}
