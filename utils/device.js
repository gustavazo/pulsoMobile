import {
  Dimensions,
  Linking,
  NativeModules,
  PixelRatio,
  Platform,
} from "react-native";

const { width, height } = Dimensions.get("window");

export const deviceSize = { height, width };

export const deviceSizeScale = width / 375 < 1 ? 1 : width / 375;

/* If is an ios device */
export const isIOS = Platform.OS === "ios";

/* If is an android device */
export const isAndroid = Platform.OS === "android";

/* If is an iPhoneX device */
export const isIPhoneX = () => {
  // Const hasNotch = isIOS &&  StatusBar.currentHeight > 24; test

  // React-native-extra-dimensions-android
  return (
    Platform.OS === "ios" &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (height === 812 || width === 812 || height === 896 || width === 896)
  );
};

export const isSmall = width < 370;
// Width 320 568

/* Get pixel density */
export const pixelDensity = PixelRatio.get();
// Small screen is an 4" android or an iPhone SE or similar
export const isSmallScreen = pixelDensity < (isIOS ? 2.1 : 2);

/* Get font scale */
export const FontScale = PixelRatio.getFontScale();
