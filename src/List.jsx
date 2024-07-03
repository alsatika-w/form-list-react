import React from 'react';
// import {handleSelectedTodoForEdit} from './Form'

const List = ({ registrations }) => {
  return (
    <>
    <div className='shadow p-4 rounded-2 mt-5'>
        <h2>Biodata</h2>
        <div className="table-responsive">
          <table className="table">
            <thead className='text-center'>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Major</th>
                <th scope="col">Age</th>
                <th scope="col">Hobby</th>
                <th scope="col">Motivation</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody className='text-center align-middle'>
        {registrations.map((registration, index) => (
          <tr key={index}>
            <td> {registration.name}</td>
            <td>{registration.major}</td>
            <td>{registration.age}</td>
            <td>{registration.hobby}</td>
            <td>{registration.motivation}</td>
            <div className="d-flex gap-2 d-flex justify-content-center">
                          <button
                            onClick={() => { handleSelectedTodoForEdit(todo) }}
                            className="btn btn-primary"
                            >Edit
                          </button>
                          </div>
          </tr>
        ))}
        </tbody>
        </table>
    </div>
    </div>
    </>
  );
};

export default List;
