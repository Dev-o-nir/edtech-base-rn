import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Text,
} from "react-native";
import { Container, Header, Icon, Item, Input } from "native-base";

import ProductList from "./ProductList";
// import SearchedProduct from "./SearchedProducts";
// import Banner from "../../shared/Banner";

const data = require("../../assets/data/products.json");

const ProductContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);

    return () => {
      setProducts([]);
    };
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Text>Products</Text>
        <View style={{ marginTop: 100, marginBottom:100 }}>
          <FlatList
            numColumns={1}
            data={products}
            renderItem={({ item }) => <ProductList key={item.id} item={item} />}
            keyExtractor={(item) => item.name}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default ProductContainer;
