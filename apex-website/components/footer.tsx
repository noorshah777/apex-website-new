"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Facebook, Instagram, Linkedin, Twitter, Mail, MapPin, Phone, File, PencilIcon} from "lucide-react"

export default function EnhancedFooter() {
  return (
    <footer className="relative w-full">
      {/* Wave Divider */}
      <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute top-0 left-0 w-full h-full"
          fill="currentColor"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="text-background"
          ></path>
        </svg>
      </div>

      {/* Call to Action Section */}
      <div className="pt-16 bg-gradient-to-b from-apex-red to-red-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 py-12">
            {/* For Clients */}
            <div className="relative overflow-hidden rounded-2xl group transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-40 transition-opacity"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-apex-red/80 to-red-900/80"></div>
              <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=800')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>

              <div className="relative z-10 p-8 md:p-10 flex flex-col h-full">
                <div className="mb-6">
                  <div className="inline-block p-3 bg-white/20 rounded-xl mb-4">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M21 14H14V21H21V14Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 14H3V21H10V14Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21 3H14V10H21V3Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 3H3V10H10V3Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">For Organizations</h3>
                  <div className="h-1 w-16 bg-white/50 mt-2"></div>
                </div>

                <p className="mb-8 text-white/90 text-lg">
                  Partner with APEX to receive data-driven, strategic recommendations from our talented team of
                  consultants. We've helped over 130 organizations achieve their goals.
                </p>

                <div className="mt-auto">
                  <Button asChild size="lg" className="bg-white text-apex-red hover:bg-white/90 rounded-xl">
                    <Link href="/services" className="flex items-center gap-2">
                      Work With Us <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* For Prospective Members */}
            <div className="relative overflow-hidden rounded-2xl group transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-40 transition-opacity"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/80 to-black/80"></div>
              <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=800')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>

              <div className="relative z-10 p-8 md:p-10 flex flex-col h-full">
                <div className="mb-6">
                  <div className="inline-block p-3 bg-white/20 rounded-xl mb-4">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path d="M20 8V14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M23 11H17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">For Students</h3>
                  <div className="h-1 w-16 bg-white/50 mt-2"></div>
                </div>

                <p className="mb-8 text-white/90 text-lg">
                  Develop professional skills, work on real consulting projects, and join a supportive community that
                  will help you succeed in any career path you choose.
                </p>

                <div className="mt-auto">
                  <Button asChild size="lg" className="bg-apex-red text-white hover:bg-red-700 rounded-xl">
                    <Link href="/join" className="flex items-center gap-2">
                      Apply Now <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Logo and About */}
            <div className="md:col-span-4 space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/images/apex-logo.png"
                  alt="APEX Consulting Group"
                  width={120}
                  height={50}
                  className="bg-white p-2 rounded-md"
                />
              </div>
              <p className="text-gray-300">
                APEX Consulting Group is a pro-bono student-led consulting organization at the University of Michigan,
                providing strategic solutions to businesses and organizations.
              </p>
              <div className="flex space-x-4 mt-6">
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf6rtQgTm84YtamSkkP38ruzoLwPCTaRcb1BvZRWw6EuQADLg/closedform" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                  <PencilIcon className="h-5 w-5" />
                  <span className="sr-only">PencilIcon</span>
                </Link>
                <Link href="https://www.instagram.com/apexconsultingumich?igsh=MXE3OGFpaDA5dnJraA==" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="https://www.linkedin.com/company/apexconsultinggroup/posts/?feedView=all" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">Linkedin</span>
                </Link>
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSc-mBvMGKgyuG-h7AomOOVRq8SSRm9jknVB22Qy_SHFWRNFCw/viewform" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Mail</span>
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold mb-4 text-white">Navigation</h3>
              <nav className="flex flex-col space-y-3">
                <Link href="/" className="text-gray-300 hover:text-apex-red transition-colors">
                  Home
                </Link>
                <Link href="/team" className="text-gray-300 hover:text-apex-red transition-colors">
                  Our Team
                </Link>
                <Link href="/alumni" className="text-gray-300 hover:text-apex-red transition-colors">
                  Alumni
                </Link>
                <Link href="/services" className="text-gray-300 hover:text-apex-red transition-colors">
                  Services
                </Link>
              </nav>
            </div>

            {/* More Links */}
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
              <nav className="flex flex-col space-y-3">
                <Link href="/join" className="text-gray-300 hover:text-apex-red transition-colors">
                  Join Us
                </Link>
                <Link href="/contact" className="text-gray-300 hover:text-apex-red transition-colors">
                  Contact
                </Link>
                <Link href="/join#faq" className="text-gray-300 hover:text-apex-red transition-colors">
                  FAQ
                </Link>
                <Link href="https://creators.spotify.com/pod/profile/apex-consulting/" className="text-gray-300 hover:text-apex-red transition-colors">
                  Podcast
                </Link>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-4">
              <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-apex-red mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">
                    Ross School of Business
                    <br />
                    University of Michigan
                    <br />
                    701 Tappan Ave
                    <br />
                    Ann Arbor, MI 48109
                  </p>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-apex-red mr-3 flex-shrink-0" />
                  <a
                    href="mailto:info@apexconsulting.org"
                    className="text-gray-300 hover:text-apex-red transition-colors"
                  >
                    apex.board2025@umich.edu
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} APEX Consulting Group. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm text-gray-400">
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}