
"use client";

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Navbar } from '@/components/sections/navbar';
import { Footer } from '@/components/sections/footer';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowLeft, Globe, Award, Users, Rocket } from 'lucide-react';

const TEAM = [
  { name: "Julian Vortex", role: "Creative Director", seed: "team1" },
  { name: "Sarah Chen", role: "Lead Engineer", seed: "team2" },
  { name: "Marcus Thorne", role: "Interactive Designer", seed: "team3" },
  { name: "Elena Rossi", role: "Content Producer", seed: "team4" }
];

export default function AboutPage() {
  const router = useRouter();
  const mainImage = PlaceHolderImages.find(img => img.id === 'about-studio');

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-48 pb-24 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <Button 
            variant="ghost" 
            className="mb-12 pl-0 text-muted-foreground hover:text-primary transition-colors gap-2"
            onClick={() => router.push('/')}
          >
            <ArrowLeft className="w-4 h-4" />
            Return Home
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div className="space-y-8">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">The Studio</span>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black font-headline tracking-tighter leading-[0.85]">
                PIONEERING <br />
                <span className="text-primary italic">DIGITAL</span> REALMS
              </h1>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg mb-4">
              Founded in 2007, Vortex Immersive was born from the intersection of architectural mapping and experimental interactive media.
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 border-y border-border">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: <Globe className="w-6 h-6" />, title: "Global Reach", desc: "Executing large-scale spectacles across 5 continents." },
              { icon: <Award className="w-6 h-6" />, title: "Award Winning", desc: "Recognized by industry leaders for excellence in creative tech." },
              { icon: <Users className="w-6 h-6" />, title: "Human Centered", desc: "We focus on the emotional connection between tech and audience." },
              { icon: <Rocket className="w-6 h-6" />, title: "Future Ready", desc: "Constantly researching AI and real-time rendering frontiers." }
            ].map((item, i) => (
              <div key={i} className="space-y-6 group">
                <div className="w-12 h-12 flex items-center justify-center border border-border group-hover:border-primary group-hover:bg-primary/5 transition-all">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold font-headline uppercase tracking-tight">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Content */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            <div className="relative aspect-[4/5] border border-border overflow-hidden">
              <Image 
                src={mainImage?.imageUrl || 'https://placehold.co/800x1000'} 
                alt="Our Process" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl font-black font-headline tracking-tighter">OUR <span className="text-primary">PHILOSOPHY</span></h2>
                <div className="space-y-6 text-muted-foreground text-lg leading-relaxed italic">
                  <p>&quot;Technology should be invisible. The experience should be everything.&quot;</p>
                  <p className="not-italic">
                    We believe that the most powerful experiences are those that blend seamlessly with their environment. Whether it&apos;s a stadium-sized mapping or a subtle gallery piece, our goal is always to evoke wonder.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground">The Collective</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {TEAM.map((person) => (
                    <div key={person.name} className="flex gap-4 items-center">
                      <div className="w-12 h-12 bg-card border border-border relative overflow-hidden">
                        <Image src={`https://picsum.photos/seed/${person.seed}/100/100`} alt={person.name} fill className="object-cover grayscale" />
                      </div>
                      <div>
                        <p className="font-bold text-sm tracking-tight">{person.name}</p>
                        <p className="text-[10px] uppercase text-primary font-bold tracking-widest">{person.role}</p>
                      </div>
                    </div>
                  ))}
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
