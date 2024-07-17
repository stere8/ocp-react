import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../Styles/BlogPost.css'; // Ensure you have this CSS

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await axios.get(`https://ocp-blog.onrender.com/api/blogposts/${id}`);
        setPost(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blog post:', error);
        setError('Error fetching blog post');
        setLoading(false);
      }
    };
    getPost();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="blogPost container">
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      <p className="text-muted">Posted on {new Date(post.date).toLocaleDateString()}</p>
      {post.gitHubUrl && (
        <a href={post.gitHubUrl} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      )}
    </div>
  );
};

export default BlogPost;
