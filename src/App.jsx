

// function App() {
//   return (
//     <>
//      <Login/>
//      {/* <Form/>
//      <List/> */}
//     </>
//   )
// }

// export default App

import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import List from './List';
import Login from './Login';

const App = () => {
  // const [registrations, setRegistrations] = useState([]);

  // const addRegistration = (registration) => {
  //   setRegistrations([...registrations, registration]);
  // };

  return (
    // <div>
    //   <center>

    //   <h1 className='mb-5'>Form Pendaftaran</h1>
    //   </center>
    //   <Login/>
    //   <Form addRegistration={addRegistration} />
    //   <List registrations={registrations} />
    // </div>
    <Outlet/>
  );
};

export default App;
