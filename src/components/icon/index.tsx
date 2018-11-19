import * as React from 'react';
import { Image as Base, ImageProps as BaseProps } from 'rebass';
// import arrowDown from './assets/arrowDown.svg';
import arrowUp from './assets/arrowUp.svg';

// type Props = {
//     props: BaseProps,
//     type: arrowDown || arrowUp,
// }

export const Icon: React.SFC<BaseProps> = (props: BaseProps) => (
  <Base {...props}>
    <img src={arrowUp} width={props.width + 'px'} />
  </Base>
);
