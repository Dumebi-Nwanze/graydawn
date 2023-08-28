import NavBar, { scrollToSection } from "./NavBar";
import SolarSystem from "./SolarSystem";

function HeroSection() {
  return (
    <div
      id="hero"
      className="flex flex-col h-screen snap-start hero-section text-white relative overflow-hidden "
    >
      <NavBar />
      <SolarSystem />
      <div className="flex-1 flex flex-col justify-center items-center space-y-10 ">
        <h1 className="text-5xl lg:text-[6rem] font-bold shadow-2xl font-orbitron">
          Graydawn
        </h1>
        <div>
          <p className="text-xl lg:text-3xl lg:text-stroke ">
            Discover the limitless possiblites
          </p>
        </div>
        <div className="border border-red-500">
          <button
            onClick={() => {
              scrollToSection("about");
            }}
            className="px-8 py-4 border border-white hover:text-black text-lg font-medium btn-black"
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
