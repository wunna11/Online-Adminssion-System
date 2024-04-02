import '@fontsource/poppins/100.css';
import '@fontsource/poppins/200.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import '@fontsource/poppins/900.css';
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Auth from './pages/auth';
import Otp from './pages/auth/Otp';
import Navbar from './pages/Layout/Navbar';
import PersonalInfo from './pages/form/PersonalInfo';

function App() {

  return (
    <Routes>
      <Route element={<Navbar />}>
      <Route path="/auth" element={<Auth />} />
      <Route path="/otp" element={<Otp />} />

      <Route path="/personalInfo" element={<PersonalInfo />} />
      </Route>
    </Routes>
  );
}

export default App;
