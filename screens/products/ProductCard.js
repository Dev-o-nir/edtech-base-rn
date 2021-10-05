import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
  Button,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
} from "react-native";

var { width } = Dimensions.get("window");

const ProductCard = (props) => {
  const { name, price, image, durationMins, durationHours, description } =
    props;

  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.container}>
      <TouchableCmp style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={{
              uri: image ? image : "Card",
            }}
          />
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>${price}</Text>
        </View>
        {/* <View style={styles.card} /> */}
        <View style={{ marginLeft: 10, marginRight: 10, marginTop: 4 }}>
          <Text style={styles.duration}>
            {durationHours} h {durationMins} min
          </Text>
          <Text style={styles.title}>
            {name.length > 25 ? name.substring(0, 15 - 3) + "..." : name}
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "300" }}>{description}</Text>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width - 20,
    height: width / 1.2,
    paddingBottom: 10,
    borderRadius: 10,
    marginTop: 45,
    marginBottom: 5,
    marginLeft: 10,
    alignItems: "center",
    elevation: 8,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#BEBAB3",
  },
  cardContainer: {
    width: "100%",
    margin: 0,
   
  },
  imageContainer: {
    // flex: 1,
    // overflow: "hidden",

    width: "100%",
    height: "80%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  card: {
    marginBottom: 10,
    height: width / 2 - 20 - 90,
    backgroundColor: "transparent",
    width: width / 2 - 20 - 10,
  },
  duration: {
    color: "#5BA092",
    fontSize: 12,
    fontWeight: "500",
  },
  title: {
    fontWeight: "500",
    fontSize: 24,
    textAlign: "left",
  },
  priceContainer: {
    backgroundColor: "#65AAEA",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  price: {
    fontSize: 20,
    color: "white",
    position: "absolute",
    top: -40,
    right: 20,
    // marginTop: 10,
  },
});

export default ProductCard;
