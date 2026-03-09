
"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Layers, Monitor, ShieldCheck, PlayCircle, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export const SERVICES = [
  {
    id: "projection-mapping",
    title: "Projection Mapping",
    desc: "Transform any surface into a dynamic video canvas. We create precise 3D-mapped projections for architecture, stages, and custom objects.",
    tags: ["Media Facades", "3D Mapping", "Architectural"],
    icon: <Layers className="w-8 h-8" />
  },
  {
    id: "stage-visuals",
    title: "Stage Visuals",
    desc: "Custom-designed visual content for concerts, festivals, and corporate events. LED walls, kinetic screens, and holographic displays.",
    tags: ["Concerts", "Festivals", "LED"],
    icon: <Monitor className="w-8 h-8" />
  },
  {
    id: "interactive-installations",
    title: "Interactive Installations",
    desc: "Engage your audience with responsive installations. Motion tracking, touch interfaces, and AI-powered experiences.",
    tags: ["Museums", "Exhibitions", "VR/AR"],
    icon: <ShieldCheck className="w-8 h-8" />
  },
  {
    id: "content-production",
    title: "Content Production",
    desc: "High-end CGI, motion graphics, and real-time content creation. We bring stories to life with stunning visual artistry.",
    tags: ["CGI", "Motion", "Real-time"],
    icon: <PlayCircle className="w-8 h-8" />
  }
];

export const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    const element = document.getElementById('services-section');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-32 bg-card border-y border-border" id="services">
      <div id="services-section" className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        <div className={cn("max-w-3xl mb-24 opacity-0", isVisible && "animate-fade-up")}>
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-6 block">Our Capabilities</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-8 font-headline uppercase leading-none">
            Digital <span className="text-primary italic">Spectacles</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed italic">
            We combine artistic vision with technical mastery to deliver experiences that transcend the ordinary. From concept to execution, we handle every aspect of your project with precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-border border border-border">
          {SERVICES.map((s, i) => (
            <Link 
              href={`/services/${s.id}`}
              key={s.id}
              className={cn(
                "group relative bg-card p-12 transition-all duration-500 hover:bg-background/80 opacity-0 block overflow-hidden",
                isVisible && "animate-fade-up"
              )}
              style={{ animationDelay: `${0.2 + i * 0.1}s` }}
            >
              <div className="text-primary mb-12 transition-transform duration-500 group-hover:scale-110 origin-left">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold font-headline mb-4 group-hover:text-primary transition-colors uppercase tracking-tight">{s.title}</h3>
              <p className="text-muted-foreground mb-12 text-xs leading-relaxed max-w-sm italic">
                {s.desc}
              </p>
              <div className="flex flex-wrap gap-2 mb-16">
                {s.tags.map(tag => (
                  <span key={tag} className="text-[8px] font-black uppercase tracking-widest border border-border px-3 py-1 text-muted-foreground group-hover:border-primary group-hover:text-primary transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="absolute top-12 right-12 w-10 h-10 flex items-center justify-center border border-border group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                <ArrowUpRight className="w-4 h-4 group-hover:text-primary-foreground" />
              </div>
              
              {/* Creative background reveal on hover */}
              <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-700 pointer-events-none" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
