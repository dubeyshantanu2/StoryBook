import { storiesOf } from '@storybook/react-native';
import React from 'react';
import tw from 'twrnc';

import SuggaaDropDown from '.';
import * as COLORS from '../../../config/colors';
import CenterView from '../CenterView';

storiesOf('Dropdown', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Gender', () =>
    React.createElement(() => {
      const [selectedDropDownValue, setSelectedDropDownValue] = React.useState('');
      return (
        <SuggaaDropDown
          style={tw`text-[${COLORS.BLACK}] bg-[${COLORS.WHITE}] self-center items-center w-full border-2 border-[${COLORS.SPANIS_VIRIDIAN}] rounded-1.5 text-5 py-2.5 px-3.25`}
          value={selectedDropDownValue}
          label="Gender"
          list={['Male', 'Female']}
          onChangeText={(text) => setSelectedDropDownValue(text)}
          selectionColor={COLORS.SPANIS_VIRIDIAN}
        />
      );
    })
  );
