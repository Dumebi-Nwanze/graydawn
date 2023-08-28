import {
  FaInstagram,
  FaFacebook,
  FaTwitterSquare,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <div
      className="h-fit snap-start p-12  bg-gray-900 text-white space-y-8 lg:space-y-0 lg:space-x-32 overflow-hidden
    
    flex flex-col items-center lg:flex-row  lg:items-start text-center lg:text-start space"
    >
      <div className="flex flex-col space-y-8">
        <h1 className="font-orbitron text-2xl">Graydawn</h1>
        <div className="flex space-x-8 text-3xl transition-all duration-150 ease-in-out cursor-pointer">
          <FaInstagram
            onClick={() => {
              window.location.href = "https://instagram.com";
            }}
            className="hover:animate-pulse"
          />
          <FaFacebook
            onClick={() => {
              window.location.href = "https://facebook.com";
            }}
            className="hover:animate-pulse"
          />
          <FaTwitterSquare
            onClick={() => {
              window.location.href = "https://twitter.com";
            }}
            className="hover:animate-pulse"
          />
          <FaLinkedin
            onClick={() => {
              window.location.href = "https://linkedin.com";
            }}
            className="hover:animate-pulse"
          />
          <FaYoutube
            onClick={() => {
              window.location.href = "https://youtube.com";
            }}
            className="hover:animate-pulse"
          />
        </div>
      </div>
      <div>
        <h4 className="text-2xl mb-4">Support</h4>
        <ul className="flex flex-col space-y-2 text-lg font-light items-center lg:items-start">
          <li className="links text-lg">What is Graydawn</li>
          <li className="links text-lg">Help desk software</li>
          <li className="links text-lg">Explore all products</li>
          <li className="links text-lg">Product pricing</li>
          <li className="links text-lg">Customer success</li>
          <li className="links text-lg">Privacy</li>
        </ul>
      </div>
      <div>
        <h4 className="text-2xl mb-4">Graydawn</h4>
        <ul className="flex flex-col space-y-2 text-lg font-light items-center lg:items-start">
          <li className="links text-lg">New release features</li>
          <li className="links text-lg">Graydawn for startups</li>
          <li className="links text-lg">CRM software</li>
          <li className="links text-lg">Graydawn mobile</li>
          <li className="links text-lg">Newsletter signup</li>
          <li className="links text-lg">Manage subscriptions</li>
        </ul>
      </div>
      <div className=" flex-1">
        <h4 className="text-2xl mb-2">Stay up to date with the newest tech</h4>
        <p className="mb-8 text-lg">Sign up to the Graydawn newsletter</p>
        <div>
          <form className="flex flex-col">
            <input
              className="contactInput w-full mb-2"
              type="email"
              placeholder="Email"
            />
            <button
              type="submit"
              className="mt-4  btn-black px-8 py-4 border border-white hover:text-black text-lg font-medium w-full"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footer;
