import Head from "next/head"
import React from "react"
import { Image, StyleSheet, View } from "react-native"
import { Footer } from "../../components/footer"
import { NoiseBackground } from "../../components/noiseBackground"
import { TrackingPixel } from "../../components/trackingPixel"

const RENAN_DRINKING_GIF_URL = "https://media1.tenor.com/m/ONUKiRYfKw0AAAAd/renan-choque-de-cultura.gif"

export default function SextouPage() {
  return (
    <>
      <Head>
        <title>Happy Friday! 🍺</title>
        <meta name="description" content="It's Friday. I have no idea how we made it here, but here we are. 🍺" />
        
        {/* Open Graph meta tags for social media sharing */}
        <meta property="og:title" content="Happy Friday! 🍺" />
        <meta property="og:description" content="It's Friday. I have no idea how we made it here, but here we are. 🍺" />
        <meta property="og:url" content="https://victorabarros.com/happy-friday" />
        <meta property="og:image" content={RENAN_DRINKING_GIF_URL} />
        <meta property="og:image:type" content="image/gif" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="400" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Happy Friday! 🍺" />
        <meta name="twitter:description" content="It's Friday. I have no idea how we made it here, but here we are. 🍺" />
        <meta name="twitter:image" content={RENAN_DRINKING_GIF_URL} />
      </Head>
      <View style={styles.root}>
        <TrackingPixel />
        <NoiseBackground />
      <Image
        resizeMode="contain"
        source={{          uri: RENAN_DRINKING_GIF_URL,        }}
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
