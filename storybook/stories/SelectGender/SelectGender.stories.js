import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';

import SelectGender from '.';

storiesOf('Select gender', module)
  .add('Him', () => (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <SelectGender title="Him" />
    </View>
  ))
  .add('Her', () => (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <SelectGender title="Her" />
    </View>
  ))
  .add('I dont prefer to say', () => (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <SelectGender title="I dont prefer to say" />
    </View>
  ));
