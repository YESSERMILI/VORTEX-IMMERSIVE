"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Navbar } from '@/components/sections/navbar';
import { Footer } from '@/components/sections/footer';
import { WORKS } from '@/components/sections/works';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { ArrowRight, ArrowLeft, ArrowUpRight, Zap, Filter } from 'lucide-react';

const CATEGORIES = ['all', 'ceremony', 'concert', 'brand', 'installation'];

export default function WorksPage() {
  const router = useRouter();
  const [filter, setFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredWorks = filter === 'all' ? WORKS : WORKS.filter(w => w.category === filter);

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
                <span>Selected Works</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-8xl font-black font-headline tracking-tighter leading-[1] md:leading-[0.85] uppercase">
                THE <span className="text-primary italic">SPECTACLE</span> <br />
                IN MOTION
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed max-w-sm italic">
                Adventizer: Energizing your brand communication through high-impact visual storytelling and technical precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-16 md:top-24 z-40 bg-background/80 backdrop-blur-xl border-b border-border py-4">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="flex items-center justify-between gap-8">
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary hidden md:flex">
              <Filter className="w-3 h-3" />
              <span>Filter Projects</span>
            </div>
            <div className="flex flex-wrap gap-2 overflow-x-auto no-scrollbar pb-1">
              {CATEGORIES.map(cat => (
                <Button
                  key={cat}
                  variant={filter === cat ? 'default' : 'ghost'}
                  className={cn(
                    "rounded-none capitalize text-[9px] md:text-[10px] font-black tracking-[0.2em] px-4 md:px-6 h-10 transition-all",
                    filter === cat ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-primary"
                  )}
                  onClick={() => setFilter(cat)}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
            {filteredWorks.map((work, i) => {
              const imageData = PlaceHolderImages.find(img => img.id === work.imageId);
              return (
                <div 
                  key={work.id}
                  className={cn(
                    "group space-y-6 md:space-y-10 transition-all duration-1000",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                  )}
                  style={{ transitionDelay: `${0.1 * (i % 2)}s` }}
                >
                  <Link 
                    href={`/works/${work.id}`}
                    className="relative aspect-video block overflow-hidden bg-card border border-border grayscale hover:grayscale-0 transition-all duration-700"
                  >
                    <Image
                      src={imageData?.imageUrl || 'https://placehold.co/1200x800'}
                      alt={work.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border border-white/20 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-primary hover:border-primary">
                      <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-primary-foreground transition-transform group-hover:rotate-45" />
                    </div>
                  </Link>

                  <div className="space-y-4 md:space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-2">
                        <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-primary">{work.category} / {work.year}</span>
                        <h3 className="text-2xl md:text-4xl font-black font-headline uppercase tracking-tighter leading-none group-hover:text-primary transition-colors">
                          {work.title}
                        </h3>
                      </div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground border border-border px-4 py-2 hidden sm:block">
                        {work.scale}
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed italic max-w-xl">
                      {work.desc}
                    </p>
                    <Button variant="link" className="p-0 text-xs font-black uppercase tracking-widest text-primary h-auto group-hover:pl-2 transition-all" asChild>
                      <Link href={`/works/${work.id}`}>
                        Explore Case Study
                        <ArrowRight className="ml-2 w-3.5 h-3.5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-40 bg-card border-y border-border overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="flex flex-col items-center text-center space-y-8 md:space-y-12">
            <Zap className="w-12 h-12 text-primary animate-pulse" />
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-black font-headline tracking-tighter uppercase leading-[0.9] max-w-4xl mx-auto">
              READY TO <span className="text-primary italic">ENERGIZE</span> YOUR NEXT VISION?
            </h2>
            <p className="text-muted-foreground text-sm md:text-xl max-w-xl mx-auto italic">
              Adventizer helps you bridge the gap between static communication and high-energy engagement.
            </p>
            <Button size="lg" className="h-14 md:h-16 px-10 md:px-12 rounded-none bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform" asChild>
              <Link href="/#contact">Ignite a Project</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
