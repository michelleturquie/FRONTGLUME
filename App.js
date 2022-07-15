import * as React from "react";
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./pages/login";
import Registro from "./pages/Registro";
import Home from "./pages/Home";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Registro" component={Registro} />
                    <Stack.Screen name="Home" component={Home} />
                </Stack.Navigator>
            </NavigationContainer> 
    );
}
    