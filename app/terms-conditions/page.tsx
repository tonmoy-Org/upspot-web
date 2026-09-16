import FadeIn from "@/components/FadeIn";

export default function TermsConditionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-16 md:py-24 bg-gradient-to-br from-emerald-950 to-teal-950 border-b border-emerald-900/50">
          <div className="container mx-auto px-4 max-w-3xl text-center space-y-4">
            <FadeIn delay={0.1}>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Terms & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Conditions</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-emerald-100/70">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </FadeIn>
          </div>
        </section>

        <section className="w-full py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 max-w-3xl space-y-8 text-neutral-600">
            <FadeIn delay={0.3} direction="up">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-neutral-900">1. Agreement to Terms</h2>
              <p>
                By accessing our website at https://upspotlimited.com, you agree to be bound by these Terms and Conditions and agree that you are responsible for compliance with any applicable local laws. 
                If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>

              <h2 className="text-2xl font-bold text-neutral-900 mt-8">2. Services Rendered</h2>
              <p>
                UpSpot Limited provides digital marketing, performance advertising, SEO, and consultation services. 
                Specific deliverables, KPIs, timelines, and payment terms will be governed by a separate Master Service Agreement (MSA) signed between UpSpot Limited and the client.
              </p>

              <h2 className="text-2xl font-bold text-neutral-900 mt-8">3. Intellectual Property Rights</h2>
              <p>
                Unless otherwise stated, UpSpot Limited and/or its licensors own the intellectual property rights for all material on the website. 
                All intellectual property rights are reserved. 
              </p>
              <p>
                For client work, upon full payment of services rendered, clients retain ownership of their respective ad accounts, creative assets produced explicitly for their campaigns, and associated data, unless otherwise stipulated in the MSA.
              </p>

              <h2 className="text-2xl font-bold text-neutral-900 mt-8">4. Limitation of Liability</h2>
              <p>
                In no event shall UpSpot Limited or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on UpSpot Limited's website or the execution of digital marketing services, even if UpSpot Limited has been notified orally or in writing of the possibility of such damage.
              </p>

              <h2 className="text-2xl font-bold text-neutral-900 mt-8">5. Governing Law & Jurisdiction</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of Bangladesh. 
                You irrevocably submit to the exclusive jurisdiction of the courts located in Dhaka, Bangladesh for the resolution of any disputes.
              </p>

              <h2 className="text-2xl font-bold text-neutral-900 mt-8">6. Contact Information</h2>
              <p>For any inquiries regarding these terms, please contact us at:</p>
              <ul className="list-none space-y-2 mt-4 p-6 bg-neutral-50 rounded-xl border border-neutral-200">
                <li><strong>Company:</strong> UpSpot Limited</li>
                <li><strong>Email:</strong> upspotlimited@gmail.com</li>
                <li><strong>Address:</strong> Plot# 87, BNS Center, Sector-07, Uttara, Dhaka - 1230, Bangladesh</li>
              </ul>
            </div>
            </FadeIn>
          </div>
        </section>
      </main>
    </div>
  );
}
