import DataFeed from './containers/DataFeed';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import ProjectList from './containers/ProjectList'; // Import your new ProjectList component
import Navbar from './components/Navbar';
import ProjectList from './containers/ProjectList';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<ProjectList />}></Route>
          <Route path="/projects/:projectId" element={<DataFeed />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
