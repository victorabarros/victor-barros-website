import Head from "next/head"
import React from "react"
import { Image, StyleSheet, View } from "react-native"
import { Footer } from "../../components/footer"
import { NoiseBackground } from "../../components/noiseBackground"
import { TrackingPixel } from "../../components/trackingPixel"

export default function SextouPage() {
  return (
    <>
      <Head>
        <title>Happy Friday! 🎉</title>
        <meta name="description" content="Happy Friday! Enjoy this fun GIF to celebrate the end of the week!" />
        
        {/* Open Graph meta tags for social media sharing */}
        <meta property="og:title" content="Happy Friday! 🎉" />
        <meta property="og:description" content="Happy Friday! Enjoy this fun GIF to celebrate the end of the week!" />
        <meta property="og:url" content="https://victorabarros.com/happy-friday" />
        <meta property="og:image" content="https://media1.tenor.com/m/ONUKiRYfKw0AAAAd/renan-choque-de-cultura.gif" />
        <meta property="og:image:type" content="image/gif" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="400" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Happy Friday! 🎉" />
        <meta name="twitter:description" content="Happy Friday! Enjoy this fun GIF to celebrate the end of the week!" />
        <meta name="twitter:image" content="https://media1.tenor.com/m/ONUKiRYfKw0AAAAd/renan-choque-de-cultura.gif" />
      </Head>
      <View style={styles.root}>
        <TrackingPixel />
        <NoiseBackground />
      <Image
        resizeMode="contain"
        source={{
          uri: "https://media1.tenor.com/m/ONUKiRYfKw0AAAAd/renan-choque-de-cultura.gif",
        }}
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
