import {
    View,
    Text,
    TextInput,
    ScrollView,
    TouchableOpacity,
    Pressable,
    FlatList,
    Image,
    StyleSheet
  } from "react-native";
  import { React, useEffect, useRef, useState } from "react";
  import axios from "axios";
  import AsyncStorage from "@react-native-async-storage/async-storage";
  import { SelectList } from 'react-native-dropdown-select-list';
import COLORS from "../constants/colors";
  
    
  const  GroupSelec= () => {

    const [selected, setSelected] = useState(null);
    const [data,setData] = useState([]);

    useEffect(() => {      
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      // Store Values in Temporary Array
      let newArray = response.data.map((item) => {
        return {key: item.id, value: item.name}
      })
      //Set Data Variable
      setData(newArray)
    })

    },[])

    return(
 
            <SelectList placeholder="Select Folders" searchPlaceholder="this are the folders"
            inputStyles={{color:COLORS.terceary}} boxStyles={{backgroundColor:COLORS.contras1,borderColor:COLORS.terceary,borderWidth:1}} 
            dropdownStyles={{backgroundColor:COLORS.secundary}}
            dropdownItemStyles={{backgroundColor:COLORS.terceary, borderWidth:1,borderColor:COLORS.secundary}}
            dropdownTextStyles={{backgroundColor:COLORS.gray}}
            data={data} onSelect={() => alert(selected)} setSelected={setSelected}  />

    )

  };
  
  export default GroupSelec;

const styles = StyleSheet.create({
    abanico:{
        backgroundColor: "white",
        position: "absolute",
        top: 40,
        width: "100%",
        zIndex: 999,
    },

})