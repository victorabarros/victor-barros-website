import React from "react"
import { Image, StyleSheet, View } from "react-native"
import { Footer } from "../../components/footer"
import { NoiseBackground } from "../../components/noiseBackground"
import { TrackingPixel } from "../../components/trackingPixel"

export default function SextouPage() {
  return (
    <View style={styles.root}>
      <TrackingPixel />
      <NoiseBackground />
      <Image
        resizeMode="contain"
        source={{
          uri: "https://media1.tenor.com/m/ONUKiRYfKw0AAAAd/renan-choque-de-cultura.gif",
        }}
        style={{
          height: 500,
        }}
      />

      <Footer />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgb(24, 26, 27)",
    paddingHorizontal: 10,
    paddingVertical: 20,
    minHeight: "100vh",
  },
})
