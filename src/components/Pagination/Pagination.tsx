import styles from "./Pagination.module.scss";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const generatePageNumbers = (): (number | string)[] => {
    const pageNumbers: (number | string)[] = [];

    if (totalPages <= 10) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    pageNumbers.push(1);

    if (currentPage > 4) pageNumbers.push("...");

    for (
      let i = Math.max(2, currentPage - 3);
      i <= Math.min(currentPage + 3, totalPages - 1);
      i++
    ) {
      pageNumbers.push(i);
    }

    if (currentPage < totalPages - 3) pageNumbers.push("...");

    pageNumbers.push(totalPages);

    return pageNumbers;
  };

  const pageNumbers = generatePageNumbers();

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className={styles.pagination}>
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className={styles.pageButton}
      >
        Prev
      </button>

      {pageNumbers.map((page, index) => (
        <span key={index}>
          {page === "..." ? (
            <span className={styles.dots}>...</span>
          ) : (
            <button
              onClick={() => onPageChange(page as number)}
              className={`${styles.pageButton} ${
                currentPage === page ? styles.active : ""
              }`}
            >
              {page}
            </button>
          )}
        </span>
      ))}

      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className={styles.pageButton}
      >
        Next
      </button>
    </div>
  );
};
