import * as React from 'react';
import { Text as Base, Heading as HeadingBase, TextProps as BaseProps } from 'rebass';

// Style components take CSS in a template string. Even Sass functions with work!
// Each element is a property of styled, like h3, p, div, etc...

/**
 *
 * @visibleName Heading
 *
 */

interface ExtendedProps {
  type?: 'paragraph' | 'heading1' | 'heading2' | 'heading3' | 'footnote';
  maxRows?: number;
}

type Props = BaseProps & ExtendedProps;

interface TypeProps {
  weight: string;
  size: number;
}

function Text(props: Props) {
  let typeProps: TypeProps;
  let limitedRows = {};

  if (props.maxRows) {
    limitedRows = {
      display: '-webkit-box',
      WebkitLineClamp: props.maxRows,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    };
  }

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

  return props.type === 'heading1' || props.type === 'heading2' || props.type === 'heading3' ? (
    <HeadingBase {...props} fontSize={typeProps.size} fontWeight={typeProps.weight} css={limitedRows} />
  ) : (
    <Base {...props} fontSize={typeProps.size} fontWeight={typeProps.weight} css={limitedRows} />
  );
}

// This export will be picked up in ./index.js
export default Text;
