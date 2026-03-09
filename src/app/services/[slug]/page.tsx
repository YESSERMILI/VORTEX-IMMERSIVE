
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
  Cpu, 
  Layers, 
  Search, 
  Settings, 
  Zap, 
  Monitor, 
  Box, 
  Code2, 
  Palette,
  Target,
  Workflow,
  Sparkles,
  Play
} from 'lucide-react';
import { Navbar } from '@/components/sections/navbar';
import { Footer } from '@/components/sections/footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const SERVICE_CONTENT: Record<string, any> = {
  "projection-mapping": {
    longDesc: "Projection mapping is at the heart of VORTEX IMMERSIVE. We transform static architecture into living, breathing canvases. Using sub-millimeter precision, we map complex 3D surfaces to create narratives that defy physics and engage audiences on a massive scale. Our expertise ranges from historical monument mapping to stadium-sized spectacles.",
    process: [
      { step: "01", title: "Geometric Analysis", desc: "LiDAR scanning and photogrammetry to create a perfect digital twin of the target surface." },
      { step: "02", title: "Narrative Sculpting", desc: "3D animators craft visuals that respect and enhance the unique topology of the site." },
      { step: "03", title: "System Calibration", desc: "Advanced warping and blending across multiple high-lumen projectors for seamless imagery." },
      { step: "04", title: "Show Control", desc: "Redundant media server playback integrated with timecode for precise event synchronization." }
    ],
    tech: [
      { icon: <Cpu className="w-5 h-5" />, label: "Media Servers", detail: "Disguise VX4+ / Hippotizer" },
      { icon: <Settings className="w-5 h-5" />, label: "Optics", detail: "Barco UDM 4K22 / Panasonic PT-RQ35" },
      { icon: <Box className="w-5 h-5" />, label: "Pipeline", detail: "Unreal Engine 5 / Houdini / C4D" }
    ],
    image: 'work-1'
  },
  "stage-visuals": {
    longDesc: "We design visual ecosystems for the world's most demanding performers. Our stage visuals are not just backgrounds; they are reactive, kinetic environments that sync with every beat, breath, and light cue in a performance. We bridge the gap between music and visual storytelling.",
    process: [
      { step: "01", title: "Creative Blueprint", desc: "Establishing the visual language and mood-boards aligned with the artist's brand." },
      { step: "02", title: "Real-time Rigging", desc: "Building interactive Notch or TouchDesigner patches for live audio-reactive visuals." },
      { step: "03", title: "Hardware Integration", desc: "Pixel mapping LED volumes and kinetic sculptures for unified show control." },
      { step: "04", title: "Tour Readiness", desc: "Modular content packages designed for rapid setup and global venue adaptability." }
    ],
    tech: [
      { icon: <Monitor className="w-5 h-5" />, label: "LED Processing", detail: "Brompton Tessera SX40 / Novastar" },
      { icon: <Zap className="w-5 h-5" />, label: "Connectivity", detail: "Fiber Optic / NDI / Dante Video" },
      { icon: <Palette className="w-5 h-5" />, label: "Generative", detail: "Notch / TouchDesigner / Resolume" }
    ],
    image: 'work-2'
  },
  "interactive-installations": {
    longDesc: "Interactive installations bridge the gap between human intuition and digital possibility. We create spaces where visitors don't just watch—they participate. From motion-tracked galleries to AI-driven pavilions, we build memories that last a lifetime.",
    process: [
      { step: "01", title: "Experience Design", desc: "Defining the user journey and the 'magic moment' of interaction." },
      { step: "02", title: "Sensor Prototyping", desc: "Testing LiDAR, IR cameras, and ultrasonic sensors for precise movement detection." },
      { step: "03", title: "Custom Engineering", desc: "Developing bespoke software and hardware interfaces for tactile or gesture input." },
      { step: "04", title: "Data Insights", desc: "Optional integration of audience heatmaps and engagement metrics for analytics." }
    ],
    tech: [
      { icon: <Search className="w-5 h-5" />, label: "Sensing", detail: "Ouster LiDAR / Azure Kinect / Leap Motion" },
      { icon: <Code2 className="w-5 h-5" />, label: "Software", detail: "C++ / Python / OpenCV / AI Models" },
      { icon: <Layers className="w-5 h-5" />, label: "Interfaces", detail: "Touch screens / Kinetic Motors / RFID" }
    ],
    image: 'work-4'
  },
  "content-production": {
    longDesc: "Content is our foundation. We produce high-fidelity CGI and real-time graphics tailored specifically for large-scale displays. We understand how pixels behave on 100-meter facades and stadium screens, ensuring every frame is optimized for the viewer.",
    process: [
      { step: "01", title: "Storyboarding", desc: "Translating brand goals into a cinematic narrative arc." },
      { step: "02", title: "Look Development", desc: "Creating custom shaders, lighting, and materials for specific display technologies." },
      { step: "03", title: "Physics Simulation", desc: "Complex particle, fluid, and cloth dynamics for hyper-realistic visual impact." },
      { step: "04", title: "Mastering", desc: "Rendering in extreme resolutions (8K+) and non-standard aspect ratios." }
    ],
    tech: [
      { icon: <Palette className="w-5 h-5" />, label: "Rendering", detail: "Redshift / Octane / Arnold" },
      { icon: <Box className="w-5 h-5" />, label: "Modeling", detail: "SideFX Houdini / Blender / Maya" },
      { icon: <Zap className="w-5 h-5" />, label: "Real-time", detail: "Unreal Engine 5.4 / Unity" }
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
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-center p-6">
        <div className="space-y-6 max-w-md">
          <h1 className="text-3xl font-black font-headline uppercase tracking-tighter">Service Profile <br /><span className="text-primary italic">Not Found</span></h1>
          <p className="text-muted-foreground text-sm">We are constantly evolving our services. Please return home or contact us for bespoke inquiries.</p>
          <Button variant="outline" className="rounded-none w-full h-14" onClick={() => router.push('/')}>Return to Overview</Button>
        </div>
      </div>
    );
  }

  const imageData = PlaceHolderImages.find(img => img.id === content.image) || PlaceHolderImages[0];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-end pb-20 overflow-hidden border-b border-border">
        <Image 
          src={imageData.imageUrl} 
          alt={service.title} 
          fill 
          priority
          className="object-cover opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px] relative z-10">
          <Button 
            variant="ghost" 
            className="mb-10 pl-0 text-muted-foreground hover:text-primary transition-colors gap-2"
            onClick={() => router.push('/#services')}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Capabilities
          </Button>
          <div className="space-y-4">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Specialized Discipline</span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black font-headline tracking-tighter leading-[0.85] uppercase max-w-4xl">
              {service.title.split(' ')[0]} <br />
              <span className="text-primary italic">{service.title.split(' ').slice(1).join(' ')}</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Deep Dive Narrative */}
      <section className="py-24 border-b border-border bg-card">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-start">
            <div className="lg:col-span-8 space-y-10">
              <div className="flex gap-4 items-center">
                 <div className="w-10 h-[1px] bg-primary" />
                 <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">The Vision</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black font-headline tracking-tighter uppercase leading-tight">
                Engineering <span className="text-primary italic">Awe</span> Through Technical Precision
              </h2>
              <div className="space-y-8 text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl italic">
                <p>{content.longDesc}</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                {service.tags.map(tag => (
                  <div key={tag} className="flex items-center gap-4 group cursor-default">
                    <div className="w-10 h-10 flex items-center justify-center border border-border group-hover:border-primary group-hover:bg-primary/5 transition-all">
                      <Target className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-widest">{tag}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 space-y-10">
               <div className="bg-background p-10 border border-border space-y-8 relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-4">
                   <Sparkles className="w-4 h-4 text-primary/20" />
                 </div>
                 <h3 className="text-xs font-black uppercase tracking-[0.3em] text-primary">Technical Infrastructure</h3>
                 <div className="space-y-8">
                  {content.tech.map((item: any, i: number) => (
                    <div key={i} className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="text-primary">{item.icon}</div>
                        <p className="text-[9px] uppercase font-black text-muted-foreground tracking-widest">{item.label}</p>
                      </div>
                      <p className="text-xs font-bold tracking-tight pl-8 border-l border-border">{item.detail}</p>
                    </div>
                  ))}
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div className="space-y-3">
               <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Methodology</span>
               <h2 className="text-3xl font-black font-headline tracking-tighter uppercase">Our <span className="italic">Workflow</span></h2>
            </div>
            <p className="text-muted-foreground max-w-sm text-xs leading-relaxed">A rigorous, multi-phase approach ensuring every project is delivered with sub-pixel accuracy and emotional resonance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.process.map((item: any) => (
              <div key={item.step} className="group p-10 bg-card border border-border hover:border-primary transition-all duration-500 relative">
                <div className="text-4xl font-black font-headline text-primary/10 mb-6 transition-colors group-hover:text-primary/20">
                  {item.step}
                </div>
                <h4 className="font-bold text-sm uppercase tracking-tight mb-3">{item.title}</h4>
                <p className="text-[10px] text-muted-foreground leading-relaxed italic">{item.desc}</p>
                <Workflow className="absolute bottom-6 right-6 w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Visual */}
      <section className="py-24 bg-card border-y border-border overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="relative aspect-[21/9] bg-background border border-border group cursor-pointer overflow-hidden">
             <Image 
                src={imageData.imageUrl} 
                alt="Experience Preview" 
                fill 
                className="object-cover opacity-40 transition-transform duration-[2s] group-hover:scale-105"
             />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 fill-white stroke-none ml-1" />
                </div>
             </div>
             <div className="absolute bottom-6 left-6 p-6 bg-background/80 backdrop-blur-xl border border-white/10 space-y-1">
                <p className="text-[8px] uppercase font-bold tracking-widest text-primary">Recent Project</p>
                <p className="text-base font-black tracking-tighter uppercase font-headline">Global Tech Pavilion '24</p>
             </div>
          </div>
        </div>
      </section>

      {/* Conversion Section - Finalized High-Contrast Design */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="bg-neutral-950 p-12 md:p-24 text-white relative overflow-hidden border border-white/5">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 -translate-y-1/2 translate-x-1/2 rounded-full blur-[100px]" />
            <div className="max-w-3xl space-y-12 relative z-10">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black font-headline tracking-tighter uppercase leading-[0.9]">
                Initiate Your <br />
                <span className="italic text-primary">Digital Transformation</span>
              </h2>
              <p className="text-white/60 text-lg md:text-xl max-w-xl italic leading-relaxed">
                Our directors are available to discuss technical feasibility and creative scope for your upcoming installation or event.
              </p>
              <div className="flex flex-wrap gap-6 pt-6">
                <Button variant="default" className="rounded-none h-16 px-10 group bg-white text-black hover:bg-neutral-200 transition-all border-none text-[10px] font-bold uppercase tracking-[0.2em]" asChild>
                  <Link href="/book-a-demo">
                    Schedule Technical Consultation
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="outline" className="rounded-none h-16 px-10 border-white/20 hover:bg-white/10 text-white text-[10px] font-bold uppercase tracking-[0.2em]" asChild>
                  <Link href="/#contact">Send Project Brief</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
