
"use client";

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <div
        className={cn(
          "fixed top-0 left-0 w-2.5 h-2.5 bg-primary rounded-full pointer-events-none z-[10001] mix-blend-difference transition-transform duration-150 ease-out -translate-x-1/2 -translate-y-1/2",
          isHovered && "scale-[6] bg-transparent border-[0.5px] border-primary"
        )}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div
        className={cn(
          "fixed top-0 left-0 w-10 h-10 border border-primary/50 rounded-full pointer-events-none z-[10000] transition-all duration-300 ease-out -translate-x-1/2 -translate-y-1/2",
          isHovered && "w-20 h-20 opacity-0"
        )}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </>
  );
};
