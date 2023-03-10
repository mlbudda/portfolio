import { changeFont, changeTheme, handleUserInput } from "./helpers.js";

export const baseUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const render = () => {
  changeFont();
  changeTheme();
  handleUserInput(baseUrl);
};

render();
