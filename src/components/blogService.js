import runtimeConfig from '../config/runtimeConfig';

const API_URL = runtimeConfig.blogApiUrl;

const fetchJson = async (url, errorMessage) => {
  if (!API_URL) {
    throw new Error('REACT_APP_BLOG_API_URL is not configured');
  }

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(errorMessage);
  }

  return response.json();
};

export const fetchBlogPosts = async () => {
  try {
    return await fetchJson(API_URL, 'Error fetching blog posts');
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw error;
  }
};

export const fetchBlogPostById = async (id) => {
  try {
    return await fetchJson(`${API_URL}/${encodeURIComponent(id)}`, 'Error fetching blog post');
  } catch (error) {
    console.error('Error fetching blog post:', error);
    throw error;
  }
};
