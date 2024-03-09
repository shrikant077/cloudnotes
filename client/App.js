import './App.css';
import About from './components/About';
import NHome from './components/NotesHome';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NoteState from './context/notes/NoteState';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Home from './components/Home';


function App() {
  return (
    <div style={{overflowX: "hidden"}}>
      <NoteState>
        <Router>
          <Navbar />
          <div style={{minHeight: "78vh", flexGrow: "1"}}>
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route exact path="/notes" element={<NHome />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
            </Routes>
          </div>
          <Footer/>
        </Router>
      </NoteState>
    </div>
  );
}

export default App;
