
"use client";

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { SERVICES } from '@/components/sections/services';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Navbar } from '@/components/sections/navbar';
import { Footer } from '@/components/sections/footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const router = useRouter();
  const service = SERVICES.find(s => s.id === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-black font-headline">Service Not Found</h1>
          <Button onClick={() => router.push('/')}>Return Home</Button>
        </div>
      </div>
    );
  }

  const imageData = PlaceHolderImages.find(img => img.id.includes('work-1')) || PlaceHolderImages[0];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-end pb-24 overflow-hidden border-b border-border">
        <Image 
          src={imageData.imageUrl} 
          alt={service.title} 
          fill 
          className="object-cover opacity-20"
        />
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px] relative z-10">
          <Button 
            variant="ghost" 
            className="mb-8 pl-0 text-muted-foreground hover:text-primary transition-colors gap-2"
            onClick={() => router.back()}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-primary text-xs font-bold uppercase tracking-widest">
              <div className="w-8 h-px bg-primary" />
              Service Details
            </div>
            <h1 className="text-6xl md:text-8xl font-black font-headline tracking-tighter leading-none">
              {service.title.split(' ')[0]} <br />
              <span className="text-primary italic">{service.title.split(' ').slice(1).join(' ')}</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
            <div className="space-y-8">
              <h2 className="text-3xl font-black font-headline tracking-tight">Redefining the <span className="text-primary">Experience</span></h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {service.desc} We don&apos;t just deliver a service; we craft a narrative that resonates with your audience on a visceral level.
              </p>
              
              <div className="space-y-6 pt-8">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground">Key Capabilities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.tags.map(tag => (
                    <div key={tag} className="flex items-center gap-3 p-4 border border-border bg-background/50">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="text-sm font-bold uppercase tracking-widest">{tag}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-3 p-4 border border-border bg-background/50">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-sm font-bold uppercase tracking-widest">Custom R&D</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <div className="aspect-video relative border border-border overflow-hidden">
                <Image 
                  src={PlaceHolderImages.find(img => img.id === 'work-6')?.imageUrl || imageData.imageUrl} 
                  alt="Process" 
                  fill 
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              
              <div className="p-8 border border-primary/20 bg-primary/5 space-y-6">
                <h3 className="text-2xl font-black font-headline tracking-tight">Ready to start?</h3>
                <p className="text-muted-foreground">Our engineers and creatives are ready to discuss your project requirements.</p>
                <Button className="w-full rounded-none h-14 group" asChild>
                  <Link href="/#contact">
                    Get a Quote
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
