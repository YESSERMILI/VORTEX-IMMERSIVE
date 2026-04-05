import { Preloader } from '@/components/ui/preloader';
import { CustomCursor } from '@/components/ui/custom-cursor';
import { Navbar } from '@/components/sections/navbar';
import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { Works } from '@/components/sections/works';
import { About } from '@/components/sections/about';
import { ContactForm } from '@/components/sections/contact-form';
import { Footer } from '@/components/sections/footer';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
  return (
    <main className="relative">
      <Preloader />
      <CustomCursor />
      <Navbar />
      
      <Hero />
      
      {/* Brand Ribbon */}
      <section className="bg-primary text-primary-foreground py-16 overflow-hidden relative border-y border-white/5">
        <div className="flex whitespace-nowrap animate-marquee items-center gap-12">
          {Array.from({length: 10}).map((_, i) => (
            <div key={i} className="flex items-center gap-12 text-[10px] font-black uppercase tracking-[0.5em]">
              <span>Energizing Brands</span>
              <div className="w-1.5 h-1.5 rotate-45 bg-primary-foreground/30" />
              <span>Adventizer Agency</span>
              <div className="w-1.5 h-1.5 rotate-45 bg-primary-foreground/30" />
              <span>Event Strategy</span>
              <div className="w-1.5 h-1.5 rotate-45 bg-primary-foreground/30" />
            </div>
          ))}
        </div>
      </section>

      <Works />
      <Services />
      <About />
      
      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 bg-background border-t border-border">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Get Energized</span>
                <h2 className="text-3xl md:text-6xl font-black font-headline tracking-tighter leading-none uppercase">
                  Ready to Ignite Your <span className="text-primary italic">Brand?</span>
                </h2>
              </div>
              <p className="text-base md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                Adventizer helps you bridge the gap between static communication and high-energy engagement. Let's talk about your next project.
              </p>
              
              <div className="space-y-6 pt-8">
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-12 h-12 flex items-center justify-center border border-border group-hover:border-primary transition-colors">
                    <span className="text-xs font-bold text-primary">HI</span>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Email us</p>
                    <p className="text-base md:text-lg font-bold">hello@adventizer.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 md:p-12 border border-border relative">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Toaster />
    </main>
  );
}