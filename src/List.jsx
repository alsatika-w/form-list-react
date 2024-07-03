import React from 'react';

const List = ({ registrations }) => {
  return (
    <div>
        <center>
        <h2>Biodata</h2>
        </center>
     
      <ul>
        {registrations.map((registration, index) => (
          <li key={index}>
            <strong>Nama:</strong> {registration.name} <br />
            <strong>Jurusan:</strong> {registration.major} <br />
            <strong>Usia:</strong> {registration.age} <br />
            <strong>Hobi:</strong> {registration.hobby} <br />
            <strong>Motivasi:</strong> {registration.motivation}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
