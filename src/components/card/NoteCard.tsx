import * as React from 'react';
import { Card as Base, CardProps as BaseProps, Flex } from 'rebass';
import { Icon } from '../icon';
import { Text } from '../text';

/**
 *
 * @visibleName Note Card
 *
 */

interface ExtendedProps {
  title: string;
  abstract: string;
  date: Date;
  likes: number;
}

type Props = BaseProps & ExtendedProps;

const NoteCard: React.SFC<BaseProps> = (props: Props) => (
  <Base
    {...props}
    width={300}
    borderRadius={20}
    bg={'#fff'}
    border={0}
    css={{
      height: '300px',
      boxShadow: '0px 7px 15px rgba(71, 135, 211, 0.25)',
      transition: 'all 0.2s ease-in-out',
      '&:hover': {
        transform: 'scale(1.1)',
        boxShadow: '0px 10.2643px 20.5286px rgba(71, 135, 211, 0.3)',
      },
    }}
  >
    <Flex
      bg={'#4787D3'}
      css={{
        height: '35px',
        borderTopLeftRadius: '20px',
        borderTopRightRadius: '20px',
        backgroundColor: '$(theme.colors.darkBlue)',
      }}
    />
    <Flex flexDirection={'column'} py={18} px={20}>
      <Text type={'heading3'}>{props.title}</Text>
      <Text type={'paragraph'} color={'#9C9C9C'} mt={17}>
        {props.abstract}
      </Text>
      <Flex mt={20} justifyContent={'space-between'}>
        <Text type={'footnote'} color={'#9C9C9C'}>
          Updated: {props.date}
        </Text>
        <Flex>
          <Text type={'paragraph'} color={'#4787D3'}>
            {props.likes}
          </Text>
          <Icon name="like" width={25} height={25} />
        </Flex>
      </Flex>
    </Flex>
  </Base>
);

export default NoteCard;
