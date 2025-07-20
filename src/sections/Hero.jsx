import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Astronaut } from "../components/Astronaut";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense } from "react";
import Loader from "../components/Loader";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section className="flex min-h-screen lg:items-center justify-start c-space">
      <HeroText />
      <ParallaxBackground />
      <figure
        className="absolute inset-0 opacity-70 md:opacity-100 top-[4rem] md:top-[8rem] lg:top-0"
        style={{ width: "100vw", height: "100vh" }}
      >
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
      </figure>
      <span className="absolute bottom-2 left-1/2 -translate-x-1/2 inline-flex flex-col items-center bg-black/20 px-4 py-2 pointer-events-none animate-bounce text-xs md:text-lg shadow-2xl lg:hidden">
        Scroll down
        <img src="assets/down-arrow.svg" alt="scroll down" className="w-3 h-3" />
      </span>
    </section>
  );
};

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

export default Hero;
