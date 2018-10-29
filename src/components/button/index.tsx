import * as React from 'react';
import { Button as Base } from 'rebass';

import styled from 'styled-components';

// Style components take CSS in a template string. Even Sass functions with work!
// Each element is a property of styled, like h3, p, div, etc...
export const ButtonWrapper = styled(Base)`
  border-radius: 20px;
  padding: 15px;
  background: ${(props) => props.theme.colors.gradient};
  transition: all 0.1s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 7.57811px 16.2388px rgba(71, 135, 211, 0.25);
  }
`;

/**
 * The primary button.
 *
 * @visibleName Cogito Button 🙌
 *
 */

function Button(props: any) {
  return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;
}

// This export will be picked up in ./index.js
export default Button;
