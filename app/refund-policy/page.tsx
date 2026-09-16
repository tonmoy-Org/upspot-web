import FadeIn from "@/components/FadeIn";

export default function RefundPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-16 md:py-24 bg-gradient-to-br from-emerald-950 to-teal-950 border-b border-emerald-900/50">
          <div className="container mx-auto px-4 max-w-3xl text-center space-y-4">
            <FadeIn delay={0.1}>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Refund <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Policy</span>
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
              <p>
                At UpSpot Limited, we are committed to delivering high-quality digital marketing and consulting services. 
                Due to the nature of our work, the time invested by our team, and the costs associated with campaign setup and execution, we adhere to a strict refund policy as detailed below.
              </p>

              <h2 className="text-2xl font-bold text-neutral-900 mt-8">1. Agency Retainers & Service Fees</h2>
              <p>
                All monthly retainer fees and setup fees paid to UpSpot Limited are <strong>non-refundable</strong>. 
                When a client signs a service agreement and makes a payment, our team immediately allocates time, resources, and proprietary strategies toward their account.
              </p>

              <h2 className="text-2xl font-bold text-neutral-900 mt-8">2. Third-Party Ad Spend</h2>
              <p>
                It is explicitly understood that any advertising budgets allocated to third-party platforms (e.g., Meta Ads, Google Ads, TikTok Ads) are paid directly by the client to those platforms.
              </p>
              <div className="p-4 bg-emerald-50 rounded-lg border-l-4 border-emerald-500">
                <strong>Crucial Clarification:</strong> UpSpot Limited does not hold, process, or refund third-party ad spend. Once ad spend is consumed by platforms like Meta or Google, it is strictly non-refundable under any circumstances.
              </div>

              <h2 className="text-2xl font-bold text-neutral-900 mt-8">3. Cancellations</h2>
              <p>
                Clients may cancel their month-to-month service agreements by providing a standard 30-day written notice, as stipulated in their specific master service agreement (MSA). 
                No prorated refunds will be issued for partial months of service if a cancellation occurs mid-cycle.
              </p>

              <h2 className="text-2xl font-bold text-neutral-900 mt-8">4. Exceptional Circumstances</h2>
              <p>
                In the rare event of a billing error or duplicate charge directly on behalf of UpSpot Limited's service fees, clients must notify us within 7 days of the transaction. Validated billing errors will be rectified and refunded to the original payment method within 5-10 business days.
              </p>

              <h2 className="text-2xl font-bold text-neutral-900 mt-8">Contact Us</h2>
              <p>For any questions regarding billing or this policy, please reach out to:</p>
              <ul className="list-none space-y-2 mt-4 p-6 bg-neutral-50 rounded-xl border border-neutral-200">
                <li><strong>Email:</strong> upspotlimited@gmail.com</li>
                <li><strong>Phone:</strong> +880 1673142097</li>
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
