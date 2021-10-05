import React from "react";
import { View, StyleSheet, Image, SafeAreaView } from "react-native";

const Header = () => {
  return (
    <SafeAreaView style={styles.header}>
      <Image
        source={require("../assets/Logo.png")}
        resizeMode="contain"
        style={{ height: 50, paddingBottom: 10 }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#E8EEF3",
  },
});

export default Header;
