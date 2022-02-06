import React from "react";
import classes from "./PostsPage.module.css";

const PostsPage = () => {
  return (
    <section className={classes["section-6"]}>
      <h2 className="section-heading">Posts</h2>
      <div className={classes["posts-wrapper"]}>
        <div className={classes.post}>
          <div>
            <h1 className={classes["post-username"]}>User's name</h1>
            <h2 className={classes["post-title"]}>Post's title</h2>
            <h3 className={classes["post-body"]}>Post's body</h3>
          </div>
          <button className={classes["see-comments"]}>See comments</button>
          <div>
            <h1 className={classes["comment-name"]}>Comment's name</h1>
            <h2 className={classes["comment-body"]}>Comment's body</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostsPage;
