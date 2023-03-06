import React from 'react';
import {} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/context/store';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import {Router} from './src/routes/Routes';

const persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
};

export default App;
