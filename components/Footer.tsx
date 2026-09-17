import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full border-t border-emerald-900/50 bg-gradient-to-br from-emerald-950 to-teal-950 text-emerald-50/70">
      <div className="container mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Section 1 */}
          <div className="space-y-6">
            <Link href="/" className="inline-block bg-white px-4 py-3 rounded-2xl shadow-lg">
              <Image 
                src="/logo-v2.png" 
                alt="UpSpot Logo" 
                width={400} 
                height={100} 
                className="mix-blend-multiply"
                style={{ objectFit: 'contain', width: '120px', height: 'auto' }}
              />
            </Link>
            <p className="text-sm leading-relaxed max-w-xs text-emerald-100/70">
              Bangladesh's premier digital growth partner. We engineer predictable revenue systems through data-driven advertising and technical excellence.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-sm text-emerald-100/70 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-sm text-emerald-100/70 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-sm text-emerald-100/70 hover:text-white transition-colors">Our Services</Link></li>
              <li><Link href="/contact" className="text-sm text-emerald-100/70 hover:text-white transition-colors">Contact</Link></li>
              <li><a href="https://calendly.com/info-tonmoyorg/upspot-limited" target="_blank" rel="noopener noreferrer" className="text-sm text-emerald-300 font-medium hover:text-white transition-colors">Book a Call (Calendly)</a></li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="/privacy-policy" className="text-sm text-emerald-100/70 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/refund-policy" className="text-sm text-emerald-100/70 hover:text-white transition-colors">Refund Policy</Link></li>
              <li><Link href="/terms-conditions" className="text-sm text-emerald-100/70 hover:text-white transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+8801673142097" className="text-sm hover:text-white transition-colors font-medium text-emerald-400">
                  Phone: +880 1673142097
                </a>
              </li>
              <li>
                <a href="mailto:upspotlimited@gmail.com" className="text-sm hover:text-white transition-colors">
                  Email: upspotlimited@gmail.com
                </a>
              </li>
              <li className="text-sm">
                <span className="block text-white mb-1 font-medium">Registered Office:</span>
                Plot# 87, BNS Center, Sector-07,<br />Uttara, Dhaka - 1230, Bangladesh
              </li>
              <li className="text-sm">
                <span className="block text-white mb-1 font-medium">Business Office:</span>
                2nd Floor, House# 25, Road# 05,<br />Sector# 06, Uttara, Dhaka - 1230, Bangladesh
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-emerald-800/50 flex flex-col items-center justify-center text-center">
          <p className="text-sm text-emerald-100/70">
            © {new Date().getFullYear()} UpSpot Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
