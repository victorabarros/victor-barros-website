import { StyleSheet, Text, View, Image } from "react-native";
import { theme, icons } from "../styles";

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
  });

  return (
    <View style={styles.container}>
      <Text style={styles.line}>{"===".repeat(100)}</Text>
    </View>
  );
};
