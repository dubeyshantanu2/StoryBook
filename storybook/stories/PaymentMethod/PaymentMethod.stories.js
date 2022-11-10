import { storiesOf } from '@storybook/react-native';
import React from 'react';

import PaymentMethod from '.';
import CenterView from '../CenterView';

storiesOf('Payment Method', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Payment', () =>
    React.createElement(() => {
      return <PaymentMethod vehicleType="Auto" />;
    })
  );
