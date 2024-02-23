import {Card, Text} from '@nextui-org/react';
import React from 'react';
import {Community} from '../icons/community';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const CardBalance1 = () => {
   return (
      <Card
         css={{
            mw: '375px',
            bg: '$blue600',
            borderRadius: '$xl',
            px: '$6',
         }}
      >
         
     <Flex direction="column" gap="$4">
      <Text css={{ color: '$white', fontWeight: 'bold', fontSize: '$lg' }}>
        Overview
      </Text>
      <OverviewCard title="Income" value="$12,320.75" percentage="+70%" />
      <OverviewCard title="New Bookings" value="42" percentage="+27%" />
      {/* Add more cards if needed */}
    </Flex>
      </Card>
   );
};
const OverviewCard = () => {
   return (
     <Card css={{ mw: '375px', bg: '$blue600', borderRadius: '$xl', px: '$6' }}>
       <Card.Body css={{ py: '$10' }}>
         {/* ... Place your overview content here ... */}
       </Card.Body>
     </Card>
   );
 };