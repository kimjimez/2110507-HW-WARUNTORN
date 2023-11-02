import Image  from 'next/image';
import InteractiveCard from './InteractiveCard';
import BasicRating from './BasicRating';

export default function ProductCard( { hospitalName, imgSrc, onCompare } : {hospitalName:string, imgSrc: string, onCompare?:Function}) {
  
    return (
        <InteractiveCard contentName= { hospitalName } >
            <div className='w-full h-[70%] relative rounded-t-lg'  > 
            <Image src={imgSrc}
                alt='Hospital Picture'
                fill={true}
                className='object-cpver rounded-t-lg'
            />
            </div>
            <div className='w-full h-[5%] p-[5px]' >
                {hospitalName}
            </div>
            {/* <button className='block h-[10%] text-sm rounded-md bg-sky-600 
            hover:bg-indigo-600 mx-2 px-1 py-1 text-white shadow-sm'
            onClick={ (e)=> { e.stopPropagation(); onCompare(hospitalName)}}
            >Compare</button> */}
            {
                onCompare ? <div className='w-full p-[5px]'  onClick={ (e)=> { e.stopPropagation(); onCompare(hospitalName)}}>
                <BasicRating rating={0} />
                </div> : ''
            }
            
          
        </InteractiveCard>

    );
}