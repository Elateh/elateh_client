import AsyncStorage from "@react-native-async-storage/async-storage";
const removeUserData = async () => {
  try {
    // Удаляем данные из AsyncStorage по ключу "userData"
    await AsyncStorage.removeItem("userData");
    console.log("Данные пользователя успешно удалены.");
  } catch (error) {
    console.log("Ошибка при удалении данных пользователя:", error);
  }
};
export default removeUserData;
