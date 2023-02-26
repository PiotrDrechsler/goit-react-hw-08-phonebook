import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';

import { store, persistor } from './redux/store';
import 'modern-normalize';

import App from 'components/App';
import './index.css';

const PUBLIC_URL = 'goit-react-hw-08-phonebook';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename={PUBLIC_URL}>
          <ChakraProvider>
            <App />
          </ChakraProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
