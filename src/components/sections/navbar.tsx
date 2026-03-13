"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Sun, Moon, Menu, X, Instagram, Twitter, Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Works', href: '/#works' },
    { name: 'Services', href: '/#services' },
    { name: 'Team', href: '/team' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-[10001] transition-all duration-500 flex items-center px-4 lg:px-12",
        scrolled || mobileMenuOpen ? "bg-background/95 backdrop-blur-md border-b border-border h-16" : "bg-transparent h-20 md:h-24"
      )}>
        <div className="container mx-auto max-w-[1400px] flex items-center justify-between">
          <Link href="/" className="text-lg md:text-2xl font-black font-headline tracking-tighter">
            VORTEX <span className="text-primary">IMMERSIVE</span>
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map(link => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-none border border-transparent hover:border-border transition-all h-10 w-10"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden rounded-none h-10 w-10 relative z-[10002]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            
            <Button className="hidden md:flex rounded-none h-10 px-6 text-xs font-bold uppercase tracking-widest" asChild>
              <Link href="/book-a-demo">Book a Demo</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "fixed inset-0 bg-background/98 backdrop-blur-3xl z-[9999] transition-all duration-500 ease-in-out flex flex-col p-8 pt-24 lg:hidden overflow-y-auto no-scrollbar",
        mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
      )}>
        <div className="flex flex-col gap-4 md:gap-6 pt-12 relative z-10">
          {navLinks.map((link, i) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-4xl md:text-5xl font-black font-headline tracking-tighter hover:text-primary transition-colors uppercase leading-[1.1]"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/book-a-demo"
            onClick={() => setMobileMenuOpen(false)}
            className="text-4xl md:text-5xl font-black font-headline tracking-tighter text-primary italic uppercase leading-[1.1]"
          >
            Book a Demo
          </Link>
        </div>
        
        <div className="mt-auto space-y-8 pt-16 pb-8 relative z-10">
          <div className="h-px bg-border/40" />
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-2">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Connect</p>
              <p className="text-sm font-bold">hello@vorteximmersive.com</p>
              <p className="text-sm font-bold">+1 (234) 567-890</p>
            </div>
            <div className="space-y-2">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Social</p>
              <div className="flex gap-4">
                <Instagram className="w-4 h-4 hover:text-primary cursor-pointer transition-colors" />
                <Twitter className="w-4 h-4 hover:text-primary cursor-pointer transition-colors" />
                <Linkedin className="w-4 h-4 hover:text-primary cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          <div className="pt-4">
             <span className="text-7xl font-black font-headline tracking-tighter opacity-5 select-none pointer-events-none">VORTEX</span>
          </div>
        </div>
      </div>
    </>
  );
};