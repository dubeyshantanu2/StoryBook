import { linkTo } from '@storybook/addon-links';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';

import ProgressAnimation from '.';

storiesOf('ProgressAnimation', module)
  .add('Progress Animation variation 1', () => (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <ProgressAnimation
        activeColor="#04825C"
        trackColor="#04825C40"
        progress={10}
        steps={[
          { status: 'active', label: 'Personal Details' },
          { status: 'untouched', label: 'Bank Details' },
          { status: 'untouched', label: 'Vehicle Details' },
        ]}
        showApp={linkTo('ProgressAnimation')}
      />
    </View>
  ))
  .add('Progress Animation variation 2', () => (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <ProgressAnimation
        activeColor="#04825C"
        trackColor="#04825C40"
        progress={60}
        steps={[
          { status: 'done', label: 'Personal Details' },
          { status: 'active', label: 'Bank Details' },
          { status: 'untouched', label: 'Vehicle Details' },
        ]}
        showApp={linkTo('ProgressAnimation')}
      />
    </View>
  ));
