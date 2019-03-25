import * as React from 'react';
import { Card as Base, CardProps as BaseProps, Flex } from 'rebass';
import { Icon } from '../icon';
import { Text } from '../text';

interface ExtendedProps {
  text: string;
}

type Props = BaseProps & ExtendedProps;

function Notification(props: Props) {
  return (
    <Base {...props}>
      <Base
        {...props}
        width={275}
        borderRadius={20}
        bg={'#fff'}
        border={0}
        css={{
          height: '120px',
          boxShadow: '0px 7px 15px rgba(71, 135, 211, 0.25)',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'scale(1.1)',
            boxShadow: '0px 10.2643px 20.5286px rgba(71, 135, 211, 0.3)',
          },
        }}
      >
        <Flex flexDirection={'row'} justifyContent={'space-between'}>
          <Flex py={25} px={19} alignItems={'center'}>
            <Text type={'paragraph'} color={'primary'} lineHeight={1.4}>
              {props.text}
            </Text>
          </Flex>
          <Flex
            bg={'primary'}
            width={50}
            alignItems={'center'}
            justifyContent={'center'}
            css={{
              height: '120px',
              borderTopRightRadius: '20px',
              borderBottomRightRadius: '20px',
              backgroundColor: '$(theme.colors.primary)',
            }}
          >
            <Icon name="facebook" width={18} height={18} fill={'white'} />
          </Flex>
        </Flex>
      </Base>
    </Base>
  );
}

export default Notification;
