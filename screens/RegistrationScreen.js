import { SvgXml } from "react-native-svg";
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

const iconSvg = `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="12.5" cy="12.5" r="12" fill="white" stroke="#FF6C00"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M13 6H12V12H6V13H12V19H13V13H19V12H13V6Z" fill="#FF6C00"/>
</svg>`;

export default function RegistrationScreen() {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFocusedLogin, setIsFocusedLogin] = useState(false);
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [isOpenKeyboard, setIsOpenKeyboard] = useState(false);

  const togglePassword = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const handleFocus = (input) => {
    switch (input) {
      case "login":
        setIsFocusedLogin(true);
        setIsOpenKeyboard(true);
        break;
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
      case "login":
        setIsFocusedLogin(false);
        setIsOpenKeyboard(false);
        break;
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
  Alert.alert("Credentials", `Login: ${login},  Email: ${email}, Password: ${password}`);
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
            height: isOpenKeyboard ? 400 : "auto",
          }}
        >
          <View style={styles.form}>
            <View style={styles.userPhoto}>
              <TouchableOpacity style={styles.iconContainer}>
                <SvgXml xml={iconSvg} width={25} height={25} />
              </TouchableOpacity>
            </View>
            <Text style={styles.title}>Реєстрація</Text>
            <TextInput
              style={[styles.input, isFocusedLogin && styles.inputFocused]}
              value={login}
              onChangeText={setLogin}
              onFocus={() => handleFocus("login")}
              onBlur={() => handleBlur("login")}
              placeholder="Логін"
            ></TextInput>
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
              ></TextInput>
              <TouchableOpacity style={styles.showPasswordButton}>
                <Text
                  style={styles.showPasswordButtonText}
                  onPress={togglePassword}
                >
                  {secureTextEntry ? "Показати" : "Сховати"}
                </Text>
              </TouchableOpacity>
            </View>

            <Pressable style={styles.button} onPress={onLogin}>
              <Text style={styles.buttonText}>Зареєструватися</Text>
            </Pressable>
            <Text style={styles.text}>Вже є акаунт? Увійти</Text>
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
    marginTop: 92,
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
  userPhoto: {
    position: "absolute",
    top: -90,
    left: "50%",
    transform: [{ translateX: -60 }],
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  iconContainer: {
    position: "absolute",
    bottom: 12.5,
    right: 0,
    transform: [{ translateX: 12.5 }],
  },
});
