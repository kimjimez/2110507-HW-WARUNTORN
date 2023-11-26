"use client"
import { useAppSelector, AppDispatch } from "@/redux/store"
import { useDispatch } from "react-redux"
import { cancelBooking } from "@/redux/features/bookSlice"

export default function BookingCart(){
    //const cartItems = useAppSelector( (state) => state.bookSlice.bookItems)
    const cartItems = useAppSelector( (state) => state.reduxPersistReducer.bookSlice.bookItems)
    const dispatch = useDispatch<AppDispatch>()
    return(
        <>
        {
            cartItems.map((bookItem)=> (
                <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2" 
                    key={bookItem.bookingId}>
                        <div className="text-xl">{bookItem.hospital} </div>
                        <div className="text-sm">{bookItem.firstName} </div>
                        <div className="text-sm">{bookItem.nationalId} </div>
                        <div className="text-sm">{bookItem.location} </div>
                        <div className="text-sm">{bookItem.bookingDate} </div>
                        <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
                        onClick={()=> dispatch(cancelBooking(bookItem))} >
                            Cancel Booking
                        </button>
                </div>
            )

            )
        }
        
        </>

    )
}