import Head from "next/head"
import React, { useState } from "react"
import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import { Footer } from "../../components/footer"
import { NoiseBackground } from "../../components/noiseBackground"
import { TrackingPixel } from "../../components/trackingPixel"
import { theme } from "../../public/styles"

const BASE_URL = "https://victor.barros.engineer"

const GIFS = [
  {
    path: "+1",
    gif: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmJoeGkyZWcwanhsbGN1MG5icGo5dHBiZTJqZXdpNTd3bGU1c2p1ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1ZkMDj88mQ1rO/giphy.gif",
  },
  {
    path: "bye",
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDFtYjl0eHc1Y2hoa2ZrNm5nOTV2MHIzcHhpMjlrZHZtcXM4NzVnbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/kaBU6pgv0OsPHz2yxy/giphy.gif",
  },
  {
    path: "chili",
    gif: "https://media.giphy.com/media/SZQBPO4NqHkh6wmdXk/giphy.gif",
  },
  {
    path: "clap",
    gif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjN2bDMxMG83dTN1eWc4cDF6enU4eHVkdWZvNGc5azl3Z2dibTlpNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/S6qkS0ETvel6EZat45/giphy.gif",
  },
  {
    path: "dance",
    gif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3NwM3Z2ang3a2d1bjF4NTk2ejI2c2V5NzZoeXMxdTl4dmliNmYyZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QIAR3t18ZQLXa/giphy.gif",
  },
  {
    path: "fireball",
    gif: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYm9raHl0NWRyOHFveGo2YXN6cG91bXZkdHJpcjZtYWE5YmJsOHZsZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7Xov9qZ44Mq0qkCN9Q/giphy.gif",
  },
  {
    path: "get-well",
    gif: "https://media1.tenor.com/m/CF8YSyvBioIAAAAC/elaine-benes-get-well-soon.gif",
  },
  {
    path: "happy-friday",
    gif: "https://media1.tenor.com/m/ONUKiRYfKw0AAAAd/renan-choque-de-cultura.gif",
  },
  {
    path: "oh-yeah",
    gif: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXppdm51enlxYXNvdnMyMHR3eTdjN3ZnejI5ZWt6MTVwMjJ5aDAxOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gK5BJB51L556g/giphy.gif",
  },
  {
    path: "phew",
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGQzY3ppbXdzOHpsMWhpMjdwMHB6bWlzcnEyejBpMnFyaDdsOGp2ZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o7TKuylrX8kT7XhVS/giphy.gif",
  },
  {
    path: "rock",
    gif: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzg5NGFjZXIwbmk5bDBoemR6YXZvcDJrYWhxYWFnMmhqYnF0NWZmeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/62lF7PPNddey4/giphy.gif",
  },
  {
    path: "serenity",
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYm9xMnc3N3BnMTk3aGs4ZWVkZGxieDFkaGp2enRwMmx5azZycHZyeiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ORdLCdjmBHtte/giphy.gif",
  },
  {
    path: "shocked",
    gif: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDEzcXd4bTd4bG1heHZ1OWZneG0wdmcyY3BoZ3NqN3l5MzRqbXV6MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ie4fEHT4krdDO/giphy.gif",
  },
  {
    path: "top",
    gif: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXZkdTZhYjQzaTY3eWR4dXQ0YTRxcmlnZmFreHowcm8xZnh5eGpvdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RrywH6gONvKpUTkLcl/giphy.gif",
  },
  {
    path: "waist-time",
    gif: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTVwcG92N3kxZ2VudWJibmE0ZnhxazducTJlZzQ1ZjViZndsNHpsMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TvTR3wEyyqJpK/giphy.gif",
  },
  {
    path: "what-just-happen",
    gif: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnFmcWl3MnE5bjdjaGFwMzZlYndobmJta3Y1NG1sYzNjYmVxNXFzMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/u1kThWInmtcDsQ6fGm/giphy.gif",
  },
  {
    path: "you",
    gif: "https://media.giphy.com/media/yBwcx562kZ2FWlYb2A/giphy.gif",
  },
]

function GifTile({ path, gif, copied, onCopy }) {
  return (
    <Pressable
      onPress={() => onCopy(path)}
      style={({ pressed, hovered }) => [
        styles.tile,
        (pressed || hovered) && styles.tileActive,
      ]}
    >
      <Image
        resizeMode="cover"
        source={{ uri: gif }}
        style={styles.gif}
      />
      <Text style={styles.path}>/{path}</Text>
      {copied && <Text style={styles.copied}>Copied!</Text>}
    </Pressable>
  )
}

export default function GifIndexPage() {
  const [copiedPath, setCopiedPath] = useState(null)

  const copyUrl = async (path) => {
    const url = `${BASE_URL}/${path}`
    try {
      await navigator.clipboard.writeText(url)
      setCopiedPath(path)
      setTimeout(() => setCopiedPath((current) => (current === path ? null : current)), 1500)
    } catch {
      // ignore clipboard failures
    }
  }

  return (
    <>
      <Head>
        <title>GIFs</title>
        <meta name="description" content="GIF routes — click to copy the URL" />
      </Head>
      <View style={styles.root}>
        <TrackingPixel />
        <NoiseBackground />
        <Text style={styles.title}>GIFs</Text>
        <Text style={styles.subtitle}>Click a GIF to copy its URL</Text>
        <View style={styles.grid}>
          {GIFS.map((item) => (
            <GifTile
              key={item.path}
              path={item.path}
              gif={item.gif}
              copied={copiedPath === item.path}
              onCopy={copyUrl}
            />
          ))}
        </View>
        <Footer />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgb(24, 26, 27)",
    paddingHorizontal: 16,
    paddingVertical: 24,
    minHeight: "100vh",
  },
  title: {
    color: theme.orange,
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 4,
  },
  subtitle: {
    color: theme.gray,
    fontSize: 14,
    marginBottom: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  tile: {
    width: 220,
    cursor: "pointer",
  },
  tileActive: {
    opacity: 0.85,
  },
  gif: {
    width: "100%",
    height: 160,
    backgroundColor: "rgb(36, 38, 40)",
  },
  path: {
    color: theme.gray,
    fontSize: 13,
    marginTop: 6,
  },
  copied: {
    color: theme.orange,
    fontSize: 12,
    marginTop: 2,
  },
})
