import React from 'react'

const Button = ({color, text, onClick}) => {
    return (
        <button
            className='btn btn-secondary btn-block'>
                {text}
        </button>
    )
}

export default Button
