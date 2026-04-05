"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from '@/components/sections/navbar';
import { Footer } from '@/components/sections/footer';
import { ContactForm } from '@/components/sections/contact-form';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Mail, Phone, MapPin, Globe } from 'lucide-react';

export default function GetEnergizedPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 md:pt-48 pb-12 md:pb-24 border-b border-border">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <Button 
            variant="ghost" 
            className="mb-8 md:mb-12 pl-0 text-muted-foreground hover:text-primary transition-colors gap-2 group h-auto py-0"
            onClick={() => router.push('/')}
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Return Home</span>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-end">
            <div className="lg:col-span-8 space-y-4 md:space-y-8">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Project Brief</span>
              <h1 className="text-3xl sm:text-5xl lg:text-8xl font-black font-headline tracking-tighter leading-[1] md:leading-[0.85] uppercase">
                LET'S <span className="text-primary italic">ENERGIZE</span> <br />
                YOUR VISION
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-sm italic">
                Ready to transform your brand communication? Our directors are available for bespoke strategy consultations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
            {/* Left: Info */}
            <div className="lg:col-span-4 space-y-12 md:space-y-20">
              <div className="space-y-8">
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Contact Details</h3>
                <div className="space-y-8">
                  <div className="flex gap-6 group">
                    <div className="w-10 h-10 flex items-center justify-center border border-border group-hover:border-primary transition-colors">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-[9px] uppercase font-black text-muted-foreground tracking-widest mb-1">Email us</p>
                      <p className="font-bold text-sm md:text-base">hello@adventizer.com</p>
                    </div>
                  </div>
                  <div className="flex gap-6 group">
                    <div className="w-10 h-10 flex items-center justify-center border border-border group-hover:border-primary transition-colors">
                      <Phone className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-[9px] uppercase font-black text-muted-foreground tracking-widest mb-1">Call us</p>
                      <p className="font-bold text-sm md:text-base">+1 (234) ADVENT</p>
                    </div>
                  </div>
                  <div className="flex gap-6 group">
                    <div className="w-10 h-10 flex items-center justify-center border border-border group-hover:border-primary transition-colors">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-[9px] uppercase font-black text-muted-foreground tracking-widest mb-1">HQ Office</p>
                      <p className="font-bold text-sm md:text-base">New York, NY 10013</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 border border-border bg-card space-y-4">
                <div className="flex items-center gap-2 text-primary">
                  <Globe className="w-4 h-4" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Global Support</span>
                </div>
                <p className="text-[10px] md:text-[11px] text-muted-foreground leading-relaxed italic">
                  Adventizer provides 24/7 strategic support for high-energy brand activations across five continents.
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-8">
              <div className="bg-card p-8 md:p-16 border border-border relative">
                <div className="max-w-2xl">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
