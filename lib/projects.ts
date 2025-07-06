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
    slug: "linkedin-personal-branding-ceos",
    title: "LinkedIn Personal Branding Strategy pour CEOs",
    category: "Personal Branding / LinkedIn Strategy",
    shortDescription:
      "Étude de cas : Déploiement d'une stratégie de personal branding LinkedIn pour des CEOs afin d'accroître leur visibilité, leur crédibilité et leur impact business.",
    description: [
      "Dans ce projet, nous avons accompagné plusieurs CEOs dans la structuration et l'optimisation de leur présence sur LinkedIn. L'objectif : transformer leur profil en véritable levier d'influence et de génération d'opportunités business.",
      "La démarche a consisté à analyser le paysage concurrentiel, définir des axes de communication différenciants, concevoir des personas cibles, et bâtir des piliers de marque forts. Nous avons également travaillé la voix et le ton pour garantir une communication authentique, inspirante et alignée avec les valeurs du dirigeant.",
      "Le résultat : une stratégie éditoriale sur-mesure, des contenus à forte valeur ajoutée, et une croissance significative de l'engagement et des prises de contact qualifiées sur LinkedIn.",
    ],
    features: [
      "Audit du positionnement LinkedIn du CEO",
      "Cartographie du paysage concurrentiel (matrice émotionnel/informatif, local/universel)",
      "Définition de personas cibles et de leurs leviers de décision",
      "Création de piliers de marque et de messages clés",
      "Déploiement d'une voix de marque authentique et différenciante",
      "Production de contenus stratégiques (posts, carrousels, podcasts, etc.)",
      "Suivi des KPIs : impressions, engagement, leads générés",
    ],
    technologies: ["LinkedIn", "Personal Branding", "Content Strategy", "Figma", "Copywriting"],
    coverImage: "/personal-branding-1.png",
    thumbnailImage: "/personal-branding-1.png",
    gallery: [
      {
        url: "/personal-branding-1.png",
        caption: "Bannière du projet : LinkedIn Personal Branding Strategy pour CEOs",
      },
      {
        url: "/personal-branding-2.png",
        caption: "Matrice de positionnement concurrentiel (émotionnel/informatif, local/universel)",
      },
      {
        url: "/personal-branding-3.png",
        caption: "Persona cible : The Eager Entrepreneur (exemple de profil LinkedIn à adresser)",
      },
      {
        url: "/personal-branding-4.png",
        caption: "Piliers de marque définis pour la stratégie LinkedIn du CEO",
      },
      {
        url: "/personal-branding-5.png",
        caption: "Voix et ton de la communication LinkedIn du CEO",
      },
    ],
    client: "CEOs & Dirigeants accompagnés",
    timeline: "3 mois (2024)",
    role: "Stratégiste LinkedIn & Brand Content",
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
    slug: "i-ilsten-ai-meditation-app-branding",
    title: "I iLsten : AI Meditation App Branding",
    category: "Branding / App Design",
    shortDescription: "Étude de cas : Création de l'identité visuelle et des guidelines de marque pour une application de méditation assistée par IA.",
    description: [
      "Pour ce projet, nous avons accompagné la startup I iLsten dans la création complète de son identité de marque. L'application propose des expériences de méditation personnalisées grâce à l'intelligence artificielle, et nécessitait une image à la fois apaisante, innovante et mémorable.",
      "Le travail a porté sur la définition du positionnement, la création du logo, la palette de couleurs, la typographie, et la rédaction d'un document de guidelines complet pour garantir la cohérence de la marque sur tous les supports.",
      "Le résultat : une marque forte, différenciante, et un univers graphique qui inspire confiance et sérénité aux utilisateurs de l'app.",
    ],
    features: [
      "Ateliers de positionnement et d'identité de marque",
      "Création du logo et de la charte graphique",
      "Définition de la palette de couleurs et des typographies",
      "Rédaction des guidelines de marque (document 1.0)",
      "Déclinaisons visuelles pour l'app, le site web et les réseaux sociaux",
      "Livraison d'un kit complet pour l'équipe produit et marketing",
    ],
    technologies: ["Figma", "Brand Strategy", "Design System", "AI", "Meditation"],
    coverImage: "/brand-guidelines-banner.png",
    thumbnailImage: "/brand-guidelines-banner.png",
    gallery: [
      {
        url: "/brand-guidelines-banner.png",
        caption: "Bannière du projet : Brand Guidelines pour I iLsten (AI Meditation App)",
      },
      {
        url: "/brand-guidelines-2.png",
        caption: "Introduction du Brand Book : Présentation de l'agence et de la mission.",
      },
      {
        url: "/brand-guidelines-3.png",
        caption: "Sommaire du Brand Book : Table des matières des sections de la charte graphique.",
      },
      {
        url: "/brand-guidelines-4.png",
        caption: "Palette de couleurs : Présentation des couleurs principales de la marque.",
      }
    ],
    client: "I iLsten (Startup méditation IA)",
    timeline: "2 mois (2024)",
    role: "Brand Designer & Identity Strategist",
    liveUrl: "#",
    relatedProjects: [
      {
        slug: "linkedin-personal-branding-ceos",
        title: "LinkedIn Personal Branding Strategy pour CEOs",
        category: "Personal Branding / LinkedIn Strategy",
        image: "/personal-branding-1.png",
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
    liveUrl: "https://100x-blog.vercel.app/",
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
