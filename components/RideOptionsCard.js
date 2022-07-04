import { StyleSheet, Text, SafeAreaView, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from "tailwind-react-native-classnames"
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

const RideOptionsCard = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity onPress={() => 
          navigation.navigate("NavigateCard")
        }   
          style={tw`absolute top-3 left-5 p-3 rounded-full z-50`}
          >
            <Icon name='chevron-left' type='fontawesome' />
        </TouchableOpacity>
      </View>
      <Text style={tw`text-center py-5 text-xl`}>Select a ride</Text>
    </SafeAreaView>
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})