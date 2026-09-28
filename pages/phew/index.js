import Head from "next/head"
import React from "react"
import { Image, StyleSheet, View } from "react-native"
import { Footer } from "../../components/footer"
import { NoiseBackground } from "../../components/noiseBackground"
import { TrackingPixel } from "../../components/trackingPixel"

const PHEW_GIF_URL = "/assets/phew.gif"

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
        <meta property="og:image" content={`https://victor.barros.engineer${PHEW_GIF_URL}`} />
        <meta property="og:image:type" content="image/gif" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="400" />
        <meta property="og:type" content="website" />

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Phew" />
        <meta name="twitter:description" content="Phew" />
        <meta name="twitter:image" content={`https://victor.barros.engineer${PHEW_GIF_URL}`} />
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
