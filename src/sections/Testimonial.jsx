import { twMerge } from "tailwind-merge";
// import Marquee from "../components/Marquee";
// import Carousal from "../components/Carousal";
import { reviews } from "../constants";

const ReviewCard = ({ profile_image, name, role, body, profile_link }) => {
  return (
    <figure
      // className={twMerge(
      //   "w-xs lg:w-md xl:w-lg relative h-full cursor-pointer overflow-hidden rounded-xl border py-4 px-5 border-gray-50/[.1] bg-gradient-to-r bg-indigo to-storm hover:bg-royal hover-animation "
      // )}
      className={twMerge(
        "w-full relative h-full cursor-pointer overflow-hidden rounded-xl border py-4 px-5 border-gray-50/[.1] bg-gradient-to-r bg-indigo to-storm hover:bg-royal hover-animation "
      )}
    >
      <a href={profile_link} target="_blank" rel="noopener noreferrer">
        <img
          src="./assets/socials/linkedin.svg" alt=""
          className="absolute right-5 top-4"
        />
      </a>
      <div className="flex flex-row items-center gap-3 mb-3 w-full overflow-hidden">
        <img
          className="rounded-full bg-white/10 overflow-hidden"
          width="32"
          height="32"
          alt={name}
          src={profile_image}
        />
        <div className="flex flex-col w-[calc(100%-6rem)] overflow-hidden">
          <a href={profile_link} target="_blank" rel="noopener noreferrer">
            <figcaption className="text-xs md:text-sm font-medium text-white">
              {name}
            </figcaption>
          </a>
          <p className="text-xs font-medium text-white/40 whitespace-nowrap truncate w-full">{role}</p>
        </div>
      </div>
      <blockquote className="mt-6 md:mb-4 text-sm md:text-base whitespace-break-spaces">{body}</blockquote>
    </figure>
  );
};

export default function Testimonial() {
  return (
    <section className="items-start c-space section-spacing" id="testimonials">
      <h2 className="text-heading">What People Say About Me</h2>
      <p className="mt-6 text-neutral-300 text-lg">Feedbacks from colleagues, clients, and collaborators across LinkedIn and other platforms.</p>
      {/* <div className="relative w-full mt-12 overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {reviews.map((review) => (
            <ReviewCard key={review.profile_link} {...review} />
          ))}
        </Marquee>
        <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-primary"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-primary"></div>
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 w-full">
        {reviews.map((review) => (
          <div className="w-full" key={review.profile_link}>
            <ReviewCard key={review.profile_link} {...review} />
          </div>
        ))}
      </div>


      {/* <Carousal>
        {reviews.map((review) => (
          <div key={review.profile_link}>
            <ReviewCard key={review.profile_link} {...review} />
          </div>
        ))}
      </Carousal> */}

    </section>
  );
}
