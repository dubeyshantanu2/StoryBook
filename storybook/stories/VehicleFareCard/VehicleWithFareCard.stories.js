import { storiesOf } from '@storybook/react-native';
import React from 'react';

import VehicleWithFareCard from '.';
import CenterView from '../CenterView';

storiesOf('Vehicles with fare', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('sedan', () =>
    React.createElement(() => {
      return (
        <VehicleWithFareCard
          duration="10"
          fare={120}
          vehicleType="SEDAN"
          onPress={() => alert('Add here')}
        />
      );
    })
  )
  .add('Scooter', () =>
    React.createElement(() => {
      return (
        <VehicleWithFareCard
          duration="10"
          fare={50}
          vehicleType="SCOOTER"
          onPress={() => alert('Add here')}
        />
      );
    })
  )
  .add('rickshaw', () =>
    React.createElement(() => {
      return (
        <VehicleWithFareCard
          duration="10"
          fare={80}
          vehicleType="RICKSHAW"
          onPress={() => alert('Add here')}
        />
      );
    })
  );
