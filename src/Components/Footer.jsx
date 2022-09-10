import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="h-[5vh] bg-black text-white">
      <Link to={"/second"}>Go to Page 2</Link>
    </div>
  );
};

export default Footer;
