import Head from "next/head"
import React from "react"
import { Image, StyleSheet, View } from "react-native"
import { Footer } from "../../components/footer"
import { NoiseBackground } from "../../components/noiseBackground"
import { TrackingPixel } from "../../components/trackingPixel"

const PLUS_ONE_GIF_URL = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmJoeGkyZWcwanhsbGN1MG5icGo5dHBiZTJqZXdpNTd3bGU1c2p1ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1ZkMDj88mQ1rO/giphy.gif"

export default function PlusOnePage() {
  return (
    <>
      <Head>
        <title>+1! 👍</title>
        <meta name="description" content="Thumbs Up 👍" />

        {/* Basic SEO */}
        {/* <link rel="canonical" href="https://victor.barros.engineer/+1" /> */}

        {/* Open Graph meta tags for social media sharing */}
        <meta property="og:title" content="+1! 👍" />
        <meta property="og:description" content="Thumbs Up 👍" />
        <meta property="og:url" content="https://victor.barros.engineer/+1" />
        <meta property="og:image" content={PLUS_ONE_GIF_URL} />
        {/* <meta property="og:image:secure_url" content={PLUS_ONE_GIF_URL} /> */}
        <meta property="og:image:type" content="image/gif" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="400" />
        <meta property="og:type" content="website" />
        {/* <meta property="og:site_name" content="victor.barros.engineer" /> */}

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="+1! 👍" />
        <meta name="twitter:description" content="Thumbs Up 👍" />
        <meta name="twitter:image" content={PLUS_ONE_GIF_URL} />
      </Head>
      <View style={styles.root}>
        <TrackingPixel />
        <NoiseBackground />
      <Image
        resizeMode="contain"
        source={{uri: PLUS_ONE_GIF_URL}}
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
