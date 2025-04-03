import Image from "next/image"
import React from "react"
import { StyleSheet, View } from "react-native"
import { Footer } from "../../components/footer"
import { Header } from "../../components/header"
import { HorizontalLine } from "../../components/horizontalLine"
import { NoiseBackground } from "../../components/noiseBackground"
import { SocialMedia } from "../../components/socialMedia"
import { TrackingPixel } from "../../components/trackingPixel"

/*
commands=[
  "Set FontSize 27",
  "Set TypingSpeed 80ms",
  "Type \"Hi there, this is TermGIFforge! \"",
  "Sleep 1s",
  "Set TypingSpeed 0ms",
  "Space 4",
  "Set TypingSpeed 80ms",
  "Type \"A powerful API that transforms your terminal commands into captivating GIF animations.\"",
  "Sleep 2s",
  "Type \" Perfect for creating engaging \"",
  "Type \"demos\"",
  "Sleep 1s",
  "Backspace 5",
  "Sleep 100ms",
  "Type \"documentation\"",
  "Sleep 1s",
  "Backspace 13",
  "Sleep 100ms",
  "Type \"presentations\"",
  "Sleep 2s",
  "Type \".\"",
  "Type \" Check bellow the link to the codebase with more instructions.\"",
  "Sleep 5s"]
*/

const TERM_GIF_EXAMPLE = `http://terminalgifapi.com/api/v1/gif?commands=%5B%20%20%20%22Set%20FontSize%2027%22%2C%20%20%20%22Set%20TypingSpeed%2080ms%22%2C%20%20%20%22Type%20%5C%22Hi%20there%2C%20this%20is%20TermGIFforge%21%20%5C%22%22%2C%20%20%20%22Sleep%201s%22%2C%20%20%20%22Set%20TypingSpeed%200ms%22%2C%20%20%20%22Space%204%22%2C%20%20%20%22Set%20TypingSpeed%2080ms%22%2C%20%20%20%22Type%20%5C%22A%20powerful%20API%20that%20transforms%20your%20terminal%20commands%20into%20captivating%20GIF%20animations.%5C%22%22%2C%20%20%20%22Sleep%202s%22%2C%20%20%20%22Type%20%5C%22%20Perfect%20for%20creating%20engaging%20%5C%22%22%2C%20%20%20%22Type%20%5C%22demos%5C%22%22%2C%20%20%20%22Sleep%201s%22%2C%20%20%20%22Backspace%205%22%2C%20%20%20%22Sleep%20100ms%22%2C%20%20%20%22Type%20%5C%22documentation%5C%22%22%2C%20%20%20%22Sleep%201s%22%2C%20%20%20%22Backspace%2013%22%2C%20%20%20%22Sleep%20100ms%22%2C%20%20%20%22Type%20%5C%22presentations%5C%22%22%2C%20%20%20%22Sleep%202s%22%2C%20%20%20%22Type%20%5C%22.%5C%22%22%2C%20%20%20%22Type%20%5C%22%20Check%20bellow%20the%20link%20to%20the%20codebase%20with%20more%20instructions.%5C%22%22%2C%20%20%20%22Sleep%205s%22%5D`

export default function TermGIFPage() {
  return (
    <View style={styles.root}>
      <TrackingPixel />
      <NoiseBackground />
      <Header />

      <View style={styles.section}>
        <View
          style={{
            alignSelf: "center",
          }}
        >
          <Image
            alt="termGIFforge example"
            src={TERM_GIF_EXAMPLE}
            width={600}
            height={300}
          />
        </View>
      </View>

      <View style={styles.section}>
        <View
          style={{
            alignSelf: "center",
          }}
        >
          <SocialMedia
            {...{
              icon: "github",
              url: "https://github.com/victorabarros/TermGIFforge",
              size: 35,
            }}
          />
        </View>
      </View>

      <HorizontalLine />

      <Footer />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgb(24, 26, 27)",
    paddingHorizontal: 30,
    paddingVertical: 50,
    minHeight: "100vh",
  },
  section: {
    marginVertical: 15,
  },
})
