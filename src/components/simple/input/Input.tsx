import * as React from 'react';
import { Flex, FlexProps as BaseProps } from 'rebass';
import styled from 'styled-components';
import { Text } from '../text';
/**
 *
 * @visibleName Button
 *
 */

interface ExtendedProps {
  name?: string;
  placeholder?: string;
  type?: 'password' | 'text';
  label?: string;
}

type Props = BaseProps & ExtendedProps;

const StyledInput = styled.input`
  /* This renders the buttons above... Edit me! */
  background: transparent;
  height: 42px;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 14px;
  border-bottom: 2px solid ${(props) => props.theme.colors.primary};
`;

const Input: React.SFC<Props> = (props: Props) => (
  <Flex {...props} flexDirection="column">
    {props.label && (
      <Text type="paragraph" color="primary">
        {props.label}
      </Text>
    )}
    <StyledInput type={props.type || 'text'} name={props.name} placeholder={props.placeholder} />
  </Flex>
);

export default Input;
