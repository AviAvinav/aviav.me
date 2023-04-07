"use client";

import { useCallback } from "react";
import { useStore } from "~/lib/store";

const Navbutton = ({ inNav }: { inNav?: boolean }) => {
  const setIsNavOpen = useStore(useCallback((state) => state.setIsNavOpen, []));

  const handleClick = () => {
    setIsNavOpen;
  };

  return (
    <button onClick={setIsNavOpen}>
      {inNav ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#000"
          className="w-20 h-20"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#000"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
          />
        </svg>
      )}
    </button>
  );
};

export default Navbutton;
