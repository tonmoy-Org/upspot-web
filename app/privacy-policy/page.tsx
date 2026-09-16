import FadeIn from "@/components/FadeIn";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-16 md:py-24 bg-gradient-to-br from-emerald-950 to-teal-950 border-b border-emerald-900/50">
          <div className="container mx-auto px-4 max-w-3xl text-center space-y-4">
            <FadeIn delay={0.1}>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Policy</span>
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
              <h2 className="text-2xl font-bold text-neutral-900">1. Information We Collect</h2>
              <p>
                UpSpot Limited ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. 
                This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
              </p>

              <h2 className="text-2xl font-bold text-neutral-900 mt-8">2. Data We Collect</h2>
              <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
              </ul>

              <h2 className="text-2xl font-bold text-neutral-900 mt-8">3. How We Use Your Data</h2>
              <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                <li>Where we need to comply with a legal obligation.</li>
              </ul>

              <h2 className="text-2xl font-bold text-neutral-900 mt-8">4. Data Security & Retention</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. 
                In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
              </p>
              <p>
                We will only retain your personal data for as long as reasonably necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements.
              </p>

              <h2 className="text-2xl font-bold text-neutral-900 mt-8">5. Contact Details</h2>
              <p>If you have any questions about this privacy policy or our privacy practices, please contact us in the following ways:</p>
              <ul className="list-none space-y-2 mt-4 p-6 bg-neutral-50 rounded-xl border border-neutral-200">
                <li><strong>Full name of legal entity:</strong> UpSpot Limited</li>
                <li><strong>Email address:</strong> upspotlimited@gmail.com</li>
                <li><strong>Postal address:</strong> Plot# 87, BNS Center, Sector-07, Uttara, Dhaka - 1230, Bangladesh</li>
              </ul>
            </div>
            </FadeIn>
          </div>
        </section>
      </main>
    </div>
  );
}
