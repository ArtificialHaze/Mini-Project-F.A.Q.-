// VARIABLES

const tabLinks = document.getElementsByClassName("tabs__tab--link");
const allContent = document.querySelectorAll(".tabs__tab--content");

// FUNCTIONS

for (let i = 0; i < tabLinks.length; i++) {
  tabLinks[i].addEventListener("click", (e) => {
    let currentTab = document.getElementsByClassName("active");
    currentTab[0].classList.replace(" active", "");
    this.className += " active";
    const filterElement = e.target.dataset.filter;

    allContent.forEach((content) => {
      if (content.classList.contains(filterElement)) {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    });
  });
}

// EVENT LISTENER
