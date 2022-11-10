import React from 'react';
import { View, Image, Text, Pressable } from 'react-native';
import tw from 'twrnc';

interface Props {
  ride_type: 'City' | 'Outstation';
  onpress: () => void;
}

const ASSETS_2 = require('../../../assets/Asset2.png');
const ASSETS_3 = require('../../../assets/Asset3.png');

const SelectRide = ({ ride_type, onpress }: Props) => {
  return (
    <Pressable onPress={onpress} style={tw`w-35.25 h-12.5 flex-row rounded-md bg-[#04825C]`}>
      <View style={tw` w-12.5 border-2 rounded-l-md border-[#04825C] bg-white`}>
        {ride_type === 'City' ? <Image source={ASSETS_2} /> : <Image source={ASSETS_3} />}
      </View>
      <View style={tw`justify-center items-center w-2/3`}>
        <Text style={tw`font-medium text-white text-base`}>{ride_type}</Text>
      </View>
    </Pressable>
  );
};

export default SelectRide;
