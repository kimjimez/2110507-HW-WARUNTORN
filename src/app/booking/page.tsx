import LocationDateReserve from "@/components/LocationDateReserve";
export default function Booking(){
    return (
        <main className="w-[100%] flex flex-col items-center space-x-5 space-y-4">
            <div className="text-xl font-medium">
                Booking
            </div>
            <div className="w-fit space-y-2">
                <div className="text-md text-left text-gray-600">
                    Name - Surename
                </div>
                <input type="text" name="price" id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                <div className="text-md text-left text-gray-600">
                    National ID
                </div>
                <input type="text" name="price" id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                
                <div className="text-md text-left text-gray-600">
                    Booking
                </div>
                <LocationDateReserve/>

            </div>
            <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm">
                Booking 
            </button>
            
        </main>
    );
}