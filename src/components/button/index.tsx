import * as React from 'react';
import { Button as Base, ButtonProps as BaseProps } from 'rebass';

/**
 *
 * @visibleName Main Button
 *
 */

export const Button: React.SFC<BaseProps> = (props: BaseProps) => (
  <Base
    {...props}
    borderRadius={20}
    border={0}
    px={30}
    py={14}
    css={{
      transition: 'all 0.1s ease-in-out',
      boxShadow: '0px 7px 15px rgba(71, 135, 211, 0.25)',
      '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0px 10.2643px 20.5286px rgba(71, 135, 211, 0.3)',
      },
    }}
  />
);
