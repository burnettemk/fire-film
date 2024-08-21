const width = 342;

const getCroppedImageUrl = (url: string, w = width) => {
  const target = "p/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + `w${w}` + url.slice(index);
};

export default getCroppedImageUrl;
