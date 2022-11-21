import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button,
  SafeAreaView,
  Image,
} from 'react-native';
import {LoginManager} from 'react-native-fbsdk-next';
import WebView from 'react-native-webview';
const App = () => {
  return (
    <View></View>
    // <View
    //   style={{
    //     flex: 1,
    //     backgroundColor: 'gray',
    //   }}>
    //   <WebView
    //     source={{
    //       uri: 'https://reactnative.dev/',
    //     }}
    //     style={{marginTop: 20}}
    //   />
    // </View>
    // <View style={styles.homeCOntainer}>
    //   <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    //     {/* <Text>Facebook Login React Native Example</Text> */}
    //     {/* <Button
    //       title={'Login with Facebook'}
    //       onPress={() => {
    //         LoginManager.logInWithPermissions(['public_profile', 'email']).then(
    //           function (result) {
    //             if (result.isCancelled) {
    //               alert('Login Cancelled ' + JSON.stringify(result));
    //             } else {
    //               alert(
    //                 'Login success with  permisssions: ' +
    //                   result.grantedPermissions.toString(),
    //               );
    //               alert('Login Success ' + result.toString());
    //             }
    //           },
    //           function (error) {
    //             alert('Login failed with error: ' + error);
    //           },
    //         );
    //       }}
    //     /> */}
    //     <WebView
    //       source={{
    //         uri: 'https://reactnative.dev/',
    //       }}
    //       style={{marginTop: 20}}
    //     />
    //   </View>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    padding: 10,
    color: 'black',
  },
  buttonStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#DDDDDD',
    padding: 5,
  },
  imageStyle: {
    width: 200,
    height: 200,
    margin: 5,
  },
});

export default App;
