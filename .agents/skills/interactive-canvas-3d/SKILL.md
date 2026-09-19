---
name: interactive-canvas-3d
description: >
  Use when designing WebGL, Three.js, React Three Fiber (R3F), GLSL shaders,
  interactive particle fields, fluid simulations, and 3D background canvases.
  Do NOT use for 2D static wireframes or standard text documents.
triggers:
  - threejs
  - r3f
  - react-three-fiber
  - glsl
  - shader
  - webgl
  - particle field
  - 3d canvas
---

# Interactive Canvas & 3D Shaders

Esta skill detalha técnicas para renderização de experiências interativas 3D em tempo real, integração de shaders GLSL e partículas fluidas.

---

## 1. Padrões React Three Fiber (R3F) & Drei

### Shader Material Customizado com Distorção de Ruído Perlin

```tsx
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const vertexShader = `
  varying vec2 vUv;
  varying float vElevation;
  uniform float uTime;

  void main() {
    vUv = uv;
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    
    // Ondulação suave contínua
    float elevation = sin(modelPosition.x * 2.0 + uTime * 0.8) * 
                      sin(modelPosition.z * 2.0 + uTime * 0.8) * 0.25;
    
    modelPosition.y += elevation;
    vElevation = elevation;

    vec4 viewPosition = viewMatrix * modelPosition;
    gl_Position = projectionMatrix * viewPosition;
  }
`;

const fragmentShader = `
  varying vec2 vUv;
  varying float vElevation;
  uniform vec3 uColorA;
  uniform vec3 uColorB;

  void main() {
    float mixStrength = (vElevation + 0.25) * 2.0;
    vec3 color = mix(uColorA, uColorB, mixStrength);
    gl_FragColor = vec4(color, 0.85);
  }
`;

export function LiquidWaveMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uColorA: { value: new THREE.Color("#130924") },
    uColorB: { value: new THREE.Color("#6366f1") }
  }), []);

  useFrame((state) => {
    uniforms.uTime.value = state.clock.getElapsedTime();
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 3, 0, 0]}>
      <planeGeometry args={[5, 5, 64, 64]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        wireframe={false}
        transparent={true}
      />
    </mesh>
  );
}
```

---

## 2. Otimização de Performance WebGL

1. **DPR Clamping**: Nunca deixe o canvas renderizar acima de `Math.min(window.devicePixelRatio, 2)`.
2. **InstancedMesh**: Renderize milhares de partículas em uma única draw call com `THREE.InstancedMesh`.
3. **Frustum Culling**: Mantenha objetos fora da visão da câmera desligados do pipeline de renderização.
4. **Power Preference**: Sempre inicialize o renderer com `powerPreference: "high-performance"`.
