import React from "react";
import Clock from "react-live-clock";
import { useSearchParams } from "react-router-dom";

const Header = ({ setStyle }) => {
  const [searchParams] = useSearchParams();
  const redirected = searchParams.get("redirected");
  return (
    <div className="h-[5vh] bg-black text-white flex space-x-52">
      <div className="flex space-x-4 mx-2">
        <p> Position:</p>
        <label>
          <input
            type="radio"
            value="Center"
            name="position"
            onChange={() =>
              setStyle({
                left: "35%",
                top: "18%",
              })
            }
            checked={redirected ? true : false}
          />
          Center
        </label>
        <label>
          <input
            type="radio"
            value="Center"
            name="position"
            onChange={() =>
              setStyle({
                right: 0,
                bottom: 0,
              })
            }
          />
          Lower Right
        </label>
      </div>
      <div className="text-orange-300">
        Press Esc key to hide, Enter to show
      </div>
      <Clock format={"HH:mm:ss"} ticking={true} />
    </div>
  );
};

export default Header;
