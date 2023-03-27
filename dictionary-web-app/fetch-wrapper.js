export default class FetchWrapper {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  get(word) {
    return fetch(`${this.baseUrl}${word}`).then((res) => res.json());
  }

  startLoader(element) {
    element.classList.add("show");
  }

  stopLoader(element) {
    element.classList.remove("show");
  }
}
