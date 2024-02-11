import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchProject } from '../../utils/services';
import { Project } from '../../types';
import Posts from '../../components/Posts';
import './ProjectList.css';

// Container that lists all the available projects
const ProjectList: React.FC = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const getProjectDetails = async () => {
      try {
        const projects = await fetchProject();
        setProjects([projects]);
      } catch (error) {
        console.error('Failed to fetch project:', error);
      }
    };
    getProjectDetails();
  }, []);

  const goToProject = (projectId: string, projectName: string) => {
    navigate(`/projects/${projectId}`, { state: { projectName, projectId } });
  };

  return (
    <div className="project-list">
      <div className="project-title">Projects</div>
      {projects.map((project: Project) => (
        <Posts
          id={project.id}
          title={project.name}
          createdAt={project.createdAt}
          onClick={() => goToProject(project.id, project.name)}
        />
      ))}
    </div>
  );
};

export default ProjectList;
