import React from "react";
import classes from "./PostsPage.module.css";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  console.log(pageNumbers);
  return (
    <div className={classes["post-pagination"]}>
      {pageNumbers.map((pageNumber) => (
        <button href="!#" key={pageNumber} onClick={() => paginate(pageNumber)}>
          {pageNumber}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
