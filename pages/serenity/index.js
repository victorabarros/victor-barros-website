import Head from "next/head"
import React, { useEffect, useState } from "react"
import { Image, StyleSheet, View } from "react-native"
import { Footer } from "../../components/footer"
import { NoiseBackground } from "../../components/noiseBackground"
import { TrackingPixel } from "../../components/trackingPixel"

const SERENITY_GIF_URLS = [
  // "/assets/serenity.gif",
  "/assets/serenity-2.gif",
]

export default function SerenityPage() {
  const [gifUrl, setGifUrl] = useState(SERENITY_GIF_URLS[0])

  useEffect(() => {
    setGifUrl(SERENITY_GIF_URLS[Math.floor(Math.random() * SERENITY_GIF_URLS.length)])
  }, [])

  return (
    <>
      <Head>
        <title>Serenity now</title>
        <meta name="description" content="Serenity now" />

        {/* Open Graph meta tags for social media sharing */}
        <meta property="og:title" content="Serenity now" />
        <meta property="og:description" content="Serenity now" />
        <meta property="og:url" content="https://victor.barros.engineer/serenity" />
        <meta property="og:image" content={`https://victor.barros.engineer${gifUrl}`} />
        <meta property="og:image:type" content="image/gif" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="400" />
        <meta property="og:type" content="website" />

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Serenity now" />
        <meta name="twitter:description" content="Serenity now" />
        <meta name="twitter:image" content={`https://victor.barros.engineer${gifUrl}`} />
      </Head>
      <View style={styles.root}>
        <TrackingPixel />
        <NoiseBackground />
      <Image
        resizeMode="contain"
        source={{uri: gifUrl}}
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
