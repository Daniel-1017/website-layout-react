import React, { Fragment } from "react";
import classes from "./PostsPage.module.css";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading</h2>;
  }

  return (
    <Fragment>
      {posts.map((post) => (
        <div key={post.id} className={classes.post}>
          <div>
            <h1 className={classes["post-username"]}>{post.userId}</h1>
            <h2 className={classes["post-title"]}>{post.title}</h2>
            <h3 className={classes["post-body"]}>{post.body}</h3>
          </div>
          <button className={classes["see-comments"]}>See comments</button>

          <div>
            <h1 className={classes["comment-name"]}>Comment's name</h1>
            <h2 className={classes["comment-body"]}>Comment's body</h2>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default Posts;
