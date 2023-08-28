import { scrollToSection } from "./NavBar";

function HamNav() {
  function removeHamNav() {
    const menu = document.querySelectorAll(".hamMenu");
    const nav = document.getElementById("hamNav");
    if (menu) {
      menu.forEach((m) => {
        m.classList.remove("active");
      });
    }
    if (nav) {
      nav.classList.remove("show");
    }
  }
  return (
    <div
      id="hamNav"
      className="md:hidden bg-black h-screen w-full p-12 flex flex-col text-white absolute top-0 z-[10000] transition-all duration-700 close "
    >
      <div className="flex justify-end">
        <div
          onClick={() => {
            removeHamNav();
          }}
          className="md:hidden hamburger-menu hamMenu "
        >
          <div className="line "></div>
          <div className="line "></div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center font-oswald">
        <ul className=" flex flex-col items-center space-y-8 text-3xl">
          <li
            onClick={() => {
              removeHamNav();
              scrollToSection("about");
            }}
            className="links"
          >
            About
          </li>
          <li
            onClick={() => {
              removeHamNav();
              scrollToSection("services");
            }}
            className="links"
          >
            Services
          </li>
          <li
            onClick={() => {
              removeHamNav();
              scrollToSection("blog");
            }}
            className="links"
          >
            Blog
          </li>
          <li
            onClick={() => {
              removeHamNav();
              scrollToSection("contact");
            }}
            className="links"
          >
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HamNav;
