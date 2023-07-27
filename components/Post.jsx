import { View, Image, StyleSheet, Text } from "react-native";
import {
  IconComment,
  IconLike,
  IconLocalPosition,
} from "../assets/icons/icons";

const Post = ({ source, title, comments, likes, country }) => {
  return (
    <View style={{ marginBottom: 32 }}>
      <View style={{ marginBottom: 8 }}>
        <Image
          source={source}
          resizeMode={"cover"}
          style={{ width: "100%", height: 240, borderRadius: 8 }}
        />
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row", gap: 24 }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
            <IconComment />
            <Text
              style={[
                styles.text,
                {
                  color: "#BDBDBD",
                },
              ]}
            >
              {comments}
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
            <IconLike />
            <Text
              style={[
                styles.text,
                {
                  color: "#BDBDBD",
                },
              ]}
            >
              {likes}
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
          <IconLocalPosition />
          <Text
            style={[
              styles.text,
              {
                color: "#212121",
                textDecorationLine: "underline",
              },
            ]}
          >
            {country}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  text: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 18.75,
  },
  title: {
    marginBottom: 8,
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 18.75,
    color: "#212121",
  },
});
