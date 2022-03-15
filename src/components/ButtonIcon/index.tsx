import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'
import { styles } from './styles'
import DiscordImage from '../../assets/discord.png'

export function ButtonIcon () {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordImage} style={styles.icon} />
      </View>

      <Text style={styles.title}>
        Entrar com Discord
      </ Text>
    </ TouchableOpacity>
  )
}