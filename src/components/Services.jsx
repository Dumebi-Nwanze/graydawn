import AboutCard from "./AboutCard";
import { servicesData } from "../data";

function Services() {
  return (
    <div
      id="services"
      className="min-h-screen snap-start px-4 pt-4 lg:px-8 lg:bt-8 pb-16  bg-black text-white"
    >
      <div>
        <h2 className="text-4xl mb-4 underline">Our Services</h2>
        <p className="text-lg">
          At GrayDawn, we offer a comprehensive range of services that cater to
          diverse business needs. Our solutions are designed to streamline
          processes, enhance productivity, and drive growth. Here is a glimpse
          of what we bring to the table.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-5 md:p-20">
        {servicesData.map((elem) => (
          <AboutCard
            key={elem.title}
            heading={elem.title}
            description={elem.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
