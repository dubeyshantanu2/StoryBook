import { linkTo } from '@storybook/addon-links';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';

import OTPTextInput from '.';

storiesOf('OTPTextInput', module)
  .add('OTP input 4 length', () => (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <OTPTextInput numberOfInputs={4} showApp={linkTo('OTPTextInput')} />
    </View>
  ))
  .add('OTP input 6 length', () => (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <OTPTextInput numberOfInputs={6} showApp={linkTo('OTPTextInput')} />
    </View>
  ));
