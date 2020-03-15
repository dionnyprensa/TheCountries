import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function HomeScreen({navigation}) {
  return (
    <Container>
      <Text>HomeScreen</Text>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Text = styled.Text``;

HomeScreen.propTypes = {
  navigation: PropTypes.object
};

export default HomeScreen;
