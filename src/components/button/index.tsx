import * as React from 'react';
import { Button as Base, ButtonProps as BaseProps } from 'rebass';
import theme from './../../theme/theme';

import styled from 'styled-components';

// Style components take CSS in a template string. Even Sass functions with work!
// Each element is a property of styled, like h3, p, div, etc...
const ButtonWrapper = styled(Base)`
  font-family: ${theme.fonts.mono};
  border-radius: 20px;
  padding: 15px;
  background: ${theme.colors.gradient};
  transition: all 0.1s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 7.57811px 16.2388px rgba(71, 135, 211, 0.25);
  }
`;

const ButtonWrapperSecondary = styled(Base)`
  font-family: ${theme.fonts.mono};
  border-radius: 20px;
  padding: 15px;
  background: ${theme.colors.almostWhite};
  transition: all 0.1s ease-in-out;
  color: ${theme.colors.darkBlue};

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 7.57811px 16.2388px rgba(71, 135, 211, 0.25);
  }
`;

/**
 *
 * @visibleName Cogito Button 🙌
 *
 */

enum Variant {
  'primary',
  'secondary',
}

interface ExtendedButtonProps {
  variant: Variant;
}

type ButtonProps = BaseProps & ExtendedButtonProps | BaseProps;

class Button extends React.Component<ExtendedButtonProps & any, any> {
  constructor(props: ButtonProps) {
    super(props);
  }
  public render() {
    return this.props.variant === 'primary' ? (
      <ButtonWrapper {...this.props}>{this.props.children}</ButtonWrapper>
    ) : (
      <ButtonWrapperSecondary {...this.props}>{this.props.children}</ButtonWrapperSecondary>
    );
  }
}

// This export will be picked up in ./index.js
export default Button;
