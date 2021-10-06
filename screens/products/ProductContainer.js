import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Text,
} from "react-native";
import { Input, Center, CheckIcon, Icon } from "native-base";
import { EvilIcons } from "react-native-vector-icons";

import ProductList from "./ProductList";
import SearchedProducts from "./SearchedProducts";
// import Banner from "../../shared/Banner";

const data = require("../../assets/data/products.json");

const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [focus, setFocus] = useState();

  useEffect(() => {
    setProducts(data);
    setProductsFiltered(data);
    setFocus(false);

    return () => {
      setProducts([]);
      setProductsFiltered([]);
      setFocus();
    };
  }, []);

  const searchProduct = (text) => {
    setProductsFiltered(
      products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
    );
  };

  const openList = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 25 }}>
        <Input
          InputRightElement={
            <Icon
              as={<EvilIcons name="search" />}
              size={6}
              ml="2"
              color="muted.400"
              style={styles.icon}
            />
          }
          mx="3"
          py="3"
          placeholder="Search"
          w={{ base: "95%", md: "30%" }}
          size="lg"
          leftElement
          style={styles.input}
          onChangeText={(text) => searchProduct(text)}
          onFocus={openList}
        />
        {focus === true ? <Icon onPress={onBlur} name="close-o" /> : null}
      </View>

      {/* <SearchedProducts /> */}

      {focus === true ? (
        <SearchedProducts productsFiltered={productsFiltered} />
      ) : (
        <View style={{ marginTop: 10, marginBottom: 100 }}>
          <FlatList
            numColumns={1}
            data={products}
            renderItem={({ item }) => <ProductList key={item.id} item={item} />}
            keyExtractor={(item) => item.name}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    alignItems: "center",
    justifyContent: "center",
  },
  // input: {
  //   borderLeftWidth: 2,
  //   borderTopWidth: 2,
  //   borderBottomWidth: 2,
  // },
  // icon: {
  //   borderRightWidth: 2,

  // }
});
export default ProductContainer;
