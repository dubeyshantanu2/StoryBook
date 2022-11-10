import { storiesOf } from '@storybook/react-native';
import React from 'react';

import LocationNamesCard from '.';
import * as IMAGES from '../../../config/images';
import CenterView from '../CenterView';

storiesOf('LocationNamesCard', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Address 1', () =>
    React.createElement(() => {
      return (
        <LocationNamesCard
          distance={300}
          AddressFull="Payyanur, Kannur, Kerala"
          AddressTitle="Payyanur"
          imageId={IMAGES.MARKER_ICON}
        />
      );
    })
  )
  .add('Address 2', () =>
    React.createElement(() => {
      return (
        <LocationNamesCard
          distance={12}
          AddressFull="Remco Bhel Layout Kenchenhalli RR Nagar Be..."
          AddressTitle="RR Nagar Complex"
          imageId={IMAGES.MARKER_ICON}
        />
      );
    })
  );
