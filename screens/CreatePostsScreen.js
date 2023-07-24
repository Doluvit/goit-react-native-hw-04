import { useState } from "react";
import { Text } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { View, Keyboard, StyleSheet } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";



const CreatePostsScreen = () => {
  const [isOpenKeyboard, setIsOpenKeyboard] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{
          flex: 1,
        }}
      >
        <View
          style={[
            styles.container,
            {
              justifyContent: "flex-end",
              paddingBottom: isOpenKeyboard ? 55 : 34,
              paddingLeft: 16,
              paddingRight: 16,
              paddingTop: 32,
            },
          ]}
        >
          <View>
            <View style={styles.photoContainer}>
              <View
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  backgroundColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Hello</Text>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
  },
  photoContainer: {
    with: "100%",
    height: 240,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    marginBottom: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CreatePostsScreen;
