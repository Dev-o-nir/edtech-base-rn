import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import { textAlign } from "styled-system";
import { marginBottom } from "styled-system";
// import { H1 } from 'native-base'

const Header = () => {
  return (
    <SafeAreaView style={styles.header}>
      {/* <Image
        source={require("../assets/Logo.png")}
        resizeMode="contain"
        style={{ height: 50, paddingBottom: 10 }}
      /> */}
        <Text style={styles.text} >Hello</Text>  
        <Text style={styles.headerStyle}>User 1</Text>
        {/* <H1>Emma Akerlund</H1> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 16,
    color: "#3C3A36",
    marginLeft: 10,
  },
  headerStyle: {
    fontSize: 42,
    fontWeight: "600",
    color: "#030303",
    marginBottom: 10,
    marginLeft: 10,
  }
});

export default Header;
