import { linkTo } from '@storybook/addon-links';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import tw from 'twrnc';

import InputSearchLocation from '.';
import * as COLORS from '../../../config/colors';
import * as IMAGES from '../../../config/images';
import CenterView from '../CenterView';

storiesOf('SearchLocation', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('SearchLocation Uneditable', () => (
    <InputSearchLocation
      imageId={IMAGES.SEARCH_ICON}
      isEditable={false}
      textStyle={tw`flex-1 mx-4 text-[${COLORS.LIGHT_GRAY_BORDER}] text-3.78`}
      style={tw`h-12 py-3 px-4.5 flex-row  rounded-1.25 items-center self-stretch shadow-md bg-[${COLORS.WHITE}]`}
      placeholder="Search Drop Location"
      onPress={() => alert('Add your function here')}
      onValue={(val) => console.log(val)}
      showApp={linkTo('SearchLocation')}
    />
  ));
