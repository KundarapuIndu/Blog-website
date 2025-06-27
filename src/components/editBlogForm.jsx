import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditBlogForm = ({ posts, setPosts }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find(p => p.id === id);

  const [title, setTitle] = useState(post?.title || '');
  const [summary, setSummary] = useState(post?.summary || '');
  const [content, setContent] = useState(post?.content || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPost = { id, title, summary, content };
    const updatedPosts = posts.map(p => (p.id === id ? updatedPost : p));
    setPosts(updatedPosts);
    navigate(`/blog/${id}`);
  };

  if (!post) return <p>Post not found.</p>;

  return (
    <div className="container">
      <h2>Edit Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        /><br /><br />
        <input
          type="text"
          placeholder="Summary"
          value={summary}
          onChange={e => setSummary(e.target.value)}
          required
        /><br /><br />
        <textarea
          rows="6"
          placeholder="Content"
          value={content}
          onChange={e => setContent(e.target.value)}
          required
        /><br /><br />
        <button type="submit">Update Post</button>
      </form>
    </div>
  );
};

export default EditBlogForm;
