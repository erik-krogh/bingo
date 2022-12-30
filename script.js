$(function () {
  const options = [
    "Grænse",
    "Ukraine",
    "Rusland",
    "Krig",
    "usikker",
    "Prins Joachim",
    "Konprinsesse Mary",
    "Konprinsen",
    "Prins Christian",
    "Grønland",
    "Søens folk",
    "Klima",
    "Færøerne",
    "Grønland",
    "Inflation",
    "Krise",
    "Energikrise",
    "<i>Papirene er klipset sammen</i>",
    "<i>Bladre tilbage i papirerne</i>",
    "Kongeskibet",
    "Dronning Elisabeth",
    "Kongehuset",
    "Omikron",
    "Sygdom",
    "Corona",
    "Vacciner",
    "Fodbold",
    "Menneskerettigheder",
    "Miljø",
    "Familien",
    "Økonomi",
    "Uddannelse",
    "Kultur",
    "Grænse",
    "Mangfoldighed",
    "Klimaforandringer",
    "Terrorisme",
    "Militær",
    "Politiet",
    "Solidaritet",
    "Demokrati",
    "Naturkatastrofer",
    "Ulighed",
    "Dagligdagen",
    "Tak",
    "Frygt",
    "Tour de France",
    "Det tyske mindretal i Danmark",
    "Det danske mindretal i Tyskland",
    "Sammenhold"
  ];

  function renderItems() {
    // 24 items from the above, and the middle (item 13), is always "Gud bevare Danmark"
    const items = options
      .slice()
      .sort(() => Math.random() - 0.5)
      .slice(0, 25);
    items[12] = "Gud bevare Danmark";

    // clean old items
    $(".bingo-card").empty();

    // render new items
    items.forEach((item, index) => {
      $(".bingo-card").append(`
        <div class="item">${item}</div>
        `);
    });

    // using "touchstart" and "click", to make it instant on mobile
    $(".item").on("click", function (e) {
      $(this).toggleClass("active");
    });
  }

  renderItems();

  $(".clear-button").on("click", function () {
    renderItems();
  });
});
