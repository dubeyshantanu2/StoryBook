import React from 'react';
import { GestureResponderEvent, Image, Pressable, Text, View } from 'react-native';
import tw from 'twrnc';

import * as COLORS from '../../../config/colors';
import * as IMAGES from '../../../config/images';

type Props = {
  price: number;
  onPress: (event: GestureResponderEvent) => void;
};

const Payment = (props: Props) => {
  return (
    <View style={tw`py-3.5 px-9 rounded-md shadow-lg bg-white mt-8 justify-evenly items-center`}>
      <Text style={tw`font-semibold text-2xl`}>Total Fare ₹{props.price}</Text>
      <View style={tw`flex-row items-center`}>
        <Image source={IMAGES.UPI} />
        <Image source={IMAGES.GPAY} />
        <Image source={IMAGES.PHONEPAY} />
        <Image source={IMAGES.VISA} />
        <Image source={IMAGES.MASTERCARD} />
      </View>
      <Pressable
        style={tw`px-11.25 py-1.25 bg-[${COLORS.SPANIS_VIRIDIAN}] rounded-md`}
        onPress={props.onPress}>
        <Text style={tw`text-[25px] font-medium text-white`}>Pay ₹{props.price} now</Text>
      </Pressable>
    </View>
  );
};

export default Payment;
