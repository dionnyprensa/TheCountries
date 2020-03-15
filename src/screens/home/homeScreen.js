import React from "react";
import {SafeAreaView, StyleSheet, StatusBar} from "react-native";
import styled from "styled-components";
import PropTypes from "prop-types";
import {Svg, Circle, Rect, SvgXml} from "react-native-svg";

import THEME from "../../theme.style";

import Card from "../../components/card.component";
import CountriesSVG from "../../../assets/svg/connected_world_undraw.svg";
// import LanguageSVG from "../../../assets/svg/ideas_undraw.svg";
// import CapitalsSVG from "../../../assets/svg/map_light_undraw.svg";
// import CurrenciesSVG from "../../../assets/svg/printing_invoices_undraw.svg";

function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        animated={true}
      />

      <Container>
        <Card
          title="Countries"
          // imageUrl={Countries} /* , bodyText, style, renderImage */
        />
        <Card title="Capitals" />
        <Card title="Languages" />
        <Card title="Currencies" />
      </Container>
    </SafeAreaView>
  );
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  /* padding: ${({theme}) => theme.PADDING_SCREEN + "px"}; */
`;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: THEME.PADDING_SCREEN,
    backgroundColor: THEME.COLOR_WHITE
    // borderColor: "blue",
    // borderWidth: 5
    // width: "100%",
    // height: "100%"
  }
});
HomeScreen.propTypes = {
  navigation: PropTypes.object
};

export default HomeScreen;
