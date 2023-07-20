import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [isOpenKeyboard, setIsOpenKeyboard] = useState(false);

  const togglePassword = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const handleFocus = (input) => {
    switch (input) {
      case "email":
        setIsFocusedEmail(true);
        setIsOpenKeyboard(true);
        break;
      case "password":
        setIsFocusedPassword(true);
        setIsOpenKeyboard(true);
        break;
      default:
        break;
    }
  };

  const handleBlur = (input) => {
    switch (input) {
      case "email":
        setIsFocusedEmail(false);
        setIsOpenKeyboard(false);
        break;
      case "password":
        setIsFocusedPassword(false);
        setIsOpenKeyboard(false);
        break;
      default:
        break;
    }
  };

   const onLogin = () => {
     Alert.alert("Credentials", ` Email: ${email}, Password: ${password}`);
   };

  return (
    <KeyboardAvoidingView
      style={styles.wrapper}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <View
          style={{
            ...styles.formWrapper,
            paddingBottom: isOpenKeyboard ? 10 : 111,
            height: isOpenKeyboard ? 270 : "auto",
          }}
        >
          <View style={styles.form}>
            <Text style={styles.title}>Увійти</Text>
            <TextInput
              style={[styles.input, isFocusedEmail && styles.inputFocused]}
              value={email}
              onChangeText={setEmail}
              onFocus={() => handleFocus("email")}
              onBlur={() => handleBlur("email")}
              placeholder="Адреса електронної пошти"
            ></TextInput>
            <View
              style={[
                styles.passwordInputContainer,
                isFocusedPassword && styles.inputFocused,
              ]}
            >
              <TextInput
                style={styles.passwordInput}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={secureTextEntry}
                onFocus={() => handleFocus("password")}
                onBlur={() => handleBlur("password")}
                placeholder="Пароль"
              />
              <TouchableOpacity
                style={styles.showPasswordButton}
                onPress={togglePassword}
              >
                <Text style={styles.showPasswordButtonText}>
                  {secureTextEntry ? "Показати" : "Сховати"}
                </Text>
              </TouchableOpacity>
            </View>

            <Pressable style={styles.button} onPress={onLogin}>
              <Text style={styles.buttonText}>Увійти</Text>
            </Pressable>
            <Text style={styles.text}>Немає акаунту? Зареєструватись</Text>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  formWrapper: {
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "white",
    width: "100%",
    position: "absolute",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },

  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },

  form: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#fff",
  },
  title: {
    marginTop: 32,
    marginBottom: 33,
    fontSize: 30,
    fontWeight: 600,
    color: "#212121",
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
  input: {
    height: 50,
    marginBottom: 16,
    marginLeft: 16,
    marginRight: 16,

    borderWidth: 2,
    borderColor: "#E8E8E8",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#F6F6F6",
  },
  inputFocused: {
    borderColor: "orange",
  },
  passwordInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 50,
    borderWidth: 2,
    marginLeft: 16,
    marginRight: 16,
    borderColor: "#E8E8E8",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#F6F6F6",
  },
  passwordInput: {
    height: 50,
    flex: 1,
    borderWidth: 0,
  },
  showPasswordButton: {
    marginLeft: 10,
  },
  showPasswordButtonText: {
    color: "#1B4371",
    fontSize: 16,
  },
  text: {
    marginTop: 16,
    fontSize: 16,
    color: "#1B4371",
    textAlign: "center",
  },
  button: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 43,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 100,
    elevation: 3,
    backgroundColor: "#FF6C00",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
