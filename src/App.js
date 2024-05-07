import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Bookspage from './Components/Bookspage';
import Booksdetails from './Components/Booksdetails';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Bookspage />} /> 
          <Route path="/books/:id" element={<Booksdetails />} />
          <Route path="/books" element={<Bookspage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
