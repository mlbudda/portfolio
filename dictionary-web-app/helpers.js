import { dataParser } from "./dataParser.js";
import FetchWrapper from "./fetch-wrapper.js";

export const changeFont = () => {
  const selectFont = document.querySelector("#font-select-btn");
  const dropdown = document.querySelector("#dropdown-wrapper");
  const dropdownList = document.querySelector("#font-selection-list");
  const listOfOptions = document.querySelectorAll("#font-selection-list > li");
  const body = document.body;

  const fontHandler = (font) => {
    document.body.className = "";
    if (font === "Sans Serif") {
      document.body.classList.add("font--sans-serif");
    } else if (font === "Sans") {
      document.body.classList.add("font--serif");
    } else if (font === "Mono") {
      document.body.classList.add("font--mono");
    }
  };

  const selectOption = (event) => {
    selectFont.textContent = event.currentTarget.innerText;
    fontHandler(event.currentTarget.innerText);
  };

  const closeDropdownFromOutside = () => {
    if (dropdownList.classList.contains("show")) {
      dropdownList.classList.remove("show");
    }
  };

  const toggleFont = (event) => {
    event.stopPropagation();
    dropdown.querySelector("#font-selection-list").classList.toggle("show");
  };

  listOfOptions.forEach((option) => {
    option.addEventListener("click", selectOption);
  });

  dropdown.addEventListener("click", toggleFont);
  body.addEventListener("click", closeDropdownFromOutside);
  fontHandler("Sans Serif");
  selectFont.textContent = "Sans Serif";
};

export const changeTheme = () => {
  const btn = document.querySelector("#change-theme-btn");

  const handleTheme = () => {
    document.documentElement.classList.toggle("dark-theme");
    btn.querySelector("span.slider").classList.toggle("checked");
  };

  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    handleTheme();
  }

  btn.addEventListener("click", () => handleTheme());
};

export const handleUserInput = (baseUrl) => {
  clearErrorMsg();

  const searchForm = document.querySelector("#search-form");

  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const userInput = document.querySelector("#user-input");

    if (userInput.value !== "") {
      queryData(baseUrl, userInput.value);
    } else {
      userInput.setAttribute("required", "required");
      document.querySelector("#user-input-err").classList.add("show");
    }
  });
};

export const queryData = (baseUrl, userInput) => {
  const loaderElement = document.querySelector("#loading-spinner");
  const input = document.querySelector("#user-input");
  input.value = userInput;

  const API = new FetchWrapper(baseUrl);

  API.startLoader(loaderElement);
  API.get(userInput)
    .then((data) => {
      dataParser(data);
    })
    .catch((err) => console.error(err))
    .finally(() => {
      API.stopLoader(loaderElement);
    });
};

const clearErrorMsg = () => {
  const userInput = document.querySelector("#user-input");
  const userInputError = document.querySelector("#user-input-err");
  userInput.addEventListener("blur", () => {
    userInput.removeAttribute("required");
    if (userInputError.classList.contains("show")) {
      userInputError.classList.remove("show");
    }
  });

  userInput.addEventListener("keyup", (event) => {
    const value = event.currentTarget.value;
    if (value !== "") {
      userInputError.classList.remove("show");
    }
  });
};
