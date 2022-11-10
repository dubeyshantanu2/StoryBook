import { storiesOf } from '@storybook/react-native';
import React from 'react';
import tw from 'twrnc';

import RidesCard from '.';
import * as COLORS from '../../../config/colors';
import CenterView from '../CenterView';

storiesOf('RidesCard', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Completed', () =>
    React.createElement(() => {
      return (
        <RidesCard
          values={{
            date: new Date(),
            fare: '177',
            vehicleType: 'AUTO',
            location: 'Birsa Munda Airport, Ranchi',
            status: 'COMPLETED',
          }}
          style={tw`flex-row bg-[${COLORS.WHITE}] pl-7 pt-7`}
          viewStyle={`border-b flex-1 ml-7  pb-3.75 pr-5 border-[${COLORS.LIGHT_GRAY_BORDER}] `}
          imageUrl="https://picsum.photos/200/300"
          imageStyle="w-11.65 h-11.65 rounded-11.25"
        />
      );
    })
  )
  .add('Cancelled', () =>
    React.createElement(() => {
      return (
        <RidesCard
          values={{
            date: new Date(),
            fare: '177',
            vehicleType: 'AUTO',
            location: 'Birsa Munda Airport, Ranchi',
            status: 'CANCELLED',
          }}
          style={tw`flex-row bg-[${COLORS.WHITE}] pl-7 pt-7`}
          viewStyle={`border-b flex-1 ml-7  pb-3.75 pr-5 border-[${COLORS.LIGHT_GRAY_BORDER}] `}
          imageUrl="https://picsum.photos/200/300"
          imageStyle="w-11.65 h-11.65 rounded-11.25"
        />
      );
    })
  );
