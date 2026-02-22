import { useState } from "react";

export default function VirtualizedList({ list, height, width, itemHeight }) {
  const [indices, setIndices] = useState([0, Math.floor(height / itemHeight)]);
  const visibleList = list.slice(indices[0], indices[1] + 1);

  const handleScroll = (e) => {
    const { scrollTop } = e.target;
    console.log("scrollTop", scrollTop);
    const newStartIndex = Math.floor(scrollTop / itemHeight);
    const newEndIndex = newStartIndex + Math.floor(height / itemHeight);
    setIndices([newStartIndex, newEndIndex]);
  };
  return (
    <div
      className="container"
      style={{
        height,
        width,
        background: "aliceblue",
        overflow: "auto",
        position: "relative",
      }}
      onScroll={handleScroll}
    >
      <div style={{ height: list.length * itemHeight }}>
        {visibleList.map((item, index) => {
          return (
            <div
              className="item"
              style={{
                height: itemHeight,
                background: "coral",
                border: "5px solid black",
                position: "absolute",
                top: (indices[0] + index) * itemHeight,
                width: "100%",
                textAlign: "center",
              }}
            >
              {`Item:` + item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
