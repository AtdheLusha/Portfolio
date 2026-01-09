"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Language = "en" | "it" | "al";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    home: "Home",
    services: "Services",
    company: "Company",
    caseStudies: "Case Studies",
    about: "About",
    projects: "Projects",
    contact: "Contact",
    // Hero
    welcomeTo: "Welcome to",
    designDevelopment: "Design & Development",
    createExtraordinary: "We create extraordinary digital experiences",
    modernDesign: "with modern design and clean code",
    exploreProjects: "Explore Projects",
    contactMe: "Contact Me",
    // About
    ourCoreValues: "Our Core Values",
    buildingFuture:
      "Building the future through innovation, collaboration, and excellence",
    empowerment: "Empowerment",
    empowermentDesc:
      "Unlock your full potential and seize opportunities with our technology partnerships. We empower businesses to unleash growth forces through strategic collaboration.",
    synergy: "Synergy",
    synergyDesc:
      "Experience perfect synergy through effective tech collaboration. Advance with us and achieve unprecedented growth and advancement.",
    advancement: "Advancement",
    advancementDesc:
      "We're dedicated to propelling your progress, reaching new heights together through our cutting-edge technology partnerships.",
    // Projects
    myProjects: "Our Projects",
    exploreWork: "Explore my latest work and creative solutions",
    viewProject: "View Project",
    // Contact
    getInTouch: "Get In Touch",
    haveProject:
      "Have a project in mind? Let's work together to bring it to life",
    contactInformation: "Contact Information",
    feelFree:
      "Feel free to reach out for collaborations or just a friendly hello. I'm always open to discussing new projects and opportunities.",
    email: "Email",
    phone: "Phone",
    location: "Location",
    messageSent: "Message Sent!",
    thankYou: "Thank you for reaching out. I'll get back to you shortly.",
    sendAnother: "Send Another",
    name: "Name",
    yourName: "Your Name",
    emailPlaceholder: "your.email@example.com",
    message: "Message",
    tellAboutProject: "Tell me about your project...",
    sendMessage: "Send Message",
    nameRequired: "Name is required",
    emailRequired: "Email is required",
    emailInvalid: "Email is invalid",
    messageRequired: "Message is required",
    // Testimonials
    whatClientsSay: "What Clients Say",
    dontJustTake:
      "Don't just take our word for it - hear from our satisfied clients",
    clients: "Clients",
    // Company
    ourCompany: "Our Company",
    companyDescription:
      "Our company includes specialists software engineers, UI/UX designers, project managers, business analysts, quality assurance specialists, and more.",
    companySize: "Company size",
    projectsReleased: "Projects released",
    founded: "Founded",
    innovationMeetsExpertise: "Where Innovation Meets Expertise",
    companyTagline:
      "Alcode combines advanced technology and strategic insight to deliver top-quality digital solutions.",
    aboutUs: "About us",
    aboutUsDesc:
      "Alcode excels in creating impactful digital experiences that elevate brands.",
    howWeWork: "How we work",
    howWeWorkDesc:
      "Gain insights into Alcode's refined software development process, where each step of our workflow is created for optimal results.",
    careers: "Careers",
    careersDesc:
      "Join Alcode and drive the future of design, development, digital marketing, and beyond.",
    // Services
    ourServices: "Our Services",
    dedicatedTeams: "Dedicated teams",
    dedicatedTeamsDesc:
      "Add new dedicated team members that are ready to jump on your project at any time.",
    mobileDevelopment: "Mobile development",
    mobileDevelopmentDesc:
      "We create mobile apps that drive business goals, and help achieve success.",
    technologyConsulting: "Technology consulting",
    technologyConsultingDesc:
      "Alcode optimizes app performance, extends software lifetime with top-tier support.",
    uiUxDesign: "UI/UX Design",
    uiUxDesignDesc:
      "We create designs that attract and engage your users, turning them into loyal customers.",
    softwareTesting: "Software testing",
    softwareTestingDesc:
      "Expert software testing for reliable, stable products. Fast, valuable solutions.",
    webDevelopment: "Web development",
    webDevelopmentDesc:
      "We're your reliable software development partner, offering comprehensive tech solutions.",
    dedicatedTeamsShort:
      "Add ready-to-go team members for your project anytime.",
    mobileDevelopmentShort:
      "We craft mobile apps to meet business goals and drive success.",
    technologyConsultingShort:
      "Alcode boosts app performance, extends software life with top support.",
    uiUxDesignShort: "We design to engage users, fostering loyalty.",
    softwareTestingShort:
      "Expert testing for reliable software. Fast, valuable solutions.",
    webDevelopmentShort:
      "Your reliable tech partner, offering comprehensive solutions.",
    learnMore: "Learn More",
    // Service Pages - Technology Consulting
    technologyConsultingMainDesc:
      "Our technology consulting services help businesses navigate complex technology decisions and implement solutions that drive growth. We provide expert guidance on strategy, architecture, security, and digital transformation to ensure your technology investments deliver maximum value.",
    technologyConsultingServicesTitle: "Our Consulting Services",
    technologyConsultingFeature1Title: "Strategic Planning",
    technologyConsultingFeature1Desc:
      "Develop comprehensive technology strategies aligned with your business objectives and market demands.",
    technologyConsultingFeature2Title: "Digital Transformation",
    technologyConsultingFeature2Desc:
      "Guide your organization through digital transformation initiatives to stay competitive.",
    technologyConsultingFeature3Title: "Architecture Design",
    technologyConsultingFeature3Desc:
      "Design scalable and robust system architectures that grow with your business needs.",
    technologyConsultingFeature4Title: "Security Assessment",
    technologyConsultingFeature4Desc:
      "Evaluate and enhance your security posture with comprehensive risk assessments.",
    technologyConsultingFeature5Title: "Technology Selection",
    technologyConsultingFeature5Desc:
      "Help choose the right technologies and tools that best fit your specific requirements.",
    technologyConsultingFeature6Title: "Expert Guidance",
    technologyConsultingFeature6Desc:
      "Leverage our deep expertise to make informed technology decisions and avoid costly mistakes.",
    technologyConsultingBenefitsTitle: "Key Benefits",
    technologyConsultingBenefit1:
      "Reduce technology risks and make informed decisions",
    technologyConsultingBenefit2:
      "Optimize IT spending and maximize ROI on technology investments",
    technologyConsultingBenefit3:
      "Accelerate innovation with expert guidance and best practices",
    technologyConsultingBenefit4:
      "Improve operational efficiency through technology optimization",
    technologyConsultingBenefit5:
      "Stay ahead of industry trends and emerging technologies",
    technologyConsultingBenefit6:
      "Build a technology roadmap aligned with business goals",
    // Service Pages - UI/UX Design
    uiUxDesignMainDesc:
      "We create user-centered designs that combine aesthetics with functionality. Our UI/UX design process focuses on understanding your users, crafting intuitive interfaces, and delivering experiences that not only look great but also drive business results.",
    uiUxDesignServicesTitle: "Our Design Services",
    uiUxDesignFeature1Title: "User Interface Design",
    uiUxDesignFeature1Desc:
      "Create visually stunning and intuitive interfaces that captivate users and enhance engagement.",
    uiUxDesignFeature2Title: "User Experience Research",
    uiUxDesignFeature2Desc:
      "Conduct thorough user research to understand needs, behaviors, and pain points.",
    uiUxDesignFeature3Title: "Responsive Design",
    uiUxDesignFeature3Desc:
      "Design interfaces that adapt seamlessly across all devices and screen sizes.",
    uiUxDesignFeature4Title: "Prototyping & Testing",
    uiUxDesignFeature4Desc:
      "Build interactive prototypes and conduct usability testing to refine designs.",
    uiUxDesignFeature5Title: "Visual Design",
    uiUxDesignFeature5Desc:
      "Craft beautiful visual designs with attention to typography, color, and spacing.",
    uiUxDesignFeature6Title: "Design Systems",
    uiUxDesignFeature6Desc:
      "Develop comprehensive design systems for consistent and scalable user experiences.",
    uiUxDesignBenefitsTitle: "Key Benefits",
    uiUxDesignBenefit1:
      "Increase user satisfaction and engagement with intuitive designs",
    uiUxDesignBenefit2:
      "Reduce development costs by catching issues early in the design phase",
    uiUxDesignBenefit3: "Improve conversion rates through optimized user flows",
    uiUxDesignBenefit4:
      "Enhance brand perception with professional and polished interfaces",
    uiUxDesignBenefit5: "Ensure accessibility and usability for all users",
    uiUxDesignBenefit6: "Create memorable experiences that drive user loyalty",
    // Service Pages - Software Testing
    softwareTestingMainDesc:
      "Our comprehensive software testing services ensure your applications are reliable, secure, and perform flawlessly. We employ industry best practices and advanced testing methodologies to identify issues early, reduce risks, and deliver high-quality software that meets your business requirements.",
    softwareTestingServicesTitle: "Our Testing Services",
    softwareTestingFeature1Title: "Functional Testing",
    softwareTestingFeature1Desc:
      "Comprehensive testing of all features and functionalities to ensure they work as intended.",
    softwareTestingFeature2Title: "Security Testing",
    softwareTestingFeature2Desc:
      "Identify vulnerabilities and security risks to protect your application from threats.",
    softwareTestingFeature3Title: "Performance Testing",
    softwareTestingFeature3Desc:
      "Evaluate system performance under various load conditions to ensure optimal speed.",
    softwareTestingFeature4Title: "Automated Testing",
    softwareTestingFeature4Desc:
      "Implement automated test suites for faster, more reliable testing cycles.",
    softwareTestingFeature5Title: "API Testing",
    softwareTestingFeature5Desc:
      "Thorough testing of APIs to ensure proper integration and data flow between systems.",
    softwareTestingFeature6Title: "Test Reporting",
    softwareTestingFeature6Desc:
      "Detailed test reports and analytics to track quality metrics and improvement areas.",
    softwareTestingBenefitsTitle: "Key Benefits",
    softwareTestingBenefit1:
      "Ensure software quality and reliability before release",
    softwareTestingBenefit2:
      "Reduce production bugs and minimize post-deployment issues",
    softwareTestingBenefit3:
      "Improve user experience by catching usability problems early",
    softwareTestingBenefit4:
      "Save costs by identifying defects before they reach production",
    softwareTestingBenefit5:
      "Increase confidence in software releases with comprehensive testing",
    softwareTestingBenefit6:
      "Meet compliance and regulatory requirements through thorough validation",
    // Service Pages - Web Development
    webDevelopmentMainDesc:
      "We develop custom web applications that are fast, secure, and scalable. From simple websites to complex web platforms, our team leverages the latest technologies and best practices to deliver solutions that drive your business forward and provide exceptional user experiences.",
    webDevelopmentServicesTitle: "Our Web Development Services",
    webDevelopmentFeature1Title: "Frontend Development",
    webDevelopmentFeature1Desc:
      "Build modern, responsive user interfaces using React, Vue, Angular, and other cutting-edge frameworks.",
    webDevelopmentFeature2Title: "Backend Development",
    webDevelopmentFeature2Desc:
      "Develop robust server-side applications with Node.js, Python, PHP, and other powerful technologies.",
    webDevelopmentFeature3Title: "Full-Stack Solutions",
    webDevelopmentFeature3Desc:
      "End-to-end web development services covering both frontend and backend for complete solutions.",
    webDevelopmentFeature4Title: "Responsive Design",
    webDevelopmentFeature4Desc:
      "Create websites that adapt perfectly to all devices, from mobile phones to large desktop screens.",
    webDevelopmentFeature5Title: "E-Commerce Platforms",
    webDevelopmentFeature5Desc:
      "Build secure and scalable online stores with payment integration and inventory management.",
    webDevelopmentFeature6Title: "CMS Development",
    webDevelopmentFeature6Desc:
      "Custom content management systems that give you full control over your website content.",
    webDevelopmentBenefitsTitle: "Key Benefits",
    webDevelopmentBenefit1:
      "Create fast, scalable, and maintainable web applications",
    webDevelopmentBenefit2:
      "Improve user experience with modern and intuitive interfaces",
    webDevelopmentBenefit3: "Enhance SEO and search engine visibility",
    webDevelopmentBenefit4:
      "Ensure cross-browser compatibility and accessibility",
    webDevelopmentBenefit5:
      "Implement security best practices to protect user data",
    webDevelopmentBenefit6:
      "Optimize performance for faster load times and better conversions",
    // Service Pages - Mobile Development
    mobileDevelopmentMainDesc:
      "We create mobile apps that drive business goals and help achieve success. Our team specializes in developing high-quality mobile applications for iOS and Android platforms, combining cutting-edge technology with user-centered design to deliver exceptional mobile experiences.",
    mobileDevelopmentServicesTitle: "Our Mobile Development Services",
    mobileDevelopmentFeature1Title: "Cross-Platform Solutions",
    mobileDevelopmentFeature1Desc:
      "Build apps that work seamlessly on both iOS and Android platforms with a single codebase.",
    mobileDevelopmentFeature2Title: "Native iOS Development",
    mobileDevelopmentFeature2Desc:
      "Leverage Swift and Objective-C to create high-performance native iOS applications.",
    mobileDevelopmentFeature3Title: "Native Android Development",
    mobileDevelopmentFeature3Desc:
      "Develop robust Android apps using Kotlin and Java with Material Design principles.",
    mobileDevelopmentFeature4Title: "Modern Frameworks",
    mobileDevelopmentFeature4Desc:
      "Utilize React Native, Flutter, and other cutting-edge frameworks for faster development.",
    mobileDevelopmentFeature5Title: "Performance Optimization",
    mobileDevelopmentFeature5Desc:
      "Ensure your apps run smoothly with optimized code and efficient resource management.",
    mobileDevelopmentFeature6Title: "Security & Testing",
    mobileDevelopmentFeature6Desc:
      "Implement robust security measures and comprehensive testing for reliable applications.",
    mobileDevelopmentBenefitsTitle: "Key Benefits",
    mobileDevelopmentBenefit1:
      "Increased user engagement and retention through intuitive mobile experiences",
    mobileDevelopmentBenefit2:
      "Access to mobile-specific features like GPS, camera, and push notifications",
    mobileDevelopmentBenefit3:
      "Faster time to market with agile development methodologies",
    mobileDevelopmentBenefit4:
      "Scalable architecture to support growing user bases",
    mobileDevelopmentBenefit5:
      "Regular updates and maintenance to keep apps current",
    mobileDevelopmentBenefit6:
      "Expert guidance on App Store and Google Play submission processes",
    // Service Pages - Dedicated Teams
    dedicatedTeamsMainDesc:
      "Our dedicated teams service provides you with skilled professionals who become an integral part of your project. These team members are fully committed to your success, working exclusively on your initiatives while seamlessly integrating with your existing processes and culture.",
    dedicatedTeamsServicesTitle: "Why Choose Dedicated Teams?",
    dedicatedTeamsFeature1Title: "Expert Team Members",
    dedicatedTeamsFeature1Desc:
      "Hand-picked professionals with proven expertise in your technology stack and industry domain.",
    dedicatedTeamsFeature2Title: "Flexible Scaling",
    dedicatedTeamsFeature2Desc:
      "Scale your team up or down based on project requirements and business needs at any time.",
    dedicatedTeamsFeature3Title: "Faster Time to Market",
    dedicatedTeamsFeature3Desc:
      "Accelerate development cycles with dedicated resources focused solely on your project.",
    dedicatedTeamsFeature4Title: "Seamless Integration",
    dedicatedTeamsFeature4Desc:
      "Our team members integrate smoothly with your existing workflows and communication tools.",
    dedicatedTeamsFeature5Title: "Long-term Partnership",
    dedicatedTeamsFeature5Desc:
      "Build lasting relationships with team members who understand your business deeply.",
    dedicatedTeamsFeature6Title: "Rapid Onboarding",
    dedicatedTeamsFeature6Desc:
      "Get started quickly with team members who are ready to contribute from day one.",
    dedicatedTeamsBenefitsTitle: "Key Benefits",
    dedicatedTeamsBenefit1:
      "Cost-effective solution compared to hiring full-time employees",
    dedicatedTeamsBenefit2:
      "Access to a global talent pool of skilled professionals",
    dedicatedTeamsBenefit3: "Reduced overhead costs and administrative burden",
    dedicatedTeamsBenefit4: "Flexible engagement models to suit your needs",
    dedicatedTeamsBenefit5: "24/7 support and continuous project coverage",
    dedicatedTeamsBenefit6: "Domain expertise across various industries",
    // Footer
    contacts: "Contacts",
    telefoni: "Phone",
    adresa: "Address",
    socials: "Socials",
    madeWithCare: "Made with great care",
    // About Us Page
    aboutUsMainTitle: "About Us",
    aboutUsMainDesc:
      "Alcode excels in creating impactful digital experiences that elevate brands.",
    aboutUsStoryTitle: "Our Story",
    aboutUsStoryDesc:
      "Founded with a vision to transform businesses through technology, Alcode has grown into a trusted partner for companies seeking innovative digital solutions. We combine technical expertise with creative thinking to deliver exceptional results.",
    aboutUsMissionTitle: "Our Mission",
    aboutUsMissionDesc:
      "To empower businesses with cutting-edge technology solutions that drive growth, enhance user experiences, and create lasting value in an ever-evolving digital landscape.",
    aboutUsValuesTitle: "Our Values",
    aboutUsValue1Title: "Innovation",
    aboutUsValue1Desc:
      "We stay ahead of the curve by embracing the latest technologies and methodologies.",
    aboutUsValue2Title: "Excellence",
    aboutUsValue2Desc:
      "We are committed to delivering the highest quality solutions in everything we do.",
    aboutUsValue3Title: "Collaboration",
    aboutUsValue3Desc:
      "We work closely with our clients to understand their unique needs and goals.",
    aboutUsValue4Title: "Integrity",
    aboutUsValue4Desc:
      "We build trust through transparency, honesty, and ethical business practices.",
    aboutUsTeamTitle: "Our Team",
    aboutUsTeamDesc:
      "Our diverse team of specialists includes software engineers, UI/UX designers, project managers, business analysts, and quality assurance experts. Together, we bring years of combined experience to every project.",
    // Team Roles
    teamRoleSoftwareEngineer: "Software Engineer",
    teamRoleFrontendDeveloper: "Frontend Developer",
    teamRoleBackendDeveloper: "Backend Developer",
    teamRoleAndroidDeveloper: "Android Developer",
    teamRoleIOSDeveloper: "iOS Developer",
    teamRoleSEOSpecialist: "SEO Specialist",
    teamRoleEmailMarketing: "Email & Marketing",
    teamRoleAdministrator: "Administrator",
    teamRoleSalesManager: "Sales Manager",
    teamRoleCoordinator: "Coordinator",
    teamRoleSeniorFullStack: "Senior Full Stack",
    teamRoleFullStackDeveloper: "Full-Stack Developer",
    // How We Work Page
    howWeWorkMainTitle: "How We Work",
    howWeWorkMainDesc:
      "Gain insights into Alcode's refined software development process, where each step of our workflow is created for optimal results.",
    howWeWorkProcessTitle: "Our Process",
    howWeWorkStep1Title: "Discovery",
    howWeWorkStep1Desc:
      "We start by understanding your business goals, target audience, and project requirements through comprehensive consultation.",
    howWeWorkStep2Title: "Planning",
    howWeWorkStep2Desc:
      "Our team creates a detailed project plan with timelines, milestones, and resource allocation to ensure smooth execution.",
    howWeWorkStep3Title: "Design",
    howWeWorkStep3Desc:
      "We design intuitive and visually appealing interfaces that align with your brand and user expectations.",
    howWeWorkStep4Title: "Development",
    howWeWorkStep4Desc:
      "Our developers write clean, maintainable code following industry best practices and your specifications.",
    howWeWorkStep5Title: "Testing",
    howWeWorkStep5Desc:
      "Rigorous testing ensures your product is reliable, secure, and performs flawlessly across all platforms.",
    howWeWorkStep6Title: "Deployment & Support",
    howWeWorkStep6Desc:
      "We deploy your solution and provide ongoing support to ensure continued success and optimal performance.",
    // Project Page Process Section
    projectProcessTitle: "Our Development Process",
    projectStepInProgress: "(In Progress)",
    howWeWorkMethodologyTitle: "Our Methodology",
    howWeWorkMethodologyDesc:
      "We follow agile development practices that enable flexibility, rapid iteration, and continuous improvement. Our approach ensures transparency, regular communication, and the ability to adapt to changing requirements.",
    // Careers Page
    careersMainTitle: "Careers",
    careersMainDesc:
      "Join Alcode and drive the future of design, development, digital marketing, and beyond.",
    careersWhyJoinTitle: "Why Join Alcode?",
    careersWhyJoinDesc:
      "At Alcode, we believe in creating an environment where talented individuals can grow, innovate, and make a real impact. We offer competitive benefits, professional development opportunities, and a collaborative culture.",
    careersBenefitsTitle: "Benefits & Perks",
    careersBenefit1: "Competitive salary and performance bonuses",
    careersBenefit2: "Flexible working hours and remote work options",
    careersBenefit3: "Professional development and training opportunities",
    careersBenefit4: "Health insurance and wellness programs",
    careersBenefit5: "Collaborative and inclusive work environment",
    careersBenefit6: "Opportunity to work on exciting and challenging projects",
    careersOpenPositionsTitle: "Open Positions",
    careersNoPositions:
      "We're always looking for talented individuals to join our team. Please send us your CV at careers@alcode.com",
    careersApplyNow: "Apply Now",
    careersSendCV: "Send Your CV",
    // Chat
    openChat: "Open Chat",
    chatTitle: "Chat with Us",
    chatSubtitle: "We're here to help",
    chatWelcomeMessage:
      "Start a conversation with our team. We're here to help!",
    chatPlaceholder: "Type your message...",
    chatCompanyResponse:
      "Thank you for your message! Our team will get back to you shortly. How can we assist you today?",
    minimize: "Minimize",
    maximize: "Maximize",
    closeChat: "Close Chat",
  },
  it: {
    // Navigation
    home: "Home",
    services: "Servizi",
    company: "Azienda",
    caseStudies: "Casi di Studio",
    about: "Chi Siamo",
    projects: "Progetti",
    contact: "Contatti",
    // Hero
    welcomeTo: "Benvenuto in",
    designDevelopment: "Design & Sviluppo",
    createExtraordinary: "Creiamo esperienze digitali straordinarie",
    modernDesign: "con design moderno e codice pulito",
    exploreProjects: "Esplora Progetti",
    contactMe: "Contattami",
    // About
    ourCoreValues: "I Nostri Valori Fondamentali",
    buildingFuture:
      "Costruire il futuro attraverso innovazione, collaborazione ed eccellenza",
    empowerment: "Potenziamento",
    empowermentDesc:
      "Sblocca il tuo pieno potenziale e cogli le opportunità con le nostre partnership tecnologiche. Potenziamo le aziende per liberare forze di crescita attraverso collaborazione strategica.",
    synergy: "Sinergia",
    synergyDesc:
      "Sperimenta una sinergia perfetta attraverso un'efficace collaborazione tecnologica. Avanza con noi e raggiungi una crescita e un progresso senza precedenti.",
    advancement: "Progresso",
    advancementDesc:
      "Siamo dedicati a promuovere il tuo progresso, raggiungendo nuove vette insieme attraverso le nostre partnership tecnologiche all'avanguardia.",
    // Projects
    myProjects: "I Nostri Progetti",
    exploreWork: "Esplora il mio ultimo lavoro e soluzioni creative",
    viewProject: "Vedi Progetto",
    // Contact
    getInTouch: "Mettiti in Contatto",
    haveProject: "Hai un progetto in mente? Lavoriamo insieme per realizzarlo",
    contactInformation: "Informazioni di Contatto",
    feelFree:
      "Sentiti libero di contattarci per collaborazioni o solo un saluto amichevole. Sono sempre aperto a discutere nuovi progetti e opportunità.",
    email: "Email",
    phone: "Telefono",
    location: "Posizione",
    messageSent: "Messaggio Inviato!",
    thankYou: "Grazie per averci contattato. Ti risponderò a breve.",
    sendAnother: "Invia un Altro",
    name: "Nome",
    yourName: "Il Tuo Nome",
    emailPlaceholder: "tua.email@esempio.com",
    message: "Messaggio",
    tellAboutProject: "Raccontami del tuo progetto...",
    sendMessage: "Invia Messaggio",
    nameRequired: "Il nome è obbligatorio",
    emailRequired: "L'email è obbligatoria",
    emailInvalid: "L'email non è valida",
    messageRequired: "Il messaggio è obbligatorio",
    // Testimonials
    whatClientsSay: "Cosa Dicono i Clienti",
    dontJustTake:
      "Non fidarti solo della nostra parola - ascolta i nostri clienti soddisfatti",
    clients: "Clienti",
    // Company
    ourCompany: "La Nostra Azienda",
    companyDescription:
      "La nostra azienda include specialisti ingegneri software, designer UI/UX, project manager, business analyst, specialisti di quality assurance e altro ancora.",
    companySize: "Dimensione azienda",
    projectsReleased: "Progetti rilasciati",
    founded: "Fondata",
    innovationMeetsExpertise: "Dove l'Innovazione Incontra l'Esperienza",
    companyTagline:
      "Alcode combina tecnologia avanzata e intuizione strategica per offrire soluzioni digitali di alta qualità.",
    aboutUs: "Chi siamo",
    aboutUsDesc:
      "Alcode eccelle nella creazione di esperienze digitali di impatto che elevano i brand.",
    howWeWork: "Come lavoriamo",
    howWeWorkDesc:
      "Scopri il processo raffinato di sviluppo software di Alcode, dove ogni fase del nostro flusso di lavoro è creata per risultati ottimali.",
    careers: "Carriere",
    careersDesc:
      "Unisciti a Alcode e guida il futuro di design, sviluppo, digital marketing e oltre.",
    // Services
    ourServices: "I Nostri Servizi",
    dedicatedTeams: "Team dedicati",
    dedicatedTeamsDesc:
      "Aggiungi nuovi membri del team dedicati pronti a lavorare sul tuo progetto in qualsiasi momento.",
    mobileDevelopment: "Sviluppo mobile",
    mobileDevelopmentDesc:
      "Creiamo app mobili che guidano gli obiettivi aziendali e aiutano a raggiungere il successo.",
    technologyConsulting: "Consulenza tecnologica",
    technologyConsultingDesc:
      "Ottimizziamo le prestazioni delle app, estendiamo la durata del software con supporto di alto livello.",
    uiUxDesign: "UI/UX Design",
    uiUxDesignDesc:
      "Creiamo design che attirano e coinvolgono i tuoi utenti, trasformandoli in clienti fedeli.",
    softwareTesting: "Test software",
    softwareTestingDesc:
      "Test software esperti per prodotti affidabili e stabili. Soluzioni rapide e preziose.",
    webDevelopment: "Sviluppo web",
    webDevelopmentDesc:
      "Siamo il tuo partner affidabile per lo sviluppo software, offrendo soluzioni tecnologiche complete.",
    dedicatedTeamsShort:
      "Aggiungi membri del team pronti per il tuo progetto in qualsiasi momento.",
    mobileDevelopmentShort:
      "Creiamo app mobili per raggiungere obiettivi aziendali e guidare il successo.",
    technologyConsultingShort:
      "Miglioriamo le prestazioni delle app, estendiamo la durata del software con supporto di alto livello.",
    uiUxDesignShort:
      "Progettiamo per coinvolgere gli utenti, promuovendo la fedeltà.",
    softwareTestingShort:
      "Test esperti per software affidabile. Soluzioni rapide e preziose.",
    webDevelopmentShort:
      "Il tuo partner tecnologico affidabile, che offre soluzioni complete.",
    learnMore: "Scopri di Più",
    // Service Pages - Technology Consulting
    technologyConsultingMainDesc:
      "I nostri servizi di consulenza tecnologica aiutano le aziende a navigare decisioni tecnologiche complesse e implementare soluzioni che guidano la crescita. Forniamo una guida esperta su strategia, architettura, sicurezza e trasformazione digitale per garantire che i vostri investimenti tecnologici offrano il massimo valore.",
    technologyConsultingServicesTitle: "I Nostri Servizi di Consulenza",
    technologyConsultingFeature1Title: "Pianificazione Strategica",
    technologyConsultingFeature1Desc:
      "Sviluppare strategie tecnologiche complete allineate con i vostri obiettivi aziendali e le richieste del mercato.",
    technologyConsultingFeature2Title: "Trasformazione Digitale",
    technologyConsultingFeature2Desc:
      "Guidare la vostra organizzazione attraverso iniziative di trasformazione digitale per rimanere competitivi.",
    technologyConsultingFeature3Title: "Progettazione Architetturale",
    technologyConsultingFeature3Desc:
      "Progettare architetture di sistema scalabili e robuste che crescono con le vostre esigenze aziendali.",
    technologyConsultingFeature4Title: "Valutazione della Sicurezza",
    technologyConsultingFeature4Desc:
      "Valutare e migliorare la vostra postura di sicurezza con valutazioni complete dei rischi.",
    technologyConsultingFeature5Title: "Selezione Tecnologica",
    technologyConsultingFeature5Desc:
      "Aiutare a scegliere le tecnologie e gli strumenti giusti che si adattano meglio alle vostre esigenze specifiche.",
    technologyConsultingFeature6Title: "Guida Esperta",
    technologyConsultingFeature6Desc:
      "Sfruttare la nostra profonda esperienza per prendere decisioni tecnologiche informate ed evitare errori costosi.",
    technologyConsultingBenefitsTitle: "Vantaggi Chiave",
    technologyConsultingBenefit1:
      "Ridurre i rischi tecnologici e prendere decisioni informate",
    technologyConsultingBenefit2:
      "Ottimizzare la spesa IT e massimizzare il ROI sugli investimenti tecnologici",
    technologyConsultingBenefit3:
      "Accelerare l'innovazione con guida esperta e best practices",
    technologyConsultingBenefit4:
      "Migliorare l'efficienza operativa attraverso l'ottimizzazione tecnologica",
    technologyConsultingBenefit5:
      "Rimanere all'avanguardia delle tendenze del settore e delle tecnologie emergenti",
    technologyConsultingBenefit6:
      "Costruire una roadmap tecnologica allineata con gli obiettivi aziendali",
    // Service Pages - UI/UX Design
    uiUxDesignMainDesc:
      "Creiamo design centrati sull'utente che combinano estetica e funzionalità. Il nostro processo di design UI/UX si concentra sulla comprensione dei vostri utenti, sulla creazione di interfacce intuitive e sulla consegna di esperienze che non solo sembrano fantastiche ma guidano anche i risultati aziendali.",
    uiUxDesignServicesTitle: "I Nostri Servizi di Design",
    uiUxDesignFeature1Title: "Design dell'Interfaccia Utente",
    uiUxDesignFeature1Desc:
      "Creare interfacce visivamente straordinarie e intuitive che catturano gli utenti e migliorano il coinvolgimento.",
    uiUxDesignFeature2Title: "Ricerca sull'Esperienza Utente",
    uiUxDesignFeature2Desc:
      "Condurre ricerche approfondite sugli utenti per comprendere esigenze, comportamenti e punti critici.",
    uiUxDesignFeature3Title: "Design Responsive",
    uiUxDesignFeature3Desc:
      "Progettare interfacce che si adattano perfettamente a tutti i dispositivi e dimensioni dello schermo.",
    uiUxDesignFeature4Title: "Prototipazione e Test",
    uiUxDesignFeature4Desc:
      "Costruire prototipi interattivi e condurre test di usabilità per perfezionare i design.",
    uiUxDesignFeature5Title: "Design Visivo",
    uiUxDesignFeature5Desc:
      "Creare design visivi bellissimi con attenzione alla tipografia, al colore e allo spaziatura.",
    uiUxDesignFeature6Title: "Sistemi di Design",
    uiUxDesignFeature6Desc:
      "Sviluppare sistemi di design completi per esperienze utente coerenti e scalabili.",
    uiUxDesignBenefitsTitle: "Vantaggi Chiave",
    uiUxDesignBenefit1:
      "Aumentare la soddisfazione e il coinvolgimento degli utenti con design intuitivi",
    uiUxDesignBenefit2:
      "Ridurre i costi di sviluppo individuando problemi nella fase di design",
    uiUxDesignBenefit3:
      "Migliorare i tassi di conversione attraverso flussi utente ottimizzati",
    uiUxDesignBenefit4:
      "Migliorare la percezione del brand con interfacce professionali e raffinate",
    uiUxDesignBenefit5:
      "Garantire accessibilità e usabilità per tutti gli utenti",
    uiUxDesignBenefit6:
      "Creare esperienze memorabili che guidano la fedeltà degli utenti",
    // Service Pages - Software Testing
    softwareTestingMainDesc:
      "I nostri servizi completi di test software garantiscono che le vostre applicazioni siano affidabili, sicure e funzionino perfettamente. Impieghiamo best practices del settore e metodologie di test avanzate per identificare problemi in anticipo, ridurre i rischi e consegnare software di alta qualità che soddisfa i vostri requisiti aziendali.",
    softwareTestingServicesTitle: "I Nostri Servizi di Test",
    softwareTestingFeature1Title: "Test Funzionali",
    softwareTestingFeature1Desc:
      "Test completi di tutte le funzionalità per garantire che funzionino come previsto.",
    softwareTestingFeature2Title: "Test di Sicurezza",
    softwareTestingFeature2Desc:
      "Identificare vulnerabilità e rischi di sicurezza per proteggere la vostra applicazione dalle minacce.",
    softwareTestingFeature3Title: "Test delle Prestazioni",
    softwareTestingFeature3Desc:
      "Valutare le prestazioni del sistema sotto varie condizioni di carico per garantire velocità ottimali.",
    softwareTestingFeature4Title: "Test Automatizzati",
    softwareTestingFeature4Desc:
      "Implementare suite di test automatizzate per cicli di test più veloci e affidabili.",
    softwareTestingFeature5Title: "Test API",
    softwareTestingFeature5Desc:
      "Test approfonditi delle API per garantire integrazione corretta e flusso di dati tra sistemi.",
    softwareTestingFeature6Title: "Report di Test",
    softwareTestingFeature6Desc:
      "Report di test dettagliati e analisi per tracciare metriche di qualità e aree di miglioramento.",
    softwareTestingBenefitsTitle: "Vantaggi Chiave",
    softwareTestingBenefit1:
      "Garantire qualità e affidabilità del software prima del rilascio",
    softwareTestingBenefit2:
      "Ridurre i bug di produzione e minimizzare i problemi post-deployment",
    softwareTestingBenefit3:
      "Migliorare l'esperienza utente individuando problemi di usabilità in anticipo",
    softwareTestingBenefit4:
      "Risparmiare costi identificando difetti prima che raggiungano la produzione",
    softwareTestingBenefit5:
      "Aumentare la fiducia nei rilasci software con test completi",
    softwareTestingBenefit6:
      "Soddisfare requisiti di conformità e normativi attraverso validazione approfondita",
    // Service Pages - Web Development
    webDevelopmentMainDesc:
      "Sviluppiamo applicazioni web personalizzate che sono veloci, sicure e scalabili. Da siti web semplici a piattaforme web complesse, il nostro team sfrutta le ultime tecnologie e best practices per consegnare soluzioni che guidano il vostro business in avanti e forniscono esperienze utente eccezionali.",
    webDevelopmentServicesTitle: "I Nostri Servizi di Sviluppo Web",
    webDevelopmentFeature1Title: "Sviluppo Frontend",
    webDevelopmentFeature1Desc:
      "Costruire interfacce utente moderne e responsive utilizzando React, Vue, Angular e altri framework all'avanguardia.",
    webDevelopmentFeature2Title: "Sviluppo Backend",
    webDevelopmentFeature2Desc:
      "Sviluppare applicazioni lato server robuste con Node.js, Python, PHP e altre tecnologie potenti.",
    webDevelopmentFeature3Title: "Soluzioni Full-Stack",
    webDevelopmentFeature3Desc:
      "Servizi di sviluppo web end-to-end che coprono sia frontend che backend per soluzioni complete.",
    webDevelopmentFeature4Title: "Design Responsive",
    webDevelopmentFeature4Desc:
      "Creare siti web che si adattano perfettamente a tutti i dispositivi, dai telefoni cellulari ai grandi schermi desktop.",
    webDevelopmentFeature5Title: "Piattaforme E-Commerce",
    webDevelopmentFeature5Desc:
      "Costruire negozi online sicuri e scalabili con integrazione dei pagamenti e gestione dell'inventario.",
    webDevelopmentFeature6Title: "Sviluppo CMS",
    webDevelopmentFeature6Desc:
      "Sistemi di gestione contenuti personalizzati che vi danno il controllo completo sul contenuto del vostro sito web.",
    webDevelopmentBenefitsTitle: "Vantaggi Chiave",
    webDevelopmentBenefit1:
      "Creare applicazioni web veloci, scalabili e manutenibili",
    webDevelopmentBenefit2:
      "Migliorare l'esperienza utente con interfacce moderne e intuitive",
    webDevelopmentBenefit3: "Migliorare SEO e visibilità sui motori di ricerca",
    webDevelopmentBenefit4:
      "Garantire compatibilità cross-browser e accessibilità",
    webDevelopmentBenefit5:
      "Implementare best practices di sicurezza per proteggere i dati degli utenti",
    webDevelopmentBenefit6:
      "Ottimizzare le prestazioni per tempi di caricamento più veloci e migliori conversioni",
    // Service Pages - Mobile Development
    mobileDevelopmentMainDesc:
      "Creiamo app mobili che guidano gli obiettivi aziendali e aiutano a raggiungere il successo. Il nostro team si specializza nello sviluppo di applicazioni mobili di alta qualità per piattaforme iOS e Android, combinando tecnologia all'avanguardia con design centrato sull'utente per consegnare esperienze mobili eccezionali.",
    mobileDevelopmentServicesTitle: "I Nostri Servizi di Sviluppo Mobile",
    mobileDevelopmentFeature1Title: "Soluzioni Cross-Platform",
    mobileDevelopmentFeature1Desc:
      "Costruire app che funzionano perfettamente su entrambe le piattaforme iOS e Android con un unico codebase.",
    mobileDevelopmentFeature2Title: "Sviluppo iOS Nativo",
    mobileDevelopmentFeature2Desc:
      "Sfruttare Swift e Objective-C per creare applicazioni iOS native ad alte prestazioni.",
    mobileDevelopmentFeature3Title: "Sviluppo Android Nativo",
    mobileDevelopmentFeature3Desc:
      "Sviluppare app Android robuste utilizzando Kotlin e Java con principi Material Design.",
    mobileDevelopmentFeature4Title: "Framework Moderni",
    mobileDevelopmentFeature4Desc:
      "Utilizzare React Native, Flutter e altri framework all'avanguardia per uno sviluppo più veloce.",
    mobileDevelopmentFeature5Title: "Ottimizzazione delle Prestazioni",
    mobileDevelopmentFeature5Desc:
      "Garantire che le vostre app funzionino senza problemi con codice ottimizzato e gestione efficiente delle risorse.",
    mobileDevelopmentFeature6Title: "Sicurezza e Test",
    mobileDevelopmentFeature6Desc:
      "Implementare misure di sicurezza robuste e test completi per applicazioni affidabili.",
    mobileDevelopmentBenefitsTitle: "Vantaggi Chiave",
    mobileDevelopmentBenefit1:
      "Maggiore coinvolgimento e fidelizzazione degli utenti attraverso esperienze mobili intuitive",
    mobileDevelopmentBenefit2:
      "Accesso a funzionalità specifiche per mobile come GPS, fotocamera e notifiche push",
    mobileDevelopmentBenefit3:
      "Tempo di lancio sul mercato più veloce con metodologie di sviluppo agile",
    mobileDevelopmentBenefit4:
      "Architettura scalabile per supportare basi di utenti in crescita",
    mobileDevelopmentBenefit5:
      "Aggiornamenti e manutenzione regolari per mantenere le app aggiornate",
    mobileDevelopmentBenefit6:
      "Guida esperta sui processi di submission su App Store e Google Play",
    // Service Pages - Dedicated Teams
    dedicatedTeamsMainDesc:
      "Il nostro servizio di team dedicati vi fornisce professionisti qualificati che diventano una parte integrale del vostro progetto. Questi membri del team sono completamente dedicati al vostro successo, lavorando esclusivamente sulle vostre iniziative integrandosi perfettamente con i vostri processi e la vostra cultura esistenti.",
    dedicatedTeamsServicesTitle: "Perché Scegliere Team Dedicati?",
    dedicatedTeamsFeature1Title: "Membri del Team Esperti",
    dedicatedTeamsFeature1Desc:
      "Professionisti selezionati a mano con comprovata esperienza nel vostro stack tecnologico e dominio del settore.",
    dedicatedTeamsFeature2Title: "Scalabilità Flessibile",
    dedicatedTeamsFeature2Desc:
      "Scalare il vostro team su o giù in base ai requisiti del progetto e alle esigenze aziendali in qualsiasi momento.",
    dedicatedTeamsFeature3Title: "Tempo di Lancio sul Mercato Più Veloce",
    dedicatedTeamsFeature3Desc:
      "Accelerare i cicli di sviluppo con risorse dedicate focalizzate esclusivamente sul vostro progetto.",
    dedicatedTeamsFeature4Title: "Integrazione Perfetta",
    dedicatedTeamsFeature4Desc:
      "I nostri membri del team si integrano perfettamente con i vostri flussi di lavoro e strumenti di comunicazione esistenti.",
    dedicatedTeamsFeature5Title: "Partnership a Lungo Termine",
    dedicatedTeamsFeature5Desc:
      "Costruire relazioni durature con membri del team che comprendono profondamente il vostro business.",
    dedicatedTeamsFeature6Title: "Onboarding Rapido",
    dedicatedTeamsFeature6Desc:
      "Iniziare rapidamente con membri del team pronti a contribuire dal primo giorno.",
    dedicatedTeamsBenefitsTitle: "Vantaggi Chiave",
    dedicatedTeamsBenefit1:
      "Soluzione conveniente rispetto all'assunzione di dipendenti a tempo pieno",
    dedicatedTeamsBenefit2:
      "Accesso a un pool globale di talenti di professionisti qualificati",
    dedicatedTeamsBenefit3:
      "Riduzione dei costi generali e del carico amministrativo",
    dedicatedTeamsBenefit4:
      "Modelli di coinvolgimento flessibili per soddisfare le vostre esigenze",
    dedicatedTeamsBenefit5: "Supporto 24/7 e copertura continua del progetto",
    dedicatedTeamsBenefit6: "Competenza nel dominio attraverso vari settori",
    // Footer
    contacts: "Contatti",
    telefoni: "Telefono",
    adresa: "Indirizzo",
    socials: "Social",
    madeWithCare: "Fatto con grande cura",
    // About Us Page
    aboutUsMainTitle: "Chi Siamo",
    aboutUsMainDesc:
      "Alcode eccelle nella creazione di esperienze digitali di impatto che elevano i brand.",
    aboutUsStoryTitle: "La Nostra Storia",
    aboutUsStoryDesc:
      "Fondata con la visione di trasformare le aziende attraverso la tecnologia, Alcode è cresciuta fino a diventare un partner affidabile per le aziende che cercano soluzioni digitali innovative. Combiniamo competenza tecnica con pensiero creativo per offrire risultati eccezionali.",
    aboutUsMissionTitle: "La Nostra Missione",
    aboutUsMissionDesc:
      "Potenziamo le aziende con soluzioni tecnologiche all'avanguardia che guidano la crescita, migliorano le esperienze utente e creano valore duraturo in un panorama digitale in continua evoluzione.",
    aboutUsValuesTitle: "I Nostri Valori",
    aboutUsValue1Title: "Innovazione",
    aboutUsValue1Desc:
      "Rimaniamo all'avanguardia abbracciando le ultime tecnologie e metodologie.",
    aboutUsValue2Title: "Eccellenza",
    aboutUsValue2Desc:
      "Siamo impegnati a offrire soluzioni della massima qualità in tutto ciò che facciamo.",
    aboutUsValue3Title: "Collaborazione",
    aboutUsValue3Desc:
      "Lavoriamo a stretto contatto con i nostri clienti per comprendere le loro esigenze e obiettivi unici.",
    aboutUsValue4Title: "Integrità",
    aboutUsValue4Desc:
      "Costruiamo fiducia attraverso trasparenza, onestà e pratiche commerciali etiche.",
    aboutUsTeamTitle: "Il Nostro Team",
    aboutUsTeamDesc:
      "Il nostro team diversificato di specialisti include ingegneri software, designer UI/UX, project manager, analisti aziendali ed esperti di assicurazione qualità. Insieme, portiamo anni di esperienza combinata in ogni progetto.",
    // Team Roles
    teamRoleSoftwareEngineer: "Ingegnere Software",
    teamRoleFrontendDeveloper: "Sviluppatore Frontend",
    teamRoleBackendDeveloper: "Sviluppatore Backend",
    teamRoleAndroidDeveloper: "Sviluppatore Android",
    teamRoleIOSDeveloper: "Sviluppatore iOS",
    teamRoleSEOSpecialist: "Specialista SEO",
    teamRoleEmailMarketing: "Email & Marketing",
    teamRoleAdministrator: "Amministratore",
    teamRoleSalesManager: "Responsabile Vendite",
    teamRoleCoordinator: "Coordinatore",
    teamRoleSeniorFullStack: "Senior Full Stack",
    teamRoleFullStackDeveloper: "Sviluppatore Full-Stack",
    // How We Work Page
    howWeWorkMainTitle: "Come Lavoriamo",
    howWeWorkMainDesc:
      "Scopri il processo raffinato di sviluppo software di Alcode, dove ogni fase del nostro flusso di lavoro è creata per risultati ottimali.",
    howWeWorkProcessTitle: "Il Nostro Processo",
    howWeWorkStep1Title: "Discovery",
    howWeWorkStep1Desc:
      "Iniziamo comprendendo i tuoi obiettivi aziendali, il pubblico target e i requisiti del progetto attraverso una consulenza completa.",
    howWeWorkStep2Title: "Pianificazione",
    howWeWorkStep2Desc:
      "Il nostro team crea un piano di progetto dettagliato con tempistiche, milestone e allocazione delle risorse per garantire un'esecuzione fluida.",
    howWeWorkStep3Title: "Design",
    howWeWorkStep3Desc:
      "Progettiamo interfacce intuitive e visivamente accattivanti allineate con il tuo brand e le aspettative degli utenti.",
    howWeWorkStep4Title: "Sviluppo",
    howWeWorkStep4Desc:
      "I nostri sviluppatori scrivono codice pulito e manutenibile seguendo le best practice del settore e le tue specifiche.",
    howWeWorkStep5Title: "Test",
    howWeWorkStep5Desc:
      "Test rigorosi garantiscono che il tuo prodotto sia affidabile, sicuro e funzioni perfettamente su tutte le piattaforme.",
    howWeWorkStep6Title: "Deployment e Supporto",
    howWeWorkStep6Desc:
      "Distribuiamo la tua soluzione e forniamo supporto continuo per garantire successo continuo e prestazioni ottimali.",
    // Project Page Process Section
    projectProcessTitle: "Il Nostro Processo di Sviluppo",
    projectStepInProgress: "(In Corso)",
    howWeWorkMethodologyTitle: "La Nostra Metodologia",
    howWeWorkMethodologyDesc:
      "Seguiamo pratiche di sviluppo agile che consentono flessibilità, iterazione rapida e miglioramento continuo. Il nostro approccio garantisce trasparenza, comunicazione regolare e la capacità di adattarsi ai requisiti che cambiano.",
    // Careers Page
    careersMainTitle: "Carriere",
    careersMainDesc:
      "Unisciti a Alcode e guida il futuro di design, sviluppo, digital marketing e oltre.",
    careersWhyJoinTitle: "Perché Unirsi a Alcode?",
    careersWhyJoinDesc:
      "In Alcode, crediamo nella creazione di un ambiente dove individui talentuosi possono crescere, innovare e avere un impatto reale. Offriamo benefit competitivi, opportunità di sviluppo professionale e una cultura collaborativa.",
    careersBenefitsTitle: "Benefit e Vantaggi",
    careersBenefit1: "Stipendio competitivo e bonus di performance",
    careersBenefit2: "Orari di lavoro flessibili e opzioni di lavoro remoto",
    careersBenefit3: "Sviluppo professionale e opportunità di formazione",
    careersBenefit4: "Assicurazione sanitaria e programmi di benessere",
    careersBenefit5: "Ambiente di lavoro collaborativo e inclusivo",
    careersBenefit6:
      "Opportunità di lavorare su progetti entusiasmanti e stimolanti",
    careersOpenPositionsTitle: "Posizioni Aperte",
    careersNoPositions:
      "Cerchiamo sempre individui talentuosi per unirsi al nostro team. Inviateci il vostro CV a careers@alcode.com",
    careersApplyNow: "Candidati Ora",
    careersSendCV: "Invia il Tuo CV",
    // Chat
    openChat: "Apri Chat",
    chatTitle: "Chatta con Noi",
    chatSubtitle: "Siamo qui per aiutarti",
    chatWelcomeMessage:
      "Inizia una conversazione con il nostro team. Siamo qui per aiutarti!",
    chatPlaceholder: "Scrivi il tuo messaggio...",
    chatCompanyResponse:
      "Grazie per il tuo messaggio! Il nostro team ti risponderà a breve. Come possiamo aiutarti oggi?",
    minimize: "Riduci",
    maximize: "Ingrandisci",
    closeChat: "Chiudi Chat",
  },
  al: {
    // Navigation
    home: "Home",
    services: "Shërbimet",
    company: "Kompania",
    caseStudies: "Raste Studimi",
    about: "Rreth Nesh",
    projects: "Projektet",
    contact: "Kontakt",
    // Hero
    welcomeTo: "Mirë se vini në",
    designDevelopment: "Dizajn & Zhvillim",
    createExtraordinary: "Ne krijojmë përvojë digitale të jashtëzakonshme",
    modernDesign: "me dizajn modern dhe kod të pastër",
    exploreProjects: "Eksploro Projektet",
    contactMe: "Më Kontakto",
    // About
    ourCoreValues: "Vlerat Tona Themelore",
    buildingFuture:
      "Ndërtimi i së ardhmes përmes inovacionit, bashkëpunimit dhe ekselencës",
    empowerment: "Fuqizim",
    empowermentDesc:
      "Çlironi potencialin tuaj të plotë dhe kapni mundësitë me partneritetet tona teknologjike. Ne fuqizojmë bizneset për të çliruar forcat e rritjes përmes bashkëpunimit strategjik.",
    synergy: "Sinergji",
    synergyDesc:
      "Përjetoni sinergji të përsosur përmes bashkëpunimit efektiv teknologjik. Avanconi me ne dhe arrini rritje dhe përparim të paparë.",
    advancement: "Përparim",
    advancementDesc:
      "Jemi të dedikuar për të nxitur progresin tuaj, duke arritur lartësi të reja së bashku përmes partneriteteve tona teknologjike më të fundit.",
    // Projects
    myProjects: "Projektet Tona",
    exploreWork: "Eksploro punën time më të fundit dhe zgjidhjet krijuese",
    viewProject: "Shiko Projektin",
    // Contact
    getInTouch: "Më Kontakto",
    haveProject:
      "Keni një projekt në mendje? Le të punojmë së bashku për ta realizuar",
    contactInformation: "Informacione Kontakti",
    feelFree:
      "Ndjehuni të lirë të na kontaktoni për bashkëpunime ose thjesht një përshëndetje miqësore. Gjithmonë jam i hapur për të diskutuar projekte dhe mundësi të reja.",
    email: "Email",
    phone: "Telefoni",
    location: "Vendndodhja",
    messageSent: "Mesazhi u Dërgua!",
    thankYou: "Faleminderit që na kontaktuat. Do t'ju përgjigjem së shpejti.",
    sendAnother: "Dërgo Një Tjetër",
    name: "Emri",
    yourName: "Emri Juaj",
    emailPlaceholder: "emaili.juaj@shembull.com",
    message: "Mesazhi",
    tellAboutProject: "Më tregoni për projektin tuaj...",
    sendMessage: "Dërgo Mesazhin",
    nameRequired: "Emri është i detyrueshëm",
    emailRequired: "Emaili është i detyrueshëm",
    emailInvalid: "Emaili nuk është i vlefshëm",
    messageRequired: "Mesazhi është i detyrueshëm",
    // Testimonials
    whatClientsSay: "Çfarë Thonë Klientët",
    dontJustTake:
      "Mos u mbështetni vetëm në fjalën tonë - dëgjoni nga klientët tanë të kënaqur",
    clients: "Klientët",
    // Company
    ourCompany: "Kompania Jonë",
    companyDescription:
      "Kompania jonë përfshin specialistë inxhinierë softueri, dizajnerë UI/UX, menaxherë projektesh, analistë biznesi, specialistë të sigurimit të cilësisë dhe më shumë.",
    companySize: "Madhësia e kompanisë",
    projectsReleased: "Projekte të lëshuara",
    founded: "E themeluar",
    innovationMeetsExpertise: "Ku Inovacioni Takohet me Ekspertizën",
    companyTagline:
      "Alcode kombinon teknologjinë e avancuar dhe njohuritë strategjike për të ofruar zgjidhje digitale me cilësi të lartë.",
    aboutUs: "Rreth nesh",
    aboutUsDesc:
      "Alcode shkëlqen në krijimin e përvojave digitale me ndikim që ngrejnë markat.",
    howWeWork: "Si punojmë",
    howWeWorkDesc:
      "Fitoni njohuri për procesin e rafinuar të zhvillimit të softuerit të Alcode, ku çdo hap i fluksit tonë të punës është krijuar për rezultate optimale.",
    careers: "Karriera",
    careersDesc:
      "Bashkohuni me Alcode dhe drejtoni të ardhmen e dizajnit, zhvillimit, marketingut dixhital dhe më shumë.",
    // Services
    ourServices: "Shërbimet Tona",
    dedicatedTeams: "Ekipa të dedikuara",
    dedicatedTeamsDesc:
      "Shtoni anëtarë të rinj të ekipit të dedikuar që janë gati të fillojnë projektin tuaj në çdo kohë.",
    mobileDevelopment: "Zhvillim mobil",
    mobileDevelopmentDesc:
      "Ne krijojmë aplikacione mobile që nxisin objektivat e biznesit dhe ndihmojnë në arritjen e suksesit.",
    technologyConsulting: "Konsultim teknologjik",
    technologyConsultingDesc:
      "Optimizojmë performancën e aplikacioneve, zgjasim jetëgjatësinë e softuerit me mbështetje të nivelit më të lartë.",
    uiUxDesign: "UI/UX Design",
    uiUxDesignDesc:
      "Ne krijojmë dizajne që tërheqin dhe angazhojnë përdoruesit tuaj, duke i kthyer në klientë besnikë.",
    softwareTesting: "Testim softueri",
    softwareTestingDesc:
      "Testim ekspert i softuerit për produkte të besueshme dhe të qëndrueshme. Zgjidhje të shpejta dhe me vlerë.",
    webDevelopment: "Zhvillim web",
    webDevelopmentDesc:
      "Jemi partneri juaj i besueshëm për zhvillimin e softuerit, duke ofruar zgjidhje teknologjike gjithëpërfshirëse.",
    dedicatedTeamsShort:
      "Shtoni anëtarë të ekipit të gatshëm për projektin tuaj në çdo kohë.",
    mobileDevelopmentShort:
      "Krijojmë aplikacione mobile për të arritur objektivat e biznesit dhe për të nxitur suksesin.",
    technologyConsultingShort:
      "Përmirësojmë performancën e aplikacioneve, zgjasim jetëgjatësinë e softuerit me mbështetje të nivelit më të lartë.",
    uiUxDesignShort:
      "Dizajnojmë për të angazhuar përdoruesit, duke promovuar besnikërinë.",
    softwareTestingShort:
      "Testim ekspert për softuer të besueshëm. Zgjidhje të shpejta dhe me vlerë.",
    webDevelopmentShort:
      "Partneri juaj i besueshëm teknologjik, që ofron zgjidhje gjithëpërfshirëse.",
    learnMore: "Mëso Më Shumë",
    // Service Pages - Technology Consulting
    technologyConsultingMainDesc:
      "Shërbimet tona të konsultimit teknologjik i ndihmojnë bizneset të navigojnë vendime teknologjike komplekse dhe të zbatojnë zgjidhje që nxisin rritjen. Ne ofrojmë udhëzim ekspert për strategji, arkitekturë, siguri dhe transformim dixhital për të siguruar që investimet tuaja teknologjike ofrojnë vlerë maksimale.",
    technologyConsultingServicesTitle: "Shërbimet Tona të Konsultimit",
    technologyConsultingFeature1Title: "Planifikim Strategjik",
    technologyConsultingFeature1Desc:
      "Zhvilloni strategji teknologjike gjithëpërfshirëse të rreshtuara me objektivat tuaja të biznesit dhe kërkesat e tregut.",
    technologyConsultingFeature2Title: "Transformim Dixhital",
    technologyConsultingFeature2Desc:
      "Udhëheqni organizatën tuaj përmes iniciativave të transformimit dixhital për të qëndruar konkurruese.",
    technologyConsultingFeature3Title: "Dizajn Arkitekture",
    technologyConsultingFeature3Desc:
      "Dizajnoni arkitektura sistemi të shkallëzueshme dhe të forta që rriten me nevojat tuaja të biznesit.",
    technologyConsultingFeature4Title: "Vlerësim Sigurie",
    technologyConsultingFeature4Desc:
      "Vlerësoni dhe përmirësoni pozicionin tuaj të sigurisë me vlerësime gjithëpërfshirëse të rrezikut.",
    technologyConsultingFeature5Title: "Përzgjedhje Teknologjike",
    technologyConsultingFeature5Desc:
      "Ndihmoni në zgjedhjen e teknologjive dhe mjeteve të duhura që përshtaten më mirë me kërkesat tuaja specifike.",
    technologyConsultingFeature6Title: "Udhëzim Ekspert",
    technologyConsultingFeature6Desc:
      "Shfrytëzoni ekspertizën tonë të thellë për të marrë vendime teknologjike të informuara dhe për të shmangur gabimet e kushtueshme.",
    technologyConsultingBenefitsTitle: "Përfitimet Kryesore",
    technologyConsultingBenefit1:
      "Redukton rreziqet teknologjike dhe merr vendime të informuara",
    technologyConsultingBenefit2:
      "Optimizon shpenzimet IT dhe maksimizon ROI-në në investimet teknologjike",
    technologyConsultingBenefit3:
      "Përshpejton inovacionin me udhëzim ekspert dhe praktika më të mira",
    technologyConsultingBenefit4:
      "Përmirëson efikasitetin operativ përmes optimizimit teknologjik",
    technologyConsultingBenefit5:
      "Qëndron përpara trendeve të industrisë dhe teknologjive në zhvillim",
    technologyConsultingBenefit6:
      "Ndërton një rrugë teknologjike të rreshtuar me objektivat e biznesit",
    // Service Pages - UI/UX Design
    uiUxDesignMainDesc:
      "Ne krijojmë dizajne të përqendruara në përdorues që kombinojnë estetikën me funksionalitetin. Procesi ynë i dizajnit UI/UX përqendrohet në kuptimin e përdoruesve tuaj, krijimin e ndërfaqeve intuitive dhe ofrimin e përvojave që jo vetëm duken të shkëlqyera por edhe nxisin rezultatet e biznesit.",
    uiUxDesignServicesTitle: "Shërbimet Tona të Dizajnit",
    uiUxDesignFeature1Title: "Dizajn i Ndërfaqes së Përdoruesit",
    uiUxDesignFeature1Desc:
      "Krijoni ndërfaqe vizualisht mahnitëse dhe intuitive që tërheqin përdoruesit dhe rrisin angazhimin.",
    uiUxDesignFeature2Title: "Hulumtim i Përvojës së Përdoruesit",
    uiUxDesignFeature2Desc:
      "Kryeni hulumtim të plotë të përdoruesit për të kuptuar nevojat, sjelljet dhe pikat problematike.",
    uiUxDesignFeature3Title: "Dizajn Responsive",
    uiUxDesignFeature3Desc:
      "Dizajnoni ndërfaqe që përshtaten pa probleme në të gjitha pajisjet dhe madhësitë e ekranit.",
    uiUxDesignFeature4Title: "Prototipim dhe Testim",
    uiUxDesignFeature4Desc:
      "Ndërtoni prototipe interaktive dhe kryeni teste përdorueshmërie për të përmirësuar dizajnet.",
    uiUxDesignFeature5Title: "Dizajn Vizual",
    uiUxDesignFeature5Desc:
      "Krijoni dizajne vizuale të bukura me vëmendje për tipografinë, ngjyrën dhe hapësirën.",
    uiUxDesignFeature6Title: "Sistemet e Dizajnit",
    uiUxDesignFeature6Desc:
      "Zhvilloni sisteme dizajni gjithëpërfshirëse për përvojë të qëndrueshme dhe të shkallëzueshme të përdoruesit.",
    uiUxDesignBenefitsTitle: "Përfitimet Kryesore",
    uiUxDesignBenefit1:
      "Rrit kënaqësinë dhe angazhimin e përdoruesit me dizajne intuitive",
    uiUxDesignBenefit2:
      "Redukton kostot e zhvillimit duke kapur problemet në fazën e dizajnit",
    uiUxDesignBenefit3:
      "Përmirëson normat e konvertimit përmes flukseve të optimizuara të përdoruesit",
    uiUxDesignBenefit4:
      "Përmirëson perceptimin e markës me ndërfaqe profesionale dhe të poliruara",
    uiUxDesignBenefit5:
      "Siguron aksesueshmëri dhe përdorueshmëri për të gjithë përdoruesit",
    uiUxDesignBenefit6:
      "Krijon përvojë të paharrueshme që nxisin besnikërinë e përdoruesit",
    // Service Pages - Software Testing
    softwareTestingMainDesc:
      "Shërbimet tona gjithëpërfshirëse të testimit të softuerit sigurojnë që aplikacionet tuaja të jenë të besueshme, të sigurta dhe të funksionojnë pa probleme. Ne përdorim praktikat më të mira të industrisë dhe metodologjitë e avancuara të testimit për të identifikuar problemet herët, reduktuar rreziqet dhe ofruar softuer me cilësi të lartë që plotëson kërkesat tuaja të biznesit.",
    softwareTestingServicesTitle: "Shërbimet Tona të Testimit",
    softwareTestingFeature1Title: "Testim Funksional",
    softwareTestingFeature1Desc:
      "Testim gjithëpërfshirës i të gjitha veçorive dhe funksionaliteteve për të siguruar që funksionojnë siç duhet.",
    softwareTestingFeature2Title: "Testim Sigurie",
    softwareTestingFeature2Desc:
      "Identifikoni vulnerabilitetet dhe rreziqet e sigurisë për të mbrojtur aplikacionin tuaj nga kërcënimet.",
    softwareTestingFeature3Title: "Testim i Performancës",
    softwareTestingFeature3Desc:
      "Vlerësoni performancën e sistemit nën kushte të ndryshme ngarkese për të siguruar shpejtësi optimale.",
    softwareTestingFeature4Title: "Testim i Automatizuar",
    softwareTestingFeature4Desc:
      "Implementoni suita testesh të automatizuara për cikle testimi më të shpejta dhe më të besueshme.",
    softwareTestingFeature5Title: "Testim API",
    softwareTestingFeature5Desc:
      "Testim i plotë i API-ve për të siguruar integrim të duhur dhe rrjedhje të dhënash midis sistemeve.",
    softwareTestingFeature6Title: "Raportim Testimi",
    softwareTestingFeature6Desc:
      "Raporte të detajuara testimi dhe analiza për të ndjekur metrikat e cilësisë dhe zonat e përmirësimit.",
    softwareTestingBenefitsTitle: "Përfitimet Kryesore",
    softwareTestingBenefit1:
      "Siguron cilësi dhe besueshmëri të softuerit para lëshimit",
    softwareTestingBenefit2:
      "Redukton bug-et e prodhimit dhe minimizon problemet pas vendosjes",
    softwareTestingBenefit3:
      "Përmirëson përvojën e përdoruesit duke kapur problemet e përdorueshmërisë herët",
    softwareTestingBenefit4:
      "Kursen kosto duke identifikuar defekte para se të arrijnë në prodhim",
    softwareTestingBenefit5:
      "Rrit besimin në lëshimet e softuerit me testim gjithëpërfshirës",
    softwareTestingBenefit6:
      "Plotëson kërkesat e përputhshmërisë dhe rregullatore përmes validimit të plotë",
    // Service Pages - Web Development
    webDevelopmentMainDesc:
      "Ne zhvillojmë aplikacione web të personalizuara që janë të shpejta, të sigurta dhe të shkallëzueshme. Nga faqet e thjeshta web deri te platformat komplekse web, ekipi ynë shfrytëzon teknologjitë më të fundit dhe praktikat më të mira për të ofruar zgjidhje që nxisin biznesin tuaj përpara dhe ofrojnë përvojë të jashtëzakonshme përdoruesi.",
    webDevelopmentServicesTitle: "Shërbimet Tona të Zhvillimit Web",
    webDevelopmentFeature1Title: "Zhvillim Frontend",
    webDevelopmentFeature1Desc:
      "Ndërtoni ndërfaqe përdoruesi moderne dhe responsive duke përdorur React, Vue, Angular dhe framework të tjerë të avancuar.",
    webDevelopmentFeature2Title: "Zhvillim Backend",
    webDevelopmentFeature2Desc:
      "Zhvilloni aplikacione të forta të anës së serverit me Node.js, Python, PHP dhe teknologji të tjera të fuqishme.",
    webDevelopmentFeature3Title: "Zgjidhje Full-Stack",
    webDevelopmentFeature3Desc:
      "Shërbime zhvillimi web end-to-end që mbulojnë si frontend ashtu edhe backend për zgjidhje të plota.",
    webDevelopmentFeature4Title: "Dizajn Responsive",
    webDevelopmentFeature4Desc:
      "Krijoni faqe web që përshtaten perfekt në të gjitha pajisjet, nga telefonat celularë deri te ekranet e mëdha desktop.",
    webDevelopmentFeature5Title: "Platforma E-Commerce",
    webDevelopmentFeature5Desc:
      "Ndërtoni dyqane online të sigurta dhe të shkallëzueshme me integrim pagese dhe menaxhim inventari.",
    webDevelopmentFeature6Title: "Zhvillim CMS",
    webDevelopmentFeature6Desc:
      "Sisteme të personalizuara menaxhimi përmbajtjeje që ju japin kontroll të plotë mbi përmbajtjen e faqes tuaj web.",
    webDevelopmentBenefitsTitle: "Përfitimet Kryesore",
    webDevelopmentBenefit1:
      "Krijon aplikacione web të shpejta, të shkallëzueshme dhe të mirëmbajtshme",
    webDevelopmentBenefit2:
      "Përmirëson përvojën e përdoruesit me ndërfaqe moderne dhe intuitive",
    webDevelopmentBenefit3:
      "Përmirëson SEO-në dhe dukshmërinë në motorët e kërkimit",
    webDevelopmentBenefit4:
      "Siguron përputhshmëri cross-browser dhe aksesueshmëri",
    webDevelopmentBenefit5:
      "Implementon praktikat më të mira të sigurisë për të mbrojtur të dhënat e përdoruesit",
    webDevelopmentBenefit6:
      "Optimizon performancën për kohë ngarkimi më të shpejta dhe konvertime më të mira",
    // Service Pages - Mobile Development
    mobileDevelopmentMainDesc:
      "Ne krijojmë aplikacione mobile që nxisin objektivat e biznesit dhe ndihmojnë në arritjen e suksesit. Ekipi ynë specializohet në zhvillimin e aplikacioneve mobile me cilësi të lartë për platformat iOS dhe Android, duke kombinuar teknologjinë më të fundit me dizajn të përqendruar në përdorues për të ofruar përvojë mobile të jashtëzakonshme.",
    mobileDevelopmentServicesTitle: "Shërbimet Tona të Zhvillimit Mobile",
    mobileDevelopmentFeature1Title: "Zgjidhje Cross-Platform",
    mobileDevelopmentFeature1Desc:
      "Ndërtoni aplikacione që funksionojnë pa probleme në të dy platformat iOS dhe Android me një kod bazë të vetëm.",
    mobileDevelopmentFeature2Title: "Zhvillim iOS Natyrësor",
    mobileDevelopmentFeature2Desc:
      "Shfrytëzoni Swift dhe Objective-C për të krijuar aplikacione iOS natyrore me performancë të lartë.",
    mobileDevelopmentFeature3Title: "Zhvillim Android Natyrësor",
    mobileDevelopmentFeature3Desc:
      "Zhvilloni aplikacione Android të forta duke përdorur Kotlin dhe Java me parime Material Design.",
    mobileDevelopmentFeature4Title: "Framework Moderne",
    mobileDevelopmentFeature4Desc:
      "Përdorni React Native, Flutter dhe framework të tjerë të avancuar për zhvillim më të shpejtë.",
    mobileDevelopmentFeature5Title: "Optimizim Performancë",
    mobileDevelopmentFeature5Desc:
      "Siguroni që aplikacionet tuaja të funksionojnë pa probleme me kod të optimizuar dhe menaxhim efikas të burimeve.",
    mobileDevelopmentFeature6Title: "Siguri dhe Testim",
    mobileDevelopmentFeature6Desc:
      "Implementoni masa sigurie të forta dhe testim gjithëpërfshirës për aplikacione të besueshme.",
    mobileDevelopmentBenefitsTitle: "Përfitimet Kryesore",
    mobileDevelopmentBenefit1:
      "Rrit angazhimin dhe mbajtjen e përdoruesit përmes përvojave mobile intuitive",
    mobileDevelopmentBenefit2:
      "Akses në veçori specifike mobile si GPS, kamerë dhe njoftime push",
    mobileDevelopmentBenefit3:
      "Kohë më të shpejtë në treg me metodologji zhvillimi agile",
    mobileDevelopmentBenefit4:
      "Arkitekturë e shkallëzueshme për të mbështetur baza përdoruesish në rritje",
    mobileDevelopmentBenefit5:
      "Përditësime dhe mirëmbajtje të rregullta për të mbajtur aplikacionet aktuale",
    mobileDevelopmentBenefit6:
      "Udhëzim ekspert për proceset e paraqitjes në App Store dhe Google Play",
    // Service Pages - Dedicated Teams
    dedicatedTeamsMainDesc:
      "Shërbimi ynë i ekipeve të dedikuara ju ofron profesionistë të kualifikuar që bëhen pjesë integrale e projektit tuaj. Këta anëtarë të ekipit janë plotësisht të dedikuar për suksesin tuaj, duke punuar ekskluzivisht në iniciativat tuaja duke u integruar pa probleme me proceset dhe kulturën tuaja ekzistuese.",
    dedicatedTeamsServicesTitle: "Pse të Zgjidhni Ekipa të Dedikuara?",
    dedicatedTeamsFeature1Title: "Anëtarë të Ekipit Ekspert",
    dedicatedTeamsFeature1Desc:
      "Profesionistë të zgjedhur me dorë me ekspertizë të provuar në stack-in tuaj teknologjik dhe domenin e industrisë.",
    dedicatedTeamsFeature2Title: "Shkallëzim Fleksibël",
    dedicatedTeamsFeature2Desc:
      "Shkallëzoni ekipin tuaj lart ose poshtë bazuar në kërkesat e projektit dhe nevojat e biznesit në çdo kohë.",
    dedicatedTeamsFeature3Title: "Kohë Më e Shpejtë në Treg",
    dedicatedTeamsFeature3Desc:
      "Përshpejtoni ciklet e zhvillimit me burime të dedikuara të fokusuara ekskluzivisht në projektin tuaj.",
    dedicatedTeamsFeature4Title: "Integrim i Paqartë",
    dedicatedTeamsFeature4Desc:
      "Anëtarët tanë të ekipit integrohen pa probleme me flukset tuaja ekzistuese të punës dhe mjetet e komunikimit.",
    dedicatedTeamsFeature5Title: "Partneritet Afatgjatë",
    dedicatedTeamsFeature5Desc:
      "Ndërtoni marrëdhënie të qëndrueshme me anëtarë të ekipit që kuptojnë thellë biznesin tuaj.",
    dedicatedTeamsFeature6Title: "Onboarding i Shpejtë",
    dedicatedTeamsFeature6Desc:
      "Filloni shpejt me anëtarë të ekipit që janë gati të kontribuojnë që nga dita e parë.",
    dedicatedTeamsBenefitsTitle: "Përfitimet Kryesore",
    dedicatedTeamsBenefit1:
      "Zgjidhje me kosto efektive krahasuar me punësimin e punonjësve me kohë të plotë",
    dedicatedTeamsBenefit2:
      "Akses në një pool global talentesh profesionistësh të kualifikuar",
    dedicatedTeamsBenefit3:
      "Kosto të reduktuara overhead dhe barrë administrative",
    dedicatedTeamsBenefit4:
      "Modele angazhimi fleksibël për të përshtatur nevojat tuaja",
    dedicatedTeamsBenefit5: "Mbështetje 24/7 dhe mbulim i vazhdueshëm projekti",
    dedicatedTeamsBenefit6: "Ekspertizë në domen nëpër industri të ndryshme",
    // Footer
    contacts: "Kontaktet",
    telefoni: "Telefoni",
    adresa: "Adresa",
    socials: "Rrjetet Sociale",
    madeWithCare: "Bërë me kujdes të madh",
    // About Us Page
    aboutUsMainTitle: "Rreth Nesh",
    aboutUsMainDesc:
      "Alcode shkëlqen në krijimin e përvojave digitale me ndikim që ngrejnë markat.",
    aboutUsStoryTitle: "Historia Jonë",
    aboutUsStoryDesc:
      "Themeluar me një vizion për të transformuar bizneset përmes teknologjisë, Alcode është rritur në një partner të besueshëm për kompanitë që kërkojnë zgjidhje digitale inovative. Ne kombinojmë ekspertizën teknike me mendimin krijues për të ofruar rezultate të jashtëzakonshme.",
    aboutUsMissionTitle: "Misioni Ynë",
    aboutUsMissionDesc:
      "Për të fuqizuar bizneset me zgjidhje teknologjike të avancuara që nxisin rritjen, përmirësojnë përvojat e përdoruesit dhe krijojnë vlerë të qëndrueshme në një peizazh dixhital në zhvillim të vazhdueshëm.",
    aboutUsValuesTitle: "Vlerat Tona",
    aboutUsValue1Title: "Inovacion",
    aboutUsValue1Desc:
      "Qëndrojmë përpara kurbës duke përfshirë teknologjitë dhe metodologjitë më të fundit.",
    aboutUsValue2Title: "Ekselencë",
    aboutUsValue2Desc:
      "Jemi të dedikuar për të ofruar zgjidhjet me cilësinë më të lartë në gjithçka që bëjmë.",
    aboutUsValue3Title: "Bashkëpunim",
    aboutUsValue3Desc:
      "Punojmë ngushtë me klientët tanë për të kuptuar nevojat dhe objektivat e tyre unike.",
    aboutUsValue4Title: "Integritet",
    aboutUsValue4Desc:
      "Ndërtojmë besim përmes transparencës, ndershmërisë dhe praktikave të etikës biznesore.",
    aboutUsTeamTitle: "Ekipi Ynë",
    aboutUsTeamDesc:
      "Ekipi ynë i larmishëm i specialistëve përfshin inxhinierë softueri, dizajnerë UI/UX, menaxherë projektesh, analistë biznesi dhe ekspertë të sigurimit të cilësisë. Së bashku, sjellim vite përvoje të kombinuara në çdo projekt.",
    // Team Roles
    teamRoleSoftwareEngineer: "Inxhinier Softueri",
    teamRoleFrontendDeveloper: "Zhvillues Frontend",
    teamRoleBackendDeveloper: "Zhvillues Backend",
    teamRoleAndroidDeveloper: "Zhvillues Android",
    teamRoleIOSDeveloper: "Zhvillues iOS",
    teamRoleSEOSpecialist: "Specialist SEO",
    teamRoleEmailMarketing: "Email & Marketing",
    teamRoleAdministrator: "Administrator",
    teamRoleSalesManager: "Menaxher Shitjesh",
    teamRoleCoordinator: "Koordinator",
    teamRoleSeniorFullStack: "Senior Full Stack",
    teamRoleFullStackDeveloper: "Zhvillues Full-Stack",
    // How We Work Page
    howWeWorkMainTitle: "Si Punojmë",
    howWeWorkMainDesc:
      "Fitoni njohuri për procesin e rafinuar të zhvillimit të softuerit të Alcode, ku çdo hap i fluksit tonë të punës është krijuar për rezultate optimale.",
    howWeWorkProcessTitle: "Procesi Ynë",
    howWeWorkStep1Title: "Discovery",
    howWeWorkStep1Desc:
      "Fillojmë duke kuptuar objektivat tuaja të biznesit, audiencën e synuar dhe kërkesat e projektit përmes konsultimit gjithëpërfshirës.",
    howWeWorkStep2Title: "Planifikim",
    howWeWorkStep2Desc:
      "Ekipi ynë krijon një plan të detajuar projekti me afate, milestone dhe alokim burimesh për të siguruar ekzekutim të qetë.",
    howWeWorkStep3Title: "Dizajn",
    howWeWorkStep3Desc:
      "Dizajnojmë ndërfaqe intuitive dhe tërheqëse vizualisht që janë në linjë me markën tuaj dhe pritjet e përdoruesit.",
    howWeWorkStep4Title: "Zhvillim",
    howWeWorkStep4Desc:
      "Zhvilluesit tanë shkruajnë kod të pastër dhe të mirëmbajtshëm duke ndjekur praktikat më të mira të industrisë dhe specifikat tuaja.",
    howWeWorkStep5Title: "Testim",
    howWeWorkStep5Desc:
      "Testimi rigoroz siguron që produkti juaj të jetë i besueshëm, i sigurt dhe të funksionojë pa probleme në të gjitha platformat.",
    howWeWorkStep6Title: "Vendosje dhe Mbështetje",
    howWeWorkStep6Desc:
      "Vendosim zgjidhjen tuaj dhe ofrojmë mbështetje të vazhdueshme për të siguruar sukses të vazhdueshëm dhe performancë optimale.",
    // Project Page Process Section
    projectProcessTitle: "Procesi Jonë i Zhvillimit",
    projectStepInProgress: "(Në Progres)",
    howWeWorkMethodologyTitle: "Metodologjia Jonë",
    howWeWorkMethodologyDesc:
      "Ne ndjekim praktikat e zhvillimit agile që lejojnë fleksibilitet, përsëritje të shpejtë dhe përmirësim të vazhdueshëm. Qasja jonë siguron transparencë, komunikim të rregullt dhe aftësinë për të adaptuar me kërkesat që ndryshojnë.",
    // Careers Page
    careersMainTitle: "Karriera",
    careersMainDesc:
      "Bashkohuni me Alcode dhe drejtoni të ardhmen e dizajnit, zhvillimit, marketingut dixhital dhe më shumë.",
    careersWhyJoinTitle: "Pse të Bashkoheni me Alcode?",
    careersWhyJoinDesc:
      "Në Alcode, ne besojmë në krijimin e një mjedisi ku individët e talentuar mund të rriten, të inovojnë dhe të kenë një ndikim të vërtetë. Ne ofrojmë përfitime konkurruese, mundësi zhvillimi profesional dhe një kulturë bashkëpunimi.",
    careersBenefitsTitle: "Përfitimet dhe Përparësitë",
    careersBenefit1: "Rroga konkurruese dhe bonuse performancë",
    careersBenefit2: "Orarë pune fleksibël dhe mundësi pune remote",
    careersBenefit3: "Zhvillim profesional dhe mundësi trajnimi",
    careersBenefit4: "Sigurim shëndetësor dhe programe mirëqenie",
    careersBenefit5: "Mjedis pune bashkëpunimi dhe përfshirës",
    careersBenefit6:
      "Mundësi për të punuar në projekte emocionuese dhe sfiduese",
    careersOpenPositionsTitle: "Pozicione të Hapura",
    careersNoPositions:
      "Ne kërkojmë gjithmonë individë të talentuar për t'u bashkuar me ekipin tonë. Ju lutemi na dërgoni CV-në tuaj në careers@alcode.com",
    careersApplyNow: "Aplikoni Tani",
    careersSendCV: "Dërgoni CV-në Tuaj",
    // Chat
    openChat: "Hap Chat",
    chatTitle: "Bisedo me Ne",
    chatSubtitle: "Jemi këtu për të ndihmuar",
    chatWelcomeMessage:
      "Filloni një bisedë me ekipin tonë. Jemi këtu për të ndihmuar!",
    chatPlaceholder: "Shkruani mesazhin tuaj...",
    chatCompanyResponse:
      "Faleminderit për mesazhin tuaj! Ekipi ynë do t'ju përgjigjet së shpejti. Si mund t'ju ndihmojmë sot?",
    minimize: "Minimizo",
    maximize: "Maksimizo",
    closeChat: "Mbyll Chat",
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    // Initialize language from localStorage on mount
    if (typeof window !== "undefined") {
      try {
        const savedLanguage = localStorage.getItem("language") as Language;
        if (
          savedLanguage === "en" ||
          savedLanguage === "it" ||
          savedLanguage === "al"
        ) {
          setLanguageState(savedLanguage);
        }
      } catch (e) {
        // If there's an error with localStorage, use default
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang);
    }
  };

  const t = (key: string): string => {
    // Prima prova con la lingua corrente
    if (translations[language] && translations[language][key]) {
      return translations[language][key];
    }
    // Se non trovato, prova con inglese come fallback
    if (translations["en"] && translations["en"][key]) {
      return translations["en"][key];
    }
    // Se ancora non trovato, ritorna la chiave stessa
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
