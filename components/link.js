import NextLink from "next/link";
import { Text } from "react-native";

export const Link = (props) => {
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
};
