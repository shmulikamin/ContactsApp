
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Main } from './src/routers'

const App = () => {
  return (
    <NavigationContainer>
       { Main() }
    </NavigationContainer>
  );
};

export default App;
