// import { action } from '@storybook/addon-actions';
// import { text } from '@storybook/addon-knobs';
// import { storiesOf } from '@storybook/react-native';
// import React from 'react';
// import { Text } from 'react-native';

// import SuggaaTextInput from '.';
// import CenterView from '../CenterView';

// storiesOf('Button', module)
//   .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
//   .add('with text', () =>
//     React.createElement(() => {
//         const [value, setValue] = React.useState('');
//         const [error, setError] = React.useState<string | null>(null);
//       return (
//         <SuggaaTextInput
//           style={{
//             alignContent: 'center',
//             width: '100%',
//             borderWidth: 2,
//             borderColor: '#04825C',
//             borderRadius: 5,
//             fontSize: 20,
//             fontWeight: '400',
//             paddingHorizontal: 13,
//             paddingVertical: 10,
//           }}
//           value={value}
//           label="Full name"
//           errorText={error}
//           onChangeText={(text) => setValue(text)}
//           selectionColor="#04825C"
//         />
//       );
//     })
//   )
//   .add('with some emoji', () => (
//     // <Button onPress={action('clicked-emoji')}>
//     //   <Text>😀 😎 👍 💯</Text>
//     // </Button>
//     <></>
//   ));
