"use client";

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Navbar } from '@/components/sections/navbar';
import { Footer } from '@/components/sections/footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Mail, Linkedin, Twitter, Sparkles, Plus } from 'lucide-react';
import Link from 'next/link';

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
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">The Collective</span>
              <h1 className="text-2xl sm:text-5xl lg:text-7xl font-black font-headline tracking-tighter leading-[1] md:leading-[0.85] uppercase">
                THE MINDS BEHIND <br />
                <span className="text-primary italic">THE SPECTACLE</span>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-sm italic">
                A global collective of designers, engineers, and visionaries dedicated to pushing the boundaries of digital space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 md:gap-y-20">
            {TEAM_MEMBERS.map((member, i) => (
              <div key={member.name} className="group space-y-6 md:space-y-8">
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

                <div className="space-y-4 md:space-y-6">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-black font-headline uppercase tracking-tighter leading-none">{member.name}</h3>
                    <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-primary">{member.role}</p>
                  </div>
                  
                  <p className="text-muted-foreground text-[12px] leading-relaxed italic line-clamp-4 min-h-[5em]">
                    {member.bio}
                  </p>

                  <div className="space-y-4 pt-2">
                    <div className="flex flex-wrap gap-2 min-h-[1.5rem]">
                      {member.tech.map(t => (
                        <span key={t} className="text-[8px] font-black uppercase tracking-widest border border-border px-2 md:px-3 py-1 text-muted-foreground group-hover:border-primary group-hover:text-primary transition-colors">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-6 pt-4 border-t border-border mt-4">
                      <Mail className="w-4 h-4 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                      <Linkedin className="w-4 h-4 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                      <Twitter className="w-4 h-4 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Join Us Card */}
            <Link href="/join" className="group border border-dashed border-border p-8 md:p-12 flex flex-col items-center justify-center text-center gap-6 hover:border-primary transition-colors cursor-pointer bg-card/20 aspect-[3/4] h-full">
               <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                  <Plus className="w-5 h-5 md:w-6 md:h-6 group-hover:text-primary-foreground" />
               </div>
               <div className="space-y-3 md:space-y-4">
                 <h4 className="text-2xl font-black font-headline uppercase tracking-tighter leading-none">Join the <br />Collective</h4>
                 <p className="text-[10px] text-muted-foreground uppercase tracking-widest italic">We are always seeking visionaries.</p>
               </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
