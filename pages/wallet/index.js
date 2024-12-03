import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Clipboard,
  Pressable,
} from "react-native";
import { theme } from "../../public/styles";
import { HorizontalLine } from "../../components/horizontalLine";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";

const LIGHTNING_WALLET_ADDRESS =
  "lnbc1pn56z0gpp5gwtwu4d3uwqptlnh72zpxafyrem05qksaukmpjspazm3r6nwt2jqdqqcqzzgxqyz5vqrzjqwnvuc0u4txn35cafc7w94gxvq5p3cu9dd95f7hlrh0fvs46wpvhd24scjm9era3nvqqqqryqqqqthqqpysp5prkcr2jhefn49q3u3q7hjuyumpf4uagxen2jumex9frjmmm0nwzs9qrsgqswk7kpnzx3jy4m6msfrzglxrlpz40at7manzm5ew6nfj50ezg6x4d2ugp3h0hcly5sj0efj5rudy3v7805qyrappqmwa5qgru7x7t3gqg4jryp";

const WALLET_QR_CODE =
  "https://raw.githubusercontent.com/victorabarros/victorabarros/master/assets/lightning_wallet.png";

function Button(props) {
  const { title, ...other } = props;
  return (
    <Pressable {...other} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}

export default function WalletPage() {
  return (
    <View style={styles.root}>
      <Header />

      <View style={styles.section}>
        <Text style={styles.title}>Buy me a coffee</Text>

        <Pressable
          onPress={() => {
            window.open("https://www.buymeacoffee.com/victorbarros", "_blank");
          }}
        >
          <Image
            resizeMode="contain"
            source={{
              uri: "https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png",
            }}
            style={{
              height: 60,
            }}
          />
        </Pressable>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Lightning Wallet</Text>

        <Image
          resizeMode="contain"
          source={{
            uri: WALLET_QR_CODE,
          }}
          style={{
            height: 300,
          }}
        />
        <View style={styles.buttonBox}>
          <Button
            onPress={() => {
              Clipboard.setString(LIGHTNING_WALLET_ADDRESS);
            }}
            title="Copy address"
          />
        </View>
      </View>

      <HorizontalLine />

      <Footer />
    </View>
  );
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
  button: {
    alignSelf: "center",
    backgroundColor: "lightblue",
    borderRadius: 10,
    padding: 10,
    margin: 25,
    marginBottom: 0,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 15,
  },
});
