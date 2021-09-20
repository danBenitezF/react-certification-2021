import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import { VideosProvider } from '../../providers/Videos/Videos.provider';
import { Main } from '../Main.component';

function App() {
  return (
    <BrowserRouter>
        <AuthProvider>
          <VideosProvider>
            <Main></Main>
          </VideosProvider>
        </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
