"use client";

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 15);

    return () => clearInterval(interval);
  }, []);

  if (!loading) return null;

  return (
    <div className={cn(
      "fixed inset-0 bg-background z-[99999] flex flex-col items-center justify-center gap-8 md:gap-12 transition-all duration-800",
      counter === 100 && "opacity-0 invisible"
    )}>
      <div className="flex flex-col items-center gap-4 md:gap-6">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-primary animate-pulse md:w-12 md:h-12">
          <path d="M4 20L12 4L20 20" strokeLinecap="square" strokeLinejoin="miter" />
          <path d="M8 14H16" strokeLinecap="square" strokeLinejoin="miter" />
        </svg>
        <div className="flex overflow-hidden text-2xl md:text-5xl lg:text-6xl font-black tracking-tighter font-headline uppercase">
          {["A", "D", "V", "E", "N", "T", "I", "Z", "E", "R"].map((letter, i) => (
            <span
              key={i}
              className="inline-block animate-title-reveal"
              style={{ animationDelay: `${0.1 + i * 0.05}s` }}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4 w-48 md:w-64">
        <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] w-12 text-primary">{counter}%</span>
        <div className="flex-1 h-px bg-border relative overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full bg-primary transition-all duration-100 ease-out"
            style={{ width: `${counter}%` }}
          />
        </div>
      </div>
    </div>
  );
};