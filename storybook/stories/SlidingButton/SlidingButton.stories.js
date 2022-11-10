import { linkTo } from '@storybook/addon-links';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';

import SuggaaSlidingButton from '.';

storiesOf('SlidingButton', module)
  .add('Rider Located', () => (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <SuggaaSlidingButton
        text="Rider Located"
        lightColor="#81C0AE"
        darkColor="#04825C"
        // onToggle={handleToggle}
      />
    </View>
  ))
  .add('Cancle Ride', () => (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <SuggaaSlidingButton
        text="Cancle Ride"
        lightColor="#F58E8E"
        darkColor="#EA1D1D"
        // onToggle={handleToggle}
      />
    </View>
  ));
