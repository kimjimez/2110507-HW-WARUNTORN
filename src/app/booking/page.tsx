"use client"
import LocationDateReserve from "@/components/LocationDateReserve";
import { Dayjs } from "dayjs";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { BookingItem } from "../../../interfaces";
import { createOrUpdateBooking } from "@/redux/features/bookSlice"; 

export default function Booking(){
    const urlParams = useSearchParams() 
    const hid = urlParams.get('id')
    const hname = urlParams.get('name')
    const fullname = urlParams.get('fullname')
    const nationalId = urlParams.get('nationalId')
    const location = urlParams.get('location')

    const dispatch = useDispatch<AppDispatch>()
    const makeBooking = () => {
        if (hid && hname){
            const item:BookingItem = {
            bookingId: hid,
            hospital: hname,
            firstName: fullname,
            nationalId: nationalId,
            location:  location,
            bookingDate:null
            //bookingDate: Dayjs(pickupDate).format("YYYY/MM/DD")
            }
            dispatch(createOrUpdateBooking(item))
        }
    }

    const [pickupDate, setPickupDate] = useState<Dayjs|null>(null)
    const [pickupLocation, setPickupLocation] = useState<String>('CHALA')

    return (
        <main className="w-[100%] flex flex-col items-center space-x-5 space-y-4">
            <div className="text-xl font-medium">
                {hname}
            </div>
            <div className="text-xl font-medium">
                Booking
            </div>
            <div className="w-fit space-y-2">
                <div className="text-md text-left text-gray-600">
                    Name - Surename
                </div>
                <input type="text" name="name" id="name" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                <div className="text-md text-left text-gray-600">
                    National ID
                </div>
                <input type="text" name="nationalId" id="nationalId" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                
                <div className="text-md text-left text-gray-600">
                    Booking
                </div>
                <LocationDateReserve onDateChange={(value:Dayjs)=>{setPickupDate}} onLocationChange={(value:Dayjs)=>{setPickupLocation}}/>

            </div>
            <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
             onClick={makeBooking} >
                Booking this Hospital
            </button>
            
        </main>
    );
}