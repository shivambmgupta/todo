import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import OnboardStack from './src/navigation';
import ThemeContext from './src/context/theme';
import ReducerContext from './src/context/reducer';

export default (props) => {
  return (
    <ReducerContext>
      <ThemeContext>
        <NavigationContainer>
          <OnboardStack />
        </NavigationContainer>
      </ThemeContext>
    </ReducerContext>
  );
}