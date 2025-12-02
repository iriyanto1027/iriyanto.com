import {
  Heart,
  Target,
  Users,
  Zap,
  Code2,
  Lightbulb,
  Shield,
  Rocket,
  LucideIcon,
} from "lucide-react";

export const timeline: {
  type: "work" | "education";
  workType?:
    | "Full-time"
    | "Part-time"
    | "Internship"
    | "Freelance"
    | "Contract";
  year: string;
  title: string;
  company: string;
  location: string;
  description?: string;
  responsibilities?: string[];
  achievements?: string[];
}[] = [
  {
    type: "work",
    workType: "Full-time",
    year: "Jan 2022 - June 2025",
    title: "Senior Backend Engineer",
    company: "PT. Supernova Palapa Nusantara",
    location: "Remote (Karawang, Indonesia)",
    description:
      "Led backend development and architecture across multiple client projects.",
    responsibilities: [
      "Led backend architecture design across multiple client projects, defining scalable data models, service layers, and API standards that reduced integration time by 30-40%.",
      "Developed and maintained a custom backend starter kit (NestJS + Prisma + modular architecture) adopted company-wide, accelerating project setup by 60% and ensuring codebase consistency.",
      "Defined coding standards and guidelines for backend and API development, improving code review efficiency and onboarding time for new developers.",
      "Collaborated directly with clients and business users as a system analyst to gather requirements, refine technical specifications, and ensure alignment between business needs and technical design.",
      "Acted as a project technical lead in large-scale projects, mentoring 2-3 backend developers and coordinating with Frontend, DevOps, and UI/UX teams to deliver robust solutions on schedule.",
      "Designed and implemented microservice and modular monolith architectures depending on project complexity, balancing scalability and maintainability.",
      "Built and integrated RESTful & GraphQL APIs, ensuring high performance and security (JWT-based auth, RBAC, rate limiting).",
      "Implemented CI/CD pipelines (GitHub Actions, Docker) and deployment strategies that reduced manual release time from hours to minutes.",
      "Drove adoption of clean code and design patterns, simplifying future migrations between ORMs or databases.",
      "Delivered over 10+ successful software projects across diverse domains (HR, E-Commerce, Logistics, and Inventory), maintaining 95% on-time delivery and high client satisfaction.",
    ],
    achievements: [
      "Mentored junior and mid-level engineers, improving team productivity and code quality through guidance and reviews.",
      "Led R&D initiatives to adopt modern backend and DevOps toolchains (NestJS, Prisma, Docker).",
      "Partnered with PMs and analysts to clarify requirements, cutting revision cycles by ~25%.",
      "Delivered 10+ successful projects across HR, E-Commerce, Logistics, and Inventory with 95% on-time delivery.",
    ],
  },
  {
    type: "work",
    workType: "Freelance",
    year: "Aug 2025 - Sep 2025",
    title: "System Analyst",
    company: "PT Mundus Virtual Prima",
    location: "Remote (Bandung, West Java, Indonesia)",
    responsibilities: [
      "Architected and implemented comprehensive MS SQL database solutions for inventory management, enabling scalable data storage and efficient query performance across manufacturing operations.",
      "Developed and deployed advanced estimation stock algorithms using statistical forecasting models, significantly improving inventory prediction accuracy and reducing stockout incidents.",
      "Designed and implemented synchronized delivery requirement systems that automated supply chain coordination, resulting in improved delivery scheduling efficiency and enhanced vendor communication.",
      "Created intelligent safety stock algorithms incorporating demand variability and lead time analysis, successfully optimizing inventory levels while maintaining high service level targets.",
      "Engineered automated data synchronization between production systems and inventory databases, eliminating manual data entry errors and ensuring real-time stock level accuracy.",
      "Strengthened PT Mundus Virtual Prima's digital transformation mission by delivering scalable, efficient software solutions, contributing to substantial improvements in manufacturing operational efficiency and data-driven decision making.",
    ],
  },
  {
    type: "work",
    workType: "Freelance",
    year: "May 2025 - Sep 2025",
    title: "Back End Engineer",
    company: "PGNCOM",
    location: "Remote (Jakarta, Indonesia)",
    responsibilities: [
      "Engineered the backend architecture for PGNCOM's Employee Self-Service (ESS) platform – BLYNC, using Golang (Gin) and GORM, ensuring modularity and scalability for future product expansion.",
      "Designed and optimized PostgreSQL schemas with strict normalization and indexing strategies, improving query performance and maintaining enterprise-grade data consistency.",
      "Built RESTful APIs powering HR core features (employee profiles, attendance, leave management), enabling seamless communication across frontend and internal systems.",
      "Integrated Firebase Cloud Messaging (FCM) for real-time notifications and internal microservices for cross-module data synchronization.",
      "Digitized manual HR workflows, reducing administrative overhead by ~40% and improving data accessibility across departments.",
      "Collaborated in an Agile environment, implementing CI/CD pipelines and Docker-based deployments for efficient release cycles.",
    ],
  },
  {
    type: "work",
    workType: "Freelance",
    year: "Jan 2025 - Jul 2025",
    title: "System Analyst",
    company: "PT Mundus Virtual Prima",
    location: "Remote (Bandung, West Java, Indonesia)",
    responsibilities: [
      "Led the design and development of a real-time Overall Equipment Effectiveness (OEE) system using Laravel, MS SQL, and PostgreSQL, optimizing production insights across multiple manufacturing lines.",
      "Integrated machine data with the Andon system, enabling instant visibility of downtime and maintenance alerts for faster response and reduced idle time.",
      "Collaborated with cross-functional engineering teams to automate data collection, cutting manual reporting effort by over 60%.",
      "Delivered actionable performance analytics dashboards, empowering managers to make data-driven operational decisions in real time.",
      "Strengthened PT Mundus Virtual Prima's mission to drive digital transformation in manufacturing through scalable, efficient software solutions.",
    ],
  },
  {
    type: "work",
    workType: "Freelance",
    year: "Feb 2025 - Apr 2025",
    title: "Back End Engineer",
    company: "PT Svarga Indomulia Mediatama",
    location: "Remote (Jakarta, Indonesia)",
    responsibilities: [
      "Independently customized and deployed the open-source Signal Server, tailoring it to meet unique client requirements for secure messaging infrastructure.",
      "Developed and maintained critical backend services such as Registration, Storage, and Contact Discovery, ensuring performance, reliability, and scalability.",
      "Implemented end-to-end encryption and secure communication flows, following Signal Protocol standards to maintain data confidentiality and integrity.",
      "Configured and managed deployments across AWS and GCP environments, handling infrastructure setup, scaling, and environment isolation directly.",
      "Optimized backend architecture for maintainability and operational efficiency, balancing performance with strong security controls.",
    ],
  },
  {
    type: "work",
    workType: "Freelance",
    year: "Apr 2020 - Mar 2025",
    title: "Back End Developer",
    company: "Telkom University",
    location: "Remote (Bandung, West Java, Indonesia)",
    responsibilities: [
      "Developed and maintained backend services for Sirama and Igracias, Telkom University's production-grade academic platforms, using NestJS, Laravel, and PostgreSQL to ensure high reliability for thousands of daily users.",
      "Designed and optimized RESTful APIs, refactoring critical endpoints to reduce response time and improve throughput on production servers.",
      "Enhanced platform stability by diagnosing and resolving complex backend issues in Oracle SQL and PHP, minimizing downtime and improving system uptime.",
      "Coordinated with System Analysts and Frontend Engineers to align API design with business logic and frontend data contracts, accelerating delivery cycles.",
      "Documented and standardized APIs in the API Gateway, improving onboarding efficiency and maintainability for future development teams.",
      "Conducted performance profiling and implemented caching and query optimizations, contributing to measurable backend performance improvements.",
      "Provided ongoing production support and post-release monitoring, ensuring API reliability and user data integrity across multiple modules.",
      "Championed code consistency through structured versioning and peer code reviews, fostering clean and maintainable backend architecture.",
    ],
  },
  {
    type: "work",
    workType: "Freelance",
    year: "Jun 2023 - Dec 2023",
    title: "Back End Engineer",
    company: "Moonlight Technology",
    location: "Remote (Bandung, West Java, Indonesia)",
    responsibilities: [
      "Architected and implemented a multi-tenant SaaS e-commerce backend using NestJS, Prisma, and PostgreSQL, enabling scalable onboarding for multiple B2C stores.",
      "Designed normalized database schema with relational integrity in PostgreSQL, optimizing query performance and data consistency across tenants.",
      "Integrated payment gateway APIs to support real-time transactions, ensuring secure and seamless checkout experiences for end users.",
      "Deployed full-stack applications on VPS with optimized configurations for Nginx and Docker, improving reliability and uptime.",
      "Collaborated with frontend engineers to define and refine RESTful API contracts, ensuring consistent and efficient integration across services.",
      "Established modular backend architecture with reusable domain modules, reducing feature delivery time by 30%.",
      "Implemented object storage integration using MinIO for media and asset management, ensuring scalability and low-latency retrieval.",
      "Conducted performance tuning and load testing to handle concurrent traffic spikes typical of e-commerce campaigns.",
    ],
  },
  {
    type: "work",
    workType: "Freelance",
    year: "Sep 2020 - Dec 2020",
    title: "Back End Engineer",
    company: "Moonlight Technology",
    location: "Remote (Bandung, West Java, Indonesia)",
    responsibilities: [
      "Designed and implemented the backend architecture for a military-grade vessel tracking system using NestJS and MongoDB, ensuring high scalability and data integrity across mission-critical operations.",
      "Modeled and optimized database schemas with Mongoose, achieving efficient geospatial data handling and query performance for real-time vessel monitoring.",
      "Integrated backend services with a central data warehouse, enabling seamless synchronization and secure data exchange between systems.",
      "Built real-time communication channels using WebSocket, providing instant position updates and alerts to command interfaces.",
      "Deployed push notification infrastructure via Firebase Cloud Messaging (FCM), improving response times and situational awareness across field devices.",
      "Integrated AWS S3 for secure storage and retrieval of vessel imagery and logs, supporting scalable and cost-efficient data management.",
      "Implemented security best practices and access control within NestJS services, ensuring compliance with defense-grade confidentiality standards.",
      "Delivered the project end-to-end as a solo backend engineer, overseeing architecture, development, testing, and deployment phases.",
    ],
  },
  {
    type: "work",
    workType: "Contract",
    year: "May 2019 - Dec 2019",
    title: "Full Stack Developer",
    company: "Telkom University",
    location: "On-site (Bandung, West Java, Indonesia)",
    responsibilities: [
      "Designed and developed a comprehensive web-based system to monitor and manage PhD study progress for faculty members at Telkom University.",
      "Built a robust and scalable RESTful API using the CodeIgniter framework, enabling smooth data exchange and integration with external systems.",
      "Streamlined administrative workflows for PhD program management, improving efficiency and data accuracy across departments.",
      "Optimized backend performance and database queries to ensure fast, reliable, and secure data processing.",
      "Collaborated closely with academic and administrative stakeholders to gather requirements, refine system features, and deliver impactful solutions.",
    ],
  },
  {
    type: "work",
    workType: "Part-time",
    year: "Jan 2019 - May 2019",
    title: "Teaching Assistant",
    company: "Telkom University",
    location: "On-site (Bandung, West Java, Indonesia)",
    responsibilities: [
      "Collaborated closely with lecturers to assist students in mastering key topics in Data Structures and Algorithms, ensuring alignment with the course curriculum.",
      "Designed and led interactive review sessions that simplified complex programming concepts such as recursion, graph theory, and dynamic programming.",
      "Offered personalized one-on-one tutoring and mentoring, directly contributing to improved academic performance and confidence among more than 50 students.",
      "Created supplementary learning materials and coding exercises to reinforce theoretical knowledge through hands-on practice.",
      "Strengthened technical communication and leadership skills while cultivating an engaging, supportive, and collaborative learning environment.",
    ],
  },
  {
    type: "work",
    workType: "Contract",
    year: "Aug 2018 - Dec 2018",
    title: "Laboratory Teaching Assistant",
    company: "Telkom University",
    location: "On-site (Bandung, West Java, Indonesia)",
    responsibilities: [
      "Assisted students in practical applications of data structures, enhancing their understanding of algorithms and programming.",
      "Guided learners through complex coding challenges, fostering academic and professional growth in computer science.",
      "Contributed to a collaborative learning environment at Telkom University, impacting over 100 students annually.",
    ],
  },
  {
    type: "education",
    year: "2017 - 2021",
    title: "Computer Science Degree",
    company: "Telkom University",
    location: "Bandung, Indonesia",
    description:
      "Developed a strong foundation in software engineering, algorithms, and data-driven system design, with a specialization in building intelligent recommendation systems. Completed multiple projects involving machine learning, backend development, and data analysis. Graduated with distinction, combining academic excellence with hands-on experience in applied computing.",
  },
];

export const principles: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing readable, maintainable code that other developers can understand and build upon.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "Staying current with emerging technologies while mastering fundamental concepts.",
  },
  {
    icon: Shield,
    title: "Security First",
    description:
      "Building with security in mind from day one, not as an afterthought.",
  },
  {
    icon: Rocket,
    title: "Performance Matters",
    description:
      "Optimizing for speed and efficiency to deliver the best user experience.",
  },
  {
    icon: Users,
    title: "User-Centric",
    description:
      "Every technical decision is made with the end user's needs in mind.",
  },
  {
    icon: Zap,
    title: "Ship Fast",
    description:
      "Balancing quality with velocity to deliver value quickly and iterate based on feedback.",
  },
];

export const values: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Heart,
    title: "Passion",
    description:
      "I genuinely love what I do. Building software isn't just my job—it's my craft.",
  },
  {
    icon: Target,
    title: "Excellence",
    description:
      "I strive for excellence in every line of code and every interaction.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "The best solutions come from diverse perspectives working together.",
  },
];

export const skills: {
  backend: string[];
  devops: string[];
  ai: string[];
  frontend: string[];
  tools: string[];
} = {
  backend: [
    "Node.js",
    "Go",
    "Python",
    "PHP",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "GraphQL",
    "gRPC",
    "Kafka",
    "RabbitMQ",
  ],
  devops: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform", "CI/CD"],
  ai: [
    "OpenAI",
    "LangChain",
    "RAG",
    "Vector DBs",
    "Embeddings",
    "Prompt Engineering",
  ],
  frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Svelte",
    "SvelteKit",
  ],
  tools: ["VSCode", "Git", "GitHub", "Notion", "Figma", "Postman"],
};
