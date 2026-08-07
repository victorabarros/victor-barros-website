import Head from "next/head"
import React, { useEffect, useState } from "react"
import { Image, StyleSheet, View } from "react-native"
import { Footer } from "../../components/footer"
import { NoiseBackground } from "../../components/noiseBackground"
import { TrackingPixel } from "../../components/trackingPixel"

const SERENITY_GIF_URLS = [
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYm9xMnc3N3BnMTk3aGs4ZWVkZGxieDFkaGp2enRwMmx5azZycHZyeiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ORdLCdjmBHtte/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYm9xMnc3N3BnMTk3aGs4ZWVkZGxieDFkaGp2enRwMmx5azZycHZyeiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/OnZM1DxiB6xAA/giphy.gif",
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
        <meta property="og:image" content={gifUrl} />
        <meta property="og:image:type" content="image/gif" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="400" />
        <meta property="og:type" content="website" />

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Serenity now" />
        <meta name="twitter:description" content="Serenity now" />
        <meta name="twitter:image" content={gifUrl} />
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
