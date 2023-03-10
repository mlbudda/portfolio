import { partOfSpeechWrapper } from "./partOfSpeechWrapper.js";

export const resultsWrapper = (data) => {
  return `<div id="results-header" class="results-header">
    <div>
      <h1 id="word" class="heading--lg">${data.word}</h1>
      <h2 id="phonetic" class="heading--md phonetic">${data.phonetic || ""}</h2>
    </div>
  </div>
  ${partOfSpeechWrapper(data.meanings)}
  <div class="part-of-speech-line last"></div>
  <div class="source-url text--sm"><p>Source</p><a href="${
    data.sourceUrls
  }" target="_blank" rel="noopener noreferrer">${
    data.sourceUrls
  }<span><img src="./assets/images/icon-new-window.svg" alt=""></span></a></div>
  `;
};
