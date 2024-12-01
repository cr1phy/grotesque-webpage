import { useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Text, OrbitControls } from "@react-three/drei";
import { ShaderMaterial, Vector2 } from "three";

const GlitchShader = {
  uniforms: {
    time: { value: 0 },
    resolution: { value: new Vector2() },
    noiseAmount: { value: 0.1 }, // уровень шума для глитча
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    varying vec2 vUv;
    uniform float time;
    uniform float noiseAmount;

    // Функция для генерации шума
    float random(vec2 st) {
      return fract(sin(dot(st, vec2(12.9898, 78.233))) * 43758.5453);
    }

    void main() {
      vec2 uv = vUv;

      // Добавление шума для искажения текста
      uv.x += sin(time * 3.0 + uv.y * 10.0) * noiseAmount;
      uv.y += cos(time * 3.0 + uv.x * 10.0) * noiseAmount;
      
      // Визуализация эффекта синий/красный
      vec3 color = vec3(0.0, 0.0, 0.0);

      float noise = random(uv * 10.0);
      if (noise < 0.5) {
        color = vec3(1.0, 0.0, 0.0); // красный
      } else {
        color = vec3(0.0, 0.0, 1.0); // синий
      }

      gl_FragColor = vec4(color, 1.0);
    }
  `,
};

const GlitchText = () => {
  const [time, setTime] = useState(0);
  const shaderMaterialRef = useRef<ShaderMaterial>(null);

  const updateShaderTime = () => {
    if (shaderMaterialRef.current) {
      shaderMaterialRef.current.uniforms.time.value = time;
    }
    setTime(time + 0.1); // Регулируем скорость глитча
  };

  useEffect(() => {
    const interval = setInterval(updateShaderTime, 16); // 60 FPS
    return () => clearInterval(interval);
  }, [time]);

  return (
    <mesh>
      <Text
        position={[0, 0, 0]}
        fontSize={2}
        color="white"
        anchorX="center"
        anchorY="middle"
        children="grotesque."
        font="/fonts/Southern.ttf"
      />
      <shaderMaterial
        ref={shaderMaterialRef}
        attach="material"
        args={[GlitchShader]}
      />
    </mesh>
  );
};

const RotatingGlitchText = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <GlitchText />
      <OrbitControls />
    </Canvas>
  );
};

export default RotatingGlitchText;
