"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Navbar } from '@/components/sections/navbar';
import { Footer } from '@/components/sections/footer';
import { SERVICES } from '@/components/sections/services';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  ArrowLeft,
  Layers, 
  Monitor, 
  ShieldCheck, 
  PlayCircle,
  Cpu,
  Zap,
  Target,
  BarChart3
} from 'lucide-react';
import { cn } from '@/lib/utils';

const ICON_MAP: Record<string, any> = {
  "projection-mapping": <Layers className="w-10 h-10" />,
  "stage-visuals": <Monitor className="w-10 h-10" />,
  "interactive-installations": <ShieldCheck className="w-10 h-10" />,
  "content-production": <PlayCircle className="w-10 h-10" />
};

export default function ServicesPage() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 md:pt-48 pb-16 md:pb-24 border-b border-border">
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
              <div className="flex items-center gap-3 text-[10px] font-black tracking-[0.4em] text-primary uppercase">
                <div className="w-8 h-px bg-primary" />
                <span>Capabilities</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-8xl font-black font-headline tracking-tighter leading-[1] md:leading-[0.85] uppercase">
                ENERGIZING <br />
                <span className="text-primary italic">COMMUNICATION</span>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed max-sm italic">
                Adventizer: where creative strategy meets technical brilliance. We transform messages into high-energy digital spectacles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
            {SERVICES.map((service, i) => (
              <div 
                key={service.id} 
                className={cn(
                  "group relative bg-card p-10 md:p-16 lg:p-20 overflow-hidden transition-all duration-700 hover:bg-background",
                  isVisible ? "reveal-visible" : "reveal-hidden"
                )}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="relative z-10 space-y-8">
                  <div className="text-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 origin-left">
                    {ICON_MAP[service.id] || <Zap className="w-10 h-10" />}
                  </div>
                  
                  <div className="space-y-4">
                    <h2 className="text-2xl md:text-4xl font-black font-headline uppercase tracking-tighter leading-none group-hover:text-primary transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed italic max-w-md">
                      {service.desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {service.tags.map(tag => (
                      <span key={tag} className="text-[9px] font-black uppercase tracking-[0.2em] border border-border px-3 py-1 text-muted-foreground group-hover:border-primary/30 group-hover:text-primary transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button variant="link" className="p-0 text-xs font-black uppercase tracking-widest text-primary h-auto group-hover:pl-2 transition-all" asChild>
                    <Link href={`/services/${service.id}`}>
                      View Service Profile
                      <ArrowRight className="ml-2 w-3.5 h-3.5" />
                    </Link>
                  </Button>
                </div>

                {/* Decorative Background Element */}
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                   <div className="text-8xl font-black font-headline select-none">0{i + 1}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 md:py-40 bg-card border-y border-border">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="max-w-3xl mb-16 md:mb-24 space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Methodology</span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black font-headline tracking-tighter uppercase leading-tight">
              THE <span className="text-primary italic">ADVENTIZER</span> WAY
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {[
              { icon: <Target className="w-6 h-6" />, title: "Strategy First", desc: "We don't just build tech; we build engagement. Every pixel serves a purpose in your brand narrative." },
              { icon: <Cpu className="w-6 h-6" />, title: "Technical Edge", desc: "Utilizing Unreal Engine 5, real-time CGI, and custom AI behavior modeling to stay ahead of the curve." },
              { icon: <BarChart3 className="w-6 h-6" />, title: "Impact Driven", desc: "We measure success through emotional resonance and audience connection. High energy, high results." }
            ].map((item, i) => (
              <div key={i} className="space-y-6 group">
                <div className="w-14 h-14 flex items-center justify-center border border-border group-hover:border-primary group-hover:bg-primary/5 transition-all">
                  <div className="text-primary">{item.icon}</div>
                </div>
                <h3 className="text-xl font-black font-headline uppercase tracking-tight">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed italic">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="bg-primary text-primary-foreground p-12 md:p-24 relative overflow-hidden text-center flex flex-col items-center">
            <div className="absolute inset-0 bg-black/5 mix-blend-overlay" />
            <div className="relative z-10 max-w-2xl space-y-8">
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-black font-headline tracking-tighter uppercase leading-[0.9]">
                READY TO <br />
                <span className="italic">IGNITE?</span>
              </h2>
              <p className="text-primary-foreground/80 text-sm md:text-lg font-medium italic">
                Our creative directors are ready to discuss your next high-energy brand communication project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="rounded-none h-14 px-10 font-black uppercase tracking-widest text-[10px] bg-black text-white hover:bg-black/90 border-none" asChild>
                  <Link href="/get-energized">
                    Send a Project Brief
                    <ArrowRight className="ml-3 w-4 h-4" />
                  </Link>
                </Button>
                
                <Button size="lg" className="rounded-none h-14 px-10 bg-transparent border border-black text-black hover:bg-black hover:text-white transition-all text-[10px] font-black uppercase tracking-widest" asChild>
                  <Link href="/get-energized">Get Energized Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
