import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import MainComponent from './MainComponent';

function App() {
  return (
    <Provider store={store}>
      <MainComponent />
    </Provider>
  );
};

export default App;

