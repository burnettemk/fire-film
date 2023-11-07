const width = 400;

const getCroppedImageUrl = (url: string) => {
  const target = 'p/';  
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + `w${width}` + url.slice(index);
}

export default getCroppedImageUrl;