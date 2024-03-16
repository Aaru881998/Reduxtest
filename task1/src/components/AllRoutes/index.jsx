import React from 'react';
import Home from '../Home';
import Form from '../Form'; // Import the Form component
import Table from '../Table'; // Import the Table component
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function AllRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/table" element={<Table />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
