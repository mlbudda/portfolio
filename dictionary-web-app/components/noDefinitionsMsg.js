export const noDefinitionsMsg = (data) => {
  return `<p>😕</p>
    <h2 class="heading--sm-bold">${data.title}</h2>
    <p class="text--md">${data.message} ${data.resolution}</p>`;
};
