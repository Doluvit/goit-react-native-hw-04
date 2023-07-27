import { View, ScrollView, Image, Text, StyleSheet } from "react-native";
import Post from "../components/Post";

const PostsScreen = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.userInfoContainer}>
        <View style={styles.userInfo}>
          <Image source={require("../assets/images/user.jpg")} />
          <View style={{ alignItems: "center", justifyContent: "flex-start" }}>
            <Text style={styles.userName}>Natali Romanova</Text>
            <Text style={styles.userEmail}>email@example.com</Text>
          </View>
        </View>
        <Post
          source={require("../assets/images/forest.jpg")}
          title={"Ліс"}
          comments={8}
          likes={153}
          country={"Ivano-Frankivs'k Region, Ukraine"}
        />
        <Post
          source={require("../assets/images/sunset.png")}
          title={"Захід на Чорному морі"}
          comments={3}
          likes={200}
          country={"Ukraine"}
        />
        <Post
          source={require("../assets/images/old_house.png")}
          title={"Старий будиночок у Венеції"}
          comments={50}
          likes={200}
          country={"Italy"}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  userInfoContainer: {
    flex: 1,
    flexDirection: "column",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    backgroundColor: "#fff",
  },
  userInfo: {
    alignItems: "center",
    gap: 8,
    flexDirection: "row",
    marginBottom: 32,
  },
  userName: {
    fontFamily: "Roboto-Medium",
    lineHeight: 15.23,
    fontSize: 13,
  },
  userEmail: {
    fontFamily: "Roboto-Regular",
    lineHeight: 12.89,
    fontSize: 11,
    color: "#212121CC",
  },
});

export default PostsScreen;
