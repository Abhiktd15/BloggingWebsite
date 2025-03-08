import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";
import React, { memo, useMemo } from "react";

const Post = memo(({ _id, title, summary, cover, content, createdAt, author }) => {
  const formattedDate = useMemo(() => formatISO9075(new Date(createdAt)), [createdAt]);

  return (
    <div className="post">
      <div className="image">
        <Link to={`/post/${_id}`}>
          <img src={`http://localhost:4000/${cover}`} alt={title || "Post Image"} loading="lazy" />
        </Link>
      </div>
      <div className="texts">
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>
        <p className="summary">{summary?.slice(0, 150) || ""} . . . .</p>
        <p className="info">
          <span className="author">By- {author?.username || "Unknown Author"}</span>
          <time>{formattedDate}</time>
        </p>
      </div>
    </div>
  );
});

export default Post;
