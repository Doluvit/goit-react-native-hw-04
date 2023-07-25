import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { IconCamera, IconLocalPosition, IconTrashBucket } from "../components/icons/icons";
import { TouchableOpacity } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { Keyboard } from "react-native";
import { KeyboardAvoidingView } from "react-native";

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
        <View style={styles.container}>
          <View
            style={{
              flex: 1,
              width: "100%",
              paddingBottom: isOpenKeyboard ? 55 : 34,
              height: isOpenKeyboard ? 16 : 34,
              paddingTop: 32,
              paddingLeft: 16,
              paddingRight: 16,
            }}
          >
            <View
              style={{
                width: "100%",
                height: 240,
                borderRadius: 15,
                borderBottomWidth: 1,
                borderRightWidth: 1,
                borderLeftWidth: 1,
                borderTopWidth: 1,
                borderColor: "#E8E8E8",
                backgroundColor: "#F6F6F6",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 8,
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  width: 60,
                  height: 60,
                  backgroundColor: "#fff",
                  borderRadius: 50,
                }}
              >
                <IconCamera />
              </View>
            </View>
            <Text
              style={{
                fontSize: 16,
                color: "#BDBDBD",
                marginBottom: 38,
              }}
            >
              Завантажте фото
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Назва..."
              onFocus={() => setIsOpenKeyboard(true)}
              onBlur={() => setIsOpenKeyboard(false)}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 4,
                borderBottomWidth: 2,
                borderColor: "#E8E8E8",
                height: 50,
                marginBottom: 32,
              }}
            >
              <IconLocalPosition />
              <TextInput
                style={{ height: 50 }}
                placeholder="Місцевість..."
                onFocus={() => setIsOpenKeyboard(true)}
                onBlur={() => setIsOpenKeyboard(false)}
              />
            </View>
            <TouchableOpacity
              style={{
                width: "100%",
                backgroundColor: "#F6F6F6",
                paddingBottom: 16,
                paddingTop: 16,
                alignItems: "center",
                borderRadius: 100,
                marginBottom: 120,
              }}
            >
              <Text
                style={{
                  color: "#BDBDBD",
                }}
              >
                Опублікувати
              </Text>
            </TouchableOpacity>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    width: 70,
                    height: 40,
                    backgroundColor: "#F6F6F6",
                    paddingBottom: 8,
                    paddingTop: 8,
                    alignItems: "center",
                    borderRadius: 100,
                  }}
                >
                  <IconTrashBucket />
                </View>
              </TouchableOpacity>
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
    backgroundColor: "#fff",
  },
  input: {
    minWidth: "100%",
    height: 50,
    marginBottom: 10,
    borderBottomWidth: 2,
    borderColor: "#E8E8E8",
  },
});

export default CreatePostsScreen;
