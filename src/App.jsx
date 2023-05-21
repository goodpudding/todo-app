import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import ThemeProvider from "./Context/theme";
import SettingsProvider from "./Context/Settings";
import { MantineProvider } from "@mantine/core";
import Home from "./Components/home";
import PageSettings from "./Components/settings";
import AuthProvider from './Context/auth';
import Login from './Context/auth/Login';
import Auth from './Context/auth/Auth';
import './App.css'

function App() {
  return (
    <AuthProvider>
    <MantineProvider>
      <ThemeProvider>
        <SettingsProvider>
          <div className="App">
          <Login /> 
          <Auth capability='read'>

          <BrowserRouter>
          <ul className="Nav-header">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/settings">Settings</Link>
              </li>
            </ul>
          
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/settings" element={<PageSettings />} />
            </Routes>
          </BrowserRouter>
          </Auth>
          </div>
        </SettingsProvider>
      </ThemeProvider>
    </MantineProvider>
    </AuthProvider>
  );
}

export default App;
