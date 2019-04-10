import * as React from 'react';
import { Button as Base, ButtonProps as BaseProps, Flex } from 'rebass';
import { Icon } from '../icon';

/**
 *
 * @visibleName Button
 *
 */

interface ExtendedProps {
  icon?: string;
  label?: string;
  iconColor?: string;
  reversed?: boolean;
}

type Props = BaseProps & ExtendedProps;

const Button: React.SFC<Props> = (props: Props) => (
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
  >
    <Flex flexDirection="row" justifyContent="center">
      {props.reversed && <Flex mr={10}>{props.label}</Flex>}
      {props.icon && <Icon name={props.icon} width={21} height={21} fill={props.iconColor} />}
      {!props.reversed && <Flex ml={10}>{props.label}</Flex>}
    </Flex>
  </Base>
);

export default Button;
