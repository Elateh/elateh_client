import AsyncStorage from "@react-native-async-storage/async-storage";

const setUserData = async (username, email, password) => {
  try {
    const userData = {
      username,
      email,
      password,
    };

    // Сериализуем данные в формат JSON
    const userDataJson = JSON.stringify(userData);

    // Сохраняем данные в AsyncStorage
    await AsyncStorage.setItem("userData", userDataJson);

    console.log("Данные пользователя успешно сохранены.");
  } catch (error) {
    console.log("Ошибка при сохранении данных пользователя:", error);
  }
};
export default setUserData;
