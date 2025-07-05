export interface ProjectGalleryImage {
  url: string
  caption?: string
}

export interface RelatedProject {
  slug: string
  title: string
  category: string
  image: string
}

export interface Project {
  id: number
  slug: string
  title: string
  category: string
  shortDescription: string
  description: string[]
  features: string[]
  technologies: string[]
  coverImage: string
  thumbnailImage: string
  gallery?: ProjectGalleryImage[]
  client?: string
  timeline: string
  role: string
  liveUrl?: string
  githubUrl?: string
  relatedProjects?: RelatedProject[]
}

const projects: Project[] = [
  {
    id: 1,
    slug: "linkedin-carousel-designs",
    title: "Carrousel Design pour LinkedIn",
    category: "LinkedIn Content",
    shortDescription:
      "Collection de templates de carrousels LinkedIn pour le personal branding et l'engagement professionnel.",
    description: [
      "Ce projet présente une collection complète de designs de carrousels LinkedIn optimisés pour maximiser l'engagement et renforcer le personal branding. Chaque template est conçu pour captiver l'audience et transmettre des messages clairs et impactants.",
      "Les designs suivent une approche cohérente avec des variations de couleurs et de layouts pour s'adapter à différents types de contenu : storytelling, conseils, listes, citations inspirantes, et call-to-actions.",
      "L'objectif était de créer un système de design scalable permettant de produire du contenu LinkedIn de qualité professionnelle de manière efficace et cohérente avec l'identité de marque.",
    ],
    features: [
      "18 slides uniques avec 3 variations de layout",
      "5 palettes de couleurs professionnelles",
      "Templates optimisés pour l'engagement LinkedIn",
      "Design system cohérent et scalable",
      "Formats adaptés aux différents types de contenu",
      "Call-to-actions intégrés pour maximiser l'interaction",
      "Espaces dédiés pour photo de profil et branding personnel",
    ],
    technologies: ["Figma", "Design System", "Personal Branding", "LinkedIn Strategy", "Visual Content", "Canva"],
    coverImage: "/linkedin-carousel-banner.png",
    thumbnailImage: "/linkedin-carousel-banner.png",
    gallery: [
      {
        url: "/linkedin-carousel-slide1.png",
        caption: "Templates avec variations de couleurs - noir, blanc et dégradé rose",
      },
      { url: "/linkedin-carousel-slide2.png", caption: "Template principal avec design minimaliste" },
      { url: "/linkedin-carousel-slide3.png", caption: "Vue d'ensemble des 18 slides disponibles" },
      { url: "/linkedin-carousel-slide4.png", caption: "5 palettes de couleurs professionnelles" },
    ],
    client: "Personal Project / Clients Personal Branding",
    timeline: "2 semaines (Décembre 2024)",
    role: "Brand Designer & Content Strategist",
    liveUrl: "https://www.linkedin.com/in/nour-bakhti-marrakchi",
    relatedProjects: [
      {
        slug: "social-media-templates",
        title: "Social Media Templates V1",
        category: "Social Media Design",
        image: "/social-media-templates-banner.png",
      },
      {
        slug: "linkedin-trends-blog",
        title: "Blog LinkedIn Tendances",
        category: "Content Strategy",
        image: "/linkedin-blog-banner.png",
      },
    ],
  },
  {
    id: 2,
    slug: "social-media-templates",
    title: "Social Media Templates V1",
    category: "Social Media Design",
    shortDescription: "Templates LinkedIn professionnels pour studios tech multi-services et entreprises digitales.",
    description: [
      "Création d'une collection de templates LinkedIn spécialement conçus pour les studios tech multi-services. Ces designs permettent de communiquer efficacement sur les différents services proposés : développement, design UI/UX, stratégie digitale, et innovation technologique.",
      "Les templates intègrent une approche moderne et professionnelle, parfaitement adaptée au secteur tech. Chaque design est optimisé pour maximiser l'engagement tout en renforçant la crédibilité et l'expertise technique de l'entreprise.",
      "Le système de templates est entièrement personnalisable et déclinable selon l'identité visuelle de chaque client, permettant une cohérence de marque sur l'ensemble des publications LinkedIn.",
    ],
    features: [
      "Templates Figma entièrement personnalisables",
      "2 formats optimisés pour LinkedIn",
      "Design system adapté aux entreprises tech",
      "Layouts pour différents types de contenu (services, projets, insights)",
      "Intégration de citations inspirantes et messages motivationnels",
      "Espaces dédiés pour showcaser les réalisations techniques",
      "Cohérence visuelle avec l'identité de marque tech",
    ],
    technologies: [
      "Figma",
      "LinkedIn Design",
      "Brand Identity",
      "Social Media Strategy",
      "Tech Branding",
      "Visual Systems",
    ],
    coverImage: "/social-media-templates-banner.png",
    thumbnailImage: "/social-media-templates-banner.png",
    gallery: [
      {
        url: "/social-template-1.png",
        caption:
          "Template avec citation sur la simplicité en design - 'Complexity may impress, but simplicity captivates the user's heart'",
      },
      {
        url: "/social-template-2.png",
        caption: "Template axé UI/UX - 'In UI/UX, every pixel tells a story, & each click is a journey'",
      },
      {
        url: "/social-template-3.png",
        caption: "Template avec citation inspirante - 'Good design is 1% inspiration, 99% caffeination'",
      },
      {
        url: "/social-template-4.png",
        caption: "Variation du template avec la même citation sur l'inspiration en design",
      },
    ],
    client: "Studios Tech Multi-services",
    timeline: "3 semaines (Janvier 2025)",
    role: "Social Media Designer & Brand Strategist",
    relatedProjects: [
      {
        slug: "linkedin-carousel-designs",
        title: "Carrousel Design pour LinkedIn",
        category: "LinkedIn Content",
        image: "/linkedin-carousel-banner.png",
      },
      {
        slug: "linkedin-trends-blog",
        title: "Blog LinkedIn Tendances",
        category: "Content Strategy",
        image: "/linkedin-blog-banner.png",
      },
    ],
  },
  {
    id: 3,
    slug: "linkedin-trends-blog",
    title: "Blog LinkedIn Tendances",
    category: "Content Strategy",
    shortDescription:
      "Blog personnel dédié aux dernières tendances LinkedIn, méthodes actionables et systèmes reproductibles pour le personal branding.",
    description: [
      "Création et développement d'un blog personnel axé sur les tendances LinkedIn et les stratégies de personal branding. Le blog propose des méthodes actionables et des systèmes reproductibles pour aider les professionnels à construire une présence LinkedIn forte et authentique.",
      "Le contenu couvre les dernières évolutions de l'algorithme LinkedIn, les meilleures pratiques de création de contenu, et des analyses approfondies des tendances émergentes sur la plateforme. Chaque article propose des conseils pratiques immédiatement applicables.",
      "Le design du site reflète une approche moderne et professionnelle, avec une interface utilisateur optimisée pour la lecture et l'engagement. Le blog intègre également des call-to-actions pour des consultations personnalisées.",
    ],
    features: [
      "Articles hebdomadaires sur les tendances LinkedIn",
      "Méthodes actionables et systèmes reproductibles",
      "Analyses des évolutions de l'algorithme LinkedIn",
      "Guides pratiques pour le personal branding",
      "Interface de blog moderne et responsive",
      "Système de réservation d'appels intégré",
      "Optimisation SEO pour le référencement",
      "Newsletter pour les abonnés réguliers",
    ],
    technologies: [
      "Web Development",
      "Content Management",
      "SEO Optimization",
      "LinkedIn Analytics",
      "Personal Branding",
      "Content Strategy",
    ],
    coverImage: "/linkedin-blog-banner.png",
    thumbnailImage: "/linkedin-blog-banner.png",
    gallery: [
      {
        url: "/blog-article-1.png",
        caption:
          "Article sur la psychologie de l'influence LinkedIn avec métriques de croissance (220M+ et 380M+ impressions)",
      },
      {
        url: "/blog-article-2.png",
        caption: "Guide complet du Personal Branding en 9 étapes avec visualisation du networking LinkedIn",
      },
      {
        url: "/blog-article-3.png",
        caption: "Article sur les limites du Personal Branding LinkedIn avec analytics et croissance de 315%",
      },
      {
        url: "/blog-article-4.png",
        caption: "30 idées de posts LinkedIn avec données sur la fréquence de publication et l'engagement",
      },
    ],
    client: "Projet Personnel",
    timeline: "En cours depuis Octobre 2024",
    role: "Content Creator & LinkedIn Strategist",
    liveUrl: "https://blog-linkedin-tendances.com",
    relatedProjects: [
      {
        slug: "linkedin-carousel-designs",
        title: "Carrousel Design pour LinkedIn",
        category: "LinkedIn Content",
        image: "/linkedin-carousel-banner.png",
      },
      {
        slug: "social-media-templates",
        title: "Social Media Templates V1",
        category: "Social Media Design",
        image: "/social-media-templates-banner.png",
      },
    ],
  },
]

export { projects }

// Add these functions after the projects array export

export function getAllProjects(): Project[] {
  return projects
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getRelatedProjects(currentSlug: string, limit = 2): RelatedProject[] {
  const currentProject = getProjectBySlug(currentSlug)
  if (!currentProject || !currentProject.relatedProjects) {
    // If no related projects defined, return random projects
    return projects
      .filter((project) => project.slug !== currentSlug)
      .slice(0, limit)
      .map((project) => ({
        slug: project.slug,
        title: project.title,
        category: project.category,
        image: project.thumbnailImage,
      }))
  }

  return currentProject.relatedProjects.slice(0, limit)
}
