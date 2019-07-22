import React from 'react';
import './src/config/reactotronConfig';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store';
import AppNavigator from './src/AppNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#191920" />
      <AppNavigator />
    </Provider>
  );
};

export default App;
