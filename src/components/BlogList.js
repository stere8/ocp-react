import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchBlogPosts } from './blogService';
import '../Styles/BlogList.css'; // Ensure you have this CSS

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchBlogPosts();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        setLoading(false);
      }
    };
    getPosts();
  }, []);

  const extractGitHubPath = (url) => {
    const prefix = "https://github.com/";
    return url.startsWith(prefix) ? url.substring(prefix.length) : url;
  };

  return (
    <div className="blogList container">
      <section className="hero-section blog-list-hero">
        <span className="section-kicker">Insights</span>
        <h1>Engineering notes from operational backend work</h1>
        <p>
          Short writeups on backend reliability, data flow, integrations, automation, and the kinds of
          system decisions that matter once software is carrying real operational weight.
        </p>
      </section>
      {loading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row">
          {Array.isArray(posts) && posts.map((post) => (
            <div key={post.id} className="col-md-4 mb-4">
              <div className="card blog-list-card">
                <div className="card-body">
                  <Link to={`/blog/${post.id}`}>
                    <h5 className="card-title">{post.title}</h5>
                  </Link>
                  <div className="card-text" dangerouslySetInnerHTML={{ __html: post.content.substring(0, 100) + '...' }} />
                  <p className="card-text"><small className="text-muted">Posted on {new Date(post.date).toLocaleDateString()}</small></p>
                  {post.gitHubUrl && (
                    <p className="card-text">
                      <small className="text-muted">Repo: {extractGitHubPath(post.gitHubUrl)}</small>
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogList;
