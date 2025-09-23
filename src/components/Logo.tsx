import React from "react";
import logoPng from "../assets/KETANLOGO.png"; // adjust the path if needed

type LogoProps = {
  className?: string;
};

const Logo = ({ className = "h-full w-full" }: LogoProps) => {
  return <img src={logoPng} alt="Ketan Graphics Logo" className={className} />;
};

export default Logo;
