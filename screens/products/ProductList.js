import React from "react";
import { TouchableOpacity, View, Dimensions } from "react-native";
import ProductCard from "./ProductCard";

var { width } = Dimensions.get("window");

const ProductList = (props) => {
  const { item } = props;
  return (
    <TouchableOpacity style={{ width: "100%" }}>
      <View style={{ width: width }}>
        <ProductCard {...item} />
      </View>
    </TouchableOpacity>
  );
};

export default ProductList;
