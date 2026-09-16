import { CheckCircle2, TrendingUp, Users, Target } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-neutral-900">
      <main className="flex-1">
        {/* Header Section */}
        <section className="w-full py-20 md:py-32 relative overflow-hidden bg-gradient-to-br from-emerald-950 to-teal-950 border-b border-emerald-900/50">
          <div className="container mx-auto px-4 max-w-4xl text-center space-y-6 relative z-10">
            <FadeIn delay={0.1}>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">UpSpot</span> Limited
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl text-emerald-50/80 max-w-2xl mx-auto leading-relaxed">
                We are a data-driven digital marketing agency committed to engineering predictable growth systems for Bangladeshi B2B and E-commerce businesses looking to scale locally and globally.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="w-full py-24 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <FadeIn delay={0.3}>
              <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-2/5 flex justify-center">
                  <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-emerald-50 bg-neutral-100">
                    <Image 
                      src="/founder.png" 
                      alt="Shameem Ahmmed" 
                      fill 
                      className="object-cover"
                      sizes="(max-width: 768px) 256px, 320px"
                    />
                  </div>
                </div>
                <div className="lg:w-3/5 space-y-8">
                  <div className="space-y-6">
                    <div className="inline-flex items-center rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-700">
                      Leadership
                    </div>
                    <h2 className="text-4xl font-bold text-neutral-900">Meet the Founder</h2>
                    <h3 className="text-2xl text-neutral-700 font-medium">Shameem Ahmmed</h3>
                    <p className="text-neutral-600 leading-relaxed text-lg">
                      Under the leadership of Shameem Ahmmed, UpSpot Limited was founded on a singular principle: agencies should be accountable for revenue, not just vanity metrics. 
                      We maintain rigorous operational standards ensuring every campaign is structured, measured, and optimized for maximum capital efficiency in a competitive market.
                    </p>
                    <p className="text-neutral-600 leading-relaxed text-lg">
                      With extensive experience in digital performance marketing, growth scaling, and business strategy, Shameem built UpSpot to bridge the gap between creative execution and data-driven profitability. He actively oversees the strategic direction of our client accounts, ensuring consistent, high-ROI outcomes.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-neutral-100">
                    <div className="p-6 bg-neutral-50 rounded-2xl border border-neutral-200 shadow-sm">
                      <CheckCircle2 className="w-6 h-6 mb-4 text-emerald-500" />
                      <h4 className="font-bold mb-2 text-neutral-900 text-lg">Strict Accountability</h4>
                      <p className="text-neutral-600 text-sm leading-relaxed">Complete transparency on ad spend and performance KPIs. You own your data.</p>
                    </div>
                    <div className="p-6 bg-neutral-50 rounded-2xl border border-neutral-200 shadow-sm">
                      <TrendingUp className="w-6 h-6 mb-4 text-teal-500" />
                      <h4 className="font-bold mb-2 text-neutral-900 text-lg">Data-Driven</h4>
                      <p className="text-neutral-600 text-sm leading-relaxed">Every decision is backed by statistical significance and rigorous testing protocols.</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Core Principles */}
        <section className="w-full py-32 bg-neutral-50 relative overflow-hidden border-y border-neutral-200">
          <div className="container mx-auto px-4 max-w-5xl text-center space-y-20">
            <FadeIn delay={0.1}>
              <h2 className="text-4xl font-bold text-neutral-900">Our Core Operating Principles</h2>
            </FadeIn>
            <FadeIn delay={0.2} direction="up">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                <div className="space-y-6">
                  <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-emerald-600 to-teal-500">
                    01
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900">Radical Transparency</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    We don't hide behind vanity metrics like "impressions" or "likes". We provide clear, unfiltered access to campaign data, sales attribution, and strategy rationales.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-emerald-600 to-teal-500">
                    02
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900">Proactive Partnership</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    We act as an extension of your business, proactively bringing new opportunities, creative angles, and technical insights to the table rather than waiting for instructions.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-emerald-600 to-teal-500">
                    03
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900">Continuous Iteration</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    The digital landscape evolves daily. We maintain a relentless testing velocity across platforms to stay ahead of algorithm changes and competitor moves.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="w-full py-32 bg-white">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <FadeIn delay={0.1}>
              <h2 className="text-4xl font-bold text-neutral-900 mb-16">Driving Your Future</h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                <div className="space-y-6 p-10 bg-gradient-to-br from-white to-neutral-50 rounded-3xl border border-neutral-200 shadow-lg">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center">
                    <Target className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-neutral-900">Our Mission</h3>
                  <p className="text-neutral-600 leading-relaxed text-lg">
                    To eliminate the guesswork from digital marketing in Bangladesh by leveraging precision data analytics, relentless creative testing, and strategic foresight to drive measurable, bottom-line revenue for our partners.
                  </p>
                </div>
                <div className="space-y-6 p-10 bg-gradient-to-br from-white to-neutral-50 rounded-3xl border border-neutral-200 shadow-lg">
                  <div className="w-16 h-16 rounded-2xl bg-teal-50 flex items-center justify-center">
                    <Users className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-neutral-900">Our Vision</h3>
                  <p className="text-neutral-600 leading-relaxed text-lg">
                    To establish ourselves as the premier global growth partner for forward-thinking Bangladeshi brands, setting the international standard for transparency, operational excellence, and marketing ROI.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="pt-20">
                <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-emerald-600 to-teal-600 px-8 text-base font-bold text-white shadow-lg shadow-emerald-500/25 transition-all">
                  Partner with Us
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
    </div>
  );
}
