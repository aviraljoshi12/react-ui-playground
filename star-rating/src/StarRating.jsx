import { useState } from "react";

export default function StarRating({ count = 5 }) {
  const [starValue, setStarValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(0);
  console.log(starValue);
  return (
    <div className="star-container">
      {new Array(count).fill(0).map((_, index) => {
        return (
          <span
            key={index}
            onClick={() => setStarValue(index + 1)}
            className={
              (hoverValue === 0 && index < starValue) || index < hoverValue
                ? "star active"
                : "star"
            }
            onMouseEnter={() => setHoverValue(index + 1)}
            onMouseLeave={() => setHoverValue(0)}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
}
