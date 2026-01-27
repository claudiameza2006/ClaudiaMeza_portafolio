"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { cn } from "@/lib/utils";

interface Star {
  id: string;
  x: number;
  y: number;
  size: number;
  bgColorClass: string; // Clase de Tailwind para el color de fondo
}

const StarCursorEffect: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);
  // Colores de fondo de Tailwind que coinciden con tu paleta
  const bgColorClasses = ['bg-primary', 'bg-secondary', 'bg-accent'];
  const starSizes = [4, 6, 8]; // Tamaños de las estrellas en píxeles

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const newStar: Star = {
      id: Math.random().toString(36).substring(2, 9), // ID único para cada estrella
      x: e.clientX,
      y: e.clientY,
      size: starSizes[Math.floor(Math.random() * starSizes.length)], // Tamaño aleatorio
      bgColorClass: bgColorClasses[Math.floor(Math.random() * bgColorClasses.length)], // Color aleatorio
    };

    setStars((prevStars) => [...prevStars, newStar]);

    // Eliminar la estrella después de que su animación termine (1.5 segundos)
    setTimeout(() => {
      setStars((prevStars) => prevStars.filter((star) => star.id !== newStar.id));
    }, 1500); 
  }, []);

  useEffect(() => {
    // Añadir el listener de movimiento del ratón al montar el componente
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      // Limpiar el listener al desmontar el componente
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[9999]">
      {stars.map((star) => (
        <div
          key={star.id}
          className={cn(
            "absolute rounded-full opacity-0 animate-star-fade-out",
            star.bgColorClass // Aplicar la clase de color de fondo de Tailwind
          )}
          style={{
            left: star.x,
            top: star.y,
            width: star.size,
            height: star.size,
            transform: `translate(-50%, -50%)`, // Centrar la estrella en el cursor
          }}
        />
      ))}
    </div>
  );
};

export default StarCursorEffect;