import React from 'react'
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from './pages/Homepage';
import Tymy from './pages/Tymy';
import Hraci from './pages/Hraci';
import Stadiony from './pages/Stadiony';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';
import HraciDetail from './components/HraciDetail';


const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
      <Header/>
      <Navigation />
      <br></br>
      <br></br>
        <main className='container'>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/tymy" element={<Tymy />} />
            <Route path="/hraci" element={<Hraci />} />
            <Route path="/hraci/:id" element={<HraciDetail />} />
            <Route path="/stadiony" element={<Stadiony />} />
          </Routes>
        </main>
        <br></br>
        <br></br>
        <Footer/>
      </ApolloProvider>
    </BrowserRouter>
  );
}

export default App;