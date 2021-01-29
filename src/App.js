import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import AddRides from './components/AddRides'
import Rides from './components/Rides'
import RouteDetails from './components/RouteDetails';

const App = () => {
    const [rides, setRides] = useState ([
      {
          id: 1,
          rider: 'Nick',
          date: 'Jan 1, 2021',
          time: '1:15:23',
          watts: 179,
          hr: 149
      },
      {
          id: 2,
          rider: 'Josh',
          date: 'Jan 2, 2021',
          time: '1:18:23',
          watts: 161,
          hr: 149
      },
      {
          id: 3,
          rider: 'Will',
          date: 'Jan 1, 2021',
          time: '1:17:23',
          watts: 184,
          hr: 154
      }
    ])

// Add Ride
const addRide = (ride) => {
  const id = Math.floor(Math.random() * 10000 + 1)
  const newRide = { id, ...ride }
  setRides([...rides, newRide])
}

// Delete Ride
const deleteRide = (id) => {
  setRides(rides.filter((ride) => ride.id !== id))
}

  return (
    <Router>
      <div className='container border border-secondary mt-3'>
        <Header title='Alpe Du Zwift' />
        <Route path='/' exact render={() => 
          <>
            <AddRides onAdd={addRide}/>
            <Rides rides={rides} onDelete={deleteRide} />
          </>}
        />
        <Route path='/RouteDetails' render={RouteDetails} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
