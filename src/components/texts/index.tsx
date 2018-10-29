import * as React from 'react';
import { Text as Base } from 'rebass';

import styled from 'styled-components';

// Style components take CSS in a template string. Even Sass functions with work!
// Each element is a property of styled, like h3, p, div, etc...
export const TextWrapper = styled(Base)`
  &:hover {
  }
`;

/**
 * The primary button.
 *
 * @visibleName Cogito Button 🙌
 *
 */

function Button(props: any) {
  return <TextWrapper {...props}>{props.children}</TextWrapper>;
}

// This export will be picked up in ./index.js
export default Button;
