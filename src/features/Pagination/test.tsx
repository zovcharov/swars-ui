import '@testing-library/jest-dom';
import { render, waitFor, fireEvent } from '@testing-library/react';
import Pagination from '.';

describe('features/Pagination', () => {
  it('renders with current page', () => {
    const { getByText } = render(
      <Pagination
        curPage={3}
        onNext={jest.fn()}
        onPrev={jest.fn()}
        nextPageUrl={null}
        prevPageUrl={null}
      />
    );

    expect(getByText('3')).toBeInTheDocument();
  });

  it('calls cb on clicks', async () => {
    const onNext = jest.fn();
    const onPrev = jest.fn();

    const { getAllByRole } = render(
      <Pagination
        curPage={3}
        onNext={onNext}
        onPrev={onPrev}
        nextPageUrl="url"
        prevPageUrl="url"
      />
    );

    const buttons = getAllByRole('button');

    fireEvent.click(buttons[0]);
    fireEvent.click(buttons[2]);

    await waitFor(() => {
      expect(onPrev).toBeCalledTimes(1);
      expect(onNext).toBeCalledTimes(1);
    });
  });

  it('disables button if no url', async () => {
    const { getAllByRole } = render(
      <Pagination
        curPage={3}
        onNext={jest.fn()}
        onPrev={jest.fn()}
        nextPageUrl={null}
        prevPageUrl={null}
      />
    );

    const buttons = getAllByRole('button');

    expect(buttons[0].getAttribute('disabled')).toBeDefined();
    expect(buttons[2].getAttribute('disabled')).toBeDefined();
  });
});
