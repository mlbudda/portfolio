import { changeFont, changeTheme, handleUserInput } from "./helpers.js";

export const baseUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const fonts = [
  {
    "Sans Serif": "font--sans-serif",
  },
  { Sans: "font--serif" },
  { Mono: "font--mono" },
];

const render = () => {
  changeFont(fonts);
  changeTheme();
  handleUserInput(baseUrl);
};

render();
