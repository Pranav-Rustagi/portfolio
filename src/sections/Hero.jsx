import { lazy, Suspense } from "react";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { useMediaQuery } from "react-responsive";

const HeroScene = lazy(() => import("../components/HeroScene"));

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section className="relative flex min-h-screen lg:items-center justify-start c-space">
      <HeroText />
      <ParallaxBackground />
      <figure
        className="absolute inset-0 top-[4rem] md:top-[8rem] lg:top-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Suspense fallback={null}>
          <HeroScene isMobile={isMobile} />
        </Suspense>
      </figure>
      {isMobile && (
        <span className="absolute bottom-2 left-1/2 -translate-x-1/2 inline-flex flex-col items-center bg-black/20 px-4 py-2 pointer-events-none animate-bounce text-xs md:text-lg shadow-2xl">
          Scroll down
          <img src="assets/down-arrow.svg" alt="scroll down" className="size-3" />
        </span>
      )}
    </section>
  );
};

export default Hero;
