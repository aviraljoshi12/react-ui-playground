import { useEffect, useRef, useState } from "react";
import data from "../data.json";

const DATA_LENGTH = data.length;

export default function ImageCarousel() {
  const [index, setIndex] = useState(0);
  const ref = useRef(null);
  let timer;
  console.log("outside fxn", timer);

  const handleNext = () => {
    setIndex((prev) => {
      if (prev === DATA_LENGTH - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  };

  const handlePrev = () => {
    setIndex((prev) => {
      if (prev === 0) {
        return DATA_LENGTH - 1;
      } else {
        return prev - 1;
      }
    });
  };

  useEffect(() => {
    ref.current = setInterval(handleNext, 1000);
    console.log("inside fxn", timer);
    return () => clearInterval(ref.current);
  }, []);

  return (
    <div
      className="container"
      onMouseOver={() => clearInterval(ref.current)}
      onMouseLeave={() => {
        ref.current = setInterval(handleNext, 1000);
      }}
    >
      <div onClick={handlePrev} className="left-btn">
        {"<"}
      </div>
      <img src={data[index]?.download_url}></img>
      <div onClick={handleNext} className="right-btn">
        {">"}
      </div>
    </div>
  );
}
