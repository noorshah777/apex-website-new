"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { cn } from "@/lib/utils"
import PageHeader from "@/components/page-header"

// Alumni testimonials
const testimonials = [
  {
    name: "Kushal Sanjeev",
    role: "Associate Consultant",
    company: "Bain & Company",
    year: "2024",
    image: "/images/alumni-testimonials/KushalS.jpg",
    quote:
      "It's tough to describe the impact that APEX has had on my life - the community, mentorship, personal and professional development have all been foundations of my growth in college. During my time in APEX, I got to work not only with products I use every day, but with new, innovative startups across the country. Collaborating on real, impactful projects with driven and brilliant people motivated me to accelerate my learning and continue that same trajectory in a post-grad consulting role. Looking back, I remember the countless laughs, late-night bondings, and all the hard work we put in. The friends and memories made are truly unique and will always make APEX something I am always grateful for!"

  },

  {
    name: "Jaden Douglas",
    role: "Business Analyst",
    company: "McKinsey & Company",
    year: "2025",
    image: "/images/alumni-testimonials/JadenD.JPG",
    quote:
      "APEX has seriously meant the world to me! I’ve grown so much — whether it was learning how to network or figuring out how to make an impactful slide deck, I feel more than ready to jump into my full-time consulting job. But honestly, the best part has been the memories I’ve made with my best friends — flag football, retreat, consulting club date parties — it’s been such a fun ride and I’m so grateful for it all!",
  },

  {
    name: "Aarvi Shah",
    role: "Product Manager",
    company: "Salesforce",
    year: "2024",
    image: "/images/alumni-testimonials/AarviS.jpg",
    quote:
      "APEX was more than just a college organization–it’s family. The mentors I gained are still some of the first people I turn to even after graduation, and the friendships I made are lifelong. I credit so much of my personal and professional growth to this community. Working alongside some of the most driven, thoughtful people on campus sharpened my problem-solving and communication skills in ways the classroom never could, and gave me the confidence to navigate complex, ambiguous challenges after college. APEX set the standard for the kind of communities and work cultures I strive to build today.",
  },

  {
    name: "Tayla Jankowski",
    role: "Management Consulting Associate",
    company: "PwC",
    year: "2025",
    image: "/images/alumni-testimonials/TaylaJ.jpeg",
    quote:
      "APEX was one of the most foundational parts of my college experience—from providing me exposure to real companies whose products I actually use, to working with some of the most intelligent people on campus—which made the work feel incredibly meaningful. I learned how technology and business can be used to solve problems in everything from wearable fitness technology, food delivery platforms, major league sports teams, and more. I currently work as a consultant in New York, and I can’t imagine my college experience or transition to a new city without APEX and the lifelong friends I made within it.",
  },
  {
    name: "Ronith Ganjigunta",
    role: "Software Engineering",
    company: "Amazon",
    year: "2025",
    image: "/images/alumni-testimonials/RonithG.jpg",
    quote:
      "APEX has been one of the most meaningful parts of my college journey. Working on real client projects taught me how to solve complex problems, collaborate under pressure, and deliver results—skills that translate directly to software engineering. From late-night work sessions to spontaneous team dinners, the experience pushed me beyond the classroom and left me with lasting friendships and memories.",
    },

  {
    name: "David Hargitt",
    role: "Associate",
    company: "Bain & Company",
    year: "2023",
    image: "/images/alumni-testimonials/DavidH.jpg",
    quote:
      "APEX has always been a supportive sanctuary for me to learn, lead, and laugh alongside driven and dedicated friends who push me to be the best version of myself every day. APEX provided not only the skills needed to secure my full time job and make a living, but also the support system and friendships to make a life. Whether that’s as a freshman soaking up what it means to be a leader in business and delivering results for our clients, or as a senior giving back and investing in mentorship, the APEX experience was richly impactful and enhanced each aspect of my college journey!",
    },

  {
    name: "Emma Putti",
    role: "Program Manager",
    company: "Microsoft",
    year: "2025",
    image: "/images/alumni-testimonials/EmmaP.jpg",
    quote:
      "I’m so thankful to have had the APEX community with me during my time in college. Even though I decided to not go into consulting, working directly with a real client, leading a team as a project manager, and learning how to strategically solve business problems, was invaluable in my role as a program manager. I also wouldn’t have known I could go into program management at a tech company if it wasn’t for an APEX alumni who taught me all about it. I can say without a doubt that I would not be where I am today personally or professionally without the wonderful people of APEX Consulting Group."
    },

  {
    name: "Riya Chakravarty",
    role: "Software Engineer",
    company: "Palantir",
    year: "2025",
    image: "/images/alumni-testimonials/RiyaC.jpg",
    quote:
      "As a computer science student, I’ve had many opportunities to develop my technical skills through coursework and projects. However, through APEX, I found a tight-knit community of diverse, driven individuals who would challenge and support me in new ways. APEX helped me grow my soft skills by working directly with clients to make a real-world impact and taught me how to break down large-scale problems into smaller, solvable ones. I also got to explore industries I’ve always been curious about—such as telehealth and pharmaceuticals. APEX has not only provided me with invaluable project experience but also helped me build relationships and skills that will continue to shape my career and personal growth."
    },

  {
    name: "Taewoong Seo",
    role: "Product Manager",
    company: "CareEvolution",
    year: "2025",
    image: "/images/alumni-testimonials/TaewoongS.jpg",
    quote:
      "APEX Consulting Group defined my professional path and gave me early exposure to real-world consulting and business challenges. I worked on a wide variety of projects — from revamping customer experience for a local restaurant chain in Ann Arbor, to helping a solar vehicle startup secure funding, streamlining operations for a pasta manufacturer, and finding creative ways to cut costs for a clothing brand. These experiences gave me practical skills, exposure, and confidence I wouldn’t have gained in the classroom, and prepared me to dive into work with startups, investors, entrepreneurs, and customers after college. I’m especially proud that many of these projects led to tangible changes for the organizations we worked with, which gave me a sense of impact I’ve been able to build on."
    },

]

// Company logos where alumni work
const companyLogos = [
  { name: "McKinsey", image: "/images/placement/mckinsey.png" },
  { name: "BCG", image: "/images/placement/bcg.png" },
  { name: "Bain", image: "/images/placement/bain.jpg" },
  { name: "PWC", image: "/images/placement/pwc.png" },
  { name: "Deloitte", image: "/images/placement/deloitte.png" },
  { name: "KPMG", image: "/images/placement/kpmg.png" },
  { name: "EY", image: "/images/placement/ey.webp" },
  { name: "Accenture", image: "/images/placement/accenture.jpg" },
  { name: "Strategy&", image: "/images/placement/strategy&.png" },
  { name: "JP Morgan", image: "/images/placement/jpmorgan.png" },
  { name: "Goldman", image: "/images/placement/goldman.png" },
  { name: "Morgan Stanley", image: "/images/placement/morganstanley.png" },
  { name: "Citi", image: "/images/placement/citi.png" },
  { name: "Google", image: "/images/placement/google.png" },
  { name: "Meta", image: "/images/placement/meta.png" },
  { name: "Amazon", image: "/images/placement/amazon.png" },
  { name: "Microsoft", image: "/images/placement/microsoft.png" },
  { name: "Capital One", image: "/images/placement/capitalone.png" },
  { name: "Salesforce", image: "/images/placement/citadel.png" },
  { name: "AMEX", image: "/images/placement/amex.png" },
  { name: "Deutsche", image: "/images/placement/deutsche.jpg" },
  { name: "Guggenheim", image: "/images/placement/guggenheim.jpeg" },
  { name: "Merril Lynch", image: "/images/placement/merril.png" },
  { name: "William Blair", image: "/images/placement/williamblair.jpg" },
  { name: "IBM", image: "/images/placement/ibm.png" },
  { name: "Citadel", image: "/images/placement/citadel.png" },
  { name: "Coca Cola", image: "/images/placement/cocacola.png" },
  { name: "NASA", image: "/images/placement/nasa.png" },
  { name: "Dow Jones", image: "/images/placement/dow.png" },
 
]

export default function AlumniPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)
  const logoContainerRef = useRef<HTMLDivElement>(null)

  // Handle testimonial navigation
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Autoplay for testimonials
  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        nextTestimonial()
      }, 5000)
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
      }
    }
  }, [autoplay, currentTestimonial])

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false)
  const handleMouseLeave = () => setAutoplay(true)

  // Infinite scrolling effect for logos
  useEffect(() => {
    const logoContainer = logoContainerRef.current
    if (!logoContainer) return

    const scrollSpeed = 1.5
    let animationFrameId: number
    let scrollPos = 0

    const scroll = () => {
      scrollPos += scrollSpeed
      if (scrollPos >= logoContainer.scrollWidth / 2) {
        scrollPos = 0
      }
      logoContainer.scrollLeft = scrollPos
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div>
      <PageHeader
        title="Our Alumni Network"
        descriptions={[
          "APEX alumni have gone on to work at top companies",
          "Explore where our former members are making an impact",
          "Our alumni network continues to grow each day",
        ]}
      />

      <div className="py-10 md:py-16">
        <div className="container px-4 md:px-6">
          {/* Company Logos Showcase */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Where Our Alumni Work</h2>
            <div className="relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>

              <div className="overflow-hidden">
                <div
                  ref={logoContainerRef}
                  className="flex gap-8 py-6 overflow-x-auto scrollbar-hide"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  {/* First set of logos */}
                  {companyLogos.map((logo, index) => (
                    <div
                      key={`logo-1-${index}`}
                      className="flex-shrink-0 flex items-center justify-center h-20 w-40 bg-white rounded-lg shadow-sm p-4"
                    >
                      <Image
                        src={logo.image || "/placeholder.svg"}
                        alt={logo.name}
                        width={160}
                        height={80}
                        className="object-contain max-h-full"
                      />
                    </div>
                  ))}

                  {/* Duplicate logos on scroll */}
                  {companyLogos.map((logo, index) => (
                    <div
                      key={`logo-2-${index}`}
                      className="flex-shrink-0 flex items-center justify-center h-20 w-40 bg-white rounded-lg shadow-sm p-4"
                    >
                      <Image
                        src={logo.image || "/placeholder.svg"}
                        alt={logo.name}
                        width={160}
                        height={80}
                        className="object-contain max-h-full"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Alumni Testimonials */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Alumni Testimonials</h2>
            <div
              className="relative overflow-hidden bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="grid md:grid-cols-[1fr_2fr] gap-6 p-6 md:p-10">
                      <div className="flex flex-col items-center text-center">
                        <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <h3 className="font-bold text-lg">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                        <p className="text-sm text-muted-foreground">Class of {testimonial.year}</p>
                      </div>
                      <div className="flex flex-col justify-center">
                        <div className="relative">
                          <Quote className="absolute -top-2 -left-2 h-8 w-8 text-apex-red opacity-20" />
                          <p className="text-lg italic pl-6 pr-4">{testimonial.quote}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all",
                      index === currentTestimonial ? "bg-apex-red w-6" : "bg-gray-300 dark:bg-gray-600",
                    )}
                    onClick={() => setCurrentTestimonial(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white"
                onClick={prevTestimonial}
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous testimonial</span>
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white"
                onClick={nextTestimonial}
              >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next testimonial</span>
              </Button>
            </div>
          </div>

          {/* Alumni Statistics */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Alumni Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Card className="bg-gradient-to-br from-apex-red to-red-700 text-white">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold mb-2">100+</div>
                  <p className="text-sm">Alumni in Our Network</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-apex-red to-red-700 text-white">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <p className="text-sm">Job Placement Upon Graduation</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-apex-red to-red-700 text-white">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold mb-2">80+</div>
                  <p className="text-sm">Unique Employers of APEX Alumni</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-apex-red to-red-700 text-white">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold mb-2">30+</div>
                  <p className="text-sm">Alumni at MBB and Big 4 Consulting</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}