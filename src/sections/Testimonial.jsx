import { twMerge } from "tailwind-merge";
import Marquee from "../components/Marquee";
import { reviews } from "../constants";

const firstRow = reviews;
// const firstRow = reviews.slice(0, reviews.length / 2);
// const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ profile_image, name, role, body, profile_link }) => {
  return (
    <figure
      className={twMerge(
        "relative h-full w-sm md:w-md cursor-pointer overflow-hidden rounded-xl mx-2 border py-4 px-5 border-gray-50/[.1] bg-gradient-to-r bg-indigo to-storm hover:bg-royal hover-animation"
      )}
    >
      <a href={profile_link} target="_blank" rel="noopener noreferrer">
        <div className="flex flex-row items-center gap-3 mb-3 w-full overflow-hidden">
          <img
            className="rounded-full bg-white/10"
            width="32"
            height="32"
            alt={name}
            src={profile_image}
          />
          <div className="flex flex-col w-full overflow-hidden">
            <figcaption className="text-sm font-medium text-white">
              {name}
            </figcaption>
            <p className="text-xs font-medium text-white/40 whitespace-nowrap truncate w-full">{role}</p>
          </div>
        </div>

      </a>
      <blockquote className="my-4 text-sm whitespace-break-spaces">"{body}"</blockquote>
    </figure>
  );
};

export default function Testimonial() {
  return (
    <section className="items-start c-space section-spacing" id="testimonials">
      <h2 className="text-heading">My Testimonials</h2>
      <div className="relative w-full mt-12 overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.profile_link} {...review} />
          ))}
        </Marquee>
        {/* <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee> */}
        <div className="absolute inset-y-0 left-0 w-1/4 md:w-1/3 pointer-events-none bg-gradient-to-r from-primary"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 md:w-1/3 pointer-events-none bg-gradient-to-l from-primary"></div>
      </div>
    </section>
  );
}
