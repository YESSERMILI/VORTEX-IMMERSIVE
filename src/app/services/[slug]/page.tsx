
"use client";

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { SERVICES } from '@/components/sections/services';
import { Button } from '@/components/ui/button';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  Layers, 
  Search, 
  Settings, 
  Zap, 
  Monitor, 
  Box, 
  Code2, 
  Palette 
} from 'lucide-react';
import { Navbar } from '@/components/sections/navbar';
import { Footer } from '@/components/sections/footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const SERVICE_CONTENT: Record<string, any> = {
  "projection-mapping": {
    process: [
      { step: "01", title: "Site Scanning", desc: "High-precision LiDAR scanning of architectural surfaces." },
      { step: "02", title: "Content Design", desc: "Crafting 3D narratives tailored to the geometry." },
      { step: "03", title: "System Alignment", desc: "Sub-pixel projector calibration and warping." },
      { step: "04", title: "Live Execution", desc: "Redundant playback systems for flawless delivery." }
    ],
    tech: [
      { icon: <Cpu className="w-5 h-5" />, label: "Media Servers", detail: "Disguise / Hippotizer" },
      { icon: <Settings className="w-5 h-5" />, label: "Projectors", detail: "30k-50k ANSI Lumens" },
      { icon: <Box className="w-5 h-5" />, label: "Software", detail: "Cinema 4D / Unreal Engine" }
    ],
    image: 'work-1'
  },
  "stage-visuals": {
    process: [
      { step: "01", title: "Vibe Boarding", desc: "Defining the visual aesthetic of the performance." },
      { step: "02", title: "Real-time Rigging", desc: "Building reactive systems for live triggers." },
      { step: "03", title: "Stage Integration", desc: "Syncing visuals with lighting and pyrotechnics." },
      { step: "04", title: "Tour Support", desc: "Remote management for global concert runs." }
    ],
    tech: [
      { icon: <Monitor className="w-5 h-5" />, label: "LED Processing", detail: "Brompton / Novastar" },
      { icon: <Zap className="w-5 h-5" />, label: "Sync", detail: "SMPTE / MIDI Timecode" },
      { icon: <Palette className="w-5 h-5" />, label: "Engines", detail: "Notch / TouchDesigner" }
    ],
    image: 'work-2'
  },
  "interactive-installations": {
    process: [
      { step: "01", title: "User Journey", desc: "Mapping out the human-tech interaction flow." },
      { step: "02", title: "Prototyping", desc: "Rapid testing of sensors and tracking logic." },
      { step: "03", title: "Hardware Build", desc: "Custom enclosure and interface fabrication." },
      { step: "04", title: "UX Refinement", desc: "Iterative tuning based on user behavior." }
    ],
    tech: [
      { icon: <Search className="w-5 h-5" />, label: "Sensing", detail: "LiDAR / Azure Kinect" },
      { icon: <Code2 className="w-5 h-5" />, label: "Logic", detail: "C++ / Python / AI Models" },
      { icon: <Layers className="w-5 h-5" />, label: "Haptics", detail: "Custom Touch Interfaces" }
    ],
    image: 'work-4'
  },
  "content-production": {
    process: [
      { step: "01", title: "Storyboarding", desc: "Visualizing the narrative arc and pacing." },
      { step: "02", title: "Look Dev", desc: "Developing custom shaders and lighting models." },
      { step: "03", title: "Simulation", desc: "Complex physics and particle fluid dynamics." },
      { step: "04", title: "Rendering", desc: "High-fidelity export for large scale displays." }
    ],
    tech: [
      { icon: <Palette className="w-5 h-5" />, label: "Render", detail: "Redshift / Octane" },
      { icon: <Box className="w-5 h-5" />, label: "Modeling", detail: "Houdini / Blender" },
      { icon: <Zap className="w-5 h-5" />, label: "Real-time", detail: "Unreal Engine 5.4" }
    ],
    image: 'work-6'
  }
};

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const router = useRouter();
  const service = SERVICES.find(s => s.id === slug);
  const content = SERVICE_CONTENT[slug as string];

  if (!service || !content) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-center p-6">
        <div className="space-y-4">
          <h1 className="text-3xl font-black font-headline uppercase">Service Not Found</h1>
          <Button variant="outline" onClick={() => router.push('/')}>Return Home</Button>
        </div>
      </div>
    );
  }

  const imageData = PlaceHolderImages.find(img => img.id === content.image) || PlaceHolderImages[0];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-end pb-24 overflow-hidden border-b border-border">
        <Image 
          src={imageData.imageUrl} 
          alt={service.title} 
          fill 
          priority
          className="object-cover opacity-30 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px] relative z-10">
          <Button 
            variant="ghost" 
            className="mb-8 pl-0 text-muted-foreground hover:text-primary transition-colors gap-2"
            onClick={() => router.push('/#services')}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Button>
          <div className="space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Specialized Solutions</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-headline tracking-tighter leading-[0.9] uppercase max-w-4xl">
              {service.title.split(' ')[0]} <br />
              <span className="text-primary italic">{service.title.split(' ').slice(1).join(' ')}</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Overview & Process */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32">
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-8">
                <h2 className="text-2xl md:text-3xl font-black font-headline tracking-tight uppercase">Elevating the <span className="text-primary">Standard</span></h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  {service.desc} Our approach blends engineering precision with pure artistic expression, ensuring every frame tells a story that resonates.
                </p>
              </div>
              
              <div className="space-y-10 pt-8">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground border-l-2 border-primary pl-4">Our Workflow</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                  {content.process.map((item: any) => (
                    <div key={item.step} className="space-y-3 group">
                      <div className="text-3xl font-black font-headline text-primary/20 group-hover:text-primary/50 transition-colors">
                        {item.step}
                      </div>
                      <h4 className="font-bold text-sm uppercase tracking-tight">{item.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-12">
              <div className="bg-card p-8 md:p-10 border border-border space-y-8">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-primary">Technical Stack</h3>
                <div className="space-y-6">
                  {content.tech.map((item: any, i: number) => (
                    <div key={i} className="flex items-center gap-6 group">
                      <div className="w-10 h-10 flex items-center justify-center border border-border bg-background group-hover:border-primary transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-[10px] uppercase font-black text-muted-foreground tracking-widest">{item.label}</p>
                        <p className="text-sm font-bold tracking-tight">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary p-10 space-y-8 text-primary-foreground relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 -translate-y-1/2 translate-x-1/2 rotate-45" />
                <h3 className="text-2xl font-black font-headline tracking-tight uppercase leading-none">Ready to <br /><span className="italic">Initiate?</span></h3>
                <p className="text-primary-foreground/70 text-sm">Let&apos;s discuss the technical requirements and creative vision for your next project.</p>
                <Button variant="secondary" className="w-full rounded-none h-14 group/btn" asChild>
                  <Link href="/book-a-demo">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Ribbon */}
      <section className="bg-card border-y border-border py-16 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="flex flex-wrap gap-4 md:gap-8 justify-center">
            {service.tags.map(tag => (
              <div key={tag} className="flex items-center gap-3 px-6 py-3 border border-border hover:border-primary transition-colors cursor-default bg-background">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span className="text-[10px] font-black uppercase tracking-widest">{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secondary Visual Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="relative aspect-[21/9] w-full border border-border overflow-hidden">
            <Image 
              src={PlaceHolderImages.find(img => img.id === 'about-studio')?.imageUrl || imageData.imageUrl} 
              alt="The Lab" 
              fill 
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
               <div className="text-center space-y-4 px-6 max-w-2xl">
                 <h2 className="text-3xl md:text-4xl font-black font-headline uppercase text-white tracking-tighter">Precision in <span className="text-primary">Execution</span></h2>
                 <p className="text-white/80 text-sm md:text-base italic">Every pixel, every millisecond, perfectly synchronized to create wonder.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
