// "use client";

// import { motion, useMotionValue, useSpring } from "framer-motion";
// import { useEffect, useRef } from "react";

// export default function AnimatedBackground({ children, className = "" }: any) {
//   // Create a reference to the container element
//   const containerRef = useRef<HTMLDivElement>(null);

//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   const springConfig = { damping: 50, stiffness: 200, mass: 0.5 };
//   const globX = useSpring(mouseX, springConfig);
//   const globY = useSpring(mouseY, springConfig);

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       if (!containerRef.current) return;

//       // Get the exact structural bounds of your component container block
//       const rect = containerRef.current.getBoundingClientRect();

//       // Calculate cursor position EXACTLY relative to the card wrapper boundary
//       const localX = e.clientX - rect.left;
//       const localY = e.clientY - rect.top;

//       // Center the 250px blob directly under the cursor point (subtract 125px)
//       mouseX.set(localX - 125); 
//       mouseY.set(localY - 125);
//     };

//     const container = containerRef.current;
//     if (container) {
//       container.addEventListener("mousemove", handleMouseMove);
//     }

//     return () => {
//       if (container) {
//         container.removeEventListener("mousemove", handleMouseMove);
//       }
//     };
//   }, [mouseX, mouseY]);

//   return (
//     // Added containerRef here so the script hooks onto this layout space
//     <div 
//       ref={containerRef}
//       className={`relative w-full h-full overflow-hidden min-h-[400px] ${className}`}
//     >
      
//       {/* BACKGROUND GRAPHICS LAYER */}
//       <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#120A14]">
        
//         {/* Interactive Mouse-Tracking Blob */}
//         <motion.div
//           style={{
//             x: globX,
//             y: globY,
//           }}
//           className="absolute w-[250px] h-[250px] rounded-full bg-gradient-to-tr from-[#2A7B9B]/20 to-[#EDDD53]/15 blur-[60px]"
//         />

//         {/* Static Ambient Base Blob (Deep Left Depth) */}
//         <div className="absolute top-1/4 -left-20 w-[350px] h-[350px] rounded-full bg-[#B1456B]/10 blur-[90px]" />
        
//         {/* Static Ambient Base Blob (Deep Right Depth) */}
//         <div className="absolute bottom-10 -right-20 w-[300px] h-[300px] rounded-full bg-[#6E4779]/15 blur-[80px]" />
//       </div>

//       {/* CONTENT LAYER */}
//       <div className="relative z-10 w-full h-full">
//         {children}
//       </div>
//     </div>
//   );
// }