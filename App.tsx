// In App.js == App.tsk

/*

  <Text style={{margin: 10}}>Post: {route.params?.post}</Text>

*/

import * as React from 'react';
import { View, Text, Image } from 'react-native';  
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from '@react-navigation/elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Ecrans d'activités
import HomeScreen from './screens/home';
import CreatePostScreen from './screens/create_post';
import MessagesScreen from './screens/message';

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) =>({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home'){
            iconName = focused
              ? 'home'
              : 'home-outline';
          }else if(route.name === 'Settings'){
            iconName = focused ? 'home' : 'home-outline';
          }

          // On peut créer n'importe quel composantes de notre choix
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray'
      })}>
      <Tab.Screen name="Home" component={FeedScreen}/>
      <Tab.Screen name="Settings" component={MessagesScreen} initialParams={{name: "Bille"}}/>
    </Tab.Navigator>
  );
}

// Création de la vue d'écran More
function FeedScreen() {

  // Affichage du texte
  return(
    <View>
      <Text style={{margin: 10, padding: 10, backgroundColor: 'gray'}}>
        The Feed need to renplish to start working
      </Text>
    </View>
  );
};

// Création de la vue d'écran More
function More({route} /*{<Paramètre>}*/) {

  // Déclaration de la clé du paramètre
  const {name} = route.params;

  return(
    <View>
      <Text style={{margin: 10, padding: 10, backgroundColor: 'gray'}}>
        Nothing is available yet for M/Ms: {name}
      </Text>
    </View>
  );
};

// Customisation du titre
function LogoTitle(){
  return (
    <Image
      style={{width: 50, height: 50}}
      source={require('./assets/images/Icon.jpg')}
    />
  );
}

// Création d'une pile qui contiendra les vues d'écran
const Stack = createNativeStackNavigator();

// Fonction d'arragement des écrans de la pile
function RootStack(){
  
  return (
    <Stack.Navigator 
      initialRouteName="Home"                          // : Défini un écran principal
      screenOptions={{
        headerStyle: {backgroundColor: '#f4511e'},     // : Change la couleur de l'en-tête
        headerTintColor: '#fff',                       // : Change la couleur du texte
        headerTitleStyle: {fontWeight: 'bold'}         // : Change le style du texte en gras
      }}      
      >
      <Stack.Screen 
        name="Home"                                    // : Donne un nom à l'écran
        component={HomeScreen}                         // : Appelle la fonction de l'écran
        options={{
          //title: 'Overview'                          // : Défini le titre de l'écran
          headerTitle: (props) => <LogoTitle/>,        // : Défini un titre personnalisé
          headerRight: () => <Button>Info</Button>,    // : Ajoute un bouton sur le côté droit
          headerBackTitle: 'Customback',               // : (iOS) Change le texte de retour
          headerBackTitleStyle: {fontSize: 12},        // : (iOS) Change le style du texte de retour
          headerShown: false                           // : Masquer l'en-tête de l'écran
        }}
      />
      <Stack.Screen
        name="CreatePost"                               // : Nom de l'écran
        component={CreatePostScreen}                    // : Fonction de l'écran
        options={{
          title: 'Post Creation',                       // : Titre
          headerBackTitle: 'Customback',                // : Texte de retour
          headerBackTitleStyle: {fontSize: 12}          // : Style appliqué sur texte de retour
        }}
      />

      <Stack.Screen
        name="More"                                   // : Nom de l'écran
        component={HomeTabs}                          // : Fonction de l'écran
        initialParams={{name: "Bille"}}               // : Initialise les valeurs par
                                                      // défauts des paramètres des fonctions
        options={{
          title: 'Profile',                           // : Titre
          headerShown: false                          // : Masque l'en-tête
        }}
      />
    </Stack.Navigator>
  )
}

// Point d'entrée de l'application
export default function App(){
  
  // Charge les écrans 
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  )
}