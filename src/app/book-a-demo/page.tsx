
"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from '@/components/sections/navbar';
import { Footer } from '@/components/sections/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { CalendarIcon, ArrowLeft, CheckCircle2, Loader2, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

export default function BookADemoPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [date, setDate] = useState<Date>();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date) {
      toast({
        title: "Please select a date",
        description: "We need a preferred date to schedule your demo.",
        variant: "destructive"
      });
      return;
    }
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast({
        title: "Demo Request Received",
        description: "Our team will reach out to confirm your session."
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
              <h1 className="text-4xl font-black font-headline tracking-tighter uppercase">Request <span className="text-primary italic">Confirmed</span></h1>
              <p className="text-muted-foreground leading-relaxed">
                Thank you for your interest in Vortex Immersive. A specialist from our creative technology team will contact you within 24 hours to confirm your personalized demonstration.
              </p>
            </div>
            <Button onClick={() => router.push('/')} variant="outline" className="rounded-none h-14 px-8 uppercase tracking-widest font-bold">
              Return to Home
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
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-6">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Live Session</span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-headline tracking-tighter leading-[0.85] uppercase">
                  EXPERIENCE <br />
                  <span className="text-primary italic">THE FUTURE</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                  Schedule a private demonstration of our real-time rendering capabilities and interactive installation workflows.
                </p>
              </div>

              <div className="space-y-10 pt-8 max-w-lg">
                <div className="flex items-start gap-8">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-border">
                    <span className="text-[10px] font-bold text-primary">01</span>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold uppercase tracking-tight text-sm">Technical Deep Dive</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">Explore the software stack behind our stadium-scale projections and custom hardware integrations.</p>
                  </div>
                </div>
                <div className="flex items-start gap-8">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-border">
                    <span className="text-[10px] font-bold text-primary">02</span>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold uppercase tracking-tight text-sm">Interactive Preview</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">See how AI and motion tracking integrate into live environments in real-time.</p>
                  </div>
                </div>
                <div className="flex items-start gap-8">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-border">
                    <span className="text-[10px] font-bold text-primary">03</span>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold uppercase tracking-tight text-sm">Custom Q&A</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">Discuss your specific project requirements with our technical and creative directors.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-card p-8 md:p-12 border border-border relative">
                <div className="absolute top-0 right-0 p-4">
                  <Sparkles className="w-5 h-5 text-primary/20" />
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="name" className="text-[9px] uppercase tracking-[0.2em] font-black text-muted-foreground">Name</Label>
                      <Input id="name" required placeholder="Full Name" className="rounded-none bg-background border-border h-12 text-sm" />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="company" className="text-[9px] uppercase tracking-[0.2em] font-black text-muted-foreground">Company</Label>
                      <Input id="company" required placeholder="Organization" className="rounded-none bg-background border-border h-12 text-sm" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-[9px] uppercase tracking-[0.2em] font-black text-muted-foreground">Email</Label>
                    <Input id="email" type="email" required placeholder="your@email.com" className="rounded-none bg-background border-border h-12 text-sm" />
                  </div>

                  <div className="space-y-3">
                    <Label className="text-[9px] uppercase tracking-[0.2em] font-black text-muted-foreground">Preferred Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal h-12 rounded-none border-border bg-background text-sm",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 rounded-none border-border" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                          className="rounded-none"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="message" className="text-[9px] uppercase tracking-[0.2em] font-black text-muted-foreground">Special Requests</Label>
                    <Textarea id="message" placeholder="Any specific topics or technology you'd like to see?" className="rounded-none bg-background border-border min-h-[120px] resize-none text-sm" />
                  </div>

                  <Button type="submit" disabled={loading} className="w-full h-14 rounded-none group text-[10px] font-black uppercase tracking-[0.3em]">
                    {loading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      "Schedule Session"
                    )}
                  </Button>
                  <p className="text-[9px] text-center text-muted-foreground uppercase tracking-[0.2em] font-bold">
                    Confirmations are sent via email within 24 hours.
                  </p>
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
