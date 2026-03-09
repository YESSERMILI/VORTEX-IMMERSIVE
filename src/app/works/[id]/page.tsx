
"use client";

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Navbar } from '@/components/sections/navbar';
import { Footer } from '@/components/sections/footer';
import { Button } from '@/components/ui/button';
import { WORKS } from '@/components/sections/works';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowLeft, Play, Globe, Target, Layout, Maximize } from 'lucide-react';

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
      <section className="relative h-[85vh] flex items-end pb-24 overflow-hidden border-b border-border">
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
          <div className="space-y-6 max-w-4xl">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Case Study / {work.category}</span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black font-headline tracking-tighter leading-[0.85] uppercase">
              {work.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed italic max-w-2xl">
              {work.desc}
            </p>
          </div>
        </div>
      </section>

      {/* Project Metadata */}
      <section className="py-24 border-b border-border bg-card">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { icon: <Globe className="w-4 h-4" />, label: "Client", value: work.client },
              { icon: <Target className="w-4 h-4" />, label: "Year", value: work.year },
              { icon: <Maximize className="w-4 h-4" />, label: "Scale", value: work.scale },
              { icon: <Layout className="w-4 h-4" />, label: "Region", value: "Global" }
            ].map((item, i) => (
              <div key={i} className="space-y-3">
                <div className="flex items-center gap-2 text-primary opacity-50">
                  {item.icon}
                  <span className="text-[9px] uppercase font-black tracking-widest">{item.label}</span>
                </div>
                <p className="text-xl font-bold font-headline uppercase">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
            <div className="lg:col-span-8 space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-black font-headline uppercase tracking-tighter">The <span className="text-primary">Challenge</span></h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                  Executing a project of this scale required a seamless integration of artistic intent and technical engineering. Our team focused on creating a visual narrative that felt both intimate for the audience and grand for the environment.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                  Using high-lumen laser projectors and custom real-time software, we developed a system that allowed for sub-millimeter precision across non-traditional surfaces, ensuring that every pixel contributed to the emotional arc of the experience.
                </p>
              </div>

              <div className="relative aspect-video border border-border overflow-hidden bg-card group cursor-pointer">
                <Image 
                  src={imageData.imageUrl} 
                  alt="Process" 
                  fill 
                  className="object-cover opacity-60 transition-transform duration-[2s] group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-20 h-20 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-white stroke-none ml-1" />
                   </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-12">
              <div className="bg-card p-10 border border-border space-y-8">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-primary">Technical Specs</h3>
                <ul className="space-y-6">
                  {[
                    { label: "Software", value: "Unreal Engine 5.4 / Notch" },
                    { label: "Hardware", value: "Barco UDM-4K / Disguise VX4" },
                    { label: "Rendering", value: "Real-time Generative" },
                    { label: "Integration", value: "SMPTE Timecode / DMX" }
                  ].map((tech, i) => (
                    <li key={i} className="space-y-1">
                      <p className="text-[9px] uppercase text-muted-foreground font-bold tracking-widest">{tech.label}</p>
                      <p className="text-sm font-bold tracking-tight uppercase">{tech.value}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-10 border border-border space-y-6">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground">The Outcome</h3>
                <p className="text-sm text-muted-foreground italic leading-relaxed">
                  "Vortex Immersive delivered a technical masterpiece that exceeded all expectations. The level of detail and emotional resonance was unlike anything we've seen before."
                </p>
                <p className="text-[10px] font-black uppercase tracking-widest">— Lead Creative Director, {work.client}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
