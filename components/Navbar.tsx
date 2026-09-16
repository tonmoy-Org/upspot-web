"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur-md relative">
      <div className="container mx-auto max-w-7xl px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/logo-v2.png" 
              alt="UpSpot Logo" 
              width={500} 
              height={80} 
              className="mix-blend-multiply"
              style={{ objectFit: 'contain', width: '140px', height: 'auto' }}
              priority
            />
          </Link>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-neutral-600 hover:text-emerald-600 transition-colors">Home</Link>
          <Link href="/about" className="text-sm font-medium text-neutral-600 hover:text-emerald-600 transition-colors">About</Link>
          <Link href="/services" className="text-sm font-medium text-neutral-600 hover:text-emerald-600 transition-colors">Services</Link>
          <Link href="/contact" className="text-sm font-medium text-neutral-600 hover:text-emerald-600 transition-colors">Contact</Link>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <Link href="/contact" className="inline-flex h-10 items-center justify-center rounded-md bg-gradient-to-r from-emerald-600 to-teal-600 px-6 text-sm font-bold text-white shadow-lg shadow-emerald-500/25 transition-all">
            Schedule a Call
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden p-2 text-neutral-600 hover:text-emerald-600 transition-colors" 
          aria-label="Menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-neutral-200 shadow-xl flex flex-col py-4 px-6 gap-2 animate-in slide-in-from-top-2 duration-300">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-base font-medium text-neutral-600 hover:text-emerald-600 transition-colors py-3 border-b border-neutral-100">Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="text-base font-medium text-neutral-600 hover:text-emerald-600 transition-colors py-3 border-b border-neutral-100">About</Link>
          <Link href="/services" onClick={() => setIsOpen(false)} className="text-base font-medium text-neutral-600 hover:text-emerald-600 transition-colors py-3 border-b border-neutral-100">Services</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="text-base font-medium text-neutral-600 hover:text-emerald-600 transition-colors py-3 border-b border-neutral-100">Contact</Link>
          <div className="pt-4 pb-2">
            <Link href="/contact" onClick={() => setIsOpen(false)} className="inline-flex h-12 w-full items-center justify-center rounded-md bg-gradient-to-r from-emerald-600 to-teal-600 px-6 text-base font-bold text-white shadow-lg shadow-emerald-500/25 transition-all">
              Schedule a Call
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
