import { storiesOf } from '@storybook/react-native';
import React from 'react';

import SuggaaStarRating from '.';
import CenterView from '../CenterView';

storiesOf('Star rating', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Filled', () => <SuggaaStarRating rating={5} />)
  .add('Un Filled', () => <SuggaaStarRating rating={1} />);
