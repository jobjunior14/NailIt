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
              backgroundColor: index <= currentIndex ? "black" : "gray",
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
    height: 2,
    width: "100%",
    backgroundColor: "transparent",
    opacity: 0.6,
    rowGap: 4,
    paddingRight: 6,
  },
  segment: {
    height: "100%",
    borderRadius: 2,
    marginLeft: 1,
  },
});

export default ProgressBar;
