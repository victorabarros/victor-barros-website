import Head from "next/head"
import React from "react"
import { Image, StyleSheet, View } from "react-native"
import { Footer } from "../../components/footer"
import { NoiseBackground } from "../../components/noiseBackground"
import { TrackingPixel } from "../../components/trackingPixel"

const SHOCKED_GIF_URL = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDEzcXd4bTd4bG1heHZ1OWZneG0wdmcyY3BoZ3NqN3l5MzRqbXV6MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ie4fEHT4krdDO/giphy.gif"

export default function ShockedPage() {
  return (
    <>
      <Head>
        <title>Shocked! 😱</title>
        <meta name="description" content="Shocked 😱" />

        {/* Basic SEO */}
        {/* <link rel="canonical" href="https://victor.barros.engineer/shocked" /> */}

        {/* Open Graph meta tags for social media sharing */}
        <meta property="og:title" content="Shocked! 😱" />
        <meta property="og:description" content="Shocked 😱" />
        <meta property="og:url" content="https://victor.barros.engineer/shocked" />
        <meta property="og:image" content={SHOCKED_GIF_URL} />
        {/* <meta property="og:image:secure_url" content={SHOCKED_GIF_URL} /> */}
        <meta property="og:image:type" content="image/gif" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="400" />
        <meta property="og:type" content="website" />
        {/* <meta property="og:site_name" content="victor.barros.engineer" /> */}

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shocked! 😱" />
        <meta name="twitter:description" content="Shocked 😱" />
        <meta name="twitter:image" content={SHOCKED_GIF_URL} />
      </Head>
      <View style={styles.root}>
        <TrackingPixel />
        <NoiseBackground />
      <Image
        resizeMode="contain"
        source={{uri: SHOCKED_GIF_URL}}
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
