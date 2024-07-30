// ProgressBar.js
import React from "react";
import { View, StyleSheet } from "react-native";

interface ProgressBarProps {
  count: number;
  currentIndex: number;
}
const ProgressBar = ({ count, currentIndex }: ProgressBarProps) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: count }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.segment,
            {
              backgroundColor: index <= currentIndex ? "blue" : "gray",
              width: `${100 / count}%`,
            },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 4,
    width: "100%",
    backgroundColor: "transparent",
  },
  segment: {
    height: "100%",
    borderRadius: 2,
  },
});

export default ProgressBar;
