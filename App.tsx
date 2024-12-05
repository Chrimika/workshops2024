// In App.js == App.tsk

import * as React from 'react';
import { View, Text } from 'react-native';
import { createStaticNavigation, useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen(){

  const navigation = useNavigation();

  return(
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Text>Home Screen</Text>
    </View>
  );
};

function DetailsScreen(){
  return(
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Text>Details Screen</Text>
    </View>
  );
};

const Stack = createNativeStackNavigator();

function RootStack(){
  return (
    <Stack.Navigator 
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {backgroundColor: 'tomato'},
      }}
      >
      <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Overview'}}/>
      <Stack.Screen name="Details" component={DetailsScreen}/>
    </Stack.Navigator>
  )
}

export default function App(){
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  )
}