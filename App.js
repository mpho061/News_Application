import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from './components/HomeScreen';
import News from './components/News';
import WebViewComponent from './components/WebView';
import NewsSource from './components/NewsSource';
 

const Stack = createNativeStackNavigator();

export default function App() {
  return (
     <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen name="Trending News" component={HomeScreen} options={{headerShown:false}}/>
         <Stack.Screen name="News" component={News} options={({route})=>{
          return({
            title: route.params.title 
          })
        }}/>
        <Stack.Screen name="WebViews" component={WebViewComponent}/>
       </Stack.Navigator>
     </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
