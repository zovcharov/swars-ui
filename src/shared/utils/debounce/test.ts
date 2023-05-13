import { waitFor } from '@testing-library/react';
import debounce from "."

describe('utils/debounce', () => {
  it('calls function only once', async () => {
    const mockFn = jest.fn();

    const debouncedMock = debounce(mockFn, 500);

    debouncedMock();
    debouncedMock();
    debouncedMock();

    await waitFor(() => {
      expect(mockFn).toBeCalledTimes(1);
    });
  });

  it('calls function with right params', async () => {
    const mockFn = jest.fn();

    const debouncedMock = debounce(mockFn, 500);

    debouncedMock(1);
    debouncedMock(2);
    debouncedMock(3);

    await waitFor(() => {
      expect(mockFn).toBeCalledWith(3);
    });
  })
})