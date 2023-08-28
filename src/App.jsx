import "./App.css";
import AboutUs from "./components/AboutUs";
import HeroSection from "./components/HeroSection";

import Services from "./components/Services";
import Blog from "./components/Blog";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import HamNav from "./components/HamNav";
import { useState } from "react";
import Loadingscreen from "./components/Loadingscreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="">
      {isLoading ? (
        <Loadingscreen setIsLoading={setIsLoading} />
      ) : (
        <div className="relative h-screen overflow-hidden ">
          <HamNav />
          <div className="h-screen snap-y lg:snap-mandatory overflow-y-scroll   font-oswald bg-black">
            <div
              onClick={() => {
                const element = document.getElementById("hero");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              id="rocket"
              className="fixed p-4 rounded-full bg-blue-900 bottom-10 right-10 z-40 cursor-pointer hover:bg-blue-700 transition-colors"
            >
              <img
                className="h-4 lg:h-10"
                src="https://firebasestorage.googleapis.com/v0/b/linkedin-clone-4baf1.appspot.com/o/rocket.png?alt=media&token=511d31c9-1ced-40d9-9e12-81e0eea8cabc"
                alt="rocket"
              />
            </div>
            {/* Hero div*/}
            <main>
              <HeroSection />
            </main>
            {/* About Us div*/}
            <section>
              <AboutUs />
            </section>
            <br />
            <br />
            <br />
            <br />
            {/* Services div*/}
            <section>
              <Services />
            </section>
            <br />
            <br />
            <br />
            <br />
            {/* Blog div*/}
            <section>
              <Blog />
            </section>
            <br />
            <br />
            <br />
            <br />
            {/* Contact div*/}
            <section>
              <Contacts />
            </section>

            {/* Footer div*/}
            <section>
              <Footer />
            </section>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
