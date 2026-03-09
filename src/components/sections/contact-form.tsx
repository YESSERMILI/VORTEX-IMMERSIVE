
"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Send, Sparkles, Loader2, CheckCircle2 } from 'lucide-react';
import { aiContactFormAssistant, type AiContactFormAssistantOutput } from '@/ai/flows/ai-contact-form-assistant';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

export const ContactForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [aiSuggestions, setAiSuggestions] = useState<AiContactFormAssistantOutput | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const getAiHelp = async () => {
    if (!formData.message) {
      toast({
        title: "Please write something first",
        description: "Add a brief description of your project so the AI can help you.",
        variant: "destructive"
      });
      return;
    }

    setAiLoading(true);
    try {
      const suggestions = await aiContactFormAssistant({
        subject: formData.subject,
        currentMessage: formData.message
      });
      setAiSuggestions(suggestions);
    } catch (error) {
      console.error("AI Assistant Error:", error);
    } finally {
      setAiLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast({
        title: "Message Sent",
        description: "We'll get back to you shortly."
      });
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center p-12 bg-card border border-border text-center">
        <CheckCircle2 className="w-16 h-16 text-primary mb-6" />
        <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
        <p className="text-muted-foreground mb-8">Your message has been received. Our team will reach out to you within 24 hours.</p>
        <Button onClick={() => setSubmitted(false)}>Send another message</Button>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-[10px] uppercase tracking-widest text-muted-foreground">Name</Label>
          <Input id="name" required placeholder="Your full name" className="rounded-none bg-background border-border h-12" value={formData.name} onChange={handleInputChange} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-[10px] uppercase tracking-widest text-muted-foreground">Email</Label>
          <Input id="email" type="email" required placeholder="your@email.com" className="rounded-none bg-background border-border h-12" value={formData.email} onChange={handleInputChange} />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="subject" className="text-[10px] uppercase tracking-widest text-muted-foreground">Subject</Label>
        <Input id="subject" placeholder="Project inquiry" className="rounded-none bg-background border-border h-12" value={formData.subject} onChange={handleInputChange} />
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-end">
          <Label htmlFor="message" className="text-[10px] uppercase tracking-widest text-muted-foreground">Message</Label>
          <button 
            type="button" 
            onClick={getAiHelp}
            disabled={aiLoading}
            className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-primary hover:text-accent transition-colors disabled:opacity-50"
          >
            {aiLoading ? <Loader2 className="w-3 h-3 animate-spin" /> : <Sparkles className="w-3 h-3" />}
            AI Assist
          </button>
        </div>
        <Textarea id="message" placeholder="Tell us about your vision..." className="rounded-none bg-background border-border min-h-[160px] resize-none" value={formData.message} onChange={handleInputChange} />
      </div>

      {aiSuggestions && (
        <div className="bg-primary/5 border border-primary/20 p-4 space-y-4 animate-in fade-in slide-in-from-top-2 duration-500">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
            <Sparkles className="w-4 h-4" />
            Vortex AI Recommendations
          </div>
          
          <div className="space-y-3">
            <div>
              <p className="text-[10px] uppercase text-muted-foreground mb-1">Suggested Keywords</p>
              <div className="flex flex-wrap gap-2">
                {aiSuggestions.suggestedKeywords.map(kw => (
                  <Badge key={kw} variant="outline" className="rounded-none bg-background/50 text-[10px] py-0 px-2 cursor-pointer hover:bg-primary/10 transition-colors" onClick={() => setFormData({...formData, message: formData.message + ' ' + kw})}>
                    {kw}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <p className="text-[10px] uppercase text-muted-foreground mb-1">Consider these questions</p>
              <ul className="text-xs space-y-1 list-disc list-inside text-muted-foreground italic">
                {aiSuggestions.suggestedQuestions.map(q => <li key={q}>{q}</li>)}
              </ul>
            </div>

            <div>
              <p className="text-[10px] uppercase text-muted-foreground mb-1">Relevant Services</p>
              <div className="flex flex-wrap gap-2">
                {aiSuggestions.suggestedServices.map(s => (
                  <Badge key={s} variant="secondary" className="rounded-none bg-primary/20 text-primary-foreground text-[10px] py-0 px-2">
                    {s}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <Button size="lg" disabled={loading} className="h-14 rounded-none w-full md:w-auto self-start px-12 group">
        {loading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <>
            Send Message
            <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </>
        )}
      </Button>
    </form>
  );
};
