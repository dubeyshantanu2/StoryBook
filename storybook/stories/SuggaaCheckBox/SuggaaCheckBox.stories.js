import { storiesOf } from '@storybook/react-native';
import React from 'react';

import SuggaCheckBox from '.';
import CenterView from '../CenterView';

storiesOf('Checkbox', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Yes', () =>
    React.createElement(() => {
      const [selectedCheckBox, setSelectedCheckBox] = React.useState('');
      return (
        <SuggaCheckBox
          onPress={setSelectedCheckBox}
          title="Yes"
          isActive={selectedCheckBox === 'Yes'}
        />
      );
    })
  )
  .add('No', () =>
    React.createElement(() => {
      const [selectedCheckBox, setSelectedCheckBox] = React.useState('');
      return (
        <SuggaCheckBox
          onPress={setSelectedCheckBox}
          title="No"
          isActive={selectedCheckBox === 'No'}
        />
      );
    })
  );
