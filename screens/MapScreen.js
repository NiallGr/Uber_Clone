import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import Map from '../components/Map';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';
import MapView from 'react-native-maps';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const MapScreen = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return (
    <View>
      
    <TouchableOpacity
    onPress={() => navigation.navigate("HomeScreen")}
    style={tw`bg-gray-100 z-50 absolute left-4 top-16 p-3 rounded-full shadow-lg`}>
      <Icon name="menu" />

    </TouchableOpacity>

      <View style={tw`h-2/5`}>
        <Map/>
      </View>

      <View style={tw`h-3/5`}>
        <Stack.Navigator>
          <Stack.Screen
                name="NavigateCard"
                component={NavigateCard}
                options= {{
                        headerShown: false,
                }}
          />
           <Stack.Screen
                name="RideOptionsCard"
                component={RideOptionsCard}
                options= {{
                        headerShown: false,
                }}
          />

        </Stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})