import * as React from 'react';
import { Card as Base, CardProps as BaseProps, Flex } from 'rebass';
import { Icon } from '../../simple/icon';
import { Text } from '../../simple/text';

/**
 *
 * @visibleName Note Card
 *
 */

interface ExtendedProps {
  title: string;
  abstract: string;
  date: number;
  likes: number;
}

type Props = BaseProps & ExtendedProps;

const NoteCard: React.SFC<Props> = (props: Props) => (
  <Base
    {...props}
    width={300}
    borderRadius={20}
    bg={'almostWhite'}
    border={0}
    boxShadow={'basic'}
    css={{
      height: '300px',
      transition: 'all 0.15s ease-in-out',
      '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '$(shadows.hover)',
      },
    }}
  >
    <Flex
      bg={'primary'}
      css={{
        height: '35px',
        borderTopLeftRadius: '20px',
        borderTopRightRadius: '20px',
      }}
    />
    <Flex flexDirection={'column'} py={18} px={20}>
      <Text type={'heading3'} maxRows={3}>
        {props.title}
      </Text>
      <Text type={'paragraph'} color={'lightGray'} mt={17} maxRows={4}>
        {props.abstract}
      </Text>
      <Flex mt={20} justifyContent={'space-between'}>
        <Text type={'footnote'} color={'lightGray'}>
          Updated: {props.date}
        </Text>
        <Flex alignItems={'flex-end'}>
          <Text type={'paragraph'} color={'primary'}>
            {props.likes}
          </Text>
          <Icon ml={1} name="like" width={21} height={21} fill={'primary'} />
        </Flex>
      </Flex>
    </Flex>
  </Base>
);

export default NoteCard;
