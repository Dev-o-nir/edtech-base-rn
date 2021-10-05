import React from "react";
import { NativeBaseProvider, Box } from "native-base";

// import CourseContainer from "./screens/courses/CourseContainer";
import ProductContainer from "./screens/products/ProductContainer";

export default function App() {
  return (
    <NativeBaseProvider>
      <ProductContainer />
      {/* <ProductContainer /> */}
      {/* <CourseContainer /> */}
    </NativeBaseProvider>
  );
}
