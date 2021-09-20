import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import Layout from '../Layout';
import Navbar from '../Navbar';
import { Routes } from '../../Routes/Routes.component';
import { VideosProvider } from '../../providers/Videos/Videos.provider';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <VideosProvider>
          <Navbar/>
          <Layout>
            <Routes/>
          </Layout>
        </VideosProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
