'use client';

import { useEffect, useState, useRef } from 'react';

const PARTICLE_RATE_MS = 1000;

type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
};

export function HeroParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const nextId = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = nextId.current++;
      setParticles((prev) => [
        ...prev.slice(-6),
        {
          id,
          x: Math.random() * 100,
          y: 95 + Math.random() * 10,
          size: 2 + Math.random() * 3,
          duration: 5 + Math.random() * 4,
        },
      ]);
    }, PARTICLE_RATE_MS);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]" aria-hidden>
      {particles.map((p) => (
        <ParticleDot key={p.id} {...p} />
      ))}
    </div>
  );
}

function ParticleDot({ x, y, size, duration }: Particle) {
  return (
    <div
      className="absolute rounded-full bg-white/25"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        animation: `float-up ${duration}s ease-out forwards`,
        opacity: 0,
      }}
    />
  );
}
