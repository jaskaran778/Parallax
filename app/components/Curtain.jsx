"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Curtain = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const curtainLeftX = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const curtainRightX = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const curtainScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.5]);
  const curtainOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const mannequinScale = useTransform(scrollYProgress, [0.3, 0.6], [0.8, 1.2]);
  const mannequinOpacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  const textY = useTransform(scrollYProgress, [0.6, 0.8], [50, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);

  return (
    <div ref={containerRef} className="h-[300vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-gray-100">
        {/* Left Curtain */}
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-1/2 bg-blue-900"
          style={{
            x: curtainLeftX,
            scale: curtainScale,
            opacity: curtainOpacity,
            originX: 0,
          }}
        />

        {/* Right Curtain */}
        <motion.div
          className="absolute right-0 top-0 bottom-0 w-1/2 bg-blue-900"
          style={{
            x: curtainRightX,
            scale: curtainScale,
            opacity: curtainOpacity,
            originX: 1,
          }}
        />

        {/* Mannequin */}
        <motion.div
          className="relative z-10"
          style={{ scale: mannequinScale, opacity: mannequinOpacity }}
        >
          <img src="/ma.png" alt="Mannequin" className="w-64 h-auto" />
        </motion.div>

        {/* Text overlay */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ opacity: textOpacity }}
        >
          <motion.div
            className="text-4xl font-bold text-white text-center"
            style={{ y: textY }}
          >
            <p>New Collection</p>
            <p className="text-2xl mt-4">Elegance Redefined</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Curtain;
