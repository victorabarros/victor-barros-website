import Head from "next/head"
import React from "react"
import { Image, StyleSheet, View } from "react-native"
import { Footer } from "../../components/footer"
import { NoiseBackground } from "../../components/noiseBackground"
import { TrackingPixel } from "../../components/trackingPixel"
import { gifToJpg } from "../../components/gifPreview"

const BYE_GIF_URL = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDFtYjl0eHc1Y2hoa2ZrNm5nOTV2MHIzcHhpMjlrZHZtcXM4NzVnbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/kaBU6pgv0OsPHz2yxy/giphy.gif"

export default function ByePage() {
  return (
    <>
      <Head>
        <title>Bye! 👋</title>
        <meta name="description" content="Bye! 👋" />

        {/* Open Graph meta tags for social media sharing */}
        <meta property="og:title" content="Bye! 👋" />
        <meta property="og:description" content="Bye! 👋" />
        <meta property="og:url" content="https://victor.barros.engineer/bye" />
        <meta property="og:image" content={gifToJpg(BYE_GIF_URL)} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="400" />
        <meta property="og:type" content="website" />

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bye! 👋" />
        <meta name="twitter:description" content="Bye! 👋" />
        <meta name="twitter:image" content={BYE_GIF_URL} />
      </Head>
      <View style={styles.root}>
        <TrackingPixel />
        <NoiseBackground />
      <Image
        resizeMode="contain"
        source={{uri: BYE_GIF_URL}}
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
