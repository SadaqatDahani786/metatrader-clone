import { Dimensions } from "react-native";

/**
 ** ======================================================
 ** Function [scaleVertical]
 ** ======================================================
 */
//Scale based on height
export const scaleVertical = (size) => {
  //1) Screen height
  const { height } = Dimensions.get("window");

  //2) Standard ~5" screen mobilel device
  const guidelineBaseHeight = 680;

  //3) Return new scale value
  return (height / guidelineBaseHeight) * size;
};

export default scaleVertical;
