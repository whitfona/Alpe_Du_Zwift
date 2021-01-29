import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({title}) => {
    return (
        <header className='d-flex justify-content-between align-items-center p-3'>
            <h1 className='text-center'>{title}</h1>
            <div className='header-btns'>
                <Link className='btn btn-secondary' to='/'>Home</Link>
                <Link className='btn btn-secondary' to='RouteDetails'>Route</Link>
            </div>
        </header>
    )
}

export default Header
