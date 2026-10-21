import Head from "next/head"
import React from "react"
import { Image, StyleSheet, View } from "react-native"
import { Footer } from "../../components/footer"
import { NoiseBackground } from "../../components/noiseBackground"
import { TrackingPixel } from "../../components/trackingPixel"

const YEAH_ERIN_GIF_URL = "/assets/yeah-erin.gif"

export default function YeahErinPage() {
  return (
    <>
      <Head>
        <title>Yeah Erin! 🙌</title>
        <meta name="description" content="Yeah Erin 🙌" />

        {/* Open Graph meta tags for social media sharing */}
        <meta property="og:title" content="Yeah Erin! 🙌" />
        <meta property="og:description" content="Yeah Erin 🙌" />
        <meta property="og:url" content="https://victor.barros.engineer/yeah-erin" />
        <meta property="og:image" content={`https://victor.barros.engineer${YEAH_ERIN_GIF_URL}`} />
        <meta property="og:image:type" content="image/gif" />
        <meta property="og:image:width" content="480" />
        <meta property="og:image:height" content="400" />
        <meta property="og:type" content="website" />

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Yeah Erin! 🙌" />
        <meta name="twitter:description" content="Yeah Erin 🙌" />
        <meta name="twitter:image" content={`https://victor.barros.engineer${YEAH_ERIN_GIF_URL}`} />
      </Head>
      <View style={styles.root}>
        <TrackingPixel />
        <NoiseBackground />
      <Image
        resizeMode="contain"
        source={{uri: YEAH_ERIN_GIF_URL}}
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
