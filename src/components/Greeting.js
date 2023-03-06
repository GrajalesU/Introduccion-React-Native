import { View, Text } from 'react-native'
import React from 'react'

export default function Greeting({name = "User"}) {
  return (
    <View>
      <Text>Hello {name}</Text>
    </View>
  )
}