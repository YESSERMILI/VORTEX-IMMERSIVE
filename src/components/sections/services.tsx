"use client";

import React, { useEffect, useState } from 'react';
import { Layers, Monitor, ShieldCheck, PlayCircle, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SERVICES = [
  {
    title: "Projection Mapping",
    desc: "Transform any surface into a dynamic video canvas. We create precise 3D-mapped projections for architecture, stages, and custom objects.",
    tags: ["Media Facades", "3D Mapping", "Architectural"],
    icon: <Layers className="w-8 h-8" />
  },
  {
    title: "Stage Visuals",
    desc: "Custom-designed visual content for concerts, festivals, and corporate events. LED walls, kinetic screens, and holographic displays.",
    tags: ["Concerts", "Festivals", "LED"],
    icon: <Monitor className="w-8 h-8" />
  },
  {
    title: "Interactive Installations",
    desc: "Engage your audience with responsive installations. Motion tracking, touch interfaces, and AI-powered experiences.",
    tags: ["Museums", "Exhibitions", "VR/AR"],
    icon: <ShieldCheck className="w-8 h-8" />
  },
  {
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
        <div className={cn("max-w-3xl mb-16 opacity-0", isVisible && "animate-fade-up")}>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 font-headline">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We combine artistic vision with technical mastery to deliver experiences that transcend the ordinary. From concept to execution, we handle every aspect of your project with precision and creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-border border border-border">
          {SERVICES.map((s, i) => (
            <div 
              key={s.title}
              className={cn(
                "group relative bg-card p-12 transition-colors hover:bg-background/50 opacity-0",
                isVisible && "animate-fade-up"
              )}
              style={{ animationDelay: `${0.2 + i * 0.1}s` }}
            >
              <div className="text-primary mb-8 transition-transform duration-500 group-hover:scale-110 origin-left">
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold font-headline mb-4">{s.title}</h3>
              <p className="text-muted-foreground mb-8 text-sm leading-relaxed max-w-sm">
                {s.desc}
              </p>
              <div className="flex flex-wrap gap-2 mb-12">
                {s.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-widest border border-border px-3 py-1 text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              <a href="#" className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center border border-border group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                <ArrowUpRight className="w-5 h-5 group-hover:text-primary-foreground" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
