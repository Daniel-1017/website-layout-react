import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import Posts from "./Posts";
import classes from "./PostsPage.module.css";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    fetchPostsHandler();
  }, []);

  const fetchPostsHandler = () => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        return res.json();
      })
      .then((posts) => {
        setPosts(posts);
      });
    setLoading(false);
  };

  // GET CURRENT POST
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // CHANGE PAGES
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className={classes["section-6"]}>
      <h2 className="section-heading">Posts</h2>
      <div className={classes["posts-wrapper"]}>
        <Posts posts={currentPosts} loading={loading} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </div>
    </section>
  );
};

export default PostsPage;
