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
      
      {/* Stats Quick Ribbon - Professional Silver Ribbon */}
      <section className="bg-primary text-primary-foreground py-16 overflow-hidden relative border-y border-white/5">
        <div className="flex whitespace-nowrap animate-marquee items-center gap-12">
          {Array.from({length: 10}).map((_, i) => (
            <div key={i} className="flex items-center gap-12 text-[10px] font-black uppercase tracking-[0.5em]">
              <span>Projection Mapping</span>
              <div className="w-1.5 h-1.5 rotate-45 bg-primary-foreground/30" />
              <span>Stage Visuals</span>
              <div className="w-1.5 h-1.5 rotate-45 bg-primary-foreground/30" />
              <span>Interactive Tech</span>
              <div className="w-1.5 h-1.5 rotate-45 bg-primary-foreground/30" />
            </div>
          ))}
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
            display: inline-flex;
            width: max-content;
          }
        `}} />
      </section>

      <Works />
      <Services />
      <About />
      
      {/* Contact Section */}
      <section id="contact" className="py-32 bg-background border-t border-border">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Get in Touch</span>
                <h2 className="text-4xl md:text-6xl font-black font-headline tracking-tighter leading-none">
                  Ready to Transform Your <span className="text-primary italic">Vision?</span>
                </h2>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Whether you&apos;re planning a stadium spectacle or an intimate interactive experience, our team is here to bring your ideas to life.
              </p>
              
              <div className="space-y-6 pt-8">
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-12 h-12 flex items-center justify-center border border-border group-hover:border-primary transition-colors">
                    <span className="text-xs font-bold text-primary">EM</span>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Email us</p>
                    <p className="text-lg font-bold">hello@vorteximmersive.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-12 h-12 flex items-center justify-center border border-border group-hover:border-primary transition-colors">
                    <span className="text-xs font-bold text-primary">PH</span>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Call us</p>
                    <p className="text-lg font-bold">+1 (234) 567-890</p>
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
