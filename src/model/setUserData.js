import AsyncStorage from "@react-native-async-storage/async-storage";

const setUserData = async (username, email, password) => {
  try {
    const userData = {
      username,
      email,
      password,
    };

    const userDataJson = JSON.stringify(userData);

    await AsyncStorage.setItem("userData", userDataJson);

    console.log("Дані користувача успішно збережені.");
  } catch (error) {
    console.log("Помилка збереження даних користувача:", error);
  }
};
export default setUserData;
