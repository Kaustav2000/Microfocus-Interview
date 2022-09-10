import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Box = ({
  setShowBox,
  show,
  parentWidth,
  parentHeight,
  style,
  setStyle,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isX, setIsX] = useState();
  const [isY, setIsY] = useState();
  const [searchParams] = useSearchParams();
  const redirected = searchParams.get("redirected");

  useEffect(() => {
    redirected && setShowBox(true);

    setStyle({
      left: "35%",
      top: "18%",
    });
  }, []);

  const dragStart = (e) => {
    setIsX(e.screenX - e.target.getBoundingClientRect().left);
    setIsY(e.screenY - e.target.getBoundingClientRect().top);
    setIsDragging(true);
  };

  const dragging = (e) => {
    if (isDragging) {
      let left = e.screenX - isX;
      let top = e.screenY - isY;
      let right = parentWidth - e.target.getBoundingClientRect().right;
      let bottom = parentHeight - e.target.getBoundingClientRect().bottom;
      if (left >= 0 && top >= 0 && right >= 0 && bottom >= 0) {
        setStyle({ left: left, top: top });
      }
    }
  };

  const dragEnd = () => {
    setIsDragging(false);
  };

  let classes = show
    ? "h-[400px] w-[400px] bg-gray-600 shadow-md absolute "
    : " hidden";

  return (
    <div
      className={`${classes} ${redirected && "border-2 border-blue-800"}`}
      style={style}
      onMouseDown={dragStart}
      onMouseMove={dragging}
      onMouseUp={dragEnd}
    ></div>
  );
};

export default Box;
