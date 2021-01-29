import React from 'react'
import { BiLinkExternal } from 'react-icons/bi'

const RouteDetails = () => {
    return (
        <div className='text-center text-dark'>
            <h1 className='mt-2'>Alpe Du Zwift</h1>
            <p>"Road To Sky"</p>
            <a className='text-muted' href='https://zwiftinsider.com/route/road-to-sky/' rel='noreferrer' alt='Go To Route Details' target='_blank'>Go To Route <BiLinkExternal /></a>
            <img className='img-fluid mt-3' src={process.env.PUBLIC_URL + 'road-to-sky-img.png'} alt='Alpe Du Zwift Map' />
            <h3 className='mt-3 mb-2'>Route Details</h3>
            <p ><span className='font-weight-bold'>Length:</span> 17.3 km</p>
            <p><span className='font-weight-bold'>Elevation:</span> 1045 m</p> 
        </div>
    )
}

export default RouteDetails
