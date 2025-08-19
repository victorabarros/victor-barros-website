import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Footer } from "../../components/footer"
import { Header } from "../../components/header"
import { HorizontalLine } from "../../components/horizontalLine"
import { NoiseBackground } from "../../components/noiseBackground"
import { TrackingPixel } from "../../components/trackingPixel"
import { theme } from "../../public/styles"

export default function TerrenoPage() {
  return (
    <View style={styles.root}>
      <TrackingPixel />
      <NoiseBackground />
      <Header />

      <View style={styles.section}>
        <Text style={styles.title}>Terreno</Text>
        
        <View style={styles.mapContainer}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!4v1755618727849!6m8!1m7!1suhP4UfbSbNMpxMY1hq3wHA!2m2!1d-21.64562949232941!2d-41.7486657061572!3f211.3532939777832!4f11.832418006811082!5f0.4000000000000002" 
            height="100%" 
            style={{border:0}} 
            allowFullScreen="yes" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
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
  title: {
    fontSize: 25,
    color: theme.gray,
    fontFamily: "Times New Roman",
    fontWeight: "bold",
    marginVertical: 10,
  },
  mapContainer: {
    alignSelf: "center",
    marginVertical: 20,
    width: "90%",
    aspectRatio: 16/9,
    maxWidth:1600,
  },
})
