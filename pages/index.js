import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { FlatList } from "react-native-web"
import { Footer } from "../components/footer"
import { Header } from "../components/header"
import { HorizontalLine } from "../components/horizontalLine"
import { Link } from "../components/link"
import { NoiseBackground } from "../components/noiseBackground"
import { SocialMedia } from "../components/socialMedia"
import { TrackingPixel } from "../components/trackingPixel"
import {
  ARTICLES,
  CERTIFICATIONS,
  OPEN_SOURCE_CONTRIBUTIONS,
  SIDE_PROJECTS,
  SOCIAL_MEDIAS
} from "../public/data"
import { theme } from "../public/styles"

const Item = ({ id, label, url }) => (
  <Link href={url} style={styles.itemTextContainer}>
    <Text style={styles.itemText}>{label}</Text>
  </Link>
)

export default function IndexPage() {
  return (
    <View style={styles.root}>
      <TrackingPixel />
      <NoiseBackground />
      <Header />
      <View style={styles.section}>
        <Text style={styles.title}>Bio</Text>
        <Text
          style={[
            styles.itemText,
            {
              marginLeft: 15,
              color: theme.gray,
            },
          ]}
        >
          Currently working with
          <Link href={"https://www.hockeystack.com/"}>
            <Text style={{ color: theme.orange }}> Hockeystack</Text>
          </Link>
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Side Projects</Text>

        <FlatList
          data={SIDE_PROJECTS}
          keyExtractor={(item) => item.label}
          renderItem={({ item }) => <Item {...item} />}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Articles</Text>
        <FlatList
          data={ARTICLES}
          keyExtractor={(item) => item.label}
          renderItem={({ item }) => <Item {...item} />}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Open Source Contributions</Text>
        <FlatList
          data={OPEN_SOURCE_CONTRIBUTIONS}
          keyExtractor={(item) => item.label}
          renderItem={({ item }) => <Item {...item} />}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Certifications</Text>
        <FlatList
          data={CERTIFICATIONS}
          keyExtractor={(item) => item.label}
          renderItem={({ item }) => <Item {...item} />}
        />
      </View>

      {/* <View style={styles.section}>
        <Text style={styles.title}>Professional Membership</Text>
        <FlatList
          data={PROFESSIONAL_ASSOCIATIONS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Item key={item.id - item.label} {...item} />
          )}
        />
      </View> */}

      <HorizontalLine />

      <View style={styles.socialMediasContainer}>
        <FlatList
          style={styles.socialMedias}
          contentContainerStyle={styles.socialMediasContents}
          keyExtractor={(item) => item.icon}
          numColumns={3}
          data={SOCIAL_MEDIAS}
          renderItem={({ item }) => <SocialMedia {...item} />}
        />
      </View>

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
    width: "100%",
    minHeight: "100vh",
    justifyContent: "space-between",
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
  itemTextContainer: {
    marginVertical: 8,
    marginLeft: 15,
    alignSelf: "flex-start",
  },
  itemText: {
    color: theme.orange,
    fontSize: 22,
    fontFamily: "Times New Roman",
  },
  socialMediasContainer: {
    flexDirection: "row",
    alignSelf: "flex-start",
    width: "65%",
    minWidth: 250,
    maxWidth: 700,
    justifyContent: "space-between",
  },
  socialMediasImage: {
    margin: 10,
    width: 55,
    height: 55,
  },
  socialMedias: {
    flexDirection: "column",
  },
  socialMediasContents: {
    flexWrap: "wrap",
  },
})
