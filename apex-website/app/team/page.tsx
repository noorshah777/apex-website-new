"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, Mail } from "lucide-react"
import PageHeader from "@/components/page-header"


// Team Data
const teamMembers = {
  eboard: [
    {
      name: "Sajni Patel",
      role: "President",
      image: "/images/headshots/Board/SajniP.jpeg",
      linkedin: "https://www.linkedin.com/in/sajnipatelll/",
      email: "sajni@umich.edu",
    },
    {
      name: "Sreejay Ramakrishnan",
      role: "VP Internal Development",
      image: "/images/headshots/Board/SreejayR.JPG",
      linkedin: "https://www.linkedin.com/in/sreejay-ramakrishnan/",
      email: "sreejayr@umich.edu",
    },
    {
      name: "George Perakis",
      role: "VP External Relations",
      image: "/images/headshots/Board/GeorgeP.jpeg",
      linkedin: "https://www.linkedin.com/in/georgepperakis/",
      email: "gperakis@umich.edu",
    },

    {
      name: "Urmi Joglekar",
      role: "VP Technology and Operations",
      image: "/images/headshots/Board/UrmiJ.JPG",
      linkedin: "https://www.linkedin.com/in/urmi-joglekar/",
      email: "urmij@umich.edu",
    },

    {
      name: "Ivan Dashkevich",
      role: "VP Project Management",
      image: "/images/headshots/Board/IvanD.JPG",
      linkedin: "https://www.linkedin.com/in/idashkevich05/",
      email: "idashkev@umich.edu",
    },

    {
      name: "Noah Knutsen",
      role: "VP Client Acquisition",
      image: "/images/headshots/Board/NoahK.JPG",
      linkedin: "https://www.linkedin.com/in/noah-knutsen/",
      email: "nknutsen@umich.edu",
    },

  ],
  projectManagers: [
    {
      name: "Aparna Srikanth",
      role: "Project Manager",
      image: "/images/headshots/PM/AparnaS.JPG",
      linkedin: "https://www.linkedin.com/in/aparnasrikanth/",
      email: "aparnsr@umich.edu",
    },
    {
      name: "Ayden Simckes",
      role: "Project Manager",
      image: "/images/headshots/PM/AydenS.jpg",
      linkedin: "https://www.linkedin.com/in/ayden-simckes/",
      email: "asimckes@umich.edu",
    },
    {
      name: "Chris Shang",
      role: "Project Manager",
      image: "/images/headshots/PM/ChrisS.jpg",
      linkedin: "https://www.linkedin.com/in/chrissh/",
      email: "chrissh@umich.edu",
    },
    {
      name: "Kristin Choi",
      role: "Project Manager",
      image: "/images/headshots/PM/KristinC.jpeg",
      linkedin: "https://www.linkedin.com/in/kristinchoi05/",
      email: "krischoi@umich.edu",
    },
    {
      name: "Sophia Rich",
      role: "Project Manager",
      image: "/images/headshots/PM/SophiaR.jpg",
      linkedin: "https://www.linkedin.com/in/sophiarich/",
      email: "sophr@umich.edu",
    }
  ],
  businessAnalystLeads: [
    {
      name: "Jacob Harleton",
      role: "Business Analyst Lead",
      image: "/images/headshots/BAL/JacobH.JPG",
      linkedin: "https://www.linkedin.com/in/jacobharleton/",
      email: "harleton@umich.edu",
    },
    {
      name: "Kavya Doshi",
      role: "Business Analyst Lead",
      image: "/images/headshots/BAL/KavyaD.jpeg",
      linkedin: "https://www.linkedin.com/in/kavya-doshi/",
      email: "doshika@umich.edu",
    },
    {
      name: "Kritika Singh",
      role: "Business Analyst Lead",
      image: "/images/headshots/BAL/KritikaS.jpg",
      linkedin: "https://www.linkedin.com/in/kritika-singhh/",
      email: "skritika@umich.edu",
    },
    {
      name: "Noor Shah",
      role: "Business Analyst Lead",
      image: "/images/headshots/BAL/NoorS.JPG",
      linkedin: "https://www.linkedin.com/in/noor-u-shah/",
      email: "noorshah@umich.edu",
    },
    {
      name: "Sorelle Kreter",
      role: "Business Analyst Lead",
      image: "/images/headshots/BAL/SorelleK.jpeg",
      linkedin: "https://www.linkedin.com/in/sorelle-kreter/",
      email: "skreter@umich.edu",
    }

  ],
  businessAnalysts: [    
    {
    name: "Chris Munroe",
    role: "Business Analyst",
    image: "/images/headshots/BA/ChrisM.jpg",
    linkedin: "https://www.linkedin.com/in/chrismunroe12/",
    email: "cmunroe@umich.edu",
    },
    {
      name: "David Gonzalez",
      role: "Business Analyst",
      image: "/images/headshots/BA/DavidG.jpg",
      linkedin: "https://www.linkedin.com/in/davidgzzmtz/",
      email: "davidgmz@umich.edu",
    },
    {
      name: "Katelyn Knickerbocker",
      role: "Business Analyst",
      image: "/images/headshots/BA/KatelynK.jpg",
      linkedin: "https://www.linkedin.com/in/katelyn-knickerbocker-75103b332/",
      email: "kkately@umich.edu",
    },
    {
      name: "Jessica Youn",
      role: "Business Analyst",
      image: "/images/headshots/BA/JessicaY.jpg",
      linkedin: "https://www.linkedin.com/in/jessicayoun/",
      email: "jyoun@umich.edu",
    },
    {
      name: "Jiali Goodwin",
      role: "Business Analyst",
      image: "/images/headshots/BA/JialiG.jpeg",
      linkedin: "https://www.linkedin.com/in/jiali-goodwin/",
      email: "jialig@umich.edu",
    },
    {
      name: "Mark Bokas",
      role: "Business Analyst",
      image: "/images/headshots/BA/MarkB.jpg",
      linkedin: "https://www.linkedin.com/in/markbokas/",
      email: "bokas@umich.edu",
    },
    {
      name: "Nikhil Akkala",
      role: "Business Analyst",
      image: "/images/headshots/BA/NikhilA.JPG",
      linkedin: "https://www.linkedin.com/in/nikhil-akkala/",
      email: "nakkala@umich.edu",
    },
    {
      name: "Reagan Masek",
      role: "Business Analyst",
      image: "/images/headshots/BA/ReaganM.jpg",
      linkedin: "https://www.linkedin.com/in/reagan-masek/",
      email: "rmasek@umich.edu",
    },
    {
      name: "Ryan Wells",
      role: "Business Analyst",
      image: "/images/headshots/BA/RyanW.jpeg",
      linkedin: "https://www.linkedin.com/in/ryanwells10/",
      email: "rpwells@umich.edu",
    },
    {
      name: "Sam Pelter",
      role: "Business Analyst",
      image: "/images/headshots/BA/SamP.jpg",
      linkedin: "https://www.linkedin.com/in/samanthapelter/",
      email: "spelter@umich.edu",
    },
    {
      name: "Sanjay Tilak",
      role: "Business Analyst",
      image: "/images/headshots/BA/SanjayT.JPG",
      linkedin: "https://www.linkedin.com/in/sanjay-tilak/",
      email: "sanjayt@umich.edu",
    },    
    {
      name: "Vansh Baxi",
      role: "Business Analyst",
      image: "/images/headshots/BA/VanshB.JPEG",
      linkedin: "https://www.linkedin.com/in/vanshbaxi/",
      email: "vbaxi@umich.edu",
    },
    {
      name: "Zain Syed",
      role: "Business Analyst",
      image: "/images/headshots/BA/ZainS.jpg",
      linkedin: "https://www.linkedin.com/in/zainsyedd/",
      email: "zainsy@umich.edu",
    },
  ],
  seniorAdvisors: [
    {
      name: "Adi Gaba",
      role: "Senior Advisor",
      image: "/images/headshots/SA/AdiG.jpg",
      linkedin: "https://www.linkedin.com/in/adi-gaba/",
      email: "adigaba@umich.edu",
    },
    {
      name: "Caleb Hyun",
      role: "Senior Advisor",
      image: "/images/headshots/SA/CalebH.JPG",
      linkedin: "https://www.linkedin.com/in/calebkhyun/",
      email: "ckhyun@umich.edu",
    },
    {
      name: "Cece Lynch",
      role: "Senior Advisor",
      image: "/images/headshots/SA/CeceL.jpg",
      linkedin: "https://www.linkedin.com/in/cecelynch/",
      email: "cclynch@umich.edu",
    },
    {
      name: "Chris Zhou",
      role: "Senior Advisor",
      image: "/images/headshots/SA/ChrisZ.png",
      linkedin: "https://www.linkedin.com/in/zhouchristopher/",
      email: "zhoucz@umich.edu",
    },
    {
      name: "Dennis Liu",
      role: "Senior Advisor",
      image: "/images/headshots/SA/DennisL.png",
      linkedin: "https://www.linkedin.com/in/dennis-c-liu/",
      email: "denliu@umich.edu",
    },
    {
      name: "Henry Chapman",
      role: "Senior Advisor",
      image: "/images/headshots/SA/HenryC.JPG",
      linkedin: "https://www.linkedin.com/in/henry-chapman-3436852b4/",
      email: "hcchap@umich.edu",
    },
    {
      name: "Jiya Sheth",
      role: "Senior Advisor",
      image: "/images/headshots/SA/JiyaS.png",
      linkedin: "https://www.linkedin.com/in/jiyaksheth/",
      email: "jiyakps@umich.edu",
    },
    {
      name: "Jonathan Yackel",
      role: "Senior Advisor",
      image: "/images/headshots/SA/JonathanY.png",
      linkedin: "https://www.linkedin.com/in/jonathanyackel/",
      email: "jyackel@umich.edu",
    },

    {
      name: "Lauren Allen",
      role: "Senior Advisor",
      image: "/images/headshots/SA/LaurenA.jpg",
      linkedin: "https://www.linkedin.com/in/laurenallen022/",
      email: "laurenaa@umich.edu",
    },

    {
      name: "Lauryn Hobbs",
      role: "Senior Advisor",
      image: "/images/headshots/SA/LaurynH.jpeg",
      linkedin: "https://www.linkedin.com/in/lauryn-hobbs/",
      email: "",
    },

    {
      name: "Matthew Berk",
      role: "Senior Advisor",
      image: "/images/headshots/SA/MatthewB.jpg",
      linkedin: "https://www.linkedin.com/in/matthew-berk-/",
      email: "mattberk@umich.edu",
    },

    {
      name: "Meghana Paruchuri",
      role: "Senior Advisor",
      image: "/images/headshots/SA/MeghanaP.jpg",
      linkedin: "https://www.linkedin.com/in/meghana-paruchuri/",
      email: "meghpar@umich.edu",
    },

    {
      name: "Meera Manek",
      role: "Senior Advisor",
      image: "/images/headshots/SA/MeeraM.png",
      linkedin: "https://www.linkedin.com/in/meeramanek/",
      email: "mmanek@umich.edu",
    },

    {
      name: "Ruthie Yu",
      role: "Senior Advisor",
      image: "/images/headshots/SA/RuthieY.JPG",
      linkedin: "https://www.linkedin.com/in/ruthie-yu/",
      email: "yuruthie@umich.edu",
    },

    {
      name: "Srivatsav Bendi",
      role: "Senior Advisor",
      image: "/images/headshots/SA/SrivatsavB.jpg",
      linkedin: "https://www.linkedin.com/in/sribendi/",
      email: "sribendi@umich.edu",
    },

    {
      name: "Viraj Bajoria",
      role: "Senior Advisor",
      image: "/images/headshots/SA/VirajB.png",
      linkedin: "https://www.linkedin.com/in/virajbajoria/",
      email: "vbajoria@umich.edu",
    },

    {
      name: "Vivek Chanduri",
      role: "Senior Advisor",
      image: "/images/headshots/SA/VivekC.png",
      linkedin: "https://www.linkedin.com/in/vrchanduri/",
      email: "vivekrc@umich.edu",
    },
  ],
}

export default function TeamPage() {
  const [currentRole, setCurrentRole] = useState("eboard")

  const roles = [
    { key: "eboard", label: "Executive Board" },
    { key: "projectManagers", label: "Project Managers" },
    { key: "businessAnalystLeads", label: "Business Analyst Leads" },
    { key: "businessAnalysts", label: "Business Analysts" },
    { key: "seniorAdvisors", label: "Senior Advisors" },
  ]

  return (
    <div>
      <PageHeader
        title="Our Team"
        descriptions={["Meet the Wonderful Minds Behind APEX Consulting", "Get to Know Us", "This is APEX"]}
      />

      <div className="py-10 md:py-16">
        <div className="container px-4 md:px-6">
          {/* Desktop Tabs */}
          <div className="hidden md:flex justify-center mb-8 overflow-x-auto">
            <div className="inline-flex items-center rounded-md border border-input bg-background p-1 text-muted-foreground">
              {roles.map((role) => (
                <button
                  key={role.key}
                  onClick={() => setCurrentRole(role.key)}
                  className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all ${
                    currentRole === role.key
                      ? "bg-apex-red text-white shadow-sm"
                      : "text-muted-foreground"
                  }`}
                >
                  {role.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Dropdown */}
          <div className="md:hidden mb-8">
            <select
              className="w-full border border-input rounded-md bg-background p-2 text-sm"
              value={currentRole}
              onChange={(e) => setCurrentRole(e.target.value)}
            >
              {roles.map((role) => (
                <option key={role.key} value={role.key}>
                  {role.label}
                </option>
              ))}
            </select>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {teamMembers[currentRole as keyof typeof teamMembers].map(
              (member, index) => (
                <Card
                  key={index}
                  className="overflow-hidden group hover:shadow-lg transition-all"
                >
                  <div className="relative w-full h-[500px]">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover object-top rounded-t-md"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4">
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="bg-white text-black"
                          asChild
                        >
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Linkedin className="h-4 w-4" />
                            <span className="sr-only">LinkedIn</span>
                          </a>
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="bg-white text-black"
                          asChild
                        >
                          <a href={`mailto:${member.email}`}>
                            <Mail className="h-4 w-4" />
                            <span className="sr-only">Email</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <CardDescription>{member.role}</CardDescription>
                  </CardHeader>
                </Card>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}