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





}