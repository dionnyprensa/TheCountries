import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import Navigator from "./navigator";

function AppNavigation() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}

export default AppNavigation;
