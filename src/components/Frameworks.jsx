import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "javascript",
    "typescript",
    "react",
    "next",
    "redux",
    "node",
    "express",
    "mongodb",
    "firebase",
    "tailwindcss",
    "material-ui",
    "chakra-ui",
    "html5",
    "css3",
    "sass",
    "mysql",
    "git",
    "github",
    "npm",
    "visual-studio-code",
    "insomnia"
  ];

  const randomized = Array.from(skills).sort(() => Math.random() - 0.5);
  const halfInd = Math.floor(randomized.length / 3);
  const orbit1 = randomized.slice(0, halfInd);
  const orbit2 = randomized.slice(halfInd);

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={28}>
        {orbit2.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} skill={skill} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={28} radius={80} reverse speed={2}>
        {orbit1.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} skill={skill} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src, skill }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-105" alt={skill} loading="lazy" />
);
