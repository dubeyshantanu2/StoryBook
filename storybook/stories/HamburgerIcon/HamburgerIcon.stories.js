import { storiesOf } from '@storybook/react-native';
import React from 'react';
import tw from 'twrnc';

import HamburgerIcon from '.';
import * as COLORS from '../../../config/colors';
import * as IMAGES from '../../../config/images';
import CenterView from '../CenterView';

storiesOf('HamburgerIcon', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('HamburgerIcon', () =>
    React.createElement(() => {
      return (
        <HamburgerIcon
          ImageId={IMAGES.HAMBURGER_ICON}
          style={tw`p-2 self-start rounded-1.25 bg-[${COLORS.WHITE}] shadow-md`}
          onPress={() => alert('add function here')}
        />
      );
    })
  );
