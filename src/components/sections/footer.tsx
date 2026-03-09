
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Instagram, Linkedin, Twitter, Github, ArrowUpRight } from 'lucide-react';

const FOOTER_SERVICES = [
  { name: "Projection Mapping", slug: "projection-mapping" },
  { name: "Stage Visuals", slug: "stage-visuals" },
  { name: "Interactive Installations", slug: "interactive-installations" },
  { name: "Content Production", slug: "content-production" }
];

export const Footer = () => {
  return (
    <footer className="bg-card pt-24 pb-12 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-24">
          <div className="lg:col-span-2 space-y-8">
            <Link href="/" className="text-3xl font-black font-headline tracking-tighter">
              VORTEX <span className="text-primary">IMMERSIVE</span>
            </Link>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Pioneers in creative technology, transforming spaces into immersive digital experiences since 2007.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="rounded-none border-border hover:bg-primary hover:text-primary-foreground transition-all">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-none border-border hover:bg-primary hover:text-primary-foreground transition-all">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-none border-border hover:bg-primary hover:text-primary-foreground transition-all">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-none border-border hover:bg-primary hover:text-primary-foreground transition-all" asChild>
                <a href="https://github.com/vorteximmersive/vortex-studio" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground">Services</h4>
            <ul className="space-y-3">
              {FOOTER_SERVICES.map(service => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center group">
                    {service.name}
                    <ArrowUpRight className="ml-1 w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground">Studio</h4>
            <ul className="space-y-3">
              {["Our Team", "About Us", "Contact", "Careers"].map(item => (
                <li key={item}>
                  <Link 
                    href={item === "Our Team" ? "/team" : item === "Careers" ? "/join" : item === "About Us" ? "/about" : "/#contact"} 
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center group"
                  >
                    {item}
                    <ArrowUpRight className="ml-1 w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
          <p>© 2024 VORTEX IMMERSIVE. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
