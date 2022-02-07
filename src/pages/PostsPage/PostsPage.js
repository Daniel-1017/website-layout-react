import React, { useEffect, useState } from "react";
import classes from "./PostsPage.module.css";

const PostsPage = () => {
  const [posts, setPosts] = useState({});

  useEffect(() => {
    fetchPostsHandler();
  }, []);

  const fetchPostsHandler = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        return res.json();
      })
      .then((posts) => {
        setPosts(posts);
      });
  };

  return (
    <section className={classes["section-6"]}>
      <h2 className="section-heading">Posts</h2>
      <div className={classes["posts-wrapper"]}>
        {Object.entries(posts).map((post) => (
          <div key={post[1].id} className={classes.post}>
            <div>
              <h1 className={classes["post-username"]}>{post[1].userId}</h1>
              <h2 className={classes["post-title"]}>{post[1].title}</h2>
              <h3 className={classes["post-body"]}>{post[1].body}</h3>
            </div>
            <button className={classes["see-comments"]}>See comments</button>
            <div>
              <h1 className={classes["comment-name"]}>Comment's name</h1>
              <h2 className={classes["comment-body"]}>Comment's body</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PostsPage;
