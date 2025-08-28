"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Instagram, Linkedin, Mail, MapPin, Music } from "lucide-react"
import Link from "next/link"
import PageHeader from "@/components/page-header"
import { submitContactForm } from "@/actions/contact-form"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{ success?: boolean; message?: string } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus(null)

    try {
      // Create FormData object from the form data
      const formDataObj = new FormData()
      Object.entries(formData).forEach(([key, value]) => {
        formDataObj.append(key, value)
      })

      // Submit the form using the server action
      const result = await submitContactForm(formDataObj)

      // Show success or error message
      setFormStatus(result)

      if (result.success) {
        // Reset form on success
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })

        toast({
          title: "Message Sent",
          description: result.message,
        })
      } else {
        toast({
          title: "Error",
          description: result.message,
        })
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setFormStatus({
        success: false,
        message: "There was an error sending your message. Please try again later.",
      })

      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

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

  return (
    <div>
      <PageHeader
        title="Contact Us"
        descriptions={[
          "Have questions about our services or interested in joining our team?",
          "Get in touch with us using the form below or through our contact information.",
          "We'd love to hear from you and answer any questions you may have.",
        ]}
      />

      <div className="py-10 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Subject of your message"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {formStatus && (
                    <div
                      className={`p-3 rounded-md ${formStatus.success ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}
                    >
                      {formStatus.message}
                    </div>
                  )}

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Reach out to us directly using the information below.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-red-600 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-muted-foreground">apex.board2025@umich.edu</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-red-600 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-muted-foreground">
                        Ross School of Business
                        <br />
                        University of Michigan
                        <br />
                        701 Tappan Ave
                        <br />
                        Ann Arbor, MI 48109
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Follow Us</CardTitle>
                  <CardDescription>Stay connected with us on social media and check out our podcast.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <Button variant="outline" size="icon" asChild>
                      <Link href="https://www.instagram.com/apexconsultingumich?igsh=MXE3OGFpaDA5dnJraA==" aria-label="Instagram">
                        <Instagram className="h-5 w-5" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <Link href="https://docs.google.com/forms/d/e/1FAIpQLSc-mBvMGKgyuG-h7AomOOVRq8SSRm9jknVB22Qy_SHFWRNFCw/viewform" aria-label="Mailing List">
                        <Mail className="h-5 w-5" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <Link href="https://www.linkedin.com/company/apexconsultinggroup/posts/?feedView=all" aria-label="LinkedIn">
                        <Linkedin className="h-5 w-5" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <Link href="https://creators.spotify.com/pod/profile/apex-consulting/" aria-label="Spotify Podcast">
                        <Music className="h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
