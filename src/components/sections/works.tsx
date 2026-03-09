
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { ExternalLink, Play } from 'lucide-react';

const CATEGORIES = ['all', 'ceremony', 'concert', 'brand', 'installation'];

const WORKS = [
  { id: 1, title: "World Cup Opening Ceremony", category: "ceremony", year: "2022", client: "FIFA", desc: "A breathtaking spectacle that combined projection mapping, kinetic sculptures, and live performance to celebrate global unity.", scale: "Stadium", image: PlaceHolderImages.find(i => i.id === 'work-1')?.imageUrl },
  { id: 2, title: "Electric Symphony World Tour", category: "concert", year: "2023", client: "Universal Music", desc: "360-degree immersive visuals for a world-renowned DJ, featuring real-time reactive content synchronized with audio frequencies.", scale: "Arena Tour", image: PlaceHolderImages.find(i => i.id === 'work-2')?.imageUrl },
  { id: 3, title: "Future Tech Summit", category: "brand", year: "2024", client: "TechCorp", desc: "Product launch transformed into a futuristic journey using holographic displays and interactive floor projections.", scale: "Convention Center", image: PlaceHolderImages.find(i => i.id === 'work-3')?.imageUrl },
  { id: 4, title: "Digital Ocean Pavilion", category: "installation", year: "2023", client: "Expo 2023", desc: "An interactive museum installation where visitors navigate through a responsive digital ocean using gesture controls.", scale: "Museum", image: PlaceHolderImages.find(i => i.id === 'work-4')?.imageUrl },
  { id: 5, title: "Aurora Borealis Experience", category: "installation", year: "2022", client: "Art Foundation", desc: "Permanent light installation recreating the northern lights using advanced LED arrays and atmospheric effects.", scale: "Gallery", image: PlaceHolderImages.find(i => i.id === 'work-5')?.imageUrl },
  { id: 6, title: "Global Brand Summit", category: "brand", year: "2024", client: "Fortune 500", desc: "Executive conference featuring architectural projection mapping that transformed the venue throughout the event.", scale: "Hotel", image: PlaceHolderImages.find(i => i.id === 'work-6')?.imageUrl }
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
    <section className="py-24 bg-background" id="works">
      <div id="works-section" className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        <div className={cn("flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 opacity-0", isVisible && "animate-fade-up")}>
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Selected <span className="text-primary">Works</span></h2>
            <p className="text-muted-foreground max-w-lg">Explore our portfolio of groundbreaking projects across industries and continents.</p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <Button
                key={cat}
                variant={filter === cat ? 'default' : 'outline'}
                className="rounded-none capitalize text-xs font-bold tracking-widest px-6"
                onClick={() => setFilter(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorks.map((work, i) => (
            <Dialog key={work.id}>
              <DialogTrigger asChild>
                <div 
                  className={cn(
                    "group relative aspect-[4/3] bg-card border border-border overflow-hidden cursor-pointer opacity-0",
                    isVisible && "animate-fade-up"
                  )}
                  style={{ animationDelay: `${0.1 * i}s` }}
                >
                  <Image
                    src={work.image || 'https://placehold.co/600x450'}
                    alt={work.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    data-ai-hint="creative visual"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-primary mb-2 font-bold">{work.category}</span>
                    <h3 className="text-xl font-bold font-headline mb-2">{work.title}</h3>
                    <div className="flex gap-4 text-xs text-muted-foreground font-medium">
                      <span>{work.year}</span>
                      <div className="w-1 h-1 rounded-full bg-primary/40 mt-1.5" />
                      <span>{work.client}</span>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0 border-border bg-card rounded-none gap-0">
                <div className="relative aspect-video w-full bg-black">
                  <Image
                    src={work.image || 'https://placehold.co/1200x675'}
                    alt={work.title}
                    fill
                    className="object-cover opacity-60"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button variant="outline" size="icon" className="w-20 h-20 rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-sm hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 fill-white stroke-none ml-1" />
                    </Button>
                  </div>
                </div>
                <div className="p-8 md:p-12 space-y-8">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                    <div className="space-y-4">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">{work.category}</span>
                      <DialogHeader className="p-0">
                        <DialogTitle className="text-3xl md:text-4xl font-black font-headline tracking-tighter">{work.title}</DialogTitle>
                      </DialogHeader>
                    </div>
                    <Button variant="outline" className="rounded-none group h-12">
                      View Live Project
                      <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Button>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-border">
                    <div>
                      <p className="text-[10px] uppercase text-muted-foreground font-bold tracking-widest mb-1">Year</p>
                      <p className="font-bold">{work.year}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase text-muted-foreground font-bold tracking-widest mb-1">Client</p>
                      <p className="font-bold">{work.client}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase text-muted-foreground font-bold tracking-widest mb-1">Scale</p>
                      <p className="font-bold">{work.scale}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase text-muted-foreground font-bold tracking-widest mb-1">Region</p>
                      <p className="font-bold">Global</p>
                    </div>
                  </div>

                  <div className="max-w-2xl">
                    <p className="text-muted-foreground leading-relaxed italic text-lg">{work.desc}</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};
