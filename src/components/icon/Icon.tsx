import * as React from 'react';
import { Image as Base, ImageProps as BaseProps } from 'rebass';
// import arrowDown from './assets/arrowDown.svg';
import * as icons from './icons';

interface ExtendedProps {
  name: string;
  fill: string;
}

type Props = BaseProps & ExtendedProps;

function Icon(props: Props) {
  return (
    <Base {...props} width={props.width || 40} height={props.height || 40}>
      <svg width="100%" height="100%" viewBox="0 0 32 32" fill={props.fill || '#000'}>
        {icons[props.name] && icons[props.name].map((pathProps: string, i: number) => <path {...pathProps} key={i} />)}
      </svg>
    </Base>
  );
}

export default Icon;
