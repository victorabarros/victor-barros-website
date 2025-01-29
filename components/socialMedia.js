import { theme, icons } from "../public/styles"
import { StyleSheet, Image } from "react-native"
import { Link } from "./link"

export const SocialMedia = ({ id, url, icon, size = 55 }) => (
  <Link href={url}>
    <Image
      style={[styles.socialMediasImage, { width: size, height: size }]}
      source={icons[icon].svg}
    />
  </Link>
)

const styles = StyleSheet.create({
  socialMediasImage: {
    margin: 10,
    width: 55,
    height: 55,
  },
  socialMedias: {
    flexDirection: "column",
  },
})
