import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewBlogForm = ({ setPosts }) => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now().toString(),
      title,
      summary,
      content,
    };
    setPosts(prev => [newPost, ...prev]);
    navigate('/');
  };

  return (
    <div className="container">
      <h2>Add New Blog</h2>
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
        <button type="submit">Publish Blog</button>
      </form>
    </div>
  );
};

export default NewBlogForm;
