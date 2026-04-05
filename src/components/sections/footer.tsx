import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Instagram, Linkedin, Twitter, Github, ArrowUpRight } from 'lucide-react';

const Logo = ({ className }: { className?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={className}>
    <path d="M4 20L12 4L20 20" strokeLinecap="square" strokeLinejoin="miter" />
    <path d="M8 14H16" strokeLinecap="square" strokeLinejoin="miter" />
  </svg>
);

const FOOTER_SERVICES = [
  { name: "Brand Activation", slug: "projection-mapping" },
  { name: "Live Production", slug: "stage-visuals" },
  { name: "Digital Strategy", slug: "interactive-installations" },
  { name: "Creative Content", slug: "content-production" }
];

export const Footer = () => {
  return (
    <footer className="bg-card pt-24 pb-12 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-24">
          <div className="lg:col-span-2 space-y-8">
            <Link href="/" className="flex items-center gap-3 text-3xl font-black font-headline tracking-tighter">
              <Logo className="w-8 h-8 text-primary" />
              <span>ADVENTIZER</span>
            </Link>
            <p className="text-muted-foreground max-w-sm leading-relaxed italic">
              "Adventizer, energize your brand communication."
              <br /><br />
              A premier event agency dedicated to pushing the boundaries of live engagement and digital storytelling.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="rounded-none border-border hover:bg-primary hover:text-primary-foreground transition-all">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-none border-border hover:bg-primary hover:text-primary-foreground transition-all">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-none border-border hover:bg-primary hover:text-primary-foreground transition-all">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground">Expertise</h4>
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
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground">Company</h4>
            <ul className="space-y-3">
              {["Our Collective", "Manifesto", "Inquiries", "Opportunities"].map(item => (
                <li key={item}>
                  <Link 
                    href={item === "Our Collective" ? "/team" : item === "Opportunities" ? "/join" : item === "Manifesto" ? "/about" : "/#contact"} 
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
          <p>© 2024 ADVENTIZER EVENT AGENCY. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};