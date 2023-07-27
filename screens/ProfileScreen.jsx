import React from "react";
import { Image, Text, ScrollView, View, StyleSheet } from "react-native";
import { ImageBackgroundComponent } from "../components/ImageBackgroundComponent";
import { TouchableOpacity } from "react-native-gesture-handler";
import Post from "../components/Post";
import { LogOutButton } from "../components/LogOutButton";
import { IconClose } from "../assets/icons/icons";

const ProfileScreen = () => {
  return (
    <ImageBackgroundComponent>
      <View style={styles.profileScreenContainer}>
        <View style={{ position: "absolute", top: 22, right: 0 }}>
          <LogOutButton />
        </View>
        <View style={styles.userPhoto}>
          <Image
            style={{ borderRadius: 16 }}
            source={require("../assets/images/user.jpg")}
          />
          <TouchableOpacity style={styles.closeButtonWrapper}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: 25,
                height: 25,
                borderRadius: 50,
                backgroundColor: "#fff",
                borderColor: "#BDBDBD",
                borderWidth: 1,


              }}
            >
              <IconClose />
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Natali Romanova</Text>

        <ScrollView>
          <Post
            source={require("../assets/images/forest.jpg")}
            title={"Ліс"}
            comments={8}
            likes={153}
            country={"Ukraine"}
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
        </ScrollView>
      </View>
    </ImageBackgroundComponent>
  );
};

const styles = StyleSheet.create({
  profileScreenContainer: {
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#fff",
    width: "100%",
    height: "80%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  userPhoto: {
    width: 120,
    height: 120,
    borderRadius: 16,
    position: "absolute",
    top: -60,
    left: "50%",
    transform: [{ translateX: -50 }],
  },
  closeButtonWrapper: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: -50,
    right: -12.5,
  },
  title: {
    marginTop: 92,
    marginBottom: 32,
    fontSize: 30,
    fontWeight: 600,
    color: "#212121",
    textAlign: "center",
  },
});

export default ProfileScreen;
