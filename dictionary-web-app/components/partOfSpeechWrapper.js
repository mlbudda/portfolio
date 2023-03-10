export const partOfSpeechWrapper = (data) => {
  let result = "";
  data.forEach((item) => {
    result += `
    <div class="word-meanings">
    <div class="part-of-speech-wrapper">
      <h2 class="heading--md part-of-speech">${item.partOfSpeech}</h2>
      <div class="part-of-speech-line"></div>
    </div>
    <h3 class="heading--sm meaning">${showTitle(
      definitionsListItem(item.definitions),
      "Meaning"
    )}</h3>
    <ul class="definitions">
        ${definitionsListItem(item.definitions)}
    </ul>
    <div class="synonyms-wrapper">
      <h3 class="heading--sm synonyms-title">${showTitle(
        synonymsListItem(item.synonyms),
        "Synonyms"
      )}</h3>
      <ul class="synonyms-list">
      ${synonymsListItem(item.synonyms)}
      </ul>
    </div>
  </div>
    `;
  });
  return result;
};

const definitionsListItem = (data) => {
  let result = "";
  data.forEach((item) => {
    result += `<li class="text--md">${item.definition}</li>`;
  });
  return result;
};

const synonymsListItem = (data) => {
  let result = "";
  data.forEach((item) => {
    result += `<li class="heading--sm synonyms"><a href="#${item}" class="btn">${item}</a></li>`;
  });
  return result;
};

const showTitle = (data, title) => {
  return data ? title : "";
};
