import { about as data} from './data/aboutdata.js';

document.addEventListener("DOMContentLoaded", () => {
    console.log("Page loaded!");

    const grid = document.getElementById("infoGrid");
    const searchInput = document.getElementById("searchInput");
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDetails = document.getElementById("modalDetails");
    const modalClose = document.getElementById("modalClose");

    function renderCards(filter = "") {
      grid.innerHTML = "";
      data.filter(box =>
        box.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase()))
      ).forEach(box => {
        const card = document.createElement("div");
        card.className = "card";
        card.textContent = box.title;
        card.onclick = () => {
          modalTitle.textContent = box.title;
          modalDetails.textContent = box.details;
          modal.style.display = "flex";
        };
        grid.appendChild(card);
      });
    }

    searchInput.addEventListener("input", (e) => renderCards(e.target.value));
    modalClose.onclick = () => modal.style.display = "none";
    window.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; };
    renderCards();

});