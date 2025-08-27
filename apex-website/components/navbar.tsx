"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

const navItems = [
  { name: "Home", href: "/" },
  {
    name: "Our Team",
    href: "/team",
    subItems: [
      { name: "Members", href: "/team" },
      { name: "Community", href: "/community" },
    ],
  },
  { name: "Alumni", href: "/alumni" },
  { name: "Client Services", href: "/services" },
  { name: "Prospective Members", href: "/join" },
  { name: "Contact Us", href: "/contact" },
  {
    name: "Apply Now",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSeK_10w9jF4o0lMyq8g8VprwF5lz7rb7U6MpIkdxoHC4-sApg/closedform",
    isExternal: true,
    isCallToAction: true,
  },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative h-12 w-32">
            <Image
              src="/images/apex-logo.png"
              alt="Apex Consulting Group"
              fill
              style={{ objectFit: "contain" }}
              priority
              onError={(e) => {
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
            <div key={item.href} className="relative">
              {item.subItems ? (
                <div
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-red-600 flex items-center gap-1",
                      pathname === "/team" || pathname === "/community" ? "text-red-600" : "text-muted-foreground",
                    )}
                  >
                    {item.name}
                    <ChevronDown className="h-3 w-3" />
                  </Link>

                  {activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-red-600 transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
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
              )}
            </div>
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
              <div key={item.href}>
                <Link
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
                {item.subItems && (
                  <div className="ml-4 mt-2 space-y-2">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="block text-xs text-muted-foreground hover:text-red-600 py-1 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
