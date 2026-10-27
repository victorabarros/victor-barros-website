import Head from "next/head"
import React from "react"
import { Image, StyleSheet, View } from "react-native"
import { Footer } from "../../components/footer"
import { NoiseBackground } from "../../components/noiseBackground"
import { TrackingPixel } from "../../components/trackingPixel"

const HALLOWEEN_GIF_URL = "/assets/halloween.gif"

export default function HalloweenPage() {
  return (
    <>
      <Head>
        <title>Happy Halloween 🎃</title>
        <meta name="description" content="Happy Halloween 🎃" />

        {/* Open Graph meta tags for social media sharing */}
        <meta property="og:title" content="Happy Halloween 🎃" />
        <meta property="og:description" content="Happy Halloween 🎃" />
        <meta
          property="og:url"
          content="https://victor.barros.engineer/halloween"
        />
        <meta
          property="og:image"
          content={`https://victor.barros.engineer${HALLOWEEN_GIF_URL}`}
        />
        <meta property="og:image:type" content="image/gif" />
        <meta property="og:image:width" content="339" />
        <meta property="og:image:height" content="480" />
        <meta property="og:type" content="website" />

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Happy Halloween 🎃" />
        <meta name="twitter:description" content="Happy Halloween 🎃" />
        <meta
          name="twitter:image"
          content={`https://victor.barros.engineer${HALLOWEEN_GIF_URL}`}
        />
      </Head>
      <View style={styles.root}>
        <TrackingPixel />
        <NoiseBackground />
        <Image
          accessibilityLabel="Halloween animated GIF"
          resizeMode="contain"
          source={{ uri: HALLOWEEN_GIF_URL }}
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
