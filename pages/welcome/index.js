import Head from "next/head"
import React from "react"
import { Image, StyleSheet, View } from "react-native"
import { Footer } from "../../components/footer"
import { NoiseBackground } from "../../components/noiseBackground"
import { TrackingPixel } from "../../components/trackingPixel"

const WELCOME_GIF_URL = "/assets/welcome.gif"

export default function WelcomePage() {
  return (
    <>
      <Head>
        <title>Welcome</title>
        <meta name="description" content="Welcome to the party, pal" />

        {/* Open Graph meta tags for social media sharing */}
        <meta property="og:title" content="Welcome" />
        <meta property="og:description" content="Welcome to the party, pal" />
        <meta property="og:url" content="https://victor.barros.engineer/welcome" />
        <meta property="og:image" content={`https://victor.barros.engineer${WELCOME_GIF_URL}`} />
        <meta property="og:image:type" content="image/gif" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="400" />
        <meta property="og:type" content="website" />

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Welcome" />
        <meta name="twitter:description" content="Welcome to the party, pal" />
        <meta name="twitter:image" content={`https://victor.barros.engineer${WELCOME_GIF_URL}`} />
      </Head>
      <View style={styles.root}>
        <TrackingPixel />
        <NoiseBackground />
      <Image
        resizeMode="contain"
        source={{uri: WELCOME_GIF_URL}}
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
