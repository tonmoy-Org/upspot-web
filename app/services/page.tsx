import { Search, PenTool, LayoutDashboard, Target, ArrowRight } from "lucide-react";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

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
                <div className="inline-flex items-center rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700">
                  01 — Acquisition
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">Performance Marketing & F-Commerce</h2>
                <p className="text-neutral-600 leading-relaxed text-lg">
                  We deploy algorithmic media buying strategies across Meta (Facebook & Instagram) and Google. By continuously testing local creatives, lookalike audiences, and automated bid strategies, we lower CPA and scale your most profitable campaigns for the Bangladeshi consumer.
                </p>
                <ul className="space-y-4 pt-4">
                  <li className="flex items-center text-base font-medium text-neutral-700">
                    <ArrowRight className="w-5 h-5 mr-3 text-emerald-500" /> Advanced Meta Pixel & CAPI Implementation
                  </li>
                  <li className="flex items-center text-base font-medium text-neutral-700">
                    <ArrowRight className="w-5 h-5 mr-3 text-emerald-500" /> A/B Testing Video Creatives & Copy
                  </li>
                  <li className="flex items-center text-base font-medium text-neutral-700">
                    <ArrowRight className="w-5 h-5 mr-3 text-emerald-500" /> Retargeting Funnels for Maximum ROAS
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/2 w-full">
                <div className="relative rounded-2xl overflow-hidden border border-neutral-200 shadow-xl group">
                  <div className="absolute inset-0 bg-emerald-600/5 group-hover:bg-transparent transition-colors z-10"></div>
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
                <div className="inline-flex items-center rounded-full bg-teal-50 px-4 py-2 text-sm font-bold text-teal-700">
                  02 — Organic Growth
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">Technical SEO & Local Dominance</h2>
                <p className="text-neutral-600 leading-relaxed text-lg">
                  Sustainable organic growth starts with technical excellence. We optimize your site architecture, build high-authority backlinks from prominent BD publishers, and create intent-driven content that ranks on the first page of Google.
                </p>
                <ul className="space-y-4 pt-4">
                  <li className="flex items-center text-base font-medium text-neutral-700">
                    <ArrowRight className="w-5 h-5 mr-3 text-teal-500" /> Comprehensive Technical & Core Web Vitals Audits
                  </li>
                  <li className="flex items-center text-base font-medium text-neutral-700">
                    <ArrowRight className="w-5 h-5 mr-3 text-teal-500" /> Local SEO & Google Business Profile Optimization
                  </li>
                  <li className="flex items-center text-base font-medium text-neutral-700">
                    <ArrowRight className="w-5 h-5 mr-3 text-teal-500" /> High-Tier Outreach & Link Building
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/2 w-full">
                <div className="relative rounded-2xl overflow-hidden border border-neutral-200 shadow-xl group">
                  <div className="absolute inset-0 bg-teal-600/5 group-hover:bg-transparent transition-colors z-10"></div>
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
                <div className="inline-flex items-center rounded-full bg-green-50 px-4 py-2 text-sm font-bold text-green-700">
                  03 — Optimization
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">Conversion Rate Optimization (CRO)</h2>
                <p className="text-neutral-600 leading-relaxed text-lg">
                  Traffic is useless if it doesn&apos;t convert. We analyze user heatmaps and redesign your landing pages to ensure seamless checkout flows, particularly optimizing for local payment methods like bKash, SSLCommerz, and Cash on Delivery.
                </p>
                <ul className="space-y-4 pt-4">
                  <li className="flex items-center text-base font-medium text-neutral-700">
                    <ArrowRight className="w-5 h-5 mr-3 text-green-500" /> Landing Page Design & Copywriting
                  </li>
                  <li className="flex items-center text-base font-medium text-neutral-700">
                    <ArrowRight className="w-5 h-5 mr-3 text-green-500" /> Multivariate A/B Testing
                  </li>
                  <li className="flex items-center text-base font-medium text-neutral-700">
                    <ArrowRight className="w-5 h-5 mr-3 text-green-500" /> Cart Abandonment Recovery Flows
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/2 w-full">
                <div className="relative rounded-2xl overflow-hidden border border-neutral-200 shadow-xl group">
                  <div className="absolute inset-0 bg-green-600/5 group-hover:bg-transparent transition-colors z-10"></div>
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
                  <div className="inline-flex items-center rounded-full bg-yellow-50 px-4 py-2 text-sm font-bold text-yellow-700">
                    04 — Search & Display
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">Google Ads Service</h2>
                  <p className="text-neutral-600 leading-relaxed text-lg">
                    Capture high-intent prospects at the exact moment they are searching for your products. We manage end-to-end Google Ads campaigns including Search, Display, YouTube, and Performance Max to dominate the search engine results page.
                  </p>
                  <ul className="space-y-4 pt-4">
                    <li className="flex items-center text-base font-medium text-neutral-700">
                      <ArrowRight className="w-5 h-5 mr-3 text-yellow-500" /> Search Intent & Keyword Targeting
                    </li>
                    <li className="flex items-center text-base font-medium text-neutral-700">
                      <ArrowRight className="w-5 h-5 mr-3 text-yellow-500" /> Performance Max & Shopping Campaigns
                    </li>
                    <li className="flex items-center text-base font-medium text-neutral-700">
                      <ArrowRight className="w-5 h-5 mr-3 text-yellow-500" /> YouTube Ads & Remarketing
                    </li>
                  </ul>
                </div>
                <div className="lg:w-1/2 w-full">
                  <div className="relative rounded-2xl overflow-hidden border border-neutral-200 shadow-xl group">
                    <div className="absolute inset-0 bg-yellow-600/5 group-hover:bg-transparent transition-colors z-10"></div>
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
                  <div className="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
                    05 — Development
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">Web Services & SaaS Projects</h2>
                  <p className="text-neutral-600 leading-relaxed text-lg">
                    Custom web development, e-commerce store builds, and scalable SaaS platforms. We create fast, responsive, and aesthetically stunning applications optimized for user experience, search engine visibility, and lead generation.
                  </p>
                  <ul className="space-y-4 pt-4">
                    <li className="flex items-center text-base font-medium text-neutral-700">
                      <ArrowRight className="w-5 h-5 mr-3 text-blue-500" /> Custom Full-Stack Web Development
                    </li>
                    <li className="flex items-center text-base font-medium text-neutral-700">
                      <ArrowRight className="w-5 h-5 mr-3 text-blue-500" /> High-Performance E-commerce Architectures
                    </li>
                    <li className="flex items-center text-base font-medium text-neutral-700">
                      <ArrowRight className="w-5 h-5 mr-3 text-blue-500" /> Scalable SaaS MVP & Platform Builds
                    </li>
                  </ul>
                </div>
                <div className="lg:w-1/2 w-full">
                  <div className="relative rounded-2xl overflow-hidden border border-neutral-200 shadow-xl group">
                    <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-transparent transition-colors z-10"></div>
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
                  <div className="inline-flex items-center rounded-full bg-purple-50 px-4 py-2 text-sm font-bold text-purple-700">
                    06 — Operations
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">CRM & Business Automation</h2>
                  <p className="text-neutral-600 leading-relaxed text-lg">
                    Automate your operations to scale efficiently. We implement robust CRM systems, marketing automation workflows, and AI-driven solutions to nurture leads, manage customer data, and streamline your sales pipeline.
                  </p>
                  <ul className="space-y-4 pt-4">
                    <li className="flex items-center text-base font-medium text-neutral-700">
                      <ArrowRight className="w-5 h-5 mr-3 text-purple-500" /> Custom CRM Setup & Integration
                    </li>
                    <li className="flex items-center text-base font-medium text-neutral-700">
                      <ArrowRight className="w-5 h-5 mr-3 text-purple-500" /> Automated Email & SMS Marketing Funnels
                    </li>
                    <li className="flex items-center text-base font-medium text-neutral-700">
                      <ArrowRight className="w-5 h-5 mr-3 text-purple-500" /> AI Chatbots for Instant Customer Support
                    </li>
                  </ul>
                </div>
                <div className="lg:w-1/2 w-full">
                  <div className="relative rounded-2xl overflow-hidden border border-neutral-200 shadow-xl group">
                    <div className="absolute inset-0 bg-purple-600/5 group-hover:bg-transparent transition-colors z-10"></div>
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
