scaleCertificates();
readMoreBtn();
slider();

function readMoreBtn(trans = false) {
  const parents = document.querySelectorAll(".card__features"),
    cards = document.querySelectorAll(".card");

  //   let transition = trans;

  parents.forEach((parent, i) => {
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
    });
  });
}

// Slider

function changeElements(elems, nameClass, arrayOffset) {
  const [from, to] = arrayOffset;
  elems.forEach((elem, i) =>
    i >= from && i <= to
      ? elem.classList.add(nameClass)
      : elem.classList.remove(nameClass)
  );
}

function slider() {
  let cardBox = document.querySelector(".cards");
  const cardList = document.querySelectorAll(".card");
  const arrowPrev = document.querySelector(".slider-arrow_prev"),
    arrowNext = document.querySelector(".slider-arrow_next");
  let elementsOnPage = 3,
    pages = Math.ceil(cardList.length / elementsOnPage),
    actualPage = 1,
    to = elementsOnPage - 1,
    from = to - elementsOnPage < 0 ? 0 : to - elementsOnPage;
  const onFlexCards = (parent, cards) => {
    let count = 0;
    cards.forEach((card) => {
      card.classList.contains("card_active") ? count++ : null;
    });

    return count < 3
      ? (parent.style.justifyContent = "flex-start")
      : (parent.style.justifyContent = "");
  };

  changeElements(cardList, "card_active", [from, to]);

  arrowPrev.addEventListener("click", () => {
    if (actualPage <= 1) return (actualPage = 1);
    if (from < 3) return (from = 0);

    actualPage--;
    from -= elementsOnPage;
    to -= elementsOnPage;
    changeElements(cardList, "card_active", [from, to]);
    onFlexCards(cardBox, cardList);
    readMoreBtn(true);
  });

  arrowNext.addEventListener("click", () => {
    if (actualPage >= pages) return pages;
    if (to >= cardList.length) return (to = cardList.length);

    actualPage++;
    to += elementsOnPage;
    from += elementsOnPage;
    changeElements(cardList, "card_active", [from, to]);
    onFlexCards(cardBox, cardList);
    readMoreBtn(true);
  });
}

// scale certificates

function scaleCertificates() {
  const certificateParent = document.querySelector(".list-certificates");
  const modalImage = document.querySelector("#modal-image");
  const chosenImage = document.querySelector("#image");

  certificateParent.addEventListener("click", (e) => {
    const target = e.target;
    if (
      target.tagName === "IMG" &&
      certificateParent.closest(`.${certificateParent.className}`)
    ) {
      modalImage.style.display = "block";
      chosenImage.src = target.src;
    }
  });

  modalImage.addEventListener("click", (e) => {
    const target = e.target;

    if (target.closest(`#${modalImage.id}`)) {
      modalImage.style.display = "none";
      chosenImage.src = "";
    }
  });
}
