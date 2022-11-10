import { storiesOf } from '@storybook/react-native';
import React from 'react';

import ReferCode from '.';
import CenterView from '../CenterView';

storiesOf('ReferCode', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Code 1', () =>
    React.createElement(() => {
      return <ReferCode code="SUGGAA50" />;
    })
  );
