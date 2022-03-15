import React from 'react'
import {
  View,
  Text,
  Image
} from 'react-native'
import IllustrationImage from '../../assets/illustration.png'
import { styles } from './styles'

export function SignIn () {
  return (
    <View style={styles.container}>
      <Image
        source={IllustrationImage}
        style={styles.image}
        resizeMode="stretch"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {`\n`}
          suas jogatinas {`\n`}
          facilmente
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          Favoritos com seus amigos
        </Text>
      </View>
    </View>
  )
}