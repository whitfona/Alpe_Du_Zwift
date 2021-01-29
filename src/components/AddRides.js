import React from 'react'
import Button from './Button'
import Select from 'react-select'
import { useState } from 'react'

const AddRides = ( {onAdd} ) => {
    const [rider, setRider] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [watts, setWatts] = useState('')
    const [hr, setHr] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();

        if( !rider || !date || !time || !watts || !hr ) {
            alert('Fill in all fields!')
            return
        }

        onAdd({ rider, date, time, watts, hr })

        setRider('')
        setDate('')
        setTime('')
        setWatts('')
        setHr('')
    }

    const options = [
        { value: 'Nick', label: "Nicholas"},
        { value: 'Josh', label: "Joshua"},
        { value: 'Will', label: "William"}
    ]

    return (
        <div>
            <form className='m-4' onSubmit={onSubmit}>
                    <Select className='form-select mb-2' aria-label='Default select example' onChange={(options) => setRider(options.value)} options={options} placeholder='Select Rider...' value={rider} />
                <div className='input-group mb-2'>
                    <input type='text' id='date' name='date' className='form-control' placeholder='Date...' value={date} onChange={(e) => setDate(e.target.value)} />
                    <input type='text' id='time' name='time' className='form-control' placeholder='Time...' value={time} onChange={(e) => setTime(e.target.value)} />
                    <input type='text' id='watts' name='watts' className='form-control' placeholder='Avg. Watts...' value={watts} onChange={(e) => setWatts(e.target.value)} />
                    <input type='text' id='hr' name='hr' className='form-control' placeholder='Avg. HR...' value={hr} onChange={(e) => setHr(e.target.value)} />
                </div>
                <Button text='Submit'/>
            </form>
        </div>
    )
}

export default AddRides
