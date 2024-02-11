
import { render, } from '@testing-library/react';
import Posts from '../index';

describe('Posts component', () => {
  const post = {
    title: 'Test Title',
    id: '1',
    createdAt: '2024-02-11T12:00:00Z',
    onClick: jest.fn(),
  };

  it('matches snapshot', () => {
    const { asFragment } = render(<Posts {...post} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const { getByText } = render(<Posts {...post} />);
    expect(getByText(post.title)).toBeInTheDocument();
    expect(getByText('February 11, 2024')).toBeInTheDocument();
  });
});