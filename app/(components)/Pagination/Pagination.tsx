import Link from "next/link";
import React from "react";

const Pagination = () => {
  const totalPages = 18;
  const currentPage = 1;

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const visiblePages = 5;

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - Math.floor(visiblePages / 2) &&
          i <= currentPage + Math.floor(visiblePages / 2))
      ) {
        pageNumbers.push(i);
      }
    }

    return pageNumbers.map((pageNumber) => (
      <li
        key={pageNumber}
        className={`inline-block px-3 py-2 text-sm font-medium leading-5 text-gray-700  ${
          pageNumber === currentPage
            ? "bg-blue-400 text-white rounded-md"
            : "hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md"
        }`}
      >
        {pageNumber === currentPage ? (
          <span>{pageNumber}</span>
        ) : (
          <a href={`#${pageNumber}`}>{pageNumber}</a>
        )}
      </li>
    ));
  };

  return (
    <nav className="flex items-center justify-center py-4">
      <ul className="flex list-none">
        {/* Previous Button */}
        <li className="inline-block px-8 py-2 rounded-md text-sm font-medium leading-5 text-gray-700 ">
          <Link href="#" className="hover:bg-gray-200 py-2 px-6 rounded-md">
            &laquo; Prev
          </Link>
        </li>

        {/* Page Numbers */}
        {renderPageNumbers()}

        {/* Next Button */}
        <li className="inline-block px-8 rounded-md py-2 text-sm font-medium leading-5 text-gray-700 ">
          <Link href="#" className="hover:bg-gray-200 py-2 px-6 rounded-md">
            Next &raquo;
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
