import { storiesOf } from '@storybook/react-native';
import React from 'react';

import Barchart from '.';
import CenterView from '../CenterView';

storiesOf('Bar chart', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Chart', () =>
    React.createElement(() => {
      return (
        <Barchart
          steps={[
            { label: 'Mon', earning: 150 },
            { label: 'Tue', earning: 70 },
            { label: 'Wed', earning: 100 },
            { label: 'Thu', earning: 50 },
            { label: 'Fri', earning: 90 },
            { label: 'Sat', earning: 120 },
            { label: 'Sun', earning: 160 },
          ]}
        />
      );
    })
  );
