import Head from "next/head"
import React from "react"
import { Image, StyleSheet, View } from "react-native"
import { Footer } from "../../components/footer"
import { NoiseBackground } from "../../components/noiseBackground"
import { TrackingPixel } from "../../components/trackingPixel"

const VA_FA_NAPOLE_GIF_URL = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGd0NWUzZ3dweWE2dHJrMWZnb2ttZXR2dGgxYjk3eTlhZXkxY20zMCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/beT2t2973H0bu/giphy.gif"

export default function VaFaNapolePage() {
  return (
    <>
      <Head>
        <title>Va fa Napole</title>
        <meta name="description" content="Va fa Napole" />

        {/* Open Graph meta tags for social media sharing */}
        <meta property="og:title" content="Va fa Napole" />
        <meta property="og:description" content="Va fa Napole" />
        <meta property="og:url" content="https://victor.barros.engineer/va-fa-napole" />
        <meta property="og:image" content={VA_FA_NAPOLE_GIF_URL} />
        <meta property="og:image:type" content="image/gif" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="400" />
        <meta property="og:type" content="website" />

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Va fa Napole" />
        <meta name="twitter:description" content="Va fa Napole" />
        <meta name="twitter:image" content={VA_FA_NAPOLE_GIF_URL} />
      </Head>
      <View style={styles.root}>
        <TrackingPixel />
        <NoiseBackground />
      <Image
        resizeMode="contain"
        source={{uri: VA_FA_NAPOLE_GIF_URL}}
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
