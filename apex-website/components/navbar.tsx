"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Our Team", href: "/team" },
  { name: "Alumni", href: "/alumni" },
  { name: "Client Services", href: "/services" },
  { name: "Prospective Members", href: "/join" },
  { name: "Contact Us", href: "/contact" },
  {
    name: "Apply Now",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSf6rtQgTm84YtamSkkP38ruzoLwPCTaRcb1BvZRWw6EuQADLg/closedform",
    isExternal: true,
    isCallToAction: true,
  },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          {/* Updated Image component with proper error handling and fallback */}
          <div className="relative h-12 w-32">
            <Image
              src="/images/apex-logo.png"
              alt="APEX Consulting Group"
              fill
              style={{ objectFit: "contain" }}
              priority
              onError={(e) => {
                // Fallback to text if image fails to load
                const target = e.target as HTMLImageElement
                target.style.display = "none"
                const parent = target.parentElement
                if (parent) {
                  parent.innerHTML += '<span class="font-bold text-xl text-apex-red">APEX</span>'
                }
              }}
            />
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              target={item.isExternal ? "_blank" : undefined}
              rel={item.isExternal ? "noopener noreferrer" : undefined}
              className={cn(
                item.isCallToAction
                  ? "bg-apex-red text-white px-4 py-2 rounded-md font-bold hover:bg-red-700 transition-colors"
                  : "text-sm font-medium transition-colors hover:text-red-600",
                !item.isCallToAction && pathname === item.href
                  ? "text-red-600"
                  : !item.isCallToAction
                    ? "text-muted-foreground"
                    : "",
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <Button variant="ghost" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="container py-4 grid gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target={item.isExternal ? "_blank" : undefined}
                rel={item.isExternal ? "noopener noreferrer" : undefined}
                className={cn(
                  item.isCallToAction
                    ? "bg-apex-red text-white px-4 py-2 rounded-md font-bold hover:bg-red-700 transition-colors text-center"
                    : "text-sm font-medium transition-colors hover:text-red-600 block py-2",
                  !item.isCallToAction && pathname === item.href
                    ? "text-red-600"
                    : !item.isCallToAction
                      ? "text-muted-foreground"
                      : "",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
