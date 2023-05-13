import { renderHook, waitFor, act } from '@testing-library/react';
import usePagination from '.';

describe('hooks/usePagination', () => {
  it('setup base options', () => {
    const { result } = renderHook(() => usePagination());

    expect(result.current.page).toEqual(1);
    expect(result.current.onNextPage).toBeDefined();
    expect(result.current.onPrevPage).toBeDefined();
  });

  it('changes pages', async () => {
    const { result } = renderHook(() => usePagination());

    act(() => {
      result.current.onNextPage();
    });

    await waitFor(() => {
      expect(result.current.page).toEqual(2);
    });

    act(() => {
      result.current.onPrevPage();
    });

    await waitFor(() => {
      expect(result.current.page).toEqual(1);
    });
  });

  it('does not count below 1', async () => {
    const { result } = renderHook(() => usePagination());

    act(() => {
      result.current.onPrevPage();
    });

    await waitFor(() => {
      expect(result.current.page).toEqual(1);
    });
  });
});
