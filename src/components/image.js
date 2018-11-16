import React from "react";
import styled from "styled-components";

const Image = styled.img`
  max-width: ${props => props.maxWidth || "100%"};
  width: ${props => props.width || "auto"};
`;

export const IconImage = props => <Image {...props} maxWidth={"75px"} />;

export default props => <Image src={props.src} alt={props.altext} />;
