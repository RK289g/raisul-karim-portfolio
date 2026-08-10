"use client";

import React, { useRef, useId } from "react";
import { Box } from "@mantine/core";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useAnimationFrame,
  MotionValue,
} from "framer-motion";

/* ================= GRID ================= */

function GridPattern({
  offsetX,
  offsetY,
  patternId,
}: {
  offsetX: MotionValue<number>;
  offsetY: MotionValue<number>;
  patternId: string;
}) {
  return (
    <svg width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
      <defs>
        <motion.pattern
          id={patternId}
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
          x={offsetX}
          y={offsetY}
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="var(--portfolio-grid-stroke)"
            strokeWidth="1"
          />
        </motion.pattern>
      </defs>

      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}

/* ================= BACKGROUND ================= */

export default function AnimatedGridBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  // UNIQUE ID PER COMPONENT
  const patternId = useId();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);

  useAnimationFrame(() => {
    offsetX.set((offsetX.get() + 0.45) % 40);
    offsetY.set((offsetY.get() + 0.45) % 40);
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const mask = useMotionTemplate`
    radial-gradient(260px circle at ${mouseX}px ${mouseY}px, black 40%, transparent 100%)
  `;

  return (
    <Box
      ref={containerRef}
      onMouseMove={handleMouseMove}
      style={{
        position: "absolute",
        inset: 0,
      }}
    >
      {/* BASE GRID */}
      <Box
        style={{
          position: "absolute",
          inset: 0,
          maskImage:
            "radial-gradient(circle at center, transparent 0%, black 50%, black 100%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, transparent 0%, black 50%, black 100%)",
          opacity: "var(--portfolio-grid-layer-base-opacity)",
        }}
      >
        <GridPattern
          offsetX={offsetX}
          offsetY={offsetY}
          patternId={patternId}
        />
      </Box>

      {/* ACTIVE GRID */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          maskImage: mask,
          WebkitMaskImage: mask,
          opacity: "var(--portfolio-grid-layer-active-opacity)",
        }}
      >
        <GridPattern
          offsetX={offsetX}
          offsetY={offsetY}
          patternId={patternId}
        />
      </motion.div>

      {/* SIDE SPOTLIGHTS */}
      <Box style={{ position: "absolute", inset: 0, zIndex: 1 }}>
        <Box
          style={{
            position: "absolute",
            left: "-10%",
            top: "50%",
            transform: "translateY(-50%)",
            width: "40%",
            height: "60%",
            background:
              "radial-gradient(circle, var(--portfolio-grid-spotlight), transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <Box
          style={{
            position: "absolute",
            right: "-10%",
            top: "50%",
            transform: "translateY(-50%)",
            width: "40%",
            height: "60%",
            background:
              "radial-gradient(circle, var(--portfolio-grid-spotlight), transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </Box>

      {/* CENTER FADE */}
      <Box
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, transparent 0%, var(--portfolio-grid-vignette-mid) 65%, var(--portfolio-grid-vignette-edge) 100%)",
          zIndex: 1,
        }}
      />
    </Box>
  );
}
