import { storiesOf } from '@storybook/react-native';
import React from 'react';

import UploadButton from '.';
import CenterView from '../CenterView';

storiesOf('Upload Button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Fitness Certicate', () =>
    React.createElement(() => {
      return <UploadButton title="Fitness Certicate" />;
    })
  )
  .add('Pan Card Front', () =>
    React.createElement(() => {
      return <UploadButton title="Pan Card Front" />;
    })
  );
