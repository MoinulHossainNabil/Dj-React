import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const numberofPages = [];
  for (
    let pageNumber = 1;
    pageNumber <= Math.ceil(totalPosts / postsPerPage);
    pageNumber++
  ) {
    numberofPages.push(pageNumber);
  }

  return (
      <ul className="pagination pagination-lg">
        {numberofPages.map((page) => (
          <li key={page} className="page-item">
            <a onClick={() => paginate(page)} href="#">
              {page}
            </a>
          </li>
        ))}
      </ul>
  );
};

export default Pagination;
