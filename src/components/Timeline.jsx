"use client";
import { useScroll, useTransform, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="" ref={containerRef}>
      <h2 className="text-heading">My Experience</h2>
      <div ref={ref} className="relative">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:first:pt-20 gap-6 lg:gap-10 flex-col lg:flex-row"
          >
            <div className="lg:sticky z-40 flex flex-col items-center self-start md:flex-row top-40 lg:max-w-sm md:w-full">
              <div className="absolute flex items-center justify-center size-10 rounded-full -left-[15px] bg-midnight">
                <div className="size-4 p-2 border rounded-full bg-neutral-800 border-neutral-700" />
              </div>
              <div className="flex-col gap-1 md:gap-2 font-bold flex pl-10 md:text-4xl text-neutral-300">
                <span className="text-xs md:text-base text-lavender">{item.date}</span>
                <h2 className="text-xl md:text-2xl text-neutral-100">{item.title}</h2>
                <h3 className="text-base md:text-xl text-neutral-400">@{item.company}</h3>
                <div className="flex gap-2 flex-wrap mt-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full border border-lavender/30 bg-lavender/10 text-lavender text-xs md:text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative w-full pl-10 pr-4 lg:pl-4 text-sm md:text-base">
              <ul className="list-disc">
                {item.contents.map((content, index) => (
                  <li className="mb-3 font-normal text-neutral-300" key={index}>
                    {content}
                  </li>
                ))}
              </ul>

            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-1 left-1 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-lavender/50 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
