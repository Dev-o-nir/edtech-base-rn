import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import {
  Container,
  Header,
  Content,
  Thumbnail,
  Text,
  Avatar,
  VStack,
  Image,
} from "native-base";

var { width } = Dimensions.get("window");

const SearchedProducts = (props) => {
  const { productsFiltered } = props;

  const uri =
    "https://images.unsplash.com/photo-1555066931-bf19f8fd1085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2071&q=80";
  return (
    <>
      {productsFiltered.length > 0 ? (
        productsFiltered.map((item) => (
          <VStack space={2} alignItems="center">
            <Image size={12} source={{ uri: uri }} alt="react-native" />
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
          </VStack>
        ))
      ) : (
        <View style={styles.center}>
          <Text style={{ alignSelf: "center" }}>
            No products match the selected criteria
          </Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
});

export default SearchedProducts;
