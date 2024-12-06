import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text} from 'react-native'; 
import { Button } from '@react-navigation/elements';

// Création de la vue d'écran Acceuil
function HomeScreen({route}){

    const navigation = useNavigation();
    const [count, setCount] = React.useState(0);
  
    //Surveiller l'activité de l'écran et détecte s'il y a des changements
    React.useEffect(()=>{
      /*
      if (route.params?.post){
        // Une fois la mise à jour de l'élément terminée, faire quelque chose du paramètre
        // Comme l'envoi sur le serveur
        alert('New Post: '+route.params?.post);
      }
      */
  
      navigation.setOptions({
        headerRight: () => (
          <Button onPressIn={() => setCount((c) => c+1)}>Update Count</Button>
        ),
      });
    }, [navigation]);
  
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
        
        <Text style={{fontWeight: 'bold', fontSize: 28, padding: 25, color: 'red'}}>
          Home Screen
        </Text>
        
        <Button
          onPress = {() => navigation.navigate('CreatePost')}
          style = {{
            margin: 5, 
            width: 150, 
            justifyContent: 'center', 
            backgroundColor: 'red',
            borderRadius: 1
          }}>
          <Text style={{color: '#fff', fontWeight: 'bold'}}>Create Post</Text>
        </Button>
  
        <Button 
          onPress = {() => navigation.navigate('More', {screen: 'Messages'})}
          style = {{
            margin: 5, 
            width: 150, 
            justifyContent: 'center', 
            backgroundColor: 'red',
            borderRadius: 1
          }}>
          <Text style={{color: '#fff', fontWeight: 'bold'}}>Connect</Text>
        </Button>
      
      </View>
    );
  }

  export default HomeScreen;