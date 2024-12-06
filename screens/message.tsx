import { View, Text } from "react-native";

// Création de la vue d'écran More
function MessagesScreen({route}) {

    const {name} = route.params;
  
    return(
      <View>
        <Text style={{margin: 10, padding: 10, backgroundColor: 'gray'}}>
          Your messages box is Empty M/Ms: {name}
        </Text>
      </View>
    );
  };

export default MessagesScreen;