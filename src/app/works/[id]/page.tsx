"use client";

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Navbar } from '@/components/sections/navbar';
import { Footer } from '@/components/sections/footer';
import { Button } from '@/components/ui/button';
import { WORKS } from '@/components/sections/works';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowLeft, Play, Globe, Target, Layout, Maximize, Cpu, HardDrive, Workflow, Sparkles } from 'lucide-react';

export default function WorkDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const work = WORKS.find(w => w.id === id);

  if (!work) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-center p-6">
        <h1 className="text-3xl font-black uppercase tracking-tighter mb-4">Project Not Found</h1>
        <Button variant="outline" onClick={() => router.push('/#works')}>Back to Portfolio</Button>
      </div>
    );
  }

  const imageData = PlaceHolderImages.find(img => img.id === work.imageId) || PlaceHolderImages[0];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-end pb-32 overflow-hidden border-b border-border">
        <Image 
          src={imageData.imageUrl} 
          alt={work.title} 
          fill 
          priority
          className="object-cover opacity-30 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px] relative z-10">
          <Button 
            variant="ghost" 
            className="mb-12 pl-0 text-muted-foreground hover:text-primary transition-colors gap-2"
            onClick={() => router.push('/#works')}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Button>
          <div className="space-y-8 max-w-5xl">
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary">Case Study / {work.category}</span>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black font-headline tracking-tighter leading-[0.8] uppercase">
              {work.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed italic max-w-3xl border-l border-primary/20 pl-10">
              {work.desc}
            </p>
          </div>
        </div>
      </section>

      {/* Project Metadata Ribbon */}
      <section className="py-24 border-b border-border bg-card">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 lg:gap-24">
            {[
              { icon: <Globe className="w-5 h-5" />, label: "Client", value: work.client },
              { icon: <Target className="w-5 h-5" />, label: "Year", value: work.year },
              { icon: <Maximize className="w-5 h-5" />, label: "Scale", value: work.scale },
              { icon: <Layout className="w-5 h-5" />, label: "Region", value: "Global" }
            ].map((item, i) => (
              <div key={i} className="space-y-4">
                <div className="flex items-center gap-3 text-primary/50">
                  {item.icon}
                  <span className="text-[10px] uppercase font-black tracking-[0.3em]">{item.label}</span>
                </div>
                <p className="text-2xl font-black font-headline uppercase tracking-tight">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-40">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 lg:gap-32 items-start">
            <div className="lg:col-span-8 space-y-20">
              <div className="space-y-10">
                <h2 className="text-4xl font-black font-headline uppercase tracking-tighter">The <span className="text-primary italic">Challenge</span></h2>
                <div className="space-y-8 text-xl text-muted-foreground leading-relaxed max-w-4xl italic">
                  <p>
                    Executing a project of this scale required a seamless integration of artistic intent and technical engineering. Our team focused on creating a visual narrative that felt both intimate for the audience and grand for the environment.
                  </p>
                  <p>
                    Using high-lumen laser projectors and custom real-time software, we developed a system that allowed for sub-millimeter precision across non-traditional surfaces, ensuring that every pixel contributed to the emotional arc of the experience.
                  </p>
                </div>
              </div>

              <div className="relative aspect-video border border-border overflow-hidden bg-card group cursor-pointer shadow-2xl">
                <Image 
                  src={imageData.imageUrl} 
                  alt="Process" 
                  fill 
                  className="object-cover opacity-70 transition-transform duration-[2000ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-24 h-24 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Play className="w-8 h-8 fill-white stroke-none ml-1" />
                   </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-12">
              <div className="bg-card p-12 border border-border space-y-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                  <Sparkles className="w-5 h-5 text-primary/10" />
                </div>
                <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-primary">Technical Specs</h3>
                <ul className="space-y-10">
                  {[
                    { icon: <Cpu className="w-4 h-4" />, label: "Software", value: "Unreal Engine 5.4 / Notch" },
                    { icon: <HardDrive className="w-4 h-4" />, label: "Hardware", value: "Barco UDM-4K / Disguise VX4" },
                    { icon: <Workflow className="w-4 h-4" />, label: "Rendering", value: "Real-time Generative" },
                    { icon: <Maximize className="w-4 h-4" />, label: "Integration", value: "SMPTE / DMX / ArtNet" }
                  ].map((tech, i) => (
                    <li key={i} className="space-y-3">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        {tech.icon}
                        <p className="text-[10px] uppercase font-black tracking-widest">{tech.label}</p>
                      </div>
                      <p className="text-base font-bold tracking-tight uppercase pl-7 border-l border-border">{tech.value}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-12 border border-border bg-primary/5 space-y-8">
                <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-muted-foreground">The Outcome</h3>
                <p className="text-base text-muted-foreground italic leading-relaxed">
                  "Vortex Immersive delivered a technical masterpiece that exceeded all expectations. The level of detail and emotional resonance was unlike anything we've seen before."
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="text-xs font-black uppercase tracking-[0.3em]">— Lead Creative Director</p>
                  <p className="text-[10px] uppercase font-bold text-primary mt-1">{work.client}</p>
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
