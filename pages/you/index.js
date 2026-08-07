import Head from "next/head"
import React from "react"
import { Image, StyleSheet, View } from "react-native"
import { Footer } from "../../components/footer"
import { NoiseBackground } from "../../components/noiseBackground"
import { TrackingPixel } from "../../components/trackingPixel"

const YOU_GIF_URL = "https://media.giphy.com/media/yBwcx562kZ2FWlYb2A/giphy.gif"

export default function YouPage() {
  return (
    <>
      <Head>
        <title>You! 👆</title>
        <meta name="description" content="You got it 👆" />

        {/* Basic SEO */}
        {/* <link rel="canonical" href="https://victor.barros.engineer/you" /> */}

        {/* Open Graph meta tags for social media sharing */}
        <meta property="og:title" content="You! 👆" />
        <meta property="og:description" content="You got it 👆" />
        <meta property="og:url" content="https://victor.barros.engineer/you" />
        <meta property="og:image" content={YOU_GIF_URL} />
        <meta property="og:image:type" content="image/gif" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="400" />
        <meta property="og:type" content="website" />
        {/* <meta property="og:site_name" content="victor.barros.engineer" /> */}

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="You! 👆" />
        <meta name="twitter:description" content="You got it 👆" />
        <meta name="twitter:image" content={YOU_GIF_URL} />
      </Head>
      <View style={styles.root}>
        <TrackingPixel />
        <NoiseBackground />
      <Image
        resizeMode="contain"
        source={{uri: YOU_GIF_URL}}
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
