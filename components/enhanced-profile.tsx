"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SocialLinks } from "@/components/social-links"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, MapPin, Mail, Phone, Languages, Clock, Briefcase, MessageCircle } from "lucide-react"
import { getPersonalInfo, getAboutInfo } from "@/lib/data"

export function EnhancedProfile() {
  const [activeTab, setActiveTab] = useState("about")

  const personalInfo = getPersonalInfo()
  const aboutInfo = getAboutInfo()

  return (
    <Card className="bg-zinc-900/70 border-zinc-800 backdrop-blur-sm col-span-1 flex flex-col">
      <CardContent className="p-0">
        {/* Profile Header - Improved mobile layout */}
        <div className="bg-gradient-to-r from-zinc-800/50 to-zinc-900/50 p-4 sm:p-6 flex flex-col items-center border-b border-zinc-800">
          <div className="flex flex-col sm:flex-col items-center w-full">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden mb-4 border-2 border-amber-700/20 ring-4 ring-zinc-800/50">
              <Image src="/nour-profile.png" alt="Nour Bakhti Marrakchi" fill className="object-cover" />
            </div>
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl font-bold">Nour Bakhti Marrakchi</h2>
              <p className="text-sm mb-1" style={{ color: "#f3edb9" }}>
                Responsable Marketing | Stratégie de marque personnelle | IA & Growth
              </p>
              <div className="flex items-center justify-center text-xs text-zinc-400 mb-3">
                <MapPin className="w-3 h-3 mr-1" />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {personalInfo.badges.map((badge, index) => (
              <Badge key={index} variant="outline" className="bg-zinc-800/50 hover:bg-zinc-700">
                {badge}
              </Badge>
            ))}
          </div>

          <SocialLinks socialLinks={personalInfo.social} />
        </div>

        {/* Tabbed Content - Mobile optimized */}
        <Tabs defaultValue="about" className="w-full" onValueChange={setActiveTab}>
          <div className="border-b border-zinc-800">
            <TabsList className="w-full bg-transparent border-b border-zinc-800 rounded-none h-auto p-0">
              <TabsTrigger
                value="about"
                className={`flex-1 rounded-none border-b-2 px-2 sm:px-4 py-2 text-xs sm:text-sm ${
                  activeTab === "about" ? "text-white" : "border-transparent text-zinc-400"
                }`}
                style={activeTab === "about" ? { borderColor: "#f3edb9" } : {}}
              >
                <User className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                About
              </TabsTrigger>
              <TabsTrigger
                value="contact"
                className={`flex-1 rounded-none border-b-2 px-2 sm:px-4 py-2 text-xs sm:text-sm ${
                  activeTab === "contact" ? "text-white" : "border-transparent text-zinc-400"
                }`}
                style={activeTab === "contact" ? { borderColor: "#f3edb9" } : {}}
              >
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Contact
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="about" className="p-4 sm:p-6 space-y-4 sm:space-y-6 focus:outline-none">
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-zinc-400 flex items-center">
                <User className="w-4 h-4 mr-2" style={{ color: "#f3edb9" }} />
                About Me
              </h3>
              <p className="text-sm">
                Responsable marketing passionné par le personal branding, les systèmes de croissance et
                l'automatisation. Je conçois et implémente des stratégies de contenu puissantes pour les CEO, fondateurs
                et studios digitaux. Mon objectif : connecter l'humain et la technologie, amplifier la valeur perçue, et
                accélérer la conversion.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-medium text-zinc-400 flex items-center">
                <Briefcase className="w-4 h-4 mr-2" style={{ color: "#f3edb9" }} />
                Professional Focus
              </h3>
              <div className="space-y-2">
                <div className="flex items-start">
                  <span style={{ color: "#f3edb9" }} className="mr-2">
                    •
                  </span>
                  <p className="text-sm">Brand strategy & storytelling structuré</p>
                </div>
                <div className="flex items-start">
                  <span style={{ color: "#f3edb9" }} className="mr-2">
                    •
                  </span>
                  <p className="text-sm">Création de systèmes de contenu scalable</p>
                </div>
                <div className="flex items-start">
                  <span style={{ color: "#f3edb9" }} className="mr-2">
                    •
                  </span>
                  <p className="text-sm">Positionnement haut de gamme pour les décideurs</p>
                </div>
                <div className="flex items-start">
                  <span style={{ color: "#f3edb9" }} className="mr-2">
                    •
                  </span>
                  <p className="text-sm">Automatisation IA & growth tools</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-medium text-zinc-400 flex items-center">
                <Languages className="w-4 h-4 mr-2" style={{ color: "#f3edb9" }} />
                Languages
              </h3>
              <div className="space-y-3">
                {aboutInfo.languages.map((language, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">{language.name}</span>
                      <span className="text-xs text-zinc-400">{language.proficiency}</span>
                    </div>
                    <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${language.level}%`,
                          background: "linear-gradient(to right, #f3edb9, #b45309)",
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="contact" className="p-4 sm:p-6 space-y-4 focus:outline-none">
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="w-5 h-5 mr-3 mt-0.5" style={{ color: "#f3edb9" }} />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm text-zinc-400 transition-colors break-all"
                    style={{ "--hover-color": "#f3edb9" } as React.CSSProperties}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#f3edb9")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-5 h-5 mr-3 mt-0.5" style={{ color: "#f3edb9" }} />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-sm text-zinc-400 transition-colors"
                    style={{ "--hover-color": "#f3edb9" } as React.CSSProperties}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#f3edb9")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MessageCircle className="w-5 h-5 mr-3 mt-0.5" style={{ color: "#25D366" }} />
                <div>
                  <h4 className="font-medium">WhatsApp</h4>
                  <a
                    href="https://wa.me/212604052330?text=Bonjour%20Nour,%20je%20souhaite%20discuter%20d'un%20projet%20de%20marketing%20digital."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-400 transition-colors"
                    style={{ "--hover-color": "#25D366" } as React.CSSProperties}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#25D366")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                  >
                    Envoyer un message
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-0.5" style={{ color: "#f3edb9" }} />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-sm text-zinc-400">{personalInfo.location}</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-5 h-5 mr-3 mt-0.5" style={{ color: "#f3edb9" }} />
                <div>
                  <h4 className="font-medium">Working Hours</h4>
                  <p className="text-sm text-zinc-400">{personalInfo.workingHours}</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Profile Footer - Availability Status */}
        <div className="p-3 sm:p-4 border-t border-zinc-800 flex items-center justify-center">
          <div className="flex items-center">
            <span
              className={`w-2 h-2 ${personalInfo.availableForWork ? "bg-green-500" : "bg-red-500"} rounded-full mr-2`}
            ></span>
            <span className="text-xs text-zinc-400">
              {personalInfo.availableForWork ? "Available for new projects" : "Not available for new projects"}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
