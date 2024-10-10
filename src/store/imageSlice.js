import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  images: [],
};

const imageSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    // array se llena de imagenes del json images.js en utils
    setImages: (state, action) =>{
      state.images = action.payload
    },
  },
});

// Exportar las acciones
export const { setImages } = imageSlice.actions;

// Exportar el reducer
export default imageSlice.reducer;