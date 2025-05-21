document.addEventListener("DOMContentLoaded", () => {
    const GITHUB_USERNAME = "MKtheGhost"; 

    initializeGithubProjects();

});


function initializeGithubProjects () {

  fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`)
    .then(res => res.json())
    .then(repos => {
      const container = document.getElementById("github_repo");

      repos
        .filter(repo => !repo.fork) // optional: hide forks
        .forEach(repo => {
          const card = document.createElement("div");
          card.className = "github_repo";
          card.innerHTML = `
            <h2>${repo.name}</h2>
            <p>${repo.description || "No description available."}</p>
            <a href="${repo.html_url}" target="_blank">🔗 View on GitHub</a>
          `;
          container.appendChild(card);
        });
    })
    .catch(err => console.error("GitHub API error:", err));

}