import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Clipboard,
  TextInput,
  Pressable,
} from "react-native";
import { theme, icons } from "../../styles";
import { Link } from "../../components/link";
import { HorizontalLine } from "../../components/horizontalLine";

const LIGHTNING_WALLET_ADDRESS =
  "lnbc1pn56z0gpp5gwtwu4d3uwqptlnh72zpxafyrem05qksaukmpjspazm3r6nwt2jqdqqcqzzgxqyz5vqrzjqwnvuc0u4txn35cafc7w94gxvq5p3cu9dd95f7hlrh0fvs46wpvhd24scjm9era3nvqqqqryqqqqthqqpysp5prkcr2jhefn49q3u3q7hjuyumpf4uagxen2jumex9frjmmm0nwzs9qrsgqswk7kpnzx3jy4m6msfrzglxrlpz40at7manzm5ew6nfj50ezg6x4d2ugp3h0hcly5sj0efj5rudy3v7805qyrappqmwa5qgru7x7t3gqg4jryp";

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
      <Text style={styles.headLine}>Victor Barros</Text>
      <Text style={styles.title}>Software Cypherpunk Freedom</Text>
      <HorizontalLine />

      <View style={styles.section}>
        <Text style={styles.title}>Lightning Wallet</Text>

        <Image
          aria-label="React logo"
          resizeMode="contain"
          source={{
            uri: "https://raw.githubusercontent.com/victorabarros/victorabarros/master/assets/lightning_wallet.png",
          }}
          style={{
            height: 250,
          }}
        />
        {/*
        <View style={styles.buttonBox}>
          <Button
            onPress={() => {
              Clipboard.setString(LIGHTNING_WALLET_ADDRESS);
            }}
            title="Copy to clipboard"
          />
        </View> */}

        {/* <Image
          aria-label="React logo"
          resizeMode="contain"
          source={{
            uri: "https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png",
          }}
          style={{
            height: 60,
          }}
        /> */}
      </View>

      <HorizontalLine />

      <View style={styles.footerContainer}>
        <Text style={styles.footer}>
          © Victor Barros - Built with
          <Link href="https://necolas.github.io/react-native-web">
            {" React Native for Web"}
          </Link>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgb(24, 26, 27)",
    paddingHorizontal: 30,
    paddingVertical: 50,
    height: "100vh",
  },
  headLine: {
    color: theme.orange,
    fontSize: 50,
    fontFamily: "Times New Roman",
    fontWeight: "bold",
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
  footerContainer: { alignSelf: "center", marginTop: 30 },
  footer: {
    color: theme.gray,
    fontSize: 18,
    fontFamily: "Times New Roman",
  },
  button: {
    backgroundColor: "lightblue",
    borderRadius: 10,
    paddingBlock: 5,
    paddingInline: 10,
  },
  buttonText: {
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});