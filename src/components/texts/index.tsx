import * as React from 'react';
import { Text as Base, TextProps as Props } from 'rebass';

// Style components take CSS in a template string. Even Sass functions with work!
// Each element is a property of styled, like h3, p, div, etc...

/**
 *
 * @visibleName Heading
 *
 */

function Heading(props: Props) {
  return (
    <Base
      {...props}
      css={{
        fontWeight: 700,
        fontSize: 38,
      }}
    />
  );
}

// This export will be picked up in ./index.js
export default Heading;
