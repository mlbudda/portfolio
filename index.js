const list = document.querySelector("#solution-list");

const baseUrl = "https://api.github.com";
const endPoint = "/repos/mlbudda/portfolio/contents/";

fetch(baseUrl + endPoint)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    const allDir = data.filter((item) => item.type === "dir");
    allDir.forEach((element) => {
      list.insertAdjacentHTML(
        "beforeend",
        `
      <li>
        <h2>${element.name}</h2>
        <a href="https://github.com/mlbudda/portfolio/tree/master/${element.path}" target="_blank" rel="noopener noreferrer">Repo</a>
        <a href="https://mlbudda.github.io/portfolio/${element.path}" target="_blank" rel="noopener noreferrer">Live</a>
      </li>`
      );
    });
  });
