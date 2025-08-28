"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import PageHeader from "@/components/page-header"
import { Calendar, MapPin, Quote, Users, Coffee, Camera, Music, Heart, Star, Trophy, Briefcase, GraduationCap, Building2, TentTree, ChevronRight, ChevronLeft } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import {Button} from "@/components/ui/button"
import { Analytics } from "@vercel/analytics/next"

const communityEvents = [
  {
    id: 1,
    title: "Recruiting Events",
    date: "August-September",
    location: "Ann Arbor",
    description:
      "Recruiting season kicks off with our first big reunion back on campus — a chance to reconnect with friends, meet new people, and share what APEX is all about. After weeks of conversations and events, we wrap up with our New Analyst Celebration, where we officially welcome the newest members and celebrate the start of their APEX journey.",
    backgroundImage: "/images/community/recruiting.jpg",
    memberQuotes: [{ name: "Noor Shah", quote: "Recruiting season is my favorite part of the year—I love meeting so many new people and sharing what makes APEX special." }],
    icon: <Briefcase className="h-5 w-5" />,
  },
    {
    id: 2,
    title: "Cider Mill",
    date: "September",
    location: "Huron River",
    description:
      "APEX enjoys taking part in a classic Ann Arbor tradition—hot cider, fresh donuts, and a walk by the Huron River. It’s one of the first chances for new analysts and returning members to connect outside of campus in a more relaxed setting. By the end of the trip, everyone leaves a little closer.",
    backgroundImage: "/images/community/cidermill.png",
    memberQuotes: [{ name: "Noah Knutsen", quote: "Our annual APEX cider mill trip never disappoints. Hanging out with the best group of people and eating way too many donuts is hard to beat." }],
    icon: <Coffee className="h-5 w-5" />,
  },
  {
    id: 3,
    title: "Saturday Gamedays",
    date: "August-October",
    location: "The Big House",
    description:
      "There's nothing quite like a Michigan football Saturday. We gather early, decked out in maize and blue, to celebrate the Wolverines with food, music, and plenty of school spirit. Whether it's tossing a football around, belting out Mr.Brightside, or heading to the Big House together, our tailgates are where the APEX family shows up in full force to cheer on our team and each other.",
    backgroundImage: "/images/community/gamedays.jpg",
    memberQuotes: [{ name: "Urmi Joglekar", quote: "APEX gamedays are some of my best memories from college. Nothing beats cheering on our team and tailgating together before heading to the big game!" }],
    icon: <Trophy className="h-5 w-5" />,
  },
  {
    id: 4,
    title: "Annual Retreat",
    date: "November",
    location: "Northern Michigan",
    description:
      "Each fall, we head up north for our annual retreat—a weekend full of karaoke, bonfires, games, and plenty of time to relax together. It’s one of the first big chances for everyone to connect outside of Ann Arbor, and by the end of the trip, new and returning members leave with closer friendships and great memories.",
    backgroundImage: "/images/community/retreat.jpg",
    memberQuotes: [{ name: "Ruthie Yu", quote: "APEX Up North retreat is one of my favorite weekends—hanging out with everyone, sitting around the bonfire, and roasting marshmallows make it such a fun and memorable trip."}],
    icon: <TentTree className="h-5 w-5" />,
  },
  {
    id: 5,
    title: "Semi-Annual Date Party",
    date: "December/April",
    location: "Ann Arbor",
    description:
      "Twice a year, we come together for our semi-annual date parties, partnering with other consulting clubs on campus. It’s an unforgettable night to meet new people, dance, enjoy good music—an opportunity to have fun, and connect with the broader Michigan community.",
    backgroundImage: "/images/community/dateparty.jpg",
    memberQuotes: [{ name: "Viraj Bajoria", quote: "Cross Consulting Date Party is always one of the most fun nights where everyone comes together and has a great time. There are so many hilarious APEX stories that come out of it every year." }],
    icon: <Music className="h-5 w-5" />,
  },
  {
    id: 6,
    title: "Chicago Trek",
    date: "March",
    location: "Chicago",
    description:
      "Each winter, we drive to Chicago for our annual trek—a mix of professional growth and city adventures. Days are spent visiting top consulting firms and learning from industry leaders, while evenings are for exploring the city, trying deep-dish pizza, and enjoying time together. A highlight is our alumni brunch, where past and current APEX members connect over a meal, showing that the APEX network extends far beyond campus.",
    backgroundImage: "/images/community/chicago.jpg",
    memberQuotes: [{ name: "Mark Bokas", quote: "The APEX Chicago trek was such an awesome experience that brought me closer to our members, taught me more about consulting, and gave me the chance to connect with industry professionals" }],
    icon: < Building2 className="h-5 w-5" />,
  },

  {
    id: 7,
    title: "Senior Send Off",
    date: "April",
    location: "Ann Arbor",
    description:
      "Saying goodbye is never easy, but our senior send-off makes it something special. Each spring, we gather to honor the seniors who have shaped APEX and celebrate the exciting paths they're about to take. It's an evening filled with laughter, gratitude, and a few happy tears—a reminder of just how much each class leaves behind for the next.",
    backgroundImage: "/images/community/seniorsendoff.jpg",
    memberQuotes: [{ name: "Ivan Dashkevich", quote: "Senior sendoff is a time when I relive some of my greatest memories with APEX every year. Sharing how we remember our seniors is an experience unlike any other that really embodies the spirit of APEX." }],
    icon: <GraduationCap className="h-5 w-5" />,
  },
  {
    id: 8,
    title: "All the Moments in Between",
    date: "Any Time",
    location: "Any Place",
    description:
      "Of course, the best parts of APEX aren't always the planned events—they're the countless little moments along the way. You might find us picnicking at the Law Quad, playing flag football, or grabbing dinner after a long day. These everyday hangouts are what make the APEX family feel constant—always there, always together.",
    backgroundImage: "/images/community/moments.jpg",
    memberQuotes: [{ name: "Sorelle Kreter", quote: "APEX is more than just a club to me, but a family." }],
    icon: <Heart className="h-5 w-5" />,
  },
]

const memberTestimonials = [
  {
    id: 1,
    name: "Ayden Simckes",
    role: "Project Manager",
    major: "BBA & African American Studies '27",
    testimonial:
      "APEX for me is the most genuine group of people who not only give you the tools to succeed but go out of their way to help no matter the situation. There is no other club with members who mock interview you at 10 pm over the summer and continue to give resources without even having to ask. I wouldn’t have the internship that I have or the professional skills without each member and the positive support system APEX has given me!",
    signature: "Ayden Simckes",
    image: "/images/member-testimonials/AydenS.jpg",
  },
  {
    id: 2,
    name: "Jiya Sheth",
    role: "Senior Advisor",
    major: "BBA '26",
    testimonial:
      "APEX has been the most transformative organization for me in my 3 years at Michigan. The people are not only ambitious and exceptional in whatever they take on but are equally willing to share their journeys as both formal and informal mentors - many times without you even asking for it. And for me, APEX has been the place where I built confidence, embraced challenges, and seized rare opportunities, all while having a supportive home to turn to whenever I needed it.",
    signature: "Jiya Sheth",
    image: "/images/member-testimonials/JiyaS.png",
  },
  {
    id: 3,
    name: "Sreejay Ramakrishnan",
    role: "Vice President of Internal Development",
    major: "BBA & UX Design '27",
    testimonial:
      "APEX is my favorite group of people on campus. Whether it is asking someone to look over my resume or finding someone to grab a sweet treat with at night, APEX members are the first people I reach out to. Professionally, every single person in the org is so easy to reach out to for help, whether it is for mock interviewing or helping talk through those long career navigation conversations. And personally, it really is a family. From karaoke nights to Just Dance to cooking, I found my best friends (and roommates) through APEX and always learn something new from these unique and awesome people.",
    signature: "Sreejay Ramakrishnan",
    image: "/images/member-testimonials/SreejayR.JPG",
  },
  {
    id: 4,
    name: "Caleb Hyun",
    role: "Senior Advisor",
    major: "Computer Science '27 ",
    testimonial:
      "I joined APEX to gain hands-on experience by solving difficult business and technical challenges for a real client. Throughout my 3 semesters on projects, I got to work with incredible companies like GrubHub, Pixo VR, and an AI trucking software startup, but more importantly, I found some of my best friends. From our annual fall retreat up north to the Chicago trek, I’ve made some of my best memories through this club and couldn’t imagine my college experience without APEX.",
    signature: "Caleb Hyun",
    image: "/images/member-testimonials/CalebH.jpg",
  },
]


export default function CommunityPage() {
  const [activeEvent, setActiveEvent] = useState(1)
  const [animateTimeline, setAnimateTimeline] = useState(false)
  const timelineRef = useRef<HTMLDivElement>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)

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

  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        nextTestimonial()
      }, 10000)
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
      }
    }
  }, [autoplay, currentTestimonial])

  const selectedEvent = communityEvents.find((event) => event.id === activeEvent) || communityEvents[0]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % memberTestimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + memberTestimonials.length) % memberTestimonials.length)
  }

  const handleMouseEnter = () => setAutoplay(false)
  const handleMouseLeave = () => setAutoplay(true)
  return (
    <div>
      <PageHeader
        title="We Love Our APEX Family!"
        descriptions={[
          "Learn A Bit More About What Makes APEX Special",
          "From Cider Mill to Chicago, We Cherish Every Moment",
          "APEX's Bonds Are Unbreakable",
        ]}
      />

      <div className="py-10 md:py-16">
        <div className="container px-4 md:px-6">
          <div ref={timelineRef}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Our Moments</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12">
              Here’s a glimpse at the memories that make APEX more than just a consulting club.
            </p>

            {/* Desktop Timeline */}
            <div className="hidden md:block relative">
              <div className="absolute top-[22px] left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700"></div>
              <div className="flex justify-between relative">
                {communityEvents.map((event, index) => (
                  <div
                    key={event.id}
                    className={cn(
                      "flex flex-col items-center w-20 transition-all duration-500 transform cursor-pointer",
                      animateTimeline ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
                    )}
                    style={{ transitionDelay: `${index * 100}ms` }}
                    onClick={() => setActiveEvent(event.id)}
                  >
                    <div
                      className={cn(
                        "w-11 h-11 rounded-full flex items-center justify-center mb-2 transition-all z-10 font-bold",
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

            {/* Mobile Timeline */}
            <div className="md:hidden space-y-4">
              {communityEvents.map((event, index) => (
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
                      "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold",
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
          </div>
        </div>
      </div>

      <div className="relative h-[60vh] md:h-screen overflow-hidden group">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={selectedEvent.backgroundImage || "/placeholder.svg"}
            alt={`${selectedEvent.title} memories`}
            fill
            className="object-cover transition-all duration-500 group-hover:blur-sm group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Hover Overlay - Now properly contained */}
        <motion.div className="absolute inset-0 bg-black/70 flex items-center justify-center p-2 sm:p-4 md:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-center text-white w-full h-full flex flex-col justify-center max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-8 border border-white/20 max-h-full overflow-y-auto my-auto">
              <h3 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">{selectedEvent.title}</h3>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-6 mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm md:text-lg">
                <div className="flex items-center gap-1 sm:gap-2">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                  <span>{selectedEvent.date}</span>
                </div>
                <span className="hidden sm:inline">|</span>
                <div className="flex items-center gap-1 sm:gap-2">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                  <span>{selectedEvent.location}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm md:text-lg leading-relaxed opacity-90 max-w-2xl mx-auto mb-3 sm:mb-4 md:mb-6 line-clamp-4 sm:line-clamp-none">
                {selectedEvent.description}
              </p>

              <div className="mt-3 sm:mt-4 md:mt-8 pt-3 sm:pt-4 md:pt-6 border-t border-white/20">
                <Quote className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 mx-auto mb-2 sm:mb-3 md:mb-4 opacity-60" />
                <p className="text-xs sm:text-base md:text-xl italic mb-1 sm:mb-2 md:mb-3 line-clamp-3 sm:line-clamp-none">
                  "{selectedEvent.memberQuotes[0]?.quote}"
                </p>
                <p className="text-xs sm:text-sm opacity-75">- {selectedEvent.memberQuotes[0]?.name}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

     <div className="py-16 md:py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Member Testimonials</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">Hear what APEX means to our members</p>
            </div>

            {/* Carousel Layout */}
            <div
              className="relative overflow-hidden bg-white dark:bg-gray-700 rounded-xl shadow-lg"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {memberTestimonials.map((member, index) => (
                  <div key={member.id} className="w-full flex-shrink-0">
                    <div className="grid md:grid-cols-[1fr_2fr] gap-6 p-6 md:p-10">
                      <div className="flex flex-col items-center text-center">
                        <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                          <Image
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white">{member.name}</h3>
                        <p className="text-apex-red font-medium text-sm">{member.role}</p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{member.major}</p>
                      </div>
                      <div className="flex flex-col justify-center">
                        <div className="relative">
                          <Quote className="absolute -top-2 -left-2 w-6 h-6 text-gray-300 dark:text-gray-500" />
                          <p className="text-lg italic pl-6 pr-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                            {member.testimonial}
                          </p>
                        </div>
                        <div className="text-right mt-6">
                          <div className="font-signature text-3xl text-apex-red">{member.signature}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Carousel Navigation Dots */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {memberTestimonials.map((_, index) => (
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

              {/* Carousel Navigation Buttons */}
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
        </div>
      </div>
      </div>
  )
}
