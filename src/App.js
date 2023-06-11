import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Contact } from './pages/Contact';
import { Cart } from './pages/Cart'
import { useState, createContext } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const AppContext = createContext()

function App() {
  const client = new QueryClient();

  return (
    <div className="App">  
      <QueryClientProvider client={client}>
        <Router>
            <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Products" element={<Products/>}/>
            <Route path="/Contact" element={<Contact/>} />
            <Route path="/Cart" element={<Cart/>} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  )
}

export default App;
