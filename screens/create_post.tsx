import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput} from 'react-native';
import { Button } from '@react-navigation/elements';

// Création de la vue d'écran de Création de Poste
function CreatePostScreen() {
    const navigation = useNavigation();
    const [postText, setPostText] = React.useState('');
  
    return(
      <>
        <TextInput
          multiline
          placeholder="what's on your mind ?"
          style={{
            margin: 10,
            height: 200, 
            padding: 10, 
            backgroundColor: 'white',
            borderWidth: 1,
            borderRadius: 10,
            borderColor: 'gray'
          }}
          value={postText}
          onChangeText={setPostText}
        />
        
        <Button
          onPress = {() => navigation.popTo('Home', {post: postText})}
          style = {{
            marginHorizontal: 5, 
            flexDirection: 'row',
            flexBasis: 'auto',
            width: 350, 
            justifyContent: 'center', 
            backgroundColor: 'red',
            borderRadius: 1
          }}>
          <Text style={{color: '#fff', fontWeight: 'bold'}}>Done</Text>
        </Button>
      </>
    );
  };
  
export default CreatePostScreen;