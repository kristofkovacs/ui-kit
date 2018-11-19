import * as React from 'react';
import { Button as Base, ButtonProps as BaseProps } from 'rebass';
import { Icon } from '../icon';

const FloatingButton: React.SFC<BaseProps> = (props: BaseProps) => (
  <Base
    {...props}
    bg="white"
    borderRadius={9999}
    css={{
      transition: 'all 0.2s ease-in-out',
      '&:hover': {
        transition: 'all 0.2s ease-in-out',
        transform: 'translatey(10px)',
      },
    }}
  >
    <Icon css={{ transform: 'translatey(0px)', animation: 'float 2s ease-in-out infinite' }} />
  </Base>
);

export default FloatingButton;
