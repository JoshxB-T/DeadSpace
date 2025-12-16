import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function SettingsScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#E0E0E0', dark: '#2D2D2D' }}
      headerImage={
        <Image
          source={require('@/assets/images/ds1.jpg')}
          style={styles.reactLogo}
        />
      }>
    <ThemedText type="title">Settings</ThemedText>
    <ThemedView style={styles.stepContainer}>
      <ThemedText type="subtitle">Hello, there.</ThemedText>
    </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
    container: {
      color: '#888',
      fontSize: 17,
      textAlign: 'center',
    },
      reactLogo: {
      height: 500,
      width: 445,
      bottom: 0,
      left: 0,
      justifyContent: 'center',
      alignItems: 'center',
  },

});