import '@testing-library/jest-dom';
import { render, act, waitFor, screen } from '@testing-library/react';
import FilmsList from '.';
import { MOCK_FILM } from './FilmsCard/mocks';

const getApiResponseMock = () => ({
  results: [
    MOCK_FILM,
  ],
  count: 1,
  next: null,
  previous: null,
})

jest.mock('./FilmsCard', () => () => <div data-testid="film-card" />);

jest.mock('@/api', () => ({
  getFilms: () => Promise.resolve(getApiResponseMock())
}));

describe('features/FilmsList', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it ('renders component with correct films count', async () => {
    await act(() => {
      render(<FilmsList />);
    });

    await waitFor(() => {
      expect(screen.getAllByTestId('film-card')).toHaveLength(1);
    });
  });
});