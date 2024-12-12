/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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


const HistoryScreen = ({ navigation, route }) => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("");
  

  return (
    <View style={{ flex: 1, backgroundColor: 'cadetblue' }}>
    <View style = {styles.body}>
      <View>
        <View style = {styles.header}>
          <Text style = {styles.title}>History</Text>
        </View>
        </View>
      </View>
      <TextInput style = {styles.input}
                underlineColorAndroid="transparent"
                placeholder="Title"
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
                multiline styles= {styles.none}
                
    ></TextInput>
    <Button style={styles.buttonChange} title='Last three books read'
        onPress={() => { 
        //Passand merge params back to history screen
        navigation.navigate('History',{
        params: {post: postText},
        merge: true,
    Title,}
      )
      }
      }/>
      <Text style={styles.welcomePage}>Last book read: {route.params?.title} by {route.params?.author} 
      </Text>
      <ScrollView>
        <View style={styles.ImageBackground}>
          <Text></Text>
          <Image style= {styles.small} source={require('./Image/police.png')}/>
          <Text></Text>
          <Image style= {styles.small} source={require('./Image/grey.png')}/>
          <Text></Text>
          <Image style= {styles.small} source={require('./Image/brie.png')}/>
        </View>
      </ScrollView>
    </View>
  )
};




var Author="";
var Title="";
var Genre="";
var pages=0;
var averagePages=0;
var totalPages=0;

const StoreMeScreen = ({ navigation, route }) => {
  const books =["Horror","Fiction","Non-fiction","Romance","Sci-fi","Action"];
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [numberofpages, setNumberOfPages] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [averagePages, setAveragePages] = useState(0);


  
  return(
  
    <View>
      
<ScrollView>
    <TextInput style = {styles.input}
                underlineColorAndroid="transparent"
                placeholder="Title"
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
                multiline styles= {styles.none}
                onChangeText={(val) => setTitle(val)} 
               
              
    ></TextInput>
     <TextInput style = {styles.input}
                underlineColorAndroid="transparent"
                placeholder="Author"
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
                multiline styles= {styles.none}
                onChangeText={(val) => setAuthor(val)} 
              
    ></TextInput>
   
   <TextInput style = {styles.input}
                underlineColorAndroid="transparent"
                placeholder="Genre"
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
                multiline styles= {styles.none}
                onChangeText={(val) => setGenre(val)} >

</TextInput>

       <SelectDropdown>
        data= {books}
        onSelect={(selectItem,index) =>{console.log(
          selectedItem,index)
          }}

          buttonTextAfterSelection={(selectedItem,index) =>{
            //text represented after item is selected
            //if data array is an array of objects then return selectedItem
          }}
          rowTextForSelection={(item,index) =>{
            //text represented for each item in dropdown
            //if data array is an array of objects then return item.property to represent item in dropdown return item
          }}
        </SelectDropdown>           
             

  <TextInput style = {styles.input}
                underlineColorAndroid="transparent"
                placeholder="Number of Pages"
                placeholderTextColor="#9a73ef"
                multiline styles= {styles.none}
                onChangeText={(val) => setNumberOfPages(val)}
                keyboardType='numeric' 

              
    ></TextInput>
     <Text style={styles.welcomePage}>total pages read {route.params?.totalPages}</Text>
      
    <TextInput style = {styles.input}
                underlineColorAndroid="transparent"
                placeholder="Total Pages"
                placeholderTextColor="#9a73ef"
                multiline styles= {styles.none}
                keyboardType='numeric' 

              
    ></TextInput>
      <Text style={styles.welcomePage}>Average pages read {route.params?.averagePages}</Text>
    <TextInput style = {styles.input}
                underlineColorAndroid="transparent"
                placeholder="Average Pages"
                placeholderTextColor="#9a73ef"
                multiline styles= {styles.none}
                keyboardType='numeric' 

              
    ></TextInput>
</ScrollView>
<Button style={styles.buttonChange} title='Store Me'
      onPress={() => { navigation.navigate('Home',{
    title,
    author,
  genre,
    numberofpages,
    totalPages,
    averagePages,
      }
      )
  }
    }/>

    </View>
    
  )
}

const AddbookScreen =({ navigation, route }) => {
  return (
    <View>
      <Image style ={styles.mainPicture} source={require('./Image/Getty.png')}/>
       <Text style={styles.nameQuestion}>Title:</Text>
       <Text style={styles.nameEntry} placeholder="Title"/>
       <Text style={styles.nameQuestion}>Author:</Text>
       <Text style={styles.nameEntry} placeholder="Author"/>
       <Text style= {styles.nameQuestion}>Genre</Text>
       <Text style={styles.nameEntry} placeholder="Genre"/>
       <Text style= {styles.nameQuestion}>Number of pages:</Text>
       <Text style= {styles.nameEntry} placeholder="Number of pages"/>
    </View>
  );
};


const GenreScreen = ({ navigation, route }) => {
const [genreArray] = useState (["horror","death","kill","lovebirds","fiction","nonfiction","Romance"])
const [books] = useState('');
const [length] = useState('');

<SelectDropdown>
data= {books}
onSelect={(selectItem,index) =>{console.log(
  selectedItem,index)
  }}

  buttonTextAfterSelection={(selectedItem,index) =>{
    //text represented after item is selected
    //if data array is an array of objects then return selectedItem
  }}
  rowTextForSelection={(item,index) =>{
    //text represented for each item in dropdown
    //if data array is an array of objects then return item.property to represent item in dropdown return item
  }}
</SelectDropdown>   


  
  return(
    <SelectList 
        setSelected={(val) => setSelected(val)} 
        genre={genreArray} 
        /> 
  );
};




const Stack = createNativeStackNavigator();

{/* <View style={{ flex: 1 , backgroundColor:'brown'}}>
      <View>
        <Image/>
      </View>
      <View style={styles.buttonChange}>
        <Button title= 'History'
        onPress={() => {navigation.navigate('history')}}/>
      </View>
      <View style={styles.buttonChange}>
        <Button title = 'Genres'
        onPress={() => {navigation.navigate('Genres')}}/>
      </View>
    </View> */}

const styles = StyleSheet.create({
   welcomeText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
   },
   first: {
    jestifyContent: 'center',
    resizeMode: 'cover',
    width: 'auto',
    height: 500,
   },
   small: {
    justifyContent: 'center',

    resizeMode: "cover",
    alignItems: 'center',
    width: 400,
    height: 300,
   },
   welcomePage: {
    color: 'white',
    fontWeight: '',
    fontSize: 40,
    textAlign: 'center',
   },
   countText:{
   color: 'purple',
   textAlign: 'center',
   fontSize: 40,
   fontWeight: 'bold',
   },
   countContainer:{
 color: 'purple',
 fontWeight: 'bold',
 fontSize: 40,
 textAlign: 'center',
   },
   button:{
    color: 'black',
    fontSize: 50,
    width: 800,
    height: 50,
    justifyContent: 'center',
   },
   input:{
    fontSize: 50,
    color: 'purple'
   },
   nameQuestion: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
   },
   nameEntry:{
   color: 'black',
   fontWeight: 'bold',
   fontSize: 28,
   textAlign: 'center',
   },
   firstOne: {
    justifyContent: 'center',
    resizeMode: "cover",
    alignItems: 'center',
    width: 'auto',
    height: 400,
     },

   mainPicture: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    height: 400,
     },

   horisontalLayout: {
    flexDirection: 'row',
    marginTop: 30
   },
  
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  buttonChange: {
    color: 'white',
    width: 600,
    height: 59,
    justifyContent: 'center',
  },
});


export default App;

