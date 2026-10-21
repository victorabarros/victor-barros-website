import Head from "next/head"
import React from "react"
import { Image, StyleSheet, View } from "react-native"
import { Footer } from "../../components/footer"
import { NoiseBackground } from "../../components/noiseBackground"
import { TrackingPixel } from "../../components/trackingPixel"

const DANCE_OFFICE_SEINFIELD_GIF_URL = "/assets/dance-office-seinfield.gif"

export default function DanceOfficeSeinfieldPage() {
  return (
    <>
      <Head>
        <title>Dance! 💃</title>
        <meta name="description" content="Dance 💃" />

        {/* Open Graph meta tags for social media sharing */}
        <meta property="og:title" content="Dance! 💃" />
        <meta property="og:description" content="Dance 💃" />
        <meta property="og:url" content="https://victor.barros.engineer/dance-office-seinfield" />
        <meta property="og:image" content={`https://victor.barros.engineer${DANCE_OFFICE_SEINFIELD_GIF_URL}`} />
        <meta property="og:image:type" content="image/gif" />
        <meta property="og:image:width" content="360" />
        <meta property="og:image:height" content="360" />
        <meta property="og:type" content="website" />

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dance! 💃" />
        <meta name="twitter:description" content="Dance 💃" />
        <meta name="twitter:image" content={`https://victor.barros.engineer${DANCE_OFFICE_SEINFIELD_GIF_URL}`} />
      </Head>
      <View style={styles.root}>
        <TrackingPixel />
        <NoiseBackground />
      <Image
        resizeMode="contain"
        source={{uri: DANCE_OFFICE_SEINFIELD_GIF_URL}}
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
