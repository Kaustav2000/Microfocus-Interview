import React, { useEffect, useState } from "react";
import DragArea from "./DragArea";
import Footer from "./Footer";
import Header from "./Header";

const Main = () => {
  const [showBox, setShowBox] = useState(false);
  const [style, setStyle] = useState({});

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setShowBox(true);
    }
    if (e.key === "Escape") {
      setShowBox(false);
    }
  };

  return (
    <div className="h-screen w-screen">
      <Header setStyle={setStyle} />
      <DragArea
        showBox={showBox}
        setShowBox={setShowBox}
        style={style}
        setStyle={setStyle}
      />
      <Footer />
    </div>
  );
};

export default Main;
