
"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from '@/components/sections/navbar';
import { Footer } from '@/components/sections/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, CheckCircle2, Loader2, Sparkles, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function JoinPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate application submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast({
        title: "Application Received",
        description: "Our creative directors will review your portfolio."
      });
    }, 2000);
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <section className="flex-1 flex items-center justify-center p-6">
          <div className="max-w-md w-full text-center space-y-8 animate-in fade-in zoom-in duration-500">
            <div className="w-24 h-24 bg-primary/5 border border-primary/20 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-12 h-12 text-primary" />
            </div>
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl font-black font-headline tracking-tighter uppercase">Application <span className="text-primary italic">Received</span></h1>
              <p className="text-muted-foreground leading-relaxed">
                Thank you for your interest in joining the collective. Our team reviews all portfolios periodically. If your vision aligns with our current project trajectory, we will reach out.
              </p>
            </div>
            <Button onClick={() => router.push('/team')} variant="outline" className="rounded-none h-14 px-8 uppercase tracking-widest font-bold">
              Back to Team
            </Button>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-40 pb-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <Button 
            variant="ghost" 
            className="mb-12 pl-0 text-muted-foreground hover:text-primary transition-colors gap-2"
            onClick={() => router.back()}
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-6 space-y-12">
              <div className="space-y-6">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Recruitment</span>
                <h1 className="text-2xl sm:text-5xl lg:text-7xl font-black font-headline tracking-tighter leading-[0.85] uppercase">
                  SHAPE THE <br />
                  <span className="text-primary italic">FUTURE REALM</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed italic max-w-xl">
                  Vortex Immersive is constantly seeking boundary-pushing artists, engineers, and visionaries to join our global collective.
                </p>
              </div>

              <div className="space-y-10 pt-8 max-w-lg">
                <div className="flex items-start gap-8 group">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-border group-hover:border-primary transition-colors">
                    <Sparkles className="w-5 h-5 text-primary/40 group-hover:text-primary transition-colors" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold uppercase tracking-tight text-sm">Creative Freedom</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">Work on stadium-scale projects and experimental installations with complete technical autonomy.</p>
                  </div>
                </div>
                <div className="flex items-start gap-8 group">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-border group-hover:border-primary transition-colors">
                    <Send className="w-5 h-5 text-primary/40 group-hover:text-primary transition-colors" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold uppercase tracking-tight text-sm">Global Impact</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">Deploy your work across five continents in some of the world's most iconic locations.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-card p-8 md:p-12 border border-border relative">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="name" className="text-[9px] uppercase tracking-[0.2em] font-black text-muted-foreground">Name</Label>
                      <Input id="name" required placeholder="Full Name" className="rounded-none bg-background border-border h-12 text-sm" />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-[9px] uppercase tracking-[0.2em] font-black text-muted-foreground">Email</Label>
                      <Input id="email" type="email" required placeholder="your@email.com" className="rounded-none bg-background border-border h-12 text-sm" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label className="text-[9px] uppercase tracking-[0.2em] font-black text-muted-foreground">Primary Discipline</Label>
                      <Select required>
                        <SelectTrigger className="rounded-none bg-background border-border h-12 text-sm">
                          <SelectValue placeholder="Select your expertise" />
                        </SelectTrigger>
                        <SelectContent className="rounded-none border-border">
                          <SelectItem value="mapping">Projection Mapping</SelectItem>
                          <SelectItem value="visuals">Stage Visuals</SelectItem>
                          <SelectItem value="interactive">Interactive Tech</SelectItem>
                          <SelectItem value="content">Content Production</SelectItem>
                          <SelectItem value="engineering">Software/Hardware Engineering</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="portfolio" className="text-[9px] uppercase tracking-[0.2em] font-black text-muted-foreground">Portfolio Link</Label>
                      <Input id="portfolio" required placeholder="Link to your work" className="rounded-none bg-background border-border h-12 text-sm" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="vision" className="text-[9px] uppercase tracking-[0.2em] font-black text-muted-foreground">Your Vision</Label>
                    <Textarea id="vision" placeholder="What is the future of immersive experience?" className="rounded-none bg-background border-border min-h-[140px] resize-none text-sm italic" />
                  </div>

                  <Button type="submit" disabled={loading} className="w-full h-14 rounded-none group text-[10px] font-black uppercase tracking-[0.3em]">
                    {loading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      "Submit Application"
                    )}
                  </Button>
                  
                  <div className="pt-4 border-t border-border mt-8">
                     <p className="text-[9px] text-center text-muted-foreground uppercase tracking-[0.2em] font-bold leading-relaxed">
                       We are a privacy-first studio. Your portfolio and data are handled with complete confidentiality.
                     </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
