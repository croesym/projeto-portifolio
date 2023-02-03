const repositories = document.querySelector(".projetos");
const reposmaxl = document.getElementById('#repos');

function renderRepositories() {
  fetch(`https://api.github.com/users/croesym/repos`).then(async (res) => {
    if (!res.ok) {
      throw new Error("Erro ao buscar dados");
    }

    let data = await res.json();
    data.map((item) => {
      let project = document.createElement("div");
      
      project.innerHTML += `
            <div class="item" id="shadow">
                <a href="${item.html_url}" id="repo-tittle"><img src="assets/folder.svg" alt="">${item.name}</a>
                <p max>${item.description}</p>
                <div class="align-icons">
                    <h2><img src="assets/star.svg" alt="">${item.stargazers_count}</h2>
                    <h2><img src="assets/git-branch.svg" alt="">${item.forks_count}</h2>
                    <h3 class="align-right">${item.language}</h3>
                </div>
            </div>`;
      repositories.appendChild(project);
    });
  });
}
renderRepositories();
