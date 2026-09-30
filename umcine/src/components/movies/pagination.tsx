import { cn } from "../../utils/cn";
import "./pagination.css";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav className="pagination" aria-label="페이지 이동">
      <button
        type="button"
        className="pagination__arrow"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        aria-label="이전 페이지"
      >
        <img src="/icons/chevron-left.svg" alt="" aria-hidden="true" />
      </button>
      <ul className="pagination__list">
        {pages.map((page) => (
          <li key={page}>
            <button
              type="button"
              className={cn(
                "pagination__page",
                page === currentPage && "pagination__page--active",
              )}
              aria-current={page === currentPage ? "page" : undefined}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="pagination__arrow"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        aria-label="다음 페이지"
      >
        <img src="/icons/chevron-right.svg" alt="" aria-hidden="true" />
      </button>
    </nav>
  );
}

export default Pagination;
