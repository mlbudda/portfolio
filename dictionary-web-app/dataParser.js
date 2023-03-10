import { noDefinitionsMsg } from "./components/noDefinitionsMsg.js";
import { resultsWrapper } from "./components/resultsWrapper.js";
import { playBtn } from "./components/playBtn.js";
import { queryData } from "./helpers.js";
import { baseUrl } from "./index.js";

export const dataParser = (data) => {
  const noDefinitionwrapper = document.querySelector("#no-definition-wrappper");
  const resultContainer = document.querySelector("#results-container");

  if (data.title && data.message) {
    resultContainer.innerHTML = "";
    noDefinitionwrapper.innerHTML = noDefinitionsMsg(data);
  } else {
    noDefinitionwrapper.innerHTML = "";
    resultContainer.innerHTML = resultsWrapper(data[0]);

    const phoneticUrl = phoneticFileFinder(data[0]);
    if (phoneticUrl) {
      const resultsHeader = document.querySelector("#results-header");

      resultsHeader.insertAdjacentHTML("beforeend", playBtn(phoneticUrl));
      document
        .querySelector("#play-audio-btn")
        .addEventListener("click", () => {
          document.querySelector("#phonetic-audio").play();
        });
    }

    const synonymsList = document.querySelectorAll("li.synonyms a");
    const selectSynonim = (event) => {
      queryData(baseUrl, event.currentTarget.textContent);
    };
    synonymsList.forEach((synonym) => {
      synonym.addEventListener("click", selectSynonim);
    });
  }
};

const phoneticFileFinder = (data) => {
  return data.phonetics.find((el) => el.audio !== "")?.audio;
};
