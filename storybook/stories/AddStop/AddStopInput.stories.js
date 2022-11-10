import { storiesOf } from '@storybook/react-native';
import React from 'react';

import AddStopInput from '.';
import CenterView from '../CenterView';

storiesOf('AddStopInput', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Add Stop Input', () =>
    React.createElement(() => {
      const [stopAddress, setStopAddress] = React.useState('');
      return (
        <AddStopInput
          closeAction={() => alert('add your action here')}
          inputText={stopAddress}
          onValueChange={setStopAddress}
        />
      );
    })
  );
