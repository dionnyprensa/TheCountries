/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import "react-native-gesture-handler";
import React from "react";
import {ThemeProvider} from "styled-components";
import AppNavigation from "./src/navigation/";
import THEME from "./src/theme.style";

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <AppNavigation />
    </ThemeProvider>
  );
}

export default App;
