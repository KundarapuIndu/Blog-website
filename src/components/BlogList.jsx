import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = ({ posts }) => {
  return (
    <div className="container">
      <h1>My Blog</h1>
      <Link to="/new">+ Add New Blog</Link>
      {posts.map(post => (
        <div key={post.id} className="blog-summary">
          <h2>{post.title}</h2>
          <p>{post.summary}</p>
          <Link to={`/blog/${post.id}`}>Read More →</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
