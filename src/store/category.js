import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categories: [],
  products: []
}

export const category = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = [...action.payload]
    },
    setProducts: (state, action) => {
      state.products = [...state.products, action.payload]
    },
    // resetState: (state) => {
    //   state = []
    // }
  },
})

export const { setCategories, setProducts, resetState } = category.actions

export default category.reducer