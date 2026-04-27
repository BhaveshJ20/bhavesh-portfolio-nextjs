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
        title: "NALES — Brand Identity",
        tab: "Branding",
        color: "#7AB928",
        img: "/images/branding/nales/Logo.png",
        slug: "nales",
        caseStudy: {
          heroBanner: "/images/branding/nales/Envelop/front.jpg",
          fullDescription: "NALES — North American Laboratory Equipment Supplies & Services — is a scientific equipment supplier serving laboratories, research institutions, and industrial clients across North America. Despite operating in a precision-driven industry, the brand's visual identity didn't reflect the same level of rigor.",
          metrics: [
            { value: "2 Weeks", label: "Timeline" },
            { value: "Lead Brand Designer", label: "Role" },
            { value: "Lab / Scientific", label: "Industry" }
          ],
          tools: ["Figma", "Adobe CC", "Illustrator"],
          role: "Lead Brand Designer",
          timeline: "2 Weeks",
          industry: "Laboratory / Scientific Equipment",
          sections: {
            overview: {
              title: "The Brief.",
              description: "NALES — North American Laboratory Equipment Supplies & Services — is a scientific equipment supplier serving laboratories, research institutions, and industrial clients across North America. Despite operating in a precision-driven industry, the brand's visual identity didn't reflect the same level of rigor. The engagement was a full brand identity system redesign — covering logo rationale, color system, typography hierarchy, print collateral, and digital-ready assets — all within a focused two-week sprint.",
              coreBrief: "Create a cohesive, scalable brand identity that communicates precision, scientific authority, and innovation — consistently across every touchpoint from business cards to letterheads, envelopes to digital screens.",
              specs: [
                { key: "Client", value: "NALES" },
                { key: "Industry", value: "Laboratory / Scientific Equipment" },
                { key: "Scope", value: "Brand Identity · Print · Digital" },
                { key: "Role", value: "Lead Brand Designer" },
                { key: "Duration", value: "2 Weeks" },
                { key: "Tools", value: "Figma · Adobe CC · Illustrator" },
                { key: "Status", value: "✓ Delivered" }
              ]
            },
            problem: {
              title: "What Was Broken.",
              description: "The existing brand materials existed as isolated artifacts — each designed in a vacuum, with no shared system, no hierarchy, and no scalable logic binding them together.",
              problems: [
                { num: "01", title: "No Visual Consistency", desc: "Business cards, letterheads, and envelopes used different interpretations of the logo, inconsistent spacing, and mismatched color applications — making the brand feel fragmented at every client touchpoint." },
                { num: "02", title: "Weak Brand Recall", desc: "The existing visual language lacked a memorable identity hook. The logo concept was underutilised, and the scientific symbolism — the atom and flask — were not systematically applied to reinforce brand recognition." },
                { num: "03", title: "Poor Communication Hierarchy", desc: "Typography across all materials had no defined hierarchy — headings, body text, and contact details competed for attention. Information was hard to scan, reducing professional credibility in client-facing documents." },
                { num: "04", title: "Lack of System-Driven Design", desc: "There were no documented spacing rules, color ratios, or component guidelines. Every new material required redesigning from scratch — making the brand expensive to maintain and impossible to scale." }
              ],
              quote: "The brand needed to earn the same trust that NALES earns in the lab."
            },
            approach: {
              title: "How I Approached It.",
              description: "Before touching a single pixel, I defined the strategic lens through which every visual decision would be made. Three pillars guided the process.",
              approaches: [
                { icon: "🔬", label: "Research", title: "Industry Visual Audit", desc: "Studied how leading scientific brands — Thermo Fisher, Merck, Sigma-Aldrich — communicate authority through minimal, geometric, and structured visual languages. Identified a clear gap: most lab brands skew corporate grey. NALES needed to own a distinctive colour with scientific legitimacy." },
                { icon: "📐", label: "Visual Direction", title: "Minimal. Structured. Geometric.", desc: "The visual direction committed to three principles: generous whitespace to signal precision, grid-based layouts to communicate structure, and geometric shapes derived from the atomic symbol to create a scientific visual language that felt native — not forced." },
                { icon: "⚛️", label: "Concept", title: "Atomic Precision", desc: "Every atom in a molecule has a defined role. Every element in this brand system has a defined role. The concept 'Atomic Precision' became the creative north star — ensuring each design decision could be justified by function, not just aesthetics." }
              ],
              concept: {
                title: "Atomic Precision — The Creative Concept",
                desc: "Just as atomic structure governs the behaviour of matter with absolute precision, this brand system governs every visual element with the same rigour. The atom is not decorative here — it is the philosophical foundation: science demands precision, and so does the brand that serves it. Every spacing rule, every colour ratio, every typographic decision was derived from this single idea."
              }
            },
            logo: {
              title: "Symbol of Science.",
              description: "The NALES logo is a dual-symbol system — two icons fused into a single, coherent mark that communicates both the scientific domain and the laboratory credibility of the business.",
              anatomy: [
                { label: "Symbol — Atom", title: "Orbiting electrons form the icon", desc: "The atomic symbol sits above the wordmark, anchoring the brand in scientific identity. The orbital paths represent precision, motion, and the constant pursuit of discovery. The central sphere has a subtle gradient — reflecting depth and technical sophistication — rather than a flat, generic treatment." },
                { label: "Symbol — Flask", title: "The S becomes a laboratory flask", desc: "The final letter of NALESS is not just a letterform — it is a laboratory flask, making the wordmark itself a piece of conceptual design. This removes the need for a standalone icon in most applications; the logo is the icon. It communicates credibility in the lab without requiring explanation." },
                { label: "Typography", title: "Bold, geometric, modern", desc: "The wordmark uses a custom geometric sans-serif with wide tracking and sharp terminals. The letterforms are confident — commanding space on a page the way scientific equipment commands attention in a lab. The tagline 'North American Laboratory Equipment Supplies & Services' is set in a compressed uppercase, subservient to the mark but never disappearing." },
                { label: "Construction Logic", title: "Every angle is intentional", desc: "The logo was constructed on a precise grid. The atom's orbital radii, the flask's proportions, and the letterform widths share a consistent mathematical relationship. This is the 'Atomic Precision' concept made literal — a logo that couldn't accidentally be redesigned without breaking the underlying system." }
              ]
            },
            colors: {
              title: "The Palette.",
              description: "Three colours. One dominant, one foundational, one supporting. The palette is deliberately restrained — because precision doesn't need noise.",
              colors: [
                { name: "Innovation Green", hex: "#7AB928", rgb: "122 · 185 · 40", cmyk: "34 · 0 · 78 · 27", usage: "Primary accent. Used for logo, headers, dividers, call-to-action elements. Never used as a background at full opacity — always dials back to 8–12% for fills." },
                { name: "Precision Black", hex: "#1A1A1A", rgb: "26 · 26 · 26", cmyk: "0 · 0 · 0 · 90", usage: "Wordmark, body text, and structural elements. Slightly off-black for print accuracy — avoids the harshness of 100K without losing authority." },
                { name: "Clinical White", hex: "#FFFFFF", rgb: "255 · 255 · 255", cmyk: "0 · 0 · 0 · 0", usage: "Primary background for all print materials. Signals cleanliness, laboratory sterility, and precision. Never broken with a grey or warm-tinted alternative." },
                { name: "Tinted Green", hex: "Green @ 10–15% opacity", rgb: "For: fill zones, card backgrounds", cmyk: "Never: text, borders at full green", usage: "Used as a subtle fill for contact blocks, section dividers, and envelope panels. Maintains brand presence without overpowering the white space." }
              ],
              rules: [
                { label: "Primary — Green", width: "25%", color: "#7AB928", desc: "25% of visual space. Accent and emphasis only. The brand's most distinctive asset — treat it like a highlight, not a background." },
                { label: "Secondary — Black", width: "35%", color: "#1A1A1A", desc: "35% of visual space. All text, wordmark, and structural elements. The authority colour — never replaced by grey." },
                { label: "Dominant — White", width: "40%", color: "#e8e8e8", desc: "40% of visual space. Space is the brand's loudest signal. White communicates precision, cleanliness, and scientific rigour — never fill it without purpose." }
              ]
            },
            typography: {
              title: "The Type System.",
              description: "Two typefaces. One for authority, one for clarity. The hierarchy is strict — because clarity in a laboratory is non-negotiable.",
              types: [
                { tag: "Display · H1", spec: "Geometric Sans · Bold<br>48–96px · Tracking −0.02em", sample: "NALESS" },
                { tag: "Heading · H2", spec: "Geometric Sans · Bold<br>28–40px · Tracking −0.01em", sample: "Precision in Every Detail" },
                { tag: "Subheading · H3", spec: "Instrument Sans · SemiBold<br>18–22px · Tracking 0", sample: "North American Laboratory Equipment Supplies & Services" },
                { tag: "Body · P", spec: "Instrument Sans · Regular<br>14–16px · Line height 1.78", sample: "We supply precision laboratory equipment and professional services to research institutions, industrial facilities, and scientific organizations across North America. Every product is selected for accuracy, durability, and compliance." },
                { tag: "Caption / Label", spec: "DM Mono · Regular<br>10–12px · Tracking 0.15em", sample: "Product Code · LAB-EQ-2024 · Certified ISO 9001" }
              ]
            },
            applications: {
              title: "The System in Action.",
              description: "Every application was designed to the same specification: the brand system, not the individual designer's instinct, makes the layout decisions.",
              items: [
                {
                  sectionTitle: "01 — Letterhead",
                  heading: "The Premium Letterhead System",
                  rationale: "The letterhead is the most important client-facing document in the NALES print system. Two variants were developed: a full-colour version with the green contact block for primary correspondence, and a minimal variant for internal documents. Both share the same grid, the same margins, and the same typographic hierarchy — meaning they feel like siblings, not strangers. The atomic watermark in the body creates depth without distraction.",
                  images: [
                    { src: "/images/branding/nales/A4 letter/letter.jpg", caption: "Letterhead — Full Colour", size: "A4 · 210×297mm" },
                    { src: "/images/branding/nales/A4 letter/letter1.jpg", caption: "Letterhead — Compact Version", size: "A4 · Body text layout" }
                  ]
                },
                {
                  sectionTitle: "02 — Business Cards",
                  heading: "Front & Back — Dual-Panel System",
                  rationale: "Business cards are the brand's handshake. The front is white-dominant — commanding and minimal, letting the logo breathe — with the full address and contact block in precise, mono-spaced type. The back inverts: a rich green background with the wordmark centred in white. The diagonal arrow motif on the contact block creates directional energy, reinforcing a brand that is always moving forward. No decorative elements that don't serve a structural purpose.",
                  images: [
                    { src: "/images/branding/nales/Buisness Card/front.fw.png", caption: "Business Card — Front", size: "85×55mm · Standard" },
                    { src: "/images/branding/nales/Buisness Card/back.fw.png", caption: "Business Card — Back", size: "Green dominant · Logo reversed" }
                  ]
                },
                {
                  sectionTitle: "03 — Envelope",
                  heading: "Envelope System — Front & Back",
                  rationale: "The envelope design extends the letterhead system, not reinvents it. The front features a clean, professional sender block using the same type scale and logo placement as the letterhead. The back panel introduces the brand's strongest visual moment — the diagonal green ribbon with the atom icon centred in a white circle. This isn't decoration; it is a seal of scientific authority. When a client receives a NALES envelope, the back is the first thing they see when they open it.",
                  images: [
                    { src: "/images/branding/nales/Envelop/front.jpg", caption: "Envelope — Front", size: "DL · 220×110mm" },
                    { src: "/images/branding/nales/Envelop/back.jpg", caption: "Envelope — Back · Atom seal", size: "Green ribbon closure system" }
                  ]
                },
                {
                  sectionTitle: "04 — Stamps & Seals",
                  heading: "Official Stamp Variations",
                  rationale: "Two stamp variants serve different official purposes. The rectangular stamp mirrors the business card proportions — compact, structured, with the wordmark legible at small scale. The circular seal uses a ring of text wrapping the NALES wordmark — communicating institutional authority. Both are designed to retain legibility and brand recognition when used in black ink only, satisfying the core rule of good stamp design: it must survive a single-colour stamp pad without losing identity.",
                  images: [
                    { src: "/images/branding/nales/Stamp/stamp1.jpg", caption: "Rectangular Stamp · Official correspondence", size: "" },
                    { src: "/images/branding/nales/Stamp/stamp2.jpg", caption: "Circular Seal · Institutional authority", size: "" }
                  ]
                }
              ]
            },
            system: {
              title: "The Rules That Scale.",
              description: "The deliverable wasn't just designed assets. It was a system with documented rules — so every future touchpoint, built by any designer, feels like it came from the same mind.",
              cards: [
                { num: "01", title: "8pt Spacing Grid", desc: "All margins, padding, and component gaps are multiples of 8px. This creates invisible but tangible rhythm across every layout — from the 64px page margin to the 8px gap between icon and label text.", pills: ["8px base", "16px inner", "32px section gap", "64px page margin"] },
                { num: "02", title: "Component Architecture", desc: "Every print element — contact block, logo lockup, address field — is a reusable component. Swap content, not structure. The business card contact block is the same component used in the letterhead header and envelope sender field.", pills: ["Logo lockups ×4", "Contact block", "Section divider", "Address field"] },
                { num: "03", title: "Colour Usage Protocol", desc: "Green is never used as a full-bleed background except in clearly defined zones (card back, envelope ribbon). All other uses are at 8–12% opacity or as a 2–3px accent line. This rule ensures green retains its impact — it only appears where it's supposed to mean something.", pills: ["Full green: flip side only", "Tinted: 8–12%", "Accent line: 2–3px"] },
                { num: "04", title: "Icon Style — Line-Based", desc: "All supporting icons (phone, email, globe, address pin) use a consistent line-weight and geometric construction. No fills, no drop shadows, no decorative embellishments. Icons inform — they don't entertain.", pills: ["1.5px stroke weight", "Geometric construction", "No fills", "24×24px base"] }
              ]
            },
            beforeAfter: {
              title: "The Shift.",
              description: "Same brand. Same industry. Entirely different perception. The comparison isn't about aesthetics — it's about the strategic difference between a brand that happens to exist and one that is built to work.",
              before: {
                label: "Before — Original Design",
                image: "/images/branding/nales/Envelop/old-front.jpg",
                points: [
                  "Wave motif is decorative, not structural — creates visual noise without brand meaning",
                  "Logo isolated in corner with no spatial relationship to other elements",
                  "No grid logic — elements feel placed by eye, not by system",
                  "Green used inconsistently across materials — different tones in different files",
                  "Cannot be recreated without the original file — no documented system"
                ]
              },
              after: {
                label: "After — Brand System",
                image: "/images/branding/nales/Envelop/front.jpg",
                points: [
                  "Every element has a structural purpose — geometry references the atomic identity system",
                  "Logo placement follows an 8pt grid — consistent across all applications",
                  "System-documented spacing — any designer can recreate any asset from the rules alone",
                  "Single HEX value for green — locked across all files, print and digital",
                  "Scales to new applications without breaking — a system, not a skin"
                ]
              }
            },
            impact: {
              title: "What Changed.",
              description: "A two-week sprint. A complete brand system. The outcomes are measurable — not in clicks or conversions, but in the metrics that matter for a B2B scientific brand: consistency, credibility, and scalability.",
              metrics: [
                { num: "6", label: "Print touchpoints unified under one system" },
                { num: "1", label: "Single HEX value — green locked across all files" },
                { num: "0", label: "Decorative elements without structural purpose" },
                { num: "2w", label: "From brief to full deliverable — concept to production" }
              ],
              impacts: [
                { title: "Improved Brand Consistency", desc: "Every material — from the stamp to the letterhead — now shares the same grid, the same spacing rules, and the same colour protocol. A new designer can produce a new touchpoint without guessing." },
                { title: "Stronger Visual Identity", desc: "The dual-symbol logo system (atom + flask) created an immediately recognisable mark that works at any scale — from a 10mm stamp to a full A4 letterhead background watermark." },
                { title: "Scalable Across Print & Digital", desc: "The system was built in vectors with documented rules, meaning digital applications — email headers, website components, presentation templates — can be derived from the same source of truth." },
                { title: "Better Client Perception", desc: "In B2B scientific supply, trust is currency. A brand that looks as precise as its products signals to procurement managers and lab directors that NALES operates to the same standard inside as out." }
              ]
            },
            takeaways: {
              title: "What This Proves.",
              description: "Three lessons from this project that apply to every brand engagement — regardless of industry or scale.",
              takeaways: [
                { icon: "🏗️", title: "Systems Over Visuals", desc: "A beautiful logo with no system around it is a one-time deliverable. A documented brand system is a multiplier — it makes every future touchpoint faster, cheaper, and more consistent to produce. The goal is always to design the rules, not just the output." },
                { icon: "🧪", title: "Industry Psychology Drives Direction", desc: "NALES operates in an industry where precision is survival. A playful or expressive brand direction would have been wrong — not aesthetically, but strategically. Aligning the visual system with the industry's psychological expectations (precision, cleanliness, authority) makes the brand instantly credible to its audience." },
                { icon: "📐", title: "Constraints Are Creative Fuel", desc: "Two weeks. Three colours. Two fonts. One concept. The tightest briefs produce the most focused work. Constraints force clarity — and clarity, in brand design, is always the right answer. Every element in the NALES system exists because it had to, not because it could." }
              ]
            }
          }
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
