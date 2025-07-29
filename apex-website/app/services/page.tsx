"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Calendar,
  Users,
  BarChart4,
  Lightbulb,
  Target,
  Puzzle,
  HeartHandshake,
  UserCheck,
  PresentationIcon as PresentationChart,
  ChevronDown,
} from "lucide-react"
import PageHeader from "@/components/page-header"
import { motion, AnimatePresence } from "framer-motion"
import LogoCarousel from '@/components/logo-carousel';


//Service Data
const services = [
  {
    id: "marketing",
    title: "Marketing",
    icon: <Target className="h-5 w-5" />,
    description:
      "Our marketing consulting services help businesses develop and implement effective marketing strategies to reach their target audience and achieve their business goals.",
    projects: [
      {
        id: "wnba-team",
        title: "WNBA Sports Team",
        clientOverview:
          "WNBA Team aiming to boost fan engagement, promote DEI, and grow in a competitive urban market, playing in a downtown arena.",
        problem:
          "The client approached APEX Consulting to address three core marketing challenges: (1) increasing ticket sales, (2) encouraging earlier fan arrival at games, and (3) broadening general brand awareness. Despite a championship-winning season and high-profile new athletes, the franchise struggled to convert interest into full attendance or repeat engagement, particularly among younger and first-time fans.",
        solution:
          "APEX deployed a comprehensive fan acquisition and retention strategy across multiple marketing channels. The team analyzed internal ticketing and demographic reports, conducted survey-based market research, and developed Ideal Customer Profiles (ICPs) to design tailored initiatives. APEX then evaluated the feasibility, cost, and ROI of over ten marketing tactics and provided the client with a toolkit for immediate implementation.",
        deliverables: [
          "Full campaign toolkit for influencer marketing with 50+ qualified local content creators",
          "Corporate partnership pitch deck and 25+ target firms for group ticket packages and brand alignment",
          "Revamped offseason social media content calendar with visual mockups and storytelling prompts",
          "Recommendations on school partnerships, brand activation events, and athlete engagement",
          "Cost-benefit analysis of transit and rideshare advertising with conversion modeling",
          "Prioritized roadmap for phased implementation and measurable impact tracking",
        ],
        semester: "Winter 2024",
      },
            {
        id: "micro-mobility",
        title: "Micro-Mobility Startup",
        clientOverview:
          "Leading micro-mobility company offering electric scooter rentals to urban commuters, students, and tourists via a global mobile platform.",
        problem:
              "The client needed to address two major gaps: slow customer acquisition and weak retention across key markets. Despite strong brand recognition, the company lacked a targeted marketing strategy to reach underrepresented demographics, and its ride frequency and loyalty metrics were falling short. The client needed actionable, data-backed strategies to attract new users—especially women and students—and convert occasional riders into daily users.",
        solution:
          "APEX focused on customer acquisition and retention. The team conducted customer segmentation, market research, influencer landscape analysis, and geographic prioritization. By combining qualitative insights with demographic and ridership data, APEX was able to develop targeted growth strategies tailored to user personas, cities, and behavioral trends, driving customer acquisition for the company within their desired market.",
        deliverables: [
          "Segmented Ideal Customer Profiles (ICPs) based on ride frequency, income, age, and use cases",
          "Influencer and user-generated content (UGC) strategy to increase brand visibility among underrepresented demographics",
          "Subscription and ride-pass partnership model for employers and campus organizations",
          "Tourism-focused scooter placement and guided route partnerships with local businesses",
          "Strategic fleet deployment recommendations based on climate, ridership timing, and urban layout",
          "Prioritized list of Tier 1 cities and campuses for targeted growth",
          "Framework for success metrics including ride frequency, session duration, and conversion from occasional to habitual riders",
        ],
        semester: "Winter 2023",
      },
    
    ],
  },
  {
    id: "process-optimization",
    title: "Process Optimization",
    icon: <Puzzle className="h-5 w-5" />,
    description:
      "We help businesses optimize their internal operations to improve efficiency, reduce costs, and enhance customer satisfaction.",
    projects: [
      {
        id: "grocery-store",
        title: "Grocery Store Chain",
        clientOverview:
          "Major Midwest-based retail chain operating over 250 stores and processing more than 1 million cases weekly across multiple distribution centers.",
        problem:
          "Despite leveraging cutting-edge automation for fulfillment, the client faced systemic inefficiencies in its warehouse receiving process. Incomplete pallets, inconsistent vendor configurations, and frequent reordering of slow-moving goods created bottlenecks. These inefficiencies, coupled with communication gaps in a usage-based automation model and the complexities of expanding into smaller-format stores, resulted in increased downtime, rising operational costs, and misaligned stakeholder incentives.",
        solution:
          "APEX implemented a three-phase strategy: first, we analyzed a year’s worth of warehouse receiving data to identify inefficiency patterns; next, we assessed automation usage and proposed enhancements for vendor coordination; finally, we developed a hybrid contract model to incentivize uptime and proposed scalable solutions for automation in smaller-format stores. Our approach combined data analytics, operational insights, and industry best practices to drive measurable improvements.",
        deliverables: [
          "A detailed breakdown of pallet inefficiencies across top product and vendor categories",
          "A redesigned open-book system framework to improve communication and accountability",
          "Hybrid contract model integrating performance-based incentives with operational stability",
          "A roadmap for scaling automation systems into modular, space-efficient fulfillment centers",
          "Vendor negotiation toolkit and resource database to support contract restructuring and KPI alignment", 
        ],
        semester: "Winter 2025",
      },
      {
        id: "capital-lender",
        title: "Working Capital Lender",
        clientOverview:
          "Direct lender of working capital loans and merchant cash advances",
        problem:
          "The client wanted to address inefficiencies in its internal processes. Inconsistencies in onboarding, employee engagement, and training—especially across Sales, Pricing, and Collections—were hindering performance. There was also a need to reevaluate PTO structure for commission-based employees and improve adoption of internal HR software. The client sought a cohesive, scalable plan to optimize workforce structure, reduce burnout, and increase team cohesion.",
        solution:
          "APEX took a holistic, department-specific approach to workforce optimization. Through a series of employee interviews, industry benchmarking, survey analysis, and case studies, the team assessed current work models, onboarding practices, and cultural pain points. The result was a set of targeted, high-impact strategies that improved employee engagement, hiring, retention, and productivity while reducing operational risk.",
        deliverables: [
          "Hybrid work model designs with department-specific structures to boost morale and efficiency",
          "Standardized onboarding frameworks featuring mentorship, experiential learning, and digital resource hubs",
          "Tailored recommendations for PTO compensation models with cost-benefit breakdowns",
          "Updated hiring strategies for high-turnover roles, including referral programs and job previews",
          "UI/UX recommendations to drive engagement with internal HR and payroll tools",
          "Strengths-based management approaches and low-cost engagement benefits for junior teams",
          "Company-wide survey insights to inform ongoing cultural improvement initiatives",
        ],
        semester: "Fall 2023",
      },
    ],
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    icon: <BarChart4 className="h-5 w-5" />,
    description:
      "Our expertise in both predicted and regressive data analysis help businesses leverage their data to gain insights, make informed decisions, and drive business growth.",
    projects: [
      {
        id: "ev-oem",
        title: "Electric Vehicle OEM",
        clientOverview:
          "Multi-billion dollar USA-based electric vehicle OEM",
        problem:
          "The client approached APEX with concerns regarding inefficiencies within a critical aspect of their supply chain. They required a data-driven solution to forecast the time and cost of key process actions by leveraging historical data. APEX was tasked with building a predictive model to support informed decision-making.",
        solution:
          "Leveraging Python data analysis libraries, APEX cleaned and merged two datasets totaling over 100,000 rows of historical data. The team conducted an exploratory data analysis to uncover drivers of cost and time variability in the process, while also designing two custom machine learning models that achieved 90% prediction accuracy.",
        deliverables: [
          "Two machine learning models (Gradient Boosting for cost prediction, Random Forest for time prediction), each achieving over 90% accuracy on key supply chain changes",
          "A scalable, modular framework to support seamless model updates as new data becomes available",
          "A competitive landscape analysis detailing how industry leaders leverage machine learning in supply chains, supporting strategic recommendations",
          "A detailed 'data dictionary' documenting 40+ columns from the original dataset to ensure transparency and reproducibility",
          "A suite of twelve Python-based visualizations uncovering key trends driving cost and time variability",
        ],
        semester: "Winter 2025",
      },
      {
        id: "vr-training",
        title: "VR Training Provider",
        clientOverview:
          "VR training provider offering custom safety, onboarding, and upskilling modules for enterprise clients.",
        problem:
          "The client approached APEX Consulting to uncover data-driven strategies to improve customer retention and refine their client acquisition pipeline. While their platform demonstrated high initial usage, many clients experienced sharp drop-offs over time. With limited internal data analytics capacity, the client needed help cleaning and analyzing usage data to inform strategic decisions on pricing, outreach, and customer engagement.",
        solution:
          "APEX focused on leveraging internal data to identify patterns in churn, usage behavior, and client success. The team conducted quantitative analysis, industry benchmarking, and user segmentation to identify high-fit customer profiles and develop targeted outreach strategies. Alongside retention initiatives, APEX also re-evaluated pricing models and designed scalable acquisition campaigns using marketing automation tools.",
        deliverables: [
          "Retention analysis identifying platform usage as the strongest predictor of churn",
          "Ideal Customer Profile (ICP) development based on company size, industry, and usage behavior",
          "Revised pricing model favoring per-session billing to incentivize engagement",
          "Certification and gamification strategies to promote continued platform use",
          "Website audit with search engine and inbound lead optimization",
          "Data-backed outreach plan using targeted email automation tools",
          "Client segmentation and outreach playbooks for quick-service, energy, and nonprofit sectors",
          "Recommendations for usage tracking, goal-setting, and customer success check-ins",
        ],
        semester: "Winter 2024",
      },

    ],
  },
  {
    id: "market-research",
    title: "Market Research",
    icon: <Lightbulb className="h-5 w-5" />,
    description:
      "We provide comprehensive market research services to help businesses understand their target market, competitors, and industry trends.",
    projects: [
      {
        id: "food-delivery",
        title: "Online Food Delivery Platform",
        clientOverview:
          "Major US online food ordering and delivery service connecting customers with local restaurants ",
        problem:
          "The client approached APEX while evaluating expansion into the B2B catering space but lacked clarity on the competitive landscape and where the strongest market opportunities lay. To support strategic decision-making, they required a detailed analysis of direct, indirect, and M&A competitors, as well as segmented market sizing by region and industry.",
        solution:
          "To address the client’s uncertainty around entering the B2B catering space, APEX took a two-phased approach: a competitive landscape analysis and segmented market sizing. The team evaluated direct, indirect, and M&A competitors to understand offerings and acquisition strategies, then conducted regional and industry sizing using primary (e.g., cold calls, surveys) and secondary research. These insights informed key growth drivers and a clear go-to-market strategy.",
        deliverables: [
          "Competitive landscape analysis of direct and indirect players",
          "Proposed acquisition strategy and diligence with synergy evaluation",
          "Industry and geographic segmentation analysis",
          "TAM, SAM, SOM calculations with detailed assumptions",
          "Survey insights on catering frequency, customer profiles, and order preferences",
          "Recommended expansion strategy with high-potential regions and industries",
        ],
        semester: "Fall 2023",
      },
      {
        id: "language-learning",
        title: "Language Learning Platform",
        clientOverview:
          "Top language learning platform with 1 M+ subscribers, expanding into new engagement-driven and culture-focused revenue streams.",
        problem:
          "The client engaged APEX Consulting to assess the viability of launching an integrated e-commerce experience focused on culturally relevant products for language learners. With an aging millennial user base motivated by travel and cultural exploration, the client needed a go-to-market strategy to monetize user interest beyond subscription content.",
        solution:
          "APEX conducted an in-depth market research initiative focused on user behavior, competitor analysis, product selection, and partnership models. The team analyzed user demographic data, evaluated third-party marketplaces, and modeled financial outcomes for various revenue structures. A final implementation strategy tied product discovery to in-app learning progress to maximize conversion and retention.",
        deliverables: [
          "Market sizing and customer segmentation analysis for cultural e-commerce within a language learning context",
          "Commission-based monetization model optimized by price tier and partner profile",
          "Annual revenue projection model based on user conversion assumptions and average order value",
          "Partnership playbook for outreach to small businesses and artisan vendor",
          "UX and Figma mockups for mobile integration, including progress-based incentives and personalized recommendations",
          "Full go-to-market roadmap covering Shopify backend, marketing strategies, and engagement milestones",
        ],
        semester: "Winter 2024",
      },
    ],
  },
  {
    id: "growth",
    title: "Growth",
    icon: <TrendingUp className="h-5 w-5" />,
    description:
      "Our growth consulting services help businesses identify and capitalize on opportunities for expansion and revenue growth.",
    projects: [
      {
        id: "ai-startup",
        title: "B2B Voice AI Startup",
        clientOverview:
          "AI voice tech startup offering multilingual transcription and automation for customer service, healthcare, education, and software.",
        problem:
          "The client approached APEX Consulting seeking to accelerate user growth across its B2B and B2C offerings by 10x. While their voice AI technology had proven advantages in accuracy and cost, they faced high drop-off rates during onboarding, limited adoption among non-technical users, and unclear strategies for expanding into new customer segments with a constrained marketing budget.",
        solution:
          "To drive scalable growth, the APEX team took a full-funnel approach across acquisition, conversion, and retention. We conducted user research, analyzed behavioral data, and evaluated the competitive landscape to identify pain points in onboarding and customer engagement. The team then delivered targeted product and marketing recommendations to help the client unlock new users and deepen retention across priority industries.",
        deliverables: [
          "Full-funnel user journey analysis identifying conversion and retention bottlenecks",
          "Redesign recommendations for landing pages and demo experiences to reduce technical barriers",
          "Segmentation strategy tailored to non-technical and industry-specific users",
          "Benchmarking against key voice technology competitors",
          "Vertical-specific dashboard concepts for customer service, healthcare, and education clients",
          "Referral and brand awareness campaign ideas to boost organic acquisition",
          "Go-to-market recommendations targeting education and career development partners",
          "Community feature proposals to build engagement and unlock UGC-based growth",
        ],
        semester: "Winter 2025",
      },
      {
        id: "construction-tech",
        title: "Construction Tech Startup",
        clientOverview:
          "Construction tech startup building 3D-printed modular homes with proprietary materials, focusing on sustainability, speed, and cost-efficiency for homeowners and developers.",
        problem:
          "The client approached APEX Consulting to guide their U.S. expansion strategy and develop a pricing model aligned with regional construction economics and buyer willingness to pay. With a goal of scaling into markets like California and Florida, the client needed to benchmark costs, justify premium pricing, and identify high-growth cities for developer outreach.",
        solution:
          "APEX conducted a comprehensive go-to-market analysis combining cost modeling, market research, and geographic expansion strategy. We evaluated upkeep savings, benchmarked traditional construction costs, and analyzed buyer preferences for sustainable and customizable housing. Our deliverables equipped the client to optimize pricing, communicate product value, and expand into promising regions with data-backed confidence.",
        deliverables: [
          "Regional cost benchmarking model comparing traditional vs. tech-enabled home construction and upkeep",
          "Price premium analysis for sustainability and customization using multi-country studies and market proxies",
          "Willingness-to-pay estimates for energy-efficient design and durable construction materials",
          "Expansion roadmap identifying top 10 U.S. small, medium, and large cities by tech-readiness, housing trends, and demographics",
          "Developer segmentation and outreach strategy for Miami-Dade, Bay Area, Salt Lake City, and other target markets",
          "Excel-based pricing calculator to help sales teams adjust quotes by region, home size, and design tier",
          "Strategic risks and mitigants for scaling into regulated or climate-sensitive regions"
        ],
        semester: "Fall 2023",
      },
    ],
  },
  {
    id: "strategy",
    title: "Strategy",
    icon: <Puzzle className="h-5 w-5" />,
    description:
      "We help businesses develop and implement effective business strategies to achieve their long-term goals and objectives.",
    projects: [
      {
        id: "healthcare-tech",
        title: "Healthcare Technology Startup",
        clientOverview:
          "Healthcare technology startup focused on enabling secure, patient-centered data sharing and advancing digital health research.",
        problem:
          "The client lacked a standardized pricing model and relied on manual quote generation for each customer, resulting in inconsistent pricing, delayed turnaround times, and customer confusion regarding how pricing was determined. This inefficiency created friction in the sales process and hindered scalability as the business grew. Without a clear pricing framework, it was also difficult to communicate product value or adapt pricing to different customer segments.",
        solution:
          "To solve this, APEX implemented a structured three-phase strategy comprising detailed research, strategic pricing development, and iterative testing. The team assessed the client’s product portfolio and current pricing processes, then conducted market research including competitor benchmarking, customer data analysis, and expert interviews. These findings informed the development of a streamlined pricing framework and an interactive calculator for the client’s website, enhancing transparency and operational efficiency.",
        deliverables: [
          "5 Annotated Competitor Expert Interview Transcripts",
          "Client and Competitor Case Studies",
          "In-Depth Pricing Model Framework",
          "Product Bundling Based on Client Value and Cost Structure",
          "2 Interactive Figma Mockups for Website Implementation",
          "Standardized Pricing Calculator Framework",
          "Implementation Timeline and Feasibility Assessment",
          "Risks and Mitigation Plan",
        ],
        semester: "Fall 2024",
      },

      {
        id: "music-streaming",
        title: "Music Streaming Platform",
        clientOverview:
          "An all-in-one platform empowering emerging music creators to record, edit, promote, and distribute their work.",
        problem:
          "The client engaged APEX to address a decline in user growth coupled with increasing user attrition. Despite a strong brand presence, they lacked a cohesive strategy to re-engage existing users while attracting new ones in key target demographics. Internal resources had been stretched thin across digital and live initiatives, making it difficult to prioritize high-impact engagement strategies.",
        solution:
          "APEX began by analyzing user engagement data to identify high-potential customer segments for targeted growth. The team conducted user surveys, in-depth interviews, and market research to uncover key motivators and pain points. These insights shaped a comprehensive growth playbook with initiative recommendations, projected outcomes, and cost estimates. The playbook was packaged into a full implementation program with a rollout timeline, event strategy, and marketing collateral.",
        deliverables: [
          "Survey Results and Analysis",
          "Long-Form Interview Transcripts",
          "Growth and Retention Strategy Playbook",
          "Implementation Guidelines and Roadmap",
          "Cost Model for Recommended Initiatives",
          "Supporting Marketing Materials"
        ],
        semester: "Summer 2024",
      },
    ],
  },
]

// Process steps for the animated process section
const processSteps = [
  {
    number: 1,
    title: "Client Onboarding",
    description:
      "Initial meeting with our VP Projects and VP Client Acquisition to understand your business needs and establish project scope. All services are provided pro bono.",
    icon: <HeartHandshake className="h-6 w-6" />,
  },
  {
    number: 2,
    title: "Team Assignment",
    description:
      "You'll meet your dedicated Project Manager (PM) and Business Analyst Lead (BAL) who will serve as your primary points of contact throughout the 8-week engagement.",
    icon: <UserCheck className="h-6 w-6" />,
  },
  {
    number: 3,
    title: "Data Analysis",
    description:
      "Our team conducts thorough research and analysis, working closely with you to gather insights and develop strategic recommendations.",
    icon: <BarChart4 className="h-6 w-6" />,
  },
  {
    number: 4,
    title: "Deliverables",
    description:
      "We provide formal midpoint and final deliverables to ensure your organization receives maximum value from our partnership.",
    icon: <PresentationChart className="h-6 w-6" />,
  },
]

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("marketing")
  const [activeProject, setActiveProject] = useState<Record<string, string>>({
    marketing: "wnba-team",
    "process-optimization": "grocery-store",
    "data-analytics": "ev-oem",
    "market-research": "food-delivery",
    growth: "ai-startup",
    strategy: "healthcare-tech",
  })
  const [showDropdown, setShowDropdown] = useState<string | null>(null)

  // Handle tab change
  const handleTabChange = (value: string) => {
    setActiveTab(value)
    // Don't reset the active project when changing tabs
  }

  // Handle project selection
  const handleProjectSelect = (serviceId: string, projectId: string) => {
    setActiveProject((prev) => ({
      ...prev,
      [serviceId]: projectId,
    }))
    setShowDropdown(null)
  }

  // Toggle dropdown visibility
  const toggleDropdown = (serviceId: string) => {
    setShowDropdown(showDropdown === serviceId ? null : serviceId)
  }

  // Get current service and project
  const currentService = services.find((service) => service.id === activeTab)
  const currentProject = currentService?.projects.find((project) => project.id === activeProject[activeTab])

  return (
    <div>
      <PageHeader
        title="Client Services"
        descriptions={[
          "APEX Consulting Group offers a wide range of consulting services to help businesses achieve their goals.",
          "Our team delivers data-driven, strategic solutions across various industries and business challenges.",
          "Explore our service areas and case studies to learn how we can help your organization succeed.",
        ]}
      />

      <div className="py-10 md:py-16">
        <div className="container px-4 md:px-6">
          {/* Animated Process Section */}
          <div className="mb-24">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl font-bold mb-4">Our Consulting Process</h2>
              <p className="text-muted-foreground">
                Our structured 8-week pro bono consulting process delivers maximum value to our clients.
              </p>
            </div>
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2 z-0"></div>

              <div className="relative z-10 space-y-16">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    className={`flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8`}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 bg-gray-400 rounded-full opacity-20 animate-ping"></div>
                      <div className="relative bg-gradient-to-br from-gray-700 to-gray-900 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg z-20">
                        {step.icon}
                      </div>
                    </div>

                    <div className="flex-1">
                      <div
                        className={`text-6xl font-bold text-gray-100 dark:text-gray-800 ${
                          index % 2 === 0 ? "text-left" : "text-right"
                        }`}
                      >
                        {step.number}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Past Projects */}
          <div className="mt-12">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl font-bold mb-4">Our Past Projects</h2>
              <p className="text-muted-foreground">
                From strategic initiatives to technical projects, explore our diverse portfolio of client work. Our consultants are also equipped to address challenges beyond these areas, bringing versatile expertise to meet your evolving needs.
              </p>
            </div>

            {/* Logo Carousel */}
            <LogoCarousel />

            <Tabs defaultValue="marketing" className="w-full" onValueChange={handleTabChange}>
              <TabsList className="grid grid-cols-3 md:grid-cols-6 w-full mb-8">
                {services.map((service) => (
                  <TabsTrigger key={service.id} value={service.id} className="flex items-center gap-2">
                    {service.icon}
                    {service.title}
                  </TabsTrigger>
                ))}
              </TabsList>

              <AnimatePresence mode="wait">
                {services.map((service) => (
                  <TabsContent key={service.id} value={service.id} className="mt-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-8"
                    >
                      <div>
                        <h2 className="text-3xl font-bold flex items-center gap-2">
                          <span className="text-apex-red">{service.icon}</span>
                          {service.title} Consulting
                        </h2>
                        <p className="text-muted-foreground mt-2">{service.description}</p>
                      </div>

                      {/* Project Selection Dropdown */}
                      <div className="relative">
                        <button
                          onClick={() => toggleDropdown(service.id)}
                          className="flex items-center justify-between min-w-[200px] w-auto max-w-full p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                        >
                          <span className="font-medium">
                            {service.projects.find((p) => p.id === activeProject[service.id])?.title ||
                              "Select a project"}
                          </span>
                          <ChevronDown
                            className={`h-5 w-5 transition-transform ${
                              showDropdown === service.id ? "transform rotate-180" : ""
                            }`}
                          />
                        </button>

                        {/* Dropdown Menu */}
                        {showDropdown === service.id && (
                          <div className="absolute z-10 min-w-[200px] w-auto max-w-[400px] mt-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1">
                            {service.projects.map((project) => (
                              <button
                                key={project.id}
                                onClick={() => handleProjectSelect(service.id, project.id)}
                                className={`w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                                  activeProject[service.id] === project.id
                                    ? "bg-gray-100 dark:bg-gray-700 font-medium"
                                    : ""
                                }`}
                              >
                                {project.title}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Case Study Card */}
                      {currentProject && (
                        <Card className="overflow-hidden border-none shadow-lg">
                          <CardContent className="p-0">
                            <div className="bg-gradient-to-r from-apex-red to-red-700 p-4 text-white">
                              <h3 className="text-xl font-bold">{currentProject.title}</h3>
                              <div className="flex items-center gap-2 mt-1 text-sm">
                                <Calendar className="h-4 w-4" />
                                <span>Project Semester: {currentProject.semester}</span>
                              </div>
                            </div>

                            <div className="p-6 space-y-8">
                              {/* Client Overview Section */}
                              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                                <h4 className="text-lg font-semibold flex items-center gap-2 mb-3">
                                  <Users className="h-5 w-5 text-apex-red" />
                                  Client Overview
                                </h4>
                                <p>{currentProject.clientOverview}</p>
                              </div>

                              {/* Problem & Solution Sections */}
                              <div className="grid md:grid-cols-2 gap-6">
                                <motion.div
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.1 }}
                                  className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6"
                                >
                                  <h4 className="text-lg font-semibold flex items-center gap-2 mb-3 text-blue-700 dark:text-blue-300">
                                    <Target className="h-5 w-5" />
                                    The Challenge
                                  </h4>
                                  <p className="text-gray-700 dark:text-gray-300">{currentProject.problem}</p>
                                </motion.div>

                                <motion.div
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.2 }}
                                  className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6"
                                >
                                  <h4 className="text-lg font-semibold flex items-center gap-2 mb-3 text-green-700 dark:text-green-300">
                                    <Lightbulb className="h-5 w-5" />
                                    Our Approach
                                  </h4>
                                  <p className="text-gray-700 dark:text-gray-300">{currentProject.solution}</p>
                                </motion.div>
                              </div>

                              {/* Deliverables Section */}
                              <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border-l-4 border-apex-red"
                              >
                                <h4 className="text-lg font-semibold flex items-center gap-2 mb-4 text-apex-red">
                                  <CheckCircle2 className="h-5 w-5" />
                                  Key Deliverables
                                </h4>
                                <ul className="space-y-4">
                                  {currentProject.deliverables.map((deliverable, index) => (
                                    <motion.li
                                      key={index}
                                      className="flex items-start"
                                      initial={{ opacity: 0, x: -20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: 0.3 + index * 0.1 }}
                                    >
                                      <div className="bg-green-100 dark:bg-green-900 rounded-full p-1 mr-3 flex-shrink-0 mt-0.5">
                                        <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                                      </div>
                                      <span className="text-gray-700 dark:text-gray-300">{deliverable}</span>
                                    </motion.li>
                                  ))}
                                </ul>
                              </motion.div>
                            </div>
                          </CardContent>
                        </Card>
                      )}

                      <div className="flex justify-center">
                        <Button asChild size="lg" className="bg-gray-800 hover:bg-gray-700">
                          <Link href="/contact" className="flex items-center gap-2">
                            Inquire About This Service <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </motion.div>
                  </TabsContent>
                ))}
              </AnimatePresence>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
