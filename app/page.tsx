import type React from "react"
import { GlobeIcon, CodeIcon, BriefcaseIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ProjectCard } from "@/components/project-card"
import { getAllProjects } from "@/lib/data"
import { ExperienceCard } from "@/components/experience-card"
import { EnhancedScrollIndicator } from "@/components/enhanced-scroll-indicator"
import { AnimatedSection } from "@/components/animated-section"
import { EnhancedProfile } from "@/components/enhanced-profile"
import { CredentialsSection } from "@/components/credentials-section"
import { PortfolioHeader } from "@/components/portfolio-header"
import { getTechnicalSkillsInfo } from "@/lib/data"

const SkillTagComponent = ({ children }: { children: React.ReactNode }) => {
  return <div className="px-2 py-1 bg-zinc-800 rounded-full text-xs font-medium text-zinc-400">{children}</div>
}

export default function Home() {
  const projects = getAllProjects()
  const technicalSkills = getTechnicalSkillsInfo()

  const experienceInfo = [
    {
      title: "Responsable Marketing",
      company: "Mooroot Studio",
      period: "2025 – Présent",
      location: "Tanger, Remote",
      description:
        "Responsable de la stratégie de contenu et de la présence de marque sur LinkedIn pour positionner Mooroot comme un acteur de référence au Maroc.",
      achievements: [
        "Définition du positionnement éditorial de la marque : ton, sujets, formats",
        "Rédaction de contenus stratégiques pour le CEO et les produits (Pharmanet, TPT...)",
        "Conception d'un calendrier de publications en 4 piliers : visibilité, crédibilité, engagement, conversion",
        "Création de templates et bibliothèques internes pour faciliter la production de contenu récurrent",
        "Mise en récit des produits via des posts narratifs et pédagogiques à destination des décideurs",
        "Suivi des performances des posts (impressions, partages, commentaires, prises de contact)",
        "Collaboration étroite avec les designers pour garantir la cohérence visuelle des publications",
      ],
      technologies: ["Notion", "Figma", "ChatGPT", "Zapier", "Framer"],
    },
    {
      title: "Growth Strategist B2B",
      company: "Des Bras en Plus",
      period: "2023 – 2024",
      location: "Freelance, Remote",
      description:
        "Création et exécution d'une stratégie LinkedIn orientée résultats pour une entreprise B2B dans la logistique.",
      achievements: [
        "Audit du positionnement de marque et définition d'une ligne éditoriale cohérente avec l'activité",
        "Écriture de publications LinkedIn valorisant les coulisses, les savoir-faire et les cas clients",
        "Déploiement de formats courts pour capter l'attention de décideurs (fondateurs, directeurs logistiques)",
        "Tests de différents types de posts (opinion, pédagogie, storytelling) pour optimiser la portée",
      ],
      technologies: ["LinkedIn", "Notion", "Canva", "Outils no-code"],
    },
    {
      title: "Stratégiste LinkedIn & Personal Branding",
      company: "Freelance",
      period: "2024 – Présent",
      location: "Remote",
      description:
        "Accompagnement sur-mesure de profils de haut niveau pour structurer leur présence sur LinkedIn et renforcer leur crédibilité.",
      achievements: [
        "Entretiens stratégiques avec chaque client pour identifier les sujets d'expertise à valoriser",
        "Création de frameworks éditoriaux sur-mesure (voix, formats, angles d'attaque)",
        "Rédaction de contenus adaptés à leur secteur : tech, design, stratégie, recrutement…",
        "Application de la méthode 100x : transformer une expertise en 100 idées de contenu cohérent",
        "Relecture et amélioration de posts écrits par les clients pour maximiser l'impact",
        "Reporting mensuel : impressions, conversations déclenchées, leads organiques générés",
        "Résultats notables : +300K impressions organiques en 3 mois pour les comptes actifs, prises de contact qualifiées dès les 30 premiers jours",
      ],
      technologies: ["LinkedIn", "Notion", "ChatGPT", "Canva"],
    },
    {
      title: "Content & Copy Assistant",
      company: "Promy France",
      period: "2019 – 2023",
      location: "Freelance, Remote",
      description:
        "Production de contenus marketing à destination du web, avec des interventions ponctuelles sur des campagnes télévisées.",
      achievements: [
        "Réécriture de textes pour sites web, pages de campagne et supports digitaux",
        "Création de variantes textuelles A/B pour tester plusieurs angles de communication",
        "Adaptation des messages à différents canaux tout en conservant une cohérence de ton",
        "Participation à la conception éditoriale d'une campagne TV (un de mes textes sélectionné)",
        "Coordination avec les équipes créa pour s'assurer de l'alignement entre texte et design",
      ],
      technologies: ["Notion", "ChatGPT", "Outils internes de copywriting"],
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:20px_20px] opacity-20 z-0"></div>

      {/* Header */}
      <PortfolioHeader />

      <div className="relative z-10 container mx-auto p-3 sm:p-4 pt-20 sm:pt-24 pb-6 sm:pb-8">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Enhanced Profile Section */}
          <div className="md:sticky md:top-24 self-start">
            <AnimatedSection animation="slide-right">
              <EnhancedProfile />
            </AnimatedSection>
          </div>

          <div className="col-span-1 md:col-span-2 lg:col-span-3 space-y-4 sm:space-y-6">
            {/* Experience Section - Expanded */}
            <AnimatedSection animation="fade-up" id="experience">
              <Card className="bg-zinc-900/70 border-zinc-800 backdrop-blur-sm">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <BriefcaseIcon className="w-5 h-5 mr-2 text-amber-700" />
                    <h3 className="text-lg font-medium">Expérience Professionnelle</h3>
                  </div>

                  <div className="space-y-6 sm:space-y-8">
                    {experienceInfo.map((experience, index) => (
                      <AnimatedSection key={index} animation="fade-up" delay={100 * (index + 1)}>
                        <ExperienceCard
                          title={experience.title}
                          company={experience.company}
                          period={experience.period}
                          location={experience.location}
                          description={experience.description}
                          achievements={experience.achievements}
                          technologies={experience.technologies}
                        />
                      </AnimatedSection>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Credentials Section */}
            <AnimatedSection animation="fade-up" id="credentials">
              <CredentialsSection />
            </AnimatedSection>

            {/* Skills Section */}
            <AnimatedSection animation="fade-up" id="skills">
              <Card className="bg-zinc-900/70 border-zinc-800 backdrop-blur-sm">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center mb-4">
                    <CodeIcon className="w-5 h-5 mr-2 text-amber-700" />
                    <h3 className="text-lg font-medium">Compétences principales</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <AnimatedSection animation="slide-right" delay={100}>
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium text-zinc-400">Stratégie & Marketing</h4>
                        <div className="flex flex-wrap gap-2">
                          <SkillTagComponent>Personal Branding</SkillTagComponent>
                          <SkillTagComponent>Content Design</SkillTagComponent>
                          <SkillTagComponent>Strategic Positioning</SkillTagComponent>
                          <SkillTagComponent>Conversion Copywriting</SkillTagComponent>
                          <SkillTagComponent>UX Content</SkillTagComponent>
                        </div>
                      </div>
                    </AnimatedSection>

                    <AnimatedSection animation="slide-left" delay={200}>
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium text-zinc-400">Automatisation IA</h4>
                        <div className="flex flex-wrap gap-2">
                          <SkillTagComponent>Systèmes Notion</SkillTagComponent>
                          <SkillTagComponent>ChatGPT</SkillTagComponent>
                          <SkillTagComponent>Zapier</SkillTagComponent>
                          <SkillTagComponent>Prompt Engineering</SkillTagComponent>
                          <SkillTagComponent>Workflow Automation</SkillTagComponent>
                        </div>
                      </div>
                    </AnimatedSection>

                    <AnimatedSection animation="slide-right" delay={300}>
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium text-zinc-400">Design & Développement</h4>
                        <div className="flex flex-wrap gap-2">
                          <SkillTagComponent>Figma</SkillTagComponent>
                          <SkillTagComponent>Framer</SkillTagComponent>
                          <SkillTagComponent>Notion</SkillTagComponent>
                          <SkillTagComponent>Airtable</SkillTagComponent>
                          <SkillTagComponent>Webflow (basique)</SkillTagComponent>
                          <SkillTagComponent>Canva Pro</SkillTagComponent>
                        </div>
                      </div>
                    </AnimatedSection>

                    <AnimatedSection animation="slide-left" delay={400}>
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium text-zinc-400">Soft Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          <SkillTagComponent>Esprit de synthèse</SkillTagComponent>
                          <SkillTagComponent>Clarté stratégique</SkillTagComponent>
                          <SkillTagComponent>Leadership éditorial</SkillTagComponent>
                          <SkillTagComponent>Communication assertive</SkillTagComponent>
                        </div>
                      </div>
                    </AnimatedSection>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Projects Section */}
            <AnimatedSection animation="fade-up" id="projects">
              <Card className="bg-zinc-900/70 border-zinc-800 backdrop-blur-sm">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="flex items-center">
                      <GlobeIcon className="w-5 h-5 mr-2 text-amber-700" />
                      <h3 className="text-lg font-medium">Projets récents</h3>
                    </div>
                    <Button variant="ghost" size="sm" className="text-xs sm:text-sm px-2 sm:px-3">
                      Voir tout
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    {projects.map((project, index) => (
                      <AnimatedSection key={project.id} animation="zoom-in" delay={100 * (index + 1)}>
                        <ProjectCard
                          title={project.title}
                          category={project.category}
                          image={project.thumbnailImage}
                          slug={project.slug}
                        />
                      </AnimatedSection>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>

        {/* Footer */}
        <AnimatedSection
          animation="fade-in"
          delay={500}
          className="mt-8 sm:mt-12 py-4 sm:py-6 text-center text-xs sm:text-sm text-zinc-500"
        >
          <p>© {new Date().getFullYear()} Nour Bakhti Marrakchi. Tous droits réservés.</p>
        </AnimatedSection>
      </div>

      {/* Scroll to Top Button */}
      <EnhancedScrollIndicator />
    </main>
  )
}
