
"use client";

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Navbar } from '@/components/sections/navbar';
import { Footer } from '@/components/sections/footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Mail, Linkedin, Twitter, Sparkles, Code2, Globe, Zap, Cpu, Palette } from 'lucide-react';

const TEAM_MEMBERS = [
  {
    name: "Julian Vortex",
    role: "Creative Director",
    bio: "Julian leads the studio's artistic vision, blending architectural principles with real-time generative art and large-scale projection design.",
    specialty: "Projection Mapping",
    tech: ["Unreal Engine", "Houdini"],
    seed: "julian"
  },
  {
    name: "Sarah Chen",
    role: "Lead Systems Engineer",
    bio: "Sarah oversees the technical infrastructure for our stadium-scale installations and custom hardware R&D for global tours.",
    specialty: "Systems Architecture",
    tech: ["Disguise VX4", "C++"],
    seed: "sarah"
  },
  {
    name: "Marcus Thorne",
    role: "Interactive Designer",
    bio: "Marcus develops responsive environments that react to audience movement, biometric data, and environmental triggers.",
    specialty: "HCI / Interaction",
    tech: ["TouchDesigner", "LiDAR"],
    seed: "marcus"
  },
  {
    name: "Elena Rossi",
    role: "Executive Producer",
    bio: "Elena manages our global project portfolio, ensuring seamless execution and logistics across five continents.",
    specialty: "Global Logistics",
    tech: ["Strategic Planning", "UX"],
    seed: "elena"
  },
  {
    name: "David Okafor",
    role: "Technical Artist",
    bio: "David specializes in real-time VFX and procedural environment generation for immersive VR/AR experiences.",
    specialty: "Real-time FX",
    tech: ["Niagara", "Blender"],
    seed: "david"
  },
  {
    name: "Sofia Lindholm",
    role: "Spatial UI Designer",
    bio: "Sofia designs intuitive interfaces for three-dimensional spaces, focusing on gaze and gesture-based interaction models.",
    specialty: "Spatial Computing",
    tech: ["Unity", "Figma"],
    seed: "sofia"
  },
  {
    name: "Kenji Sato",
    role: "Hardware Engineer",
    bio: "Kenji builds the custom sensors and kinetic motors that bring our physical installations to life.",
    specialty: "Embedded Systems",
    tech: ["Arduino", "PCB Design"],
    seed: "kenji"
  },
  {
    name: "Anya Petrova",
    role: "Motion Designer",
    bio: "Anya crafts high-fidelity cinematic content for 8K displays and non-standard architectural facades.",
    specialty: "Motion Graphics",
    tech: ["After Effects", "C4D"],
    seed: "anya"
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
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black font-headline tracking-tighter leading-[0.85] uppercase">
                THE MINDS BEHIND <br />
                <span className="text-primary italic">THE SPECTACLE</span>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-base text-muted-foreground leading-relaxed max-w-sm italic">
                A global collective of designers, engineers, and visionaries dedicated to pushing the boundaries of digital space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid - Scrollable vertical list */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {TEAM_MEMBERS.map((member, i) => (
              <div key={member.name} className="group space-y-6">
                <div className="relative aspect-[3/4] bg-card border border-border overflow-hidden grayscale transition-all duration-700 group-hover:grayscale-0">
                  <Image 
                    src={`https://picsum.photos/seed/${member.seed}/600/800`} 
                    alt={member.name} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/5 mix-blend-overlay pointer-events-none" />
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-background/80 backdrop-blur-xl p-2 border border-white/10">
                      <Sparkles className="w-3 h-3 text-primary" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-xl font-black font-headline uppercase tracking-tighter">{member.name}</h3>
                    <p className="text-[9px] font-black uppercase tracking-[0.3em] text-primary">{member.role}</p>
                  </div>
                  
                  <p className="text-muted-foreground text-[11px] leading-relaxed italic line-clamp-3 h-[4.5em]">
                    {member.bio}
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="flex flex-wrap gap-1.5 min-h-[1.5rem]">
                      {member.tech.map(t => (
                        <span key={t} className="text-[8px] font-bold uppercase tracking-widest border border-border px-2 py-0.5 text-muted-foreground">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Mail className="w-3.5 h-3.5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                      <Linkedin className="w-3.5 h-3.5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                      <Twitter className="w-3.5 h-3.5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <div className="w-8 h-[1px] bg-primary" />
                <h4 className="text-xs font-bold uppercase tracking-tight flex items-center gap-2">
                  <Code2 className="w-3 h-3 text-primary" />
                  Technical Rigor
                </h4>
                <p className="text-[11px] text-muted-foreground leading-relaxed italic">
                  We don't just use technology; we engineer it. Every installation is a byproduct of intensive research and custom prototyping.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-8 h-[1px] bg-primary" />
                <h4 className="text-xs font-bold uppercase tracking-tight flex items-center gap-2">
                  <Zap className="w-3 h-3 text-primary" />
                  Emotional Resonance
                </h4>
                <p className="text-[11px] text-muted-foreground leading-relaxed italic">
                  Pixels mean nothing without purpose. We focus on the intersection of human emotion and precision engineering.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-8 h-[1px] bg-primary" />
                <h4 className="text-xs font-bold uppercase tracking-tight flex items-center gap-2">
                  <Globe className="w-3 h-3 text-primary" />
                  Global Execution
                </h4>
                <p className="text-[11px] text-muted-foreground leading-relaxed italic">
                  From New York to Seoul, our technical standards remain consistent across any environment, scale, or complexity.
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
