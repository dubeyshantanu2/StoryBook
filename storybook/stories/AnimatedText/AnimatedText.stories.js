import { linkTo } from '@storybook/addon-links';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';

import AnimatedText from '.';

storiesOf('AnimatedText', module).add('30 sec timer', () => (
  <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
    <AnimatedText showApp={linkTo('AnimatedText')} />
  </View>
));
