import Head from "next/head"
import React, { useState } from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"
import { Footer } from "../../components/footer"
import { Header } from "../../components/header"
import { HorizontalLine } from "../../components/horizontalLine"
import { Link } from "../../components/link"
import { NoiseBackground } from "../../components/noiseBackground"
import { TrackingPixel } from "../../components/trackingPixel"
import { theme } from "../../public/styles"

const SOURCE_URL = "https://stackbit.me/tutorial-stackbit-1248/"
const SEED_RECOVERY_FILE = "/stackbit-1248/SEED-RECOVERY.pdf"
const BIP39_FILE = "/stackbit-1248/bip-0039-english.txt"

const CONTENT = {
  pt: {
    label: "PT",
    title: "Tutorial STACKBIT 1248",
    intro: "Passo a passo de como gravar a sua Stackbit 1248.",
    steps: [
      "Em primeiro lugar, tenha certeza de que você não está sob os olhares de nenhum tipo de câmera ou microfone (notebook, smartphone, câmeras de segurança, etc.). Anote suas 12 ou 24 palavras em um papel.",
      "Acesse a lista de palavras do BIP39 (disponível para download abaixo). Procure por cada uma das suas palavras e anote o número correspondente ao lado de cada uma, ex.: LOUNGE - 1059. Não utilize a ferramenta de buscar/localizar do navegador; role a página até encontrar a palavra.",
      "Cada palavra tem 4 quadros que correspondem a 4 números: 0-2, 0-9, 0-9 e 0-9. Com essa combinação você consegue formar qualquer número entre os 2048 possíveis da lista. Você pode marcar 1 número, a soma de 2 ou 3 números, ou nenhum número para o 0 (zero). Ex.: 1 - 0 - 5 - 9 formam a palavra nº 1059 (LOUNGE).",
      "Marque com uma caneta permanente ou lápis a sua carteira, confira as palavras e então bata com o punção utilizando um martelo. Não aplique força excessiva à pancada. Remova o adesivo, queime-o e armazene a sua Stackbit 1248 em um local seguro. Se for enterrar a carteira, considere embrulhá-la em plástico.",
    ],
    ps: "PS.: Para recuperar a sua seed após remover o adesivo, você pode desenhar as linhas com uma canetinha ou baixar o guia de recuperação abaixo. Imprima em folha A4 e siga as instruções.",
    downloadsTitle: "Downloads",
    pdfButton: "Baixar SEED RECOVERY (PDF)",
    bip39Button: "Baixar lista BIP39 (english.txt)",
    credit: "Conteúdo inspirado no tutorial original da Stackbit",
  },
  en: {
    label: "EN",
    title: "STACKBIT 1248 Tutorial",
    intro: "Step-by-step guide on how to engrave your Stackbit 1248.",
    steps: [
      "First, make sure you are not being watched by any kind of camera or microphone (laptop, smartphone, security cameras, etc.). Write your 12 or 24 words on a piece of paper.",
      "Open the BIP39 word list (available for download below). Look up each of your words and note the corresponding number next to each one, e.g. LOUNGE - 1059. Do not use your browser's find/search tool; scroll through the page until you find the word.",
      "Each word has 4 boxes that correspond to 4 digits: 0-2, 0-9, 0-9 and 0-9. With this combination you can form any number among the 2048 possible words in the list. You can mark 1 number, the sum of 2 or 3 numbers, or no number for 0 (zero). E.g. 1 - 0 - 5 - 9 form word no. 1059 (LOUNGE).",
      "Mark your wallet with a permanent pen or pencil, double-check the words, then strike the punch with a hammer. Do not apply excessive force. Remove the sticker, burn it, and store your Stackbit 1248 in a safe place. If you plan to bury the wallet, consider wrapping it in plastic.",
    ],
    ps: "PS.: To recover your seed after removing the sticker, you can draw the lines with a marker or download the recovery guide below. Print it on A4 paper and follow the instructions.",
    downloadsTitle: "Downloads",
    pdfButton: "Download SEED RECOVERY (PDF)",
    bip39Button: "Download BIP39 list (english.txt)",
    credit: "Content inspired by the original Stackbit tutorial",
  },
}

function download(url) {
  const a = document.createElement("a")
  a.href = url
  a.download = url.split("/").pop()
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

function Button(props) {
  const { title, ...other } = props
  return (
    <Pressable {...other} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  )
}

export default function Stackbit1248Page() {
  const [lang, setLang] = useState("pt")
  const t = CONTENT[lang]

  return (
    <>
      <Head>
        <title>{t.title}</title>
        <meta name="description" content={t.intro} />
        <meta property="og:title" content={t.title} />
        <meta property="og:description" content={t.intro} />
        <meta property="og:type" content="website" />
      </Head>
      <View style={styles.root}>
        <TrackingPixel />
        <NoiseBackground />
        <Header />

        <View style={styles.langToggle}>
          {Object.keys(CONTENT).map((key) => (
            <Pressable key={key} onPress={() => setLang(key)}>
              <Text
                style={[
                  styles.langOption,
                  lang === key && styles.langOptionActive,
                ]}
              >
                {CONTENT[key].label}
              </Text>
            </Pressable>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>{t.title}</Text>
          <Text style={styles.intro}>{t.intro}</Text>
        </View>

        <View style={styles.section}>
          {t.steps.map((step, index) => (
            <View key={index} style={styles.step}>
              <Text style={styles.stepNumber}>{index + 1}.</Text>
              <Text style={styles.stepText}>{step}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.ps}>{t.ps}</Text>
        </View>

        <HorizontalLine />

        <View style={styles.section}>
          <Text style={styles.title}>{t.downloadsTitle}</Text>
          <View style={styles.buttonBox}>
            <Button
              onPress={() => download(SEED_RECOVERY_FILE)}
              title={t.pdfButton}
            />
            <Button
              onPress={() => download(BIP39_FILE)}
              title={t.bip39Button}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.credit}>
            {t.credit}
            {": "}
            <Link href={SOURCE_URL}>
              <Text style={styles.creditLink}>{SOURCE_URL}</Text>
            </Link>
          </Text>
        </View>

        <Footer />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgb(24, 26, 27)",
    paddingHorizontal: 30,
    paddingVertical: 50,
    minHeight: "100vh",
    maxWidth: 900,
    width: "100%",
    alignSelf: "center",
  },
  langToggle: {
    flexDirection: "row",
    alignSelf: "flex-end",
    marginVertical: 10,
  },
  langOption: {
    color: theme.gray,
    fontSize: 18,
    fontFamily: "Times New Roman",
    fontWeight: "bold",
    paddingHorizontal: 8,
  },
  langOptionActive: {
    color: theme.orange,
    textDecorationLine: "underline",
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
  intro: {
    fontSize: 20,
    color: theme.gray,
    fontFamily: "Times New Roman",
  },
  step: {
    flexDirection: "row",
    marginVertical: 8,
  },
  stepNumber: {
    color: theme.orange,
    fontSize: 20,
    fontFamily: "Times New Roman",
    fontWeight: "bold",
    width: 28,
  },
  stepText: {
    flex: 1,
    color: theme.gray,
    fontSize: 20,
    fontFamily: "Times New Roman",
    lineHeight: 28,
  },
  ps: {
    color: theme.gray,
    fontSize: 18,
    fontFamily: "Times New Roman",
    fontStyle: "italic",
  },
  buttonBox: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    backgroundColor: "lightblue",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    marginLeft: 0,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 15,
  },
  credit: {
    color: theme.gray,
    fontSize: 16,
    fontFamily: "Times New Roman",
  },
  creditLink: {
    fontSize: 16,
  },
})
