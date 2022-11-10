import { storiesOf } from '@storybook/react-native';
import React from 'react';

import DocumentsRequired from '.';
import CenterView from '../CenterView';

storiesOf('Documents Required Card', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Personal Details', () =>
    React.createElement(() => {
      return (
        <DocumentsRequired
          title="Personal Details"
          description="Personal details, address proof, driving license, PAN card"
        />
      );
    })
  )
  .add('Bank Details', () =>
    React.createElement(() => {
      return (
        <DocumentsRequired
          title="Bank Details"
          description="Personal details, address proof, driving license, PAN card"
        />
      );
    })
  )
  .add('Vehicle Details', () =>
    React.createElement(() => {
      return (
        <DocumentsRequired
          title="Vehicles Details"
          description="Personal details, address proof, driving license, PAN card"
        />
      );
    })
  );
