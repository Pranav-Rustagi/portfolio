import { useState } from "react";
import { motion } from "motion/react";

function Navigation({ setMenuOpen }) {

  const closeMenu = () => {
    if (setMenuOpen) {
      setTimeout(() => {
        setMenuOpen(false);
      }, 100);
    }
  }

  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a className="nav-link" href="#about" onClick={closeMenu}>
          About
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#projects" onClick={closeMenu}>
          Projects
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#experience" onClick={closeMenu}>
          Experience
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#testimonials" onClick={closeMenu}>
          Testimonials
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#contact" onClick={closeMenu}>
          Contact
        </a>
      </li>
    </ul>
  );
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed z-[1000] inset-x-0 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-4">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            <img
              src="/logo.svg"
              className="w-8 h-8"
              alt="logo"
            />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation setMenuOpen={setIsOpen} />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 2 }}
        >
          <nav className="pb-5 h-screen w-screen flex items-center justify-center -translate-y-[100px]">
            <Navigation setMenuOpen={setIsOpen} />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
