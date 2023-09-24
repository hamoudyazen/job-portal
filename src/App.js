import './App.css';
import Home from './components/Home';
import Jobs from './components/Jobs';
import ErrorPage from './components/ErrorPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
function App() {
  return (
    <>

      <Router>
        <Navbar>
        </Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='home' element={<Home></Home>} />
          <Route path='jobs' element={<Jobs></Jobs>} />
          <Route path='**' element={<ErrorPage ></ErrorPage>} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
