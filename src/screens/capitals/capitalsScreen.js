import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function CapitalsScreen({navigation}) {
  return (
    <Container>
      <Text>CapitalsScreen</Text>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Text = styled.Text``;

CapitalsScreen.propTypes = {
  navigation: PropTypes.object
};

export default CapitalsScreen;
