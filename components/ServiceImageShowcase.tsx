'use client';

import { useState } from 'react';
import { BarChart3, TrendingUp, CheckCircle2, ShieldCheck, Zap, Layers } from 'lucide-react';

export interface ServiceImageItem {
  id: string;
  title: string;
  subtitle: string;
  src: string;
  alt: string;
  badge: string;
  statLabel?: string;
  statValue?: string;
}

interface ServiceImageShowcaseProps {
  serviceId: string;
  primaryColor?: 'emerald' | 'teal' | 'green' | 'yellow' | 'blue' | 'purple';
  darkTheme?: boolean;
  images: ServiceImageItem[];
}

export default function ServiceImageShowcase({
  serviceId,
  primaryColor = 'emerald',
  darkTheme = true,
  images
}: ServiceImageShowcaseProps) {
  const [activeTab, setActiveTab] = useState(0);
  const activeImage = images[activeTab] || images[0];

  const colorStyles = {
    emerald: {
      badgeBg: 'bg-emerald-500',
      borderActive: 'border-emerald-500/40',
      tabActive: 'from-emerald-600 to-teal-600',
      textAccent: 'text-emerald-400',
    },
    teal: {
      badgeBg: 'bg-teal-500',
      borderActive: 'border-teal-500/40',
      tabActive: 'from-teal-600 to-emerald-600',
      textAccent: 'text-teal-400',
    },
    green: {
      badgeBg: 'bg-green-500',
      borderActive: 'border-green-500/40',
      tabActive: 'from-green-600 to-emerald-600',
      textAccent: 'text-green-400',
    },
    yellow: {
      badgeBg: 'bg-amber-500',
      borderActive: 'border-yellow-500/40',
      tabActive: 'from-yellow-600 to-amber-600',
      textAccent: 'text-yellow-400',
    },
    blue: {
      badgeBg: 'bg-blue-500',
      borderActive: 'border-blue-500/40',
      tabActive: 'from-blue-600 to-cyan-600',
      textAccent: 'text-blue-400',
    },
    purple: {
      badgeBg: 'bg-purple-500',
      borderActive: 'border-purple-500/40',
      tabActive: 'from-purple-600 to-indigo-600',
      textAccent: 'text-purple-400',
    },
  }[primaryColor];

  return (
    <div className="w-full space-y-3">
      {/* Main Image Container */}
      <div className={`relative rounded-2xl overflow-hidden border shadow-2xl transition-all group ${
        darkTheme ? 'border-white/10 bg-neutral-950' : 'border-neutral-200 bg-white'
      }`}>
        <div className="relative h-[360px] md:h-[400px] w-full overflow-hidden">
          <img
            key={activeImage.id}
            src={activeImage.src}
            alt={activeImage.alt}
            className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-all duration-700 animate-fadeIn"
          />
          {/* Subtle gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent z-10 pointer-events-none" />

          {/* Top Badges */}
          <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between gap-2">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg ${colorStyles.badgeBg}`}>
              <CheckCircle2 className="w-3.5 h-3.5" />
              {activeImage.badge}
            </span>

            {activeImage.statValue && (
              <div className="bg-black/70 backdrop-blur-md border border-white/10 px-3 py-1 rounded-xl text-right">
                <span className="block text-[10px] text-neutral-400 uppercase font-semibold tracking-wider">
                  {activeImage.statLabel || 'Verified Metric'}
                </span>
                <span className={`text-sm font-extrabold ${colorStyles.textAccent}`}>
                  {activeImage.statValue}
                </span>
              </div>
            )}
          </div>

          {/* Bottom Title & Subtitle */}
          <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
            <h4 className="text-base md:text-lg font-bold tracking-tight">{activeImage.title}</h4>
            <p className="text-xs text-neutral-300 line-clamp-1">{activeImage.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Interactive Selector Tabs (If multiple images provided) */}
      {images.length > 1 && (
        <div className={`grid grid-cols-${images.length} gap-1.5 p-1.5 rounded-xl border backdrop-blur-md ${
          darkTheme ? 'bg-neutral-900/80 border-white/10' : 'bg-neutral-100 border-neutral-200'
        }`}>
          {images.map((item, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center justify-center gap-1.5 p-2 rounded-lg text-xs font-semibold transition-all ${
                  isActive
                    ? `bg-gradient-to-r ${colorStyles.tabActive} text-white shadow-md`
                    : darkTheme
                    ? 'text-neutral-400 hover:text-white hover:bg-white/5'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/50'
                }`}
              >
                <Layers className={`w-3.5 h-3.5 flex-shrink-0 ${isActive ? 'text-white' : colorStyles.textAccent}`} />
                <span className="truncate">{item.badge}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
