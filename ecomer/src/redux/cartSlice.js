import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items:[],
    totalQuantity: 0,
  },
  reducers: {
    addToCart: (state,action) => {
        const product = action.payload;
        const existingItem = state.items.find(item => item.id === product.id);
        if(existingItem){
            return;
        }else{
            state.items.push({...product,quantity:1})
            state.totalQuantity+=1;
        }
    },
    removeFromCart: (state,action)=>{
      const id = action.payload;
      const existingItem = state.items.find(item=>item.id===id);
      if(!existingItem) return;

      state.totalQuantity -= existingItem.quantity;
      state.items=state.items.filter(item=>item.id !==id);

      if(state.totalQuantity<0) state.totalQuantity=0;
    },
  },
});

export const {addToCart,removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;