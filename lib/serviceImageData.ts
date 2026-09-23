import { ServiceImageItem } from "@/components/ServiceImageShowcase";

export const serviceImageData: Record<string, ServiceImageItem[]> = {
  performanceMarketing: [
    {
      id: "pm-1",
      title: "Meta & TikTok Paid Ad Scaling Dashboard",
      subtitle: "Live ROAS tracking, multi-channel customer acquisition & retargeting",
      src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop",
      alt: "Meta Ads and TikTok Ad campaign performance dashboard with high ROAS analytics",
      badge: "ROAS Analytics",
      statLabel: "Average ROAS",
      statValue: "8.4x Growth"
    },
    {
      id: "pm-2",
      title: "E-commerce Revenue & Campaign Funnel",
      subtitle: "Daily sales conversion metrics and ad spend efficiency",
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      alt: "E-commerce daily revenue graph and digital ad spend analytics",
      badge: "Live Campaign",
      statLabel: "Ad Spend Managed",
      statValue: "$500K+/mo"
    }
  ],
  technicalSeo: [
    {
      id: "seo-1",
      title: "Google Search Console & Organic Rank Audit",
      subtitle: "First-page keyword rankings and technical Core Web Vitals score",
      src: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=2070&auto=format&fit=crop",
      alt: "SEO specialist examining Google Search Console keyword position rankings",
      badge: "Search Console",
      statLabel: "Organic Traffic",
      statValue: "+340% Surge"
    },
    {
      id: "seo-2",
      title: "High-Authority Local Link Building",
      subtitle: "Organic backlink profile and domain authority scaling",
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      alt: "Technical SEO performance metrics dashboard and Core Web Vitals breakdown",
      badge: "Domain Authority",
      statLabel: "Core Web Vitals",
      statValue: "100/100 Score"
    }
  ],
  croOptimization: [
    {
      id: "cro-1",
      title: "Live CRO & Analytics Dashboard",
      subtitle: "Real-time conversion metrics, A/B testing & revenue tracking",
      src: "/images/cro-dashboard.png",
      alt: "Real Conversion Rate Optimization Dashboard with live analytics and metrics",
      badge: "Live Analytics",
      statLabel: "Conversion Boost",
      statValue: "+42% Rates"
    },
    {
      id: "cro-2",
      title: "High-Converting Checkout Flow",
      subtitle: "Optimized for local payment gateways (bKash, Cards & Cash on Delivery)",
      src: "/images/cro-checkout.png",
      alt: "Optimized e-commerce payment checkout screen on smartphone",
      badge: "Local Payment UX",
      statLabel: "Cart Recovery",
      statValue: "78% Completion"
    },
    {
      id: "cro-3",
      title: "CRO Strategy & Optimization Team",
      subtitle: "Data analysts reviewing heatmap recordings and checkout drop-offs",
      src: "/images/cro-team.png",
      alt: "Digital marketing and CRO strategy team analyzing conversion data in office",
      badge: "Strategy Team",
      statLabel: "A/B Tests",
      statValue: "250+ Executed"
    }
  ],
  googleAds: [
    {
      id: "gads-1",
      title: "Google Ads & Performance Max Manager",
      subtitle: "High-intent search keyword targeting & shopping campaigns",
      src: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=2070&auto=format&fit=crop",
      alt: "Google Ads campaign manager showing search intent keywords and CTR performance",
      badge: "Google Ads PMax",
      statLabel: "Click Through Rate",
      statValue: "12.8% CTR"
    },
    {
      id: "gads-2",
      title: "YouTube & Remarketing Campaign Suite",
      subtitle: "Search intent retargeting and video ad conversion funnels",
      src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop",
      alt: "YouTube Ads analytics and search intent retargeting metrics",
      badge: "Video Retargeting",
      statLabel: "Cost Per Lead",
      statValue: "-45% Reduced"
    }
  ],
  cloudDevelopment: [
    {
      id: "dev-1",
      title: "Managed Cloud Infrastructure & Docker Uptime",
      subtitle: "High-speed cloud server cluster optimized for load spikes",
      src: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=2074&auto=format&fit=crop",
      alt: "Cloud server architecture dashboard showing server nodes and uptime graphs",
      badge: "Cloud Architecture",
      statLabel: "Server Uptime",
      statValue: "99.99% Uptime"
    },
    {
      id: "dev-2",
      title: "Custom Full-Stack Next.js & SaaS Platform",
      subtitle: "Modern responsive web applications with sub-100ms response times",
      src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
      alt: "Full-stack code editor and SaaS platform preview interface",
      badge: "SaaS Platform",
      statLabel: "Latency",
      statValue: "< 80ms Fast"
    }
  ],
  crmAutomation: [
    {
      id: "crm-1",
      title: "Automated CRM & Lead Nurturing Workflows",
      subtitle: "Integrated sales funnel automation, automated email & SMS triggers",
      src: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
      alt: "CRM funnel management interface with automated sales pipeline graphs",
      badge: "CRM Workflows",
      statLabel: "Leads Nurtured",
      statValue: "150k+ Auto"
    },
    {
      id: "crm-2",
      title: "AI Chatbots & Automated Customer Operations",
      subtitle: "Instant 24/7 lead capture and automated customer support integration",
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
      alt: "Automation software development and AI chatbot conversation metrics",
      badge: "AI Automation",
      statLabel: "Response Time",
      statValue: "Instant 0s"
    }
  ]
};
