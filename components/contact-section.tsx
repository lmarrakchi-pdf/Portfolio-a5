import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"
import { UserIcon, Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react"
import { SocialLinks } from "@/components/social-links"
import { getPersonalInfo } from "@/lib/data"

export function ContactSection() {
  const personalInfo = getPersonalInfo()

  return (
    <Card className="bg-zinc-900/70 border-zinc-800 backdrop-blur-sm col-span-1 md:col-span-3 lg:col-span-4 overflow-hidden">
      <CardContent className="p-0">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* Contact Information */}
          <div className="bg-zinc-800/50 p-6 lg:p-8">
            <div className="flex items-center mb-6">
              <UserIcon className="w-5 h-5 mr-2" style={{ color: "#f3edb9" }} />
              <h3 className="text-lg font-medium">Contactez-moi</h3>
            </div>

            <div className="space-y-6">
              <p className="text-zinc-300">
                Je suis toujours intéressé par de nouveaux projets et opportunités. N'hésitez pas à me contacter si vous
                souhaitez collaborer ou simplement échanger !
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 mr-3 mt-0.5" style={{ color: "#f3edb9" }} />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm text-zinc-400 hover:text-zinc-300 transition-colors break-all"
                      style={{ "--hover-color": "#f3edb9" } as React.CSSProperties}
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-5 h-5 mr-3 mt-0.5" style={{ color: "#f3edb9" }} />
                  <div>
                    <h4 className="font-medium">Téléphone</h4>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-sm text-zinc-400 hover:text-zinc-300 transition-colors"
                      style={{ "--hover-color": "#f3edb9" } as React.CSSProperties}
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
                      className="text-sm text-zinc-400 hover:text-zinc-300 transition-colors"
                      style={{ "--hover-color": "#25D366" } as React.CSSProperties}
                    >
                      Envoyer un message
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 mt-0.5" style={{ color: "#f3edb9" }} />
                  <div>
                    <h4 className="font-medium">Localisation</h4>
                    <p className="text-sm text-zinc-400">{personalInfo.location}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-5 h-5 mr-3 mt-0.5" style={{ color: "#f3edb9" }} />
                  <div>
                    <h4 className="font-medium">Horaires de travail</h4>
                    <p className="text-sm text-zinc-400">{personalInfo.workingHours}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <h4 className="font-medium mb-3">Connectez-vous avec moi</h4>
                <SocialLinks socialLinks={personalInfo.social} />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 p-6 lg:p-8 max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-800/50">
            <h3 className="text-lg font-medium mb-6">Envoyez un message</h3>
            <ContactForm />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
