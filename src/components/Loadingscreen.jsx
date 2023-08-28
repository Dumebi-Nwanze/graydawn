/* eslint-disable react/prop-types */
import { useEffect } from "react";
function Loadingscreen({ setIsLoading }) {
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, [setIsLoading]);
  return (
    <div className="h-screen w-full bg-black flex items-center justify-center transition-opacity duration-500 opacity-100">
      <img src="/rocket.png" alt="" className="animate-bounce" />
    </div>
  );
}

export default Loadingscreen;
