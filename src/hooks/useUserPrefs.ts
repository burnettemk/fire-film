// Get and return data of current user preferences
// Or set user preferences
const useUserPrefs = () => {
  const chakraTheme = localStorage.getItem("chakra-ui-color-mode");
  return chakraTheme;
};

export const useSetUserPrefs = (id: number, path: string, type: string) => {
  // const item = localStorage.getItem("marked content");
  // item;

  const contentObject = {
    contentID: id,
    contentPosterPath: path,
    contentType: type,
  };

  localStorage.setItem("marked content", JSON.stringify(contentObject));
};

export const useGetUserPrefs = () => {
  return localStorage.getItem("marked content");
};

export default useUserPrefs;
