export default function Pagination({ pageNo, setPageNo }) {
  const handleNext = () => {
    setPageNo((prev) => prev + 1);
  };
  const handleBack = () => {
    setPageNo((prev) => prev - 1);
  };

  const prevThreeNo = new Array(3)
    .fill(0)
    .map((_, i) => pageNo - i - 1)
    .filter((num) => num > 0)
    .reverse();

  const nextFourNo = new Array(4).fill(0).map((_, i) => pageNo + i);

  const paginationArr = [...prevThreeNo, ...nextFourNo];

  return (
    <div className="pagination-container">
      {pageNo > 1 && (
        <div className="page-btn" onClick={handleBack}>
          {"<"}
        </div>
      )}

      {paginationArr.map((value) => {
        return (
          <div
            onClick={() => setPageNo(value)}
            className={`${pageNo === value ? "page-btn active" : "page-btn"} `}
          >
            {value}
          </div>
        );
      })}

      <div className="page-btn" onClick={handleNext}>
        {">"}
      </div>
    </div>
  );
}
