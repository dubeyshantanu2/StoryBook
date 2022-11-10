import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import SuggaButton from '.';
import CenterView from '../CenterView';

storiesOf('SuggaButton', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Filled', () =>
    React.createElement(() => {
      return (
        <SuggaButton onPress={() => alert('add function here')} text="Button" buttonType="FILLED" />
      );
    })
  ).add('Bordered', () =>
  React.createElement(() => {
    return (
      <SuggaButton onPress={() => alert('add function here')} text="Button" buttonType="BORDER" />
    );
  })
).add('Disabled', () =>
React.createElement(() => {
  return (
    <SuggaButton onPress={() => alert('add function here')} text="Button" buttonType="DISABLED" />
  );
})
);
