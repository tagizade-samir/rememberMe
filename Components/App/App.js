import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import MainStackNav from '../Navigation/MainStackNav'

const App = () => {
  return (
    <NavigationContainer>
      <MainStackNav />
    </NavigationContainer>
  );
};

export default App;
