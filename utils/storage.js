import AsyncStorage from "@react-native-async-storage/async-storage";


const set = async (
  key,
  value
) => {
  try {
    if (printLog) {
      console.log("saving in", key);
    }
    await AsyncStorage.setItem(key, JSON.stringify(value), callback);
    return true;
  } catch (error) {
    console.log("error saving in", key, "value", value, error);
    return false;
  }
};

const get = async (key, callback) => {
  try {
    const value = await AsyncStorage.getItem(key, callback);
    if (value) {
      try {
        return JSON.parse(value);
      } catch (error) {
        return value;
      }
    }
    return value;
  } catch (error) {
    console.log("error getting", key, error);
    return null;
  }
};

const remove = async (key, callback) => {
  try {
    await AsyncStorage.removeItem(key, callback);
    return true;
  } catch (error) {
    console.log("error deleting key", key, error);
    return false;
  }
};

const Storage = {
  get,
  remove,
  set,
};

export default Storage;
