import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";
const Experiences = () => {
  return (
    <section className="relative c-space section-spacing" id="experience">
      <Timeline data={experiences} />
    </section>
  );
};

export default Experiences;
