"use client";

import Image from "next/image";
import { useState } from "react";

const traditions = [
  {
    image: "/images/join/chi.JPEG",
    title: "Cross-Consulting Date Party",
    description: "When you join APEX, you'll be invited to events like our semesterly date party with other consulting clubs.",
  },

  {
    image: "/images/join/bean.JPEG",
    title: "Chicago Trek",
    description: "Every year, we take a trip to Chicago to visit top companies, reconnect with our alumni, and explore the city.",
  },
  {
    image: "/images/join/cider.JPEG",
    title: "Fall Cider Mill",
    description: "In the fall, we visit a cider mill to enjoy the season and each other's company.",
  },
  {
    image: "/images/join/football.JPEG",
    title: "Cross-Consulting Flag Football",
    description: "Along with date party, we mix with other consulting clubs at events like the annual flag football tournament.",
  },
  {
    image: "/images/join/friendsgiving.JPEG",
    title: "Friendsgiving Potluck",
    description: "As winter rolls around, we have a potluck to celebrate the season and each other.",
  },
  {
    image: "/images/join/gameday.JPEG",
    title: "Michigan Gameeday Tailgates",
    description: "There's always a group of APEX members tailgating before each home game! We often mix with other clubs on campus to have fun and make friends.",
  },
  {
    image: "/images/join/law.JPEG",
    title: "Law Quad Picnics",
    description: "When sunny days come around, we reward suffering through a Michigan winter with picnics on the Law Quad.",
  },
  {
    image: "/images/join/mckinsey.JPEG",
    title: "Chicago Company Visits",
    description: "We learn from the best in consulting. Each year, we have APEX alumni from top consulting, finance, and tech companies show us around their offices and share their experiences.",
  },
  {
    image: "/images/join/newbie.JPEG",
    title: "Newbie Welcome Party",
    description: "We love our new members! Your new member semester will be one of the most rewarding experiences of college`.",
  },
  {
    image: "/images/join/sand.JPEG",
    title: "Fall Retreat",
    description: "We have a retreat every fall to bond with our members and build our community.",
  },
  {
    image: "/images/join/welcomeweek.JPEG",
    title: "Welcome Week Party",
    description: "It's always a great time seeing old friends each new semester.",
  },
];

const TraditionsSection = () => {
  const [rotatedTraditions] = useState(() =>
    traditions.map((tradition) => ({
      ...tradition,
      rotation: Math.random() * 6 - 3,
    }))
  );

  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Our Community
        </h2>
        <blockquote className="mb-8 p-6 bg-white dark:bg-gray-800 border-l-4 border-red-500 rounded-r-lg shadow-md max-w-3xl mx-auto">
          <p className="italic text-lg text-gray-700 dark:text-gray-300">
            "Looking back, I remember the countless laughs, late-night bondings, and all the hard work we put in. The friends and memories made are truly unique and will always make APEX something I am always grateful for!"
          </p>
          <footer className="mt-4 text-right text-sm text-gray-600 dark:text-gray-400">
            — Kushal Sanjeev, APEX Alumni
          </footer>
        </blockquote>
        <div className="relative bg-red-100 dark:bg-red-900/50 p-6 rounded-lg shadow-lg border-4 border-red-300 dark:border-red-700">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
            }}
          ></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {rotatedTraditions.map((tradition, index) => (
              <div
                key={index}
                className="group relative cursor-pointer"
                style={{
                  transform: `rotate(${tradition.rotation}deg)`,
                }}
              >
                <div className="relative w-full h-80">
                  <Image
                    src={tradition.image}
                    alt={tradition.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-md border-4 border-white dark:border-gray-300"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 rounded-lg flex items-center justify-center">
                  <div className="text-center text-white opacity-0 group-hover:opacity-100 p-4">
                    <h3 className="text-xl font-bold">{tradition.title}</h3>
                    <p className="mt-2 text-sm">{tradition.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TraditionsSection; 