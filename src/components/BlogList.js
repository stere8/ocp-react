import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Styles/BlogList.css';

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        console.log('asdasdasd');
        const response = await axios.get('https://ocp-blog.onrender.com/api/blogposts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };
    getPosts();
  }, []);

  return (
    <div className="blogList container">
      <h1>OC Blog Posts</h1>
      <div className="row">
        {Array.isArray(posts) && posts.map((post) => (
          <div key={post.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <Link to={`/blog/${post.id}`}>
                  <h5 className="card-title">{post.title}</h5>
                </Link>
                <p className="card-text">{post.content.substring(0, 100)}...</p>
                <p className="card-text"><small className="text-muted">Posted on {new Date(post.date).toLocaleDateString()}</small></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
