"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

const STATS = [
  { label: "Industry Awards", value: "45+", count: 45 },
  { label: "Global Offices", value: "4", count: 4 },
  { label: "Support", value: "24/7", count: 24 },
  { label: "Project Success", value: "100%", count: 100 }
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
              <h2 className="text-4xl md:text-6xl font-black font-headline tracking-tighter leading-none">
                Where <span className="text-primary italic">Art</span> Meets Technology
              </h2>
            </div>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              <p>
                We are a global collective of designers, engineers, and visionaries dedicated to pushing the boundaries of what&apos;s possible. Our work transforms ordinary spaces into extraordinary experiences.
              </p>
              <p>
                From Olympic ceremonies to intimate gallery installations, we approach every project with the same commitment to excellence and innovation that has defined our studio for nearly two decades.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8">
              {STATS.map(stat => (
                <div key={stat.label} className="space-y-2 group">
                  <p className="text-4xl md:text-5xl font-black font-headline tracking-tighter transition-colors group-hover:text-primary">
                    {stat.value}
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className={cn("relative aspect-[4/5] bg-card border border-border overflow-hidden opacity-0", isVisible && "animate-fade-up [animation-delay:0.3s]")}>
            <Image
              src={studioImage?.imageUrl || 'https://placehold.co/800x1000'}
              alt="Vortex Immersive Studio"
              fill
              className="object-cover transition-transform duration-1000 hover:scale-105"
              data-ai-hint="creative office"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay pointer-events-none" />
            <div className="absolute bottom-12 left-12 right-12 p-8 bg-background/80 backdrop-blur-xl border border-white/10 space-y-2">
              <p className="text-[10px] font-black uppercase tracking-widest text-primary">Est. 2007</p>
              <p className="text-sm font-bold tracking-tight">Pioneering the future of digital environments from our New York HQ.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
