import { storiesOf } from '@storybook/react-native';
import React from 'react';

import SelectRide from '.';
import CenterView from '../CenterView';

storiesOf('OTPTextInput', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('City', () => <SelectRide ride_type="City" />)
  .add('Outstation', () => <SelectRide ride_type="Outstation" />);
