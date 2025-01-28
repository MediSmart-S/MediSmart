"use client";

import { useEffect, useState } from "react";
import { GoHeartFill } from "react-icons/go";
import Cardiograph from "../svg/Cardiograph";

const LoadingWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      console.log("jehslkdjf");

      setIsLoading(false);
    };

    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-slate-200 z-50">
          <Cardiograph />
        </div>
      ) : (
        <div>{children}</div>
      )}
    </>
  );
};

export default LoadingWrapper;
