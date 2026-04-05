"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';

export const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!canvasRef.current) return;

    const isDark = resolvedTheme === 'dark';
    const particleColor = isDark ? 0xffffff : 0x000000;
    const sphereColor = 0xebc41a; // Brand yellow

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current, 
      antialias: true, 
      alpha: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const particleCount = 1200;
    const positions = new Float32Array(particleCount * 3);
    const initialPositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 160;
      const y = (Math.random() - 0.5) * 160;
      const z = (Math.random() - 0.5) * 100;
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      initialPositions[i * 3] = x;
      initialPositions[i * 3 + 1] = y;
      initialPositions[i * 3 + 2] = z;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const material = new THREE.PointsMaterial({
      size: 0.35,
      color: particleColor,
      transparent: true,
      opacity: isDark ? 0.4 : 0.3,
      blending: isDark ? THREE.AdditiveBlending : THREE.NormalBlending
    });

    const particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);

    const sphereGeo = new THREE.IcosahedronGeometry(24, 1);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: sphereColor,
      wireframe: true,
      transparent: true,
      opacity: 0.08
    });
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    scene.add(sphere);

    let time = 0;
    let animationFrameId: number;

    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      time += 0.005;

      const pos = particleSystem.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < particleCount; i++) {
        // Natural drift
        const idx = i * 3;
        pos[idx] += Math.sin(time + initialPositions[idx]) * 0.01;
        pos[idx + 1] += Math.cos(time + initialPositions[idx + 1]) * 0.01;

        // Mouse interaction
        const dx = pos[idx] - (mouse.current.x * 50);
        const dy = pos[idx + 1] - (mouse.current.y * 50);
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 20) {
          const force = (20 - dist) / 20;
          pos[idx] += dx * force * 0.02;
          pos[idx + 1] += dy * force * 0.02;
        }
      }

      particleSystem.geometry.attributes.position.needsUpdate = true;
      particleSystem.rotation.y = time * 0.02;

      sphere.rotation.x = time * 0.04;
      sphere.rotation.y = time * 0.06;
      
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [resolvedTheme]);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-32 pb-12" id="hero">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />
      
      <div className="container relative z-10 mx-auto px-6 lg:px-12 max-w-[1400px]">
        <div className="flex items-center gap-3 text-[9px] md:text-[10px] font-black tracking-[0.3em] md:tracking-[0.4em] text-primary uppercase mb-6 md:mb-8 animate-fade-up">
          <div className="w-8 md:w-10 h-px bg-primary" />
          <span>Energize Your Brand Communication</span>
        </div>
        
        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-8 md:mb-12 font-headline max-w-5xl uppercase">
          <span className="block overflow-hidden">
            <span className="inline-block animate-title-reveal">ADVENTIZER</span>
          </span>
          <span className="block overflow-hidden">
            <span className="inline-block animate-title-reveal [animation-delay:0.1s]">CREATES</span>
          </span>
          <span className="block overflow-hidden">
            <span className="inline-block animate-title-reveal [animation-delay:0.2s] text-primary italic">MOMENTUM</span>
          </span>
        </h1>
        
        <p className="max-w-md md:max-w-xl text-base md:text-xl text-muted-foreground leading-relaxed mb-10 md:mb-16 animate-fade-up [animation-delay:0.4s]">
          We transform brand messages into powerful, high-energy experiences. Adventizer: where creative strategy meets technical brilliance.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-fade-up [animation-delay:0.6s]">
          <Button size="lg" className="h-14 md:h-16 px-8 md:px-10 rounded-none group text-[10px] md:text-xs font-bold uppercase tracking-widest w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 active:scale-95" asChild>
            <Link href="/works">
              Check Our Works
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="h-14 md:h-16 px-8 md:px-10 rounded-none text-[10px] md:text-xs font-bold uppercase tracking-widest w-full sm:w-auto border-primary/20 hover:border-primary transition-all duration-300 hover:bg-primary/5" asChild>
            <Link href="/book-a-demo">Start a Project</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};