import Link from 'next/link';
import { ArrowRight, BarChart3, LineChart, Target, Zap, CheckCircle2, TrendingUp, ShieldCheck, LayoutDashboard } from 'lucide-react';
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
                <Link href="/contact" className="inline-flex h-10 items-center justify-center rounded-md bg-gradient-to-r from-emerald-600 to-teal-600 px-6 text-sm font-bold text-white shadow-lg shadow-emerald-500/25 transition-all w-full sm:w-auto">
                  Schedule a Strategy Call
                </Link>
                <Link href="/services" className="inline-flex h-10 items-center justify-center rounded-md border border-neutral-200 bg-white px-6 text-sm font-medium text-neutral-700 shadow-sm transition-all hover:bg-neutral-50 w-full sm:w-auto">
                  Explore Our Services <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </FadeIn>
            
            {/* Trust Metrics */}
            <FadeIn delay={0.5} direction="up">
              <div className="pt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-neutral-100 mt-16">
                <div className="space-y-2">
                  <h4 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">৳500M+</h4>
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
                  <div className="inline-flex items-center rounded-full bg-emerald-500/20 px-4 py-2 text-sm font-bold text-emerald-300">
                    01 — Acquisition
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white">Performance Marketing & F-Commerce</h3>
                  <p className="text-emerald-50/70 leading-relaxed text-lg">
                    We deploy algorithmic media buying strategies across Meta (Facebook & Instagram) and Google. By continuously testing local creatives, lookalike audiences, and automated bid strategies, we lower CPA and scale your most profitable campaigns for the Bangladeshi consumer.
                  </p>
                  <ul className="space-y-4 pt-4">
                    <li className="flex items-center text-base font-medium text-emerald-50/90">
                      <ArrowRight className="w-5 h-5 mr-3 text-emerald-400" /> Advanced Meta Pixel & CAPI Implementation
                    </li>
                    <li className="flex items-center text-base font-medium text-emerald-50/90">
                      <ArrowRight className="w-5 h-5 mr-3 text-emerald-400" /> A/B Testing Video Creatives & Copy
                    </li>
                    <li className="flex items-center text-base font-medium text-emerald-50/90">
                      <ArrowRight className="w-5 h-5 mr-3 text-emerald-400" /> Retargeting Funnels for Maximum ROAS
                    </li>
                  </ul>
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
                  <div className="inline-flex items-center rounded-full bg-teal-500/20 px-4 py-2 text-sm font-bold text-teal-300">
                    02 — Organic Growth
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white">Technical SEO & Local Dominance</h3>
                  <p className="text-emerald-50/70 leading-relaxed text-lg">
                    Sustainable organic growth starts with technical excellence. We optimize your site architecture, build high-authority backlinks from prominent BD publishers, and create intent-driven content that ranks on the first page of Google.
                  </p>
                  <ul className="space-y-4 pt-4">
                    <li className="flex items-center text-base font-medium text-emerald-50/90">
                      <ArrowRight className="w-5 h-5 mr-3 text-teal-400" /> Comprehensive Technical & Core Web Vitals Audits
                    </li>
                    <li className="flex items-center text-base font-medium text-emerald-50/90">
                      <ArrowRight className="w-5 h-5 mr-3 text-teal-400" /> Local SEO & Google Business Profile Optimization
                    </li>
                    <li className="flex items-center text-base font-medium text-emerald-50/90">
                      <ArrowRight className="w-5 h-5 mr-3 text-teal-400" /> High-Tier Outreach & Link Building
                    </li>
                  </ul>
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
                  <div className="inline-flex items-center rounded-full bg-green-500/20 px-4 py-2 text-sm font-bold text-green-300">
                    03 — Optimization
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white">Conversion Rate Optimization (CRO)</h3>
                  <p className="text-emerald-50/70 leading-relaxed text-lg">
                    Traffic is useless if it doesn't convert. We analyze user heatmaps and redesign your landing pages to ensure seamless checkout flows, particularly optimizing for local payment methods like bKash, SSLCommerz, and Cash on Delivery.
                  </p>
                  <ul className="space-y-4 pt-4">
                    <li className="flex items-center text-base font-medium text-emerald-50/90">
                      <ArrowRight className="w-5 h-5 mr-3 text-green-400" /> Landing Page Design & Copywriting
                    </li>
                    <li className="flex items-center text-base font-medium text-emerald-50/90">
                      <ArrowRight className="w-5 h-5 mr-3 text-green-400" /> Multivariate A/B Testing
                    </li>
                    <li className="flex items-center text-base font-medium text-emerald-50/90">
                      <ArrowRight className="w-5 h-5 mr-3 text-green-400" /> Cart Abandonment Recovery Flows
                    </li>
                  </ul>
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
                  <div className="inline-flex items-center rounded-full bg-yellow-500/20 px-4 py-2 text-sm font-bold text-yellow-300">
                    04 — Search & Display
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white">Google Ads Service</h3>
                  <p className="text-emerald-50/70 leading-relaxed text-lg">
                    Capture high-intent prospects at the exact moment they are searching for your products. We manage end-to-end Google Ads campaigns including Search, Display, YouTube, and Performance Max to dominate the search engine results page.
                  </p>
                  <ul className="space-y-4 pt-4">
                    <li className="flex items-center text-base font-medium text-emerald-50/90">
                      <ArrowRight className="w-5 h-5 mr-3 text-yellow-400" /> Search Intent & Keyword Targeting
                    </li>
                    <li className="flex items-center text-base font-medium text-emerald-50/90">
                      <ArrowRight className="w-5 h-5 mr-3 text-yellow-400" /> Performance Max & Shopping Campaigns
                    </li>
                    <li className="flex items-center text-base font-medium text-emerald-50/90">
                      <ArrowRight className="w-5 h-5 mr-3 text-yellow-400" /> YouTube Ads & Remarketing
                    </li>
                  </ul>
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
                  <div className="inline-flex items-center rounded-full bg-blue-500/20 px-4 py-2 text-sm font-bold text-blue-300">
                    05 — Development
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white">Web Services & SaaS Projects</h3>
                  <p className="text-emerald-50/70 leading-relaxed text-lg">
                    Custom web development, e-commerce store builds, and scalable SaaS platforms. We create fast, responsive, and aesthetically stunning applications optimized for user experience, search engine visibility, and lead generation.
                  </p>
                  <ul className="space-y-4 pt-4">
                    <li className="flex items-center text-base font-medium text-emerald-50/90">
                      <ArrowRight className="w-5 h-5 mr-3 text-blue-400" /> Custom Full-Stack Web Development
                    </li>
                    <li className="flex items-center text-base font-medium text-emerald-50/90">
                      <ArrowRight className="w-5 h-5 mr-3 text-blue-400" /> High-Performance E-commerce Architectures
                    </li>
                    <li className="flex items-center text-base font-medium text-emerald-50/90">
                      <ArrowRight className="w-5 h-5 mr-3 text-blue-400" /> Scalable SaaS MVP & Platform Builds
                    </li>
                  </ul>
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
                  <div className="inline-flex items-center rounded-full bg-purple-500/20 px-4 py-2 text-sm font-bold text-purple-300">
                    06 — Operations
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white">CRM & Business Automation</h3>
                  <p className="text-emerald-50/70 leading-relaxed text-lg">
                    Automate your operations to scale efficiently. We implement robust CRM systems, marketing automation workflows, and AI-driven solutions to nurture leads, manage customer data, and streamline your sales pipeline.
                  </p>
                  <ul className="space-y-4 pt-4">
                    <li className="flex items-center text-base font-medium text-emerald-50/90">
                      <ArrowRight className="w-5 h-5 mr-3 text-purple-400" /> Custom CRM Setup & Integration
                    </li>
                    <li className="flex items-center text-base font-medium text-emerald-50/90">
                      <ArrowRight className="w-5 h-5 mr-3 text-purple-400" /> Automated Email & SMS Marketing Funnels
                    </li>
                    <li className="flex items-center text-base font-medium text-emerald-50/90">
                      <ArrowRight className="w-5 h-5 mr-3 text-purple-400" /> AI Chatbots for Instant Customer Support
                    </li>
                  </ul>
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
              <Link href="/contact" className="inline-flex h-10 items-center justify-center rounded-md bg-gradient-to-r from-emerald-600 to-teal-600 px-6 text-sm font-bold text-white shadow-lg shadow-emerald-500/25 transition-all">
                Let's Discuss Your Targets
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
