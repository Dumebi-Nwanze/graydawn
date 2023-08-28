import { motion } from "framer-motion";

export const scrollToSection = (location) => {
  const element = document.getElementById(location);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
function NavBar() {
  return (
    <nav className="z-30 flex justify-between items-center lg:items-baseline p-4 transition-all">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <h1 className="font-orbitron text-2xl">Graydawn</h1>
      </motion.div>
      <div
        onClick={() => {
          const menu = document.querySelectorAll(".hamMenu");
          const nav = document.getElementById("hamNav");
          if (menu) {
            menu.forEach((m) => {
              m.classList.toggle("active");
            });
          }
          if (nav) {
            nav.classList.toggle("show");
          }
        }}
        className="md:hidden hamburger-menu hamMenu "
      >
        <div className="line "></div>
        <div className="line "></div>
      </div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="hidden md:block nav-links"
      >
        <ul className="flex space-x-4 text-2xl">
          <li
            onClick={() => {
              scrollToSection("about");
            }}
            className="links"
          >
            About
          </li>
          <li
            onClick={() => {
              scrollToSection("services");
            }}
            className="links"
          >
            Services
          </li>
          <li
            onClick={() => {
              scrollToSection("blog");
            }}
            className="links"
          >
            Blog
          </li>
          <li
            onClick={() => {
              scrollToSection("contact");
            }}
            className="links"
          >
            Contact
          </li>
        </ul>
      </motion.div>
    </nav>
  );
}

export default NavBar;
