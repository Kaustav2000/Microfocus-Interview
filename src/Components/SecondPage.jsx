import React from "react";
import { Link } from "react-router-dom";

const SecondPage = () => {
  return (
    <div className="h-screen">
      <div className="m-2">welcome to the Second Page</div>

      <Link
        to={"/?redirected=true"}
        className="mt-40 p-1 px-3 rounded-xl w-fit bg-blue-600 text-white text-lg"
      >
        Back
      </Link>
    </div>
  );
};

export default SecondPage;
