import Link from 'next/link';
import { ArrowRight, BarChart3, LineChart, Target, Zap, CheckCircle2, TrendingUp, ShieldCheck, LayoutDashboard, Server, Cpu, Check, Building2, Sparkles } from 'lucide-react';
import FadeIn from '@/components/FadeIn';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-neutral-900">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-24 md:py-32 lg:py-40 relative overflow-hidden border-b border-neutral-100">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-50/80 via-white to-white"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98110_1px,transparent_1px),linear-gradient(to_bottom,#10b98110_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          
          <div className="container mx-auto px-4 relative z-10 text-center space-y-8 max-w-5xl">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 mb-4">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
                Bangladesh's Premier Digital Growth Partner
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-neutral-900 leading-[1.1]">
                Scale Your Brand with <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">Precision Digital Marketing</span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                We engineer predictable growth systems for Bangladeshi corporate and e-commerce brands, helping them dominate local markets and scale globally through data-driven advertising and technical SEO.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                <a href="https://calendly.com/info-tonmoyorg/upspot-limited" target="_blank" rel="noopener noreferrer" className="inline-flex h-10 items-center justify-center rounded-md bg-gradient-to-r from-emerald-600 to-teal-600 px-6 text-sm font-bold text-white shadow-lg shadow-emerald-500/25 transition-all w-full sm:w-auto">
                  Schedule a Strategy Call
                </a>
                <Link href="/services" className="inline-flex h-10 items-center justify-center rounded-md border border-neutral-200 bg-white px-6 text-sm font-medium text-neutral-700 shadow-sm transition-all hover:bg-neutral-50 w-full sm:w-auto">
                  Explore Our Services <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </FadeIn>
            
            {/* Trust Metrics */}
            <FadeIn delay={0.5} direction="up">
              <div className="pt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-neutral-100 mt-16">
                <div className="space-y-2">
                  <h4 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">$10M+</h4>
                  <p className="text-sm font-medium text-neutral-500">Ad Spend Managed</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">300%</h4>
                  <p className="text-sm font-medium text-neutral-500">Avg. ROI Delivered</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">150+</h4>
                  <p className="text-sm font-medium text-neutral-500">Brands Scaled</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">5+</h4>
                  <p className="text-sm font-medium text-neutral-500">Years Experience</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Core Services Grid with Context */}
        <section className="w-full py-24 bg-gradient-to-br from-emerald-950 to-teal-950 border-y border-emerald-900/50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Dominate Your Market</h2>
              <p className="text-emerald-50/80 max-w-2xl mx-auto text-lg">Comprehensive solutions tailored to capture market share in Bangladesh and drive bottom-line revenue.</p>
            </div>
            <div className="space-y-32 pt-8">
              {/* Service 1 */}
              <FadeIn delay={0.1} direction="up">
              <div className="flex flex-col lg:flex-row gap-16 items-center">
                <div className="lg:w-1/2 space-y-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="inline-flex items-center rounded-full bg-emerald-500/20 px-4 py-2 text-sm font-bold text-emerald-300">
                      01 — Acquisition
                    </div>
                    <div className="inline-flex items-center rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1 text-xs font-bold text-emerald-300">
                      Starting at $299/mo
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white">Performance Marketing & F-Commerce</h3>
                  <p className="text-emerald-50/70 leading-relaxed text-lg">
                    We deploy algorithmic media buying strategies across Meta (Facebook & Instagram) and Google. By continuously testing local creatives, lookalike audiences, and automated bid strategies, we lower CPA and scale your most profitable campaigns for the Bangladeshi consumer.
                  </p>
                  <ul className="space-y-4 pt-4">
                    <li className="flex items-center text-base font-medium text-emerald-50/90">
                      <ArrowRight className="w-5 h-5 mr-3 text-emerald-400 flex-shrink-0" /> Advanced Meta Pixel & CAPI Implementation
                    </li>
                    <li className="flex items-center text-base font-medium text-emerald-50/90">
                      <ArrowRight className="w-5 h-5 mr-3 text-emerald-400 flex-shrink-0" /> A/B Testing Video Creatives & Copy
                    </li>
                    <li className="flex items-center text-base font-medium text-emerald-50/90">
                      <ArrowRight className="w-5 h-5 mr-3 text-emerald-400 flex-shrink-0" /> Retargeting Funnels for Maximum ROAS
                    </li>
                  </ul>
                  <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-emerald-900/50">
                    <span className="text-sm font-bold text-emerald-300 bg-emerald-950/80 px-4 py-2 rounded-xl border border-emerald-500/30">
                      Starting at $299/mo
                    </span>
                    <Link href="/contact" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-2 text-sm font-bold text-white shadow-lg shadow-emerald-500/25 hover:from-emerald-400 hover:to-teal-400 transition-all">
                      Get Started <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
                <div className="lg:w-1/2 w-full">
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                    <div className="absolute inset-0 bg-emerald-500/10 group-hover:bg-transparent transition-colors z-10"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                      alt="Digital Marketing Analytics Dashboard" 
                      className="w-full h-[400px] object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
              </FadeIn>

              {/* Service 2 */}
              <FadeIn delay={0.2} direction="up">
              <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
                <div className="lg:w-1/2 space-y-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="inline-flex items-center rounded-full bg-teal-500/20 px-4 py-2 text-sm font-bold text-teal-300">
                      02 — Organic Growth
                    </div>
                    <div className="inline-flex items-center rounded-full bg-teal-500/10 border border-teal-500/30 px-3.5 py-1 text-xs font-bold text-teal-300">
                      Starting at $399/mo
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white">Technical SEO & Local Dominance</h3>
                  <p className="text-emerald-50/70 leading-relaxed text-lg">
                    Sustainable organic growth starts with technical excellence. We optimize your site architecture, build high-authority backlinks from prominent BD publishers, and create intent-driven content that ranks on the first page of Google.
                  </p>
                  <ul className="space-y-4 pt-4">
                    <li className="flex items-center text-base font-medium text-emerald-50/90">
                      <ArrowRight className="w-5 h-5 mr-3 text-teal-400 flex-shrink-0" /> Comprehensive Technical & Core Web Vitals Audits
                    </li>
                    <li className="flex items-center text-base font-medium text-emerald-50/90">
                      <ArrowRight className="w-5 h-5 mr-3 text-teal-400 flex-shrink-0" /> Local SEO & Google Business Profile Optimization
                    </li>
                    <li className="flex items-center text-base font-medium text-emerald-50/90">
                      <ArrowRight className="w-5 h-5 mr-3 text-teal-400 flex-shrink-0" /> High-Tier Outreach & Link Building
                    </li>
                  </ul>
                  <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-emerald-900/50">
                    <span className="text-sm font-bold text-teal-300 bg-teal-950/80 px-4 py-2 rounded-xl border border-teal-500/30">
                      Starting at $399/mo
                    </span>
                    <Link href="/contact" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 px-5 py-2 text-sm font-bold text-white shadow-lg shadow-teal-500/25 hover:from-teal-400 hover:to-emerald-400 transition-all">
                      Get Started <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
                <div className="lg:w-1/2 w-full">
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                    <div className="absolute inset-0 bg-teal-500/10 group-hover:bg-transparent transition-colors z-10"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                      alt="SEO Team Collaborating in Office" 
                      className="w-full h-[400px] object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
              </FadeIn>

              {/* Service 3 */}
              <FadeIn delay={0.4} direction="up">
              <div className="flex flex-col lg:flex-row gap-16 items-center">
                <div className="lg:w-1/2 space-y-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="inline-flex items-center rounded-full bg-green-500/20 px-4 py-2 text-sm font-bold text-green-300">
                      03 — Optimization
                    </div>
                    <div className="inline-flex items-center rounded-full bg-green-500/10 border border-green-500/30 px-3.5 py-1 text-xs font-bold text-green-300">
                      Starting at $199/mo
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white">Conversion Rate Optimization (CRO)</h3>
                  <p className="text-emerald-50/70 leading-relaxed text-lg">
                    Traffic is useless if it doesn't convert. We analyze user heatmaps and redesign your landing pages to ensure seamless checkout flows, particularly optimizing for local payment methods like bKash, SSLCommerz, and Cash on Delivery.
                  </p>
                  <ul className="space-y-4 pt-4">
                    <li className="flex items-center text-base font-medium text-emerald-50/90">
                      <ArrowRight className="w-5 h-5 mr-3 text-green-400 flex-shrink-0" /> Landing Page Design & Copywriting
                    </li>
                    <li className="flex items-center text-base font-medium text-emerald-50/90">
                      <ArrowRight className="w-5 h-5 mr-3 text-green-400 flex-shrink-0" /> Multivariate A/B Testing
                    </li>
                    <li className="flex items-center text-base font-medium text-emerald-50/90">
                      <ArrowRight className="w-5 h-5 mr-3 text-green-400 flex-shrink-0" /> Cart Abandonment Recovery Flows
                    </li>
                  </ul>
                  <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-emerald-900/50">
                    <span className="text-sm font-bold text-green-300 bg-green-950/80 px-4 py-2 rounded-xl border border-green-500/30">
                      Starting at $199/mo
                    </span>
                    <Link href="/contact" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 px-5 py-2 text-sm font-bold text-white shadow-lg shadow-green-500/25 hover:from-green-400 hover:to-emerald-400 transition-all">
                      Get Started <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
                <div className="lg:w-1/2 w-full">
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                    <div className="absolute inset-0 bg-green-500/10 group-hover:bg-transparent transition-colors z-10"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop" 
                      alt="UI UX Wireframe Testing" 
                      className="w-full h-[400px] object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
              </FadeIn>

              {/* Service 4 */}
              <FadeIn delay={0.5} direction="up">
              <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
                <div className="lg:w-1/2 space-y-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="inline-flex items-center rounded-full bg-yellow-500/20 px-4 py-2 text-sm font-bold text-yellow-300">
                      04 — Search & Display
                    </div>
                    <div className="inline-flex items-center rounded-full bg-yellow-500/10 border border-yellow-500/30 px-3.5 py-1 text-xs font-bold text-yellow-300">
                      Starting at $249/mo
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white">Google Ads Service</h3>
                  <p className="text-emerald-50/70 leading-relaxed text-lg">
                    Capture high-intent prospects at the exact moment they are searching for your products. We manage end-to-end Google Ads campaigns including Search, Display, YouTube, and Performance Max to dominate the search engine results page.
                  </p>
                  <ul className="space-y-4 pt-4">
                    <li className="flex items-center text-base font-medium text-emerald-50/90">
                      <ArrowRight className="w-5 h-5 mr-3 text-yellow-400 flex-shrink-0" /> Search Intent & Keyword Targeting
                    </li>
                    <li className="flex items-center text-base font-medium text-emerald-50/90">
                      <ArrowRight className="w-5 h-5 mr-3 text-yellow-400 flex-shrink-0" /> Performance Max & Shopping Campaigns
                    </li>
                    <li className="flex items-center text-base font-medium text-emerald-50/90">
                      <ArrowRight className="w-5 h-5 mr-3 text-yellow-400 flex-shrink-0" /> YouTube Ads & Remarketing
                    </li>
                  </ul>
                  <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-emerald-900/50">
                    <span className="text-sm font-bold text-yellow-300 bg-yellow-950/80 px-4 py-2 rounded-xl border border-yellow-500/30">
                      Starting at $249/mo
                    </span>
                    <Link href="/contact" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-yellow-500 to-amber-600 px-5 py-2 text-sm font-bold text-white shadow-lg shadow-yellow-500/25 hover:from-yellow-400 hover:to-amber-500 transition-all">
                      Get Started <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
                <div className="lg:w-1/2 w-full">
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                    <div className="absolute inset-0 bg-yellow-500/10 group-hover:bg-transparent transition-colors z-10"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop" 
                      alt="Google Ads and Analytics Dashboard" 
                      className="w-full h-[400px] object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
              </FadeIn>

              {/* Service 5 */}
              <FadeIn delay={0.6} direction="up">
              <div className="flex flex-col lg:flex-row gap-16 items-center">
                <div className="lg:w-1/2 space-y-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="inline-flex items-center rounded-full bg-blue-500/20 px-4 py-2 text-sm font-bold text-blue-300">
                      05 — Development
                    </div>
                    <div className="inline-flex items-center rounded-full bg-blue-500/10 border border-blue-500/30 px-3.5 py-1 text-xs font-bold text-blue-300">
                      Server from $49/mo | App from $499
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white">Web Services, Cloud Infrastructure & SaaS</h3>
                  <p className="text-emerald-50/70 leading-relaxed text-lg">
                    High-speed managed cloud server hosting, custom web development, e-commerce store builds, and scalable SaaS platforms optimized for user experience and server load.
                  </p>
                  <ul className="space-y-4 pt-4">
                    <li className="flex items-center text-base font-medium text-emerald-50/90">
                      <ArrowRight className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0" /> Managed Cloud Servers (Starting $49/mo)
                    </li>
                    <li className="flex items-center text-base font-medium text-emerald-50/90">
                      <ArrowRight className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0" /> Custom Full-Stack Web Development
                    </li>
                    <li className="flex items-center text-base font-medium text-emerald-50/90">
                      <ArrowRight className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0" /> Scalable SaaS MVP & Platform Builds
                    </li>
                  </ul>
                  <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-emerald-900/50">
                    <span className="text-sm font-bold text-blue-300 bg-blue-950/80 px-4 py-2 rounded-xl border border-blue-500/30">
                      Server from $49/mo · App from $499
                    </span>
                    <Link href="/contact" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-5 py-2 text-sm font-bold text-white shadow-lg shadow-blue-500/25 hover:from-blue-400 hover:to-cyan-400 transition-all">
                      Get Started <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
                <div className="lg:w-1/2 w-full">
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                    <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-transparent transition-colors z-10"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" 
                      alt="Coding and Web Development" 
                      className="w-full h-[400px] object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
              </FadeIn>

              {/* Service 6 */}
              <FadeIn delay={0.7} direction="up">
              <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
                <div className="lg:w-1/2 space-y-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="inline-flex items-center rounded-full bg-purple-500/20 px-4 py-2 text-sm font-bold text-purple-300">
                      06 — Operations
                    </div>
                    <div className="inline-flex items-center rounded-full bg-purple-500/10 border border-purple-500/30 px-3.5 py-1 text-xs font-bold text-purple-300">
                      Starting at $149/mo
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white">CRM & Business Automation</h3>
                  <p className="text-emerald-50/70 leading-relaxed text-lg">
                    Automate your operations to scale efficiently. We implement robust CRM systems, marketing automation workflows, and AI-driven solutions to nurture leads, manage customer data, and streamline your sales pipeline.
                  </p>
                  <ul className="space-y-4 pt-4">
                    <li className="flex items-center text-base font-medium text-emerald-50/90">
                      <ArrowRight className="w-5 h-5 mr-3 text-purple-400 flex-shrink-0" /> Custom CRM Setup & Integration
                    </li>
                    <li className="flex items-center text-base font-medium text-emerald-50/90">
                      <ArrowRight className="w-5 h-5 mr-3 text-purple-400 flex-shrink-0" /> Automated Email & SMS Marketing Funnels
                    </li>
                    <li className="flex items-center text-base font-medium text-emerald-50/90">
                      <ArrowRight className="w-5 h-5 mr-3 text-purple-400 flex-shrink-0" /> AI Chatbots for Instant Customer Support
                    </li>
                  </ul>
                  <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-emerald-900/50">
                    <span className="text-sm font-bold text-purple-300 bg-purple-950/80 px-4 py-2 rounded-xl border border-purple-500/30">
                      Starting at $149/mo
                    </span>
                    <Link href="/contact" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 px-5 py-2 text-sm font-bold text-white shadow-lg shadow-purple-500/25 hover:from-purple-400 hover:to-indigo-400 transition-all">
                      Get Started <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
                <div className="lg:w-1/2 w-full">
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                    <div className="absolute inset-0 bg-purple-500/10 group-hover:bg-transparent transition-colors z-10"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
                      alt="Business Automation and CRM Analytics" 
                      className="w-full h-[400px] object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Pricing & Managed Server Plans Section */}
        <section className="w-full py-24 bg-neutral-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-950/40 via-neutral-900 to-neutral-900"></div>
          <div className="container mx-auto px-4 max-w-7xl relative z-10">
            <FadeIn delay={0.1}>
              <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
                <div className="inline-flex items-center rounded-full bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                  <Server className="w-3.5 h-3.5 mr-2" /> Server & Growth Pricing
                </div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Flexible Infrastructure & Service Plans</h2>
                <p className="text-neutral-400 text-lg">
                  Transparent USD pricing for high-performance servers, cloud infrastructure, and data-driven marketing execution.
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
                      Deploy Server
                    </Link>
                  </div>
                </div>
              </FadeIn>

              {/* Card 2: Growth Application Infrastructure */}
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

              {/* Card 3: Performance Marketing & Operations */}
              <FadeIn delay={0.4} direction="up">
                <div className="h-full bg-neutral-800/60 backdrop-blur-sm rounded-3xl border border-neutral-700/60 p-8 flex flex-col justify-between hover:border-emerald-500/50 transition-all duration-300">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-6 text-teal-400">
                      <BarChart3 className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Performance & Ads Growth</h3>
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

            {/* Enterprise Grade Banner Callout */}
            <FadeIn delay={0.5} direction="up">
              <div className="bg-gradient-to-r from-emerald-950 via-teal-950 to-neutral-900 rounded-3xl border border-emerald-500/30 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
                <div className="space-y-3 text-center md:text-left max-w-3xl">
                  <div className="inline-flex items-center rounded-full bg-emerald-500/20 border border-emerald-400/30 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-300">
                    <Building2 className="w-3.5 h-3.5 mr-2" /> Enterprise Grade
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">Need Enterprise-Grade Custom Architecture?</h3>
                  <p className="text-emerald-100/70 text-base leading-relaxed">
                    Require multi-region server clusters, high-concurrency database failovers, dedicated DevOps, or custom multi-channel ad management? Get in touch with our team for bespoke enterprise solutions.
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

        {/* Value Proposition */}
        <section className="w-full py-24 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="space-y-4 p-8 bg-white rounded-2xl border border-neutral-100 shadow-sm">
                <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900">Measurable ROI</h3>
                <p className="text-neutral-600">
                  Every decision we make is backed by data. We focus on your bottom-line revenue metrics rather than vanity engagement numbers.
                </p>
              </div>
              <div className="space-y-4 p-8 bg-white rounded-2xl border border-neutral-100 shadow-sm">
                <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900">Radical Transparency</h3>
                <p className="text-neutral-600">
                  Total visibility into your campaigns. You get live analytics dashboards, clear attribution models, and honest reporting on ad spend.
                </p>
              </div>
              <div className="space-y-4 p-8 bg-white rounded-2xl border border-neutral-100 shadow-sm">
                <div className="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900">Proactive Partnership</h3>
                <p className="text-neutral-600">
                  No more waiting for updates. We function as an extension of your internal team with proactive weekly strategy alignments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Client Proof */}
        <section className="w-full py-24 bg-neutral-50 border-y border-neutral-200">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-neutral-900">Trusted by Local Industry Leaders</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-10 rounded-2xl border border-neutral-200 relative shadow-sm">
                <div className="text-7xl text-neutral-200 absolute top-4 left-6 font-serif">"</div>
                <p className="text-neutral-600 relative z-10 italic mb-8 text-lg leading-relaxed">
                  UpSpot Limited transformed our e-commerce acquisition model in Bangladesh. Within 6 months, our CPA dropped by 42% while overall volume scaled significantly. Their technical expertise is unmatched in the local market.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100"></div>
                  <div>
                    <h4 className="font-bold text-neutral-900">Tanvir Rahman</h4>
                    <p className="text-sm text-neutral-500">Director, Apex Retail BD</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-10 rounded-2xl border border-neutral-200 relative shadow-sm">
                <div className="text-7xl text-neutral-200 absolute top-4 left-6 font-serif">"</div>
                <p className="text-neutral-600 relative z-10 italic mb-8 text-lg leading-relaxed">
                  The team at UpSpot doesn't just run ads; they understand business economics and the nuances of the Dhaka consumer base. Their funnel optimization opened up entirely new revenue streams for us.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-teal-100"></div>
                  <div>
                    <h4 className="font-bold text-neutral-900">Sadia Islam</h4>
                    <p className="text-sm text-neutral-500">Founder, Luxe Attire</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="w-full py-32 bg-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-emerald-50/80 via-white to-white"></div>
          <div className="container mx-auto px-4 max-w-3xl space-y-8 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">Ready to accelerate your growth?</h2>
            <p className="text-xl text-neutral-600">
              Let's discuss your targets and build a systematic roadmap to achieve them in the Bangladeshi market and beyond.
            </p>
            <div className="pt-8">
              <a href="https://calendly.com/info-tonmoyorg/upspot-limited" target="_blank" rel="noopener noreferrer" className="inline-flex h-10 items-center justify-center rounded-md bg-gradient-to-r from-emerald-600 to-teal-600 px-6 text-sm font-bold text-white shadow-lg shadow-emerald-500/25 transition-all">
                Schedule a Strategy Call
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
