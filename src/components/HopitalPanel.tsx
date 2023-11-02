'use client'
import { useReducer } from "react"
import ProductCard from "./ProductCard"
import Link from "next/link"
export default function HospitalPanel() {
    const  compareRedure = (compareList:Set<String>, action:{type:String, hopitalName:String}) => {
        switch(action.type){
            case 'add' : {
                return new Set(compareList.add(action.hopitalName))
            }
            case 'remove' : {
                compareList.delete(action.hopitalName)
                return new Set(compareList)
            }
            default: return compareList
        }
    }
    const [ compareList, dispatchCompare ] = useReducer(compareRedure, new Set<String>())

    /**
     * Mock Data for demontration only 
     */
    const mockHospitalRepo = [
        {cid:"001", name: "Chulalongkorn Hospital", image: "/img/chula.jpg"},
        {cid:"002", name: "Rajavithi Hospital", image: "/img/rajavithi.jpg"},
        {cid:"003", name: "Thammasat University Hospital", image: "/img/thammasat.jpg"},
    ]

    return (
        <div>
            <div style={{ margin:"20px", display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around"}} >
                {
                    mockHospitalRepo.map((hospitalItem) => (
                        <Link href={`/hospital/${hospitalItem.cid}`} className="w-1/5">
                        <ProductCard hospitalName={hospitalItem.name} imgSrc={hospitalItem.image}
                        onCompare={ (hopital:string)=>dispatchCompare({type:'add', hopitalName:hopital}) }/>
                        </Link>
                    ))
                }
            </div>
            <div className="w-full text-x1 font-medium">
                Compare List: { compareList.size}
            </div>
            { Array.from(compareList).map( (hopital)=><div key='{hopital}' 
                onClick={ ()=> dispatchCompare({type:'remove', hopitalName:hopital})}>
                    {hopital}
                </div>)
            }
        </div>
    )
}