import React from 'react'
import {
  View,
  Text,
  Image
} from 'react-native'
import IllustrationImage from '../../assets/illustration.png'
import { styles } from './styles'
import { ButtonIcon } from '../../components/ButtonIcon'

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
          Conecte-se {'\n'}
          e organize suas {'\n'}
          suas jogatinas {'\n'}
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {'\n'}
          Favoritos com seus amigos
        </Text>

        <ButtonIcon
          activeOpacity={0.7}
          title='Entrar com Discord'
        />
      </View>
    </View>
  )
}