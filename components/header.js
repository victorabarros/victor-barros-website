import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { HorizontalLine } from "./horizontalLine";
import { theme, icons } from "../styles";

export const Header = () => (
  <>
    <Text style={styles.headLine}>Victor Barros</Text>
    <Text style={styles.title}>Software Cypherpunk Freedom</Text>
    <HorizontalLine />
  </>
);

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
});
