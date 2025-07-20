import { motion } from "motion/react";
const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  links,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-[1000] flex w-screen h-screen overflow-hidden backdrop-blur-3xl bg-black">
      <motion.div
        className="flex flex-col gap-y-10 relative h-full w-full shadow-sm rounded-2xl px-8 md:px-20 pb-10 overflow-scroll"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="sticky flex flex-col gap-5 items-start -top-5 pt-12 pb-4 w-full bg-black backdrop-blur-lg">
          <button
            onClick={closeModal}
            className="text-neutral-400 text-sm md:text-base flex items-center gap-x-2 hover:cursor-pointer -ml-2 px-2 hover-animation"
          >
            <img src="assets/back.svg" alt="" className="w-4 h-4 opacity-70" />
            <span>Back</span>
          </button>
        </div>
        <h2 className="text-heading -mt-8">
          {title}
        </h2>

        <div className="mb-10">
          <img src={image} alt={title} className="w-full md:w-3/4 lg:w-1/2 rounded-t-2xl mx-auto" />
        </div>

        <div className="flex flex-col gap-10">
          <div>
            <h2 className="text-xl md:text-3xl mb-5 font-bold">
              Description
            </h2>
            <p className="mb-3 text-neutral-400 text-sm md:text-base lg:text-lg">{description}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 auto-rows-auto gap-x-10 text-base">
            <h2 className="text-xl md:text-3xl mb-5 font-bold">
              Key features
            </h2>
            <div></div>
            {subDescription.map((subDesc, index) => (
              <div className="mb-3 font-normal text-neutral-400 flex" key={`key-feature-${index + 1}`}>
                <p>&gt;&nbsp;&nbsp;</p>
                <p className="text-sm md:text-base lg:text-lg">{subDesc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between mt-4 gap-x-10 space-y-14 md:space-y-0 flex-wrap md:flex-nowrap mb-10">
          <div className="flex flex-col w-full md:w-1/2">
            <h2 className="text-xl md:text-3xl mb-5 font-bold">
              Tech Stack
            </h2>
            <div className="flex gap-5">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg size-9 hover-animation"
                />
              ))}
            </div>
          </div>
          {
            links?.length > 0 &&
            (
              <div className="flex flex-col w-full md:w-1/2">
                <h2 className="text-xl md:text-3xl mb-5 font-bold">
                  Project Links
                </h2>
                <div className="flex gap-x-15 flex-wrap space-y-2 md:space-y-5 lg:space-y-0">
                  {
                    links?.map(({ href, type }) => {
                      let platform_name;
                      
                      console.log(type);
                      switch (type) {
                        case "github": platform_name = "GitHub"; break;
                        case "npm": platform_name = "NPM"; break;
                        case "devto": platform_name = "Dev.to"; break;
                        default: platform_name = "Others"
                      }

                      return (
                        <a className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation text-lavender text-sm md:text-base lg:text-lg" href={href} key={platform_name}>
                          View on {platform_name}&nbsp;
                          <img src="assets/arrow-up.svg" className="size-4" />
                        </a>
                      )
                    })
                  }
                  {/* <a className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation text-lavender text-sm md:text-base lg:text-lg" href={href}>
                    View on NPM&nbsp;
                    <img src="assets/arrow-up.svg" className="size-4" />
                  </a>
                  <a className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation text-lavender text-sm md:text-base lg:text-lg" href={href}>
                    View on GitHub&nbsp;
                    <img src="assets/arrow-up.svg" className="size-4" />
                  </a>
                  <a className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation text-lavender text-sm md:text-base lg:text-lg" href={href}>
                    View on Dev.to&nbsp;
                    <img src="assets/arrow-up.svg" className="size-4" />
                  </a> */}
                </div>
              </div>
            )
          }
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
