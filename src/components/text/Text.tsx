import * as React from 'react';
import { Text as Base, TextProps as BaseProps } from 'rebass';

// Style components take CSS in a template string. Even Sass functions with work!
// Each element is a property of styled, like h3, p, div, etc...

/**
 *
 * @visibleName Heading
 *
 */

interface ExtendedProps {
  type: 'paragraph' | 'heading1' | 'heading2' | 'heading3' | 'footnote';
}

type Props = BaseProps & ExtendedProps;

interface TypeProps {
  weight: string;
  size: number;
}

function Text(props: Props) {
  let typeProps: TypeProps;

  typeProps = { size: 16, weight: 'normal' };
  switch (props.type) {
    case 'heading1':
      typeProps.size = 38;
      typeProps.weight = '800';
      break;
    case 'heading2':
      typeProps.size = 28;
      typeProps.weight = '800';
      break;
    case 'heading3':
      typeProps.size = 20;
      typeProps.weight = 'bold';
      break;
    case 'footnote':
      typeProps.size = 12;
      typeProps.weight = '300';
      break;
    default:
      typeProps.size = 16;
      typeProps.weight = 'normal';
  }

  return <Base {...props} fontSize={typeProps.size} fontWeight={typeProps.weight} />;
}

// This export will be picked up in ./index.js
export default Text;
