import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { theme } from "../public/styles"
import { Link } from "./link"

export const Footer = () => (
  <View style={styles.root}>
    <Text style={styles.text}>
      © Victor Almeida Barros - Built with
      <Link href="https://necolas.github.io/react-native-web">
        {" React Native for Web"}
      </Link>
    </Text>
  </View>
)

const styles = StyleSheet.create({
  root: {
    alignSelf: "center",
    marginTop: 30,
  },
  text: {
    color: theme.gray,
    fontSize: 18,
    fontFamily: "Times New Roman",
  },
})
