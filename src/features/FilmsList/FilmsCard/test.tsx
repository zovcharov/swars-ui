import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import FilmsCard from '.';
import { MOCK_FILM } from './mocks';

describe('features/FilmsCard', () => {
  it('renders component with correct items', () => {
    const { getByText } = render(<FilmsCard film={MOCK_FILM} />);

    expect(getByText(MOCK_FILM.title)).toBeInTheDocument();
    expect(getByText(MOCK_FILM.producer)).toBeInTheDocument();
    expect(getByText(MOCK_FILM.director)).toBeInTheDocument();
    expect(getByText(MOCK_FILM.release_date)).toBeInTheDocument();
  });
});
