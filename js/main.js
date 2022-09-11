const url = "https://api.github.com/users/croesym/repos";
const repos = document.querySelector('.projetos');
const maxlength = 120;
const reposmaxl = document.getElementById
//consumir api do github em divs

fetch(url)
    .then(response => response.json())
    .then(data => {
        data.forEach(repo => {
            repos.innerHTML += `
            <div class="item" id="shadow">
                <a href="${repo.html_url}" id="repo-tittle"><img src="assets/folder.svg" alt="">${repo.name}</a>
                <p max>${repo.description}</p>
                <div class="align-icons">
                    <h2><img src="assets/star.svg" alt="">${repo.stargazers_count}</h2>
                    <h2><img src="assets/git-branch.svg" alt="">${repo.forks_count}</h2>
                    <h3 class="align-right">${repo.language}</h3>
                </div>
            </div>`;
        });
    });


   