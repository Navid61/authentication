import { ThemeProvider } from "styled-components";
import {  lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const theme = {
  colors: {
    primary: "#3179ba", 
    border: {
      default: "blue",
      header: "cyan",
      footer: "cyan",
    },
  },
  spacing: {
    padding: "10px",
    height: "100%",
    width: "100%",
    display: "flex",
    direction: "row",
  },
};

// fake data



const Login = lazy(() => import('./pages/Login'));
const Registeration = lazy(()=>import('./pages/Registration'))
export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
      
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/registeration" element={<Registeration />} />
          </Routes>
     
      </Router>
    </ThemeProvider>
  );
};
