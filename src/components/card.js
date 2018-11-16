import React from "react";
import styled from "styled-components";

import { IconImage } from "./image";
import DaysLeft from "./daysLeft";
import Stats from "./stats";

const Container = styled.div`
  border: 1px solid #e4e4e4;
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  a,
  a:visited {
    color: #29383c;
    text-decoration: none;
  }

  &:hover {
    transform: scale(1.02) translateY(-0.3125rem);
    box-shadow: 0px 0px 5px 1px #ccc;
    border: 1px solid #f08f0069;
  }
`;

const Hero = styled.div`
  height: 160px;
  width: 100%;
  background-size: cover;
  background-position: center;
  padding: 12px;
  position: relative;
`;

const HeroIcon = styled(IconImage)`
  position: absolute;
  bottom: -24px;
  border: 1px solid #e4e4e4;
`;

const Body = styled.div`
  padding: 12px;
`;

const Meta = styled.div`
  position: absolute;
  bottom: -24px;
  right: 12px;
`;

const now = new Date();
const getImageSource = (images, type) =>
  images.find(image => image.type === type).src;

const renderImage = (Component, images, type, altText) => {
  const imageSource = getImageSource(images, type);
  return <Component src={imageSource} altText={altText} />;
};

const renderDaysLeft = expiresAtTimestamp => {
  const expiresAt = new Date(expiresAtTimestamp);
  return <DaysLeft expiresAt={expiresAt} now={now} />;
};

export default props => (
  <Container>
    <Hero
      style={{
        backgroundImage: `url(${getImageSource(props.images, "coverImage")})`
      }}
    >
      {renderImage(HeroIcon, props.images, "logo", `A logo for ${props.name}`)}
      <Meta>{renderDaysLeft(props.expires_at)}</Meta>
    </Hero>
    <Body>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <Stats
        progress={props.investment.percentage}
        target={props.investment.target}
        equity={props.equity}
        current={props.investment.current}
      />
    </Body>
  </Container>
);
