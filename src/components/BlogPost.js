// src/components/BlogPost.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBlogPostById } from './blogService';
import styles from './BlogPost.module.css';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const getPost = async () => {
      try {
        const data = await fetchBlogPostById(id);
        setPost(data);
      } catch (error) {
        console.error('Error fetching blog post:', error);
      }
    };
    getPost();
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className={styles.blogPost}>
      <h1>{post.title}</h1>
      <p>
        {post.content.split('\n').map((paragraph, idx) => (
          <span key={idx}>
            {paragraph}
            <br />
          </span>
        ))}
      </p>
      {post.gitHubUrl && (
        <a href={post.gitHubUrl} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      )}
    </div>
  );
};

export default BlogPost;
