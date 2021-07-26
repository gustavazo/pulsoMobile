import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Image, View } from "react-native";
import { Text } from "react-native-paper";

export const getHeaderOptions = () => {
  return {
    headerShown: true,
    headerTitleAlign: 'left',
    headerRight: () => (
      <MaterialCommunityIcons name="bell" color={"#f18b0c"} style={{marginRight: 10}} size={23} />
    ),
    headerStyle: {
      backgroundColor: '#441b3e',
    },
    headerTitle: props => (
      <View style={{flex: 1, flexDirection: "row", marginLeft: -10, alignItems: "center"}}>
        <Image
          style={{width: 35, height: 35}}
          source={require("../assets/icon.png")}
        />
        <Text style={{color: "white", fontSize: 23, marginLeft: 5, fontFamily: "basicLight"}}>Inicio</Text>
      </View>
    ),
  }
}
