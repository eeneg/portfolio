import Navbar from "./sections/Navbar.jsx"
import Hero from "./sections/Hero.jsx"
import About from './sections/About.jsx'
import Projects from './sections/Projects.jsx'
import Certifications from './sections/Certifications.jsx'
import Contact from './sections/Contact.jsx'
import { useRef, useMemo, useCallback, useState, useEffect } from 'react'
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import vertexShader from "./shaders/radialGradient.vert.glsl?raw";
import fragmentShader from "./shaders/radialGradient.frag.glsl?raw";
import { Intro } from "./sections/Intro.jsx"

function App() {
  // Intro panel state: mount, fade-out, unmount
  const [introMounted, setIntroMounted] = useState(true);
  const [introHidden, setIntroHidden] = useState(false);

  useEffect(() => {
    // Show for ~2.2s, then fade for ~0.6s before unmounting
    const showMs = 2200;
    const fadeMs = 600;
    const t1 = setTimeout(() => setIntroHidden(true), showMs);
    const t2 = setTimeout(() => setIntroMounted(false), showMs + fadeMs);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);
  
  // Radial gradient plane component
  const RadialGradient = () => {
      const meshRef = useRef();
      const materialRef = useRef();

      const tempVec2 = new THREE.Vector2();

      const material = useMemo(() => {
        const mat = new THREE.ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
                uCenter: { value: new THREE.Vector2(0.5, 0.5) },
                uHover: { value: 0 }
            },
            vertexShader,
            fragmentShader,
            transparent: false
        });
        return mat;
      }, []);
  
      useFrame((state) => {
        materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
      });
      
      // Handle mouse events with smooth transitions
      const handleMouseMove = useCallback((event) => {
          const { clientX, clientY } = event;
          const x = clientX / window.innerWidth;
          const y = 1.0 - clientY / window.innerHeight; // Flip Y for WebGL
          
          tempVec2.set(x, y);

          const current = materialRef.current.uniforms.uCenter.value;
          materialRef.current.uniforms.uCenter.value.lerp(tempVec2, 0.1);
          materialRef.current.uniforms.uHover.value = 1.0;
      });
  
      const handleMouseLeave = useCallback(() => {
          materialRef.current.uniforms.uHover.value = 0.0;
          // Smooth transition back to center
          materialRef.current.uniforms.uCenter.value.lerp(new THREE.Vector2(0.5, 0.5), 0.1);
      });
  
      useEffect(() => {
          window.addEventListener('mousemove', handleMouseMove);
          window.addEventListener('mouseleave', handleMouseLeave);
          return () => {
              window.removeEventListener('mousemove', handleMouseMove);
              window.removeEventListener('mouseleave', handleMouseLeave);
          };
      }, [handleMouseMove, handleMouseLeave]);

      // Calculate aspect ratio for responsive scaling
      const aspectRatio = window.innerWidth / window.innerHeight;
      const scaleX = aspectRatio > 1 ? 2 * aspectRatio : 2;
      const scaleY = aspectRatio > 1 ? 2 : 2 / aspectRatio;

      return (
        <mesh ref={meshRef} scale={[scaleX, scaleY, 2]} position={[0, 0, 0]}>
          <planeGeometry args={[1, 1]} />
          <primitive object={material} attach="material" ref={materialRef} />
        </mesh>
      );
  };

  return (
    <>
      {introMounted && (
        <div
          className={
            `fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-700 
            ${ introHidden ? "opacity-0 pointer-events-none" : "opacity-100" }`
          }
        >
          <Intro />
        </div>
      )}
      <div className="fixed inset-0 -z-10">
          <Canvas
              camera={{ position: [0, 0, 1], zoom: 1, near: 0.1, far: 1000 }}
              gl={{ antialias: true }}
              onCreated={({ gl }) => {
                  if (!gl.getContext()) {
                      console.error("WebGL context not available");
                  }
              }}
          >
              <RadialGradient />
          </Canvas>
      </div>
      {!introMounted && (
        <div className="container mx-auto max-w-7xl text-white">
          <Navbar/>
          <Hero/>
          <About/>
          <Projects/>
          <Certifications/>
          <Contact/>
        </div>
      )}
    </>
  )
}

export default App
