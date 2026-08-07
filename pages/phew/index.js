import Head from "next/head"
import React from "react"
import { Image, StyleSheet, View } from "react-native"
import { Footer } from "../../components/footer"
import { NoiseBackground } from "../../components/noiseBackground"
import { TrackingPixel } from "../../components/trackingPixel"
import { gifToJpg } from "../../components/gifPreview"

const PHEW_GIF_URL = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGQzY3ppbXdzOHpsMWhpMjdwMHB6bWlzcnEyejBpMnFyaDdsOGp2ZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o7TKuylrX8kT7XhVS/giphy.gif"

export default function PhewPage() {
  return (
    <>
      <Head>
        <title>Phew</title>
        <meta name="description" content="Phew" />

        {/* Open Graph meta tags for social media sharing */}
        <meta property="og:title" content="Phew" />
        <meta property="og:description" content="Phew" />
        <meta property="og:url" content="https://victor.barros.engineer/phew" />
        <meta property="og:image" content={gifToJpg(PHEW_GIF_URL)} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="400" />
        <meta property="og:type" content="website" />

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Phew" />
        <meta name="twitter:description" content="Phew" />
        <meta name="twitter:image" content={PHEW_GIF_URL} />
      </Head>
      <View style={styles.root}>
        <TrackingPixel />
        <NoiseBackground />
      <Image
        resizeMode="contain"
        source={{uri: PHEW_GIF_URL}}
        style={{
          height: 500,
        }}
      />

        <Footer />
      </View>
    </>
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
