import React from 'react';
import WebView from 'react-native-webview';

const WebViewScreen = uri => {
  return <WebView source={{uri: uri?.route?.params?.url}} />;
};

export default WebViewScreen;
