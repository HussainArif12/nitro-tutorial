import { Button, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useState } from "react";
import {
  ConfettiView,
  ConfettiViewType,
  HybridBattery,
  callback,
} from "react-native-battery";

export default function HomeScreen() {
  const [confettiInstance, setConfettiInstance] =
    useState<ConfettiViewType | null>(null);

  const triggerConfetti = () => {
    if (confettiInstance) {
      confettiInstance.showConfetti();
    }
  };

  const batteryLevel = HybridBattery.getBattery();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Battery Level: {batteryLevel}%</Text>
      <ConfettiView
        duration={10000}
        style={styles.confettiViewStyle}
        hybridRef={callback((ref) => setConfettiInstance(ref))}
      />
      <Button title="Trigger confetti" onPress={triggerConfetti} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
  },

  text: {
    textAlign: "center",
    color: "white",
  },
  confettiViewStyle: {
    backgroundColor: "black",
    height: 300,
    width: 300,
  },
});
