import * as React from 'react';
import { Image as Base, ImageProps as BaseProps } from 'rebass';
import downArrow from './upvote.svg';

/**
 *
 * @visibleName Icon
 *
 */

export const Icon: React.SFC<BaseProps> = (props: BaseProps) => (
  <Base
    {...props}
    css={{
      backgroundImage: { downArrow },
    }}
  >
    <img src={downArrow} />
  </Base>
);
