import AsyncStorage from "@react-native-async-storage/async-storage";
const removeUserData = async () => {
  try {
    await AsyncStorage.removeItem("userData");
    console.log("Дані користувача були успішно видалені.");
  } catch (error) {
    console.log("Помилка при видаленні даних користувача:", error);
  }
};
export default removeUserData;
