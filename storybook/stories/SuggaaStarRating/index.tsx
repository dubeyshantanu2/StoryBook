import React from 'react';
import { View, Image } from 'react-native';
import tw from 'twrnc';

import * as IMAGES from '../../../config/images';
export default function SuggaaStarRating({ rating }: { rating: number }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    let path = IMAGES.STAR_FILLED;
    if (i > rating) {
      path = IMAGES.STAR_UNFILLED;
    }
    stars.push(<Image key={i} style={tw`h-8 w-8`} source={path} />);
  }
  return <View style={tw`justify-center items-center flex-row`}>{stars}</View>;
}
