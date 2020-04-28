import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import MainStackNav from '../Navigation/MainStackNav'
import TodoItem from '../Navigation/TodoList/todoItem/TodoItem';

const App = () => {
  return (
   <NavigationContainer>
     <MainStackNav />
   </NavigationContainer>
  );
};

export default App;
