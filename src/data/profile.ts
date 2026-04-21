export const profile = {
  name: "Juan De Tomaso",
  title: "Frontend Developer",
  headline: "React | TypeScript | Next.js",
  location: "Buenos Aires, Argentina",
  email: "juandeto10@gmail.com",
  linkedin: "https://www.linkedin.com/in/juandetomaso",
  summary:
    "Frontend Developer with almost 5 years of experience designing and building digital products. Strong foundation in React and adjacent technologies, with hands-on work in JavaScript, TypeScript, Next.js, Astro, Redux and Jest. Comfortable translating product and UX goals into polished interfaces using Tailwind CSS, Sass and Figma, with additional backend familiarity in Node, PostgreSQL and Python.",
  skills: [
    "React",
    "TypeScript",
    "Next.js",
    "Astro",
    "JavaScript",
    "Redux",
    "Jest",
    "Tailwind CSS",
    "Sass",
    "Figma",
    "GraphQL",
    "Node.js",
    "PostgreSQL",
    "Python",
    "User Experience Design",
    "User Interface Design",
  ],
  languages: [
    "English (Native or Bilingual)",
    "Spanish (Native or Bilingual)",
  ],
  experience: [
    {
      company: "G2i",
      role: "Software Engineer",
      period: "November 2025 - Present",
      detail:
        "Contributing to AI initiatives for a leading Frontier Lab, applying software engineering expertise to help shape next-generation AI products.",
    },
    {
      company: "Making Sense LLC",
      role: "Fullstack Developer",
      period: "November 2023 - October 2024",
      detail:
        "Led development of the Gramercy mental health MVP from scratch, building Auth0 auth flows, Square payments, scheduling APIs, Terraform infrastructure, i18n, dashboards, and onboarding experiences.",
    },
    {
      company: "Crackle",
      role: "Frontend Developer",
      period: "June 2022 - August 2023",
      detail:
        "Improved Smart TV app performance with React Query, boosting CLS by 40%, and optimized SEO plus social-facing website card experiences for the new launch.",
    },
    {
      company: "Crystal Zoom",
      role: "Frontend Developer",
      period: "December 2021 - May 2022",
      detail:
        "Built recommendation experiences for MercadoLibre sellers in React and developed Node.js/Express endpoints to sync campaign data with external ad platforms.",
    },
    {
      company: "UMA Health",
      role: "Frontend Developer",
      period: "March 2020 - November 2021",
      detail:
        "Led post-MVP product development for a doctor-patient platform, combining user research with doctors and patients, Medikit SDK integrations, NLP-backed Flask services, calendar sync, and real-time chat.",
    },
  ],
  workLinks: [
    {
      label: "BK Comp",
      href: "https://bk-comp.com",
      description:
        "Corporate product site for an advanced composites company in agribusiness, with dense product communication, technical content and multilingual navigation.",
    },
    {
      label: "Legacy Car Tour",
      href: "https://legacycartour.com/",
      description:
        "Promotional experience site for a premium Italian Motor Valley tour, built around storytelling, itinerary presentation and booking-oriented content.",
    },
    {
      label: "La Sastreria Congreso",
      href: "https://www.lasastreria.com.ar/indicecongreso/#/app",
      description:
        "Interactive web application published under La Sastreria, shared here as one of the portfolio pieces from my software development work.",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/juandetomaso",
      description:
        "Professional profile with software development experience and updated career timeline.",
    },
    {
      label: "Resume PDF",
      href: "/Profile.pdf",
      description:
        "Original CV used as the source for this portfolio.",
    },
  ],
} as const;
