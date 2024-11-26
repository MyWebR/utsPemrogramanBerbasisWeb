document
  .getElementById("searchForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const keyword = document.getElementById("searchInput").value.toLowerCase();
    const contentElements = document.querySelectorAll(
      "#mie-ayam, #mie-ayam-jamur, #mie-ayam-bakso, #mie-ayam-pangsit, #mie-ayam-ceker, #mie-ayam-bakso-mercon"
    );

    let found = false;

    contentElements.forEach((element) => {
      const text = element.textContent.toLowerCase();
      if (text.includes(keyword)) {
        element.style.backgroundColor = "yellow";
        found = true;

        element.scrollIntoView({ behavior: "smooth", block: "center" });
      } else {
        element.style.backgroundColor = "";
      }
    });

    if (!found) {
      alert("Konten tidak ditemukan!");
    }
  });
