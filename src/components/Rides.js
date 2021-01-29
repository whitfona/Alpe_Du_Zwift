import React from 'react'
import { BsTrash } from 'react-icons/bs'

const Rides = ({ rides, onDelete }) => {
    
    return (
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">Rider</th>
                    <th scope="col">Date</th>
                    <th scope="col">Time</th>
                    <th scope="col">Avg. Watts</th>
                    <th scope="col">Avg. HR</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {rides.map((ride) => (
                    <tr key={ride.id}>
                        <td>{ride.rider}</td>
                        <td>{ride.date}</td>
                        <td>{ride.time}</td>
                        <td>{ride.watts}</td>
                        <td>{ride.hr}</td>
                        <td><BsTrash style={{ cursor: 'pointer'}} onClick={() => onDelete(ride.id)} /></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Rides
