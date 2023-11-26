import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { BookingItem } from "../../../interfaces" 

type BookState = {
  bookItems: BookingItem[]
}

const initialState: BookState = { bookItems: [] }

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    createOrUpdateBooking: (state, action: PayloadAction<BookingItem>) => {
      state.bookItems.push(action.payload)
    },
    cancelBooking: (state, action: PayloadAction<BookingItem>) => {
      const remainItems = state.bookItems.filter( obj => {
        return ((obj.nationalId !== action.payload.nationalId)
        || (obj.firstName !== action.payload.firstName)
        || (obj.bookingDate !== action.payload.bookingDate))
      })
      state.bookItems = remainItems
    }
  }
})

export const { createOrUpdateBooking, cancelBooking } = bookSlice.actions
export default bookSlice.reducer