import { TouchableOpacity } from "react-native";
import * as React from "react";
import { LogoutIcon } from "./icons/icons";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";

export const LogOutButton = () => {
  const navigator = useNavigation();
  const handleTurnBack = () => {
    navigator.navigate("RegistrationScreen");
  };
  return (
    <TouchableOpacity style={styles.button} onPress={handleTurnBack}>
      <LogoutIcon/>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginRight: 10,
  },
});
