import React from "react";
import { View, Text, ScrollView } from "react-native";
import { useState, useEffect } from "react";

const NewsSource = () => {
  const api_key = "30f49487e11948618f1ffd82b5be808e";
  const [newSource, setNewsSource] = useState([]);

  const fetchNewsSources = () => {
    fetch(
      "https://newsapi.org/v2/top-headlines/sources?q=news24&country?q=rsa&apiKey=" +
        api_key
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setNewsSource(data.sources[0]);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally();
  };
  useEffect(() => {
    fetchNewsSources();
  }, []);
  return (
    <View>
        <Text>Hello</Text>
    </View>
  );
};

export default NewsSource;
