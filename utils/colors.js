import * as Vibrant from "node-vibrant";

export const getPalette = async (img) => {
  try {
    const palette = await Vibrant.from(`./public/img/${img}`).getPalette();
    return palette;
  } catch (e) {
    console.log(e);
    return null;
  }
};
