import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
  CheckBox,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import NewsSource from "./NewsSource";

const ListButton = ({ title, navigation }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("News", { title })}>
        <Text style={styles.headerStyling}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
const HomeScreen = ({ navigation }) => {
  const [NotFound, setNotFound] = useState(true);
  const [latestNews, setLatestNews] = useState([]);
  const [titleText, setTitleText] = useState("everything");
  const api_key = "30f49487e11948618f1ffd82b5be808e";
  const [endPoint, setEndPoint] = useState();
  
  const fetchData = () => {
    fetch("https://newsapi.org/v2/"+ titleText +"?q=s&apiKey=" + api_key)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLatestNews(data.articles);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setNotFound(false));
  };

  useEffect(() => {
    fetchData();
  }, []); 

  return (
    <View style={styles.container}>
      <View style={styles.searchView}>
        <TextInput
          placeholder={"Search"}
          style={styles.searchDesign}
          onChangeText={(e) => setTitleText(e)}
        />
        <TouchableOpacity onPress={() => fetchData()}>
          <Ionicons
            style={{ marginLeft: 5 }}
            name="ios-search-sharp"
            size={40}
            color="#f0b71c"
          />
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        const
        data={[
          { title: "Entertainment" },
          { title: "Business" },
          { title: "Politics" },
          { title: "Health"},
          { title: "Technology"},
          { title: "Sports" },
        ]}
        renderItem={({ item: { title }, index }) => {
          return <ListButton title={title} navigation={navigation} />;
        }}
      />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {latestNews.map((news, index) => {
          return news.urlToImage ? (
            <View key={index}>
              <Image
                style={styles.imageStyling}
                source={{ uri: news.urlToImage }}
              />
              <Text style={styles.titleStyling}>{news.title}</Text>
              {/* <View>
                <Text style={styles.sourceStyling}>{news.source.name}</Text>
              </View> */}
              <View>
                <Text style={styles.sourceStyling}>{news.source.name}</Text>
              </View>
            </View>
          ) : null;
        })}
      </ScrollView>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
        {latestNews.map((news, index) => {
          return news.urlToImage ? <View key={index}></View> : null;
        })}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  headerStyling: {
    flexDirection: "row",
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    backgroundColor: "#f0b71c",
  },
  searchView: {
    flexDirection: "row",
    marginTop: 5,
  },
  titleStyling: {
    width: 150,
    height: 50,
    margin: 6,
    textAlign: "justify",
    marginLeft: 11,
    color: "white",
  },
  imageStyling: {
    width: 150,
    height: 150,
    borderRadius: 10,
    margin: 5,
    marginLeft: 15,
  },

  sourceStyling: {
    marginTop: 45,
    height: 50,
    width: 150,
    paddingVertical: 5,
    paddingHorizontal: 5,
    marginLeft: 10,
    borderRadius: 10,
    backgroundColor: "#f0b71c",
  },
  searchDesign: {
    padding: 10,
    borderWidth: 1,
    width: "80%",
    borderRadius: 60,
    backgroundColor: "white",
    marginTop: 5,
    marginLeft: 10,
    color: "black",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
    margin: 8,
  },
  label: {
    margin: 8,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default HomeScreen;
