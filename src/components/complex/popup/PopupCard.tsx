import * as React from 'react';
import { Card as Base, CardProps as BaseProps, Flex } from 'rebass';
import { Text } from '../../simple/text';
import { Button } from '../../simple/button';

interface ExtendedProps {
  title: string;
  description?: string;
}

type Props = BaseProps & ExtendedProps;

function PopupCard(props: Props) {
  return (
    <Base {...props} width={[320, 400, 600, 768]} borderRadius={24} bg={'almostWhite'} boxShadow={'basic'} p={24}>
      <Flex flexDirection="column">
        <Text type="heading3">{props.title}</Text>
        {props.description && (
          <Text mt={12} type="paragraph">
            {props.description}
          </Text>
        )}
      </Flex>
      <Flex justifyContent="flex-end" mt={20}>
        <Button mr={24} variant="secondary" label="Cancel" />
        <Button variant="primary" label="Accept" />
      </Flex>
    </Base>
  );
}

export default PopupCard;
