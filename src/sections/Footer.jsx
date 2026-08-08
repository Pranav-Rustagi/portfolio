import { mySocials } from "../constants";
const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-10 text-xs md:text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

      <div className="flex items-center justify-between gap-10 md:gap-3 w-full flex-col-reverse md:flex-row mt-10 md:mt-0">
        <div className="text-center md:text-left">
          <p className="mb-1">© {new Date().getFullYear()} Pranav Rustagi</p>
          <p>Made with ❤️ using React &amp; Tailwind CSS</p>
        </div>
        <div>
          <div className="flex gap-6">
            {mySocials.map((social, index) => (
              <a href={social.href} key={index} target="_blank" rel="noopener noreferrer">
                <img src={social.icon} className="size-6" alt={social.name} loading="lazy" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
