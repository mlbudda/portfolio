import { titleSplitter } from "./helpers.js";

const list = document.querySelector("#solution-list");

const baseUrl = "https://api.github.com";
const endPoint = "/repos/mlbudda/portfolio/contents/";

fetch(baseUrl + endPoint)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    const allDir = data.filter((item) => item.type === "dir");
    allDir.forEach((element) => {
      console.log(element.html_url + "/screenshot.png");
      list.insertAdjacentHTML(
        "beforeend",
        `
        <div>
        <li class="solution-list-item">
        <div class="img-wrapper">
        <img
          src="https://mlbudda.github.io/${element.path}/screenshot.png"
          width="300"
          alt=""
          class="solution-screenshot"
        />
<a href="https://mlbudda.github.io/portfolio/${
          element.path
        }" class="img-overlay" target="_blank" rel="noopener noreferrer">
        <span class="sr-only">Live</span>
        </a>
      </div>
  <h2>${titleSplitter(element.name)}</h2>
  <a href="https://github.com/mlbudda/portfolio/tree/master/${
    element.path
  }" target="_blank" rel="noopener noreferrer" class="repo-btn">Repo</a>
</li>
        </div>
      `
      );
    });
  });
