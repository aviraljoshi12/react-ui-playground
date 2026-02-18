import { useEffect, useState } from "react";
import Pagination from "./Pagination";

export default function Post() {
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(5);

  useEffect(() => {
    fetch(`https://picsum.photos/v2/list?page=${pageNo}&limit=5`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [pageNo]);

  return (
    <div className="page-container">
      <div className="post-container">
        {data.map((item, index) => {
          return <img src={item.download_url} alt="" key={index} />;
        })}
      </div>
      <Pagination pageNo={pageNo} setPageNo={setPageNo} />
    </div>
  );
}
