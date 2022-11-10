import { linkTo } from '@storybook/addon-links';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';

import OnOffDutySwitch from '.';

storiesOf('On-Off Duty Switch', module).add('Switch', () => (
  <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
    <OnOffDutySwitch numberOfInputs={4} />
  </View>
));
