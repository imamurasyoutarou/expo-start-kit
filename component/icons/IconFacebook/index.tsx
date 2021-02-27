import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Svg, { Path } from "react-native-svg";

type Props = {
  width?: number;
  height?: number;
};

export const IconFacebook: React.FC<Props> = (props) => {
  const width = props.width ? props.width : 30;
  const height = props.height ? props.height : 30;
  return (
    <Svg width={width} height={height} viewBox="0 0 34 34" fill="none">
      <Path
        d="M17 34C26.3888 34 34 26.3888 34 17C34 7.61116 26.3888 0 17 0C7.61116 0 0 7.61116 0 17C0 26.3888 7.61116 34 17 34Z"
        fill="#3B5998"
      />
      <Path
        d="M21.2738 17.6661H18.2403V28.7792H13.6444V17.6661H11.4586V13.7605H13.6444V11.2331C13.6444 9.42581 14.5029 6.5957 18.2812 6.5957L21.6856 6.60995V10.401H19.2155C18.8103 10.401 18.2406 10.6034 18.2406 11.4656V13.7641H21.6753L21.2738 17.6661Z"
        fill="white"
      />
    </Svg>
  );
};

const styles = StyleSheet.create({
  container: {},
});
