import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogList from './components/BlogList';
import BlogDetail from './components/BlogDetail';
import EditBlogForm from './components/editBlogForm';
import NewBlogForm from './components/NewBlogForm';
import blogData from './data/blogData';

const App = () => {
  const [posts, setPosts] = useState(blogData);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogList posts={posts} />} />
        
        <Route path="/blog/:id" element={<BlogDetail posts={posts} setPosts={setPosts} />} />
        <Route path="/edit/:id" element={<EditBlogForm posts={posts} setPosts={setPosts} />} />

        <Route path="/new" element={<NewBlogForm setPosts={setPosts} />} />
        
      </Routes>
    </Router>
  );
};

export default App;
