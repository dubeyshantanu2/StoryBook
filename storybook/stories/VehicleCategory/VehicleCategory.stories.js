import { storiesOf } from '@storybook/react-native';
import React from 'react';

import VehicleCategory from '.';
import CenterView from '../CenterView';

storiesOf('Vehicles Category', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Auto', () =>
    React.createElement(() => {
      return <VehicleCategory vehicleType="Auto" />;
    })
  )
  .add('Bike', () =>
    React.createElement(() => {
      return <VehicleCategory vehicleType="Bike" />;
    })
  )
  .add('Car', () =>
    React.createElement(() => {
      return <VehicleCategory vehicleType="Car" />;
    })
  );
