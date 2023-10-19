import {
    View,
    Text,
    TextInput,
    ScrollView,
    TouchableOpacity,
    Pressable,
    FlatList,
    Image,
  } from "react-native";
  import  { React,useEffect, useRef, useState } from "react";
  import { SafeAreaView } from "react-native-safe-area-context";
  import COLORS from "../constants/colors";
  import { Ionicons } from "@expo/vector-icons";
  import Button from "../components/Button";
  import { NavigationContainer } from '@react-navigation/native';
  import { createNativeStackNavigator } from '@react-navigation/native-stack';
  import { ItemNote, oneNote} from "../constants/ItemNote";
  import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
  
  import BarButton from "../components/BarButton";
  
  

const Create = ({ navigation }) => {

        
    return( 
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary,  }}> 
        <View style={{ backgroundColor: COLORS.primary,justifyContent: "space-between" ,flexDirection: "row",alignItems: "center",flexDirection: "row",height:50, borderBottomColor:COLORS.secundary, borderBottomWidth: 1,}}>
            


            <Ionicons style={{marginVertical:5}}
            name="add-circle" size={40}                
            color={COLORS.primary}/>

  

            <Ionicons style={{marginVertical:5}}
            name="add-circle" size={40}                
            color={COLORS.primary}/>

            <TouchableOpacity >
            <Ionicons style={{marginVertical:5}}
            name="checkmark-circle" size={40}                
            color={COLORS.secundary}/>
            </TouchableOpacity>
          
          </View>
          
      
</SafeAreaView>
        );
       

}

export default Create ;