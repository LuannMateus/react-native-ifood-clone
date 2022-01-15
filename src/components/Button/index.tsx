import React, { HTMLAttributes } from 'react';
import { GestureResponderEvent } from 'react-native';

import { TouchableOpacity, Text } from './styles';

type ButtonProps = {
  theme?: string;
  text: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
};

export const Button = ({ theme, text, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity theme={theme || ''} onPress={onPress}>
      <Text theme={theme || ''}>{text}</Text>
    </TouchableOpacity>
  );
};
