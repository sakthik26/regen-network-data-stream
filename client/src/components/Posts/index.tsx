import { Post } from '../../types';
import './Posts.css';

const Posts = ({ title, createdAt, onClick }: Post) => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="container" onClick={onClick}>
      <div className="title">{title}</div>
      <div className="date">{formatDate(createdAt)}</div>
    </div>
  );
};

export default Posts;
