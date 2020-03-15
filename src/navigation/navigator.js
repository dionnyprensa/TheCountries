import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import AboutScreen from "../screens/about/aboutScreen";
import CapitalsScreen from "../screens/capitals/capitalsScreen";
import CountriesScreen from "../screens/countries/countriesScreen";
import CurrenciesScreen from "../screens/currencies/currenciesScreen";
import HomeScreen from "../screens/home/homeScreen";
import LanguageScreen from "../screens/languages/languagesScreen";

const HomeTab = createBottomTabNavigator();

const AboutStack = createStackNavigator();
const CapitalsStack = createStackNavigator();
const CountriesStack = createStackNavigator();
const CurrenciesStack = createStackNavigator();
const HomeStack = createStackNavigator();
const LanguagesStack = createStackNavigator();

function AboutStackScreen() {
  return (
    <AboutStack.Navigator>
      <AboutStack.Screen name="About" component={AboutScreen} />
    </AboutStack.Navigator>
  );
}

function CapitalsStackScreen() {
  return (
    <CapitalsStack.Navigator>
      <CapitalsStack.Screen name="Capitals" component={CapitalsScreen} />
    </CapitalsStack.Navigator>
  );
}

function CountriesStackScreen() {
  return (
    <CountriesStack.Navigator>
      <CountriesStack.Screen name="Countries" component={CountriesScreen} />
    </CountriesStack.Navigator>
  );
}

function CurrenciesStackScreen() {
  return (
    <CurrenciesStack.Navigator>
      <CurrenciesStack.Screen name="Currencies" component={CurrenciesScreen} />
    </CurrenciesStack.Navigator>
  );
}

function LanguageStackScreen() {
  return (
    <LanguagesStack.Navigator>
      <LanguagesStack.Screen name="Languages" component={LanguageScreen} />
    </LanguagesStack.Navigator>
  );
}

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen
        name="AboutStack"
        component={AboutStackScreen}
        options={{title: "About"}}
      />
      <HomeStack.Screen
        name="CapitalsStack"
        component={CapitalsStackScreen}
        options={{title: "Capitals"}}
      />
      <HomeStack.Screen
        name="CountriesStack"
        component={CountriesStackScreen}
        options={{title: "Countries"}}
      />
      <HomeStack.Screen
        name="CurrenciesStack"
        component={CurrenciesStackScreen}
        options={{title: "Currencies"}}
      />
      <HomeStack.Screen
        name="LanguagesStack"
        component={LanguageStackScreen}
        options={{title: "Languages"}}
      />
    </HomeStack.Navigator>
  );
}

function Navigator() {
  return (
    <HomeTab.Navigator>
      <HomeTab.Screen name="MainHome" component={HomeStackScreen} />
      <HomeTab.Screen name="MainAbout" component={AboutStackScreen} />
    </HomeTab.Navigator>
  );
}

export default Navigator;
