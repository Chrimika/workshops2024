import { useNavigation } from '@react-navigation/native';
import { View, Text} from 'react-native'; 
import { Button } from '@react-navigation/elements';

function DetailsScreen({route}){
    
    const navigation = useNavigation();
    
    //2. Recupération de la valeur
    const {itemId, otherParam} = route.params;

    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
        <Text>Details Screen</Text>
        <Text>itemId : {JSON.stringify(itemId)}</Text>
        <Text>otherParam : {JSON.stringify(otherParam)}</Text>
        <Button onPress = {() => navigation.push('Details', {
          itemId: Math.floor(Math.random() * 100),
        })}>Go to Details</Button>
        <Button onPress = {() => navigation.popTo('Home')}>Go to Home</Button>
      </View>
    );
};

export default DetailsScreen;