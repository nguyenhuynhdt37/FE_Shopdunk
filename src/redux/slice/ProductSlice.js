import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  productId: null,
  variantId: null,
  memoryOptionId: null,
  Quantity: 1,
}
const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToProductId: (state, action) => {
      state.productId = Number(action.payload)
    },
    addToVariantId: (state, action) => {
      state.variantId = Number(action.payload)
    },
    addToMemoryOptionId: (state, action) => {
      state.memoryOptionId = Number(action.payload)
    },
  },
})

export const { addToProductId, addToVariantId, addToMemoryOptionId } =
  ProductSlice.actions
export default ProductSlice.reducer
