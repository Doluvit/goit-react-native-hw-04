import { TouchableOpacity } from "react-native";
import * as React from "react";
import { ArrowLeft } from "./icons/icons";
import { useNavigation } from "@react-navigation/native";

export const GoBackButton = () => {
  const navigator = useNavigation();
  const handleTurnBack = () => {
    navigator.goBack();
  };
  return (
    <TouchableOpacity onPress={handleTurnBack}>
      <ArrowLeft style={{ marginLeft: 16 }} />
    </TouchableOpacity>
  );
};
