// ============================================================
// ✏️  EDIT ALL YOUR PORTFOLIO CONTENT HERE
// This is the only file you need to edit to update text,
// projects, testimonials, experience, skills, and links.
// ============================================================

const DATA = {
  name: "Bhavesh Jariwala",
  role: "Senior UI/UX & Product Designer",
  tagline: "Turning complex business problems into simple, actionable digital experiences.\n\nI blend creativity, strategy, and product thinking to transform complexity into clarity—helping teams ship faster while delivering measurable product outcomes.",
  about: `Design started as curiosity drawing, making, experimenting, long before I knew it could be a career. Over 13+ years, I evolved from web and branding into full SaaS product design, building structured systems that translate ideas into usable, buildable digital products.`,
  profilePhoto: null, // ✏️ Set to your photo URL. Leave null to show BJ initials (as in your design)
  introVideoId: "k9L8DLejmI4",
  whatsapp: "https://wa.me/919725035222",
  stats: [["13+", "Years Experience"], ["70+", "Projects Delivered"], ["7+", "Case Studies"], ["5★", "LinkedIn Reviews"]],

  experience: [
    { role: "Senior UI/UX Designer", company: "IQbusiness", type: "Full-time", period: "2021 — Present", duration: "3+ yrs", desc: "Led end-to-end UX/UI for enterprise B2B SaaS platforms. Built design systems, ran discovery workshops, and collaborated directly with dev teams for smooth handoff.", skills: ["Design Systems", "UX Research", "Figma", "B2B SaaS"] },
    { role: "UI/UX Designer", company: "Freelance / Consulting", type: "Contract", period: "2018 — 2021", duration: "3 yrs", desc: "Delivered UI/UX design for clients across automotive, real estate, and retail — including Kia South Africa, SKAFF, and Coricraft.", skills: ["Web Design", "UI/UX", "Branding", "Frontend"] },
    { role: "Graphic & UI Designer", company: "Various Agencies", type: "Full-time", period: "2014 — 2018", duration: "4 yrs", desc: "Print, branding, and early digital UI work across multiple design studios. Built strong foundations in visual design, typography, and communication.", skills: ["Branding", "Print", "Typography", "Adobe CC"] },
    { role: "Junior Designer", company: "Creative Studio", type: "Full-time", period: "2011 — 2014", duration: "3 yrs", desc: "Started as a junior — designing logos, marketing collateral, and early web layouts. The years that built the eye.", skills: ["Logo Design", "Print", "Illustrator", "Photoshop"] },
  ],

  standFor: [
    { icon: "◈", tag: "FOUNDATION", title: "Structure as Strategy", desc: "Information hierarchy before aesthetics. I begin with flows, hierarchy, and reusable components before visual refinement." },
    { icon: "◉", tag: "PRINCIPLE", title: "Clarity over Decoration", desc: "Every design decision reduces cognitive load. Poor structure creates friction — for users and teams." },
    { icon: "⚙", tag: "SYSTEM", title: "Scalable Systems", desc: "Systems over isolated deliverables. I design components and patterns that grow with the product." },
    { icon: "<>", tag: "AWARENESS", title: "Implementation Awareness", desc: "With frontend experience, I design with build-readiness in mind — performance, consistency, and dev handoff." },
  ],

  drivesMe: {
    tabs: [
      {
        label: "Design Philosophy",
        title: "Structure is strategy",
        bullets: ["Information hierarchy before aesthetics", "Systems over isolated deliverables", "Performance and accessibility as core decisions"],
        body: "I approach design as structured problem-solving. Poor structure creates friction — for users and teams. That's why I begin with flows, hierarchy, and reusable components before visual refinement. Every decision is made to reduce cognitive load, support scalability, and ensure the interface can be built efficiently.",
      },
      {
        label: "Experiments",
        title: "Always prototyping",
        bullets: ["Testing interaction patterns early", "Pushing creative boundaries in side projects", "Using AI tools to explore design possibilities"],
        body: "I believe the best ideas come from hands-on exploration. Whether it's a micro-interaction prototype or a full concept side project, I'm constantly testing hypotheses in Figma, Framer, and code. Experimentation keeps design thinking sharp.",
      },
      {
        label: "Learning",
        title: "Intentional growth",
        bullets: ["Design systems architecture & token design", "Frontend-aware design and React component thinking", "Human psychology and cognitive load theory"],
        body: "Learning isn't optional — it's the job. I invest deliberately in expanding my understanding of design systems, developer collaboration, and user psychology. I read, build, and teach to consolidate what I learn.",
      },
    ],
  },

  projects: [
    {
      id: 1, slug: "healthcare-ai", title: "AI-Powered Healthcare Operations Platform", subtitle: "Streamlining clinical operations with AI-driven design", category: "Healthcare SaaS", type: "SaaS Platform", description: "Streamlined healthcare operations through AI-driven data analysis and real-time dashboards — reducing fragmentation across clinical teams.", fullDescription: `The healthcare operations platform was burdened with fragmented workflows, outdated interfaces, and poor data visibility. Clinical staff struggled to navigate between multiple tools, leading to inefficiencies and decision fatigue.

My role was to lead end-to-end UX/UI design — from user research and journey mapping through to high-fidelity prototypes and developer handoff.

Key challenges included designing for high-information-density dashboards, building a scalable component library, and ensuring WCAG AA accessibility compliance throughout.`, color: "#FF3CAC", year: "2024", timeline: "6 Months", role: "UX/UI Designer (End-to-End)", metrics: ["↑18% Conversion", "↓30% Time-to-Task", "↑25% Efficiency"], tools: ["Figma", "FigJam", "Tailwind", "AI Research"], image: "https://framerusercontent.com/images/YuvacgRZEj0hIz17GVbnZISn8bk.jpg?width=1200", images: ["https://framerusercontent.com/images/YuvacgRZEj0hIz17GVbnZISn8bk.jpg?width=1200", "https://framerusercontent.com/images/rdreX49Y0NzgATkMC4ArgQIM8.png?width=800"], liveUrl: null, icon: "🏥"
    },
    { id: 2, slug: "kia-south-africa", title: "Kia South Africa — Website", subtitle: "Web & UI Design for Kia's South African digital presence", category: "Automotive", type: "Web & UI Design", description: "Homepage design and build for Kia South Africa — structured navigation through a rich vehicle catalogue with performance-focused UI.", fullDescription: `Kia South Africa required a complete homepage redesign to align with their global brand refresh while catering to the local market.\n\nI led the UI design and frontend build — translating the Kia global design language into a locally relevant, high-performance web experience.\n\nKey deliverables included a new navigation architecture, vehicle comparison UI, dealer locator flow, and a responsive design system.`, color: "#00D4FF", year: "2024", timeline: "7 Months", role: "Web & UI Design, Frontend", metrics: ["↑20% Nav Efficiency", "↓25% Discovery Time", "↓15% Bounce Rate"], tools: ["Figma", "Adobe XD", "HTML/CSS", "Next.js"], image: "https://framerusercontent.com/images/ggK3cizxhy4QQQUHKqyuynnZFI.jpg?width=1200", images: ["https://framerusercontent.com/images/ggK3cizxhy4QQQUHKqyuynnZFI.jpg?width=1200", "https://framerusercontent.com/images/0FHmns5raty4Keb9144qJ1fkVg.jpg?width=800"], liveUrl: "https://www.kia.co.za/", icon: "🚗" },
    { id: 3, slug: "skaff-real-estate", title: "SKAFF Real Estate — Platform Redesign", subtitle: "Improving lead capture and property discovery", category: "Real Estate", type: "Web Property Platform", description: "Redesigned property search and listing experience, improving filtering clarity, listing structure, and lead capture efficiency.", fullDescription: `SKAFF Real Estate's existing platform suffered from high form abandonment, confusing search filters, and poor mobile performance.\n\nI conducted user interviews with buyers and agents, mapped the discovery-to-inquiry journey, and rebuilt the information architecture from the ground up.\n\nThe redesigned platform introduced a smart filter system, improved listing cards, a simplified inquiry form, and a mobile-first layout.`, color: "#FFEA00", year: "2023", timeline: "5 Months", role: "UX/UI Designer (End-to-End)", metrics: ["↑22% Lead Inquiries", "↓28% Form Drop-off", "↓30% Discovery Time"], tools: ["Figma", "Photoshop", "CMS", "HTML/CSS"], image: "https://framerusercontent.com/images/vghYkKcWZzxXqTa8qv9eifmsDCo.jpg?width=1200", images: ["https://framerusercontent.com/images/vghYkKcWZzxXqTa8qv9eifmsDCo.jpg?width=1200", "https://framerusercontent.com/images/nk6QmpkCv0ONjXmGL3RxvLM9lo.jpg?width=800"], liveUrl: null, icon: "🏠" },
    { id: 4, slug: "coricraft", title: "Coricraft — E-Commerce UX", subtitle: "Furniture retail UX for South Africa's leading brand", category: "E-Commerce", type: "UX/UI Redesign", description: "End-to-end UX redesign improving product discovery, configurator UX, and checkout conversion.", fullDescription: `Coricraft needed a UX overhaul to improve online sales performance. Users were abandoning the configurator and checkout at high rates.\n\nI led discovery workshops, heuristic evaluation, and competitive benchmarking before moving into IA redesign and high-fidelity UI delivery.\n\nKey improvements: simplified product configurator, streamlined checkout, revised navigation system.`, color: "#7B2FFF", year: "2023", timeline: "4 Months", role: "UX/UI Designer", metrics: ["↑19% Checkout Rate", "↓35% Abandonment", "↑24% Product Views"], tools: ["Figma", "Miro", "GA4", "Hotjar"], image: "https://framerusercontent.com/images/kSBqNFitJQuBzXuk7tl1FqlAHhs.png?width=1200", images: ["https://framerusercontent.com/images/kSBqNFitJQuBzXuk7tl1FqlAHhs.png?width=1200", "https://framerusercontent.com/images/Jt7zqgTjQMYT15YvEkLGKiF9Cw.png?width=800"], liveUrl: "https://coricraft.co.za/", icon: "🛋️" },
    { id: 5, slug: "enterprise-dashboard", title: "Enterprise Dashboard System", subtitle: "Scalable design system for a B2B SaaS platform", category: "UI/UX Design", type: "Design System", description: "Multi-dashboard design system — reusable components, token-based design, performance-conscious layouts.", fullDescription: `The enterprise client had accumulated design debt across 4 product teams with inconsistent UI patterns.\n\nI audited all existing screens, identified component patterns, and built a structured Figma component library with design tokens and documentation.\n\nThe system shipped with 100+ components and dramatically reduced design-to-development time.`, color: "#FF6B35", year: "2022", timeline: "8 Months", role: "Lead Product Designer", metrics: ["↓40% Dev Handoff Time", "100+ Components", "4 Teams Aligned"], tools: ["Figma", "Storybook", "Tailwind", "React"], image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80", images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80", "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"], liveUrl: null, icon: "📊" },
    { id: 6, slug: "saas-onboarding", title: "B2B SaaS Onboarding Redesign", subtitle: "Reducing time-to-value for new users", category: "Product Design", type: "UX Redesign", description: "End-to-end redesign reducing time-to-value via progressive disclosure and contextual guidance.", fullDescription: `New user drop-off during onboarding was the platform's biggest retention problem.\n\nI led a full onboarding audit using session recordings and exit surveys, then redesigned the flow using progressive disclosure.\n\nThe redesigned flow introduced a contextual checklist, milestone celebrations, and a smart empty-state strategy.`, color: "#00FF9D", year: "2022", timeline: "3 Months", role: "UX/UI Designer", metrics: ["↑35% Activation Rate", "↓50% Support Tickets", "↓60% Drop-off"], tools: ["Figma", "FullStory", "GA4", "MS Clarity"], image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80", images: ["https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80", "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80"], liveUrl: null, icon: "🚀" },
    { id: 7, slug: "zodiac", title: "Zodiac", subtitle: "Design project from Behance", category: "Branding", type: "Visual Design", description: "A creative design project showcasing visual identity and brand expression.", fullDescription: `Zodiac is a design project exploring visual identity and brand expression through creative design principles.\n\nThis project demonstrates my ability to create compelling visual narratives and cohesive brand systems.\n\nThe work focuses on establishing a strong visual language while maintaining flexibility across different applications.`, color: "#FF3CAC", year: "2025", timeline: "TBD", role: "Designer", metrics: ["Coming Soon", "TBD", "TBD"], tools: ["Figma", "Adobe CC"], image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&q=80", images: ["https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&q=80", "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=800&q=80"], liveUrl: "https://www.behance.net/gallery/229156053/Zodiac", icon: "♈" },
  ],

  skills: [
    { name: "Brand Identity", icon: "✦", color: "#FF3CAC", desc: "Creating memorable brand systems that communicate values clearly." },
    { name: "UI/UX Design", icon: "◈", color: "#00D4FF", desc: "Crafting intuitive interfaces that balance aesthetics with usability." },
    { name: "Design Systems", icon: "⚙", color: "#FFEA00", desc: "Building scalable component libraries for consistent product experiences." },
    { name: "Figma", icon: "◉", color: "#7B2FFF", desc: "Prototyping and designing with industry-standard tools." },
    { name: "Information Architecture", icon: "⊞", color: "#FF6B35", desc: "Structuring content and flows for optimal user understanding." },
    { name: "Motion Design", icon: "▶", color: "#00FF9D", desc: "Adding life to interfaces through thoughtful animations." },
    { name: "Adobe CC", icon: "Ψ", color: "#FF3CAC", desc: "Leveraging creative suite for high-fidelity visual design." },
    { name: "Frontend (HTML/CSS)", icon: "</>", color: "#00D4FF", desc: "Building design-aware frontend implementations." },
    { name: "Product Strategy", icon: "◎", color: "#FFEA00", desc: "Aligning design decisions with business goals and user needs." },
    { name: "User Research", icon: "⊙", color: "#7B2FFF", desc: "Understanding user needs through qualitative and quantitative methods." },
    { name: "Framer / Webflow", icon: "⬡", color: "#FF6B35", desc: "Prototyping interactive experiences without code." },
    { name: "Dev Handoff", icon: "⇄", color: "#00FF9D", desc: "Ensuring smooth collaboration between design and development." },
  ],

  brands: ["IQbusiness", "Kia South Africa", "ADAS-ONE", "SKAFF", "Coricraft", "MediCare AI", "Arc & Bloom", "Enterprise SaaS", "Nestlé", "Cyrela", "Living", "TrueNest"],

  testimonials: [
    { name: "Dharmesh Makwana", role: "Chief Executive Officer | Career Mentor", initial: "D", color: "#FF3CAC", quote: "Bhavesh has been an integral part of several key projects over the past 9 years. His detail-oriented UI/UX approach, adaptability, and disciplined execution consistently resulted in high-quality outcomes.", metric: "9+ years · Multiple production-grade platforms", linkedin: "https://www.linkedin.com/in/makwana-dharmesh/", image: "/images/dharmesh.jpg" },
    { name: "Morgan Goddard", role: "Partner at IQbusiness", initial: "M", color: "#00D4FF", quote: "Bhavesh combines strong front-end technical skill with thoughtful UI/UX design. He asks the right questions, offers practical suggestions, and consistently improves outcomes.", metric: "Proactive input · Reliable on-time delivery", linkedin: "https://www.linkedin.com/in/morgan-goddard-aa2b3625/", image: "/images/morgan.jpg" },
    { name: "Wendy Pederson", role: "Operations Executive | PM", initial: "W", color: "#FFEA00", quote: "Bhavesh strengthens projects with his problem-solving mindset and willingness to step in where needed. He enhances delivery quality and supports teams effectively, even under pressure.", metric: "Cross-functional delivery · Strong under tight timelines", linkedin: "https://www.linkedin.com/in/wendy-pederson-40b9087a/", image: "/images/wendy.jpg" },
    { name: "Matthew Gibbs", role: "Software Development PM | IQ Business", initial: "M", color: "#7B2FFF", quote: "Bhavesh consistently shows up prepared for client and team meetings. His knowledge of the design process and strong communication skills make collaboration smooth and productive.", metric: "Stakeholder alignment · Reduced handoff friction", linkedin: "https://www.linkedin.com/in/matt-gibbs-za/", image: "/images/matthew.jpg" },
    { name: "Christina Pretorius", role: "Lead Project & Delivery Manager", initial: "C", color: "#FF6B35", quote: "Bhavesh delivered high-standard work under tight timelines on a complex build. His attention to detail and steady communication made him a key contributor to the project's success.", metric: "Quality under pressure · Complex platform success", linkedin: "https://www.linkedin.com/in/christina-pretorius/", image: "/images/christina.jpg" },
  ],

  beyond: [
    { icon: "🎨", title: "Visual Art & Illustration", desc: "Sketching, generative art, and exploring visual language beyond screens.", img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&q=80" },
    { icon: "🎵", title: "Music & Sound", desc: "Curating playlists, discovering ambient music, and finding how rhythm connects to design thinking.", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&q=80", music: true },
    { icon: "🧭", title: "Travelling & Culture", desc: "Finding design inspiration in architecture, street culture, and different ways people interact with spaces.", img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&q=80" },
    { icon: "☕", title: "Coffee & Conversations", desc: "Passionate about connecting with designers, founders, and builders over long conversations.", img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80" },
  ],

  gallery: {
    tabs: ["All", "Illustration", "Branding", "Logos", "Social Posts", "UI Concepts", "Graphics", "Infographics", "Videos"],
    items: [
      {
        id: 1,
        title: "Abstract Flow",
        tab: "Illustration",
        color: "#FF3CAC",
        img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&q=80",
        shortDescription: "A series of abstract geometric compositions exploring flow and movement through color gradients."
      },
      {
        id: 2,
        title: "Brand Identity System",
        tab: "Branding",
        color: "#00D4FF",
        img: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&q=80",
        // Full case study data for Branding
        caseStudy: {
          heroBanner: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&q=80",
          fullDescription: "Complete brand identity system including logo, color palette, typography, and brand guidelines for a tech startup. The project focused on creating a modern, approachable identity that communicates innovation and trust.",
          metrics: [
            { value: "3 months", label: "Timeline" },
            { value: "12 deliverables", label: "Deliverables" },
            { value: "4 platforms", label: "Platforms" }
          ],
          tools: ["Figma", "Illustrator", "Photoshop"],
          images: [
            "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80",
            "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=800&q=80",
            "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800&q=80"
          ]
        }
      },
      {
        id: 3,
        title: "Social Campaign — Product",
        tab: "Social Posts",
        color: "#FFEA00",
        img: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&q=80",
        caseStudy: {
          heroBanner: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&q=80",
          fullDescription: "Social media campaign design for product launch, including Instagram posts, stories, and carousel formats. The campaign achieved 45% higher engagement than previous product launches.",
          metrics: [
            { value: "45% engagement", label: "Engagement" },
            { value: "12 posts", label: "Posts" },
            { value: "3 platforms", label: "Platforms" }
          ],
          tools: ["Figma", "Canva", "Instagram"],
          images: [
            "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80",
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80"
          ]
        }
      },
      {
        id: 4,
        title: "Dashboard UI Concept",
        tab: "UI Concepts",
        color: "#7B2FFF",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
        caseStudy: {
          heroBanner: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
          fullDescription: "Dashboard UI concept for a SaaS analytics platform. The design focuses on data visualization clarity, user workflow efficiency, and dark mode support for extended usage sessions.",
          metrics: [
            { value: "15 screens", label: "Screens" },
            { value: "3 user flows", label: "User Flows" },
            { value: "2 weeks", label: "Timeline" }
          ],
          tools: ["Figma", "Principle", "FigJam"],
          images: [
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
            "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80"
          ]
        }
      },
      {
        id: 5,
        title: "Geometric Poster",
        tab: "Graphics",
        color: "#FF6B35",
        img: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=600&q=80",
        shortDescription: "Chose a limited color palette of orange and black to create visual tension. Used geometric shapes with 60-degree angles to guide the eye from center outward, creating dynamic movement despite static forms. The decision to use negative space was intentional to let the composition breathe and establish a modern, minimalist aesthetic."
      },
      {
        id: 6,
        title: "Character Illustration",
        tab: "Illustration",
        color: "#00FF9D",
        img: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=600&q=80",
        shortDescription: "Decided on a line-based approach with consistent stroke weight to maintain visual harmony across the character series. The choice of exaggerated proportions—larger heads and smaller bodies—was deliberate to convey personality and approachability. Color choices were limited to 3-4 hues per character to ensure the style remains cohesive while allowing individual character distinctiveness."
      },
      {
        id: 7,
        title: "Logo Collection",
        tab: "Branding",
        color: "#FF3CAC",
        img: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=600&q=80",
        caseStudy: {
          heroBanner: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=1200&q=80",
          fullDescription: "Logo design collection for multiple clients across various industries. Each logo follows a unique design process from sketch to final vector.",
          metrics: [
            { value: "8 logos", label: "Logos" },
            { value: "4 industries", label: "Industries" },
            { value: "6 weeks", label: "Timeline" }
          ],
          tools: ["Illustrator", "Figma", "Pen & Paper"],
          images: [
            "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=800&q=80",
            "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80"
          ]
        }
      },
      {
        id: 15,
        title: "Tech Startup Logo",
        tab: "Logos",
        color: "#00FF9D",
        img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=80",
        shortDescription: "Modern logo design for a tech startup featuring clean geometric shapes and a vibrant color palette. The design emphasizes scalability across digital and print applications while maintaining brand recognition at small sizes."
      },
      {
        id: 16,
        title: "Data Visualization Set",
        tab: "Infographics",
        color: "#FF6B35",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
        shortDescription: "Comprehensive data visualization series featuring charts, graphs, and information graphics designed to present complex data in an accessible and visually engaging format."
      },
      {
        id: 8,
        title: "Event Poster Series",
        tab: "Social Posts",
        color: "#00D4FF",
        img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80",
        caseStudy: {
          heroBanner: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1200&q=80",
          fullDescription: "Event poster series for a tech conference. The design uses bold typography and vibrant colors to create excitement and clear information hierarchy.",
          metrics: [
            { value: "5 posters", label: "Posters" },
            { value: "3 sizes", label: "Sizes" },
            { value: "2 weeks", label: "Timeline" }
          ],
          tools: ["Illustrator", "InDesign", "Photoshop"],
          images: [
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80",
            "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80"
          ]
        }
      },
      {
        id: 9,
        title: "Mobile App Design",
        tab: "UI Concepts",
        color: "#FFEA00",
        img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
        caseStudy: {
          heroBanner: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80",
          fullDescription: "Mobile app design concept for a fitness tracking application. Features include workout tracking, progress visualization, and social sharing capabilities.",
          metrics: [
            { value: "20 screens", label: "Screens" },
            { value: "4 features", label: "Features" },
            { value: "3 weeks", label: "Timeline" }
          ],
          tools: ["Figma", "ProtoPie", "Principle"],
          images: [
            "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
          ]
        }
      },
      {
        id: 10,
        title: "Motion Graphics Reel",
        tab: "Videos",
        color: "#7B2FFF",
        video: "https://www.youtube.com/embed/k9L8DLejmI4?autoplay=1&mute=1&loop=1&playlist=k9L8DLejmI4",
        thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80"
      },
      {
        id: 11,
        title: "Botanical Series",
        tab: "Illustration",
        color: "#FF6B35",
        img: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?w=600&q=80",
        shortDescription: "Botanical illustration series featuring native plants with detailed line work and watercolor style."
      },
      {
        id: 12,
        title: "Packaging Design",
        tab: "Branding",
        color: "#00FF9D",
        img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&q=80",
        caseStudy: {
          heroBanner: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=1200&q=80",
          fullDescription: "Packaging design for a premium skincare line. The design emphasizes sustainability, luxury, and shelf appeal while maintaining production feasibility.",
          metrics: [
            { value: "6 SKUs", label: "SKUs" },
            { value: "2 materials", label: "Materials" },
            { value: "4 weeks", label: "Timeline" }
          ],
          tools: ["Illustrator", "Cinema 4D", "Keyshot"],
          images: [
            "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800&q=80",
            "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=800&q=80"
          ]
        }
      },
      {
        id: 13,
        title: "Product Demo Video",
        tab: "Videos",
        color: "#FF3CAC",
        video: "https://www.youtube.com/embed/k9L8DLejmI4?autoplay=1&mute=1&loop=1&playlist=k9L8DLejmI4",
        thumbnail: "https://images.unsplash.com/photo-1519389950473-1ba3f8882384?w=600&q=80"
      },
      {
        id: 14,
        title: "UI Animation Showcase",
        tab: "Videos",
        color: "#00D4FF",
        video: "https://www.youtube.com/embed/k9L8DLejmI4?autoplay=1&mute=1&loop=1&playlist=k9L8DLejmI4",
        thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
      },
    ],
  },

  contact: {
    email: "bhaveshjariwala99@gmail.com",
    linkedin: "https://linkedin.com/in/bhaveshjariwala",
    behance: "https://behance.net/bhavesh20",
    dribbble: "https://dribbble.com/Bhavesh20",
    github: "https://github.com/BhaveshJ20",
    twitter: "https://twitter.com/BhaveshJ20",
  },
};

export default DATA;
