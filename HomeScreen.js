import React from 'react';
import  { useState } from "react";
import { SelectList } from 'react-native-dropdown-select-list'
import{NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import SelectDropdown from 'react-native-select-dropdown'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Image,
  View,
  TextInput,
  Button, 
  ImageBackground,
  TouchableHighlightBase,
  TouchableHighlight,
  requireNativeComponent,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */


const App = () => {

  return (
     <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' >
      <Stack.Screen name="Login" component={LoginScreen} />
    
         <Stack.Screen name="Home" component={HomeScreen} />
         <Stack.Screen name="History" component={HistoryScreen} />
         <Stack.Screen name="Addbook" component={AddbookScreen} />
         <Stack.Screen name="Genre" component={GenreScreen}/>
         <Stack.Screen name="Store Me" component={StoreMeScreen}/>
      </Stack.Navigator>
     </NavigationContainer>
    
  );
}

const LoginScreen= ({ navigation,route}) => {
return(

<View style={{ flex: 1, backgroundColor: 'cadetblue' }}>
<Text style={styles.welcomePage}>WELCOME TO MY BOOK STORE!</Text>
<Image style ={styles.first} source={require('./Image/chips.png')}/>

      
       <TextInput style = {styles.nameQuestion}
                underlineColorAndroid="transparent"
                placeholder="Name"
                placeholderTextColor="black"
                autoCapitalize="none"
                ></TextInput>
       <TextInput style={styles.nameQuestion} 
       underlineColorAndroid="transparent"
       placeholderTextColor="black"
       autocapiyalize="none"
       placeholder="Surname">

       </TextInput>
       <TextInput style={styles.nameQuestion} 
       underlineColorAndroid="transparent"
       autocapiyalize="none"
       placeholderTextColor="black"
       placeholder="Password">

       </TextInput>
       
       
  <View style={styles.buttonChange}>
        <Button style={styles.buttonChange} title='Login'
        onPress={() => { navigation.navigate('Home')}}/>
      </View>
      </View>
)
}
;
const HomeScreen = ({ navigation, route }) => {
  return (

    <View style={{ flex: 1, backgroundColor: 'cadetblue' }}>  
      <View>
      <View>
      <Image style ={styles.firstOne} source={require('./Image/brie.png')}/>
       <Text> {route.params?.title}, {route.params?.genre}, {route.params?.author}, {route.params?.totalPages}
       {route.params?.averagePages}</Text>
    </View>
      </View>
      <Text style={styles.welcomeText}>Welcome to Me Store!</Text>
      <Text style={styles.welcomePage}>Last book read: {route.params?.title} by {route.params?.author} </Text>
      <Text style={styles.welcomePage}> Number of pages: {route.params?.numberofpages} </Text>
      <Text style={styles.welcomePage}>Total pages read: {route.params?.totalPages}</Text>
      <Text style={styles.welcomePage}>Average pages read: {route.params?.averagePages}</Text>
     
      
       <View style={styles.buttonChange}>
      <Button style={styles.buttonChange} title='Store Me' 
      onPress={() =>  { navigation.navigate('Store Me')}}/>
      </View>
      <View style={styles.buttonChange}>
        <Button style={styles.buttonChange} title='History'
          onPress={() => { navigation.navigate('History') }} />
      </View>
      <View style={styles.buttonChange}>
        <Button style={styles.buttonChange} title='Genre'
          onPress={() => { navigation.navigate('Genre') }} />
      </View>
    <View style={styles.buttonChange}>
     <Button style={styles.buttonChange} title='Addbook'
     onPress={() => {navigation.navigate('Addbook')}} />
    </View>
    </View>
  );
};
