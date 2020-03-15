import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function LanguageScreen({navigation}) {
  return (
    <Container>
      <Text>LanguageScreen</Text>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Text = styled.Text``;

LanguageScreen.propTypes = {
  navigation: PropTypes.object
};

export default LanguageScreen;
