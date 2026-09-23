'use client';

import { useState } from 'react';
import { BarChart3, Smartphone, Users, CheckCircle2 } from 'lucide-react';

interface CroImageGalleryProps {
  darkTheme?: boolean;
}

export default function CroImageGallery({ darkTheme = false }: CroImageGalleryProps) {
  const images = [
    {
      id: 'dashboard',
      title: 'Live CRO & Analytics Dashboard',
      subtitle: 'Real-time conversion metrics, A/B testing & revenue tracking',
      src: '/images/cro-dashboard.png',
      alt: 'Real Conversion Rate Optimization Dashboard with live analytics and metrics',
      icon: BarChart3,
      badge: 'Live Analytics'
    },
    {
      id: 'checkout',
      title: 'High-Converting Checkout Flow',
      subtitle: 'Optimized for local payment gateways (bKash, Cards & Cash on Delivery)',
      src: '/images/cro-checkout.png',
      alt: 'Optimized e-commerce payment checkout screen on smartphone',
      icon: Smartphone,
      badge: 'Local Payment UX'
    },
    {
      id: 'team',
      title: 'CRO Strategy & Optimization Team',
      subtitle: 'Data analysts and UI/UX strategists reviewing heatmap recordings',
      src: '/images/cro-team.png',
      alt: 'Digital marketing and CRO strategy team analyzing conversion data in office',
      icon: Users,
      badge: 'Expert Team'
    }
  ];

  const [activeTab, setActiveTab] = useState(0);
  const activeImage = images[activeTab];

  return (
    <div className="w-full space-y-4">
      {/* Main Feature Image Container */}
      <div className={`relative rounded-2xl overflow-hidden border shadow-2xl transition-all group ${
        darkTheme ? 'border-white/10 bg-neutral-900' : 'border-neutral-200 bg-white'
      }`}>
        <div className="relative h-[380px] md:h-[420px] w-full overflow-hidden">
          <img
            key={activeImage.id}
            src={activeImage.src}
            alt={activeImage.alt}
            className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-all duration-700 animate-fadeIn"
          />
          {/* Overlay gradient for text clarity */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none" />
          
          {/* Top Badge */}
          <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500 text-white shadow-lg shadow-emerald-500/30">
              <CheckCircle2 className="w-3.5 h-3.5" />
              {activeImage.badge}
            </span>
          </div>

          {/* Bottom Title & Subtitle */}
          <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
            <h4 className="text-lg font-bold tracking-tight">{activeImage.title}</h4>
            <p className="text-xs md:text-sm text-neutral-300 line-clamp-1">{activeImage.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Interactive Tabs / Collection Selector */}
      <div className="grid grid-cols-3 gap-2 p-1.5 rounded-xl border bg-neutral-900/60 backdrop-blur-md border-emerald-500/20">
        {images.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeTab === index;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(index)}
              className={`flex items-center justify-center md:justify-start gap-2 p-2.5 rounded-lg text-xs md:text-sm font-semibold transition-all ${
                isActive
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-white' : 'text-emerald-400'}`} />
              <span className="hidden md:inline truncate">{item.title.split(' ')[0]} {item.title.split(' ')[1]}</span>
              <span className="md:hidden truncate">{item.badge}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
