import React from "react"
import { StyleSheet, Text } from "react-native"
import { HorizontalLine } from "./horizontalLine"
import { theme } from "../public/styles"
import { Link } from "../components/link"

export const Header = () => (
  <>
    <Link href={"/"}>
      <Text style={styles.headLine}>Victor Barros</Text>
    </Link>
    <Text style={styles.title}>Software Cypherpunk Freedom</Text>
    <HorizontalLine />
  </>
)

const styles = StyleSheet.create({
  headLine: {
    color: theme.orange,
    fontSize: 50,
    fontFamily: "Times New Roman",
    fontWeight: "bold",
  },
  title: {
    fontSize: 25,
    color: theme.gray,
    fontFamily: "Times New Roman",
    fontWeight: "bold",
    marginVertical: 10,
  },
})
