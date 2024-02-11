import { baseUrl, projectId } from '../../constants';

export const fetchPosts = async (projectId: string) => {
  const postsUrl = `${baseUrl}/projects/${projectId}/posts`;
  try {
    const response = await fetch(postsUrl);
    if (!response.ok) {
      throw new Error('Error fetching posts');
    }
    const posts = await response.json();
    return posts.posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

export const fetchProject = async () => {
  const projectUrl = `${baseUrl}/projects/${projectId}`;
  try {
    const response = await fetch(projectUrl);
    if (!response.ok) {
      throw new Error('Error fetching posts');
    }
    const project = await response.json();
    return project.project;
  } catch (error) {
    console.error('Error fetching project:', error);
    throw error;
  }
};
