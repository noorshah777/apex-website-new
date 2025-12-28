"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  Users,
  Briefcase,
  GraduationCap,
  Network,
  FileText,
  UserPlus,
  Building,
  MessageSquare,
  Award,
  ChevronLeft,
  ChevronRight,
  Check,
  HelpCircle,
} from "lucide-react"
import { cn } from "@/lib/utils"
import PageHeader from "@/components/page-header"
import { generateGoogleCalendarLink } from "@/utils/calendar"
import { useMediaQuery } from "react-responsive" 


// Timeline data with minimalist icons instead of emojis
const timelineEvents = [
  {
    id: "meet-the-clubs",
    title: "BBA Meet the Clubs",
    date: "September 3, 2025",
    time: "5:30 PM - 7:30 PM",
    location: "Ross, Table 39 (near Robertson)",
    description: "Learn about APEX Consulting Group and other student organizations on campus",
    active: false,
    icon: <Building className="h-5 w-5 font-bold" />,
  },
  {
    id: "application-release",
    title: "Application Release",
    date: "Thursday, September 4, 2025",
    time: "8:00 AM",
    location: "Online",
    description: "Applications for APEX Consulting Group will be available on our website.",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSe5gRVIgTpxkqTNu6tedmKvyAL-egTJfzV7DBgyOQ2GIPLZJQ/viewform?usp=header",
    linkText: "Apply here",
    active: false,
    icon: <FileText className="h-5 w-5 font-bold" />,
  },
  {
    id: "mass-meeting",
    title: "Mass Meeting",
    date: "Tuesday, September 9, 2025",
    time: "8:30 PM - 9:30 PM",
    location: "Blau Colloquium",
    description: "Learn more about APEX Consulting Group, our projects, and the application process",
    active: false,
    icon: <Users className="h-5 w-5 font-bold" />,
  },
  {
    id: "speed-dating",
    title: "Speed Dating",
    date: "Sunday, September 14, 2025",
    time: "4:00 PM - 6:00 PM",
    location: "R0210",
    description: "Meet current members and learn about their experiences with APEX. ",
    url: "https://www.signupgenius.com/go/10C0848AFA62BAAF8C34-58173929-apex#/",
    linkInDescription: "Sign up required",
    active: false,
    icon: <MessageSquare className="h-5 w-5 font-bold" />,
  },
  {
    id: "dei-panel",
    title: "Professional Career Panel",
    date: "Monday, September 15, 2025",
    time: "8:30 PM - 9:30 PM",
    location: "B1570",
    description: "Discover the career paths APEX members followed and how their time in APEX shaped their success",
    active: false,
    icon: <Users className="h-5 w-5 font-bold" />,
  },
  {
    id: "application-office-hours",
    title: "Application Office Hours",
    date: "Wednesday, September 17, 2025",
    time: "4:00 PM - 5:30 PM",
    location: "Zoom",
    description: "Get help with your application from current members ",
    url: "https://umich.zoom.us/j/6036940179",
    linkInDescription: "via Zoom",
    active: false,
    icon: <HelpCircle className="h-5 w-5 font-bold" />,
  },
  {
    id: "app-due",
    title: "Application Deadline",
    date: "Wednesday, September 17, 2025",
    time: "11:59 PM",
    location: "Online",
    description: "All applications must be submitted by this time. ",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSeK_10w9jF4o0lMyq8g8VprwF5lz7rb7U6MpIkdxoHC4-sApg/closedform",
    linkText: "Apply here",
    active: false,
    icon: <Clock className="h-5 w-5 font-bold" />,
  },
  {
    id: "case-workshop",
    title: "Case Workshop",
    date: "Thursday, September 18, 2025",
    time: "7:00 PM - 8:00 PM",
    location: "See Invitation",
    description: "Learn about case interviews and practice with current members. Invite only event",
    active: false,
    icon: <Briefcase className="h-5 w-5 font-bold" />,
  },
  {
    id: "interviews",
    title: "Interviews",
    date: "Friday, September 19, 2025 - Sunday, September 21, 2025",
    time: "Various Times",
    location: "Ross School of Business",
    description: "Selected candidates will be invited for interviews.",
    active: false,
    icon: <UserPlus className="h-5 w-5 font-bold" />,
  },
]

// Application process steps for carousel
const applicationSteps = [
  {
    title: "Written Application",
    description: "Submit your resume and answer a few short questions about your interest in consulting and APEX.",
    icon: <FileText className="h-10 w-10 text-apex-red" />,
    details:
      "Our written application helps us understand your background, interests, and why you want to join APEX. Be authentic and showcase your unique experiences and perspectives.",
  },
  {
    title: "First Round Interview",
    description:
      "A case and behavioral interview to assess your fit with our organization's culture and values and problem solving abilities",
    icon: <MessageSquare className="h-10 w-10 text-apex-red" />,
    details:
      "Don't worry if you've never done a case interview before! We provide case workshops to help you prepare. We're looking for structured thinking and creative problem-solving, not perfect answers.",
  },
  {
    title: "Second Round Interview",
    description:
      "Similar to the first round interview, this interview will mix technicals and behaviorals to hollistically evaluate you",
    icon: <Briefcase className="h-10 w-10 text-apex-red" />,
    details:
      "Be sure to showcase your personality, as well as your problem solving skills! Remember, there are no right answers.",
  },
  {
    title: "Final Decision",
    description: "Selected candidates will receive an offer to join APEX Consulting Group.",
    icon: <Award className="h-10 w-10 text-apex-red" />,
    details:
      "We evaluate candidates holistically, considering your application, interviews, and interactions throughout the recruitment process. Decisions are typically made within a week after final interviews.",
  },
]

// FAQ data
const faqItems = [
  {
    question: "Do I need prior consulting experience to join APEX?",
    answer:
      "No prior consulting experience is required! We welcome students from all backgrounds and majors. Our training program will teach you everything you need to know about consulting.",
  },
  {
    question: "What is the time commitment for APEX members?",
    answer:
      "APEX members typically dedicate 5-10 hours per week to the organization. This includes client project work, professional development sessions, and social events. The time commitment may vary throughout the semester based on project deadlines.",
  },
  {
    question: "Which majors are eligible to apply?",
    answer:
      "Students from all majors are encouraged to apply! We value diverse perspectives and have members from the school of business, engineering, LSA, etc. What matters most is your interest in consulting and commitment to professional growth.",
  },
  {
    question: "When can I apply to join APEX?",
    answer:
      "We recruit new members at the beginning of each fall and winter semester. Check our recruitment timeline for specific dates and deadlines for the current recruitment cycle.",
  },
  {
    question: "What types of clients does APEX work with?",
    answer:
      "APEX works with a diverse range of clients, including local businesses, startups, non-profits, and larger corporations. Our projects span various industries and focus areas, giving members exposure to different business challenges and environments.",
  },
  {
    question: "How can I prepare for the case interview?",
    answer:
      "We host case workshops during the recruitment process to help candidates prepare. Additionally, you can practice with case interview books, online resources, or by forming case groups with friends. Remember, we're looking for your approach to problem-solving, not necessarily perfect answers.",
  },
]

// Community images for carousel
const communityImages = [
  {
    src: "/images/join/apex-group.JPG",
    alt: "APEX team members at headshots",
  },
  {
    src: "/images/join/chi.JPEG",
    alt: "APEX team members during our annual Chicago trip",
  },
  {
    src: "/images/join/newbieparty.JPEG",
    alt: "APEX new analyst welcome celebration",
  },
  {
    src: "/images/join/retreat.JPEG",
    alt: "APEX fall retreat",
  },
  {
    src: "/images/join/speeddating.JPEG",
    alt: "APEX during recruitment events",
  },
]

// Analyst class member quotes data
const analystClassQuotes = [
  {
    alt: "APEX analyst class bonding moments",
    quote:
      "Joining APEX taught me how to translate education taught in class and modules into real impact through collaboration with companies, and has helped me to shape my interests going into recruitment. My new member semester also exposed me to more unconventional career paths within business, and gave me a group of passionate individuals all rooting for my success in whatever I pursue!",
    major: "BBA '28, W25 Analyst Class",
    author: "Katelyn Knickerbocker",
  },
  {
    alt: "APEX analyst class bonding moments",
    quote: "My new member semester was an amazing learning experience, both from my new member ed and my project! I loved getting closer to the other members of my analyst class, and I was really interested in my project as it was technical and exactly what I was looking for. APEX gave me an incredible, tight-knit community, which I'm looking forward to spending my time with for years to come!",
    major: "Mechanical Engineering'28, W25 Analyst Class",
    author: "Vansh Baxi",
  },
  {
    alt: "APEX analyst class bonding moments",
    quote: "The APEX new member semester was truly an unforgettable experience. I grew so much as a person in the business world and in life itself, and I credit so many of my freshman year friendships and memories to APEX. Bonding with the girls in my analyst class over sushi in Chicago reminded me how lucky I am to be part of such a great group of people!",
    major: "BBA '28, W25 Analyst Class",
    author: "Reagan Masek",
  },

]

function AnalystOverlayCarousel({ analystClassQuotes }) {
  const [isHovering, setIsHovering] = useState(false)
  const [hoverQuoteIndex, setHoverQuoteIndex] = useState(0)
  const [isOverlayVisible, setIsOverlayVisible] = useState(false)
  const isMobile = useMediaQuery({ maxWidth: 767 })

  // Auto cycle quotes while hovering (desktop only)
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null
    if (isHovering && !isMobile) {
      interval = setInterval(() => {
        setHoverQuoteIndex((prev) =>
          prev === analystClassQuotes.length - 1 ? 0 : prev + 1
        )
      }, 10000)
    }
    return () => interval && clearInterval(interval)
  }, [isHovering, isMobile, analystClassQuotes.length])

  // Handle tap toggle on mobile
  const handleClick = () => {
    if (isMobile) {
      setIsOverlayVisible((prev) => !prev)
    }
  }

  return (
    <div
      className="relative overflow-hidden rounded-xl h-[60vh] md:h-80 lg:h-screen group cursor-pointer"
      onClick={handleClick}
      onMouseEnter={!isMobile ? () => setIsHovering(true) : undefined}
      onMouseLeave={
        !isMobile
          ? () => {
              setIsHovering(false)
              setHoverQuoteIndex(0)
            }
          : undefined
      }
    >
      <Image
        src="/images/join/hoverimage.jpg"
        alt="APEX analyst class bonding moment"
        fill
        className="object-cover transition-all duration-500 group-hover:blur-sm group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/70 transition-all duration-300"></div>

      <motion.div
        className={cn(
          "absolute inset-0 flex items-center justify-center p-3 md:p-6 transition-opacity duration-300",
          isOverlayVisible || isHovering ? "opacity-100" : "opacity-0"
        )}
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: isOverlayVisible || isHovering ? 1 : 0,
          y: isOverlayVisible || isHovering ? 0 : 20,
        }}
      >
        <div className="text-center text-white w-full max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-6 border border-white/20 max-h-full overflow-y-auto">
            <motion.div
              key={hoverQuoteIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs md:text-sm lg:text-base leading-relaxed mb-3 md:mb-4 italic px-1 md:px-2">
                "{analystClassQuotes[hoverQuoteIndex].quote}"
              </p>
              <p className="text-xs md:text-sm font-medium opacity-90">
                - {analystClassQuotes[hoverQuoteIndex].author}
              </p>
              <p className="text-xs md:text-sm font-medium opacity-90">
                {analystClassQuotes[hoverQuoteIndex].major}
              </p>
            </motion.div>

            {/* Quote indicators */}
            <div className="flex justify-center mt-3 md:mt-4 space-x-2">
              {analystClassQuotes.map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-300",
                    hoverQuoteIndex === index ? "bg-white" : "bg-white/40"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function JoinPage() {
  const [activeEvent, setActiveEvent] = useState("meet-the-clubs")
  const [animateTimeline, setAnimateTimeline] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [hoverQuoteIndex, setHoverQuoteIndex] = useState(0)
  const timelineRef = useRef<HTMLDivElement>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  // Set up intersection observer to trigger animation when timeline is in view
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimateTimeline(true)
        }
      },
      { threshold: 0.2 },
    )

    if (timelineRef.current) {
      observerRef.current.observe(timelineRef.current)
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  // Carousel navigation
  const nextStep = () => {
    setCurrentStep((prev) => (prev === applicationSteps.length - 1 ? 0 : prev + 1))
  }

  const prevStep = () => {
    setCurrentStep((prev) => (prev === 0 ? applicationSteps.length - 1 : prev - 1))
  }

  // Image carousel auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev === communityImages.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev === analystClassQuotes.length - 1 ? 0 : prev + 1))
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isHovering) {
      interval = setInterval(() => {
        setHoverQuoteIndex((prev) => (prev === analystClassQuotes.length - 1 ? 0 : prev + 1))
      }, 3000) // Change quote every 3 seconds while hovering
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isHovering])

  // Ensure all links scroll to top of page
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0)

    // Add scroll-to-top behavior to all internal links
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest("a")

      if (link && link.href.startsWith(window.location.origin) && !link.hasAttribute("target")) {
        // For same-origin links without target attribute
        window.scrollTo(0, 0)
      }
    }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  // Function to generate Google Calendar link for an event
  const getCalendarLink = (event: (typeof timelineEvents)[0]) => {
    // Check if this is an event that should be all-day
    const isAllDayEvent = event.id === "application-release" || event.id === "app-due"

    return generateGoogleCalendarLink({
      title: `APEX Consulting: ${event.title}`,
      startDate: event.date,
      // Only pass time information if it's not an all-day event
      startTime: isAllDayEvent
        ? undefined
        : event.time && event.time.includes("-")
          ? event.time.split("-")[0].trim()
          : event.time,
      endTime: isAllDayEvent
        ? undefined
        : event.time && event.time.includes("-")
          ? event.time.split("-")[1].trim()
          : undefined,
      location: event.location,
      description: event.description,
      isAllDay: isAllDayEvent,
    })
  }


  return (
    <div>
      <PageHeader
        title="Join Our Team"
        descriptions={[
          "APEX Consulting Group recruits new members at the beginning of each semester.",
          "Follow our recruitment timeline to learn how to join our team.",
          "We welcome students from all majors and backgrounds who are passionate about consulting.",
        ]}
        ctaButton={{
          text: "Apply Now",
          href: "https://docs.google.com/forms/d/e/1FAIpQLSeK_10w9jF4o0lMyq8g8VprwF5lz7rb7U6MpIkdxoHC4-sApg/closedform",
          variant: "default",
        }}
      />

      <div className="py-10 md:py-16">
        <div className="container px-4 md:px-6">
          <div ref={timelineRef} className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center">Recruitment Timeline</h2>

            {/* Desktop Timeline */}
            <div className="hidden md:block relative">
              <div className="absolute top-[22px] left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700"></div>
              <div className="flex justify-between relative">
                {timelineEvents.map((event, index) => (
                  <div
                    key={event.id}
                    className={cn(
                      "flex flex-col items-center w-20 transition-all duration-500 transform",
                      animateTimeline ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
                    )}
                    style={{ transitionDelay: `${index * 100}ms` }}
                    onClick={() => setActiveEvent(event.id)}
                  >
                    <div
                      className={cn(
                        "w-11 h-11 rounded-full flex items-center justify-center mb-2 cursor-pointer transition-all z-10",
                        activeEvent === event.id
                          ? "bg-apex-red text-white scale-110 shadow-lg"
                          : "bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-apex-red hover:text-apex-red dark:hover:border-apex-red dark:hover:text-apex-red",
                      )}
                    >
                      {event.icon}
                    </div>
                    <div
                      className={cn(
                        "text-xs font-medium text-center transition-all mt-2",
                        activeEvent === event.id ? "text-apex-red" : "text-muted-foreground",
                      )}
                    >
                      {event.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:hidden space-y-4">
              {timelineEvents.map((event, index) => (
                <div
                  key={event.id}
                  className={cn(
                    "flex items-center gap-4 p-4 rounded-lg border transition-all cursor-pointer",
                    activeEvent === event.id
                      ? "border-apex-red bg-red-50 dark:bg-red-900/20"
                      : "border-gray-200 dark:border-gray-700 hover:border-apex-red",
                  )}
                  onClick={() => setActiveEvent(event.id)}
                >
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0",
                      activeEvent === event.id
                        ? "bg-apex-red text-white"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-500",
                    )}
                  >
                    {event.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3
                      className={cn(
                        "font-medium text-sm",
                        activeEvent === event.id ? "text-apex-red" : "text-foreground",
                      )}
                    >
                      {event.title}
                    </h3>
                    <p className="text-xs text-muted-foreground truncate">{event.date}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Event details */}
            <div className="mt-16">
              {timelineEvents.map((event) => (
                <div
                  key={event.id}
                  className={cn(
                    "transition-all duration-500",
                    activeEvent === event.id ? "opacity-100 max-h-96" : "opacity-0 max-h-0 overflow-hidden",
                  )}
                >
                  <Card className="border-apex-red overflow-hidden">
                    <div className="bg-apex-red h-1"></div>
                    <CardContent className="p-4 md:p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 sm:gap-4 items-start sm:items-center">
                        <div>
                          <h3 className="text-lg md:text-xl font-bold">{event.title}</h3>
                          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-sm mt-2">
                            <div className="flex items-center gap-1 text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              {event.date}
                            </div>
                            <div className="flex items-center gap-1 text-muted-foreground">
                              <Clock className="h-4 w-4" />
                              {event.time}
                            </div>
                            <div className="flex items-center gap-1 text-muted-foreground">
                              <MapPin className="h-4 w-4" />
                              {event.location}
                            </div>
                          </div>
                        </div>

                        <div className="flex-shrink-0">
                          {event.active ? (
                            <div className="flex items-center text-green-600 dark:text-green-400 text-sm font-medium">
                              <Check className="h-4 w-4 mr-1" />
                              Currently Active
                            </div>
                          ) : event.id === "case-workshop" || event.id === "interviews" ? (
                            <div className="text-sm text-gray-600 dark:text-gray-400 italic">Invitation Only Event</div>
                          ) : (
                            <Button
                              variant="outline"
                              className="text-sm border-black dark:border-white w-full sm:w-auto bg-transparent"
                              asChild
                            >
                              <a
                                href={getCalendarLink(event)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 justify-center"
                              >
                                Add to Calendar <ArrowRight className="h-3 w-3" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>

                      <p className="text-muted-foreground text-sm md:text-base py-4">
                        {event.linkInDescription ? (
                          <>
                            {event.description.replace(event.linkInDescription, "")}{" "}
                            <a
                              href={event.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-apex-red hover:underline inline-flex items-center gap-1"
                            >
                              {event.linkInDescription} <ArrowRight className="h-3 w-3" />
                            </a>
                          </>
                        ) : event.url && event.linkText ? (
                          <>
                            {event.description}{" "}
                            <a
                              href={event.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-apex-red hover:underline inline-flex items-center gap-1"
                            >
                              {event.linkText} <ArrowRight className="h-3 w-3" />
                            </a>
                          </>
                        ) : (
                          event.description
                        )}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="my-20">
            <h2 className="text-2xl font-bold mb-8 text-center">Why Join APEX?</h2>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="relative overflow-hidden rounded-xl order-2 lg:order-1">
                <div className="relative w-full h-64 sm:h-80 lg:h-full aspect-video">
                  {communityImages.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === currentImageIndex ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                    </div>
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                    <h3 className="text-lg sm:text-xl font-bold mb-2">Join Our Community</h3>
                    <p className="text-white/80 text-sm sm:text-base">
                      APEX is more than just a consulting club - it's a supportive community where you'll form lasting
                      friendships and professional connections.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 order-1 lg:order-2">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 sm:p-6 flex gap-4 transform transition-all hover:translate-x-2">
                  <div className="rounded-full bg-apex-red/10 p-3 h-fit flex-shrink-0">
                    <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 text-apex-red" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg">Real-World Experience</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      Work on real consulting projects with actual clients, gaining valuable experience that will set
                      you apart in the job market.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 sm:p-6 flex gap-4 transform transition-all hover:translate-x-2">
                  <div className="rounded-full bg-apex-red/10 p-3 h-fit flex-shrink-0">
                    <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-apex-red" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg">Professional Development</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      Receive training in consulting methodologies, problem-solving, and client communication from
                      experienced members.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 sm:p-6 flex gap-4 transform transition-all hover:translate-x-2">
                  <div className="rounded-full bg-apex-red/10 p-3 h-fit flex-shrink-0">
                    <Network className="h-5 w-5 sm:h-6 sm:w-6 text-apex-red" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg">Networking Opportunities</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      Connect with alumni working at top consulting firms, investment banks, and tech companies.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 sm:p-6 flex gap-4 transform transition-all hover:translate-x-2">
                  <div className="rounded-full bg-apex-red/10 p-3 h-fit flex-shrink-0">
                    <Users className="h-5 w-5 sm:h-6 sm:w-6 text-apex-red" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg">Supportive Community</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      Join a supportive community of like-minded individuals who are passionate about consulting and
                      business.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Analyst Class Bonding Section */}
            <div className="my-20">
              <div className="text-center mb-12 px-4 md:px-0">
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                  And don't forget about your analyst class!
                </h2>
                <p className="text-base md:text-lg text-muted-foreground max-w-4xl md:max-w-6xl mx-auto leading-relaxed px-2 md:px-0">
                  One of the major draws of joining APEX is having an awesome bonding semester with your analyst class.
                  You'll form incredible friendships, support each other through challenges, and create memories that
                  will last a lifetime. Your analyst class becomes your APEX family - the people who will celebrate your
                  successes, help you grow professionally, and remain lifelong friends long after graduation.
                </p>
              </div>

              {/* Analyst Class Image Carousel */}
              <div className="relative max-w-6xl mx-auto px-4 md:px-0">
                <AnalystOverlayCarousel analystClassQuotes={analystClassQuotes} />
              </div>
            </div>

            {/* Application Process - Carousel Style */}
            <div className="my-20">
              <h2 className="text-2xl font-bold mb-8 text-center">Application Process</h2>

              <div className="relative">
                <div className="overflow-hidden rounded-xl bg-gradient-to-r from-apex-red to-red-700 p-1">
                  <div className="bg-white dark:bg-gray-900 rounded-lg p-6 md:p-10">
                    {/* Progress indicator */}
                    <div className="flex justify-center mb-8">
                      <div className="flex items-center space-x-2">
                        {applicationSteps.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentStep(index)}
                            className={cn(
                              "w-2.5 h-2.5 rounded-full transition-all",
                              currentStep === index ? "bg-apex-red w-8" : "bg-gray-300 dark:bg-gray-700",
                            )}
                            aria-label={`Go to step ${index + 1}`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Carousel content */}
                    <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-center">
                      <div className="flex flex-col items-center text-center">
                        <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-10 mb-6">
                          {applicationSteps[currentStep].icon}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-2">{applicationSteps[currentStep].title}</h3>
                        <p className="text-sm text-muted-foreground">
                          Step {currentStep + 1} of {applicationSteps.length}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <p className="text-xl leading-relaxed">{applicationSteps[currentStep].description}</p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {applicationSteps[currentStep].details}
                        </p>

                        {currentStep === 0 && (
                          <Button asChild className="mt-6 bg-apex-red hover:bg-red-700">
                            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeK_10w9jF4o0lMyq8g8VprwF5lz7rb7U6MpIkdxoHC4-sApg/closedform" className="flex items-center gap-2">
                              Apply Now <ArrowRight className="h-4 w-4" />
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>

                    {/* Navigation buttons */}
                    <div className="flex justify-between mt-8">
                      <Button variant="outline" size="icon" onClick={prevStep} className="rounded-full bg-transparent">
                        <ChevronLeft className="h-4 w-4" />
                        <span className="sr-only">Previous step</span>
                      </Button>

                      <Button variant="outline" size="icon" onClick={nextStep} className="rounded-full bg-transparent">
                        <ChevronRight className="h-4 w-4" />
                        <span className="sr-only">Next step</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div id="faq" className="my-20">
              <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>

              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                  {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                      <AccordionContent>{item.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                <div className="mt-8 text-center">
                  <p className="text-muted-foreground mb-4">Still have questions? We're happy to help!</p>
                  <Button asChild>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}