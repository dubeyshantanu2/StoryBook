import { storiesOf } from '@storybook/react-native';
import React from 'react';

import ToolTip from '.';
import CenterView from '../CenterView';

storiesOf('ToolTip', module)
    .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
    .add('address1', () =>
        React.createElement(() => {
            return (
                <ToolTip address='Some Address goes here' onPress={() => alert('your action here')} />
            );
        })
    );
