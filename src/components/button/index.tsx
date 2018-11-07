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

// export const FloatingButton: React.SFC<BaseProps> = (props: BaseProps) => (
//   <Base
//     {...props}
//     bg="transparent"
//     mt={-50}
//     css={{
//       transition: 'all 0.2s ease-in-out',
//       '&:hover': {
//         transition: 'all 0.2s ease-in-out',
//         transform: 'translatey(10px)',
//       },
//     }}
//   >
//     <Image src={downArrow} className="downButton" />
//   </Base>
// );
