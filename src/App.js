import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Contact } from './pages/Contact';
import { NavBar } from './components/NavBar';
import { useState, createContext } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const AppContext = createContext()

function App() {
  return (
    <div className="App">  
      <QueryClientProvider>
        <Router>
            <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>}>
            <Route path="/Products" element={<Products/>}>
            <Route path="/Contact" element={<Contact/>} >
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  )
}

export default App;
