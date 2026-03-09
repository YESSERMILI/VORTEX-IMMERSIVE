
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

const CATEGORIES = ['all', 'ceremony', 'concert', 'brand', 'installation'];

export const WORKS = [
  { id: "world-cup-ceremony", title: "World Cup Opening Ceremony", category: "ceremony", year: "2022", client: "FIFA", desc: "A breathtaking spectacle that combined projection mapping, kinetic sculptures, and live performance to celebrate global unity.", scale: "Stadium", imageId: 'work-1' },
  { id: "electric-symphony", title: "Electric Symphony World Tour", category: "concert", year: "2023", client: "Universal Music", desc: "360-degree immersive visuals for a world-renowned DJ, featuring real-time reactive content synchronized with audio frequencies.", scale: "Arena Tour", imageId: 'work-2' },
  { id: "future-tech-summit", title: "Future Tech Summit", category: "brand", year: "2024", client: "TechCorp", desc: "Product launch transformed into a futuristic journey using holographic displays and interactive floor projections.", scale: "Convention Center", imageId: 'work-3' },
  { id: "digital-ocean", title: "Digital Ocean Pavilion", category: "installation", year: "2023", client: "Expo 2023", desc: "An interactive museum installation where visitors navigate through a responsive digital ocean using gesture controls.", scale: "Museum", imageId: 'work-4' },
  { id: "aurora-borealis", title: "Aurora Borealis Experience", category: "installation", year: "2022", client: "Art Foundation", desc: "Permanent light installation recreating the northern lights using advanced LED arrays and atmospheric effects.", scale: "Gallery", imageId: 'work-5' },
  { id: "global-brand-summit", title: "Global Brand Summit", category: "brand", year: "2024", client: "Fortune 500", desc: "Executive conference featuring architectural projection mapping that transformed the venue throughout the event.", scale: "Hotel", imageId: 'work-6' }
];

export const Works = () => {
  const [filter, setFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    
    const element = document.getElementById('works-section');
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);

  const filteredWorks = filter === 'all' ? WORKS : WORKS.filter(w => w.category === filter);

  return (
    <section className="py-32 bg-background" id="works">
      <div id="works-section" className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        <div className={cn("flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 opacity-0", isVisible && "animate-fade-up")}>
          <div className="space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Portfolio</span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter uppercase font-headline">Selected <span className="text-primary italic">Works</span></h2>
            <p className="text-muted-foreground max-w-lg italic text-sm">Explore our portfolio of groundbreaking projects across industries and continents.</p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <Button
                key={cat}
                variant={filter === cat ? 'default' : 'outline'}
                className="rounded-none capitalize text-[10px] font-black tracking-[0.2em] px-8 h-12"
                onClick={() => setFilter(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorks.map((work, i) => {
            const imageData = PlaceHolderImages.find(img => img.id === work.imageId);
            return (
              <Link 
                href={`/works/${work.id}`}
                key={work.id}
                className={cn(
                  "group relative aspect-[4/3] bg-card border border-border overflow-hidden cursor-pointer opacity-0 block",
                  isVisible && "animate-fade-up"
                )}
                style={{ animationDelay: `${0.1 * i}s` }}
              >
                <Image
                  src={imageData?.imageUrl || 'https://placehold.co/600x450'}
                  alt={work.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  data-ai-hint={imageData?.imageHint || "creative technology"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                  <div className="space-y-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-[9px] uppercase tracking-[0.3em] text-primary font-black">{work.category}</span>
                    <h3 className="text-xl font-bold font-headline uppercase leading-tight">{work.title}</h3>
                    <div className="flex items-center gap-4 text-[10px] text-muted-foreground font-black uppercase tracking-widest pt-4">
                      <span>{work.year}</span>
                      <div className="w-1 h-1 bg-primary/40" />
                      <span>{work.client}</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-8 right-8 w-10 h-10 flex items-center justify-center border border-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
