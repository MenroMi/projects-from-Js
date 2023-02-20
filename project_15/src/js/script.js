function readMoreBtn() {
  const parents = document.querySelectorAll(".card__features"),
    cards = document.querySelectorAll(".card");
  parents.forEach((parent, i) =>
    parent.addEventListener("click", (e) => {
      let features;
      const target = e.target;

      if (target.tagName === "BUTTON" && target.closest(`#${cards[i].id}`)) {
        features = parent.children;
        for (let i = 0; i < features.length; i++) {
          if (i > 3 && features[i].textContent !== "More...") {
            features[i].classList.toggle("card__feature_active");
          }
        }
      }
    })
  );
}

readMoreBtn();

function slider() {}
