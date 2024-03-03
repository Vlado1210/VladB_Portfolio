import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Resume from './pages/resume';
import Home from './pages/home';
import Navbar from './components/navbar';
import Project from './pages/project';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/projects'element={<Home/>}/>
          <Route path='/resume' element={<Resume/>}/>
          <Route path="/project/:projectName" element={<Project/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
