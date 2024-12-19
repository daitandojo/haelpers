'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';
import {
  Gavel,
  Handyman,
  Brush,
  Translate,
  School,
  Build,
  Carpenter,
  MedicalServices,
  Architecture,
  Engineering,
  Code,
  BusinessCenter,
  LocalLibrary,
} from '@mui/icons-material';

const iconSet = [
  Gavel,
  Handyman,
  Brush,
  Translate,
  School,
  Build,
  Carpenter,
  MedicalServices,
  Architecture,
  Engineering,
  Code,
  BusinessCenter,
  LocalLibrary,
];

export default function BouncingIcons() {
  const containerRef = useRef(null);
  const requestRef = useRef(null);
  const timeRef = useRef(0);
  const [iconStates, setIconStates] = useState([]);

  useEffect(() => {
    // Once the container is available, initialize icons
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const initialIcons = Array.from({ length: 20 }, () => {
      const size = Math.random() * 40 + 30;
      return {
        x: Math.random() * (width - size),
        y: Math.random() * (height - size),
        dx: (Math.random() - 0.5) * 1.5,
        dy: (Math.random() - 0.5) * 1.5,
        size,
        icon: iconSet[Math.floor(Math.random() * iconSet.length)],
      };
    });
    setIconStates(initialIcons);
  }, []);

  const animate = () => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    timeRef.current += 0.02;

    setIconStates((prev) =>
      prev.map((iconState, index) => {
        let { x, y, dx, dy, size, icon } = iconState;
        x += dx;
        y += dy;
        // Bounce off walls
        if (x < 0) { x = 0; dx = Math.abs(dx); }
        if (y < 0) { y = 0; dy = Math.abs(dy); }
        if (x + size > width) { x = width - size; dx = -Math.abs(dx); }
        if (y + size > height) { y = height - size; dy = -Math.abs(dy); }
        return { x, y, dx, dy, size, icon };
      })
    );

    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (iconStates.length > 0) {
      requestRef.current = requestAnimationFrame(animate);
    }
    return () => cancelAnimationFrame(requestRef.current);
  }, [iconStates]);

  return (
    <Box
      ref={containerRef}
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 0, // behind main content which should have zIndex:1
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none', // ensure no interaction
        background: 'radial-gradient(circle at center, #E3F2FD, #F7FAFC 80%)',
      }}
    >
      {iconStates.map((iconState, index) => {
        const { x, y, size, icon: Icon } = iconState;
        const t = timeRef.current;
        // Make them slightly more visible for debugging
        const fade = 0.1 + 0.1 * (Math.sin(t + index) + 1) / 2; 
        const rotate = (t * 30 * (index + 1)) % 360;
        const driftX = Math.sin(t + index) * 8;
        const driftY = Math.cos(t + index) * 8;

        return (
          <Box
            key={index}
            sx={{
              position: 'absolute',
              left: x + driftX,
              top: y + driftY,
              width: size,
              height: size,
              color: `rgba(29,78,216,${fade})`,
              transform: `rotate(${rotate}deg)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 0.1s linear',
            }}
          >
            <Icon sx={{ fontSize: size }} />
          </Box>
        );
      })}
    </Box>
  );
}
