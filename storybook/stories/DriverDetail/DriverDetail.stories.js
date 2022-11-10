import { storiesOf } from '@storybook/react-native';
import React from 'react';

import DriverDetail from '.';
import CenterView from '../CenterView';

storiesOf('Driver Detail', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Driver Detail', () =>
    React.createElement(() => {
      return (
        <DriverDetail
          car_name="Swift Dezire"
          car_number="UP32LA8926"
          driver_image=""
          driver_name="Allahuakbar"
          rating={4.9}
        />
      );
    })
  );
