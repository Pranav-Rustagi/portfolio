import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const web_skills = [
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
    "git",
    "github",
    "visual-studio-code",
    "insomnia",
    "npm",
  ];

  const data_engineering_skills = [
    "python",
    "spark",
    "databricks",
    "pandas",
    "airflow",
    "mysql",
    "postgresql",
    "talend",
    "dbeaver"
  ];

  const orbit1 = Array.from(web_skills).sort(() => Math.random() - 0.5);
  const orbit2 = Array.from(data_engineering_skills).sort(() => Math.random() - 0.5);


  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={30}>
        {orbit1.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} skill={skill} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={28} radius={80} reverse speed={2}>
        {orbit2.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} skill={skill} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src, skill }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-105" alt={skill} />
);
