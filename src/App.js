import './App.css';
import { Route, Routes } from "react-router-dom";
import LoginScreen from './screens/LoginScreen.js';
import RegisterScreen from './screens/RegisterScreen.js';
import AccountScreen from './screens/AccountScreen.js';
import { Header } from './components/headers/Header.jsx';
import { Navbar } from './components/navbar/Navbar.jsx';
import { ProjectsScreen } from './screens/ProjectsScreen.js';
import { ProjectScreen } from './screens/ProjectScreen.js';
import { AdminPanelScreen } from './screens/AdminPanelScreen.js';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen.js';


function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Routes>
        <Route path="/login" element={<LoginScreen />} exact />
        <Route path="/register" element={<RegisterScreen />} exact />
        <Route path="/account" element={<AccountScreen />} exact />
        <Route path="/dashboard" element={<ProjectsScreen />} exact />
        <Route path="/admin-panel" element={<AdminPanelScreen />} exact />
        <Route path="/projects/:id" element={<ProjectScreen />} />
        <Route path="/forgot-password" element={<ForgotPasswordScreen />} exact />
      </Routes>
    </>
  );
}

export default App;