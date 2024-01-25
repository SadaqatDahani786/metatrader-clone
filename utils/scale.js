import { scaleHorizontal } from "./scaleHorizontal";

/**
 ** ======================================================
 ** Function [scale]
 ** ======================================================
 */
//Scale based on screen width + factor
export const scale = (size, factor = 0.5) => {
  return size + (scaleHorizontal(size) - size) * factor;
};

export default scale;
