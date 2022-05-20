import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";
import Beach from "../../assets/beach.jpg";
import Forest from "../../assets/forest.jpg";
import Mountain from "../../assets/mountain.jpg";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title="Forest" imageSource={Forest} score={3} />
      <ImageDetail title="Beach" imageSource={Beach} score={9} />
      <ImageDetail title="Mountain" imageSource={Mountain} score={7.5} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
