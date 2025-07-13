"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
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
import TraditionsSection from "@/components/traditions-section"
import { generateGoogleCalendarLink } from "@/utils/calendar"

// Timeline data with minimalist icons instead of emojis
const timelineEvents = [
  {
    id: "meet-the-clubs",
    title: "BBA Meet the Clubs",
    date: "Thursday January 16, 2025",
    time: "6:00 PM - 9:00 PM",
    location: "Ross Basement - Table 41",
    description: "Learn about APEX Consulting Group and other student organizations on campus",
    active: false,
    icon: <Building className="h-5 w-5" />,
  },
  {
    id: "application-release",
    title: "Application Release",
    date: "Friday, January 17, 2025",
    time: "12:00 PM",
    location: "Online",
    description: "Applications for APEX Consulting Group will be available on our website.",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSf6rtQgTm84YtamSkkP38ruzoLwPCTaRcb1BvZRWw6EuQADLg/closedform",
    linkText: "Apply here",
    active: false,
    icon: <FileText className="h-5 w-5" />,
  },
  {
    id: "mass-meeting",
    title: "Mass Meeting",
    date: "Sunday, January 17, 2025",
    time: "7:00 PM - 8:30 PM",
    location: "Blau Colloquium",
    description: "Learn more about APEX Consulting Group, our projects, and the application process",
    active: false,
    icon: <Users className="h-5 w-5" />,
  },
  {
    id: "speed-dating",
    title: "Speed Dating",
    date: "Saturday, January 25, 2025",
    time: "1:00 PM - 3:00 PM",
    location: "Locations vary, reference sign up",
    description: "Meet current members and learn about their experiences with APEX. ",
    url: "https://www.signupgenius.com/go/10C0848AFA62BAAF8C34-54388586-apex#/",
    linkInDescription: "Sign up required",
    active: false,
    icon: <MessageSquare className="h-5 w-5" />,
  },
  {
    id: "dei-panel",
    title: "DEI Career Panel + Networking",
    date: "Monday January 27, 2025",
    time: "7:00 PM - 8:30 PM",
    location: "B1580",
    description: "Learn about our commitment to diversity, equity, and inclusion",
    active: false,
    icon: <Users className="h-5 w-5" />,
  },
  {
    id: "application-office-hours",
    title: "Application Office Hours",
    date: "Tuesday, January 28, 2025",
    time: "4:00 PM - 6:00 PM",
    location: "Zoom",
    description: "Get help with your application from current members ",
    url: "https://umich.zoom.us/j/7991518779#success",
    linkInDescription: "via Zoom",
    active: false,
    icon: <HelpCircle className="h-5 w-5" />,
  },
  {
    id: "app-due",
    title: "Application Deadline",
    date: "Tuesday, January 28, 2025",
    time: "11:59 PM",
    location: "Online",
    description: "All applications must be submitted by this time. ",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSf6rtQgTm84YtamSkkP38ruzoLwPCTaRcb1BvZRWw6EuQADLg/closedform",
    linkText: "Apply here",
    active: false,
    icon: <Clock className="h-5 w-5" />,
  },
  {
    id: "case-workshop",
    title: "Case Workshop",
    date: "Wednesday, January 29, 2025",
    time: "7:00 PM - 8:00 PM",
    location: "See Invitation",
    description: "Learn about case interviews and practice with current members. Invite only event",
    active: false,
    icon: <Briefcase className="h-5 w-5" />,
  },
  {
    id: "interviews",
    title: "Interviews",
    date: "Friday, January 31, 2025 - Sunday, February 2, 2025",
    time: "Various Times",
    location: "Ross School of Business",
    description: "Selected candidates will be invited for interviews",
    active: false,
    icon: <UserPlus className="h-5 w-5" />,
  },
]

// Application process steps for carousel
const applicationSteps = [
  {
    title: "Written Application",
    description: "Submit your resume and answer a few short questions about your interest in consulting and APEX",
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
    description: "Selected candidates will receive an offer to join APEX Consulting Group",
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
  {
    src: "/images/join/bean.JPEG",
    alt: "APEX members at The Bean in Chicago",
  },
  {
    src: "/images/join/cider.JPEG",
    alt: "APEX members at a cider mill",
  },
  {
    src: "/images/join/football.JPEG",
    alt: "APEX members at a football game",
  },
  {
    src: "/images/join/friendsgiving.JPEG",
    alt: "APEX Friendsgiving",
  },
  {
    src: "/images/join/gameday.JPEG",
    alt: "APEX gameday tailgate",
  },
  {
    src: "/images/join/law.JPEG",
    alt: "APEX at a law school mixer",
  },
  {
    src: "/images/join/mckinsey.JPEG",
    alt: "APEX members at a McKinsey event",
  },
  {
    src: "/images/join/newbie.JPEG",
    alt: "APEX newbie event",
  },
  {
    src: "/images/join/sand.JPEG",
    alt: "APEX members at the beach",
  },
  {
    src: "/images/join/welcomeweek.JPEG",
    alt: "APEX at Welcome Week",
  },
]

export default function JoinPage() {
  const [activeEvent, setActiveEvent] = useState("meet-the-clubs")
  const [animateTimeline, setAnimateTimeline] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const timelineRef = useRef<HTMLDivElement>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

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
          href: "https://docs.google.com/forms/d/e/1FAIpQLSf6rtQgTm84YtamSkkP38ruzoLwPCTaRcb1BvZRWw6EuQADLg/closedform",
          variant: "default",
        }}
      />

      <div className="py-10 md:py-16">
        <div className="container px-4 md:px-6">
          {/* Interactive Timeline - Redesigned with line in the middle */}
          <div ref={timelineRef} className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center">Recruitment Timeline</h2>

            <div className="relative">
              {/* Horizontal line - now positioned to intersect the middle of circles */}
              <div className="absolute top-[22px] left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700"></div>

              {/* Timeline events */}
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
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-xl font-bold">{event.title}</h3>
                          <div className="flex flex-wrap gap-4 text-sm mt-2">
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
                              {event.location ? <> {event.location} </> : event.location}
                            </div>
                          </div>
                        </div>

                        <div>
                          {event.active ? (
                            <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium">
                              <Check className="h-4 w-4 mr-1" />
                              Currently Active
                            </div>
                          ) : (
                            <Button variant="outline" className="text-sm border-black dark:border-white" asChild>
                              <a
                                href={getCalendarLink(event)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1"
                              >
                                Add to Calendar <ArrowRight className="h-3 w-3" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>

                      <p className="text-muted-foreground">
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

          {/* Why Join APEX - Redesigned with more visual appeal */}
          <div className="my-20">
            <h2 className="text-2xl font-bold mb-8 text-center">Why Join APEX?</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative overflow-hidden rounded-xl">
                {/* Image Carousel */}
                <div className="relative w-full h-full aspect-video">
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
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Join Our Community</h3>
                    <p className="text-white/80">
                      APEX is more than just a consulting club - it's a supportive community where you'll form lasting
                      friendships and professional connections.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 flex gap-4 transform transition-all hover:translate-x-2">
                  <div className="rounded-full bg-apex-red/10 p-3 h-fit">
                    <Briefcase className="h-6 w-6 text-apex-red" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Real-World Experience</h3>
                    <p className="text-muted-foreground">
                      Work on real consulting projects with actual clients, gaining valuable experience that will set
                      you apart in the job market.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 flex gap-4 transform transition-all hover:translate-x-2">
                  <div className="rounded-full bg-apex-red/10 p-3 h-fit">
                    <GraduationCap className="h-6 w-6 text-apex-red" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Professional Development</h3>
                    <p className="text-muted-foreground">
                      Receive training in consulting methodologies, problem-solving, and client communication from
                      experienced members.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 flex gap-4 transform transition-all hover:translate-x-2">
                  <div className="rounded-full bg-apex-red/10 p-3 h-fit">
                    <Network className="h-6 w-6 text-apex-red" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Networking Opportunities</h3>
                    <p className="text-muted-foreground">
                      Connect with alumni working at top consulting firms, investment banks, and tech companies.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 flex gap-4 transform transition-all hover:translate-x-2">
                  <div className="rounded-full bg-apex-red/10 p-3 h-fit">
                    <Users className="h-6 w-6 text-apex-red" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Supportive Community</h3>
                    <p className="text-muted-foreground">
                      Join a supportive community of like-minded individuals who are passionate about consulting and
                      business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <TraditionsSection />

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
                      <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-8 mb-4">
                        {applicationSteps[currentStep].icon}
                      </div>
                      <h3 className="text-xl font-bold">{applicationSteps[currentStep].title}</h3>
                      <p className="text-sm text-muted-foreground mt-2">
                        Step {currentStep + 1} of {applicationSteps.length}
                      </p>
                    </div>

                    <div>
                      <p className="text-lg mb-4">{applicationSteps[currentStep].description}</p>
                      <p className="text-muted-foreground">{applicationSteps[currentStep].details}</p>

                      {currentStep === 0 && (
                        <Button asChild className="mt-6 bg-apex-red hover:bg-red-700">
                          <Link href="#" className="flex items-center gap-2">
                            Apply Now <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Navigation buttons */}
                  <div className="flex justify-between mt-8">
                    <Button variant="outline" size="icon" onClick={prevStep} className="rounded-full">
                      <ChevronLeft className="h-4 w-4" />
                      <span className="sr-only">Previous step</span>
                    </Button>

                    <Button variant="outline" size="icon" onClick={nextStep} className="rounded-full">
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
              </div>

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
  )
}
