import Head from "next/head"
import React from "react"
import { Image, StyleSheet, View } from "react-native"
import { Footer } from "../../components/footer"
import { NoiseBackground } from "../../components/noiseBackground"
import { TrackingPixel } from "../../components/trackingPixel"

const DANCE_GIF_URL = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3NwM3Z2ang3a2d1bjF4NTk2ejI2c2V5NzZoeXMxdTl4dmliNmYyZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QIAR3t18ZQLXa/giphy.gif"

export default function DancePage() {
  return (
    <>
      <Head>
        <title>Dance! 💃</title>
        <meta name="description" content="Dancing 💃" />

        {/* Basic SEO */}
        {/* <link rel="canonical" href="https://victor.barros.engineer/dance" /> */}

        {/* Open Graph meta tags for social media sharing */}
        <meta property="og:title" content="Dance! 💃" />
        <meta property="og:description" content="Dancing 💃" />
        <meta property="og:url" content="https://victor.barros.engineer/dance" />
        <meta property="og:image" content={DANCE_GIF_URL} />
        {/* <meta property="og:image:secure_url" content={DANCE_GIF_URL} /> */}
        <meta property="og:image:type" content="image/gif" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="400" />
        <meta property="og:type" content="website" />
        {/* <meta property="og:site_name" content="victor.barros.engineer" /> */}

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dance! 💃" />
        <meta name="twitter:description" content="Dancing 💃" />
        <meta name="twitter:image" content={DANCE_GIF_URL} />
      </Head>
      <View style={styles.root}>
        <TrackingPixel />
        <NoiseBackground />
      <Image
        resizeMode="contain"
        source={{uri: DANCE_GIF_URL}}
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
