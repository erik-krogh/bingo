$(function () {
  const options = [
    "<i>Bladrer tilbage i papirerne</i>",
    "<i>Papirene er klipset sammen</i>",
    "Corona",
    "Dagligdagen",
    "Demokrati",
    "Det danske mindretal i Tyskland",
    "Det tyske mindretal i Danmark",
    "Dronning Elisabeth",
    "Energikrise",
    "Familien",
    "Fodbold",
    "Frygt",
    "Færøerne",
    "Grænse",
    "Grønland",
    "Inflation",
    "Klima",
    "Klimaforandringer",
    "Kongehuset",
    "Kongeskibet",
    "Krig",
    "Krise",
    "Kronprinsen",
    "Kronprinsesse Mary",
    "Kultur",
    "Mangfoldighed",
    "Menneskerettigheder",
    "Militær",
    "Miljø",
    "Naturkatastrofer",
    "Omikron",
    "Politiet",
    "Prins Christian",
    "Prins Joachim",
    "Rusland",
    "Sammenhold",
    "Solidaritet",
    "Sygdom",
    "Søens folk",
    "Tak",
    "Terrorisme",
    "Tour de France",
    "Uddannelse",
    "Ukraine",
    "Ulighed",
    "Usikker",
    "Vacciner",
    "Økonomi",
  ];

  // console.log(options.sort().map(o => "\"" + o + "\",").join("\n"));

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
