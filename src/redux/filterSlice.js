import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    location: '',
    equipment: '',
    type: ''
  },
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setEquipment: (state, action) => {
      state.equipment = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    }
  }
});

export const filterReducer = filterSlice.reducer;
export const { setLocation, setEquipment, setType } =
filterSlice.actions;