import { TouchableOpacity } from "react-native";
import * as React from "react";
import { IconLeftArrow } from "./icons/icons";
import { useNavigation } from "@react-navigation/native";

export const GoBackButton = () => {
  const navigator = useNavigation();
  const handleTurnBack = () => {
    navigator.goBack();
  };
  return (
    <TouchableOpacity onPress={handleTurnBack}>
      <IconLeftArrow style={{ marginLeft: 16 }} />
    </TouchableOpacity>
  );
};
