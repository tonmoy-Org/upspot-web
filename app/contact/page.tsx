"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-neutral-900">
      <main className="flex-1">
        {/* Header Section */}
        <section className="w-full py-20 md:py-32 relative overflow-hidden bg-gradient-to-br from-emerald-950 to-teal-950 border-b border-emerald-900/50">
          <div className="container mx-auto px-4 max-w-4xl text-center space-y-6 relative z-10">
            <FadeIn delay={0.1}>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Touch</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl text-emerald-50/80 max-w-2xl mx-auto leading-relaxed">
                Schedule a discovery call or reach out to our Dhaka-based team directly to discuss your growth targets.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Contact Split Section */}
        <section className="w-full py-24 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Calendly Booking System */}
              <FadeIn delay={0.3} direction="right" className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-neutral-900">Schedule a Call</h2>
                  <p className="text-neutral-600">Book a time that works for you using our calendar below.</p>
                </div>
                
                {/* Calendly Inline Widget */}
                <div className="w-full h-[600px] border border-neutral-200 rounded-2xl overflow-hidden shadow-lg bg-white">
                  <iframe 
                    src="https://calendly.com/upspotlimited?hide_gdpr_banner=1" 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    title="Schedule a Call via Calendly"
                    className="w-full h-full"
                  />
                </div>
              </FadeIn>

              {/* Contact Information & Form */}
              <FadeIn delay={0.4} direction="left" className="space-y-12">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-neutral-900">Direct Contact</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-8 bg-neutral-50 rounded-2xl border border-neutral-200 flex flex-col gap-4 hover:border-emerald-300 transition-colors shadow-sm">
                      <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                        <Phone className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-neutral-900">Phone & WhatsApp</h4>
                        <a href="tel:+8801673142097" className="text-neutral-600 hover:text-emerald-700 mt-1 block font-medium">
                          +880 1673142097
                        </a>
                      </div>
                    </div>
                    <div className="p-8 bg-neutral-50 rounded-2xl border border-neutral-200 flex flex-col gap-4 hover:border-teal-300 transition-colors shadow-sm">
                      <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                        <Mail className="w-6 h-6 text-teal-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-neutral-900">Email Us</h4>
                        <a href="mailto:upspotlimited@gmail.com" className="text-neutral-600 hover:text-teal-700 mt-1 block font-medium break-all">
                          upspotlimited@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 bg-neutral-50 rounded-2xl border border-neutral-200 flex flex-col gap-4 shadow-sm">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-2">
                      <MapPin className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                      <div>
                        <h4 className="font-bold text-neutral-900 text-base mb-2">Business Office</h4>
                        <p className="text-neutral-600 leading-relaxed text-sm">
                          2nd Floor, House# 25, Road# 05,<br />Sector# 06, Uttara, Dhaka - 1230,<br />Bangladesh
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-neutral-900 text-base mb-2">Registered Office</h4>
                        <p className="text-neutral-600 leading-relaxed text-sm">
                          Plot# 87, BNS Center, Sector-07,<br />Uttara, Dhaka - 1230,<br />Bangladesh
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 pt-10 border-t border-neutral-100">
                  <h2 className="text-2xl font-bold text-neutral-900">Send a Message</h2>
                  <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-neutral-700">Full Name</label>
                        <input type="text" className="w-full h-12 px-4 rounded-xl border border-neutral-300 bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-neutral-700">Business Email</label>
                        <input type="email" className="w-full h-12 px-4 rounded-xl border border-neutral-300 bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500" placeholder="john@company.com" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-neutral-700">Website URL</label>
                        <input type="url" className="w-full h-12 px-4 rounded-xl border border-neutral-300 bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500" placeholder="https://company.com.bd" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-neutral-700">Monthly Ad Spend</label>
                        <select defaultValue="" className="w-full h-12 px-4 rounded-xl border border-neutral-300 bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500">
                          <option value="" disabled>Select an option</option>
                          <option value="< ৳100k">Under ৳100,000</option>
                          <option value="৳100k - ৳500k">৳100,000 - ৳500,000</option>
                          <option value="৳500k - ৳1M">৳500,000 - ৳1,000,000</option>
                          <option value="৳1M+">Over ৳1,000,000</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-neutral-700">How can we help?</label>
                      <textarea className="w-full p-4 rounded-xl border border-neutral-300 bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 min-h-[140px]" placeholder="Tell us about your current challenges and goals..."></textarea>
                    </div>
                    <button type="submit" className="flex h-10 w-full items-center justify-center rounded-md bg-gradient-to-r from-emerald-600 to-teal-600 px-6 text-sm font-bold text-white shadow-lg shadow-emerald-500/25 transition-all">
                      Submit Inquiry
                    </button>
                  </form>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
