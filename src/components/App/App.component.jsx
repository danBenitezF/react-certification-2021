import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import Layout from '../Layout';
import Navbar from '../Navbar';
import { Routes } from '../../Routes/Routes.component';
import { VideosProvider } from '../../providers/Videos/Videos.provider';
import { Main } from '../Main.component';

function App() {
  return (
    <BrowserRouter>
<<<<<<< Updated upstream
      <AuthProvider>
        <Navbar/>
        <Layout>
          <Routes/>
        </Layout>
      </AuthProvider>
=======
        <AuthProvider>
          <VideosProvider>
            <Main></Main>
          </VideosProvider>
        </AuthProvider>
>>>>>>> Stashed changes
    </BrowserRouter>
  );
}

export default App;
