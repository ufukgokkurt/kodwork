import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { FavoriteState, Job } from '../Utils';

const initialState: FavoriteState = {
  jobs: [],
};
export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Job>) => {
      const jobExists = state.jobs.some(job => job.id === action.payload.id);
      if (!jobExists) {
        state.jobs.push(action.payload);
      }
    },
    removeFavorite:(state,action:PayloadAction<number>)=> {
      state.jobs = state.jobs.filter(job => job.id !== action.payload);
    }

  },
})

// Action creators are generated for each case reducer function
export const { addFavorite,removeFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer