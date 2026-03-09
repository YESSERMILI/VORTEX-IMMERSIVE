
"use client";

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Navbar } from '@/components/sections/navbar';
import { Footer } from '@/components/sections/footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Mail, Linkedin, Twitter, Sparkles } from 'lucide-react';

const TEAM_MEMBERS = [
  {
    name: "Julian Vortex",
    role: "Creative Director",
    bio: "With over 20 years in digital scenography, Julian leads the studio's artistic vision, blending architectural principles with real-time generative art.",
    specialty: "Projection Mapping / Art Direction",
    seed: "julian"
  },
  {
    name: "Sarah Chen",
    role: "Lead Systems Engineer",
    bio: "A pioneer in real-time rendering pipelines, Sarah oversees the technical infrastructure for our stadium-scale installations and custom hardware r&d.",
    specialty: "Unreal Engine / Disguise VX4",
    seed: "sarah"
  },
  {
    name: "Marcus Thorne",
    role: "Interactive Designer",
    bio: "Marcus specializes in human-computer interaction, developing responsive environments that react to audience movement and bio-data.",
    specialty: "TouchDesigner / LiDAR Tracking",
    seed: "marcus"
  },
  {
    name: "Elena Rossi",
    role: "Executive Producer",
    bio: "Elena manages our global project portfolio, ensuring seamless execution across five continents while maintaining our rigorous technical standards.",
    specialty: "Project Strategy / Global Logistics",
    seed: "elena"
  }
];

export default function TeamPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-48 pb-24 border-b border-border">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <Button 
            variant="ghost" 
            className="mb-12 pl-0 text-muted-foreground hover:text-primary transition-colors gap-2"
            onClick={() => router.push('/')}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Studio
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8 space-y-8">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">The Collective</span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black font-headline tracking-tighter leading-[0.85] uppercase">
                THE MINDS BEHIND <br />
                <span className="text-primary italic">THE MAGIC</span>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-lg text-muted-foreground leading-relaxed max-w-sm italic">
                A global collective of designers, engineers, and visionaries dedicated to pushing the boundaries of what's possible in digital space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
            {TEAM_MEMBERS.map((member, i) => (
              <div key={member.name} className="group space-y-8">
                <div className="relative aspect-[4/5] bg-card border border-border overflow-hidden grayscale transition-all duration-700 group-hover:grayscale-0">
                  <Image 
                    src={`https://picsum.photos/seed/${member.seed}/800/1000`} 
                    alt={member.name} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/5 mix-blend-overlay pointer-events-none" />
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-background/80 backdrop-blur-xl p-3 border border-white/10">
                      <Sparkles className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-5 space-y-2">
                    <h3 className="text-2xl font-black font-headline uppercase tracking-tighter">{member.name}</h3>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">{member.role}</p>
                    <div className="flex gap-4 pt-4">
                      <Mail className="w-4 h-4 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                      <Linkedin className="w-4 h-4 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                      <Twitter className="w-4 h-4 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                    </div>
                  </div>
                  <div className="md:col-span-7 space-y-6">
                    <p className="text-muted-foreground text-sm leading-relaxed italic">
                      "{member.bio}"
                    </p>
                    <div className="space-y-1">
                      <p className="text-[9px] uppercase font-black text-muted-foreground tracking-widest">Core Specialty</p>
                      <p className="text-xs font-bold uppercase tracking-tight">{member.specialty}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-card border-y border-border">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="max-w-4xl space-y-16">
            <h2 className="text-3xl md:text-5xl font-black font-headline tracking-tighter uppercase leading-none">
              OUR <span className="text-primary italic">DNA</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-6">
                <div className="w-12 h-[1px] bg-primary" />
                <h4 className="font-bold uppercase tracking-tight">Technical Rigor</h4>
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  We don't just use technology; we engineer it. Every installation is a byproduct of intensive research, custom software development, and hardware prototyping.
                </p>
              </div>
              <div className="space-y-6">
                <div className="w-12 h-[1px] bg-primary" />
                <h4 className="font-bold uppercase tracking-tight">Emotional Resonance</h4>
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  Pixels mean nothing without purpose. We focus on the intersection of human emotion and digital precision to create memories that last.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
