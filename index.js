const dir = window.location.href;
const repoContent = await github.rest.repos.getContent({
  owner: "repo-owner",
  repo: "repo-name",
});
const list = document.querySelector("#solution-list");

console.log(dir);
console.log(repoContent);
