import { Search, PenTool, LayoutDashboard, Target, ArrowRight, Server, Cpu, Check, Building2, Sparkles } from "lucide-react";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import ServiceImageShowcase from "@/components/ServiceImageShowcase";
import { serviceImageData } from "@/lib/serviceImageData";

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-neutral-900">
      <main className="flex-1">
        {/* Header Section */}
        <section className="w-full py-20 md:py-32 relative overflow-hidden bg-gradient-to-br from-emerald-950 to-teal-950 border-b border-emerald-900/50">
          <div className="container mx-auto px-4 max-w-4xl text-center space-y-6 relative z-10">
            <FadeIn delay={0.1}>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Our Marketing <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Solutions</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl text-emerald-50/80 max-w-2xl mx-auto leading-relaxed">
                Comprehensive, data-backed services engineered to scale your customer acquisition and maximize lifetime value in Bangladesh and beyond.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Detailed Services */}
        <section className="w-full py-24 bg-white">
          <div className="container mx-auto px-4 max-w-6xl space-y-32">
            
            {/* Service 1 */}
            <FadeIn delay={0.1} direction="up">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2 space-y-8">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700">
                    01 — Acquisition
                  </div>
                  <div className="inline-flex items-center rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1 text-xs font-bold text-emerald-800">
                    Starting at $299/mo
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">Performance Marketing & F-Commerce</h2>
                <p className="text-neutral-600 leading-relaxed text-lg">
                  We deploy algorithmic media buying strategies across Meta (Facebook & Instagram) and Google. By continuously testing local creatives, lookalike audiences, and automated bid strategies, we lower CPA and scale your most profitable campaigns for the Bangladeshi consumer.
                </p>
                <ul className="space-y-4 pt-4">
                  <li className="flex items-center text-base font-medium text-neutral-700">
                    <ArrowRight className="w-5 h-5 mr-3 text-emerald-500 flex-shrink-0" /> Advanced Meta Pixel & CAPI Implementation
                  </li>
                  <li className="flex items-center text-base font-medium text-neutral-700">
                    <ArrowRight className="w-5 h-5 mr-3 text-emerald-500 flex-shrink-0" /> A/B Testing Video Creatives & Copy
                  </li>
                  <li className="flex items-center text-base font-medium text-neutral-700">
                    <ArrowRight className="w-5 h-5 mr-3 text-emerald-500 flex-shrink-0" /> Retargeting Funnels for Maximum ROAS
                  </li>
                </ul>
                <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-neutral-100">
                  <span className="text-sm font-bold text-emerald-950 bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-200">
                    Starting at $299/mo
                  </span>
                  <Link href="/contact" className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-2 text-sm font-bold text-white shadow-sm hover:bg-emerald-700 transition-all">
                    Get Started <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
              <div className="lg:w-1/2 w-full">
                <ServiceImageShowcase
                  serviceId="performance-marketing"
                  primaryColor="emerald"
                  darkTheme={false}
                  images={serviceImageData.performanceMarketing}
                />
              </div>
            </div>
            </FadeIn>

            {/* Service 2 */}
            <FadeIn delay={0.2} direction="up">
            <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
              <div className="lg:w-1/2 space-y-8">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center rounded-full bg-teal-50 px-4 py-2 text-sm font-bold text-teal-700">
                    02 — Organic Growth
                  </div>
                  <div className="inline-flex items-center rounded-full bg-teal-500/10 border border-teal-500/20 px-3.5 py-1 text-xs font-bold text-teal-800">
                    Starting at $399/mo
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">Technical SEO & Local Dominance</h2>
                <p className="text-neutral-600 leading-relaxed text-lg">
                  Sustainable organic growth starts with technical excellence. We optimize your site architecture, build high-authority backlinks from prominent BD publishers, and create intent-driven content that ranks on the first page of Google.
                </p>
                <ul className="space-y-4 pt-4">
                  <li className="flex items-center text-base font-medium text-neutral-700">
                    <ArrowRight className="w-5 h-5 mr-3 text-teal-500 flex-shrink-0" /> Comprehensive Technical & Core Web Vitals Audits
                  </li>
                  <li className="flex items-center text-base font-medium text-neutral-700">
                    <ArrowRight className="w-5 h-5 mr-3 text-teal-500 flex-shrink-0" /> Local SEO & Google Business Profile Optimization
                  </li>
                  <li className="flex items-center text-base font-medium text-neutral-700">
                    <ArrowRight className="w-5 h-5 mr-3 text-teal-500 flex-shrink-0" /> High-Tier Outreach & Link Building
                  </li>
                </ul>
                <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-neutral-100">
                  <span className="text-sm font-bold text-teal-950 bg-teal-50 px-4 py-2 rounded-xl border border-teal-200">
                    Starting at $399/mo
                  </span>
                  <Link href="/contact" className="inline-flex items-center justify-center rounded-xl bg-teal-600 px-5 py-2 text-sm font-bold text-white shadow-sm hover:bg-teal-700 transition-all">
                    Get Started <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
              <div className="lg:w-1/2 w-full">
                <ServiceImageShowcase
                  serviceId="technical-seo"
                  primaryColor="teal"
                  darkTheme={false}
                  images={serviceImageData.technicalSeo}
                />
              </div>
            </div>
            </FadeIn>

            {/* Service 3 */}
            <FadeIn delay={0.4} direction="up">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2 space-y-8">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center rounded-full bg-green-50 px-4 py-2 text-sm font-bold text-green-700">
                    03 — Optimization
                  </div>
                  <div className="inline-flex items-center rounded-full bg-green-500/10 border border-green-500/20 px-3.5 py-1 text-xs font-bold text-green-800">
                    Starting at $199/mo
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">Conversion Rate Optimization (CRO)</h2>
                <p className="text-neutral-600 leading-relaxed text-lg">
                  Traffic is useless if it doesn&apos;t convert. We analyze user heatmaps and redesign your landing pages to ensure seamless checkout flows, particularly optimizing for local payment methods like bKash, SSLCommerz, and Cash on Delivery.
                </p>
                <ul className="space-y-4 pt-4">
                  <li className="flex items-center text-base font-medium text-neutral-700">
                    <ArrowRight className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" /> Landing Page Design & Copywriting
                  </li>
                  <li className="flex items-center text-base font-medium text-neutral-700">
                    <ArrowRight className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" /> Multivariate A/B Testing
                  </li>
                  <li className="flex items-center text-base font-medium text-neutral-700">
                    <ArrowRight className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" /> Cart Abandonment Recovery Flows
                  </li>
                </ul>
                <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-neutral-100">
                  <span className="text-sm font-bold text-green-950 bg-green-50 px-4 py-2 rounded-xl border border-green-200">
                    Starting at $199/mo
                  </span>
                  <Link href="/contact" className="inline-flex items-center justify-center rounded-xl bg-green-600 px-5 py-2 text-sm font-bold text-white shadow-sm hover:bg-green-700 transition-all">
                    Get Started <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
              <div className="lg:w-1/2 w-full">
                <ServiceImageShowcase
                  serviceId="cro-optimization"
                  primaryColor="green"
                  darkTheme={false}
                  images={serviceImageData.croOptimization}
                />
              </div>
            </div>
            </FadeIn>

            {/* Service 4 */}
            <FadeIn delay={0.5} direction="up">
            <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
              <div className="lg:w-1/2 space-y-8">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center rounded-full bg-yellow-50 px-4 py-2 text-sm font-bold text-yellow-700">
                    04 — Search & Display
                  </div>
                  <div className="inline-flex items-center rounded-full bg-yellow-500/10 border border-yellow-500/20 px-3.5 py-1 text-xs font-bold text-yellow-800">
                    Starting at $249/mo
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">Google Ads Service</h2>
                <p className="text-neutral-600 leading-relaxed text-lg">
                  Capture high-intent prospects at the exact moment they are searching for your products. We manage end-to-end Google Ads campaigns including Search, Display, YouTube, and Performance Max to dominate the search engine results page.
                </p>
                <ul className="space-y-4 pt-4">
                  <li className="flex items-center text-base font-medium text-neutral-700">
                    <ArrowRight className="w-5 h-5 mr-3 text-yellow-500 flex-shrink-0" /> Search Intent & Keyword Targeting
                  </li>
                  <li className="flex items-center text-base font-medium text-neutral-700">
                    <ArrowRight className="w-5 h-5 mr-3 text-yellow-500 flex-shrink-0" /> Performance Max & Shopping Campaigns
                  </li>
                  <li className="flex items-center text-base font-medium text-neutral-700">
                    <ArrowRight className="w-5 h-5 mr-3 text-yellow-500 flex-shrink-0" /> YouTube Ads & Remarketing
                  </li>
                </ul>
                <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-neutral-100">
                  <span className="text-sm font-bold text-amber-950 bg-yellow-50 px-4 py-2 rounded-xl border border-yellow-200">
                    Starting at $249/mo
                  </span>
                  <Link href="/contact" className="inline-flex items-center justify-center rounded-xl bg-amber-600 px-5 py-2 text-sm font-bold text-white shadow-sm hover:bg-amber-700 transition-all">
                    Get Started <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
              <div className="lg:w-1/2 w-full">
                <ServiceImageShowcase
                  serviceId="google-ads"
                  primaryColor="yellow"
                  darkTheme={false}
                  images={serviceImageData.googleAds}
                />
              </div>
            </div>
            </FadeIn>

            {/* Service 5 */}
            <FadeIn delay={0.6} direction="up">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2 space-y-8">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
                    05 — Development
                  </div>
                  <div className="inline-flex items-center rounded-full bg-blue-500/10 border border-blue-500/20 px-3.5 py-1 text-xs font-bold text-blue-800">
                    Server from $49/mo | App from $499
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">Web Services, Managed Servers & SaaS</h2>
                <p className="text-neutral-600 leading-relaxed text-lg">
                  High-speed cloud server hosting, custom web development, e-commerce store builds, and scalable SaaS platforms. We engineer fast, secure cloud infrastructure and responsive applications built to convert.
                </p>
                <ul className="space-y-4 pt-4">
                  <li className="flex items-center text-base font-medium text-neutral-700">
                    <ArrowRight className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" /> Managed Cloud Servers (Starting $49/mo)
                  </li>
                  <li className="flex items-center text-base font-medium text-neutral-700">
                    <ArrowRight className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" /> Custom Full-Stack Web Development
                  </li>
                  <li className="flex items-center text-base font-medium text-neutral-700">
                    <ArrowRight className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" /> High-Performance E-commerce & SaaS MVP Builds
                  </li>
                </ul>
                <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-neutral-100">
                  <span className="text-sm font-bold text-blue-950 bg-blue-50 px-4 py-2 rounded-xl border border-blue-200">
                    Server from $49/mo · App from $499
                  </span>
                  <Link href="/contact" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-2 text-sm font-bold text-white shadow-sm hover:bg-blue-700 transition-all">
                    Get Started <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
              <div className="lg:w-1/2 w-full">
                <ServiceImageShowcase
                  serviceId="cloud-development"
                  primaryColor="blue"
                  darkTheme={false}
                  images={serviceImageData.cloudDevelopment}
                />
              </div>
            </div>
            </FadeIn>

            {/* Service 6 */}
            <FadeIn delay={0.7} direction="up">
            <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
              <div className="lg:w-1/2 space-y-8">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center rounded-full bg-purple-50 px-4 py-2 text-sm font-bold text-purple-700">
                    06 — Operations
                  </div>
                  <div className="inline-flex items-center rounded-full bg-purple-500/10 border border-purple-500/20 px-3.5 py-1 text-xs font-bold text-purple-800">
                    Starting at $149/mo
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">CRM & Business Automation</h2>
                <p className="text-neutral-600 leading-relaxed text-lg">
                  Automate your operations to scale efficiently. We implement robust CRM systems, marketing automation workflows, and AI-driven solutions to nurture leads, manage customer data, and streamline your sales pipeline.
                </p>
                <ul className="space-y-4 pt-4">
                  <li className="flex items-center text-base font-medium text-neutral-700">
                    <ArrowRight className="w-5 h-5 mr-3 text-purple-500 flex-shrink-0" /> Custom CRM Setup & Integration
                  </li>
                  <li className="flex items-center text-base font-medium text-neutral-700">
                    <ArrowRight className="w-5 h-5 mr-3 text-purple-500 flex-shrink-0" /> Automated Email & SMS Marketing Funnels
                  </li>
                  <li className="flex items-center text-base font-medium text-neutral-700">
                    <ArrowRight className="w-5 h-5 mr-3 text-purple-500 flex-shrink-0" /> AI Chatbots for Instant Customer Support
                  </li>
                </ul>
                <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-neutral-100">
                  <span className="text-sm font-bold text-purple-950 bg-purple-50 px-4 py-2 rounded-xl border border-purple-200">
                    Starting at $149/mo
                  </span>
                  <Link href="/contact" className="inline-flex items-center justify-center rounded-xl bg-purple-600 px-5 py-2 text-sm font-bold text-white shadow-sm hover:bg-purple-700 transition-all">
                    Get Started <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
              <div className="lg:w-1/2 w-full">
                <ServiceImageShowcase
                  serviceId="crm-automation"
                  primaryColor="purple"
                  darkTheme={false}
                  images={serviceImageData.crmAutomation}
                />
              </div>
            </div>
            </FadeIn>

            </div>
        </section>

        {/* Pricing & Managed Server Plans Section */}
        <section className="w-full py-24 bg-neutral-900 text-white relative overflow-hidden border-t border-neutral-800">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-950/40 via-neutral-900 to-neutral-900"></div>
          <div className="container mx-auto px-4 max-w-7xl relative z-10">
            <FadeIn delay={0.1}>
              <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
                <div className="inline-flex items-center rounded-full bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                  <Server className="w-3.5 h-3.5 mr-2" /> Server & Growth Pricing
                </div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Infrastructure & Pricing Packages</h2>
                <p className="text-neutral-400 text-lg">
                  Clear, transparent USD pricing for cloud server hosting, website management, and full-funnel digital growth.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Card 1: Cloud & Managed Server */}
              <FadeIn delay={0.2} direction="up">
                <div className="h-full bg-neutral-800/60 backdrop-blur-sm rounded-3xl border border-neutral-700/60 p-8 flex flex-col justify-between hover:border-emerald-500/50 transition-all duration-300">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 text-emerald-400">
                      <Server className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Starter Cloud Server</h3>
                    <p className="text-neutral-400 text-sm mb-6">High-speed managed web server hosting & setup for growing brands.</p>
                    <div className="mb-6">
                      <span className="text-xs text-neutral-400 block uppercase font-medium">Starting from</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-extrabold text-white">$49</span>
                        <span className="text-neutral-400 text-sm">/ month</span>
                      </div>
                    </div>
                    <ul className="space-y-3 border-t border-neutral-700/60 pt-6 text-sm text-neutral-300">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" /> Managed Linux / Node / PHP Server
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" /> 99.9% Uptime Guarantee & SSL
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" /> Global CDN & Daily Automated Backups
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" /> Server Hardening & DDoS Mitigation
                      </li>
                    </ul>
                  </div>
                  <div className="pt-8">
                    <Link href="/contact" className="w-full inline-flex h-11 items-center justify-center rounded-xl bg-neutral-700 hover:bg-neutral-600 text-white font-medium text-sm transition-colors">
                      Deploy Starter Server
                    </Link>
                  </div>
                </div>
              </FadeIn>

              {/* Card 2: Growth Application Server */}
              <FadeIn delay={0.3} direction="up">
                <div className="h-full bg-gradient-to-b from-neutral-800 to-emerald-950/40 backdrop-blur-sm rounded-3xl border-2 border-emerald-500 p-8 flex flex-col justify-between shadow-2xl shadow-emerald-950/50 relative">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
                    Most Popular
                  </div>
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center mb-6 text-teal-300">
                      <Cpu className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Growth Application Server</h3>
                    <p className="text-neutral-300 text-sm mb-6">Scalable infrastructure built for e-commerce stores & SaaS platforms.</p>
                    <div className="mb-6">
                      <span className="text-xs text-neutral-300 block uppercase font-medium">Starting from</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-extrabold text-white">$199</span>
                        <span className="text-emerald-300 text-sm">/ month</span>
                      </div>
                    </div>
                    <ul className="space-y-3 border-t border-neutral-700/60 pt-6 text-sm text-neutral-200">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" /> Dedicated Virtual CPU & High IOPS NVMe
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" /> Redis Cache & Database Optimization
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" /> 24/7 Proactive Server Monitoring
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" /> Auto-scaling & High Traffic Load Handling
                      </li>
                    </ul>
                  </div>
                  <div className="pt-8">
                    <Link href="/contact" className="w-full inline-flex h-11 items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-sm shadow-lg shadow-emerald-500/25 transition-all">
                      Choose Growth Server
                    </Link>
                  </div>
                </div>
              </FadeIn>

              {/* Card 3: Performance Growth */}
              <FadeIn delay={0.4} direction="up">
                <div className="h-full bg-neutral-800/60 backdrop-blur-sm rounded-3xl border border-neutral-700/60 p-8 flex flex-col justify-between hover:border-emerald-500/50 transition-all duration-300">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-6 text-teal-400">
                      <PenTool className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Performance & Ads Retainer</h3>
                    <p className="text-neutral-400 text-sm mb-6">Complete digital media buying, SEO optimization & conversion setup.</p>
                    <div className="mb-6">
                      <span className="text-xs text-neutral-400 block uppercase font-medium">Starting from</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-extrabold text-white">$299</span>
                        <span className="text-neutral-400 text-sm">/ month</span>
                      </div>
                    </div>
                    <ul className="space-y-3 border-t border-neutral-700/60 pt-6 text-sm text-neutral-300">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" /> Full Meta & Google Ads Management
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" /> Meta CAPI & Conversion Tracking
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" /> Creative Testing & ROAS Scaling
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" /> Technical SEO & Core Web Vitals
                      </li>
                    </ul>
                  </div>
                  <div className="pt-8">
                    <Link href="/contact" className="w-full inline-flex h-11 items-center justify-center rounded-xl bg-neutral-700 hover:bg-neutral-600 text-white font-medium text-sm transition-colors">
                      Start Growth Retainer
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Enterprise Grade Callout Banner */}
            <FadeIn delay={0.5} direction="up">
              <div className="bg-gradient-to-r from-emerald-950 via-teal-950 to-neutral-900 rounded-3xl border border-emerald-500/30 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
                <div className="space-y-3 text-center md:text-left max-w-3xl">
                  <div className="inline-flex items-center rounded-full bg-emerald-500/20 border border-emerald-400/30 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-300">
                    <Building2 className="w-3.5 h-3.5 mr-2" /> Enterprise Grade
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">Need Enterprise-Grade Custom Architecture?</h3>
                  <p className="text-emerald-100/70 text-base leading-relaxed">
                    Require high-availability server clusters, multi-region database failovers, dedicated DevOps, or custom enterprise SLAs? Contact our specialized architecture team for a tailored enterprise proposal.
                  </p>
                </div>
                <div className="flex-shrink-0 w-full md:w-auto">
                  <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-xl bg-white hover:bg-emerald-50 px-8 text-sm font-bold text-emerald-950 shadow-xl transition-all w-full md:w-auto">
                    Contact Us for Enterprise Grade <ArrowRight className="ml-2 w-4 h-4 text-emerald-700" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 4-Phase Delivery Process */}
        <section className="w-full py-24 bg-gradient-to-br from-emerald-950 to-teal-950 border-y border-emerald-900/50">
          <div className="container mx-auto px-4 max-w-6xl">
            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">Our 4-Phase Delivery Process</h2>
            </FadeIn>
            <FadeIn delay={0.2} direction="up">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              <div className="space-y-4 relative z-10 bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl hover:bg-white/15 transition-colors">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200 mb-6">01</div>
                <h3 className="text-xl font-bold text-white">Discovery & Audit</h3>
                <p className="text-emerald-50/80">Deep dive into your current metrics, infrastructure, and historical performance in the BD market.</p>
              </div>
              <div className="space-y-4 relative z-10 bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl hover:bg-white/15 transition-colors">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-200 mb-6">02</div>
                <h3 className="text-xl font-bold text-white">Strategy & Architecture</h3>
                <p className="text-emerald-50/80">Developing the custom roadmap, tracking implementation, and establishing creative briefs.</p>
              </div>
              <div className="space-y-4 relative z-10 bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl hover:bg-white/15 transition-colors">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200 mb-6">03</div>
                <h3 className="text-xl font-bold text-white">Sprint Execution</h3>
                <p className="text-emerald-50/80">Launching campaigns, resolving technical SEO fixes, and pushing content according to priority.</p>
              </div>
              <div className="space-y-4 relative z-10 bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl hover:bg-white/15 transition-colors">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-200 mb-6">04</div>
                <h3 className="text-xl font-bold text-white">Continuous Scaling</h3>
                <p className="text-emerald-50/80">Aggressive A/B testing, budget scaling on winning variables, and transparent weekly reporting.</p>
              </div>
            </div>
            </FadeIn>
          </div>
        </section>

        {/* FAQs */}
        <section className="w-full py-32 bg-white">
          <div className="container mx-auto px-4 max-w-3xl space-y-16">
            <FadeIn delay={0.1}>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-neutral-600">Common queries about working with UpSpot Limited.</p>
            </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="up">
            <div className="space-y-6">
              <details className="group p-6 md:p-8 border border-neutral-200 bg-neutral-50 rounded-2xl cursor-pointer transition-all hover:bg-neutral-100 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between font-bold text-lg md:text-xl text-neutral-900 outline-none select-none">
                  Do you require long-term contracts?
                  <span className="ml-4 flex-shrink-0 transition-transform duration-300 group-open:rotate-180">
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5 text-emerald-600"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </span>
                </summary>
                <div className="mt-4 text-neutral-600 leading-relaxed text-base border-t border-neutral-200 pt-4 animate-in fade-in slide-in-from-top-2 duration-300">
                  While we recommend a 3-month initial commitment to gather statistical significance and properly scale campaigns, our standard retainers operate on a flexible month-to-month basis thereafter.
                </div>
              </details>
              
              <details className="group p-6 md:p-8 border border-neutral-200 bg-neutral-50 rounded-2xl cursor-pointer transition-all hover:bg-neutral-100 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between font-bold text-lg md:text-xl text-neutral-900 outline-none select-none">
                  How often do we communicate?
                  <span className="ml-4 flex-shrink-0 transition-transform duration-300 group-open:rotate-180">
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5 text-emerald-600"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </span>
                </summary>
                <div className="mt-4 text-neutral-600 leading-relaxed text-base border-t border-neutral-200 pt-4 animate-in fade-in slide-in-from-top-2 duration-300">
                  We set up a dedicated Slack or WhatsApp group for daily operational queries, provide weekly asynchronous updates, and hold a comprehensive strategy call bi-weekly.
                </div>
              </details>
              
              <details className="group p-6 md:p-8 border border-neutral-200 bg-neutral-50 rounded-2xl cursor-pointer transition-all hover:bg-neutral-100 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between font-bold text-lg md:text-xl text-neutral-900 outline-none select-none">
                  Who owns the ad accounts and data?
                  <span className="ml-4 flex-shrink-0 transition-transform duration-300 group-open:rotate-180">
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5 text-emerald-600"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </span>
                </summary>
                <div className="mt-4 text-neutral-600 leading-relaxed text-base border-t border-neutral-200 pt-4 animate-in fade-in slide-in-from-top-2 duration-300">
                  You do. 100% of the time. We operate strictly out of your Business Manager accounts ensuring you retain all historical data, pixel intelligence, and assets.
                </div>
              </details>
            </div>
            </FadeIn>
          </div>
        </section>
      </main>
    </div>
  );
}
