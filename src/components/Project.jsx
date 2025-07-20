import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  short_description,
  description,
  subDescription,
  links,
  image,
  tags,
  status,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <div
        className="flex-wrap items-center justify-between py-10 space-y-8 sm:flex"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div className="flex flex-col gap-2">
          <p className="text-2xl">{title}</p>
          {
            short_description && (
              <p className="text-neutral-400 text-sm md:text-base">{short_description}</p>
            )
          }
          <div className="flex gap-x-5 gap-y-2 mt-4 text-lavender w-full flex-wrap text-xs md:text-sm">
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>
        {
          status === "completed" ?
            <button
              onClick={() => setIsHidden(true)}
              className="flex text-sm md:text-base items-center gap-1 !cursor-pointer hover-animation"
            >
              Read More&nbsp;
              <img src="assets/arrow-right.svg" className="w-5 opacity-55" />
            </button> :
            <button
              className="flex text-sm md:text-base items-center gap-1 !cursor-pointer hover-animation text-neutral-500 pointer-events-none"
              disabled
            >
              Coming soon
            </button>
        }

      </div>
      <div className="bg-gradient-to-r from-transparent via-storm to-transparent h-[1px] w-full" />
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          links={links}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
