import React from "react";
import { StyleSheet,View, Image, Text } from "react-native";

const App = ()=> {
  return (
    <>
       <View style={{ flexDirection: 'row' }}>
         <Text>Hola</Text>
              <Image  source={{uri:'https://facebook.github.io/react/logo-og.png'}}  style={{width: 400, height: 400}} />
          </View>
    </>
  );
}

const styles = StyleSheet.create({
  
});


export default App;
