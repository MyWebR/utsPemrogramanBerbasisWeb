document.getElementById("darkMode").onclick = function () {
  // body
  const body = document.body;
  if (body.classList.contains("bg-dark")) {
    body.classList.remove("bg-dark");
    body.classList.add("bg-white");
  } else {
    body.classList.remove("bg-white");
    body.classList.add("bg-dark");
  }

  // NAVIGASI
  const nav = document.getElementsByClassName("navbar");
  for (let i = 0; i < nav.length; i++) {
    if (nav[i].classList.contains("bg-light-nav")) {
      nav[i].classList.remove("bg-light-nav");
      nav[i].classList.add("bg-black-nav");
    } else {
      nav[i].classList.add("bg-light-nav");
      nav[i].classList.remove("bg-black-nav");
    }
  }

  const from = document.getElementsByClassName("form-control");
  for (let i = 0; i < from.length; i++) {
    if (from[i].classList.contains("bg-white")) {
      from[i].classList.remove("bg-white");
      from[i].classList.add("bg-dark");
      from[i].classList.remove("text-black");
      from[i].classList.add("text-white");
    } else {
      from[i].classList.add("bg-white");
      from[i].classList.remove("bg-dark");
      from[i].classList.add("text-black");
      from[i].classList.remove("text-white");
    }
  }

  const collection = document.getElementsByClassName("nav-link");
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].classList.contains("text-dark")) {
      collection[i].classList.remove("text-dark");
      collection[i].classList.add("text-white");
    } else {
      collection[i].classList.remove("text-white");
      collection[i].classList.add("text-dark");
    }
  }

  // JUDUL WEBSITE
  const TitWeb = document.getElementsByClassName("text-hero");
  for (let i = 0; i < TitWeb.length; i++) {
    if (TitWeb[i].classList.contains("text-dark")) {
      TitWeb[i].classList.remove("text-dark");
      TitWeb[i].classList.add("text-light");
    } else {
      TitWeb[i].classList.remove("text-light");
      TitWeb[i].classList.add("text-dark");
    }
  }

  const hoverBg = document.getElementsByClassName("shadow-custom");
  for (let i = 0; i < hoverBg.length; i++) {
    if (hoverBg[i].classList.contains("hover-shadow-custom-dark")) {
      hoverBg[i].classList.remove("hover-shadow-custom-dark");
      hoverBg[i].classList.add("hover-shadow-custom-light");
    } else {
      hoverBg[i].classList.remove("hover-shadow-custom-light");
      hoverBg[i].classList.add("hover-shadow-custom-dark");
    }
  }

  // GALLERY
  const gallery = document.getElementById("gallery");
  if (gallery.classList.contains("bg-dark")) {
    gallery.classList.remove("bg-dark");
    gallery.classList.add("bg-hitam");
  } else {
    gallery.classList.remove("bg-hitam");
    gallery.classList.add("bg-dark");
  }

  const textGallery = document.getElementsByClassName("text-gallery");
  for (let i = 0; i < textGallery.length; i++) {
    if (textGallery[i].classList.contains("text-dark")) {
      textGallery[i].classList.remove("text-dark");
      textGallery[i].classList.add("text-white");
    } else {
      textGallery[i].classList.remove("text-white");
      textGallery[i].classList.add("text-dark");
    }
  }

  // CARD GALLERY
  const cardGallery = document.querySelectorAll(
    "#mie-ayam, #mie-ayam-jamur, #mie-ayam-bakso, #mie-ayam-pangsit, #mie-ayam-ceker, #mie-ayam-bakso-mercon"
  );
  cardGallery.forEach((card) => {
    if (card.classList.contains("bg-card")) {
      card.classList.remove("bg-card");
      card.classList.add("bg-white");
      card.classList.remove("text-white");
      card.classList.add("text-dark");
    } else {
      card.classList.remove("bg-white");
      card.classList.add("bg-card");
      card.classList.remove("text-dark");
      card.classList.add("text-white");
    }
  });

  const titleCard = document.getElementsByClassName("title-card");
  for (let i = 0; i < titleCard.length; i++) {
    if (titleCard[i].classList.contains("border-black")) {
      titleCard[i].classList.remove("border-black");
      titleCard[i].classList.add("border-white");
    } else {
      titleCard[i].classList.remove("border-white");
      titleCard[i].classList.add("border-black");
    }
  }
};
