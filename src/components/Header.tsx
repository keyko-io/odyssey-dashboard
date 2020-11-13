import React from 'react';
import { Image } from 'react-native';

export function LogoTitle() {
  return (
    <Image
      style={{ width: 250, height: 83 }}
      source={require('../../resources/images/banner_logo.png')}
    />
  );
}
