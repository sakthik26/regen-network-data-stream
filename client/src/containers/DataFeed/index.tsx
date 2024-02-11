import React, { useState, useEffect } from 'react';
import Posts from '../../components/Posts';
import { fetchPosts } from '../../utils/services';
import './DataFeed.css';
import { projectId as defaultId } from '../../constants';
import { useLocation, useParams } from 'react-router-dom';
import { Post } from '../../types';

// Container that lists all the data posts from the project 
const DataFeed: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const location = useLocation();
  const state = location.state as { projectName: string };
  const projectTitle = state?.projectName ?? '';
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Fetch the posts based on the project
    const getPosts = async () => {
      try {
        const fetchedPosts = await fetchPosts(projectId || defaultId);
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      }
    };

    getPosts();
  }, []);

  return (
    <>
      <div className="project-title">{projectTitle}</div>
      <div className="posts-container">
        {posts.map((post) => (
          <Posts id={post.id} title={post.title} createdAt={post.createdAt} />
        ))}
      </div>
    </>
  );
};

export default DataFeed;
