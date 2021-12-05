import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

 

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Image source={require("../assets/newsroom.jpg")} style={{width:210, height: 210, marginTop: 10}}/>
      <TouchableOpacity onPress={()=>navigation.navigate('Trending News')}>
        <Text style={styles.textStyling}>Everything</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.navigate('TrendingNews')}>
        <Text style={styles.textStyling}>Top-headlines</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyling: {
    width: 287,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 100,
    paddingVertical: 5,
    color: "white",
    backgroundColor: "#f0b71c",
    borderRadius: 10,
    marginTop: 15,
  },
  image: {
    height: 100,
    width: 200,
  },
});

export default WelcomeScreen;
