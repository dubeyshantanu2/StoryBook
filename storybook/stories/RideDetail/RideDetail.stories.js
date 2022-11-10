import { storiesOf } from '@storybook/react-native';
import React from 'react';

import CenterView from '../CenterView';
import RideDetail from './';

storiesOf('Ride detail', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Pick up drop location', () =>
    React.createElement(() => {
      return (
        <RideDetail
          drop_location="Manas Enclave Phase 2 Indra Nagar Lucknow"
          pickup_location="Manas Enclave Phase 2 Indra Nagar Lucknow"
        />
      );
    })
  );
