import Link from "next/link"
import { Button } from "@/components/ui/button"
import TypingEffect from "@/components/typing-effect"
import ParticlesBackground from "@/components/particles-background"
import ScrollSection from "@/components/scroll-section"

export default function Home() {
  const mottos = [
    "Redefining the peak of excellence",
    "Serving local businesses, innovative startups, and industry leaders",
    "The University of Michigan's premier consulting group",
  ]

  return (
    <div className="relative">
      {}
      <div className="relative">
        <ParticlesBackground />
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="container-fluid">
            <div className="flex flex-col items-center text-center space-y-6">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">APEX CONSULTING</h2>
              <div className="h-12 md:h-16">
                <TypingEffect texts={mottos} className="text-xl md:text-2xl font-medium text-white" />
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button asChild size="lg" className="bg-white text-red-600 hover:bg-white/90 font-bold text-lg">
                  <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf6rtQgTm84YtamSkkP38ruzoLwPCTaRcb1BvZRWw6EuQADLg/closedform">Apply Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Scrolling Sections */}
      <ScrollSection />


    </div>
  )
}