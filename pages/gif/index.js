import fs from "fs"
import path from "path"
import Head from "next/head"
import React, { useState } from "react"
import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import { Footer } from "../../components/footer"
import { NoiseBackground } from "../../components/noiseBackground"
import { TrackingPixel } from "../../components/trackingPixel"
import { theme } from "../../public/styles"

const BASE_URL = "https://victor.barros.engineer"

function discoverGifRoutes() {
  const pagesDir = path.join(process.cwd(), "pages")
  const entries = fs.readdirSync(pagesDir, { withFileTypes: true })

  return entries
    .filter((entry) => entry.isDirectory() && entry.name !== "gif")
    .flatMap((entry) => {
      const indexPath = path.join(pagesDir, entry.name, "index.js")
      if (!fs.existsSync(indexPath)) return []

      const content = fs.readFileSync(indexPath, "utf8")
      // Meme GIF pages all import gifToJpg; skips redirects, termgif, etc.
      if (!content.includes("gifToJpg")) return []

      const match = content.match(/https?:\/\/[^"'`\s]+\.gif/)
      if (!match) return []

      return [{ path: entry.name, gif: match[0] }]
    })
    .sort((a, b) => a.path.localeCompare(b.path))
}

function GifTile({ path: routePath, gif, copied, onCopy }) {
  return (
    <Pressable
      onPress={() => onCopy(routePath)}
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
      <Text style={styles.path}>/{routePath}</Text>
      {copied && <Text style={styles.copied}>Copied!</Text>}
    </Pressable>
  )
}

export default function GifIndexPage({ gifs }) {
  const [copiedPath, setCopiedPath] = useState(null)

  const copyUrl = async (routePath) => {
    const url = `${BASE_URL}/${routePath}`
    try {
      await navigator.clipboard.writeText(url)
      setCopiedPath(routePath)
      setTimeout(() => setCopiedPath((current) => (current === routePath ? null : current)), 1500)
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
          {gifs.map((item) => (
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

export async function getStaticProps() {
  return {
    props: {
      gifs: discoverGifRoutes(),
    },
  }
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
