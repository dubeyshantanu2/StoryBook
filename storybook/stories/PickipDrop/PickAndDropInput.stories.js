import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import PickAndDropInput from '.';
import CenterView from '../CenterView';

storiesOf('Pick And Drop Input', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Pickup', () =>
    React.createElement(() => {
      const [stop, setStop] = React.useState(5);
      return (
        <PickAndDropInput
          inputTitle="Pickup"
          clearInput={() => setStop('')}
          onPress={() => action('add action here')}
          text={stop}
          onValue={setStop}
        />
      );
    })
  )
  .add('Drop', () =>
    React.createElement(() => {
      const [stop, setStop] = React.useState(5);
      return (
        <PickAndDropInput
          inputTitle="Drop"
          clearInput={() => setStop('')}
          onPress={() => action('add action here')}
          text={stop}
          onValue={setStop}
        />
      );
    })
  );
