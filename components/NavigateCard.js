import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY} from "@env"
import { useDispatch } from 'react-redux'
import { setDesination } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/native'

const NavigateCard = () => {

  const dispact = useDispatch();
  const navigation = useNavigation();


  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-2 text-xl`}>Good Morning, Niall!</Text>
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
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  }
})