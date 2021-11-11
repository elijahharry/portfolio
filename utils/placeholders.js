import { getPlaiceholder } from "plaiceholder";

export const generatePlaceholders = async (images) => {
  const finishedImages = [];
  for (const image of images) {
    try {
      const { base64, css } = await getPlaiceholder(`/img/${image.src}`);
      finishedImages.push({ ...image, blur: base64, css: css });
    } catch (e) {
      console.log(e);
      finishedImages.push(image);
    }
  }
  return finishedImages;
};
