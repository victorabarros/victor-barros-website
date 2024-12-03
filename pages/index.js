import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import NextLink from "next/link";
import { theme, icons } from "../styles";
import {
  SIDE_PROJECTS,
  ARTICLES,
  OPEN_SOURCE_CONTRIBUTIONS,
  CERTIFICATIONS,
  PROFESSIONAL_ASSOCIATIONS,
  SOCIAL_MEDIAS,
} from "../data";
const Link = (props) => {
  return (
    <NextLink href={props.href}>
      <Text
        {...props}
        role="link"
        style={[
          {
            color: "#1977f2",
          },
          props.style,
        ]}
      />
    </NextLink>
  );
}

const Item = ({ id, label, url }) => (
  <Link href={url} style={styles.itemTextContainer}>
    <Text style={styles.itemText}>{label}</Text>
  </Link>
);
const HorizontalLine = () => {
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
}

const SocialMedias = ({ id, url, icon }) => (
  <Link href={url}>
    <Image style={styles.socialMediasImage} source={icons[icon].svg} />
  </Link>
);

export default function IndexPage() {
  return (
    <View style={styles.root}>
      <Text style={styles.headLine}>Victor Barros</Text>
      <Text style={styles.title}>Software Cypherpunl Freedom</Text>
      <HorizontalLine />

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
          Currently working at
          <Link href={"https://superhuman.com/"}>
            <Text style={{ color: theme.orange }}> Superhuman</Text>
          </Link>
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Side Projects</Text>

        {SIDE_PROJECTS.map((item) => (
          <Item key={item.id - item.label} {...item} />
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Articles</Text>
        {ARTICLES.map((item) => (
          <Item key={item.id - item.label} {...item} />
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Open Source Contributions</Text>
        {OPEN_SOURCE_CONTRIBUTIONS.map((item) => (
          <Item key={item.id - item.label} {...item} />
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Certifications</Text>
        {CERTIFICATIONS.map((item) => (
          <Item key={item.id - item.label} {...item} />
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Professional Membership</Text>
        {PROFESSIONAL_ASSOCIATIONS.map((item) => (
          <Item key={item.id - item.label} {...item} />
        ))}
      </View>

      <HorizontalLine />

      <View style={styles.socialMediasContainer}>
        {SOCIAL_MEDIAS.map((item) => (
          <SocialMedias key={item.id - item.label} {...item} />
        ))}
      </View>

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
    maxWidth: 700,
    justifyContent: "space-between",
  },
  socialMediasImage: {
    margin: 10,
    width: 55,
    height: 55,
  },
  footerContainer: { alignSelf: "center", marginTop: 30 },
  footer: {
    color: theme.gray,
    fontSize: 18,
    fontFamily: "Times New Roman",
  },
});
