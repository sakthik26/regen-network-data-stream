import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import DataFeed from '../index';

jest.mock('../../../utils/services', () => ({
  fetchPosts: jest.fn(),
}));

describe('DataFeed component', () => {
  test('renders correctly with empty posts', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <DataFeed />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders correctly with posts', () => {
    const posts = [
      { id: 1, title: 'Post 1', createdAt: '2024-02-11' },
      { id: 2, title: 'Post 2', createdAt: '2024-02-10' },
    ];
    jest.spyOn(React, 'useState').mockReturnValueOnce([posts, jest.fn()]);

    const { asFragment } = render(
      <MemoryRouter>
        <DataFeed />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
