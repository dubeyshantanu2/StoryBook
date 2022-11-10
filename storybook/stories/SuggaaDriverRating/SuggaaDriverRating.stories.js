import { storiesOf } from '@storybook/react-native';
import React from 'react';

import SuggaaDriverRating from '.';
import CenterView from '../CenterView';

storiesOf('Driver Rating', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Rating', () =>
    React.createElement(() => {
      return (
        <SuggaaDriverRating
          steps={[
            { star: 1, rating: 170 },
            { star: 2, rating: 37 },
            { star: 3, rating: 76 },
            { star: 4, rating: 10 },
            { star: 5, rating: 14 },
          ]}
        />
      );
    })
  );
