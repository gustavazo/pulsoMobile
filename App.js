import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import {
  NavigationContainer,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigationState } from '@react-navigation/native';
import TabBar from './components/TabBar';
import { HeaderBackButton } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import RNBootSplash from 'react-native-bootsplash';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { DefaultTheme, Provider as PaperProvider, useTheme } from 'react-native-paper';

import { Avatar, Text, Button, Card, Title, Paragraph } from 'react-native-paper';
import { useEffect, useState } from "react";
import { getHeaderOptions } from "./utils/navigation";
<<<<<<< HEAD
import axios from "axios";
import config from "./config";
import ClaseInstanceService from "./services/ClaseInstanceService";
=======
import HomeScreen from './screens/Home';
>>>>>>> main


<<<<<<< HEAD
const ClassCard = ({ title, description, date }) => (
  <Card style={{width: "85%", marginTop: 15, backgroundColor: "#441b3e"}}>
    <Card.Title titleStyle={{color: "white", fontFamily: "basicLight"}} subtitleStyle={{color: "white", fontFamily: "basicLight"}} title={title} subtitle="Jueves 15/07 22:00" left={LeftContent} />
  </Card>
);

function HomeScreen({navigation}) {
  const [classes, setClasses] = useState([])

  useEffect(() => {
    (async () => {
      const classes = await ClaseInstanceService.find();
      console.log(classes);
      setClasses(classes.data);
    })();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: "#553651", alignItems: "center"}}>
      <Text style={{ color: "white", fontSize: 23, textAlign: "left", alignSelf: "flex-start", marginTop: 20, marginLeft: 25, fontFamily: "basicLight" }}>
        Próximas clase
      </Text>
      {
        classes.map((c) => (
          <ClassCard title={c.name}/>
        ))
      }
    </View>
  );
}

function NotificationsScreen({navigation}) {
=======
function NotificationsScreen({ navigation }) {
>>>>>>> main
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();
function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}

function HomeScreen2({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={getHeaderOptions()}
      />
      <HomeStack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ headerShown: true }}
      />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ headerShown: true }}
      />
      <SettingsStack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ headerShown: true }}
      />
    </SettingsStack.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();

const Drawerr = props => {
  return (
    <Drawer.Navigator initialRouteName="Main">
      <Drawer.Screen
        name="Main"
        component={Tabb}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{ headerShown: true }}
      />
    </Drawer.Navigator>
  );
};


const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#441b3e',
    secondary: '#553651',
    accent: '#f18b0c',
  },
};

const Tabb = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={"white"}
      inactiveColor={theme.colors.secondary}
      labeled={false}
      barStyle={{ backgroundColor: "#441b3e" }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          headerShown: false,
          tabBarIcon: (props) => !console.log(props) && (
            <MaterialCommunityIcons name="home" color={!props.focused ? "white" : "#f18b0c"} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStackScreen}
        options={{
          headerShown: false,
          tabBarIcon: (props) => (
            <MaterialCommunityIcons name="calendar" color={!props.focused ? "white" : "#f18b0c"} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Settingsa"
        component={SettingsStackScreen}
        options={{
          headerShown: false,
          tabBarIcon: (props) => (
            <MaterialCommunityIcons name="account" color={!props.focused ? "white" : "#f18b0c"} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Settingss"
        component={SettingsStackScreen}
        options={{
          headerShown: false,
          tabBarIcon: (props) => (
            <MaterialCommunityIcons name="cog" color={!props.focused ? "white" : "#f18b0c"} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  const [currentRoute, setCurrentRoute] = React.useState(null);
  const navigationRef = React.createRef();

  React.useEffect(() => {
    RNBootSplash.hide({ fade: true }); // fade
  }, []);

  return (
    <PaperProvider>
      <NavigationContainer
        ref={navigationRef}
        onStateChange={() => {
          const currentRouteName = navigationRef.current.getCurrentRoute().name;
          setCurrentRoute(currentRouteName);
        }}>
        <Drawerr />
      </NavigationContainer>
    </PaperProvider>
  );
}
