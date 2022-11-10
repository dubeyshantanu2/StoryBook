import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';

import PressableButton from '.';
import * as IMAGES from '../../../config/images';
import CenterView from '../CenterView';

storiesOf('PressableButton', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('SHARE', () => (
    <PressableButton onPress={() => {}} icon={IMAGES.SHARE}>
      <Text>{text('Button text', 'Hello Button')}</Text>
    </PressableButton>
  ))
  .add('LOCATION', () => (
    <PressableButton onPress={() => {}} icon={IMAGES.CURENT_LOCATION}>
      <Text>{text('Button text', 'Hello Button')}</Text>
    </PressableButton>
  ));
