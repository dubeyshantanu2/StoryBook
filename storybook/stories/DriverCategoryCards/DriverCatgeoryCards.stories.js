import { storiesOf } from '@storybook/react-native';
import React from 'react';

import DriverCateogoryCard from '.';
import CenterView from '../CenterView';

storiesOf('DriverCateogoryCard', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('No vehicle', () =>
    React.createElement(() => {
      const [driverType, setDriverType] = React.useState('NoVehicle');
      return (
        <DriverCateogoryCard
          onPress={() => setDriverType('NoVehicle')}
          title="I Drive"
          description="If you have no vehicles and like to partner with Suggaa to find an Operator for you."
          category="NoVehicle"
          isActive={driverType === 'NoVehicle'}
        />
      );
    })
  )
  .add('SingleDriver', () =>
    React.createElement(() => {
      const [driverType, setDriverType] = React.useState('NoVehicle');
      return (
        <DriverCateogoryCard
          onPress={() => setDriverType('SingleDriver')}
          title="I have a car and I drive"
          description="If you have a single vehicle and like to partner with Suggaa and ride your vehicle"
          category="SingleDriver"
          isActive={driverType === 'SingleDriver'}
        />
      );
    })
  )
  .add('Fleet owner', () =>
    React.createElement(() => {
      const [driverType, setDriverType] = React.useState('NoVehicle');
      return (
        <DriverCateogoryCard
          onPress={() => setDriverType('FleetOwner')}
          title="I have more than 1 car"
          description="If you have many vehicles and drivers and like to manage them on Suggaa"
          category="FleetOwner"
          isActive={driverType === 'FleetOwner'}
        />
      );
    })
  );
