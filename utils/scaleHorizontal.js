import { Dimensions } from "react-native";

/**
 ** ======================================================
 ** Function [scaleHorizontal]
 ** ======================================================
 */
//Scale the number based on screen width
export const scaleHorizontal = (size) => {
  //1) Screen width
  const { width } = Dimensions.get("window");

  //2) Standard ~5" screen mobile device
  const guidelineBaseWidth = 350;

  //3) Return new scaled value
  return (width / guidelineBaseWidth) * size;
};

export default scaleHorizontal;
