import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  elements: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // añade imagenes al carrito de compras
    addImagesToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    // quita de la lista el elemento
    removeImageToCart: (state, action) => {
      state.cart = state.cart.filter((el) => el.id !== action.payload);
    },
    // reemplaza todo el carro por el nuevo array
    addAllImagesToCart: (state, action) => {
      state.cart = action.payload;
    },
    // contador para implementar las notificaciones
    countElementsInCart: (state, action) => {
      if (action.payload === "increment") {
        state.elements += 1;
      }
      if (action.payload === "decrement") {
        state.elements -= 1;
      }
      if(action.payload === "all"){
        console.log(state.cart.length);
        
        state.elements = state.cart.length
      }
    },
  },
});

// Exportar las acciones
export const { addImagesToCart, removeImageToCart, addAllImagesToCart, countElementsInCart } =
  cartSlice.actions;

// Exportar el reducer
export default cartSlice.reducer;
