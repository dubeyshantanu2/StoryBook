import { storiesOf } from '@storybook/react-native';
import React from 'react';

import RideDetailBox from '.';
import CenterView from '../CenterView';

storiesOf('RideDetailBox', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Enabled', () =>
    React.createElement(() => {
      return (
        <RideDetailBox
          isActive
          details={[
            { title: 'Earning', value: 472 },
            { title: 'Online', value: 32 },
            { title: 'Trip', value: 8 },
          ]}
        />
      );
    })
  )
  .add('Disabled', () =>
    React.createElement(() => {
      return (
        <RideDetailBox
          isActive={false}
          details={[
            { title: 'Earning', value: 4572 },
            { title: 'Online', value: 69 },
            { title: 'Trip', value: 14 },
          ]}
        />
      );
    })
  );
