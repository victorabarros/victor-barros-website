import Head from "next/head"
import React from "react"
import { Image, StyleSheet, View } from "react-native"
import { Footer } from "../../components/footer"
import { NoiseBackground } from "../../components/noiseBackground"
import { TrackingPixel } from "../../components/trackingPixel"

const WAIST_TIME_GIF_URL = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTVwcG92N3kxZ2VudWJibmE0ZnhxazducTJlZzQ1ZjViZndsNHpsMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TvTR3wEyyqJpK/giphy.gif"

export default function WaistTimePage() {
  return (
    <>
      <Head>
        <title>Waist Time! ⏰</title>
        <meta name="description" content="Waist Time ⏰" />

        {/* Basic SEO */}
        {/* <link rel="canonical" href="https://victor.barros.engineer/waist-time" /> */}

        {/* Open Graph meta tags for social media sharing */}
        <meta property="og:title" content="Waist Time! ⏰" />
        <meta property="og:description" content="Waist Time ⏰" />
        <meta property="og:url" content="https://victor.barros.engineer/waist-time" />
        <meta property="og:image" content={WAIST_TIME_GIF_URL} />
        {/* <meta property="og:image:secure_url" content={WAIST_TIME_GIF_URL} /> */}
        <meta property="og:image:type" content="image/gif" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="400" />
        <meta property="og:type" content="website" />
        {/* <meta property="og:site_name" content="victor.barros.engineer" /> */}

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Waist Time! ⏰" />
        <meta name="twitter:description" content="Waist Time ⏰" />
        <meta name="twitter:image" content={WAIST_TIME_GIF_URL} />
      </Head>
      <View style={styles.root}>
        <TrackingPixel />
        <NoiseBackground />
      <Image
        resizeMode="contain"
        source={{uri: WAIST_TIME_GIF_URL}}
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
