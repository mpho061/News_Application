import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  TouchableOpacity,
   
} from "react-native";

// import { Container } from './styles';

const News = ({ route, navigation }) => {
  const [NotFound, setNotFound] = useState(true);
  const [PerNews, setPerNews] = useState([]);
  const [dailyNews, setDailyNews] = useState("");
  const [titleText, setTitleText] = useState("Top-headlines");

  const api_key = "30f49487e11948618f1ffd82b5be808e";

  const fetchData = () => {
    fetch(
      "https://newsapi.org/v2/" + titleText +"?category=" +
        route.params.title +
        "&country=za&apiKey=" +
        api_key
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPerNews(data.articles);
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
    <View style={{ alignItems: "center" }}>
      {PerNews.length === 0 ? (
        <ActivityIndicator
          style={{
            height: Dimensions.get("window").height,
            width: Dimensions.get("window").width,
            alignItems: "center",
            justifyContent: "center",
          }}
          size="large"
          color="black"
        />
      ) : (
        PerNews.map((news, index) => {
          return news.urlToImage ? (
            <ScrollView>
              <TouchableOpacity
               
                onPress={() => navigation.navigate("WebView", { url: news.url })}
              >
                <View
                 key={index}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    backgroundColor: "white",
                    borderRadius: 10,
                    elevation: 4,
                    width: Dimensions.get("window").width - 30,
                    marginTop: 10,
                  }}
                >
                  <Image
                    style={styles.imageStyling}
                    source={{ uri: news.urlToImage }}
                  />
                  <Text style={styles.titleStyling}>{news.title}</Text>
                </View>
              </TouchableOpacity>
              
            </ScrollView>
          ) : null;
        })
      )}
      <Text>{route.params.title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  headerStyling: {
    flexDirection: "row",
    padding: 10,
    borderWidth: 1,
    borderRadius: 60,
    margin: 10,
  },
  searchView: {
    flexDirection: "row",
  },
  titleStyling: {
    width: Dimensions.get("window").width - 130,
    paddingLeft: 10,
    paddingTop: 5,
  },
  imageStyling: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginTop: 10,
    margin: 5,
    marginLeft: 15,
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
});

export default News;
