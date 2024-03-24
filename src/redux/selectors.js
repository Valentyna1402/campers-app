import { createSelector } from '@reduxjs/toolkit';

export const selectTrailers = state => state.trailers.items;

export const selectIsLoading = state => state.trailers.isLoading;

export const selectError = state => state.trailers.error;

export const selectFilter = state => state.filter;

export const selectVisibleTrailers = createSelector(
    [selectTrailers, selectFilter],
    (trailers, filter) => {
      return trailers.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  );