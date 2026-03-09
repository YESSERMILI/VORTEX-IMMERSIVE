"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const particleCount = 2000;
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 150;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 150;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 80;

      velocities[i * 3] = (Math.random() - 0.5) * 0.015;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.015;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.015;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const material = new THREE.PointsMaterial({
      size: 0.3,
      color: 0xffffff,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending
    });

    const particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);

    const sphereGeo = new THREE.IcosahedronGeometry(15, 2);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.03
    });
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    scene.add(sphere);

    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.005;

      const pos = particleSystem.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        pos[i * 3] += velocities[i * 3];
        pos[i * 3 + 1] += velocities[i * 3 + 1];
        pos[i * 3 + 2] += velocities[i * 3 + 2];

        if (Math.abs(pos[i * 3]) > 75) velocities[i * 3] *= -1;
        if (Math.abs(pos[i * 3 + 1]) > 75) velocities[i * 3 + 1] *= -1;
        if (Math.abs(pos[i * 3 + 2]) > 40) velocities[i * 3 + 2] *= -1;
      }

      particleSystem.geometry.attributes.position.needsUpdate = true;
      particleSystem.rotation.y = time * 0.03;

      sphere.rotation.x = time * 0.05;
      sphere.rotation.y = time * 0.08;
      
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden py-32 pb-48" id="hero">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />
      
      <div className="container relative z-10 mx-auto px-6 lg:px-12 max-w-[1400px]">
        <div className="flex items-center gap-4 text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase mb-8 animate-fade-up">
          <div className="w-10 h-px bg-primary" />
          <span>Creative Technology Studio</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] mb-12 font-headline max-w-5xl">
          <span className="block overflow-hidden">
            <span className="inline-block animate-title-reveal">We Create</span>
          </span>
          <span className="block overflow-hidden">
            <span className="inline-block animate-title-reveal [animation-delay:0.1s]">Immersive</span>
          </span>
          <span className="block overflow-hidden">
            <span className="inline-block animate-title-reveal [animation-delay:0.2s] text-primary">Experiences</span>
          </span>
        </h1>
        
        <p className="max-w-lg text-lg text-muted-foreground leading-relaxed mb-16 animate-fade-up [animation-delay:0.4s]">
          Transforming spaces into digital wonders through projection mapping, interactive installations, and large-scale visual spectacles that captivate audiences worldwide.
        </p>
        
        <div className="flex flex-wrap gap-6 animate-fade-up [animation-delay:0.6s]">
          <Button size="lg" className="h-16 px-10 rounded-none group text-sm font-bold uppercase tracking-widest" asChild>
            <a href="#works">
              Explore Works
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button variant="outline" size="lg" className="h-16 px-10 rounded-none text-sm font-bold uppercase tracking-widest" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
};