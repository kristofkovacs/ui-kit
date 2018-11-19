import * as React from 'react';
import { Card as Base, CardProps as BaseProps, Flex, Text } from 'rebass';
import { Icon } from '../icon';

/**
 *
 * @visibleName Comment
 *
 */

const Comment: React.SFC<BaseProps> = (props: BaseProps) => (
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
      <Text fontSize={20} fontWeight="bold">
        Origin of heart murmurs. Diastolic murmurs.
      </Text>
      <Text fontSize={16} fontWeight="normal" color={'#9C9C9C'} mt={17}>
        Létfontos szerv: bőr és nyálkahártya nélkül nincs élet (ld. súlyos égést követő állapotok, Lyell szindróma)!
      </Text>
      <Flex mt={20}>
        <Text fontWeight={'300'} color={'#9C9C9C'} fontSize={12}>
          Updated: 2018 március 27
        </Text>
        <Flex>
          <Text color={'#4787D3'} fontSize={20}>
            16
          </Text>
          <Icon />
        </Flex>
      </Flex>
    </Flex>
  </Base>
);

export default Comment;
