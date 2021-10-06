import React from "react";
import { NativeBaseProvider, Box } from "native-base";

// import CourseContainer from "./screens/courses/CourseContainer";
import Header from "./components/Header";
import ProductContainer from "./screens/products/ProductContainer";

export default function App() {
  return (
    <NativeBaseProvider>
      <Header />
      <ProductContainer />
      {/* <ProductContainer /> */}
      {/* <CourseContainer /> */}
    </NativeBaseProvider>
  );
}
