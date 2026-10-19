export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  shortDescription: string;
  responsibilities: string[];
  requirements: string[];
}

export const jobs: Job[] = [
  {
    id: "full-stack-developer",
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    shortDescription: "Design and build scalable CRM ecosystems, robust backend architectures, and seamless user interfaces for our fintech partners.",
    responsibilities: [
      "Architect and implement highly scalable, resilient backend services using Node.js and Next.js.",
      "Design and build responsive, intuitive user interfaces utilizing React and modern CSS frameworks.",
      "Collaborate with product and design teams to translate requirements into technical specifications.",
      "Optimize application performance and ensure high availability across global deployments.",
      "Write clean, maintainable, and well-tested code, participating in regular code reviews."
    ],
    requirements: [
      "4+ years of experience in full-stack web development.",
      "Strong proficiency in TypeScript, React, Next.js, and Node.js.",
      "Experience designing and integrating with RESTful APIs and modern databases (PostgreSQL, Supabase).",
      "Solid understanding of web performance optimization and security best practices.",
      "Excellent problem-solving skills and a proactive approach to technical challenges."
    ]
  },
  {
    id: "mobile-developer",
    title: "Mobile Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    shortDescription: "Craft premium, high-performance mobile applications for iOS and Android, focusing on intuitive UX and fast deployment.",
    responsibilities: [
      "Develop and maintain high-quality mobile applications for iOS and Android platforms using React Native.",
      "Ensure robust integration with backend services and real-time APIs for seamless data synchronization.",
      "Implement premium UI/UX designs, ensuring smooth animations and consistent cross-platform behavior.",
      "Identify and resolve performance bottlenecks, optimizing battery usage and network calls.",
      "Publish and manage application releases on the App Store and Google Play."
    ],
    requirements: [
      "3+ years of experience building production mobile apps using React Native.",
      "Strong understanding of mobile UI paradigms and native module bridging.",
      "Experience with state management libraries and offline-first mobile architectures.",
      "Familiarity with mobile CI/CD pipelines (Fastlane, GitHub Actions).",
      "A keen eye for design details and a passion for creating pixel-perfect interfaces."
    ]
  },
  {
    id: "data-analyst",
    title: "Data Analyst",
    department: "Data & Strategy",
    location: "Hybrid",
    type: "Full-time",
    shortDescription: "Analyze complex transaction flows and user behavior to generate actionable AI insights and financial modeling.",
    responsibilities: [
      "Design and maintain advanced analytical models to interpret complex financial and user data.",
      "Create comprehensive dashboards and reports for internal stakeholders and external clients.",
      "Identify trends, anomalies, and opportunities within large datasets to drive strategic decisions.",
      "Collaborate with engineering teams to ensure data integrity and optimize ETL pipelines.",
      "Present findings and actionable recommendations to executive leadership."
    ],
    requirements: [
      "Bachelor's degree in Mathematics, Statistics, Computer Science, or a related field.",
      "3+ years of experience in data analysis, preferably within fintech or SaaS industries.",
      "Advanced proficiency in SQL, Python/R, and data visualization tools (Tableau, Looker).",
      "Strong understanding of statistical modeling and predictive analytics.",
      "Excellent communication skills with the ability to translate complex data into clear business narratives."
    ]
  },
  {
    id: "support-team",
    title: "Support Team",
    department: "Operations",
    location: "Global",
    type: "Full-time",
    shortDescription: "Deliver world-class, dedicated technical support and onboarding assistance to our enterprise software clients.",
    responsibilities: [
      "Provide prompt, professional technical support to enterprise clients via email, chat, and video calls.",
      "Troubleshoot complex platform issues, guiding users to effective resolutions.",
      "Assist new clients with platform onboarding, configuration, and best practices.",
      "Document frequent issues and contribute to the internal and external knowledge bases.",
      "Act as the voice of the customer, surfacing valuable feedback to the product team."
    ],
    requirements: [
      "2+ years of experience in a B2B technical support or customer success role.",
      "Strong problem-solving skills and the ability to diagnose complex software issues.",
      "Excellent written and verbal communication skills with a customer-first mindset.",
      "Familiarity with CRM platforms, ticketing systems (Zendesk, Intercom), and basic API troubleshooting.",
      "Ability to work effectively in a fast-paced, globally distributed team environment."
    ]
  }
];
