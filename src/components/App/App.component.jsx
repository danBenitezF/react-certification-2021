import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import Layout from '../Layout';
import Navbar from '../Navbar';
import { Routes } from '../../Routes/Routes.component';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar/>
        <Layout>
          <Routes/>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
