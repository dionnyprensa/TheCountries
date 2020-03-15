import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import THEME from "../theme.style";

function Card({title, imageUrl, bodyText, style, renderImage = true}) {
  return (
    <Container>
      <ImageContainer />
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
    </Container>
  );
}

const Container = styled.View`
  width: 155px;
  height: 200px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  align-self: center;
  background-color: ${({theme}) => theme.COLOR_PRIMARY};
  margin-right: ${({theme}) => theme.MARGIN_MEDIUM + "px"};
  margin-bottom: ${({theme}) => theme.MARGIN_MEDIUM + "px"};
  border-radius: 20px;
  padding: 15px;
`;

const ImageContainer = styled.View`
  width: 100%;
  height: 120px;
  background-color: ${({theme}) => theme.COLOR_BLACK};
`;

const TitleContainer = styled.View`
  width: 155px;
  height: 50px;
  align-items: center;
  justify-content: center;
  bottom: 0;
  position: absolute;
  background-color: ${({theme}) => theme.COLOR_SECONDARY};
  border-radius: 20px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

const Title = styled.Text`
  color: ${({theme}) => theme.COLOR_WHITE};
  font-weight: ${({theme}) => theme.FONT_WEIGHT_BOLD};
  font-size: ${({theme}) => theme.FONT_SIZE_LARGE + "px"};
  /* font-family: ${({theme}) => theme.FONT_FAMILY_BOLD}; */
`;

Card.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  bodyText: PropTypes.string,
  style: PropTypes.object,
  renderImage: PropTypes.bool
};

export default Card;
