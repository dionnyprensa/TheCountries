import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function AboutScreen({navigation}) {
  return (
    <Container>
      <Text>AboutScreen</Text>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text``;

AboutScreen.propTypes = {
  navigation: PropTypes.object
};

export default AboutScreen;
