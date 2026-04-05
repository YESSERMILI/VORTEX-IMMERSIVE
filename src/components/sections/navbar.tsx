"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Sun, Moon, Menu, X, Instagram, Twitter, Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';

const Logo = ({ className }: { className?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={className}>
    <path d="M4 20L12 4L20 20" strokeLinecap="square" strokeLinejoin="miter" />
    <path d="M8 14H16" strokeLinecap="square" strokeLinejoin="miter" />
  </svg>
);

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
    { name: 'Works', href: '/works' },
    { name: 'Services', href: '/services' },
    { name: 'Team', href: '/team' },
    { name: 'About', href: '/about' },
  ];

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-[10001] transition-all duration-500 flex items-center px-4 lg:px-12",
        scrolled || mobileMenuOpen ? "bg-background/95 backdrop-blur-md border-b border-border h-16" : "bg-transparent h-20 md:h-24"
      )}>
        <div className="container mx-auto max-w-[1400px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-lg md:text-2xl font-black font-headline tracking-tighter">
            <Logo className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            <span>ADVENTIZER</span>
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
              className="lg:hidden rounded-none h-10 w-10 relative z-[10002] transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            
            <Button className="hidden md:flex rounded-none h-10 px-6 text-xs font-bold uppercase tracking-widest bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <Link href="/#contact">Get Energized</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "fixed inset-0 bg-background z-[9999] transition-all duration-500 ease-in-out flex flex-col p-8 pt-24 lg:hidden overflow-y-auto no-scrollbar backdrop-blur-3xl",
        mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
      )}>
        <div className="flex flex-col gap-4 md:gap-6 pt-12 relative z-10">
          {navLinks.map((link, i) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl sm:text-4xl md:text-5xl font-black font-headline tracking-tighter hover:text-primary transition-colors uppercase leading-[1.1]"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-3xl sm:text-4xl md:text-5xl font-black font-headline tracking-tighter text-primary italic uppercase leading-[1.1]"
          >
            Get Energized
          </Link>
        </div>
        
        <div className="mt-auto space-y-10 pt-16 pb-8 relative z-10">
          <div className="h-px bg-border/40" />
          <div className="flex flex-col sm:grid sm:grid-cols-2 gap-8">
            <div className="space-y-3">
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-black">Connect</p>
              <p className="text-xs sm:text-sm font-bold break-all">hello@adventizer.com</p>
              <p className="text-xs sm:text-sm font-bold">+1 (234) ADVENT</p>
            </div>
            <div className="space-y-3">
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-black">Social</p>
              <div className="flex gap-6">
                <Instagram className="w-5 h-5 hover:text-primary cursor-pointer transition-colors" />
                <Twitter className="w-5 h-5 hover:text-primary cursor-pointer transition-colors" />
                <Linkedin className="w-5 h-5 hover:text-primary cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          <div className="pt-4 overflow-hidden">
             <span className="text-5xl sm:text-7xl lg:text-9xl font-black font-headline tracking-tighter opacity-5 select-none pointer-events-none text-primary uppercase block whitespace-nowrap">ADVENTIZER</span>
          </div>
        </div>
      </div>
    </>
  );
};
