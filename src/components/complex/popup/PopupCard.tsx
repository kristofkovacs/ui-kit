import * as React from 'react';
import { Card as Base, CardProps as BaseProps, Flex } from 'rebass';
import { Text } from '../../simple/text';
import { Button } from '../../simple/button';

interface ExtendedProps {
  text: string;
}

type Props = BaseProps & ExtendedProps;

function PopupCard(props: Props) {
  return (
    <Base {...props} width={768} borderRadius={24} bg={'almostWhite'} boxShadow={'basic'} p={24}>
      <Flex flexDirection="column">
        <Text type="heading3">Lorem ipsum dolor sit amet, consectetur adipisicing elit?</Text>
        <Text mt={12} type="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna
        </Text>
      </Flex>
      <Flex justifyContent="flex-end" mt={12}>
        <Button mr={24} variant="secondary" label="Cancel" />

        <Button variant="primary" label="Accept" />
      </Flex>
    </Base>
  );
}

export default PopupCard;
