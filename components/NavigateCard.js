import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView  } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY} from "@env"
import { useDispatch } from 'react-redux'
import { setDesination } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/native'
import NavFavourites from './NavFavourites'
import { Icon } from 'react-native-elements'

const NavigateCard = () => {

  const dispact = useDispatch();
  const navigation = useNavigation();


  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-4 text-lg`}>Good Morning, Niall!</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
            <View>
                <GooglePlacesAutocomplete 
                placeholder='Where to?'
                nearbyPlacesAPI='GooglePlaceSearch'
                fetchDetails={true}
                returnKeyType={"search"}
                query={{
                    key: GOOGLE_MAPS_APIKEY,
                    language: "en"
                }}
                minLength={2}
                onPress={(data, details = null) => {
                 dispact(setDesination({
                   location: details.geometry.location,
                   description: data.description,
                 }))
                 navigation.navigate('RideOptionsCard')
                }}
                enablePoweredByContainer={false}
                debounce={400}
                styles={toInputBoxStyles}

                />
            </View>
                <NavFavourites />
 
      </View>

      <View 
      style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}
      >
      <TouchableOpacity 
      onPress={() => navigation.navigate("RideOptionsCard")}
        style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}>
          <Icon name="car" type='font-awesome' color="white" size={16} />
          <Text style={tw`text-white text-center`}>Rides</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}>
          <Icon name="fast-food-outline" type='ionicon' color="black" black={16} />
          <Text style={tw` text-center`}>Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 16,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  }
})