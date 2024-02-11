export type Post = {
  id: string;
  title: string;
  createdAt: string;
  onClick?: () => void;
};

export type Project = {
  id: string;
  name: string;
  createdAt: string;
};
