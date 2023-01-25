import React from 'react';
// styles & other imports
import LandingPage from './pages/landingPage/LandingPage';
import {
BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={< LandingPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
