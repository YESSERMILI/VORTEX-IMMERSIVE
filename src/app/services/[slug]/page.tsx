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
  Settings, 
  Monitor, 
  Box, 
  Code2, 
  Palette,
  Play,
  Activity,
  Maximize2,
  HardDrive,
  Target,
  ShieldCheck
} from 'lucide-react';
import { Navbar } from '@/components/sections/navbar';
import { Footer } from '@/components/sections/footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const SERVICE_CONTENT: Record<string, any> = {
  "projection-mapping": {
    longDesc: "Projection mapping is the cornerstone of our studio. We transform static geometry into dynamic, narrative-driven canvases. By utilizing sub-millimeter precision mapping, we turn architectural monuments and stadium stages into living stories that challenge the viewer's perception of reality.",
    vision: "Redefining architectural storytelling through light and spatial geometry.",
    challenge: "The complexity lies in mapping non-uniform surfaces while maintaining perfect color uniformity and focus across extreme distances. Our solution involves proprietary warping algorithms and automated calibration systems.",
    process: [
      { step: "01", title: "Site Survey", desc: "3D Laser scanning and digital twin creation for absolute geometric accuracy." },
      { step: "02", title: "Content Design", desc: "Creating visual narratives that interact directly with the physical features of the facade." },
      { step: "03", title: "Technical Prep", desc: "Designing projector placement matrices to maximize resolution and minimize shadows." },
      { step: "04", title: "Execution", desc: "Real-time show control and dynamic content adjustment for lighting conditions." }
    ],
    tech: [
      { icon: <Cpu className="w-5 h-5" />, label: "Media Servers", detail: "Disguise VX4+ / Hippotizer" },
      { icon: <Settings className="w-5 h-5" />, label: "Optics", detail: "Barco UDM 4K22 / Panasonic PT-RQ35" },
      { icon: <Box className="w-5 h-5" />, label: "3D Pipeline", detail: "Unreal Engine 5 / Houdini" }
    ],
    features: ["Sub-pixel Alignment", "Weatherproof Exterior Rigs", "Automated Calibration"],
    image: 'work-1'
  },
  "stage-visuals": {
    longDesc: "We craft visual ecosystems for the world's largest stages. Our stage visuals are reactive, kinetic environments that synchronize with live performance data, ensuring every frame is a direct reflection of the artist's rhythm and energy.",
    vision: "Creating a symbiotic relationship between live music and generative digital art.",
    challenge: "Maintaining zero-latency response between live audio and visual output while rendering complex 8K particle systems. We solve this by offloading processing to specialized GPU clusters.",
    process: [
      { step: "01", title: "Visual Concept", desc: "Defining the artistic mood and color theory for the performance." },
      { step: "02", title: "Audio Integration", desc: "Developing FFT analysis bridges to drive visual parameters with live sound." },
      { step: "03", title: "Rehearsal Sync", desc: "Tightening timecode integration with lighting and kinetic stage elements." },
      { step: "04", title: "Live Show", desc: "On-site VJing and real-time generative content management." }
    ],
    tech: [
      { icon: <Monitor className="w-5 h-5" />, label: "Processors", detail: "Brompton SX40 / Novastar" },
      { icon: <Activity className="w-5 h-5" />, label: "Rendering", detail: "Notch / TouchDesigner" },
      { icon: <Activity className="w-5 h-5" />, label: "Sync", detail: "SMPTE / Dante / NDI" }
    ],
    features: ["Zero-Latency Rendering", "Audio-Reactive VFX", "Multi-Screen Show Control"],
    image: 'work-2'
  },
  "interactive-installations": {
    longDesc: "Our interactive installations turn passive observers into active participants. We use human-centric technology like LiDAR, computer vision, and AI to create environments that learn and respond to the people within them.",
    vision: "Bridging the gap between human intuition and digital interaction.",
    challenge: "Tracking multiple high-speed movements in crowded environments without losing precision. We utilize multi-sensor fusion to ensure a seamless and reliable user experience.",
    process: [
      { step: "01", title: "User Journey", desc: "Mapping out the interaction points and emotional arc of the visitor." },
      { step: "02", title: "Sensor Fusion", desc: "Integrating LiDAR, IR, and AI vision for robust movement tracking." },
      { step: "03", title: "Interactivity", desc: "Coding responsive behaviors that feel natural and intuitive." },
      { step: "04", title: "Deployment", desc: "On-site installation and tuning of environmental triggers." }
    ],
    tech: [
      { icon: <Cpu className="w-5 h-5" />, label: "Sensing", detail: "Ouster LiDAR / Azure Kinect" },
      { icon: <Code2 className="w-5 h-5" />, label: "AI Vision", detail: "Python / OpenCV / MediaPipe" },
      { icon: <ShieldCheck className="w-5 h-5" />, label: "Integration", detail: "Custom C++ Plugins / OSC" }
    ],
    features: ["Multi-User Tracking", "AI Behavior Modeling", "Gesture-Based Navigation"],
    image: 'work-4'
  },
  "content-production": {
    longDesc: "We produce cinematic content specifically designed for large-scale, non-standard canvases. From 8K architectural loops to complex real-time VFX, our content is optimized for the unique physical constraints of every project.",
    vision: "Crafting digital masterpieces for architectural scale.",
    challenge: "Managing massive render times for 16K+ resolution content while ensuring visual fidelity isn't lost on unique facade textures. We use a cloud-based render farm and custom shader pipelines.",
    process: [
      { step: "01", title: "Creative Story", desc: "Developing the narrative arc and visual storyboard." },
      { step: "02", title: "CGI Production", desc: "High-fidelity 3D modeling, lighting, and cinematic rendering." },
      { step: "03", title: "VFX & Compositing", desc: "Adding particle dynamics and fine-tuning color for specific LED/Projector setups." },
      { step: "04", title: "Optimization", desc: "Codec compression and file slicing for seamless server playback." }
    ],
    tech: [
      { icon: <Palette className="w-5 h-5" />, label: "Software", detail: "Cinema 4D / After Effects" },
      { icon: <Target className="w-5 h-5" />, label: "Engines", detail: "Unreal Engine 5 / Unity" },
      { icon: <Box className="w-5 h-5" />, label: "Rendering", detail: "Redshift / Octane / Arnold" }
    ],
    features: ["Extreme Resolution Mastery", "Real-time Unreal Pipelines", "Custom Shader Development"],
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
      <section className="relative h-[60vh] md:h-[80vh] flex items-end pb-12 md:pb-24 overflow-hidden border-b border-border">
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
            className="mb-8 md:mb-12 pl-0 text-muted-foreground hover:text-primary transition-colors gap-2"
            onClick={() => router.push('/')}
          >
            <ArrowLeft className="w-4 h-4" />
            Return to Services
          </Button>
          <div className="space-y-4 md:space-y-6 max-w-5xl">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-primary">Core Capability</span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black font-headline tracking-tighter leading-[1] md:leading-[0.85] uppercase">
              {service.title.split(' ')[0]} <br />
              <span className="text-primary italic">{service.title.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-base md:text-xl text-muted-foreground leading-relaxed italic max-w-2xl border-l-2 border-primary/20 pl-6 md:pl-8">
              {content.vision}
            </p>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-20 md:py-32 border-b border-border bg-card">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-32 items-start">
            <div className="lg:col-span-8 space-y-12 md:space-y-16">
              <div className="space-y-6 md:space-y-8">
                <h2 className="text-2xl md:text-3xl font-black font-headline tracking-tighter uppercase leading-tight">
                  The <span className="text-primary italic">Narrative</span> & The <span className="text-primary italic">Challenge</span>
                </h2>
                <div className="space-y-4 md:space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed italic">
                  <p>{content.longDesc}</p>
                  <p className="p-6 md:p-8 border-l border-primary/20 bg-background/50 not-italic text-xs md:text-sm">
                    <strong>Technical Challenge:</strong> {content.challenge}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 pt-6">
                {content.features.map((feature: string, i: number) => (
                  <div key={i} className="flex flex-col gap-4 p-6 md:p-8 border border-border bg-background hover:border-primary transition-all group">
                    <Activity className="w-5 h-5 text-primary/40 group-hover:text-primary transition-colors" />
                    <span className="text-[10px] font-black uppercase tracking-widest">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6 md:space-y-8">
               <div className="bg-background p-8 md:p-10 border border-border space-y-6 md:space-y-8">
                 <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Technical Ecosystem</h3>
                 <div className="space-y-6 md:space-y-8">
                  {content.tech.map((item: any, i: number) => (
                    <div key={i} className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="text-primary/60">{item.icon}</div>
                        <p className="text-[9px] uppercase font-black text-muted-foreground tracking-widest">{item.label}</p>
                      </div>
                      <p className="text-xs md:text-sm font-bold tracking-tight pl-8">{item.detail}</p>
                    </div>
                  ))}
                 </div>
               </div>
               
               <div className="p-6 md:p-8 border border-border bg-primary/5 space-y-4">
                  <div className="flex items-center gap-2 text-primary">
                    <HardDrive className="w-4 h-4" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Global Ops</span>
                  </div>
                  <p className="text-[10px] md:text-[11px] text-muted-foreground leading-relaxed italic">Our team provides 24/7 on-site technical support for all global deployments and high-stakes events.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Workflow */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="max-w-xl mb-12 md:mb-24">
             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4 block">Methodology</span>
             <h2 className="text-3xl md:text-4xl font-black font-headline tracking-tighter uppercase">Our <span className="text-primary italic">Process</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {content.process.map((item: any) => (
              <div key={item.step} className="group p-8 md:p-10 bg-card border border-border hover:border-primary transition-all duration-500">
                <div className="text-4xl md:text-5xl font-black font-headline text-primary/10 mb-6 md:mb-8 group-hover:text-primary/20 transition-colors">
                  {item.step}
                </div>
                <h4 className="font-bold text-sm uppercase tracking-tight mb-3 md:mb-4">{item.title}</h4>
                <p className="text-[11px] md:text-xs text-muted-foreground leading-relaxed italic">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cinematic Media Section */}
      <section className="py-20 md:py-32 bg-card border-y border-border overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="relative aspect-video lg:aspect-[21/9] bg-background border border-border group cursor-pointer overflow-hidden">
             <Image 
                src={imageData.imageUrl} 
                alt="Showcase" 
                fill 
                className="object-cover opacity-40 [transition-duration:2000ms] group-hover:scale-105"
             />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <Play className="w-5 h-5 md:w-6 md:h-6 fill-white stroke-none ml-1" />
                </div>
             </div>
             <div className="absolute bottom-4 left-4 md:bottom-10 md:left-10 p-4 md:p-6 bg-background/90 backdrop-blur-2xl border border-white/10 space-y-1">
                <div className="flex items-center gap-2">
                  <Maximize2 className="w-3 h-3 text-primary" />
                  <p className="text-[8px] md:text-[9px] uppercase font-bold tracking-widest text-primary">Technical Preview</p>
                </div>
                <p className="text-sm md:text-lg font-black tracking-tighter uppercase font-headline">Bespoke System Demo</p>
             </div>
          </div>
        </div>
      </section>

      {/* Final Conversion */}
      <section className="py-24 md:py-40">
        <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-[1400px]">
          <div className="bg-primary px-6 py-16 md:p-24 text-primary-foreground relative overflow-hidden border border-border text-center flex flex-col items-center">
            <div className="absolute top-0 right-0 w-full h-full bg-background/5 pointer-events-none" />
            <div className="max-w-2xl space-y-8 md:space-y-12 relative z-10">
              <h2 className="text-3xl md:text-6xl font-black font-headline tracking-tighter uppercase leading-[1.1] md:leading-[0.9]">
                Let's Build the <br />
                <span className="italic text-background">Extraordinary</span>
              </h2>
              <p className="text-primary-foreground/60 text-sm md:text-lg italic leading-relaxed font-body">
                Our directors are available for consultation to discuss the technical scope and creative vision for your next project.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 pt-4 md:pt-8">
                <Button variant="default" className="rounded-none h-12 md:h-14 px-8 md:px-10 group bg-background text-foreground hover:bg-background/90 transition-all border-none text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em]" asChild>
                  <Link href="/book-a-demo">
                    Schedule Session
                    <ArrowRight className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="outline" className="rounded-none h-12 md:h-14 px-8 md:px-10 border-background/20 hover:bg-background/10 text-background text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em]" asChild>
                  <Link href="/#contact">Project Brief</Link>
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