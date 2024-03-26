// Get and return data of current user preferences
// Or set user preferences
const useUserPrefs = () => {
  const chakraTheme = localStorage.getItem("chakra-ui-color-mode");
  return chakraTheme;
};

export default useUserPrefs;
