
"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { ArrowRight, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const STATS = [
  { label: "Industry Awards", value: "45+", count: 45, id: "awards" },
  { label: "Global Offices", value: "4", count: 4, id: "offices" },
  { label: "Support", value: "24/7", count: 24, id: "support" },
  { label: "Project Success", value: "100%", count: 100, id: "success" }
];

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const studioImage = PlaceHolderImages.find(i => i.id === 'about-studio');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    const element = document.getElementById('about-section');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-32 bg-background overflow-hidden" id="about">
      <div id="about-section" className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <div className={cn("space-y-12 opacity-0", isVisible && "animate-fade-up")}>
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">About Us</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black font-headline tracking-tighter leading-none">
                Where <span className="text-primary italic">Art</span> Meets Tech
              </h2>
            </div>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              <p>
                We are a global collective of designers, engineers, and visionaries dedicated to pushing the boundaries of what&apos;s possible. Our work transforms ordinary spaces into extraordinary experiences.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {STATS.map(stat => (
                <div key={stat.id} className="space-y-2 group">
                  <p className="text-4xl md:text-5xl font-black font-headline tracking-tighter transition-all group-hover:text-primary group-hover:translate-x-1">
                    {stat.value}
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-6 pt-8">
              <Button className="rounded-none h-14 px-8 group text-[10px] font-black uppercase tracking-[0.2em]" asChild>
                <Link href="/team">
                  Meet the Collective
                  <Users className="ml-2 w-4 h-4 transition-transform group-hover:scale-110" />
                </Link>
              </Button>
              <Link href="/about" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.3em] text-primary group self-center">
                Studio Philosophy
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
              </Link>
            </div>
          </div>

          <Link href="/about" className={cn("relative aspect-[4/5] bg-card border border-border overflow-hidden opacity-0 group cursor-pointer", isVisible && "animate-fade-up [animation-delay:0.3s]")}>
            <Image
              src={studioImage?.imageUrl || 'https://placehold.co/800x1000'}
              alt="Vortex Immersive Studio"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              data-ai-hint={studioImage?.imageHint || "tech office"}
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay pointer-events-none group-hover:bg-primary/5 transition-all" />
            <div className="absolute bottom-12 left-12 right-12 p-8 bg-background/80 backdrop-blur-xl border border-white/10 space-y-2 transition-transform group-hover:-translate-y-2">
              <p className="text-[10px] font-black uppercase tracking-widest text-primary">Est. 2007</p>
              <p className="text-sm font-bold tracking-tight">Pioneering the future of digital environments from our New York HQ.</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
