import { create } from 'zustand'
import type { SortingState } from '@tanstack/react-table'

type sortingInitial = {
  sortBy: string | null
  sortOrder: 'asc' | 'desc'
}

type sortingState = {
  sorting: sortingInitial
}

type sortingAction = {
  updateSorting: (sorting: sortingState['sorting']) => void
  setSorting: (sortBy: string | null, sortOrder: 'asc' | 'desc') => void
  resetSorting: () => void
}

export type sorting = sortingState & sortingAction

export const useSorting = create<sorting>((set) => ({
  sorting: {
    sortBy: null,
    sortOrder: 'asc',
  },
  updateSorting: (sorting) => set(() => ({ sorting })),
  setSorting: (sortBy, sortOrder) =>
    set(() => ({
      sorting: {
        sortBy,
        sortOrder,
      },
    })),
  resetSorting: () =>
    set(() => ({
      sorting: {
        sortBy: null,
        sortOrder: 'asc',
      },
    })),
}))

// Helper function to convert TanStack Table SortingState to our sorting format
export const convertSortingState = (
  sortingState: SortingState,
): sortingInitial => {
  if (sortingState.length === 0) {
    return {
      sortBy: null,
      sortOrder: 'asc',
    }
  }

  const firstSort = sortingState[0]
  return {
    sortBy: firstSort.id,
    sortOrder: firstSort.desc ? 'desc' : 'asc',
  }
}
