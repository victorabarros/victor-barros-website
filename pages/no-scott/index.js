import Head from "next/head"
import React from "react"
import { Image, StyleSheet, View } from "react-native"
import { Footer } from "../../components/footer"
import { NoiseBackground } from "../../components/noiseBackground"
import { TrackingPixel } from "../../components/trackingPixel"

const NO_SCOTT_GIF_URL = "/assets/no-scott.gif"

export default function NoScottPage() {
  return (
    <>
      <Head>
        <title>No Scott! 🙅‍♂️</title>
        <meta name="description" content="No Scott 🙅‍♂️" />

        {/* Open Graph meta tags for social media sharing */}
        <meta property="og:title" content="No Scott! 🙅‍♂️" />
        <meta property="og:description" content="No Scott 🙅‍♂️" />
        <meta property="og:url" content="https://victor.barros.engineer/no-scott" />
        <meta property="og:image" content={`https://victor.barros.engineer${NO_SCOTT_GIF_URL}`} />
        <meta property="og:image:type" content="image/gif" />
        <meta property="og:image:width" content="240" />
        <meta property="og:image:height" content="196" />
        <meta property="og:type" content="website" />

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="No Scott! 🙅‍♂️" />
        <meta name="twitter:description" content="No Scott 🙅‍♂️" />
        <meta name="twitter:image" content={`https://victor.barros.engineer${NO_SCOTT_GIF_URL}`} />
      </Head>
      <View style={styles.root}>
        <TrackingPixel />
        <NoiseBackground />
      <Image
        resizeMode="contain"
        source={{uri: NO_SCOTT_GIF_URL}}
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
