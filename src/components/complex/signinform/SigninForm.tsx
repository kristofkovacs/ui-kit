import * as React from 'react';
import { Card as Base, CardProps as BaseProps, Flex } from 'rebass';
import { Text } from '../../simple/text';
import { Button } from '../../simple/button';
import { Input } from '../../simple/input';

interface ExtendedProps {
  title: string;
}

type Props = BaseProps & ExtendedProps;

function SigninForm(props: Props) {
  return (
    <Base {...props} width={[320, 350, 400, 500]} borderRadius={24} bg={'almostWhite'} boxShadow={'basic'} p={24}>
      <Flex justifyContent="center">
        <Text type="heading3">{props.title}</Text>
      </Flex>
      <Flex mt={24} flexDirection="column">
        <Input mt={12} label="E-mail address" placeholder="your@mail.com" />
        <Input mt={12} type="password" label="Password" placeholder="•••••••••••" />
        <Button mt={12} variant="primary" label={props.title} />
      </Flex>
    </Base>
  );
}

export default SigninForm;
