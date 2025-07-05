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
      period: "2025 - Présent",
      location: "Casablanca, Remote",
      description:
        "Mise en place complète de l'écosystème marketing de Mooroot Studio (positionnement Microsoft-like) à destination des moyennes et grandes entreprises marocaines.",
      achievements: [
        'Refonte du site web avec un angle "solution-centric" clair pour le marché marocain',
        "Construction d'une stratégie de contenu LinkedIn en 4 formats clés (awareness, authority, conversion, engagement)",
        "Pilotage d'un repositionnement complet de la marque et de ses produits (Pharmanet, TPT, etc.)",
        "Développement d'une offre d'accompagnement premium (automatisation IA, refonte produit, pilotage growth)",
      ],
      technologies: ["Notion", "Figma", "Framer", "ChatGPT", "Zapier", "Xmind", "Prompt Engineering"],
    },
    {
      title: "Stratégiste Personal Branding",
      company: "Freelance",
      period: "2024 - Présent",
      location: "Remote",
      description:
        "Accompagnement de CEO, fondateurs et leaders dans la construction de leur présence stratégique sur LinkedIn. Méthode propriétaire : Stratégie 100x — transformer un seul sujet en 100 contenus utiles et cohérents.",
      achievements: [
        "Création de frameworks éditoriaux adaptés à chaque ICP (décideurs, experts techniques, fondateurs)",
        "Résultats : +300K impressions cumulées en 3 mois pour les clients actifs",
        "Génération de leads B2B organiques pour les clients dès les 30 premiers jours",
      ],
      technologies: ["LinkedIn", "Notion", "Canva", "ChatGPT", "Storytelling narratif", "Call-to-action implicite"],
    },
    {
      title: "Growth Marketer",
      company: "Projets personnels & collaborations",
      period: "2023 - 2024",
      location: "Remote",
      description:
        "Pilotage de plusieurs mini-produits no-code autour du contenu, de l'automatisation IA et du branding. Rôle de designer de stratégie : de l'idée au contenu, jusqu'à l'expérience utilisateur.",
      achievements: [
        "Conception d'un SaaS de gestion de personal brand pour créateurs",
        "Co-conception de pages de vente à fort taux de conversion",
        'Animation de communautés LinkedIn + lancement d\'une série de contenus "100x"',
      ],
      technologies: ["No-code", "IA", "Branding", "UX Design", "LinkedIn", "Community Management"],
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
                    <AnimatedSection animation="fade-up" delay={100}>
                      <ExperienceCard
                        title="Responsable Marketing"
                        company="Mooroot Studio"
                        period="2025 – Présent"
                        location="Casablanca, Remote"
                        description="Refonte complète de l'écosystème marketing de Mooroot Studio (positionnement Microsoft-like), à destination des moyennes et grandes entreprises marocaines."
                        achievements={[
                          'Construction d\'un site web "solution-centric" avec une vision claire pour le marché local',
                          "Élaboration d'une stratégie LinkedIn multi-niveaux (Awareness, Authority, Engagement, Conversion)",
                          "Repositionnement global de la marque et de ses produits stratégiques (Pharmanet, TPT, etc.)",
                          "Création d'une offre d'accompagnement premium : automatisation IA, refonte produit, pilotage growth",
                        ]}
                        technologies={["Notion", "Figma", "Framer", "Zapier", "ChatGPT", "Xmind", "Prompt Engineering"]}
                      />
                    </AnimatedSection>

                    <AnimatedSection animation="fade-up" delay={200}>
                      <ExperienceCard
                        title="Growth Strategist B2B & SaaS"
                        company="Des Bras en Plus"
                        period="2023 – 2024"
                        location="Freelance, Remote"
                        description="Prise en charge complète de la stratégie de contenu et de croissance B2B via LinkedIn. Déploiement de mini-produits no-code et conception d'un SaaS dédié à la gestion de marque personnelle."
                        achievements={[
                          "Mise en place d'une stratégie LinkedIn orientée résultats pour le secteur logistique B2B",
                          "Rédaction et publication de contenus professionnels cohérents avec l'image de marque",
                          "Campagnes outbound personnalisées, génération de leads qualifiés via LinkedIn",
                          "Conception d'un SaaS pour créateurs de contenu : gestion personal brand & performance",
                          "Création de pages de vente à fort taux de conversion, animation de communautés stratégiques",
                          "Impact : Renforcement du positionnement de l'entreprise dans son secteur. Génération de conversations commerciales organiques. Validation de modèles de croissance no-code à impact direct.",
                        ]}
                        technologies={["LinkedIn", "No-code", "IA", "UX Design", "Community Management"]}
                      />
                    </AnimatedSection>

                    <AnimatedSection animation="fade-up" delay={300}>
                      <ExperienceCard
                        title="Stratégiste LinkedIn & Personal Branding"
                        company="Freelance"
                        period="2024 – Présent"
                        location="Remote"
                        description="Accompagnement de CEO, fondateurs et experts techniques dans la construction de leur présence stratégique sur LinkedIn. Méthodologie propriétaire : Stratégie 100x (un seul sujet → 100 contenus utiles & cohérents)."
                        achievements={[
                          "Création de frameworks éditoriaux ultra-ciblés pour chaque profil (ICP)",
                          "+300K impressions organiques générées en 3 mois pour les comptes clients",
                          "Génération de leads qualifiés dès les 30 premiers jours",
                          "Stratégie éditoriale mêlant storytelling narratif, CTA implicites et autorité sectorielle",
                        ]}
                        technologies={[
                          "Notion",
                          "LinkedIn",
                          "Canva",
                          "ChatGPT",
                          "Storytelling narratif",
                          "Growth mindset",
                        ]}
                      />
                    </AnimatedSection>

                    <AnimatedSection animation="fade-up" delay={400}>
                      <ExperienceCard
                        title="Content & Copy Assistant"
                        company="Promy France"
                        period="2019 – 2023"
                        location="Freelance, Remote"
                        description="Collaboration avec l'équipe créative de Promy pour piloter des campagnes publicitaires cross-canal à fort impact, du digital à la TV."
                        achievements={[
                          "Réécriture de textes web selon les objectifs marketing et phases de campagne",
                          "Création de variantes A/B pour plateformes digitales",
                          "Coordination avec designers et stratèges pour garantir la cohérence de marque",
                          "Contribution à une campagne télévisée nationale",
                          "Moment fort : Une de mes copies sélectionnée pour une pub TV nationale — passage symbolique du digital au broadcast.",
                        ]}
                        technologies={["Copywriting", "A/B Testing", "Cross-channel Marketing", "Brand Consistency"]}
                      />
                    </AnimatedSection>
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
