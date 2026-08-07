import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { easing } from "maath";
import { Suspense } from "react";
import { Astronaut } from "./Astronaut";
import Loader from "./Loader";

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

const HeroScene = ({ isMobile }) => (
  <Canvas camera={{ position: [0, 1, 3] }}>
    <Suspense fallback={<Loader />}>
      <Float>
        <Astronaut
          scale={isMobile && 0.2}
          position={isMobile && [0, -2.5, -0.5]}
        />
      </Float>
      <Rig />
    </Suspense>
  </Canvas>
);

export default HeroScene;
