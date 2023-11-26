import Booking from "@/app/booking/page";
import getHospitals from "@/lips/getHospitals"
import HospitalCatalog from "@/components/HospitalCatalog";
import { render, screen } from "@testing-library/react";


//const hospitals = getHospitals()

describe('BookingMenu', ()=> {
    it('should have title', ()=> {
        //Arrange
        //render(<HospitalCatalog hospitalJson={hospitals}/>)
        render(<Booking/>)

        //Act 
        //const bannerText  = screen.getByText('Select Hospital');

        const bannerText  = screen.getByText('Booking');
        

        //Assert
        expect(bannerText).toBeInTheDocument();

    })
})