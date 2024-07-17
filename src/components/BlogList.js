// src/components/BlogList.js
import React, { useEffect, useState } from 'react';
import { fetchBlogPosts } from './blogService';
import { Link } from 'react-router-dom';
import styles from './BlogList.module.css';

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchBlogPosts();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };
    getPosts();
  }, []);

  return (
    <div className={styles.blogList}>
      <h1>OC Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>
              <h2>{post.title}</h2>
            </Link>
            <p>{post.content.substring(0, 100)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
