import { storiesOf } from '@storybook/react-native';
import React from 'react';
// import tw from 'twrnc';

import GestureStar from '.';
import CenterView from '../CenterView';

storiesOf('Gesture Star', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Swipe', () =>
    React.createElement(() => {
      const [rating, setRating] = React.useState(0);
      return <GestureStar rating={rating} setRating={setRating} />;
    })
  );
