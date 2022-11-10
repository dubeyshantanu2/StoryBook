import { storiesOf } from '@storybook/react-native';
import React from 'react';

import UploadCard from '.';
import CenterView from '../CenterView';

storiesOf('UploadCard', module)
    .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
    .add('License', () =>
        React.createElement(() => {
            return (
                <UploadCard message='License' action1={() => alert('action1')} action2={() => alert('action2')} />
            );
        })
    ).add('Aaddhar', () =>
        React.createElement(() => {
            return (
                <UploadCard message='Aadhar' action1={() => alert('action1')} action2={() => alert('action2')} />
            );
        })
    );
