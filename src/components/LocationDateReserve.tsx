'use client'
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { Select, MenuItem } from "@mui/material"
import { useState } from "react"
import { Dayjs } from "dayjs"

export default function LocationDateReserve({onDateChange, onLocationChange} : 
    {onDateChange:Function, onLocationChange: Function}){
    const [bookingDate, setBookingDate] = useState<Dayjs|null>(null)
    const [location, setLocation] = useState('CHLUA')
    return (
        <div className="bg-state-100 rounded-lg space-x-5 space-y-2
        w-fit px-10 py-5 flex flex-row justify-center ">
           

            <Select variant="standard" name="location" id="location"
            className="h-[2em] w-[200px]" value={location}
            onChange={ (e)=> {setLocation(e.target.value), onLocationChange(e.target.value)}}
            >
                    <MenuItem value="CHLUA">Chulalongkorn Hospital</MenuItem>
                    <MenuItem value="RAJ">Rajavithi Hospital</MenuItem>
                    <MenuItem value="THA">Thammasat University Hospital</MenuItem>
            </Select>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white"
                value={bookingDate}
                onChange={(value)=> { setBookingDate(value), onDateChange(value)}}
                />
            </LocalizationProvider>
        </div>
    )
}