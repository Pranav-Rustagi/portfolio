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
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5] opacity-20 bg-black/75 blur-[0.5px] h-full w-full object-cover object-center"
          />
          <div className="z-10 flex flex-col justify-end h-full mt-20">
            <img
              src="https://avatars.githubusercontent.com/u/57594891?v=4"
              alt="Pranav Rustagi"
              className="z-10 w-16 h-16 rounded-full mb-4 md:mb-0 md:w-32 md:h-32"
            />
            <p className="headtext">Hi, I'm Pranav Rustagi</p>
            <div className="subtext flex gap-2 flex-col">
              <p>I'm a Full-Stack Developer with around a year of professional experience, along with two years through internships and freelance work. I focus on building responsive, user-friendly web applications and enjoy learning new tools and best practices to improve how I work. I'm driven by a desire to solve real problems and keep growing as a developer.</p>
            </div>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2" draggable="false">
          <div
            ref={grid2Container}
            className="w-full h-full relative"
            draggable="false"
          >
            <p className="flex w-full md:w-1/2 items-start h-full text-4xl text-gray-500">
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
            {/* <Card
              style={{ rotate: "-45deg", top: "65%", left: "-5%" }}
              text="Data Engineering"
              containerRef={grid2Container}
            /> */}
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
            {/* <Card
              style={{ rotate: "25deg", top: "50%", left: "0%" }}
              image="assets/logos/pink-databricks.svg"
              containerRef={grid2Container}
            /> */}
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
            <p className="headtext">Location</p>
            <p className="subtext">
              Based in India (UTC+5:30)<br/>Open to remote work
            </p>
          </div>
          <figure className="absolute left-3/10 md:left-1/2 top-1/10">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-8 size-full">
            <p className="text-center text-md">
              Let&apos;s make an impact
              <br/><br />
              See how I can contribute to your team
            </p>
            <div className="flex flex-col md:flex-row lg:flex-col gap-4 w-full">
              <ActionButton
                doneMsg="Downloading"
                defaultMsg="Download Resume"
                fileName="PranavRustagi_FullStackDeveloper.pdf"
                buttonDefaultImg="assets/download.svg"
                buttonDoneImage="assets/downloaded.svg"
              />
            </div>
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-3/5 md:w-1/2">
            <p className="headtext">Here&apos;s the tech I work with</p>
            <p className="subtext">
              from building user-friendly front-end interfaces to contributing to full-stack web applications using modern frameworks.
            </p>
          </div>
          <div className="absolute inset-y-9 w-full h-full start-[50%] scale-75 md:scale-150">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
