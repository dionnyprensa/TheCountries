import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function CountriesScreen({navigation}) {
  return (
    <Container>
      <Text>CountriesScreen</Text>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Text = styled.Text``;

CountriesScreen.propTypes = {
  navigation: PropTypes.object
};

export default CountriesScreen;
