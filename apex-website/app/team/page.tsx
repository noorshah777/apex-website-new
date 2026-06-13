"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, Mail, Users } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import PageHeader from "@/components/page-header"


// Team Data 
const teamMembers = {
 eboard: [
   {
     name: "Sreejay Ramakrishnan",
     role: "Co-President",
     image: "/images/headshots/Board/SreejayR.jpeg",
     linkedin: "https://www.linkedin.com/in/sreejay-ramakrishnan/",
     email: "sreejayr@umich.edu",
   },


   {
     name: "Urmi Joglekar",
     role: "Co-President",
     image: "/images/headshots/Board/UrmiJ.JPG",
     linkedin: "https://www.linkedin.com/in/urmi-joglekar/",
     email: "urmij@umich.edu",
   },
   {
     name: "Ivan Dashkevich",
     role: "VP Internal Development",
     image: "/images/headshots/Board/IvanD.JPG",
     linkedin: "https://www.linkedin.com/in/idashkevich05/",
     email: "idashkev@umich.edu",
   },
   {
     name: "Jessica Youn",
     role: "VP Technology and Operations",
     image: "/images/headshots/Board/JessicaY.jpg",
     linkedin: "https://www.linkedin.com/in/jessicayoun/",
     email: "jyoun@umich.edu",
   },


   {
     name: "Mark Bokas",
     role: "VP External Relations",
     image: "/images/headshots/Board/MarkB.jpg",
     linkedin: "https://www.linkedin.com/in/markbokas/",
     email: "bokas@umich.edu",
   },


   {
     name: "Sorelle Kreter",
     role: "VP Client Acquisition",
     image: "/images/headshots/Board/SorelleK.jpeg",
     linkedin: "https://www.linkedin.com/in/sorelle-kreter/",
     email: "skreter@umich.edu",
   },
   {
     name: "Zain Syed",
     role: "VP Project Management",
     image: "/images/headshots/Board/ZainS.jpg",
     linkedin: "https://www.linkedin.com/in/zainsyedd/",
     email: "zainsy@umich.edu",
   },
 ],

members: [
  {
    name: "Aanya Rana",
    role: "Business Analyst",
    image: "/images/headshots/Members/AanyaR.jpg",
    linkedin: "https://www.linkedin.com/in/aanyarana/",
    email: "aanirana@umich.edu",
  },
  {
    name: "Adhiyan Anbarasu",
    role: "Business Analyst",
    image: "/images/headshots/Members/AdhiyanA.jpg",
    linkedin: "https://www.linkedin.com/in/adhiyan-anbarasu/",
    email: "adhiyan@umich.edu",
  },
  {
    name: "Adi Gaba",
    role: "Senior Advisor",
    image: "/images/headshots/Members/AdiG.jpg",
    linkedin: "https://www.linkedin.com/in/adi-gaba/",
    email: "adigaba@umich.edu",
  },
  {
    name: "Aparna Srikanth",
    role: "Senior Advisor",
    image: "/images/headshots/Members/AparnaS.JPG",
    linkedin: "https://www.linkedin.com/in/aparnasrikanth/",
    email: "aparnsr@umich.edu",
  },
  {
    name: "Avery Anslinger",
    role: "Business Analyst Lead",
    image: "/images/headshots/Members/AveryA.jpeg",
    linkedin: "https://www.linkedin.com/in/averyanslinger/",
    email: "averyans@umich.edu",
  },
  {
    name: "Ayden Simckes",
    role: "Senior Advisor",
    image: "/images/headshots/Members/AydenS.jpg",
    linkedin: "https://www.linkedin.com/in/ayden-simckes/",
    email: "asimckes@umich.edu",
  },
  {
    name: "Caleb Hyun",
    role: "Senior Advisor",
    image: "/images/headshots/Members/CalebH.jpg",
    linkedin: "https://www.linkedin.com/in/calebkhyun/",
    email: "ckhyun@umich.edu",
  },
  {
    name: "Cece Lynch",
    role: "Senior Advisor",
    image: "/images/headshots/Members/CeceL.jpg",
    linkedin: "https://www.linkedin.com/in/cecelynch/",
    email: "cclynch@umich.edu",
  },
  {
    name: "Chris Munroe",
    role: "Business Analyst",
    image: "/images/headshots/Members/ChrisM.jpg",
    linkedin: "https://www.linkedin.com/in/chrismunroe12/",
    email: "cmunroe@umich.edu",
  },
  {
    name: "Chris Shang",
    role: "Senior Advisor",
    image: "/images/headshots/Members/ChrisS.jpg",
    linkedin: "https://www.linkedin.com/in/chrissh/",
    email: "chrissh@umich.edu",
  },
  {
    name: "Chris Zhou",
    role: "Senior Advisor",
    image: "/images/headshots/Members/ChrisZ.png",
    linkedin: "https://www.linkedin.com/in/zhouchristopher/",
    email: "zhoucz@umich.edu",
  },
  {
    name: "David Gonzalez",
    role: "Project Manager",
    image: "/images/headshots/Members/DavidG.jpg",
    linkedin: "https://www.linkedin.com/in/davidgzzmtz/",
    email: "davidgmz@umich.edu",
  },
  {
    name: "Dennis Liu",
    role: "Senior Advisor",
    image: "/images/headshots/Members/DennisL.png",
    linkedin: "https://www.linkedin.com/in/dennis-c-liu/",
    email: "denliu@umich.edu",
  },
  {
    name: "Emir Khelifi",
    role: "Business Analyst",
    image: "/images/headshots/Members/EmirK.jpg",
    linkedin: "https://www.linkedin.com/in/emirkhelifi/",
    email: "khelifi@umich.edu",
  },
  {
    name: "Evan Swierczewski",
    role: "Business Analyst Lead",
    image: "/images/headshots/Members/EvanS.jpeg",
    linkedin: "https://www.linkedin.com/in/evan-swierczewski/",
    email: "etski@umich.edu",
  },
  {
    name: "George Perakis",
    role: "Senior Advisor",
    image: "/images/headshots/Members/GeorgeP.jpeg",
    linkedin: "https://www.linkedin.com/in/georgepperakis/",
    email: "gperakis@umich.edu",
  },
  {
    name: "Henry Chapman",
    role: "Senior Advisor",
    image: "/images/headshots/Members/HenryC.JPG",
    linkedin: "https://www.linkedin.com/in/henry-chapman-3436852b4/",
    email: "hcchap@umich.edu",
  },
  {
    name: "Irene Oh",
    role: "Business Analyst Lead",
    image: "/images/headshots/Members/IreneO.jpeg",
    linkedin: "https://www.linkedin.com/in/irenesoh1/",
    email: "irenesoh@umich.edu",
  },
  {
    name: "Jacob Harleton",
    role: "Senior Advisor",
    image: "/images/headshots/Members/JacobH.JPG",
    linkedin: "https://www.linkedin.com/in/jacobharleton/",
    email: "harleton@umich.edu",
  },
  {
    name: "Jiali Goodwin",
    role: "Project Manager",
    image: "/images/headshots/Members/JialiG.jpeg",
    linkedin: "https://www.linkedin.com/in/jiali-goodwin/",
    email: "jialig@umich.edu",
  },
  {
    name: "Jiya Sheth",
    role: "Senior Advisor",
    image: "/images/headshots/Members/JiyaS.png",
    linkedin: "https://www.linkedin.com/in/jiyaksheth/",
    email: "jiyakps@umich.edu",
  },
  {
    name: "Jonathan Yackel",
    role: "Senior Advisor",
    image: "/images/headshots/Members/JonathanY.png",
    linkedin: "https://www.linkedin.com/in/jonathanyackel/",
    email: "jyackel@umich.edu",
  },
  {
    name: "Katelyn Knickerbocker",
    role: "Project Manager",
    image: "/images/headshots/Members/KatelynK.jpg",
    linkedin: "https://www.linkedin.com/in/katelyn-knickerbocker-75103b332/",
    email: "kkately@umich.edu",
  },
  {
    name: "Kavya Doshi",
    role: "Senior Advisor",
    image: "/images/headshots/Members/KavyaD.jpeg",
    linkedin: "https://www.linkedin.com/in/kavya-doshi/",
    email: "doshika@umich.edu",
  },
  {
    name: "Kristin Choi",
    role: "Senior Advisor",
    image: "/images/headshots/Members/KristinC.jpeg",
    linkedin: "https://www.linkedin.com/in/kristinchoi05/",
    email: "krischoi@umich.edu",
  },
  {
    name: "Kritika Singh",
    role: "Senior Advisor",
    image: "/images/headshots/Members/KritikaS.jpg",
    linkedin: "https://www.linkedin.com/in/kritika-singhh/",
    email: "skritika@umich.edu",
  },
  {
    name: "Kyle Linnhan",
    role: "Business Analyst",
    image: "/images/headshots/Members/KyleL.jpg",
    linkedin: "https://www.linkedin.com/in/kyle-linnhan/",
    email: "klinnhan@umich.edu",
  },
  {
    name: "Lauren Allen",
    role: "Senior Advisor",
    image: "/images/headshots/Members/LaurenA.JPG",
    linkedin: "https://www.linkedin.com/in/laurenallen022/",
    email: "laurenaa@umich.edu",
  },
  {
    name: "Lauryn Hobbs",
    role: "Senior Advisor",
    image: "/images/headshots/Members/LaurynH.jpeg",
    linkedin: "https://www.linkedin.com/in/lauryn-hobbs/",
    email: "",
  },
  {
    name: "Laya Raj",
    role: "Business Analyst",
    image: "/images/headshots/Members/LayaR.jpeg",
    linkedin: "https://www.linkedin.com/in/layaraj1/",
    email: "layaraj@umich.edu",
  },
  {
    name: "Lorenzo Alessi",
    role: "Business Analyst Lead",
    image: "/images/headshots/Members/LorenzoA.jpeg",
    linkedin: "https://www.linkedin.com/in/lorenzoalessi/",
    email: "lcalessi@umich.edu",
  },
  {
    name: "Manya Gowda",
    role: "Business Analyst Lead",
    image: "/images/headshots/Members/ManyaG.jpeg",
    linkedin: "https://www.linkedin.com/in/manyagowda/",
    email: "manyag@umich.edu",
  },
  {
    name: "Matthew Berk",
    role: "Senior Advisor",
    image: "/images/headshots/Members/MatthewB.jpg",
    linkedin: "https://www.linkedin.com/in/matthew-berk-/",
    email: "mattberk@umich.edu",
  },
  {
    name: "Matthew Sugiyama",
    role: "Business Analyst",
    image: "/images/headshots/Members/MatthewS.jpeg",
    linkedin: "https://www.linkedin.com/in/matthewsugiyama/",
    email: "mattsugi@umich.edu",
  },
  {
    name: "Meera Manek",
    role: "Senior Advisor",
    image: "/images/headshots/Members/MeeraM.png",
    linkedin: "https://www.linkedin.com/in/meeramanek/",
    email: "mmanek@umich.edu",
  },
  {
    name: "Meghana Paruchuri",
    role: "Senior Advisor",
    image: "/images/headshots/Members/MeghanaP.jpg",
    linkedin: "https://www.linkedin.com/in/meghana-paruchuri/",
    email: "meghpar@umich.edu",
  },
  {
    name: "Nikhil Akkala",
    role: "Senior Advisor",
    image: "/images/headshots/Members/NikhilA.JPG",
    linkedin: "https://www.linkedin.com/in/nikhil-akkala/",
    email: "nakkala@umich.edu",
  },
  {
    name: "Noah Knutsen",
    role: "Senior Advisor",
    image: "/images/headshots/Members/NoahK.JPG",
    linkedin: "https://www.linkedin.com/in/noah-knutsen/",
    email: "nknutsen@umich.edu",
  },
  {
    name: "Noor Shah",
    role: "Senior Advisor",
    image: "/images/headshots/Members/NoorS.JPG",
    linkedin: "https://www.linkedin.com/in/noor-u-shah/",
    email: "noorshah@umich.edu",
  },
  {
    name: "Quinn Suvedi",
    role: "Business Analyst",
    image: "/images/headshots/Members/QuinnS.jpg",
    linkedin: "https://www.linkedin.com/in/quinn-suvedi/",
    email: "qsuvedi@umich.edu",
  },
  {
    name: "Reagan Masek",
    role: "Project Manager",
    image: "/images/headshots/Members/ReaganM.jpg",
    linkedin: "https://www.linkedin.com/in/reagan-masek/",
    email: "rmasek@umich.edu",
  },
  {
    name: "Ruthie Yu",
    role: "Project Manager",
    image: "/images/headshots/Members/RuthieY.JPG",
    linkedin: "https://www.linkedin.com/in/ruthie-yu/",
    email: "yuruthie@umich.edu",
  },
  {
    name: "Ryan Michaels",
    role: "Business Analyst",
    image: "/images/headshots/Members/RyanM.jpeg",
    linkedin: "https://www.linkedin.com/in/ryanjmichaels/",
    email: "michrj@umich.edu",
  },
  {
    name: "Ryan Wells",
    role: "Senior Advisor",
    image: "/images/headshots/Members/RyanW.jpeg",
    linkedin: "https://www.linkedin.com/in/ryanwells10/",
    email: "rpwells@umich.edu",
  },
  {
    name: "Sajni Patel",
    role: "Senior Advisor",
    image: "/images/headshots/Members/SajniP.jpeg",
    linkedin: "https://www.linkedin.com/in/sajnipatelll/",
    email: "sajni@umich.edu",
  },
  {
    name: "Sam Pelter",
    role: "Senior Advisor",
    image: "/images/headshots/Members/SamP.jpg",
    linkedin: "https://www.linkedin.com/in/samanthapelter/",
    email: "spelter@umich.edu",
  },
  {
    name: "Sanjay Tilak",
    role: "Senior Advisor",
    image: "/images/headshots/Members/SanjayT.JPG",
    linkedin: "https://www.linkedin.com/in/sanjay-tilak/",
    email: "sanjayt@umich.edu",
  },
  {
    name: "Sophia Rich",
    role: "Senior Advisor",
    image: "/images/headshots/Members/SophiaR.jpg",
    linkedin: "https://www.linkedin.com/in/sophiarich/",
    email: "sophr@umich.edu",
  },
  {
    name: "Sravya Kankatala",
    role: "Business Analyst",
    image: "/images/headshots/Members/SravyaK.jpg",
    linkedin: "https://www.linkedin.com/in/sravya-kankatala-163a413b6/",
    email: "srkankat@umich.edu",
  },
  {
    name: "Srivatsav Bendi",
    role: "Senior Advisor",
    image: "/images/headshots/Members/SrivatsavB.jpg",
    linkedin: "https://www.linkedin.com/in/sribendi/",
    email: "sribendi@umich.edu",
  },
  {
    name: "Suraj Makunur",
    role: "Business Analyst Lead",
    image: "/images/headshots/Members/SurajM.jpg",
    linkedin: "https://www.linkedin.com/in/surajmakunur/",
    email: "smakunur@umich.edu",
  },
  {
    name: "Uma Rao",
    role: "Business Analyst",
    image: "/images/headshots/Members/UmaR.jpeg",
    linkedin: "https://www.linkedin.com/in/umarao/",
    email: "umarao@umich.edu",
  },
  {
    name: "Vansh Baxi",
    role: "Senior Advisor",
    image: "/images/headshots/Members/VanshB.JPEG",
    linkedin: "https://www.linkedin.com/in/vanshbaxi/",
    email: "vbaxi@umich.edu",
  },
  {
    name: "Viraj Bajoria",
    role: "Senior Advisor",
    image: "/images/headshots/Members/VirajB.png",
    linkedin: "https://www.linkedin.com/in/virajbajoria/",
    email: "vbajoria@umich.edu",
  },
  {
    name: "Vivek Chanduri",
    role: "Senior Advisor",
    image: "/images/headshots/Members/VivekC.png",
    linkedin: "https://www.linkedin.com/in/vrchanduri/",
    email: "vivekrc@umich.edu",
  },
  {
    name: "Whalan Eid",
    role: "Business Analyst",
    image: "/images/headshots/Members/WhalanE.jpeg",
    linkedin: "https://www.linkedin.com/in/whalaneid/",
    email: "whalan@umich.edu",
  },
]
}

export default function TeamPage() {
  const [currentRole, setCurrentRole] = useState("eboard")

  const roles = [
    { key: "eboard", label: "Executive Board" },
    { key: "members", label: "Our Members"},
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
  <Select value={currentRole} onValueChange={setCurrentRole}>
    <SelectTrigger className="w-full border-1 border-gray-400 rounded-md bg-white p-4 text-base text-black">
      <SelectValue placeholder="Select a role" />
    </SelectTrigger>
    <SelectContent>
      {roles.map((role) => (
        <SelectItem key={role.key} value={role.key}>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-apex-red" />
            <span>{role.label}</span>
          </div>
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
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