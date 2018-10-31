import * as React from 'react';
import { Button as Base, ButtonProps as BaseProps } from 'rebass';

/**
 *
 * @visibleName Cogito Button 🙌
 *
 */

export const Button: React.SFC<BaseProps> = (props: BaseProps) => (
  <Base
    {...props}
    borderRadius={20}
    border={0}
    css={{
      padding: '15px',
      transition: 'all 0.1s ease-in-out',

      '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0px 7.57811px 16.2388px rgba(71, 135, 211, 0.25)',
      },
    }}
  />
);
