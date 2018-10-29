import * as React from 'react';
import { Box as Base } from 'rebass';

import styled from 'styled-components';

// Style components take CSS in a template string. Even Sass functions with work!
// Each element is a property of styled, like h3, p, div, etc...
export const IconWrapper = styled(Base)`
  border-radius: 20px;
  padding: 0px;
  background: ${(props) => props.theme.colors.gradient};
  transition: all 0.2s ease-in-out;

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

function Icon(props: any) {
  return <IconWrapper {...props}>{props.children}</IconWrapper>;
}

// This export will be picked up in ./index.js
export default Icon;
