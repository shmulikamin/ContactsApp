
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, DetailsScreen } from '../screens'
const Stack = createStackNavigator();

  
export const Main = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen
                name="Details" 
                component={DetailsScreen}
                options={({ route }) => ({ title: `${route.params.item.name.last} ${route.params.item.name.first}`})}
            />
        </Stack.Navigator>
    )
   
}