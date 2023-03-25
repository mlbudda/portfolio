export default class FetchWrapper {
  startLoader(element) {
    element.classList.add("show");
  }

  stopLoader(element) {
    element.classList.remove("show");
  }
}
