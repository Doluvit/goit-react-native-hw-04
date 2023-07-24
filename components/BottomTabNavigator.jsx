import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PostsScreen } from "../screens/PostsScreen";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { GridIcon, PlusIcon, UserIcon } from "../components/icons/icons";
import { LogOutButton } from "./LogOutButton";
import CreatePostsScreen from "../screens/CreatePostsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { GoBackButton } from "./GoBackButton";

const Tabs = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tabs.Navigator
      initialRouteName="Posts"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Posts") {
            return (
              <View
                style={focused ? styles.focusedIconWrapper : styles.iconWrapper}
              >
                <GridIcon fill={focused ? "white" : "black"} />
              </View>
            );
          } else if (route.name === "CreatePosts") {
            return (
              <View
                style={focused ? styles.focusedIconWrapper : styles.iconWrapper}
              >
                <PlusIcon fill={focused ? "white" : "black"} />
              </View>
            );
          } else if (route.name === "Profile") {
            return (
              <View
                style={focused ? styles.focusedIconWrapper : styles.iconWrapper}
              >
                <UserIcon fill={"white"} />
              </View>
            );
          }
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 83,
          paddingTop: 9,
          paddingLeft: 82,
          paddingRight: 82,
          justifyContent: "center",
          alignItems: "center",
        },
        headerShown: true,
        headerStyle: {
          borderBottomWidth: 1,
        },
      })}
    >
      <Tabs.Screen
        name={"Posts"}
        component={PostsScreen}
        options={{
          title: "Публікації",
          headerRight: () => <LogOutButton />,
          headerStyle: {
            borderBottomWidth: 1,
          },
        }}
      />
      <Tabs.Screen
        name={"CreatePosts"}
        component={CreatePostsScreen}
        options={{
          title: "Створити публікацію",
          tabBarStyle: { display: "none" },
          headerLeft: () => <GoBackButton />,
          headerStyle: {
            borderBottomWidth: 1,
          },
        }}
      />
      <Tabs.Screen
        name={"Profile"}
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default BottomTabNavigator;
