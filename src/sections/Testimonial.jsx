import { twMerge } from "tailwind-merge";
import { reviews } from "../constants";

const ReviewCard = ({ profile_image, name, role, body, profile_link }) => {
  return (
    <figure
      className={twMerge(
        "w-full relative h-full cursor-pointer overflow-hidden rounded-xl border py-4 px-5 border-gray-50/[.1] bg-gradient-to-r bg-indigo to-storm hover:bg-royal hover-animation "
      )}
    >
      <a href={profile_link} target="_blank" rel="noopener noreferrer">
        <img
          src="./assets/socials/linkedin.svg" alt=""
          className="absolute right-5 top-4"
          loading="lazy"
        />
      </a>
      <div className="flex flex-row items-center gap-4 mb-3 w-full overflow-hidden">
        <img
          className="rounded-full bg-white/10 overflow-hidden"
          width="46"
          height="46"
          alt={name}
          src={profile_image}
        />
        <div className="flex flex-col w-[calc(100%-6rem)] overflow-hidden">
          <a href={profile_link} target="_blank" rel="noopener noreferrer">
            <figcaption className="text-sm md:text-base font-medium text-white">
              {name}
            </figcaption>
          </a>
          <p className="text-xs md:text-sm font-medium text-white/40 whitespace-nowrap truncate w-9/10">{role}</p>
        </div>
      </div>
      <blockquote className="mt-4 md:mb-4 text-sm md:text-base whitespace-break-spaces text-neutral-300">{body}</blockquote>
    </figure>
  );
};

export default function Testimonial() {
  return (
    <section className="items-start c-space section-spacing" id="testimonials">
      <h2 className="text-heading">What People Say About Me</h2>
      <p className="mt-6 text-neutral-300 text-lg">Feedbacks from colleagues, clients, and collaborators across LinkedIn and other platforms.</p>

      <div className="overflow-hidden">
        <div className="flex gap-15 group mt-12">
          <div className="flex animate-marquee gap-5">
            {
              reviews.map((review) => (
                <div className="w-full lg:w-1/3 shrink-0" key={review.profile_link}>
                  <ReviewCard key={review.profile_link} {...review} />
                </div>
              ))
            }
          </div>
          <div className="flex animate-marquee gap-5">
            {
              reviews.map((review) => (
                <div className="w-full lg:w-1/3 shrink-0" key={review.profile_link}>
                  <ReviewCard key={review.profile_link} {...review} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
}
