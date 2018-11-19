import * as React from 'react';
import { Image as Base, ImageProps as BaseProps } from 'rebass';
// import arrowDown from './assets/arrowDown.svg';
import upvote from './assets/upvote.svg';

// type Props = {
//     props: BaseProps,
//     type: arrowDown || arrowUp,
// }

export const Icon: React.SFC<BaseProps> = (props: BaseProps) => (
  <Base {...props}>
    <img src={upvote} width={props.width + 'px'} />
  </Base>
);
