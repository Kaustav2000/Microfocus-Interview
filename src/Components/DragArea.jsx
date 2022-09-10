import { useLayoutEffect, useRef, useState } from "react";
import Box from "./Box";

const DragArea = ({ showBox, setShowBox, style, setStyle }) => {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth);
    setHeight(ref.current.offsetHeight);
  }, []);

  return (
    <div
      ref={ref}
      className="bg-gray-500 p-4 h-[90vh] relative grid place-content-center "
    >
      <Box
        setShowBox={setShowBox}
        show={showBox}
        parentWidth={width}
        parentHeight={height}
        style={style}
        setStyle={setStyle}
      />
    </div>
  );
};

export default DragArea;
