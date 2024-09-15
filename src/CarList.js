import React from 'react';

const CarList = ({ cars }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Car Make</th>
          <th>Car Model</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        {cars.map((car, index) => (
          <tr key={index}>
            <td>{car.make}</td>
            <td>{car.model}</td>
            <td>{car.year}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CarList;

