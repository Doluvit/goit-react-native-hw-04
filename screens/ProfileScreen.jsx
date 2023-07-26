import React from "react";
import { SvgXml } from "react-native-svg";
import { StyleSheet } from "react-native";
import { ImageBackgroundComponent } from "../components/ImageBackgroundComponent";
import { ScrollView, View } from "react-native";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { IconClose, iconSvg } from "../components/icons/icons";
import { Image } from "react-native";
import Post from "../components/Post";
import { LogOutButton } from "../components/LogOutButton";


const ProfileScreen = () => {
  return (
    <ImageBackgroundComponent>
      <View
        style={{
          paddingLeft: 16,
          paddingRight: 16,
          backgroundColor: "#fff",
          width: "100%",
          height: "80%",
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        }}
      >
        <View style={{ position: "absolute", top: 22, right: 0 }}>
          <LogOutButton />
        </View>
        <View
          style={{
            backgroundColor: "grey",
            width: 120,
            height: 120,
            borderRadius: 16,
            position: "absolute",
            top: -60,
            left: "50%",
            transform: [{ translateX: -50 }],
          }}
        >
          <Image
            style={{ borderRadius: 16 }}
            source={require("../assets/images/user.jpg")}
          />
          <IconClose />
        </View>
        {/* <View
          style={{
            position: "absolute",
            top: -60,
            left: "50%",
            transform: [{ translateX: -50 }],
            width: 120,
            height: 120,
            backgroundColor: "#F6F6F6",
          }}
        >
          <Image source={require("../assets/images/user.jpg")} />
          <TouchableOpacity
            style={{
              position: "absolute",
              bottom: 12.5,
              right: -12.5,
            }}
          >
            <SvgXml xml={iconSvg} width={25} height={25} />
          </TouchableOpacity>
        </View> */}
        <Text
          style={{
            marginTop: 92,
            marginBottom: 32,
            fontSize: 30,
            fontWeight: 600,
            color: "#212121",
            textAlign: "center",
          }}
        >
          Natali Romanova
        </Text>

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
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default ProfileScreen;
