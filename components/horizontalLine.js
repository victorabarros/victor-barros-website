import { StyleSheet, Text, View } from "react-native"
import { theme } from "../public/styles"

export const HorizontalLine = () => {
  const styles = StyleSheet.create({
    container: {
      overflow: "hidden",
      flexDirection: "row",
      marginVertical: 10,
    },
    line: {
      opacity: 0.4,
      color: theme.gray,
    },
  })

  return (
    <View style={styles.container}>
      <Text style={styles.line}>{"===".repeat(100)}</Text>
    </View>
  )
}
