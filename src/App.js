import React from 'react';
import CarList from './CarList';
import './App.css';

const cars = [
  { make: 'Toyota', model: 'Camry', year: 2020 },
  { make: 'Honda', model: 'Accord', year: 2019 },
  { make: 'Ford', model: 'Mustang', year: 2021 },
];

function App() {
  return (
    <div className="container">
      <h1>Car Dashboard</h1>
      <div className="stats">
        <p>Total Number of Cars: {cars.length}</p>
      </div>
      <CarList cars={cars} />
    </div>
  );
}

export default App;
