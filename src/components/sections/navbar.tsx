
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Works', href: '/#works' },
    { name: 'Services', href: '/#services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 h-20 flex items-center px-6 lg:px-12",
      scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border h-16" : "bg-transparent h-24"
    )}>
      <div className="container mx-auto max-w-[1400px] flex items-center justify-between">
        <Link href="/" className="text-xl md:text-2xl font-black font-headline tracking-tighter">
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

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-none border border-transparent hover:border-border transition-all"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden rounded-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          
          <Button className="hidden md:flex rounded-none h-10 px-6 text-xs font-bold uppercase tracking-widest" asChild>
            <Link href="/book-a-demo">Book a Demo</Link>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 top-20 bg-background z-[999] transition-transform duration-500 flex flex-col p-12 lg:hidden",
        mobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col gap-8">
          {navLinks.map((link, i) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-4xl font-black font-headline tracking-tighter hover:text-primary transition-colors"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/book-a-demo"
            onClick={() => setMobileMenuOpen(false)}
            className="text-4xl font-black font-headline tracking-tighter text-primary italic"
          >
            Book a Demo
          </Link>
        </div>
        <div className="mt-auto space-y-8">
          <div className="h-px bg-border" />
          <div className="space-y-2">
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Contact us</p>
            <p className="text-xl font-bold">hello@vorteximmersive.com</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
