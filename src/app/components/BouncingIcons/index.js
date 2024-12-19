'use client';

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Box, styled } from '@mui/material';
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

// Define a keyframe animation for continuous rotation in CSS
const RotatingIcon = styled(Box)({
  animation: 'spin 5s linear infinite',
  '@keyframes spin': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
  transformOrigin: 'center center',
  backfaceVisibility: 'hidden', // Prevent any flipping illusion
});

// List of icons to display
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
  const iconsRef = useRef([]); // Array of refs for outer containers
  const iconDataRef = useRef([]); // Array to store icon data
  const [initialized, setInitialized] = useState(false); // State to trigger initial render

  /**
   * Initialize icon positions and velocities after the component mounts.
   * Using useLayoutEffect ensures that measurements are accurate.
   */
  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Generate initial states for 20 icons
    const initialIcons = Array.from({ length: 20 }, () => {
      const size = Math.random() * 40 + 30; // Size between 30px and 70px
      return {
        x: Math.random() * (width - size),
        y: Math.random() * (height - size),
        dx: (Math.random() - 0.5) * 3, // Horizontal speed between -1.5 and +1.5
        dy: (Math.random() - 0.5) * 3, // Vertical speed between -1.5 and +1.5
        size,
        icon: iconSet[Math.floor(Math.random() * iconSet.length)],
      };
    });

    iconDataRef.current = initialIcons;

    // Initialize icon refs
    iconsRef.current = initialIcons.map(() => React.createRef());

    // Trigger initial render
    setInitialized(true);
  }, []);

  /**
   * Animation loop that updates the positions of the icons.
   * Uses refs to manipulate styles directly for smoother animations.
   */
  useEffect(() => {
    if (!initialized) return; // Ensure icons are initialized

    const animate = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      iconDataRef.current.forEach((icon, index) => {
        let { x, y, dx, dy, size, icon: Icon } = icon;

        x += dx;
        y += dy;

        // Bounce off the left and right walls
        if (x < 0) {
          x = 0;
          dx = Math.abs(dx);
        }
        if (x + size > width) {
          x = width - size;
          dx = -Math.abs(dx);
        }

        // Bounce off the top and bottom walls
        if (y < 0) {
          y = 0;
          dy = Math.abs(dy);
        }
        if (y + size > height) {
          y = height - size;
          dy = -Math.abs(dy);
        }

        // Update the icon data
        iconDataRef.current[index] = { x, y, dx, dy, size, icon: Icon };

        // Update the icon's position via ref
        const iconRef = iconsRef.current[index];
        if (iconRef.current) {
          // Apply translation for movement; rotation is handled by CSS
          iconRef.current.style.transform = `translate(${x}px, ${y}px)`;
        }
      });

      requestRef.current = requestAnimationFrame(animate);
    };

    // Start the animation loop
    requestRef.current = requestAnimationFrame(animate);

    // Cleanup on unmount
    return () => cancelAnimationFrame(requestRef.current);
  }, [initialized]); // Runs once after icons are initialized

  return (
    <Box
      ref={containerRef}
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none', // Ensure no interaction
        background: 'radial-gradient(circle at center, #E3F2FD, #F7FAFC 80%)',
      }}
    >
      {initialized &&
        iconDataRef.current.map((iconState, index) => {
          const { size, icon: Icon } = iconState;
          return (
            <Box
              key={index}
              ref={iconsRef.current[index]}
              sx={{
                position: 'absolute',
                width: size,
                height: size,
                color: 'rgba(29,78,216,0.2)', // Subtle color
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transform: `translate(${iconState.x}px, ${iconState.y}px)`, // Initial position
                // Remove any transition on transform to prevent janky movement
              }}
            >
              <RotatingIcon
                sx={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Icon sx={{ fontSize: size }} />
              </RotatingIcon>
            </Box>
          );
        })}
    </Box>
  );
}
