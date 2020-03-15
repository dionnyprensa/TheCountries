import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function CurrenciesScreen({navigation}) {
  return (
    <Container>
      <Text>CurrenciesScreen</Text>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Text = styled.Text``;

CurrenciesScreen.propTypes = {
  navigation: PropTypes.object
};

export default CurrenciesScreen;
