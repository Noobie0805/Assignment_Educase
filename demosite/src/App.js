import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingScreen, LoginScreen, SignupScreen, Profile } from "./Pages/pageIndex";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/signup" element={<SignupScreen />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
