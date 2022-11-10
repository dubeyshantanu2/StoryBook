import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import tw from 'twrnc';

import DateInput from '.';
import * as COLORS from '../../../config/colors';
import * as IMAGES from '../../../config/images';
import CenterView from '../CenterView';

storiesOf('DateInput', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('DateInput', () =>
    React.createElement(() => {
      return (
        <DateInput
          onValue={alert}
          color="text-green-600"
          textStyle={[tw`font-bold text-green-600 text-lg text-center tabular-nums`]}
          viewStyle={[tw`flex-row py-4 px-8 rounded-2 items-center border-2 border-green-600`]}
        />
      );
    })
  );
