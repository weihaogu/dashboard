import {Card, Text} from '@nextui-org/react';
import React from 'react';
import {Community} from '../icons/community';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';
const UpcomingCard = ({ name, service, time }) => {
   return (
     <Flex css={{ alignItems: 'center', justifyContent: 'space-between', padding: '$2', borderBottom: '1px solid $gray400' }}>
       <Text css={{ fontWeight: 'medium' }}>{service}</Text>
       <Text css={{ fontWeight: 'medium' }}>{time}</Text>
     </Flex>
   );
 };
 
export const CardBalance2 = () => {
   return (
      <Flex direction="column" gap="$4">
      <Text css={{ color: '$white', fontWeight: 'bold', fontSize: '$lg' }}>
        Upcoming
      </Text>
      <UpcomingCard name={{ fullName: 'Jacob Newman', avatar: 'path_to_avatar' }} service="Oil Change" time="9:30am" />
      <UpcomingCard name={{ fullName: 'Bella Holt', avatar: 'path_to_avatar' }} service="Vehicle Diagnosis" time="11:00am" />
      <UpcomingCard name={{ fullName: 'Jared Li', avatar: 'path_to_avatar' }} service="Vehicle Inspection" time="12:30pm" />
      {/* Add more cards for other appointments */}
    </Flex>
   );
};
