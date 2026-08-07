import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import ActionButton from "../components/ActionButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-y-6 lg:gap-x-6 lg:grid-cols-6 auto-rows-auto lg:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex flex-col items-start grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5] opacity-20 bg-black/75 blur-[0.5px] size-full object-cover object-center"
          />
          <div className="z-10 flex flex-col justify-end h-full mt-20">
            <img
              src="https://avatars.githubusercontent.com/u/57594891?v=4"
              alt="Pranav Rustagi"
              className="z-10 size-16 rounded-full mb-4 md:mb-0 md:size-32"
            />
            <p className="headtext">Hi, I'm Pranav Rustagi</p>
            <div className="subtext flex gap-4 flex-col">
              <p>I am a software engineer with experience building frontend and full-stack web applications using React, TypeScript, and modern JavaScript frameworks, along with backend technologies such as Node.js, Express, and REST APIs.</p>
              <p>Through professional roles and projects, I have worked on dashboards, internal tools, and end-to-end features, contributing to responsive user interfaces and backend functionality. I enjoy collaborating with teams, writing clean and maintainable code, and continuously improving my skills across the stack.</p>
            </div>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2" draggable="false">
          <div
            ref={grid2Container}
            className="size-full relative"
            draggable="false"
          >
            <p className="flex size-full md:w-1/2 items-start text-4xl text-gray-500">
              Turning ideas into digital realities
            </p>
            <Card
              style={{ rotate: "15deg", top: "85%", left: "20%" }}
              text="Full-Stack Development"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "50deg", bottom: "10%", right: "-10%" }}
              text="Problem Solving"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-15deg", top: "30%", right: "-2%" }}
              text="Automation"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", bottom: "-10%", left: "70%" }}
              image="assets/logos/pink-react.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "50%", left: "25%" }}
              image="assets/logos/pink-node.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "5deg", top: "50%", right: "-5%" }}
              image="assets/logos/pink-python.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "5deg", top: "35%", right: "40%" }}
              image="assets/logos/pink-javascript.svg"
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-3/5 md:w-1/2">
          <p className="headtext">Current location</p>
            <p className="subtext">
              Bengaluru (Karnataka, India)
            </p>
          </div>
          <figure className="absolute left-3/10 md:left-1/2 top-1/10">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-8 size-full">
            <p className="text-center text-md flex flex-col gap-1">
              <span>
                Let&apos;s build something great together
              </span>
              <span>
                See how I can add value to your team
              </span>
            </p>
            <div className="flex flex-col md:flex-row lg:flex-col gap-4 w-full">
              <ActionButton
                doneMsg="Downloading"
                defaultMsg="Download Resume"
                fileName="PranavRustagi_SoftwareEngineer.pdf"
                buttonDefaultImg="assets/download.svg"
                buttonDoneImage="assets/downloaded.svg"
              />
            </div>
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-2/3 md:w-1/2">
            <p className="headtext">Here&apos;s the tech I work with</p>
            <p className="subtext">
              from building user-friendly front-end interfaces to contributing to full-stack web applications using modern frameworks.
            </p>
          </div>
          <div className="absolute top-9 md:top-[40%] lg:top-[45%] size-full start-[55%] md:start-[40%] scale-75 md:scale-150">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
