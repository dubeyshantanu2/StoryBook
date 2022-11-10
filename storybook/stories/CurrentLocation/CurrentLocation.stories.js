import { storiesOf } from '@storybook/react-native';
import React from 'react';

import CurrentLocation from '.';
import PickUp from './PickUp';
import Drop from './Drop';
import CenterView from '../CenterView';

storiesOf('Locations pointer', module)
    .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
    .add('My location', () =>
        React.createElement(() => {
            return (
                <CurrentLocation />
            );
        })
    ).add('PickUp', () =>
        React.createElement(() => {
            return (
                <PickUp />
            );
        })
    ).add('Drop', () =>
        React.createElement(() => {
            return (
                <Drop />
            );
        })
    );
