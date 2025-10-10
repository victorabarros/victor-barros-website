import Head from "next/head"
import React from "react"
import { Image, StyleSheet, View } from "react-native"
import { Footer } from "../../components/footer"
import { NoiseBackground } from "../../components/noiseBackground"
import { TrackingPixel } from "../../components/trackingPixel"

const CLAP_GIF_URL = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjN2bDMxMG83dTN1eWc4cDF6enU4eHVkdWZvNGc5azl3Z2dibTlpNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/S6qkS0ETvel6EZat45/giphy.gif"

export default function ClapPage() {
  return (
    <>
      <Head>
        <title>Clap! 👏</title>
        <meta name="description" content="Clapping 👏" />

        {/* Basic SEO */}
        {/* <link rel="canonical" href="https://victor.barros.engineer/clap" /> */}

        {/* Open Graph meta tags for social media sharing */}
        <meta property="og:title" content="Clap! 👏" />
        <meta property="og:description" content="Clapping 👏" />
        <meta property="og:url" content="https://victor.barros.engineer/clap" />
        <meta property="og:image" content={CLAP_GIF_URL} />
        {/* <meta property="og:image:secure_url" content={CLAP_GIF_URL} /> */}
        <meta property="og:image:type" content="image/gif" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="400" />
        <meta property="og:type" content="website" />
        {/* <meta property="og:site_name" content="victor.barros.engineer" /> */}

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Clap! 👏" />
        <meta name="twitter:description" content="Clapping 👏" />
        <meta name="twitter:image" content={CLAP_GIF_URL} />
      </Head>
      <View style={styles.root}>
        <TrackingPixel />
        <NoiseBackground />
      <Image
        resizeMode="contain"
        source={{uri: CLAP_GIF_URL}}
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
