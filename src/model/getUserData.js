import AsyncStorage from "@react-native-async-storage/async-storage";

const getUserData = async () => {
  try {
    const userDataJson = await AsyncStorage.getItem("userData");

    if (userDataJson !== null) {
      const userData = JSON.parse(userDataJson);

      console.log("Данные пользователя:", userData);
      return userData;
    } else {
      console.log("Данные пользователя не найдены.");
      return null;
    }
  } catch (error) {
    console.log("Ошибка при получении данных пользователя:", error);
    return null;
  }
};

export default getUserData;
