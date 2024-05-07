"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const Pagination = ({ pagination }) => {
  const { page, pages, prev, next } = pagination;
  const router = useRouter();

  const onPageChange = (i) => {
    router.push(`/page/${i}`);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= pages; i++) {
      pageNumbers.push(
        <li key={i} className={`page-item ${page === i ? "active" : ""}`}>
          <button className="page-link" onClick={() => onPageChange(i)}>
            {i}
          </button>
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <nav aria-label="pagination">
      <ul className="pagination">
        <li className={`page-item ${!prev ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={() => onPageChange(page - 1)}
            disabled={!prev}
          >
            Previous
          </button>
        </li>
        {renderPageNumbers()}
        <li className={`page-item ${!next ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={() => onPageChange(page + 1)}
            disabled={!next}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
