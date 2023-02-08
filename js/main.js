const repositories = document.querySelector(".projetos");
<<<<<<< HEAD
=======
const reposmaxl = document.getElementById('#repos');
>>>>>>> a8a3c55e445ef7365392e5edf8334424a0745425

function renderRepositories() {
  fetch(`https://api.github.com/users/croesym/repos`).then(async (res) => {
    if (!res.ok) {
      throw new Error("Erro ao buscar dados");
    }

    let data = await res.json();
    data.map((item) => {
      let project = document.createElement("div");
<<<<<<< HEAD
      let description = item.description || "";
      
      if (description.length > 120) {
        description = description.substring(0, 120) + "...";
      }
=======
>>>>>>> a8a3c55e445ef7365392e5edf8334424a0745425
      
      project.innerHTML += `
            <div class="item" id="shadow">
                <a href="${item.html_url}" id="repo-tittle"><img src="assets/folder.svg" alt="">${item.name}</a>
<<<<<<< HEAD
                <p max>${description}</p>
=======
                <p max>${item.description}</p>
>>>>>>> a8a3c55e445ef7365392e5edf8334424a0745425
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
<<<<<<< HEAD
renderRepositories();
=======
renderRepositories();
>>>>>>> a8a3c55e445ef7365392e5edf8334424a0745425
