import React from 'react';
import { View, Text} from 'react-native';
import {WebView} from 'react-native-webview'
// import { Container } from './styles';

const WebViewComponent = ({route}) => {
  return(
    <WebView source={{url:route.params.url}}/>
     
  );
}
export default WebViewComponent;