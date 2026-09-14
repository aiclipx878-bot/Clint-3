import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'motion/react';
import { ZoomIn, X, MessageCircle, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';
import whatsappUnbanPoster from '../assets/images/whatsapp_unban_poster_1789372284553.jpg';
import { AGENCY_CONFIG } from '../data/cases';

export function Hero3DPhone() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 520;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.8);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // Group for the entire phone assembly
    const phoneGroup = new THREE.Group();
    scene.add(phoneGroup);

    // Lighting setup for cinematic dark metallic look
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const emeraldKeyLight = new THREE.PointLight(0x18d65a, 4.5, 15);
    emeraldKeyLight.position.set(3.5, 4, 4);
    scene.add(emeraldKeyLight);

    const rimLight = new THREE.DirectionalLight(0x35e875, 2.0);
    rimLight.position.set(-4, -2, -3);
    scene.add(rimLight);

    const subtleTopLight = new THREE.DirectionalLight(0xffffff, 1.4);
    subtleTopLight.position.set(0, 5, 2.5);
    scene.add(subtleTopLight);

    // 9:16 Aspect Ratio Phone Dimensions matching the WhatsApp Unban poster
    const screenW = 3.25;
    const screenH = 5.78; // 3.25 / (9/16) = 5.777...
    const phoneW = screenW + 0.2;
    const phoneH = screenH + 0.2;
    const phoneD = 0.32;
    const radius = 0.35;

    // Create Phone Chassis (Rounded Extruded Box)
    const chassisShape = new THREE.Shape();
    chassisShape.moveTo(-phoneW / 2 + radius, -phoneH / 2);
    chassisShape.lineTo(phoneW / 2 - radius, -phoneH / 2);
    chassisShape.quadraticCurveTo(phoneW / 2, -phoneH / 2, phoneW / 2, -phoneH / 2 + radius);
    chassisShape.lineTo(phoneW / 2, phoneH / 2 - radius);
    chassisShape.quadraticCurveTo(phoneW / 2, phoneH / 2, phoneW / 2 - radius, phoneH / 2);
    chassisShape.lineTo(-phoneW / 2 + radius, phoneH / 2);
    chassisShape.quadraticCurveTo(-phoneW / 2, phoneH / 2, -phoneW / 2, phoneH / 2 - radius);
    chassisShape.lineTo(-phoneW / 2, -phoneH / 2 + radius);
    chassisShape.quadraticCurveTo(-phoneW / 2, -phoneH / 2, -phoneW / 2 + radius, -phoneH / 2);

    const extrudeSettings = {
      depth: phoneD,
      bevelEnabled: true,
      bevelSegments: 5,
      steps: 1,
      bevelSize: 0.06,
      bevelThickness: 0.06,
    };

    const geometry = new THREE.ExtrudeGeometry(chassisShape, extrudeSettings);
    geometry.center();

    // Chassis Material: Dark Cyber Titanium with subtle green metallic sheen
    const bodyMaterial = new THREE.MeshStandardMaterial({
      color: 0x080c09,
      metalness: 0.88,
      roughness: 0.22,
    });
    const phoneMesh = new THREE.Mesh(geometry, bodyMaterial);
    phoneGroup.add(phoneMesh);

    // Screen Shape with rounded corners
    const screenShape = new THREE.Shape();
    const sRadius = 0.26;
    screenShape.moveTo(-screenW / 2 + sRadius, -screenH / 2);
    screenShape.lineTo(screenW / 2 - sRadius, -screenH / 2);
    screenShape.quadraticCurveTo(screenW / 2, -screenH / 2, screenW / 2, -screenH / 2 + sRadius);
    screenShape.lineTo(screenW / 2, screenH / 2 - sRadius);
    screenShape.quadraticCurveTo(screenW / 2, screenH / 2, screenW / 2 - sRadius, screenH / 2);
    screenShape.lineTo(-screenW / 2 + sRadius, screenH / 2);
    screenShape.quadraticCurveTo(-screenW / 2, screenH / 2, -screenW / 2, screenH / 2 - sRadius);
    screenShape.lineTo(-screenW / 2, -screenH / 2 + sRadius);
    screenShape.quadraticCurveTo(-screenW / 2, -screenH / 2, -screenW / 2 + sRadius, -screenH / 2);

    const screenGeometry = new THREE.ShapeGeometry(screenShape);

    // Map UVs so texture fills the 9:16 screen precisely from (0,0) to (1,1)
    const pos = screenGeometry.attributes.position;
    const uvs: number[] = [];
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const u = (x + screenW / 2) / screenW;
      const v = (y + screenH / 2) / screenH;
      uvs.push(u, v);
    }
    screenGeometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));

    // Load WhatsApp Unban Image as it is
    const textureLoader = new THREE.TextureLoader();
    const posterTexture = textureLoader.load(
      whatsappUnbanPoster,
      (tex) => {
        tex.colorSpace = THREE.SRGBColorSpace;
        tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
        tex.minFilter = THREE.LinearMipmapLinearFilter;
        tex.magFilter = THREE.LinearFilter;
        tex.generateMipmaps = true;
        tex.needsUpdate = true;
        renderer.render(scene, camera);
      }
    );

    const screenMaterial = new THREE.MeshBasicMaterial({
      map: posterTexture,
      toneMapped: false,
    });
    const screenMesh = new THREE.Mesh(screenGeometry, screenMaterial);
    screenMesh.position.z = phoneD / 2 + 0.04;
    phoneGroup.add(screenMesh);

    // Subtle edge rim border for premium phone frame
    const rimGeometry = new THREE.ShapeGeometry(screenShape);
    const rimEdges = new THREE.EdgesGeometry(rimGeometry);
    const rimLineMat = new THREE.LineBasicMaterial({
      color: 0x18d65a,
      linewidth: 2,
      transparent: true,
      opacity: 0.45,
    });
    const rimLines = new THREE.LineSegments(rimEdges, rimLineMat);
    rimLines.position.z = phoneD / 2 + 0.045;
    phoneGroup.add(rimLines);

    // Orbiting Rings
    const ringGeo = new THREE.TorusGeometry(4.2, 0.02, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x18d65a,
      transparent: true,
      opacity: 0.35,
    });
    const orbitRing1 = new THREE.Mesh(ringGeo, ringMat);
    orbitRing1.rotation.x = Math.PI / 3;
    orbitRing1.rotation.y = Math.PI / 6;
    scene.add(orbitRing1);

    const ringGeo2 = new THREE.TorusGeometry(3.6, 0.015, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x35e875,
      transparent: true,
      opacity: 0.2,
    });
    const orbitRing2 = new THREE.Mesh(ringGeo2, ringMat2);
    orbitRing2.rotation.x = -Math.PI / 4;
    orbitRing2.rotation.y = Math.PI / 3;
    scene.add(orbitRing2);

    // Floating Particles
    const particlesCount = 70;
    const pPositions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i += 3) {
      pPositions[i] = (Math.random() - 0.5) * 12;
      pPositions[i + 1] = (Math.random() - 0.5) * 12;
      pPositions[i + 2] = (Math.random() - 0.5) * 8;
    }
    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
    const particlesMat = new THREE.PointsMaterial({
      color: 0x18d65a,
      size: 0.08,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const particlePoints = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particlePoints);

    // Interaction State (Target vs Current Rotation)
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;
      mouse.targetX = (clientX / rect.width - 0.5) * 0.9;
      mouse.targetY = -(clientY / rect.height - 0.5) * 0.9;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = container.getBoundingClientRect();
        const clientX = e.touches[0].clientX - rect.left;
        const clientY = e.touches[0].clientY - rect.top;
        mouse.targetX = (clientX / rect.width - 0.5) * 0.7;
        mouse.targetY = -(clientY / rect.height - 0.5) * 0.7;
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    container.addEventListener('touchmove', onTouchMove, { passive: true });

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Smooth lerping towards mouse cursor
        mouse.x += (mouse.targetX - mouse.x) * 0.06;
        mouse.y += (mouse.targetY - mouse.y) * 0.06;

        phoneGroup.rotation.y = mouse.x + Math.sin(elapsedTime * 0.8) * 0.08;
        phoneGroup.rotation.x = -mouse.y + Math.cos(elapsedTime * 0.7) * 0.06;
        phoneGroup.position.y = Math.sin(elapsedTime * 1.2) * 0.15;

        // Rotate orbit rings slowly
        orbitRing1.rotation.z = elapsedTime * 0.15;
        orbitRing2.rotation.z = -elapsedTime * 0.12;

        // Drift particles
        particlePoints.rotation.y = elapsedTime * 0.04;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize Observer
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      screenGeometry.dispose();
      rimGeometry.dispose();
      rimEdges.dispose();
      ringGeo.dispose();
      ringGeo2.dispose();
      particlesGeo.dispose();
      bodyMaterial.dispose();
      screenMaterial.dispose();
      rimLineMat.dispose();
      ringMat.dispose();
      ringMat2.dispose();
      particlesMat.dispose();
      posterTexture.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[480px] sm:h-[560px] lg:h-[640px] flex items-center justify-center select-none group">
      {/* Ambient background glow */}
      <div className="absolute w-80 h-80 rounded-full bg-[#18D65A]/15 blur-[100px] pointer-events-none" />

      {/* Floating Status Badges around phone */}
      <div className="absolute top-4 -left-2 sm:left-2 z-20 flex items-center gap-2.5 bg-[#0B0F0C]/90 border border-[#18D65A]/40 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-xl shadow-black/60">
        <span className="w-2 h-2 rounded-full bg-[#18D65A] animate-ping" />
        <div className="flex flex-col">
          <span className="text-[9px] font-mono uppercase text-[#8B968E]">WhatsApp Unban Done</span>
          <span className="text-xs font-bold text-[#F5F7F5]">Safe & 100% Restored</span>
        </div>
      </div>

      <div className="absolute bottom-6 -right-2 sm:right-4 z-20 flex items-center gap-2 bg-[#0B0F0C]/90 border border-[#35E875]/40 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-xl shadow-black/60">
        <div className="w-5 h-5 rounded-full bg-[#18D65A]/20 flex items-center justify-center text-[#18D65A] text-[11px] font-bold">
          ✓
        </div>
        <div className="flex flex-col">
          <span className="text-[9px] font-mono uppercase text-[#8B968E]">Client Case Proof</span>
          <span className="text-xs font-bold text-[#B8FFCC]">Asdullah Ahmed</span>
        </div>
      </div>

      {/* Quick Zoom / Fullscreen Button on Top Right */}
      <button
        type="button"
        onClick={() => setIsZoomed(true)}
        aria-label="Inspect WhatsApp Unban Proof Fullscreen"
        className="absolute top-4 right-2 sm:right-4 z-30 flex items-center gap-1.5 bg-[#070b08]/90 hover:bg-[#101a12] border border-[#18D65A]/50 hover:border-[#18D65A] text-cyan-300 hover:text-white px-3 py-1.5 rounded-full text-[11px] font-mono shadow-xl shadow-black/60 transition-all cursor-pointer backdrop-blur-md"
      >
        <ZoomIn className="w-3.5 h-3.5 text-[#18D65A]" />
        <span>Inspect Poster</span>
      </button>

      {/* Three.js canvas container */}
      <div
        ref={containerRef}
        onClick={() => setIsZoomed(true)}
        title="Click to view high-resolution WhatsApp Unban proof"
        className="w-full h-full cursor-grab active:cursor-grabbing"
      />

      {/* FULLSCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {isZoomed && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/92 backdrop-blur-md"
            onClick={() => setIsZoomed(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-md w-full max-h-[94vh] flex flex-col items-center rounded-2xl bg-[#050706] border-2 border-[#18D65A]/50 p-4 shadow-2xl shadow-emerald-950/80 overflow-hidden"
            >
              {/* Modal Top Bar */}
              <div className="w-full flex items-center justify-between pb-3 mb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#18D65A] animate-pulse" />
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    WhatsApp Unban Proof • Asdullah Ahmed
                  </span>
                </div>

                <button
                  onClick={() => setIsZoomed(false)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                  aria-label="Close zoomed view"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Image Viewport */}
              <div className="w-full overflow-y-auto max-h-[74vh] flex justify-center rounded-xl bg-black border border-white/5">
                <img
                  src={whatsappUnbanPoster}
                  alt="WhatsApp Unban Done - Client Proof by Asdullah Ahmed"
                  referrerPolicy="no-referrer"
                  className="w-auto max-w-full h-auto max-h-[72vh] object-contain rounded-lg select-none"
                />
              </div>

              {/* Modal Bottom Action */}
              <div className="w-full pt-3 mt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-[#8B968E]">+91 8271465644</span>
                <a
                  href={`${AGENCY_CONFIG.whatsappUrl}?text=${encodeURIComponent(
                    "Hello Asdullah Ahmed, I saw your WhatsApp Unban Done proof on the 3D mobile screen and need help with my account."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#18D65A] text-[#050706] font-bold px-3.5 py-1.5 rounded-full text-[11px] hover:bg-[#35E875] transition-colors flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-[#050706]" />
                  <span>Contact on WhatsApp →</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
