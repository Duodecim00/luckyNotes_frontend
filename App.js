import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, SingUp, Welcome, Main, Group, Favorite, Trash,User,Create,DestroyAcount } from "./screem";


import COLORS from "./constants/colors";


const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="main">
        <Stack.Screen
          name="welcome"
          component={Welcome}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="singUp"
          component={SingUp}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="main"
          component={Main}
          options={{
            headerShown: false,
          }}
        />
        
        <Stack.Screen 
        name="group" 
        component={Group}           
        options={{
            headerShown: false,
          }}/>

        <Stack.Screen 
        name="favorite" 
        component={Favorite}           
        options={{
            headerShown: false,
          }}/>

      <Stack.Screen 
        name="trash" 
        component={Trash}           
        options={{
            headerShown: false,
          }}/>

        <Stack.Screen
          name="create"
          component={Create}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="user"
          component={User}
          options={{
            headerShown: false,
          }}
        />
            <Stack.Screen
          name="destroyacount"
          component={DestroyAcount}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
          






    </NavigationContainer>
  );
};

