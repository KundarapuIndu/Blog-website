import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const BlogDetail = ({ posts, setPosts }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find(post => post.id === id);

  if (!post) return <p>Post not found.</p>;

  const handleDelete = () => {
    const confirm = window.confirm("Are you sure you want to delete this blog post?");
    if (confirm) {
      setPosts(prevPosts => prevPosts.filter(p => p.id !== id));
      navigate('/');
    }
  };

  return (
    <div className="container">
      <Link to="/" className="back-link">← Back</Link>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      
      <div style={{ marginTop: '20px' }}>
        <Link to={`/edit/${post.id}`}>
          <button style={{ marginRight: '10px', padding: '10px 20px', background: '#626F47', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            ✏️ Edit
          </button>
        </Link>

        <button onClick={handleDelete} style={{ background: '#626F47', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          🗑️ Delete
        </button>
      </div>
    </div>
  );
};

export default BlogDetail;
