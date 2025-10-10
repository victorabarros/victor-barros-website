import Head from "next/head"
import React from "react"
import { Image, StyleSheet, View } from "react-native"
import { Footer } from "../../components/footer"
import { NoiseBackground } from "../../components/noiseBackground"
import { TrackingPixel } from "../../components/trackingPixel"

const CHILI_GIF_URL = "https://giphy.com/gifs/theoffice-the-office-tv-casual-friday-SZQBPO4NqHkh6wmdXk"

export default function ChiliPage() {
  return (
    <>
      <Head>
        <title>Chili! 🌶️</title>
        <meta name="description" content="Casual Friday Chili 🌶️" />

        {/* Basic SEO */}
        {/* <link rel="canonical" href="https://victor.barros.engineer/chili" /> */}

        {/* Open Graph meta tags for social media sharing */}
        <meta property="og:title" content="Chili! 🌶️" />
        <meta property="og:description" content="Casual Friday Chili 🌶️" />
        <meta property="og:url" content="https://victor.barros.engineer/chili" />
        <meta property="og:image" content={CHILI_GIF_URL} />
        {/* <meta property="og:image:secure_url" content={CHILI_GIF_URL} /> */}
        <meta property="og:image:type" content="image/gif" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="400" />
        <meta property="og:type" content="website" />
        {/* <meta property="og:site_name" content="victor.barros.engineer" /> */}

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Chili! 🌶️" />
        <meta name="twitter:description" content="Casual Friday Chili 🌶️" />
        <meta name="twitter:image" content={CHILI_GIF_URL} />
      </Head>
      <View style={styles.root}>
        <TrackingPixel />
        <NoiseBackground />
      <Image
        resizeMode="contain"
        source={{uri: CHILI_GIF_URL}}
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
