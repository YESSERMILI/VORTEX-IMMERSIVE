
import React from 'react';
import { Button } from '@/components/ui/button';
import { Instagram, Linkedin, Twitter, Github, ArrowUpRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-card pt-24 pb-12 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-24">
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-3xl font-black font-headline tracking-tighter">VORTEX <span className="text-primary">IMMERSIVE</span></h2>
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
              <Button variant="outline" size="icon" className="rounded-none border-border hover:bg-primary hover:text-primary-foreground transition-all">
                <Github className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground">Services</h4>
            <ul className="space-y-3">
              {["Projection Mapping", "Stage Visuals", "Interactive Installations", "Content Production"].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center group">
                    {item}
                    <ArrowUpRight className="ml-1 w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground">Locations</h4>
            <ul className="space-y-3">
              {["New York", "Dubai", "London", "Seoul"].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center group">
                    {item}
                    <ArrowUpRight className="ml-1 w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
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
